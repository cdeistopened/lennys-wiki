---
name: "PLG Funnel Audit"
description: "Walk through your product as a new user to find the biggest leverage point across acquisition, activation, conversion, and retention"
type: framework
domain: growth
episodes:
  - hila-qu
source_guests:
  - Hila Qu
score: 8
---

## When to Use

Use this framework when you are adding a product-led growth motion to an existing product (typically a B2B SaaS moving from pure sales-led), or when you already have a PLG funnel but growth is stalling and you need to find where the biggest opportunity lives. It is the first thing Hila Qu does with her advisory clients — a structured walk-through of the entire user journey that consistently surfaces low-hanging fruit.

## The Framework

Hila Qu, Executive in Residence at Reforge and former head of growth at GitLab and Acorns, describes PLG as fundamentally similar to B2C e-commerce: you need to make it easy for a B2B buyer to find, try, and purchase your product without talking to a human. The audit is how you find where that chain breaks.

### Prerequisites: The Five Foundations

Before auditing the funnel, confirm you have the five foundational components of a PLG motion:

1. **A free vehicle** — free trial, freemium tier, open-source version, or at minimum a realistic interactive demo
2. **Time to value** — a path for users to experience core value quickly, ideally with sample data or templates
3. **Self-serve checkout** — the ability to purchase without contacting sales
4. **A data foundation** — product usage analytics connected to your CRM and marketing stack
5. **Simple pricing** — pricing that users can understand and act on without requesting a quote

> "Just imagine you are building, selling something on e-commerce side. You need all of this, right. Just in order for the B2B buyer to buy your software in PLG motion, you need to make all those available to him."

As Hila explains the data foundation specifically: "Fundamentally PLG is data led growth. When you give away your free product, what you want to get in exchange are two things. One is a broader reach because free product spread itself is lower barrier to entry. Two, you want to understand the usage behavior of those free users. If you don't have a foundation of data and understanding of how to analyze those data, you are giving away a free product for nothing."

### The Audit: Walk the Journey as a New User

Hila describes the audit process:

> "We do a full funnel audit. Think about, we go through me as a kind of end user, go through the entire journey, pretend I am interested, semi interested, and I want to buy from the website."

Walk through each stage and note where you get stuck:

**Stage 1 — Landing Page**: Does the website attract you? Is the value proposition clear?

**Stage 2 — Sign-Up**: Is the free sign-up smooth? How many fields, how many steps?

**Stage 3 — Activation / Aha Moment**: When you land in the product for the first time, do you know what to do? Do you reach an aha moment quickly — or do you get confused and abandon?

**Stage 4 — Checkout**: If you want to buy, can you find where to buy? Is the checkout form clean, localized, and free of unnecessary fields?

**Stage 5 — Email Sequence**: Check the first few lifecycle emails. Do they guide you back to the product at the right moments?

> "When I do this audit, there are so many low hanging fruits usually in this process. For example, one client, when I go to the checkout flow, the checkout form is so confusing. They ask a bunch of questions that only UK customers need. Every other place they don't need to answer, but they ask the question anyway."

Then pair your qualitative walk-through with quantitative data: how many users reach each stage? Where is the biggest drop-off?

> "When I map this out, I ask the company to give me the data at very high level for each of the step. How many people are on your website? How many people go through signup? How many people hit this aha moment? How many people started self-checkout and being successful. Between my experience from a user perspective and the data, we usually immediately begin to see the biggest opportunity."

### Choose Your Starting Point: Four Buckets

After the audit, prioritize one of four areas:

**1. Activation (Start Here by Default)**

Activation is the most common and highest-leverage starting point for B2B products. It means getting users to experience core value faster.

> "Activation is actually a common good starting place for most B2B software. Because usually B2B softwares are not designed to really get you to use quickly, historically."

First, define your aha moment metric. Hila explains the process at GitLab:

> "We did a correlation analysis to understand, hey, those are the 10 high value actions we believe we want to look at. If a new user did this action, what's the 90 day conversion rate? What's the 30 day retention rate?"

GitLab's aha moment: two users using two features in 14 days. The "two users" component captured the collaboration value — if the first user was confident enough to invite a coworker, that itself signaled real value.

Hila's design principle for activation: "Do is better than show is better than tell." Give users sample templates, sample data, or pre-configured workflows so they can experience value immediately rather than reading about it.

Miro is the gold standard: "If you go through their activation experience, they ask very limited questions, very targeted. They drop you, they ask you about your use case. And they quickly gave you templates to get started. In maybe five minutes, you finish the entire journey from go to the website and sign up, answer a few questions, and you are already using the template they provided."

**2. Conversion (Self-Serve Checkout)**

If activation is solid but revenue is low, audit the checkout flow. The bar: it should be as easy as buying from Amazon or Lululemon.

> "Go to any e-commerce website, go to Lululemon, go to Amazon, make your conversion process as easy as theirs. That should be your goal."

Watch for broken localization (payment methods that do not work in key markets), confusing pricing, and unnecessary form fields.

**3. PQL/PQA Motion (Product-Led Sales)**

If you have enough users and usage data, build a product-qualified lead pipeline. Combine product usage signals with customer firmographic data to identify high-value accounts for sales outreach.

> "If you also want to have sales blended into this, how do you set up the structure, the foundation so that you can know what are some data signal to tell you those are better leads?"

This is a bigger investment than activation or conversion fixes and should come after those fundamentals are in place.

**4. Product-Led Acquisition**

If your product has inherent collaboration or sharing mechanics (like Figma, Airtable, or Calendly), build viral loops into the core workflow.

> "If your product is a collaboration software, as part of my workflow, I invite my team to join. If you have that use case, you can build that into a product. That's very powerful."

### The Data Stack

Hila recommends three categories of infrastructure:

1. **Data collection + analytics**: Segment (or equivalent data hub) plus a product analytics tool (Amplitude, Mixpanel, PostHog)
2. **Experimentation**: Optimizely, Eppo, or Amplitude's experimentation module
3. **Lifecycle marketing**: A behavioral tool that triggers messages based on product usage (not just lead scoring from marketing campaigns)

> "You need to connect with Segment, Amplitude. You know what customers are doing in your product, you design your email, your in-app, your push notification, based on their behavior, at the right moment, to the right person."

## Example

At GitLab, the PLG funnel worked like this: a developer would sign up for a free account for a personal project. Later, their employer would evaluate developer platforms, and that engineer would raise their hand: "I've been using GitLab for a long time and I really like it." The team would then start a free trial, use their 30 days to run a proof of concept, and either self-serve purchase (small teams) or trigger a sales conversation (large enterprises).

At Acorns (Hila's previous role), the biggest retention lever turned out to be activation — specifically, getting users to set up recurring investment. Though the product's philosophy was "set and forget," users who activated this one feature retained at dramatically higher rates. Hila then layered on higher-frequency use cases (IRA accounts, spending debit card) that came with naturally higher engagement.

> "When I was asked to work on retention, I did a bunch of analysis. The biggest leverage for me is actually activation. I identified what are the features for users to take and experience value quickly so that they are more likely to retain."

## Output

After applying this framework, you walk away with:

1. **A full-funnel map** — every step from landing page to purchase, with drop-off rates at each stage
2. **A prioritized starting point** — typically activation for B2B, with a clear rationale for why
3. **An aha moment metric** — a data-validated milestone that predicts conversion and retention
4. **A list of low-hanging fruit** — broken checkout forms, missing payment methods, confusing onboarding flows
5. **A data infrastructure plan** — the tools needed to measure, experiment, and trigger lifecycle messages based on product usage

> Source: episodes/hila-qu/transcript.md
