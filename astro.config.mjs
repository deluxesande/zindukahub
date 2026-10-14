// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// `site` is required for canonical URLs, the sitemap, and absolute OG images.
// https://astro.build/config
export default defineConfig({
  site: 'https://www.zindukahub.co.ke',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
