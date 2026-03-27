---
name: "Overall Evaluation Criterion (OEC)"
description: "Define a composite metric for A/B tests that balances short-term revenue against long-term user experience"
type: framework
domain: metrics
episodes:
  - ronny-kohavi
source_guests:
  - Ronny Kohavi
score: 8
---

## When to Use

Use this framework when your A/B testing program optimizes for a single metric (usually revenue or conversion) and you suspect it is producing wins that hurt users in ways you are not measuring. It is essential at any company where teams can game a metric — sending more emails, showing more ads, degrading user experience — and claim success because the target number went up. The OEC forces you to define what "winning" actually means before you run the test.

## The Framework

Ronny Kohavi, who built experimentation platforms at Microsoft, Amazon, and Airbnb, argues that the hardest part of A/B testing is not running experiments — it is knowing what to optimize for. The OEC is a composite metric (or set of metrics with constraints) that is designed to be causally predictive of the lifetime value of the user.

### Step 1: Identify Your Primary Metric

Start with the metric your team is trying to move. This is usually revenue, conversion rate, or engagement. State it explicitly.

> "The OEC or the overall evaluation criterion is something that I think many people that start to dabble in A/B testing miss. And the question is, what are you optimizing for? And it's a much harder question that people think because it's very easy to say we're going to optimize for money, revenue. But that's the wrong question, because you can do a lot of bad things that will improve revenue."

### Step 2: Add Countervailing Metrics (Guardrails)

Identify the user experience metrics that will degrade if you push too hard on the primary metric. These are your guardrails — metrics that must not get worse (or at least not worse than a defined threshold).

> "So there has to be some countervailing metric that tells you, how do I improve revenue without hurting the user experience?"

Examples of guardrails Kohavi has used:
- **Bing search**: time for user to reach a successful click, percentage of successful sessions, churn rate
- **Airbnb**: predicted guest rating of listing at time of stay (not just booking conversion)
- **Amazon email**: unsubscribe rate, modeled as lost lifetime value in dollars

### Step 3: Frame It as a Constraint Optimization Problem

The cleanest formulation is a constraint: maximize your primary metric subject to a budget on the user experience metric. This makes the trade-off explicit and measurable.

> "I want you to increase revenue, but I'm going to give you a fixed amount of average real estate that you can use. So for one query, you can have zero ads. For another query, you can have three ads. For a third query, you can have wider, bigger ads. I'm just going to count the pixels that you take, the vertical pixels. And I will give you some budget. And if you can under the same budget make more money, you're good to go."

Alternatively, combine multiple metrics into a single formula — a weighted combination of revenue impact and user experience impact that produces one number to evaluate each experiment.

> "We came up with an OEC that is based on all these metrics that allows you to say, 'Okay, I'm willing to take this additional money if I'm not hurting the user experience by more than this much.' So there's a trade-off there."

### Step 4: Model the Long-Term Cost of Degradation

To set the weights or constraints, you need data on what happens when you degrade user experience. Run dedicated experiments to map the relationship between your primary metric and user harm.

> "We've run those experiments, and we were able to map out this number of ads causes this much increase to churn, this number of ads causes this much increase to the time that users take to find a successful result."

At Amazon, Kohavi's team modeled the dollar cost of an email unsubscribe by estimating the lifetime value lost when a user opts out of the email channel:

> "What is the value that we're losing from an unsubscribe? And we came up with a number, it was a few dollars. But the point was, now we have this countervailing metric. We say, 'Here's the money that we generate from the emails. Here's the money that we're losing on long-term value. What's the trade-off?'"

### Step 5: Validate Directional Agreement

Before launching your OEC, run a sanity check: does everyone on the team agree on whether the metric going up is good or bad? If they disagree, the OEC is broken.

> "It was very funny because they surprised me. They said, 'Hey Ronny, we read some of your papers. We know there's this term called OEC. We decided the time on site is our OEC.' And I said, 'Wait a minute. Some of your main goals is support site. Is people spending more time on the support site a good thing or a bad thing?' And then half the room thought that more time is better, and half the room thought that more time is worse. So an OEC is bad if directionally, you can't agree on it."

### Step 6: Use the OEC as Both Oracle and Safety Net

The experimentation platform serves two purposes, and the OEC powers both:

> "The safety net means that if you launch something bad, you should be able to abort quickly. The other one, which is the more standard one, is at the end of the two-week experiment, we will tell you what happened to your key metric and to many of the other surrogate, and debugging, and guardrail metrics."

## Example

At Amazon, the email recommendations team was credited for revenue every time a user clicked through an email and purchased. With no countervailing metric, the team's incentive was simple: send more emails. The result was spam.

> "The team just ramped up the number of emails that they were sending out, and claimed to make more money, and their fitness function improved."

Kohavi's team introduced the unsubscribe cost model as a countervailing metric. The result was dramatic:

> "When we started to incorporate those formula, more than half the campaigns that were being sent were negative."

This insight led to a product innovation: when users unsubscribe, default to unsubscribing from just that campaign type (e.g., "author emails") rather than all emails. The countervailing metric shrinks, the team can send more relevant emails, and user lifetime value is preserved.

At Bing, the search relevance team used an OEC to measure annual improvement. Hundreds of engineers each contributed small gains:

> "They have a metric, we'll talk about OEC, the overall evaluation criterion. But they have a metric that their goal is to improve it by 2% every year. It's a small amount, and that 2% you can see here's a 0.1, and here's a 0.15, here's a 0.2, and then they add up to around 2% every year, which is amazing."

## Output

After defining your OEC, you walk away with:

1. **A composite metric** (or metric + constraints) that balances revenue against user experience
2. **Named guardrail metrics** that every team knows they cannot degrade
3. **A model of long-term cost** — what it costs in lifetime value when you degrade user experience
4. **Directional clarity** — the entire team agrees on what "up" means for the OEC
5. **A decision rule for experiments** — ship if the OEC improves (or the primary metric improves within the constraint budget)
6. **A detection framework for gaming** — when a team claims a win but guardrails are degrading, the OEC catches it

The key insight is Kohavi's definition of what makes a good OEC: "The key word is lifetime value, which is you have to define the OEC such that it is causally predictive of the lifetime value of the user."

> Source: episodes/ronny-kohavi/transcript.md
