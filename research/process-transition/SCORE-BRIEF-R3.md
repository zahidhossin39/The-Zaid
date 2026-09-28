# Round 3: final score (strict, honest, within the owner's rules)

Your round-2 scores: Gemini 7.8, Kimi 8.5. Both of you recommended an in-slot crossfade, where old and new text share a slot at partial opacity.

## The owner's rules
The owner has explicitly rejected two things, so they are off the table:
- **Two phases' text visible in the same place at the same time.** The first version did this and the owner called it "overlaps, doesn't look good".
- **Blur.**

Score within those rules.

## What changed since round 2
The dip you both flagged is addressed.
- **Easing.** Exits now ease in (cubic: they accelerate away) and entrances ease out (cubic: they decelerate in). Before, both used smoothstep.
- **Result:** a slot is below 10% opacity for about 1% of a step, down from 5.5%. The stage's most visible part never drops below 91%, down from 80%.
- **Fades.** The fade window is 0.18 of a step, up from 0.14, so fades are softer.
- **Icon.** It changes together with the title.
- **Settling** now completes small leftovers in the direction of travel. A nudge under 20% of a step is left alone.
- **Edge tests:**
  - scrolling past either end of the section exits freely;
  - fast, slow, reverse and phone scrolling give 0 overlap frames and 0 blank frames;
  - reduced motion is opacity only;
  - with no JavaScript, everything is visible.

## What to look at
Refreshed images are in `D:/Vibe-coding/ZAID-WEBSITE/research/process-transition/`:
- `midframes-desktop.png`: static states at 26%, 36%, 44%, 52%, 60% and 70% through one handoff;
- `film-fast-30fps.png`;
- `film-slow-8fps.png`;
- `film-phone-24fps.png`.

The code is `D:/Vibe-coding/ZAID-WEBSITE/src/components/Process.astro`.

## What to write
1. Scores out of 10 on the same six axes as before.
2. An overall score.
3. Any remaining defect you can actually see.
4. The single best change that stays inside the owner's rules, or "none" if you can't find one.

Keep it under 25 lines. Do not edit source files.
