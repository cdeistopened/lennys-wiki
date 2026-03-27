---
name: "Hormozi Offer Design Applied to Feature Launches"
description: "Every feature launch IS an offer. Apply Hormozi's Grand Slam Offer framework to internal feature launches: the feature must solve a problem users know they have, deliver perceived value greater than effort, and be positioned as scarce or urgent. Use when launching a new feature, redesigning onboarding, or diagnosing why a shipped feature isn't getting adoption."
type: framework
domain: product-management
source: Alex Hormozi (adapted for product management)
cross-reference:
  - hormozi-wiki/plugin/references/frameworks/grand-slam-offer-checklist.md
  - lennys-wiki/plugin/references/frameworks/value-equation-for-products.md
  - lennys-wiki/plugin/references/frameworks/activation-metric-design.md
  - lennys-wiki/plugin/references/frameworks/aha-moment-definition.md
---

## When to Use

Use this when you're launching a feature and want more than "we shipped it, let's see what happens." Also use when a shipped feature has low adoption and you need to diagnose why.

Most product teams treat feature launches as announcements. Hormozi treats every offer as a designed experience with four components: the dream outcome, the vehicle, the bonuses, and the urgency. The same structure applies to features. A feature that nobody uses is an offer that nobody accepted.

## The Framework: Feature = Offer

Hormozi's Grand Slam Offer has four components. Here is how each maps to a feature launch:

| Hormozi Component | Feature Launch Equivalent |
|-------------------|--------------------------|
| **Dream Outcome** | The user's job-to-be-done that this feature serves |
| **Perceived Likelihood** | Does the feature obviously work? Is there social proof (other users, case studies, defaults)? |
| **Time Delay** | How long between discovering the feature and getting value from it? |
| **Effort & Sacrifice** | How much setup, learning, or workflow change does the feature require? |

### Step 1: Name the Dream Outcome (Not the Feature)

Hormozi: "People don't buy products. They buy the best version of themselves."

Bad feature announcement: "We added CSV export."
Good feature offer: "Get your board deck data in 30 seconds instead of spending Friday afternoon pulling numbers."

The dream outcome is not what the feature does. It is what the user's life looks like after using it. Lenny's DHM model (Delight, Hard-to-copy, Margin-enhancing) evaluates whether a product decision creates delight. Hormozi's dream outcome is the mechanism: does this bring the user closer to their fantasy end-state?

### Step 2: Increase Perceived Likelihood Before Launch

Hormozi stacks testimonials, case studies, and guarantees to increase perceived likelihood. For features:

- **Beta program with visible results**: "47 teams used this in beta and reduced their reporting time by 60%"
- **Default configurations**: Pre-configured templates that work immediately, rather than blank states that require setup
- **Social proof inside the product**: "1,247 teams use this template" or "Most popular among teams your size"
- **Progressive disclosure**: Show the feature working on sample data before asking the user to configure it with their own

### Step 3: Compress Time Delay to Zero

Hormozi observes that instant-result offers (surgery, done-for-you) can charge exponentially more than process-result offers (coaching, courses). The product equivalent:

- Features with zero time delay (Canva: you have a design in 2 minutes) get adopted faster than features requiring setup (Salesforce: value arrives in weeks)
- Pre-fill the feature with the user's own data so it works immediately
- Show the output before asking for configuration input

This connects directly to Lenny's activation-first-growth framework: activation IS the moment time delay drops to zero.

### Step 4: Eliminate Effort & Sacrifice

Every required action is friction in the denominator. For features:

- **Don't require opt-in**: If the feature improves the existing workflow, make it the default
- **Don't require learning**: If possible, the feature should work within existing UI patterns
- **Don't require sacrifice**: Migrating data from an old workflow to a new one is sacrifice. Build the migration path.

### Step 5: Add Scarcity and Urgency (Carefully)

Hormozi uses scarcity and urgency to drive action. For features, this translates to:

- **Limited beta access**: "First 100 teams get white-glove onboarding"
- **Time-bound incentive**: "Set up before Friday and we'll migrate your data for free"
- **Loss aversion**: "Teams using this feature retain 2x better" (making non-adoption feel costly)

Use sparingly. Manufactured urgency in product UI erodes trust. Real urgency (migration deadlines, pricing changes) is fine.

## The Adoption Diagnostic

When a shipped feature has low adoption, score it against Hormozi's four variables:

| Variable | Score (1-10) | Evidence |
|----------|-------------|----------|
| Dream Outcome clarity | | Is the value proposition obvious from the feature name and description? |
| Perceived Likelihood | | Do users believe it will work for them specifically? |
| Time Delay | | How many minutes/hours between discovery and first value? |
| Effort & Sacrifice | | How many steps, how much learning, what must they give up? |

The weakest variable is your adoption bottleneck. Fix it before adding more features.

## Output

After applying this framework:
- Feature launch positioned as an offer with all four variables addressed
- Adoption prediction based on variable scores
- Specific interventions for the weakest variable
- Feature announcement copy that leads with dream outcome, not feature description

> Source: Alex Hormozi, "$100M Offers." Product management context adapted using Lenny Rachitsky's activation, PMF, and growth frameworks. Synthesis by Creative Intelligence Agency.
