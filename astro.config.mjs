// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

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

  integrations: [sitemap()],
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