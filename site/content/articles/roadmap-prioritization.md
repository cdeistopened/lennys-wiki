---
type: anchor
title: "Roadmap Prioritization"
domain: product
aliases: ["roadmap prioritization", "prioritization", "prioritization frameworks", "RICE", "ICE", "roadmapping", "product prioritization"]
episodes: [jiaona-zhang, matt-lemay, sean-ellis, itamar-gilad, vijay]
status: draft
---

# Roadmap Prioritization

You have more ideas, requests, and opportunities than your team can possibly build. Customers are asking for features. Your CEO has "a quick idea." Engineering wants to pay down tech debt. Sales has a deal that hinges on one integration. And you, the PM, have your own conviction about what matters most. The decision you face is not "what should we build?" but "what should we build next, and what are we willing to say no to?" Getting this right is the highest-leverage skill in product management. Getting it wrong means burning quarters on work that does not move the needle.

## The Core Idea

Roadmap prioritization is the process of deciding what your team will work on and in what order. It sounds simple. It is not. The difficulty is not ranking a list — it is making defensible trade-offs between fundamentally different types of work (new features vs. tech debt vs. infrastructure vs. customer requests) while managing stakeholders who each believe their priority is the most important.

As [[jiaona-zhang|Jiaona Zhang]] (SVP Product at Webflow, formerly Airbnb) explains, "You're telling a story. So what I want from you is I want themes, I want a story. Why are these things the biggest things to invest in, these levers, the biggest ones to pull?" The most common mistake she sees: "People thinking a spreadsheet with a bunch of projects, the RICE framework, everything has an impact, a cost and an effort column filled out. They think that is prioritization and that is a roadmap." The implication is that prioritization is fundamentally an exercise in judgment under uncertainty, not math.

## Prioritization Frameworks Compared

Frameworks exist to add structure to this judgment. None of them are perfect. All of them are better than no framework at all — which defaults to whoever argues loudest or whoever has the most organizational power.

| Framework | Formula / Method | Best For | Weakness |
|-----------|-----------------|----------|----------|
| **RICE** | (Reach x Impact x Confidence) / Effort | Teams with quantitative data on reach and impact | Garbage in, garbage out — confidence scores are often fabricated |
| **ICE** | Impact x Confidence x Ease | Early-stage teams, rapid triage | Even simpler than RICE, even easier to game |
| **MoSCoW** | Must / Should / Could / Won't | Fixed-scope projects with hard deadlines | Encourages stakeholders to label everything "Must" |
| **Kano Model** | Basic / Performance / Delighters | Understanding customer satisfaction drivers | Requires upfront research, does not help with sequencing |
| **Opportunity Scoring** | Importance vs. Satisfaction gap | Finding underserved needs | Does not account for effort or feasibility |
| **Cost of Delay** | Value per time unit of delay | When timing matters (market windows, contracts) | Requires estimating value delivery curves, which is hard |
| **LNO Framework** | Leverage / Neutral / Overhead classification | Personal and team task management | Designed for tasks, not roadmap-level features |

### RICE in Practice

RICE, developed at Intercom, is the most commonly cited scoring framework in the product management world. It works by quantifying four dimensions:

- **Reach:** How many users or customers will this affect in a given time period? (e.g., 5,000 users per quarter)
- **Impact:** How much will it affect each user? Scored on a scale: 3 = massive, 2 = high, 1 = medium, 0.5 = low, 0.25 = minimal
- **Confidence:** How certain are you about reach and impact estimates? 100% = high, 80% = medium, 50% = low
- **Effort:** How many person-months will this take?

The formula: **(Reach x Impact x Confidence) / Effort = RICE Score**

The strength of RICE is that it forces PMs to quantify their assumptions. The weakness is that those quantifications are often invented. A PM who wants to prioritize their pet project can easily inflate the Impact score from 1 to 2 and bump the Confidence from 50% to 80%, tripling the score. [[itamar-gilad|Itamar Gilad]], former PM at Google and author of *Evidence-Guided*, advocates replacing opinion-based scoring with actual evidence. His experience on Google+ — a thousand-person team building a product that "people actually didn't need" — taught him that even the best-resourced teams can waste years when prioritization is driven by conviction rather than evidence.

### ICE: The Lightweight Alternative

ICE scoring (Impact x Confidence x Ease) was popularized by [[sean-ellis|Sean Ellis]] in the growth hacking community. It drops Reach as a separate variable and replaces Effort with Ease (its inverse). Each dimension is scored 1-10.

ICE is faster and requires less data, making it better for early-stage teams that do not have usage metrics to estimate Reach. It is also more susceptible to bias for the same reason — fewer constraints on the scoring means more room for subjective inflation.

### When Frameworks Help vs. When Product Judgment Matters More

[[jiaona-zhang|Jiaona Zhang]] draws a critical distinction: frameworks are useful for prioritizing within a known strategy, not for choosing the strategy itself. As she explains, "What humans really crave is like, 'Why am I doing this body of work?' Create that scaffolding for them to know what's important."

| Decision Type | Use Frameworks? | Why |
|---------------|----------------|-----|
| Ordering features within a known theme | Yes | RICE/ICE help compare like-with-like |
| Deciding which theme to pursue this quarter | No — use product judgment | Strategic bets require conviction, not scoring |
| Comparing a feature vs. tech debt | Partially — weight categories differently | They are fundamentally different types of value |
| Responding to a CEO request | No — use stakeholder management | This is a people problem, not a scoring problem |
| Choosing between two equally uncertain bets | No — use time-boxed experiments | Run both as small bets and let data decide |

The danger of over-reliance on frameworks is that they create a false sense of objectivity. A PM who says "we should build X because it has the highest RICE score" is not making a decision — they are abdicating one. The decision happened when they chose the inputs.

## Shreyas Doshi's LNO Framework

[[shreyas-doshi|Shreyas Doshi]] developed the LNO framework as a complement to roadmap prioritization. While RICE and ICE help prioritize features, LNO helps PMs prioritize their own time and attention — which determines how well the roadmap gets executed.

**LNO classifies every task into three categories:**

| Category | Definition | PM Approach | Example |
|----------|-----------|-------------|---------|
| **Leverage** | Tasks where the quality of your effort has an outsized impact on outcomes | Do these yourself, at high quality | Defining the product strategy, writing the key PRD, running the critical user research |
| **Neutral** | Tasks where above-average effort produces only marginally better outcomes than average effort | Do these adequately, then move on | Status updates, routine stakeholder syncs, standard sprint planning |
| **Overhead** | Tasks that must be done but where quality barely matters | Do the minimum, delegate, or automate | Expense reports, scheduling, formatting documents |

The insight is not that some tasks are unimportant — it is that most PMs distribute effort evenly across all tasks, which means they underinvest in the work that actually moves the needle. A PM who spends two hours perfecting a status update and thirty minutes on the product strategy document has their priorities exactly backwards.

Doshi recommends PMs audit their calendar weekly: categorize every meeting, task, and deliverable as L, N, or O. Most PMs discover that 60-70% of their time is spent on Neutral and Overhead tasks, leaving insufficient time for Leverage work.

## Handling CEO Pet Projects and Stakeholder Pressure

Every PM eventually faces this: the CEO, a VP of Sales, or a board member has an idea they are convinced should be built next. The idea may or may not be good. The challenge is navigating the politics without either rubber-stamping every executive request or getting a reputation as the PM who says no to everything.

[[gokul-rajaram|Gokul Rajaram]], known as the "Godfather of AdSense" and board member at multiple public companies, provides a framework for handling top-down requests:

**Step 1: Understand the underlying need, not the proposed solution.** When the CEO says "we need to build X," the productive response is "help me understand what problem you are seeing." Often the CEO has identified a real problem but proposed one of many possible solutions — and not necessarily the best one.

**Step 2: Quantify the opportunity.** If the request has merit, size it. How many customers are affected? What is the revenue impact? How does it compare to what is already on the roadmap? This is where RICE can actually be useful — not as a scoring tool, but as a structured way to compare the new request against existing commitments.

**Step 3: Show the trade-off explicitly.** Never respond with "yes" or "no." Respond with "yes, and here is what we would need to drop or delay to make room." This shifts the conversation from whether to build the thing to whether it is worth the trade-off. Most executives become more reasonable when they see the cost.

**Step 4: Propose alternatives.** Can the need be met with a smaller investment? A different approach? A time-boxed experiment? Offer options at different levels of effort.

[[matt-lemay|Matt LeMay]] adds a complementary principle: even when you follow every best practice, "if your company goes out of business, they're not going to keep writing your paycheck for two years because all of your OKRs were a 0.6 or a 0.7." The roadmap must connect to business-critical outcomes, not just internal consensus about process correctness.

## Balancing Tech Debt vs. Features

This is one of the most persistent tensions in product management. Engineering wants to refactor the authentication service. Sales wants the enterprise SSO feature. The CEO wants the new mobile experience. You have capacity for two of the three.

The mistake most teams make is treating tech debt and features as competing priorities on the same list. They are not. They are different types of investment with different time horizons.

| Investment Type | Value Horizon | Risk of Deferral | How to Evaluate |
|----------------|---------------|-------------------|-----------------|
| New features | Short-to-medium term (quarters) | Competitive disadvantage, missed revenue | RICE or opportunity sizing |
| Tech debt reduction | Medium-to-long term (quarters to years) | Increasing development cost, fragility, outages | Engineering velocity impact, incident frequency |
| Infrastructure | Long term (years) | Scaling limits, architectural ceilings | Whether current architecture can support next 10x growth |

A practical heuristic used by several podcast guests: **allocate a fixed percentage of capacity to tech debt and infrastructure (typically 15-25%), then prioritize features within the remaining capacity.** This avoids the false choice of features vs. tech debt. Both get resourced. The percentage adjusts based on the urgency of technical problems.

Signs the percentage needs to increase:
- Deploy frequency is declining
- Incident rate is rising
- Engineers estimate every new feature at 2-3x what it would have taken a year ago
- New hires take longer to become productive

Signs the percentage can decrease:
- System is stable and well-tested
- Development velocity is high
- The market window for a feature is narrow

## Prioritization Anti-Patterns

### 1. Prioritizing by Loudest Voice

The feature that gets built is the one requested by whoever argues most forcefully in the meeting. This is not prioritization — it is organizational capture. It rewards political skill over product judgment and systematically under-weights the needs of users who do not have a vocal internal advocate.

### 2. Recency Bias

The last customer call, the last sales loss, the last bug report disproportionately influences the roadmap. [[matt-lemay|Matt LeMay]] warns against what he calls "managing by the last thing that happened." A PM who changes the roadmap every time they hear a compelling anecdote is not being responsive — they are being reactive. The fix is to batch inputs (weekly customer feedback reviews) rather than processing them one at a time.

### 3. Building for the Average User

The team builds features that appeal to the broadest possible user base, resulting in a product that is adequate for everyone and delightful for no one. The best products are not average — they are specific. They serve a well-defined segment deeply rather than a broad market shallowly. [[matt-lemay|LeMay]] advocates for explicitly naming who the feature is for and who it is *not* for — and having the discipline to exclude the latter from the prioritization inputs.

### 4. Democracy-Based Prioritization

Every stakeholder gets a vote. The features with the most votes win. This produces a roadmap that reflects internal consensus rather than customer value. It is a conflict avoidance mechanism dressed up as collaboration. The PM's job is not to aggregate preferences — it is to make the hard call about what matters most and defend it with evidence.

### 5. Sunk Cost Prioritization

"We have already invested three months in this feature — we need to ship it." No, you do not. If the feature no longer makes sense, the three months are gone regardless. The only question is whether the remaining investment will produce value. Continuing a bad bet because of prior investment is the most expensive anti-pattern in product management.

### 6. Roadmap as Promise

Treating the roadmap as a commitment rather than a plan. When the roadmap becomes a promise, PMs stop reprioritizing when new information arrives because they fear breaking commitments. The result is a team that builds what it planned six months ago instead of what matters most today.

## A Practical Prioritization Process

Synthesized from multiple guests, here is a process that works at most growth-stage companies:

**Quarterly: Set themes, not features.** Decide the 2-3 strategic themes for the quarter. These should tie to company goals and be specific enough to be falsifiable. "Improve activation" is a theme. "Make the product better" is not.

**Monthly: Prioritize within themes.** Use RICE, ICE, or opportunity scoring to rank specific features and initiatives within each theme. This is where frameworks add the most value — comparing like-with-like within a strategic direction.

**Weekly: Triage incoming requests.** New requests from customers, stakeholders, and data go into an intake process. Categorize them by theme. If they fit an existing theme, score and rank them. If they do not fit any theme, they wait until the next quarterly planning — unless they represent a true emergency.

**Continuously: Cut what is not working.** The best prioritization is not just about what to build — it is about what to stop building. If a feature in progress is not producing results, kill it. If a shipped feature is not getting adoption, stop investing in iterations.

## Key Takeaway

- Frameworks like RICE and ICE are useful for comparing features within a known strategy, but they cannot choose the strategy for you. Use product judgment for strategic bets and frameworks for sequencing within those bets.
- When stakeholders push top-down requests, never say "yes" or "no" — show the trade-off. "We can build X if we delay Y" shifts the conversation from politics to priorities.
- Allocate a fixed percentage of capacity (15-25%) to tech debt. This avoids the false choice between features and infrastructure and ensures both get resourced.
- Audit your time with the LNO framework. Most PMs spend 60-70% of their effort on Neutral and Overhead tasks, underinvesting in the Leverage work that actually moves outcomes.
- The most expensive anti-pattern is not building the wrong thing — it is continuing to build the wrong thing because you have already started. Kill bad bets early and often.

## Related

- [[north-star-metric|North Star Metric]] — Prioritization should be guided by what moves the NSM
- [[okrs|OKRs]] — OKRs operationalize prioritization themes into measurable goals
- [[product-sense|Product Sense]] — The judgment layer that sits above any framework
- [[user-research|User Research]] — The evidence base for making prioritization decisions
- [[ab-testing|A/B Testing]] — When two options seem equally promising, test instead of debating

## Sources

- [[jiaona-zhang|Jiaona Zhang on roadmapping and prioritization]] — Themes over spreadsheets, minimal lovable products, Airbnb Plus lessons, why humans crave narrative scaffolding
- [[matt-lemay|Matt LeMay on impact-first product teams]] — Low impact death spiral, connecting team goals to business outcomes, MailChimp prioritization case study
- [[itamar-gilad|Itamar Gilad on evidence-guided development]] — Google+ waste, opinion-based vs. evidence-guided, confidence meter, GIST framework
- [[sean-ellis|Sean Ellis on ICE scoring and growth]] — ICE prioritization framework, growth experiment methodology
- [[vijay|Vijay Iyengar on Mixpanel's product journey]] — Refocusing on core, churn-driven prioritization, why shipping 100 features meant nothing without holistic design
