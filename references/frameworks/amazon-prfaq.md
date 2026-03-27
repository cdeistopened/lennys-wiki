---
name: "Amazon PR/FAQ Process"
description: "You need to decide what to build next — write a mock press release and FAQ to force clarity before committing engineering time."
type: framework
domain: product
episodes:
  - bill-carr
source_guests:
  - Bill Carr
score: 100
---

## When to Use

Use the PR/FAQ process when you have too many product ideas and no rigorous method for choosing between them, when big ideas keep getting greenlit on vibes or politics rather than clear thinking, or when engineering teams keep building things that do not solve a real customer problem. Bill Carr frames the problem directly: "One such version of this problem is what I'd call the-big-idea-that's-not-fleshed-out problem. Every single person listening to this podcast has either themselves done this or have witnessed others in their company who come up with a concept like, 'Oh, I think if we built this, boy, that would really solve things.' And it may sound good to everyone... But the reality is that actually once you've spent some time looking at that idea more deeply, you then start to identify several roadblocks or maybe a fatal flaw."

## The Framework

The PR/FAQ process, developed at Amazon between 2004 and 2007, replaces slide decks and verbal pitches with a written document that forces you to articulate who your customer is, what their problem is, and what your solution does — before you write a single line of code. The "press release" is not a real press release. Carr clarifies: "It's not meant to be a real press release, so don't use the language you would use if you were sending an actual press release. This is like an internal document."

### Step 1: Write the Press Release

The PR has three "money paragraphs":

1. **Short description**: A headline and opening paragraph that describe the product clearly enough that anyone can understand what it is. If the headline is "long and drawn out and I can't even tell what the heck this thing is from reading this headline," the idea is not crisp enough yet.
2. **Problem statement**: Define the customer and their specific problem. "That sounds really simple and easy, but it's actually very hard to do that well. To crisply and clearly define those. The first two things are the things that are hardest to define, like who's the customer? Like anyone says, 'All restaurants are my customer.' Okay, well, that's a mistake. Which kinds of restaurants are your customers? In what kinds of cities? In what kinds of formats?"
3. **Solution statement**: Describe what you plan to build and how it solves the problem. "Ideally, you would some way have quantified that problem or there's some data or customer insights that have led you to understand that problem, to know that it is a meaningful and big problem. Ideally a problem that people would pay money if you could solve."

The document includes a hypothetical launch date, which signals whether you envision this as a one-month effort or a year-long investment. It is data-rich and factual, not hyperbolic: "You don't want to use hyperbole. It would be very factual with numbers, data rich document too. A lot of internal confidential data would be in this press release."

### Step 2: Write the FAQ

The FAQ section forces you to address hard questions — technical feasibility, cost, competitive landscape, edge cases — that verbal pitches conveniently skip. This is where assumptions get stress-tested in writing rather than in a meeting where people nod along.

### Step 3: Iterate Through Concentric Circles

The PR/FAQ is not written once and approved. It goes through an iterative review process that Carr calls "concentric circles." The process starts small and expands:

1. **Author review**: You write it and often realize your own idea has a fatal flaw. "In your own, you've realized, 'Now that I put this down on paper and read it, this is not actually that good of an idea. I'm going to try something else.'"
2. **Manager review**: Your direct manager gives feedback, potentially killing the idea or sending it back for revision.
3. **Wider leadership**: The document reaches increasingly senior leaders, getting sharpened at each stage.
4. **Executive review**: Only the best PR/FAQs reach the CEO. "If you truly run this out and you write 100 PRFAQs in a year, maybe 20 of those make it their way to the CEO."

### Step 4: Create a Product Funnel, Not a Tunnel

This is the critical insight. Most companies operate a product tunnel — every idea that enters the process eventually gets built. Amazon deliberately operates a product funnel: many ideas in, few ideas out. "Think of yourself honestly as a venture capitalist. They don't fund every company that they meet with. They actually fund a very, very low percentage of them. At Amazon, we had lots and lots of PRFAQs that were a great idea, but we didn't ship them because we had other ones that were just a better idea, which had a bigger potential impact."

Carr is explicit about separating the two processes: "I recommend you try to break that into two different processes. One is the process of deciding what you should go build, and that's what the PRFAQ is designed for. And then once you've decided that, then, yes, by all means, use all that good thinking, 'Now how can I ship it efficiently and effectively with few to no bugs?'"

## Example

Carr tells the cautionary tale of the Amazon Fire Phone. The PR/FAQ process did not prevent this failure, and Carr explains why: the team started with a technology (3D effects) and went looking for a customer problem, rather than the reverse. "I would argue this is a case where we made the mistake of what we had a technology solution in mind, which was 3D effects. And then we took that solution and we're then in search of a problem. I don't think it solved any meaningful problems for customers." He tried to figure out how 3D would improve the music or video experience on the phone and could not. The lesson: "9 times out of 10, I think that's where... If it wasn't poor execution, if the product was executed correctly, what was wrong with the concept of the product?" The PR/FAQ is designed to catch exactly this flaw — but only if the team honestly answers the question of what problem they are solving.

On the positive side, Carr points to Prime Video and Kindle as products where the PR/FAQ process helped the team stay focused on the customer problem despite internal skepticism. "I can tell you that for years working on Prime Video, I would tell people about what our vision was of you watching on your TV set and we're going to have our own motion studio. We'll make our own movies and TV shows. And they would laugh at me."

## Output

After running the PR/FAQ process, you walk away with:

1. **A written document** that crisply defines the customer, the problem, and the proposed solution — not a slide deck, not a verbal pitch
2. **A stress-tested idea** that has survived concentric circle review, with hard questions addressed in the FAQ
3. **A decision**: build, revise, or kill — based on how the PR/FAQ compares against other PR/FAQs competing for the same engineering resources
4. **A product funnel** where many ideas are explored cheaply on paper and only the strongest are resourced for development
5. **A shared artifact** the entire team can reference during development, keeping the customer problem front and center

As Carr summarizes: "We took it as an article of faith. If we served customers well, if we prioritized customers and delivered for them, things like sales, things like revenue and active customers and things like the share price and free cash flow would follow."

> Source: episodes/bill-carr/transcript.md
