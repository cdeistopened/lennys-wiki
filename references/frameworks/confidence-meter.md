---
name: "Confidence Meter"
description: "Score how much evidence you actually have behind an idea before committing engineering resources — from 0.01 (gut feeling) to 10 (proven in production)"
type: framework
domain: metrics
episodes:
  - itamar-gilad
source_guests:
  - Itamar Gilad
score: 8
---

## When to Use

Use this framework when your team debates ideas based on who argues loudest rather than what the evidence says. It is designed for the moment someone says "I'm pretty confident this will work" and you need an objective way to ask: confident based on what? The confidence meter replaces subjective conviction with a structured assessment of evidence quality, and it pairs directly with ICE scoring — it replaces gut-feel confidence numbers with calibrated ones.

## The Framework

Itamar Gilad, who built products at Gmail, YouTube, and Microsoft, created the confidence meter to solve a specific problem: teams were scoring ideas with high confidence in ICE prioritization, but their "confidence" was based on nothing more than enthusiasm.

> "People tend to just go with gut instinct and then give themselves a high confidence. They say it's an eight and I'm pretty convinced, so it's eight for confidence and I found this a bit disturbing because it kind of subverts the whole system."

The meter is structured like a thermometer, running from 0 (no evidence) to 10 (proven success), with distinct evidence classes at each level.

### Level 1: Opinions (0 to 0.1)

The lowest tier of evidence. Most ideas live here and should be scored accordingly.

- **Self-conviction** (0.01): You personally think it is a great idea. This gives you essentially nothing. "Behind every terrible idea that was ever someone thought it was great."
- **Pitch deck or document** (slightly higher): You wrote a compelling six-page doc explaining why it is a great idea. Still opinion.
- **Thematic support** (still under 0.1): The idea aligns with a hot trend or the company strategy. "It's about AI, that makes it a good idea? Absolutely not."

> "Thousands and thousands of terrible ideas are being implemented right now as we speak based on these themes. So all these things combined can give you a maximum 0.1 out of 10 according to the tool."

### Level 2: Group Review and Estimates (0.1 to 1.0)

Slightly harder evidence, but still guesswork.

- **Colleague and stakeholder review**: Others evaluated your idea. They may find flaws, but they also introduce groupthink and politics. "Groups can actually arrive sometimes with worse decisions than individuals, there's some research to that."
- **Estimates and plans**: Back-of-envelope calculations, engineering estimates, business modeling. Useful but still speculative.

> "That gives you a little bit more confidence, but still we're at the level of guesswork at this point."

### Level 3: Data (1.0 to 3.0)

Real-world data, but not from testing your specific idea.

- **Anecdotal data**: A few data points from your analytics, a handful of customer conversations, or one competitor has the feature. "In many companies I meet, if the leading competitor has this feature and we think it's a good idea validation is done. Let's launch it, that's it. It never works honestly."
- **Market data**: Surveys, deep competitive analysis, large dataset analysis, structured user interviews, field research.

> "You should not assume that your competitor actually knows what they're doing anymore than you do."

### Level 4: Tests (3.0 to 7.0)

You have built something and put it in front of real users.

- **Fake tests** (lower): Fake door tests, smoke tests, Wizard of Oz tests, concierge tests, usability tests. No real code — just a facade to gauge reaction.
- **Rough versions** (mid): Early adopter programs, alphas, longitudinal user studies, fish food (testing on your own team).
- **More complete versions** (higher): Dog-fooding, previews, betas, labs.

Gilad shares how they validated Gmail's tabbed inbox at the fake-test level:

> "One of the first early versions was actually we showed the tabbed inbox working to people. But it wasn't really Gmail, it was just a facade of HTML and behind the scenes and according to the permissions that the users gave us some of us moved just the subject and the sender into the right place."

There was not a single line of code written: "This was just cooked up by the researchers and our designers. But it gave us some evidence to go and say, we should try and build this thing."

### Level 5: Experiments and Releases (7.0 to 10.0)

Controlled experiments with statistical rigor.

- **A/B tests and multivariate tests**: True experiments with control groups.
- **Staged releases**: Percent launches, hold-backs, staged rollouts.
- **Full release with measurement**: Production data confirming the hypothesis.

### How to Use the Scores

Tie your investment to the confidence level. Low confidence means cheap validation only. High confidence means full build.

> "Early on you want to do the cheap stuff just to gain more confidence and then you can go and invest more."

But also know when to stop. Not every idea needs to climb to 10:

> "If you're just changing the order of the settings, no one sees this or no one will be impacted. The risk is low, you can launch it without testing. So part of the trick is also knowing when to stop, not just trying to force your way all the way up when you don't have to."

## Example

Gilad describes how the confidence meter works in practice as a tool for saying no — or at least "not yet" — to pet projects and HiPPO-driven ideas:

> "Some people use this to kind of do an objective way to say no and gently. Or to say we'll think about it but look at these other ideas we have and how their impact and confidence stack up."

In his GIST framework (Goals, Ideas, Steps, Tasks), the confidence meter integrates directly with ICE prioritization. Teams pick ideas with the highest ICE scores, define validation steps, and update confidence as they progress:

> "The team together needs to develop which steps should we run, how can we validate this? Some of the steps will be done by the PM, some by the data analyst, some by the user researcher. But some will involve the team."

If an idea fails at a cheap validation step, it comes off the board and another idea takes its place. If it passes, you invest more and climb the meter:

> "If an idea turns out to be bad we will take it off the board and put another idea in this place or maybe we achieve the goal, we don't need to work on this anymore, we can focus something else."

## Output

After applying the confidence meter, you walk away with:

1. **A calibrated confidence score** for each idea in your backlog, replacing gut-feel numbers with evidence-class assessments
2. **A shared vocabulary** for evidence quality — the team can say "we're at 0.1" and everyone knows that means opinions only
3. **A spending rule** — match investment to confidence level; do not build expensive features based on 0.1 confidence
4. **A validation roadmap** — for each idea, the cheapest next step to increase confidence
5. **A tool for pushback** — an objective, non-political way to challenge ideas that lack evidence
6. **A decision framework** — cheap ideas with low confidence can ship; expensive ideas need higher confidence before committing

The meta-principle: "It's not about getting the bits to production, it's about getting the right bits to production. It's about creating the outcomes that you need, the impact, and so it's about time to outcomes."

> Source: episodes/itamar-gilad/transcript.md
