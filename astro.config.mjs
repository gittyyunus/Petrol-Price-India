// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

import { createClient } from '@supabase/supabase-js';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

try {
  process.loadEnvFile();
} catch {
  // .env file may not exist in production (secrets injected by Cloudflare)
}

// Read blog post slugs directly from the content directory so SSR blog routes
// (`/blog/[slug]`) are included in the sitemap, since Astro's sitemap
// integration only auto-includes statically generated pages.
function getBlogUrls() {
  const blogDir = join(process.cwd(), 'src/content/blog');
  const site = 'https://petrolpriceindia.com';
  const urls = [];

  try {
    const files = readdirSync(blogDir).filter((f) => f.endsWith('.md'));

    for (const file of files) {
      const raw = readFileSync(join(blogDir, file), 'utf8');
      const draftMatch = raw.match(/^\s*draft\s*:\s*true\s*$/m);
      if (draftMatch) continue;

      const slug = file.replace(/\.md$/, '');
      urls.push(`${site}/blog/${slug}/`);
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
      .select('city_slug, state_slug');

    if (!cities || cities.length === 0) {
      console.warn('No cities found in database for sitemap');
      return [];
    }

    const fuels = ['petrol', 'diesel', 'autogas', 'cng'];
    const site = 'https://petrolpriceindia.com';
    const urls = [];
    const seen = new Set();

    for (const city of cities) {
      for (const fuel of fuels) {
        if (city.city_slug) {
          const url = `${site}/${fuel}-price-in-${city.city_slug}/`;
          if (!seen.has(url)) {
            urls.push(url);
            seen.add(url);
          }
        }
        if (city.state_slug) {
          const url = `${site}/${fuel}-price-in-${city.state_slug}/`;
          if (!seen.has(url)) {
            urls.push(url);
            seen.add(url);
          }
        }
      }
    }

    console.log(`Generated ${urls.length} dynamic sitemap URLs (${cities.length} cities, ${fuels.length} fuel types)`);
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
