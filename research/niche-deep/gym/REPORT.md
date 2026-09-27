# Gyms and studios: final merged report

For Zaid. Merged 2026-09-27 from `gemini.md`, `claude-market.md`, `claude-voice.md`, `last30days-out.md`, `critique-gemini.md` and `critique-claude.md`. Kimi was not used because its quota ran out.

Scope: businesses with a physical space that run classes or memberships: gyms, CrossFit boxes, yoga, pilates, and boutique HIIT and cycling studios. Solo personal trainers are out of scope.

**How to read the tags:**
- **(vendor claim)** means the number comes from a company selling into gyms. Use it as direction, but don't quote it to an owner as neutral fact.
- **(unverified)** means nobody could confirm it. Check it before you use it.
- **(illustrative)** means worked math, not a measured number.
- Anything with no URL was dropped. That includes most of gemini's headline stats ("80% of leads leak", "391%", "40-80% front-desk turnover") and its "Reddit quotes" that linked only to subreddit homepages (see critique-claude.md).
- Reddit blocked the automated agents. The owner quotes here come from Two-Brain Business, Capterra and Trustpilot, not Reddit.

---

## 1. Cheat sheet (one page)

### Top 5 pains (ranked)
1. **Slow lead follow-up.** Ad leads, DMs and web forms arrive while the owner is coaching, and get a reply hours later. Two-Brain: the average gym gets **30-35 leads a month**, and **14.4% of gyms never call their leads at all**; fewer than 1% call within an hour (consultancy) ([Two-Brain](https://twobrainbusiness.com/6-simple-lead-nurture-strategies/)).
2. **Intro no-shows and trials that fade out.** Even the best gyms on Two-Brain's leaderboard only get **24-57% of booked consults to show up** ([Two-Brain](https://twobrainbusiness.com/show-rate-october-2021/)). Every no-show wastes the ad cost and a coach's hour.
3. **Quiet churn with no win-back.** Industry retention is **66.4%**, so about 1 in 3 members leave each year (vendor claim, cites HFA) ([Nutripy](https://nutripy.io/blog/gym-retention-rate-benchmarks-2026)). **46% cancel because they aren't using it enough** (secondary, cites IHRSA) ([Smart Health Clubs](https://smarthealthclubs.com/blog/100-gym-membership-retention-statistics/)). Nobody notices a member going quiet.
4. **Failed payments.** 7-15% of recurring charges fail on the first try, and involuntary churn is 30-40% of all churn (vendor claim, unverified) ([US Tech Automations](https://ustechautomations.com/resources/blog/automate-gym-billing-failure-recovery-workflow-2026)). The owner chases cards by hand, awkwardly, at the desk.
5. **Unanswered phones and DMs, plus billing and cancel friction, which lead to 1-star reviews.** "The telephone number for this location does not accept voicemail, and more than five emails have gone unanswered." ([Planet Fitness Trustpilot](https://www.trustpilot.com/review/www.planetfitness.com))

For boutique studios (yoga, pilates, cycling), **late cancels and unfilled waitlist spots** replace #4: 10-20% of booked spots go unused (vendor, cites Mindbody) ([Glofox](https://www.glofox.com/blog/fitness-class-cancellation-policy/)).

### Best offer
**"Leads to members."** Every DM, form and missed call gets an answer in under a minute and a booking link. Booked intros get reminders. Members who go quiet get a check-in, and failed cards get a text with an update link. A monthly report shows leads, booked, showed and joined.
- A layer on top of Mindbody, PushPress or Glofox. It never replaces them.
- Month-to-month, flat published price.
- Pitch it two ways:
  - **CrossFit / functional / PT-style gyms:** "more No-Sweat Intros booked and showing up."
  - **Yoga / pilates / boutique:** "fill empty mats: intro-pack follow-up plus a waitlist text when someone late-cancels."

### Best opening line
> "Hi [Name], I DM'd [Gym] on Instagram on Tuesday at 6:10pm asking about your intro offer, and got a reply [the next day / never]. That's the window when most people pick a gym. I set up instant replies that answer and book the intro for you, on top of [PushPress/Mindbody]. Want to see what it would catch?"

Only claim DMs or calls you actually made.

### Price range (US, per location)
| Tier | Setup | Monthly |
|---|---|---|
| Starter | $500-$900 | $197-$297 |
| Core | $1,500-$2,500 | $497-$697 (voice: 500 min included) |
| Premium | $3,000-$6,000 (includes website) | $997-$1,497, or $400-$700 per extra location |

- **Anchors:** GHL gym agencies charge **$297-$597/mo + $500-$3,000 setup** (vendor claim) ([NetPartners](https://netpartners.marketing/gohighlevel-agency-pricing-guide/)). PushPress's own CRM add-on is **$329/mo** ([Wodify on PushPress](https://www.wodify.com/blog/pushpress-pricing-plans)). Replify AI starts at **$300/mo per location** (vendor claim) ([Replify](https://www.replify.ai/ai-sales-service-blog/best-ai-for-gyms-complete-buyers-guide)).
- **The math that sells it:** a boutique or CrossFit member is worth roughly **$1,800-$4,000** ($150-$205/mo × 12-20 months; Two-Brain gyms average 20.7 months) ([Two-Brain](https://twobrainbusiness.com/lifetime-value/), consultancy). **One saved or won member pays for 3-6 months of Core.**

### Who to target first
- **Independent single-location boxes and boutique studios with 200-800 members,** US first, that are **running Meta ads** (check the Facebook Ad Library) and have **4.5+ stars**.
- On **PushPress, Wodify, Mariana Tek or Momence** (open APIs and webhooks). Mindbody is fine without integration at first.
- **Unstaffed 24/7 key-fob gyms**: nobody is ever at the desk, so missed-call text-back and a voice agent are an easy sell (inference, from gemini's critique).
- Skip: big-box HVLC chains (HQ buys centrally), and brand-new studios with no ads budget.

---

## 2. Day in the life

### Roles
| Role | What they do | Why it matters to Zaid |
|---|---|---|
| **Owner** | In a solo studio: lead instructor, marketer, front desk and bookkeeper, teaching 10-20 classes a week. In a bigger gym: GM, sales and finance | The buyer. Answers DMs between classes and from bed. |
| **Coaches / instructors** | 3-15 per gym, often part-time contractors. Run classes, correct form | Hate sales and admin. A sick one means a 6am group-chat scramble. |
| **Front desk / client success** | Part-time or none. Check-ins, towels, retail, phones, membership edits | Can't answer the phone while checking in a line of people. |
| **Sales / intro coach** | Runs No-Sweat Intros (CrossFit/Two-Brain style) or tours (bigger gyms) | Lives on show rate. |
| **Multi-site** | Regional manager, GM per site, sales team with quotas, maybe a call centre. HQ owns software and marketing | Longer sales cycle. "No one answers" reviews come from here. |

Source for roles and rhythm: claude-voice.md synthesis from Two-Brain and software reviews ([Two-Brain](https://twobrainbusiness.com/5-dm-mistakes/)), partly inference.

### Daily rhythm
| Time | What happens | Where it breaks (Zaid's opening) |
|---|---|---|
| 5:00-9:00 | Peak classes. Owner or coach on the floor | Calls and DMs go unanswered. Overnight leads are already hours old. |
| 9:00-16:00 | Admin window: reply to leads, chase failed cards, edit memberships, find subs, post on Instagram, run intros | Everything is done by hand, and late. |
| 16:00-20:00 | Second peak | Nobody at the phone again. This is when after-work people DM. |
| Evening | Owner answers DMs from bed | Burnout. |

**Weekly:** billing run and failed-payments list; instructor schedule and sub gaps; check who hasn't come in for 7-14 days; ask for reviews; check ad spend.
**Monthly:** churn and retention numbers; challenges and promos. January is the lead spike.

### Software and integrations
| Platform | Who uses it | Price | Can Zaid connect? |
|---|---|---|---|
| **Mindbody** | yoga, pilates, boutique | $129-$349/mo listed, enterprise custom ([Vibefam](https://vibefam.com/mindbody-pricing/)); owners report "over $1,000 CAD/month" with add-ons ([Capterra](https://www.capterra.com/p/40229/MINDBODY/reviews/)) | Free webhooks; API calls are metered with partner approval and fees ([webhooks](https://developers.mindbodyonline.com/WebhooksDocumentation), [Carly](https://www.usecarly.com/blog/mindbody-api/)). **Medium.** |
| **ABC Glofox** | boutique, gyms, franchises | ~$110 to $600+/mo ([StudioGrowth](https://studiogrowth.com/glofox-momence/)) | API gated: request access by email ([Glofox](https://apidocs-plat.aws.glofox.com/request-access/)). **Medium-hard.** |
| **PushPress** | CrossFit, functional | Free core; Pro $159, Max $229; Grow CRM +$329 ([Wodify](https://www.wodify.com/blog/pushpress-pricing-plans)) | REST API, signed webhooks, SDK, Zapier ([SDK](https://github.com/PushPress/pushpress-ts)). **Easy.** |
| **Wodify** | CrossFit | from $79/mo | Public REST API plus an MCP connector ([docs](https://docs.wodify.com/), [MCP](https://www.wodify.com/blog/wodify-mcp-connector-api-access)). **Easy.** |
| **Zen Planner** | CrossFit, martial arts | $99-$289+/mo; Engage +$249 ([Zen Planner](https://zenplanner.com/pricing/)) | Partner API (unverified). |
| **Mariana Tek** | premium boutique, multi-site | $179-$285/mo per location ([Gymdesk](https://gymdesk.com/blog/gym-management-software-cost)) | Full API and webhooks, best documented ([webhooks](https://guides.marianatek.com/webhooks)). **Easy.** |
| **Momence** | yoga, pilates, dance | Not published; users report $250-$2,000+/mo ([Vibefam](https://vibefam.com/momence-pricing-2026/)) | Public API ([docs](https://api.docs.momence.com/)). **Easy.** |
| **Arketa, Walla, TeamUp, Gymdesk** | boutique; TeamUp is UK/EU heavy | Arketa $49-$124; Walla $220; TeamUp ~$99-$279; Gymdesk ~$75-$150 ([Vibefam](https://vibefam.com/arketa-vs-mindbody/), [Gymdesk](https://gymdesk.com/blog/gym-management-software-cost)) | Zapier or partner APIs (unverified). |
| **ClubReady, ABC Evo** | franchises, big-box | Quote only | Partner APIs (unverified). Later. |

**The gap:** the booking tool holds members, a CRM or GoHighLevel holds leads, and nothing connects them to the phone line or Instagram inbox. That junction is Zaid's wedge.

**Rule:** start with no integration (send a booking link, post a daily list to the owner). Then PushPress, Wodify, Mariana Tek or Momence direct. Mindbody webhooks next. Two-way sync with Mindbody or Glofox is medium-hard, not "easy" as gemini said.

---

## 3. Ranked pain points and repetitive tasks

Ranked by money lost, how often it happens, and how easy it is for Zaid to deliver, favouring gyms that already spend on ads.

### 1. Slow or no lead follow-up (IG/FB ads, DMs, web forms, missed calls)
- **What happens:** a lead fills in a Meta form at 6am or DMs at 6pm. The owner is coaching and replies hours later, or never.
- **Who suffers:** the owner (wasted ad spend), the sales or intro coach.
- **Cost:**
  - Meta cost per lead: $14-$20 for traditional gyms, $32-$52 for boutique/PT studios (vendor claim) ([Web Tonic](https://www.webtonic.io/blog/fitness-facebook-ads-statistics)).
  - Realistic funnel for cold ad leads: 100 leads × 50% booked × 40% show × 40% close = **8 members**. Instant replies lifting booked to 65%, and reminders lifting show to 50%, gives **~13**. At $2,500 LTV that's **+$12k** from the same ad spend (illustrative; show rate lowered from Claude's 70% after gemini's critique).
- **Evidence:**
  - "14.4 percent of gyms never call their leads at all" ([Two-Brain](https://twobrainbusiness.com/6-simple-lead-nurture-strategies/)).
  - Two-Brain cites HBR: businesses were "60 times more likely to qualify a lead" when replying within the first hour vs a full day ([Two-Brain](https://twobrainbusiness.com/5-dm-mistakes/), [HBR 2011](https://hbr.org/2011/03/the-short-life-of-online-sales-leads)). This is cross-industry B2B data, so use it lightly.
  - No gym-specific speed-to-lead study was found. Drop "21x" and "80% leak".
- **Fix:** instant reply to IG/FB DMs, lead forms and web chat by SMS or DM, with the booking link; missed-call text-back; voice agent for overflow.
- **Ease:** **easy** for the text and DM reply (Meta API or GHL). **Medium** to book straight into Mindbody or Glofox.

### 2. Intro no-shows and trials that fade out
- **What happens:** booked intros don't show. Trial members take 3 classes and drift off with no offer made.
- **Who suffers:** coaches sitting idle, the owner.
- **Cost:** top gyms still lose about half their booked consults (24-57% show) ([Two-Brain](https://twobrainbusiness.com/show-rate-october-2021/)). Target trial-to-member is 30-50% (vendor claim) ([Optimized Growth](https://optimizedgrowth.com/blog/facebook-ads-for-gyms/)).
- **Evidence:** top owners send "reminders of appointments 48 hours in advance—both email and text, followed by a text one hour before" ([Two-Brain](https://twobrainbusiness.com/show-rate-october-2021/)).
- **Fix:** confirm plus 48h plus 1h reminders with "reply YES"; a no-show rebook text the same day; trial-day nudges; a last-day offer.
- **Ease:** **easy** (workflow).

### 3. Quiet churn and no win-back
- **What happens:** a member stops coming, then cancels a month later. Nobody noticed the drop.
- **Who suffers:** the owner's monthly revenue.
- **Cost:**
  - ~50% of new members quit within 6 months (secondary) ([Smart Health Clubs](https://smarthealthclubs.com/blog/100-gym-membership-retention-statistics/)).
  - Members who visit twice a week are 50% less likely to cancel (same, secondary).
  - Onboarded members: 87% six-month retention vs ~60% (vendor claim) ([Jeri Commerce](https://blog.jericommerce.com/resources/gyms-fitness-studios-retention-statistics)).
- **Evidence:** the most-engaged recent owner-facing post is titled "Your Gym Isn't Underpriced—It's Under-Retained" ([r/u_fitmanagement](https://www.reddit.com/r/u_fitmanagement/comments/1weavjf/your_gym_isnt_underpricedits_underretained_the/), consultant's own profile, not owners).
- **Fix:** "absent 10 days" text or a task for the coach; a 90-day onboarding sequence; a win-back campaign to ex-members (to people who gave marketing consent).
- **Ease:** **medium** (needs attendance data via API or a weekly export).

### 4. Failed payments (dunning)
- **What happens:** cards expire or decline. The owner chases them weekly, or asks at the desk in front of other members.
- **Who suffers:** the owner (cash flow), the front desk.
- **Cost:** 7-15% of charges fail first time (vendor claim, unverified) ([US Tech Automations](https://ustechautomations.com/resources/blog/automate-gym-billing-failure-recovery-workflow-2026)). gemini's "3-5% of revenue" has no source; drop it.
- **Evidence:** Glofox owner: "takes payments from customers banks on the wrong date"; another: a client was charged "FOUR times" for one package ([Glofox Capterra](https://www.capterra.com/p/136861/Glofox/reviews/?page=6)).
- **Fix:** a text and email with an update-card link as soon as a charge fails, then day 3 and day 7; the owner gets a list of anyone still failing. **Sell "no more awkward card chats at the desk", not "we recover 80%".**
- **Ease:** **medium** (billing webhooks; Stripe-based tools are easiest).

### 5. Phones and DMs unanswered (worst for unstaffed 24/7 gyms)
- **What happens:** calls hit a full voicemail, DMs sit on read. Prospects go elsewhere; members vent in Google reviews.
- **Who suffers:** reputation, new-lead conversion.
- **Evidence:**
  - "The telephone number for this location does not accept voicemail, and more than five emails have gone unanswered." ([Planet Fitness Trustpilot](https://www.trustpilot.com/review/www.planetfitness.com))
  - Owners feel it from their own vendor too: Mindbody's support is "nearly impossible to reach ... instead of speaking to a real human you get AI responses" ([Capterra](https://www.capterra.com/p/40229/MINDBODY/reviews/)). Lesson: always give a route to a human.
- **Fix:** voice agent for hours, prices, intro booking, freeze/cancel info and tours; web chat; one inbox.
- **Ease:** **easy to medium.**

### 6. Cancellation and billing friction
- **What happens:** cancel only in person or by letter, charges after cancelling. That means 1-star reviews, chargebacks and attorney general complaints.
- **Evidence:**
  - "I cancelled my Planet Fitness membership and I have PROOF that it was cancelled. Despite that, my card was still charged OVER $300" ([Trustpilot](https://www.trustpilot.com/review/www.planetfitness.com)).
  - Planet Fitness needs an in-person visit or a certified letter ([LegalClarity](https://legalclarity.org/how-to-cancel-planet-fitness-in-person-mail-or-online-4/)).
  - Independent-gym Google reviews show the same themes (synthesis, not counted).
- **Fix:** online cancel and pause flow with a skippable "pause instead?" offer, and an instant confirmation email. See section 7 for the law.
- **Ease:** **easy** (website plus workflow).

### 7. Late cancels, no-shows and waitlists (boutique studios)
- **What happens:** someone late-cancels the 6am class. The waitlisted people don't see the push notification. Class runs with empty bikes.
- **Who suffers:** boutique owners; two empty bikes can wipe out a class's margin.
- **Evidence:**
  - 10-20% of booked spots go unused (vendor, cites Mindbody) ([Glofox](https://www.glofox.com/blog/fitness-class-cancellation-policy/)).
  - Glofox owner: "The system cant even send out an email for a cancelled class's. The only option ... have the app downloaded & 2 have push notifications turned on" ([Capterra](https://www.capterra.com/p/136861/Glofox/reviews/?page=6)).
- **Fix:** SMS reminders with reply-to-cancel; text the waitlist when a spot opens (first YES gets it); class-cancelled SMS.
- **Ease:** **medium** (needs booking webhooks).

### 8. Instructor subs
- **What happens:** a sick instructor at 5:30am starts a group-chat scramble.
- **Evidence:** a dedicated app exists to avoid "group-chat chaos" ([ClassSub](https://classsub.inpulsd.com/)).
- **Fix:** a sub-request text to all instructors, first yes gets the class, members told automatically.
- **Ease:** **easy to medium.** Good add-on, not a headline.

### 9. Admin busywork: reviews, referrals, membership edits
- **Evidence:** "Amendments to memberships are cumbersome and require alot of manual input." ([Glofox Capterra](https://www.capterra.com/p/136861/Glofox/reviews/?page=6))
- **Fix:** review request after the 10th class; referral ask after a milestone or PR.
- **Ease:** **easy.**

### Quick map: pain → fix
| Pain | Voice | Chat/DM/SMS | Workflow | Website |
|---|---|---|---|---|
| 1 Slow follow-up | overflow | **yes** | **yes** | lead capture |
| 2 Intro no-shows | | **yes** | **yes** | |
| 3 Churn | | yes | **yes** | |
| 4 Failed payments | high-value only | **yes** | **yes** | update-card page |
| 5 Unanswered | **yes** | **yes** | | chat |
| 6 Cancel friction | FAQ | | yes | **yes** |
| 7 Waitlists | | **yes** | **yes** | |
| 8 Subs | | yes | **yes** | |
| 9 Reviews/referrals | | yes | **yes** | reviews shown |

---

## 4. Website pains and selling points

### What bad gym sites get wrong
1. **No price.** "Contact us for pricing." Prospects leave or DM, and the DM goes unanswered.
2. **Schedule stuck in an iframe widget** (Mindbody, Glofox) that's slow on mobile and unbranded.
3. **No single intro offer.** The hero says "Welcome to our community" instead of "First week $29".
4. **Booking sends people to a third-party app login** before their name and phone are captured.
5. **No reviews on the page**, no Google profile link, stale photos.
6. **Cancellation terms buried.** Now a legal risk too (section 7).
7. **Basic breakage.** One web shop's scan of 6,179 US small-business sites found about 1 in 6 broken in a way the owner likely didn't know about (agency post) ([r/smallbusinessUS](https://www.reddit.com/r/smallbusinessUS/comments/1wr1zm7/our_tools_checked_6000_small_business_websites/)).

Mostly from website guides plus observation (partly inference).

### What converts (build every site with these)
- **One intro offer in the hero** ("30 days for $65", "3 classes for $39"), with Schedule and Pricing in the top nav (vendor claim) ([Gymdesk](https://gymdesk.com/blog/9-gym-website-ideas-what-makes-a-good-gym-website)).
- **Match the offer to the niche:** CrossFit and PT-style gyms use a free No-Sweat Intro; boutiques use a paid intro pack, which gives the community time to hook them (vendor claim) ([Mariana Tek](https://www.marianatek.com/blog/intro-offers-that-convert-four-key-tips-for-boutique-fitness-studios/)).
- **Capture name and phone first**, then book, then run reminders and follow-up (vendor claim) ([Mindbody](https://www.mindbodyonline.com/business/education/blog/visitors-members-retention)).
- **Schedule, Pricing, FAQ, First Visit and Contact** one click away.
- **Chat that continues by SMS or WhatsApp** after they leave the page.
- **Clear membership terms and an online cancel/pause link.** Shows honesty; meets state law.
- 67% of consumers prefer booking online to calling (secondary) ([SimplyBook](https://simplybook.me/en/blog/online-booking-statistics)).

### SEO and Google Business Profile
- High-intent searches: "gym near me", "CrossFit [city]", "pilates [suburb]", "hot yoga near me".
- Keep the Google profile complete: hours, intro-offer post, class photos, booking link.
- Automate review requests after the 10th class, and reply to every review.
- One page per programme (reformer pilates, HIIT, kids, open gym) and per suburb for multi-site gyms.

---

## 5. Offer ideas with pricing

### What competitors charge
| Tool | Price | Source |
|---|---|---|
| GoHighLevel (DIY) | $97 / $297 / $497 per month | [TopGHLSnapshots](https://topghlsnapshots.com/gohighlevel-pricing/) |
| GHL gym snapshot | $997 one-off + owner's own GHL plan (vendor claim) | [TopGHLSnapshots](https://topghlsnapshots.com/product/gym-and-fitness-snapshot/) |
| GHL "gym agencies" | $297-$597/mo per location + $500-$3,000 setup (vendor claim) | [NetPartners](https://netpartners.marketing/gohighlevel-agency-pricing-guide/) |
| PushPress Grow (CRM) | +$329/mo | [Wodify](https://www.wodify.com/blog/pushpress-pricing-plans) |
| Zen Planner Engage | +$249/mo | [Zen Planner](https://zenplanner.com/pricing/) |
| Gym Launch / Gym Lead Machine-style "done-for-you ads" | ~$1,000-$3,000/mo + ad spend (unverified; gemini's $299-$399 had no source) | none found |
| Replify (AI, gyms) | from $300/mo per location; clients include Gold's Gym, UFC Gym, F45 (vendor claim) | [Replify](https://www.replify.ai/ai-sales-service-blog/best-ai-for-gyms-complete-buyers-guide) |
| Keepme Antares (UK, multi-site) | Enterprise, quote only | [Keepme](https://www.keepme.ai/antares) |
| General AI receptionists | $79-$300/mo; fitness-specific $500+ (vendor claim) | [South Arc Digital](https://www.southarcdigital.com/journal/ai-receptionist-for-gyms-and-fitness-studios-cost-roi-2026) |
| Others | AgentZap, RhinoAgents, Whippy; prices not checked | [AgentZap](https://agentzap.ai/industries/gym), [RhinoAgents](https://www.rhinoagents.com/voice-ai-agents/gyms), [Whippy](https://www.whippy.ai/blog/voice-ai-receptionist-fitness-centers) |

**Gaps to exploit:**
- Enterprise AI vendors chase chains. Independents with 200-800 members get either a DIY snapshot or a generic agency.
- Agencies do ads and funnels but rarely touch retention, dunning or the phone.
- Owners already hate their software's lock-in: "I was offered a free trial and was stuck in a one year contract" ([Mindbody Capterra](https://www.capterra.com/p/40229/MINDBODY/reviews/)). Month-to-month is a selling point.

### Zaid's 3 packages (US, per location, month-to-month)
Merged verdict: Claude's tiers were about right. gemini's Premium had unlimited voice and was underpriced for the work, so voice now has a minute cap.

| | **Starter: "Never miss a lead"** | **Core: "Leads to members"** (push this) | **Premium: "Full front desk"** |
|---|---|---|---|
| For | Solo-owner studio | Established single site, 200-800 members | Multi-location or franchisee |
| What's in it | Instant reply to IG/FB DMs, lead forms and web chat; missed-call text-back; booking link; 3-touch intro reminders; monthly "leads caught" report. **No integration** | Starter, plus voice agent (answers, books intros, prices, FAQs); no-show rebook; trial close sequence; "absent 10 days" check-ins; win-back; review requests; failed-card texts; waitlist blast (boutique); booking-tool integration where easy | Core per location, plus a new website (intro offer, pricing, schedule, online cancel/pause), central inbox, call routing by location, weekly KPI report (leads → booked → showed → joined), quarterly review |
| Setup | $500-$900 | $1,500-$2,500 | $3,000-$6,000 (includes site) |
| Monthly | $197-$297 | $497-$697 (500 voice min, then $0.15/min) | $997-$1,497 first site; $400-$700 each extra |
| Beats | GHL snapshot + DIY time; agencies at $297+ | PushPress Grow $329 or agency $297-$597, and does retention too | Agency + separate AI vendor + web designer |

**Extras and door-openers:**
- **Website only:** $1,500-$3,000 build, or $99-$149/mo hosted with edits.
- **Free "lead leak" audit** (lead magnet): DM them, fill their form and call at 6pm. Hand over "you took X hours to reply; here's what that costs at your CPL."
- **Win-back sprint:** $1,000-$2,000 one-off, texting ex-members who gave consent, with a comeback offer.
- **Guarantee** (fast and provable, from gemini's critique): "If missed-call text-back and chat don't capture 5 real lead conversations in the first 14 days, your setup fee is refunded."

### Other countries
- **UK:** Starter ~£179, Core £399-£549. Offer **WhatsApp** as the main channel. TeamUp and Glofox are common.
- **Australia:** A$ at ~1.5x. WhatsApp and SMS both used. Lead with ACCC-safe cancellation (section 7).
- **Canada:** US prices in CAD at ~1.3x. Quebec needs French. Mindbody bills over $1,000 CAD show up in reviews, so price sensitivity is real.

---

## 6. Pitch lines and objection answers

**Rule:** sell outcomes (intros booked, members kept, mats filled). Never lead with "AI". Match the pitch to the niche: **intros** for CrossFit and PT-style gyms, **empty mats and waitlists** for yoga, pilates and cycling.

### Cold email openers

**1. Lead-leak audit** (best one; only claim what you actually did)
> Subject: your intro offer, 19 hours later
>
> Hi [Name], I filled in the intro form on [Gym]'s site Tuesday at 6:05pm. The reply came Wednesday afternoon. Most people who ask about a gym pick one that evening. I set up instant replies that answer and book the intro for you, on top of PushPress. No contract. Worth 10 minutes?

**2. CrossFit / functional**
> Hi [Name], quick one: how many No-Sweat Intros booked last month actually showed? Two-Brain's best gyms still lose about half. I set up the 48-hour and 1-hour reminders plus a same-day rebook text, all automatic. Want to see it running at another box?

**3. Boutique / yoga / pilates**
> Hi [Name], when someone late-cancels your 6am reformer class, does the waitlist hear about it in time? I set up a text that goes to the waitlist the second a spot opens; the first YES gets it. It works with Mindbody. Want a 2-minute video?

**4. Retention**
> Hi [Name], who checks on a member who hasn't been in for 10 days? About half of new members quit in their first 6 months. I set up an automatic check-in text and a coach reminder so nobody slips out quietly. Open to a look?

**5. Review hook** (from their own reviews)
> Hi [Name], your coaching reviews are great. Two recent ones mention nobody answering messages. That's the easiest thing to fix. Want to see how?

### Instagram DM openers
- "Love the new reformer room. When someone DMs 'how much is the intro pack?' at 10pm, what happens? I set it up so they get the price and a booking link straight away. Want a 30-second demo?"
- "Hey [Name], your ads are looking sharp. Are those leads getting a reply within minutes, or when someone's off the floor? I help boxes answer and book them automatically."
- "Hi! I DM'd you last week about the intro offer and heard back 2 days later. Not a dig, you're coaching all day. I build the thing that answers for you. Want to see it?"

### Objection answers
- **"We use Mindbody / PushPress, it already does this."**
  "Keep it. That's your booking and billing. I add what it doesn't do well: instant replies to Instagram DMs and missed calls, reminders that go by text rather than an app notification, and check-ins for quiet members. If you already pay for PushPress Grow, I'll work inside it. Month-to-month, so if theirs does it better, cancel me."
  **Don't claim they have no automation. PushPress Grow and Mindbody marketing tools exist.**
- **"I answer DMs myself."**
  "You do, and members love that. The problem is 6am and 6pm, when you're coaching and leads cool off. This only replies instantly with the price and booking link, then hands the conversation back to you. You still do the real chat."
- **"We tried an agency and it didn't work."**
  "Most gym agencies sell ads and a funnel and stop there. I don't run your ads. I fix what happens after the lead comes in: the reply, the reminder, the no-show, the member going quiet. Month-to-month, and a 14-day setup-fee guarantee."
- **"Too expensive."**
  "One boutique or CrossFit member is worth about $1,800-$4,000 over their membership. Core is $497. One extra member every few months pays for it, and you're already paying $15-$50 per ad lead that's leaking out. No annual contract."
- **"Members want a human."**
  "Agreed, that's why it only covers the gaps: at 6am when you're on the floor, and 10pm. It says it's the studio's assistant, answers the simple stuff, and anyone can reach you with one reply. Mindbody's own customers complain about getting AI instead of a person ([Capterra](https://www.capterra.com/p/40229/MINDBODY/reviews/)), so the human handoff is built in. Listen to 3 real conversations before you decide."
- **"No time."**
  "One 30-minute call: your prices, intro offer, FAQ and who to hand off to. I build it. You'll see replies in week 1."

---

## 7. Compliance notes (practical, not legal advice)

### US: cancellation and auto-renewal
- **The FTC click-to-cancel rule is NOT in force.** The 8th Circuit vacated it on **8 July 2025** ([Sidley](https://www.sidley.com/en/insights/newsupdates/2025/07/us-ftc-click-to-cancel-rule-struck-down)). The FTC restarted rulemaking (ANPRM 11 Mar 2026) ([Goodwin](https://www.goodwinlaw.com/en/insights/publications/2026/02/alerts-practices-ba-ftcs-click-to-cancel-rule-gets-new-life), [Crowell](https://www.crowell.com/en/insights/client-alerts/clicking-all-the-right-boxes-ftc-moves-to-revive-click-to-cancel-rule-following-eighth-circuit-vacatur)). **gemini.md was wrong here.** Never say "the FTC requires this".
- **The FTC still enforces under ROSCA / FTC Act.** It sued LA Fitness operators in Aug 2025 over hard cancellations ([Arnold & Porter](https://www.arnoldporter.com/en/perspectives/advisories/2026/02/ftc-and-state-ags-continue-to-scrutinize-subscription-practices)).
- **State auto-renewal laws do apply now.** California's amended law (AB 2863, in force July 2025): online cancel if they joined online, and annual reminders. New York, Minnesota, Virginia and others are similar. Many states also have health-club laws (cooling-off periods, contract caps). Details unverified; check per state.
- **Rule for anything Zaid builds:** joined online means can cancel online. A save offer is fine, but it must be skippable. The cancel flow must never trap someone in an AI call. Get the gym's written sign-off on cancel scripts.
- **Sell it as protection**, not fear: "an online cancel/pause page stops 1-star 'they won't let me cancel' reviews and chargebacks."

### US: TCPA (texts and calls)
- **Marketing texts** (offers, win-back): prior express **written** consent. An unticked checkbox on the form with clear wording. Not "double opt-in" (gemini).
- **Transactional texts** (booking confirmations, reminders): prior express consent; giving a number for the booking generally counts.
- The FCC's "one-to-one consent" rule is dead ([Goodwin](https://www.goodwinlaw.com/en/insights/blogs/2025/09/the-fcc-issues-final-rule-formally-eliminating-the-one-to-one-consent-requirement), [Womble](https://www.womblebonddickinson.com/us/insights/blogs/fcc-repeals-one-one-consent-rule-following-eleventh-circuit-decision)).
- Honor STOP and plain-English opt-outs fast. Respect quiet hours.
- **AI voice is "artificial voice"** under the TCPA (FCC 2024) ([FCC](https://www.fcc.gov/document/fcc-confirms-tcpa-applies-ai-technologies-generate-human-voices)). Damages run $500-$1,500 per call or text. **Keep AI voice inbound only. Do win-back and dunning by SMS.**
- **Register A2P 10DLC** for each gym's texting number, or carriers filter it ([TopGHLSnapshots](https://topghlsnapshots.com/product/gym-and-fitness-snapshot/) prices it at $150).
- **Call recording:** about 11-12 states need all parties to consent (CA, FL, IL, WA...). Always play "this call may be recorded" ([RecordingLaw](https://www.recordinglaw.com/party-two-party-consent-states/)).
- **No HIPAA** for normal gyms. It only matters if the gym runs physio or medical services.

### UK
- **DMCC Act subscription rules** (pre-contract info, renewal reminders, easy exit, cooling-off) cover memberships, but start in **Spring 2027** ([Taylor Wessing](https://www.taylorwessing.com/en/insights-and-events/insights/2026/04/subscription-contracts), [ClubWise](https://www.clubwise.com/clubwise-blog/what-the-dmcc-act-means-for-your-gym/)). Mention it as a bonus; small owners won't pay today for a 2027 law (gemini's critique).
- **PECR plus UK GDPR:** marketing texts and WhatsApp need opt-in, except the "soft opt-in" for existing members (unverified detail). Zaid is a processor, so sign a data processing agreement.

### Australia
- Unfair contract terms carry civil penalties since 10 Nov 2023. The ACCC expects cancelling to be as easy as joining, and has warned gyms about "no contracts" ads ([ACCC](https://www.accc.gov.au/media-release/accc-warns-gyms-about-no-contracts-membership-advertising), [Sprintlaw](https://sprintlaw.com.au/articles/accc-gym-membership-cancellation-rules-and-compliance/)).
- Spam Act: consent, sender ID and an unsubscribe on every marketing SMS (unverified detail).

### Canada
- Provincial consumer acts (e.g. Ontario) regulate gym contracts. CASL needs express consent for commercial texts and emails (unverified detail).

### Build once, reuse for every client
A one-page "compliance kit": SMS consent wording for forms, STOP/HELP replies, a 10DLC checklist, the recording disclosure, a cancel/pause flow template, and a data processing agreement for UK clients.

---

## 8. Learn later (big opportunities outside current skills)
1. **Churn prediction** from attendance data: flag members likely to leave, and trigger a coach call before they cancel.
2. **Deep two-way sync** with Mindbody, Glofox, ABC and ClubReady. Unlocks multi-site and franchise deals.
3. **Meta ads management** for gyms. Pairs with lead follow-up, but it's a crowded field full of agencies.
4. **Franchise rollouts:** sell a standard setup to a franchisee group or regional owner, not one site at a time.
5. **Outbound AI voice done legally** (with consent capture) for trial follow-up. Big money lever with real TCPA risk.
6. **Member app or white-label portal** (bookings, pause, referral) on top of the booking tool.
7. **Payments**: Stripe-based billing for studios leaving Mindbody.
8. **Multilingual:** Spanish in the US, French in Quebec.

---

## 9. Size breakdown

| | **Solo-owner studio** | **Established gym / box** (1 site, 200-800 members) | **Multi-location / franchise** |
|---|---|---|---|
| Who decides | The owner, fast | The owner, sometimes with a GM | Regional owner, franchisee group, or HQ |
| Top pains | Coaching all day so DMs wait; intro no-shows; waitlists and late cancels (boutique); sub scramble | Ad leads leaking; intro show rate; quiet churn; failed cards; front desk can't cover peaks | Inconsistent follow-up across sites; "no one answers" reviews; cancellation compliance; wanting per-site reports |
| Current spend | Booking tool ($50-$230/mo); maybe nothing else | Booking tool ($150-$1,000+) plus maybe an agency ($297-$597) or PushPress Grow ($329) | Enterprise software (ABC, ClubReady, Mariana Tek), agencies, maybe Replify/Keepme |
| Best offer | **Starter**, or **website + Starter** | **Core**, opened with a free lead-leak audit | A paid **pilot at 1-2 sites** at Core, then $400-$700 per extra site |
| Integration | None: booking link | PushPress/Wodify/Mariana Tek/Momence direct; Mindbody webhooks | ABC/ClubReady partner APIs, central reporting |
| Sales cycle | Days | 1-4 weeks | 1-6 months |
| Fit for Zaid now | Good: fast cash, but price-sensitive and churns | **Best**: has money, runs ads, owner still decides | Later, once there's a case study |

**Market size:** USA ~107,751 gym and fitness businesses including tiny ones ([IBISWorld](https://www.ibisworld.com/united-states/number-of-businesses/gym-health-fitness-clubs/1655/)); UK 7,200+ gyms, not counting many boutique studios ([ukactive](https://ukactive.com/news/uk-health-and-fitness-market-report-reveals-exponential-growth-as-penetration-rate-hits-16-9-and-revenue-grows-8-8/)); Canada 9,369 ([IBISWorld](https://www.ibisworld.com/canada/number-of-businesses/gym-health-fitness-clubs/1655/)); Australia 8,590 ([IBISWorld](https://www.ibisworld.com/australia/number-of-businesses/gyms-fitness-centres/658/)).

**Country differences in one line each:**
- **US:** SMS rules (TCPA, 10DLC) and state auto-renewal laws. The best market.
- **UK:** WhatsApp first; DMCC subscription rules from 2027; public leisure centres are not the target, independents and boutiques are.
- **Canada:** like the US, plus CASL and French in Quebec.
- **Australia:** ACCC is strict on cancellation and "no contract" claims; SMS and WhatsApp both work.

---

## What to verify by hand (before pitching)
1. **Read r/gymowners, r/CrossFit (box owners), r/pilates and r/yogateachers for 20 minutes.** Search "leads", "no show", "Mindbody", "PushPress", "failed payments", "agency". Reddit blocked every agent, so this report has **no real Reddit owner quotes**. Save 10 real ones with links.
2. **Listen to 2-3 Two-Brain Business podcast episodes** on sales and retention. Note the exact words owners use (they say "intros", "show rate", "LEG", "ARM").
3. **Do the lead-leak test on 10 target gyms:** DM on Instagram, fill the web form, and call at 6pm. Log reply times. These become your openers.
4. **Pull 20 one- and two-star Google reviews** of local independents and tag them (no reply, can't cancel, billing). Confirms or kills pain #5 and #6 for your city.
5. **Check PushPress, Wodify and Mindbody API costs and access** with a developer signup before quoting Core with integration.
6. **Check your state's auto-renewal and health-club law** (start with California AB 2863 and New York) before building any cancel flow. Re-check the FTC's 2026 rulemaking status.
7. **Check competitor prices** (Replify, Gym Lead Machine, local GHL gym agencies) with a demo request. Most here are vendor or third-party numbers.
8. **Verify the Wodify "master of none" and Mindbody Trustpilot quotes** on the live pages; they came through a summarising fetch tool.
