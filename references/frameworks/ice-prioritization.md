---
name: "ICE Scoring Framework"
description: "Prioritize growth experiments by scoring Impact, Confidence, and Ease on a 1-10 scale — the simplest framework that actually works"
type: framework
domain: metrics
episodes:
  - sean-ellis
source_guests:
  - Sean Ellis
score: 8
---

## When to Use

Use this framework when you need to prioritize a backlog of experiment ideas across a cross-functional growth team. It is designed for high-velocity testing environments where ideas come from across the company — engineering, marketing, support, sales — and you need a shared, transparent system for deciding what to test next. Sean Ellis, who coined the term "growth hacking" and invented the ICE framework, built it specifically to solve the political problem of idea selection: if people submit ideas and never understand why they were not chosen, they stop contributing.

## The Framework

ICE scores each idea on three dimensions, each rated 1-10. Multiply them together (or average them) to produce a single prioritization score.

### Dimension 1: Impact

Best-case scenario, how much could this idea move the needle? Impact is not a prediction — it is an optimistic estimate of the upside if the experiment works.

> "The I in ICE is impact and it's essentially saying best case scenario, how much impact could we get from this?"

Ellis considers reach to be a component of impact, which is why he views the RICE variant (which adds Reach as a separate factor) as unnecessary:

> "Reach is a super important part of impact. And so I think it's already factored in the I in ICE."

Score a 10 for an idea that could transform a key metric. Score a 1-2 for a micro-optimization that might move the needle fractionally.

### Dimension 2: Confidence

How sure are you that this idea will actually produce the impact you estimated? This is where evidence quality matters. A gut feeling is low confidence. A replicated finding from user research is higher. An A/B test on a similar feature at a previous company is higher still.

For a more rigorous approach to scoring confidence, pair ICE with the Confidence Meter framework from Itamar Gilad, which maps specific evidence types to calibrated confidence scores from 0.01 to 10.

### Dimension 3: Ease

How quickly and cheaply can you run this experiment? A one-day copy change is high ease. A three-month infrastructure project is low ease. The point is to bias toward experiments you can run fast, learn from, and iterate.

### Why Simplicity Matters

Ellis designed ICE to be deliberately simple. He acknowledges the criticism:

> "If there's anything that I would be accused of, it would be being over simplifying things and I'm not saying them, but there's a lot of people who approach things with, there's got to be a more complex way to approach this and that's just not me."

The simplicity serves a specific purpose: cross-functional participation. When ideas come from every function, the scoring system must be legible to everyone — not just PMs.

> "In order to be able to effectively run a high velocity testing program, you need to be able to source ideas from across the company. And that's why I came up with ICE, that if you're having people submit ideas and you can't tell them why their idea was not chosen, they're just going to get upset and you're going to waste a lot of time. But if you have a systematic way of being able to compare ideas, it's more likely that people will be able to get it and they'll be able to come up with better ideas."

### ICE vs. RICE

Intercom later adapted ICE into RICE by adding Reach as a separate dimension (Reach x Impact x Confidence / Effort). Ellis's view:

> "I think it's an unnecessary addition, but maybe I'm just being protective of my original idea."

Lenny Rachitsky notes that the more detailed RICE approach has value when you spend 30 minutes per idea doing serious estimation — particularly for avoiding commitments to ideas that are unlikely to work. Both frameworks are valid. ICE is faster; RICE is more thorough.

### The Future of Prioritization

Ellis sees AI changing how teams score ideas:

> "Over time, I think AI is going to actually change our ability to model out potential outcomes on experiments and start to, whether it's a more informed way of doing ICE or replaces ICE, that ultimately probability of outcomes is something that AI will be pretty good at."

## Example

Ellis built high-velocity testing programs at Dropbox, LogMeIn, and Eventbrite. At LogMeIn, the team used ICE to prioritize experiments across the entire acquisition funnel. The key insight was that no single big win drove growth — it was a combination of many small gains prioritized and executed quickly:

> "It was a combination of just trying a bunch of different stuff that ultimately led to, I wouldn't say there was one big gain, it was a bunch of small gains."

At Dropbox, ICE helped the team decide where to focus. They tested paid search but found insufficient demand for "cloud storage" or "backup" as search terms. ICE scored those experiments low on impact. Instead, they scored the user-get-user referral loop high on impact and ease, which led to the famous Dropbox referral program:

> "We tried a little bit with search to see can we make it work on cloud storage or backup... there was just not that much demand there. And so it just made more sense to focus on the user get user loops at Dropbox."

Ellis emphasizes that the referral program was an accelerant, not a creator: "Before the referral program, Dropbox had amazing referral rate. Companies that are trying to copy it are like, 'Why isn't anyone talking about a product? Let's add a referral program with incentives.' To me, I think it's a great accelerant when it's already working, but it can't fix it if people don't want to talk about your product."

## Output

After applying ICE scoring, you walk away with:

1. **A ranked backlog of experiments** sorted by ICE score, ready for the next sprint
2. **Transparency for idea contributors** — everyone can see why their idea ranked where it did
3. **A bias toward speed** — the Ease dimension pushes teams toward fast, cheap experiments first
4. **A shared language** across functions — marketing, engineering, and product can all score and compare ideas
5. **An evolving idea bank** — as you run experiments and gather data, confidence scores update and re-prioritize the backlog
6. **A velocity metric** — track how many experiments you run per week or month as a health check on your growth program

Ellis frames the meta-principle behind ICE the same way he frames everything: ask the right question. "Every time I'm going through exercises in my workshops, it almost always comes down to people who aren't able to come up with the right or a good answer in a business. It's because they're not asking the obvious question."

> Source: episodes/sean-ellis/transcript.md
