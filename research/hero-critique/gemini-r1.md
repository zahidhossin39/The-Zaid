# Hero Section Critique

## 1. Flaws

1. **Typographical hierarchy imbalance**
   - **Location:** Headline vs. Subhead.
   - **What it is:** Headline is up to `4.6rem` (73.6px), while the subhead is a tiny `1.0625rem` (17px) — a 4.3:1 ratio.
   - **Why it hurts:** It forces the user to squint to read the actual value proposition after being shouted at by the headline. It breaks reading momentum.
   - **Severity:** 9/10

2. **The "Dead Zone" layout gap**
   - **Location:** The space between the left text column and the right video column on desktop (1440px+).
   - **What it is:** The `7fr / 5fr` grid combined with a tight `42ch` max-width on the subhead creates a massive, unbalanced column of whitespace in the middle of the hero.
   - **Why it hurts:** The two halves of the layout feel entirely disconnected, leaving the layout lacking cohesion.
   - **Severity:** 8/10

3. **Orphaned secondary action**
   - **Location:** The "See examples ↓" link below the video card.
   - **What it is:** `margin: 1.1rem 0 0 auto` forces it to the bottom-right edge of the media column.
   - **Why it hurts (UX):** The user reads left-to-right, finishes at the CTA button, and then must search the opposite corner of the screen to find the secondary action, breaking the F-pattern reading flow.
   - **Severity:** 8/10

4. **Template-y drop shadow**
   - **Location:** `.hero-media video`.
   - **What it is:** `box-shadow: 0 30px 60px -35px rgba(10, 10, 11, 0.35)`.
   - **Why it hurts:** A heavy, blurry shadow on an off-white card with no border placed against a pure white background looks muddy and smeared. It looks cheap.
   - **Severity:** 7/10

5. **Inconsistent geometry and radii**
   - **Location:** Typography vs. Video Card vs. Buttons.
   - **What it is:** Sharp, blocky, tightly-tracked uppercase typography clashes with a `20px` border-radius video card and fully rounded pill buttons (`999px`).
   - **Why it hurts:** It creates a confused visual language that oscillates between harsh brutalism and soft, bubbly tech-SaaS.
   - **Severity:** 7/10

6. **Unaligned grid system**
   - **Location:** `GridBackground.astro`.
   - **What it is:** The 60px canvas grid originates from the viewport's top-left and scales infinitely, completely ignoring the `76rem` max-width content container.
   - **Why it hurts:** The grid acts as pasted-on wallpaper rather than a structural element, violating the fundamental purpose of a design grid.
   - **Severity:** 6/10

7. **Grid text interference**
   - **Location:** The background grid behind the subhead text.
   - **What it is:** `0.15` opacity plus marks and `0.07` opacity lines running indiscriminately behind standard-weight 17px text.
   - **Why it hurts:** It introduces unnecessary visual noise exactly where reading friction should be zero.
   - **Severity:** 6/10

8. **Mix-blend-mode artifacting**
   - **Location:** `.navbar` links.
   - **What it is:** `mix-blend-mode: difference` on white text to make it appear black on the white background.
   - **Why it hurts:** When the fixed navbar scrolls over the grey grid lines, the text mathematically inverts the grey pixels, creating crunchy, aliased artifacts inside the letters for zero visual benefit.
   - **Severity:** 5/10

## 2. Grid Verdict

- **Opacity up or down?** Down.
- **Cell size up or down?** Up, to 80px.
- **Plus-mark size?** Down to 6px.
- **Lines on or off?** Off.
- **Masked/faded (where)?** Masked out radially behind the text column (headline + subhead) to preserve legibility, and faded out at the extreme viewport edges (left/right bounds).
- **Aligned to the content column?** Yes. The grid origin (0,0) must be anchored to the center of the `76rem` container, so marks align perfectly with the structural layout edges.
- **Should it interact with the video card?** The grid should be fully masked behind the video card, with the cursor glow effect stopping cleanly at the card's border.

## 3. Video Card Verdict

- **Shadow or not:** No shadow.
- **3D tilt/box or not:** No 3D tilt. Keep it strictly flat and honest to fit the "no hype" brand.
- **Frame:** 1px solid `#E5E5E5` (or `#111111` at 10% opacity) for crisp definition.
- **Radius:** 0px (sharp corners) to match the bold uppercase typography.
- **Background:** `#f6f4ef`.
- **Size:** Explicitly matched to the 5fr column width (100% width, auto height).
- **Position:** Top-aligned precisely with the cap height of the headline.
- **Pause button:** Move it inside the video frame, bottom-left. Make it a sharp square `32x32px` instead of a pill.
- **"See examples ↓" link:** Move it out of the media column and place it in the left column, exactly `1.5rem` directly below the main CTA button.

## 4. Tells of AI-Generated / Template-y Design

- The muddy, oversized drop shadow (`0 30px 60px`) on a heavily rounded card floating in white space.
- The growing-circle hover effect on a standard pill button, which is a widely overused CodePen/template trick that clashes with the brutalist headline.
- Splitting actions across the screen (primary CTA on the left, secondary link awkwardly shoved to the bottom right of an image element).
- A "techy" background grid that acts as wallpaper and ignores the actual layout max-widths.
- The 4rem flex gap creating a random chasm of whitespace because the text max-widths don't fill their flex fraction.
- The use of `mix-blend-mode: difference` just for the sake of it on a static white background.

## 5. Three Fix Directions

### Direction 1: Strict Editorial
- **Full spec:** 12-column CSS grid (`gap: 2rem`). Text spans cols 1-6. Video spans cols 8-12. No `max-width` on text. Headline `4rem` (fixed), Subhead `1.25rem`. 2.5rem between subhead and CTA. Secondary link placed adjacent to the CTA button (`gap: 1.5rem`). Card: 0px radius, 1px solid `#111111` border, no shadow, `aspect-ratio: 16/9`. Grid: Cell size 120px, marks 4px, lines off, opacity 0.08, completely masked behind cols 1-6.
- **Trades away:** The soft, friendly tech vibe; it becomes unapologetically stark and print-like.
- **Predicted score & reason:** 9/10. Fixes the spatial dead zone by using a rigid 12-column grid and aligns the visual language (sharp edges, no shadow) perfectly with a calm, honest tone.

### Direction 2: Architectural System
- **Full spec:** 2 equal columns (`1fr 1fr`). Both columns are wrapped in subtle `1px solid #E5E5E5` borders to define the space explicitly. Headline `clamp(2.5rem, 4vw, 3.5rem)`, Subhead `1.125rem`. 1rem between headline and subhead, 2rem between subhead and CTA. Card: 8px radius, 1px border, 1.5rem of `#f6f4ef` padding around the video itself. No shadow. Grid: Cell size 64px, marks 8px, lines on (opacity 0.04), origin strictly aligned to the left edge of the container.
- **Trades away:** Negative space and minimalism; it becomes a dense, highly structured interface.
- **Predicted score & reason:** 8.5/10. Visually emphasizes the "systems" part of the value proposition, though the bordering might feel slightly heavier than necessary.

### Direction 3: Focused Cinematic
- **Full spec:** Stacked center alignment. Text block centered above, video card spanning `100%` width of a `48rem` centered container below. Headline `clamp(3rem, 6vw, 5rem)`, text-aligned center. Subhead `1.25rem`, max-width `60ch`. 4rem vertical gap between the text block and the video block. CTA and secondary link centered side-by-side. Card: 12px radius, dark frame (`#0a0a0b`), no shadow. Grid: Cell size 80px, plus marks 8px, lines off, opacity 0.12, radial fade out from the center of the video outwards.
- **Trades away:** Above-the-fold density; the video requires scrolling to fully see.
- **Predicted score & reason:** 7.5/10. Very safe and highly legible, but it loses the interesting tension of the asymmetric desktop layout.

## 6. Score of the Current Hero

**Score: 4/10**

- Lost 1 point for the massive spatial dead zone between the text and video columns.
- Lost 1 point for the extreme size contrast making the subhead unreadable.
- Lost 1 point for placing the secondary link on the opposite side of the screen.
- Lost 1 point for the template-y, muddy drop shadow on the video.
- Lost 1 point for the decorative grid that ignores the layout structure.
- Lost 1 point for mixing brutalist typography with bubbly pill buttons and rounded cards.
