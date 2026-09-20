# Lab prototype spec — read before building

Ten hero prototypes for a dark one-page portfolio. Five built by Claude (01–05), five by Kimi (06–10).

## The diagnosis these must fix

The client rejected three previous palettes and could not say why. All three AIs independently agreed on the cause. **Every prototype must obey these four rules. A prototype that breaks any of them is a failed prototype regardless of how nice the colour is.**

1. **Neutrals must carry a chromatic spine.** The bg, surface, border and muted values lean toward the accent's temperature. Pure greys (`#0A0A0B`, `#141416`, `#26262B`) are banned. The accent should read as the concentrate of the page's own atmosphere, not a sticker placed on it.
2. **No accent colour on the headline.** The previous build coloured half the H1 in a pastel. Against a display serif that reads as a highlighter pen or a text selection, not a brand. Headlines are one colour. Accent lives on small marks and interactive elements only.
3. **Accent scarcity.** Aim for roughly 10% of the composition. The old build used the accent in seven roles at once. Pick two or three roles at most, e.g. one small mark + the button.
4. **Vivid, not pastel.** "Light tint" and "washed-out pastel" are not the same thing. The previous accents sat around L 85–90% and read juvenile against an editorial serif. Prefer accents in the L 60–75% band, or change the ground so a deeper accent works.

## Copy — identical in every prototype, so only design varies

- Eyebrow: `Zaid Hossain — builder for hire`
- H1: `You've had the idea long enough.`
- Sub: `I build the app, site, or automation you've been circling for months. Scoped tight, built in the open, handed over working.`
- Primary button: `Book a 20-minute call`
- Secondary link: `See the work ↓`

Second section (optional, max one extra) should be the three services: `Apps` / `Automations` / `Websites`, each with a one-line description. Keep it short.

## Technical contract

- One self-contained `.astro` page per prototype at `src/pages/lab/NN.astro` where NN is `01`–`10`.
- Fully standalone: its own `<style>` block, its own Google Fonts `<link>`, no imports from `src/components` or `src/styles`. This keeps the ten independent so nothing collides.
- The hero root element must carry `data-shot="hero"`. If you build a second section, it carries `data-shot="two"`. The screenshot harness finds blocks by that attribute.
- Include a small fixed label in the corner with the prototype number and palette name so screenshots are identifiable:
  `<div style="position:fixed;top:1rem;left:1rem;font:600 11px ui-monospace,monospace;letter-spacing:.1em;padding:.35rem .6rem;border-radius:4px;z-index:9;background:ACCENT;color:BG">01 · NAME</div>`
- Must work at 1440px wide. Responsive is a bonus, not required for a prototype.
- Accent must reach at least 4.5:1 against its own background. Check it, do not assume.

## Palette assignments

| # | Name | bg | surface | border | text | muted | accent | Type pairing |
|---|---|---|---|---|---|---|---|---|
| 01 | Deep Water | `#0A1111` | `#111B1B` | `#1F3030` | `#EFF7F6` | `#8FA8A5` | `#2DD4BF` | Instrument Serif + Inter |
| 02 | Blueprint | `#0B0E14` | `#131720` | `#232937` | `#F2F4F8` | `#98A1B3` | `#6E8BFF` | Inter only, tight |
| 03 | Midnight Ink | `#0A1020` | `#111A30` | `#223050` | `#EDF1F7` | `#8FA0BD` | `#38BDF8` | Fraunces + Inter |
| 04 | Forest Noir | `#090C0A` | `#111713` | `#1F2922` | `#E6ECE8` | `#879A8F` | `#4ECCA3` | Newsreader + Inter |
| 05 | Warm Stage | `#151210` | `#1E1A17` | `#2F2823` | `#F6F2ED` | `#A79C92` | `#4CC2FF` | Instrument Serif + Inter |
| 06 | Oxblood | `#141110` | `#1D1917` | `#2E2824` | `#F6F1EC` | `#ADA29A` | `#FF4D4D` | Newsreader + Inter |
| 07 | Aubergine Hour | `#130B16` | `#1C1221` | `#2E2136` | `#F3EEF6` | `#A796B0` | `#D946EF` | Space Grotesk + Inter |
| 08 | Acid | `#0B0B0B` | `#141412` | `#262622` | `#F5F5F2` | `#A1A198` | `#C8F526` | Space Grotesk, heavy |
| 09 | One Note | `#0B0B0C` | `#151517` | `#262629` | `#F5F5F4` | `#A1A1AA` | `#FFFFFF` | Inter only, very tight |
| 10 | Fog | `#16161A` | `#1E1E23` | `#2C2C33` | `#D8D8DC` | `#8E8E98` | `#9AA5FF` | Newsreader + Inter |

Measured accent-on-its-own-bg: 01 ≈ 10.6, 02 ≈ 6.4, 03 ≈ 9.2, 04 ≈ 9.9, 05 ≈ 9.9, 06 ≈ 6.1, 07 ≈ 5.7, 08 ≈ 15.6, 09 ≈ 19.8, 10 ≈ 8.7. All pass.

## Layout

Each of the ten must have a **visibly different layout**, not just a different colour. Vary: alignment, headline scale, whether there is a rule or a mark, grid vs single column, whether a panel/card appears, how the buttons sit. Two prototypes that differ only in hue are a failure of the brief.
