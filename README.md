# zaid.dev — portfolio

One-page Astro + Tailwind site. See `BRIEF.md` for the decisions and
`PLAN.final.md` for the design reasoning.

```bash
npm run dev     # local at http://localhost:4321
npm run build   # static output into dist/
```

## Editing content

**Projects** live in `src/data/projects.json` — nothing else needs touching.
One entry per card:

```json
{
  "title": "What it is",
  "stuck": "The painful situation before.",
  "now": "The concrete result. Use a number if you have one.",
  "youtubeId": "dQw4w9WgXcQ",
  "liveUrl": "https://the-real-thing.com",
  "tags": ["App"]
}
```

`youtubeId` is the part after `v=` in a YouTube URL. Videos are **not**
embedded on load — the card shows a thumbnail and only loads YouTube when
someone clicks play.

**Copy** lives inline in `src/components/*.astro`, one file per section.

## Before this goes live

- [ ] Replace the 4 placeholder projects with real ones
- [ ] Make a Cal.com account, put the handle in `CAL_LINK` in `BookACall.astro`
- [ ] Add a photo at `public/zaid.jpg` and wire it into `About.astro`
- [ ] Replace the GitHub / X / LinkedIn URLs in `About.astro`

## Deploy

Cloudflare Pages, build command `npm run build`, output directory `dist`.
