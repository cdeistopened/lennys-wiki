---
type: anchor
title: "North Star Metric"
domain: metrics
aliases: ["north star metric", "NSM", "north star", "one metric that matters"]
episodes: [itamar-gilad, sean-ellis, lauryn-isford, archie-abrams, elena-verna]
status: draft
---

# North Star Metric

You need a single metric that your entire product team can align around — one number that, if it goes up, means the product is getting better for customers and the business is growing. That is your north star metric. Choosing the right one is one of the highest-stakes decisions a product leader makes, because the NSM shapes what the team optimizes for, which features get prioritized, and what trade-offs are considered acceptable.

## The Core Idea

A north star metric is the single metric that best captures the core value your product delivers to customers. It is not a vanity metric (total sign-ups), not a revenue metric (MRR), and not an engagement metric (DAU) — unless those directly reflect the value customers receive.

[[itamar-gilad|Itamar Gilad]], a product coach and former longtime PM at Google (Gmail, YouTube), draws a critical distinction: the NSM measures how much value you create for the market, not how much value you capture from it. As he puts it: "The North Star metric measures how much value we create for the market. For example, let's take WhatsApp. WhatsApp for a very long time measured messages sent because every message sent is a little incremental of value for the sender, the receiver, it's free, it's rich media, you can send it for anywhere in the world, compared to SMS that's huge value." He pairs the NSM with a separate "top KPI" — revenue or profit — that measures value captured, and argues that the interplay between these two metrics is the real growth engine.

The NSM is not the only metric that matters. It is the metric that orients the team. Below it sits a tree of supporting metrics — activation rate, retention rate, feature adoption — that contribute to moving the NSM. But the NSM is the one number the CEO and the new intern should both be able to name.

## What Makes a Good NSM

[[sean-ellis|Sean Ellis]], who coined the term "growth hacking" and was head of growth at Dropbox and Eventbrite, provides a practical checklist for evaluating whether you have chosen the right NSM. His core principle: "I start with the value that's uncovered through the [PMF] test. So with a company, I'll say, 'Okay, this is what the must-have value is according to our most passionate customers, and we want to think about a metric that reflects us delivering that value.'" His criteria:

| Criterion | What It Means | Test |
|-----------|---------------|------|
| Measures value delivered | Reflects what customers actually get from the product | Would customers agree this metric captures their experience? |
| Leading indicator of revenue | If the NSM goes up, revenue follows | Is there a provable relationship between NSM growth and business growth? |
| Actionable | The product team can directly influence it | Can you point to specific product decisions that move this number? |
| Understandable | Anyone in the company can explain it | Can a new hire articulate it in their first week? |
| Inspirable | The team is motivated to increase it | Does moving this number feel meaningful, not just mechanical? |

### Common NSM Examples

| Company | North Star Metric | Why It Works |
|---------|-------------------|-------------|
| Airbnb | Nights booked | Directly measures value exchange between hosts and guests |
| Spotify | Time spent listening | Captures music discovery and satisfaction |
| Slack | Messages sent per team per day | Captures team communication value |
| Facebook (early) | Daily active users | Captured social connection frequency |
| Notion | Active workspaces per week | Captures ongoing team/individual value |
| Figma | Active editors per week | Captures collaboration value |
| Uber | Completed rides per week | Captures transportation value delivered |

## NSM Anti-Patterns

### 1. Revenue as North Star

Revenue is a lagging indicator. It tells you what happened, not what is happening. A company can grow revenue through aggressive pricing or sales tactics while the underlying product experience degrades. By the time revenue reflects the problem, the damage to retention is already done.

Revenue matters enormously. But it belongs in the business dashboard, not as the metric the product team optimizes daily. [[sean-ellis|Sean Ellis]] is direct: "Revenue shouldn't be the North Star Metric, but as you grow value across your customer base, you should be able to grow revenue at the same rate." He points to Amazon's monthly purchases as an example: "Even if I spend $1,000 on a TV set with Amazon versus $10 on an electric toothbrush, Amazon from the consumer's perspective delivered the same value. I needed something, Amazon helped me find that thing."

### 2. Vanity Metrics

Total registered users, total downloads, page views — these feel good but do not reflect whether users are getting value. A product with 10 million registered users and 100,000 active ones has a vanity metric problem. The NSM should distinguish between people who signed up and people who are actually getting value.

### 3. NSM That Conflicts with User Value

If your NSM goes up when user experience goes down, you have chosen the wrong NSM. Example: "time spent in app" can go up because the product is engaging OR because it is confusing. A metric that rewards both good and bad experiences is useless as a north star.

[[sean-ellis|Ellis]] describes how Facebook's shift from monthly active users to daily active users changed team behavior profoundly: "Once Facebook was on a daily active user goal, the team suddenly had a lot more incentive to think about, 'How do I bring people back every day and use this product?'" But the product became "maybe too addictive" — a cautionary example of NSM choice shaping product outcomes in unintended ways.

### 4. NSM That Is Too Broad

"Customer satisfaction" or "NPS" as an NSM is too broad to be actionable. The product team cannot identify which decisions move NPS on a daily basis. The NSM should be specific enough that a product decision made this sprint can plausibly move the metric next month.

### 5. Funnel-Stage Metrics as North Star

[[archie-abrams|Archie Abrams]], VP of product and head of growth at Shopify, warns against teams adopting their funnel conversion rate as their north star: "When you have teams naturally break up the world into different funnel stages or different points in the journey, it gets very seductive to look at my part of the funnel and what's my conversion rate through that part of the funnel, right? And then the team starts to optimize for that conversion rate as their north star. But in practice, it's actually almost always easier to just make it harder to do the thing right before your step in the funnel to increase your conversion rate." The perverse incentive: a team can "improve" its conversion rate by raising the bar for entry rather than by delivering more value.

## How to Choose Your NSM

A practical framework synthesized across multiple episodes:

**Step 1: List your value moments.** What are the specific moments where customers receive value from your product? For Airbnb: booking a stay, having a great stay, getting paid as a host. For Slack: sending a message that gets a response, finding information in search, integrating a tool.

**Step 2: Identify the most frequent and most valuable moment.** Which of these moments is both the most common and the most predictive of customer satisfaction? This is your candidate NSM.

**Step 3: Test causality.** Do users who experience this moment more frequently retain at higher rates? Does increasing this moment per user correlate with business growth? If yes, you have a candidate worth pursuing.

**Step 4: Pressure-test for Goodhart's Law.** If the team optimizes aggressively for this metric, could it produce perverse outcomes? "Messages sent" could be gamed by a team that makes messaging annoying or notification-heavy. If the metric can be gamed in a way that hurts user experience, add a guardrail metric.

## The NSM Tree

The NSM sits at the top of a metric tree. Below it are the input metrics that drive it:

```
North Star Metric (e.g., Weekly Active Teams for Slack)
├── New team activation rate
│   ├── Sign-up to first message rate
│   └── Team size at activation
├── Existing team retention rate
│   ├── D7 / D30 retention
│   └── Feature engagement depth
└── Expansion (organic growth)
    ├── New members per team per month
    └── Cross-team adoption rate
```

Each branch of the tree is owned by a specific team or squad. The NSM aligns everyone; the input metrics give each team their operational focus.

[[itamar-gilad|Itamar Gilad]] advocates building two overlapping metric trees — one for the NSM (value delivered) and one for the top business KPI (value captured). As he explains: "Once you have these two, you can further break them down into what I call metrics trees. So there's a metric tree for the North Star metric and there's the metric tree for the top KPI, the top business metric, and usually they overlap. So you might find in the middle some metrics that are super, super important because moving them actually moves the needle on everything else." The overlap between the two trees reveals the highest-leverage metrics in the organization.

## How Often to Revisit the NSM

The NSM is not permanent. As the product and market evolve, the metric that best captures value may change:

| Stage | Appropriate NSM Focus |
|-------|----------------------|
| Pre-PMF | Activation rate (are users finding value?) |
| Early growth | Retention rate (are they coming back?) |
| Scaling | Engagement depth (are they using more of the product?) |
| Maturity | Net revenue retention (are they expanding?) |

[[lauryn-isford|Lauryn Isford]], who was head of growth at Airtable, offers a powerful example of operationalizing an NSM. Airtable's activation team used "week four multi-user active" as their north star — a deliberately high bar. As she explains: "Every growth team needs a north star metric. It's so important to have singular focus on what the business results are that you are working to drive in your team." But she also warns against over-reliance on a single metric: her team introduced supplementary metrics (individual retention and a "sophistication score" for what users built) because "sometimes those treatments helped users become more sophisticated but didn't help them invite more teammates." The NSM stayed constant as the alignment tool; the supplementary metrics enabled more nuanced decision-making.

## Key Takeaway

- Your NSM should measure the value customers receive, not the value you extract. Revenue is a lagging indicator, not a north star.
- Test the NSM against five criteria: measures value, leads revenue, actionable, understandable, inspirable.
- Build a metric tree below the NSM. Each team owns a branch; the NSM aligns everyone to the same outcome.
- Pressure-test for Goodhart's Law. If optimizing for the metric could produce perverse outcomes, add guardrail metrics.
- Revisit quarterly but do not change frequently. Organizational alignment takes time to build.

## Related

- [[okrs|OKRs]] — OKRs operationalize the NSM into quarterly goals
- [[activation-rate|Activation Rate]] — A key input metric in most NSM trees
- [[retention|Retention]] — The most common leading indicator of a healthy NSM
- [[ab-testing|A/B Testing]] — The method for validating whether changes actually move the NSM
- [[product-market-fit|Product-Market Fit]] — The NSM shifts as you move through PMF stages

## Sources

- [[itamar-gilad|Itamar Gilad on becoming evidence-guided]] — NSM as value-delivered metric, metric trees, value exchange loop, GIST model
- [[sean-ellis|Sean Ellis on growth hacking]] — NSM selection from PMF test, revenue is not NSM, Facebook DAU vs MAU, time-capped metrics
- [[lauryn-isford|Lauryn Isford on mastering onboarding]] — Airtable's "week four multi-user active" NSM, supplementary metrics, activation team north star
- [[archie-abrams|Archie Abrams on Shopify growth]] — Funnel-stage metric anti-pattern, long-term holdouts, conversion rate gaming
- [[elena-verna|Elena Verna on growth tactics]] — "Insights per minute" as personal NSM, growth frameworks
