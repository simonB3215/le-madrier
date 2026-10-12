import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Adresse définitive du site (toujours en https).
export default defineConfig({
  site: 'https://www.lemadrier.ch',
  trailingSlash: 'always',
  integrations: [
    sitemap(),
  ],
  vite: { plugins: [tailwindcss()] },
});
