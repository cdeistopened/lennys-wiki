---
name: "Shape Up Method"
description: "Your team keeps missing deadlines and shipping late — fix the budget, shape the scope, and give the team real ownership."
type: framework
domain: product
episodes:
  - ryan-singer
source_guests:
  - Ryan Singer
score: 80
---

## When to Use

Use Shape Up when your team is stuck in an endless cycle of two-week sprints that never seem to add up to anything meaningful. When estimates are fiction, projects drag on with "one more sprint, one more sprint," and engineers feel like ticket-takers rather than creative problem-solvers. When the team complains about too many meetings and rituals. When product managers write detailed PRDs or Figma files that blow up on first contact with engineering reality. As Ryan Singer describes the origin problem: "We reached a point where it's like, 'Oh, we're going to have to figure out when this goes well, why does it go well and what do we do differently and how do we formalize that so it's reproducible as we keep onboarding more people?'"

Shape Up is not all-or-nothing. You can adopt individual pieces. Singer is explicit: "You don't need to do any of it. This is where it helps to look at what's going wrong and what are we trying to fix."

## The Framework

Shape Up has three core elements: appetites (fix the time, vary the scope), shaping (collaborative design of the solution), and empowered teams (give the whole idea to a team, not shredded tickets).

### Step 1: Set the Appetite

Instead of estimating how long a project will take and then committing to that estimate, flip it. Decide how much time the business is willing to spend, then figure out what you can accomplish in that time. Singer calls this the "appetite": "What is the maximum amount of time we're willing to go before we actually finish something?"

Six weeks is the maximum ceiling, not a fixed cycle. "It turns out that the six-week is only a maximum. If we think of six weeks as a maximum, that's going to force us to ask some really good questions to ourselves about what piece of this do we really think we can land." Shorter projects — two weeks, four weeks — are fine. Growth teams in particular may work in one- or two-week chunks. The point is that the time budget drives scope decisions, just like a financial budget drives home-buying decisions: "If you're going to buy a car or a house... you have to have a budget in mind. And the budget then is how you choose between all kinds of alternatives and make a lot of hard choices and trade-offs."

### Step 2: Shape the Solution

This is the step most teams skip or botch. Shaping is not writing a PRD. It is not creating detailed Figma mockups. It is not writing user stories. It is a live, collaborative session where product, design, and a senior engineer wrestle with the problem together until they reach a version of the idea that everyone understands and believes can be built within the appetite.

Singer describes what goes wrong without shaping: "Very often, when people try Shape Up, what I see is a product team creating either a lot of Figma files or maybe a lot of documentation, like a PRD with a bunch of requirements... And what you see is that when you give that to a team as this is what we shaped, what happens is it blows out."

The right level of detail is roughly "less than 10 moving pieces." Singer demonstrates with a calendar feature for Basecamp: "It's going to have this two-month dot grid with scrolling agenda view underneath and the ability to hit new when you're looking at an empty space to create something in what you're viewing." Not "build a calendar." Not a pixel-perfect mockup. A clear concept with named components that everyone in the room understands.

Who is in the room matters. Singer emphasizes bringing "the senior engineering person who isn't just senior in title, the one who actually knows where the bodies are buried, how the old stuff works and what's truly possible and what's hard and what's easy in our infrastructure." The analogy: "I like to think of it like the grumpy old plumber who's seen everything and he insists on opening up the walls and looking at the pipes before he'll give you a quote."

The home renovation analogy captures the risk of skipping this: "You can have the most beautiful rendering of the new bedroom and we're going to have these lamps on the side of the bed that are coming out from the wall. But if you haven't checked if there's electricity in that wall there or not, it's going to drastically change the cost and the time and everything."

### Step 3: Give the Team the Whole Idea

Once shaped, hand the entire concept — not shredded tickets — to the build team. "Instead of, 'Here's your ticket,' or 'Here's your user story,' it's like, 'Here's the thing you understand, that makes sense, and now you're going to have freedom to figure out how to actually make this a reality.'" The team creates their own tasks and figures out how to track progress. This produces "way more engagement, especially from the technical team."

### Step 4: Use the Circuit Breaker

If a project is not on track at the end of the time box, do not just extend. Singer acknowledges the hard reality: "Almost no teams have the stomach for" simply canceling a project. The practical version: "What we can do is say, 'We're not going to keep reinvesting in something that we don't understand.' So, let's take this out of build mode and bring this back into shaping mode." Different people, different questions, different work to figure out what went wrong before committing more engineering time.

Singer warns against the naive version of scope-cutting: "If we're at the end of the six weeks and it's not looking good, we can't just cut off what we agreed to that made this thing valuable. We can't just cut the scope and say, 'Oh, well now, we managed to ship inside of six weeks.' That's going to kill everybody's morale."

## Example

Singer tells the story of a FinTech team that wanted to improve onboarding conversion by eliminating a form step — they discovered they could pipe the data in from a banking partner instead of asking the user. It sounded simple. But in a shaping session, the senior engineer opened the code and found that the onboarding step was not one step — it had three different branches depending on which bank the customer used. "That's the kind of thing where it all sounds so great and simple, and then you get into the weeds and you realize, 'Oh, wait a minute.'" Had they discovered this in week four of a six-week build, it would have been catastrophic. Finding it during shaping cost them minutes, not weeks.

At Basecamp itself, the original catalyst for formalizing Shape Up was a project that went off the rails around 2013. After what was supposed to be a six-week effort, the team held a review session and "instead of, 'Oh, look, this is about ready to ship,' it was like, 'There are a lot of open questions here. And not only are there a lot of open questions here, we're not getting quick answers as we're asking.' And what we're starting to realize is like, 'Oh, not only is this not going to ship, but we can't even see the end of this.'"

## Output

After applying the Shape Up method, you walk away with:

1. **A time budget (appetite)** for each project — forcing hard scope trade-offs before work begins, not after deadlines slip
2. **A shaped concept** — not a PRD, not Figma files, but a collaborative artifact with fewer than 10 named moving pieces that product, design, and engineering all understand
3. **De-risked unknowns** — rabbit holes and technical time bombs surfaced during shaping, not during week four of the build
4. **An empowered build team** — owning the whole idea, creating their own tasks, making trade-offs with real understanding of what they are building and why
5. **A circuit breaker** — a commitment to stop and reshape rather than endlessly extending when a project goes sideways

As Singer puts it: "The first thing is we are not going to start something unless we can see the end from the beginning."

> Source: episodes/ryan-singer/transcript.md
