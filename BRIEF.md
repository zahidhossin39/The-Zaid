# Zaid Portfolio — Brief

Decisions settled in the grilling session. Update this file when a decision changes.

## Strategy

| | |
|---|---|
| **Job of the site** | Land paying clients |
| **Frame** | "I build the thing you keep putting off" — outcome-led, never tool-led |
| **Audience** | Founders with a stuck idea + small business owners with a stuck process |
| **Voice** | Non-salesy. Name their problem, not my services. Never headline "AI automation" or "web developer" |
| **Pricing** | Not shown. Book a call instead |
| **CTA** | One path only: Cal.com embedded inline, with "what are you trying to build?" on the form |

## Content

- 4 project cards: YouTube embed + live link each
- Placeholder YouTube videos for now; real ones recorded later
- All project data lives in `projects.json` (title, one-line problem, one-line outcome, YouTube ID, live link, tags)
- Trust: photo in **About only, not hero** + short first-person story + GitHub / X / LinkedIn
- Contact: hello.zaidhossain@gmail.com

## Build

| | |
|---|---|
| **Stack** | Astro + Tailwind |
| **Structure** | Single long scrolling page |
| **Look** | Dark / near-black, high-contrast type, one warm amber accent |
| **Motion** | Staged. v1 = hero reveal, scroll fade-ups, hover lifts, sticky proof section. Heavy GSAP ScrollTrigger / pinned sections come after real content lands |
| **Hosting** | Cloudflare Pages (deploys from GitHub) |
| **Git** | Local commits at each working milestone. No push without asking |

## Section order

Hero → the problem → what I build (3 types) → proof grid → how it works (3 steps) → About → book a call

## Open items

- [ ] **Hero headline** — 3 options to be drafted in the build, Zaid picks
- [ ] **Domain** — `zaidhossain.com` returned NXDOMAIN (likely free). `zaid.dev` has no A record but may still be registered; verify at a registrar
- [ ] **Email** — once domain is confirmed, Cloudflare Email Routing forwards `hello@zaid.dev` to the Gmail for free. Cosmetic, do later

## Rejected, and why

- **Custom admin panel** — needs a database, a 24/7 server (kills free static hosting), auth, and becomes a permanent security liability. ~10x the work of the portfolio to save editing one file a few times a year. Build tooling when the manual way hurts, not before
- **Git-based CMS (Decap/Sveltia)** — good middle path, gives a real `/admin` UI that writes to repo files with no database. Deferred until editing `projects.json` actually annoys him
- **Self-hosted video** — YouTube embeds chosen instead
- **Multi-page site** — 4 projects and no clients would leave every page underfed
