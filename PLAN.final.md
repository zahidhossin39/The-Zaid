# Final plan — reconciled

Both plans agreed independently on: dark near-black + one amber, serif display + Inter body, left-aligned everything, stacked proof cards (not 2x2), YouTube facade instead of real iframes, CSS + IntersectionObserver instead of GSAP for v1, and "the proof section is fake" as the #1 risk. Those are settled.

Below are only the places the two plans disagreed, and who won.

## 1. The Problem section — Claude wins

Kimi wanted a two-column sticky label there. But the Proof section is *also* a two-column sticky layout, and they sit close together. Two sticky two-columns in a row reads as a template, and it spends the sticky trick before the section that actually needs it.

**Resolution:** Problem is a single narrow centered column, sparse, three escalating lines. Sticky is reserved for Proof, where it earns its place.

## 2. "What I build" — Claude wins

Kimi wanted three equal cards. But the page already has 4 project cards, 3 step markers and an embed card. A fourth set of boxes is card soup.

**Resolution:** three numbered rows with hairline dividers. Breaks the visual rhythm and reads more confident than boxes.

## 3. Live link over video on project cards — Kimi wins

This is the best idea in either plan. Since the videos are placeholders, the *working live link* is the only real proof available today. Kimi made the live link the primary amber action and the video secondary.

**Resolution:** adopted. It means the proof section is honest even before the real recordings exist.

## 4. lite-youtube-embed package — Claude wins

Kimi proposed adding the `lite-youtube-embed` package. A thumbnail + a click handler that swaps in the iframe is about fifteen lines. Adding a dependency for fifteen lines of code is how a project ends up with forty of them.

**Resolution:** write the facade inline, keeping the accessibility the package would have given (a real `<button>`, an `aria-label`).

## 5. Fonts — split decision

Claude proposed Instrument Serif, Kimi proposed Fraunces. Fraunces is a variable font with optical sizing — more capable, noticeably heavier. Instrument Serif ships one weight and reads sharper and more editorial.

**Resolution:** Instrument Serif for h1/h2 only. h3 drops to Inter 600, because a single-weight serif is weak at small sizes. Two families total, no mono family — mono eyebrows use `ui-monospace`, which is already on every machine.

## 6. Color — merged

Kimi's warm-white `#F4F2ED` and warm-grey muted beat Claude's neutral greys; warm text next to an amber accent is more coherent. But Kimi's accent `#F59E0B` is literally Tailwind's default amber-500 — the most recognizable accent on the internet.

**Resolution:** Kimi's neutrals, Claude's accent `#FFA524` (11:1 on the background, passes AAA).

## 7. Container width — Kimi wins

1024px over 1120px. Tighter measure suits a text-driven one-pager.

## Final tokens

| Token | Hex |
|---|---|
| bg | `#0A0A0B` |
| surface | `#141417` |
| border | `#26262B` |
| text | `#F4F2ED` |
| muted | `#9C9A94` |
| accent | `#FFA524` |
| accent-hover | `#FFB84D` |

Container `64rem`. Sections `py-32` desktop / `py-20` mobile. Text columns capped at `42rem` regardless of container.

## Build order

1. Tokens + layout + fonts
2. All 7 sections with real copy, 3 hero headlines in place
3. `projects.json` + proof grid + inline YouTube facade
4. Motion pass
5. Cal.com embed + meta
6. Browser review of every section, then fix
