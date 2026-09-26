# Round 3 Review: Hero Motion Film v3

Here is the unvarnished teardown of v3. While the structural shifts (two businesses, centered layout, receipt poster) have massively improved the focus, the film is still fighting its own container. It wastes its most precious asset - the first 2 seconds - and relies on abstract wireframes instead of authentic app UIs.

## 1. Scorecard (v3)

| Criterion | Score | Max | Notes |
| :--- | :--- | :--- | :--- |
| Legibility at size | **22** | 25 | Text sizes are mathematically sound (16px+ on mobile), but excessive card padding spreads elements too far apart. |
| Instant muted understanding | **18** | 25 | The poster is clear, but the Dental UI fails to instantly read as a "voice agent answering a call". |
| Story and emotion | **12** | 15 | The relief beat hits hard. The threat is blunted by the poster spoiling the ending at 0s. |
| Visual design craft | **10** | 15 | The ringing UI looks like a wireframe icon. Lacks the polish of a lookalike iOS/Android app. |
| Motion craft | **7** | 10 | Basic GSAP slides and scales. The audio waveform feels dead and procedural. |
| Hero fit and balance | **9** | 10 | The 4:5 aspect ratio is a superb choice for the desktop right column and mobile stacking. |
| **Weighted Total** | **78** | **100** | A solid B. To reach an A+, it needs kinetic urgency and UI realism. |

## 2. Problem List

### Pacing
* **Critical | 0.0 - 1.2s | The Poster Stall:** Holding a static poster for 1.2 seconds at the start of a looping hero video is fatal. The first second is your only window to stop the scroll. The poster also acts as a spoiler, ruining the tension of the threat.
* **Major | 1.9 - 3.8s | Dead Air Ringing:** Watching a phone ring for almost 2 seconds in a 14-second cut is agonizingly slow. The threat ("To voicemail...") and the save ("Answered for you") must happen in a flash.

### Story
* **Major | 4.2 - 5.7s | Ambiguous Voice UI:** The Dental transcript uses a plain text-chat format (Patient vs Brightside). Even with a callbar, a muted viewer might think this is an SMS chatbot, entirely missing the "voice agent" value prop.
* **Minor | 9.7s | Anthropomorphized Waitlist:** The incoming text sender is labeled "Waitlist". A waitlist doesn't text you; a person on the waitlist does. It breaks the illusion of a real conversation.

### Design
* **Major | 1.9s | Wireframe Ringing:** The massive black circle with a phone icon looks like a generic web icon, not a lookalike app UI. It lacks the authenticity of an iOS banner drop-down or a full-screen blurred call UI.
* **Minor | Throughout | Wasted Canvas:** The cards are locked to a massive 880px height but only contain 3-4 lines of content. This creates vast empty spaces that make the UI feel like a PowerPoint slide rather than a dense, authentic phone screen.

### Legibility at Size
* **Minor | 1.9s | Orphaned Elements:** Because of the inflated card height, small elements like the `.countdown i` dots and the `.caller small` text get visually orphaned and lose impact at the 327px mobile width.

### Motion
* **Minor | 3.8 - 5.7s | Procedural Waveform:** The waveform animation is just a static Y-scale repeat. It does not react to the text appearing, making the "live call" feel robotic rather than dynamic.

### Copy
* **Minor | 4.2s | Stilted Transcript:** "Toothache. Today?" is too compressed. It reads like a bot prompt rather than a transcribed human voice, undermining the illusion of a live phone call.

## 3. Concrete Fixes

1. **The Kinetic Opening:** Keep the receipts on the final frame so the `<video poster>` attribute works on page load. But the moment the video actually plays at 0.0s, violently yank the poster up and out of frame (0.3s duration). The sudden movement grabs the eye and instantly plunges the user into the ringing call.
2. **Accelerate the Threat:** Cut the ringing phase down to 1 second. Drop in a sleek iOS-style call banner, pulse it twice, and immediately trigger the amber "Answered for you" strike-through.
3. **Voice UI Overhaul:** Rebuild the Dental transcript to look like an Apple Intelligence / Siri live transcription. Add a glowing amber waveform locked to the active speaker, and stagger the text fading in word-by-word to sell the "live speech-to-text" illusion. 
4. **Natural Waitlist Labels:** Change the sender label of the fitness reply from "Waitlist" to a contextual label like "From waitlist", keeping it a natural incoming SMS bubble.
5. **Auto-Height Cards:** Keep the 4:5 canvas, but allow the white cards to hug their content (around 500-600px tall) and center them vertically on the stage. This creates a denser, tighter app feel and lets the background beautifully frame the UI.
6. **Humanize the Copy:** Change the patient text to "I have a toothache, can I come in today?" Let it wrap to two lines. It makes the AI's ability to handle natural speech much more impressive.

## 4. Redesigned Beat Sheet (v4)

* **Website Slot:** Keep it **440x550** (4:5) for desktop, **327x409** for mobile. It balances perfectly beside a 4-line headline on a 1440px grid and stacks elegantly on mobile.
* **Canvas Size:** 1080x1350.
* **Minimum Font Size:** 56px on canvas, which scales to a highly legible **17px** on a 327px mobile display.
* **Total Length:** 14.0 seconds.

**Second-by-Second Beats:**
* **0.0 - 0.5s | The Hook:** The loop begins. The "While you were busy" poster instantly slides up and away, revealing the Brightside Dental card already in action. Top pill: "With a patient". An incoming call banner drops in. Pill: "To voicemail...".
* **0.5 - 1.5s | The Save:** The banner pulses. "To voicemail..." strikes through. The banner morphs into a live call card with an amber "Answered for you" tag.
* **1.5 - 5.0s | The Voice Agent:** An audio waveform pulses. Text types out dynamically.
  * Caller: "I have a toothache, can I come in today?"
  * Agent: "I can get you in at 4:30 PM."
  * A massive stamp hits: **Booked 4:30 PM ✓**. The bottom tally ticks to Booked 1.
* **5.0 - 6.0s | The Swipe:** The Dental card slides left and out. The Ember Fitness card slides in from the right. Top pill updates: "Teaching a class".
* **6.0 - 8.0s | The Cancellation:** An SMS bubble pops in: "Can't make it, sorry!". The seat chart immediately drops a slot, showing a dashed empty box. Pill: "Empty spot".
* **8.0 - 10.5s | The Refill:** System chip pops in: "Texted waitlist...". Instantly, an incoming bubble (labeled "From waitlist") appears: "I'll take it!". The empty box fills amber. Pill strikes through to "Refilled for you". Tally ticks to Refilled 1.
* **10.5 - 12.0s | The Relief:** The chat fades. A soft, centered banner appears: "Class done. Nothing to chase."
* **12.0 - 14.0s | The Receipts:** The poster slams back down, covering the screen and displaying the final wins. It holds for 2 seconds, serving as the perfect loop seam and the static fallback poster for the website.

## 5. Predicted Score and Riskiest Assumption

**Predicted Score:** 9.5 / 10.

**Riskiest Assumption:** 
The timing of the word-by-word transcription effect in the Dental scene. If it animates too slowly, the 14-second pacing breaks and the loop feels sluggish. If it animates too quickly, it just looks like regular text popping in, killing the "live voice agent" illusion on a small mobile screen. The easing and stagger values for those text nodes must be dialed in perfectly.
