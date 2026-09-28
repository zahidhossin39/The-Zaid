# Phase Transition Scorecard

1. **Scores (out of 10):**
   - **Continuity:** 6/10 (Mathematically perfect with 0 overlaps/blanks, but clipping causes harsh visual pops).
   - **Motion quality and easing:** 8/10 (Spring mechanics and staggered wave feel premium).
   - **Timing:** 9/10 (10 rad/s tuning is crisp, neither rushed nor sluggish).
   - **Legibility while it moves:** 2/10 (Ruined by aggressive box clipping).
   - **Landing and settle:** 9/10 (Lenis re-aiming is a brilliant way to prevent mid-transition stranding).
   - **Brand fit:** 7/10 (The concept fits the calm, editorial vibe, but the clipping breaks the illusion).

2. **Overall score:** 6.5 / 10

3. **Visible defects in frames:**
   Severe vertical text clipping. Because `.slot` has `overflow: hidden`, the text is visibly chopped horizontally as it translates (e.g., the tops of "Plan & Design" and the bottoms of "Build" are sliced off during their respective out/in movements).

4. **Single change most likely to raise the score:**
   Increase the vertical padding and negative margin on `.proc .phase .slot` to accommodate the `D_PX = 30` travel distance. 
   Change `padding: 0.3em 0.6em;` to `padding: 32px 0.6em;` and `margin: -0.3em -0.6em;` to `margin: -32px -0.6em;`. The current `0.3em` (~5px) is far too small, causing the 30px translation to hit the clipping boundary.
