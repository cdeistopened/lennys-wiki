---
name: "Growth Model Spreadsheet"
description: "Build a spreadsheet that mathematically represents how your business grows — acquisition, retention, and monetization linked together — to find the highest-leverage opportunities"
type: framework
domain: growth
episodes:
  - dan-hockenmaier
source_guests:
  - Dan Hockenmaier
score: 125
---

## When to Use

Use this framework when you are planning quarterly or annual resource allocation across product teams, when you want to understand which growth levers actually matter for your business, or when multiple teams are arguing for resources and you have no common currency to compare their expected impact. It is especially useful for marketplace and transactional businesses where the interaction between acquisition, retention, and monetization creates non-obvious leverage points.

Dan Hockenmaier built 20 to 30 of these models at his consulting firm Basis One, then applied the same approach at Thumbtack and Faire. He considers the growth model the single most important analytical artifact a growth team can produce.

## The Framework

### Step 1: Understand What a Growth Model Is (and Is Not)

A growth model is the analytical representation of how your business grows, built in a spreadsheet. It is not a revenue forecast.

> "The analytical representation of how the business grows... typically built in a spreadsheet which has a really nice feature of being very hard to fake. You can talk about a business conceptually, but when you actually have to get it to line up and link in a model, it's very hard to not force yourself to understand how the business works."

Dan is explicit that half the value is the act of building it:

> "I think 50% of the value you get from it is simply building the model. It forces you to understand it and then you get this artifact which you can use to understand how to weigh different opportunities."

### Step 2: Identify the Three Core Building Blocks

Regardless of business type, every growth model starts with three components:

1. **Acquisition channels.** Where traffic comes from — paid marketing, sales, viral referrals. For each channel: traffic volume, spend, conversion rate.
2. **Retention.** At what rate customers activate, and a basic monthly retention curve showing survival rates over time.
3. **Monetization.** Revenue per customer — monthly/annual fees for SaaS, or transaction volume and AOV for transactional businesses.

> "If someone was just starting the spreadsheet for their SaaS business... it's create a row for acquisition channels and traffic you're getting, then a row for roughly your retention rate and then how much you're making per customer."

### Step 3: Layer On Business-Specific Complexity

For **transactional businesses**, add: transactions per month, average order value, and unit economics (COGS and contribution margin).

For **marketplace businesses**, add: supply acquisition and retention, and how both sides interact. But Dan warns that this is where models break:

> "Marketplaces kind of create complexity on both of those because for the first piece you're modeling both sides of the business. There's a lot of assumptions. And second, there's a few pieces which are very hard to understand how they work. So the interaction between supply and demand is a big one."

His recommendation: build one high-level conceptual model of the whole system, then give each product pod its own mini-model for its piece.

### Step 4: Make It Non-Linear

The model gets interesting when you link outputs back to inputs:

> "The most basic example of this would be virality. Your existing customers are referring new customers and those go on to refer new customers... And similarly with paid marketing, as you generate contribution margin, you can reinvest that and grow."

This is where payback period beats LTV-to-CAC:

> "If you link those two up explicitly, it makes it really clear why thinking about something like payback period is a much better measure of paid marketing performance than LTV to CAC because the speed at which you get enough money back to then go acquire another customer has much more bearing on how fast your business can grow."

### Step 5: Partner With an Analyst and Iterate

Do not try to build this alone as a product leader. Find a strong analytical partner:

> "I think the best way to start this is to find a smart analyst or smart finance person often is the right type of person to partner with and just start building it."

Expect multiple quarters of iteration before the model delivers reliable intuition. Templates are less useful than you think:

> "Going back to 50% of the value being figuring it out, that actually negates the value of templates in some way. You kind of want to build it up for yourself from first principles."

### Step 6: Use the Model for Resource Allocation

The growth model becomes a translation layer for planning:

> "Often you want to do a zero based accounting exercise where we say we want to from the ground up decide how those people should spend their time... The most difficult thing about making that kind of effort is developing a common currency by which you can trade off their efforts... The growth model is the function that lets you do that."

Have the analyst run each team's proposed investment through the model to generate comparable output. Now you have a spreadsheet showing relative impact of every initiative in the same currency.

## Example

At Thumbtack (a local services marketplace for hiring electricians, plumbers, and wedding planners), Dan built a growth model with the finance team. The model revealed that the company was dramatically underinvesting in cross-selling:

> "It made it so immediately obvious that we were exceptionally sensitive to the repeat rate of new customers... the rate at which we did that made all the difference because it radically changed the LTV of that customer, which then fed back into how much we could go pay to acquire new customers."

Thumbtack had been pouring resources into top-of-funnel optimization — SEO and conversion rate, with hundreds of experiments. The model showed they needed to shift resources from acquisition to lifecycle and cross-selling. That reallocation "ultimately let us build a much better customer journey."

## Output

After building a growth model spreadsheet, you walk away with:

1. **A linked spreadsheet** — acquisition, retention, and monetization connected with real assumptions, showing how the business actually grows
2. **Sensitivity analysis** — which variables the business is most sensitive to (almost always retention, which is non-obvious)
3. **A common currency for planning** — the ability to compare any team's proposed initiative in terms of impact on the same output metric
4. **Mini-models per pod** — each product team's own model for the inputs they control, laddering up to the master model
5. **Resource allocation confidence** — data-informed decisions about where to deploy product and engineering teams

> Source: episodes/dan-hockenmaier/transcript.md
