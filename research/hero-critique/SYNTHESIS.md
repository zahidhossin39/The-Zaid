# Round 3: synthesis for final scoring

The moderator merged `claude-r2.md`, `gemini-r2.md` and `kimi-r2.md` (same folder). The goal of this round is to confirm, or block, the three directions below, which will be built as prototypes.

## Moderator rulings on the disputes

- **Headline wrap is real, severity 9.** I checked `desktop-1920.png`: it breaks into 4 lines with "MORE" alone on line 1. Gemini's "minor quirk" ruling is overturned.
- **Grid lines stay ON at 0.04.** The owner explicitly chose "Plus + Lines" over the other three modes (commit c641fdd). Owner preference beats the critics' "lines off" (Kimi, Gemini). Lines are off only below 768px.
- **Video film re-render (#F4F2ED background, phone at 88%)** is out of scope for this prototype. It becomes a separate producer task. Judge the CSS/layout only.
- **Section widening (84rem for Problem and other sections):** the prototype widens only the hero and navbar. Other sections come later if a winner needs it.
- **Radius rule:** things you press are round (CTA pill, pause circle); things you look at get 12px (the card). This is a compromise between Claude's 0 and the 12 that Kimi and Gemini proposed.

## Shared base (all 3 directions)

**Navbar and hero container.** 84rem max-width, 2rem side padding, so the content is 1280px. `.hero-inner` gets `container-type: inline-size`.

**Grid.**
- Cell = content width / 20 (64px at 1280). Below 1024px it's content / 12; below 768px it's content / 6.
- Origin is the content-left edge and the headline top.
- Lines are 1px `rgba(17,17,17,.04)`. Marks are 8px with a 1px arm on the half-pixel, `.12`. On phones marks are 6px and there are no lines.
- The cursor glow adds at most +0.28 and reaches 2 cells.
- Mask:
  - fade in over the top 96px;
  - fade out over the bottom 160px;
  - 35% strength behind the copy block.

**Headline.** `font-size: calc(100cqi/20)` (64px), `line-height: 1`, uppercase, 700, -0.03em, no max-width. It can never re-wrap.

**Sub.** 19px/32px, `rgba(17,17,17,.72)`.

**CTA.** Black pill, 56px tall. No calendar icon. No cursor-fill blob. The hover is a background change from #111 to #2b2b2b.

**Card.**
- Radius 12.
- Ring `0 0 0 1px rgba(17,17,17,.12)` and a small seat shadow `0 12px 32px -16px rgba(10,10,11,.18)`.
- No tilt.
- The edges snap to grid lines, so the corner plus marks read as crop marks.

**Caption row.** Sits 16px under the card, with the pause control (a 28px solid #111 circle with a "Pause" label and a 44px hit area) and "See examples" (15px/500 with an SVG arrow, underlined on hover only). The pause control is no longer overlaid on the film.

**Motion.**
- The copy reveals as one block.
- No reveal on the video.
- The reduced-motion rules are unchanged.

## The three directions

**D1 "Registered Split".** Columns `9fr 1fr 10fr`: copy 576, a 64px gutter, card 640x480 (0.67x the video). The card top sits on the headline's top row, and the caption row ends on a grid line. Claim on the left, proof on the right, all of it registered to the grid.

**D2 "Proof Stage".**
- Row 1: the headline across the full 1280px, at most 2 lines at `min(4.5rem, 100cqi/17.75)`.
- Row 2: `7fr 1fr 12fr`, giving copy 448, a gutter, and the film at 768x576 (0.8x).
- "See examples" moves inline next to the CTA. The caption row under the film holds the pause control only.
- Windows shorter than 900px fall back to `11fr 1fr 8fr` with the film at 512x384.
- The grid gets a radial emphasis around the film (full strength) and 35% strength behind the headline.

**D3 "Split Stage, bled".**
- The copy sits on the left half (cells 1-9) on white.
- A #0A0A0B panel runs from 50% of the viewport to its right edge, full hero height, flowing into the dark Problem section below. At 50% it always lands on grid line 10.
- The card (576x432) sits in the panel, one cell in from the panel edge, with no ring or shadow (the contrast is about 17:1).
- One canvas: marks and lines are dark on the white side and #F4F2ED on the dark side (marks .10, lines .035).
- The navbar's difference blend inverts over the panel automatically.

## Your task

Score each direction out of 10 **as specced above**, using four criteria:
- visual quality / aesthetics;
- UX clarity;
- brand fit (calm, honest, black-and-white, and the grid stays);
- build risk.

For any direction under 9.0, give the **specific smallest change** that would bring it to 9.0 or more, and your score after that change. Keep it under 60 lines. Write to the output file named in your task.
