// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://saudivapes.com',
  output: 'static',
  trailingSlash: 'never',
  adapter: cloudflare({ mode: 'directory' }),
  integrations: [mdx(), sitemap({
    filter: (page) => page.startsWith('https://saudivapes.com/ar/blog'),
  })],
  build: {
    format: 'directory',
    assets: '_assets',
  },
});
