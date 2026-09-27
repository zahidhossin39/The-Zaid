# Gyms and studios: numbers, competitors, websites, offers, compliance (Claude lane, sections 4-9)

Researched 2026-09-27. Tags: **[vendor]** = claim from a company selling into gyms (biased). **[unverified]** = from memory or a single weak source, check before quoting to a prospect.

---

## A. Key numbers

### Market size (how many to sell to)
| Country | Count | Source |
|---|---|---|
| USA | 107,751 gym/health/fitness club businesses (2026, includes tiny operators); other counts put "facilities" at 41k-55k | [IBISWorld US](https://www.ibisworld.com/united-states/number-of-businesses/gym-health-fitness-clubs/1655/), [Statista](https://www.statista.com/statistics/244922/us-fitness-centers-und-health-clubs/) |
| USA members | 80M+ members (2025) | [Statista](https://www.statista.com/statistics/236123/us-fitness-center-health-club-memberships/) |
| UK | 7,200+ gyms (2025), 11.3M members, 16.9% penetration | [ukactive 2025 report](https://ukactive.com/news/uk-health-and-fitness-market-report-reveals-exponential-growth-as-penetration-rate-hits-16-9-and-revenue-grows-8-8/) |
| Canada | 9,369 gym/fitness club businesses (2025) | [IBISWorld Canada](https://www.ibisworld.com/canada/number-of-businesses/gym-health-fitness-clubs/1655/) |
| Australia | 8,590 gym/fitness centre businesses (2026) | [IBISWorld AU](https://www.ibisworld.com/australia/number-of-businesses/gyms-fitness-centres/658/) |

Note: the UK 7,200 figure counts clubs, not boutique studios, so real UK studio count is higher. [unverified gap]

Size split (rough, for targeting): most US businesses are single-location independents; the 200-800 member independent (CrossFit box, boutique studio, independent gym) is the sweet spot: enough revenue to pay, owner still decides. [unverified, inference]

### Retention and churn
- Industry annual retention 66.4% (HFA 2025), so about 1 in 3 members leave each year. The often-quoted 71.4% is a 2015 number. [Nutripy](https://nutripy.io/blog/gym-retention-rate-benchmarks-2026) [vendor]
- Annual churn 30-40%, up to 50% at some gyms; ~50% of new members quit within 6 months (attributed to IHRSA). [Gymdesk](https://gymdesk.com/blog/gym-membership-statistics) [vendor]
- Top cancel reasons: not using it enough (46%), money (22%), moving (15%). [Jeri Commerce](https://blog.jericommerce.com/resources/gyms-fitness-studios-retention-statistics) [vendor, attributes to IHRSA]
- Onboarded members: 87% six-month retention vs ~60% for controls. Same source. [vendor]
- Retention gap between best and worst gyms is ~50 points. [Jetti](https://jetti.com/gym-retention-benchmarks) [vendor]

### Member value (LTV)
- LTV = average revenue per member (ARM) x length of engagement (LEG).
- Industry average LEG 7.8 months; Two-Brain gyms average 20.7 months. Top gyms: client worth $8,000-$11,000+. [Two-Brain: By the Numbers](https://twobrainbusiness.com/lifetime-value/) [vendor, consultancy]
- Two-Brain target: 150 clients x $205 ARM x 13 months LEG = owner earns ~$100k/yr. [Two-Brain metrics](https://twobrainbusiness.com/gym-metrics/)
- Working numbers for pitching: big-box member ~$40/mo x 8 mo = ~$320; boutique/CrossFit member $150-$205/mo x 12-20 mo = **$1,800-$4,000**. One saved member pays for a month of Zaid's service. [inference from above]

### Leads and conversion
- Meta (FB/IG) cost per lead: $14-$20 traditional gyms, $32-$52 PT/boutique studios; overall range $10-$52. [Web Tonic](https://www.webtonic.io/blog/fitness-facebook-ads-statistics) [vendor]
- Other CPL benchmarks: industry $15-$25. [Superads](https://www.superads.ai/facebook-ads-costs/cost-per-lead/fitness-training-centers), [EXOD](https://www.exod.ai/industries/gym) [vendor]
- Without fast follow-up, gyms end up paying $60+ per lead that never joins. [Keepme](https://www.keepme.ai/blog/gym-lead-generation-do-paid-ads-add-up) [vendor]
- Trial-to-member target 30-50%; show-up rate target 70%+ with reminder automation. [Optimized Growth](https://optimizedgrowth.com/blog/facebook-ads-for-gyms/) [vendor]
- Two-Brain paid ads guide (benchmarks for booked/showed/closed): [Two-Brain paid ads](https://twobrainbusiness.com/paid-ads-guide/)
- Funnel math for the pitch: 100 leads x 50% booked x 70% show x 40% close = **14 members**. Lift booked-rate to 65% with instant reply, and you get ~18. At $2,500 LTV that's +$10k from the same ad spend. [inference]

### Speed to lead
- No gym-specific study found. The standard cross-industry evidence: firms replying within an hour were ~7x more likely to qualify the lead than those replying later; average reply time was 42 hours (HBR, 2011). [HBR "The Short Life of Online Sales Leads"](https://hbr.org/2011/03/the-short-life-of-online-sales-leads) [cross-industry, not gym]
- "Contact within 5 minutes = 21x more likely to qualify" (InsideSales/MIT). [unverified, widely quoted, original study hard to find]

---

## B. Competitor map (real prices)

### Booking and membership software (the systems Zaid plugs into, not competes with)
| Platform | Who uses it | Price | API / webhooks | Source |
|---|---|---|---|---|
| **Mindbody** | yoga, pilates, boutique, spas | $129 Starter to $349 Accelerate/mo, enterprise custom ("from $99" is 1 tier, 0 add-ons) | Public API v6 (metered calls, partner approval, fees) + free webhooks | [Vibefam](https://vibefam.com/mindbody-pricing/), [Mindbody webhooks](https://developers.mindbodyonline.com/WebhooksDocumentation), [Carly](https://www.usecarly.com/blog/mindbody-api/) |
| **Glofox (ABC Glofox)** | boutique, gyms, franchises | ~$110/mo solo to $200-$600+/mo | API + webhooks, gated: request access by email to ABC | [StudioGrowth](https://studiogrowth.com/glofox-momence/), [Glofox dev portal](https://apidocs-plat.aws.glofox.com/request-access/) |
| **PushPress** | CrossFit, functional, gyms | Core Free $0, Pro $159, Max $229; Grow (CRM) +$329; app +$97 | REST API v3 + signed webhooks, TS SDK, Zapier | [PushPress pricing via Wodify](https://www.wodify.com/blog/pushpress-pricing-plans), [PushPress SDK](https://github.com/PushPress/pushpress-ts) |
| **Wodify** | CrossFit boxes | from $79/mo, higher tiers custom | Public REST API (x-api-key), plus new MCP connector | [Wodify API](https://docs.wodify.com/), [Wodify MCP](https://www.wodify.com/blog/wodify-mcp-connector-api-access) |
| **Zen Planner** | CrossFit, martial arts, gyms | $99-$289+/mo by member count; website +$99, Engage +$249 | Limited/partner API [unverified] | [Zen Planner pricing](https://zenplanner.com/pricing/), [Exercise.com](https://www.exercise.com/grow/how-much-does-zen-planner-cost/) |
| **Arketa** | yoga, pilates, boutique | Individual $49-$124/mo; Studio tiers quoted | Zapier / limited API [unverified] | [Vibefam](https://vibefam.com/arketa-vs-mindbody/) |
| **Momence** | yoga, pilates, dance, wellness | Not published; Capterra users report $250-$2,000+/mo | Public API (Host API + Member API) | [Vibefam](https://vibefam.com/momence-pricing-2026/), [Momence API](https://api.docs.momence.com/) |
| **Walla** | boutique studios | Starter $220/mo | Partner integrations [unverified] | [Gymdesk cost guide](https://gymdesk.com/blog/gym-management-software-cost) |
| **Mariana Tek** | premium boutique (multi-site) | $179-$285/mo per location + add-ons | Full API + webhooks (best documented) | [Mariana webhooks](https://guides.marianatek.com/webhooks), [Gymdesk](https://gymdesk.com/blog/gym-management-software-cost) |
| **TeamUp** | small studios, UK/EU heavy | ~$99 to ~$279+/mo | API available [unverified] | [Gymdesk](https://gymdesk.com/blog/gym-management-software-cost) |
| **Gymdesk** | martial arts, small gyms | ~$75 (50 members) to ~$150 (1,500)/mo | Zapier/webhooks [unverified] | [Gymdesk](https://gymdesk.com/blog/gym-management-software-cost) |
| **ClubReady** | franchises (big-box, mid-market) | Quote only | Partner API [unverified] | none found |

**Integration takeaway:** easiest to build on are PushPress, Wodify, Mariana Tek, Momence, Mindbody (webhooks free, API calls cost). Glofox needs an access request. For the others, start with Zapier or no integration (just sending a booking link).

### Gym marketing agencies and GoHighLevel "gym snapshots" (Zaid's real competitors)
- GoHighLevel itself: $97 / $297 / $497 per month. [TopGHLSnapshots](https://topghlsnapshots.com/gohighlevel-pricing/)
- Gym snapshot (pre-built funnels/workflows): $997 one-off (marked down from $1,697), plus the owner's own GHL subscription. [TopGHLSnapshots gym snapshot](https://topghlsnapshots.com/product/gym-and-fitness-snapshot/) [vendor]
- Agencies resell GHL to gyms at **$297-$597/mo per location**, plus **$500-$3,000 setup**. [NetPartners](https://netpartners.marketing/gohighlevel-agency-pricing-guide/) [vendor]
- PushPress Grow (its own CRM/marketing add-on) at $329/mo sets the price anchor: owners already see ~$300/mo as normal for "marketing automation". [Wodify on PushPress](https://www.wodify.com/blog/pushpress-pricing-plans)
- Gym Launch / Gymleadmachine-style "done for you ads" programs: usually $1,000-$3,000/mo plus ad spend. [unverified, no public price page found]

### AI front-desk tools for gyms
- General price range: $79-$300/mo for general AI receptionists; fitness-specific ones $500+. [South Arc Digital](https://www.southarcdigital.com/journal/ai-receptionist-for-gyms-and-fitness-studios-cost-roi-2026) [vendor]
- **Replify:** from $300/mo per location; phone, text, email, chat, outbound sales calls, collections. Named clients: Gold's Gym, UFC Gym, F45. [Replify buyer's guide](https://www.replify.ai/ai-sales-service-blog/best-ai-for-gyms-complete-buyers-guide) [vendor]
- **Keepme (UK):** Antares agent platform for multisite operators (sales, voice, member services, cancellation-saves). Enterprise pricing. [Keepme Antares](https://www.keepme.ai/antares) [vendor]
- Others: AgentZap, RhinoAgents, Whippy. [AgentZap](https://agentzap.ai/industries/gym), [RhinoAgents](https://www.rhinoagents.com/voice-ai-agents/gyms), [Whippy](https://www.whippy.ai/blog/voice-ai-receptionist-fitness-centers)
- Takeaway: enterprise players go after chains. Independents with 200-800 members are underserved by setups that are done for them and use their existing software.

---

## C. Websites: what goes wrong and what converts

**Common failures** (from website guides plus pattern observation [partly inference]):
1. No price shown ("contact us for pricing"). Prospects leave or DM, and the DM goes unanswered.
2. Schedule hidden in an iframe widget (Mindbody or Glofox) that's slow on mobile or has no branding.
3. No single intro offer. Hero says "Welcome to our community" instead of "First week $29".
4. Booking takes you to a third-party app login before the lead is captured.
5. No Google Business Profile link, no reviews on the page, stale class photos.
6. Cancellation terms buried. That's now a legal risk too (section E).

**What converts:**
- One clear intro offer in the hero (for example "30 days for $65"), with Schedule and Pricing in the top nav. [Gymdesk website examples](https://gymdesk.com/blog/9-gym-website-ideas-what-makes-a-good-gym-website) [vendor]
- Schedule, Pricing, FAQ, First Visit and Contact all one click away. Same source.
- Intro offer as a class pack or short membership (not a single free class) gives time for the community to hook them. [Mariana Tek intro offers](https://www.marianatek.com/blog/intro-offers-that-convert-four-key-tips-for-boutique-fitness-studios/) [vendor]
- Capture name and phone first, then book, then run automated reminders and follow up after the trial. [Mindbody](https://www.mindbodyonline.com/business/education/blog/visitors-members-retention) [vendor]
- "No-sweat intro" (free consult) is the CrossFit/Two-Brain norm; boutique studios use paid intro packs. [inference]

---

## D. Offer packages (priced against the competitors above)

Anchors: GHL agencies $297-$597/mo + $500-$3k setup; PushPress Grow $329/mo; Replify $300/mo; snapshot $997 one-off.

| | **Starter: "Never miss a lead"** | **Core: "Leads to members"** | **Premium: "Full front desk"** |
|---|---|---|---|
| For | solo-owner studio | established single site (200-800 members) | multi-location / franchisee |
| What | Instant reply to IG/FB DMs, web form and missed calls by SMS; booking link; 3-touch intro-offer reminder sequence | Starter + AI voice agent (answers, books trial, FAQs, pricing) + no-show rescue + post-trial close sequence + review requests + win-back for lapsed members | Core + per-location voice/chat, failed-payment (dunning) outreach, cancel-save flow (compliant), weekly KPI report (leads, booked, showed, joined), website rebuild |
| Setup | $500-$900 | $1,500-$2,500 | $3,000-$6,000 |
| Monthly | $197-$297 | $397-$597 | $400-$700 per location (volume discount) |
| Site add-on | Conversion website $1,500-$3,000 one-off, or $99-$149/mo hosted + edits | | |

Why this pricing: it sits inside the price range owners already pay agencies ($297-$597), and undercuts the fitness AI vendors ($300+ for voice alone) while doing more for them. **ROI line:** Core at $497/mo = about 2 boutique members per year at $2,500 LTV.

Guarantee idea: "10 extra booked intros in 60 days or month 3 free." [idea, untested]

---

## E. Compliance (practical, not legal advice)

### USA
- **FTC click-to-cancel:** the federal rule was vacated by the 8th Circuit (July 2025). FTC restarted rulemaking with an ANPRM on 11 Mar 2026 (comments closed 13 Apr 2026). No federal rule is in force today, but the FTC still sues under ROSCA/FTC Act: it sued LA Fitness operators (Aug 2025) over hard cancellations. [Arnold & Porter](https://www.arnoldporter.com/en/perspectives/advisories/2026/02/ftc-and-state-ags-continue-to-scrutinize-subscription-practices), [Goodwin](https://www.goodwinlaw.com/en/insights/publications/2026/02/alerts-practices-ba-ftcs-click-to-cancel-rule-gets-new-life)
- **State auto-renewal laws:** California's amended ARL (AB 2863, in force July 2025) requires online cancellation if you joined online, a way to cancel in one step, and annual reminders; New York, Minnesota, Virginia and others have similar rules. Many states also have health-club-specific statutes (cooling-off periods, contract length caps, bonding). [unverified detail, check per state]
- **Practical rule for anything Zaid builds:** if a member joined online, they can cancel online. A "save" offer is fine, but it must be skippable (the cancel flow can't route them into an AI call they can't get out of). Get the gym's written sign-off on any cancel-flow script.
- **TCPA / SMS:** the FCC "one-to-one consent" rule is dead (vacated by the 11th Circuit; FCC formally dropped it Aug 2025). Marketing texts still need prior express written consent: a checkbox on the form, not pre-ticked, with STOP/HELP handling and quiet hours. [Goodwin TCPA](https://www.goodwinlaw.com/en/insights/blogs/2025/09/the-fcc-issues-final-rule-formally-eliminating-the-one-to-one-consent-requirement), [Womble Bond Dickinson](https://www.womblebonddickinson.com/us/insights/blogs/fcc-repeals-one-one-consent-rule-following-eleventh-circuit-decision)
- **A2P 10DLC** registration is required for business SMS in the US (a GHL snapshot seller prices it at $150). [TopGHLSnapshots](https://topghlsnapshots.com/product/gym-and-fitness-snapshot/)
- AI voice: outbound AI-voice calls count as "artificial voice" under the TCPA (FCC 2024 ruling), so they need prior express consent. Inbound answering is fine. Call-recording consent: about 11 states require all parties to agree (CA, FL, IL, WA...), so play a disclosure. [unverified detail]

### UK
- **DMCC Act subscription regime:** covers memberships (pre-contract info, renewal reminders, easy exit, cooling-off). Start date pushed back to **Spring 2027**. [Taylor Wessing](https://www.taylorwessing.com/en/insights-and-events/insights/2026/04/subscription-contracts), [ClubWise on gyms](https://www.clubwise.com/clubwise-blog/what-the-dmcc-act-means-for-your-gym/)
- Build the reminder and easy-cancel flows now and sell them as "DMCC-ready". [idea]
- Marketing SMS/email: PECR plus UK GDPR. Opt-in needed, except the "soft opt-in" for existing customers. [unverified detail]

### Australia
- Unfair contract terms have carried civil penalties since 10 Nov 2023. The ACCC expects cancelling to be as easy as signing up, and has warned gyms about "no contracts" advertising. [ACCC](https://www.accc.gov.au/media-release/accc-warns-gyms-about-no-contracts-membership-advertising), [Sprintlaw](https://sprintlaw.com.au/articles/accc-gym-membership-cancellation-rules-and-compliance/)
- SMS: the Spam Act 2003 requires consent, sender ID and an unsubscribe option. [unverified detail]

### Canada
- Provincial consumer protection acts (for example Ontario CPA) regulate gym contracts; CASL requires express consent for commercial texts and emails. [unverified detail]

---

## F. Gaps to fill (other lane or later)
- Real speed-to-lead data specific to gyms (none found).
- ClubReady, Walla, TeamUp, Gymdesk API details (vendor docs not checked).
- Owners' own quotes on pricing pain (Reddit lane).
