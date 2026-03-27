---
name: "North Star Metric Translation Layer"
description: "Give every team its own metric, then build translation factors that convert each team's metric into the company's single north star — enabling unified planning and resource allocation"
type: framework
domain: metrics
episodes:
  - sri-batchu
source_guests:
  - Sri Batchu
score: 60
---

# North Star Metric Translation Layer

## When to Use

Use this when your growth organization has multiple teams working on different parts of the product and you cannot easily compare their impact or cross-allocate resources. The problem it solves: a checkout optimization team and an app performance team both claim they are "driving growth," but you have no common currency to evaluate whether an extra engineer on checkout or on load times will produce more growth per dollar. Sri Batchu built this system at Instacart (300+ person growth and consumer engineering team) and brought it to Ramp.

## The Framework

### Step 1: Choose One North Star Metric

Pick a single metric that is motivating, intuitive, and that the growth organization can directly influence. Revenue matters most to the company but is too far downstream for growth teams to impact directly.

> "I like having two. One is something around volume and growth and you want that to be, A, very motivating and intuitive for people to understand and also, B, something that the growth teams can directly impact. Revenue is, for better or worse, more important to the company, but also much farther down the line of whether or not the growth team can impact that." — Sri Batchu

At Instacart, the north star was Monthly Active Orderers (MAO) — monthly active users who actually placed an order, not just logged in. At Ramp, the growth team's north star was dollars of SQL (sales qualified lead) pipeline generated.

### Step 2: Give Each Team Its Own Local Metric

Each sub-team owns a metric they can directly influence in their day-to-day sprints. The checkout flow team owns checkout conversion. The app performance team owns load time. The search team owns number of searches per user.

> "You want to actually hold people accountable for things that they can influence." — Sri Batchu

### Step 3: Build Translation Factors

Work with your finance and data teams to create a mathematical translation from each team's local metric into the north star. If the checkout team improves conversion and generates one extra weekly order from the same customer, what is the impact on MAO? Express it as a coefficient.

> "It would be like if you got one extra weekly order because of your checkout flow from the same customer, it would have point X impact on the company's MAO and then you would just roll up all project plans as well as project impact back into this singular MAO metric." — Sri Batchu

Methods for establishing translation factors include regression analysis (correlating local metric movements with north star movements) and long-term holdouts — keeping a small population on last half's experience to measure cumulative impact.

> "We could see what the cumulative impact of monthly active orders on the people that got last half's experience versus this half's experience on the holdout. And that would make it very clear." — Sri Batchu

### Step 4: Use Translations for Planning and Resource Allocation

Teams use their local metrics day-to-day. But for planning cycles, resource allocation conversations, and executive reporting, everything gets expressed in north star units.

> "The team on their day-to-day for their sprints, whatever are looking at their own metric. But for the purpose of planning and resource allocation and reporting, we would use the translation layers to actually just look at everything on a MAO basis." — Sri Batchu

This makes cross-prioritization straightforward: compare MAO-per-engineer or MAO-per-dollar across teams to decide where to invest next.

### Step 5: Accept Imprecision and Update Regularly

The translation factors will never be exact. Set the cultural expectation that these are 70/30 or 80/20 guides, not precision instruments.

> "We wouldn't use the translation factor to make a marginal decision if something is five or 10% off. Those are done based on judgment because at the end of the day, regardless of what metric framework you use, marginal decisions are marginal for a reason." — Sri Batchu

Update all translation factors every six months during the planning cycle, based on new data about how moving each local metric actually impacts the north star.

## Example: Instacart

Instacart's north star was Monthly Active Orderers. The 300+ person growth organization was split into teams each owning a slice of the customer experience:

- **App load time team** — metric: time to interactive
- **Search team** — metric: number of searches per session
- **Checkout team** — metric: cart-to-checkout conversion
- **Ads team** — metric: ad revenue (with a permanent holdout of users who never see ads)

Every team had its local metric, but all project impact was rolled up into MAO using translation factors. Resource allocation decisions became: "Where is there more MAO per dollar or per engineer being built?"

At Ramp, Sri applied the same system. The website team optimized landing page conversion rate, but scored projects on "what does two basis points of conversion mean for dollars of SQL pipeline? A lot or not a lot? And depending on that, it's like, all right, don't waste your time doing that project."

## Output

A functioning translation layer gives you:
- One north star metric the entire growth organization rallies around
- Local metrics for each team that they can directly influence
- Translation coefficients converting each local metric into north star units
- A unified planning framework where all projects are compared in the same currency
- A resource allocation model that answers "where should the next engineer go?"
- A six-month refresh cadence for recalibrating translation factors

## Source

[[sri-batchu|Sri Batchu]] on Lenny's Podcast — "Lessons from scaling Ramp" (June 2023)
