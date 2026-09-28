# Process phase transition: score log

| Round | What changed | Claude (self) | Gemini 3.1 Pro | Kimi K3 |
|---|---|---|---|---|
| Earlier versions | Crossfade, timed out-then-in, timed slide + blur (owner rejected all three) | n/a | n/a | n/a |
| A / B / C | Scroll-linked fade / window scroll / soft wipe | 7.5 / 6.0 / 5.5 | n/a | n/a |
| 1 | Wave handoff, spring, clipped slots | 9.3 (too generous) | 6.5 (hard clip slices letters) | 8.0 (icon lags) |
| 2 | Feathered slots, 18px travel, icon with the title, timing fixed by calculation | 9.0 | 7.8 (slot dwells near 0) | 8.5 |
| 3 | Ease-in exits and ease-out entrances, settle in the scroll direction | 9.2 | **9.3** (edge chop at 14px feather) | 8.8 (title beside old paragraph) |
| 4 | Feather = travel (18px), tighter wave (.40/.46/.52) | **9.3** | fixed its own defect | **9.1** ("no further in-rules change") |

## The owner's rules
- No two phases' text in the same place at the same time.
- No blur.

## Declined suggestions
Both critics suggested an in-slot crossfade at some point. It breaks the first rule, so it was declined.

## Measured on the final version
- Fast flick, slow nudges, reverse and phone: 0 frames with two phases in one slot, and 0 blank frames.
- Reduced motion: opacity only.
- No JavaScript: every phase is visible.
