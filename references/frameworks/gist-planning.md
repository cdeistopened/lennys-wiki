---
name: "GIST Planning Framework"
description: "Your team ships features based on opinions and politics — use Goals, Ideas, Steps, and Tasks to become evidence-guided."
type: framework
domain: product
episodes:
  - itamar-gilad
source_guests:
  - Itamar Gilad
score: 80
---

## When to Use

Use GIST when your product decisions are driven by the highest-paid person's opinion, when roadmaps are really just project lists with dates, when teams ship features without validating whether anyone needs them, or when your PMs are stuck translating executive whims into Jira tickets with no time for actual discovery. Itamar Gilad describes the gap: "In many organizations there's these two worlds. There's the planning world where basically you have the managers, the stakeholders, some of the PMs really sit and think about what we need to launch. But guess who is not invited to the party? The people who are actually doing the work." GIST is a meta-framework that puts lean startup, design thinking, and growth experimentation into a single coherent system.

## The Framework

GIST stands for Goals, Ideas, Steps, and Tasks — four layers that structure how a product team decides what to build and validates whether it works. Gilad is upfront that "GIST is not a brand new invention. It's a meta framework that puts in place a lot of existing methodologies. It's based on lean startup, on design thinking, product discovery, growth. It just tries to put them all into one framework."

### Layer 1: Goals

Goals define where you want to end up, not what you want to build. Most teams confuse planning with goal-setting: "When people say I have goals, usually they take the goals layer and use it as a planning session. They talk about what shall we build by when, what are the resources? And that's actually not goals at all, that's planning work."

GIST uses two top-level metrics derived from what Gilad calls the "value exchange loop":

- **North Star Metric**: Measures how much value you create for users. For WhatsApp, it was messages sent. For Airbnb, nights booked. For Amplitude, weekly active learning users (users who found an insight important enough to share with at least two others). This is not just "your most important metric" — it specifically measures value delivered to the market.
- **Top Business KPI**: Measures value captured back — revenue, profit, market share.

Break both metrics into **metrics trees** — hierarchical decompositions that show what sub-metrics contribute to the top-level numbers. "Once you have these two, you can further break them down into what I call metrics trees. So there's a metric tree for the North Star metric and there's the metric tree for the top KPI... and usually they overlap. So you might find in the middle some metrics that are super, super important because moving them actually moves the needle on everything else."

Metrics trees also inform org design: "If you start with a metrics tree, you can try to arrange the topology around goals." Teams own sub-metrics within the tree.

### Layer 2: Ideas

Ideas are hypothetical ways to achieve the goals. Most organizations choose between ideas using politics, gut feeling, or what Gilad cites Ronny Kohavi calling the "highest paid person's opinion." The fix: evaluate ideas using **ICE scoring** — Impact, Confidence, and Ease (the original formulation by Sean Ellis, who also coined "growth hacking" and popularized "product-market fit").

The critical addition is the **Confidence Meter**, a tool Gilad created to prevent teams from inflating confidence scores. It ranges from 0 to 10 across specific evidence types:

- **0-0.1 (Opinions)**: Your own conviction. A pitch deck. Thematic alignment ("it's about AI"). Stakeholder endorsement. "Behind every terrible idea that was ever, someone thought it was great. That gives you 0.01 out of 10."
- **0.1-1.0 (Assessments)**: Colleague reviews, back-of-envelope calculations, plan estimates. Still guesswork.
- **1.0-3.0 (Data)**: Anecdotal data points, customer interviews, competitive analysis. "In many companies I meet, if the leading competitor has this feature and we think it's a good idea, validation is done. Let's launch it. It never works honestly, you should not assume that your competitor actually knows what they're doing anymore than you do."
- **3.0-10 (Tests and Experiments)**: Fake door tests, prototypes, early adopter programs, A/B tests, staged releases. Only here do you reach medium to high confidence.

The Confidence Meter serves a practical purpose: "Some people use this to kind of do an objective way to say no and gently. Or to say we'll think about it but look at these other ideas we have and how their impact and confidence stack up."

### Layer 3: Steps

Steps are where building and learning happen simultaneously. Most teams think it is either/or — move fast or learn first. Gilad reframes it: "The metric is not how fast can we get the bits into production. It's about getting the right bits to production. It's about time to outcomes."

Steps progress from cheap validation to expensive delivery:

1. **Assessment**: Check goal alignment, do ICE analysis, map assumptions. "These are usually not expensive things and they can teach you an awful lot."
2. **Fact-finding**: Dig into existing data, surveys, competitive analysis, user interviews.
3. **Tests (faking it)**: Fake door tests, smoke tests, Wizard of Oz, concierge tests. Gilad shares a Gmail example: "One of the first early versions was actually we showed the tabbed inbox working to people. But it wasn't really Gmail, it was just a facade of HTML and behind the scenes... some of us moved just the subject and the sender into the right place." Zero lines of code. Enough evidence to justify building it.
4. **Tests (building rough versions)**: Early adopter programs, alphas, fish food (testing on your own team). "Not complete, it's not polished, it's not scalable, but it's good enough to give to users to start using."
5. **Experiments**: A/B tests with a control element.
6. **Staged release**: Percent launches, holdbacks, gradual rollouts.

"The key point is you don't have to start at the right-hand side, which is expensive. You can start early on and that leads to poking a lot of ideas very quickly."

### Layer 4: Tasks

Tasks are the Jira tickets and Kanban cards your development team manages. The change GIST proposes is to stop shielding developers from context. Instead of PMs serving as translators between "planning world" and "Agile world," let developers participate in discovery. "Let's let them do more than just develop. Let's let them discover as well."

The **GIST Board** is the operational tool: a living board per team showing the team's key results (goals), the ideas being tested, and the current steps for each idea. The team meets around it at least biweekly. "If you do have this, you create a lot more context in the minds of your team and then they need to ask you fewer questions. You need to tell them less what to do."

## Example

Gilad walks through a concrete GIST board: the goal is "average onboarding time less than two days" (currently five and a half days). One idea is an onboarding wizard. The steps are: usability test with mockups, then usability test with a prototype, then an A/B test. Each step produces evidence that either increases confidence (keep going) or kills the idea (swap in a different one from the idea bank). The board changes dynamically: "If an idea turns out to be bad we will take it off the board and put another idea in this place."

For the Gmail tabbed inbox, the team progressed through GIST layers organically. The goal was improving email management. The idea was sorting messages into tabs. The early step was a Wizard of Oz test — a manually constructed HTML facade shown to users in research sessions. When users responded positively, the team had evidence to justify building a real prototype. No committee voted on it. No executive mandated it. Evidence moved it forward.

## Output

After applying the GIST framework, you walk away with:

1. **Metrics trees** decomposing your North Star Metric and Top Business KPI into actionable sub-metrics owned by specific teams
2. **An idea evaluation system** using ICE scoring with the Confidence Meter preventing inflated confidence ratings
3. **A validation ladder** — cheap steps first (assessments, fake tests) before expensive ones (full builds, A/B tests)
4. **A GIST board per team** — a living artifact showing goals, active ideas, and current steps that the whole team reviews biweekly
5. **Engaged developers** who understand what they are building, why, and how success is measured — not just ticket-takers

Gilad's core reframe: "It's not about how fast can we get the bits into production. It's about getting the right bits to production."

> Source: episodes/itamar-gilad/transcript.md
