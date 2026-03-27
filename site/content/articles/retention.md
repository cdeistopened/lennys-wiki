---
type: anchor
title: "Retention"
domain: growth
aliases: ["retention", "churn", "retention rate", "user retention", "customer retention"]
episodes: [naomi-gleit, sarah-tavel, bangaly-kaba, sean-ellis, archie-abrams]
status: draft
---

# Retention

You are growing, but users are leaving as fast as they arrive. Retention is the metric that determines whether your growth is real or an illusion — whether you are filling a bucket or pouring water into a sieve. Every growth channel, every marketing campaign, every product improvement is wasted if users do not stay. Retention is not one of many metrics. It is the metric that validates all the others.

## The Core Idea

Retention measures the percentage of users who return to your product over time. A retention rate of 40% at day 30 means that 40 out of every 100 new users are still active one month after signing up. The shape of the retention curve — not just the absolute number — tells you whether your product has found [[product-market-fit|product-market fit]].

[[naomi-gleit|Naomi Gleit]], head of product at Meta and Facebook's 29th employee, describes the foundational insight that created the legendary Facebook growth team: "What we found was the churn and resurrection lines were actually much larger than the new user line, which implied to us that retention and driving those two lines was actually our biggest lever to drive net growth." The growth accounting equation — new users minus stale users plus resurrected users — revealed that focusing on acquisition was solving the wrong problem. The bigger lever was keeping people who had already signed up. This insight redirected Facebook's entire growth strategy from acquisition to retention.

## Reading Retention Curves

The retention curve is a plot of active users (y-axis) over time since sign-up (x-axis). Every product's retention curve eventually flattens or hits zero. The question is where it flattens.

### The Three Retention Curve Shapes

| Shape | What It Means | Implication |
|-------|---------------|-------------|
| **Flattening curve** (levels off above zero) | A segment of users finds ongoing value | You have PMF for that segment. Focus on expanding it. |
| **Declining curve** (always trending down) | No segment retains durably | You do not have PMF yet. Fix the product before scaling acquisition. |
| **Smiling curve** (dips then recovers) | Users who leave come back | Seasonal products, reactivation working, or habit formation delayed |

A flattening retention curve is the most reliable signal of product-market fit. [[sarah-tavel|Sarah Tavel]], partner at Benchmark and former first PM at Pinterest, frames retention through her Hierarchy of Engagement: "The test for me, of whether you're building a product that has the ingredients to create a retentive product, is that the product should get better the more you use it, and you'll have more to lose by leaving it." At Pinterest, this meant that the more you pinned, the more personalized your feed became and the more you had invested in your boards — creating compounding value that made leaving increasingly costly.

### Retention Windows

Different products measure retention on different time scales:

| Product Type | Primary Retention Window | Why |
|-------------|------------------------|-----|
| Social / messaging | D1, D7, D30 | Daily use expected |
| B2B SaaS | Weekly, Monthly | Work-driven cadence |
| E-commerce / marketplace | Monthly, Quarterly | Purchase frequency |
| Consumer subscription | Monthly, Annual renewal | Billing cycle |
| Seasonal (tax, travel) | Annual | Usage is seasonal by nature |

Measuring retention on the wrong window produces misleading data. A B2B tool measured on D1 retention will look terrible — users do not use work tools on Saturday.

## Diagnosing Retention Problems

### New User Retention (Day 0-30)

If users leave in the first week, the problem is almost always [[onboarding|onboarding]] and [[activation-rate|activation]]:

| Symptom | Likely Cause | Fix |
|---------|-------------|-----|
| Massive drop-off Day 0-1 | Product does not deliver value quickly enough | Reduce time to value, improve first-run experience |
| Drop-off between D1 and D7 | Users activated but did not form a habit | Introduce habit-forming loops, trigger-action patterns |
| Drop-off between D7 and D30 | Initial value wore off, no deeper engagement | Reveal additional value layers, drive feature discovery |

[[naomi-gleit|Naomi Gleit]] describes how Facebook tackled early retention by identifying the variable most correlated with it: "How do we drive engagement and retention? We look at the variables that correlate most with that outcome. What we found was friending." The famous "seven friends in 10 days" activation metric was not about a magic number — it was about reaching a threshold where the product became compelling. As Gleit notes: "Facebook is much more compelling if you have 14 friends. And the other thing around 10 or 14 days is we wanted it to happen quickly, we wanted to have you experience the magic moment soon after you had registered on the site to prevent you from churning."

### Medium-Term Retention (Month 1-6)

If users leave after the first month, the problem is typically value exhaustion or competitive alternatives:

| Symptom | Likely Cause | Fix |
|---------|-------------|-----|
| Steady monthly decline | Users extracted the initial value but found no ongoing need | Build ongoing use cases, content refresh, social features |
| Sudden drop at a specific point | Feature limitation, pricing wall, or alternative discovered | Investigate what happens at that time threshold |
| Segment-specific decline | Certain user types do not retain | Focus on best-retaining segments, deprioritize poor-fit segments |

### Long-Term Retention (6+ months)

If established users leave, the causes are usually:
- Job change (B2B — the champion leaves the company)
- Competitive substitution (a better alternative emerges)
- Value saturation (they have gotten what they needed)
- Quality degradation (the product got worse — bugs, bloat, price increases)

## Retention Benchmarks

Approximate benchmarks drawn from patterns across multiple episodes:

| Product Type | D1 | D7 | D30 | Good? |
|-------------|-----|-----|------|-------|
| Top consumer social | 60%+ | 40%+ | 25%+ | Top quartile |
| Average consumer app | 35% | 15% | 8% | Median |
| B2B SaaS (good) | N/A | 80%+ weekly | 70%+ monthly | Strong |
| B2B SaaS (average) | N/A | 60% weekly | 50% monthly | Adequate |
| Marketplace (good) | N/A | N/A | 30%+ monthly | Transaction-based |

The most important comparison is not to benchmarks but to your own cohort trends. Is each new cohort retaining better than the previous one? If yes, the product is improving. If not, something is degrading.

## Cohort Analysis

Raw retention numbers can be misleading because they blend early and late users. Cohort analysis separates users by sign-up date and tracks each cohort independently.

**Why cohorts matter:**

A product with 50% overall monthly retention might consist of:
- Old cohorts retaining at 70% (loyal users)
- Recent cohorts retaining at 20% (acquisition channel brought low-intent users)

The aggregate number hides that recent growth quality is terrible. Cohort analysis reveals this.

### What to Look For

| Pattern | What It Means |
|---------|---------------|
| Each newer cohort retains better | Product is improving; changes are working |
| Each newer cohort retains worse | Acquisition quality declining, or product changes hurting new users |
| All cohorts flatten at the same level | Stable product with consistent value proposition |
| Old cohorts declining after being flat | Something changed — investigate feature changes, competitor entry, or degradation |

## Improving Retention

[[bangaly-kaba|Bangaly Kaba]], who was an early growth PM at Facebook, head of growth at Instagram, and VP of product at Instacart, warns against the most common retention improvement anti-pattern: "Someone says, 'Hey, you know what? This would be great to build.' And you go pull data to go justify why that would be great to build. Call that identify, justify, execute." His alternative: "First you have to really understand from first principles what is actually going on. So understand, identify, execute." The understand step — instrumenting data, watching user behavior, mapping drop-off points — is where most retention insights come from. Skipping it leads to building solutions for problems that do not exist.

### The Retention Equation

Retention = Value Received > Effort Required + Alternatives Available

To improve retention, you can:
1. **Increase value delivered** — More features, better experience, more content
2. **Reduce effort required** — Better UX, automation, fewer friction points
3. **Increase switching costs** — Data lock-in, integrations, social graph, workflow investment (but do not manufacture artificial lock-in — it breeds resentment)

### Tactical Retention Levers

| Lever | How It Works | Example |
|-------|-------------|---------|
| Habit loops | Product use becomes automatic through trigger-action-reward patterns | Duolingo streak counter |
| Content freshness | New content gives users a reason to return | Netflix new releases |
| Social obligation | Users return because others depend on them | Slack (team expects response) |
| Investment effects | The more the user puts in, the more they have to lose by leaving | Notion (accumulated knowledge), Figma (team files) |
| Lifecycle emails | Re-engage users who are drifting away | "You have 3 unread messages" |
| Feature discovery | Surface features users have not tried | "Did you know you can...?" |

[[sarah-tavel|Sarah Tavel]] extends retention thinking to its ultimate form — self-perpetuating loops: "Every time a user uses your product, I love to think of it as this kinetic energy that they're putting into your product. Your job with a great product is to take that energy and, as much as possible, convert it back to the experience that they're having." Products that fail to create these loops, like Evernote (no collaborative features, no network effects), eventually tap out on growth because they must pay to acquire every new user.

## Retention and Growth: The Compounding Effect

Here is why retention is the most important growth metric:

A product with 10,000 monthly sign-ups and 50% monthly retention:
- Month 1: 10,000 active users
- Month 6: ~31,000 active users
- Month 12: ~39,000 active users

The same product with 60% monthly retention:
- Month 1: 10,000 active users
- Month 6: ~49,000 active users
- Month 12: ~88,000 active users

A 10 percentage point improvement in retention more than doubled the active user base at month 12 — with zero change in acquisition. This is the arithmetic behind Naomi Gleit's insight at Facebook: the churn and resurrection lines were larger than the new user line, making retention the highest-leverage growth investment.

## Key Takeaway

- Retention is the metric that validates all others. Growth without retention is waste.
- Read retention curves, not just numbers. A flattening curve is the strongest signal of product-market fit.
- Analyze retention by cohort, not in aggregate. Aggregate numbers hide whether product quality is improving or degrading.
- Fix new-user retention (onboarding and activation) first — it is where the largest volume of users is lost.
- A small improvement in retention compounds dramatically over time, often exceeding the impact of doubling acquisition spend.

## Related

- [[activation-rate|Activation Rate]] — Activation is the leading indicator of early retention
- [[onboarding|Onboarding]] — The experience that determines first-week retention
- [[north-star-metric|North Star Metric]] — Retention is typically a key input in the NSM tree
- [[product-market-fit|Product-Market Fit]] — Flattening retention curves are the strongest PMF signal
- [[growth-loops|Growth Loops]] — Retention determines whether loops compound or decay

## Sources

- [[naomi-gleit|Naomi Gleit on Meta growth]] — Growth accounting framework, 7 friends in 10 days, shift from acquisition to retention, understand-identify-execute
- [[sarah-tavel|Sarah Tavel on the hierarchy of engagement]] — Core action framework, accruing benefits and mounting losses, self-perpetuating loops, Evernote vs Pinterest
- [[bangaly-kaba|Bangaly Kaba on growth frameworks]] — Understand work, identify-justify-execute anti-pattern, onboarding-to-habit gap
- [[sean-ellis|Sean Ellis on growth hacking]] — PMF test as retention predictor, onboarding to the right user experience
- [[archie-abrams|Archie Abrams on Shopify growth]] — Optimizing for churn, long-term experiment holdouts on retention
