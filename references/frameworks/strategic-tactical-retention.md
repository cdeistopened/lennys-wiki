---
name: "Strategic vs. Tactical Retention"
description: "Most product teams only work on strategic retention (features, ICP, time to value) and miss tactical retention (payment failures, cancellation flows, offboarding) — which is 25-40% of your churn problem"
type: framework
domain: growth
episodes:
  - patrick-campbell
source_guests:
  - Patrick Campbell
score: 60
---

# Strategic vs. Tactical Retention

## When to Use

Use this when your churn rate is stubbornly high despite strong product work, or when your team assumes that retention is exclusively a product problem. Patrick Campbell (founder of ProfitWell, bootstrapped and sold for $200M+) analyzed billions of dollars in subscription revenue and found that product teams consistently overlook a category of churn that accounts for 25-40% of the problem. If you are past product-market fit and still losing customers at a rate you cannot explain with product issues alone, you likely have a tactical retention gap.

## The Framework

### Two Types of Retention

**Strategic Retention** is everything product leaders already focus on: defining the ICP, reducing time to value, shipping the right features, building the right roadmap, agonizing over paper cuts, finding the mission metric. This is the domain of great product leadership.

**Tactical Retention** is the operational machinery of not losing customers for reasons that have nothing to do with your product's value: payment failures, expired credit cards, poorly designed cancellation flows, missing offboarding sequences, suboptimal plan structures.

> "You fail at realizing most of the time that there are two types of retention. There is strategic retention and then there's tactical retention... Because you're so focused and so biased towards that, you miss out typically on this thing we call tactical retention, and these are things like payment failures, term optimization, cancellation flows, offboarding, et cetera." — Patrick Campbell

### Why Teams Miss It

Product teams are structurally biased toward strategic retention. They think about the future — features, roadmap, differentiation. Tactical retention feels like plumbing. It is not intellectually stimulating and does not show up in product reviews. But after product-market fit, tactical issues account for 25-40% of all churn.

> "If you're past product market fit this area, this tactical retention, it's typically about 25 to 40% of your churn problem, which is a significant amount, but you don't really look at it because again, you're like, 'I've got to go focus on features.'" — Patrick Campbell

### Tactical Retention Playbook

**1. Fix payment failures with a marketing funnel.**

When a credit card fails, most companies send a generic "update your payment" email. Instead, build a proper dunning sequence — the same way you would build an onboarding drip campaign. This is two months of work, not rocket science, and it recovers a meaningful percentage of involuntary churn.

**2. Optimize cancellation flows (the 18-30 second window).**

Patrick's team analyzed two million cancellation flows and identified a narrow window of influence:

> "You have about 18 to 30 seconds when someone hits that cancel button." — Patrick Campbell

In that window, ask exactly two questions:

**Question 1: "Why are you leaving?"** Use multiple choice, not free text. Free text yields one useful response per hundred.

**Question 2: "What did you like about the product?"** This question is counterintuitive but powerful. The person canceling is on a freight train to leave. Asking what they liked taps into nostalgia and stops the momentum.

> "The minute you ask them what they like, you're basically tapping into this nostalgia effect and you're stopping that freight train." — Patrick Campbell

With the answers to both questions, plus the customer's engagement data, plan, and firmographics, you can present a targeted salvage offer: a pause plan, a maintenance plan, a discounted tier, or a concession that addresses their specific reason for leaving.

**3. Offer pause and maintenance plans.**

Not every churning customer is lost forever. Some are seasonal, some are budget-constrained, some just need a break. A pause option retains the relationship and makes reactivation trivial.

**4. Assign tactical retention to the finance team.**

Product teams will always prioritize the future over fixing payment plumbing. Patrick recommends that finance or operations own tactical retention because the work is closer to their domain and will not compete with the product roadmap for attention.

> "I always suggest finance teams should just take this on because product teams are always going to be thinking so much more on the future rather than fixing this right now." — Patrick Campbell

### Bonus: The Retention Curve Shape

Patrick's data across thousands of SaaS companies revealed that the lowest-churn products fall into two categories: workflow products you use every single day, and "anti-active-usage" products that deliver value without requiring you to log in (like ProfitWell's automated dunning). Anything in the middle — products you use occasionally — has the worst retention.

> "Those products that are workflow products you use every single day or those products you don't have to log into but you still get the value, that's where the lowest churn rates are, the highest retention. Anything in the middle, it's like death." — Patrick Campbell

## Example: ProfitWell

ProfitWell (now part of Paddle) built its entire product thesis around tactical retention. Their metrics product was free — connected to Stripe and gave founders dashboards without requiring them to do anything. Their paid products automated the tactical retention playbook: dunning sequences for failed payments, optimized cancellation flows, salvage offers.

ProfitWell's own retention was exceptional because the product delivered value without requiring active usage — the "anti-active-usage" model. Customers connected it once, forgot about it, and kept getting value. This is the lowest-churn product archetype.

## Output

An audit using this framework produces:
- A split of your churn into strategic vs. tactical causes (expect 25-40% tactical)
- A dunning sequence for payment failures modeled as a marketing funnel
- A two-question cancellation flow with segmented salvage offers
- A pause/maintenance plan option for customers who would otherwise cancel
- Clear ownership assignment (finance or ops, not product) for tactical retention
- A benchmark of where your product sits on the usage-frequency retention curve

## Source

[[patrick-campbell|Patrick Campbell]] on Lenny's Podcast — "10 lessons on bootstrapping a $200m business" (February 2023)
