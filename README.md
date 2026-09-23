# zaid.dev — portfolio

One-page Astro + Tailwind site. See `IDEATION_HANDOFF.md` for the decisions
and current state, and `.claude/brand-voice-guidelines.md` for how copy is written.

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
  "kind": "site",
  "demo": true,
  "youtubeId": "dQw4w9WgXcQ",
  "liveUrl": "https://the-real-thing.com",
  "tags": ["Website"]
}
```

`kind` ("site" or "auto") picks the coded mockup shown when there's no video;
`demo: true` adds the Demo label. `youtubeId` is the part after `v=` in a YouTube URL. Videos are **not**
embedded on load — the card shows a thumbnail and only loads YouTube when
someone clicks play.

**Copy** lives inline in `src/components/*.astro`, one file per section.

## Before this goes live

- [ ] Make a Cal.com account, put the handle in `CAL_LINK` in `BookACall.astro`
- [ ] Replace the GitHub / X / LinkedIn URLs in `About.astro`
- [ ] Add the hero showreel (`public/hero.mp4` + `hero-poster.jpg`, see the handoff doc)
- [ ] Replace the two demo projects with real ones when they exist

## Deploy

Cloudflare Pages, build command `npm run build`, output directory `dist`.
