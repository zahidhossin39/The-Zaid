# Hero critique — kimi, round 1

Audited: `desktop-1440.png`, `desktop-1920.png`, `phone-390.png`, `user-view.png`, plus `Hero.astro`, `GridBackground.astro`, `Navbar.astro`. Video verified on disk: `hero.mp4` is 960×720 (exactly 4:3, same as the box), so no CSS-level crop bug — the half-out-of-frame phone mockup in `phone-390.png` is just a later frame of the loop's own animation.

Layout arithmetic used throughout (from source): container `max-width: 76rem` = 1216px, padding 2rem → content measure **1152px**. Columns 7fr/5fr, gap 4rem (64px) → copy column ≈ 634px, media column ≈ 454px. Grid: `CELL=60`, lines at x = 30.5 + 60k, marks 10×1.7px at 15% on 7% hairlines.

---

## 1. Flaws

**1.1 — The background grid never aligns to the layout. Severity 8.**
`1152 / 60 = 19.2` — the content measure is not an integer number of cells, so the grid *cannot* align at both edges. At 1440px the content column starts at x=144; the nearest grid line is 150.5 — a systematic **6px miss**. At 1920px content starts at 384 vs. line at 390.5 — the same 6px miss. Every structural edge (headline left, card left/right, nav edges) lands mid-cell. Visible in all desktop screenshots once you look: the grid reads as wallpaper behind a layout that ignores it, instead of the layout being *set on* it. This is the single biggest "assembled, not designed" tell.

**1.2 — The card has no edge. Severity 8.**
Card background `#f6f4ef` on page `#ffffff` — the boundary is invisible except where the soft shadow happens to fall or where grid marks stop behind it. In `desktop-1920.png` the card nearly dissolves into the page; in `desktop-1440.png` you locate its top edge by the shadow, not the surface. A proof artifact should read as a solid object; this reads as a smudge of cream.

**1.3 — No response above 1216px. Severity 7.**
Container is hard-capped at 76rem and the video is hard-coded `width: 460`. In `desktop-1920.png` the composition occupies 60% of the viewport width; 384px of empty grid gutter on each side, and the card is 24% of viewport width — it looks like a laptop screenshot displayed on a monitor. The owner’s own `user-view.png` (~1905px wide) shows the same: he built this and is looking at it on exactly the viewport where it’s weakest.

**1.4 — The right column terminates in mid-air. Severity 6.**
At 1440: card bottom ≈ y595, "See examples" baseline ≈ y620, but the CTA button on the left bottoms at ≈ y648. The two columns share no bottom edge and no baseline. Even the top "alignment" (comment: *"top edge lines up with the headline"*) aligns the card to the headline’s em-box, not its cap height — the card optically floats ~10–14px above the top of the "M". Nothing on the right is registered to anything on the left.

**1.5 — The shadow is a muddy float. Severity 6.**
`0 30px 60px -35px rgba(10,10,11,.35)` is the only elevation on an otherwise flat page. A large grey halo under a cream card on white reads as dirt, not depth — visible as the grey fuzz under the card’s bottom edge in `phone-390.png`. Flat grid + one floating SaaS card is a Dribbble-shot cliché.

**1.6 — The pause button is a grey smudge on the film. Severity 5.**
`32px`, `rgba(10,10,11,.72)` at `opacity:.8` renders as a mid-grey circle sitting **on top of the video’s own content**, bottom-left, colliding with the film’s overlay column (visible in all four screenshots). It reads as a rendering artifact, not a control. Bonus: the script comment says *"Pause button in its top-right corner"*; the CSS puts it bottom-left — stale comment, and a sign this element was placed, not designed.

**1.7 — Grid texture runs behind body copy. Severity 5.**
Marks at 15% and hairlines at 7% pass directly behind the 17px sub text and the 15px nav links (clear in `desktop-1440.png` and `phone-390.png`). No masking anywhere. The texture has one opacity and one rule for the whole viewport — "grid everywhere" is a stock-component behavior, and it taxes the exact text that does the selling.

**1.8 — Four unrelated interaction idioms. Severity 6.**
Cursor-origin fill circle on the CTA (`#3a3a3a`, 550px circle, ported from another project per the code comment), opacity .7 fade on nav links, static `border-bottom` on "See examples", and the cursor-glow grid. Four inventions, no system. Each one alone is fine; together they say the parts came from different sources.

**1.9 — Plus marks are aliased. Severity 4.**
Arms are drawn at `ARM = 1.7`px with `fillRect` at integer origins — at DPR 1 (the screenshots) the arms straddle pixel boundaries and render as soft grey ticks instead of crisp pluses (look at any mark in `desktop-1440.png` at 100%). A hairline grid lives or dies on crispness; fuzzy marks make it look like a JPEG of a grid.

**1.10 — Radius incoherence. Severity 4.**
999px pills (CTA, nav pill), 20px card, perfect circle (pause), square grid, and a tight-tracked uppercase headline with sharp terminals. The soft 20px cream card belongs to a friendly-SaaS family; the type and grid are Swiss-stark. The two families never meet.

**1.11 — The only saturated color on the page is inside the proof. Severity 3.**
Strict B/W chrome + an iOS call screen means the green "Accept" / red "Decline" buttons are the de-facto accent colors of the whole hero (dominant in every screenshot). The film *should* be the focal point, so this half-works — but the chrome gives the eye literally nowhere else to land, so the hero’s color story is "iOS", not "Zaid".

**1.12 — Fade-up-everything entrance. Severity 3.**
`data-delay` 120/220/320/260 staggers every block separately. Invisible in stills, but it’s the default AI/template entrance recipe, and it delays the proof (the film) behind the copy it’s supposed to prove.

---

## 2. Grid verdict

- **Opacity: down.** `BASE` 0.15 → **0.10**. Cursor glow peak 0.85 → **0.45** (max total ≈ 0.55), `RADIUS` 150 → **120px**. The interaction should be a whisper; right now the glow is louder than the resting state deserves.
- **Cell size: up, and rationalized.** 60 → **72px**. Rationale: `1152 / 72 = 16` exactly — the content measure becomes 16 cells.
- **Aligned to the content column: yes, that’s the whole point.** Offset the canvas so a grid line sits exactly on the container’s content-left edge: `originX = ((viewportWidth − 1152) / 2) mod 72`. Then the headline’s left edge, the card’s right edge, and the nav all land on lines at every breakpoint ≥1216px.
- **Plus-mark size: down slightly.** 10 → **8px**, arm 1.7 → **1.5px**, and round all coordinates to whole device pixels (`Math.round(v * dpr) / dpr`) so marks are crisp at DPR 1.
- **Lines: off.** Delete the 0.07 hairlines entirely. A pure plus lattice is calmer, more distinctive, and kills the graph-paper cliché. (If the owner insists on lines, cap them at 0.04 — but off is the answer.)
- **Masked/faded: yes, two places.** (a) Linear fade to 0 over the **bottom 15vh** of the hero so the section dissolves instead of being cut. (b) A soft knockdown to ~30% strength behind the copy block (radial mask centered on the text column, feathered ~120px) so body text never sits on marks.
- **Interact with the video card: yes — a resting halo, not a gimmick.** Marks within 72px of the card’s bounding rect get **+0.20 opacity at all times**, so the card reads as *pinned to the lattice*. The cursor glow stays as-is (at the reduced peak). This single move ties the two visual systems together.

## 3. Video card verdict

- **Shadow: yes, but demoted.** `0 12px 32px -16px rgba(10,10,11,.22)` — grounds the card, doesn’t float it. The current 30/60/-35 smear goes.
- **Frame: yes, that’s the real fix.** `1px solid rgba(17,17,17,.15)` (go to `.25` if it still vanishes). The border defines the edge; the shadow only seats it. This directly fixes flaw 1.2.
- **Radius: 20 → 12px.** Closer to the type’s sharpness; 12 = 1/6 of the new 72px cell, so even the radius is on the system.
- **Background:** keep `#f6f4ef` only as the poster/loading surface; the video is opaque so the cream mostly stops mattering once the border exists.
- **Size: stop hard-coding 460px.** `width: 100%` of the media column, `aspect-ratio: 4/3`, and raise the container to **84rem (1344px)** → media column ≈ 507px at ≥1408px viewports, so the card grows on the owner’s 1900px screen instead of shrinking in proportion. Cap the media column at ~520px.
- **Position:** right edge flush with the container’s right edge *and* a grid line (falls out of the 72px alignment). Vertically, `align-items: center` against the copy block — or keep top alignment but drop the card `margin-top: 0.75rem` so its top optically matches the headline cap height. Either rule is fine; "same as the em-box" is not.
- **3D tilt/box: no.** Three reasons: (1) the grid already supplies the hero’s motion budget via the cursor glow — a second physics system on the card competes with it; (2) tilt on a 4:3 UI recording makes the film’s small text shimmer and moiré against its own rounded frame; (3) the brand promise is "calm and honest" — a card that leans toward your cursor is the opposite register. A static, perfectly registered card is the confident move.
- **Pause button: get it off the film.** Replace the overlaid circle with a caption row 12px below the card: left side a **13px uppercase, letter-spacing .04em, #111 "Pause"/"Play" text button**; right side the existing link. Same WCAG 2.2.2 compliance, zero chrome on the footage, and it gives the orphan link a sibling.
- **"See examples ↓": keep, restyle.** In that caption row: `font-size .875rem`, weight 500, **no border at rest**, `border-bottom: 1px solid` on hover only (matching the nav’s hover-only feedback idiom — one system). Keep the ↓.

## 4. What makes it look AI-generated / template-y

1. A grid background whose cell size has no mathematical relationship to the layout it sits behind (60px vs 1152px; 6px miss at every breakpoint).
2. The grid is a **verbatim replica of the Framer "grid-background" component** — the source comment says so. Anyone who has browsed Framer templates recognizes the plus-mark lattice with cursor glow on sight.
3. Cream card + oversized soft shadow + 20px radius = the default "product screenshot card" from every SaaS template.
4. Black pill CTA with a calendar icon — the single most common AI-generated button on the internet right now.
5. Cursor-origin fill hover ported from a different project (per code comment) — a trophy interaction with no relationship to this page’s system.
6. Fade-up stagger on every block (`data-delay` 120/220/260/320) — the template entrance recipe.
7. Four hover idioms with no shared rule (fill circle / opacity / static underline / glow).
8. `text-wrap: balance` + `clamp()` + uppercase tight-tracking headline — correct, but it is *the* current AI hero typography formula, unmodified.
9. Fixed pixel media (460px) inside a fixed pixel container (1216px) — templates are designed at one viewport; this one was too.
10. Chrome placed by compliance, not composed: the pause button dropped on the film’s corner at whatever coordinate the snippet used, over the film’s own content.

## 5. Three fix directions

### Direction A — "Snap" (grid discipline pass)

Same two-column hero, but everything is forced onto one mathematical system. This is the low-risk, high-polish option.

- **Layout:** container 76 → **84rem** (1344px), padding 2rem → content 1280px = **16 cells × 80px**. `grid-template-columns: repeat(16, 1fr)`, gap 0. Copy spans cols 1–9 (720px), col 10 is the gutter (80px), media spans cols 11–16 (480px). `align-items: center`.
- **Grid:** CELL **80px**, origin aligned to content-left edge; marks **8px**, arm 1.5px, `BASE` **0.10**, lines **off**; cursor glow peak 0.45, radius 120px; card halo +0.20 within 80px of the card rect; bottom 15vh linear fade; 30% knockdown behind copy block.
- **Card:** width 100% of column (**480px** → 480×360), radius **12px**, border `1px rgba(17,17,17,.15)`, shadow `0 12px 32px -16px rgba(10,10,11,.22)`, no tilt. Caption row 12px below: "Pause" (13px uppercase) left, "See examples ↓" (14px/500, underline on hover) right.
- **Type:** headline `clamp(2.75rem, 5vw, 4.75rem)`, line-height .92, letter-spacing -.03em, max-width 15ch. Sub 18px/1.55, max-width 40ch, margin-top 1.5rem. CTA margin-top 2.5rem, padding 15px 30px, pill unchanged.
- **Mobile:** stack at 767px as now, card 100% width, gap 3rem, caption row unchanged.
- **Trades away:** novelty. It is still the same composition everyone has; the win is craft, not concept.
- **Predicted score: 8/10.** Fixes flaws 1.1–1.10 mechanically; what it can’t fix is that the *idea* is conventional.

### Direction B — "Editorial spread"

Break the SaaS two-column symmetry: headline becomes a full-width typographic block, and the card becomes a pinned artifact on a calmer lattice.

- **Layout:** container 84rem (as A). Headline spans all 16 columns. Below it (margin-top 4rem): a 16-column row — left block (sub + CTA stacked) spans cols 1–6 (480px), **bottom-aligned**; card spans cols 10–16 (560px), its **bottom edge aligned with the CTA’s bottom edge** — the one strict registration in the piece, replacing the current nothing-aligns state.
- **Grid:** CELL 80px, aligned as A; marks **10px** at `BASE` **0.12**, lines off; **masked to ~20% strength behind the headline block** (radial, feather 160px) so the big type sits in a quiet field and the grid lives in the negative space around it; bottom 15vh fade. No cursor glow at all — the composition is static and confident; the card halo (+0.20) stays.
- **Card:** **flat — no shadow**, `1px solid #111111`, radius **8px**, 560×420. The hard 1px black frame on the white field is the editorial gesture; the card reads as a mounted print, not a floating widget. Caption row as A, but 16px below.
- **Type:** headline `clamp(3rem, 7.2vw, 6.5rem)`, line-height .9, max-width none (full measure, `text-wrap: balance` keeps it to 2 lines). Sub 18px/1.55, max-width 36ch, margin-bottom 2.5rem; CTA below it (stacked, not beside).
- **Trades away:** the tight claim-then-proof adjacency (card now sits low-right); above-fold fit is risky at 768px-tall windows (total stack ≈ 860px at 6.5rem headline — needs the clamp to bite); the friendly SaaS clarity becomes poster-like and colder.
- **Predicted score: 8.5/10.** Most distinctive of the three and kills every alignment/edge flaw by construction, but it bets the hero on typography alone and gives up the immediate "see the system working" glance.

### Direction C — "Split stage"

Give the proof a stage: the hero splits into a white copy zone and a dark media zone, pre-echoing the dark sections below — and the existing `mix-blend-mode: difference` navbar finally pays off.

- **Layout:** container 84rem; hero-inner becomes two zones, full viewport height. Left **9 columns (720px)** white `#ffffff`: copy vertically centered. Right **7 columns (560px)** dark `#0a0a0b`, full-height panel whose left edge lands exactly on grid column line 10. Card sits inside the dark panel, vertically centered, inset 56px → **448×336**.
- **Grid:** CELL **72px**, origin aligned to content-left (`1280 = 16×80`? no — here use 72 with container 76rem: `1152 = 16×72`; keep container at **76rem** for this direction). One canvas spanning both zones; marks **8px @ 0.10** in `#111` on the white side, **`#f6f4ef` @ 0.12** on the dark side (the canvas knows the split x). Lines off both sides. Cursor glow kept, colored per zone. Bottom 15vh fade on the white side only.
- **Card:** radius 12px, border `1px rgba(246,244,239,.22)`, shadow `0 24px 48px -24px rgba(0,0,0,.5)` (real depth is legal on a dark stage). No tilt. Caption row inside the dark panel under the card: "Pause" and "See examples ↓" in `#f6f4ef` at 70% opacity.
- **Type:** headline `clamp(3rem, 5vw, 5rem)`, max-width 12ch (the narrower white zone makes it taller — 4 lines is fine, it becomes the texture of the left side). Sub 18px/1.55, margin-top 1.75rem. CTA unchanged black pill, margin-top 2.75rem.
- **Mobile:** stack — white copy block, then the dark panel full-width with the card inside (padding 3rem 1.5rem).
- **Trades away:** the airy all-white opener — the hero gets dramatically darker, arguably less "calm"; implementation cost is the highest of the three (zone-aware canvas, zone-aware navbar is already free via `difference`); the dark panel competes with the next dark section for novelty.
- **Predicted score: 8.5/10** (9 if the panel edge and grid registration are pixel-perfect). It solves the card-edge flaw by environment instead of cosmetics, makes the proof literally the brightest thing in a dark room, and gives the page a color story that isn’t "iOS green".

## 6. Score of the current hero: 5/10

- **−1:** the background grid is systematically 6px off the layout at every breakpoint — the foundational system contradicts the composition.
- **−1:** the proof card has no edge — cream on white, declared only by a muddy shadow; it dissolves at 1920px.
- **−1:** the right column is registered to nothing — card bottom, link baseline, and CTA bottom all miss each other by 10–30px.
- **−1:** no response above 1216px — on the owner’s own ~1900px screen the hero is 40% empty gutter with a shrunken card.
- **−1:** texture and chrome noise — marks behind body text, aliased plus arms, a grey pause smudge on the film, and four unrelated interaction idioms.

It stays at 5 rather than lower because the typography itself is well-handled, the color restraint is real, and a 27-second proof film as the hero artifact is the right idea — it’s the framing that fails it.
