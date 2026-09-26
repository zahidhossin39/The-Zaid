# Hero film v7 review (Claude)

**Overall: 7.5/10.** The phones now look real, and the channels (call vs Instagram) are clear. What holds it back: the poster has too much dead space, the pause button collides with it, the Fitness half never says the reply was automated, and the calendar payoff is on screen too briefly.

| Criterion | Score | Note |
|---|---|---|
| Legibility at size | 7 | Transcript and DM text are fine at 460px. The calendar event subtitles ("Toothache · 4:30 PM", "8:00 – 9:00 AM") and notification lines are about 9-10px, which drops to about 7px at 327px mobile. |
| Instant understanding (muted) | 7 | Dental works: "Answered for you" plus the "With a patient" pill tells the story. Fitness DM has no automation cue, so the purple reply reads as the owner typing mid-class, which contradicts "Teaching a class". |
| Realism | 8.5 | The iOS call screen, IG thread and Calendar day view are convincing. Two tells: the dental "now" line (2:05) sits on the 2 PM Cleaning block, and the 6 AM HIIT block starts visibly below the 6 AM gridline. |
| Design craft | 7 | Left rail is clean. The poster leaves the bottom 30% empty. The pause button overlaps the "While you were busy" title (page-1440). "Phone call"/"Instagram DM" rows repeat what the phone already shows. |
| Motion/pacing | 7 | Ringing runs 1.5 to 3.8s and the transcript 5.0 to 8.7s, both readable. Calendar day view is on screen only about 12.0 to 14.2s. On the first play the opening poster holds just 1.5s, too short to read two cards. |
| Hero fit | 8 | Aligned with the H1, calm, and the poster restates the value. The card sits slightly low next to the H1 cap line. |

## Top 6 fixes (ranked)

1. **Label the Fitness reply as automated.** Add the same green "✓ Answered for you" pill under the IG header (or a small "Auto-reply" caption above the purple bubble at 11px) from about 17.8s onward. Without it the Fitness story reads as manual.
2. **Hold the calendar payoffs longer.** Dental day view: keep it until 15.0s (move the `#s1` exit from 14.2 to 15.0) and shift Fitness +0.8s. Fitness day view: hold the "12/12 Full" state at least 1.8s before the poster (poster in at 25.6 instead of 25.0, or extend the duration to 28.3).
3. **Fix the opening poster hold.** Start the loop on the poster with at least 3.0s before the slide (`#poster` exit 1.5 → 3.0) so first-time viewers can read it. Or start the film at the ringing phone and let the poster appear only at the end.
4. **Move the pause button off the title.** Put it in the bottom-right corner of the slot (12px inset, 28px), or push the "While you were busy" title down or right by 36px.
5. **Fill the poster.** Scale the two cards up about 12% and centre them vertically, or add a third summary line ("2 bookings · 0 interruptions", 15px, muted). Right now 100px of empty cream at the bottom looks unfinished.
6. **Make calendar text readable on mobile.**
   - Bump the event title to 13px and the subtitle to 11px (at 460px), and the notification body to 12px.
   - Snap the HIIT block top exactly to the 6 AM line.
   - Move the dental "now" line to about 2:05 below the 2 PM row start, or drop it.
   - Put the "New patient" block's colour/glow on first reveal so the eye lands on it.
