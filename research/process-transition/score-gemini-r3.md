# Phase Transition R3 Score

**1. Category Scores (out of 10):**
- **Continuity: 9/10** – The velocity-matched cubic easing elegantly connects the motion across the 0% opacity handoff.
- **Motion quality & easing: 10/10** – Accelerating away and decelerating in (mirrored curves) completely cures the visual "dwell".
- **Timing: 9/10** – The softer 0.18 fade window and wave offsets keep the stage lively.
- **Legibility while it moves: 8/10** – The rapid dip doesn't interrupt flow, but a hard clip mars the edges.
- **Landing and settle: 10/10** – The 20% nudge threshold creates a flawless, frictionless scroll feel.
- **Brand fit: 10/10** – The unified icon swap and typography remain excellent.

**2. Overall Score:** 9.3/10

**3. Defect visible in the frames:**
The text is hard-sliced by the mask edge before it fully fades out. The moving parts travel 18px (`D_PX = 18`), but the `.slot`'s feathered padding is only 14px. Because the text moves 4px outside the mask's bounding box, it suffers a visible hard chop at the top/bottom while still at ~22% opacity.

**4. Single best change:**
Match the travel distance to the padding so the text smoothly reaches the clipping edge exactly as opacity hits zero:
Change: `const D_PX = 18;`
To: `const D_PX = 14;`
