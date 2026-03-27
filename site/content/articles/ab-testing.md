---
type: anchor
title: "A/B Testing"
domain: product
aliases: ["A/B testing", "experimentation", "split testing", "controlled experiments"]
episodes: [ronny-kohavi, lauryn-isford, mayur-kamat, archie-abrams, ramesh-johari]
status: draft
---

# A/B Testing

You have a feature change you believe will improve a metric. Should you A/B test it, or just ship it? The answer depends on the cost of being wrong, the volume of traffic you have, and the type of decision. The best experimentation programs — at Booking, Netflix, Airbnb, and Microsoft — test thousands of changes per year. But they also know when *not* to test. Understanding both when to test and when to ship is what separates mature experimentation culture from experimentation theater.

## The Core Idea

An A/B test is a controlled experiment where users are randomly assigned to a control group (existing experience) or a treatment group (new experience), and the difference in a target metric is measured. If the treatment produces a statistically significant improvement, you ship it. If not, you revert.

[[ronny-kohavi|Ronny Kohavi]], who built the experimentation platforms at Microsoft, Amazon, and Airbnb, has published the most comprehensive data on experiment failure rates. The numbers are humbling: "Overall at Microsoft, about 66%, two thirds of ideas fail. At Bing, which is a much more optimized domain after we've been optimizing it for a while, the failure rate was around 85%. And then at Airbnb, this 92% number is the highest failure rate that I've observed." He notes that Booking, Google Ads, and other companies report similar 80-90% failure rates. This means most changes that product teams believe will improve the product actually do not — or make it worse. Without testing, you would ship all of them and never know which ones were harmful.

## When to A/B Test

| Situation | Test? | Why |
|-----------|-------|-----|
| High-traffic surface, measurable metric | Yes | You have the volume for statistical significance |
| Change affects revenue, retention, or conversion | Yes | Cost of being wrong is high |
| Two viable approaches and no clear winner | Yes | Let data decide |
| Gradual rollout of a risky change | Yes | Use as a safety net during deployment |
| UI change to a core flow | Yes | Users may react unpredictably |

## When Not to A/B Test

| Situation | Ship Instead | Why |
|-----------|-------------|-----|
| Bug fix or obvious improvement | Ship directly | Testing the obvious wastes time |
| Low traffic / early stage | Ship and measure before/after | Insufficient volume for statistical power |
| Strategic or foundational change | Ship with monitoring | A/B testing a rebrand or new product direction is meaningless |
| Ethical or legal requirement | Ship directly | Some changes are not optional |
| The cost of testing exceeds the cost of being wrong | Ship and iterate | Small changes to low-stakes surfaces |

[[ronny-kohavi|Kohavi]] provides a concrete threshold: "Unless you have at least tens of thousands of users, the math, the statistics just don't work out for most of the metrics that you're interested in." For a retail site trying to detect a 5% change, you need roughly 200,000 users. Below that, start building the culture and platform so you are ready when you scale. Above it, "the magic starts happening."

[[lauryn-isford|Lauryn Isford]], who was head of growth at Airtable, offers the counterpoint — not everything should be tested, even at scale. She identifies two reasons teams experiment: "to understand more precisely the metric impact of what they're building" and "risk mitigation." But she argues that when the precision difference between a 6% and 7% lift "doesn't help all that much beyond being able to say in your performance review, 'Hey, I increased activation by 7%,'" the experiment is a waste. "Experiments can be expensive."

## Running Tests Correctly

### Sample Size and Duration

The most common experimentation mistake: ending the test too early because the result "looks significant."

| Parameter | Rule of Thumb | Common Mistake |
|-----------|---------------|----------------|
| Sample size | Calculate required sample before starting | Peeking at results and stopping early |
| Duration | Run for at least 1-2 full business cycles (1-2 weeks minimum) | Running only 3 days and calling it |
| Significance | p < 0.05 (95% confidence) | Accepting p = 0.08 as "close enough" |
| Novelty effects | Wait for novelty to wear off (usually 1-2 weeks) | Measuring in the first 48 hours |
| Weekday/weekend effects | Ensure the test covers both weekdays and weekends | Running Monday-Friday only |

[[ronny-kohavi|Kohavi]] explains the "peeking problem" from his experience across Microsoft, Amazon, and Airbnb: if you check your results daily and stop the test as soon as you see a significant result, you dramatically increase the false positive rate. A test that reaches p < 0.05 on day 3 may not hold at p < 0.05 by day 14. Always pre-commit to a test duration and sample size. He also warns that "10% of experiments tend to be aborted on the first day" due to implementation issues, not because the idea is bad — another reason not to rush to conclusions.

### Choosing the Right Metric

Every test needs a primary metric (the one you are trying to move) and guardrail metrics (the ones you are trying not to damage).

| Component | Purpose | Example |
|-----------|---------|---------|
| Primary metric | What you expect to improve | Sign-up conversion rate |
| Secondary metrics | Related outcomes you want to monitor | Activation rate, D7 retention |
| Guardrail metrics | Things that should not get worse | Revenue per user, page load time, support ticket volume |

The guardrail metric is critical. A change that increases sign-up conversion by 10% but decreases activation by 20% is a net negative — you are bringing in more users but fewer of them are getting value. Without guardrails, you would celebrate the conversion win and miss the activation loss.

## Interpreting Results

### Statistically Significant Positive Result

Ship the treatment. But verify:
- Did guardrail metrics hold?
- Is the effect size meaningful, not just significant? (A 0.1% improvement may be statistically significant with large enough sample but not worth the engineering complexity.)
- Was the test clean? (No bugs, no external events that could confound.)

### Statistically Significant Negative Result

Revert to control. Analyze:
- What went wrong? User behavior data and qualitative feedback can explain *why* the change hurt.
- Was there a segment that benefited? Sometimes a change hurts overall but helps a specific segment — you can target the change to that segment.

### Inconclusive Result (Not Significant)

This is the most common and most misinterpreted outcome. It does not mean the change had no effect. It means you could not detect an effect with the available sample size.

Options:
- Run longer for more power
- Accept that the effect is too small to detect (and likely too small to matter)
- Ship if the change is an improvement on non-metric dimensions (code quality, design consistency) and guardrails held

## Building an Experimentation Culture

The best companies — Booking.com, Netflix, Airbnb — do not just run A/B tests. They have built cultures where experimentation is the default decision-making method.

### Characteristics of Mature Experimentation

| Characteristic | What It Looks Like |
|---------------|-------------------|
| Test velocity | 100+ concurrent experiments |
| Democratized access | Any PM or engineer can launch a test |
| Shared infrastructure | Central experimentation platform, not per-team tooling |
| Result sharing | Weekly experimentation reviews, searchable result archive |
| Institutional memory | Failed experiments are documented and searchable, preventing repeated mistakes |
| Humility | Leadership accepts data over opinions; HiPPO (Highest Paid Person's Opinion) is explicitly deprioritized |

[[mayur-kamat|Mayur Kamat]], CPO at N26, frames experimentation as the thing that elevates product management from opinion to discipline: "The challenge with being a product manager is, everybody thinks they can do the job. Anybody who uses the product thinks they have ideas. So at some point in time, you're like, 'What is my discipline? What is my science?' The moment you build experimentation, you've now made it scientific." He goes further: "Strategy is a little bit overrated for product. For most product managers, your strategy should be, 'How fast can I go from hypothesis to data?'"

### Experimentation Anti-Patterns

1. **Testing to validate, not to learn.** If you only run tests you expect to win, you are using experimentation as a rubber stamp, not a learning tool.
2. **The HiPPO override.** A senior leader ships their idea despite a negative test result. This destroys experimentation culture faster than anything else.
3. **Over-testing low-stakes changes.** Testing the color of a button that 200 users see per month is a waste of experimentation capacity.
4. **Under-testing high-stakes changes.** Shipping a pricing change or checkout redesign without testing is the opposite mistake and much more expensive.
5. **Ignoring qualitative data.** A/B tests tell you *what* happened. User research tells you *why*. Both are needed.

[[ronny-kohavi|Kohavi]] stresses that institutional memory is what separates a real experimentation culture from test-and-forget: "I think one of the mistakes that some companies make is they launch a lot of experiments and never go back and summarize the learnings." He advocates quarterly reviews of the most *surprising* experiments — not just winners, but cases where "the estimated result beforehand and the actual result differ by a lot." His most striking example: a Bing engineer implemented a trivial change — moving the second line of ad text to the first line — that had sat on the backlog for months. The result triggered a revenue alarm: a 12% increase worth $100 million annually, with no damage to user metrics. "That simple idea increased revenue by about 12%. This is something that just doesn't happen."

## Key Takeaway

- Most product ideas do not work. Experimentation protects users from bad ideas, not just validates good ones.
- Do not test everything. Test high-traffic, high-stakes changes. Ship bug fixes, strategic decisions, and low-stakes changes directly.
- Pre-commit to sample size and duration before starting. Never peek and stop early.
- Every test needs guardrail metrics. A win on the primary metric that damages a guardrail is a net loss.
- Inconclusive results are not failures. The change was too small to detect — likely too small to matter.
- Build experimentation culture, not just experimentation infrastructure. The culture is about humility and data-driven decision-making; the infrastructure is just plumbing.

## Related

- [[north-star-metric|North Star Metric]] — Tests should ultimately connect to the NSM
- [[activation-rate|Activation Rate]] — Common target metric for onboarding experiments
- [[retention|Retention]] — The most important guardrail metric for most experiments
- [[roadmap-prioritization|Roadmap Prioritization]] — Test results inform future prioritization
- [[product-sense|Product Sense]] — Good product sense generates better experiment hypotheses

## Sources

- [[ronny-kohavi|Ronny Kohavi on A/B testing]] — Failure rates (66-92%), Bing $100M experiment, OEC framework, 200K user threshold, institutional learning
- [[lauryn-isford|Lauryn Isford on mastering onboarding]] — When not to experiment, cost of testing, results-oriented culture over experiment-everything culture
- [[mayur-kamat|Mayur Kamat on unconventional product lessons]] — Experimentation as PM science, hypothesis-to-data speed, Statsig dashboards
- [[archie-abrams|Archie Abrams on Shopify growth]] — Long-term holdouts, revisiting experiment impact 1-3 years later
- [[ramesh-johari|Ramesh Johari on marketplace lessons]] — Experimentation in marketplaces, winner-loser tradeoffs
