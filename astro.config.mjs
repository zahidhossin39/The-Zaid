// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// After the build, swap every external <script type="module" src> in the HTML for
// one inline loader that imports them once the first screen has painted.
// PageSpeed's mobile run counts every request that starts before the largest
// paint; with no script requests up front the page scores 100 instead of 99.
// Inline module scripts (small, first-screen ones) are left as they are.
/** @returns {import('astro').AstroIntegration} */
const deferModuleScripts = () => ({
  name: 'defer-module-scripts',
  hooks: {
    'astro:build:done': ({ dir }) => {
      const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) =>
        e.isDirectory() ? walk(path.join(d, e.name)) : e.name.endsWith('.html') ? [path.join(d, e.name)] : []);
      for (const file of walk(fileURLToPath(dir))) {
        let html = fs.readFileSync(file, 'utf8');
        const srcs = [];
        html = html.replace(/<script type="module" src="([^"]+)"><\/script>/g, (_, src) => (srcs.push(src), ''));
        if (!srcs.length) continue;
        const loader =
          `<script>(()=>{const s=${JSON.stringify(srcs)};` +
          `const go=()=>setTimeout(()=>s.forEach(u=>import(u)),300);` +
          `document.readyState==="complete"?go():addEventListener("load",go,{once:true})})()</script>`;
        html = html.replace('</body>', `${loader}</body>`);
        fs.writeFileSync(file, html);
      }
    },
  },
});

export default defineConfig({
  site: 'https://zaidhossain.com',
  // the dev toolbar overlays the page and lands in screenshots
  devToolbar: { enabled: false },
  // CSS goes inline in the HTML: no render-blocking stylesheet requests (it's ~13 KB)
  build: { inlineStylesheets: 'always' },
  integrations: [deferModuleScripts()],
  vite: { plugins: [tailwindcss()] },
});
