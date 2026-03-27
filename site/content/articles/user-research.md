---
type: anchor
title: "User Research"
domain: product
aliases: ["user research", "customer research", "user interviews", "customer discovery", "discovery research", "qualitative research"]
episodes: [teresa-torres, judd-antin, gia-laudi, bob-moesta, kevin-yien]
status: draft
---

# User Research

You are about to make a product decision — a new feature, a redesign, a pricing change — and you realize you do not actually know what your users think, feel, or do. You know what your dashboard says. You know what Sales reported from the last few calls. You have hunches. But you do not have direct evidence from the people who use your product. The question is not whether you should do research. It is how much, what kind, and how to avoid the traps that make most research useless.

## The Core Idea

User research is the practice of systematically learning about your users — their behaviors, needs, motivations, and constraints — to make better product decisions. The key word is "systematically." Everyone talks to users occasionally. The difference between product teams that make good decisions and those that do not is whether research is continuous, structured, and actually influences what gets built.

[[teresa-torres|Teresa Torres]], author of *Continuous Discovery Habits* and coach to over 11,000 product managers, provides the foundational framework. She developed the opportunity solution tree specifically because "while as an industry, some companies are moving from this output focus to an outcome focus, most product teams don't really know how to manage this really complex problem of how do I start from an outcome and figure out what to build." The biggest mistake product teams make is not doing too little research — it is doing research in big batches, disconnected from the decisions they need to make.

## Continuous Discovery vs. Project-Based Research

This is the most consequential choice you will make about research: do you treat it as an ongoing habit or as a project that happens when a big decision looms?

| Dimension | Continuous Discovery | Project-Based Research |
|-----------|---------------------|----------------------|
| Cadence | At least one user interview per week, every week | Research "sprints" tied to major initiatives |
| Who does it | Product trio (PM, designer, engineer) | Dedicated researchers or outsourced agencies |
| Time to insight | Hours to days | Weeks to months |
| Cost per insight | Low (15-30 min interviews, no formal recruitment) | High (recruitment, incentives, analysis, reporting) |
| Risk of shelf-ware | Low — insights feed directly into current work | High — reports often arrive after decisions are made |
| Depth | Moderate — breadth across many small questions | Deep — thorough exploration of specific questions |

[[teresa-torres|Torres]] advocates unambiguously for continuous discovery: "If you are only doing research when you have a big project, you are making most of your daily decisions in the dark." Her recommendation is that the product trio — PM, designer, and tech lead — should conduct at least one user interview per week, every week, regardless of what is on the roadmap.

This does not replace deep research projects. It supplements them. Continuous discovery handles the steady stream of small questions ("do users understand this label?", "what workaround are they using for X?"), while project-based research handles the big strategic questions ("should we enter the enterprise market?", "what is the right pricing model?").

## How Many Interviews Are Enough?

This is the question every PM asks. The answer depends on what you are trying to learn.

| Research Goal | Minimum Interviews | When to Stop |
|---------------|-------------------|-------------|
| Identifying major usability issues | 5-8 | After 5 users, you have found ~85% of usability problems (Nielsen/Norman Group data) |
| Understanding user segments | 8-12 per segment | When new interviews stop revealing new segments or behaviors |
| Validating a Jobs to Be Done hypothesis | 10-15 | When the "forces of progress" diagram stops changing |
| Exploratory / generative research | 15-30 | When you reach theoretical saturation — new interviews confirm but do not expand your understanding |
| Testing a specific prototype | 5-7 | When the pattern of feedback stabilizes |

[[teresa-torres|Torres]] reframes the question entirely: "Stop asking 'how many interviews do I need?' Start asking 'am I talking to at least one user every week?' If the answer is yes, you will naturally accumulate the evidence you need. If the answer is no, even 50 interviews in a burst will not save you."

The practical truth is that one interview per week, sustained over a quarter, gives you 12-13 conversations. That is more than most PMs conduct in an entire year of project-based research. The consistency matters more than the volume.

## When Qualitative vs. Quantitative

Product teams often default to quantitative data (dashboards, A/B tests, surveys) because it feels more objective. But quantitative data answers "what" and "how much" — it does not answer "why." You need both, and the skill is knowing which to reach for when.

| Question Type | Use Qualitative | Use Quantitative |
|--------------|-----------------|------------------|
| "Why are users dropping off at step 3?" | Interview users who dropped off — ask them to walk through their experience | Funnel analysis to quantify the drop-off and segment by user type |
| "Do users want feature X?" | Interview to understand the underlying need — they may want X or something different | Survey a larger sample once you have a hypothesis from interviews |
| "Is version A or B better?" | Usability test both with 5-7 users to understand *why* one is better | A/B test to measure *which* is better at scale |
| "Who are our users?" | Interviews and observation to build personas grounded in real behavior | Analytics to size segments and validate persona distribution |
| "Is this problem worth solving?" | Interviews to assess pain intensity, frequency, and willingness to pay | Market sizing and competitive analysis to assess opportunity size |

[[judd-antin|Judd Antin]], former head of research at Airbnb and Meta, raises a sharper warning. He coined the term "user-centered performance" to describe "customer obsession or user-centered practice that is symbolic rather than focused on learning. It's hugely common. Every time a PM comes to a researcher at the end of a product process and says, 'Can you just run a quick user study just to validate our assumptions,' that's user-centered performance. It's too late to matter." His mantra: "We don't validate, we falsify. We are looking to be wrong."

A practical rule: start qualitative, go quantitative. Interview first to understand the landscape, then quantify to size it. The reverse — starting with a survey — is a common anti-pattern because you do not know which questions to ask until you have listened to users describe their experience in their own words.

## Jobs to Be Done Interview Methodology

The Jobs to Be Done (JTBD) framework, developed by Clayton Christensen and operationalized by [[bob-moesta|Bob Moesta]], is the most powerful interview methodology for understanding *why* users make the decisions they make.

The core principle: users do not buy products. They "hire" products to do a job. Understanding the job — the progress the user is trying to make in a specific circumstance — reveals what to build far more reliably than asking users what features they want.

### The JTBD Interview Structure

A JTBD interview reconstructs a specific decision in granular detail. You are not asking about preferences or hypotheticals. You are asking the user to walk through a real, past decision step by step.

**Phase 1: Set the stage.** "Tell me about the last time you [signed up for / purchased / switched to] [product]. Walk me through what was happening."

**Phase 2: Explore the timeline.** Reconstruct the journey from first thought to action:
- When did you first realize you needed something different?
- What were you using before? What was wrong with it?
- How did you find us? What else did you consider?
- What almost stopped you from switching?
- What pushed you to finally act?

**Phase 3: Map the forces.** JTBD identifies four forces that govern every decision:

| Force | Direction | Example |
|-------|-----------|---------|
| **Push** (dissatisfaction with current solution) | Toward change | "Our old tool kept crashing during demos" |
| **Pull** (attraction of new solution) | Toward change | "I saw that your product had real-time collaboration" |
| **Anxiety** (fears about the new solution) | Against change | "What if the migration breaks our data?" |
| **Habit** (comfort with current solution) | Against change | "We have been using the old tool for three years" |

When Push + Pull > Anxiety + Habit, the user switches. Understanding these forces for your users tells you exactly what to emphasize in your product and marketing (strengthen Pull, reduce Anxiety) and what is keeping potential users from switching (Habit is stronger than you think).

### What Makes JTBD Interviews Different

| Typical Interview | JTBD Interview |
|-------------------|----------------|
| "What features do you want?" | "What were you trying to accomplish when you signed up?" |
| Asks about preferences | Asks about past behavior |
| Forward-looking (hypothetical) | Backward-looking (factual) |
| User plays product designer | User plays storyteller |
| Produces feature wish lists | Produces causal understanding |

[[bob-moesta|Moesta]] emphasizes: "People hire products, they don't buy them, they hire them to make progress in their life." The key is studying specific past decisions, not abstract preferences: "It's not just about pain and gain, it's about context and outcomes. And so when you frame it that way, it becomes a vector, a vector of progress or a vector of intention of what they're trying to do."

## Research Anti-Patterns

### 1. Leading Questions

The most common and most destructive research mistake. Leading questions embed the answer you want to hear.

| Leading (Bad) | Neutral (Good) |
|--------------|----------------|
| "Would you find it helpful if we added X?" | "How do you currently handle this situation?" |
| "Don't you think this flow is confusing?" | "Walk me through what you did here." |
| "Most users love this feature — what do you think?" | "Tell me about your experience with this feature." |
| "Is the price too high?" | "How do you think about the value you get relative to what you pay?" |

Leading questions feel productive because they produce clear answers. But the answers reflect your hypothesis, not the user's reality. You leave the interview more confident and no more informed.

### 2. Confirmation Bias

You enter the interview with a hypothesis and unconsciously seek evidence that confirms it. You probe deeper on answers that support your view and move quickly past answers that contradict it. You remember the confirming anecdotes and forget the disconfirming ones.

The fix: before each interview, write down what you expect to hear. After the interview, note where reality diverged from expectation. The divergences are where the real insights live.

### 3. Surveying Instead of Interviewing

Surveys are useful for quantifying known phenomena. They are terrible for discovery. A survey with pre-defined answer options can only confirm or deny your existing understanding. It cannot reveal what you do not know you do not know.

[[gia-laudi|Gia Laudi]], co-founder of Forget The Funnel, argues that traditional funnel metrics miss the point entirely: "It puts businesses at the center of the business versus putting customers at the center. It's about the values of the business, not the value to the customer that's being measured." She advocates for Jobs to Be Done-driven customer research as the foundation, with surveys layered on only after interview insights have shaped the right questions.

The exception: open-ended survey questions ("Describe in your own words why you signed up") can serve as a lightweight qualitative input. But they produce lower-quality insights than interviews because you cannot ask follow-up questions.

### 4. Asking Users to Design the Product

"What features would you want?" is not a research question. It is an abdication of the PM's job. Users are experts on their problems. They are not product designers. Henry Ford's possibly apocryphal line — "If I had asked people what they wanted, they would have said faster horses" — captures the principle even if the attribution is dubious. Ask about problems, contexts, and constraints. Leave solutions to the product team.

### 5. Researching Without a Decision in Mind

Research without a specific decision it needs to inform becomes a knowledge-gathering exercise that produces interesting-but-unused reports. Before every research effort, answer: "What decision will this research help us make? What will we do differently based on what we learn?"

[[teresa-torres|Torres]] warns that even the opportunity solution tree can be misapplied: "I can tell you that 98% of people that write opportunities write them as solutions. We tend to just really struggle with this distinction between the problem space and the solution space." Every interview should be connected to a specific product decision the team is facing. If you cannot name the decision, you are not doing research — you are doing anthropology.

## How to Synthesize Findings into Product Decisions

Raw interview notes are not insights. They are data. The synthesis step — turning individual observations into patterns that inform decisions — is where most research efforts fail. Teams conduct great interviews and then do nothing with them because the path from notes to action is unclear.

### A Practical Synthesis Process

**Step 1: Capture quotes, not summaries.** During interviews, record exact quotes and specific behaviors. "Three out of five users clicked the wrong button" is more useful than "users found the flow confusing."

**Step 2: Look for patterns across interviews.** After 5-8 interviews on the same topic, cluster similar observations. What themes appear in 3+ interviews? What surprises appeared?

**Step 3: Create an opportunity solution tree.** [[teresa-torres|Torres]] developed this tool to connect research to decisions:

```
Desired Outcome (metric you want to move)
├── Opportunity 1 (unmet need discovered in research)
│   ├── Solution A
│   ├── Solution B
│   └── Solution C
├── Opportunity 2
│   ├── Solution D
│   └── Solution E
└── Opportunity 3
    └── Solution F
```

The tree forces you to separate the opportunity (what users need) from the solution (what you might build). Multiple solutions can address the same opportunity. The best teams generate 3-5 potential solutions per opportunity and then test assumptions before committing to build.

**Step 4: Identify assumptions to test.** Every solution carries assumptions: users will discover this feature, they will understand the value proposition, they will use it frequently enough to form a habit. List the riskiest assumptions and design small experiments to test them before committing to full development.

**Step 5: Share findings as stories, not reports.** A 30-page research report will not be read. A 5-minute video clip of a user struggling with the onboarding flow will change the roadmap. [[judd-antin|Antin]] advises: "The unit of research communication is the story, not the statistic. One vivid user story does more to change minds than twenty pages of analysis."

## Building a Research Practice from Zero

If your team does no research today, here is how to start:

| Week | Action | Time Investment |
|------|--------|----------------|
| Week 1 | Schedule 2 interviews with recent users (use your existing user list — no formal recruitment needed) | 2 hours total |
| Week 2 | Debrief with your designer and tech lead. What surprised you? | 30 minutes |
| Week 3 | Schedule 1 interview. Focus on a specific decision you are facing | 1 hour |
| Week 4 | Create your first opportunity solution tree from 3-4 interviews | 1 hour |
| Ongoing | 1 interview per week, 15-30 minutes each | 30 min/week + 15 min debrief |

[[teresa-torres|Torres]] emphasizes that the barrier to starting is lower than teams think: "You do not need a research plan. You do not need formal recruitment. You do not need a screened panel. You need 15 minutes with someone who recently used your product and the willingness to listen."

## Key Takeaway

- Interview at least one user per week, every week. Consistency beats intensity. Twelve interviews over a quarter is more valuable than twelve interviews in a sprint.
- Start qualitative, go quantitative. Interviews reveal the landscape; surveys and analytics size it. Reversing this sequence means you will precisely measure the wrong things.
- Use JTBD interviews to understand decisions, not preferences. Ask users to reconstruct past behavior, not predict future behavior. The four forces (Push, Pull, Anxiety, Habit) reveal what to build and how to position it.
- Every research effort must be connected to a specific product decision. If you cannot name the decision, stop and define it before scheduling another interview.
- Synthesize using opportunity solution trees. Separate opportunities (user needs) from solutions (things you might build), generate multiple options per opportunity, and test your riskiest assumptions before committing to build.

## Related

- [[product-sense|Product Sense]] — Research is how you develop and validate product intuition
- [[roadmap-prioritization|Roadmap Prioritization]] — Research provides the evidence base for prioritization decisions
- [[feature-launches|Feature Launches]] — Pre-launch research validates assumptions; post-launch research validates outcomes
- [[activation-rate|Activation Rate]] — User research reveals why activation succeeds or fails
- [[product-market-fit|Product-Market Fit]] — The Sean Ellis survey is a specific research tool for measuring PMF

## Sources

- [[teresa-torres|Teresa Torres on continuous product discovery]] — Opportunity solution tree framework, 11,000+ PMs trained, weekly interview cadence, problem space vs. solution space distinction
- [[judd-antin|Judd Antin on the UX research reckoning]] — "User-centered performance" concept, falsification over validation, research at Airbnb and Meta
- [[gia-laudi|Georgiana Laudi on customer-led growth]] — Forget The Funnel, JTBD for SaaS, customer value over business metrics, post-acquisition retention focus
- [[bob-moesta|Bob Moesta on Jobs to Be Done]] — JTBD co-creator, struggling moments as demand signals, context and outcomes over pain and gain, Southern New Hampshire University case study
- [[kevin-yien|Kevin Yien on automating user insights]] — Automated research systems, decision logs, unorthodox PM tactics
