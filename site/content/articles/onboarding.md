---
type: anchor
title: "Onboarding"
domain: growth
aliases: ["onboarding", "new user experience", "activation experience", "first-run experience", "FTUE"]
episodes: [lauryn-isford, bangaly-kaba, adam-fishman, hila-qu, merci-grace]
status: draft
---

# Onboarding

You have users signing up but they are not sticking. Your sign-up to activation rate is below 25%, and you are not sure whether the problem is your product or the path users take to find value. Onboarding is the highest-leverage growth work most companies underinvest in — because the gap between "signed up" and "got value" is where the majority of your users disappear, often permanently.

## The Core Idea

Onboarding is the experience that bridges the gap between a user's first interaction with your product and the moment they receive enough value to come back. That moment — variously called the "aha moment," the "magic moment," or the "activation event" — is the single most important concept in onboarding design.

[[adam-fishman|Adam Fishman]], who was the first growth hire at Lyft and later CPO at Imperfect Foods, frames onboarding as the singular moment of truth: "Onboarding is the only part of your product experience that a hundred percent of people are ever going to touch. Good luck getting a hundred percent feature adoption of anything else in your product. It's also the first opportunity that you have as a company to deliver on the promise that you made out in the marketplace. Your brand is the promise that you're making and your product experience is your delivery of that promise. And those two things have to be in lockstep with each other, or you're going to have mismatched expectations and some really disappointed customers."

## The Aha Moment

The aha moment is the experience where the user first understands the product's value — not intellectually, but through experience. It is the moment Slack stops being "another messaging app" and becomes "how my team communicates." The moment Dropbox stops being "cloud storage" and becomes "my files are everywhere." The moment Figma stops being "a design tool" and becomes "we can design together in real time."

### Finding Your Aha Moment

[[bangaly-kaba|Bangaly Kaba]], who was an early growth PM at Facebook, head of growth at Instagram, and VP of product at Instacart, says the opportunity almost always lives here: "Usually it's somewhere in the onboarding to habit-building experience. What does it take for someone to actually understand the value, that first moment, that first aha moment in the product? And a lot of teams, it's shocking how many teams don't really understand what that moment is for them." He describes the analytical approach to identifying the aha moment:

1. **Identify your best-retained users.** Look at the cohort with the highest 30-day or 90-day retention.
2. **Work backward.** What actions did those users take in their first session, first day, or first week that users who churned did not?
3. **Isolate the action.** Test whether driving more users to take that action improves retention.

**Famous aha moments (with metrics):**

| Company | Aha Moment | Metric | Threshold |
|---------|-----------|--------|-----------|
| Facebook | Add 7 friends | Friends added in first 10 days | 7 |
| Slack | Send 2,000 messages | Team messages | 2,000 (team-level) |
| Dropbox | Put 1 file in 1 folder on 1 device | File sync events | 1 |
| Twitter | Follow 30 accounts | Accounts followed | 30 |
| Zynga | Return the next day | D1 retention | 1 return visit |

The aha moment is not always a single action. Sometimes it is a combination (upload a file AND share it with a teammate). Sometimes it is a threshold (reach a critical mass of content or connections). The analytical work is identifying which early behaviors predict long-term retention.

### Aha Moment Anti-Patterns

- **Confusing feature usage with value.** "Completed onboarding tutorial" is not an aha moment. The aha moment is the *outcome* the user was seeking, not the process they went through.
- **Assuming the aha moment is universal.** Different user segments may have different aha moments. A solo user's aha moment in Notion differs from a team's.
- **Over-indexing on data.** Correlation between an early action and retention does not prove causation. The action must be genuinely valuable, not just a proxy for motivated users.

## Time to Value

Time to value (TTV) is the elapsed time between sign-up and the aha moment. Reducing TTV is the single highest-leverage onboarding optimization.

| TTV | User Experience | Examples |
|-----|-----------------|---------|
| Seconds | Instant gratification | Calendly (share a link, get a booking) |
| Minutes | Quick win | Loom (record and share a video) |
| Hours | Setup investment required | Notion (build a workspace) |
| Days | Requires team adoption | Slack (team needs to join and communicate) |
| Weeks | Complex integration | Salesforce, Datadog |

Products with short TTV can rely more heavily on [[product-led-growth|PLG]] and self-serve. Products with long TTV often need onboarding support — guided tours, customer success check-ins, or sales-assisted setup.

[[lauryn-isford|Lauryn Isford]], who was head of growth at Airtable, offers a counterintuitive take on activation metrics: "An activation rate that falls in a lower percentage range, maybe for most companies five to 15%, is better than one that falls in a higher percentage range because it means that there's likely much higher correlation with long-term retention and you're really working hard to get most of your users to reach a state that they're not reaching today." The tighter the activation metric, the more meaningful it is as a predictor of retention.

## Onboarding Design Patterns

### 1. Progressive Disclosure

Do not show the user everything at once. Reveal complexity as they need it:

- **First session:** Core action only. In Figma: create a frame, drag a shape, invite a collaborator.
- **First week:** Secondary features introduced as the user encounters natural needs.
- **First month:** Advanced features surfaced through tooltips, empty states, and contextual prompts.

### 2. Empty State Design

The empty state — what the user sees before they have created anything — is the most important screen in the product for onboarding purposes. A blank canvas feels intimidating. A pre-populated template, a guided prompt, or a suggested first action reduces the activation energy to start.

| Company | Empty State Strategy |
|---------|---------------------|
| Notion | Pre-built templates for common use cases |
| Canva | "What do you want to design?" starting prompt |
| Airtable | Template gallery organized by use case |
| Slack | Bot that walks you through sending your first message |

### 3. Social Proof and Momentum

Show the user that others like them are succeeding:
- "5,000 teams like yours use this feature"
- Onboarding checklists with progress bars
- Celebration moments when milestones are reached (but sparingly — do not condescend)

### 4. Reduce Sign-Up Friction

Every form field, verification step, and decision point in the sign-up flow is an opportunity for the user to leave. The calculus is simple: the value of each piece of information you collect must exceed the conversion cost of asking for it.

| Common friction points | Solution |
|-----------------------|----------|
| Email verification required before access | Allow access, verify later |
| Credit card required for free trial | Remove — accept lower trial quality for higher volume |
| Complex form (company size, role, use case) | Ask after activation, not before |
| Account creation required to explore | Allow anonymous exploration with account creation for persistence |

### 5. Personalized Onboarding Paths

Ask one or two questions at sign-up that route users to different onboarding flows:

- "What brings you here?" → Route to relevant aha moment
- "What is your role?" → Show features relevant to that role
- "Have you used a similar product?" → Skip basics for experienced users

[[hila-qu|Hila Qu]] describes the progressive approach: "It doesn't need to be this big aha moment in the first five minutes, but at least give them some mini aha moments." She recommends giving users a "warm start" — sample data, pre-built examples, or interactive demos — so they experience value before investing the effort of bringing their own data into the product.

## Measuring Onboarding Effectiveness

| Metric | What It Measures | Target |
|--------|-----------------|--------|
| Sign-up to activation rate | % of new users who reach the aha moment | 25-40% (B2B SaaS) |
| Time to activate | Median time from sign-up to activation event | As low as possible |
| Onboarding completion rate | % of users who complete the guided onboarding flow | 60-80% |
| D1 / D7 / D30 retention by activation status | [[retention|Retention]] difference between activated and non-activated users | Activated users should retain 2-3x higher |
| Drop-off by step | Where in the onboarding flow users abandon | Identify and fix the worst drop-off points |

The most important diagnostic: compare retention curves for users who activated vs. users who signed up but did not activate. If the gap is large (it usually is), improving the activation rate has an outsized impact on total retention.

## Onboarding Teardowns

Patterns from how top products handle onboarding, discussed across multiple episodes:

**Slack:** Team-level activation. The onboarding is not about getting *one person* to use Slack — it is about getting enough people on a team to reach the communication threshold. Slackbot guides the first user through inviting teammates, setting up channels, and sending the first message.

**Figma:** File-sharing as onboarding. The most common entry point into Figma is not the sign-up page — it is receiving a shared design file. The new user experiences the product's core value (real-time collaboration) before they even create an account.

**Notion:** Template-first. New users choose from templates that pre-populate their workspace with structure relevant to their use case. This transforms the empty-canvas problem into a customization exercise, which is psychologically easier.

## Key Takeaway

- Onboarding is a race to the aha moment. Every second of delay increases churn.
- Find your aha moment analytically: identify what best-retained users did early that churned users did not.
- Time to value is the metric that determines whether you can self-serve onboard or need human-assisted onboarding.
- Reduce friction ruthlessly. Every form field, verification step, and decision point has a conversion cost.
- Measure sign-up to activation rate. If it is below 25% for B2B SaaS, onboarding is your highest-leverage growth investment.

## Related

- [[activation-rate|Activation Rate]] — The metric that quantifies onboarding success
- [[product-led-growth|Product-Led Growth]] — PLG depends entirely on self-serve onboarding
- [[retention|Retention]] — Onboarding determines early retention, which predicts long-term retention
- [[product-market-fit|Product-Market Fit]] — Even great PMF is invisible if users cannot reach the aha moment

## Sources

- [[lauryn-isford|Lauryn Isford on mastering onboarding]] — Activation rate calibration, experimentation culture, Airtable onboarding rebuild
- [[bangaly-kaba|Bangaly Kaba on growth frameworks]] — Aha moment identification, onboarding-to-habit gap, understand work, adjacent users
- [[adam-fishman|Adam Fishman on growth teams]] — Onboarding as 100% touchpoint, brand-product promise alignment, growth competency model
- [[hila-qu|Hila Qu on PLG motion]] — Mini aha moments, warm starts, time to value reduction, data foundation
- [[merci-grace|Merci Grace on Slack growth]] — Game design applied to onboarding, team-level activation
