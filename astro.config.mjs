// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://zaidhossain.com',
  // the dev toolbar overlays the page and lands in screenshots
  devToolbar: { enabled: false },
  vite: { plugins: [tailwindcss()] },
});
