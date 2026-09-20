# Colour — Claude (independent)

Written before reading COLOR.kimi.md or COLOR.gemini.md.

## The governing constraint: dark mode changes the rules

On a light background, a saturated mid-dark hue reads as confident. On near-black it does the opposite, for physical reasons rather than taste ones:

- **Chromatic aberration.** The eye's lens refracts short wavelengths more than long ones. On a dark field, a saturated blue or violet focuses on a slightly different plane than the black around it, so the edge never fully resolves. The text looks soft and the reader unconsciously strains to fix it. This is why saturated blue body text on black is exhausting and saturated blue on white is not.
- **Halation.** A bright saturated hue on near-black blooms outward, especially for astigmatic readers, which is a large share of people.
- **Accommodation.** Wide luminance gaps make the iris hunt. The fix is not less contrast but less *saturation* at high lightness.

The practical rule for dark UI accents: **high lightness (70–85%), medium saturation (55–80%)**. That is why every well-built dark interface uses tints rather than pure hues — the accent is a pastel that happens to be bright. Pure `#0000FF` on black is unreadable; `#A5B4FC` on black is comfortable at the same contrast ratio.

This single rule eliminates most "bold" colours the brief might otherwise suggest.

## What the psychology actually supports

"Blue means trust" is the most over-quoted and least useful finding in the field. What holds up better:

- **Hue carries far less weight than appropriateness.** Labrecque and Milne's work on brand colour found that whether a colour *fits the category* predicts brand attitude much more strongly than the hue's supposed intrinsic meaning. A colour that looks deliberate signals competence; a colour that looks defaulted signals nothing.
- **Saturation and lightness do the emotional work.** Across studies, high saturation reads as excitement/urgency and lower saturation with high lightness reads as calm and reliable. So "soothing" and "bold" are not opposites here — you get boldness from *contrast and confident use of space*, not from cranking saturation.
- **Trust in commerce is mostly non-colour.** Clarity, specificity and evidence move trust far more than palette. The realistic goal for colour is to *avoid* undermining trust, not to manufacture it.
- **Blue-green (teal/cyan) is the calmest region** in most arousal studies, sitting between blue's reliability and green's restfulness. It is also where the eye focuses most comfortably — peak luminous efficiency sits around 555nm in daylight vision, in the green-yellow band, so greens and teals resolve more crisply on dark backgrounds than blues or violets.

## Five candidates

All ratios measured against `#0A0A0B`, and all of them also work as a button fill with near-black text, because a light tint has the same ratio in both directions.

| Hex | Family | On bg | Verdict |
|---|---|---|---|
| `#5EEAD4` | Teal / aqua | 13.38:1 | Calmest option. Blue's reliability plus green's rest, and it sits near the eye's sharpest focus band so it stays crisp across a long scroll. **Fails if:** it is the single most-used accent in developer tooling right now — it may read as "I used the default". |
| `#A5B4FC` | Periwinkle / soft indigo | 9.93:1 | Blue-family trust without corporate navy. Soft, premium, genuinely uncommon on dev portfolios. **Fails if:** violet-leaning blues are the house style of nearly every AI startup, and at this lightness it can read gentle rather than confident. |
| `#7DD3FC` | Sky blue | 11.87:1 | The safest trust signal, and very easy on the eye. **Fails if:** it is invisible. This is the most common accent on the internet; it will not be remembered. |
| `#86EFAC` | Mint / sage green | 14.09:1 | Restful, "go", growth. Highest comfort of the set. **Fails if:** green on black is the terminal/hacker cliché, and green also codes as money/finance, which is the wrong association for someone selling trust. |
| `#C4B5FD` | Soft violet | 10.72:1 | The most distinctive and the most "bold" of the set. Creative and premium. **Fails if:** violet is the single most claimed colour in AI branding since 2023, and it is the weakest on the trust axis — it reads creative rather than dependable. |

## My top 3

Scored against the brief's three axes — soothing, trustworthy, slightly bold — plus one the brief implies but does not say: *not forgettable*.

### 1. Periwinkle `#A5B4FC`

```
bg #0A0A0B · surface #141417 · border #26262B
text #EDEDF2 · muted #9A9AA5
accent #A5B4FC · accent-hover #C7D2FE
```
accent on bg **9.93:1**, near-black text on accent **9.93:1**.

Best balance of the three axes. It is in the blue family, so it inherits the reliability association, but the lightness and the violet lean take it away from generic corporate blue. Cool neutrals underneath keep it coherent.

### 2. Teal `#5EEAD4`

```
bg #0A0A0B · surface #121716 · border #242B29
text #ECF2F0 · muted #94A19D
accent #5EEAD4 · accent-hover #99F6E4
```
accent on bg **13.38:1**, near-black text on accent **13.38:1**.

The most comfortable to read for the longest time, and the strongest pure "calm + competent" signal. Docked to second only because it is the most-used accent in this exact niche.

### 3. Soft violet `#C4B5FD`

```
bg #0A0A0B · surface #16141A · border #2A2632
text #EFEDF4 · muted #9D98A8
accent #C4B5FD · accent-hover #DDD6FE
```
accent on bg **10.72:1**, near-black text on accent **10.72:1**.

The boldest and most memorable. Included because the brief explicitly asked for some boldness, and because a portfolio that is forgotten has failed regardless of how trustworthy it looked.

## What I would ship

**Periwinkle.** It is the only candidate that scores well on all four axes at once: it is soothing because it is a high-lightness tint rather than a saturated hue, it is trustworthy because it sits in the blue family, and it is bold because almost nobody in this niche uses it. Teal is more restful but more generic; violet is more memorable but weaker on trust.
