# The calendar that fills itself

**Message:** your week fills itself, and your own time stays yours.
**Canvas:** 1264x704 (4x the 316x176 hero slot), 30 fps, 8.0 s, silent, plays once, holds the last frame.
**World:** one 3x3 week grid (Tue/Wed/Thu x 9 am/12 pm/5 pm) on the left, a narrow "rail" on the right showing one incoming event at a time. Never cut, never reset.

| Time | On screen | What moves (ease) | Emphasis | Copy |
|---|---|---|---|---|
| 0.0-0.8 | Full grid: 6 grey "Booked", 2 dashed "Open", Thu 5 pm quiet "Off" outline | Dashed borders of the open slots draw on (0.16,1,0.3,1) | The two open slots | Open |
| 0.8-2.6 | Call card on the rail | Card slides in; "Answered" swaps in; amber chip travels a dotted arc to Tue 9 am, lands 2.3 s, settles grey by 2.9 | Card, then chip | Missed call / 6:12 pm / Answered / Booked |
| 2.6-4.3 | DM card | Call card exits up fast; DM card in; "Replied"; chip travels to Wed 5 pm, lands 4.0 | Card, then chip | Instagram DM / 11:48 pm / Replied |
| 4.3-6.3 | Wed 12 pm cancels; waitlist card | Slot flips (rotateX) to struck "Cancelled"; Waitlist card in; chip drops in with **back.out** (the only one) | Cancelled slot, then chip | Cancelled / Waitlist / Next in line / Booked |
| 6.3-8.0 | Full week | Rail card exits; muted "Week full" fades in; Thu 5 pm fills amber from the bottom, "Off" turns ink serif; hold from 7.0 | Off block | Week full / Off |

**Final frame (poster + reduced-motion fallback):** 8 grey "Booked" slots, one amber "Off" at Thu 5 pm, rail says "Week full". Reads without motion: full week, one evening kept.

## Misread checklist ("he sells an app / chatbot")
- **Beats 2-3:** no chat bubbles, typing dots, bot avatar or reply text. The rail shows only the event (missed call, late DM) and one outcome word. The payoff is a slot, not a conversation.
- **Beat 4:** the refill is a calendar change, not a feature screen: no settings, toggles or product name.
- **Beat 5:** ends on the owner's time, not a logo or UI chrome. No window bar or phone mockup anywhere.
- No "AI", no stats, no brand name in frame.

## Legibility at 316 px
- All text >= 44 px on canvas (>= 11 px in the slot); "Off" 64 px. One- or two-word labels, which is why slots say "Booked", not "New client - Tue 10:00" (that needs ~2x the column width at 44 px).
- 3x3 only: each slot ~240x160 canvas px (60x40 in the hero).
- State is carried by dashed / solid / amber / strike as well as the word, never by colour alone.
- Chips sit still >= 0.3 s after landing before settling.

## Open questions
1. "Instagram DM" by name, or neutral "DM" (avoids looking like an integration pitch)?
2. "Off" as one evening (Thu 5 pm) or a whole day? A day reads stronger but needs a 4th column, shrinking every slot.
3. Pre-booked slots: keep the word "Booked" in each (clear, busier) or plain grey blocks (calmer, but breaks "every shape labelled")?
