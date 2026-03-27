---
name: feature-prioritizer
description: "Prioritize a feature, project, or initiative using stacked PM frameworks. Use when someone says 'should I build this feature', 'how should I prioritize my roadmap', 'is this worth building', 'help me decide what to work on next', 'what should I cut from my roadmap', 'RICE vs ICE', or 'how do I say no to this request'. Walks through multiple prioritization lenses and outputs a scored recommendation."
---

# Feature Prioritizer

Walk a PM through evaluating whether to build a feature, project, or initiative using stacked prioritization frameworks from Lenny's Podcast guests.

## When to Use

The user has a feature, project, or initiative they are considering and wants to evaluate it systematically. They might be choosing between multiple options, trying to justify a "no" to a stakeholder, or pressure-testing their own conviction before committing engineering time.

## How to Run This

Ask the user to describe the feature or project they are evaluating. Get enough context to run the filters: what the feature does, who it serves, roughly how long it would take to build, and what company/product it belongs to. Then run through each filter in order. Stop and discuss at each stage -- do not rush through. Each filter builds on the previous.

---

## The Framework Stack

### Filter 1: LNO Classification (Shreyas Doshi)

From Shreyas Doshi (Stripe, Twitter, Google) on Lenny's Podcast:

> "As a product manager or as anybody in a creative high impact high leverage role, all your tasks are not created equal, there are actually three types of tasks that you end up doing in such a role."

Classify this feature/project into one of three categories:

- **L (Leverage):** You put in effort and get 10X or 100X impact in return. These are the features that change the trajectory of the product. As Shreyas put it: "The L tasks are such that when you put in a certain amount of effort, you get 10X or 100X in return in terms of impact."

- **N (Neutral):** You get roughly what you put in. "You put in 1X and you get 1.1X." Competent execution, expected output. Most features fall here.

- **O (Overhead):** You get back much less impact than you invest. Necessary maintenance, compliance requirements, table-stakes features that won't move the needle but can't be skipped.

The critical insight: most ambitious teams treat all three categories the same way. Shreyas on the mistake: "Many people who are ambitious or are perfectionists like myself by default treat each of these types of tasks the same way, and therein lies the problem."

**Ask the user:** "When you imagine this feature shipping, does it change the trajectory of the product (L), meet expectations without transforming anything (N), or mostly check a box (O)?" If it is an O task, challenge whether it truly must be done now -- or whether it is absorbing time that should go to an L task. If it is an N task, challenge whether the user is giving it L-task energy and attention.

**Source transcript:** `episodes/shreyas-doshi/transcript.md`

---

### Filter 2: Pre-Mortem -- Tigers, Paper Tigers, and Elephants (Shreyas Doshi)

From the same episode. Shreyas on how to surface the real risks before committing:

> "Imagine this project that we are working on has failed six months from now, or this launch we are doing has miserably failed. Let's just all imagine that. Now, let's work backwards from there and ask ourselves what went wrong, what could have contributed to this utter failure."

Have the user brainstorm what could go wrong. Classify each risk:

- **Tiger:** A real threat that will kill the project if not addressed. "A tiger is a threat that will actually kill us, just like a tiger would. These are actual problematic things that could be really harmful to the product or the project."

- **Paper Tiger:** Looks scary but is manageable or unlikely. "A seeming threat that others might be worried about, but you're not worried about."

- **Elephant:** The big obvious problem nobody is talking about. "The elephant in the room that nobody is talking about." Example: "We are assuming that just because we launch this and do a bunch of PR that we'll get users, but are we sure we're going to get users?"

**Walk through these questions:**
1. What are 2-3 ways this feature could fail after launch?
2. Which of those are Tigers (real killers), Paper Tigers (look scary but manageable), or Elephants (obvious but unspoken)?
3. For each Tiger: is there a mitigation plan, or does this risk fundamentally undermine the case for building?
4. For each Elephant: why is no one talking about this? Is it because the answer is uncomfortable?

**Source transcript:** `episodes/shreyas-doshi/transcript.md`

---

### Filter 3: ICE Scoring (Itamar Gilad / Sean Ellis)

From Itamar Gilad (Gmail, YouTube, Microsoft) on Lenny's Podcast:

> "Impact, confidence and ease -- which is basically a way to assign three values to each idea. The impact tries to assess how much impact it'll have on the goals... Ease is basically the opposite of effort... And then there's the third element which is confidence, which tries to assess how sure are we or should we be about our first guesstimates."

Gilad credits Sean Ellis as the creator of ICE and prefers it over RICE: "I prefer ICE because I prefer to fold the reach into the I for various reasons but both are valid, both are equivalent in a sense."

Score each dimension 1-10:

| Dimension | Question | Score |
|-----------|----------|-------|
| **Impact** | If this works perfectly, how much does it move the goal metric? | /10 |
| **Confidence** | How sure are we that it will work? (See Filter 4 for precision) | /10 |
| **Ease** | How easy is this to build and ship? (Inverse of effort) | /10 |

**ICE Score = (Impact + Confidence + Ease) / 3**

If the user prefers RICE, use: **(Reach x Impact x Confidence) / Effort**

Lenny's own take on keeping this simple: "I think people over complicate this stuff and try to get so many math formulas involved with estimating impact. I feel like these are just simple heuristics to kind of bubble the best ideas to the top. It doesn't have to be a perfect estimate."

**Source transcript:** `episodes/itamar-gilad/transcript.md`

---

### Filter 4: Confidence Meter (Itamar Gilad)

From the same episode. This replaces gut-feel confidence with an evidence audit:

> "I wanted to help people realize when they have strong evidence in support of their guesses and when it's weak evidence, how to calculate confidence in a sense."

Walk the user through the evidence levels (0-10 scale):

| Level | Evidence Type | Confidence |
|-------|--------------|------------|
| 0-1 | **Opinions:** Self-conviction, pitch deck, thematic alignment ("it's AI!"), HiPPO endorsement | Very Low |
| 1-2 | **Peer review:** Colleagues and stakeholders reviewed the idea | Low |
| 2-3 | **Estimates and plans:** Back-of-envelope calculations, effort estimates | Low |
| 3-4 | **Anecdotal data:** A few data points, a handful of customer conversations, one competitor has it | Low-Medium |
| 4-5 | **Market data:** Surveys, deep competitive analysis, larger datasets | Medium |
| 6-7 | **Small-scale tests:** Fake door tests, Wizard of Oz tests, usability studies, early MVPs | Medium-High |
| 8-9 | **Scaled tests:** A/B tests at scale, cohort analysis, pilot programs with real usage data | High |
| 10 | **Proven at scale:** Sustained metrics across a large user base | Full |

Gilad on the most common failure mode: "People tend to just go with gut instinct and then give themselves a high confidence. They say it's an eight and I'm pretty convinced, so it's eight for confidence and I found this a bit disturbing because it kind of subverts the whole system."

**Ask the user:** "What is the strongest piece of evidence you have that this feature will work? Be honest -- is it a customer quote (level 3), survey data (level 4-5), or an actual test (level 6+)?"

Gilad on using the meter to say no: "Some people use this to kind of do... an objective way to say no and gently. Or to say we'll think about it but look at these other ideas we have and how their impact and confidence stack up."

**Source transcript:** `episodes/itamar-gilad/transcript.md`

---

### Filter 5: Opportunity Cost Check (Shreyas Doshi)

From the same Shreyas episode. This is the filter most teams skip:

The standard question is "Is this worth doing?" Shreyas argues the better question is: **"What are we NOT doing by choosing this?"**

> Most teams prioritize by positive ROI: "Is this worth doing?" This leads to working on many good-but-not-great things. If you only look at positive ROI, you'll never tackle the big scary project that could be transformative.

At Stripe, his team was working on many positive-ROI items. He pushed them to look at a big, scary project based on customer signals. It became Stripe Connect -- a major product and revenue driver that would never have been prioritized under ROI-only thinking.

**Ask the user:**
1. "If your team spends the next N weeks building this, what is the biggest thing you will NOT be able to work on?"
2. "Is there a bigger, scarier project sitting in your backlog that keeps getting deferred because safer bets keep winning?"
3. "Would you rather have this feature, or the time back to invest in something with higher ceiling?"

Shreyas also warned about the two-way door illusion: "Most doors that look like two-way doors are actually one-way doors. They are two-way doors at Bezos' level, but as a PM leader, for you, they are a one-way door, and that's making you busy." Once you ship a feature and present it in a QBR, you are committed -- killing it is politically harder than not building it.

**Source transcript:** `episodes/shreyas-doshi/transcript.md`

---

### Filter 6: Strategy Alignment -- DHM Model (Gibson Biddle) + Product Strategy Stack (Ravi Mehta)

Two frameworks that test whether the feature serves the product strategy, not just the backlog.

**DHM Model (Gibson Biddle, Netflix, Chegg):**

Biddle learned this from Reed Hastings. The only question Hastings asked in Biddle's reference check: "Is Gib ready? Can Gib delight customers?"

> "The job is to delight customers. Like Peter Thiel, his book, From Zero to One. The job of an entrepreneur at the beginning is just to find out something that's 10X better. Delight is trying to work in that magnitude."

Evaluate the feature against three criteria:

- **Delight:** Does this make customers meaningfully happier? Biddle's test at Netflix was whether a feature improved retention. His rule: "If you find an idea that only works for 2% of your customers, now you're creating complexity... I would kill them. If I launched something and it was only 2% we called it scraping the barnacles, just get rid of it."

- **Hard to Copy:** Does this build a competitive advantage that compounds over time? Biddle on easy-to-copy features: "He put a happy family on the couch on this screen... I'm like, that's great HB, but I'll bet my paycheck that within a week, Blockbuster's going to put a happy family on their couch, too."

- **Margin Enhancing:** Does this help the business make money, either directly (revenue) or indirectly (retention, word of mouth)?

**Product Strategy Stack (Ravi Mehta, Tinder, Facebook, Tripadvisor):**

> "When PMs can't decide between two features of similar size, the root cause is almost always a gap in understanding strategy, not a prioritization problem."

Check whether the feature aligns with each layer of the stack:

1. **Company Mission:** Does this advance the change we want to bring to the world?
2. **Company Strategy:** Does this fit our acquisition model, monetization model, competitive positioning?
3. **Product Strategy:** Does this reflect what our product does differently from alternatives?
4. **Product Roadmap:** Does this belong on the roadmap given the above, or is it a distraction?
5. **Goals:** Does this move a metric we are actively tracking?

Mehta's Tinder example: Tinder deliberately resisted adding search filters despite customer requests, because the product strategy was lightweight serendipity. "By keeping the product experience really lightweight, really serendipitous, they were able to create a way of meeting each other that's really different than the other dating products, which are more of those search engines for people." A feature that customers request can still be strategically wrong.

**Ask the user:** "Can you trace a line from this feature up through your product strategy to your company mission? If the line breaks at any level, that is your problem."

**Source transcripts:** `episodes/gibson-biddle/transcript.md`, `episodes/ravi-mehta/transcript.md`

---

### Filter 7 (Tiebreaker): GEM Ranking (Gibson Biddle)

If the feature passes the above filters and the question is now "when, not whether," use Gibson Biddle's GEM model to sequence it:

> "I just need you to force rank these three factors for me: growth, engagement, and monetization. And I need the two of you to agree."

- **Growth:** Does this feature drive new user acquisition? Year-over-year customer growth?
- **Engagement:** Does this improve product quality? (Proxy: retention)
- **Monetization:** Does this directly drive revenue?

Ask the user which of these three their company is currently optimizing for, then evaluate whether this feature serves that priority. Biddle on what happens without alignment: at Chegg, the CEO said Growth > Engagement > Monetization while the CFO said Monetization > Engagement > Growth. "These are the kinds of fundamental misalignments that can wreck startups."

**Source transcript:** `episodes/gibson-biddle/transcript.md`

---

## Output

After running all filters, produce a Prioritization Scorecard:

```
FEATURE PRIORITIZATION SCORECARD
==================================
Feature: [name]
Date: [today]

1. LNO Classification: [L / N / O]
   → [1-sentence rationale]

2. Pre-Mortem Risks:
   - Tigers: [list real risks]
   - Paper Tigers: [list non-risks that look scary]
   - Elephants: [list unspoken obvious risks]

3. ICE Score: [X / 10]
   - Impact: [X/10]
   - Confidence: [X/10]
   - Ease: [X/10]

4. Confidence Level: [X / 10]
   - Evidence type: [what's the strongest evidence?]
   - Evidence gap: [what would move confidence up?]

5. Opportunity Cost: [what you give up by building this]

6. Strategy Alignment:
   - DHM: [Delightful? Hard to copy? Margin enhancing?]
   - Strategy Stack: [Does it trace from mission → strategy → roadmap?]

7. GEM Priority: [Growth / Engagement / Monetization fit]

RECOMMENDATION: [Build / Defer / Kill / Needs More Evidence]
[2-3 sentence honest assessment explaining the recommendation]
```

Be direct. If the feature should be killed, say so and explain why. If it needs more evidence, specify exactly what test or data would move confidence. If it should be built, identify the Tigers to mitigate first. Lenny's podcast guests do not sugarcoat -- neither should this assessment.

## Related Skills

- **pmf-evaluator** — Run this first if you haven't confirmed product-market fit; prioritization strategy changes dramatically pre-PMF
- **growth-loops-masterclass** — If evaluating a growth feature, understand loop dynamics before scoring impact
- **growth-model-designer** — See how this feature fits your overall growth model and whether it strengthens an existing loop or creates a new one

## Related Frameworks

- `lno-framework.md` — Shreyas Doshi's Leverage/Neutral/Overhead classification used in Filter 1
- `ice-prioritization.md` — Itamar Gilad's ICE scoring methodology used in Filter 3
- `opportunity-cost-prioritization.md` — Shreyas Doshi's opportunity cost thinking used in Filter 5
- `dhm-model.md` — Gibson Biddle's Delight/Hard-to-copy/Margin-enhancing model used in Filter 6
- `gem-jam-prioritization.md` — Gibson Biddle's Growth/Engagement/Monetization ranking used in Filter 7
- `confidence-meter.md` — Itamar Gilad's evidence-based confidence scoring used in Filter 4
- `pre-mortem-tigers.md` — Shreyas Doshi's Tigers/Paper Tigers/Elephants risk classification for stress-testing features before committing
- `amazon-prfaq.md` — Amazon's PR/FAQ process for forcing clarity on what you're building and why before starting engineering
- `opportunity-solution-tree.md` — Teresa Torres's method for mapping the opportunity space before jumping to solutions
- `product-strategy-stack.md` — Diagnose why your team can't prioritize by tracing gaps from roadmap up through strategy and mission
- `shape-up-method.md` — Basecamp's fixed-budget, variable-scope approach to shipping on time
- `gist-planning.md` — Itamar Gilad's Goals/Ideas/Steps/Tasks planning system as an alternative to opinion-driven roadmaps
- `three-levels-of-product-work.md` — Diagnose whether prioritization conflicts stem from impact, execution, or optics disagreements
- `value-equation-for-products.md` — Hormozi's Value Equation adapted for product decisions: numerator (dream outcome, trust) vs. denominator (time delay, friction)
- `overall-evaluation-criterion.md` — Define a composite metric for A/B tests that balances short-term revenue against long-term user experience
- `amazon-input-output-metrics.md` — Separate what you control (inputs) from what you measure (outputs) to focus prioritization on controllable levers
- `radical-focus-okr.md` — Christina Wodtke's weekly OKR cadence for turning prioritization decisions into committed weekly focus
- `hormozi-offer-design-for-features.md` — Score features against Hormozi's Value Equation: does this feature increase dream outcome/trust or reduce time delay/friction?
- `idea-maze-for-product-strategy.md` — Map the competitive landscape and dead ends before committing to a product direction
- `organic-first-feature-validation.md` — Ship minimal, measure organic pull, then decide to invest, iterate, or kill
