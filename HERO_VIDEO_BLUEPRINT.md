# Hero video — production blueprint

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

Alpha's catch, the **attribution gap**: a bare "Booking confirmed" notification makes a non-technical viewer assume the man subscribed to an app or hired an assistant. Zaid vanishes from his own advert. The receipt insert is typeset as a ledger entry with no UI chrome for exactly this reason, and attribution moves to the page copy under the video.

### Final scores (post-synthesis)

| Criterion | Score |
|---|---|
| Structural rigor & clarity | 9.6 |
| Execution feasibility | 9.6 |
| Engagement & narrative power | 9.5 |
| Slop immunity | 9.5 |
| **Overall** | **9.55** |

---

## 2. Storyboard — 10s, plays once, holds

It does not loop. It plays on load, ends on the final frame, and holds. The held frame doubles as the poster for reduced motion and slow connections.

The state change lands at **2.5 seconds**, inside the decision window. The commercial proof comes afterwards, as the reward for staying. This ordering is the fix for the flaw that killed both previous concepts, where the money beat fired after the viewer had already decided.

| Time | Visual | Notes |
|---|---|---|
| **0–2.5s** *The pile* | Table level, close enough that the pile dominates. A thick clay stack of unopened envelopes, paper slips, a notebook bristling with torn sticky notes, all leaning. The man is behind it, slumped, lamp lit, night. His hand enters and sets **one more slip** on top. The stack sways. Slow 3% push begins. | Night stays as context, not as the hook. We do not open on the wide mood shot. |
| **2.5s** | **HARD CUT.** | The only cut that matters. |
| **2.5–5s** *The absence* | Identical frame. The pile is **gone**. Not shrunk, not tidied. Bare wood. He is still there, hands still. Push continues unbroken. | Nothing else in frame changes. The cut pops on the absence. |
| **5–7s** *The receipt* | **HARD CUT** to a typeset insert on bone white. Inter, no UI chrome, no logo, no notification styling. Line one: **"All caught up."** A beat. Line two sets beneath: **"Twelve replies sent. Three jobs booked."** | A ledger entry, not a screenshot. |
| **7–10s** *Hold* | **HARD CUT** back to the bare table. Hold. | **No mug lift. No serenity.** End unresolved. |

### Why it does not resolve

Three panelists reached this independently across two sessions. Alpha named the mechanism best: if you medicate the viewer's cortisol for free inside the video, you destroy the urgency to click. The film ends with the burden gone and the man still sitting there. The relief is available, and it is on the other side of the button.

### Where the three services went

Deliberately out of the video, as before. They are carried by the existing "What I build" band. Under the video, one line of real page text does the attribution the film refuses to do:

> I build the thing that clears the pile.

Free, perfectly legible, zero render risk.

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

**Amber `#FFA524` is reserved for practical light sources only** — the phone screen and the lamp pool. Never on clothing, never as a brand wash, never a logo on the cap.

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
