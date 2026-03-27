---
type: satellite
title: "Go-to-Market"
domain: strategy
aliases: ["GTM", "go to market strategy", "GTM motion", "launch strategy"]
episodes: [jeanne-grosser, april-dunford, claire-butler, emily-kramer, arielle-jackson, elena-verna-20]
status: draft
---

# Go-to-Market

You are deciding how to bring your product to market -- or you have a product in market and the current motion is not working. Go-to-market is one of the most misunderstood concepts in product building because teams treat it as a marketing activity when it is fundamentally a product decision. [[jeanne-grosser|Jeanne DeWitt Grosser]], who built Stripe's early sales organization and is now COO at Vercel, defines GTM broadly: "Any function that is going to touch a customer or make a dollar -- that includes marketing, sales, all of your technical sales roles, customer success, support, partnerships." The GTM motion you choose shapes your org structure, your hiring plan, your pricing, and your product roadmap. It is not something the marketing team figures out after engineering ships the product. It is a strategic choice that should be made alongside the product itself.

[[jeanne-grosser|Grosser]] highlights why this matters even more in the AI era: "With AI, it's just intensified because you have 10 players pursuing the same market opportunity and so your ability to actually bring the product to market to differentiate yourself from the competition has become more strategically important than it was previously."

## Positioning Before GTM

[[april-dunford|April Dunford]], author of *Obviously Awesome* and *Sales Pitch*, argues that most GTM failures are actually positioning failures. As she explains: "40 to 60% of B2B purchase processes end in no decision. If you scratch on that data, the majority of those aren't saying, 'I'm not making a decision to buy something new because the old thing we were doing is better.' The majority of those is they couldn't figure out how to make a choice confidently." Teams rush to launch, distribution, and demand generation before they have answered the foundational question: what is this product, who is it for, and why should they care?

Dunford's positioning framework consists of five components, answered in sequence:

1. **Competitive alternatives.** What would the customer do if your product did not exist? Not just direct competitors -- also spreadsheets, manual processes, hiring an intern, or doing nothing.
2. **Unique attributes.** What do you have that the alternatives do not? Features, capabilities, integrations, data.
3. **Value.** What do those unique attributes translate into for the customer? Not features -- outcomes.
4. **Target customer.** Who cares most about that value? Which segment would be most disappointed if your product disappeared?
5. **Market category.** What is the frame of reference that makes your value obvious? Are you a CRM, a data warehouse, a collaboration tool?

The sequence matters. Most teams start with the market category ("We are a project management tool") and work backward. Dunford argues you should start with competitive alternatives and work forward. The category should be the *output* of positioning, not the input.

### The Sales Pitch Framework

[[april-dunford|Dunford]] extends positioning into a sales pitch structure that several podcast guests have adopted. As she describes the architecture: "The pitch structure has two big pieces. The first is the setup. The setup piece is not about us, it's about the market, our point of view on the market. The second bit is all about our differentiated value -- why pick us over the other guys?"

| Step | Purpose | Example (Figma) |
|------|---------|-----------------|
| **Insight** | Share a perspective on the market the buyer has not considered | "Design tools were built for individual designers, but design is increasingly a team sport" |
| **Alternatives** | Acknowledge what the buyer is doing today | "You are probably using Sketch or Adobe XD with workarounds for collaboration" |
| **Perfect world** | Describe what ideal looks like | "What if design were as collaborative as Google Docs -- real-time, multiplayer, browser-native?" |
| **Value** | Map your capabilities to the perfect world | "Figma lets your entire team design, prototype, and hand off in one browser-based tool" |
| **Proof** | Evidence that it works | "Teams at Airbnb, Dropbox, and Microsoft have consolidated their design workflows into Figma" |

## Category Creation vs Category Entry

One of the most consequential GTM decisions: do you enter an existing category or attempt to create a new one?

[[april-dunford|Dunford]] is direct on this point: category creation is almost always the wrong choice for startups. Creating a category requires educating the market on a problem they do not yet know they have, which is expensive and slow. Entering an existing category means the buyer already has budget allocated and a mental model for your product type.

| Dimension | Category Entry | Category Creation |
|-----------|---------------|-------------------|
| **Buyer education** | Low -- they know the problem | High -- you must teach the problem first |
| **Sales cycle** | Shorter -- fits existing budget line | Longer -- requires new budget approval |
| **Competition** | Direct comparisons, feature battles | No direct comps, but also no category awareness |
| **When it works** | You have a clear differentiator in an established space | You have invented a fundamentally new capability with no existing frame |
| **Example** | Notion entering "productivity/project management" | Gong creating "revenue intelligence" |

[[arielle-jackson|Arielle Jackson]], who led marketing at Square and early Google products (including growing Gmail from a side project to hundreds of millions of users), adds that even category creators eventually need to anchor to a known concept. Jackson insists that positioning must come before everything else: "I had a student in my last class who was a second or third time founder who had never taken a class on brand strategy. At the end of the class he goes, 'I'll never write a line of code without doing positioning first.'" Salesforce did not just say "cloud computing" -- they said "CRM, but in the cloud." The new category was anchored to the old one. The framing was: you know what CRM is; this is the next version of it.

[[jeanne-grosser|Grosser]] reinforces the bias toward pain-driven GTM messaging: "80% of customers buy to avoid pain or reduce risk as opposed to increased upside. We all love to talk about the art of the possible, everything we're going to enable in the future, but that's often really a sale that's going to resonate with another founder. For everybody else, particularly enterprises, you're avoiding the risk of not making your revenue target next quarter." This insight applies directly to category creation: if you are creating a new category, you are asking buyers to accept the risk of a new mental model. Most enterprises will not do that willingly.

The rare exceptions where category creation works share common traits: the company has significant capital, the CEO is a charismatic evangelist willing to spend years on the speaking circuit, and the product delivers such dramatically different results that early customers become vocal advocates without prompting.

## GTM for PLG vs Enterprise

The GTM motion is not chosen in isolation -- it emerges from the intersection of product, buyer, and price point.

| Dimension | PLG GTM | Enterprise GTM | Hybrid |
|-----------|---------|----------------|--------|
| **Primary acquisition** | Self-serve sign-up, [[word-of-mouth\|word of mouth]] | Outbound sales, events, analyst relations | Self-serve + sales-assisted |
| **Buyer** | End user (individual or team lead) | Economic buyer (VP, C-suite, procurement) | User adopts, buyer purchases |
| **Sales cycle** | Minutes to days | Weeks to months | Varies by deal size |
| **Pricing** | Transparent, published | Custom, negotiated | Published tiers + enterprise custom |
| **Content strategy** | Product-led (templates, tutorials, community) | Thought leadership, case studies, ROI calculators | Both |
| **Example** | Notion, Calendly, Loom | Palantir, Workday | Slack, Datadog, Figma |

[[claire-butler|Claire Butler]], Figma's first GTM hire (employee number 10), describes the kind of high-stakes positioning decisions that define early-stage GTM. On her first day, she discovered the product was going to be named "Summit" -- a separate brand from Figma. "I had an immediate reaction of like, 'We cannot make this thing Summit. We can't have two brands. Summit's not ownable, we can't build equity in multiple things.'" She made the presentation the next day, and Dylan Field killed the name. That speed of positioning decisions -- anchoring the entire company behind one brand -- set the foundation for Figma's bottom-up GTM motion.

[[elena-verna-20|Elena Verna]] frames the PLG-to-enterprise journey as a layering exercise, not a pivot. As she explains: "In product-led sales, product acquires and activates a customer and product creates pipeline for sales. The collaboration is between product and sales, but that means the product has to take on accountability over pipeline. The worst thing that you can do is to say, 'I'm going to do product-led sales and I'm going to do it in marketing.' Recipe for disaster." The PLG engine continues running for individuals and small teams while an enterprise sales motion is layered on top for larger accounts. The mistake companies make is shutting down the self-serve engine when they add enterprise sales, losing the organic adoption that feeds the pipeline.

## Emily Kramer's Fuel vs Engine Framework

[[emily-kramer|Emily Kramer]], co-founder of MKT1 and former VP Marketing at Asana and Carta, introduces a framework that clarifies why many GTM efforts stall despite heavy investment. As she puts it: "Forget the product marketing content partner, demand and growth, forget all of it, and just think of marketing as you need a fuel and you need an engine."

**Fuel** is the content, positioning, messaging, and brand -- the material that makes people aware of and interested in your product. It is what you say and how you say it.

**Engine** is the distribution and operational infrastructure -- the channels, processes, and systems that get the fuel to the right people at the right time. It is how the message reaches the audience.

| Component | Fuel | Engine |
|-----------|------|--------|
| **What it includes** | Positioning, messaging, content, brand, narrative | Channels, ops, SDR team, paid media, partnerships |
| **Failure mode** | Great engine, bad fuel -- you are distributing a message nobody cares about | Great fuel, bad engine -- compelling story that nobody hears |
| **Who owns it** | Brand marketing, product marketing, content | Growth marketing, demand gen, sales ops |
| **When to invest** | When conversion rates are low despite good traffic | When awareness and interest are low despite strong product |

Kramer's insight is that most GTM failures come from investing in the wrong component. A startup with strong word-of-mouth but low conversion needs better fuel (clearer positioning, sharper messaging). A startup with a compelling product that nobody knows about needs a better engine (more distribution channels, better demand gen). Diagnosing which side is broken before investing prevents wasted cycles.

## Launch GTM vs Ongoing GTM

[[arielle-jackson|Jackson]] draws a distinction that many teams miss: launch GTM and ongoing GTM are different disciplines with different objectives.

| Dimension | Launch GTM | Ongoing GTM |
|-----------|-----------|-------------|
| **Objective** | Awareness, initial adoption, signal testing | Sustained growth, retention, expansion |
| **Duration** | 2-4 weeks around launch | Continuous |
| **Tactics** | Press, Product Hunt, launch events, early access | Content, SEO, community, sales pipeline |
| **Metrics** | Sign-ups, coverage, waitlist conversions | [[retention\|Retention]], [[activation-rate\|activation rate]], revenue growth |
| **Risk** | Over-investing in a one-time spike that does not convert to retained users | Under-investing in sustained distribution after launch energy fades |

The most common mistake is treating launch as the entire GTM effort. A successful launch generates a spike that decays unless the ongoing GTM engine is already running. The best product teams plan their ongoing GTM motion first and treat the launch as an accelerant, not the strategy itself.

## GTM as a Product Decision

This is the meta-point that connects all the above: GTM is not something the marketing team figures out. It is a product decision that shapes what you build and how you build it. [[jeanne-grosser|Grosser]] describes the litmus test she uses at Vercel: "If you are an account executive in my org and I put you in front of 10 engineers at our company, it should take them 10 minutes to figure out you aren't a product manager." When GTM and product are that tightly aligned, the sales motion feels like a natural extension of the product itself.

If your GTM is PLG, the product must support self-serve onboarding, value delivery without configuration, and viral or sharing-based distribution. These are product requirements, not marketing wishes.

If your GTM is enterprise sales, the product must support custom deployments, SSO, admin controls, and compliance features. These are product requirements that determine engineering priorities.

[[april-dunford|Dunford]] puts it simply: positioning determines GTM, and GTM determines product requirements. The chain runs from market understanding to positioning to GTM motion to product roadmap. Most teams build it backward -- ship a product, then figure out how to sell it. The sequence should be reversed.

## Key Takeaway

- Positioning comes before GTM. If you cannot articulate your competitive alternatives, unique value, and target customer, no amount of distribution will save you.
- Category creation is almost always wrong for startups. Enter an existing category with a clear differentiator rather than spending years educating the market on a new problem.
- Diagnose whether your GTM problem is fuel (messaging, positioning) or engine (distribution, channels) before investing. Most teams fix the wrong side.

## Related

- [[product-led-growth|Product-Led Growth]] -- PLG as a GTM motion
- [[pricing-strategy|Pricing Strategy]] -- Price point determines GTM viability
- [[competitive-moats|Competitive Moats]] -- Positioning as the foundation of defensibility narrative
- [[marketplace-dynamics|Marketplace Dynamics]] -- Marketplace GTM differs from SaaS GTM
- [[platform-strategy|Platform Strategy]] -- Platform GTM requires developer-focused distribution
- [[product-market-fit|Product-Market Fit]] -- GTM is effective only after PMF is established

## Sources

- [[jeanne-grosser|Jeanne DeWitt Grosser on world-class GTM]] -- GTM as a product, 80% of buyers avoid pain, the go-to-market engineer role, sales org that feels like product
- [[april-dunford|April Dunford on the sales pitch framework]] -- Setup vs follow-through pitch structure, 40-60% of B2B deals end in no decision, positioning before GTM
- [[claire-butler|Claire Butler on Figma's GTM motion]] -- First GTM hire, killing the "Summit" name on day one, bottom-up growth, building confidence as the only marketer
- [[emily-kramer|Emily Kramer on building a marketing machine]] -- Fuel vs Engine framework, diagnosing GTM failures, marketing org structure
- [[arielle-jackson|Arielle Jackson on brand strategy and positioning]] -- Purpose-positioning-personality framework, positioning before code, naming process
- [[elena-verna-20|Elena Verna on product-led sales]] -- Product accountability over pipeline, PLG-to-enterprise layering, collaboration between product and sales
