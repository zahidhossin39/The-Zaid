# Ideation Handoff — Zaid Hossain portfolio site

A fresh agent should read this top-to-bottom once, then brainstorm from the **Ideation Canvas** (§4). §1–§3 are settled context — absorb, do not re-litigate.

---

## 1. Executive summary

**What:** A single-page marketing/portfolio site for **Zaid Hossain**, a solo builder for small businesses.

**Who it's for:** Non-technical small-business owners and founders with a *stuck idea* or a *stuck manual process* — people who know what they want built but keep putting it off.

**Value proposition:** "You describe the problem, I build the thing." Zaid builds **apps, automations, and websites** — scoped tight, built in the open, handed over working. He has **no clients yet**; the site is credibility-first, conversion-second (the one goal is booking a 20-minute call).

**Voice:** Plain, direct, a little wry. Speaks to the owner's frustration ("It's been 'next month' since spring"), never corporate or buzzwordy.

---

## 2. Settled foundations — do NOT change

**Stack**
- **Astro 7** (static output) + **Tailwind v4** via `@tailwindcss/vite`. No React (a vanilla canvas port is used where a React component was wanted).
- **Lenis** smooth scroll (in `Base.astro`), respects `prefers-reduced-motion`.
- **gsap** (+ free `InertiaPlugin`) — used only by the hero DotGrid.
- Windows dev box; `npm`; dev server on `localhost:4321`.

**Design tokens** (`src/styles/global.css`, `@theme`)
- Dark site: bg `#0A0A0B`, surface `#141417`, border `#26262B`, text `#F4F2ED`, muted `#9C9A94`, **accent amber `#FFA524`**.
- Fonts: **Instrument Serif** (display/headings), **Inter** (body), **Inter Tight** (hero), **PT Sans Narrow** (the "What I build" list), mono for eyebrows.
- Component classes: `.eyebrow` `.h1` `.h2` `.h3` `.lead`; reveal-on-scroll via `.reveal` + `data-delay`, gated on `.js`.

**Architecture rules**
- One page: `src/pages/index.astro` composes section components in `src/components/`. Throwaway prototypes live under `src/pages/lab/`.
- **Reveal-on-load rule:** any `.reveal` already in the viewport reveals immediately; only below-the-fold waits for scroll. (Fixed a bug where the hero CTA hid until scroll.)
- Images served from `public/` (e.g. `/clay-apps.jpg`).

**Non-negotiables**
- Commit freely; **never `git push` without asking**.
- Verify in-browser before claiming done (the built-in browser pane; note it throttles rAF/CSS transitions while hidden — a blank canvas or opacity:0 there is usually the hidden tab, not a bug).
- Delegation: research → Gemini (`Spawn-Gemini`/agy); Claude writes code unless the user names an agent; whole-codebase work stays with Claude.

**Brand look:** minimal, black-on-white leaning inside an otherwise dark site. The **"What I build"** section is a deliberate white band. Warm accents over cold. Custom SVG/hand-made assets over stock/CDN.

---

## 3. Current progress (built in the main session)

Order on the page: **Navbar → Hero → Problem → WhatIBuild → Proof → Process → About → BookACall**.

- **Navbar** — transparent, adapts to any background via `mix-blend-mode: difference`. Links: Work, About, Book a call.
- **Hero** — headline "You've had the idea long enough." + sub + CTA "Book a 20-minute call" (calendar icon). White section. Two effects: (a) **cursor-origin expanding-circle fill** on the CTA (ported from Zaid's older `Zaid-Portfolio-website`), (b) **DotGrid** interactive canvas background — subtle grey dots that turn amber near the cursor, with inertia + click shockwave (`src/components/DotGrid.astro`). Right column has a showreel video placeholder.
- **Problem** — "Knowing what to build was never the problem." → "Same idea. The date keeps sliding."
- **WhatIBuild** — **expand-on-hover list** (faithful clone of `expand-on-hover-list.framer.website`): black-on-white band, three rows (Apps / Automations / Websites). Hover expands the row, reveals a one-line description + a **warm-clay image card that rotates into place** (settles −5°, 1.79 ratio matching the 16:9 images). Images are faceless-clay dioramas (`/clay-apps.jpg`, `/clay-auto.jpg`, `/clay-web.jpg`).
- **Process** — curved-arc scroll timeline (5 phases: Discovery & Scope, Plan & Design, Build, Test & Ship, Handover & Support). Circles ride a real circle arc; eased scroll; a synthesized "revolver detent" click + haptic + ping on each step change. Custom 3D-shaded SVG icons.
- **Proof / About / BookACall** — present; lighter polish.

**Assets & taste locked:** the **warm faceless-clay** illustration style is the chosen visual language (people have blank rounded heads, dot eyes only — no nose/lips/ears). Ink & wash and needle-felt were runner-up styles, not used.

---

## 4. Ideation canvas — brainstorm these

The new session's job. Each item is an open branch; propose options, weigh them against §1–§2, recommend one.

**A. Proof without clients.** Zaid has no clients yet. How does the site earn trust? Branches: personal build logs / "built in the open" artifacts, a self-built app as a live demo, process transparency, a spec-to-shipped case study of a *hypothetical or personal* project, guarantees ("working or you don't pay"). What goes in the Proof section concretely?

**B. Offer & pricing clarity.** Should the site name price ranges, engagement shapes (fixed-scope sprint vs. retainer), or timelines? What reduces the owner's risk enough to book a call?

**C. Conversion path.** One CTA ("Book a 20-minute call") repeats. Is a single booking link enough, or is a lightweight qualifier (a 2–3 field "describe your stuck thing" form) better? Where should CTAs repeat down the page?

**D. Content for each service.** Apps / Automations / Websites each need a concrete, owner-legible example story (the clay images imply one). Draft the copy and the "before → after" for each.

**E. Section gaps.** Does the page need: an FAQ, a "how we'd work together" step list beyond Process, a short bio/"why me", a newsletter or lead magnet? What's missing between Process and booking?

**F. Motion & delight budget.** The site already has DotGrid, expand-on-hover, arc-scroll timeline, button fill, revolver click. Where is the ceiling before it feels gimmicky? Which interactions earn their weight; which to cut?

**G. Mobile experience.** Every marquee interaction is hover/pointer-based. Define the touch equivalents (the expand list, DotGrid, arc timeline) so mobile isn't a downgrade.

**H. Naming & identity.** Is "Zaid Hossain" the brand, or is there a studio name? Tagline system, favicon/logo direction (currently a plain wordmark).

**Scoring habit (from this project's culture):** when comparing options, score each /10 on fit-to-brand and expected impact; push for ≥8.5 before settling; when multiple AIs ideate, converge on one recommendation rather than listing everything.
