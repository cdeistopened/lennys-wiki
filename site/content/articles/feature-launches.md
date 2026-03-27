---
type: anchor
title: "Feature Launches"
domain: product
aliases: ["feature launches", "product launches", "launch strategy", "shipping features", "launch planning", "go-to-market"]
episodes: [janna-bastow, karri-saarinen, anuj-rathi, marty-cagan, david-singleton]
status: draft
---

# Feature Launches

You have built the feature. Engineering says it is ready. But "ready to ship" and "ready to launch" are not the same thing. Shipping means the code is deployed. Launching means users know about it, understand it, and adopt it. The graveyard of product management is filled with well-built features that nobody noticed because the team treated deployment as the finish line instead of the starting line. How you launch determines whether months of building produce impact or become a line item on a feature list that nobody reads.

## The Core Idea

A feature launch is the coordinated process of introducing a new capability to users and the market. It spans internal alignment, staged rollout, communications, enablement, and measurement. The most important insight — emphasized by multiple guests — is that launching is not a single event. It is a process with distinct phases, each requiring different skills and different stakeholders.

[[karri-saarinen|Karri Saarinen]], co-founder and CEO of Linear, describes an approach that collapses the boundary between shipping and launching into a continuous process: "We actually believe that when you start building the thing you actually start realizing more how it should work and how it should be better. A lot of times with the teams we tell them, 'Just put it there in the first week almost. Ship it to production.' It's only visible to us so we internally can test it out." The team then graduates features through progressively larger audiences — internal dogfooding, a single co-creating customer, beta opt-ins, then general release — with polish increasing at each stage.

## Shipping vs. Launching

This distinction matters because conflating the two produces predictable failures.

| Dimension | Shipping | Launching |
|-----------|----------|-----------|
| What it means | Code is deployed to production | Users know about, understand, and adopt the feature |
| Who is involved | Engineering, QA, DevOps | Product, marketing, sales, support, engineering |
| Success metric | Feature works as intended, no regressions | Adoption rate, user feedback, business impact |
| Timeline | Ends when deployment is complete | Extends weeks or months after deployment |
| Common failure | Feature ships but has bugs | Feature works but nobody discovers or understands it |

A team that ships without launching has built a tree in a forest where nobody is walking. A team that launches without adequate shipping (premature launch of a buggy feature) has invited an audience to watch a rehearsal.

## Internal vs. External Launches

Not every launch needs a press release. The scale of your launch should match the scale of the change and the audience you need to reach.

### Internal Launches

Internal launches ensure that everyone inside the company — sales, support, marketing, leadership — understands the feature before users encounter it. Skipping this step produces embarrassing moments: a customer asks support about the new feature, and support has never heard of it. A sales rep learns about a capability from a prospect who saw the blog post.

**Internal launch checklist:**

| Audience | What They Need | Format |
|----------|---------------|--------|
| Customer support | How the feature works, common questions, known limitations, escalation paths | Training session + FAQ doc |
| Sales team | Value proposition, how it helps close deals, competitive positioning | Enablement deck + demo |
| Marketing | Positioning, messaging, timeline, assets | Creative brief + messaging doc |
| Leadership | Business context, expected impact, success metrics | 1-page summary |
| Other engineering teams | Technical details, API changes, dependencies | Internal tech doc |

[[janna-bastow|Janna Bastow]], co-founder of Mind the Product and inventor of the Now/Next/Later roadmap framework, frames the relationship between planning and launching: "The value isn't in your roadmap, the value is in the roadmapping process. What you're actually doing is laying out your assumptions of the problems that you're solving. You're saying, 'I think we have this problem, then this problem. What do you think?'" Running internal launches 1-2 weeks before external launches serves as a dress rehearsal that tests these assumptions with the people closest to users.

### External Launches

External launches are about reaching the right users with the right message at the right time.

| Launch Type | When to Use | Typical Tactics |
|-------------|-------------|-----------------|
| **Silent launch** | Testing with a subset, low-risk changes | Feature flag on, no announcement |
| **Soft launch** | Validating before broad rollout | In-app notification to a segment, limited blog post |
| **Standard launch** | Most features | Blog post, in-app notification, email to relevant users, social media |
| **Major launch** | Marquee features, new products, platform changes | Press, keynote or event, coordinated multi-channel campaign |

The mistake is defaulting to the same launch playbook for every feature. A minor UX improvement does not need a press release. A platform-level change should not be silently deployed. Matching the launch intensity to the feature significance is a judgment call that separates strong product teams from those that either over-launch small things (launch fatigue) or under-launch big things (missed impact).

## Phased Rollouts and Dark Launches

The riskiest approach to launching is flipping a switch for 100% of users on day one. Phased rollouts reduce risk by gradually increasing exposure.

### Rollout Phases

| Phase | Audience | Purpose | Duration |
|-------|----------|---------|----------|
| **Internal dogfooding** | Company employees | Catch obvious issues, build familiarity | 1-2 weeks |
| **Beta / early access** | 1-5% of users (opt-in or selected) | Validate core experience, gather qualitative feedback | 1-4 weeks |
| **Limited rollout** | 10-25% of users (random) | Validate at scale, measure metrics | 1-2 weeks |
| **Broad rollout** | 50-100% of users | Full launch with monitoring | 1 week ramp |
| **Full availability** | All users | Feature is generally available | Ongoing |

As [[karri-saarinen|Karri Saarinen]] describes Linear's approach: "In those stages, the experience can be a little janky or it's not that polished, but we're okay with it because we are saying, 'It's not finished. We just want to get your feedback early so we can make it better.' Once we get to the full general release, then we pay more attention to the actual polish or the craft." Each phase teaches you something. Beta users tell you what is confusing. Limited rollout tells you whether the metrics move. You are not just deploying code — you are running a series of progressively larger experiments.

### Dark Launches

A dark launch deploys the backend infrastructure and processing for a feature without exposing any UI to users. The system handles the new workload, but users see nothing different.

Facebook famously dark-launched its messaging infrastructure before launching Facebook Messenger. The backend was processing message-like operations for weeks before any user saw a message interface. When the actual launch happened, the team already knew the infrastructure could handle the load.

Dark launches are valuable when:
- The feature has significant backend/infrastructure requirements
- Load testing in production is more reliable than synthetic testing
- The team wants to decouple infrastructure risk from product risk
- The feature will be high-traffic from day one (no gradual ramp possible)

## How to Write a Launch Brief

A launch brief is the single document that aligns every stakeholder on what is launching, when, why, and how. It is not a PRD (which defines *what* to build). It is a plan for *how to introduce what you built to the world.*

### Launch Brief Template

**1. Launch Overview**
- Feature name and one-sentence description
- Target launch date and rollout plan
- Launch tier (silent / soft / standard / major)
- Launch owner and core team

**2. Context and Goals**
- Why this feature exists (user problem it solves)
- Success metrics and targets (adoption rate, impact on NSM, etc.)
- Non-goals (what this launch is explicitly not trying to achieve)

**3. Target Audience**
- Primary audience (who should know about this on day one)
- Secondary audience (who will discover it organically)
- Who this is *not* for (important for positioning)

**4. Messaging**
- One-line value proposition
- Key messages (3-5 bullets: what it does, why it matters, how to use it)
- Competitive positioning (how this compares to alternatives)

**5. Rollout Plan**
- Phase 1, 2, 3 with dates, audience percentages, and success criteria for advancing
- Rollback criteria (what would cause you to pause or revert)
- Dependencies (other teams, external partners, timing constraints)

**6. Channel Plan**
- In-app: Tooltips, modals, banners, empty states
- Email: Announcement, feature education, segment-specific messaging
- Blog: Feature announcement post
- Social: Coordinated posts
- Press: If applicable, embargo dates and press contacts
- Sales/support: Enablement sessions and materials

**7. Post-Launch**
- Monitoring plan (which dashboards, which metrics, who is watching)
- Feedback collection plan (surveys, interviews, support ticket monitoring)
- Post-launch review date

[[ami-vora|Vora]] emphasizes that the launch brief should be written *before* engineering is complete — ideally at the same time as the PRD: "If you cannot write a compelling launch brief, that is a signal that the feature's value proposition is not clear enough. The launch brief is a forcing function for product clarity."

## Post-Launch Reviews

Shipping and launching are not the end. A post-launch review — conducted 2-4 weeks after a feature is fully rolled out — determines whether the feature achieved its goals and what the team learned.

### Post-Launch Review Framework

| Question | What You Are Assessing |
|----------|----------------------|
| Did the feature hit its success metrics? | Impact |
| How does actual adoption compare to projected adoption? | Planning accuracy |
| What did users struggle with? (support tickets, feedback) | User experience quality |
| What went well in the launch process? | Process quality |
| What would we do differently next time? | Process improvement |
| Should we invest further in this feature, iterate, or move on? | Resource allocation |

The most important output of a post-launch review is not the assessment of the feature — it is the decision about what happens next. Features rarely achieve their full potential on v1. The review should produce a clear recommendation: double down (the feature is working and more investment will compound returns), iterate (the feature is directionally right but needs refinement), maintain (the feature is working and does not need more investment), or sunset (the feature is not working and should be deprecated).

[[todd-jackson|Jackson]] advocates for making post-launch reviews a team norm: "The teams that improve fastest are the ones that close the loop. Ship, measure, learn, adjust. If you skip the measure-and-learn step, you are running in the dark."

## Launch Cadence and Momentum

How often should you launch? The answer varies by company stage and product type, but a consistent cadence matters more than the specific frequency.

### The Value of Launch Cadence

| Benefit | Why It Matters |
|---------|---------------|
| Team momentum | Regular launches create a rhythm that sustains energy and focus |
| User expectation | Users who expect regular improvements are more forgiving of gaps and more engaged with new features |
| Market signal | Consistent launches signal product velocity to competitors, investors, and potential customers |
| Learning rate | More launches = more data = faster iteration |

### Cadence by Company Stage

| Stage | Recommended Cadence | Focus |
|-------|-------------------|-------|
| Pre-PMF (< 100 users) | Ship daily/weekly, "launch" is informal | Speed of iteration; every ship is a learning opportunity |
| Early growth (100-10K users) | Soft launch weekly, standard launch monthly | Building launch muscle, learning what resonates |
| Growth (10K-1M users) | Standard launch every 2-4 weeks, major launch quarterly | Balancing velocity with quality and coordination |
| Scale (1M+ users) | Major launches quarterly, incremental launches ongoing | Coordinated, high-polish, phased rollouts |

[[ethan-smith|Smith]] warns against two failure modes: launching too infrequently (the team spends months building and then debuts a massive change that overwhelms users and makes it impossible to attribute impact) and launching too frequently without substance (launch fatigue, where users stop paying attention because every "launch" is a minor tweak dressed up as a major event).

The sweet spot is what he calls "meaningful cadence" — launching often enough to maintain momentum, but only labeling something a "launch" when it genuinely changes the user experience or opens a new capability.

## Common Launch Failures

### 1. The Feature Nobody Discovers

The feature works. It solves a real problem. But it is buried three clicks deep and the team assumed users would find it organically. They did not. Discovery is not automatic — it must be designed. In-app education (tooltips, empty states, onboarding flows) is as important as the feature itself.

### 2. The Big Bang Launch

Everything ships at once after months of development. The team cannot isolate which changes are driving which metrics. Users are overwhelmed. Bugs are harder to diagnose because everything changed simultaneously. Phased rollouts exist to prevent exactly this.

### 3. The Launch Without Rollback

The team ships to 100% of users with no ability to revert. Something goes wrong — a critical bug, unexpected user behavior, infrastructure strain — and the only option is a hotfix under pressure. Every launch should have a rollback plan and clear criteria for when to use it.

### 4. The Launch Without Success Metrics

The feature ships, the team celebrates, and nobody defined what success looks like. Three months later, someone asks "did that feature work?" and nobody can answer because they did not establish metrics or baselines before launch. Define success metrics and set baselines *before* launch day.

### 5. The Launch That Skips Support

Users encounter the new feature and have questions. They contact support. Support has never heard of it. The support team scrambles to learn the feature in real time while customers wait. Internal enablement is not optional — it is a prerequisite for a professional launch.

## Building Launch as a Product Muscle

Launching well is a skill that improves with practice. The best product teams treat launch as a discipline with its own processes, templates, and retrospectives.

**Three practices that build this muscle:**

1. **Launch brief template.** Every feature above a certain size gets a launch brief. The template creates consistency and ensures nothing is forgotten.

2. **Launch review cadence.** Every standard or major launch gets a post-launch review 2-4 weeks after full rollout. The review produces lessons that improve the next launch.

3. **Launch tier classification.** Not every feature needs the same launch treatment. Classify features into tiers (silent, soft, standard, major) at the start of development, not at the end. This sets expectations early and ensures the right resources are allocated.

[[ami-vora|Vora]] summarizes: "The teams that are great at launching are not the ones with the best marketing. They are the ones that think about the launch from day one — not as an afterthought when engineering is done, but as an integral part of the product development process."

## Key Takeaway

- Shipping and launching are different milestones. Code deployed is not the same as feature adopted. Plan for both.
- Match launch intensity to feature significance. Silent launches for minor changes, major launches for platform shifts. Defaulting to the same playbook for every feature creates either launch fatigue or missed impact.
- Use phased rollouts to reduce risk and accelerate learning. Each phase (dogfooding, beta, limited, broad) serves a different purpose and teaches you something specific.
- Write the launch brief alongside the PRD, not after engineering is complete. If you cannot articulate a compelling value proposition for the launch, the feature's purpose is not clear enough.
- Define success metrics and baselines before launch day. "Did it work?" is a question you should be able to answer with data within 2-4 weeks of full rollout.

## Related

- [[roadmap-prioritization|Roadmap Prioritization]] — What gets launched depends on what gets prioritized
- [[ab-testing|A/B Testing]] — Phased rollouts often incorporate A/B testing for measurement
- [[activation-rate|Activation Rate]] — New feature launches directly affect activation metrics
- [[onboarding|Onboarding]] — Feature discovery and education are onboarding problems
- [[product-led-growth|Product-Led Growth]] — PLG products rely on in-product launches rather than marketing-led launches

## Sources

- [[karri-saarinen|Karri Saarinen on building Linear]] — Progressive launch from internal to beta to GA, craft at each stage, no metrics-based goals, taste-driven quality
- [[janna-bastow|Janna Bastow on building better roadmaps]] — Roadmap as prototype for strategy, Now/Next/Later framework, assumption-checking through launch
- [[anuj-rathi|Anuj Rathi on full-stack PM work]] — Power of three divergent press releases, working backwards process, launch planning for Indian market
- [[david-singleton|David Singleton on Stripe's culture of excellence]] — Meticulous attention to launch details, animated demos, quality as competitive advantage
