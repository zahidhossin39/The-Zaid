# Process transition score — kimi, round 4 (final)

Scored from `Process.astro` (SLOTS now `[0.40,0.46,0.52]`, slot feather 18px = `D_PX` 18) plus refreshed `midframes-desktop.png` and the three filmstrips, verified at native resolution and against `vis()` math.

| Axis | Score | Note |
|---|---|---|
| Continuity | 9/10 | Sequential pass-through intact: 0 overlap, 0 blank frames on every strip; the u≈0.40 all-out instant remains by design, and paragraph (70%) + tags (96%) carry the stage through it. |
| Motion quality & easing | 9/10 | Accelerate-away/decelerate-in still clean; no new artefacts introduced by the compression. |
| Timing | 9/10 | Handoff window shrank from 0.56 to 0.48 of a step (0.22→0.70), so the slow-scroll stretch I flagged in R3 is visibly shorter on the 8fps strip. |
| Legibility while moving | 9/10 | R3's 25% ghost paragraph at 52% is now ~70%; the new title is never beside an old paragraph above ~30% (44% cell: "Build" ~53% vs old body ~30%, confirmed at native res). Feather=travel: no chop at slot edges in any frame. |
| Landing & settle | 9.5/10 | Unchanged: direction-aware settle, sub-20% nudges left alone, clean parks, free ends. |
| Brand fit | 9/10 | Calm editorial roll-through; no blur, no same-slot coexistence. |

**Overall: 9.1/10** (was 8.8). Both R3 defects and Gemini's chop defect are genuinely fixed, and the fixes hold up under frame-level inspection.

## Defects still visible
1. **Mild mixed-phase at u≈0.44** (44% cell): incoming "Build" title + icon at ~53% beside the *old* tags at ~70% and a ~30% old-paragraph ghost. Faint and brief (~0.1 of a step), but title and body still disagree for a moment.
2. **Tags' empty instant at u≈0.52:** the tags slot hits exactly 0% (old fully out, new not yet in) — one frame on the slow strip where the tag row is bare. Inherent to the pass-through; the rest of the stage is ≥70%.

## Single best change within the rules
**None.** Defect 1 could be softened by pulling tags to ~0.50, but that lowers the stage's most-visible floor toward the 62% the owner already rejected at 0.45/0.50, and defect 2 is the unavoidable cost of the no-overlap rule. The current tuning sits on the constraint boundary; any further gain needs a rule change, not a code change.
