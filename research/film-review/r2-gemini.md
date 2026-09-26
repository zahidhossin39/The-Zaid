# Hero Film Review: Round 2 (Gemini)

## 1. Scorecard
| Criterion | Score (/10) | Weight | Weighted Score |
| :--- | :--- | :--- | :--- |
| **Legibility at real hero size** | 9.5 | 25 | 23.75 |
| **Instant muted understanding** | 6.0 | 25 | 15.00 |
| **Story and emotion** | 8.5 | 15 | 12.75 |
| **Visual design craft** | 9.0 | 15 | 13.50 |
| **Motion craft** | 7.0 | 10 | 7.00 |
| **Hero fit and balance** | 6.5 | 10 | 6.50 |
| **Total** | | **100** | **78.5 / 100** |

## 2. Problem List

### Story and Pacing
* **Critical: Sequential niche reveal.** (Timestamp: 0s to 7.1s). The film shows Dental for 7 seconds before Fitness appears. A fitness owner landing on the site will assume the software is only for dentists and bounce within 3 seconds. You must prove relevance to both niches instantly.
* **Minor: Unearned immediate booking.** (Timestamp: 2.7s to 5.5s). The bot replies "4:30 today works?" and books on "Yes please!" without asking for a name. It feels slightly robotic and breaks the suspension of disbelief for an owner who knows the mechanics of booking.

### Hero Integration
* **Major: Abstract poster.** (Timestamp: 0s and 13.4s). The resting poster uses a giant week grid. A calendar does not instantly communicate "an agent that replies to messages." It hides the core value proposition behind a scheduling metaphor.
* **Minor: Aspect ratio is too tall.** (Element: 4:5 Canvas). At 440x550px on desktop, the vertical height dominates the column, pushing secondary content down and making the film feel like a floating banner rather than an integrated UI component.

### Design and Legibility at Size
* **Major: Rule violation on accent color.** (Element: CSS `--busy`). The red recording dot violates the "Amber is the only accent" rule. Red draws the eye away from the amber "Answered for you" victory moments.
* **Minor: Class seats visual is too dense.** (Timestamp: 8.4s). The 12 tiny dots representing seats will render at approximately 4px wide on a 340px mobile screen. They border on visual noise and are hard to parse at a glance.

### Motion
* **Major: Flat slide transition.** (Timestamp: 7.1s). The horizontal `xPercent: -115` transition feels like a standard web carousel. It breaks the illusion of a cohesive spatial world or a physical device.

## 3. Concrete Fixes
1. **Change the aspect ratio to 1:1 (1080x1080 canvas).** This displays beautifully at 440x440px on desktop and 340x340px on mobile, balancing the hero grid without excess vertical dominance.
2. **The "Simultaneous Hook".** Split the screen horizontally into two lock screens at the start (Top: Dental, Bottom: Fitness). Fire notifications to BOTH simultaneously in the first 2 seconds.
3. **Spatial camera move.** Replace the flat carousel slide with a vertical "push and pan". Push in (scale up) so the Dental card fills the 1:1 square, run the dental sequence, then pan straight down the Y-axis to the Fitness card.
4. **Product-centric poster.** Ditch the week grid. The final poster should pull back to the 2-up split screen, resting on the locked-in strike-throughs ("Answered for you" and "Refilled for you") with a central floating tally overlay.
5. **Enforce the Amber rule.** Change the red `--busy` dot to a neutral hollow circle (`--ink`).
6. **Simplify the UI.** Replace the 12 tiny dots with a bold radial progress ring or just the bold text "11/12" and one large "Empty Spot" slot.
7. **Add a micro-friction bubble.** Change the incoming Dental message to imply an existing patient ("It's John, toothache") so the immediate booking makes logical sense.

## 4. Redesigned Beat Sheet (Two-Business Version)
* **Canvas size and aspect:** 1080x1080 (1:1 square)
* **Website slot:** 460x460px on desktop (fills the 5fr column), 340x340px on mobile
* **Minimum font size:** 56px (renders at ~22px on mobile)
* **Total length:** 14 seconds

| Time | Action on Screen | Camera / Motion |
| :--- | :--- | :--- |
| **0 - 2s** | **The Hook:** 2-up vertical split. Top half: Brightside Dental ("With a patient"). Bottom half: Ember Fitness ("Teaching a class"). At 1.0s, BOTH receive a notification. | Static wide shot. |
| **2 - 7s** | **The Dental Win:** Missed Call pill strikes through: "Voicemail" to "Answered for you" (Amber). Bubbles: "It's John, toothache" then "4:30 works?" then "Booked 4:30 PM". Bottom tally pops up: "Booked 1". | Camera pushes in (scale up) so the Dental card completely fills the 1:1 square. |
| **7 - 12s** | **The Fitness Win:** Text bubble "Can't make 6am". Pill strikes through: "Empty spot" to "Refilled for you" (Amber). Bubbles: "Offered to waitlist" then "I'll take it!". Tally updates: "Booked 2". | Camera seamlessly pans DOWN along the Y-axis to the Fitness card, which now fills the square. |
| **12 - 14s** | **The Poster:** Both cards rest in their saved states. A bold central overlay locks in: "While you were busy: 2 booked, 1 refilled." | Camera pulls back to reveal the 2-up vertical split again. Freezes on this frame. |

## 5. Predicted Score and Riskiest Assumption
* **Predicted Score:** 94 / 100
* **Riskiest Assumption:** A 2-up vertical split inside a 1:1 ratio means each half has 1080x540px of canvas space. On a 340px mobile screen, this translates to 340x170px per half. The assumption is that 170px of height is enough to clearly establish the business name, the busy status, and the initial notification bubble before the camera pushes in.
