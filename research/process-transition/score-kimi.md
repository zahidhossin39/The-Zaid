# Process transition score — kimi

Scored from `Process.astro` plus filmstrips `film-fast-30fps.png`, `film-slow-8fps.png`, `film-phone-24fps.png`.

| Axis | Score | Note |
|---|---|---|
| Continuity | 9/10 | No blanks, pops or in-slot overlaps confirmed in all three strips; clipped slots hold. Only the icon cross-fades two phases in one spot (below). |
| Motion quality & easing | 8/10 | Critically damped spring (W=10) with 4ms substeps is frame-rate independent and reads as one continuous gesture; smoothstep slots and the 0.97→1 icon settle are tasteful. |
| Timing | 8/10 | Fast 3-notch flick resolves in ~12 frames @30fps (~0.4s) — not a cut, not sluggish. Slow nudges track 1:1. The wave spread (0.4→0.6 of a step) makes the full handoff feel slightly long on slow scrolls. |
| Legibility while moving | 7/10 | 30px upright travel, no blur, text stays readable — but mid-handoff frames (slow strip, last row) show body copy at ~40% grey, and mixed-phase combos (below) confuse reading. |
| Landing & settle | 9/10 | Direction-aware re-aim only inside the 0.2–0.8 handoff zone, never fights the user outside it; strips show clean parks on every phase. |
| Brand fit | 9/10 | Calm, editorial, ink-on-cream; wave handoff feels like a page turning. Dial on phone keeps the same language. |

**Overall: 8/10.**

## Defects visible in the frames
1. **Mixed-phase states.** Fast strip, row 2, first frames: new title "Build" sits above the old phase's tags "Steps / Screens / Design". Slow strip, last row: the pen icon is still near-full opacity beside the incoming "Build" title. The wave guarantees per-slot purity but not per-screen coherence.
2. **Icon lags the copy.** `ART = [0.5, 0.14]` hands off later and faster than the title slot `[0.4, 0.2]`, so the old icon outlives the old title and the two icons overlap mid-fade (pen ghost + code icon, slow strip bottom row). `.art` is also the only moving part not clipped to a box.
3. **Sparse stage mid-flick.** Fast strip row 2, frames 3–4: title + icon only, paragraph slot momentarily empty. Not blank, but the stage thins noticeably on hard flicks.

## Single change most likely to raise the score
Retime the icon to leave *with* the title instead of after it: change `ART = [0.5, 0.14]` to `ART = [0.42, 0.2]` (centre aligned with the title slot, same 0.2 window as the copy) and wrap `.art` in an `overflow: hidden` container like the text slots. This kills defect 2 entirely and shortens the mixed-phase window in defect 1, for a two-line code change.
