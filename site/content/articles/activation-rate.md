---
type: anchor
title: "Activation Rate"
domain: growth
aliases: ["activation rate", "activation", "aha moment", "magic moment", "setup moment"]
episodes: [hila-qu, lauryn-isford, bangaly-kaba, oji-udezue, ben-williams]
status: draft
---

# Activation Rate

You are looking at your sign-up numbers and wondering why growth is not translating into an active user base. The answer, for most products, is activation — the percentage of users who sign up and actually experience enough value to come back. Activation rate is the metric that separates sign-ups from users, and it is the single most diagnostic metric for [[onboarding|onboarding]] effectiveness and early [[product-market-fit|product-market fit]].

## The Core Idea

Activation rate measures the percentage of new users who complete a defined "activation event" — the action or set of actions that indicate they have experienced the product's core value for the first time. This is the quantitative measurement of the aha moment.

**Activation Rate = (Users who complete activation event / Total new sign-ups) x 100**

[[hila-qu|Hila Qu]], who wrote the definitive guide to adding a PLG motion, defines the aha moment as "the first time a user experienced value of your product." She describes finding GitLab's activation metric: "We ended up with something along the line of two users, two features used in the first 14 days. Two users is talking about the team component. Whatever the first user is trying and using that is so valuable, he or she is confident to invite another coworker to come in. That itself is a very, very valuable action and indicates this first user is seeing value." Activation is the single most important growth lever for PLG companies — a company that spends heavily on acquisition but has a 15% activation rate is pouring 85% of its acquisition spend into a hole.

### Activation Event vs. Sign-Up

| Event | What It Measures | Example |
|-------|-----------------|---------|
| Sign-up | User created an account | Email + password entered |
| Activation event | User experienced core value | Sent first message to a teammate (Slack) |

The gap between these two numbers is where most growth is lost.

## Defining Your Activation Event

The activation event is specific to your product. It is not "completed onboarding" or "visited the dashboard." It is the moment the user experiences the value proposition.

### How to Find It

[[bangaly-kaba|Bangaly Kaba's]] analytical framework (from his experience building growth at Facebook, Instagram, and Instacart):

1. Pull all new users from the last 6-12 months
2. Segment them into two groups: retained (still active at D30/D60) and churned
3. Compare their first-session and first-week behaviors
4. Identify the actions that most strongly correlate with retention
5. Validate: does driving more users to take that action actually improve retention?

### Activation Event Examples

| Company | Activation Event | Why This Moment |
|---------|-----------------|-----------------|
| Slack | Team sends 2,000 messages | Enough communication to replace another tool |
| Dropbox | Sync 1 file to 1 device | Experience the core value of files-everywhere |
| Facebook | Add 7 friends in 10 days | Enough connections for a meaningful news feed |
| Zoom | Host or join first meeting | Experience video calling quality |
| Figma | Share a file with a collaborator | Experience real-time multiplayer design |
| Notion | Create and edit a page | Experience flexible document creation |

### Composite Activation Events

Some products have activation events that are a combination of actions:

- Dropbox: Upload a file AND install on a second device (the sync experience requires both)
- Airbnb: Complete a search AND view 3+ listings AND complete a booking
- Slack: Create a workspace AND invite 2+ teammates AND exchange 10+ messages

The composite approach more accurately predicts retention but is harder to optimize because it has multiple steps, each with its own drop-off rate.

## Activation Rate Benchmarks

| Product Type | Typical Activation Rate | Good | Great |
|-------------|------------------------|------|-------|
| B2B SaaS (self-serve) | 20-30% | 30-40% | 40%+ |
| B2B SaaS (sales-assisted) | 40-60% | 60-70% | 70%+ |
| Consumer app | 10-20% | 20-30% | 30%+ |
| Freemium (broad top-of-funnel) | 5-15% | 15-25% | 25%+ |
| Free trial (narrow top-of-funnel) | 15-30% | 30-50% | 50%+ |

[[lauryn-isford|Lauryn Isford]], who rebuilt Airtable's onboarding, offers a counterintuitive perspective on these ranges: "An activation rate that falls in a lower percentage range, maybe for most companies five to 15%, is better than one that falls in a higher percentage range because it means that there's likely much higher correlation with long-term retention." In other words, a tighter activation metric that fewer users pass is often a better predictor of retained users than a loose metric that most people clear.

## Improving Activation Rate

Three categories of activation improvements, drawn from patterns across multiple episodes:

### 1. Reduce Friction to the Activation Event

Remove every unnecessary step between sign-up and the activation event:
- Defer account verification until after first value experience
- Pre-populate with templates or sample data
- Reduce form fields to the minimum required
- Allow trial before requiring payment

### 2. Increase Motivation Toward the Activation Event

Make the path to value clear and the outcome desirable:
- Show progress indicators ("3 steps to get set up")
- Surface social proof ("5,000 teams activated this week")
- Make the aha moment visible and tangible in onboarding
- Send targeted nudges to users who stall

### 3. Shorten the Path

Reduce the number of actions required to reach activation:
- Can you pre-configure settings?
- Can you import data from their current tool?
- Can you auto-detect their use case and route to the right setup?
- Can you provide a guided first experience that walks them to the activation event?

## Activation and Retention: The Connection

Activation is a leading indicator of retention. Users who activate retain at dramatically higher rates than users who sign up but do not activate.

| Metric | Non-Activated Users | Activated Users | Multiplier |
|--------|-------------------|-----------------|------------|
| D7 retention | 8-15% | 35-60% | 3-5x |
| D30 retention | 3-8% | 25-45% | 5-8x |
| Lifetime value | Low | High | 5-10x |

This relationship means that improving activation rate is often a more effective growth lever than improving acquisition volume. Doubling activation rate can have a larger impact on revenue than doubling sign-ups.

[[oji-udezue|Oji Udezue]], who was CPO at Calendly, describes how activation is not a single gate: "At Calendly and also at Typeform we have three thresholds of increasing activation. And we just try to make sure that people go through each one." The math of improvement is simple but powerful: if you have 10,000 sign-ups per month with a 20% activation rate, you are activating 2,000 users. Improving activation to 30% activates 3,000 users from the same sign-up volume — equivalent to increasing sign-ups by 50% at zero acquisition cost.

## Activation Rate by User Segment

Activation rates often vary significantly by segment, and analyzing these differences reveals optimization opportunities:

| Segment | Typical Finding | Implication |
|---------|----------------|-------------|
| By acquisition channel | Organic users activate higher than paid | Paid users may have lower intent; adjust targeting or onboarding |
| By company size | Small teams activate faster | Large teams need more setup support |
| By use case | One use case activates 2x higher | Feature or surface that use case more prominently in onboarding |
| By geography | Some markets activate lower | Localization or cultural fit issues |

## Key Takeaway

- Activation rate is the most diagnostic metric for product-market fit and onboarding effectiveness. If it is below 20% for B2B SaaS, this is your highest-leverage problem.
- Define your activation event empirically: what early behaviors predict long-term retention?
- Improving activation rate is often more impactful than increasing acquisition. Same sign-up volume, more active users, zero additional CAC.
- Segment activation by channel, company size, and use case to find the highest-leverage optimization opportunities.
- Activation is not a one-time project. It is an ongoing growth function that should be continuously measured and optimized.

## Related

- [[onboarding|Onboarding]] — The experience that drives activation
- [[retention|Retention]] — Activation is the leading indicator of retention
- [[north-star-metric|North Star Metric]] — Activation rate is often a key input metric in the NSM tree
- [[product-led-growth|Product-Led Growth]] — PLG depends on self-serve activation
- [[product-market-fit|Product-Market Fit]] — Activation rate is a proxy for early PMF signal

## Sources

- [[hila-qu|Hila Qu on PLG motion]] — Aha moment definition, GitLab activation metric (2 users / 2 features / 14 days), PLG funnel audit
- [[lauryn-isford|Lauryn Isford on mastering onboarding]] — Activation rate calibration, lower-is-better paradox, Airtable onboarding rebuild
- [[bangaly-kaba|Bangaly Kaba on growth frameworks]] — Onboarding-to-habit gap, aha moment identification, understand work
- [[oji-udezue|Oji Udezue on virality and product frameworks]] — Three activation thresholds at Calendly and Typeform, zone of benefit
- [[ben-williams|Ben Williams on Snyk PLG]] — Setup moments, aha moments, habit moments as activation progression
