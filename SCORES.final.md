# Scores — reconciled

Three independent score sets: `SCORES.claude.md` (from rendered screenshots), `SCORES.kimi.md` and `SCORES.gemini.md` (both from source code). Where scores differed by more than 1.0 the disagreement was argued to a single number rather than averaged.

## The four real disagreements

### 05 Warm Stage — Gemini 6.5, Kimi 8.7, Claude 9.3 → **resolved at 9.0**

Gemini scored the colour 6.5, arguing that a cold azure accent on warm brown-black neutrals "breaks the chromatic spine requirement" and reads as "an artificially applied sticker".

**Overruled, using Gemini's own research.** `RESEARCH.gemini.md` section 1 lists exactly two legitimate ways to build a spine:

> 1. **Tint toward the accent** … 2. **Tint toward a complementary hue:** Using a deep navy background with a warm accent, creating dynamic tension.

It then cites Raycast — cool background, warm red accent — as a premium benchmark. Gemini documented the warm/cool split as a recommended strategy and then penalised a prototype for using it. A spine can be complementary as well as analogous; what matters is that the neutrals have a deliberate temperature, and here they emphatically do.

Gemini's objection is withdrawn on its own evidence. **9.0.**

### 08 Acid — Claude 8.0, Kimi 4.9, Gemini 5.0 → **resolved at colour 5.0, design 6.5. FAILED**

I was the outlier and I was wrong. I gave the warm-tinted neutrals credit for having *some* hue. Kimi, scoring its own work, proposed the decisive test:

> a 2/255 channel difference is not hue in any sense a viewer can perceive; if the cap can be evaded by adding imperceptible chroma, the rule protects nothing.

`#141412` against `#141414` is invisible at any viewing distance. That is rounding, not a spine. Conceded — and worth noting Kimi scored its own prototype the lowest of anyone, which is the behaviour that makes this exercise worth running.

### 09 One Note — Claude 8.3, Kimi 7.2, Gemini 5.0 → **resolved at colour 7.0, design 8.5. FAILED on colour**

Gemini applied rule 1 literally and capped it at 5.0. Kimi's counter-argument wins:

> Rule 1 exists to prevent one specific disease: a hue-less ground makes the accent carry 100% of the page's chromatic identity… That disease is *logically impossible* in One Note, because the accent (`#FFFFFF`) is itself hue-less.

The cap exists to catch a hue-less *ground* under a chromatic accent. It cannot bite when the accent is itself neutral — there is no discontinuity to punish. **Cap waived; the rubric had a genuine bug.**

But Kimi also conceded the real cost: monochrome forfeits "bold / memorable" almost entirely, and that is 15% of the colour score. A pure monochrome cannot mathematically clear 8.5 on this rubric. It goes to revision not because it is bad, but because it cannot win under the rules we agreed.

### 10 Fog — Claude 8.0, Kimi 7.2, Gemini 6.5 (design) → **resolved at colour 8.2, design 6.8. FAILED**

Unanimous, and reached independently. I saw it in the render; Gemini derived it from the CSS alone:

> It reads exactly like a massive modal dialog or a cookie consent banner rather than a grounded hero section.

Wrapping the whole hero in a bordered floating card strips its structural authority. The quiet low-contrast identity is worth keeping; the container is not.

## Converged scores

| # | Name | Colour | Design | Verdict |
|---|---|---|---|---|
| 01 | Deep Water | 8.8 | 8.6 | pass |
| 02 | Blueprint | 8.8 | 8.8 | pass |
| 03 | Midnight Ink | 9.2 | 8.8 | pass |
| 04 | Forest Noir | **9.0** | **9.1** | pass — best in set |
| 05 | Warm Stage | 9.0 | 8.8 | pass |
| 06 | Oxblood | 8.5 | 8.8 | pass |
| 07 | Aubergine Hour | 8.6 | 8.5 | borderline — revising |
| 08 | Acid | 5.0 | 6.5 | **fail — revising** |
| 09 | One Note | 7.0 | 8.5 | **fail on colour — revising** |
| 10 | Fog | 8.2 | 6.8 | **fail on design — revising** |

Six clear the bar outright. Four went back to Kimi with specific, named fixes.

## What the medium split revealed

Scoring from source and scoring from renders catch different failures, and the disagreement was informative rather than noise:

- **Only the render caught** the corner-label collision in 08 and the dead void in 07.
- **Only the source caught** the fact that 08's "warm" neutrals are a 2-unit delta. I looked at a screenshot and saw warmth that a viewer cannot actually perceive; the hex arithmetic settled it.
- **Both caught** the Fog modal problem independently, which is the strongest signal in the whole exercise.

Neither medium alone would have produced this list.
