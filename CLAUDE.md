# Ask Lenny — Lenny Rachitsky's Product Management Coaching Plugin

An AI product management coach built from 303 episodes of Lenny's Podcast. Not a chatbot pretending to be Lenny — a structured library of real frameworks, real quotes, and real methodologies from Lenny Rachitsky and 300+ guests including Shreyas Doshi, Casey Winters, Elena Verna, Reforge founders, and leaders from Airbnb, Uber, Slack, Notion, Figma, and more.

## Quick Start

Ask any product management question:
- "How do I know if I have product-market fit?"
- "I need to prioritize my roadmap for next quarter"
- "Should I hire a growth PM or a product PM?"
- "How should I price my B2B SaaS?"
- "What's the best activation metric for a marketplace?"

Or use a specific skill directly:

### Decision Skills (You bring your situation, get a structured recommendation)
- `/ask-lenny:feature-prioritizer` — Prioritize features using RICE/ICE/LNO
- `/ask-lenny:pmf-evaluator` — Evaluate product-market fit
- `/ask-lenny:pricing-strategist` — Set or fix pricing
- `/ask-lenny:growth-model-designer` — Design your growth loops
- `/ask-lenny:hiring-pm` — Hire a PM

### Tutor Skills (Learn the concept, then apply it)
- `/ask-lenny:growth-loops-masterclass` — Learn growth loops
- `/ask-lenny:network-effects-workshop` — Learn network effects
- `/ask-lenny:activation-masterclass` — Learn activation
- `/ask-lenny:retention-workshop` — Learn retention

### Utility
- `/ask-lenny:episode-recommender` — Find the right episode to listen to

## What's Inside

### 11 Interactive Skills
Decision-making and tutor frameworks that walk you through a specific product problem step by step. Each one asks you questions, applies a methodology extracted from the archive, and delivers a structured output.

### 61 Framework Guides
Detailed written guides on specific topics — from the Superhuman PMF engine to ICE prioritization to the Dunford positioning method. Each one includes real quotes from the source episodes, organized across Product, Growth, Metrics, Team, and GTM domains.

### 303 Searchable Transcripts
The full Lenny's Podcast archive, polished and indexed. Claude can search these to answer any question.

### Progressive Disclosure
You don't need to read 303 transcripts. The system works in layers:
1. **Ask a question** — Claude routes to the right skill or framework
2. **Go deeper** — Claude reads the source transcript for more context
3. **Go deepest** — Claude searches across all transcripts for related insights

## The Key Difference: Real Frameworks from Real Operators

Lenny's guests are the people who actually built the growth engines, not commentators. This plugin preserves that specificity:

| Generic AI Response | Ask Lenny Response |
|--------------------|-------------------|
| "Focus on product-market fit" | "Use the Superhuman PMF engine: survey users, segment by 'very disappointed' score, build roadmap from what holds back borderline users. Target: 40%+ would be 'very disappointed' without your product." |
| "Prioritize your backlog" | "Use LNO framework (Shreyas Doshi): Leverage tasks (10x impact), Neutral tasks (expected value), Overhead tasks (just-enough). Most PMs over-invest in Overhead." |
| "Improve activation" | "Measure activation as the moment users first experience core value. Figma: first shared file. Notion: first workspace with 5+ pages. Not signup, not onboarding completion." |
| "Build growth loops" | "Growth loops, not funnels. Every new user should create output that brings in the next user. Pinterest: Pin → Google index → Search → New user → Pin." |
| "Try different pricing" | "Willingness-to-pay research (Madhavan Ramanujam): ask 4 questions before building. 72% of failed innovations had a pricing problem, not a product problem." |

## How It's Built

This plugin was built by the [Creative Intelligence Agency](https://creativeintel.agency), decomposing 303 episodes into teachable methodologies using Claude Code's skill extraction pipeline. Every framework traces back to a specific episode and specific quotes — nothing is invented or paraphrased beyond what's in the source material.

Source: [Lenny's Podcast](https://www.youtube.com/@LennysPodcast) by Lenny Rachitsky

## Disclaimer

This is an educational tool that organizes information from a public podcast. It is not business, legal, or professional advice. Product decisions depend on your specific context — use these frameworks as input to your judgment, not a substitute for it.

---

Built by [Creative Intelligence Agency](https://creativeintel.agency). See all plugins at [creativeintel.agency/plugins](https://creativeintel.agency/plugins).
