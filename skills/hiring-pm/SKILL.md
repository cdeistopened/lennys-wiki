---
name: hiring-pm
description: "Hire a product manager using structured competency frameworks from Lenny's Podcast guests. Use when someone says 'I need to hire a PM', 'help me design a PM interview loop', 'how do I evaluate PM candidates', 'I'm hiring my first product manager', 'help me build a PM hiring scorecard', 'I have a PM candidate — help me decide hire/no-hire', 'what interview questions should I ask PMs', or 'how do I set up a Bar Raiser process'. Walks through role definition, competency scoring, interview design, reference checks, and produces a PM Hiring Scorecard."
type: decision
episodes:
  - ravi-mehta
  - shishir-mehrotra
  - claire-hughes-johnson
  - noah-weiss
  - bill-carr
  - nikhyl-singhal
source_guests:
  - name: Ravi Mehta
    role: "CPO at Tinder, Product Director at Facebook, VP Product at Tripadvisor"
    contribution: "12-Competency Model in 4 Pillars, PM Archetypes, Exponential Feedback"
  - name: Shishir Mehrotra
    role: "CEO of Coda, former Head of Product & Engineering at YouTube"
    contribution: "PSHE leveling framework, Eigenquestion interview test, reference check methodology"
  - name: Claire Hughes Johnson
    role: "COO at Stripe, author of Scaling People"
    contribution: "Hiring system infrastructure, interviewing as a trained skill, rubrics"
  - name: Noah Weiss
    role: "CPO at Slack, former Head of Product at Foursquare"
    contribution: "10 Traits of Great PMs, career stage expectations"
  - name: Bill Carr
    role: "VP at Amazon (15 years), co-author of Working Backwards"
    contribution: "Bar Raiser hiring process, behavioral interviewing, leadership principles"
  - name: Nikhyl Singhal
    role: "VP Product at Meta, founder of The Skip"
    contribution: "Three-Act Career Model, shadows of superpowers, authenticity testing"
---

# PM Hiring Framework

Walk a hiring manager through designing and executing a product manager hiring loop using Ravi Mehta's 12-Competency Model, Shishir Mehrotra's PSHE leveling framework, Noah Weiss's 10 Traits of Great PMs, Claire Hughes Johnson's hiring system from Stripe, Bill Carr's Bar Raiser process from Amazon, Nikhyl Singhal's career stage assessment, and 17 battle-tested interview questions from top product leaders.

## When to Use

The user needs to hire a product manager and wants a structured, competency-based approach. They might say:
- "I need to hire a PM"
- "Help me design a PM interview loop"
- "How do I evaluate PM candidates?"
- "I'm hiring my first product manager"
- "Help me build a PM hiring scorecard"
- "I have a PM candidate -- help me decide hire/no-hire"

## How to Run This

Ask the user what stage they are at in their PM hiring process. They might need help defining the role, designing interview questions, evaluating a specific candidate, or all of the above. Run through each step in order, stopping to discuss at each stage. Each step builds on the previous.

---

## Step 1: Define the Role Shape

Before designing interviews, determine what KIND of PM you need. The role shape determines which competencies to weight heavily.

### Identify Career Stage Needed

From Nikhyl Singhal (`nikhyl-singhal/transcript.md`):

> "Almost think of career as a product. So if you're building a good product, you think about, 'Well, here's what a great product would look like,' and then you break it into version one, version two, version three."

Singhal breaks PM careers into three acts:

- **Act One (Builder):** Learning craft, shipping things, diverse experiences. "The more diverse career you have, the better builder you are."
- **Act Two (Factory Builder):** Leading teams that build. Scaling craft through others. "Being a product manager means you're confronted with maybe all five or maybe more of these. I want to know that you pick up one of these as early as possible."
- **Act Three (Existential):** What happens after "making it." North Star beyond title and money.

**Ask the user:** What stage PM do you need?

| Level | Singhal Act | What They Do | Competency Weight |
|-------|-------------|--------------|-------------------|
| APM / Junior PM | Early Act One | Individual contribution, learning craft | Product Execution + Customer Insight heavy |
| Senior PM | Late Act One | Owns a problem space end-to-end | Balanced across all four pillars |
| Staff / Principal PM | Act Two (IC track) | Shapes strategy, influences without authority | Product Strategy + Leadership heavy |
| Group PM / Director | Act Two (management) | Builds teams that build | Leadership + Product Strategy heavy |
| VP / CPO | Late Act Two / Act Three | Sets systems, culture, org-level strategy | All pillars at systems level |

### Identify the PM Archetype

From Ravi Mehta (`ravi-mehta/transcript.md`):

> "You'll find certain styles of PMs have certain clusters of competencies. If you're a growth PM, you might have a certain focus that might include a lot of focus on data and outcome ownership. If you're more of a product discovery or product innovation PM, you may have a different set of skills."

Map the role to an archetype:

| Archetype | Core Competency Cluster | Best Interview Signals |
|-----------|------------------------|----------------------|
| **Growth PM** | Data Fluency + Business Outcome Ownership + Product Delivery | Metrics reasoning, experiment design, speed |
| **Platform PM** | Functional Specification + Product Quality + UX Design | API design thinking, technical depth, systems thinking |
| **Discovery / 0-to-1 PM** | Voice of Customer + UX Design + Product Vision | Customer empathy, taste, ambiguity tolerance |
| **Scaling PM** | Product Delivery + Stakeholder Inclusion + Managing Up | Cross-functional leadership, process design, communication |

### Level the Candidate with PSHE

From Shishir Mehrotra (`shishir-mehrotra/transcript.md`), the PSHE framework that Google's product leaders developed to evaluate and level PMs across the company:

> "We ended up settling on this one called PSHE... It stands for Problem, Solution, How, Execution."

The framework works as a ladder of increasing ownership:

| Level | PSHE | What It Means |
|-------|------|---------------|
| **Junior PM** | **E** (Execution) | "You get handed a problem. You get handed a solution. You get handed the how. All you have to do is execute, run that playbook." |
| **Mid PM** | **H** (How) | "We hand you a problem. We hand you a rough solution. You figure out the how. How are we going to organize this? What are the milestones? How are we going to get it to market?" |
| **Senior PM** | **S** (Solution) | "We hand you a problem and you come back with the solutions. We judge you on the creativity and the effectiveness of the solutions." |
| **Staff+ / Director+** | **P** (Problem) | "You tell us the problems. 'I know you told me to go work on activation, but actually I think our issue is brand.'" |

Mehrotra on the critical career transition -- the "trough of dissolution":

> "Everything about leading up to this moment from high school and college has been about scope. And at this point you're all of a sudden told, 'We're not judging you on scope anymore. We're judging you on this PSHE thing... The difference between a level three and a level seven may not be scope. They may do the exact same job. It's how they do the job that matters.'"

**Ask the user:** At what PSHE level does this role operate? This determines whether your interview questions should test execution speed (E), process design (H), creative problem-solving (S), or problem identification (P).

**Output from Step 1:** A one-paragraph role shape: level + archetype + PSHE level + top 4-5 weighted competencies.

---

## Step 2: Build the Competency Scorecard

The core evaluation framework is Ravi Mehta's 12-Competency Model, developed at Tripadvisor for their Product Rotational Program.

From Ravi Mehta (`ravi-mehta/transcript.md`):

> "We really needed to define very clearly what is product management and how do we help people identify the skills that they need to be an effective product manager and give them a plan so that they can grow those skills."

> "These 12 competencies I think are the same for APMs as they are for CPOs... The specifics might change, but the overlying structure remains the same."

### The 12 Competencies in 4 Pillars

Build a scorecard with these 12 rows. For each, rate: **Needs Focus / On Track / Outperforming**.

**Pillar 1: Product Execution**

| # | Competency | What It Means | Junior Signal | Senior Signal |
|---|-----------|---------------|--------------|---------------|
| 1 | Functional Specification | Defining what to build (PRDs, specs) | Can write a clear spec for a feature | Creates systems that enable teams to define specs |
| 2 | Product Delivery | Working with eng/design to ship | Ships on time with minimal drama | Builds delivery processes that scale across teams |
| 3 | Product Quality | Ensuring quality across technical, design, usability, business | Catches bugs, owns QA mindset | Sets quality bar and creates systems to maintain it |

From Mehta: "Ultimately that's the foundation of being a successful product manager is being able to execute. And that's as true for an APM as it is for a VP or a CPO."

**Pillar 2: Customer Insight**

| # | Competency | What It Means | Junior Signal | Senior Signal |
|---|-----------|---------------|--------------|---------------|
| 4 | Data Fluency | Using quantitative data to make decisions | Can pull data and interpret it | Designs measurement frameworks, knows when data misleads |
| 5 | Voice of the Customer | Being the customer advocate | Talks to customers regularly | Creates systems for continuous customer insight |
| 6 | User Experience Design | Thinking in UX, not just features | Can wireframe and think through flows | Shapes UX vision across product surface |

From Mehta: "This is very explicitly user experience design and not user interface design because the experience of your product may vary. If you're building APIs, then your experience is actually the API spec."

**Pillar 3: Product Strategy**

| # | Competency | What It Means | Junior Signal | Senior Signal |
|---|-----------|---------------|--------------|---------------|
| 7 | Business Outcome Ownership | Connecting product work to business value | Knows their metrics and what moves them | Owns P&L-level outcomes |
| 8 | Product Vision & Roadmapping | Sequencing work toward strategy | Can build a quarterly roadmap | Sets multi-year vision and sequences bets |
| 9 | Strategic Impact | Sequencing business outcomes to move strategy | Connects feature work to team goals | Sequences business outcomes to move company strategy |

From Mehta: "It's really important to move away from thinking about product as shipping features to driving business outcomes."

**Pillar 4: Leadership**

| # | Competency | What It Means | Junior Signal | Senior Signal |
|---|-----------|---------------|--------------|---------------|
| 10 | Stakeholder Inclusion | Rallying the org around your work | Keeps stakeholders informed | Builds coalitions, navigates complex orgs |
| 11 | Team Leadership | Developing direct reports | N/A for ICs | Helps PMs become great PMs |
| 12 | Managing Up | Winning support from leadership | Communicates status clearly | Shapes leadership's thinking, wins resources |

### How to Weight the Scorecard

Based on the role shape from Step 1, mark 4-5 competencies as **Critical** (must be On Track or better) and the rest as **Important** (Needs Focus is acceptable if other areas compensate).

**For early-career PMs**, from Noah Weiss (`noah-weiss/transcript.md`):

> "I think for early on in your career, what I would say is getting great at execution. It's a thing that you can most control. Then I think building that nose for impact... and then actually do think early on getting really fluent on the data and the research side."

**For senior PMs (Director+)**, from Weiss:

> "I think this is where the pace and quality of decision making starts to matter a lot more... becoming just someone who can dedicate more of your time to be out of the fray of the day-to-day and think more about the longer-term strategy."

---

## Step 3: Design the Interview Loop

### Infrastructure First

From Claire Hughes Johnson (`claire-hughes-johnson/transcript.md`):

> "I think interviewing is not a skill that comes naturally. People think it does. It does not. And there's really basic easy tips and tricks you can find even on the interwebs about interviewing."

> "I think some of the simplest versions of it is how do we evaluate talent? What kind of talent are we looking for? Where do we go look for talent, figure that out, and sort of train people a bit internally on interviewing."

CHJ's hiring system principles from Stripe:

1. **Define what capabilities you need** -- even pre-PMF, think about what you need to build, not just who you know.
2. **Train people on interviewing.** Interviewing is not a natural skill. Provide rubrics, questions, and calibration.
3. **Use rubrics and structured evaluation.** Create scoring guides for each interview round.
4. **Start building process before you think you need it.** From CHJ: "I think the first thing you're probably putting in place is a little bit of hiring process, and I think that's going to matter sooner than you think."

### Add a Bar Raiser

From Bill Carr (`bill-carr/transcript.md`) on the process Amazon created in 1999 that became one of their most important hiring innovations:

> "We created it for a simple reason, to quote one senior leader at Amazon, 'We had new people hiring new people hiring new people.' We were in our hyper-growth phase."

The Bar Raiser is a trained interviewer who is NOT the hiring manager and does NOT report to the hiring manager. Their job:

1. **Run the debrief meeting** (not the hiring manager, not the recruiter)
2. **Ensure objective criteria are applied** -- keep the conversation on competencies, not vibes
3. **Counter urgency bias** -- the hiring manager always feels pressure to fill the role

> "The Bar Raiser basically would be a subject matter expert on how this process worked, they'd conduct the debrief to make sure that we were actually adhering to the process, that people were sticking to the objective criteria rather than saying, 'I don't think we should hire this person because, I don't know, they don't seem to want to work here enough.'"

Carr on who makes the final call:

> "The decision maker is the hiring manager, the whole interview loop and the Bar Raiser are actually just there to help the hiring manager make the right decision... technically speaking the Bar Raiser could block them from a decision to hire someone, but they would, well done, they would help the hiring manager see the reasons not to hire the person through a Socratic method."

How to implement at your company, from Carr:

> "Pick people who are A, care a lot about your hiring process, B, appear to be good interviewers, and C, seem to have high standards. It's also a great role for people who are earlier in their career by giving them this additional leadership opportunity. It's a great way to grow and develop leaders."

### The Interview Loop Structure

Design a 4-5 round loop. Each round maps to specific competencies from the scorecard.

| Round | Duration | Interviewer | Competencies Tested | Question Type |
|-------|----------|-------------|--------------------|--------------|
| 1. Screen | 30 min | Hiring Manager | Product Sense + Taste + Self-awareness | Behavioral + Product Love |
| 2. Product Execution | 45 min | Senior PM | Spec, Delivery, Quality, Data Fluency | Case study + Technical |
| 3. Strategy & Impact | 45 min | Product Leader | Vision, Roadmap, Business Outcomes, Strategic Impact | Strategy case + Past experience |
| 4. Leadership & Culture | 45 min | Cross-functional (Eng/Design lead) | Stakeholder Inclusion, Team Leadership, Managing Up, Culture | Behavioral + Collaboration |
| 5. Bar Raiser | 30 min | Trained Bar Raiser (outside the team) | Overall judgment, authenticity, growth mindset | Open conversation + Contrarian Q |

### Question Bank by Round

**Round 1: Screen -- Product Sense & Self-Awareness**

Start with Ravi Mehta's signature question (`ravi-mehta/transcript.md`):

> "My favorite interview question is, tell me about a product that you love. I use the word love very deliberately. I want to see what products in their lives they really gravitate to and they engage with... Then I'll ask a whole series of questions: Why do you love it? Why do you think other people love it? What would you like to see about it in the future? Pick a feature that you'd like to build for that product."

> "I've used this for years. It's just such a good way to help understand the product sense that a person has."

Then test self-awareness with this question:

> "To what do you attribute your success? And you can't say luck." Look for how self-aware the candidate is about what actually drives their performance versus hand-waving at circumstances.

**Round 2: Product Execution -- Eigenquestion Test**

Use Shishir Mehrotra's Eigenquestion Test for analytical thinking (`shishir-mehrotra/transcript.md`):

> "A group of scientists have invented a teleportation device. They've hired you to be their business counterpart, bring this to market. What do you do?... Turns out these scientists, they hate talking to people... they've decided that they will answer only two of your questions. What two questions do you ask?"

> "All of a sudden the sharp product managers, engineers, so basically every role, they very quickly find what are the one or two eigenquestions on this topic."

Mehrotra on what separates great answers from weak ones:

> "I'll hear candidates tell me things like, 'Well, I guess I would ask them what size it is.' And they're like, 'Why would you ask them what size, what decision is that going to allow you to make, to know what size it is?' And sometimes I can explain it, but sometimes not, don't get hired."

Evaluate: Can they reduce complexity to its essential variables? Do their questions map to downstream decisions? This directly tests the S-level (Solution) thinking from the PSHE framework.

For execution depth, ask about grit:

> "What's the hardest thing you've ever done?" Look for: why it was hard, how they overcame the difficulty, how they worked with others, and how much agency they had.

**Round 3: Strategy & Impact -- Past Experience Deep Dive**

Test strategic thinking with the controversial decision question:

> "Describe to me a time when you were part of a controversial product decision. What did you do?" Look for: can they represent both sides of the argument, do they understand why the problem was important, and -- critically -- do you feel compelled to work on that problem after hearing them describe it?

Test impact orientation:

> "Tell me about a time that you delivered something that was impactful." Look for how they define impact and whether they connect product work to business outcomes (Mehta competency #7).

**Round 4: Leadership & Culture -- Collaboration and Influence**

Use Noah Weiss's unfair secrets question (`noah-weiss/transcript.md`):

> "What unfair secrets have you learned to improve the velocity and energy level of a product team? When I say unfair or secret, I usually mean not something that you probably read on a medium post."

This tests whether the candidate has developed genuine craft wisdom from experience, not just frameworks from blog posts.

Test growth mindset:

> "Fast forward three years, what's different about you then?" Look for signals of humility and self-awareness around areas of personal and professional growth.

**Round 5: Bar Raiser -- Authenticity Check**

Use Nikhyl Singhal's authenticity breaker (`nikhyl-singhal/transcript.md`):

> "What's something that everyone takes for granted that you think is essentially hogwash or inaccurate?... There's no way to answer that question without being genuinely opinionated."

> "I'm always looking for people to break this sort of interview mindset. Everyone always prepares for interviews, and then their entire conversation is predicting what you think you want me to say."

Singhal on what he looks for: "I want people to be, I think, genuinely contrarian and be able to articulate their position. I look for some sparkle in their eyes."

Then test introspection:

> "Tell me something you did that worked out, but not for the reason that you thought it would work." This separates candidates who merely execute from those who reflect and learn.

> "What have you learned about yourself that reveals a limitation in how you work?" Tests whether the candidate has done genuine self-assessment.

---

## Step 4: Master the Reference Check

This is where most hiring processes fail. Shishir Mehrotra considers the reference check the single most important signal in the entire hiring process.

From Shishir Mehrotra (`shishir-mehrotra/transcript.md`):

> "I generally value the reference check over interview signals. If I had to stack rank in interviews, what is the best signal? The reference check is the top of the list. Those people, they worked with this person sometimes for years, their knowledge, what you're going to get out of 30 minutes of artificial scenarios it's just like never going to compare what a good reference check will give you."

### How to Run a Reference Check Using PSHE

The reference check is the best way to assess where someone truly falls on the PSHE scale, because their colleagues have seen them operate for years -- not 30 minutes.

Mehrotra's technique for reference calls:

> "The absolute ideal case is you get to the person that you're doing the reference check with and you don't even tell them who you're asking about and you just say, 'When you think of your teams, who is best at...'"

If you cannot do that (most common), provide contrast without revealing your ranking:

> "I'll say things like, 'When you think about this person, I'll give you four different personas. Someone who's regularly coming up with the problems that the team should be focused on. Someone who given a set of problems is constantly solving them in this really creative way. The person that is just really good at getting a team moving. Or the person who can take a playbook and execute it with high precision and high quality.' And I won't tell them that I have a qualitative judgment that one is better than the other."

The key insight -- do not tell the reference what you value:

> "By the way, I will say I value P over S over H over E. I've seen many companies that would reverse that scale... So it's not actually that unbelievable that I might value the E over the P. For a reference check, you can probably not give that away."

Mehrotra on what reference checks reveal that interviews cannot:

> "An amazing number of people will tell you, 'No, they run a great meeting but actually solving the problem, designer does that,' or, 'What are the problems? No. The CEO tells us what to do.' And it's not meant to diminish any of that... but it's actually quite hard to assess in an interview but incredibly easy to assess in a reference check."

### The Performance Review Prediction Question

From Paul Adams (Intercom), ask references:

> "What feedback will I be giving this person in their first performance review?" This question cannot be dodged -- there is always an answer, and it is incredibly enlightening. It surfaces the development areas that the candidate will not volunteer.

### Timing

From Mehrotra on when to do reference checks:

> "I try to do them as early in the process as practical... I think it's actually the worst feeling for an interviewee to go through a process and then get dinged at the reference check stage. It's a really crappy experience for the candidate."

---

## Step 5: Calibrate the Hiring Bar

### The Noah Weiss 10 Traits Overlay

After interviews, overlay Noah Weiss's 10 Traits as a gut check. These are not interview rubric items -- they describe what the PM job actually IS.

From Noah Weiss (`noah-weiss/transcript.md`):

> "These traits are... the actual job of product management, what is it about, what does success look like? It's not a career ladder. It's not the, 'Here's the structured interview things that you should interview for.'"

| Trait | What to Look For | Red Flag |
|-------|-----------------|----------|
| 1. Live in the future, work backwards | Vision beyond next sprint | Only thinks tactically |
| 2. Amplify your team | Facilitator mindset, creates energy | "Mini-CEO" mentality |
| 3. Facilitate pace & quality of decisions | Helps teams decide, not dictates | Wants to be the tiebreaker on everything |
| 4. Execute impeccably | "I've got this" aura, no dropped balls | Disorganized, misses follow-ups |
| 5. Focus on impact | Defines and drives business outcomes | Ships features but can't articulate impact |
| 6. Write well | Clear, concise, persuasive written comms | Verbose or unclear writing samples |
| 7. Optimize for pace of learning | Takes bold bets, portfolio mindset | Only makes safe bets |
| 8. Data fluency | Knows customers via quant + qual | Gut-only or data-only (needs both) |
| 9. Great product taste | Intuition for what people will love | No opinion on products, can't articulate why |
| 10. Say what you'll do, then do it | Reliability, follow-through | Overpromises and underdelivers |

From Weiss on the "mini-CEO" trap: "I wish someone could find out who wrote that expression early on of PM should be mini-CEOs. I think that's the most dangerous piece of advice ever in the history of product management because I think that is how you end up having PMs who try to act like dictators instead of leaders and facilitators."

From Weiss on impact: "I think impact solves all PM issues, which is if a team is consistently building things people love and changing the direction of the business, everything else is just an input."

From Weiss on execution as baseline: "I've never seen a PM who was disorganized or didn't do follow-up or wasn't clear about expectations or timelines. It's not high in Maslow's hierarchy of PM enjoyment. But I do think it's a baseline expectation."

### Career Stage Expectations

From Nikhyl Singhal, calibrate your bar by career stage (`nikhyl-singhal/transcript.md`):

**For early-career candidates**, look for craft orientation and story quality:

> "What I worry about is, sometimes when I'm in an interview... they talk about those early jobs and they just sort of said they were there... I want to know that story. Think about the story, think about the skill, then solve your day to day."

Expect them to have ONE clear area of emerging expertise -- not all 12 competencies. Singhal's five types of product ambiguity a PM can specialize in: craft (building), market ambiguity (creating new categories), organizational ambiguity (navigating complex teams), domain expertise (ML, hardware, etc.), and team management.

**For senior candidates**, probe the shadows of their superpowers:

> "Everyone focuses on your superpowers, but no one ever thinks about what shadows they create... Great collaborators sometimes are very reticent to present their own opinions. People that are amazing at growth struggle to be innovative. People that are world-class storytellers struggle to get in the details."

> "Sometimes even in a 30-minute conversation, walking into the room, just knowing what I know about the person, I can unlock their development area faster than anyone ever before, simply because my secret is, I'll bet you, because of this person's world-class here, these are the three things they're going to hit."

If a candidate seems strong everywhere, dig into the shadow of their stated strength. That is where the real signal lives.

---

## Step 6: Make the Hire/No-Hire Decision

### Run the Debrief

If you have implemented a Bar Raiser (from Step 3), they run this meeting. From Bill Carr (`bill-carr/transcript.md`):

> "The Bar Raiser was there to act as a balance also on the urgency bias that every hiring manager has, which is like, I got to fill these roles, but rather than filling them with the next warm body they find, make sure they fill them with people who actually meet our standards, fit our culture and meet our standards for functional excellence too."

Carr on the value of investing in this process:

> "The amount of time you're going to put into the hiring process may seem like a lot, but if you hire the wrong person, boy, that amount of time you're going to have to deal with managing that person, that's going to be a lot more, the impact on the team, impact on you."

### Compile the Scorecard

For each interviewer, collect:
1. **Competency ratings** (Needs Focus / On Track / Outperforming) for the 3-4 competencies they tested
2. **PSHE level observed** -- did the candidate demonstrate P, S, H, or E thinking? Does it match the role's requirement?
3. **Weiss trait signals** -- which of the 10 traits did you observe, positive or negative?
4. **Key evidence** -- specific quotes, examples, and observations
5. **Reference check findings** -- PSHE level from references, performance review prediction
6. **Recommendation** -- Strong Hire / Hire / Lean No Hire / No Hire

### Decision Framework

**Strong Hire** (proceed immediately):
- On Track or Outperforming on ALL critical competencies (the 4-5 from Step 1)
- PSHE level matches or exceeds role requirement
- No "Needs Focus" on more than 2 non-critical competencies
- Clear evidence of at least 6 of Weiss's 10 traits
- Passed the authenticity check (Singhal question reveals genuine thinking)
- Reference checks confirm interview signals (especially PSHE level)
- At least one interviewer saw something that made them say: "I want to work with this person"

**Hire** (proceed with awareness):
- On Track on all critical competencies (some may just barely clear the bar)
- 1-2 areas of "Needs Focus" that are coachable within 6 months
- Evidence of 4-5 Weiss traits
- No red flags on authenticity or self-awareness
- Reference checks do not contradict interview signals

**Lean No Hire** (decline unless role is very hard to fill):
- "Needs Focus" on 1+ critical competency
- Missing evidence on impact orientation or execution
- Interviewer feedback is mixed -- some strong, some concerning
- PSHE level in references falls below what interviews suggested

**No Hire** (decline):
- "Needs Focus" on 2+ critical competencies
- Failed the authenticity check (gave canned answers to Singhal/introspection questions)
- Mini-CEO energy (Weiss trait #2 and #3 failures)
- Cannot articulate impact from past work
- Defensive when probed on limitations
- Reference checks reveal a PSHE mismatch: interviews showed S-level thinking, but references say "the designer actually solves the problems"

### The Exponential Feedback Lens

From Ravi Mehta on evaluating growth potential (`ravi-mehta/transcript.md`):

> "If you give someone feedback on a particular symptom or you give them feedback on something that's tactical and they fix that in a moment, the feedback, the conclusion of that feedback, it just happens and then it's gone. But if instead you help a person understand the underlying behaviors that led to that particular situation, then they can focus on growing themselves."

When deciding on a borderline candidate, ask: **Are their gaps at the symptom level or the behavior level?**

- Symptom-level gap (fixable): "They haven't done X before but they clearly have the underlying capability." HIRE with a coaching plan.
- Behavior-level gap (structural): "They don't seem to think this way at all." This is a NO HIRE -- behavior-level gaps don't resolve in onboarding.

---

## Output

After completing the process, produce a PM Hiring Scorecard:

```
PM HIRING SCORECARD
==================================
Role: [title]
Date: [today]

1. ROLE SHAPE
   Level: [APM / Senior / Staff / Director / VP]
   Archetype: [Growth / Platform / Discovery / Scaling]
   PSHE Level Required: [E / H / S / P]
   Critical Competencies: [list 4-5]

2. COMPETENCY SCORES (12-row table)
   Pillar 1 - Product Execution:
   - Functional Specification: [NF / OT / OP]
   - Product Delivery: [NF / OT / OP]
   - Product Quality: [NF / OT / OP]
   Pillar 2 - Customer Insight:
   - Data Fluency: [NF / OT / OP]
   - Voice of the Customer: [NF / OT / OP]
   - User Experience Design: [NF / OT / OP]
   Pillar 3 - Product Strategy:
   - Business Outcome Ownership: [NF / OT / OP]
   - Product Vision & Roadmapping: [NF / OT / OP]
   - Strategic Impact: [NF / OT / OP]
   Pillar 4 - Leadership:
   - Stakeholder Inclusion: [NF / OT / OP]
   - Team Leadership: [NF / OT / OP]
   - Managing Up: [NF / OT / OP]

3. PSHE ASSESSMENT
   Interview Signal: [E / H / S / P]
   Reference Signal: [E / H / S / P]
   Match to Role: [Yes / No / Borderline]

4. WEISS 10 TRAITS CHECK
   [List observed traits with +/- signal for each]

5. REFERENCE CHECK FINDINGS
   - PSHE level confirmed: [Yes / No]
   - Performance review prediction: [what feedback will they get?]
   - Would reference enthusiastically rehire: [Yes / Qualified / No]

6. BAR RAISER ASSESSMENT
   - Authenticity: [Genuine / Canned]
   - Introspection: [Deep / Surface / Missing]
   - Growth mindset: [Strong / Moderate / Weak]

7. RECOMMENDATION: [Strong Hire / Hire / Lean No Hire / No Hire]
   [2-3 sentence rationale with specific evidence]

8. IF HIRE -- ONBOARDING FOCUS AREAS
   [2-3 competencies to develop first using Mehta's exponential feedback]
   [Symptom vs. behavior gap assessment for each]
```

Be direct. If the candidate should not be hired, say so and explain why. If they are borderline, specify exactly what additional signal would tip the decision. If they are a hire, identify the onboarding focus areas so the hiring manager walks in with a coaching plan from day one.

---

## Source Episodes

| Guest | Episode | Key Contribution |
|-------|---------|-----------------|
| Ravi Mehta | `episodes/ravi-mehta/transcript.md` | 12-Competency Model, PM Archetypes, Exponential Feedback |
| Shishir Mehrotra | `episodes/shishir-mehrotra/transcript.md` | PSHE leveling framework, Eigenquestion interview test, reference check methodology |
| Claire Hughes Johnson | `episodes/claire-hughes-johnson/transcript.md` | Hiring system infrastructure, interviewing training, rubrics |
| Noah Weiss | `episodes/noah-weiss/transcript.md` | 10 Traits of Great PMs, career stage expectations, unfair secrets question |
| Bill Carr | `episodes/bill-carr/transcript.md` | Bar Raiser hiring process, behavioral interviewing, urgency bias |
| Nikhyl Singhal | `episodes/nikhyl-singhal/transcript.md` | Three-Act Career Model, shadows of superpowers, authenticity testing |

### Individual Question Attribution

| Question | Guest | Source |
|----------|-------|--------|
| "Tell me about a product you love" | Ravi Mehta | `episodes/ravi-mehta/transcript.md` |
| Eigenquestion / Teleportation Device | Shishir Mehrotra (Coda) | `episodes/shishir-mehrotra/transcript.md` |
| "What's something everyone takes for granted that's hogwash?" | Nikhyl Singhal (Meta) | `episodes/nikhyl-singhal/transcript.md` |
| "What unfair secrets have you learned?" | Noah Weiss (Slack) | `episodes/noah-weiss/transcript.md` |
| "What feedback will I give in their first review?" (ref check) | Paul Adams (Intercom) | `episodes/claire-hughes-johnson/transcript.md` |
| "What's the hardest thing you've ever done?" | Geoff Charles (Ramp) | Interview compilation |
| "Describe a controversial product decision" | Yuhki Yamashita (Figma) | Interview compilation |
| "Tell me about a time you delivered something impactful" | Lauryn Isford (Notion) | Interview compilation |
| "Fast forward three years, what's different about you?" | Ben Williams (Snyk) | Interview compilation |
| "Something that worked, but not for the reason you thought" | Ayo Omojola (Carbon Health) | Interview compilation |
| "A limitation in how you work" | Scott Belsky (Adobe) | Interview compilation |
| "To what do you attribute your success? Can't say luck." | Eeke De Miliano (Retool/Stripe) | Interview compilation |

## Related Skills

- **pmf-evaluator** — The PM profile you need depends on company stage; pre-PMF needs a builder/discovery archetype, post-PMF needs scaling/growth
- **growth-model-designer** — If hiring a growth PM, understand what loops they need to own and what metrics they will be measured against

## Related Frameworks

- `pm-competency-model.md` — Ravi Mehta's 12-competency model in 4 pillars, the core evaluation framework used in Step 2
- `noah-weiss-10-traits.md` — The 10 traits overlay used as a gut check in Step 5
- `three-act-career.md` — Nikhyl Singhal's career stage model used to calibrate expectations in Step 1
- `radical-candor.md` — Framework for giving direct feedback to candidates and new hires during onboarding
- `eigenquestion-interview.md` — Shishir Mehrotra's teleportation device interview question used in Round 2
- `difficult-conversation-scripts.md` — Alisa Cohn's word-for-word scripts for performance feedback, denied promotions, and handling defensiveness
- `leader-as-coach-grow.md` — Rachel Lockett's GROW model for shifting from always-advising to coaching your reports
- `magic-loop.md` — Ethan Evans's five-step loop for advancing your career by building a partnership with your manager
- `exponential-feedback.md` — Give feedback that compounds over time using PM competencies to move from surface symptoms to root causes
- `selective-micromanagement.md` — A 2x2 of confidence and autonomy for diagnosing when to go hands-on vs. hands-off with your team
- `empowered-vs-feature-teams.md` — Determine whether your product team is truly empowered or trapped in feature-factory theater
