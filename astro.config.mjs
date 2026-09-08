// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

import { createClient } from '@supabase/supabase-js';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

try {
  process.loadEnvFile();
} catch {
  // .env file may not exist in production (secrets injected by Cloudflare)
}

const SITE = 'https://petrolpriceindia.com';
const TODAY_ISO = new Date().toISOString().split('T')[0];

// Per-URL lastmod values consumed by the sitemap `serialize` hook below.
// Dynamic price pages are stamped with the latest price date from the DB;
// blog pages with their file mtime.
const lastmodMap = new Map();

// Legacy slug merged into 'puducherry' (301 redirect). Never emit it.
const LEGACY_SLUGS = new Set(['pondicherry']);

// Read blog post slugs directly from the content directory so SSR blog routes
// (`/blog/[slug]`) are included in the sitemap, since Astro's sitemap
// integration only auto-includes statically generated pages.
function getBlogUrls() {
  const blogDir = join(process.cwd(), 'src/content/blog');
  const urls = [];

  try {
    const files = readdirSync(blogDir).filter((f) => f.endsWith('.md'));

    for (const file of files) {
      const fullPath = join(blogDir, file);
      const raw = readFileSync(fullPath, 'utf8');
      const draftMatch = raw.match(/^\s*draft\s*:\s*true\s*$/m);
      if (draftMatch) continue;

      const slug = file.replace(/\.md$/, '');
      const url = `${SITE}/blog/${slug}/`;
      urls.push(url);

      let lastmod = TODAY_ISO;
      try {
        lastmod = statSync(fullPath).mtime.toISOString().split('T')[0];
      } catch {
        // fall back to today
      }
      lastmodMap.set(url, lastmod);
    }

    urls.sort();
    console.log(`Generated ${urls.length} blog sitemap URLs`);
  } catch (error) {
    console.warn('Failed to generate blog sitemap URLs:', error.message);
  }

  return urls;
}

async function getDynamicUrls() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.warn('Supabase env vars not found, skipping dynamic sitemap URLs');
    return [];
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data: cities } = await supabase
      .from('cities')
      .select('id, city_slug, state_slug');

    if (!cities || cities.length === 0) {
      console.warn('No cities found in database for sitemap');
      return [];
    }

    // Latest price date -> used as lastmod for all price pages.
    let dataDate = TODAY_ISO;
    try {
      const { data: latest } = await supabase
        .from('prices')
        .select('date')
        .order('date', { ascending: false })
        .limit(1);
      if (latest?.[0]?.date) dataDate = latest[0].date;
    } catch {
      // fall back to today
    }

    // Coverage: CNG/Autogas are not sold in most cities. Only list those
    // pages where the latest daily row actually has a price, so the sitemap
    // doesn't advertise ~1000 empty template pages. Petrol/diesel are always
    // listed. If coverage can't be determined, list petrol/diesel only.
    const cngCityIds = new Set();
    const autogasCityIds = new Set();
    let coverageKnown = false;
    try {
      const { data: rows } = await supabase
        .from('prices')
        .select('city_id, cng_price, autogas_price')
        .eq('date', dataDate)
        .limit(5000);
      if (rows && rows.length > 0) {
        coverageKnown = true;
        for (const r of rows) {
          if (r.cng_price != null && Number(r.cng_price) > 0) cngCityIds.add(r.city_id);
          if (r.autogas_price != null && Number(r.autogas_price) > 0) autogasCityIds.add(r.city_id);
        }
      }
    } catch (error) {
      console.warn('Failed to fetch fuel coverage for sitemap:', error.message);
    }

    const cityIdToState = new Map(cities.map((c) => [c.id, c.state_slug]));
    const statesWithCng = new Set();
    const statesWithAutogas = new Set();
    if (coverageKnown) {
      for (const id of cngCityIds) {
        const s = cityIdToState.get(id);
        if (s && !LEGACY_SLUGS.has(s)) statesWithCng.add(s);
      }
      for (const id of autogasCityIds) {
        const s = cityIdToState.get(id);
        if (s && !LEGACY_SLUGS.has(s)) statesWithAutogas.add(s);
      }
    }

    const urls = [];
    const seen = new Set();
    const push = (url) => {
      if (!seen.has(url)) {
        seen.add(url);
        urls.push(url);
        lastmodMap.set(url, dataDate);
      }
    };

    const site = SITE;
    const uniqueStates = [
      ...new Set(cities.map((c) => c.state_slug).filter(Boolean)),
    ].filter((s) => !LEGACY_SLUGS.has(s));

    push('https://petrolpriceindia.com/petrol-price-in-india/');

    for (const city of cities) {
      if (!city.city_slug || LEGACY_SLUGS.has(city.city_slug)) continue;
      push(`${site}/petrol-price-in-${city.city_slug}/`);
      push(`${site}/diesel-price-in-${city.city_slug}/`);
      if (coverageKnown && cngCityIds.has(city.id)) {
        push(`${site}/cng-price-in-${city.city_slug}/`);
      }
      if (coverageKnown && autogasCityIds.has(city.id)) {
        push(`${site}/autogas-price-in-${city.city_slug}/`);
      }
    }

    for (const stateSlug of uniqueStates) {
      push(`${site}/petrol-price-in-${stateSlug}/`);
      push(`${site}/diesel-price-in-${stateSlug}/`);
      if (coverageKnown && statesWithCng.has(stateSlug)) {
        push(`${site}/cng-price-in-${stateSlug}/`);
      }
      if (coverageKnown && statesWithAutogas.has(stateSlug)) {
        push(`${site}/autogas-price-in-${stateSlug}/`);
      }
    }

    console.log(
      `Generated ${urls.length} dynamic sitemap URLs (${cities.length} cities; ` +
      `cng: ${cngCityIds.size} cities/${statesWithCng.size} states, ` +
      `autogas: ${autogasCityIds.size} cities/${statesWithAutogas.size} states, ` +
      `lastmod: ${dataDate})`,
    );
    return urls;
  } catch (error) {
    console.warn('Failed to generate dynamic sitemap URLs:', error.message);
    return [];
  }
}

const dynamicUrls = [
  'https://petrolpriceindia.com/petrol-price-in-india/',
  ...(await getDynamicUrls()),
  ...getBlogUrls(),
];

// https://astro.build/config
export default defineConfig({
  site: 'https://petrolpriceindia.com',
  output: 'server',

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap({
    customPages: dynamicUrls,
    // Defense in depth: never emit the legacy merged slug even if it slips
    // in from auto-discovered routes.
    filter: (page) => !page.includes('-pondicherry'),
    serialize: (item) => {
      const lastmod = lastmodMap.get(item.url) ?? TODAY_ISO;
      const isHome = item.url === `${SITE}/`;
      const isBlog = item.url.includes('/blog/');
      const isHub = item.url.endsWith('-in-india/');
      const isPetrolDiesel = item.url.includes('petrol-price-in-') || item.url.includes('diesel-price-in-');
      return {
        ...item,
        lastmod,
        changefreq: isBlog ? 'monthly' : 'daily',
        priority: isHome ? 1.0 : isHub ? 0.9 : isPetrolDiesel ? 0.8 : isBlog ? 0.7 : 0.5,
      };
    },
  })],

  adapter: cloudflare(),
  env: {
    schema: {
      SUPABASE_URL: {
        type: 'string',
        context: 'server',
        access: 'secret',
      },
      SUPABASE_SERVICE_ROLE_KEY: {
        type: 'string',
        context: 'server',
        access: 'secret',
      },
    },
  },
});
