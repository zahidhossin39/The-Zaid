# Round 2: cross-critique (Gemini)

## 1. Attacks

**Against Claude:**
1. **"The headline breaks to 4 lines, with an orphaned 'MORE' on line 1... Severity 9"**
   Claude calculates a 9.7px deficit at 1440px and a wrap at 1920px, declaring it a 9/10 severity flaw. Calling a natural text wrap on an ultra-wide monitor the single biggest failure of the hero is wildly overstated. It's a minor typography quirk, not a core structural or UX collapse like the unreadable proof.
2. **"origin y = the .headline top... each row line falls dead centre in the 17px gap between caps lines"**
   Claude's Direction A attempts to mathematically slave the grid's vertical offset and cell size to the text's line height. This is incredibly fragile. A grid should be an independent architectural structure, not bound to a text block's line-height. If a user resizes their base font size or the copy changes, the entire alignment shatters.
3. **"Pause button... Move it out of the film into a caption row 16px below the card"**
   Moving the pause button entirely outside the media card into a standalone text link row below it disconnects the control from the object it manipulates. It clutters the page layout and makes the video control look like a generic page action.

**Against Kimi:**
1. **"The card has no edge. Severity 8."**
   Kimi claims the `#F6F4EF` card on a `#FFFFFF` background is "invisible" and dissolves completely. The contrast ratio is ~1.08:1, which is subtle but absolutely visible on modern screens. Giving this a severity of 8 (tying the mathematically broken grid) is pure hyperbole.
2. **"Right 7 columns (560px) dark #0a0a0b, full-height panel"**
   Kimi's Direction C splits the hero in half with a massive black panel behind the video. This directly violates the brief's requirement for a "calm and honest tone, no hype." Slapping a high-contrast dark-mode panel into the hero turns a clean personal site into an aggressive, heavy-handed SaaS cliché.
3. **"No response above 1216px... Severity 7"**
   Kimi calls a `76rem` (1216px) `max-width` constraint a major flaw and stretches the container to `84rem`. A 1200px-range max-width is an industry-standard constraint specifically chosen to prevent line lengths from becoming unreadable on large monitors. A centered hero on an ultrawide screen isn't a flaw, it's standard responsive behavior. 

## 2. Concessions

*From Claude:*
- **The grid origin offset:** Claude nailed the exact pixel math of the near-miss 6px alignment on the grid (`30 + 60k` vs the layout padding). I recognized it was unaligned, but Claude precisely diagnosed *why* it was misaligned.
- **Video scale illegibility:** Claude correctly measured that the video natively scales down to 47% (453x340), rendering the UI text at an illegible 6-8px. I missed the exact scaling math that proves the "proof" is physically impossible to read.

*From Kimi:*
- **Interaction incoherence:** Kimi brilliantly pointed out the four completely unrelated interaction idioms (fill circle on CTA, opacity fade on nav, static border on link, cursor glow on grid). I entirely missed this lack of a unified interaction system.
- **Mark aliasing:** Kimi correctly diagnosed that `ARM = 1.7` drawn at integer origins on DPR 1 screens creates soft, blurry ticks. A technical detail I overlooked that contributes to the "cheap" feeling.

## 3. Merged Flaw Ranking

1. **The proof is illegible** (Sev 9) - The 47% video scale renders the phone UI text at 6-8px, destroying the central persuasive element. *Fix: Scale card to at least 512px wide, or switch to a full-width centered layout.*
2. **Typographical hierarchy is broken** (Sev 8) - A 72px headline against a 17px subhead is a 4.2:1 ratio, turning the actual value proposition into an afterthought. *Fix: Bump subhead to 19px/20px and soften the headline weight.*
3. **The layout ignores the grid** (Sev 8) - The 60px grid sits 6px off the structural edges because 1152px isn't divisible by 60. *Fix: Use a 64px or 72px cell size and align origin exactly to container left.*
4. **The "Dead Zone" gap** (Sev 7) - The `7fr/5fr` split plus a tight `42ch` max-width leaves a massive, unbalanced column of whitespace between text and video. *Fix: Shift to an equal `6fr/6fr` split or increase the text max-width.*
5. **Muddy drop shadow** (Sev 6) - The card relies on a blurry, heavy `-35px` spread shadow that looks like dirt rather than depth. *Fix: Remove the drop shadow completely; add a crisp 1px border.*
6. **Orphaned secondary action** (Sev 6) - "See examples ↓" is shoved to the bottom right under the video, far from the primary CTA, breaking reading flow. *Fix: Move it directly beneath or beside the primary CTA.*
7. **Obstructive pause button** (Sev 5) - A muddy grey circle sits arbitrarily on top of the actual video UI content. *Fix: Move to the bottom-left corner of the card frame (off the video).*
8. **Incoherent interaction idioms** (Sev 4) - Fill circles, opacity fades, static borders, and grid glows have no shared design logic. *Fix: Unify hover states to one standard (e.g., all 1px border-bottom).*
9. **Grid interference behind text** (Sev 4) - Grid lines run behind the subhead, adding visual noise to the reading zone. *Fix: Radially mask out the grid behind the text column.*

## 4. Final Grid and Card Settings

**Grid:**
- **Opacity:** Down. Marks `0.10`.
- **Cell size:** Up to `64px` (exactly 18 cells across the 1152px container).
- **Lines:** OFF. Plus-marks only.
- **Marks:** `8px` size, `1px` arm thickness, forced to whole-pixel coordinates for crisp rendering.
- **Masking:** Radially masked to 0% opacity behind the text column to protect reading legibility, and a linear fade over the bottom 15vh.
- **Alignment:** Origin X explicitly anchored to the `content-box` left edge of the main container.
- **Card Interaction:** A subtle fixed `+0.15` opacity halo on the grid marks immediately surrounding the card to "pin" it to the lattice, replacing the floating drop shadow.

**Video Card:**
- **Shadow:** None. Zero drop shadow.
- **Border:** `1px solid rgba(17, 17, 17, 0.15)`.
- **Radius:** `12px` (sharp enough for the brand tone, soft enough to avoid harsh brutalism).
- **Background:** `#F6F4EF`.
- **Size:** Explicit `100%` width of the media column, removing the hardcoded 460px width.
- **Pause button:** Removed from the video overlay. A sharp 32px square (`#111` with white icon) pinned inside the bottom-left corner of the card border.

## 5. Scores for All Nine Directions

1. **Claude A ("Ruled Sheet"): 6.5/10** - Trying to mathematically sync the grid cell size to the text line-height is incredibly brittle and dogmatic.
2. **Claude B ("Proof First"): 8/10** - Smart hierarchy shift that guarantees the proof is legible, though relying on a strict 2-line max for a responsive headline is risky.
3. **Claude C ("Night Window"): 4/10** - Completely violates the brand's calm aesthetic by forcing a heavy, high-contrast dark mode shift on the hero.
4. **Gemini 1 ("Strict Editorial"): 7.5/10** - Clean and precise, but the 0px radius trades away too much of the approachable tone for rigid brutalism.
5. **Gemini 2 ("Architectural System"): 8.5/10** - Solidly fixes the dead zone and perfectly aligns the grid, though the full-column borders might feel slightly heavy.
6. **Gemini 3 ("Focused Cinematic"): 7/10** - A safe centered stack, but wastes desktop width and pushes the primary proof below the fold on short screens.
7. **Kimi A ("Snap"): 8.5/10** - An excellent, low-risk mechanical fix for all the alignment and math errors while keeping the familiar structure.
8. **Kimi B ("Editorial spread"): 8/10** - Strong visual impact, but bottom-aligning the card to the CTA on the far left creates an awkward empty upper-right quadrant.
9. **Kimi C ("Split stage"): 4/10** - Similar to Claude C, the drastic black panel is completely out of place for this brand, feeling like a standard SaaS template.

## 6. Your Three Final Directions

### Direction 1: "Anchored Lattice" (Refinement of Kimi A / Gemini 2)
A highly polished execution of the original layout intent. It mathematically locks every edge to the grid and unifies the UX idioms without reinventing the structure.
- **Layout:** `max-width: 76rem`. `padding: 2rem` (Content width 1152px). Split `6fr / 6fr` (equal 544px columns, 64px gap) to eliminate the dead zone. Text column left, media right. Vertically centered.
- **Grid:** Cell size `64px` (1152 / 64 = 18 cols). Origin x = container left edge. Marks only (8px, 1px arm, crisp whole-pixel rendering), no lines. Base opacity `0.10`. Masked out `0%` radially behind the text block.
- **Card:** Spans full 544px column width (`aspect-ratio: 4/3`). `border-radius: 12px`. `border: 1px solid rgba(17,17,17,0.15)`. No drop shadow. Background `#f6f4ef`.
- **Type:** Headline `clamp(3rem, 5vw, 4.5rem)`, line-height `1`, max-width `15ch`. Subhead bumped to `19px`, line-height `1.6`. CTA left-aligned. "See examples ↓" moved directly beneath CTA, `15px` with a `1px` hover underline.
- **Card UI:** Pause button removed from video overlay. Placed as a small 32px solid `#111` square with white icon sitting exactly on the bottom-left corner intersection of the card's border.
- **Fixes:** Grid misalignment, illegible proof, dead zone, orphaned CTA, muddy shadow.
- **Trades away:** The floating, airy "SaaS" feel; it becomes a grounded, physical artifact pinned to the page.
- **Predicted Score:** **9.5/10**

### Direction 2: "Proof Hero" (Refinement of Claude B)
Prioritizes the evidence. It guarantees the video UI is large enough to read on all devices, completely eliminating the primary persuasive failure of the current design.
- **Layout:** `max-width: 76rem`. Content width 1152px. Single column flow on desktop.
- **Type:** Headline `clamp(2.5rem, 4vw, 4rem)`, `max-width: 28ch`, `text-wrap: balance`, centered at the top of the container. Subhead `20px` max-width `60ch`, centered below headline. Gap of `3rem` to CTAs (primary and secondary side-by-side, centered).
- **Card:** Massive `896px` wide card (14 grid cells of 64px), centered horizontally below the CTAs (`margin-top: 4rem`). `aspect-ratio: 4/3`. `border-radius: 12px`. `border: 1px solid rgba(17,17,17,0.15)`. Drop shadow `0 24px 48px -12px rgba(17,17,17,0.1)`.
- **Grid:** Cell size `64px`. Centered origin. Marks `8px` at `0.12`. Radial gradient mask starting at 100% opacity around the video card, fading to 0% at the viewport edges and behind the text block.
- **Fixes:** Illegible proof (forces it to near full-scale), dead zone, typographical hierarchy.
- **Trades away:** The symmetrical text/image split above the fold; the headline becomes a preamble rather than the dominant visual weight.
- **Predicted Score:** **9.0/10**

### Direction 3: "Editorial Baseline"
A highly structural approach. By aligning everything to a bottom baseline and turning the card into a framed photograph style, it feels intensely deliberate, editorial, and calm.
- **Layout:** `max-width: 84rem` (1344px). `padding: 2rem` (Content width 1280px). Split `5fr / 7fr`. Text left (500px), media right (716px). `align-items: end` — both columns share a strict bottom baseline alignment. `padding-top: 15vh`.
- **Grid:** Cell size `80px` (1280 / 80 = 16 cols). Origin x = container left edge. Lines ON at `0.04` opacity, marks `8px` at `0.10`. Grid spans the top whitespace beautifully. Linear gradient mask fading out completely behind the bottom half of the text and media columns.
- **Card:** 716px wide (`aspect-ratio: 4/3`). Sharp `0px` radius. `1px solid #111`. No shadow. Video sits inside with a `24px` `#f6f4ef` padding border on all sides. Pause button is text "PAUSE" (12px, tracking `0.1em`, uppercase) sitting in the bottom-left padding area.
- **Type:** Headline `4.5rem` fixed, line-height `0.9`. Subhead `18px`. "See examples" text link placed in the bottom-right padding area of the video card, perfectly matching the baseline of the CTA on the left.
- **Fixes:** Floating elements, unreadable proof, grid interference, sloppy interactions, orphaned CTA.
- **Trades away:** Traditional hero centering. Pushes content lower on the page to emphasize the top whitespace and grid structure.
- **Predicted Score:** **9.2/10**
