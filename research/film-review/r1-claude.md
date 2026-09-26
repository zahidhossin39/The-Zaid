# Claude review, round 1 (v1)

Measured display sizes at 316 px (scale 0.1646):
- Message bubbles are 5.1 px, notifications 4.8 px, status chips 7.6 px, captions 7.2 px and the end CTA 6.9 px.
- Only the business name (18 px) and the clock (25 px) are readable.
- In the 2x2 wide shots the text drops to 2-8 px.

The only readable words are the least important ones.

## Scorecard (at real hero size)
| Criterion | W | Score |
|---|---|---|
| Legibility | 25 | 2 |
| Instant understanding | 25 | 3 (the value first appears at about 27 s) |
| Story | 15 | 6 (a strong spine, but the emotional line can't be read) |
| Design craft | 15 | 7 (clean, but the hierarchy is inverted and the end grid looks empty) |
| Motion | 10 | 6 (half-station jitter mid-pan, the rewind looks like a glitch) |
| Hero fit | 10 | 2 |
| **Total** | | **4.0 / 10** |

## Problems and fixes (sev: C critical, M major, m minor)
**Story**
- **S1 C.** Four businesses. Fix: two only, dental on a call and fitness with a message plus a waitlist refill.
- **S2 C.** The payoff comes after 27 s. Fix: lead with the good world, with the first booking by 5 s.
- **S3 M.** The "sorry just seeing this / found someone" line is about 2 px. Fix: drop Act 1 in the hero and carry the pain as a state (a busy chip plus a ringing phone).
- **S4 M.** A green outgoing "I can see you today" reads as the owner answering. Fix: an "Answered for you" label, with the red "With a patient" chip still lit in the same frame.
- **S5 M.** The rewind reads as a loop restart or glitch at size. Fix: no rewind in the hero; keep it for the long services cut.
- **S6 m.** In take two the studio class never dips before the refill. Fix: show "11/12, 1 spot open" (dashed), then "12/12 Full".
- **S7 m.** The loss markers are inconsistent.

**Design**
- **D1 C.** The biggest type is spent on name and clock (112/150 px) and the story on 29-31 px. Fix: make phone content the hero at 52 px or more, and shrink identity to a top chip.
- **D2 M.** The time appears twice. Fix: one small clock.
- **D3 C.** The end week cells are pale on pale and read as an EMPTY calendar. Fix: solid ink booking blocks with 2-word labels and one amber "Off".
- **D4 M.** The end card repeats the page headline and draws a fake CTA button. Fix: no headline or CTA in the video.
- **D5 m.** Amber is overused (tags, take two). Fix: amber only for booked, full and Off.
- **D6 m.** The 45% dim turns the phones to mud.
- **D7 m.** The black IG thread reads as a black box.

**Legibility**
- **L1 C.** Canvas minimum of 40 px on a 1080-wide 4:5 canvas shown at 440 px (16 px); messages at 56 px or more.
- **L2 C.** No multi-up layouts at hero size; one subject per frame.
- **L3 M.** Captions should be a fixed top band, not floating over content.
- **L4 M.** Summary notifications are about 2 px. Fix: one full-width card at 56 px.

**Motion**
- **M1 M.** Pans show half of two stations. Fix: hard cuts or in-place state swaps.
- **M2 M.** During the rewind the clock rolls back while the status still says "Free".
- **M3 m.** The ring pulses are invisible. Fix: pulse the card scale.
- **M4 m.** Hold each step for 0.6 s + 0.2 s per word, with a 1 s minimum.

**Pacing**
- **P1 C.** 57 s is too long for a glance. Fix: a 14-15 s loop with the first win by 5 s.
- **P2 M.** The first 3 s show four identical clocks and nothing happening.
- **P3 M.** The poster doesn't match the loop start. Fix: make it loop-safe, with the poster as the end state and frame 0.

**Hero**
- **H1 C.** The 316x176 slot is a thumbnail. Fix: a 4:5 slot at 440x550, with the grid at 7fr/5fr.
- **H2 M.** The poster is the end card with a duplicate headline. Fix: make it a result frame.
- **H3 m.** Mobile: the same 4:5 at 340x425, placed under the CTA.
- **H4 m.** Reduced motion should show the poster.

**Copy**
- "Call answered" becomes "Answered for you".
- Remove the 3-clause caption.
- "(555) 014-2290" becomes "New caller".
- Remove the subline.
- Remove the dropped niches.

## Redesign: "Booked while you're busy" (hero cut)
**Slot:** desktop 440x550 (4:5) at 7fr/5fr; mobile 340x425 under the CTA. Loop, muted, with the poster as the last frame. The long "twice" film moves to the services section.

**Canvas and type:** 1080x1350. The 40 px minimum shows at 16.3 px on desktop and 12.6 px on mobile. Messages are 56 px (22.8 px desktop) and outcome cards 72 px bold. At most 5 words per bubble.

**Fixed layout, no camera moves:**
- Top band 0-180: identity chip plus the busy state and a clock.
- Middle: one light screen card, 960 wide.
- Bottom band: a tally, "Booked today: 0", then 1, then 2 in amber.

**Loop, 15 s:**
| Time | What happens |
|---|---|
| 0-0.5 | The poster week collapses into the top band (hides the loop seam). |
| 0.5-1.5 | Dental, "With a patient" (red dot). An incoming call card, "New caller", pulses at scale 1.00-1.03. |
| 1.5-2.2 | An "Answered for you" pill snaps on. |
| 2.2-4.5 | Transcript: "Tooth is killing me. Today?" / "4:30 today works?" / "Yes please". |
| 4.5-6.0 | An amber "✓ Booked · 4:30 PM" card. The tally goes to 1. The red chip is still lit. |
| 6.0-6.4 | The top band wipes to "Ember Fitness · Teaching a class", 2:31. The tally stays at 1. |
| 6.4-8.0 | SMS: "Can't make 6am tomorrow". The strip reads "6am class · 11/12" with a dashed seat. |
| 8.0-9.6 | "Offered to waitlist", then "I'll take it!" (the one back.out). |
| 9.6-11 | The strip turns amber, "12/12 Full". The tally goes to 2. |
| 11-12 | The chip becomes "Free" and the clock 2:46. |
| 12-15 | Poster: "While you were busy", a week of ink blocks, one amber "Thu evening · Off", and the tally "2 booked · 1 spot refilled · 0 to reply". |

**Predicted score:** 8.0 (legibility 8.5, understanding 8, story 6.5, craft 8, motion 8, hero 8.5). The "lost vs caught" contrast is deliberately given up in exchange for glance clarity.

**Riskiest assumption:** that "With a patient" staying lit next to "Answered for you" makes viewers understand, with no "before" scene, that someone else answered. Test by asking owners "who answered that call?"

**Fallback:** if the hero must stay 8fr/4fr, use 1:1 at 340x340.
