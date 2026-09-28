# Process transition score — kimi, round 3

Scored from `Process.astro` (current: SLOTS/ART all `[c, 0.18]`, cubic ease-in exits / ease-out entrances, icon on the title slot, direction-aware settle) plus the three refreshed filmstrips and `midframes-desktop.png` (cells inspected at full resolution).

| Axis | Score | Note |
|---|---|---|
| Continuity | 9/10 | Cubic easing turned the R2 dwell-at-zero into a pass-through: slot <10% opacity for ~1% of a step (verified in `vis()`: old gone by `prog³>0.9`, new >10% by `prog≈0.036`). Icon now shares the title slot — in the 44% cell title and code icon sit at the same ~55% grey. 0 overlap / 0 blank holds, within the owner's rules. |
| Motion quality & easing | 9/10 | Accelerate-away / decelerate-in gives the swap a clean snap instead of the R2 sag; 18px travel + icon scale settle still read as one calm gesture. |
| Timing | 8/10 | Fades at 0.18 are softer and read better on flicks. Unchanged: the 0.40→0.60 slot spread still stretches a full handoff on slow scrolls. |
| Legibility while moving | 8/10 | Sampled anchor minimum is now ~45–55% (36%/44% cells), passing, not parked. The 52% cell still shows the incoming paragraph as a ~25% ghost under a full-black title. |
| Landing & settle | 9.5/10 | Leftovers complete in the direction of travel; sub-20% nudges left alone, so it never pulls back against the user. All strips park cleanly; ends exit freely. |
| Brand fit | 9/10 | Calm editorial roll-through, ink-on-cream; no blur, no collisions. |

**Overall: 8.8/10** (was 8.5). Both R2 headline defects (title/icon dip, icon lag) are genuinely fixed.

## Defects still visible
1. **Mixed-phase contradiction at its worst right after the anchor lands.** 44% cell: full "Build" title + code icon beside the *old* "Before I build anything…" paragraph (~90%) and "Steps / Screens / Design" tags. Legal (different slots), but title and body disagree for ~0.2 of a step.
2. **Ghost paragraph at 52%.** Incoming body at ~25% under a landed title reads as late, faint mush; on the slow-8fps strip one mid-handoff frame still catches title + icon both near-invisible (the u≈c instant).

## Single best change within the rules
Compress the slot spread: paragraph 0.50→0.45, tags 0.60→0.50 (head/art stay 0.40). Different slots may overlap in time — the owner only banned same-place overlap — and this halves the window where the new title sits next to the old paragraph (defect 1) and shortens the slow-scroll handoff (Timing), at the cost of a slightly less pronounced top-to-bottom wave. One-line change to `SLOTS`.
