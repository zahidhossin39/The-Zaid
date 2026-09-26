# Cross-critique

## 1. Critique of Claude and Kimi

**What they got right that I missed:**
*   **One phone at a time:** Both Claude and Kimi correctly identified that multi-up layouts fail at hero sizes. I proposed two phones side by side, which would halve the width and ruin legibility.
*   **Grid layout change:** Changing the hero CSS grid to 7fr/5fr (giving the video 440 to 460px width) is a smart way to buy more pixels without breaking the desktop layout.
*   **Win first:** Claude astutely realized that the rewind and "take one" structure belongs in a services section, not a hero. Dropping the loss and leading with the good world is brilliant.

**What they got wrong:**
*   **Claude's type scale:** Claude proposes a 40px minimum canvas font. On a 340px mobile screen, 40px canvas renders at 12.5px. That is microscopic for a fast-moving video. It will fail.
*   **Kimi's pacing:** Kimi identified the risk of viewers bouncing during the "loss" phase but still wrote a beat sheet that spends the first 5.5 seconds showing a missed call. The hero viewer is gone before the product shows up.

**Inflated scores:**
*   Kimi scored the original motion craft a 7.5, despite admitting that the pans turn text into a blurry smear. That score is inflated. (Note: My own original score of 92/100 was absurdly inflated).

## 2. Judging the criticism of my review

*   **Contradiction 1 (Layout):** I proposed two phones side by side. Claude and Kimi demanded one subject per frame. **Verdict: They are right.** At 340px to 460px display width, side by side phones leave roughly 150px per phone. My layout would be entirely unreadable. I concede and change my design to one phone at a time.
*   **Contradiction 2 (Font size):** I proposed a 48px minimum. Kimi pushed for 72px. **Verdict: Kimi is right.** 48px at 30 percent scale is 14px. For video, we need 72px (which renders at about 22px on mobile) to guarantee instant reading.

## 3. Settling the open disagreements

**Loss first or win first?**
Win first. A hero section gets a 2 to 5 second glance. If we spend the first 5 seconds showing a busy owner missing a call, the user scrolls away with a negative impression of the product. The poster frame and the first 3 seconds must show the product working ("Answered for you" and a booked slot). The contrast of "loss versus win" is a luxury for the services page, not the hero.

**Minimum canvas type size?**
72px on a 1080x1350 canvas. Displayed at 440px desktop width, the scale is 40 percent, yielding a highly readable 29px. Displayed at 340px mobile width, the scale is 31 percent, yielding 22px. Anything smaller fails the glance test.

**Layout: One phone or two?**
One phone at a time. The video column is simply too narrow to share. We must use 100 percent of the available width for one massive UI, complete the beat, then swap to the second business.

## 4. Revised Final Beat Sheet

**Specs:**
*   **Canvas:** 1080x1350 (4:5 ratio).
*   **Slot size:** Change desktop layout to a 7fr/5fr grid, making the video slot 440x550px. Mobile stacks at 340x425px.
*   **Type sizes:** 72px absolute minimum for small UI labels. Chat bubbles and captions 90px to 110px. Outcome cards 120px.
*   **Total length:** 15 seconds. Loop safe.
*   **Style:** One phone on screen. Amber is the only accent. Muted autoplay. No camera moves.

**Second by second beats:**

*   **0.0 to 1.5s (The Hook):** Start in the win. Huge left aligned caption "Answered for you." Dental phone takes up the right two thirds. Top pill reads "With a patient". Incoming text bubble pops in: "Tooth is killing me. Today?"
*   **1.5 to 4.5s (The Action):** Automated reply pops in immediately: "4:30 today works?" Patient replies "Yes please". An amber outcome card slides over the chat: "Booked, 4:30 PM".
*   **4.5 to 6.0s (The Swap):** Hard cut, no panning. The phone changes to Ember Fitness. Top pill reads "Teaching a class". Incoming text: "Can't make 6am tomorrow".
*   **6.0 to 9.5s (The Waitlist):** Automated reply pops in: "Spot released to waitlist." A status bar reads "Waitlist notified." A new text arrives: "I will take it!" An amber outcome card slides over: "6am class, Full".
*   **9.5 to 13.0s (The Poster Frame):** The phone scales down and fades, revealing a clean weekly calendar grid filling the whole 1080x1350 canvas. White cells, dark ink blocks for bookings. Thursday evening is an amber block reading "Off". A massive 120px headline above reads: "Full calendar. Free evenings."
*   **13.0 to 15.0s (The Hold):** Hold on the calendar poster frame. At 15s, loop back to the Dental chat.

**Predicted Score:** 8.5 / 10
*   Legibility: 9
*   Instant understanding: 9
*   Story and emotion: 7
*   Visual design craft: 8
*   Motion craft: 8
*   Hero fit and balance: 10

**Riskiest assumption:** Dropping the "before" state (the missed call) assumes users already know the pain of missing leads and will instantly understand what "Answered for you" means without seeing the failure first.
