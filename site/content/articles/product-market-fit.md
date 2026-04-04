---
type: anchor
title: "Product-Market Fit"
domain: product
aliases: ["product-market fit", "PMF", "product market fit"]
episodes: [sean-ellis, todd-jackson, claire-butler, benjamin-lauzier, howie-liu]
status: draft
---

# Product-Market Fit

You are trying to determine whether your product has found its market — or whether you are building something that nobody actually needs enough to pay for and keep using. Product-market fit is the most important concept in startup building, and also one of the hardest to measure. The challenge is not defining PMF in theory. It is recognizing it (or its absence) when you are in the middle of building.

## The Core Idea

Product-market fit is the state where you have built a product that a specific market wants badly enough that demand feels like it is pulling the product forward rather than the team pushing it out. Marc Andreessen's original definition remains the most cited: "Product-market fit means being in a good market with a product that can satisfy that market."

The practical experience of PMF is unmistakable when you have it and ambiguous when you do not:

| Pre-PMF | Post-PMF |
|---------|----------|
| Users try the product and do not come back | Users come back without being reminded |
| Growth requires constant effort and spending | Growth feels organic, almost effortless |
| Sales cycles are long and uncertain | Customers are pulling the product from you |
| Support tickets are about confusion and unmet expectations | Support tickets are about wanting more |
| You are searching for the right customer | Customers are finding you |

As [[todd-jackson|Todd Jackson]] of First Round Capital puts it, "If you find extreme product-market fit, the momentum just carries you, and the market pulls you along. And it's easy to know what to build because you're building the thing that your customers want and it's motivating as a team. It's easy to hire people, everything becomes easier if you find product-market fit." When you have it, you know. When you are debating, you are pre-PMF.

## Measuring PMF: The Sean Ellis Survey

[[sean-ellis|Sean Ellis]], inventor of the test that bears his name, explains the core idea: "The question is, how would you feel if you could no longer use this product? Once you got a high enough percentage of users saying they'd be very disappointed, most of those products did pretty well. If you felt too low, those products tended to suffer." Rahul Vohra, CEO of Superhuman, later popularized the most actionable application of this approach on the podcast.

**The question:** "How would you feel if you could no longer use [product]?"

**The responses:**
1. Very disappointed
2. Somewhat disappointed
3. Not disappointed

**The benchmark:** If 40% or more of respondents say "Very disappointed," you have product-market fit.

### How Superhuman Used It

Vohra did not just measure PMF — he used the survey as a *tool for finding* PMF:

1. **Survey users.** Segment responses by user type, use case, and behavior.
2. **Focus on "Very disappointed" users.** Who are they? What do they value most? What is their use case?
3. **Identify what "Somewhat disappointed" users are missing.** What would make them "Very disappointed" to lose the product? What features or experiences would push them over?
4. **Build for the gap.** Prioritize the improvements that convert "Somewhat disappointed" into "Very disappointed."
5. **Re-survey.** Track the "Very disappointed" percentage over time. It should increase as you close the gaps.

Superhuman's score was 22% when Vohra first measured it. By systematically building for the gap, they raised it above 58%. [[sean-ellis|Ellis]] shares an even more dramatic case study: at Lookout, a mobile security company, the initial score was only 7%. By digging into who the "very disappointed" users were (antivirus users), repositioning the product around antivirus, and streamlining onboarding to deliver that value first, "the next cohort of people that we surveyed were at 40% saying they'd be very disappointed without the product. That literally took two weeks." The approach turns PMF from a binary state into a continuous metric you can optimize.

### Survey Limitations

- **Sample bias:** Users who respond to surveys are often your most engaged users. The true "Very disappointed" percentage across all users (including churned) is lower.
- **Self-report vs. behavior:** People say they would be disappointed, but would they actually pay? As [[sean-ellis|Ellis]] clarifies, "I would say it's a leading indicator of product market fit. The leading indicator is, do they actually keep using it? So probably retention cohorts are more accurate." Combine the survey with behavioral data.
- **Timing:** Survey too early and users have not experienced enough value. Survey too late and survivors bias inflates the score.

## PMF Signals Beyond the Survey

| Signal | What It Tells You | Strength |
|--------|-------------------|----------|
| [[retention|Retention]] curve flattening | Users are staying — the strongest behavioral signal | Very strong |
| Organic [[word-of-mouth|word of mouth]] increasing | Users are referring others without incentive | Strong |
| [[activation-rate|Activation rate]] improving | New users are finding value faster | Strong |
| Sales cycle shortening | Customers need less convincing | Moderate-strong (B2B) |
| NPS > 50 | Users are enthusiastic promoters | Moderate |
| Inbound demand exceeding capacity | You cannot keep up with demand | Very strong |
| Users requesting features (not questioning value) | They accept the value proposition and want more | Moderate |

No single signal is definitive. PMF is the convergence of multiple signals.

## The PMF Journey

### Pre-PMF: The Search Phase

Most startups spend 1-3 years in this phase. The goal is to find *any* group of users who love the product — not a large group, but a passionate one.

[[todd-jackson|Todd Jackson]] describes the hard truth: "The majority of startups do not get past what we call level one product-market fit or level two product-market fit. They get stuck at one of those first couple levels." His advice for pre-PMF founders:
- Talk to customers weekly. Not surveys — conversations focused on willingness to pay.
- Ship weekly. Speed of iteration is the competitive advantage.
- Kill features that are not contributing to retention. Simplify.
- Do not scale anything. Scaling pre-PMF amplifies waste.
- Measure [[retention|retention]], not sign-ups. [[retention|Retention]] is the only honest metric.

[[sean-ellis|Ellis]] adds a critical nuance: "Just ignore the people who say they'd be somewhat disappointed. They're telling you it's a nice to have. If you start paying attention to what your somewhat disappointed users are telling you and then you start tweaking onboarding and product based on their feedback, maybe you're going to dilute it for your must-have users."

### PMF Found: The Scaling Phase

Once PMF is established (retention flattening, 40%+ Sean Ellis score, organic growth), the priorities shift:

| Pre-PMF Priority | Post-PMF Priority |
|-------------------|-------------------|
| Finding the right customer | Acquiring more of the right customers |
| Iterating on the core product | Scaling the core product |
| Conversations over data | Data over conversations (at scale) |
| "Will this work?" | "How do we do more of what is working?" |

### PMF Is Not Permanent

PMF can be lost. Market shifts, competitor entry, technology changes, or your own product degradation can erode it. Companies that achieved PMF in one era (Evernote, Foursquare) lost it as the market evolved.

Signs PMF is eroding:
- Retention curves start declining for new cohorts
- Organic growth slows while paid acquisition increases
- Feature requests shift from "I want more" to "I need this to keep using"
- Competitive alternatives start winning head-to-head comparisons

## PMF for B2B vs B2C

| Dimension | B2B PMF | B2C PMF |
|-----------|---------|---------|
| Who feels the fit | Buyer (often different from user) | End user |
| Measurement window | Longer (3-6 month sales cycles) | Shorter (days to weeks) |
| Key signal | Renewals and expansion revenue | Retention and organic sharing |
| Common trap | Closing sales through heavy customization (false PMF) | High sign-ups with low retention (false PMF) |
| Survey approach | Sean Ellis + win/loss analysis | Sean Ellis + cohort retention |

In B2B, the most dangerous false positive is closing enterprise deals through heavy customization. Each customer gets a bespoke version, the team is doing consulting disguised as product, and there is no scalable product underneath. This is not PMF — it is services revenue dressed up as SaaS.

## Key Takeaway

- If you have to ask whether you have PMF, you do not. When you have it, demand pulls the product forward.
- Use the Sean Ellis survey (40% "Very disappointed" threshold) as a continuous metric, not a one-time test. Track it over time and build for the gap.
- Retention curve flattening is the strongest behavioral signal of PMF. Combine it with survey data.
- Do not scale pre-PMF. Every dollar spent on growth before PMF is amplifying waste.
- PMF is not permanent. Monitor it continuously and respond to erosion signals early.

## Related

- [[retention|Retention]] — The behavioral signal that validates PMF
- [[activation-rate|Activation Rate]] — Improving activation often precedes and enables PMF measurement
- [[north-star-metric|North Star Metric]] — The NSM shifts as you move from pre-PMF to post-PMF
- [[onboarding|Onboarding]] — Users cannot experience PMF if they cannot reach the aha moment
- [[word-of-mouth|Word of Mouth]] — Organic sharing is a strong PMF indicator

## Sources

- [[sean-ellis|Sean Ellis on growth hacking and PMF]] — Origin of the "very disappointed" survey, 40% benchmark, Lookout case study, leading indicator vs retention
- [[todd-jackson|Todd Jackson on finding product-market fit]] — First Round's four-level PMF framework (nascent, developing, strong, extreme), demand-satisfaction-efficiency triad, the four Ps for getting unstuck
- [[claire-butler|Claire Butler on Figma's GTM motion]] — Bottom-up go-to-market, IC-led adoption, no sales team for three years, organic pull as PMF signal
- [[benjamin-lauzier|Benjamin Lauzier on marketplace PMF]] — Sean Ellis test applied to marketplaces, liquidity as PMF proxy
