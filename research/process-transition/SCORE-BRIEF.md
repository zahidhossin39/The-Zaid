# Score this phase transition, round 2 (be strict and honest)

Round 1 scores: Gemini 6.5, Kimi 8.0 (see score-gemini.md and score-kimi.md). Changes since then:
- The hard `overflow: hidden` slot clip is replaced by feathered 14px mask edges. Moving text now dissolves at the slot edge instead of being sliced.
- Travel is down from 30px to 18px.
- The icon now hands over with the title (Kimi's fix).
- The wave timings are re-tuned by calculation, so at least one part is always at 80% opacity or more: SLOTS = [.40, .50, .60], window .14.
- The measured results still hold: 0 overlap frames and 0 blank frames across fast, slow, reverse and phone.
- `midframes-desktop.png` shows static states at 30%, 38%, 44%, 50%, 56% and 64% through one handoff.

These are filmstrips of real screen recordings of the "How I work" stepper in `D:/Vibe-coding/ZAID-WEBSITE/src/components/Process.astro`. Read the code and the images in `D:/Vibe-coding/ZAID-WEBSITE/research/process-transition/`. Each image is read left to right, top to bottom:

| Image | What it shows |
|---|---|
| `film-fast-30fps.png` | A fast 3-notch mouse-wheel flick, desktop, 30 frames per second |
| `film-slow-8fps.png` | Slow trackpad-like nudges, 8 frames per second |
| `film-phone-24fps.png` | A phone layout, 24 frames per second |

## How the transition works

- **Scroll-linked, not time-triggered.** A critically damped spring follows the scroll position (stiffness 10 rad/s). The dots on the arc use the same value.
- **Wave handoff.** Each slot hands off separately, top to bottom: title block, paragraph, tags, and an icon in the middle. The old part slides up 30px and fades out. The new part slides up from 30px below and fades in.
- **Clipped slots.** Each slot is clipped to its own box, so moving parts never reach a neighbouring slot.
- **Slot heights are equalised,** so old and new parts line up.
- **Measured results:** 0 frames where two phases overlap in one slot, and 0 blank frames. This holds across four test scenarios: fast, slow, reverse and phone.
- **Settling.** When the scroll input ends mid-handoff, Lenis is re-aimed at the next phase in the user's direction. Outside the handoff zone it never snaps.
- **No blur.** The owner rejected blur.

## Score it

The goal is "the smoothest transition possible".

1. Score it out of 10 on each of these:
   - continuity (no pops, blanks or overlaps);
   - motion quality and easing;
   - timing (not too fast, not sluggish);
   - legibility while it moves;
   - landing and settle;
   - brand fit (calm, editorial, black and white on cream).
2. Give an overall score.
3. List any defect you can actually see in the frames.
4. Give the single change most likely to raise the score, with exact numbers.

Keep it under 30 lines. Write it to the output file named in your task, and name the file with -r2. Do not edit source files.
