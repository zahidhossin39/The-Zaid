# Phase Transition R2 Score

**1. Category Scores (out of 10):**
- **Continuity: 6/10** – The strict "0 overlap" rule forces each slot to drop to 0% opacity at handoff, creating a jarring, blinking interruption per slot.
- **Motion quality & easing: 8/10** – The critically damped spring is fantastic, but the `smooth` easing curve has a zero-derivative at the ends, making the blank slot "dwell" and feel visually dead.
- **Timing: 7/10** – The wave separation `[0.40, 0.50, 0.60]` is great, but the `0.14` fade window feels disjointed without a crossfade.
- **Legibility while it moves: 8/10** – The 14px feathered masks elegantly dissolve text without harsh slices, but the 0% opacity dip breaks the reading flow.
- **Landing and settle: 9/10** – The detent ping and Lenis re-aiming to prevent resting in mid-states are superb.
- **Brand fit: 9/10** – The duotone puffy 3D SVGs and B&W on cream nail the calm, editorial vibe.

**2. Overall Score:** 7.8/10

**3. Defect visible in the frames:**
In `midframes-desktop.png` (frames 3-5), the slots blink empty. The outgoing text vanishes completely before the incoming text starts to appear. Because the `smooth` curve flattens at the handoff point, the slot visibly "hangs" at 0% opacity, destroying the fluidity of the transition.

**4. Single change most likely to raise the score:**
Abandon the "0 overlap frames" constraint in favor of a smooth crossfade so a slot's visual weight never drops to zero. In `vis()`, align the `inn` window with the `out` window:
Change: `const inn = i === 0 ? 1 : smooth(c - 1, c - 1 + w, u);`
To: `const inn = i === 0 ? 1 : smooth(c - 1 - w, c - 1, u);`
