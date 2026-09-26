  # Review: services-film v1 as a hero film (round 1, independent)

  ## 0. What I actually verified

  I opened all 15 `hero316-*` frames (the real display size), all matching `full-*` frames, and the 1fps sheet, and cross-checked against `videos/services-film/index.html` and `src/components/Hero.astro`. The display scale is 316/1920 = 0.165, so every canvas pixel size below is also given as displayed pixels. That arithmetic is the spine of this review: **this film was art-directed for 1920px and is being shown at 316px, and almost nothing in it survives that divide.**

  ---

  ## 1. Scorecard

  | Criterion (weight) | Score /10 | Weighted |
  |---|---|---|
  | Legibility at real hero size (25) | 2.0 | 50 |
  | Instant muted understanding (25) | 3.0 | 75 |
  | Story and emotion (15) | 7.0 | 105 |
  | Visual design craft (15) | 7.5 | 112.5 |
  | Motion craft (10) | 7.5 | 75 |
  | Hero fit and balance (10) | 2.0 | 20 |
  | **Weighted total** | | **4.4 / 10** |

  Story, design and motion score well because the craft is real at full size: disciplined eases (expo.out in, power2.in out, one earned back.out), good type hierarchy, a genuinely strong structural idea (relay, chorus, rewind, relay). But the two heaviest-weighted criteria are the ones a hero lives or dies on, and the film fails both almost completely. A 57s film whose message arrives at second 28, rendered at a size where its sentences are 5px tall, is not a hero asset. It is a services-section film (its own STORY.md says so: "**Not** the hero") that has been dropped into the hero.

  ---

  ## 2. Problem list

  ### Story

  **S1. Critical. 0-28s: the turn comes 25 seconds after the viewer has left.**
  Hero viewers glance for 2-5s. At second 3 all they have seen is four blurry panels and the caption "Everyone's busy." The actual proposition (missed call becomes booked appointment) starts at ~26.5s. The film is structured like a short film, consumed like a billboard.

  **S2. Major. 21.5-26.5s: the payoff depends on setup that is invisible at display size.**
  "Same afternoon. Take two." is the best beat in the film, but it is only meaningful if you read the four tiny conversations that failed in take one. At 316px those conversations are texture. The rewind replays a story the hero viewer never received.

  **S3. Major. Whole film: four businesses when the constraint is now two.**
  Med spa is removed, trainer merges into studio. Half the stations, half the relay, half the chorus must go. The structure (2x2 grid, four-stop camera relay, four-way chorus) collapses; this is not a trim, it is a rebuild.

  **S4. Major. 28.5-31s (dental take two): "who answered?" is unexplained.**
  The voice agent appears as a green chat thread headed "Call answered". The line that carries the entire mechanism, "0:38 · you're still with a patient", is 22px canvas = **3.6px displayed**. A viewer can plausibly read take two as "the owner replied faster". If that reading happens, the product does not exist.

  **S5. Minor. Proof beat was cut and nothing replaced it.**
  STORY v3 had the CallRail stat at the turning point; the build dropped it. Correct call for a hero, but the film now contains zero verifiable information, which the owner explicitly asked for.

  **S6. Minor. Chorus logic wobble.**
  At 2:46 all four owners simultaneously type the identical "sorry just seeing this!!" — rhetorically nice, but it implies four identical businesses with identical afternoons, flattening the niche-specificity the strategy docs fought for.

  ### Design

  **D1. Major. Six accent families compete with amber.**
  Phone wallpapers are teal, maroon, brown, navy. Then iOS blue bubbles, an Instagram purple gradient, WhatsApp green bubbles, green app icons, a green "Call answered" header, a green "out" bubble in the dental transcript. The rule is "amber #FFA524 is the only accent", and amber ends up sharing the screen with four other saturated systems. Success itself is split-coded: the Booked chip is amber but the reply bubble above it is green or blue.

  **D2. Major. The week grid (the resting frame) is nearly invisible.**
  Cells are `#f1eee7` on a `#ece8df` background with pale placeholder bars. In `hero316-15-55s.png` the grid reads as a faint ghost of a form. Because the video plays once and holds the last frame, **this washed-out grid is the permanent state of the hero**. The strongest single element on it, the amber serif "Off", is also the smallest.

  **D3. Minor. The "Free" status uses a grey dot that reads as "offline".**
  At 2:46 the red dot turns `#8e8e93`. Grey-dot convention is "dead/offline", not "available". Minor semantic static.

  **D4. Minor. Emoji in client copy.**
  "all good, found someone 👍" renders differently per platform and clashes with an otherwise rigorously typographic system.

  ### Legibility at size (display = 316px wide, factor 0.165)

  **L1. Critical. All message bubbles: 31px canvas → 5.1px displayed.** Every client message, every reply, the entire plot, unreadable.

  **L2. Critical. The 2x2 wide shots halve everything again.** Business names ~8px, status pills ~3.4px, bubbles ~2.3px. Frames 0-3.6s, 21.5-24.5s and ~48-52s carry zero readable information. The opening frame (also the pre-play poster, since there is no `poster` attribute and the src uses `#t=0.1`) is the worst frame to judge the film by.

  **L3. Critical. Captions: 44px → 7.3px.** Captions are the designated muted-comprehension layer, and at display size they are below comfortable reading threshold. "Same messages. Still busy. All answered." is a good line nobody will ever read.

  **L4. Major. Lock-screen notifications: 26-29px → ~4.5px.** The "Missed call" beat at 7.5s reads as "a white card appeared on a phone", not as a lost customer.

  **L5. Major. Booked chips: 29px → 4.8px.** The win is only legible as "an amber lozenge appeared". The amber reads; the words do not. (This is actually the one encouraging finding: colour and shape survive where text dies. The redesign should be built on that.)

  **L6. Major. End card: headline 92px → 15px, sub 32px → 5.3px, CTA 42px → 7px.** A blurry echo of the crisp HTML headline sitting 300px to its left.

  **L7. Minor. What does survive: clocks (150px → 25px) and business names (112px → 18px).** The film's furniture is legible; its message is not. That is backwards.

  ### Motion

  **M1. Major. ~7 of 57 seconds are camera moves.** Eight pans/zooms at 0.75-0.9s each. At full size they are smooth and tasteful; at 316px each is a blur-wipe that further smears already-marginal text, and the relay structure means content is *always* either arriving or leaving.

  **M2. Minor. The rewind clock flickers.** Six `tl.set` time jumps in 1.75s reads as flicker at small size; the scrub bar carries the meaning and the clock could simply run smoothly backward.

  **M3. Minor. Ring pulse and dim passes are nice at full size, imperceptible at display size.** Not harmful, just wasted budget.

  ### Pacing

  **P1. Critical. 57s, played once, no loop.** Three to six times longer than a hero glance, and after one play the hero's most dynamic slot becomes a static, washed-out end card for the rest of the session.

  **P2. Major. Take one violates the film's own reading rule.** STORY.md mandates 1.2s + 0.25s/word. "saw your IG, do u coach online?" is 7 words = 2.95s of pure reading, but each business gets ~3.5s *including* a 0.75s camera move and the notification entrance. Even a full-size, motivated viewer is behind.

  **P3. Major. Take two re-reads the same four beats for ~21s.** Fine in a services section where the viewer opted in; fatal in a hero.

  ### Hero integration

  **H1. Critical. The end card duplicates the page.** The film's final (persistent) frame shows "More customers shouldn't mean more hours." and a "Book a free 20-min call" button, at 15px and 7px, immediately beside the same headline in crisp 74px HTML and the same real button. Two headlines, two CTAs, one of them blurry and fake. This also means the film adds *no* information at rest.

  **H2. Critical. The resting state is the weakest frame.** Play-once-and-hold plus a low-contrast end grid (D2) means the hero spends 95% of its life showing its worst frame.

  **H3. Major. Format mismatch: 16:9 slot for vertical content.** The subject is a phone. A 316x176 slot gives the phone ~75px of width. The content is 9:16 trapped in 16:9 letterboxed by layout, not by choice.

  **H4. Major. Background clash.** The film's warm beige `#ece8df` sits as a flat rectangle on the hero's pure `#ffffff`. No radius, border or shadow on the slot to make that look intentional.

  **H5. Minor. The "Showreel" caption mislabels the piece.** It is a narrative film, not a reel, and the label promises the wrong thing.

  **H6. Minor. Click-to-replay on a 316px target** with no visible replay affordance will be discovered by almost nobody.

  ### Copy

  **C1. Major. "Tuesday, 2:14 PM. Everyone's busy." states no stakes.** The first 3 seconds must say what is being lost, not the time of day. Compare: "While you're with a patient, this is happening." Same length, carries the threat.

  **C2. Major. "sorry just seeing this!!" is the most relatable line in the piece and it is delivered at 5px, inside a bubble, in the take the hero viewer never reaches.** Either promote it to headline scale or cut it.

  **C3. Minor. "all good, found someone"** wants an "else"; and see D4 on the emoji.

  **C4. Minor. The mechanism explainer lives in the smallest text** (S4). "Answered for you" needs to be a headline-scale claim, not a thread subtitle.

  ---

  ## 3. Concrete fixes

  | Problem | Fix |
  |---|---|
  | S1, P1 | Restructure as an 18-20s loop: loss stated by second 5, win by second 10, payoff frame from 16s. The glance gets the whole argument in one breath. |
  | S2 | Make the turn self-sufficient: the loss must be stated in words at headline scale ("She booked somewhere else."), not implied by bubbles, so the rewind-less structure needs no setup reading. |
  | S3 | Rebuild around exactly two stations: Brightside Dental (call) and Ember Studio (SMS + waitlist). One phone on screen at a time, full height. No 2x2 anywhere. |
  | S4, C4 | Put the mechanism at label scale: a persistent pill during take two, "Answered for you · you're still with a patient", 72px+ canvas. |
  | S5 | Optional: one number on the summary beat ("2 booked, 1 refilled, 0 interruptions") instead of an external stat. |
  | D1, D3 | Recolour every success element to amber; app lookalikes keep only neutral bubble greys and ink. Wallpapers become two close dark neutrals (warm charcoal for dental, deep brown for Ember) so the phones read as siblings, not a rainbow. |
  | D2, H2 | Redesign the end frame as the strongest frame: high-contrast week grid (ink bars on white cells, not pale-on-pale), amber "Off" at least 2x current size, headline-scale payoff line. This frame is the poster and the resting state, so it gets the most design budget, not the least. |
  | L1-L6 | New size floor: nothing below 72px on a 1080-wide canvas (≥25px displayed at 316-460px). Key beats at 110-150px. Max 5 words per bubble, max 3 bubbles per scene, and any plot-critical sentence lives outside the phone, at caption scale. |
  | L7, M1 | One camera, mostly still. At most two moves in the whole film (dental → Ember transition, push to end frame). No pans during text. |
  | P2 | Per-beat budget: entrance ≤0.4s, hold ≥1.6s per short line, no beat under 2.5s total. |
  | H1 | Delete the in-film headline and CTA entirely. The page owns the ask; the film owns the proof. End on the outcome visual (full week, evening off). |
  | H3 | Change the format: render 4:5 (1080x1350), matching phone-shaped content. |
  | H4 | Give the slot a 20px radius, 1px `--line` border and soft shadow so the beige panel reads as a designed card on the white hero. |
  | H5 | Relabel "Showreel" → "What happens while you work" (a caption that sells). |
  | H6, P1 | Loop the 20s cut with a 2s hold on the payoff frame; keep click-to-restart as a bonus. Respect reduced-motion with the payoff poster. |
  | C1 | New opening caption: "2:04 PM. You're with a patient." then, on the ring, "New patient calling." The stakes in two lines, both ≥110px canvas. |
  | C2 | Promote the sentiment, kill the bubble: the loss card in take one is "She booked somewhere else." in 110px serif italic. Same gut punch, readable at 316px. |

  ---

  ## 4. Redesigned beat sheet: "2:04, twice" (two-business hero cut)

  **Canvas:** 1080x1350 (4:5), 30fps, ~20s, loops with a 2s hold on the final frame.
  **Type floor:** 72px canvas minimum (= 25-31px displayed). Captions and beat headlines 110-130px. Bubbles 76-84px, max 5 words each.
  **Layout (persistent):** left/top zone: business label + big clock + status pill; right/bottom zone: one phone at ~60% canvas height. One accent: amber, and amber means "booked".
  **Website slot:** desktop grid changes from `8fr/4fr` to `7fr/5fr` in `Hero.astro`; video column ~460px wide → **460x575px displayed (4:5)**, with 20px radius + border + shadow. Mobile: full-width 4:5, ~370x463px. One render serves both. Remove the in-film CTA; the real button stays beside it.

  | Time | On screen | Moves |
  |---|---|---|
  | 0.0-1.5 | Dental station. "Brightside Dental" (120px), pill "With a patient", clock 2:04. Caption: "Tuesday, 2:04 PM." Phone: lock screen. | Everything settles in one expo.out entrance, staggered 0.1s. First frame = readable poster-quality frame. |
  | 1.5-3.5 | Phone rings: "(555) 014-2290" huge on the call screen, two ring pulses. Caption swaps: "New patient calling." | Ring pulse only; camera locked. |
  | 3.5-5.5 | Rings die. "Missed call" banner. Then a full-width ink card slides up: **"She booked somewhere else."** (serif italic on "somewhere else", 110px). | Card up 0.4s, holds 1.6s. The loss is now stated in words a glance can catch. |
  | 5.5-6.5 | Card wipes; clock scrubs 2:04 → 2:04 with a flash of the amber scrub line. Caption: **"Same call. Answered for you."** | One 0.6s move, the only "transition" in act one. |
  | 6.5-10 | Call screen: "Answered · you're still with a patient" pill (amber). Three bubbles, 5 words max: "Tooth is killing me." / "Today at 4:30?" / "yes!!" → amber chip **"Booked · 4:30 PM"** (96px, the one back.out pop). | Bubbles step in 0.9s apart; chip pops at 9.6s. |
  | 10-11.5 | Whip down to Ember Studio: "Ember Studio" (120px), pill "Teaching 2pm class", clock 2:31. Phone: SMS in: "can't make 6am tomorrow". | Single 0.7s power2.inOut vertical pan; text holds still after. |
  | 11.5-14 | Reply bubble: "No worries, spot released." Then system line: "Offered to waitlist · Priya: YES" → amber chip **"6am class · Full"**. | Same rhythm as dental for deliberate symmetry: same afternoon, same ending. |
  | 14-16.5 | Both results compress into one summary card: "While you worked: **2 booked · 1 refilled · 0 missed**." | Card scales from the phone, 0.5s. |
  | 16.5-20 | **Poster/payoff frame:** week strip Mon-Fri, ink bars filling every cell (white cells, ink bars, real contrast), Thursday evening an amber block "Off" in serif italic at 130px. Line above: "Full calendar. Free evenings." (120px). Hold 2s, loop. | Bars stagger-fill 0.03s each; "Off" washes to amber last, so the loop's final gesture is the brand colour landing. |

  **Why this fits a hero:** the whole argument (loss → answered → booked → week full, evening kept) completes in 16.5s, and each individual beat survives a 3s glance: 0-3s says "busy owner, real customer calling", 3.5-5.5s says "you lose her", 6.5-10s says "answered and booked anyway", 16.5s+ is a poster that reads on its own at 316px with zero text below 25px displayed. No word "AI", no faces, amber is the only accent, lookalike UIs with no logos, fully muted-legible.

  ---

  ## 5. Predicted score and the riskiest assumption

  Predicted weighted score: **7.9 / 10** (legibility 8, muted understanding 8, story 7.5, design 8, motion 7.5, hero fit 8). It is deliberately not higher: a 20s loop still asks for more attention than a true glance gives, and the two-act structure still spends its first 5.5 seconds on a negative message.

  **The single riskiest assumption:** that the viewer watches past ~5 seconds. If the real glance is 2-3s, they see "dentist is busy, phone rings, call missed" and bounce before the product ever appears, leaving a net impression of "this site reminds me of my worst problem". The mitigation (and what I would test first): make frame 0 and the poster carry the entire promise, for example the phone ringing with an amber "Answered for you" pill already visible, so even a one-frame exposure says "calls get answered while you work", and the loop's first beat is the win, not the loss. If testing shows glances run longer than 4s, the loss-first order stands because the contrast is what makes the win land; that ordering decision is the assumption everything else hangs on.

To resume this session: kimi -r session_f9165f19-60f7-46ec-be4e-d6767cb95a38
