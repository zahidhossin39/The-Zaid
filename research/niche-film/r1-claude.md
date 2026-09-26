# Claude round 1 (condensed, faithful to the agent's report)

## 1. What others do
- **Podium:** general hero ("...for local businesses"). A lower section, "AI built for your industry", has 4 industry cards, and the visitor must click.
- **Weave:** one broad healthcare message. It works only because their niches are close together; ours are not.
- **Mindbody:** general hero line, rotating hero backgrounds, and nav split into Fitness / Wellness / Beauty. Rotating carousels get ignored (NN/g).
- **Jobber:** "Personalize your experience" dropdown with 14 trades (makes the visitor pick). Its rotating testimonials from different trades are the useful part.
- **Housecall Pro:** rotating trade word in the headline. The most overused pattern.
- **Boulevard:** umbrella noun ("appointment-based self-care businesses") plus vertical tabs.
- **Square:** industry hub pages.
- **Pattern:** the hero speaks to everyone, and the specific content sits behind cards, tabs or pages the visitor must find. Nobody puts niche-specific detail *inside the same story* so each niche spots itself without clicking.
- **Shopify, "Let's Make You a Business":** very specific lines for different founders under one general promise.
- **Montage ads** (Shot on iPhone and similar) show breadth, but rarely make one viewer feel "that's me".

**Evidence:**
- ConversionLab dynamic text replacement: +31.4% conversions (small sample).
- HubSpot, 330k CTAs: personalised CTAs +202% (vendor).
- Mutiny (vendor): DocSend +260%, Brex +29%, Amplitude +54% just from swapping customer logos by industry.
- NN/g: auto-rotating carousels get about 1% of clicks and annoy users.
- Digiday: up to 85% of Facebook video is watched muted.

**Takeaway:** route by signal when you have one. With no signal, put niche detail for all niches inside one story, not a carousel.

## 2. Ideas (15) and scores
Weights: SR 25, ZE 20, CL 20, CW 15, BU 10, SC 10.

| # | Idea | SR | ZE | CL | CW | BU | SC | Total |
|---|---|---|---|---|---|---|---|---|
| 1 | Universal script (generic messages) | 5 | 10 | 9 | 5 | 10 | 9 | 7.70 |
| 2 | "The Block": one long counter split into 4 zones by material (clinic laminate, gym rubber, trainer bench, spa marble), each with its own phone + client phone, camera tracks across | 9 | 10 | 7 | 9 | 6 | 6 | 8.20 |
| 3 | 2x2 quad split | 9 | 10 | 5 | 7 | 7 | 5 | 7.50 |
| 4 | One counter, props swap at the edges | 6 | 10 | 7 | 7 | 8 | 9 | 7.65 |
| 5 | Mixed-niche inbox on one phone | 7 | 10 | 5 | 6 | 9 | 8 | 7.35 |
| 6 | Re-skin per autoplay loop | 5 | 9 | 9 | 6 | 8 | 9 | 7.45 |
| 7 | Traffic-routed skins (/dental, /fitness paths, ?niche=, social cut) | 8 | 10 | 9 | 6 | 8 | 10 | 8.50 |
| 8 | "Named for you" outbound: ?b=Harbor+Dental puts their business name in the film | 10 | 10 | 8 | 8 | 7 | 9 | 8.90 |
| 9 | "Near me" search bars cold open (4 client phones: "dentist near me", "spin class near me"...) | 8 | 10 | 7 | 6 | 9 | 10 | 8.20 |
| 10 | Four niche weeks fold into one "Your week" (finale) | 8 | 10 | 8 | 9 | 8 | 8 | 8.55 |
| 11 | Background silhouette morph (chair, rack, bed, bench) | 6 | 10 | 6 | 9 | 5 | 6 | 7.15 |
| 12 | Split-flap departures board of missed moments, flipping to BOOKED | 7 | 10 | 7 | 9 | 7 | 9 | 8.10 |
| 13 | Headline niche word synced to film | 6 | 9 | 6 | 4 | 9 | 9 | 6.90 |
| 14 | Film clock uses the viewer's local day/time | 4 | 10 | 9 | 7 | 9 | 10 | 7.75 |
| 15 | Anthology of four 10 s niche mini-films | 9 | 10 | 8 | 6 | 8 | 8 | 8.35 |

## 3. Top 3, improved (they form one system)
**Top 1, "The Block, same afternoon" (9.25), the homepage default for visitors with no signal.**
- Each niche gets its signature channel, so no feature repeats:
  - Dental: call ("tooth is killing me")
  - Med spa: Instagram DM ("how much is lip filler?")
  - Gym: cancellation refilled from the waitlist (class 20/20)
  - Trainer: SMS/WhatsApp lead ("saw your IG, do you do online coaching?")
- Timeline:
  - 0-3 s: wide shot of 4 zones, each with one service chip.
  - 3-5 s: all 4 phones light up at once.
  - 5-17 s: spotlight tracks each zone for 3 s; clients book elsewhere.
  - 17-21 s: all 4 owners send "sorry just seeing this!!" together, and 4 "found someone" replies land (pattern recognition).
  - 21-23 s: whip-pan rewind, "Same afternoon. Take two."
  - 23-35 s: the same track at 2.5 s per zone, everything answered and booked.
  - 35-39 s: summaries.
  - 39-45 s: the 4 mini weeks fold into one "Your week" with Thursday evening free.
- Fixes: one zone lit at a time, 5-word cap on messages, one reusable Zone component instanced from JSON.

**Top 2, traffic-routed niche cuts (9.40).** One timeline, five skins (the Block plus 4 single-niche versions of the full story). Astro builds static /dental, /fitness, /trainers, /medspa pages (also SEO). `?niche=` on ads. Each skin has its own poster. The same JSON renders 4 social ads that link to the matching page, so ad and page match.

**Top 3, "Named for you" outbound cut (9.45).** The cold-email link carries the business name and niche. The name appears in 3 fixed places: phone header, confirmations, and "Harbor Dental's week".
- Honest framing: "A Tuesday at Harbor Dental, if every message got answered".
- The name goes in via textContent only, capped at 32 chars, with the niche skin as fallback.
- A personalised GIF thumbnail goes in the email.

Note: dental/medical in the US needs a HIPAA-aware setup (BAA). Keep film messages clearly illustrative.
