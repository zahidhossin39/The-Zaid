# Trainers: their own words, the client side, day in the life, ranked pains (Claude lane)

Note: Reddit blocked. PubMed page was blocked by a CAPTCHA, so the burnout-study figures come from the search snippet, not the page itself. Quotes are verbatim as the fetch tool returned them. The fetch tool summarises pages, so recheck a quote on the live page before using it in marketing.

## Trainers' own words (software reviews)

Trainerize, Trustpilot 3.5/5 from 88 reviews. https://www.trustpilot.com/review/trainerize.com
- "Lifters mid-pull and app locks up, closes out, wipes set history" (1 star)
- "Constantly glitching, recurrent service outages and customer service gives canned responses." (3 stars)
- "I just got charged again on my credit card. I have contacted and asked about this and have received no response." (1 star)
- "There is no way to cancel on either mobile or PC app... charges keep occurring." (1 star)

Everfit, Capterra. https://www.capterra.com/p/202837/Everfit/reviews/
- "The biggest drawback is the lack of a built-in booking system that allows clients to view availability and schedule sessions easily." **This is a gap Zaid can fill.**
- "Everfit has saved me a lot of time! Everything you need for your clients is in one place." (Tool sprawl is the pain it fixes.)
- "for us semi-computer idiots its hard to get things done." (Trainers are not techy, so done-for-you setup sells.)
- Everfit add-ons: "all the 'add-ons' that are required ... would be great if they were just included" (Capterra snippet via search)

TrueCoach cons on Capterra: expensive, **no built-in payment processing**, "outdated Connect app", no habit tracking, no Notion or Google integration. https://www.capterra.com/compare/155784-202837/truecoach-vs-Everfit

**Takeaway:** the coaching apps handle programming. They don't handle **getting booked, getting paid, or lead follow-up**. That is where Zaid fits.

## Client side (why clients quit)

Source: https://blog.trainero.com/why-personal-training-clients-quit-and-how-to-keep-them-the-complete-client-retention-guide-for-2026/ (vendor blog; its stats have no primary source, **mark as unverified**)
- "Nearly 50% of personal training clients who leave report that they did not feel a personal bond with their trainer."
- "Clients who only hear from their trainer during sessions are more likely to disengage between sessions."
- "60% of clients who achieved their fitness goals left because no follow-up plan was offered."
- Clients who miss sessions often ghost the trainer instead of facing them.

Retention: the typical client stays 3-6 months, and a trainer can lose up to 50% of clients a year. Another source puts the standard retention rate at 75-80%. (Search snippets from https://blog.trainero.com/... and https://blog.everfit.io/how-to-retain-personal-training-clients; unverified.)

Client pains on the tools side: the app crashes mid-workout and the client loses their logged sets (Trainerize quote above).

## Numbers

- Burnout among personal trainers, measured with the Copenhagen Burnout Inventory (JSCR 2022): 33.0% personal burnout, 29.6% work-related, 17.4% client-related. https://pubmed.ncbi.nlm.nih.gov/35080208/ (figures from the snippet)
- "80% of personal trainers leave the industry within 2 years". PT Distinction data, cited by https://gymkee.com/blog/personal-trainer-burnout/ (a vendor figure; **unverified**)
- US median pay is $46,180/yr; the bottom 10% earn $27,580 and the top 10% earn $82,050+ (BLS May 2024, via https://gymkee.com/blog/personal-trainer-salary-guide-2026-guide/). Online trainers with 100+ clients average $127,613/yr (**unverified** vendor figure).
- "Specialists earn 78% more than generalists" (PTDC survey, n=837, via Gymkee)
- Unpaid work: "writing programs (15–60 min per client per week)". A $65 session works out to about $30/hr in real terms, 54% less than the headline rate. https://bycoach.io/tools/personal-trainer-true-hourly-rate-calculator
- Common cancellation policy: 24h notice, half fee for a late cancel, full fee for a no-show. https://coachway.io/articles/how-to-reduce-no-shows-and-late-cancellations-coaching/. **I found no sourced no-show rate. Treat this as a gap.**

## 2. Day in the life

**Roles by business size**
- **New solo trainer:** does everything themselves.
- **Established solo trainer ($5-20k/mo):** trainer, maybe a VA.
- **Online coaching team ($20k+/mo):** head coach, assistant coaches doing check-ins, a setter/closer handling DMs, and ops/VA.

**Rhythm (in person)**
- Split shifts: sessions roughly 5-10am and 4-8pm. The midday gap goes on admin, programming, messages and lead gen (https://www.issaonline.com/blog/post/the-daily-schedule-and-work-hours-of-personal-trainers, https://blog.nasm.org/typical-day-in-the-life-of-a-personal-trainer).
- Weekly: programs get written in one block (for example, Monday afternoon).
- Advice from the tools vendors: batch messages into two 20-minute windows a day (https://truecoach.co/blog/how-to-manage-your-time-as-a-personal-trainer/). This implies messages are normally answered all day.

**Rhythm (online)**
- Weekly check-ins: forms, photos and a video reply per client.
- Instagram DMs from content turn into sales calls, then onboarding.

**Software stack**

| Job | Tools |
|---|---|
| Programming | Trainerize, TrueCoach, Everfit, PT Distinction, Kahunas |
| Booking | Calendly, Acuity, Mindbody, PocketSuite |
| Payments | Stripe, PayPal |
| DMs | Instagram |
| Messages | WhatsApp / SMS |

Trainerize has Stripe and Zapier. TrueCoach has no payments. Everfit has no booking system. **The stack is fragmented, and the glue between tools is manual.** (The integration details are general knowledge; verify them per tool.)

## 3. Ranked pains

**1. Lead follow-up in DMs is slow or missing.**
- **What happens:** Instagram and WhatsApp enquiries sit unanswered while the trainer is on the floor, so leads go cold.
- **Who suffers:** solo trainers and online coaches.
- **Cost:** one lost client is $150-400/mo × a 3-6 month stay, which is $450-2,400 each. (Inferred from the tenure figures above.)
- **Evidence:** trainers are unavailable during sessions (ISSA schedule), and the vendor advice to batch messages into 20-minute windows (TrueCoach).
- **Fix:** a DM/chat agent that qualifies the lead and books the consult.
- **Ease:** easy to medium (Instagram API).

**2. Unpaid admin eats the rate.**
- **What happens:** programming, texts, invoicing and scheduling.
- **Who suffers:** everyone.
- **Cost:** 15-60 min per client per week. Real pay is about $30/hr against a $65 headline rate.
- **Evidence:** bycoach link above.
- **Fix:** workflows for auto-invoicing, booking links and check-in form reminders.
- **Ease:** easy.

**3. Clients churn at 3-6 months, and goal-achievers leave.**
- **What happens:** no touchpoints between sessions and no plan for "what's next".
- **Who suffers:** the trainer's revenue.
- **Cost:** up to 50% of clients lost a year.
- **Evidence:** Trainero quotes (unverified).
- **Fix:** automated between-session check-ins, a goal-hit renewal sequence, and win-back texts.
- **Ease:** easy.

**4. No-shows and late cancels.**
- **What happens:** the client forgets or ghosts. The trainer is stuck with a dead split-shift slot and has to chase the fee awkwardly.
- **Who suffers:** in-person trainers.
- **Cost:** the full session fee each time. No sourced rate exists.
- **Evidence:** "A large share of misses are honest ones—the session fell out of a busy head" (coachway).
- **Fix:** SMS/WhatsApp reminders, card on file, and auto-enforced fees.
- **Ease:** easy.

**5. Booking and payments are bolted on.**
- **What happens:** the coaching app has no booking (Everfit) or no payments (TrueCoach).
- **Who suffers:** established solo trainers.
- **Evidence:** the Capterra quotes above.
- **Fix:** a website with booking and Stripe, integrated with the app.
- **Ease:** medium.

**6. Tool frustration and bugs.**
- **What happens:** the app crashes and billing surprises pile up.
- **Evidence:** Trainerize Trustpilot quotes.
- **Fix:** not Zaid's to fix. Use it only as an angle: "I'll set it up so it just works."
- **Ease:** n/a.

**7. Burnout from always being on.**
- **What happens:** client messages come in at all hours.
- **Evidence:** 29.6% report work-related burnout (JSCR).
- **Fix:** an after-hours chat/voice agent that handles FAQs and bookings.
- **Ease:** medium.

**Voice agents are a weaker fit than chat.** Trainers get DMs, not phone calls. **Lead with chat/DM automation plus workflows.**
