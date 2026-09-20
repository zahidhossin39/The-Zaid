# Prototype Scores

### 01 Deep Water
- **Colour score:** 9.0/10
- **Design score:** 8.8/10
- **Justification (Colour):** The teal-tinted neutrals (#0A1111) create a perfectly unified chromatic spine that makes the #2DD4BF accent feel entirely native. It’s highly soothing for long scrolls while remaining memorable and trustworthy.
- **Justification (Design):** The layout is clean and authoritative with excellent typographic hierarchy using Instrument Serif. Accent discipline is flawless, restricted purely to small UI marks and the primary button.
- **Hard-rule violation:** None.

### 02 Blueprint
- **Colour score:** 8.8/10
- **Design score:** 8.7/10
- **Justification (Colour):** The blue-black steel neutrals carry the cool temperature of the blue accent effectively. The palette conveys high technical competence and trustworthiness, though it leans slightly corporate.
- **Justification (Design):** The split-screen grid layout perfectly matches the technical, structural theme of the blueprint palette. Typography is tightly executed without relying on serifs, and accent usage is admirably restrained.
- **Hard-rule violation:** None.

### 03 Midnight Ink
- **Colour score:** 9.3/10
- **Design score:** 9.0/10
- **Justification (Colour):** The deep navy background acts as the colour itself, creating an atmospheric, immersive experience. The #38BDF8 accent serves as the perfect concentrate of this environment, striking a great balance between bold and soothing.
- **Justification (Design):** The centered composition with the subtle blur behind the typography feels highly premium. Accent usage is disciplined (dot, glow, button), and Fraunces provides an excellent editorial anchor.
- **Hard-rule violation:** None.

### 04 Forest Noir
- **Colour score:** 8.9/10
- **Design score:** 9.2/10
- **Justification (Colour):** A very organic, calming palette where the green-tinted near-black sets a rich, distinctive mood. The mint accent is vivid yet completely harmonious with the underlying spine.
- **Justification (Design):** The massive, lightweight Newsreader typography creates a stunning, highly distinct editorial layout. Using the accent solely for the underline and small text demonstrates superb discipline.
- **Hard-rule violation:** None.

### 05 Warm Stage
- **Colour score:** 6.5/10
- **Design score:** 8.6/10
- **Justification (Colour):** This palette breaks the chromatic spine requirement by placing a cold azure accent against warm brown-black neutrals. Rather than the accent acting as the environment's concentrate, it feels like an artificially applied sticker, generating unwanted tension.
- **Justification (Design):** The left vertical bar and flexible column structure create a strong, engaging composition. Typographic quality is high, but the design must carry the disjointed colour strategy.
- **Hard-rule violation:** None (Violates the colour spine directive, but not one of the four numbered Hard Rules).

### 06 Oxblood
- **Colour score:** 8.7/10
- **Design score:** 8.8/10
- **Justification (Colour):** The warm dark brown perfectly supports the menace of the red accent, maintaining a strong chromatic spine. It is highly memorable and bold, avoiding the clinical feel of standard dark modes.
- **Justification (Design):** The bottom-anchored, oversized Newsreader headline creates a radically different composition from the others. Accent roles are tightly controlled, and the layout feels confidently sparse.
- **Hard-rule violation:** None.

### 07 Aubergine Hour
- **Colour score:** 8.5/10
- **Design score:** 8.9/10
- **Justification (Colour):** The purple spine works cohesively with the accent, maintaining the required temperature alignment. It's distinctive and memorable, though slightly less universally trustworthy than the blues or greens.
- **Justification (Design):** The off-axis layout with the vertical eyebrow rail on the left and right-aligned headline is genuinely unique. The pulled-in surface panel creates great structural interest without feeling cluttered.
- **Hard-rule violation:** None.

### 08 Acid
- **Colour score:** 5.0/10
- **Design score:** 6.0/10
- **Justification (Colour):** The background (#0B0B0B) is mathematically pure grey, entirely lacking a chromatic spine to support the acid green accent. Because it fails to inject hue into the dominant neutral, it reads as a default wireframe with a neon sticker.
- **Justification (Design):** The brutalist aesthetic with heavy uppercase Space Grotesk and horizontal bands is structurally interesting. However, the score is capped due to the hard rule violation regarding pure greys.
- **Hard-rule violation:** Pure neutral greys with no hue (Rule 2).

### 09 One Note
- **Colour score:** 5.0/10
- **Design score:** 6.0/10
- **Justification (Colour):** The palette relies on pure greys which mathematically fails the chromatic spine rule, triggering the cap. While an argument can be made that grayscale *is* the spine for a white accent, it strictly violates the ban on pure greys.
- **Justification (Design):** The disciplined, dead-centered column with hairlines is an elegant, highly restrained layout. However, the score is artificially capped by the pure grey hard rule.
- **Hard-rule violation:** Pure neutral greys with no hue (Rule 2).

### 10 Fog
- **Colour score:** 8.2/10
- **Design score:** 6.5/10
- **Justification (Colour):** The blue-gray spine matches the soft blue accent well, providing a low-contrast, soothing environment. However, it feels slightly washed out and lacks the bold memorability of the better palettes.
- **Justification (Design):** Placing the entire hero content inside a floating bordered card completely unmoors the composition. It reads exactly like a massive modal dialog or a cookie consent banner rather than a grounded hero section.
- **Hard-rule violation:** None.

## Summary Table

| Prototype | Colour Score | Design Score |
| :--- | :--- | :--- |
| 01 Deep Water | 9.0 | 8.8 |
| 02 Blueprint | 8.8 | 8.7 |
| 03 Midnight Ink | 9.3 | 9.0 |
| 04 Forest Noir | 8.9 | 9.2 |
| 05 Warm Stage | 6.5 | 8.6 |
| 06 Oxblood | 8.7 | 8.8 |
| 07 Aubergine Hour | 8.5 | 8.9 |
| 08 Acid | 5.0 | 6.0 |
| 09 One Note | 5.0 | 6.0 |
| 10 Fog | 8.2 | 6.5 |

## WHERE I EXPECT DISAGREEMENT

**Prototype 05 Warm Stage**
I expect Claude to defend this palette, arguing that the tension between a warm brown background and a cold blue accent is a sophisticated design choice (referencing the "Raycast Tension" idea in our earlier research). My counter-argument is that the LAB-SPEC explicitly demands that "Neutrals must carry the accent's temperature" and the accent must be "the concentrate of the page's own atmosphere, not a sticker." Deliberate tension violates this core directive. 

**Prototype 08 Acid**
Kimi may argue that the surface `#141412` and border `#262622` contain a fractional amount of yellow, providing a chromatic spine. I pre-argue that the dominant background colour `#0B0B0B` (R11 G11 B11) is mathematically devoid of hue, rendering the canvas a pure neutral grey. A 1% yellow tint on a border does not save a pure grey background from Hard Rule 2. The rules are absolute: pure greys cap the design score.

**Prototype 09 One Note**
I expect strong disagreement here. Kimi will likely argue that Hard Rule 2 shouldn't apply, because when the accent is pure white, the absence of hue *is* the chromatic spine. I am scoring it strictly as a failure (5.0 / 6.0) because LAB-SPEC explicitly states "Pure greys are banned" and uses near-black grays like `#0A0A0B` (which is what 09 essentially uses with `#0B0B0C`) as its banned examples. If we want monochrome to be a valid strategy, we need to explicitly amend the rubric to exempt `#FFFFFF` accents from the pure grey ban, rather than selectively ignoring the rules when we like the design.

**Prototype 10 Fog**
Kimi might view the floating card as a clean, contained composition. I strongly disagree and have tanked the composition score. When the entire primary content of a page is wrapped in an inset border with massive outer margins, it fundamentally loses its structural authority as a hero section. It reads exactly like an inescapable modal dialog blocking the page. Note: this judgement is made purely from the source code structure (`<div class="card">` inside a flex-centered `.hero`), but the CSS properties make the visual result unambiguous.
