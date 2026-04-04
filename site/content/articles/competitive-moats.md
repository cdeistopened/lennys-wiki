---
type: satellite
title: "Competitive Moats"
domain: strategy
aliases: ["moats", "defensibility", "competitive advantage", "7 powers", "seven powers"]
episodes: [hamilton-helmer, andrew-wilkinson, paul-adams, scott-wu, michael-truell]
status: draft
---

# Competitive Moats

You are trying to figure out whether your product's advantage is durable or temporary. You have traction, maybe even a lead over competitors, but you are not sure if what you have built is actually defensible -- or just a head start that erodes the moment a well-funded competitor decides to enter your space. The distinction between a competitive advantage and a moat is the difference between a company that survives a market cycle and one that defines a category for a decade.

## The 7 Powers Framework

[[hamilton-helmer|Hamilton Helmer]], author of *7 Powers: The Foundations of Business Strategy*, provides the most rigorous taxonomy of competitive moats discussed on the podcast. As he frames it: "Power requires a benefit and a barrier, so he's taking care of the benefit part by saying a castle, you have to have a pretty good understanding of why it's a castle and not a shack." His framework identifies seven -- and only seven -- sources of durable competitive advantage. Everything else is either a temporary advantage or an operational strength that competitors can replicate.

| Power | Definition | When It Emerges | Tech Example |
|-------|-----------|-----------------|--------------|
| **[[network-effects|Network Effects]]** | Product value increases with each additional user | After critical mass achieved | WhatsApp, LinkedIn |
| **Switching Costs** | Users face friction leaving for a competitor | After integration and data accumulation | Salesforce, Workday |
| **Counter-Positioning** | New entrant adopts a model the incumbent cannot copy without cannibalizing itself | At founding | Netflix vs Blockbuster, Tesla vs legacy auto |
| **Scale Economies** | Unit cost declines with volume in ways competitors cannot match | At scale | AWS, Google Search infrastructure |
| **Branding** | Objective association of higher value justifying premium pricing | Over years of consistent delivery | Apple, Stripe |
| **Cornered Resource** | Exclusive access to a valuable asset (talent, IP, data) | Varies | Google's search index, Palantir's government relationships |
| **Process Power** | Deeply embedded organizational processes that are hard to replicate | Over many years | Toyota Production System, Pixar's creative process |

The critical insight from [[hamilton-helmer|Helmer's]] framework is that not all powers are available at all stages. As he explains: "There's a thing called power progression. There are times when certain types of power are available. The path to power is where the rubber meets the road." Counter-positioning is a weapon for startups. Network effects require critical mass. Process power takes a decade to build. The moat you pursue must match your company's lifecycle stage.

## Real vs Illusory Moats in Software

Many software companies mistake early traction signals for defensibility. [[hamilton-helmer|Helmer]] is direct about this: "You're on a treadmill and if you stop running on that treadmill, you get creamed, but it's not power. The things that drive operational excellence can be mimicked."

**What looks like a moat but is not:**

- **First-mover advantage.** Being first rarely matters in software. Google was not the first search engine. Facebook was not the first social network. Slack was not the first team chat tool. Speed of execution matters early; it is not a moat.
- **Fundraising.** Capital is a resource, not a power. If your only advantage is more money, you are in a spending war, not building defensibility.
- **Feature parity.** Any feature you ship can be copied in months. Features are the cost of entry, not the source of moats.
- **Brand awareness.** Awareness is not branding in Helmer's framework. A brand becomes a power only when customers pay a premium or choose your product with less evaluation because of trust built over time. Most startups have awareness, not brand power.

[[andrew-wilkinson|Andrew Wilkinson]], who has started or been involved with over 75 businesses through his holding company Tiny, offers a practical lens on switching costs: "An example might be Salesforce where no one wants to -- they've spent years and they've done all the implementation and trained everyone on it." He points to Charlie Munger's advice: "Fish where the fish are" -- find markets with structural advantages rather than competing in crowded ponds on execution alone.

**What actually constitutes a moat in software:**

[[hamilton-helmer|Helmer]] illustrates this with Netflix's scale economies: "They have more subscribers. The cost of their content is a very large fixed cost, about 50% of their cost structure every year. They can take that fixed cost and spread it over more subscribers so their cost per subscriber is less versus somebody with fewer subscribers." The DHM model (Delight users, in Hard-to-copy ways, that are Margin-enhancing) provides a practical test. The "hard-to-copy" dimension maps directly to moats: if a competitor saw exactly what you are doing, could they replicate it within 12-18 months? If yes, it is not a moat.

At Netflix, the combination of personalization algorithms trained on billions of viewing hours (data network effect), exclusive original content (cornered resource), and a global brand associated with quality entertainment (branding) created interlocking moats. No single element was sufficient; the combination was.

## How Moats Evolve Over the Company Lifecycle

The moat that matters at Series A is different from the moat that matters at IPO. Helmer's framework maps cleanly to company stages:

| Stage | Available Powers | Example |
|-------|-----------------|---------|
| **Pre-product-market-fit** | Counter-positioning | Figma positioning against Adobe's installed base |
| **Early growth** | Network effects (if applicable), Switching costs begin forming | Slack teams accumulating message history and integrations |
| **Scaling** | Scale economies kick in, Cornered resource (data) | Airbnb's review corpus and host photography |
| **Mature** | Branding solidifies, Process power emerges | Stripe's developer brand, Amazon's logistics process |

An important nuance: the strongest moats are *accruing* -- they get stronger with each user, each transaction, each data point. A moat that does not compound is a moat that erodes. Airbnb's review system gets more valuable with every stay. Salesforce's switching costs increase with every custom workflow a company builds. These are accruing moats.

A moat that stays static -- say, a patent or a regulatory license -- provides protection but does not compound. Static moats are valuable but vulnerable to disruption over longer time horizons.

## Competitive Advantage vs Moat

The distinction is duration and replicability. A competitive advantage is anything that helps you win today: better marketing, faster shipping, a talented team, a specific insight about the market. A moat is the subset of competitive advantages that persist even after competitors know about them and actively try to replicate them.

[[hamilton-helmer|Helmer]] calls this the "power test." As he explains, "You have to say what is it that creates some kind of refuge? And what it is is there's something in what you do that gives you either a cost or price advantage over others. And the barrier side is that there's something that is durable about that that makes it over time that competitors can't take away from you." Does the advantage persist in the presence of an informed, well-resourced competitor attempting to copy it? Amazon knows exactly how Costco operates. They cannot replicate Costco's member psychology and willingness to accept razor-thin margins. That is a moat. Conversely, any "advantage" that evaporates once a competitor studies and mimics your approach is a temporary edge, not a power.

For PMs evaluating their own product's defensibility, the practical exercise is to imagine your best-funded competitor hiring your top 10 engineers and copying your product feature-for-feature. What remains that they cannot replicate? If the answer is "nothing," you are competing on execution speed, not on a moat -- and execution speed is a temporary advantage.

## Key Takeaway

- Use Helmer's 7 Powers as a diagnostic. If your competitive advantage does not map to at least one of the seven, it is likely temporary.
- Counter-positioning is the startup's best weapon -- build a model that incumbents cannot adopt without destroying their existing business.
- The strongest moats accrue value over time. Ask whether your defensibility compounds with each user, transaction, or data point, or whether it remains static.

## Related

- [[network-effects|Network Effects]] -- The most discussed moat type in tech
- [[marketplace-dynamics|Marketplace Dynamics]] -- Cross-side network effects as marketplace moats
- [[platform-strategy|Platform Strategy]] -- Platform ecosystem as a defensibility layer
- [[product-market-fit|Product-Market Fit]] -- PMF precedes moat-building; do not invest in defensibility before fit
- [[pricing-strategy|Pricing Strategy]] -- Switching costs often manifest through pricing and packaging lock-in

## Sources

- [[hamilton-helmer|Hamilton Helmer on 7 Powers and business strategy]] -- The complete framework for durable competitive advantage, power progression, benefit-and-barrier test, Netflix scale economies example
- [[andrew-wilkinson|Andrew Wilkinson on building and buying businesses]] -- Switching costs in practice, fishing where the fish are, competition as margin compression
- [[paul-adams|Paul Adams on AI and product strategy at Intercom]] -- Differentiation vs table stakes, swinging the pendulum framework
