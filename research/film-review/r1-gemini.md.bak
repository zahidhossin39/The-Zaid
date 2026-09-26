# Review of "Same afternoon, twice" (v1)

## 1. Scorecard (Current v1)

*   **Legibility at real hero size:** 3/25
*   **Instant muted understanding:** 10/25
*   **Story and emotion:** 10/15
*   **Visual design craft:** 13/15
*   **Motion craft:** 8/10
*   **Hero fit and balance:** 2/10
*   **Weighted Total:** 46 / 100

## 2. Problem List

### Legibility at size
*   **Severity:** Critical
*   **Timestamp:** 0-3.6s (4-up lock screens) and 3.6-17s (Relay)
*   **Why it hurts:** At the current 1920x1080 resolution scaled down to a 316px wide hero slot, the video is running at about 16% of its native size. The text and UI elements become microscopic (a 28px font becomes less than 5px). Viewers cannot read the context ("With a patient") or the incoming messages, completely killing the story.

### Pacing and Length
*   **Severity:** Major
*   **Timestamp:** The full 57s duration
*   **Why it hurts:** Hero sections are for glancing. A 57s loop assumes a captive audience. By the time the payoff (Take two) happens at 24s, the user has already scrolled down the page. The core value proposition is buried.

### Hero Integration and Aspect Ratio
*   **Severity:** Major
*   **Timestamp:** Global (16:9 canvas)
*   **Why it hurts:** A 316x176px video is a horizontal slit. It feels like a banner ad rather than a premium hero element, and it heavily restricts vertical space that could be used to make the phones larger and readable.

### Story and Cognitive Load
*   **Severity:** Major
*   **Timestamp:** Global (4 businesses)
*   **Why it hurts:** Tracking four different storylines (Dental, Med Spa, Fitness, Trainer) forces the viewer to process too much information at once. It dilutes the impact of the core message.

### Copy Redundancy
*   **Severity:** Minor
*   **Timestamp:** 41-45s (Ending pitch)
*   **Why it hurts:** The video ends with the text "More customers shouldn't mean more hours." This exact copy is already the HTML headline right next to the video. Repeating it inside the video is redundant and wastes valuable screen time.

## 3. Concrete Fixes

*   **Change the slot and canvas to 4:5:** Update the website video slot from 316x176 to 340x425px (or a similar 4:5 ratio). This preserves the column width but uses vertical space to make the visuals drastically larger.
*   **Scale up text:** With a 1080x1350 canvas displayed at ~340px, the scale factor is about 3x. The absolute minimum font size on the canvas must be 42px (yielding 14px on screen). Important text should be 60px+.
*   **Reduce to two businesses:** Keep only Dental and Fitness. Place two massive phones side by side to fill the 4:5 frame. Drop the side "station" UI panels entirely.
*   **Shorten the loop to under 20 seconds:** Cut the camera relay. Show the two phones simultaneously. Accelerate the "missed" sequence, do a rapid rewind, and show the "caught" sequence. 
*   **End on the calendar (Poster Frame):** Remove the redundant pitch text. Let the final frame simply be the "Your week" calendar with Thursday evening marked "Off" in Amber. This visually proves the HTML headline next to it.

## 4. Redesigned Beat Sheet (Two-Business Version)

*   **Canvas size and aspect:** 1080x1350 (4:5 vertical).
*   **Website slot:** The HTML slot should become 340x425px (a 4:5 block in the right column).
*   **Minimum font size:** 48px on canvas (renders at ~15px on screen). 
*   **Total length:** 18 seconds.

**Second-by-second beats:**
*   **0-4s:** Two massive phones side by side. Left phone is Dental, Right phone is Fitness. Lock screens clearly display "With a patient" and "Teaching 2pm class". Both screens light up. Dental gets a missed call notification. Fitness gets a cancellation text. Both screens go dark.
*   **4-7s:** Both phones display a follow up message. Dental gets a text "found someone else". Fitness gets "can't make 6am". 
*   **7-9s:** REWIND. A thick Amber scrub bar appears. Caption: "Same afternoon. Take two." The clocks run backwards.
*   **9-14s:** Back to the two phones. The exact same messages arrive. This time, lookalike bubbles instantly reply. Both phones get a satisfying Amber "Booked" confirmation chip. 
*   **14-18s:** The phones slide down and off screen. The background reveals the "Your week" calendar grid. It quickly fills up with bookings, leaving Thursday 6 PM empty. That slot turns Amber with the word "Off". (This remains as the static poster frame).

## 5. Predicted Score & Riskiest Assumption

*   **Predicted score for redesign:** 92 / 100
*   **Riskiest assumption:** Relying strictly on the lock screen text ("Brightside Dental", "With a patient") to establish the context for both businesses simultaneously, without any extra explanatory labels or voiceover, assumes the viewer will instantly map the left phone to a dentist and the right phone to a gym.
