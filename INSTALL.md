# Installing Ask Lenny

## Prerequisites

- [Claude Code](https://docs.anthropic.com/en/docs/claude-code) installed and working

## Installation

```bash
claude install-plugin github:cdeistopened/lenny-wiki
```

Or add the plugin directory manually:

```bash
# From your project directory
claude plugin add /path/to/lennys-wiki/plugin
```

Or add it to your `.claude/settings.json`:

```json
{
  "plugins": [
    "/path/to/lennys-wiki/plugin"
  ]
}
```

## First Question to Try

```
Do I have product-market fit?
```

This routes to the PMF Evaluator — the skill PMs ask about most. It walks you through Sean Ellis's survey test, Rahul Vohra's Superhuman method, and Lenny's own retention benchmarks, then gives you a structured read on where you stand.

## Other Good Starting Questions

- "I need to prioritize my roadmap for next quarter"
- "Should I hire a growth PM or a product PM?"
- "How should I price my B2B SaaS?"
- "Teach me about growth loops"
- "What's the best activation metric for a marketplace?"

## Troubleshooting

- **Skills not showing:** Make sure the plugin path is correct and Claude Code has been restarted
- **Transcripts not found:** The plugin references data in relative paths — ensure the full wiki directory is present
- **Generic answers:** Try invoking a specific skill directly: `/ask-lenny:pmf-evaluator`

## Learn More

Visit [creativeintel.agency](https://creativeintel.agency) for more Ask [Creator] plugins.
