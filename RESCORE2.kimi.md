# Re-score 2 — Kimi

Scope: prototypes 08 (Acid) and 10 (Fog) only, after the prescribed fixes were applied. Scored against SCORING.md from current source (`src/pages/lab/08.astro`, `src/pages/lab/10.astro`). Contrast claims independently recomputed (WCAG relative luminance).

## 08 · Acid

Accent verified: `#B4DE2B` on `#0C0D08` ≈ 12.5:1 (claimed 12.65:1 — confirmed). Neutrals unchanged: bg `#0C0D08`, surface `#15170F`, border `#262918`, muted `#A6A993`, text `#F3F5E8` — the olive spine stands.

**Colour: 8.7 — PASS.**
The shift from `#C8F526` to `#B4DE2B` kills the vibration against the near-black without draining the acid register — it still reads loud, just no longer radioactive, and at ~12.5:1 it clears the compliance bar with room to spare. The olive spine in the neutrals was never the problem and is untouched, so the accent still looks grown from the palette rather than applied to it; boldness and trustworthiness both hold.

**Design: 8.6 — PASS.**
Structurally identical to the already-passing layout: accent remains in three disciplined roles (eyebrow square, blocky button, tag chip), headline stays in `--text`, and the brutalist band/grid composition is still distinctly its own among the ten. The slightly darker accent arguably helps the button sit better in the foot band, but nothing else moved — this score carries over on its original merits.

## 10 · Fog

Neutrals verified deepened across the full scale: bg `#15151E`, surface `#1D1D2A`, border `#2B2B3E`, muted `#8C8CA4`, text `#D7D7E2` — a consistent periwinkle lean, not a token or two. Accent `#9AA5FF` on bg ≈ 7.9:1; muted on bg ≈ 5.6:1 — legibility unharmed by the deepening. Structural gesture verified in source: `.bank` (blurred `#9AA5FF` ellipse, 7% opacity, bleeding off the bottom edge) plus `.rule` (hairline fading left-to-right above it).

**Colour: 8.7 — PASS.**
The spine is now real: every neutral carries the blue-violet lean, so `#9AA5FF` reads as the palette's own light rather than a foreign accent — this is the difference between a colour scheme on paper and one you can see. It stays exceptionally soothing over a long scroll, and the deepened ground gives the quiet register more depth without costing legibility; the one residual drag is that "trustworthy" still leans delicate rather than authoritative, which is inherent to the concept and acceptable.

**Design: 8.6 — PASS.**
The fog bank plus fading hairline is the missing structural gesture — a bottom-anchored diffuse ground treatment no other prototype has, on-concept for the name, and it gives the eye somewhere to land after the small-scale Newsreader headline. Honest caveat: at 7% opacity and 130px blur the bank is near-subliminal, and it only works because the neutrals now carry the hue — had the ground stayed flat grey, this gesture alone would not have been enough; as applied, the two fixes compound and the page is unmistakably its own thing.

## Verdicts

| Prototype | Colour | Design | Result |
|---|---|---|---|
| 08 · Acid | 8.7 | 8.6 | **PASS** |
| 10 · Fog | 8.7 | 8.6 | **PASS** |

Both prescribed fixes worked as intended; nothing remains outstanding on either prototype.
