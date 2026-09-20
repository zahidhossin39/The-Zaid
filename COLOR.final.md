# Colour — reconciled

Three independent reports: `COLOR.claude.md`, `COLOR.kimi.md`, `COLOR.gemini.md`.

## Where all three agreed, unprompted

- **Dark mode inverts the usual rule.** A saturated mid-tone hue that reads confident on white causes eye strain on near-black, through chromatic aberration and halation. The fix is a *light, moderately desaturated tint* — high lightness, medium saturation — not a lower contrast ratio.
- **"Blue means trust" is nearly useless on its own.** What actually predicts trust is that the colour looks *deliberate* and fits the category. Cyr, Head & Larios (2010) found the mechanism is visual appeal → perceived trustworthiness → intent to buy. A considered palette earns trust partly just by looking considered.
- **Boldness must come from confident use and an unusual hue, not from saturation.** Cranking saturation on a dark background buys eye strain, not confidence.
- **Teal and periwinkle placed top-3 on all three lists.** Those two were never in question.

## The arguments

**1. The third slot — Claude vs Kimi.** Kimi ranked Soft Sky `#7DD3FC` second. But all three reports independently described sky blue as *expected*, *generic*, *"every third SaaS landing page"*, *"invisible"*. A colour all three call forgettable fails the brief's "slightly bold" requirement outright. **Dropped.**

**2. The third slot — who won it.** Gemini ranked Soft Emerald second; Kimi listed green as a candidate with the highest contrast of its whole set. Green took the slot on votes, and because it is the only option with real hue separation from teal — three cool blue-ish options would give no genuine choice. Kimi's objection is recorded below and is real.

**3. Gemini's periwinkle was wrong.** It proposed `#818CF8` with hover `#6366F1`. That hover measures **4.43:1 — it fails WCAG AA.** Its accent was also the dimmest of any proposal at 6.63:1. Kimi's `#A5B4FC` / `#C7D2FE` is used instead: 9.93:1 and 13.27:1.

**4. Hover direction.** Gemini's hovers went *darker* (`#2DD4BF` → `#14B8A6`), which lowers contrast on a dark background and makes hover feel like it recedes. Kimi's go *lighter*, so hover reads as "lit up". **Kimi wins.** All three palettes now brighten on hover.

**5. Amber was a defensible thing to dislike.** Kimi surfaced Palmer & Schloss (2010): orange-yellow ranks at the bottom of mean colour preference, and in UI convention orange is the colour of *warnings* and of hard-sell CTAs. On a page asking strangers for money, that works against the goal.

## The three, verified

Every ratio below was computed independently, not taken from any report. Neutrals are shared so only the accent changes.

`bg #0A0A0B` · `surface #141416` · `border #26262B` · `text #F5F5F4` (18.14:1) · `muted #A1A1AA` (7.72:1)

| | Accent | On bg | Hover | Hover on bg |
|---|---|---|---|---|
| **A — Sea Glass** | `#5EEAD4` | 13.38:1 | `#99F6E4` | 15.70:1 |
| **B — Periwinkle** | `#A5B4FC` | 9.93:1 | `#C7D2FE` | 13.27:1 |
| **C — Signal Green** | `#86EFAC` | 14.09:1 | `#BBF7D0` | 16.33:1 |

All pass AA and AAA, and all work as a button fill with near-black text, since a light tint gives the same ratio in both directions.

## Honest weaknesses

- **A Sea Glass** — the most-used accent in developer tooling right now. Risks reading as a default rather than a decision.
- **B Periwinkle** — closest to the short-wavelength end, so the highest eye-strain risk of the three, though still mild at this lightness. Can read craft/creative rather than dependable.
- **C Signal Green** — green is the most semantically loaded hue in UI. It means success, confirmation, "on". A green CTA can be misread as a success toast, and it tips toward fintech dashboard fast.
