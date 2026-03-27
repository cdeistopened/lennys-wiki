# Product-Market Fit Evaluator

Diagnose where a product stands on the path to product-market fit, identify the gaps, and build an action plan to close them -- using the frameworks taught by Sean Ellis, Rahul Vohra, Sarah Tavel, and other guests on Lenny's Podcast.

## When to Use

The user is building a product and wants to evaluate their PMF status. They might say:
- "Do I have product-market fit?"
- "How do I know if my product has PMF?"
- "We're at 25% on the Sean Ellis test -- what do we do?"
- "Help me evaluate our product-market fit"
- "We have some traction but I'm not sure if it's real PMF"
- "Our retention is flat but we're growing -- is that PMF?"

## The Framework Stack

Run the evaluation through these four lenses in order. Each builds on the previous. At each stage, ask the user for their data. If they don't have it, tell them how to get it. Don't skip ahead -- the diagnosis depends on real inputs, not vibes.

### Lens 1: The Sean Ellis 40% Test (The Leading Indicator)

From Sean Ellis on Lenny's Podcast (episode: sean-ellis):

> "The question is, how would you feel if you could no longer use this product? Once you got a high enough percentage of users saying they'd be very disappointed, most of those products did pretty well. If you felt too low, those products tended to suffer."

Ask the user: **Have you run the "very disappointed" survey? If so, what percentage said "very disappointed"?**

If they haven't run it, walk them through setting it up:

1. **Who to survey:** Users who have actually used the product (not just signed up), used it 2+ times, and used it within the last 1-2 weeks. As Sean Ellis explains: "I'm trying to find feedback from customers who actually really cared about the product."
2. **The question:** "How would you feel if you could no longer use this product?" Three choices: Very disappointed / Somewhat disappointed / Not disappointed.
3. **Sample size:** Sean Ellis recommends at least 30-50 responses for directional data. More is better, but don't wait for perfection.
4. **Delivery method:** Email surveys work fine. In-product interstitials work too. As Rahul Vohra notes: "You can do it however you want. The way Sean initially benchmarked the number was via email surveys. I think email surveys work just fine. The key thing is, and this applies to any survey methodology, if you're going to change the method of surveying, all of your old numbers are invalidated." (episode: rahul-vohra)

**Interpreting the score:**

| Score | Reading |
|-------|---------|
| Below 20% | **Pre-PMF.** The product is not yet a must-have for anyone. Focus on finding who cares and why. |
| 20-39% | **Approaching PMF.** There is a seed of must-have value, but it's not reaching enough users. Dig into the "very disappointed" segment. |
| 40%+ | **Leading indicator of PMF.** You have something people would miss. But this is the beginning, not the end. |
| 50%+ | **Strong PMF signal.** Nubank uses 50% as their threshold before launching any new product publicly. |

**Critical nuance from Sean Ellis:**

> "I would say it's a leading indicator of product market fit. The lightning indicator is, do they actually keep using it? So probably retention cohorts are more accurate, but the problem is, like your time at Airbnb, how long do you have to look at a retention cohort before you know that you've actually long-term retained someone?"

And from Sean Ellis on false positives:

> "If you're having people say that they'd be very disappointed without your product, that's a really good sign. What I can tell you is that not necessarily a false positive, but what is driving people to say they'd be very disappointed... switching costs I think can factor in there. So it's a function of both switching costs and utility of the product."

**The 40% is a compass, not a destination.** Even at 40%, the real work is understanding *who* those people are and *why* they care. As Sean Ellis puts it:

> "It tells you something really important, which is, you haven't created something that people don't care about. So that's an important insight. But until you deeply understand that product market fit, you kind of don't have the tools to be able to grow the business. So that's really the next step, is to dig in and figure out who considers it a must have, how are they using the product, what did they use before, what problem are they solving."

**Source transcript:** `transcripts/episodes/sean-ellis/transcript.md`

### Lens 2: The Superhuman PMF Engine (The Algorithmic Roadmap)

From Rahul Vohra on Lenny's Podcast (episode: rahul-vohra):

> "Let's assume for the sake of argument, that you can put a number on product market fit, and it turns out you can."

Once the user has their Ellis score, walk them through Rahul Vohra's engine for making the number go up. This is the most actionable framework in the stack.

**Step 1: Identify what the "very disappointed" users love.**

Ask them: "What is the main benefit you get from this product?" Open-ended first.

> "You go back to the people who really love your product and you basically ask them why? What is it about my product that you really love? In the early days of Superhuman, it would have been speed and keyboard shortcuts and the overall design aesthetic as well as the time that we were saving you." -- Rahul Vohra

**Step 2: Segment the "somewhat disappointed" users.**

This is the key insight. Divide them into two camps:

> "You then go back to the somewhat disappointed users, and in the Superhuman example, I would simply ask, 'Wait, do you like Superhuman because of its speed or for something else?' And if it's something else, well, and this is hard to do, but politely disregard those people and their feedback. Because even if you built everything that they asked for, they're still pulling you in a different direction." -- Rahul Vohra

Ask the user: **Of your "somewhat disappointed" users, how many care about the same core benefit as your "very disappointed" users?** Those are the ones worth listening to.

**Step 3: Find what's holding the right segment back.**

> "You have then articulated the subsegment of the subsegment that it makes sense to pay attention to, and there's another question in the engine to figure out what they don't like about the product. Now you have a list of things people love, you have a list of things people don't love, and you can work down that list to make the product market fit score go up." -- Rahul Vohra

**Step 4: Build the roadmap.**

> "At the start of every planning cycle, I advise spending half your time doubling down on what people really love and half your time systematically overcoming the objections of the somewhat disappointed users, but specifically those for whom the main benefit resonates." -- Rahul Vohra

Help the user build two lists:
1. **Double down:** What do must-have users love? How can you make it even better?
2. **Convert the fence-sitters:** What's missing for "somewhat disappointed" users who share the same core benefit?

Split roadmap effort 50/50 between these two lists.

**Step 5: Re-measure.**

Re-survey the next cohort after shipping changes. The score should go up. If it doesn't, the segmentation was wrong -- go back to step 2.

Sean Ellis on how Superhuman extended his original method:

> "The Superhuman guys actually found, I think, a good way around that where they said, 'Okay, what is the benefit that my must-have users are focused on? And then of the users who say they'd be somewhat disappointed, so the nice-to-have users, of those users who are also focused on that benefit, what do they need in the product for it then to become a must-have for them?'"

**Source transcript:** `transcripts/episodes/rahul-vohra/transcript.md`

### Lens 3: Retention Curve Analysis (The Lagging Indicator)

The Ellis test is a leading indicator. Retention is the proof. Ask the user about their retention data.

**Key question:** Do you have a cohort retention curve? Does it flatten or does it trend toward zero?

Sean Ellis frames the relationship:

> "Probably retention cohorts are more accurate, but the problem is... how long do you have to look at a retention cohort before you know that you've actually long-term retained someone?"

And:

> "Moving retention is really hard, but it's usually much more function of onboarding to the right user experience than it is about the tactical things that people try to do to improve retention."

**Reading the retention curve:**

| Pattern | Diagnosis |
|---------|-----------|
| Trends toward zero | **No PMF.** Users try it and leave. The product is not a must-have for anyone. |
| Flattens at <20% | **Weak PMF.** A small core retains but most don't. You have a niche -- is it big enough? |
| Flattens at 20-40% | **Moderate PMF.** Healthy for many B2B products. The question is whether the retained cohort is growing. |
| Flattens at 40%+ | **Strong PMF.** For consumer products, this is excellent. For B2B, this is world-class. |

**The activation lever:** The biggest retention gains often come not from the product itself but from getting users to the must-have experience faster. Sean Ellis's case study:

> "At LogMeIn, when we initially tried to grow the business, I was stuck at being able to spend... I couldn't spend more than $10,000 per month profitably... 95% of the people signing up never once did a remote control session."

After a company-wide freeze to fix activation:

> "In three months, we improve the signup to usage rate by a thousand percent. So we went from only 5% of people using the product to 50%... Now they scaled to a million dollars a month with a three-month payback on marketing dollars invested. 80% of new users were coming in through word of mouth."

Ask the user:
- What percentage of signups actually reach your product's core value moment?
- How long does it take a new user to experience the must-have benefit?
- What's your biggest drop-off point between signup and activation?

**Source transcripts:** `transcripts/episodes/sean-ellis/transcript.md`, `transcripts/episodes/sarah-tavel/transcript.md`

### Lens 4: Organic Pull Signals (The Qualitative Proof)

The numbers tell you where you are. The qualitative signals tell you if it's real. This lens is about whether the market is pulling the product from you -- or whether you're still pushing it.

Sarah Tavel (Benchmark) on Lenny's Podcast (episode: sarah-tavel):

> "I think it's very much that you see people retaining. You just feel that where people are texting you or emailing or whatever it is, that they've had a great experience and you see them coming back. And you're not going to make everybody happy. Let's all accept that. But there's a core of users, a persona that you are able to make really happy. That's when you know that you're on the right track."

And Lenny's own framing:

> "It feels a lot like how people describe finding product market fit. Things start to feel like you're not pushing anymore and it's just coming to you."

Matt MacInnis (Rippling) on Lenny's Podcast (episode: matt-macinnis):

> "Product market fit is a sort of thing where you absolutely know it when you see it, and therefore if you don't absolutely know it, you don't have it."

And his reflection on pre-PMF vs. post-PMF:

> "Over and over again, over the course of the many years that I spent at Inkling, we thought we had it. We thought we had product market fit, maybe, maybe. And in hindsight, with the benefit of now having experienced solid product market fit, it was so, so obvious that we didn't."

**Organic pull signal checklist.** Ask the user which of these they're seeing:

| Signal | Pre-PMF | Approaching | Found PMF |
|--------|---------|-------------|-----------|
| Users tell others without being asked | Rarely/never | Occasionally | Regularly |
| Inbound interest (people finding you) | Almost none | Some, mostly from content/press | Consistent and growing |
| Users hack workarounds to use you | Never | Rare | Yes -- they adapt workflows around you |
| Customer support is "how do I do more?" not "this is broken" | Mostly bug reports | Mixed | Mostly "how do I do more?" |
| You're losing deals to "do nothing" | Almost always | Sometimes | Rarely -- the alternative is a competitor, not inaction |
| Users would be upset if you disappeared | A few, maybe | A meaningful segment | A passionate core |

Sarah Tavel also endorses the Ellis test over NPS for this:

> "I don't like NPS for this, and I have a whole blog post on this. I like Sean Ellis's question of how disappointed would you be if this product disappeared? And I think it's if you have at least 40% of people respond that they'd be very disappointed, then you're on the right track."

**Source transcripts:** `transcripts/episodes/sarah-tavel/transcript.md`, `transcripts/episodes/matt-macinnis/transcript.md`

## Output

After running all four lenses, deliver a structured PMF diagnosis:

### 1. PMF Diagnosis

**Status: Pre-PMF / Approaching PMF / Found PMF**

Explain the diagnosis in 2-3 sentences. Be honest. As Matt MacInnis puts it: if you don't absolutely know it, you don't have it.

### 2. Current Level (Scorecard)

| Lens | Signal | Score |
|------|--------|-------|
| Sean Ellis Test | [Their % or "Not yet measured"] | Pre-PMF / Approaching / Found |
| Superhuman Engine | [Have they segmented? Built the roadmap?] | Not started / In progress / Running |
| Retention Curve | [Flattening? At what %?] | Declining / Weak / Moderate / Strong |
| Organic Pull | [Which signals are present?] | Pushing / Mixed / Pulling |

### 3. Gap Analysis

Identify the 2-3 biggest gaps between where they are and PMF. Be specific. Examples:
- "You haven't identified who your must-have users are. 40% is meaningless without knowing who those people are."
- "Your retention curve is declining because your onboarding doesn't deliver the must-have benefit fast enough. 82% of signups never reach the core experience."
- "You're building for everyone instead of the segment that already loves you. The Superhuman Engine says: politely disregard the users pulling you in a different direction."

### 4. Action Plan

Prioritized next steps, in order. Always start with measurement if they haven't measured. Then follow Sean Ellis's sequence:

> Activation first. Then engagement and referral. Then revenue model. Then acquisition channels. "The acquisition side is so competitive now that if you're not really efficient at converting and retaining and monetizing customers, you can't find scalable, profitable customer acquisition channels."

For each action, reference the specific framework and guest that supports it.

**Be blunt.** Sean Ellis took a company from 7% to 40% in two weeks -- but only because he was honest about the 7%. The user needs the truth more than they need encouragement.

## Related Skills

- **activation-masterclass** — If you haven't instrumented activation, define your activation event first; activation is the gateway to PMF measurement
- **retention-workshop** — Lens 3 uses retention curves; go deeper on cohort analysis, churn diagnosis, and engagement loop design
- **pricing-strategist** — Willingness-to-pay signals correlate with PMF; revisit pricing after confirming fit

## Related Frameworks

- `sean-ellis-pmf-test.md` — The 40% "very disappointed" test used in Lens 1
- `superhuman-pmf-engine.md` — Rahul Vohra's algorithmic roadmap for improving PMF score, used in Lens 2
- `aha-moment-definition.md` — How to identify the moment users experience core value, connected to activation and retention lenses
- `activation-metric-design.md` — Framework for defining and measuring the activation event that predicts retention
- `hierarchy-of-engagement.md` — Sarah Tavel's framework for evaluating whether users are building accruing benefits and mounting losses
- `value-driven-discovery.md` — The Reference Customer Method: find 6-8 (B2B) or 15-25 (B2C) customers who love your product enough to stake their reputation on it
- `jtbd-forces-diagram.md` — Map the four forces that govern every purchase decision: push, pull, habit, and anxiety
- `jtbd-buying-timeline.md` — The six phases customers go through before and after purchase, not the instant decision most teams assume
- `customer-led-growth.md` — Map your customer's journey through struggle, evaluation, and growth phases with measurable milestones at each stage
- `continuous-discovery-interviews.md` — Set up a system where customer interviews happen weekly without effort, feeding your PMF evaluation with fresh signal
- `organic-first-feature-validation.md` — Organic adoption is a PMF signal: if users find and use a feature without being told, the dream outcome resonates
