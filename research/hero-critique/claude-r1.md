# Hero critique, round 1 (Claude)

Measured from the four screenshots with pixel sampling (PIL), plus `Hero.astro`, `GridBackground.astro`, `Navbar.astro`, `global.css`. Coordinates are screenshot pixels (phone = device px at 2x unless marked CSS).

Base geometry (desktop): `.hero-inner` max 76rem, padding 2rem, so the content column is **1152px**: x 144 to 1296 at 1440, x 384 to 1536 at 1920. `7fr/5fr` with a 64px gap gives a copy column of **634.7px** and a media column of **453.3px**. The card renders **453 x 340**. The film source is **960 x 720, 29.7s** (checked with ffprobe), so it plays at **47%** of native size.

The owner's screenshot (`user-view.png`) is a 150% OS scale: 1152 CSS px renders as 1728 screen px (85 to 1812), so the CSS viewport is about **1270 x 555**. That is the realistic laptop case. The hero is taller than that viewport, so the 96px padding is spent and "See examples" lands on the bottom edge.

---

## 1. Flaws

| # | Flaw | Where | Why it hurts | Sev |
|---|---|---|---|---|
| 1 | **The headline breaks to 4 lines, with an orphaned "MORE" on line 1, on every viewport ≥ ~1455px.** At 1440 the widest line ("MORE CUSTOMERS") measures **625px** (x 146 to 771) at 72px, against a 634.7px column, so only 9.7px of slack. At 1920 the font clamps to 73.6px, so that line needs about 639px and wraps. The result is MORE / CUSTOMERS / SHOULDN'T MEAN / MORE HOURS. (rows 308, 374, 440, 506). `max-width: 16ch` (about 700px) never binds, so it is dead code. The column width sets the wrap, not the rule the author wrote. | h1, desktop-1920 | Most external monitors (1536, 1920, 2560) see a broken, step-shaped headline. The copy block grows to 472px tall against a 340px card, so the two columns stop balancing. It reads as unfinished. | **9** |
| 2 | **The grid is 6px off every edge (near-miss alignment).** Lines are drawn at `30 + 60k` from the viewport's left edge. The content edges sit at 144/1296 (lines at 150/1290) and 384/1536 (lines at 390/1530). The card (843 to 1296, 248 to 588) sits mid-cell: 33px from line 810, 27px from line 870, 38px below line 210. They only line up at viewport widths 1452, 1692 and 1932. | whole hero, 1440 + 1920 | A 6px miss reads as a mistake, not a choice. The grid looks like wallpaper stuck behind the layout instead of the system the layout sits on. That is the gap between Framer-template and designed. | **8** |
| 3 | **The proof is illegible.** The 960x720 film is shown at 453x340 (0.47x). The phone UI labels ("Remind Me", "Message", "Decline") render with about 8 to 9px cap height at 1440 and about 6.5 CSS px on the phone. The card is 31% of the viewport width at 1440 and 24% at 1920. | .reel, all shots | The film is the argument for the headline, and nobody can read it. At 1920 there are 384px of empty grid on each side while the proof is thumbnail-sized. | **8** |
| 4 | **Hairlines slice through the type.** The headline line pitch is 64.8px (72 x 0.9) and the grid pitch is 60px, so the two beat against each other. Row lines at y 270/330/390 cut headline lines 1/2/3 at 17px, 12px and 7px below the cap tops (253/318/383). Plus marks show in the word gaps. In the sub, line y=510 runs through the x-height of line 2 (text 504 to 519) at 1440. At 1920, y=630 hits the top of sub line 2 (629 to 644). On the phone, y=540 hits sub line 3 (536 to 568), and the vertical at x=60 runs 12 device px inside the text's left edge, down every line. | h1, .sub, all shots | Faint strike-through lines hurt legibility and look accidental. Type and grid have two unrelated rhythms. | **7** |
| 5 | **A plus mark collides with "See examples ↓".** At 1440 the mark at (1290, 630) sits on the ↓ stem (x 1287 to 1291), 5px above the underline. At 1920 the mark at (1530, 690) lands on the underline (y 689 to 690), 6px from its end. | .media-link, 1440 + 1920 | It looks like a rendering bug on an interactive element. You find it quickly once you look. | **6** |
| 6 | **The card edge is nearly invisible, and the tint is off-brand.** The film's background is **#F2F3EC (242, 243, 236)**: green-leaning, G > R. The brand off-white is warm (#F6F4EF, #F4F2ED). The CSS `#f6f4ef` is never visible because the video covers it. Card vs page contrast is **1.11:1**, so the top and side edges exist only where the grid lines stop. The shadow `0 30px 60px -35px` gives zero side shadow (−35 spread + 30 blur = −5px) and a bottom-only smudge: grey 218 at the edge, fading to 246 at +32px. On the phone that haze (221 to 246) sits right behind the "See examples" link. | .reel, 1440 + phone | It reads as a sticker with a dirty underside. The grey-green tint makes the white page look cold and the card look faded. | **6** |
| 7 | **The cursor glow is as loud as the headline.** The glow adds up to 0.85 on a 0.15 base, so 1.0 = pure #111. `user-view.png` shows solid black plus marks from x 855 to 1125, y 53 to 233, right beside "CUSTOMERS" and under the nav. The 150px radius covers about 5 cells. | grid, user-view | For a moment the background has the same value as the most important type on the page, and it pulls the eye to empty space. | **5** |
| 8 | **The pause button is generic player chrome.** It is 32px (under the 44px touch target) with `rgba(10,10,11,.72)` at `opacity .8`, which measures **#6D6D6A**: muddy mid-grey. Its 12px inset doesn't match the film's own 28px content inset, so it sits 16px left of the "Brightside" icon column (x 855 vs 871). It overlays the proof itself. The JS comment says "top-right corner" but the CSS puts it bottom-left (stale). | .pp, all shots | A grey translucent blob is the one control that doesn't belong to the black-and-white system. It reads as YouTube, not as part of the design. | **5** |
| 9 | **The film composition is cramped in its frame.** The phone device is **5px** from the card's top and bottom (253/583 vs 248/588) and 23px from the right, while the left text column has a 28px inset. The phone frame shows a mid-animation Accept button glyph ("A.. ,") in its state. | film (videos/hero-calendar render) | It looks cropped by accident. The video is native 4:3, so it isn't, which means the render itself needs air. | **5** |
| 10 | **The secondary link is orphaned and uses a second icon system.** "See examples ↓" (x 1175 to 1296) sits right-aligned under the card, 777px from the primary CTA. At 1440 its centre (about 622) happens to match the button's (623.5). At 1920 they are **70px apart** (678 vs 748), because of flaw 1. It uses the text glyph ↓ while the button uses a stroked Lucide SVG. `.cta` still has `gap: 1rem 2rem; flex-wrap` built for a second action that isn't there. The nav's "Work" and this link both go to `#proof`. | .media-link, .cta | Two icon languages, two action zones, and the eye jumps across the page. | **5** |
| 11 | **Dead band plus a hard cut to the next section.** At 1440, 652 to 900 is 248px (27% of the viewport) of empty grid. The grid runs to the hero's bottom edge and hard-cuts into `Problem`, which has no background, so body **#0A0A0B**. The column also jumps: the hero text starts at x=144, `Problem` (`max-w-[64rem] px-8`) at x=240, a **96px shift** on scroll. | hero bottom, section seam | A textured white sheet guillotined into black. The left edge wobbles between sections. | **5** |
| 12 | **Near-miss vertical alignments.** Card top 248 vs headline cap top 253 (1440); 303 vs 308 (1920). Card bottom 588 vs CTA top 596 (8px). Headline-to-sub visual gap about 41px (baseline 436 to x-height top 477), sub-to-CTA about 50px (546 to 596). The code comment claims "top edge lines up with the headline". | .hero-media, .cta | Nothing is either aligned or clearly offset. Gaps of 41 vs 50 give no grouping signal. | **4** |
| 13 | **Flat small-type scale, and the hero ignores the site's type tokens.** Nav 15, logo 16, link about 16, sub 17, button about 17: five sizes within 2px, and every one is #111. The sub has the same colour as the headline, so there is no tonal step. The headline-to-sub ratio is 72:17 = 4.2 with nothing in between. `global.css` defines `.lead` (19px, `--color-muted`) and `.h1` (Instrument Serif, 76px, weight 400), and the hero uses neither, so its voice (Inter Tight 700 caps) is disconnected from the rest of the site. | .sub, nav, link | 1px size differences read as noise, not hierarchy. The hero looks like a different template from the sections below. | **4** |
| 14 | **The plus marks render soft.** `ARM = 1.7` centred on integer coordinates anti-aliases into two grey-210 columns plus a 186/174 centre. The hairlines are crisp (`+0.5`), and the mark centre sits half a pixel up and left of its own line. | grid, 1440 (dpr 1) | Blurry marks next to crisp lines look low-fi at 1x, which is exactly the "technical precision" look the grid is supposed to sell. | **3** |
| 15 | **Phone top spacing is inconsistent with desktop.** The headline cap top is at about 83 CSS px, about 19px under the 64px nav band. On desktop the gap below the nav is 186px. | phone-390 | The phone hero feels jammed under the nav while desktop floats. | **3** |

---

## 2. Grid verdict

| Question | Answer |
|---|---|
| **Opacity** | **Down.** Marks 0.15 → **0.12**. Lines 0.07 → **0.04** (#F5F5F5 on white, so it can no longer strike through type). Cap the cursor glow at **+0.28** (max 0.40 total, never near text value), radius **128px (2 cells)**, fall rate 0.06 → 0.08. |
| **Cell size** | **Up, 60 → 64** at ≥1216px viewport. 1152 / 64 = **exactly 18 columns**. Below that, compute `cell = contentWidth / 18` (desktop/tablet ≥1024) or `contentWidth / 6` (<768; 57px at 390) so the lines always land on both content edges. Never a fixed cell that ignores the column. |
| **Plus mark** | **10 → 8px**, arm **1.7 → 1px**, drawn on the half pixel (`x + 0.5`, same as the lines). Crisp. On phone: **6px**. |
| **Lines** | **On at desktop (0.04), off below 768px.** At phone density (6 columns over 342px) the hairlines cross every paragraph. Marks alone carry the texture there. |
| **Mask / fade** | CSS `mask-image` on `.grid-bg`: `linear-gradient(to bottom, transparent 0, #000 96px, #000 calc(100% - 160px), transparent 100%)`. It fades out under the nav band and into the dark next section. Phone only: stack a second layer so the grid runs at 40% over the copy block and 100% from the card down. |
| **Aligned to content?** | **Yes, mandatory.** Origin x = the `.hero-inner` content-box left. Origin y = the `.headline` top. Read both with `getBoundingClientRect()` in `resize()` and draw from `origin + k*cell` in both directions. With the headline at font 64 / line-height 64 (see directions), each row line falls **dead centre in the 17px gap between caps lines** (about 8.6px under a baseline, 8.9px above the next cap top). The grid then sits in the gutters instead of cutting the letters. |
| **Interact with the card?** | **Only geometrically.** Snap all four card edges to grid lines (card = whole cells) so the hairlines end exactly at the card's edge and the corner marks peek out as crop marks. **No** reaction to video events and no glow from the card: that is decoration competing with the film's own motion. Skip glow computation for marks under the card (they're hidden). |

---

## 3. Video card verdict

- **Size:** at least **512 x 384** (8 x 6 cells, exact 4:3, 0.53x of source) in a split layout, or **768 x 576** (12 x 9 cells, 0.8x) if the film leads (Direction B). Anything under 500px wide makes the phone UI unreadable.
- **Shadow:** **remove the drop shadow.** Replace it with a 1px ring `box-shadow: 0 0 0 1px rgba(17,17,17,.10)`. That defines all four edges at 1.11:1 fill contrast with no smudge. If lift is wanted (Direction B only): `0 0 0 1px rgba(17,17,17,.06), 0 2px 4px rgba(17,17,17,.04), 0 24px 48px -24px rgba(17,17,17,.16)`.
- **3D tilt or box: no.** (a) A perspective-tilted media card is the most recognisable SaaS-template move there is. (b) The film already contains a device (the phone), and a tilted card holding a phone is a mock inside a mock. (c) Foreshortening shrinks text that is already 8px. (d) The film spends the motion budget. Tilt or parallax on top is two motions fighting.
- **Frame:** none. No browser chrome, no device bezel around the card.
- **Radius:** **20 → 12px** (or 0 in Direction A). 20px plus the pill plus the phone's own rounded corners is three soft radii stacked.
- **Background:** re-render the film with the background at **#F4F2ED** (brand), not #F2F3EC. Set the element `background: #F4F2ED` so the poster frame and the video match.
- **Film render:** scale the phone to about 88% inside the frame so it has **≥ 24px** of air top and bottom at the displayed size (≥ 45px in source pixels).
- **Position:** the top edge sits on the same grid row line as the headline's first line box. The right edge sits on the content right edge (x 1296 at 1440).
- **Pause button:** move it **out of the film** into a caption row **16px below the card**, left-aligned: a 28px solid **#111** circle with a 12px white icon, plus a 14px/500 label "Pause" / "Play". The hit area is ≥ 44px via padding. No opacity tricks.
- **"See examples":** in the same caption row, right-aligned. 15px/500 #111, `text-decoration: underline 1px`, `text-underline-offset: 4px`, and a **14px Lucide arrow-down SVG, stroke 2** instead of the ↓ glyph (one icon system). The caption row sits on a grid line, so no mark can collide (marks are 8px, and the row is laid out between lines). In Direction B it moves beside the CTA instead.

---

## 4. AI-generated / template tells

1. The Framer "grid-background, Plus + Lines" component with its **default values verbatim** (60px, 10px marks, 15%) and the stock cursor spotlight.
2. An all-caps 700 headline at line-height 0.9 and −0.03em tracking, left-aligned at 72px: the default "bold Framer portfolio" headline.
3. A black pill CTA with a **Lucide calendar icon** in front of "Book a free 20-min call", plus a hover blob fill. The icon adds nothing the words don't say.
4. A `7fr/5fr` split with a rounded (20px) off-white card floating on a soft bottom-only shadow.
5. An iPhone incoming-call mock with iOS red/green buttons inside the card: the most common "AI receptionist" visual in the category.
6. The ↓ Unicode arrow in an underlined text link ("See examples ↓").
7. A staggered fade-up reveal (120/220/320ms) on every block.
8. A translucent dark-grey circular play/pause overlay.
9. Everything vertically centred in `100svh`, with equal emptiness above and below and nothing hinting at the next section.
10. Nav: wordmark left, three links right, `mix-blend-mode: difference`.
11. Five type sizes within 15 to 17px, all one colour: a system that was never tuned.
12. Nothing specific to Zaid in the visual layer (no face, no signature detail, no real client artifact). Any agency could swap in its name.

---

## 5. Three fix directions

All three share these fixes:
- Size the headline in container units against its own column, so it can never re-wrap at wide viewports (flaw 1).
- Draw the grid from the content origin (flaw 2).
- Use crisp 1px marks (flaw 14).
- Mask the grid top and bottom (flaw 11).
- Re-render the film at #F4F2ED with ≥ 24px of phone air (flaws 6 and 9).
- Pass `--cell` from the canvas script to CSS so layout and grid share one number.

### A. "Ruled Sheet": the grid becomes the layout's ruler

**Layout (≥1024px).**
- `.hero-inner { container-type: inline-size; max-width: 76rem; padding-inline: 2rem; grid-template-columns: minmax(0,9fr) minmax(0,8fr); column-gap: calc(100cqi / 18); }`. At 1152 that gives copy **576**, gap **64**, card **512**, all on lines.
- Vertical: `padding-block: clamp(48px, 10svh, 128px)`; keep `align-content: center`.
- Columns top-aligned (`align-items: start`).

**Type.**
- Headline: `font-size: min(4rem, 100cqi / 18)` (64px at 1152), `line-height: 1` (so each line = one cell), weight 700, uppercase, `letter-spacing: -0.03em`, no max-width. It is about 556px wide in the 576 column, and because font and column both scale with cqi it never re-wraps.
- Sub: **19px / 32px**, `color: rgba(17,17,17,.72)` (about 8:1), `max-width: 40ch`, `margin-top: 32px`. A 32px line-height is half a cell, so row lines fall between sub lines.
- CTA: `margin-top: 32px`. Button 56px tall (`padding: 16px 28px`), 17px/500, **no icon**.
- Nav unchanged except link size 15 → 16 (one size for nav, link and caption).

**Grid.**

| Setting | Value |
|---|---|
| Cell | `--cell` = content width / 18 (64) |
| Origin | content left, headline top |
| Lines | 1px `rgba(17,17,17,.04)` |
| Marks | 8px, 1px arm, `rgba(17,17,17,.12)` |
| Glow | +0.28 max, radius 2 cells |
| Mask | top 96 / bottom 160 fade (section 2) |

**Card.**
- 512 x 384 (8 x 6 cells), **radius 0**, `box-shadow: 0 0 0 1px rgba(17,17,17,.10)`, no drop shadow.
- Its corners land on grid intersections, so the plus marks show as L-shaped crop marks: the one deliberate card/grid interaction.
- Caption row 16px below: pause (left) and "See examples" (right), as in section 3.

**Phone (<768).**
- Gutters 24px. `cell = content / 6` (57px at 390). Lines off, marks 6px at .12, 40% mask over the copy.
- Headline `min(2.5rem, 100cqi / 9)` with line-height 1.
- Hero `padding-top: 112px` (48px clear under the nav).
- Card full-width 342 x 256, radius 0, ring; caption row as desktop.

**Trades away:** the soft floating-card friendliness. A square ring card is stricter and more editorial. The headline drops 72 → 64px (−11%), and the grid gets quieter than the owner's current look.

**Predicted score: 7.5/10.** Every alignment, collision and wrap bug is gone, and the grid finally means something. But the film is still only 0.53x and the split layout is still the familiar pattern.

### B. "Proof First": the film is the hero, the headline is its caption

**Layout (≥1024px).** Two rows, cell 64 (content / 18).
- Row 1: the headline, full content width (1152).
- Gap: one cell (64).
- Row 2: `grid-template-columns: 5fr 1fr 12fr`, i.e. copy **320** | gap **64** | film **768 x 576** (12 x 9 cells, 0.8x source, so the labels read at about 14px).
- At 1440x900: nav 64, top pad 32, headline 96 to 224, film 288 to 864. It fits with 36px spare. At 1366x768 the bottom 100px of film sits below the fold as a deliberate peek.
- Start playback when ≥ 50% of the film is visible (reuse the phone `IntersectionObserver` path for all widths).

**Type.**
- Headline: `font-size: min(4.5rem, 100cqi / 16)` (72px), `line-height: calc(100cqi / 18)` (64px, ratio 0.89 like today), `text-wrap: balance`. Brief for the copy rewrite: ≤ 2 lines at 1152 (about 24 caps characters per line).
- Sub: 17px / 28px, `rgba(17,17,17,.72)`, fills the 320 column (about 5 lines).
- CTA 24px under the sub. "See examples" moves into `.cta`, **under the button** (320 is too narrow side by side), 16px/500 with an SVG arrow.
- The copy column is top-aligned to the film's top edge.

**Grid.**
- Cell 64, origin as in A, lines .04, marks 8px .12.
- Plus a radial emphasis mask: `radial-gradient(ellipse 55% 70% at 68% 70%, #000 45%, rgba(0,0,0,.3) 100%)`, intersected with the top and bottom fades. The grid is full strength around the film (it becomes the film's "stage") and 30% behind the headline.

**Card.**
- 768 x 576 on grid lines, **radius 12**.
- Lift: `0 0 0 1px rgba(17,17,17,.06), 0 2px 4px rgba(17,17,17,.04), 0 24px 48px -24px rgba(17,17,17,.16)`.
- No tilt.
- Caption row 16px below with pause only (left).

**Phone.**
- Same as A for grid and type.
- Order: headline → sub → CTA → film (full width 342 x 256, radius 12, ring) → pause.

**Trades away:** the headline is no longer the biggest thing, so the page leads with evidence, not a claim. Above the fold is denser. Short laptops see the film cropped. The claim/proof side-by-side symmetry is gone.

**Predicted score: 8/10.** It fixes the biggest persuasive failure (unreadable proof) and gives the grid a job (staging the film). It loses half a point for density risk on 768px-tall screens and half for depending on the copy rewrite fitting 2 lines.

### C. "Night Window": dark hero, the film is the only lit object

**Layout.** A's geometry exactly (9/8 columns, cell 64, card 512 x 384, headline 64/64 in cqi), on **#0A0A0B**.

**Type.**
- Headline `#F4F2ED`.
- Sub 19px / 32px **`#9C9A94`** (`--color-muted`, about 7.3:1 on #0A0A0B).
- CTA pill background `#F4F2ED`, text `#0A0A0B`, hover fill `#FFFFFF` (the `--color-accent-hover` token). No icon.
- Nav needs no change: the difference blend inverts it automatically.

**Grid.**
- Colour `244,242,237`: lines **.035**, marks 8px **.10**.
- Glow +.22 max, radius 2 cells.
- Same origin and masks as A.

**Card.**
- 512 x 384, **radius 12**, **no shadow, no ring**: light on near-black is about 17:1, and the edge defines itself.
- Film background re-rendered to exactly #F4F2ED, so it matches the headline colour: the window and the words are the same light.
- Caption row: pause is a 28px `#F4F2ED` circle with a #0A0A0B icon. The link is #F4F2ED with an underline.

**Section rhythm.** The site alternates dark and white, so `Problem` must become light (`background: #F6F4EF; color: #111`) and every section after it flips. Fix the column jump at the same time: set `Problem` to `max-w-[76rem] px-8` so text starts at the same x as the hero.

**Trades away:** the owner's current white-paper look. It requires re-theming every downstream section. A dark grid on a dark hero is subtler, so the grid the owner likes becomes a whisper.

**Predicted score: 7/10.** The film becomes the brightest object on the screen, so the eye goes to the proof first, and the result is the least template-looking of the three. It loses points for the whole-site re-theme cost and because the grid, the owner's favourite element, nearly disappears.

---

## 6. Score of the current hero: **5 / 10**

Points lost:
- **−1.5:** the headline breaks to 4 lines, with an orphaned "MORE", on every screen wider than about 1455px (most desktop monitors).
- **−1.0:** the grid is wallpaper, not structure. It is 6px off every edge, its hairlines cut the headline and sub, and a mark collides with the link.
- **−1.0:** the proof film plays at 47% scale, so the most persuasive element on the page is unreadable.
- **−0.5:** the card is weak: 1.11:1 edge, off-brand green-grey tint, bottom-only shadow smudge, phone jammed 5px from the frame edges.
- **−0.5:** stacked template tells (default Framer grid, caps headline with icon pill, floating rounded card, translucent pause chip).
- **−0.5:** loose ends: an orphaned link with a second icon system, a cursor glow as black as the headline, a hard cut into the dark section, and a 96px column jump.
