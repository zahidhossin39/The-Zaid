# Ideation Handoff: Zaid Hossain portfolio site

A fresh agent should read this top to bottom once. Sections 1 to 3 are settled; don't re-litigate them. Last updated 2026-09-24.

---

## 1. Executive summary

**What:** A single-page portfolio site for **Zaid Hossain**, a solo builder for small businesses.

**Who it's for:** Non-technical small-business owners, local and online, globally. Their business has outgrown their hours.

**Positioning:** The site leads with **growth, not deliverables**. Core line: "More customers shouldn't mean more hours."
- **Services:** exactly two, **Websites** (bring customers in) and **Automations** (handle the work each customer creates).
- **Apps** are not a service. They appear only in About, as a hobby and background.
- He has **no clients yet**. The one goal is booking a free 20-minute call.

**Voice:** calm, honest builder. Full rules are in `.claude/brand-voice-guidelines.md`, which must be followed for any copy. In short:
- I and you, never "we". Plain words, short sentences.
- No hype, no humour, no exclamation marks, no em dashes.
- Promise only what's true.

---

## 2. Settled foundations: do NOT change

**Stack**
- **Astro 7** (static) + **Tailwind v4** via `@tailwindcss/vite`. No React.
- **Lenis** smooth scroll in `Base.astro`. It respects `prefers-reduced-motion`.
- **gsap** + `InertiaPlugin`, used only by the hero DotGrid.
- Windows dev machine, `npm`, dev server on `localhost:4321` (launch config "dev").

**Colour:** pure **black and white**, with no accent colour (amber was removed). In `global.css`, `--color-accent` is `#F4F2ED`, an off-white neutral, so older `text-accent` classes stay monochrome. The sections alternate white, dark and cream: the hero is white, "What I build" is a white band, Process is cream, and the rest is dark.

**Fonts:** Instrument Serif for headings, Inter for body text, Inter Tight for the hero, PT Sans Narrow for the "What I build" list, mono for eyebrows.

**Architecture rules**
- One page: `src/pages/index.astro` composes the sections in `src/components/`. Throwaway prototypes go in `src/pages/lab/`.
- Anything with `.reveal` + `data-delay` that's already in the viewport on load reveals immediately.
- Images live in `public/` as **WebP** (`zaid.webp`, `clay-web.webp`, `clay-auto.webp`). The original PNG and JPG files are only kept as sources.
- **Mobile rule:** every hover interaction needs a touch equivalent, gated with `(hover: none)` / `(hover: hover)`, not with screen width alone. Section 3 lists the equivalents.

**Working rules**
- Commit freely at verified milestones. **Never `git push` without asking.**
- **Stage specific paths only (`git add <paths>`), never `git add -A`.** `mockups/hero-styles/` holds unrelated untracked files that must stay out of commits.
- Verify before claiming something is done:
  - **Built-in browser pane:** it's often hidden or narrow. When it's hidden it pauses animation frames and transitions, so a blank canvas or `opacity: 0` there is usually not a bug.
  - **Headless screenshots are more reliable for phone widths.** Use `puppeteer-core` (installed) with the system Chrome at `C:/Program Files/Google/Chrome/Application/chrome.exe`. The shell sandbox blocks localhost, so those commands need the sandbox disabled.
  - If the dev server is down, restart it with `preview_start` name "dev".
- Delegation: research goes to Gemini (agy). Claude writes code unless the user names an agent. Whole-codebase review stays with Claude.

---

## 3. Current state

Page order: **Navbar → Hero → Problem → WhatIBuild → Proof → Process → About → FAQ → BookACall (+ footer)**.

- **Navbar:** transparent, with `mix-blend-mode: difference`. Links are Work, About and Book a call. On phones:
  - It hides on scroll down and comes back on scroll up (headroom).
  - "About" is hidden below 400px.
  - Every link has at least a 44px tap area.
- **Hero** (white):
  - Headline "More customers shouldn't mean more hours." CTA "Book a free 20-min call", with a button fill that grows from the cursor.
  - Trust line: "Fixed price, agreed upfront · Final payment when it works as agreed · You own everything".
  - DotGrid canvas background. Dots follow the cursor; on touch, a tap sends out a shockwave.
  - A showreel video placeholder sits on the right. It stacks under the text below 768px.
- **Problem:** "Right now, every new customer costs you time." → "More customers. Same number of hours."
- **WhatIBuild** (white band): an expand-on-hover list with two rows, Websites and Automations, each with a warm-clay card that rotates into place and settles at -5°.
  - **Touch and phones:** rows stay open. Each card rotates in when its row scrolls into view (the `.is-on` class, set by an IntersectionObserver).
  - On phones the card sits under the text.
- **Proof:** "Examples", with two labelled **demo** projects built as coded mockups (a booking site and a lead follow-up automation) in `ProjectCard.astro`, with data in `src/data/projects.json`.
  - On phones the booking mockup stacks like a mobile site and the automation flow runs vertically. The "01 / 02" counter shows only from md up.
  - Later, real projects will replace the demos via the `youtubeId` / `liveUrl` fields.
- **Process** (cream): a five-phase arc timeline.
  - Desktop: numbers ride a vertical arc on the left.
  - **At 1024px and below:** the same arc becomes a horizontal dial along the bottom of the screen. The active number sits at the top of the dial, with past phases to the left and upcoming ones to the right.
  - The sound was removed.
- **About:** photo plus a short story. The apps appear here as background. The social links are still **placeholders**.
- **FAQ:** eight questions in a native `<details>` accordion (cost, time, what can be automated, keeping up with growth, technical, not liking it, ownership, after handover).
- **BookACall:** "Tell me where your time goes." Cal.com inline embed plus email `hello.zaidhossain@gmail.com`.

**Deferred technical pass (the user wants this last):**
- Real Cal.com handle. `CAL_LINK = "zaid/20min"` currently returns a 404.
- Hero showreel video (`/hero.mp4` + poster).
- Real GitHub, X and LinkedIn links.
- 2 or 3 personal details for About.
- Real demo projects.

**Illustration style:** warm faceless clay. The people have blank rounded heads with dot eyes only: no nose, lips or ears.

---

## 4. Ideation canvas (history)

Resolved so far: A (demo projects), B (fixed price, final payment on delivery), D (copy done), E (FAQ added), G (mobile touch versions done). Still open: C (whether a short qualifier form beats a plain booking link), F (motion budget), H (naming and identity).

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
