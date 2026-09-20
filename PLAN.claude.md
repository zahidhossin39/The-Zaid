# Plan — Claude (independent)

Written without seeing PLAN.kimi.md.

## Core thesis

The site's job is to feel like it was made by someone with taste, using almost nothing. Whitespace, type, and one accent — no illustration, no stock, no gradients-as-decoration. Every dev portfolio is centered Inter on dark with a blue accent. Breaking two of those three is the whole differentiation strategy.

## 1. Section-by-section composition

**Hero** — Left-aligned, NOT centered. Content sits in the left 60% of a 1120px container, right 40% deliberately empty except a soft amber radial glow bleeding off the top-right edge. H1 is a large serif, max 3 lines. Subhead capped at 620px. One amber button + a quiet text link below it.
*Good:* left-alignment + asymmetry instantly separates it from the centered-hero template. *Bad:* asymmetry is harder to keep balanced on tablet widths.

**Problem** — No cards, no columns. A single narrow (680px) centered text column, three short escalating lines with large spacing between them, each fading up on scroll. This is the emotional beat; density would kill it.
*Good:* the restraint makes it land. *Bad:* if the copy is weak, there's nothing to hide behind.

**What I build** — Three numbered rows, full width, separated by hairline dividers. Each row: mono index (01) and a small label on the left, title + two lines of body on the right. NOT three icon cards.
*Good:* a list reads more confident than boxes; icon cards are the single most generic pattern in this genre. *Bad:* less scannable than cards at a glance.

**Proof** — Two columns on desktop: section heading `position: sticky` on the left while a single column of project cards scrolls past on the right. This is the brief's "sticky proof section" for free, with zero JS. Cards: thumbnail + play button, title, one `problem → outcome` line, mono tags, live-link arrow.
*Good:* the sticky heading keeps context during the longest section and feels considered. *Bad:* needs a plain stacked fallback under 1024px.

**How it works** — Three steps horizontally on desktop, connected by a hairline with amber dots. Short. This section exists to reduce fear of hiring a stranger.

**About** — Two columns: photo left (grayscale by default, full color on hover), story + social links right. Photo capped around 360px — big enough to be human, small enough not to be a headshot page.

**Book a call** — Full-width band with a faint amber tint, short headline, Cal.com inline embed. Final element on the page, no footer links competing with it.

## 2. Typography

- **Instrument Serif** — h1 and section h2s only
- **Inter** — everything else
- Mono labels: skip a third family in v1; use Inter uppercase with wide tracking. Add JetBrains Mono only if the labels look weak.

*Why:* every competitor is 100% Inter. A serif headline on near-black reads editorial and human — it says "a person made this", which is exactly the pitch. Inter underneath keeps it from feeling precious.
*Bad:* serif + dark can tip twee if the sizes are timid. Mitigation: go big or don't do it.

Scale: h1 `clamp(3rem, 7vw, 5.25rem)` / h2 `clamp(2rem, 4vw, 3rem)` / h3 `1.375rem` / body `1.0625rem` / small `0.875rem`. Body line-height 1.65, headings 1.05.

## 3. Color

| Token | Hex |
|---|---|
| bg | `#0A0A0B` |
| surface | `#141416` |
| border | `#26262A` |
| text | `#F5F5F4` |
| muted | `#A1A1A6` |
| accent | `#FFA524` |
| accent-hover | `#FFB84D` |

Amber `#FFA524` on `#0A0A0B` ≈ 11:1 — passes AA and AAA. Buttons invert: `#0A0A0B` text on amber, also ~11:1. Muted `#A1A1A6` on bg ≈ 8.9:1, safe for body.

## 4. Spacing

8px base scale. Section padding `96px` mobile → `160px` desktop. Container max 1120px; any text column capped at 680px regardless of container. Generous, consistent, boring — the rhythm is what makes minimal look expensive.

## 5. Proof grid + YouTube

**Facade pattern.** Render a thumbnail image + play button; inject the real iframe only on click. Four live embeds would pull ~4MB, open four third-party connections, and wreck the load. The facade costs ~15 lines and makes the heaviest section nearly free.
*Bad:* one extra click before playback. Worth it.

Single column of wide cards, not a 2x2 grid — wide cards give the 16:9 thumbnail room to actually sell, and four cards in a 2x2 grid looks like a checkerboard of placeholders while the content is fake.

## 6. Motion (v1)

**CSS transitions + IntersectionObserver. No GSAP.** Fade-up on scroll, hover lifts, button press states, and `position: sticky` for the proof section — none of that needs a library. GSAP + ScrollTrigger is ~70KB for effects we're explicitly deferring until real content exists.
*Good:* zero dependencies, nothing to fight when the heavy pass lands later. *Bad:* if he later wants pinned scroll-driven sequences, that's a real GSAP install then — but that's the staged plan anyway.
`prefers-reduced-motion` respected globally.

## 7. Hero headline options

**A — the guilt open**
> **You've been meaning to build it for months.**
> I'm the part that actually ships. Apps, automations, and internal tools for people who ran out of time — not ideas.
> `Book a call` · *or see what I've built ↓*

**B — the hard truth**
> **Everyone has the idea. Almost nobody ships it.**
> I build the thing you keep putting off — the app, the automation, the site that's been "next month" since spring.
> `Book a call`

**C — the reframe**
> **Your idea doesn't have a problem. It has a to-do list.**
> I take the thing that's been sitting at the bottom of it and make it real.
> `Book a call`

A is safest and most universal. B is the most confident and most quotable. C is the cleverest and the riskiest.

## 8. Biggest risk

**The proof section is fake, and it carries the entire site.** Everything above it is a promise; the projects are the only evidence. Placeholder YouTube videos mean the most important section is the least real, and it is tempting to write copy around projects that don't exist yet.

Mitigation: design the proof cards to look correct with exactly four, keep placeholder copy obviously neutral (no invented client outcomes), and treat the site as unlaunchable until the four real videos exist. The site can be *built* now; it must not go live now.
