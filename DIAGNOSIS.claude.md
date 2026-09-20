# Why all three were rejected — Claude

Written before reading DIAGNOSIS.kimi.md or RESEARCH.gemini.md.

The client rejected teal, periwinkle AND green. Three very different hues, one identical reaction. **When every option in a set fails, the variable you changed is not the variable that is broken.** The hue was never the problem. Everything the three shared is suspect.

What they shared: identical pure-grey neutrals, an identical usage pattern, and identical pastel treatment.

## Ranked causes

### 1. The accent is painted on half the headline

`You've had the idea **long enough.**` — the second half in a pastel tint, at 76px, in a high-contrast display serif.

This is the loudest thing on the page and it is the same in all three prototypes. Colouring half a large serif headline reads as **highlighting**, like a marker pen, not as design. Premium editorial and studio sites almost never tint half a headline; they set it in one colour and let colour live in small, deliberate places. A big two-tone headline is a hallmark of template landing pages.

This alone could account for the whole reaction, and it is invisible as a cause because it never varied.

### 2. The neutrals have zero hue

`#0A0A0B`, `#141416`, `#26262B`, `#F5F5F4`, `#A1A1AA` are pure greys. The accent is the only chromatic thing on the page, so it has nothing to harmonise with — it sits *on top of* the interface instead of belonging to it.

The dark interfaces people admire tint their neutrals, usually a few degrees toward the accent or toward a cool complement. That tint is why they read as "a designed surface" rather than "black with a colour on it".

### 3. Pastel accents fight the serif

Instrument Serif is sharp, high-contrast, editorial, slightly severe. Mint, periwinkle and pale green are soft, gentle, low-commitment. The typeface says *authority*; the colour says *friendly*. That register clash makes the page feel unresolved without the viewer being able to name it.

The pastels were chosen for a good reason — eye strain on dark backgrounds — but "light tint" was applied to *every* role rather than only to the roles that need to be readable as text.

### 4. The accent is doing far too many jobs

Eyebrow, half the headline, section labels, `NOW` labels, tags, play buttons, links, the counter, the filled CTA. That is well past the 10% of a 60-30-10 split. **An accent used everywhere stops being an accent and becomes the theme.** Scarcity is what makes an accent feel expensive.

### 5. Flat black can read as unfinished

Pure `#0A0A0B` with no gradient, texture, grain or temperature shift is very austere. Combined with the large empty regions in the hero, "minimal" can tip into "unfinished" — particularly for someone looking at their own site and expecting to feel impressed.

## The test that proves it

Take **the exact same teal**, change nothing about the hue, and:

1. Set the headline in one colour — remove the accent from type entirely
2. Tint the neutrals toward the hue instead of pure grey
3. Restrict the accent to the button, the eyebrow and interactive states only

If that reads dramatically better with an identical accent, the diagnosis is confirmed and the last round was solving the wrong problem. That test costs one prototype and is worth running before generating ten.

## What this implies for the ten

The ten prototypes must vary **the whole system** — neutral temperature, accent role and scarcity, type treatment, background strategy — not just the accent hex. Ten accents on the same flat-grey chassis with a two-tone headline would be rejected exactly like the first three, for exactly the same reason.
