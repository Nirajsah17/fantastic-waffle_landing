import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nirajsah17.github.io/fantastic-waffle_landing/',
  base: "./",
  integrations: [
    tailwind(),
    sitemap()
  ]
});