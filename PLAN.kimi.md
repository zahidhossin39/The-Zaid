# PLAN.kimi.md — Zaid Portfolio (Astro + Tailwind, one page)

Independent design and build plan, based on `BRIEF.md`. Every significant
choice gets a **Why** (one line) and a **Cost** (one line). I commit to one
recommendation per open question — no hedging.

Stack assumptions: Astro 5, Tailwind v4 (via `@tailwindcss/vite`), all project
data in `projects.json` imported at build time, deployed to Cloudflare Pages.
Fully static output, zero client-side framework.

---

## 1. Section-by-section layout

Global skeleton: single centered column, max width `64rem` (1024px), sections
separated by generous vertical space, not dividers. Left-aligned text
throughout except the final CTA — a centered one-pager reads like a landing
page ad; left-aligned reads like a person talking.

### 1. Hero
- **Composition:** Full-viewport height (`min-h-svh`), single column, text
  max-width `44rem`, left-aligned. Vertical centering slightly above true
  center (`justify-center` with extra bottom padding) so the fold hints at
  content below.
- **Stack, top to bottom:** small amber eyebrow (`ZAID HOSSAIN — BUILDER FOR
  HIRE` in mono caps) → h1 (2 lines max, dominates the viewport) → 18px muted
  subheadline (2 lines) → one amber button + one quiet text link
  ("see the work ↓") beside it.
- **No photo, no illustration, no hero graphic.** The dominant element is the
  headline and the negative space around it. Only decoration: a 1px amber
  gradient hairline under the eyebrow, fading right.
- **Eye path:** eyebrow → headline → sub → button. Nothing competes.
- **Why:** The audience is skeptical of sales pages; restraint is the
  positioning. A big confident sentence on black space says "craftsman," not
  "marketer."
- **Cost:** An empty hero can read as unfinished to some visitors; it lives or
  dies on the headline copy being excellent.

### 2. The problem
- **Composition:** Two columns on desktop (`5fr 7fr`), one column on mobile.
  Left: sticky label (`THE PROBLEM`, amber mono caps) that stays pinned while
  the right column scrolls. Right: 3 short paragraphs, each opening with a
  bold lead-in sentence in primary text, rest in muted. Paragraph 1 names the
  founder's stuck idea; paragraph 2 names the owner's manual process;
  paragraph 3 names the shared cost ("another quarter of later").
- **Dominant element:** the text itself, set larger than body (`1.25rem`).
- **Why:** Naming their problem before mentioning anything I sell is the
  brief's core voice rule; the sticky label keeps the frame visible the whole
  time they're nodding along.
- **Cost:** Sticky labels add nothing on mobile (it collapses to a static
  heading) — fine, just don't fake it there.

### 3. What I build (3 types)
- **Composition:** Full-width section head (small amber eyebrow + h2), then a
  3-column grid (`repeat(3, 1fr)`, stacks on mobile). Each card: amber mono
  number (`01`), h3 title ("A working app" / "A site that earns" / "The busywork, automated" — final copy TBD), one
  sentence of description, small muted tag row at the bottom.
- **Cards are flat:** 1px border, elevated surface, no shadows at rest. Equal
  visual weight across the three.
- **Dominant element:** the three numbers — the eye sweeps 01 → 02 → 03.
- **Why:** Three equal cards communicates "three shapes of the same service"
  without a services menu, which would sound like an agency rate card.
- **Cost:** Equal-weight cards give no hierarchy; if one type matters more
  commercially, this layout can't say so.

### 4. Proof grid — sticky (see §5 for card internals and embed strategy)
- **Composition:** Two columns (`5fr 7fr`). Left column is `position: sticky`
  (top offset `6rem`): eyebrow (`PROOF`), h2 ("Things I built that were stuck
  first"), one supporting line, and a running counter (`01 / 04`) that updates
  as cards scroll past. Right column: the 4 project cards stacked vertically
  with `3rem` gaps — not a 2×2 grid.
- **Why stacked, not 2×2:** each card carries a 16:9 video; at half-width the
  video is too small to be proof of anything. Full-column-width videos are the
  dominant element, as they should be in the section that closes the sale.
- **Why sticky:** the brief asks for it, and it works here — the left column
  keeps re-framing every card as "another stuck thing, un-stuck" while you
  scroll, and the counter gives a sense of progress through the evidence.
- **Cost:** Sticky + 4 tall cards makes this the longest section on the page
  (~3–4 viewports); if the videos are weak, it's the longest weak section.

### 5. How it works (3 steps)
- **Composition:** Full-width head, then a 3-column rail with a horizontal
  1px connecting line behind the step markers on desktop (line hidden on
  mobile, becomes vertical). Each step: amber circle marker with number, h3
  ("Tell me what's stuck" → "Watch it get built" → "Get the keys"), 2 short
  sentences each.
- **Dominant element:** the spine — the eye travels left to right along the
  process, mirroring "this is a straight line, not a maze."
- **Why:** Three steps with a literal connecting line visually argues the
  core promise (low friction) better than another paragraph could.
- **Cost:** It's the most generic section shape on the page (every SaaS site
  has one); it earns its place only if the copy is concrete about timelines
  and what the client sees each week.

### 6. About
- **Composition:** Two columns (`4fr 8fr`). Left: the photo — grayscale, 1px
  border, `2deg` rotate, no filter effects beyond that. Right: first-person
  story in 3 short paragraphs (who I am, why I build for stuck people, what
  working with me is like), then a row of text links: GitHub / X / LinkedIn /
  `hello.zaidhossain@gmail.com`.
- **Dominant element:** the story; the photo is a supporting proof-of-person.
- **Why:** Grayscale photo on near-black with one amber link row keeps the
  human warmth without breaking the palette; photo here (not hero) matches
  the brief — trust is earned after the pitch, not before.
- **Cost:** A rotated grayscale portrait is a recognizable indie-maker trope;
  mildly cliché, but clichés are cheap and this one reads instantly.

### 7. Book a call
- **Composition:** The only centered section. Eyebrow + h2 ("Tell me what
  you're trying to build"), one line of sub, then a full-width elevated
  surface card (`max-w 48rem`, centered) containing the Cal.com inline embed.
  Below the card, a quiet fallback: "Rather write it down?
  hello.zaidhossain@gmail.com".
- **Dominant element:** the embed card — it gets the only strong surface
  elevation on the page.
- **Why:** One path only, per the brief; centering + elevation makes the final
  section feel like a destination, and the embed heading echoes the form
  question so there's zero copy dissonance.
- **Cost:** Cal.com's embed is third-party JS with its own fonts/theme — it
  will never look fully native; mitigate with Cal's dark theme and matching
  brand color set to the amber.

---

## 2. Typography

**Fonts:** `Fraunces` (display, weights 500–600, optical sizing on, Google
Fonts, `font-display: swap`) for h1/h2/h3; `Inter` (400/500) for body, UI,
and small text; `JetBrains Mono` or system mono for eyebrows/numbers (system
mono `ui-monospace` is fine — skip the third font if weight matters).

- **Why the pairing:** A soft serif display reads editorial and human — the
  opposite of the geometric-sans "AI automation agency" look the brief
  forbids — while Inter stays invisible and legible at small sizes.
- **Cost:** Fraunces is distinctive enough that some will read it as
  "literary"; and two webfont families cost ~100–140KB (subset + `woff2` +
  preload mitigates).

**Scale** (desktop; mobile h1/h2 scale down via `clamp`):

| Element | Size | Line-height | Weight / style |
|---|---|---|---|
| h1 | `clamp(2.75rem, 6vw, 4rem)` | 1.05 | Fraunces 600 |
| h2 | `2.5rem` (mobile `2rem`) | 1.15 | Fraunces 600 |
| h3 | `1.25rem` | 1.3 | Fraunces 500 |
| lead (problem paragraphs) | `1.25rem` | 1.55 | Inter 400 |
| body | `1.125rem` | 1.6 | Inter 400 |
| small / eyebrow | `0.8125rem` | 1.4 | mono, uppercase, `tracking 0.12em`, amber |

---

## 3. Color

| Token | Hex | Usage |
|---|---|---|
| `bg` | `#0A0A0B` | page background (near-black, barely blue) |
| `surface` | `#141417` | cards, Cal embed container |
| `text` | `#F4F2ED` | primary text (warm white, not pure) |
| `muted` | `#9C9A94` | secondary text |
| `border` | `#26262B` | hairlines, card borders |
| `amber` | `#F59E0B` | accent: eyebrows, numbers, CTA bg, links on hover |
| `amber-hover` | `#FBBF24` | CTA hover (lighter = "lit up" on dark) |

**WCAG AA check (computed):** `#F59E0B` on `#0A0A0B` ≈ **9.2:1** — passes AA
and AAA for all text sizes. `#9C9A94` on `#0A0A0B` ≈ 7.1:1 — passes AAA.
`#F4F2ED` on `#0A0A0B` ≈ 17:1. The CTA button uses **dark text (`#0A0A0B`)
on amber**, not amber text on dark, for the button label: contrast ≈ 9.2:1,
and a filled button reads as the single action on the page.

- **Why:** One warm accent on near-black is the brief; warm-white text and a
  barely-blue black keep it from feeling like a terminal.
- **Cost:** Amber is heavily associated with "warning" in UI; used only for
  accents and the single CTA, never for alerts, this stays decorative.

---

## 4. Spacing and rhythm

- **Content width:** `64rem` max, `1.5rem` side gutters (mobile) to `2rem`
  (desktop).
- **Section padding:** `8rem` top/bottom desktop, `5rem` mobile (`py-32` /
  `py-20`). No dividers between sections — whitespace is the separator.
- **Scale:** Tailwind's default 4px scale, restricted in practice to
  `4, 8, 12, 16, 24, 32, 48, 64, 96, 128px`. Inside components: `16–24px`
  gaps; between a section head and its content: `48px`; between sections:
  the `128px` padding.
- **Why:** One rhythm (powers of the same scale) is what makes a one-pager
  feel designed rather than assembled; big section gaps slow the scroll and
  suit the calm, non-salesy voice.
- **Cost:** `128px` sections make the page long; on a page whose job is one
  conversion, some will argue for tighter packing. I accept the length — the
  audience needs convincing, not speed.

---

## 5. The proof grid

**Card at rest (before click):**
- Top: 16:9 video area showing the YouTube thumbnail
  (`i.ytimg.com/vi/<id>/maxresdefault.jpg`, fall back to `hqdefault.jpg` on
  error), with a custom play button — amber circle, dark triangle, slight
  scale-up on hover. No YouTube chrome, no YouTube branding until clicked.
- Below the video, inside the card: h3 project title → one line labeled
  `Stuck:` (the problem, muted) → one line labeled `Now:` (the outcome,
  primary text — the outcome line gets the visual emphasis, not the problem)
  → tag row → two links: "Watch the walkthrough" (scrolls/plays the embed)
  and "Visit it live ↗" (amber, the primary action).
- Whole card: `surface` bg, 1px `border`, hover = translate up `4px` + border
  brightens toward amber. The "Stuck → Now" pair is the card's spine and
  exists in `projects.json` as the one-line problem / one-line outcome.

**Handling 4 YouTube iframes — facade pattern, specifically `lite-youtube-embed`:**
- Ship zero YouTube JavaScript on load. Each card renders the thumbnail +
  play button facade; the real `<iframe>` (with `autoplay=1`) is only
  injected on click. This is the well-established lite-embed pattern;
  `lite-youtube-embed` is a ~3KB web component that does exactly this.
- Thumbnails lazy-load via native `loading="lazy"` + `IntersectionObserver`
  is unnecessary; native lazy is enough.
- **Why:** Four real embeds cost ~1–2MB of JS and several seconds of main-thread
  time and would wreck the page's first impression; the facade makes the
  proof section effectively free until someone actually wants to watch.
- **Cost:** Thumbnails come from Google's CDN (external requests you can't
  self-host, `maxresdefault` missing for some videos → needs the fallback),
  and click-to-play adds one extra click vs. a real embed. Both acceptable;
  the alternative (self-hosting) was already rejected in the brief.

---

## 6. Motion for v1

**Commit: CSS + one ~20-line IntersectionObserver script. No GSAP, no
animation library in v1.**

- **Hero reveal:** CSS `@keyframes` — headline fades up `12px` with opacity,
  eyebrow/sub/CTA follow with `100ms` staggered `animation-delay`. Runs once
  on load, `prefers-reduced-motion` disables it.
- **Scroll fade-ups:** one IntersectionObserver adds an `.in-view` class;
  CSS transition handles `opacity 0→1, translateY 16px→0, 500ms ease-out`.
  Same class reused on every section head and card. Unobserve after first
  trigger (no re-animation on scroll back).
- **Hover lifts:** pure CSS `transform` + border-color transition (`150ms`).
- **Sticky proof:** `position: sticky` — zero JS. The `01/04` counter is the
  only JS in that section (second small observer, or folded into the same one).
- **Why:** Everything in v1's motion list is entrance/exit/hover — all of it
  is declarative and CSS-native; a library would add 50KB+ and a learning
  surface to solve problems v1 doesn't have. GSAP earns its place later for
  pinned/scrubbed sequences, exactly as the brief stages it.
- **Cost:** CSS transitions can't do scroll-scrubbed choreography, so the
  sticky proof section in v1 is "sticky + fade-ups," not a pinned cinematic
  sequence — that's the deferred v2 work, accepted by the brief.

---

## 7. Three hero headline options

**Option 1 (recommended):**
> **The thing you keep putting off — I'll build it.**
> Founders bring me the idea that's been stuck in a notes app for a year.
> Business owners bring me the process they still do by hand. Both leave with
> something that works.
> **CTA: "Tell me what's stuck"**

Uses the brief's frame verbatim, and the CTA text tees up the Cal.com form
question ("what are you trying to build?") so the click and the form feel
like one motion. Cost: "the thing" repeated across hero + CTA + section copy
needs discipline or it becomes a tic.

**Option 2:**
> **You've had the idea long enough.**
> I build the app, site, or automation you've been circling for months —
> scoped tight, built in the open, handed over working. It starts with one
> short call.
> **CTA: "Book a 20-minute call"**

More confrontational and founder-leaning; the specificity of "20 minutes"
lowers commitment fear. Cost: skews toward the founder audience and mildly
scolds — the stuck-process owner may not see themselves in "the idea."

**Option 3:**
> **Still doing it the hard way?**
> The spreadsheet process eating your Sundays. The app you sketch on napkins
> but never start. I turn stuck ideas and manual work into working software —
> you just describe the problem.
> **CTA: "Describe your stuck thing"**

Question-format hook, skews toward the process owner; the napkin/spreadsheet
pair covers both audiences in the sub. Cost: question headlines are the most
ad-like of the three shapes, which is exactly the tone the brief warns
against.

**Recommendation: Option 1.** It is the positioning statement itself, covers
both audiences symmetrically in the sub, and the CTA-to-form handoff is the
strongest of the three.

---

## 8. The biggest risk

**The proof section carries the whole site, and it will launch with
placeholder videos.** Every other section makes a promise; only the proof
grid provides evidence. A skeptical founder who clicks a card and sees a
placeholder or a thin demo will discount everything above it — the sticky
section, the fade-ups, the amber CTA all amplify whatever is in those cards,
good or bad.

**What I'd do about it:**
1. **Make the live link the primary action on every card** (amber,
   top-right), and the video secondary. A working product someone can click
   through is real proof today; the walkthrough video is a bonus until the
   real recordings exist.
2. **Let the "Stuck → Now" copy carry the persuasion.** One concrete,
   specific outcome sentence ("cut quote turnaround from 2 days to 10
   minutes") does more than any placeholder video. No vague outcomes allowed
   in `projects.json` — that's a content rule, enforced at review.
3. **Ship with placeholders rather than delay**, but treat recording the four
   walkthroughs as the site's first post-launch task, not a someday item —
   the brief's GSAP phase should wait until after them, since polish on top
   of weak proof is wasted.

---

## Build order (for execution, not part of the design spec)

1. `astro init` (minimal) + Tailwind v4, tokens above as CSS custom
   properties, fonts preloaded.
2. Static markup for all 7 sections with real copy except hero headline
   (drop in all 3 options behind HTML comments; Zaid picks).
3. `projects.json` schema + proof grid + `lite-youtube-embed`.
4. Motion pass (hero keyframes, observer fade-ups, hovers, sticky + counter).
5. Cal.com inline embed + email fallback, favicon/OG meta, `prefers-reduced-motion` audit.
6. Local commit at each step; deploy to Cloudflare Pages; no push without
   asking, per brief.
