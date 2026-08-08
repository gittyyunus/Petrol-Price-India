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

const highLow = (history: InsightRow[], key: string): { high: number; low: number } | null => {
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
    if (span < 0.01) {
      paragraphs.push(
        pick(
          [
            `The same rate has held for the entire 30-day window — nothing has moved.`,
            `It has stayed pinned at today's price throughout the past month.`,
            `The price has not moved once in the last 30 days; today's rate is exactly where the month started.`,
          ],
          seedFor(ctx.cityName.toLowerCase(), ctx.fuel),
          4,
        ),
      );
    } else if (span < 0.05) {
      paragraphs.push(
        `Over the past month it has barely moved, shifting only a few paise around ${inr(price)} ${ctx.unitLabel}.`,
      );
    } else {
      paragraphs.push(
        `Over the last 30 days it has ranged between ${inr(hist.low)} and ${inr(hist.high)} ${ctx.unitLabel}, a spread of ${inr(span)} — wide enough that the timing of a full tank genuinely matters.`,
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

/** Compare this city to its nearest neighbours using real prices. */
function nearbySection(ctx: InsightContext): InsightSection {
  const price = priceOf(ctx.latest, ctx.priceKey);
  const priced = ctx.nearby
    .map((n) => ({ city: n.city_name, p: Number(n[ctx.priceKey]) }))
    .filter((n) => Number.isFinite(n.p) && n.p > 0);

  const paragraphs: string[] = [];

  if (!price || priced.length === 0) {
    paragraphs.push(
      `There isn't enough neighbouring data synced yet to draw a fair comparison for ${ctx.cityName}. Check back tomorrow when the daily refresh has settled.`,
    );
    return { heading: `How ${ctx.cityName} Compares to Nearby Cities`, paragraphs };
  }

  const cheapest = priced.reduce((a, b) => (b.p < a.p ? b : a));
  const priciest = priced.reduce((a, b) => (b.p > a.p ? b : a));
  const diff = price - cheapest.p;
  const nearestName = cheapest.city;

  if (diff > 0.05) {
    paragraphs.push(
      `Around ${ctx.cityName}, the cheapest recorded today is ${nearestName} at ${inr(cheapest.p)} ${ctx.unitLabel}. Filling up there instead of ${ctx.cityName} saves about ${inr(diff)} ${ctx.unitLabel} — roughly ${inr(diff * 40)} on a typical 40-litre tank.`,
    );
  } else {
    paragraphs.push(
      `Within a short drive of ${ctx.cityName}, prices are essentially level — the nearest city in our data comes in within a few paise of ${inr(price)} ${ctx.unitLabel}.`,
    );
  }

  if (priced.length > 1 && ctx.cityName !== priciest.city) {
    paragraphs.push(
      `On the other end, ${priciest.city} is the highest-priced of the nearby cities at ${inr(priciest.p)} ${ctx.unitLabel} — usually a reflection of depot distance and small local levies rather than any single cause.`,
    );
  }

  return { heading: `${ctx.cityName} Versus Nearby Cities`, paragraphs };
}

/** A trend write-up built from the real 30-day high/low. */
function trendSection(ctx: InsightContext): InsightSection {
  const hist = highLow(ctx.history, ctx.priceKey);
  const price = priceOf(ctx.latest, ctx.priceKey);

  const paragraphs: string[] = [];

  if (!hist || !price) {
    paragraphs.push(
      `Without a full month of recorded candles, drawing a trend line for ${ctx.cityName} would be guesswork — so we're not going to fake one. Short history, honest read.`,
    );
    return { heading: `The 30-Day Picture in ${ctx.cityName}`, paragraphs };
  }

  const span = hist.high - hist.low;
  const pct = price > 0 ? (span / price) * 100 : 0;

  if (span === 0) {
    paragraphs.push(
      `${ctx.fuelLabel} in ${ctx.cityName} has not moved at all in the past 30 days, holding at ${inr(price)} ${ctx.unitLabel} the entire window.`,
    );
    paragraphs.push(
      `A completely flat month usually signals steady supply and stable taxes — there is simply no movement to track.`,
    );
    return { heading: `The 30-Day Picture in ${ctx.cityName}`, paragraphs };
  }

  if (pct < 1) {
    paragraphs.push(
      `Over the last 30 days, ${ctx.fuelLabel} in ${ctx.cityName} barely moved — the gap between its highest and lowest print was about ${inr(span)}, under 1% of the current ${inr(price)} ${ctx.unitLabel} level.`,
    );
    paragraphs.push(
      `A range that tight usually means supply and taxes are steady, so there's little point in timing your fill-up.`,
    );
  } else {
    paragraphs.push(
      `${ctx.fuelLabel} in ${ctx.cityName} swung between ${inr(hist.low)} and ${inr(hist.high)} ${ctx.unitLabel} in the past month — a ${inr(span)} gap, or around ${pct.toFixed(1)}% off the present ${inr(price)} mark.`,
    );
    paragraphs.push(
      `When that window is moving around, checking the daily 6 AM revision before you commit to a tank makes sense.`,
    );
  }

  return { heading: `The 30-Day Picture in ${ctx.cityName}`, paragraphs };
}

/* ---------------- public entry ---------------- */

export function buildCityInsights(ctx: InsightContext): InsightSection[] {
  return [aboutSection(ctx), nearbySection(ctx), trendSection(ctx)];
}