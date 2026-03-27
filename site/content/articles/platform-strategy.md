---
type: satellite
title: "Platform Strategy"
domain: strategy
aliases: ["platform play", "platform vs app", "developer platform", "API strategy"]
episodes: [julia-schottenstein, brandon-chu, howie-liu, camille-fournier]
status: draft
---

# Platform Strategy

You are considering whether your product should become a platform -- opening APIs, building an app ecosystem, enabling third-party developers to extend your product's functionality. The allure is obvious: platforms compound value through their ecosystems in ways that standalone applications cannot. But the graveyard of failed platform plays is enormous. Most companies that attempt the transition from application to platform fail, not because the technology is wrong, but because the timing, incentives, or market conditions are not in place.

## When to Become a Platform vs Staying an App

[[julia-schottenstein|Julia Schottenstein]], former Chief Strategy Officer at dbt Labs, captures the platform ambition clearly: "We have an ambition to be a platform company and we know what we're good at, but we also want to leave space for our ecosystem to offer solutions to our users that help them out. And we really want to foster an ecosystem." But the single most common mistake is platforming too early. A platform needs a base of users who generate enough demand to attract developers. Developers need a base of users who will install their extensions. Without that base, you are building a mall with no foot traffic.

**The platform readiness checklist:**

| Signal | What It Means | Example |
|--------|---------------|---------|
| Customers are hacking your product to do things you did not intend | Latent demand for extensibility exists | Salesforce users building custom objects before AppExchange |
| You cannot build features fast enough for diverse use cases | Your roadmap is bottlenecked by the breadth of customer needs | Shopify could not build every possible storefront feature |
| Third parties are building on top of your product without permission | The ecosystem is forming organically | Chrome extensions before Google's official APIs |
| Your core product has strong [[retention\|retention]] and [[product-market-fit\|product-market fit]] | You have the user base to attract developers | Slack's daily active usage before launching the app directory |

If none of these signals are present, stay an app. Build the core product. Achieve [[product-market-fit|product-market fit]]. Grow the user base. The platform opportunity will emerge from customer demand, not from a strategic planning session.

Platforms work only when the core product has already crossed the chasm -- when mainstream users, not just early adopters, depend on the product. Trying to platform an early-stage product splits focus between serving users and serving developers at a stage when you cannot afford to do either poorly.

## API-First vs App-First Approaches

Two paths to platform, with different risk profiles:

| Approach | How It Works | Risk | Example |
|----------|-------------|------|---------|
| **App-first** | Build a successful application, then open it up to developers | Risk of disrupting existing UX with third-party integrations | Slack, Notion, Figma |
| **API-first** | Build the platform/infrastructure layer first, let others build the apps | Risk of no demand if developers do not show up | Twilio, Stripe, AWS |

**App-first** is the more common and lower-risk path for most companies. You prove the use case with your own application, accumulate users, and then selectively open APIs where customer demand is strongest. [[howie-liu|Howie Liu]], CEO of Airtable, describes Airtable's app-first-to-platform evolution: the product started as a flexible database application that individuals used for project management, CRM, and content planning. As usage grew, customers needed integrations with their other tools -- Slack, email, calendars. Rather than building every integration themselves, Airtable opened APIs and later an app marketplace that let developers build on top of the Airtable data layer.

**API-first** works when the value proposition is infrastructure -- when you are selling capability, not experience. Twilio does not have a consumer-facing application. Stripe does not have a storefront. They are pure platforms that enable other companies to build products. This approach requires deep developer empathy and a willingness to operate without consumer-facing metrics (no DAU, no NPS from end users) for a long time.

## The Developer Ecosystem Flywheel

The platform flywheel, when it works, creates a [[competitive-moats|moat]] that is nearly impossible to replicate:

1. **Users attract developers.** Developers build where the users are. Shopify's 1.7 million merchants made the platform worth building for.
2. **Developer apps attract more users.** Each app adds use cases the core product does not serve, broadening the product's appeal.
3. **More users attract more developers.** The cycle compounds.

[[julia-schottenstein|Schottenstein]] emphasizes that the flywheel only spins if developers can build a real business on the platform. As she describes dbt Labs' approach: "We want to lean into our strengths -- we know what we're good at, but we also want to leave space for our ecosystem to offer solutions to our users." This means the platform must provide distribution (an app store, a marketplace), monetization (a way for developers to charge), and stability (APIs that do not break). Platforms that treat developers as unpaid labor -- extracting their effort without providing fair economic return -- see their ecosystems wither.

Shopify is the canonical example of getting this right. The Shopify App Store generates meaningful revenue for thousands of developers. Shopify takes a revenue share but provides distribution to 1.7 million merchants that developers could not reach on their own. The incentive alignment is genuine.

Salesforce followed a similar model with AppExchange. The platform's API stability -- Salesforce famously maintains backward compatibility across API versions for years -- gave developers confidence to invest in building for the platform. An app built on Salesforce in 2015 still works in 2025. That kind of stability is a form of [[competitive-moats|cornered resource]]: the accumulated ecosystem of apps and integrations becomes a switching cost for the entire customer base.

## Platform vs Marketplace: The Distinction

The terms are often confused. They describe different models:

| Dimension | Platform | Marketplace |
|-----------|----------|-------------|
| **Core function** | Enables building on top of it | Facilitates transactions between parties |
| **Third-party role** | Developers building apps/integrations | Sellers providing goods/services |
| **Value creation** | Extends product capability | Matches supply and demand |
| **Revenue model** | API fees, app store revenue share, premium tiers | Take rate on transactions |
| **Example** | Shopify (platform for developers), Salesforce, iOS | Airbnb, Uber, Etsy |

Some products are both. Shopify is a platform (developers build apps) and a marketplace (merchants sell goods). Amazon is a marketplace (third-party sellers) and a platform (AWS). The dual model is powerful but operationally complex.

## Why Most Platform Plays Fail

Common failure modes include:

**1. Platforming before product-market fit.** The most common failure. You need a thriving application with strong retention before you can attract developers. Opening APIs to a product with 500 users is building infrastructure nobody asked for.

**2. Competing with your own ecosystem.** If you build first-party features that directly compete with the apps developers have built on your platform, developers leave. Apple's history of "Sherlocking" -- building features that replicate popular third-party apps -- has chilled developer enthusiasm repeatedly. The tradeoff is real: sometimes the core product needs the feature. But doing it too often destroys ecosystem trust.

**3. Unstable APIs.** Breaking changes in APIs force developers to constantly update their integrations. Each breaking change is a reason for a developer to abandon the platform. Salesforce's decades of backward compatibility versus Twitter's API chaos illustrate the difference in ecosystem outcomes.

**4. Insufficient distribution.** If developers build apps but have no way to reach users, the economic incentive collapses. A platform without an app store or discovery mechanism is asking developers to build in the dark.

**5. Wrong revenue model.** Taking too large a revenue share discourages developers. Apple's 30% take rate has been a persistent source of developer friction. Shopify's lower take rate with better distribution economics has attracted developers more effectively in its domain.

## Platform Risk and Multi-Tenanting

For companies *building on* a platform (rather than building one), platform risk is existential. If your business depends on a single platform's API, you are one policy change away from obsolescence. Zynga's dependence on Facebook's news feed, Twitter API developers losing access overnight, Heroku apps affected by Salesforce strategy shifts -- the pattern repeats.

Any company building on a platform should multi-tenant across at least two platforms where possible. This reduces dependency but increases development cost. The decision matrix:

| Platform dependency level | Strategy | Trade-off |
|--------------------------|----------|-----------|
| Platform provides >70% of distribution | Multi-tenant immediately; diversify distribution | Higher eng cost, broader reach |
| Platform provides 30-70% of distribution | Build platform-native features but maintain an independent channel | Moderate complexity |
| Platform provides <30% of distribution | Focus on core product, treat platform as a channel | Low platform risk |

## Key Takeaway

- Do not platform before you have product-market fit and a user base large enough to attract developers. The most common failure mode is opening APIs to a product nobody uses yet.
- The developer ecosystem flywheel only spins when developers can build a real business on your platform. Provide distribution, monetization, and API stability.
- If you are building on someone else's platform, multi-tenant across at least two to avoid existential dependency. No platform owes you continued access.

## Related

- [[competitive-moats|Competitive Moats]] -- Platform ecosystems as switching costs and cornered resources
- [[marketplace-dynamics|Marketplace Dynamics]] -- Platform vs marketplace distinction and overlap
- [[network-effects|Network Effects]] -- Platform network effects (developers attract users attract developers)
- [[product-market-fit|Product-Market Fit]] -- PMF must precede platforming
- [[go-to-market|Go-to-Market]] -- Platform GTM differs from application GTM

## Sources

- [[julia-schottenstein|Julia Schottenstein on platform strategy at dbt Labs]] -- Ecosystem fostering, leaning into strengths, leaving space for partners
- [[howie-liu|Howie Liu on Airtable's platform evolution]] -- App-first to platform, restructuring the entire org for AI, IC CEO trend
- [[camille-fournier|Camille Fournier on platform engineering]] -- Manager's Path author on building platform teams, API stability, engineer-PM relationships
