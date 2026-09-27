# Hero critique, round 2 (Claude)

Everything below was re-checked with pixel sampling on the four screenshots, plus the source files. Reference numbers I measured:
- The content column is 1152px (x 144–1296 at a 1440 window).
- The headline's longest line, "MORE CUSTOMERS", is **625px** wide at 72px. The word "SHOULDN'T" is **386px** at 72px. A word space is about 17px.
- The card is 453×340. The video file is 960×720.
- In `user-view.png` the owner's screen is at 150% zoom, so the real CSS viewport is about **1270×555**.

---

## 1. Attacks

### Gemini

1. **Claim: "a massive, unbalanced column of whitespace in the middle of the hero" (the "Dead Zone", severity 8). Wrong.** The gap between the two columns is 64px in the code. In the 1440 screenshot the headline ends at x 771 and the card starts at x 843, so the gap is **71px**. The only wide space is to the right of the 42ch paragraph (x 526 to 843). That is a normal ragged right edge under a full-width headline, not a gap in the layout. Severity 8 would rank this above the grid being off-register and the video being unreadable, which are real problems. I drop it.

2. **Claim: the 17px paragraph "forces the user to squint" (severity 9). Overstated.** 17px (1.0625rem) is the whole site's body size in `global.css`. Nobody squints at body text. The real problem is weaker: the paragraph is the same colour (#111) as the headline, so there is no tonal step between them. That is a severity-4 hierarchy issue, not the worst flaw on the page.

3. **Claim: `mix-blend-mode: difference` creates "crunchy, aliased artifacts inside the letters for zero visual benefit". Wrong on both counts.**
   - Artifacts: inside the letters, a grid line at 238 grey inverts to 17. I measured glyph pixels at 14–29 against a 0 baseline, so the difference is at most 17 levels. That is invisible.
   - Benefit: the navbar is `position: fixed` and the rest of the site alternates dark (#0A0A0B) and white. The difference blend is exactly what keeps the nav readable over the dark sections. Removing it would break the nav everywhere below the hero.
   - The actual nav problem Gemini walked past: the grid's horizontal line at **y 30** runs through the middle of the lowercase letters of the logo and every nav link (text sits at y 26–37). Plus marks sit inside "Zaid" (x 150) and "Hossain" (x 210).

4. **Claim: "The grid origin (0,0) must be anchored to the center of the 76rem container", with 80px cells. This makes the grid worse.** 1152 / 80 = 14.4, so the lines cannot land on both edges. Anchoring at the centre puts a line at centre − 7×80 = **16px** inside each content edge. That is a 16px miss, worse than today's 6px.

5. **Claim: Direction 1 card `aspect-ratio: 16/9`. Would break the proof.** The film is 4:3. With `object-fit: cover` a 16:9 box crops **25% of the height** (90 source pixels off the top and bottom). The phone is already only 5 displayed pixels (about 11 source pixels) from the top and bottom of the frame, so it would be cut off. The same direction also:
   - uses a 12-column grid (66.7px columns, 32px gaps) next to a 120px background grid, two rhythms with no relation;
   - makes the plus marks 4px at 8% opacity and masks the whole left half, which removes the grid in practice (the owner said the grid stays);
   - makes the card 461px wide, **smaller** than today.

   Gemini's "9/10" for this direction is not credible.

6. **Missed entirely:**
   - The headline breaks into 4 lines at 1920, visible in its own screenshot input (rows at y 308/374/440/506, with the word "MORE" alone on the first line).
   - The video plays at 0.47× its size, so its text can't be read.
   - The card's visible colour is the film's #F2F3EC, not the `#f6f4ef` Gemini specs. The video covers the CSS background completely.

### Kimi

1. **Claim: the owner's `user-view.png` "(~1905px wide) shows the same: … exactly the viewport where it's weakest" and is "40% empty gutter". Wrong.** That screenshot is at 150% zoom: 1152 CSS px renders as 1728 screen px (x 85 to 1812). The content fills **91%** of the width, and the card is 679 screen px wide. The owner's real viewport is about 1270×555. His problem is height (the hero is taller than his window), not empty gutters.

2. **Claim: "the card optically floats ~10–14px above the top of the M". Overstated about 2×.** Measured: card top at y 248 versus the top of the capital letters at y 253 (1440 window), and 303 versus 308 (1920). That is 5px. Kimi's fix, "drop the card `margin-top: 0.75rem`", refers to a margin **that does not exist** in `Hero.astro`. Adding one would push the card top 7px *below* the top of the capitals. Kimi's other numbers also drift by 7–10px: "card bottom ≈ 595" is 588, and "CTA ≈ 648" is 651.

3. **Claim: card "halo": "Marks within 72px of the card's bounding rect get +0.20 opacity at all times". This makes the hero worse.** On a base opacity of 0.10, that draws a ring of marks **3× darker** around the card: a dotted frame that is static decoration. It adds noise right where the eye should land on the film, and it is the "grid glows around the product" trick the brief's no-decoration rule is aimed at. A card whose edges sit exactly on grid lines ties the two systems together without adding anything.

4. **Direction A/B/C use an 84rem hero but never touch the navbar.** The nav's `.navbar-inner` stays at 76rem. At 1440 the hero content would start at x 80 while the logo stays at x 144: a new 64px misalignment at the top of the page. It also widens the jump into `Problem` (64rem) from 96px to 160px. The idea of a wider container is right; the spec is incomplete.

5. **Direction A card is 480×360 (0.50× the video), about 6% bigger than today.** It doesn't fix the video's legibility, which Kimi's own flaw 1.3 identifies. The headline `max-width: 15ch` at 76px is about 684px (a "ch" in Inter Tight Bold is roughly 0.6em), against a 660px line. That is a knife-edge wrap again, which is exactly today's bug.

6. **Direction B headline `clamp(3rem, 7.2vw, 6.5rem)` = 103.7px at 1440, claimed to stay at 2 lines with `text-wrap: balance`. It can't.** "MORE CUSTOMERS SHOULDN'T" is 1028px at 72px, so **1481px** at 103.7px, wider than the 1280px column. The headline goes to 3 lines (about 280px tall). Stack that with a 64px gap, a 420px card and the navbar, and the card falls below the fold on a 900px-tall window. Kimi's "≈860px" estimate assumes 2 lines.

7. **Direction C spec contradicts itself.** It says "Left 9 columns (720px) … Right 7 columns (560px)", then "no — here use 72 with container 76rem: 1152 = 16×72". With 72px cells, 9+7 columns = 648+504, not 720+560. The dark panel sits *inside* the container, so at 1920 it stops at x 1536 with 384px of white grid to its right: a black box floating on paper, not a stage. The card inset by 56px comes out 448×336, **smaller than today's 453×340**, which makes the legibility problem worse.

---

## 2. Concessions

- **Kimi: four unrelated hover/interaction styles** (cursor-origin fill, opacity fade, static underline, grid glow). I missed this, and it is a real "parts from different sources" tell. I now rate it **4**.
- **Kimi and Gemini: mixed corner radii** (999px pills, a 20px card, a circle, sharp caps type). I only touched this in passing. It needs one stated rule, not scattered numbers. I now use: **things you press are round, things you look at are square.**
- **Kimi: no response above 1216px.** I framed it only as "video too small". Kimi is right that the whole composition stops growing. This convinced me to move to a **wider 84rem container**, *including the navbar and the section wrappers*, which Kimi left out.
- **Kimi: fade the grid behind the copy.** I only specced this for phones. Putting the grid's horizontal lines in the gaps between headline lines does not stop the *vertical* lines from crossing the paragraph every 64px. I now fade the grid to **35%** strength behind the copy column at every width.
- **Kimi: the staggered fade-up delays the proof.** Small but correct (the video fades in at 260ms, then plays at load + 1s).
- **Gemini: put "See examples" next to the CTA.** Right for the layout where the film sits low (my direction 2 below). For side-by-side layouts I still keep it under the film, because it expands the proof, not the offer.
- **Found through Gemini's nav point:** the horizontal grid line at y 30 strikes through the nav text. That is new to my list, and my own round-1 fade-under-the-nav mask fixes it.

---

## 3. Merged flaw ranking (deduplicated)

Dropped as false: Gemini's "dead zone", Gemini's "mix-blend artifacting", and Gemini's "subhead unreadable" (folded into #15).

| # | Flaw | Sev | Fix |
|---|---|---|---|
| 1 | Headline wraps to 4 lines with "MORE" alone on line 1 at viewports ≥ ~1455px (1920 shot) | 9 | Size it in container units against its own column: `font-size: calc(100cqi/20)`, `line-height: 1` |
| 2 | Video is unreadable at 0.47× (UI labels about 8px), and the composition stops growing above 1216px | 8 | 84rem container, card ≥ 640 wide (≥ 0.67×) |
| 3 | Grid is 6px off every content edge; the card sits mid-cell | 8 | `cell = content width / 20`, origin = content left edge + headline top |
| 4 | Grid lines strike through the headline, the paragraph and the **nav text** (y 30) | 7 | Horizontal lines fall in the gaps between headline lines; paragraph line-height of 32px (half a cell); grid at 35% behind the copy; grid faded out under the nav |
| 5 | Card edge contrast is 1.11:1, the tint is a green #F2F3EC, and the shadow smudges only the bottom | 6 | 1px outline ring, no shadow, re-render the video background at #F4F2ED |
| 6 | A plus mark sits on the "See examples ↓" arrow (1440) and on its underline (1920) | 6 | Caption row placed on the grid, between lines |
| 7 | The cursor glow reaches pure #111, as dark as the headline | 5 | Cap the glow at +0.28, radius 2 cells |
| 8 | Translucent grey pause button over the film, 32px (too small to tap) | 5 | Move it to the caption row: 28px solid circle, 44px tap area |
| 9 | "See examples" is stranded 777px from the CTA, and its ↓ glyph is a second icon system | 5 | Caption row, or inline with the CTA; SVG arrow |
| 10 | Grid cuts hard into the dark section; the text column's left edge jumps 96px into `Problem` | 5 | Fade the grid over the bottom 160px; sections use the same outer width as the hero |
| 11 | Phone in the video sits 5px from the frame's top and bottom | 4 | Re-render with the phone at 88% size |
| 12 | Near-miss vertical alignments (5px, 8px); spacing gaps of 41 vs 50px | 4 | Put all vertical spacing on half-cell (32px) steps |
| 13 | Mixed radii with no rule | 4 | Press = round, look = square: the card goes to 0 radius |
| 14 | Four hover styles | 4 | Two: the button changes background, text links show an underline on hover. Remove the cursor-origin fill |
| 15 | Flat small-text sizes (15/16/17px), paragraph the same colour as the headline | 4 | Paragraph 19px at 72% opacity; nav, link and caption all 14–16px on one scale |
| 16 | Soft plus marks (1.7px arms on whole-pixel positions) | 3 | 1px arms drawn on the half-pixel |
| 17 | Phone: headline only 19px below the nav bar | 3 | Hero `padding-top: 112px` on phone |
| 18 | Staggered fade-ups delay the video | 2 | The copy reveals as one block; no reveal on the video |
| 19 | The iOS red and green are the only saturated colours on the page | 2 | Accept it: the video is the proof, and greying it would look fake |

---

## 4. Grid and card settings I now stand behind

| Setting | Round 1 | Final | Why it changed |
|---|---|---|---|
| Container | 76rem | **84rem** for hero + `.navbar-inner` + section wrappers → content **1280** | Room for a 640px card (Kimi's point, with the nav fixed) |
| Cell | 64, content/18 | **64 = content/20** (≥1344); `content/20` 1024–1343; `content/12` 768–1023; `content/6` below 768 (57px at 390) | 1280 = 20×64. It stays tied to the column at every width |
| Origin | content left + headline top | same | The horizontal lines land in the gaps between headline lines |
| Lines | 0.04 desktop, off on phone | **same** | The owner locked Plus + Lines on purpose (commit c641fdd). At 0.04 with the copy fade, lines no longer read through text. Kimi's "off" gives up the registration you can actually see |
| Marks | 8px, 1px arm, 0.12 | **same**, drawn on the half-pixel; 6px on phone | Kimi's 1.5px arm blurs at 1× (not a whole pixel) |
| Glow | +0.28, radius 128 | **same** (Kimi +0.45 is too loud) | It must never approach text darkness |
| Mask | fade in over the top 96px, fade out over the bottom 160px | **plus 35% strength behind the copy column** | Vertical lines still cross the paragraph |
| Card/grid interaction | edges on lines | **same; no halo** | See Kimi attack 3 |
| Card | 512×384, radius 0 (dir A) / 12 | **≥ 640×480, radius 0**, `box-shadow: 0 0 0 1px rgba(17,17,17,.12)`, no drop shadow, no tilt | Legibility; the round/square radius rule |
| Film | re-render the background | **background #F4F2ED, phone at 88% size (≥ 45 source px of air)** | Tint + cramped framing |
| Controls | caption row | caption row, 32px tall, 16px under the card: pause (28px #111 circle, 12px white icon, "Pause" 14/500, 44px tap area), "See examples" 14/500 with a 14px SVG arrow; underline on hover only | One hover style for text links |

---

## 5. Scores for all nine directions

| Direction | Score | Reason |
|---|---|---|
| Claude A "Ruled Sheet" | 7.5 | Fixes every alignment bug, but the video is only 0.53× and the radius rule isn't stated |
| Claude B "Proof First" | 8.0 | Right priority (0.8× video), but it loses the video's bottom on windows under 840px tall |
| Claude C "Night Window" | 6.5 | Same layout as A with the colours inverted: exactly the "copy in a different colour" the brief bans. Re-themes the whole site |
| Gemini 1 "Strict Editorial" | 5.0 | 16:9 box crops the 4:3 video by 25% (cuts the phone); the grid is erased; card smaller than today |
| Gemini 2 "Architectural" | 6.0 | Borders around columns plus a card border plus padding: boxes in boxes, more lines, video ≈ 496px |
| Gemini 3 "Focused Cinematic" | 6.0 | Centred stack is the most template layout there is; the video is about 60% below the fold at 1440×900 |
| Kimi A "Snap" | 7.5 | Solid mechanics, but the nav isn't aligned to the 84rem hero, the video is 0.50×, the halo is gimmicky, and the 15ch headline is knife-edge |
| Kimi B "Editorial spread" | 6.5 | A 104px headline can't stay on 2 lines (1481 > 1280), so the card falls below the fold |
| Kimi C "Split Stage" | 7.0 | Best concept among the other critics, but the spec contradicts itself, the panel floats inside the container, and the card shrinks to 448×336 |

---

## 6. Final three directions

**Shared base (all three).**

*Layout and sections.*
- `.navbar-inner` and `.hero-inner` both get `max-width: 84rem; padding-inline: 2rem` (content 1280).
- `.hero-inner { container-type: inline-size }`. Children size in `cqi` units.
- `Problem` and the other sections get `max-w-[84rem] px-8` on the outer wrapper, with their text measure kept on an inner element, so every section's left edge matches the hero.

*Grid.*
- Settings exactly as §4.
- The canvas script reads the `.hero-inner` content box and the `.headline` top on resize.
- It sets `--cell` on `.hero` so CSS and canvas share one number.

*Card and film.*
- Card: radius 0, 1px outline ring, no shadow.
- Film re-rendered with a #F4F2ED background and the phone at 88% size.

*Radius rule.* Pressables round (CTA pill, nav "Book a call" pill, pause circle); viewables square.

*Hover and motion.*
- CTA: `background #111 → #2B2B2B`, 150ms. Remove the cursor-origin fill and its script. No icon.
- Text links: no underline at rest, a 1px underline 4px below on hover (nav, "See examples", "Pause").
- Reveal: the copy fades up as one block (500ms, 12px). The video has no reveal and plays at load + 600ms.
- Reduced motion: poster frame only.

*Phone base (<768).*
- Page margins 24px; cell = content/6. Grid lines off, marks 6px at 0.12, grid at 40% behind the copy.
- Headline `font-size: calc(100cqi/9)`, `line-height: 1`.
- Hero padding-top 112px. The card spans the full width (342×256) with the caption row below it.

---

### Direction 1: "Registered Split" (claim left, proof right, one sheet)

**Layout (≥1024).**
- `.hero-inner { display:grid; grid-template-columns: 9fr 1fr 10fr; column-gap:0; align-items:start; align-content:center; min-height:100svh; padding-block: 96px 64px }`.
- Copy spans 576px. One empty 64px gutter column. The media column is 640px.

**Type.**
- Headline: `font-size: calc(100cqi/20)` (64px), `line-height: 1`, 700 weight, uppercase, `letter-spacing: -0.03em`, no max-width.
- The longest line is about 556px in a 576px column. Font size and column scale together, so it can never re-wrap.
- Headline rows 0–2 are 192px. The grid's horizontal lines fall in the 17px gaps between lines.
- Paragraph: `margin-top: 32px`, 19px / 32px, `rgba(17,17,17,.72)`, `max-width: 40ch`.
- CTA: `margin-top: 32px`, pill 56px tall (`padding: 16px 28px`), 17px/500.

**Card.**
- Column 3, width 100% → **640×480** (0.67× the video, labels about 12px).
- Top edge on grid row 0, the same line as the top of the headline's first line.
- The corners land on grid crossings, so the plus marks read as crop marks.
- The caption row takes the next 32px, ending exactly on row 8 (512).

**Grid.** Uses the §4 settings as written.

**At the owner's 1270×555.** Cell 60.3, headline 60px, card 603×452. The whole block is about 540px tall and fits under the 64px nav with the caption row about 50px below the fold.

**Fixes:** 1–18.

**Trades away:**
- The site container widens (nav and sections must follow).
- The headline drops 72 → 64px.
- The layout is the familiar split: its distinction comes from exact registration, not from the concept.

**Predicted: 9.0.** Every measured defect is gone. The grid visibly *is* the layout (edges, rows, crop marks). The proof is readable.

**Why not higher:** it is still the most common hero shape.

---

### Direction 2: "Proof Stage" (headline as the title, film as the stage)

**Layout (≥1024).**
- Row 1: the headline spans all 20 cells.
- Row 2 (`margin-top: 32px`): `grid-template-columns: 7fr 1fr 12fr` → copy **448** | 64px gutter | video **768×576** (12×9 cells, **0.8×**, labels about 14px).

**Type.**
- Headline: `font-size: min(4.5rem, calc(100cqi/17.75))` (72px), `line-height: calc(100cqi/20)` (64px), `text-wrap: balance`.
- Brief for the copy rewrite: **≤ 2 lines at 1280**. The current copy passes: 1028px on line 1.
- Paragraph: 17px / 32px, `rgba(17,17,17,.72)`, fills 448px.
- CTA: `margin-top: 32px`. **"See examples" sits inline after the CTA** (gap 24px, 15px/500, SVG arrow), so the offer and the next step live in one place.
- Under the video: a caption row with the pause control only.

**Height budget at 1440×900.**

| Element | Top to bottom (px) |
|---|---|
| Nav | 0–64 |
| Top padding | 64–96 |
| Headline | 96–224 |
| Film | 256–832 |
| Pause row | 832–864 |

That fits with 36px to spare.

**Short windows.** `@media (min-width:1024px) and (max-height:899px)` switches to columns `11fr 1fr 8fr` with the video at **512×384**.

**Grid.** §4 settings plus a radial emphasis mask: `radial-gradient(ellipse 55% 70% at 68% 70%, #000 45%, rgba(0,0,0,.35) 100%)`, intersected with the top and bottom fades. The grid is full-strength around the film (its "stage") and quiet behind the type.

**Phone order.** Headline → paragraph → CTA + "See examples" → video → pause row.

**Fixes:** 1–18, with the biggest gain on #2 (0.8×) and #9 (the link sits next to the CTA).

**Trades away:**
- The headline stops being the biggest object on the page.
- It depends on the rewritten copy fitting 2 lines.
- There is a second layout for short windows to maintain.

**Predicted: 9.2.** The proof is legible at a glance, the grid has a job, and the layout is less common than the split.

**Why not higher:** the short-window fallback shows less of the video.

---

### Direction 3: "Split Stage, bled" (two-tone hero that pours into the dark section)

**Layout (≥1024).**
- Same 20-cell system. The copy uses columns 1–9 (576px) on white. Column 10 is a white gutter.
- A dark panel `.hero::before { position:absolute; top:0; bottom:0; left:50%; right:0; background:#0A0A0B }`.
- Because the content is centred and 10 of 20 cells is exactly half, **the panel's left edge is always on grid line 10** at every width, with no calculation.
- The panel runs to the viewport's right edge and down into `Problem` (#0A0A0B) with no seam. The dark wraps the white copy block like an L.

**Card.**
- Columns 12–20 → **576×432** (0.6×, labels about 11px), inset exactly one cell from the panel edge.
- Right edge on the content edge. Top edge on the headline's top row.
- **No ring and no shadow**: the light film on #0A0A0B already has about 17:1 edge contrast.

**Grid.** One canvas, same cell size and origin, coloured by x:
- x < 50%: marks `rgba(17,17,17,.12)`, lines `.04`.
- x ≥ 50%: marks `rgba(244,242,237,.10)`, lines `.035`.

The same lattice crosses the tone boundary unbroken, which ties the two halves together. The glow is +0.28 on white and +0.22 on dark. The bottom 160px fade applies to the white half only (the dark half continues into the next section).

**Type.**
- Left: identical to Direction 1 (headline 64/64, paragraph 19/32 at .72, black pill).
- Caption row in the panel: pause is a #F4F2ED circle with a #0A0A0B icon; "Pause" and "See examples" are in #F4F2ED.
- The nav needs no change: the difference blend renders the logo black over white and the links white over dark automatically.

**Phone.** A white copy block, then a full-width dark band (`padding: 32px 24px`) holding the full-width video and caption row, flowing straight into the dark `Problem` section.

**Fixes:**
- 1–18.
- #5 by environment instead of a ring.
- #10 by making the hero-to-section transition a continuous dark shape instead of a cut.

**Trades away:**
- Half the airy white sheet the owner likes.
- It is the most build work (a canvas coloured by position, the panel).
- At 1024–1200 the copy half is about 470px, so the headline is about 48px.

**Predicted: 9.0.** It is the most distinctive of the three. The video is the brightest thing on screen. The nav's difference blend and the site's dark/white rhythm finally pay off by design.

**Why not higher:** the 0.6× video, and the risk that the owner reads a half-dark hero as less calm.
