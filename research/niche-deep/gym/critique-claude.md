# Claude critique of gemini.md (gyms and studios)

Short version: gemini.md reads well but can't be quoted to an owner as it stands. Almost every "source" is a homepage, a subreddit root or a vendor, and its one legal claim is out of date.

## 1. Legal error (the worst one)
- **"The FTC mandates that canceling ... must be as easy as signing up."** Wrong. The 8th Circuit **vacated the click-to-cancel rule on 8 July 2025** ([Sidley](https://www.sidley.com/en/insights/newsupdates/2025/07/us-ftc-click-to-cancel-rule-struck-down)). The FTC restarted rulemaking in 2026 (ANPRM, 11 Mar 2026) but no federal rule is in force ([Goodwin](https://www.goodwinlaw.com/en/insights/publications/2026/02/alerts-practices-ba-ftcs-click-to-cancel-rule-gets-new-life)). Easy-cancel duties today come from **state auto-renewal laws** (for example California AB 2863), from ROSCA/FTC Act enforcement (the FTC sued LA Fitness in Aug 2025), and from UK/AU consumer law. Pitching "the FTC requires this" is false and easy for an owner to check.
- No UK (DMCC, PECR), Australia (ACCC, Spam Act) or Canada (CASL, provincial acts) notes at all, though the brief asked for them.
- "Double opt-in" is not a TCPA requirement. What's required is prior express **written** consent for marketing texts, plus STOP handling and A2P 10DLC registration.
- Outbound AI voice calls count as "artificial voice" under the TCPA (FCC 2024). gemini never says this, but its Premium tier implies outbound voice.

## 2. Unsourced or fake-sourced stats
| Claim in gemini.md | Problem |
|---|---|
| "Conversion drops 80% after 5 mins", "leak 80% of leads" | No source. Not in any cited study. |
| "21x less likely to qualify" | Unsourced; the original InsideSales/MIT study is hard to trace and is B2B, not gyms. |
| "391% increase" ([DialRaven](https://www.dialraven.com/)) | Vendor homepage, and the vendor sells AI voice. Circular. |
| "Front desk turnover 40-80%, replacement 50-200% of salary" | Cites [ReWork](https://rework.com/) homepage. No gym data. |
| "Staffing = 35-50% of revenue" | No source. |
| Reddit "quote" | Links to the [r/gymowners](https://www.reddit.com/r/gymowners/) root, not a post. It is a paraphrase, not a quote. |
| "No-shows down 35%" ([AutomatePlanet](https://www.automateplanet.com/)) | Homepage. Not gym data. And it's baked into gemini's "guarantee". |
| "Unmanaged no-show rate 20-22%" | No source. |
| "3-5% of revenue lost to failed payments" | Flagged unverified by gemini itself, then used anyway. |
| "Google reviews ... via Reddit" ([r/fitnessbusiness](https://www.reddit.com/r/fitnessbusiness/)) | Subreddit root. No such analysis exists at that link. |
| "80%+ of gym traffic is mobile" | No source. |
| "Front desk costs $2,500/mo and turns over every 8 months" | Made up for the objection answer. |

## 3. Pricing errors
- **Mindbody "$139-$699+/mo"**: published tiers found by Claude are **$129-$349/mo**, enterprise custom ([Vibefam](https://vibefam.com/mindbody-pricing/)). (Owners do report bills over $1,000 CAD with add-ons.)
- **Wodify "$99+"**: from **$79/mo** ([Wodify](https://docs.wodify.com/) / Wodify pricing).
- **Zen Planner "$99-$577+"**: listed **$99-$289+** plus add-ons ([Zen Planner](https://zenplanner.com/pricing/)).
- **PushPress "free core, paid add-ons"**: misses the prices that matter: Pro $159, Max $229, **Grow CRM +$329** (the real price anchor).
- **Gym Lead Machine "$299-$399/mo"** and **Voka.ai / DialRaven "$100-$300/mo"**: no source.
- **"API requires $297 GHL tier"**: unverified.
- **Premium at $997-$1,497 with unlimited voice**: no minute cap, so one busy gym eats the margin. Custom Mindbody/Glofox API work at that price will burn Zaid out.

## 4. Strategy errors
- Integrations called **"Easy (Zapier + GHL snapshot)"**. Mindbody's API is metered with partner fees; Glofox needs an access request. Two-way sync is medium to hard.
- Treats CrossFit (free 1-on-1 "No Sweat Intro") and yoga/pilates (paid intro packs, 20-30 mat classes) as one market. The opener "15 intro sessions" only fits CrossFit/PT-style gyms.
- Leads with lead gen. Retention and win-back are as big, and 46% of cancels are "not using it enough" (IHRSA via secondary source).
- Guarantees a number ("35% fewer no-shows") that Zaid can't measure in the first month and that came from a homepage.
- Objection list misses the ones gym owners actually say: "I answer DMs myself", "tried an agency", "members want a human".
- No WhatsApp for UK/AU.

## 5. What gemini got right (keep)
- Morning and evening rush as the moment calls and DMs are missed.
- Waitlist blast when someone late-cancels.
- Dunning framed as removing an awkward front-desk conversation.
- Wrapper, not replacement, for Mindbody/PushPress.
- Its own critique: vendor stats are circular, voice needs a usage cap, split the pitch by sub-niche, and Claude's 70% show-rate funnel was too rosy (Two-Brain's *best* gyms show 24-57%).
