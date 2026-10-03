// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://zaidhossain.com',
  // the dev toolbar overlays the page and lands in screenshots
  devToolbar: { enabled: false },
  // CSS goes inline in the HTML: no render-blocking stylesheet requests (it's ~13 KB)
  build: { inlineStylesheets: 'always' },
  vite: { plugins: [tailwindcss()] },
});
