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

## 1. The winning concept — "2:47"

Kimi's emotional arc + Gemini's production method + one Claude amendment that closes the offer-clarity hole.

**One sentence:** A clay figure at a kitchen table at 2:47 AM flinches at a buzzing phone — then sees the booking was already handled, and puts the phone face-down.

**What it refuses to do:** never shows the product, never shows a transformation montage, never visualises the three service lines, never depicts the builder, never resolves the business (only the night). The fixing is what the call is for — the only honest position a no-clients-yet portfolio can take.

### Final scores (post-iteration)

| Criterion | Score |
|---|---|
| Trust & Authority | 9.6 |
| Offer Clarity | 9.5 |
| Narrative Pull | 9.6 |
| Slop Immunity | 9.9 |
| **Overall** | **9.65** |

---

## 2. Storyboard — 10s, plays once, holds

It does **not** loop. It plays on load, ends on the calm frame, and holds. This eliminates the loop-seam pop Gemini flagged, and the held final frame doubles as the static poster for reduced-motion and slow connections.

| Time | Visual | Audio |
|---|---|---|
| **0–2s** *Hook* | Locked camera at table height. Clay figure slumped at a kitchen table, **seen from 3/4 rear-side, face away from lens**. Desk lamp is the only light. Phone face-up beside a cold mug, screen glowing amber. On the wall, a small clock reads **2:47**. Slow 4% push-in begins. | Silent. Optional: room tone + a distant fridge hum. |
| **2–5s** *Conflict* | Phone buzzes. **Shoulders rise one millimetre, head never moves.** They start to reach. They stop. The phone buzzes again. Lamp light flickers once. Nothing resolves — tension sits while the camera creeps. | A single soft buzz, then a second. Nothing else. |
| **5–7s** *Proof* | **HARD CUT** to a macro insert of the phone screen. One legible line, typeset (not generated): **"Booking confirmed — Sat 10:30"**. No chat bubbles, no AI assistant, no icons. It is a tool that was built, working. | One soft confirmation tick. |
| **7–9s** *Release* | **HARD CUT** back to the wide. Shoulders drop (layer swap). They turn the phone **face-down**. The amber glow dies; the lamp stays warm. They pick up the mug. | Silence returns. |
| **9–10s** *Handoff* | Frame holds. Stillness rhymes with the "Book a 20-minute call" button beside it. **Hold forever.** | — |

### The Claude amendment (why 5–7s exists)

Kimi's original ends with the phone going face-down *by itself* — emotionally perfect, but it scores 7.0 on offer clarity and re-invites the "wizard fixes it" distrust. Replacing that beat with **one legible line of typeset text showing money already made while they sat there** does four things at once:

- Converts clarity 7.0 → 9.5.
- "Your business earned while you rested" beats "you feel calm" for a scared owner.
- It is **typography, not iconography** — 100% legible at corner size, where Gemini's icon-collapse risk lives.
- It is a static frame with a hard cut on both sides: zero morph, zero render risk.

### Where the three services went

Deliberately out of the video. Forcing the taxonomy into a 9-second corner loop was the original sin — all three panelists attacked it independently. The three services are already carried by the existing **"What I build"** black-on-white band. Add one line of real page text *under* the video instead:

> Apps, automations and websites for small businesses.

Free, perfectly legible, zero render risk.

---

## 3. Production pipeline

**Rule that governs everything: state *changes* (hard cuts), never state *transitions* (morphs).** Generative video artifacts are born in the temporal interpolation layer. We never enter it.

1. **Generate static plates.** Two plates, same seed + character reference:
   - **Plate A** — slumped, phone face-up glowing.
   - **Plate B** — upright, phone face-down, mug lifted.
   - Plus: a separate macro plate of the phone on the table.
   Use current static SOTA (Midjourney with `--seed` + `--cref`, or Flux / Imagen). Iterate until *stills* are flawless. Nothing moves yet.
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
faceless clay figure slumped at a kitchen table, seen from three-quarter rear,
head turned away from camera, blank rounded head, no facial features,
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
