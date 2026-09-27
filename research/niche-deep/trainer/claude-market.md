# Trainers and coaches: numbers, competitors, websites, offers, compliance (Claude lane)

Scope: independent PTs and online fitness/nutrition coaches (not gyms). Covers PROMPT.md sections 4-9 plus the numbers.
Tags: **[vendor]** = claim from a company selling in this space (biased). **[unverified]** = from memory or a thin source, check it before quoting.

---

## 0. The numbers

### Trainer counts
| Market | Figure | Source |
|---|---|---|
| US | BLS "fitness trainers and instructors": median pay $47,160 (May 2025); bottom 10% <$28,800, top 10% >$83,100; +7% growth 2025-35; ~68k openings/yr | https://www.bls.gov/ooh/personal-care-and-service/fitness-trainers-and-instructors.htm |
| US (PTs only) | ~117,900 personal fitness trainers employed (Zippia estimate) **[unverified]**. BLS headcount for the whole category is much larger (~370k+ in earlier releases) **[unverified, check BLS tab]** | https://www.zippia.com/personal-fitness-trainer-jobs/demographics/ |
| UK | 24,856 PT *businesses* (2025, +3.7% YoY); market £826.2m | https://www.ibisworld.com/united-kingdom/number-of-businesses/personal-trainers/6042/ , https://www.ibisworld.com/united-kingdom/market-size/personal-trainers/6042/ |
| UK | ~67,400 fitness and wellbeing instructors employed (Dec 2025) | https://www.statista.com/statistics/319319/number-of-fitness-instructors-in-the-uk/ |
| Australia | Only a directory count (5,866 listed PT businesses, 2026). Real headcount much higher; see Jobs and Skills Australia occupation 4521 **[unverified]** | https://rentechdigital.com/smartscraper/business-report-details/list-of-personal-trainers-in-australia , https://www.jobsandskills.gov.au/data/occupation-and-industry-profiles/occupations/4521-fitness-instructors |

### Income distribution
- Median employed trainer earns ~$47k (BLS above). Most are poor buyers.
- "81% of online personal trainers earn below $60k/yr"; coaches with 100+ online clients average ~$127.6k **[vendor, aggregator stat, unverified method]** https://gymkee.com/blog/online-personal-trainer-salary/
- Coach income is a function of clients x price x retention: https://coachway.io/articles/how-much-do-online-fitness-coaches-make/ **[vendor]**
- No solid public survey for "% of coaches under $1k/mo" found. Don't quote one.
- Takeaway: target the top ~10-20% (full book or online team, $5k+/mo). Everyone else is price-shopping $20-100/mo tools.

### Client retention / LTV
- Online coaching retention: 94% at month 1, 82% at month 3, 65% at month 6, 45% at month 12 **[vendor, first-party platform data]** https://coachway.io/articles/online-fitness-coaching-statistics/
- 10% monthly churn = ~10-month average client; 5% = ~20 months. https://coachway.io/tools/client-churn-rate-calculator/ **[vendor]**
- Worked LTV: online client at $200/mo x ~8-10 months = **$1,600-2,000**. In-person 2x/week at $70/session ≈ $600/mo; x ~6-12 months = **$3.6k-7k** (arithmetic, not a sourced stat).
- For contrast, gym members: ~3-5% monthly churn https://blog.jericommerce.com/resources/gyms-fitness-studios-retention-statistics **[vendor]**

### Lead -> call -> client conversion
- Booked-call show rate: ~57% average, 65% good, 45% weak; a 60-min SMS reminder adds 8-12 points **[vendor/agency]** https://www.780marketing.ca/articles/cost-per-booked-call-benchmarks
- Discovery call close rate: 10-30%, top coaches >30% **[agency]** same source
- Paid-ads cost per booked call: $150-350 **[agency]** same source
- Application step raises cost per call but also call quality and close rate **[agency]** same source
- Worked example: 100 DM conversations -> ~20 booked calls -> ~11-13 show -> 3-4 clients (arithmetic using the benchmarks above, **[unverified]**)

### IG DM lead volume
- No credible public stat found for how many DMs a typical trainer gets. Vendor blogs claim a lot but don't give numbers. **Gap: ask real trainers** (Gemini lane / Reddit quotes).
- Sensible ask on discovery calls: "How many new DMs a week? How many turn into calls?"

---

## 4. Website and link-in-bio pains, what converts

**What trainers actually use:** Linktree / Stan Store link-in-bio, a Squarespace/Wix/Carrd one-pager, Kajabi if they sell courses, GoHighLevel funnels if they run ads. Most solo PTs have **no real site**. The Instagram bio is the site.

**Common pains (the parts Zaid can fix):**
1. Link-in-bio with 8 links and no single next step. The visitor has nothing obvious to do.
2. No price signal at all, so every DM starts with "how much?" and the coach spends their time answering it.
3. The booking link goes to raw Calendly with no qualifying questions. No-shows and tire-kickers follow.
4. Results claims with no context ("lose 20lb in 30 days"). This is an FTC risk (section 7).
5. No proof section, or before/after photos with no story behind them.
6. Stan Store costs $29-99/mo, plus payout friction some users complain about **[third-party]** https://cartmango.com/stan-store-pricing/

**What converts, by business size:**
- **Solo in-person PT:** a one-page site with location, a "starting at $X/session" price, a first-session offer, Google reviews and direct booking. Local SEO (Google Business Profile, "personal trainer near me") beats IG for in-person work.
- **Online coach at $150-400/mo:** a short application form, then either a calendar or DM. Show a "from $X" price anchor to filter out cheap leads. Use testimonials with context.
- **High-ticket coach ($1.5k-5k programs):** VSL, then an application, then a qualified calendar with SMS reminders. The application step trades volume for quality **[agency]** https://www.780marketing.ca/articles/cost-per-booked-call-benchmarks
- **Pricing on the page:** show "from" prices, or at least ranges, for in-person and low-ticket offers. Hide the full price only for high-ticket offers sold on a call. (This is opinion. Test it per client.)

---

## 5. Competitor map (real prices)

### Coaching apps (delivery, not lead-gen)
| Tool | Price | API / integration | Source |
|---|---|---|---|
| Trainerize (ABC) | Starter $26.98 (5 clients), ~$69.98 (20), $164.98 (50), billed annually; AI meal plans +$45/mo; branded app $199 one-off | Zapier from the Grow plan; partner API for enterprise **[unverified]** | https://assistantcoach.fit/blog/real-cost-fitness-coaching-software/ **[vendor-competitor]** |
| TrueCoach | $20 (5), $53 (20), $107 (50) | Zapier on Standard and above; API key in settings | https://help.truecoach.co/en/articles/8688374-zapier-integration |
| Everfit | Free (5 clients), Pro from $19, Studio from $105; paid add-ons for automation, meal plans and payments | Zapier is a paid add-on and has only 1 trigger | https://www.fitbudd.com/insights/everfit-vs-trainerize-vs-truecoach , https://hubfit.com/blog/which-platform-has-the-best-zapier-integration-for-online-coaches-personal-trainers **[vendor-competitor]** |
| PT Distinction | ~$89.90/mo for 50 clients, flat pricing | Zapier **[unverified]** | https://www.ptdistinction.com/pt-distinction-trainerize-everfit-truecoach-comparison **[vendor]** |
| Kahunas | $35 (25 clients), $69 (50), $99 (unlimited) | Limited **[unverified]** | https://coachway.io/articles/kahunas-pricing/ |
| My PT Hub | $40 Starter (3 clients), $105 Premium, $329 Ultimate | Zapier/API **[unverified]** | https://www.quickcoach.fit/my-pt-hub-pricing-2026.html |

**API verdict:** none of these offer a proper open REST API to small accounts. Zapier is the practical route: **TrueCoach > Trainerize > Everfit**. Build lead-gen and booking **upstream** of the app (DM, form, calendar, payment) and push only "new client created" into it through Zapier. Don't sell anything that needs deep app integration.

### Storefronts / funnels
| Tool | Price | Source |
|---|---|---|
| Stan Store | $29 / $99 per month, 0% platform fee | https://www.ruzuku.com/learn/articles/stan-store-pricing |
| Kajabi | $179 / $249 / $499 per month (about 20% off annually) | https://www.capterra.com/p/154682/Kajabi/pricing/ |
| GoHighLevel | $97 / $297 / $497 per month; SMS, email, voice and AI billed on top | https://www.ruzuku.com/compare/gohighlevel-pricing |
| GHL "fitness coach snapshots" | Usually $0-500 one-off on marketplaces **[unverified]**. They're templates with no done-for-you setup, which is the gap Zaid fills. | https://topghlsnapshots.com/gohighlevel-pricing/ |

### DM automation / AI setters
| Tool | Price | Source |
|---|---|---|
| ManyChat | Free (25 contacts); Essential ~$15/mo; Pro ~$25/mo and up, priced per stored contact; AI is an add-on | https://massively.ai/general/manychat-alternatives-2026-8-instagram-dm-tools-compared-massively/ |
| SetSmart (AI setter) | From $97/mo **[vendor]** | https://setsmart.io/blog/best-ai-setters |
| Inrō | Free; Pro €12.99/mo; Managed from €200/mo **[vendor]** | https://setsmart.io/blog/inro-review |
| CloseBot (GHL-native AI) | ~$100+/mo **[unverified]** | none found |

### Human appointment setters
- Commission: **2-5% of closed deals**, or **$25-75 per qualified appointment**. Closers take 10-20%. https://setsmart.io/blog/high-ticket-closing **[vendor, sells AI replacement]**
- Setter take-home: $500-3,500/mo https://setsmart.io/blog/appointment-setter **[vendor]**
- Setters make sense for coaches selling $2k+ programs. Solo PTs can't afford them. **Zaid's angle:** "an AI setter that does the first 80%, for less than one setter's monthly commission."

### Coach website builders / agencies
- DIY: Squarespace, Wix, Carrd (~$20/yr), Linktree free-$24/mo **[unverified]**
- Fitness-specific funnel agencies usually charge $1-5k setup plus retainers **[unverified]**. Zaid should price below them for solo PTs.

---

## 6. Offer packages (priced for trainers, well below dental)

Trainers pay for **clients and time back**. A dentist values a new patient at $1k+. An online client is worth ~$1.6-2k LTV and an in-person client ~$4-7k (section 0). Keep the monthly fee below the value of **one new client per quarter**.

| Package | For | Includes | Setup | Monthly |
|---|---|---|---|---|
| **Starter: "Book from your bio"** | New or established solo PT | One-page site or pro link-in-bio, pricing anchor, application form into calendar, Google Business Profile setup, SMS/email reminders (cuts no-shows) | $400-750 | $49-99 (hosting plus reminders) |
| **Core: "DM to booked call"** | Established solo, $5-20k/mo | Starter, plus IG DM automation (keyword and comment triggers, qualifier, calendar link), AI replies to FAQs and pricing, lead CRM, nurture follow-up for no-reply leads, review requests | $1,000-1,800 | $199-349 |
| **Premium: "AI setter + ops"** | Online coach with team, $20k+/mo | Core, plus AI setter trained on their voice, VSL and application funnel, show-rate stack (confirm, 24h, 1h SMS), Zapier push into Trainerize/TrueCoach, check-in and renewal reminders, monthly reporting | $2,500-4,000 | $500-900, or setter-style ~2-3% of attributed sales |

Price justification:
- SetSmart costs $97/mo just for the tool; a human setter costs 2-5% commission; GHL costs $97-297 before anyone sets it up.
- Zaid is the done-for-you layer on top.
- Offer a 30-day "first booked call or money back" guarantee on Starter to beat price sensitivity (it's a guarantee on booked calls, not a results claim).

---

## 7. Compliance (practical)

**Meta / Instagram messaging**
- Automated messages are only allowed within **24h of the user's last message**. After that the API blocks sends. https://www.keyapi.ai/blog/instagram-messaging-api-policy/ , https://help.manychat.com/hc/en-us/articles/23358636027932-Understanding-messaging-windows
- A `HUMAN_AGENT` tag allows a *human* to reply for up to 7 days. Don't abuse it for bot blasts **[unverified detail, check Meta docs]**.
- Only use approved API tools (ManyChat, Inro etc. are Meta partners). "Auto-DM everyone who followed" tools risk the account being banned.
- Comment-keyword triggers ("comment PLAN") are allowed because the user starts the conversation. https://manychat.com/blog/instagram-dm-automation-rules/

**TCPA (US SMS/calls)**
- Marketing texts need **prior express written consent**: a checkbox on the form with clear disclosure. The FCC's 1:1 consent rule was vacated (11th Cir., Jan 2025) and formally dropped (Sept 2025). https://www.kelleydrye.com/viewpoints/blogs/ad-law-access/eleventh-circuit-vacates-tcpa-11-consent-rule , https://www.consumerfinanceinsights.com/2025/09/15/the-fcc-issues-final-rule-formally-eliminating-the-one-to-one-consent-requirement/
- Opt-out rules from April 11, 2025: honour STOP in any reasonable wording, promptly. https://www.bclplaw.com/en-US/events-insights-news/the-tcpas-new-opt-out-rules-take-effect-on-april-11-2025-what-does-this-mean-for-businesses.html
- Appointment reminders to existing clients are lower risk than promo texts. Still keep consent records.
- US SMS also needs A2P 10DLC registration through Twilio/GHL **[known, not sourced here]**.

**FTC (results and testimonials)**
- Consumer Reviews and Testimonials Rule (in force since Oct 21, 2024): no fake or AI-written reviews, no buying reviews, no review suppression. Civil penalties up to ~$53k per violation. https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials
- Endorsement Guides: a before/after photo implies the result is typical. You need substantiation, or you show what's typical. The "results not typical" disclaimer alone doesn't protect you. https://sayabout.us/blog/ftc-compliance-for-customer-testimonials-and-endorsements-the-complete-2026-guide **[third-party summary]**
- Earnings claims matter for **coaches who coach coaches** ("make $10k/mo"). The FTC's 2025 proposal targets business coaching. https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-proposes-rule-changes-new-rule-deter-deceptive-earnings-claims-multilevel-marketers-money-making
- **Rules for Zaid's builds:** AI setter scripts never promise specific weight loss or earnings; testimonials must be real and on file; AI must disclose it's an assistant if asked.

**UK/EU:** UK GDPR applies to lead capture (lawful basis, privacy notice). PECR covers SMS/email marketing (consent, or the soft opt-in for existing customers) **[general knowledge]**. Health data (injuries, weight) in intake forms counts as special-category data, so keep it minimal.

---

## 8. Learn later
- Custom mobile app / white-label (Trainerize branded app territory): big effort, skip.
- Paid-ads management for coaches (Meta ads plus funnels): high value, a different skill.
- AI check-in summariser that reads client check-ins and drafts coach replies. Coaches with 50+ clients spend hours a week on this **[unverified, confirm in interviews]**. Needs app API access, which is weak (section 5).
- Payment and dunning automation (Stripe failed-payment recovery) is an easy win once he knows Stripe.

## 9. Size breakdown
| Size | Main pain | Buys | Budget |
|---|---|---|---|
| New solo PT | No clients, no system | Won't pay much. Avoid, or sell the Starter only | <$100/mo |
| Established solo ($5-20k/mo) | DMs and admin eat evenings, no-shows, "how much?" loops | Core: DM automation, booking, reminders, site | $150-350/mo |
| Online coach with team ($20k+/mo) | Setter cost and turnover, lead leakage, show rate, check-in load | Premium: AI setter, funnel, integrations | $500-1,000+/mo or % of sales |

**Gaps for merge:** IG DM volume per trainer; real trainer quotes (Reddit r/personaltraining, r/OnlineCoaching); an authoritative BLS headcount figure; CloseBot pricing.
