# Hero visual style: research and decision

Date: 2026-09-23. Supersedes the clay direction in `HERO_VIDEO_BLUEPRINT.md` (clay ruled out by Zaid as reading like a cartoon to busy owners). The storytelling logic from that blueprint (one problem, one outcome, final frame readable on its own, no invented results) carries over.

## How the research was run

Two independent tracks, run in parallel so their conclusions could be compared.

- **Claude research swarm.** Five search agents, each given one angle: hero sections in the wild, conversion evidence, style perception, outcome communication, solo production feasibility. Sources were fetched and every claim went through a three-vote adversarial check. 100 of 105 agents completed. The final synthesis step hit a usage limit, so synthesis below was done by hand from the verified claims.
- **Gemini (Antigravity), independently**, with the same brief and no access to the swarm.

## What the evidence actually supports

Verified claims (vote in brackets). These are principles, not style-by-style conversion data. Nobody has published solid data on "papercraft vs UI" for small-business buyers. Most agency-blog claims about specific styles converting better were refuted for lack of evidence.

1. **One message per hero.** When hero content rotates, each item is only on screen for its share of the time. In the NN/g Siemens test, a key deal was visible only 20% of the time. (3-0, [NN/g](https://www.nngroup.com/articles/auto-forwarding/))
2. **The first frame decides.** Visual appeal is judged within about 50 ms. The resting frame or poster must look credible with no motion at all. (3-0, [Lindgaard et al.](https://www.tandfonline.com/doi/abs/10.1080/01449290500330448))
3. **Visible AI hurts trust.** In Clutch's June 2026 survey of 408 consumers, 33% said visible AI use made them think less of a brand and 16% said more. (2-1, [Clutch](https://clutch.co/resources/ai-in-branding))
4. **Animation is not a conversion lever by itself.** Instapage's A/B test swapping static hero images for MP4 animations found no significant difference. (3-0, [Instapage](https://instapage.com/blog/ab-testing-homepage-part-2/))
5. **The headline and CTA do the most work**, and the hero visual supports them. (2-1, [Omniconvert](https://www.omniconvert.com/blog/hero-section-examples/))
6. **The market has moved from illustration to showing the product working.** SaaS companies moved away from generic illustration toward interface-as-design. (3-0, [Webflow](https://webflow.com/blog/corporate-memphis)) Animated UI previews let visitors see the thing work before clicking. (3-0, [Omniconvert](https://www.omniconvert.com/blog/hero-section-examples/))
7. **Illustration is a credibility gamble.** Even a well-made custom illustration set does not guarantee credibility, and flat "Corporate Memphis" is the most abused B2B style. (2-1 and 3-0, [Beneath](https://beneathagency.com/blog/for-great-b2b-brand-illustrations-start-with-your-story/))

## Where Claude and Gemini agreed and disagreed

**Agreed independently:** interface-based, outcome-first, non-illustrative styles win. Papercraft, isometric 3D, editorial collage and flat illustration lose.

**Disagreed:**
- Gemini's #1 was a data-viz chart with a "+312%" figure. With no clients, that number would be invented, and an invented result is the fastest way to lose a skeptical owner. A rising line also shows growth without showing what Zaid does. Demoted.
- Gemini proposed a side-by-side split screen. The real slot is 316 x 176 px, so each half would be 158 px wide. Converted to a sequential before/after.
- Gemini put kinetic UI third, as a video. Promoted to first and moved from a video file to live code (reasons below).
- Gemini assumed a dark hero. The actual hero section is white.

## Longlist, first-pass scores

Criteria /10: **Cred** professional credibility, **Clar** outcome clear in 3s silent, **Fit** SMB and founder audience, **Solo** solo feasibility, **Slop** slop immunity, **Craft** proves Zaid can build (the site has no clients, so craft is the only proof).

| # | Style | Cred | Clar | Fit | Solo | Slop | Craft | Avg |
|---|---|---|---|---|---|---|---|---|
| 1 | Live coded working sample | 9.0 | 8.5 | 9.0 | 9.5 | 10 | 10 | 9.33 |
| 2 | Before/after UI transformation | 9.0 | 9.5 | 9.5 | 9.0 | 9.5 | 8.0 | 9.08 |
| 3 | Still outcome composition | 9.5 | 9.0 | 9.0 | 10 | 10 | 7.0 | 9.08 |
| 4 | Kinetic UI rendered to MP4 | 9.0 | 8.5 | 9.0 | 9.0 | 9.5 | 9.0 | 9.00 |
| 5 | Split screen, side by side | 8.5 | 9.0 | 9.0 | 9.0 | 9.0 | 7.5 | 8.67 |
| 6 | Data-viz storytelling | 9.0 | 8.0 | 8.0 | 9.5 | 9.5 | 7.0 | 8.50 |
| 7 | Kinetic typography | 8.5 | 7.5 | 7.0 | 10 | 10 | 6.5 | 8.25 |
| 8 | Screen recording | 7.5 | 6.0 | 7.0 | 9.0 | 10 | 8.0 | 7.92 |
| 9 | Abstract motion graphics | 8.5 | 4.0 | 6.0 | 8.5 | 8.0 | 6.0 | 6.83 |
| 10 | Papercraft | 7.0 | 7.0 | 6.5 | 6.0 | 5.5 | 5.5 | 6.25 |
| 11 | Editorial collage | 7.0 | 4.0 | 5.0 | 7.0 | 6.0 | 5.0 | 5.67 |
| 12 | Flat illustration | 5.0 | 6.0 | 5.5 | 7.0 | 5.0 | 4.5 | 5.50 |
| 13 | Isometric / abstract 3D | 7.0 | 3.0 | 4.5 | 5.0 | 4.0 | 5.0 | 4.75 |

Scores are judgment informed by the evidence above, not measurements.

**Why the two named candidates lost.** Papercraft is illustration, so it carries the same "cartoon" objection as clay (claim 7). Making it with AI adds the trust penalty in claim 3, and doing it well by hand is slow. "Motion graphics" is a technique rather than a style. The winning options below are all motion graphics, made from interface elements instead of shapes or illustrations.

## Iteration to 9.5

Only #1 started close. These are the changes that lifted each of the top three, and why.

- **#1 (9.33 to 9.67).** The UI is written in the owner's words, not software words. Its resting state reads in 50 ms: "Waiting on you: 0". It carries one message (claim 1). Caption: "A working sample of what I build."
- **#2 (9.08 to 9.50).** Built in live code instead of rendered video, which raises Craft and keeps text sharp at 316 px. The before and after play in sequence, not side by side. The poster and resting frame is the "after" state (claim 2). The numbers count items in the sample, never client results.
- **#3 (9.08 to 9.50).** Built as real HTML UI rather than an image, so it is still proof of craft. It moves only on hover, with the same clearing animation. It is the cheapest option, the fastest to load, and has zero risk. Claim 4 says motion was never the conversion lever.

## Top 3

### 1. Live working sample (recommended), 9.67
Not a video. A small real interface built in HTML/CSS/GSAP (gsap is already installed), sitting where the video was. A short stack of messages any owner recognises ("Can I book Saturday 10:30?", "Has invoice #212 been paid?", "Do you deliver on Sundays?") gets handled one by one. Each card gets an amber tick and settles as handled, and a counter lands on **Waiting on you: 0**. It plays once and holds, and replays on hover.
- **Why it wins.** It is the only option where the hero itself proves he can build. There are no AI images, so the trust penalty in claim 3 does not apply. Text stays sharp at any size. There is no video file to load. Reduced motion is easy to support.
- **Main risk.** It could read as a SaaS product for sale. The caption and headline must make clear he builds this for the visitor. It also has to look crafted, not like a template.

### 2. Before/after transformation, 9.50
The Pile story told in interface form. For 0 to 2s, the owner's mess appears as UI: a cluttered spreadsheet, a "23 unread" badge, overdue reminders. Then one hard cut to a single calm view: "Nothing waiting on you." It holds.
- **Why.** Contrast is the fastest silent way to show an outcome, and it keeps the problem-then-outcome story already developed.
- **Main risk.** Visitors who look over late miss the "before", so the resting frame has to carry the message alone.

### 3. Still outcome composition, 9.50
One crafted real-HTML UI frame showing the calm "after" state. No autoplay. It animates only on hover.
- **Why.** It matches the evidence most closely: first frame is everything, motion does not move conversion, headline and CTA carry the page. Lowest effort and fastest load.
- **Main risk.** It is the least arresting of the three, and it leans entirely on the headline, which claim 5 says does that job anyway.

## Open decision for Zaid

Pick one of the three. Options 1 and 3 are HTML, not video, so they are not locked to the 316 x 176 video size, and the slot can be resized. The next step, once one is chosen, is a focused research pass on that style: strong real-world examples, and which owner problems and outcomes land best.
