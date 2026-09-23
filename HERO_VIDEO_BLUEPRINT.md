# Hero video — production blueprint

> **Superseded (2026-09-23):** clay was ruled out as reading like a cartoon to busy owners. See `HERO_STYLE_RESEARCH.md` for the current style decision. The story rules here (one message, readable final frame, no invented results) still apply.

Output of a three-AI adversarial Creative & Conversion Board (Claude = Brand & Trust, Gemini = Production Realist, Kimi = Adversarial Creative Director). Supersedes the earlier "Mess → 3 helpers → calm" concept, which all three panelists failed independently.

---

## 0. Verdict on the original concept

| Panelist | Baseline score | Fatal objection |
|---|---|---|
| Gemini (Production) | **4.3** | The fork + swallow is a *topological morph*; 2026 I2V renders it as boiling blob. Blank dot-eyed face gets a hallucinated nose/jawline the instant it moves. |
| Claude (Trust) | **5.4** | Pure metaphor, zero artifact. Amber thread reads as *software doing it*, positioning him against Zapier on price. Three-way fork is Zaid's org chart, not the owner's problem. |
| Kimi (Creative) | **5.5** | Most recycled opening in the genre. "Magic thread fixes it" is the signature promise of untrustworthy vendors. Renders a scared owner's money anxiety as *adorable*. |

**Consensus ≈ 5.1 / 10. Fails the 8.5 floor.**

Three independent kills, three different reasons, same two elements: **the amber thread** and **the three-way fork**. Both are dead.

---

## 1. The winning concept — "The Pile"

Second board (Alpha = Gemini strategy, Beta = Claude execution, Gamma = Kimi creative) re-autopsied "2:47" and failed it: Beta 8.2, Alpha 6.7, Gamma 4.0, consensus ~6.3. Gamma attacked its own prior concept hardest. The replacement keeps the set, the character and the night, and changes what the camera is pointed at.

**One sentence:** A clay figure sits behind a leaning pile of unanswered paper at his kitchen table. One hard cut and the pile is simply gone. He never touched it.

**The problem shown:** the backlog, made physical and countable. Not one interruption, the sediment of a hundred that never got answered.

**The outcome shown:** the absence of the backlog, plus a one line receipt of what got handled while he sat there.

**What it refuses to do:** never names a service, never shows a screen doing anything, never shows a notification UI, never shows the builder, never opens on a lone figure under a lamp, and never resolves into serenity. The button is the resolution. Do not spend it twice.

### Why a pile and not a glowing phone

Gamma's catch, and it is the binding one: at roughly 300px wide with sound off, **stillness survives and micro-gesture does not**. The old 2 to 5s beat was a shoulder tense and an arrested reach performed by a featureless puppet in a corner slot. That is not subtlety, it is invisibility. A pile reads as a pile at any size. Its absence reads instantly too.

Alpha's catch, the **attribution gap**: a bare "Booking confirmed" notification makes a non-technical viewer assume the man subscribed to an app or hired an assistant. Zaid vanishes from his own advert. The receipt is typeset numbers set into the frame with no UI styling for exactly this reason, and attribution moves to the caption under the video.

### Final scores (post-synthesis)

| Criterion | Score |
|---|---|
| Structural rigor & clarity | 9.6 |
| Execution feasibility | 9.6 |
| Engagement & narrative power | 9.5 |
| Slop immunity | 9.5 |
| **Overall** | **9.55** |

---

## 2. Storyboard, about 5s of action, then holds

Revised after a third review against the real hero slot: **316 x 176 px, on a white hero section**, beside a very large uppercase headline.

| Time | Visual | Notes |
|---|---|---|
| **0 to 3s** *The pile* | Table level. A leaning stack of envelopes, slips and torn sticky notes, **the palest, brightest mass in the frame**. The man sits slumped behind it and **partly hidden by it**. At about 1s, **one more slip drops onto the top** as a flat 2D cutout. No hand. Slow 3% push. | All motion is a deterministic 2D transform. |
| **3s** | **HARD CUT.** | The only cut in the film. |
| **3s onward** *The absence* | The same image with the pile removed (inpainted, see section 3). Bare wood. The man is now fully visible, still sitting there. The push continues. | The pile was hiding him. Its removal reveals him. |
| **4s** *The receipt* | Two lines are set onto the dark wall area of the same frame. Bone `#D9D2C5`, Inter, numerals: **"12 replies sent."** / **"3 jobs booked."** | No card and no cut to white. |
| **Hold** | The frame holds with the text on it. | The final frame explains itself to anyone who looks over late. |

### Why these specific choices

- **No bone-white card.** The hero is white. A bright card would make the video blend into the page for two seconds, so it would appear to vanish.
- **No "All caught up."** That is the empty-inbox line from Instagram, Gmail and Slack. It is app UI in text form, the same problem as the notification screenshot. Numbers only, written as digits so they read at 176px tall.
- **The receipt is load bearing.** A pile vanishing on a hard cut is otherwise "and then a wizard fixes it", the exact trope killed in the first board. The itemised numbers turn magic into work done. They must stay on screen and stay legible.
- **What stays unresolved.** The relief is shown: the pile is gone. What the film withholds is *how*. That curiosity is the pull toward the button, and the caption points at it.

### Page wiring (when the video exists)

- Replace the caption **"Showreel"** under the video with: **I build the thing that clears the pile.** It names the pile, so a visitor who missed the first beat still learns it existed, and it attributes the work to Zaid.
- Remove the **`loop`** attribute from the `<video>` in `src/components/Hero.astro`. The film plays once and holds.
- **Do not start playback on page load.** Visitors read the headline first and look right after 2 to 4 seconds. Start about 1s after the hero reveal finishes. On mobile (under 900px, where the video stacks below the text) start when it is at least half in view. Replay from the start on hover.

### Delivery spec

- Export at **632 x 352** (2x the slot, for retina screens). MP4 (h.264) plus WebM, and a final-frame poster.
- At this size fingerprints and dust motes are invisible and heavy grain compresses into blocky noise. Spend effort on **silhouette and contrast**, not texture. Add light grain after scaling down.

---

## 2b. Character canon (applies to every prompt, every plate, every future asset)

The clay figure **always wears a soft clay baseball cap**, brim forward, shading the blank face. This is locked.

Beyond looking better, it is load-bearing technically: the brim occludes the top of the blank head, so diffusion has less featureless skull to hallucinate a nose ridge or jawline into. It reinforces Gemini's phantom-face mitigation rather than fighting it.

### Character palette (locked)

| Element | Colour | Why |
|---|---|---|
| Cap + apron | **muted sage-olive** `#7E8578` | Sits roughly opposite amber on the wheel, so it makes the phone glow read *hotter* without becoming a competing accent. Low chroma — it physically cannot overpower. Under warm tungsten it drifts grey-warm on its own. |
| Shirt | **bone / oatmeal** `#D9D2C5` | Separates the body from both the grey clay skin and the dark background. |
| Skin | **raw grey clay** | Unchanged. Never tinted. |
| Everything else | muted clay tones | No second saturated colour anywhere. |

**Amber `#FFA524` is reserved for practical light sources only** — the lamp pool, and a phone screen if one ever appears. Never on clothing, never as a brand wash, never a logo on the cap.

**Explicitly rejected:** rust / terracotta / warm orange clothing — too close to amber, it fights the phone for attention. Also no blue or teal props; a saturated blue mug was cut from an early plate for exactly this reason.

---

## 3. Production pipeline

**Rule that governs everything: state *changes* (hard cuts), never state *transitions* (morphs).** Generative video artifacts are born in the temporal interpolation layer. We never enter it.

1. **Generate the BARE-TABLE plate first, then inpaint the pile onto it.** This inverts the obvious order and it is the single most important production decision in the document.

   Generating a "with pile" plate and a "without pile" plate separately guarantees drift: the lamp moves, the cabinets change, a second mug appears. We already lost a pair that way. Instead:

   - **Step 1.** Generate ONE plate: the man slumped at the bare table, lamp lit, night. This is the **after** frame (2.5–10s).
   - **Step 2.** Inpaint the pile onto that exact image, masking only the table surface. This is the **before** frame (0–2.5s).

   The two frames are now pixel-identical everywhere except the pile, because they are literally the same image. The hard cut cannot jump. Continuity becomes free instead of expensive, and Gamma's feasibility concern (6/10) rises to ~9.5.

   Iterate until the stills are flawless. Nothing moves yet.
2. **Mask in Photoshop.** Separate layers: room/background, figure, table foreground, phone, phone-screen glow.
3. **Composite in After Effects or DaVinci Resolve** (Resolve is free, Windows-native). All motion is deterministic:
   - 2.5D parallax push, 4% over 10s.
   - Lamp flicker = opacity keyframes.
   - Shoulder rise/drop = layer swap with a 3-frame dissolve **masked to the torso only**.
   - Phone glow dies = opacity.
   - Hard cuts at 5s and 7s.
4. **Typeset the notification text in AE.** Never let an image model render legible text — it is the most reliable slop tell there is. Inter, the site's own body font.
5. **Export:** MP4 (h.264) + WebM, ~10s, plus a **final-frame PNG poster** for `poster=` and reduced-motion.

### Prompt shape for the stills

```
faceless clay figure of a tired adult, broad rounded shoulders and heavy torso,
slumped deeply over a small kitchen table with a rounded hunched back,
head hanging low and tilted toward the glowing phone, seen from three-quarter rear,
completely smooth featureless egg-shaped head with no brow, no nose, no muzzle,
no ears, no face of any kind,
wearing a muted sage-olive baseball cap brim forward,
a muted sage-olive work apron over a creased bone-white shirt, raw grey clay skin,
single warm desk lamp as the only light source, deep charcoal shadows,
visible fingerprints in the clay, dust motes in the lamp cone, film grain,
shallow depth of field, macro lens, camera locked at table height,
muted palette, one amber #FFA524 accent from the phone screen only
```

### The three technical risks, and how the design kills them

| Gemini's risk | Kill |
|---|---|
| Phantom face — diffusion hallucinates a nose/jaw into the blank head when it moves | Shoot **3/4 rear, face away from lens**; the head **never moves**; motion is shoulders only, via layer swap |
| Thin-line coherence failure (the amber thread jitters and detaches) | **No thread exists.** Cut entirely. |
| Loop seam pop | **It doesn't loop.** Plays once, holds on the final frame. |

---

## 4. Negative guardrails — strictly forbidden

- ❌ **Any morph, melt, dissolve or "transformation" between objects.** Hard cuts only.
- ❌ **Any animation of the character's head or face.** Shoulders and hands only.
- ❌ **The glowing magic thread / particle swirl / energy ribbon.** The whole "wizard fixes it" family.
- ❌ **Icon ballet** — gears, browser windows, app tiles, paper planes floating or assembling.
- ❌ **Before/after split screens** and transformation montages.
- ❌ **AI-rendered text of any kind.** All type is set in AE.
- ❌ **Bright, evenly-lit, bouncy "Duolingo clay."** The slop signature is the *lighting and finish*, not the medium — so: single practical light, deep shadow, fingerprints, dust, grain. Never studio-even, never glossy plastic.
- ❌ **Neon, cyan, purple, gradient meshes, cyberpunk.** Amber is the only saturated colour, and it comes from a *practical source* (the phone / the lamp), never as a brand wash.
- ❌ **Corporate VO or filler copy.** There is no voiceover at all.
- ❌ **Cheerfulness.** The tone is quiet recognition, not rescue.

---

## 5. Note on length

The brief asked for a 30–60s storyboard. All three panelists and the slot constraint independently argue against it: this is a **small corner slot, sound off, with a 2–3 second decision window**. 10 seconds is the correct hero asset.

A 30–45s cut is a **different asset with a different job** — social, email, or the About section — and should be storyboarded separately if wanted. Do not put it in the hero.

---

## 6. First concrete step

Generate **Plate A only**, and judge one thing: does the still read as *a real 2:47 AM* — lamp-lit, grainy, fingerprinted, slightly sad — or does it read as bright bouncy toy clay?

If it reads as toy, the lighting is wrong, not the medium. Push: darker, single source, more grain, more shadow. Do not proceed to Plate B until Plate A passes.
