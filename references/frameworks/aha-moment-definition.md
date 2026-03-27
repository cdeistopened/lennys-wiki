---
name: "Aha Moment Definition Process"
description: "Find the specific user action that predicts long-term retention, then design the product to get more users there faster"
type: framework
domain: growth
episodes:
  - hila-qu
source_guests:
  - Hila Qu
  - Sean Ellis
score: 80
---

## When to Use

Use this framework when you are launching or optimizing a PLG motion and need to define what "activated" means for your product, when your activation rate is unclear or unmeasured, or when you suspect users are signing up but not reaching the moment where they understand your product's value. The aha moment concept was popularized by Facebook's "10 friends in 7 days" metric, but Hila Qu refined it into a repeatable process she applied at GitLab and across her advisory work. This is foundational work — without a defined aha moment, your growth team is optimizing blindly.

## The Framework

### Step 1: Understand What an Aha Moment Actually Is

The aha moment is the first time a user experiences the core value of your product. It is not a feature tour completion or an onboarding checklist — it is the moment the user thinks "I get why this exists."

> "I think it as a moment, as a first time a user experienced value of your product. So it gets popular because Facebook has this example from the early growth days. I think you added 10 friends in seven days, you hit your aha moment."

For SaaS and B2B products, value typically means one of a few things:

> "The value of such product is usually either you see a workflow can be supported by this, it can save your time, it can save your money, it can help you make more money, or it just solve this pain point that you never get to solve on your own without a software product."

### Step 2: Brainstorm High-Value Actions

Gather your growth team and list every action or behavior that you believe indicates a user is getting value. These are your candidates. Be specific — not "used the product" but "merged a PR," "ran a pipeline," "invited a teammate," "created a workflow."

> "Our growth team, actually we did some brainstorming. We think about what are the potential action or behavior that indicate they're getting value. We ideally want to do something like they maybe successfully merge their first PR or they successfully run their first pipeline."

### Step 3: Run Correlation Analysis

Take your list of 10 or so high-value actions and run two analyses for each: if a new user completes this action, what happens to their 90-day conversion rate, and what happens to their 30-day retention rate?

> "If you did this action, let's say if, Lenny, you are trying our product, you are able to successfully merge the PR in your first 30 days. Does that improve your likelihood to convert? Does that improve your likelihood to retain? And we compare across those 10 high value actions, compare with the average."

Look at both conversion and retention together. Optimizing for one alone gives an incomplete picture.

### Step 4: Select Your Aha Moment Metric

Some products have one clear standout action. Others — particularly platforms with multiple workflows — may need a composite metric.

GitLab landed on: **two users, two features, 14 days.**

> "Two users is talking about the team components. Whatever the first user is trying and using that is so valuable, he or she is confident to invite another coworker to come in. That itself is very, very valuable action and indicates this first user is seeing value. And if together they use two or more features, that means we are seeing the collaboration, the platform components of the product."

The time window matters too:

> "Within the first 14 days, because it has to be reasonably quick but not unrealistic, because we are a complicated product, we're not Facebook, we're not Zynga or a game app, it's hard for you to figure it out in the first day."

### Step 5: Validate With Experiments

Correlation is not causation. The data analysis only tells you that users who do X tend to retain. It does not prove that pushing more users to do X will cause them to retain. You must test this.

> "You need to launch some experiments to try to get more people to do those high value actions. And you then see, do I see higher conversion? Do I see higher retention? Because in data you are only isolating correlation. You are not proving causation."

### Step 6: Design the Product to Get Users There

Once validated, design the early user experience to guide users toward the aha moment as quickly as possible. Hila's hierarchy for onboarding design:

> "Do is better than show is better than tell, meaning you want to remove all the frictions and somehow give them a warm start, give them some sample template, give them some sample thing they can play with initially."

Supplement with email when users stall:

> "Sometimes the email magically can help a lot. If I'm frustrated the first time... I'm like, I will give up. And then in the night I saw an email, I'm like, oh, maybe I just click the CTA and give it one more try. And that time actually I figured out I get to the aha moment."

## Example

At GitLab, the team started by listing candidate high-value actions: merging a PR, running a CI/CD pipeline, completing a security scan, inviting a teammate. They ran correlation analysis against 90-day conversion and 30-day retention for each action. No single action dominated because GitLab is a platform — teams adopt it for security, CI/CD, code review, or all three.

They settled on a composite: two users using two features within 14 days. This captured both the team collaboration element (the first user was confident enough to invite someone) and the platform element (they explored beyond a single feature). The team then designed onboarding experiments to get more new accounts to hit this threshold, validating that the correlation was indeed causal.

## Output

After applying this process, you walk away with:

1. **A defined aha moment metric** — a specific, measurable action (or composite of actions) within a specific time window that predicts long-term retention and conversion
2. **Correlation data** — a table showing how each candidate action lifts conversion rate and retention rate compared to the baseline
3. **Experimental validation** — A/B test results confirming that pushing more users to the aha moment actually causes higher retention (not just correlation)
4. **An onboarding redesign brief** — specific product changes to get more users to the aha moment faster, prioritized by "do > show > tell"
5. **A north star for the activation team** — a single metric the team owns and optimizes against quarter over quarter

> Source: episodes/hila-qu/transcript.md
