# Brief: the smoothest phase transition for a pinned, scroll-driven stepper

File: `D:/Vibe-coding/ZAID-WEBSITE/src/components/Process.astro`. Read it fully.

## How the section works now
- A 340vh tall section with a sticky 100svh stage.
- The scroll progress `sp` (0 to 4, for 5 phases) is lerped at 0.18 per frame.
- It drives dots on an arc (rail).
- The page also uses Lenis smooth scroll.
- The text phases (label, title, paragraph, tags, and an icon on the right) are stacked absolutely. The active phase is `Math.round(sp)`.

## What the owner has rejected
1. **A plain 0.5s crossfade.** The two phases overlapped, which looked messy.
2. **A timed "fade out, then fade in".** It felt abrupt.
3. **A timed, direction-aware slide with blur and a stagger.** The owner disliked it, especially the blur.

The owner wants "the smoothest transition ever". The site is calm and editorial: cream background, a serif display face, black and white.

## My current plan (critique it)
Make the text scroll-linked instead of time-triggered.
- For each phase `i`, let `t = sp - i`.
- **Opacity** is 1 while `|t| < 0.3`, eases to 0 by `|t| = 0.5`, and is never shared between phases.
- **Movement:** `translateY = -t * 60px`, with a slightly different multiplier per element for gentle depth. The icon moves less and scales 0.96 to 1.
- **No blur.**
- **Soft snap:** after about 180ms idle, if `sp` sits between phases, call `lenis.scrollTo` to the nearest phase so it never rests blank.

## What I need from you (under 40 lines)
- The weaknesses of this plan.
- Your best concrete alternative or improvements, with exact numbers:
  - easing curves;
  - distances;
  - thresholds;
  - snap behaviour;
  - anything else, such as masking, clip-path reveals, or letting the outgoing copy scroll up like real content.
- How you'd judge "smoothest" objectively.

Do not edit any files. Write your answer to the output file named in your task.
