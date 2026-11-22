// City-specific, data-driven content generator.
//
// Produces unique, human-sounding paragraphs per (city, fuel) using ONLY real
// numbers already fetched from the database: today's price, today's change,
// the 30-day high/low, and how the city compares with its nearest neighbours.
//
// Output is seeded by `slug + fuel`, so every page is deterministic (no drift
// across rebuilds) yet reads differently from every other page. Sentence
// pools and varied structure mean no two pages share the same wording.

export type PriceRow = {
  city_id: number;
  city_name: string;
  state_name: string;
  petrol_price?: number | null;
  diesel_price?: number | null;
  autogas_price?: number | null;
  cng_price?: number | null;
  price_change?: number | null;
  diesel_change?: number | null;
  autogas_change?: number | null;
  cng_change?: number | null;
  scraped_at: string;
  date: string;
};

export type InsightRow = PriceRow;

export type InsightContext = {
  cityName: string;
  stateName: string;
  fuel: string; // 'petrol' | 'diesel' | 'cng' | 'autogas'
  fuelLabel: string; // 'Petrol' | 'Diesel' | 'CNG' | 'AutoGas'
  priceKey: string; // e.g. 'petrol_price'
  changeKey: string; // e.g. 'price_change'
  unitLabel: string; // 'per litre' | 'per kg'
  unitShort?: string; // '/L' | '/kg'
  tankWord?: string; // '40-litre tank' | '10-kg cylinder'
  tankSize?: number; // 40 | 10
  latest?: InsightRow | null;
  yesterday?: InsightRow | null;
  history: InsightRow[];
  nearby: Array<Record<string, number | string | null> & { city_name: string }>;
};

export type InsightSection = {
  heading: string;
  paragraphs: string[];
};

/* ---------------- helpers ---------------- */

const hashString = (s: string): number => {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h * 31 + s.charCodeAt(i)) >>> 0;
  }
  return h;
};

const pick = <T,>(arr: T[], seed: number, slot: number): T => {
  const i = (((seed ^ (slot * 2654435761)) >>> 0)) % arr.length;
  return arr[i];
};

const inr = (n: number): string => '₹' + n.toFixed(2);

const priceOf = (row: InsightRow | undefined, key: string): number | null => {
  if (!row) return null;
  const v = row[key] as number | null | undefined;
  if (v === undefined || v === null || Number.isNaN(v)) return null;
  return Number(v);
};

export const highLow = (history: InsightRow[], key: string): { high: number; low: number } | null => {
  const values = history
    .map((r) => priceOf(r, key))
    .filter((v): v is number => v !== null);
  if (!values.length) return null;
  return { high: Math.max(...values), low: Math.min(...values) };
};

/** Deterministic seed for a given city + fuel. */
const seedFor = (slug: string, fuel: string): number => hashString(`${slug}|${fuel}`);
/** Deterministic seed for the ""about {city}"" intro block. */
const seedIntro = (slug: string, fuel: string): number => seedFor(slug, fuel);

/* Describe the current price, varied. */
const liveSentence = (
  ctx: InsightContext,
  price: number | null,
  change: number | null,
): string => {
  const city = ctx.cityName;
  const fuel = ctx.fuelLabel;
  if (price === null) return `As of the latest refresh, ${fuel} in ${city} is unavailable, which happens when today's data has not synced yet.`;
  if (change === null || Math.abs(change) < 0.01) {
    return pick(
      [
        `Right now, ${fuel} in ${city} sits at ${inr(price)} ${ctx.unitLabel}, unchanged since yesterday's refresh.`,
        `${fuel} in ${city} is currently ${inr(price)} ${ctx.unitLabel}, and there's been no movement today.`,
        `Today's rate for ${fuel} in ${city} is ${inr(price)} ${ctx.unitLabel}, holding level against the previous day.`,
      ],
      seedIntro(ctx.cityName.toLowerCase().replace(/[^a-z]/g, ''), ctx.fuel),
      1,
    );
  }
  if (change > 0) {
    return pick(
      [
        `Right now, ${fuel} in ${city} is ${inr(price)} ${ctx.unitLabel}, up ${inr(change)} from the previous morning.`,
        `${fuel} in ${city} has edged up to ${inr(price)} ${ctx.unitLabel}, a rise of ${inr(change)} since yesterday.`,
      ],
      seedFor(ctx.cityName.toLowerCase(), ctx.fuel),
      2,
    );
  }
  return pick(
    [
      `${fuel} in ${city} has eased to ${inr(price)} ${ctx.unitLabel}, down ${inr(Math.abs(change))} since yesterday.`,
      `${fuel} in ${city} now stands at ${inr(price)} ${ctx.unitLabel}, a dip of ${inr(Math.abs(change))} versus the prior session.`,
    ],
    seedFor(ctx.cityName.toLowerCase(), ctx.fuel),
    3,
  );
};

/* ---------------- section builders ---------------- */

function aboutSection(ctx: InsightContext): InsightSection {
  const price = priceOf(ctx.latest, ctx.priceKey);
  const change = priceOf(ctx.latest, ctx.changeKey);
  const hist = highLow(ctx.history, ctx.priceKey);

  const paragraphs: string[] = [];
  paragraphs.push(liveSentence(ctx, price, change));

  if (hist) {
    const span = hist.high - hist.low;
    const isFullMonth = ctx.history.length >= 25;
    const timeSpanText = isFullMonth ? 'in the last 30 days' : `in recent recordings (${ctx.history.length} days)`;
    if (span < 0.01) {
      paragraphs.push(
        `The price has not moved ${timeSpanText}, holding steady at ${inr(price ?? hist.high)} ${ctx.unitLabel}.`
      );
    } else if (span < 0.05) {
      paragraphs.push(
        `Over this recent recording window, it has barely moved, shifting only a few paise around ${inr(price ?? hist.high)} ${ctx.unitLabel}.`,
      );
    } else {
      paragraphs.push(
        `Over ${timeSpanText}, it has ranged between ${inr(hist.low)} and ${inr(hist.high)} ${ctx.unitLabel}, a spread of ${inr(span)} — wide enough that the timing of a fill-up matters.`,
      );
    }
  } else {
    paragraphs.push(
      `We only publish figures we've actually recorded, so a short history here simply means ${ctx.cityName} has been tracked for a shorter window.`,
    );
  }

  return {
    heading: `About ${ctx.fuelLabel} Price in ${ctx.cityName} Today`,
    paragraphs,
  };
}

export type NearbyComparison = {
  price: number;
  cheapest: { city: string; price: number };
  priciest: { city: string; price: number };
  diff: number;
  hasMoreCities: boolean;
};

/** Cheapest/priciest nearby city and the price gap, from real data. Returns
 * null when the city's own price or enough neighbouring data is missing. */
export function computeNearbyComparison(ctx: InsightContext): NearbyComparison | null {
  const price = priceOf(ctx.latest, ctx.priceKey);
  if (!price) return null;

  const priced = ctx.nearby
    .map((n) => ({ city: n.city_name, p: Number(n[ctx.priceKey]) }))
    .filter((n) => Number.isFinite(n.p) && n.p > 0);
  if (priced.length === 0) return null;

  const cheapest = priced.reduce((a, b) => (b.p < a.p ? b : a));
  const priciest = priced.reduce((a, b) => (b.p > a.p ? b : a));

  return {
    price,
    cheapest,
    priciest,
    diff: price - cheapest.p,
    hasMoreCities: priced.length > 1,
  };
}

/** Compare this city to its nearest neighbours using real prices. */
function nearbySection(ctx: InsightContext): InsightSection {
  const cmp = computeNearbyComparison(ctx);

  const paragraphs: string[] = [];

  if (!cmp) {
    return { heading: `${ctx.cityName} Versus Nearby Cities`, paragraphs };
  }

  const { price, cheapest, priciest, diff, hasMoreCities } = cmp;
  const tankSize = ctx.tankSize ?? (ctx.fuel === 'cng' ? 10 : 40);
  const tankWord = ctx.tankWord ?? (ctx.fuel === 'cng' ? '10-kg cylinder' : '40-litre tank');

  if (diff > 0.05) {
    paragraphs.push(
      `Around ${ctx.cityName}, the cheapest recorded today is ${cheapest.city} at ${inr(cheapest.p)} ${ctx.unitLabel}. Filling up there instead of ${ctx.cityName} saves about ${inr(diff)} ${ctx.unitLabel} — roughly ${inr(diff * tankSize)} on a typical ${tankWord}.`,
    );
  } else {
    paragraphs.push(
      `Within a short drive of ${ctx.cityName}, prices are essentially level — the nearest city in our data comes in within a few paise of ${inr(price)} ${ctx.unitLabel}.`,
    );
  }

  if (hasMoreCities && ctx.cityName !== priciest.city) {
    paragraphs.push(
      `On the other end, ${priciest.city} is the highest-priced of the nearby cities at ${inr(priciest.p)} ${ctx.unitLabel} — usually a reflection of depot distance and small local levies rather than any single cause.`,
    );
  }

  return { heading: `${ctx.cityName} Versus Nearby Cities`, paragraphs };
}

/** A trend write-up built from confirmed recent prices. */
function trendSection(ctx: InsightContext): InsightSection {
  const hist = highLow(ctx.history, ctx.priceKey);
  const price = priceOf(ctx.latest, ctx.priceKey);

  const paragraphs: string[] = [];
  const isFullMonth = ctx.history.length >= 25;
  const periodLabel = isFullMonth ? 'the last 30 days' : `recent tracking (${ctx.history.length} recorded days)`;

  if (!hist || !price) {
    paragraphs.push(
      `Without enough recorded days, drawing an extended trend line for ${ctx.cityName} would be guesswork — so we only track confirmed data.`,
    );
    return { heading: `Recent Price Trend in ${ctx.cityName}`, paragraphs };
  }

  const span = hist.high - hist.low;
  const pct = price > 0 ? (span / price) * 100 : 0;

  if (span === 0) {
    paragraphs.push(
      `${ctx.fuelLabel} in ${ctx.cityName} has remained steady across ${periodLabel}, holding at ${inr(price)} ${ctx.unitLabel}.`,
    );
    paragraphs.push(
      `A completely flat period usually signals steady supply and stable taxes — there is simply no movement to track.`,
    );
    return { heading: `Recent Price Trend in ${ctx.cityName}`, paragraphs };
  }

  if (pct < 1) {
    paragraphs.push(
      `Over ${periodLabel}, ${ctx.fuelLabel} in ${ctx.cityName} barely moved — the gap between its highest and lowest print was about ${inr(span)}, under 1% of the current ${inr(price)} ${ctx.unitLabel} level.`,
    );
    paragraphs.push(
      `A range that tight usually means supply and taxes are steady, so there's little point in timing your fill-up.`,
    );
  } else {
    paragraphs.push(
      `${ctx.fuelLabel} in ${ctx.cityName} swung between ${inr(hist.low)} and ${inr(hist.high)} ${ctx.unitLabel} across ${periodLabel} — a ${inr(span)} gap, or around ${pct.toFixed(1)}% off the present ${inr(price)} mark.`,
    );
    paragraphs.push(
      `When that window is moving around, checking the daily 6 AM revision before you commit to a tank makes sense.`,
    );
  }

  return { heading: `Recent Price Trend in ${ctx.cityName}`, paragraphs };
}

/* ---------------- public entry ---------------- */

export function buildCityInsights(ctx: InsightContext): InsightSection[] {
  const sections = [aboutSection(ctx)];
  if (ctx.nearby && ctx.nearby.length > 0) {
    const nb = nearbySection(ctx);
    if (nb && nb.paragraphs.length > 0) {
      sections.push(nb);
    }
  }
  sections.push(trendSection(ctx));
  return sections;
}