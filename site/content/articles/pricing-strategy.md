---
type: satellite
title: "Pricing Strategy"
domain: monetization
aliases: ["pricing", "monetization strategy", "freemium pricing", "SaaS pricing"]
episodes: [madhavan-ramanujam-20, patrick-campbell, elena-verna-20, naomi-ionita, madhavan-ramanujam]
status: draft
---

# Pricing Strategy

You are deciding how much to charge, how to structure your tiers, and whether to offer a free plan at all. Pricing is the decision most product teams get wrong -- not because the math is hard, but because they treat it as a finance exercise instead of a product decision. The price you set signals what your product is, who it is for, and how much value you believe it delivers. Get it wrong and you either leave revenue on the table or choke off adoption before your product has a chance to prove itself.

## How to Run Pricing Research

[[madhavan-ramanujam-20|Madhavan Ramanujam]], author of *Monetizing Innovation* and *Scaling Innovation*, who has worked with over 250 companies including 30 unicorns on pricing strategy, argues that the single biggest pricing mistake is designing the product first and figuring out pricing later. As he puts it: "The winners in AI will need to master monetization from day one. If you're bringing a lot of value to the table and you start at training your customers to expect $20 a month and you anchored yourself on a low price point, you're in trouble." His recommendation: have the pricing conversation before the product is built, during the discovery phase, not after launch.

Two research methods dominate the toolkit:

### Van Westendorp Price Sensitivity Meter

Four questions, asked to target customers about a specific value proposition:

1. At what price would this be **so cheap** you would question its quality?
2. At what price is this a **bargain** -- a great deal for the money?
3. At what price is this **getting expensive** -- you would still consider it, but would have to think?
4. At what price is this **too expensive** -- you would not buy it regardless of quality?

Plot the responses. The intersections reveal an acceptable price range. Van Westendorp works well for new categories where buyers lack reference points. It fails when buyers already have strong anchors from existing products.

### Conjoint Analysis

More rigorous, more expensive to run. Present buyers with multiple product configurations at different prices and ask them to choose. The output reveals willingness-to-pay for individual features, not just the product as a whole. [[madhavan-ramanujam-20|Ramanujam]] recommends conjoint when you are deciding which features belong in which tier -- it directly answers "will customers pay more for feature X?" He also offers a key insight: "20% of what you build drives 80% of the willingness to pay. But the irony is that that 20% is the easiest thing to build often."

| Method | Best For | Sample Size | Cost | Accuracy |
|--------|----------|-------------|------|----------|
| Van Westendorp | New categories, early-stage | 30-50 responses | Low | Directional |
| Conjoint | Tier design, feature packaging | 200+ responses | High | High |
| Direct interviews | Understanding value perception | 10-20 conversations | Low | Qualitative |
| Competitor benchmarking | Established categories | N/A | Low | Anchoring only |

## The Freemium Decision Matrix

[[elena-verna-20|Elena Verna]], who has advised on pricing at Amplitude, Miro, and SurveyMonkey, frames the freemium decision as a growth model question, not a pricing question. In her product-led sales framework, she stresses that "the collaboration is between product and sales, but that means the product has to take on accountability over pipeline." Free is an acquisition channel. The question is whether you need it.

| Model | Best When | Risk | Conversion Benchmark |
|-------|-----------|------|---------------------|
| **Freemium** | Product has strong [[network-effects\|network effects]]; value increases when colleagues adopt; low marginal cost per user | Free users consume resources without converting; devalues the product | 2-5% free-to-paid |
| **Free trial** (time-limited) | Product delivers clear value quickly; time pressure motivates conversion; buyer and user are the same person | Trial too short = users never activate; too long = no urgency | 15-25% trial-to-paid |
| **Reverse trial** | Want to show full value before restricting; complex product that needs time to evaluate | Users feel loss aversion when downgraded; support burden during trial | 8-15% trial-to-paid |
| **Paid only** | Enterprise buyer; complex deployment; ACV > $25K; value requires configuration | Longer sales cycles; no self-serve adoption loop | N/A (sales-driven) |

[[elena-verna-20|Verna's]] rule of thumb: if your product has a [[product-led-growth|PLG]] motion and individual users can get value on their own, freemium or free trial makes sense. If value only emerges at the team or org level and requires configuration, paid-only with a sales motion is likely the better path.

## Usage-Based vs Seat-Based Pricing

This is the pricing architecture decision that defines your revenue model's behavior as customers grow.

| Dimension | Seat-Based | Usage-Based | Hybrid |
|-----------|-----------|-------------|--------|
| **Revenue predictability** | High (known seat count) | Lower (variable consumption) | Moderate |
| **Expansion revenue** | Grows when teams grow | Grows when usage grows | Both vectors |
| **Adoption friction** | Buyer must commit to seat count upfront | Low entry point, pay as you go | Depends on design |
| **Shelfware risk** | High (unused seats still paid for) | Low (no usage = no cost) | Moderate |
| **Best for** | Collaboration tools (Slack, Figma) | Infrastructure, API, data tools (Snowflake, Twilio) | Platform tools (Datadog) |

[[patrick-campbell|Patrick Campbell]], founder of ProfitWell (bootstrapped and sold for over $200 million), studied pricing across 18,000+ SaaS companies and found that usage-based pricing correlates with higher net revenue retention -- often 120-140% NRR compared to 105-115% for pure seat-based models. The reason: usage-based pricing automatically captures expansion revenue as customers derive more value. Seat-based pricing only expands when headcount grows, which is a less frequent event.

However, usage-based pricing introduces budget unpredictability for buyers. Enterprise procurement teams strongly prefer knowing what they will spend. The trend across B2B SaaS is toward hybrid models: a base seat price plus usage overages for compute, storage, or API calls.

## When to Raise Prices

[[naomi-ionita|Naomi Ionita]], partner at Menlo Ventures and one of the earliest growth leaders (previously at Evernote and Reforge), reinforces the urgency: "Do not set it and forget it. I see companies do this, where they labor over designs and features and they build this perfect product that's delightful to use. And then pricing's sort of plucked out of thin air, and then they don't revisit it." She recommends treating pricing with the same cadence as your roadmap: every 6 to 12 months.

[[madhavan-ramanujam-20|Ramanujam]] identifies three signals that you are underpriced:

1. **Win rate is above 70%.** If you are winning almost every deal, your price is not testing the ceiling of willingness-to-pay.
2. **No one pushes back.** Price objections are healthy -- they mean you are in the zone. If no prospect ever pushes back, you are leaving money on the table.
3. **Usage growth outpaces revenue growth.** Customers are getting more value over time but paying the same amount. Your pricing does not capture the expanding value.

The mechanical advice: raise prices for new customers first, grandfather existing customers for 6-12 months, then migrate them at renewal. Communicate the price increase by anchoring it to new value delivered since the original pricing was set. Never apologize for a price increase -- explain the additional value.

[[patrick-campbell|Campbell]] frames pricing as one of three growth levers: "You have three growth levers. You have acquiring customers, monetizing them, and retaining them. You're spending a lot of time and money on acquisition." His data shows that companies that revisit pricing at least once per year grow 2-4x faster than those that set pricing at launch and never touch it. Most SaaS companies dramatically under-invest in pricing iteration relative to its revenue impact.

## The Psychology of Pricing Tiers

Three tiers is the default for a reason: it exploits the compromise effect. Most buyers avoid the cheapest (perceived low quality) and the most expensive (perceived overkill) and select the middle tier. Structure your tiers so that the middle tier is the one you want most buyers to choose.

**Tier design principles from [[madhavan-ramanujam-20|Ramanujam]]:**

[[madhavan-ramanujam-20|Ramanujam]] frames the ideal pricing model through a two-by-two: "If you think about market share and wallet share -- the quadrant that you really want to be in is the outcome-based pricing model, the top-right quadrant where you have great autonomy and great attribution. About 5% of companies are probably in a true outcome-based pricing model."

- **Each tier should target a distinct buyer persona**, not just offer "more of the same." Starter for individuals, Pro for teams, Enterprise for organizations.
- **The gap between tiers should justify the price jump.** If Pro is 3x the price of Starter, the value difference must feel like 3x or more.
- **Include at least one feature in each higher tier that the lower-tier persona genuinely does not need.** SSO and audit logs in Enterprise are not upsells for individuals -- they are genuine enterprise requirements. This prevents resentment from lower-tier users who feel locked out of features they need.
- **Name tiers by persona, not by size.** "Team" and "Business" communicate who the tier is for. "Gold" and "Platinum" communicate nothing.

## PLG Pricing Considerations

For [[product-led-growth|product-led growth]] companies, pricing architecture directly affects the growth loop. The free tier is not charity -- it is the top of the funnel.

[[elena-verna-20|Verna]] recommends designing free tiers around a usage limit that lets users experience the core value proposition but naturally hit a ceiling as their usage matures. Notion limits the number of blocks for free users. Figma limits the number of projects. Slack limits message history. The limit should correlate with engagement depth, not time. Users who hit the limit are the ones who have activated and retained -- they are the highest-quality conversion candidates.

The anti-pattern is gating core value behind the paywall. If free users cannot experience the product's primary benefit, they have no reason to convert. They simply leave.

## Key Takeaway

- Run pricing research (Van Westendorp or conjoint) before building, not after launch. Pricing is a product decision, not a post-launch finance exercise.
- Choose freemium when your product has network effects and low marginal cost per user. Choose free trial when value is clear quickly and time pressure motivates conversion.
- Revisit pricing at least annually. Companies that iterate on pricing grow 2-4x faster than those that set it once and forget it.

## Related

- [[product-led-growth|Product-Led Growth]] -- PLG pricing as the growth model's fuel
- [[competitive-moats|Competitive Moats]] -- Switching costs through pricing lock-in
- [[activation-rate|Activation Rate]] -- Free tier design depends on the activation event
- [[go-to-market|Go-to-Market]] -- Pricing as a component of GTM motion
- [[marketplace-dynamics|Marketplace Dynamics]] -- Take rate as marketplace pricing

## Sources

- [[madhavan-ramanujam-20|Madhavan Ramanujam on pricing AI products]] -- Outcome-based pricing, anchoring risks, the 20/80 rule of willingness-to-pay
- [[madhavan-ramanujam|Madhavan Ramanujam on monetizing innovation]] -- Pricing research methods, tier design, Van Westendorp and conjoint analysis
- [[patrick-campbell|Patrick Campbell on bootstrapping ProfitWell]] -- Three growth levers, pricing iteration cadence, tempo as a competitive weapon
- [[elena-verna-20|Elena Verna on product-led sales]] -- Product accountability over pipeline, freemium conversion mechanics, Slack and SurveyMonkey pricing examples
- [[naomi-ionita|Naomi Ionita on how to price your product]] -- Do not set it and forget it, pricing as roadmap cadence, persona-based tiers
