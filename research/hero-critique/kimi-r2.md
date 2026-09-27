# Hero critique — kimi, round 2

Verification pass before writing: re-read all three r1 reports, re-checked `Hero.astro`, `GridBackground.astro`, `Navbar.astro`, `global.css`, all four screenshots, and ran ffprobe on `public/hero.mp4` (960×720, **29.7s** — Claude's number, not my "~27s", which I took from a stale code comment). Key visual confirmations: `desktop-1920.png` does show the 4-line headline with orphaned "MORE"; `desktop-1440.png` shows 3 lines fitting; `user-view.png` shows solid-black glow marks beside the nav.

---

## 1. Attacks

### On Claude

**a) Flaw 3 ("The proof is illegible… nobody can read it", sev 8) is overstated and contradicted by his own screenshots.** In `desktop-1440.png` and `desktop-1920.png` the film's persuasive beats read fine at 453px: the incoming-call screen, the giant red/green Decline/Accept circles (~24px rendered), the "Brightside Dental / With a patient / 2:04 PM / Phone call" overlay column at ~13–20px. What is actually small is the iOS *chrome* ("Remind Me", "Message" at ~9px) — labels nobody needs to read to get the story. The film sells the narrative, not the iOS UI text. A real flaw (the card is small, 0.47×), but sev 8 ties it with the foundational grid-miss; it is a 4–5. "Nobody can read it" is rhetoric, not measurement.

**b) Direction B's fold math fails on the most common laptop, and he hand-waves it.** His own numbers: nav 64 + top pad 32 + headline block ~128 + gap 64 + film 576 = **864px of stack**. At 1366×768 — still the most common laptop resolution — the bottom ~100px of the film is below the fold, which he calls "a deliberate peek." It is not a peek; the loop's payoff frames are what gets cropped. A direction whose headline feature (a 768×576 film) does not fit the median laptop has a structural problem, not a half-point "density risk." His predicted 8/10 is optimistic by a full point.

**c) Direction C is a site re-theme wearing a hero-fix costume.** His spec admits it: "`Problem` must become light… and every section after it flips." That is re-skinning the entire page to justify one hero direction — outside the scope of a hero critique, and it spends the dark section's novelty at the top of the page. He scores it 7/10; as a *direction in this exercise* it should be disqualified, not scored. (The dark-hero *instinct* is sound — my Direction 3 below keeps it without touching any other section.)

**d) Flaw 9 (phone 5px from the card's edges, sev 5) plus the two re-render demands are scope creep priced as CSS flaws.** "Re-render the film at #F4F2ED" and "scale the phone to 88%, ≥45px source air" are notes for the film producer — legitimate notes, but they require regenerating video, and he folds them into the hero's flaw ledger and into *all three* directions' shared fixes. A hero-layout audit that depends on re-rendering the asset has quietly changed its own brief.

### On Gemini

**a) Flaw 1 ("17px subhead forces the user to squint", sev 9) is inflated and misdiagnosed.** 17px/1.6 is a bog-standard body size; nobody squints at it. The real, measurable problem in that neighborhood is Claude's flaw 13: five type sizes within 15–17px all in #111 — *flatness*, not smallness. Gemini found the right area, named the wrong disease, and gave it his highest severity (9, above his own "dead zone" 8).

**b) Flaw 2 ("Dead Zone", sev 8) is overstated and mismeasured.** "Tight 42ch max-width creates a massive, unbalanced column of whitespace": 42ch at 17px Inter Tight is ≈460px inside a 634px copy column — the sub fills ~72% of its column, and the headline uses the full measure (625px at 1440, per Claude's measurement). In `desktop-1440.png` the inter-column gap is exactly the 64px grid gap — a standard gutter, not a "chasm." He also calls it a "flex gap"; it is a grid `gap`. The genuine wide-viewport failure is the hard 1216px container cap (my flaw 1.3), which Gemini never found.

**c) Flaw 8 (mix-blend-mode "crunchy, aliased artifacts… for zero visual benefit") fails on both halves.** The benefit: the navbar is `position: fixed` and the site alternates white and #0a0a0b sections (brief, verified in `global.css`); white text + `difference` is precisely what keeps the nav legible over both with zero scroll-driven color JS. The artifacts: over a 15%-black mark the blended pixel lands ~#222 instead of #111 — a ~4% value shift, imperceptible; over the 0.07 hairlines, less. Unmeasured claim.

**d) His grid verdict violates its own stated requirement.** "Cell size up, to 80px" + "anchored so marks align perfectly with the structural layout edges": 1152 / 80 = **14.4** — an 80px cell mathematically cannot land on both edges of a 1152px measure. 64 (×18), 72 (×16), or 96 (×12) work; 80 doesn't. The one hard rule he states is broken by his own number.

**e) Direction 1 contains a fatal spec bug: `aspect-ratio: 16/9` on the card.** The only content is a 960×720 (4:3, ffprobe-verified) video under `object-fit: cover`. A 16/9 box crops ~25% of the film's height — decapitating the phone mockup that *is* the proof. This direction would make the hero strictly worse. Same direction: cell 120px vs the 1152px measure (1152/120 = 9.6) — the exact non-alignment sin his own flaw 6 condemns.

**f) The pause-button "fix" prescribes the status quo.** "Move it inside the video frame, bottom-left. Make it a sharp square 32×32px." It is *already* inside the frame, bottom-left, 32×32 (`Hero.astro`: `.pp { left:12px; bottom:12px; width:32px; height:32px }`). Gemini never flagged the overlay as a flaw in section 1, then "fixed" it by keeping it where it is — and kept it on top of the film, the one thing both other critics agree must change. 32px also stays under the 44px touch target Claude measured.

---

## 2. Concessions

**From Claude:**

- **The headline wrap bug (his flaw 1) is real and I missed it entirely — it is the worst flaw on the page.** Verified in `desktop-1920.png`: MORE / CUSTOMERS / SHOULDN'T MEAN / MORE HOURS, orphaned "MORE" on line 1. His arithmetic checks out: "MORE CUSTOMERS" ≈ 625px at 72px against a 634.7px column fits at 1440 (confirmed: 3 lines), but at ≥1455px the font clamps to 73.6px, needs ~639px, and wraps. Most external monitors see a broken headline. My r1 never stress-tested the clamp; I trusted `text-wrap: balance` to save it. This jumps to severity 9 and rank #1 in the merged list.
- **The type-token disconnect (his flaw 13).** Verified: `global.css` defines `.h1` (Instrument Serif, clamp 2.75–4.75rem) and `.lead` (19px, `--color-muted`), and the hero uses neither. I flagged radius incoherence but completely missed that the hero's *voice* (Inter Tight 700 caps) is disconnected from the rest of the site's type system.
- **His measurement culture beat my estimates three times:** film duration 29.7s (ffprobe) vs my "~27s" from a stale comment; the plus mark landing *on* the "See examples" underline at (1290,630)/(1530,690) — a proven, point-blank instance of my generic "grid behind text" flaw; and the user-view decode.
- **The `user-view.png` decode (150% OS scale → ~1270×555 CSS viewport) is correct and deflates my flaw 1.3's framing.** The owner is *not* viewing at 1920 CSS; he is at ~1270, where the hero is near its best. The >1216px problem is still real for external monitors (and the 1920 screenshot proves it), but "the owner's own screen" was overstated. I drop 1.3 from severity 7 to 6.
- **His grid mechanics are better than mine in four places** — details in section 4 (cqi-derived cell, 1px arm on the half-pixel, y-origin at the headline top, glow capped at +0.28, skip glow under the opaque card).

**From Gemini:**

- **The "See examples" placement (his flaw 3) deserves more weight than I gave it.** Claude measured the two action zones 777px apart; Gemini's F-pattern point is legitimate UX reasoning. I still defend keeping the link adjacent to the card (it captions the film — proximity is the grouping signal), but I concede the current *execution* (auto-margin orphan at the far edge, colliding with a grid mark) is the worst of both placements. My caption-row fix stands; the severity rises from 5 to 5–6.
- **Radius-family clash (his flaw 5) — he ranked it top-5 (sev 7); I had it at 4.** Splitting the difference upward to 5: the 20px cream card really does belong to a different visual family than the sharp-tracked caps, and two critics independently put it in their top five.
- **"Grid fully masked behind the card, glow stops at the border"** is simpler than my resting-halo idea and, combined with Claude's "skip glow computation under the card," convinced me to drop the halo entirely — see section 4.
- His mask-behind-text-column verdict matched my knockdown independently; two-of-three agreement strengthens it.

---

## 3. Merged flaw ranking

Dropped as false/overstated: Gemini's "squint at 17px" (sev 9 claim), Gemini's "dead-zone chasm," Gemini's "mix-blend artifacts / zero benefit." Kept but rescoped: Claude's film re-render items (moved to producer notes, out of the CSS ledger).

| # | Flaw | Sev | One-line fix |
|---|---|---|---|
| 1 | Headline wraps to 4 lines with orphaned "MORE" on every viewport ≥~1455px; `max-width:16ch` is dead code (claude 1) | **9** | Size the headline in container query units against its own column (`min(4rem, 100cqi/18)`) so font and column scale together and it can never re-wrap |
| 2 | Grid is 6px off every structural edge; 60px cell has no relation to the 1152px measure (kimi 1.1, claude 2, gemini 6) | **8** | Draw from the content-left origin with `cell = contentWidth/18` (64px at cap) |
| 3 | Card has no edge: cream-on-white (~1.1:1), declared only by a muddy bottom-only shadow (kimi 1.2/1.5, claude 6, gemini 4) | **8** | `box-shadow: 0 0 0 1px rgba(17,17,17,.12)` + demoted shadow `0 12px 32px -16px rgba(10,10,11,.18)`, radius 12 |
| 4 | Grid texture strikes through headline/sub; a plus mark sits on the link underline (kimi 1.7, claude 4/5, gemini 7) | **7** | Lines off (or ≤0.04), 30% knockdown behind the copy block, origin-y at headline top so lines fall in type gutters |
| 5 | No response above 1216px: fixed container + hard-coded 460px card (kimi 1.3; rescoped after Claude's user-view decode) | **6** | `width:100%` + `aspect-ratio:4/3` on the card; widen container or derive all sizes from cqi |
| 6 | Pause button is a grey smudge on the film, 32px, stale comment (kimi 1.6, claude 8) | **5** | Move to a caption row 16px below the card: 28px #111 circle + 14px label, ≥44px hit area |
| 7 | "See examples" orphaned 777px from the CTA, second icon system (↓ glyph vs Lucide), dead `flex-wrap` gap (claude 10, gemini 3) | **5** | Caption-row placement, 15px/500, underline-offset 4px, 14px Lucide arrow SVG |
| 8 | Cursor glow reaches solid #111 — as loud as the headline (claude 7); four unrelated interaction idioms (kimi 1.8) | **5** | Cap glow at +0.28 (max 0.40 total), radius 2 cells; kill the ported 550px fill-circle hover, keep one idiom |
| 9 | Radius incoherence: 20px card + pills + circles vs sharp-tracked caps (kimi 1.10, gemini 5) | **5** | Card radius 20→12px (= 1/5–1/6 of cell); pills stay (buttons may be pills; proof artifacts may not) |
| 10 | Hero ignores site type tokens; five sizes within 15–17px, all #111 (claude 13) | **4** | Sub → 19px/32px `rgba(17,17,17,.72)` (light analog of `.lead`); one 15–16px size for nav/link/caption |
| 11 | Plus marks aliased at DPR 1 (kimi 1.9, claude 14) | **4** | 8px marks, 1px arm, drawn on the half-pixel like the lines |
| 12 | Hard cut into the dark `Problem` section + 96px column jump on scroll (claude 11) | **4** | Fade the grid out over the bottom 160px; set `Problem` to the same 76rem container |
| 13 | Film plays at 0.47× — small, if not "illegible" (claude 3, rescoped) | **4** | Card ≥512px wide via the column split (layout fix, not a re-render) |
| 14 | Fade-up stagger on every block — the template entrance (kimi 1.12, claude tells) | **3** | One 200ms fade on the whole hero, or none |
| 15 | The only saturated color on the page is iOS green/red inside the proof (kimi 1.11) | **3** | No CSS fix; producer note (grade the film's bg to #F4F2ED) |
| 16 | Phone hero jammed under the nav (claude 15) | **2** | Mobile `padding-top` → 112px |

*Producer notes (not hero flaws): re-render film bg #F4F2ED; phone at ~88% scale for ≥24px air at display size.*

---

## 4. Grid and card settings I now stand behind

Changed my mind on five things, all toward Claude's measurements:

- **Cell size: 72px fixed → `cell = contentWidth / 18` (64px at the 1216px cap), passed from the canvas to CSS as `--cell`.** My 72px worked only at exactly 76rem and my `mod` origin math broke below the cap; the cqi-derived cell divides the measure at *every* viewport (1152/64 = 18 exactly; 18 columns is also a clean 9/8 split + 1-cell gutter).
- **Mark arm: 1.5px + rounding → 1px, drawn on the half-pixel** (`x + 0.5`), same as the hairlines. Claude's pixel sampling (two grey-210 columns + soft center) proved 1.7px anti-aliases; integer-rounded 1.5px still straddles at DPR 1.
- **Cursor glow: peak 0.45 / radius 120px → cap +0.28 (max 0.40 total), radius 2 cells (128px).** `user-view.png` shows the current glow rendering solid-black marks beside the headline — background at text value is inexcusable; Claude's cap is the right ceiling.
- **Card/grid interaction: my resting halo (+0.20 within 72px of the card) → dropped.** Replaced by Claude's geometric version: card edges snapped to grid lines so corner marks read as crop marks, and glow computation skipped under the opaque card. The halo was a second dynamic system — decoration competing with the film, exactly what I accused the tilt of being.
- **Mask: bottom-15vh-only → top 96px + bottom 160px linear fade** (Claude's spec), keeping my 30% radial knockdown behind the copy block. The top fade matters because the fixed nav blends over the grid.

Unchanged: **lines off entirely** (marks-only lattice; if the owner insists, ≤0.04 — Claude and I agree on the fallback). **BASE opacity 0.12** (I said 0.10, Claude 0.12; with lines deleted the marks carry all texture, so 0.12). **Origin aligned to content-left, and now also headline-top** (Claude's y-origin addition — with 64px cells and 64px line-height, row lines fall in the type gutters). Marks 8px desktop / 6px phone.

Card: width 100% of an 8fr media column → **512×384 (8×6 cells)** at cap; radius **12px**; **ring `0 0 0 1px rgba(17,17,17,.12)` + `0 12px 32px -16px rgba(10,10,11,.18)`** (I keep a small shadow where Claude goes ring-only — a proof artifact should sit *on* the page, and at −16px spread there is no side-smear); background `#f6f4ef` as poster surface only; **no tilt** (all three agree); **pause into a caption row 16px below** — I adopt Claude's 28px solid #111 circle + 14px label + 44px hit area over my text-only button (the solid circle reads deliberate; my text button risked looking like a footnote); **"See examples"** right side of the same row, 15px/500, `text-underline-offset: 4px`, 14px Lucide arrow-down — one icon system.

---

## 5. Scores for all nine directions

| Direction | Score | One-line reason |
|---|---|---|
| kimi A "Snap" | **7.5** | Mechanically sound, but fixed-px font + 84rem churn is dominated by Claude's cqi approach, and the idea is conventional (I predicted 8; docked 0.5 post-Claude) |
| kimi B "Editorial spread" | **7** | Most distinctive of mine, but a fixed `clamp(3rem,7.2vw,6.5rem)` headline reintroduces exactly the wrap bug Claude proved, and the 768px-fold risk is real |
| kimi C "Split stage" | **7.5** | Solves the card edge by environment and pays off the difference nav, but the zone-aware canvas is the most code and it spends the dark-section novelty early |
| claude A "Ruled Sheet" | **8.5** | cqi sizing kills the wrap bug by construction, 18-cell math is exact at every width, crop-mark corners are the one genuinely new detail; still a conventional split with a 0.53× film |
| claude B "Proof First" | **7** | The strongest concept (proof leads) ruined by its own arithmetic: 864px stack on a 768px laptop crops the payoff, and it depends on the out-of-scope copy rewrite |
| claude C "Night Window" | **6** | A site re-theme, not a hero fix — every downstream section must flip, and the owner's favourite element (the grid) becomes a whisper |
| gemini 1 "Strict Editorial" | **5.5** | Fatal spec bug (16/9 card crops the 4:3 proof by 25%), 120px cell can't align (his own flaw 6), fixed 4rem headline re-wraps; the hard 1px frame is the one good idea |
| gemini 2 "Architectural System" | **5** | Bordering both columns adds chrome the calm brand doesn't need; the 64px aligned grid is right but that's table stakes after round 1 |
| gemini 3 "Focused Cinematic" | **5.5** | Safe, legible, and completely generic — a centered stack with a dark-framed card is the template answer; he scored it 7.5 |

---

## 6. My three final directions

All three inherit the section-4 grid/card baseline (cqi cell = content/18, origin content-left + headline-top, marks 8px/1px @ 0.12, lines off, glow +0.28 @ 2 cells, top 96 / bottom 160 fade + 30% copy knockdown, caption row 16px below card, no tilt, no fill-circle hover, single fade entrance). Structural difference: **1 = disciplined split (claim left, proof right), 2 = stacked proof-first (film dominates), 3 = zoned split-stage (dark panel).**

### Direction 1 — "Ruled Sheet II" (the craft pass, done right)

- **Layout:** `.hero-inner { container-type: inline-size; max-width: 76rem; padding: clamp(48px,10svh,128px) 2rem; grid-template-columns: minmax(0,9fr) minmax(0,8fr); column-gap: calc(100cqi/18); align-items: start; }` → at 1152px content: copy **576**, gap **64** (1 cell), media **512**. All edges on lines by construction.
- **Type:** headline `font-size: min(4rem, 100cqi/18)` (64px), line-height 1, weight 700, uppercase, −0.03em, `max-width` deleted (dead code), `text-wrap: balance`. Font and column both scale with cqi → **can never re-wrap** (fixes flaw 1 at any viewport). Sub 19px/32px `rgba(17,17,17,.72)`, max-width 38ch, margin-top 32px (½ cell). CTA margin-top 32px, padding 16px 28px, 17px/500, **calendar icon removed**, hover = translateY(−2px) only.
- **Card:** 512×384 (8×6 cells), corners on grid intersections → corner marks read as crop marks. Radius 12, ring + small shadow per section 4. Registration rule: **card bottom edge = CTA bottom edge** (absorb the last few px in the caption-row margin).
- **Caption row:** 16px below card, sits between grid lines: pause left (28px #111 circle, 12px white icon, 14px/500 label, 44px hit), "See examples" right (15px/500, underline offset 4px, 14px SVG arrow).
- **Mobile (<768px):** cell = content/6 (57px at 390), marks 6px, padding-top 112px, card full-width, caption row unchanged.
- **Fixes merged flaws:** 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12 (mask + container alignment), 13 (453→512px), 14. **Trades away:** conceptual novelty — it is still claim-left/proof-right; the film is still 0.53×; the headline shrinks 72→64px.
- **Predicted: 9.0/10.** Every mechanical flaw in the ledger is closed by construction rather than by tuning; what remains is only the conservatism of the composition.

### Direction 2 — "Proof First, fold-safe" (Claude's B with the arithmetic fixed)

- **Layout (≥1024px):** cell 64 as baseline. Row 1: headline full content width (1152). Gap 40px. Row 2: `grid-template-columns: 320px 64px 704px` → copy | gutter | film **704×528** (0.73× source — labels render ~12–13px, genuinely readable); film left/right/top edges snapped to lines.
- **Fold math (the fix):** nav is fixed/overlay (0 flow cost); stack = 32 top pad + headline (2 lines @ 60px/0.9 = 108) + 40 + 528 + 40 caption = **748px ≤ 768** — fits the median laptop with nothing cropped, where Claude's 864px stack did not.
- **Type:** headline `min(3.75rem, 100cqi/19.2)` (60px), line-height 0.9, `text-wrap: balance` — the current 43-char copy fits 2 lines at 60px across 1152px (~1420px needed, 2304px capacity), so **no rewrite dependency** (Claude's B needed one). Sub 17px/28px fills the 320px column; CTA 24px below sub; "See examples" 16px under the CTA (copy column too narrow for side-by-side — Claude's call, correct).
- **Grid:** baseline + Claude's radial emphasis (full strength around the film, 30% behind the headline) — the grid stages the proof. Playback starts at ≥50% visibility on all widths (reuse the IntersectionObserver path).
- **Card:** radius 12, ring + `0 24px 48px -24px rgba(17,17,17,.16)` lift (a lead artifact may float). Caption row: pause only.
- **Mobile:** headline → sub → CTA → film full-width (342×256) → pause.
- **Fixes merged flaws:** 1 (cqi font), 2, 3, 4, 6, 7, 8, 10, 11, 13 (0.73× — the best legibility of any direction), 15 (the film at 704px dominates; the page's color story becomes the film's, deliberately). **Trades away:** the headline is no longer the biggest element — the page leads with evidence, not the claim; above-fold density is high; the 320px copy column is tight.
- **Predicted: 9.0/10.** The only hero on the table where the proof is actually legible *and* nothing crops at 768px; loses a point only for demoting the claim.

### Direction 3 — "Split Stage II" (dark panel, zero re-theme)

My r1 direction C, re-specced on the 18-cell system and widened so it also fixes flaw 5. Unlike Claude's C, **no other section changes** — the panel is a zone inside the hero, not a page theme.

- **Layout:** container **84rem** (1344px) → content 1280 = **20×64** (fixes flaw 5: the hero now responds up to 1408px viewports). Hero-inner full viewport height, two zones: left **11 columns (704px)** white, copy vertically centered; right **9 columns (576px)** dark `#0a0a0b` panel spanning full hero height, its left edge exactly on grid line 12.
- **Card:** inside the dark panel, vertically centered, 32px panel inset → **512×384 (8×6 cells)**. Radius 12, border `1px rgba(246,244,239,.22)`, shadow `0 24px 48px -24px rgba(0,0,0,.5)` (real depth is legal on a dark stage). Card edge defined by environment: light film on #0a0a0b is >15:1 — flaw 3 dies without cosmetics.
- **Grid:** one canvas, zone-aware at the panel edge x: marks 8px/1px in `#111` @ 0.12 on the white side, `#F4F2ED` @ 0.12 inside the panel; glow +0.28 colored per zone; lines off both sides; bottom 160px fade on the white side only.
- **Type:** headline `min(3.5rem, 100cqi/22.9)` (56px) / line-height 0.95, max-width 12ch → 4 lines tall, the type becomes the texture of the white zone. Sub 19px/32px `rgba(17,17,17,.72)`. CTA black pill on white, unchanged.
- **Caption row:** inside the panel, 16px below the card: pause + "See examples" in `#F4F2ED` at 70% opacity. The `mix-blend-mode: difference` navbar finally pays off — it inverts correctly over both zones with zero code.
- **Mobile:** stacked — white copy block, then the dark panel full-width (padding 48px 24px) with the card inside.
- **Fixes merged flaws:** 2, 3 (by environment), 4, 5 (84rem container), 6, 7, 8, 9, 10, 11, 15 (the film is the brightest object in a dark room; the page's accent stops being iOS-green-by-default). **Trades away:** the airy all-white opener — moodier, arguably less "calm"; the most implementation code of the three (zone-aware canvas); the dark panel pre-echoes the dark sections below, costing them some novelty on scroll.
- **Predicted: 9.0/10** (9.2 if the panel edge lands pixel-perfect on the grid line at every breakpoint). The most distinctive direction that stays inside the hero's scope — proof staged, grid honored, nav justified, no other section touched.
