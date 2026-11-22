import type { StateFuelInfo } from './stateFuelData';

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
  stateSlug?: string;
  stateFuelInfo?: StateFuelInfo | null;
  fuel: string; // 'petrol' | 'diesel' | 'cng' | 'autogas'
  fuelLabel: string; // 'Petrol' | 'Diesel' | 'CNG' | 'AutoGas'
  priceKey: string; // e.g. 'petrol_price'
  changeKey: string; // e.g. 'price_change'
  unitLabel: string; // 'per litre' | 'per kg'
  unitShort?: string; // '/L' | '/kg'
  tankWord?: string; // '40-litre tank' | '10-kg cylinder'
  tankSize?: number; // 40 | 10
  priceNum?: number | null;
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

/** Detailed district & state tax breakdown and supply logistics */
function taxAndSupplySection(ctx: InsightContext): InsightSection {
  const paragraphs: string[] = [];
  const stateInfo = ctx.stateFuelInfo;
  const isCng = ctx.fuel === 'cng';
  const isAutogas = ctx.fuel === 'autogas';
  const isDiesel = ctx.fuel === 'diesel';

  if (isCng) {
    paragraphs.push(
      `In ${ctx.cityName}, retail CNG prices are established by licensed City Gas Distribution (CGD) networks based on a blend of domestic APM (Administered Price Mechanism) natural gas, HPHT deepwater allocations, and imported Liquefied Natural Gas (LNG). Natural gas is transported through high-pressure national pipelines and compressed locally to over 200 bar for vehicle dispensing by weight in kilograms.`,
    );
    paragraphs.push(
      `Unlike liquid motor fuels that bear flat central excise rates per litre, CNG is taxed with percentage-based excise plus ${ctx.stateName}'s state VAT. City-level retail pricing also factors in regional pipeline transmission tariffs, compressor station electricity overheads, and the distributor's operating margins across stations in ${ctx.cityName}.`,
    );
  } else if (isAutogas) {
    paragraphs.push(
      `AutoGas (Automotive LPG) in ${ctx.cityName} is benchmarked against international propane and butane contract prices (CP) set by Saudi Aramco, converted into Indian Rupees and dispensed by the litre. Oil Marketing Companies revise retail rates monthly to reflect global LPG movements and currency exchange variations.`,
    );
    paragraphs.push(
      `Pump prices in ${ctx.cityName} incorporate freight from coastal import terminals, terminal handling charges, OMC logistics buffers, and ${ctx.stateName}'s specific LPG sales tax slab.`,
    );
  } else {
    const vatRate = isDiesel ? (stateInfo?.vatDiesel ?? 'state-notified VAT') : (stateInfo?.vatPetrol ?? 'state-notified VAT');
    paragraphs.push(
      `Fuel pricing across petrol bunks in ${ctx.cityName} is determined under the dynamic daily pricing mechanism revised every morning at 6:00 AM IST. While the base refinery cost and central excise duty (₹19.90/L on petrol, ₹15.80/L on diesel) remain identical across India, the retail rate at ${ctx.cityName} pumps is shaped by ${ctx.stateName}'s tax framework: ${vatRate}. ${stateInfo?.driver ?? ''}`,
    );
    paragraphs.push(
      `Supply for ${ctx.cityName} is primarily distributed through ${stateInfo?.depot ?? 'regional petroleum depots and pipeline terminals'}. Secondary distribution freight from these bulk terminals to local forecourts accounts for minor paise variations between pumps situated in city limits and highway retail outlets.`,
    );
  }

  return {
    heading: `How ${ctx.fuelLabel} Prices and Taxes Work in ${ctx.cityName}`,
    paragraphs,
  };
}

/** Commuter cost analysis and real full-tank math for this city */
function commuterEconomicsSection(ctx: InsightContext): InsightSection {
  const paragraphs: string[] = [];
  const price = ctx.priceNum ?? priceOf(ctx.latest, ctx.priceKey);

  if (price && price > 0) {
    if (ctx.fuel === 'cng') {
      const kgNeeded = 1200 / 22;
      const monthlyCost = kgNeeded * price;
      paragraphs.push(
        `For daily commuters navigating ${ctx.cityName}, CNG provides one of the lowest running costs per kilometer among internal combustion vehicles. A private car owner traveling approximately 1,200 km per month with an average fuel efficiency of 22 km/kg uses roughly ${kgNeeded.toFixed(1)} kg of CNG, resulting in an estimated monthly spend of ${inr(monthlyCost)} at today's rate of ${inr(price)}/kg.`,
      );
      paragraphs.push(
        `A complete refill of a standard 10-kg vehicle cylinder costs approximately ${inr(price * 10)} in ${ctx.cityName}, delivering roughly 180 to 220 km of driving range depending on urban traffic congestion and air-conditioning usage.`,
      );
    } else if (ctx.fuel === 'diesel') {
      const litresNeeded = 1500 / 18;
      const monthlyCost = litresNeeded * price;
      paragraphs.push(
        `Diesel remains the workhorse fuel for commercial transport, fleet operators, and high-mileage private vehicles in ${ctx.cityName}. A commuter or fleet vehicle logging 1,500 km per month at 18 km/L consumes approximately ${litresNeeded.toFixed(1)} litres of diesel, translating to a monthly fuel budget of ${inr(monthlyCost)} at current prices.`,
      );
      paragraphs.push(
        `Filling a standard 50-litre tank on an SUV or utility vehicle in ${ctx.cityName} comes to approximately ${inr(50 * price)}. Commercial operators traveling across state borders should compare neighboring tax slabs before scheduling major bulk fills.`,
      );
    } else if (ctx.fuel === 'autogas') {
      const litresNeeded = 1000 / 12;
      const monthlyCost = litresNeeded * price;
      paragraphs.push(
        `A monthly commute of 1,000 km in an AutoGas-converted vehicle achieving 12 km/L requires roughly ${litresNeeded.toFixed(1)} litres, amounting to ${inr(monthlyCost)} at today's ${inr(price)}/L price in ${ctx.cityName}.`,
      );
      paragraphs.push(
        `A typical 35-litre LPG cylinder fill in ${ctx.cityName} costs approximately ${inr(35 * price)}, delivering steady urban economy with significantly reduced particulate emissions compared to older petrol configurations.`,
      );
    } else {
      // Petrol
      const carLitres = 900 / 14;
      const carCost = carLitres * price;
      const bikeLitres = 450 / 45;
      const bikeCost = bikeLitres * price;
      paragraphs.push(
        `At today's rate of ${inr(price)} per litre in ${ctx.cityName}, a typical four-wheeler commuter driving 30 km daily (900 km per month) at an average city mileage of 14 km/L requires about ${carLitres.toFixed(1)} litres of petrol, totaling approximately ${inr(carCost)} per month.`,
      );
      paragraphs.push(
        `For two-wheeler riders traveling 15 km per day (450 km per month) at 45 km/L, petrol consumption averages 10 litres, costing roughly ${inr(bikeCost)} per month. Filling a compact hatchback's 35-litre tank costs ${inr(35 * price)}, while a 45-litre sedan tank comes to ${inr(45 * price)}.`,
      );
    }
  }

  paragraphs.push(
    `To maximize fuel efficiency in ${ctx.cityName}, maintain correct tyre pressure specifications, avoid aggressive acceleration between traffic signals, and utilize the live trip calculator below to estimate exact route expenses before road trips.`,
  );

  return {
    heading: `Commuter Cost & Trip Math for ${ctx.cityName} Drivers`,
    paragraphs,
  };
}

/* ---------------- public entry ---------------- */

export function buildCityInsights(ctx: InsightContext): InsightSection[] {
  const sections: InsightSection[] = [aboutSection(ctx)];
  sections.push(taxAndSupplySection(ctx));
  sections.push(commuterEconomicsSection(ctx));
  if (ctx.nearby && ctx.nearby.length > 0) {
    const nb = nearbySection(ctx);
    if (nb && nb.paragraphs.length > 0) {
      sections.push(nb);
    }
  }
  sections.push(trendSection(ctx));
  return sections;
}