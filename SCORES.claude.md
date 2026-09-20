# Scores — Claude

Scored from **rendered screenshots at 1440px**, not from source. That is the opposite limitation to Kimi and Gemini, who are reading the code. On purely visual criteria (composition, where the eye lands, whether something *looks* like a hero) my read should carry more weight. On systematic criteria (palette maths, spine integrity) theirs should.

Rubric: `SCORING.md`.

## Individual scores

### 01 Deep Water — colour 8.8 · design 8.6
**Colour:** Real teal spine — `#0A1111` is visibly green-black, not grey, and the accent looks native rather than applied. Loses points only because teal is the most-used accent in developer tooling, so it scores low on "memorable".
**Design:** Clean, correct, well-proportioned, headline single-colour. But this is the closest of the ten to the layout we already rejected — left-aligned, serif, pill button. It is the *least distinctive* of the set, and distinctiveness is 25% of the design score.

### 02 Blueprint — colour 9.0 · design 9.0
**Colour:** Blue-black steel spine is convincing and `#6E8BFF` is vivid rather than pastel, which was the specific failure last time. Lowest contrast of my five at 6.41:1 but comfortably AA.
**Design:** The hard split with the faded grid and the spec list is genuinely different from everything else here, and the spec list does real sales work. Half a point off because the right column leaves a large dead area below the list.

### 03 Midnight Ink — colour 9.4 · design 8.8
**Colour:** The strongest spine in the set, because the background *is* the colour — deep navy, not black with navy sprinkled on. Extremely soothing over a long scroll and the most obviously "designed" canvas of the ten.
**Design:** Fraunces, the bordered pill and the overhead glow read premium. Docked because a centred hero is the most template-shaped composition available, and it is compositionally close to 09.

### 04 Forest Noir — colour 9.2 · design 9.5
**Colour:** Subtle green-black that you notice only by comparison, which is exactly right for a spine. Distinctive without being loud, and 9.89:1.
**Design:** The best of the ten. Largest type, editorial rules top and bottom, availability aligned right, and an *underlined* CTA instead of another pill — the only prototype that escapes the pill cliché. Reads like a design studio rather than a template.

### 05 Warm Stage — colour 9.3 · design 9.2
**Colour:** The warm/cool split is the most sophisticated idea in the set: brown-black room, cold azure instrument. Nothing else here has that tension and it is genuinely uncommon.
**Design:** The vertical accent bar doubling as a progress indicator, the italic second line and the meta row all earn their place. Slightly busier than 04.

### 06 Oxblood — colour 8.6 · design 9.2
**Colour:** Warm charcoal spine works and the red is properly vivid. Marked down because red carries an "error state" reading in UI that no amount of craft fully removes, and this is a page asking strangers for money.
**Design:** The most beautiful typography in the set — huge Newsreader, superb line breaks. Bottom row with the CTA pushed right is unusual and confident.

### 07 Aubergine Hour — colour 8.7 · design 8.4 ⚠️
**Colour:** Plum ground is a real spine and the magenta is bold. Lowest contrast in the set at 5.72:1 — passes, but it is the one most likely to vibrate on a cheap panel.
**Design:** **Below threshold.** The rotated vertical eyebrow is a nice idea, but it leaves a large dead void in the left half and the sub/CTA sit in a detached bordered box that reads as a separate component rather than part of the hero. Needs revision.

### 08 Acid — colour 8.0 ⚠️ · design 8.3 ⚠️
**Colour:** **Below threshold.** `#0B0B0B` / `#141412` / `#262622` carry only a whisper of warmth — this is very close to the pure-neutral grey that rule 1 exists to prevent, and it is the one prototype that arguably repeats the original mistake.
**Design:** **Below threshold.** The type is excellent and the flat chartreuse block is confident. But there is a real defect: the fixed corner label collides with the eyebrow, and the accent is doing very little beyond the button.

### 09 One Note — colour 8.3 ⚠️ · design 8.7
**Colour:** **Below threshold on a technicality worth arguing.** Rule 1 caps pure greys at 5.0, but this palette's entire strategy is the deliberate absence of hue — that is a different thing from forgetting to add one. I score it 8.3 rather than 5.0 because intent matters, and I expect to have to defend that.
**Design:** Disciplined and confident, the small square mark is a nice restraint. Docked for being compositionally similar to 03 — both centred.

### 10 Fog — colour 8.5 · design 8.0 ⚠️
**Colour:** Grey-violet spine is present and the low-contrast approach is coherent and deliberately quiet. Right at threshold.
**Design:** **Below threshold.** The hero sits inside a bordered, rounded card floating in the middle of the page. That does not read as a hero — it reads as a **modal dialog** or a cookie consent panel. It is the one composition here that actively fights its own purpose.

## Summary

| # | Name | Colour | Design | Flag |
|---|---|---|---|---|
| 01 | Deep Water | 8.8 | 8.6 | |
| 02 | Blueprint | 9.0 | 9.0 | |
| 03 | Midnight Ink | 9.4 | 8.8 | |
| 04 | Forest Noir | 9.2 | **9.5** | best |
| 05 | Warm Stage | 9.3 | 9.2 | |
| 06 | Oxblood | 8.6 | 9.2 | |
| 07 | Aubergine Hour | 8.7 | 8.4 | revise |
| 08 | Acid | 8.0 | 8.3 | revise |
| 09 | One Note | 8.3 | 8.7 | revise (colour) |
| 10 | Fog | 8.5 | 8.0 | revise |

Six of ten clear the 8.5 bar on both axes. Four need revision.

## Where I expect disagreement

- **08 Acid.** I expect Kimi to defend its own palette as having a warm spine. I measured the channels: `#141412` is 20/20/18 — a two-point green-blue delta. That is not a spine, that is rounding. I will hold 8.0 unless shown otherwise.
- **09 One Note.** I expect Gemini to apply rule 1 literally and score it 5.0. I think that is wrong: the rule exists to catch *accidental* neutrality, and a monochrome system is a deliberate strategy with its own tradition. The rubric needs an explicit exception rather than a fudge.
- **10 Fog.** I expect both to score the design higher than 8.0, because **the modal-dialog problem is only visible in a render**. Reading the source, a bordered container looks like a reasonable design choice. Seeing it at 1440px, it looks like a dialog box. This is exactly the case where my medium gives me the better view.
- **01 Deep Water.** I expect others to score it higher. I am marking it down for being too close to the design we already rejected, which is a judgement about *this project's history* rather than the artefact in isolation.
