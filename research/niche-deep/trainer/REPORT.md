# Personal trainers and coaches: final merged report

For Zaid. Merged 2026-09-27 from `gemini.md`, `claude-market.md`, `claude-voice.md`, `last30days-out.md`, `critique-gemini.md` and `critique-claude.md`. Kimi was not used because its quota ran out.

Scope: independent personal trainers (PTs) and fitness/nutrition coaches who sell 1:1 or small-group sessions, in person or online. Gyms and studios are out of scope (see `../gym/REPORT.md`).

**How to read the tags:**
- **(vendor claim)** means the number comes from a company selling to coaches. Use it as direction, but don't quote it to a trainer as neutral fact.
- **(unverified)** means nobody could confirm it. Check it before you use it.
- **(illustrative)** means worked math, not a measured number.
- Anything with no URL was dropped. That includes gemini's "17-25% no-show rate", "reminders cut no-shows 80%", "90% of traffic from IG" and a "Reddit quote" that linked only to the subreddit homepage (see critique-claude.md).
- The Reddit quotes come from the last30days scan (r/personaltraining, Sept 2026). They are short and paraphrase-safe; recheck them on the live thread before reusing.

---

## 1. Cheat sheet (one page)

### Top 5 pains (ranked)
1. **DMs go cold while they're on the floor.** Leads message during the 5-10am and 4-8pm session blocks and get a reply hours later. Even the tool vendors tell trainers to batch messages into two 20-minute windows a day ([TrueCoach](https://truecoach.co/blog/how-to-manage-your-time-as-a-personal-trainer/)), which means leads wait. One lost client costs **$450-2,400** online, or a lot more in person (illustrative, section 3).
2. **"How much?" loops, and tire-kicker calls.** There's no price on the bio or site, so every DM starts with a price question, and raw Calendly links fill up with no-shows. Booked-call show rate is **~57% on average** (agency claim) ([780 Marketing](https://www.780marketing.ca/articles/cost-per-booked-call-benchmarks)).
3. **No-shows and late cancels, plus the awkward fee talk.** A dead slot in a split shift can't be resold. Trainers hate charging a client to their face. The 24h norm is: half fee for a late cancel, full fee for a no-show (vendor claim) ([coachway](https://coachway.io/articles/how-to-reduce-no-shows-and-late-cancellations-coaching/)). There's no sourced PT no-show rate.
4. **Clients quit at 3-6 months with no "what's next".** Online retention is 82% at month 3 and 45% at month 12 (vendor claim) ([coachway](https://coachway.io/articles/online-fitness-coaching-statistics/)). "60% of clients who achieved their goals left because no follow-up plan was offered" (vendor claim, unverified) ([Trainero](https://blog.trainero.com/why-personal-training-clients-quit-and-how-to-keep-them-the-complete-client-retention-guide-for-2026/)).
5. **Unpaid admin eats the rate.** Programming takes 15-60 min per client per week, and a $65 session works out to ~$30/hr real pay (vendor claim) ([bycoach](https://bycoach.io/tools/personal-trainer-true-hourly-rate-calculator)). Booking, payments and the coaching app don't talk to each other.

### Best offer
**"DM to booked, paid and showing up."** Every IG/WhatsApp DM gets an instant reply in the trainer's voice ("I'm with a client right now, here's pricing and my calendar"). Short qualifying questions, then a calendar with card on file, then reminders, then automatic late-cancel fees, then "new client" pushed into Trainerize/TrueCoach. After that, a renewal nudge at month 2-3, and a win-back text for past clients.
- It automates the **busywork**, not the relationship. The trainer still does the personal part (see the Reddit quotes in section 6).
- It sits on top of their app. It never replaces Trainerize.
- Month-to-month, with a flat published price.

### Best opening line
> "Hey [Name], I DM'd you Tuesday at 7:10am asking about 1:1 pricing and heard back [that evening / never]. You were probably mid-session, which is exactly when people shop around. I set up replies that answer pricing and book the consult for you while you train, and they sound like you, not a bot. Want me to show you what it would've said?"

Only claim DMs you actually sent.

### Price table (US)
| Tier | For | Setup | Monthly |
|---|---|---|---|
| Starter "Book from your bio" | new or established solo | $300-$600 | $49-$99 |
| Core "DM to booked" | established solo, $5-20k/mo | $900-$1,500 | $197-$297 |
| Premium "Setter + ops" | online team, $20k+/mo | $2,000-$3,500 | $497-$797, or 2-3% of attributed sales |

- **Anchors:** human setters take **2-5% of closed deals or $25-75 per appointment** (vendor claim) ([SetSmart](https://setsmart.io/blog/high-ticket-closing)). SetSmart's AI setter tool alone costs **$97/mo** with no setup included (vendor claim). GoHighLevel costs **$97-$497/mo** before anyone builds anything ([Ruzuku](https://www.ruzuku.com/compare/gohighlevel-pricing)).
- **The math that sells it:** an online client is worth **~$1.6-2k** ($200/mo × 8-10 months). An in-person client at 2x/week and $70 is worth **~$3.6-7k** (illustrative). **One extra client a quarter pays for Core.**

### Who to target first
- **Established solo PTs and online coaches doing $5-20k/mo**: full-ish book, active IG, "DM me" in the bio, and a visible price or program.
- **Online coaching teams ($20k+/mo)** that already pay a setter. They have budget, and a cost Zaid can undercut.
- **Specialists** (chronic pain, over-50s, postpartum, sports rehab). They charge more and grow on trust. "Specialists earn 78% more than generalists" (PTDC survey, n=837, via Gymkee, unverified) ([Gymkee](https://gymkee.com/blog/personal-trainer-salary-guide-2026-guide/)).
- **Skip:** new trainers with no clients. Median employed trainer pay is **$47,160** ([BLS](https://www.bls.gov/ooh/personal-care-and-service/fitness-trainers-and-instructors.htm)). Most trainers are poor buyers.

---

## 2. Day in the life

### Roles
| Size | Who | Why it matters to Zaid |
|---|---|---|
| New solo | Does everything: sales, programming, sessions, chasing payments | No money. Starter at most. |
| Established solo | The trainer, maybe a part-time VA | The buyer. Answers DMs between sets and from bed. |
| Online team | Head coach (content and sales), assistant coaches (check-ins), a setter/closer on DMs, ops/VA | Budget for setters. Show rate and lead leakage are measured. |

### Daily rhythm (in person)
| Time | What happens | Where it breaks |
|---|---|---|
| 5:00-10:00 | Back-to-back sessions | DMs and texts pile up unanswered |
| 10:00-16:00 | "Dead zone": programming, admin, own workout, catch-up on leads, content | Leads are already 3-6 hours old. Exhausted. |
| 16:00-20:00 | Second block of sessions | After-work people DM now, and get no reply again |
| Evening | Replies from bed, chases payments, reschedules | Burnout: 29.6% report work-related burnout ([JSCR/PubMed](https://pubmed.ncbi.nlm.nih.gov/35080208/), from the snippet) |

Sources: [ISSA](https://www.issaonline.com/blog/post/the-daily-schedule-and-work-hours-of-personal-trainers), [NASM](https://blog.nasm.org/typical-day-in-the-life-of-a-personal-trainer).

**Online coach weekly rhythm:** content daily; DMs, then sales calls, then onboarding; weekly check-ins (form, photos, a video reply per client); programs written in one block.

### Software stack
| Job | Tools | Can Zaid connect? |
|---|---|---|
| Programming/delivery | Trainerize ($26.98 for 5 clients to $164.98 for 50), TrueCoach ($20-107), Everfit (free-$105+), PT Distinction, Kahunas | Zapier only. **TrueCoach > Trainerize > Everfit** ([TrueCoach Zapier](https://help.truecoach.co/en/articles/8688374-zapier-integration), [pricing](https://assistantcoach.fit/blog/real-cost-fitness-coaching-software/)) |
| Booking | Calendly, Acuity, sometimes PocketSuite | Easy |
| Payments | Stripe, PayPal | Easy (Stripe) |
| Leads | Instagram DMs, WhatsApp, TikTok comments | Meta API via ManyChat/GHL. Medium. |
| Link-in-bio/store | Linktree, Stan Store ($29/$99), Kajabi ($179+), GHL funnels | Easy |

Everfit has no booking system: "The biggest drawback is the lack of a built-in booking system" ([Capterra](https://www.capterra.com/p/202837/Everfit/reviews/)). TrueCoach has no built-in payments ([Capterra](https://www.capterra.com/compare/155784-202837/truecoach-vs-Everfit)). **Build upstream of the app** (DM, form, calendar, Stripe), and only push "new client" into it.

---

## 3. Ranked pain points

### 1. DM leads go cold during sessions
- **What:** a prospect asks about pricing on IG at 7am. The trainer replies at 11am or 9pm. The prospect has already booked someone else.
- **Who:** established solo trainers and online coaches.
- **Cost:** a lost client is $150-400/mo × 3-6 months = **$450-2,400** online; ~$3.6-7k in person (illustrative).
- **Evidence:** the split-shift schedule (ISSA, above). TrueCoach telling trainers to batch messages twice a day. There's **no public stat on DM volume per trainer**, so ask on discovery calls.
- **Fix:** chat. IG/WhatsApp auto-reply in their voice, 2-3 qualifying questions, pricing, calendar link, and a follow-up if no reply (inside the 24h window).
- **Ease:** medium (Meta API through ManyChat/GHL).

### 2. "How much?" loops and low-quality calls
- **What:** no price signal, so every chat starts from zero. A raw Calendly link lets anyone book.
- **Who:** online coaches especially.
- **Cost:** show rate ~57% average, 45% weak, 65% good. A 60-min SMS reminder adds 8-12 points. Discovery-call close rate is 10-30% (agency claims) ([780 Marketing](https://www.780marketing.ca/articles/cost-per-booked-call-benchmarks)). Illustrative funnel: 100 DMs → ~20 booked → ~11-13 show → 3-4 clients.
- **Fix:** website + workflow. A "from $X" anchor, a short application form, then calendar, then confirm + 24h + 1h reminders.
- **Ease:** easy.

### 3. No-shows, late cancels and the fee conversation
- **What:** the client forgets or ghosts. The trainer has a dead slot, and has to ask for the fee in person.
- **Who:** in-person trainers.
- **Cost:** the full session fee each time ($50-150). No sourced PT no-show rate. Gemini's 17-25% came from a generic calculator.
- **Evidence:** "A large share of misses are honest ones—the session fell out of a busy head" ([coachway](https://coachway.io/articles/how-to-reduce-no-shows-and-late-cancellations-coaching/), vendor).
- **Fix:** workflow. Card on file at booking, reminders by SMS/WhatsApp, a self-serve reschedule link, and **automatic** late-cancel fees through Stripe, so the system is the bad guy, not the trainer.
- **Ease:** easy.

### 4. Churn at 3-6 months, and goal-hitters leave
- **What:** no contact between sessions and no next goal. The client plateaus or hits the goal, then leaves.
- **Who:** everyone's revenue.
- **Cost:** 45% 12-month retention online (vendor claim, coachway). "Nearly 50% of clients who leave report that they did not feel a personal bond with their trainer" (vendor, unverified, Trainero).
- **Fix:** workflow. A month-2/3 check-in prompt **to the trainer** ("send Sam a 30-second voice note"), a goal-hit renewal sequence, and win-back texts to past clients at 60/120 days. It collates the data; the human sends the personal bit.
- **Ease:** easy.

### 5. Unpaid admin and tool glue
- **What:** manual invoicing, rescheduling texts, copying new clients into the app, chasing check-in forms.
- **Cost:** 15-60 min per client per week; real hourly ~$30 against $65 headline (vendor, bycoach).
- **Evidence:** "for us semi-computer idiots its hard to get things done" (Everfit reviewer, [Capterra](https://www.capterra.com/p/202837/Everfit/reviews/)). Trainers are not techy, so done-for-you setup sells.
- **Fix:** workflow. Stripe subscriptions, Zapier into the coaching app, automated weekly check-in reminders, and an e-signed waiver + PAR-Q before session 1.
- **Ease:** easy to medium.

### 6. Failed payments
- **What:** a monthly card fails, and the trainer chases it awkwardly.
- **Fix:** workflow. Stripe dunning + text with an update link. No PT-specific stat found.
- **Ease:** easy.

### 7. Always on / burnout
- 29.6% work-related burnout, 17.4% client-related (JSCR 2022, [PubMed](https://pubmed.ncbi.nlm.nih.gov/35080208/)). "80% of trainers leave within 2 years" is a vendor figure, unverified ([Gymkee](https://gymkee.com/blog/personal-trainer-burnout/)). Use this as an **emotional hook**, not a line item.

### Voice agents: a weak fit
Trainers get DMs, not phone calls. Offer voice only to in-person trainers who list a phone number and get calls from Google. Not in any core package.

### Quick map: pain → fix
| Pain | Fix | Ease |
|---|---|---|
| Cold DMs | IG/WhatsApp auto-reply + qualify + book | medium |
| Price loops, junk calls | price anchor + application + reminders | easy |
| No-shows, fees | card on file + auto fees + reminders | easy |
| Churn | trainer nudges + renewal + win-back | easy |
| Admin glue | Stripe + Zapier + waiver/PAR-Q | easy-medium |
| Failed cards | dunning texts | easy |

---

## 4. Website and link-in-bio

**Reality:** most solo PTs have no real website. **The Instagram bio is the site.** They use Linktree or Stan Store, a Carrd/Squarespace one-pager, or a GHL funnel if they run ads.

### What bad trainer pages get wrong
1. A link-in-bio with 8 links and no single next step.
2. No price signal, so every DM becomes "how much?"
3. A raw Calendly link with no questions and no card on file.
4. "I help people get fit." There's no niche. Generic trainers are now up against free AI plans: a Sept 2026 YouTube video pitches building "a free AI fitness coach in 5 minutes" and says trainers read "the same template they give everyone else" ([YouTube](https://www.youtube.com/watch?v=hTdiyTrqhY4)).
5. Before/afters with no context, and "lose 20lb in 30 days" claims. That's FTC risk (section 7).

### What converts
- **In-person PT:** one page with the area/gym, "from $X/session", a first-session offer, Google reviews, direct booking with card on file, and a waiver. Local SEO beats IG for in-person: Google Business Profile, "personal trainer near me", and automated review requests after session 4-6 (opinion, no stat).
- **Online coach ($150-400/mo):** niche headline, then proof with context, then "from $X", then a short application, then calendar.
- **High-ticket ($1.5-5k):** VSL, then application, then a qualified calendar and SMS reminders. The application step costs volume but raises quality (agency claim, 780 Marketing).
- **Niche is the selling point.** Specialists win on trust. The web page should say who it's for (chronic pain, over-50, postpartum).
- Side note: "Why Personal Websites Are Coming Back" trended on HN in Sept 2026 ([link](https://deadparrotbbs.com/why-personal-websites-are-coming-back/)). It's weak evidence, but a nice line: "own your page, not just rented IG."

---

## 5. Offers and pricing

### What competitors charge
| Tool | Price | Note |
|---|---|---|
| Trainerize | $26.98 (5) to $164.98 (50)/mo, annual | delivery, not leads |
| TrueCoach | $20-$107/mo | best Zapier |
| Everfit | free to $105+ + add-ons | no booking |
| Stan Store | $29 / $99/mo | [Ruzuku](https://www.ruzuku.com/learn/articles/stan-store-pricing) |
| Kajabi | $179-$499/mo | [Capterra](https://www.capterra.com/p/154682/Kajabi/pricing/) |
| GoHighLevel | $97-$497/mo + usage | DIY, no setup |
| GHL fitness snapshots | $0-500 one-off (unverified) | templates, no done-for-you |
| ManyChat | free to ~$15-25+/mo | [Massively](https://massively.ai/general/manychat-alternatives-2026-8-instagram-dm-tools-compared-massively/) |
| SetSmart AI setter | from $97/mo (vendor) | [SetSmart](https://setsmart.io/blog/best-ai-setters) |
| Inrō | free, Pro €12.99, managed from €200/mo (vendor) | [SetSmart review](https://setsmart.io/blog/inro-review) |
| Human setter | 2-5% of deals or $25-75/appt; $500-3,500/mo take-home (vendor) | [SetSmart](https://setsmart.io/blog/appointment-setter) |
| Fitness funnel agencies | $1-5k setup + retainer (unverified) | Zaid prices under them |

### Zaid's 3 packages (month-to-month)
| | Starter: "Book from your bio" | Core: "DM to booked" | Premium: "Setter + ops" |
|---|---|---|---|
| For | solo PT, in person | established solo / online, $5-20k/mo | online team, $20k+/mo |
| Includes | one-page site or pro link-in-bio, price anchor, booking with card on file, waiver + PAR-Q, reminders, GBP setup, review requests | Starter + IG/WhatsApp auto-reply in their voice, qualifier, FAQ/pricing answers, lead CRM, follow-up inside 24h, auto late-cancel fees, Stripe + Zapier into their app, win-back texts | Core + application/VSL funnel, show-rate stack, AI first-pass setter that hands warm leads to the human closer, check-in nudges to assistant coaches, renewal sequence, monthly report |
| Setup | $300-$600 | $900-$1,500 | $2,000-$3,500 |
| Monthly | $49-$99 | $197-$297 | $497-$797, or 2-3% of attributed sales |

- **Guarantee on Starter/Core:** "first booked consult in 30 days or the setup back." It guarantees bookings, not results.
- **Why these numbers:** the gemini critique pushed for a $250-500 setup. That fits new trainers, who we skip anyway. Established trainers can pay Core. Premium stays under what one setter costs.
- **UK/AU:** similar numbers in £/A$. Lead with WhatsApp in the UK.

---

## 6. Pitch lines and objection answers

### What trainers themselves say matters (r/personaltraining, Sept 2026)
- "more emphasis on the 'personal' part of personal training: likability, ability to get people to do things" (u/karmaclast, 31 upvotes) ([thread](https://reddit.com/r/personaltraining/comments/1wo97nn/comment/pbl2tsq/))
- "you are the expert in exercise science and practice, they are the expert on themselves" (u/Late_Concentrate_247, 33 upvotes) ([thread](https://reddit.com/r/personaltraining/comments/1wo97nn/comment/pbl5ecq/))
- "Ability to motivate. Great ones recognize when someone needs positive affirmations and others who need tough love." (u/UMLBB10, 23) ([thread](https://reddit.com/r/personaltraining/comments/1wo97nn/comment/pbl4rv3/))
- On cheap trainers taking clients with serious health problems: "This is a business model issue" (u/mamasboye89, 13). Another says those clients "need to go to someone specialized", from a sports-medicine trainer who now trains independently (u/EllieKong, 9) ([thread](https://www.reddit.com/r/personaltraining/comments/1wjseyt/)).
- A hypermobile trainer with chronic pain targets "those who don't know how to deal chronic issues and stay fit" ([thread](https://www.reddit.com/r/personaltraining/comments/1wos7yw/)). **That's a niche pitch.**

**Lesson for the pitch:** trainers are proud of the human part. Never say "AI replaces you." Say "**the admin runs itself so you have more time for the personal part.**"

### Cold DM openers (Instagram)
1. The mystery-shop line from the cheat sheet (best).
2. "Hey [Name], saw 'DM me for coaching' in your bio. When you're mid-session at 7am, who answers those? I build a setup that replies with your pricing and books the consult in your voice, so you only talk to people who've already booked."
3. For specialists: "Love that you work with [chronic pain / over-50s]. Those clients usually have questions before they book. I set up a short intake that answers the common ones and books them with you, so your DMs stop being a help desk."

### Cold email opener (online teams)
> Subject: your setter's first 80%
> Hi [Name], you're running ads/content into DMs with a setter on commission. I build the first-pass layer: instant reply, qualifying questions, calendar, and reminders that lift show rate, then it hands warm leads to your setter or closer. It costs less than a month of commission. Worth a 15-min look?

### Objection answers
- **"I reply to DMs myself."** "Good, keep doing that. This just covers the hours you can't: mid-session and asleep. It sends your pricing and your calendar in your words, and you take over the second you're free. You'll see every chat."
- **"I use Trainerize."** "Keep it. Trainerize runs the program once someone's a client. It doesn't answer DMs, take the card at booking or chase no-shows. I build that front end and push new clients straight into Trainerize."
- **"Can't afford it."** "What's one client worth to you? Around $200 a month for 8-10 months is $1,600+. Core is $197 a month. If it books one extra client a quarter, it's paid. And it's month-to-month, so try it for 30 days." (For new trainers: offer Starter, or pass.)
- **"Clients want me, not a bot."** "Agreed, that's the whole point. The bot never coaches. It says 'I'm with a client, here's my pricing and calendar', which beats silence for 6 hours. Everything personal (check-ins, voice notes, the actual training) stays you. It even reminds you who needs a personal message this week."
- **"I tried a setter."** "Most setters cost 2-5% of sales, quit, or go off-script. This does the repetitive first 80% (reply, qualify, book, remind) the same way every time, at 2am too. If you still want a closer, they only get warm, booked calls."

---

## 7. Compliance (practical, not legal advice)

### Meta / Instagram / WhatsApp
- **The 24-hour rule:** automated messages can only go out within **24h of the person's last message**. After that, the API blocks them ([ManyChat](https://help.manychat.com/hc/en-us/articles/23358636027932-Understanding-messaging-windows), [KeyAPI](https://www.keyapi.ai/blog/instagram-messaging-api-policy/)). Build all follow-ups inside 24h, or move people to SMS/email **with consent**.
- The `HUMAN_AGENT` tag lets a human reply for up to 7 days. Never use it for bot blasts (unverified detail, check Meta docs).
- **Comment-keyword triggers ("comment PLAN") are fine**, because the user starts the conversation ([ManyChat](https://manychat.com/blog/instagram-dm-automation-rules/)). Tools that "auto-DM every new follower" risk a ban. Use only Meta-approved tools (ManyChat, Inrō, GHL).
- WhatsApp: outside the 24h window, only approved templates can be sent.

### TCPA (US texts)
- Marketing texts need **prior express written consent**: an unticked checkbox with clear disclosure, with records kept. The FCC's "1:1 consent" rule was vacated (Jan 2025) and dropped (Sept 2025) ([Kelley Drye](https://www.kelleydrye.com/viewpoints/blogs/ad-law-access/eleventh-circuit-vacates-tcpa-11-consent-rule), [CFI](https://www.consumerfinanceinsights.com/2025/09/15/the-fcc-issues-final-rule-formally-eliminating-the-one-to-one-consent-requirement/)).
- **Honour STOP in any reasonable wording**, promptly (from Apr 11, 2025) ([BCLP](https://www.bclplaw.com/en-US/events-insights-news/the-tcpas-new-opt-out-rules-take-effect-on-april-11-2025-what-does-this-mean-for-businesses.html)).
- Reminders to existing clients are lower risk than promos, but still keep consent.
- **A2P 10DLC registration** is needed for US SMS through Twilio/GHL (known; not sourced here).

### FTC (reviews, results, earnings)
- **Reviews rule (since Oct 21, 2024):** no fake or AI-written reviews, no buying them, no suppressing bad ones. Up to ~$53k per violation ([FTC](https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials)). Review requests go to **all** clients, not just the happy ones.
- **Results claims:** a before/after implies the result is typical. "Results not typical" alone doesn't protect you ([summary](https://sayabout.us/blog/ftc-compliance-for-customer-testimonials-and-endorsements-the-complete-2026-guide), third-party). No "lose 10lb in 30 days" in bot scripts or page copy.
- **Earnings claims:** only relevant for coaches who coach coaches ("make $10k/mo") ([FTC 2025](https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-proposes-rule-changes-new-rule-deter-deceptive-earnings-claims-multilevel-marketers-money-making)).
- **Bot rule:** if asked "is this a bot?", it says yes, it's an assistant. It never pretends to be the trainer typing.

### Other
- **Waiver + PAR-Q** e-signed before session 1. It's the real liability protection. Keep it in Starter.
- **HIPAA:** usually doesn't apply to trainers. It can apply to dietitians or PTs billing insurance. Still, keep health data minimal.
- **UK/EU:** UK GDPR (privacy notice, lawful basis). Health data in intake forms is special-category, so collect only what's needed. PECR covers SMS/email marketing (consent, or soft opt-in for existing clients) (general knowledge).

---

## 8. Learn later
- **Meta ads for coaches** (ads + funnel). High value, a different skill.
- **AI check-in summariser:** reads weekly check-ins and drafts the coach's reply. Big time-saver for 50+ client coaches (unverified), but the coaching apps' APIs are weak.
- **Branded client app / white-label:** Trainerize territory. Skip.
- **Community platforms** (Skool, Circle) for group coaching.
- **Payments for small PT teams:** commission splits for trainers renting space.

---

## 9. Size breakdown
| | New solo | Established solo ($5-20k/mo) | Online coaching team ($20k+/mo) |
|---|---|---|---|
| Main pain | no clients | DMs during sessions, no-shows, fee talk, admin evenings | lead leakage at volume, show rate, setter cost/turnover, check-in load |
| Lead channel | friends, gym floor, IG | IG + Google (in person), IG/TikTok (online) | content + ads → DMs → calls |
| Buys | Starter or nothing | **Core** | **Premium** |
| Budget | <$100/mo | $150-350/mo | $500-1,000+/mo or % of sales |
| Pitch | "look pro, book from your bio" | "stop losing DMs while you train; the system charges the late fees" | "your setter's first 80%, cheaper, 24/7" |
| Target? | no (low budget) | **yes, first** | **yes**; fewer of them, bigger tickets |

---

## What to verify by hand (before pitching)
1. **DM volume and reply speed:** mystery-shop 20 trainers' IG at 7am and 6pm. Log reply times. This becomes both the opener and the only real stat.
2. **The PT no-show rate:** there's no sourced number. Ask 5-10 trainers.
3. **Trainerize/TrueCoach Zapier triggers** on the plan each prospect is actually on.
4. **The Meta `HUMAN_AGENT` tag rules** and current WhatsApp template pricing.
5. **The Reddit quotes:** recheck them on the live threads before using any in marketing.
6. **Vendor stats** (coachway retention, Trainero "60%", Gymkee "80% quit in 2 years", "$127k for 100+ clients"): don't quote any of these to a trainer as fact.
7. **A2P 10DLC timing and cost** for each client's SMS.
8. **Price test:** pitch Core at $197 vs $297 to the first 10 prospects.
