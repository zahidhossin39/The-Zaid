# COLOR.kimi.md — Replacement Accent Research & Recommendation

Site: one-page dark portfolio, solo dev selling apps / automations / websites to founders and SMB owners.
Background: `#0A0A0B` (near-black). Rejected: amber `#FFA524` and anything orange / yellow-warm.

All contrast ratios below are computed with the WCAG 2.x relative-luminance formula against `#0A0A0B`. Because contrast is symmetric, "accent vs background" and "dark text on accent fill" are the same number — noted once per candidate, not twice.

---

## 1. RESEARCH

### What the literature actually says (specific, not "blue means trust")

**Palmer & Schloss (2010), *PNAS* — Ecological Valence Theory.** The most cited modern theory of color preference. People like a hue to the degree they associate it with positive objects: blue is preferred almost universally not because of an innate "trust circuit" but because of sky and clean water associations; yellow-orange is the least preferred hue family on average across US samples because its object associations are mixed-to-negative (biological waste, caution, cheapness). Directly relevant: **amber/orange sits at the bottom of mean color-preference rankings**, which is a legitimate research-grounded reason the client's instinct to reject it is not just taste.

**Labrecque & Milne (2012), *Journal of the Academy of Marketing Science* — "Exciting red and competent blue."** Content analysis plus experiments on brand logos: blue is systematically associated with *competence*; red/orange with *excitement/ruggedness*. Crucially, the effect is mediated by **perceived sincerity and competence, not arousal** — for a service purchase (hiring a stranger to build software), competence signaling outperforms excitement signaling. The purchase here is a considered, high-trust B2B-ish decision, not an impulse buy.

**Cyr, Head & Larios (2010), *MIS Quarterly*.** Cross-cultural study of website color and trust: color appeal significantly predicts **trust and satisfaction with a website**, and the effect holds across cultures with different preferred palettes. The actionable finding is not a specific hue but the mechanism: *visual appeal → perceived trustworthiness → intention to buy*. A soothing, well-executed palette earns trust partly just by looking considered and professional.

**Elliott & Maier (2014), *Annual Review of Psychology* — Color-in-Context Theory.** Color effects are context-dependent, not universal: the same red reads as "failure/avoidance" in achievement contexts but "attraction" in mating contexts. Practical consequence: there is no magic trust hex. What matters is (a) avoiding hues with negative *task-relevant* associations (orange ≈ warning/caution in UI conventions — literally the color of warning banners), and (b) execution quality. Orange is the conventional color of **warnings, alerts, and cheap calls-to-action** (its overuse in growth-hack CRO gave it a "salesy" odor). On a page asking strangers for money, an accent that conventionally means "caution" and "hard sell" is working against you.

### Light mode vs dark mode — perception genuinely differs

- **Halation.** Light text/elements on a dark background bloom: the bright pixels scatter in the eye's optics and appear larger and softer than they are. Research on display polarity (Legge et al., 1980s onward; more recently summarized in vision-ergonomics literature) shows light-on-dark produces perceived blur especially for readers with astigmatism (roughly a third to half of adults). Practical consequence: **on dark backgrounds, large filled shapes and bold strokes in the accent read fine, but thin accent text needs to be a light tint, not a saturated midtone**, or it smears.
- **Contrast feels harsher at high polarity difference.** The same 11:1 ratio that's comfortable black-on-white can feel glaring white-on-black at large sizes. The fix used by every competent dark theme (Material Design 3 dark guidance, Apple HIG): **desaturate and lift** — use light, slightly muted tints of the hue rather than the pure saturated color.
- **Chromatic aberration / chromostereopsis.** The eye focuses short wavelengths (blue/violet) in front of long ones (red) — longitudinal chromatic aberration. Highly saturated pure hues at the spectrum extremes on a dark field force the eye into conflicting focal planes and can produce chromostereopsis (the color appears to "float" or vibrate against the background). This is the mechanism behind "saturated pure blue on black makes my eyes hurt." **Pure electric blue (`#0000FF`-family, or saturated cyan at 100%) is the classic eye-strain offender on dark UIs.** The remedy is not avoiding blue — it's reducing saturation and raising lightness, which collapses the focal conflict.
- **Short-wavelength light.** Blue-dominant emission is disproportionately implicated in glare discomfort and (behaviorally) in evening screen fatigue. A pastelized blue — high luminance, moderate saturation — emits far less deep-blue energy per pixel than a saturated royal blue while still reading as "blue." This is why `#7DD3FC` is soothing where `#2563EB` on black is abrasive.

**Synthesis for this site:** the research-backed play is a **cool hue (blue / teal / blue-green family — competence + calm associations), rendered as a light, moderately desaturated tint** so it clears WCAG AA trivially, avoids chromatic aberration, and survives long scrolls. Boldness comes from *confident usage and a slightly unusual hue choice*, not from saturation.

---

## 2. FIVE CANDIDATE ACCENTS

### Candidate A — Soft Sky `#7DD3FC`
- **Hue family:** cyan-blue (~199°)
- **Contrast vs `#0A0A0B`:** **11.87:1** (passes AA and AAA for all text; same value for dark text on the fill)
- **Rationale:** sky = openness and calm (ecological valence); blue family = competence (Labrecque & Milne); the light tint avoids chromatic aberration entirely.
- **Why it works here:** Instantly soothing, universally liked, excellent on long scrolls, and dark text on it is effortlessly legible for buttons. It reads "competent engineer who won't waste your money."
- **Why it might fail:** It is the *expected* choice. Every third SaaS landing page uses a sky accent on dark. On a page whose job is to differentiate a solo builder, "default SaaS blue" can read as safe-to-the-point-of-generic.

### Candidate B — Soft Teal / Sea Glass `#5EEAD4`
- **Hue family:** teal, blue-green (~172°)
- **Contrast vs `#0A0A0B`:** **13.38:1**
- **Rationale:** blue-green inherits blue's competence association and adds green's calm/growth associations, while being far less common in B2B palettes — differentiation without weirdness.
- **Why it works here:** Sits exactly at the sweet spot: trustworthy (blue-dominant), soothing (green undertone, low blue-light energy), and quietly bold because almost no competitor uses it. Glows beautifully against near-black without any vibration — the hue is mid-spectrum, so no chromatic aberration.
- **Why it might fail:** In fintech contexts teal is slightly overexposed (banking apps love it), and under warm ambient lighting (user's monitor with night-shift on) it can drift toward "mint candy" and feel a touch friendly rather than authoritative.

### Candidate C — Periwinkle `#A5B4FC`
- **Hue family:** indigo/lavender (~232°)
- **Contrast vs `#0A0A0B`:** **9.93:1**
- **Rationale:** blue-violet blends competence with creativity; lavender tints are strongly associated with calm in color-preference studies; the most "designed"-feeling of the five.
- **Why it works here:** Reads as modern, craft-oriented, and a little premium — the "indie hacker with taste" accent. Lowest contrast of the five but still comfortably AAA. Distinctive: founders will not have seen it on ten other dev portfolios this week.
- **Why it might fail:** Violet is the hue closest to the short-wavelength end — at higher saturation it would be the worst chromatic-aberration offender; even this tint sits nearer the "floaty" zone than A or B. It can also read as slightly *soft/creative-agency* rather than *I ship reliable software*, which is a subtle trust risk when asking for money.

### Candidate D — Soft Green `#86EFAC`
- **Hue family:** green (~140°)
- **Contrast vs `#0A0A0B`:** **14.09:1** (highest of the five)
- **Rationale:** green = growth, go, stability; biophilic calm; "money" adjacency in a Western business context is not a bug when selling services to business owners.
- **Why it works here:** Maximum legibility, extremely low eye strain (mid-spectrum, minimal blue energy), and a confident "systems running green / everything works" connotation that suits someone selling automations.
- **Why it might fail:** Green is the most semantically *loaded* hue in UI: it means success states, confirmation, and "on." Using it as a brand accent fights that convention — a green CTA can be mistaken for a success toast, and green highlights can be misread as validation states. It also tips "fintech dashboard" fast.

### Candidate E — Sage `#A3B18A`
- **Hue family:** muted yellow-green (~86°, heavily desaturated)
- **Contrast vs `#0A0A0B`:** **8.68:1**
- **Rationale:** desaturated greens score high on calm and naturalness; the most soothing and least screen-fatiguing option in the set.
- **Why it works here:** Genuinely distinctive, organic, warm-without-being-warm — a "craftsman" signal that differentiates hard from SaaS-template competitors.
- **Why it might fail:** **It's timid.** Muted sage on near-black reads as tasteful but quiet — exactly the "not bold" failure the brief warns against. Its desaturation also flirts with the rejected yellow-warm family (some viewers will read it as khaki), and at small sizes it can look like a gray with a green problem rather than a deliberate accent.

---

## 3. TOP 3, RANKED — FULL PALETTES

All palettes share the dark neutrals; only the accent ramp changes. Neutrals: bg `#0A0A0B`, surface `#141416`, border `#26262B`, text `#F5F5F4` (18.14:1 on bg), muted `#A1A1AA` (7.72:1 on bg — AA-passing for secondary text).

### #1 — Teal Sea Glass (ship this)

| Role | Hex | Notes |
|---|---|---|
| bg | `#0A0A0B` | unchanged |
| surface | `#141416` | cards, raised sections |
| border | `#26262B` | hairlines, dividers |
| text | `#F5F5F4` | 18.14:1 on bg |
| muted | `#A1A1AA` | 7.72:1 on bg |
| accent | `#5EEAD4` | **13.38:1** on bg / dark text on fill |
| accent-hover | `#99F6E4` | 15.70:1 on bg — brighter, not deeper, so hover reads as "lit up" on a dark field |

Accent-on-bg: **13.38:1**. Dark-text-on-accent: **13.38:1** (symmetric). Button: `bg #5EEAD4`, `text #0A0A0B` — AAA by a factor of three.

### #2 — Soft Sky

| Role | Hex | Notes |
|---|---|---|
| bg | `#0A0A0B` | unchanged |
| surface | `#141416` | |
| border | `#26262B` | |
| text | `#F5F5F4` | 18.14:1 |
| muted | `#A1A1AA` | 7.72:1 |
| accent | `#7DD3FC` | **11.87:1** |
| accent-hover | `#BAE6FD` | 14.91:1 on bg |

Accent-on-bg: **11.87:1**. Dark-text-on-accent: **11.87:1**. The safest option; the least differentiated.

### #3 — Periwinkle

| Role | Hex | Notes |
|---|---|---|
| bg | `#0A0A0B` | unchanged |
| surface | `#141416` | |
| border | `#26262B` | |
| text | `#F5F5F4` | 18.14:1 |
| muted | `#A1A1AA` | 7.72:1 |
| accent | `#A5B4FC` | **9.93:1** |
| accent-hover | `#C7D2FE` | 13.27:1 on bg |

Accent-on-bg: **9.93:1**. Dark-text-on-accent: **9.93:1**. Most distinctive, slightly highest eye-strain risk of the three (short-wavelength hue), best for a design-forward repositioning.

---

## 4. WHAT I WOULD SHIP

Ship **`#5EEAD4` (teal sea glass)** with hover `#99F6E4`. It is the only candidate that satisfies all four constraints simultaneously with zero compromise: mid-spectrum hue with 13.38:1 contrast makes it the most soothing per lumen, the blue-green family carries the competence-and-calm associations that the trust literature (Palmer & Schloss; Labrecque & Milne) actually supports, and it is rare enough in this exact market — dev-for-hire portfolios — to read as a confident choice rather than a template default. Sky blue is the correct fallback if the client finds teal too unusual, but teal is the one that makes the page feel *chosen*, and a page that looks chosen is what makes a stranger hand over money.
