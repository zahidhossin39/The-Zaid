# Process transition score — kimi, round 2

Scored from `Process.astro` (current) plus `film-fast-30fps.png`, `film-slow-8fps.png`, `film-phone-24fps.png`, `midframes-desktop.png`.

| Axis | Score | Note |
|---|---|---|
| Continuity | 8.5/10 | Feathered 14px masks fixed the slicing — parts now dissolve at slot edges. 0 overlap / 0 blank holds. But the handoff is *sequential* per slot (old fades [c-w,c], new fades [c,c+w]), so every slot passes through ~0 at its centre c. Visible as the near-empty title/icon moment below. |
| Motion quality & easing | 8.5/10 | Spring follow, 18px travel (down from 30) and the dissolve read as one calm gesture; icon scale 0.97→1 settle is a nice landing cue. |
| Timing | 8/10 | Fast flick resolves in ~12 frames @30fps; slow nudges track 1:1. Unchanged from R1: the 0.40→0.60 wave spread still makes a full handoff feel long on slow scrolls. |
| Legibility while moving | 7/10 | Title + icon both bottom out near 42–44% (see defects); ghosted paragraph at 50% is mush; tags alone can't carry reading mid-handoff. |
| Landing & settle | 9/10 | Direction-aware re-aim inside 0.2–0.8 only; all strips park cleanly on a phase. |
| Brand fit | 9/10 | Calm, editorial, ink-on-cream; the dissolve suits it better than the R1 hard clip did. |

**Overall: 8.5/10** (was 8.0). Icon-lag defect from R1 is genuinely fixed — pen and title now leave together in every strip.

## Defects visible in the frames
1. **Title-and-icon dip at ~42–44%.** With `SLOTS[0] = ART = [0.40, 0.14]`, at u≈0.42 the old title is gone and the new one is at ~5% opacity (midframes cells 2–3: ghost "Plan &", empty title slot, no icon). Not a measured blank — tags are at 100% — but the two *anchor* elements vanish together, so the stage visibly deflates mid-handoff.
2. **Ghost text at 50%.** Midframes cell 4 shows the old paragraph as a low-opacity double-image under the incoming one; reads as smudge, not motion.
3. **Sparse stage on hard flicks persists,** milder than R1: fast strip row 2 has frames of faint title + faint icon + tags only.
4. **Mixed-phase screen by design** (new "Build" title beside old "Steps / Screens / Design" tags, fast strip row 2). Per-slot purity holds; per-screen coherence still doesn't.

## Single change most likely to raise the score
Make each slot a constant-sum crossfade instead of sequential out-then-in: in `vis()`, change `inn` from `smooth(c - 1, c - 1 + w, u)` to `smooth(c - 1 - w, c - 1, u)`. Old then fades 1→0 over [c-w, c] while new fades 0→1 over the *same* window, so opacities sum to 1 at every u — the dip at c disappears, defects 1–3 all shrink, and it's a one-line change. Cost: two phases briefly co-occupy a slot at ≤50% opacity each (the R1 "overlap" metric would trip); with 18px opposite travel plus the feathered mask that reads as a roll-through, not a collision.
