# One film, four niches: final tier list

## Process
- **Round 1:** Claude, Gemini and Kimi researched and ideated independently: 43 ideas.
- **Round 2:** each critiqued the other two and itself, then merged the best parts into 13 refined concepts.
- **Round 3 (this file):** Claude merged and re-scored everything. Scores are only raised where a named flaw was removed.

Files: `r1-*.md`, `r2-*.md`.

Rubric: recognition 25, zero effort 20, muted clarity 20, craft 15, buildability 10, scale 10.

## What the cross-critique killed
- **Gemini "AI brain" waitlist reveal:** breaks the rule. Disqualified.
- **Mixed inbox (one phone gets dental + gym + Botox messages):** a dentist asks "why is my phone getting Botox messages?" Two of the three models scored its clarity 5-6.
- **Rotating messages or props:** 3 of 4 owners wait 5-30 s for their turn. "You cannot engineer your way out of a queue" (Kimi).
- **Eight phones on one counter (Claude's round 1 "Block"):** unreadable at 360 px. Claude downgraded its own idea from 9.25 to 7.55.
- **3 s niche pre-roll + neutral film:** the cosmetic match that the evidence says does little (Articos).
- **Scores that only hold for tagged traffic** (URL injector, named cut) were quoted as sitewide. Now scoped.

## Round 3 merge: "Relay" (new no-signal default)
Chorus (Claude) had instant recognition but a generic middle. Quartet (Kimi) kept each niche specific in the middle but was dense. Relay keeps both strengths and removes both flaws:

| Time | What happens |
|---|---|
| 0-3 s | Four lock screens side by side (2x2 on mobile). Each shows a business name with its category noun and the owner's busy status in their own words: Brightside Dental "With a patient", Ember Studio "Teaching 2pm class", Forge Training "Mid-session", Glow Med Spa "In treatment". Every owner sees themselves by second 3. |
| 3-17 s | **Take one, the relay.** The camera travels along one continuous counter from business to business. Only one phone is on screen at a time, at full size (single-phone legibility). Each business shows its signature channel: Dental missed call "tooth is killing me", Med spa Instagram "how much is lip filler?", Studio SMS "can't make 6am", Trainer WhatsApp "saw your IG, do u coach online?". Each ends with a grey "all good, found someone". |
| 17-20 s | **Chorus:** 2x2, 2:46 PM, all four owners send "sorry just seeing this!!" at the same moment. The text is identical, so there is no extra reading. |
| 20-22 s | Rewind; the camera runs back along the counter. "Same afternoon. Take two." |
| 22-34 s | **Take two, the same relay:** "Replied in 4 sec", then Booked chips, and the waitlist refills the 6am class. |
| 34-37 s | **Chorus:** four lock screens, "3 booked, 1 refilled", each with one niche chip. |
| 37-45 s | The four weeks fold into one grid, "Your week", with Thursday evening off. It hands off to the real booking section below. |

**Site:**
- A static line above the film: "For dental practices, gyms and studios, personal trainers and med spas".
- The poster is the 0-3 s four-up frame.
- A 4:5 render is served on mobile (`<source media>`), so text stays at least 14 px.
- Playback starts from frame 0 when the film scrolls into view.
- Reduced motion shows the poster.

**Flaws removed vs Quartet:** density (one phone at a time, the client side reduced to a grey bubble) and mobile legibility (4:5 cut). **Flaw removed vs Chorus:** the generic middle.

**Remaining:** 3.5 s per business in take one is tight (every message is capped at 5 words and gets one read), and a 5th niche adds about 7 s.

## Top 10
| Rank | Idea | Scope | Rec | Eff | Mute | Craft | Build | Scale | Score |
|---|---|---|---|---|---|---|---|---|---|
| 1 | **The stack:** Relay on the homepage + routed niche cuts + named outbound cut, all from one JSON-driven composition | whole site | 10 | 10 | 9 | 9 | 7.5 | 9 | **9.30** |
| 2 | **Routed niche cuts:** /dental, /gyms, /trainers, /med-spas pages and matching ads, each running the full single-niche "Same afternoon, twice". Never guess; untagged visitors get Relay | tagged traffic | 10 | 10 | 9 | 8 | 8 | 10 | **9.30** |
| 3 | **Relay** (above) | untagged homepage | 9.5 | 10 | 9 | 9 | 8 | 8 | **9.13** |
| 4 | **Named for you:** cold-email link puts "Harbor Dental" in the header and "Harbor Dental's week", framed "if every message got answered" | outbound only | 10 | 9 | 8.5 | 8 | 7 | 9 | **8.90** |
| 5 | **Quartet** (Kimi): four zones on one counter, spotlight pass | untagged | 9 | 10 | 8 | 9 | 7 | 7 | **8.60** |
| 6 | **Sync grid 1080x1080:** four lock screens in lockstep; social feed only | social | 9 | 10 | 8 | 9 | 7 | 6 | **8.50** |
| 7 | **Chorus** (Claude): four open, generic single-phone middle | untagged | 8 | 10 | 8 | 8 | 8 | 8 | **8.40** |
| 8 | **"Near me" search cold open:** "dentist near me", "spin class near me"... | opener | 8 | 10 | 7 | 6 | 9 | 10 | **8.20** |
| 9 | **Universal script:** no niche words at all (Calendly-style) | untagged | 5 | 10 | 9 | 5 | 10 | 9 | **7.70** |
| 10 | **Mixed-inbox cascade** (Gemini): four niches' messages on one phone | untagged | 8 | 10 | 5 | 7 | 9 | 10 | **7.95 → 7.6*** |

*Clarity penalty: a single phone that belongs to four businesses at once confuses its owner.

## Honest limits
- Every score is judgment until tested. Cheapest real test: show the 0-3 s frame to 5 owners per niche (owner Facebook groups or subreddits) and ask "who is this for?"
- Kimi's round 1 output was messy (raw notes, a broken table). Gemini's research had no URLs and broke the no-"AI" rule. Claude's round 1 inflated its own scores. All three were corrected in round 2.
