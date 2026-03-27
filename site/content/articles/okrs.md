---
type: anchor
title: "OKRs"
domain: metrics
aliases: ["OKRs", "objectives and key results", "OKR", "goal setting"]
episodes: [christina-wodtke, matt-lemay, claire-hughes-johnson, geoff-charles, varun-parmar]
status: draft
---

# OKRs

You need a system for setting and tracking quarterly goals that connects individual team work to company strategy. OKRs — Objectives and Key Results — are the most widely adopted framework for this in technology companies, and also the most frequently botched. The gap between how OKRs are designed to work and how most companies actually run them explains why so many PMs have a complicated relationship with goal-setting processes.

## The Core Idea

An OKR consists of two parts:
- **Objective:** A qualitative, aspirational statement of what you want to achieve. It should be motivating and directional.
- **Key Results:** 2-4 quantitative measures that define success. If the key results are met, the objective is achieved.

[[christina-wodtke|Christina Wodtke]], author of *Radical Focus* and the most cited OKR authority on the podcast, frames the relationship: the Objective is the *destination*, and the Key Results are the *signposts that tell you you have arrived.* As she puts it, "OKRs are more of a vitamin, they're not a medicine. If you take OKRs and you're like, 'Oh, this will fix everything that's wrong with you' — no, that's not going to happen. It's just going to reveal everything that's wrong with your company."

### The Anatomy of a Good OKR

**Objective:** Make onboarding so effective that new users cannot imagine going back to their old workflow.

**Key Results:**
1. Increase sign-up to activation rate from 22% to 35%
2. Reduce median time-to-value from 3 days to 4 hours
3. Improve D30 retention for new cohorts from 40% to 55%

**Why this works:**
- The Objective is qualitative, motivating, and sets direction
- The Key Results are specific, measurable, and time-bound (the quarter)
- Achieving the KRs would genuinely indicate the Objective is met
- The KRs are outcomes, not outputs (not "ship 3 onboarding features")

## OKRs Done Badly: The Anti-Patterns

Multiple guests describe the same failure modes. These are more common than good OKRs.

### 1. OKRs as Task Lists

The most pervasive anti-pattern: Key Results that are outputs rather than outcomes.

| Bad KR (Output) | Better KR (Outcome) |
|-----------------|---------------------|
| Launch redesigned onboarding flow | Increase activation rate from 22% to 35% |
| Ship 3 new integrations | Increase integration adoption from 15% to 30% |
| Publish 20 blog posts | Increase organic traffic by 40% |
| Hire 5 engineers | Reduce sprint velocity variance by 50% |

Output-based OKRs reward activity, not impact. A team can achieve every output-based KR and move zero business metrics. As [[matt-lemay|Matt LeMay]] describes, "I think the tendency among a lot of product teams is to key to those middle pieces, to say, 'Okay, what we're doing is on strategy. What we're doing is part of objectives. We did OKRs, right? We spent three weeks coming up with our OKRs for three months. It's OKR season, everybody.'" The result is what he calls "the low impact PM death spiral" — teams adding features that look like progress but move nothing that matters to the business.

### 2. Too Many OKRs

[[christina-wodtke|Wodtke]] is emphatic: one Objective per team per quarter, maximum. Three Key Results per Objective, maximum. She explains, "Companies have a tendency to try to do everything all at this exact moment. And so everybody's working with 1% on this, 1% on that and 1% on the other. And instead you use the OKRs and say, 'Okay, this is the big rock we're going to move. This is the big thing that's going to happen this quarter.'" Setting 5 Objectives with 4 Key Results each produces 20 things the team is supposedly focused on — which means they are focused on nothing.

### 3. OKRs Cascaded Top-Down Without Context

When company-level OKRs are decomposed into team-level OKRs by leadership and handed down, the teams responsible for achieving them often lack the context to understand why they matter or the autonomy to figure out how to achieve them. This produces compliance, not alignment.

The better approach, described by [[claire-hughes-johnson|Claire Hughes Johnson]] (COO at Stripe): leadership sets the company-level Objectives, and teams propose their own Key Results that contribute to those Objectives. As she explains, "We have an annual set of numeric targets that we put together, we have a system of goals or OKRs, objectives and key results — sort of like what is your structure for setting milestones that you want to achieve, whether they're numeric or more like a binary, we got this thing launched, we didn't." This preserves strategic alignment while giving teams ownership of the "how."

### 4. OKRs Treated as Performance Evaluation

If OKRs are tied to compensation or performance reviews, teams will sandbage. They will set achievable targets rather than ambitious ones, because missing an OKR has career consequences. Google, where OKRs originated, explicitly separates OKR achievement from performance evaluation. Achieving 70% of an ambitious OKR is considered success.

### 5. No Mid-Quarter Check-ins

Setting OKRs and reviewing them at quarter-end is useless. By then, it is too late to adjust. Weekly or bi-weekly check-ins on KR progress allow teams to identify blockers, adjust tactics, and ask for help while the quarter is still in progress.

## How OKRs Fit with Other Metrics

A common source of confusion: how do OKRs relate to the [[north-star-metric|North Star Metric]], KPIs, and other metrics frameworks?

| Framework | Purpose | Time Horizon | Changes Often? |
|-----------|---------|-------------|----------------|
| North Star Metric | Strategic alignment for the entire company | Ongoing (months to years) | Rarely |
| OKRs | Quarterly focus for teams | 90 days | Every quarter |
| KPIs | Ongoing health monitoring | Always on | When the business model changes |
| Sprint goals | Tactical weekly/bi-weekly focus | 1-2 weeks | Every sprint |

OKRs sit between the NSM and sprint goals in the time hierarchy. The NSM tells you *where you are going*. OKRs tell you *what you are working on this quarter to get there*. Sprint goals tell you *what you are doing this week*.

[[matt-lemay|Matt LeMay]] recommends a blunt test: "If I ask them how their lowest-level goals add up to their highest-level goals, they look at me like I just asked them the most impossible question in the world." If you cannot draw a clear line from your team's Key Results to the company's North Star Metric, the OKRs are disconnected from strategy.

## The OKR Operating Rhythm

Synthesizing recommendations from multiple guests:

### Quarter Planning (Week 0)

1. Leadership proposes 1-2 company-level Objectives
2. Teams propose their own OKRs that support company Objectives
3. Cross-functional alignment meetings resolve dependencies
4. Final OKRs committed and published transparently

### During the Quarter

| Week | Activity |
|------|----------|
| Every week | Team reviews KR progress (5-minute standup item) |
| Every 2 weeks | Manager discusses OKR progress in [[one-on-ones|1:1s]] |
| Week 6 (mid-quarter) | Formal check-in: are we on track? What needs to change? |
| Week 12 | Quarter close: score KRs, write retrospective |

### Quarter Close

Score each Key Result on a 0.0-1.0 scale:
- **0.7-1.0:** Achieved or exceeded. If every KR scores 1.0, the targets were not ambitious enough.
- **0.4-0.6:** Progress but short of target. Analyze why.
- **0.0-0.3:** Failed. Either the approach was wrong, the target was unrealistic, or the team was pulled elsewhere.

### Retrospective Questions

- Which KRs did we miss, and why?
- Did our OKRs actually move the NSM?
- Were there important things we worked on that were not reflected in our OKRs? (This reveals alignment gaps.)
- What would we set differently knowing what we know now?

## OKRs for Different Company Stages

| Stage | OKR Approach | Focus |
|-------|-------------|-------|
| Pre-PMF (seed) | Informal or skip entirely. Weekly priorities are more appropriate. | Find [[product-market-fit|PMF]] — OKRs add overhead without value |
| Post-PMF, pre-scale (A/B) | 1 team OKR focused on the growth bottleneck | Activation, retention, or growth |
| Scaling (B-C) | Company + team OKRs, light process | Alignment across growing teams |
| Growth (D+, public) | Full OKR process with cascading and check-ins | Cross-functional coordination |

[[christina-wodtke|Wodtke]] advises: if your company has fewer than 20 people, you probably do not need OKRs. A shared document with weekly priorities and a clear NSM is sufficient. OKRs become valuable when the organization is large enough that alignment is not automatic. [[geoff-charles|Geoff Charles]] at Ramp learned this the hard way: "For a period of time at Ramp, we created OKRs with financial goals and quotas to some extent for different teams. And that led to just taking a long time to plan because people were trying to make sure there was the right metric, trying to make sure that it was achievable. And it became very political, very annoying." Ramp moved from quarterly OKRs — which consumed one month of every three — to a biannual one-pager on company priorities.

## Key Takeaway

- Key Results must be outcomes (metrics that changed) not outputs (things you shipped). If your KRs are task lists, you are doing OKRs wrong.
- One Objective per team per quarter, maximum three Key Results. OKRs are a focus tool — more is less.
- Separate OKRs from performance evaluation. Tying them to compensation incentivizes sandbagging.
- Weekly check-ins on KR progress. Reviewing OKRs only at quarter-end is a post-mortem, not a management tool.
- Skip OKRs if you are pre-PMF or under 20 people. Weekly priorities and a clear north star are enough.

## Related

- [[north-star-metric|North Star Metric]] — OKRs operationalize the NSM into quarterly priorities
- [[roadmap-prioritization|Roadmap Prioritization]] — OKRs inform what goes on the roadmap
- [[one-on-ones|One-on-Ones]] — OKR progress is a standard 1:1 agenda item
- [[performance-reviews|Performance Reviews]] — Keep OKRs separate from performance evaluation
- [[ab-testing|A/B Testing]] — Testing is how you learn which initiatives move KRs

## Sources

- [[christina-wodtke|Christina Wodtke on the ultimate guide to OKRs]] — Radical Focus, one objective per team, mission-to-OKR hierarchy, the "how do we know" question for key results
- [[matt-lemay|Matt LeMay on impact-first product teams]] — The low impact PM death spiral, why OKR season wastes time when disconnected from business outcomes
- [[claire-hughes-johnson|Claire Hughes Johnson on scaling Stripe]] — Operating system design, goals and QBR cadence, annual numeric targets plus OKRs
- [[geoff-charles|Geoff Charles on how Ramp builds product]] — Why Ramp moved away from quarterly OKRs, velocity over planning overhead, financial plan as the real contract
- [[varun-parmar|Varun Parmar on how Miro builds product]] — Deliver customer value faster with high quality, cycle time measurement, AMPED cross-functional structure
