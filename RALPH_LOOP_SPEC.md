# Lenny's Podcast Wiki - Ralph Loop Spec

**Goal:** Transform 303 Lenny's Podcast transcripts into an Obsidian-style interlinked encyclopedia with GraphRAG vectorization.

**Runtime:** Overnight (~8 hours)
**Executor:** Claude subagents (haiku for extraction, sonnet for polish/schema)

---

## Source Material

```
Source: /lennys-podcast-transcripts/episodes/
├── 303 guest folders
│   └── transcript.md (YAML frontmatter + full transcript)
└── Keywords already tagged in YAML
```

**Sample episode structure:**
- Guest name, title, YouTube URL, video_id
- Keywords: growth, metrics, leadership, hiring, etc.
- Full transcript with timestamps

---

## Phase 1: Schema Discovery (Sonnet, ~30 min)

**Task:** Analyze existing keywords + sample 20 episodes to define Lenny's unique "shape"

**Input:** All YAML frontmatter keywords aggregated
**Output:** `schema.json` with domain hierarchy

**Expected domains for Lenny (hypothesis):**
```
domains/
├── product/          # PM craft, roadmaps, prioritization, PRDs
├── growth/           # Acquisition, retention, activation, metrics
├── leadership/       # Management, culture, hiring, 1:1s
├── strategy/         # Vision, positioning, competition, moats
├── career/           # Job search, networking, personal brand
└── startups/         # Fundraising, PMF, scaling, pivots
```

**Success Criteria:**
- [ ] 5-7 top-level domains identified
- [ ] Each domain has 8-15 sub-topics
- [ ] Schema covers 90%+ of keyword occurrences
- [ ] Human approves schema before proceeding

**Checkpoint:** `lennys-wiki/checkpoints/phase1_schema.json`

---

## Phase 2: Semantic Chunking (Haiku, ~4 hours)

**Task:** For each episode, identify chapters/segments with topic boundaries

**Prompt pattern (adapted from Huberman):**
```
Analyze this Lenny's Podcast transcript to segment it into semantic chunks.

Lenny's episodes typically follow patterns like:
- Guest intro and background
- Core topic deep-dive
- Tactical frameworks and advice
- Stories and examples
- Lightning round / rapid fire
- Takeaways and wrap-up

Divide into chunks of 500-1500 words based on TOPIC CHANGES.
Return JSON array with:
- chunk_index
- topic_title
- topic_type: intro|framework|story|tactical|qa|summary
- key_concepts: []
- content: (verbatim transcript)
- start_timestamp, end_timestamp
- word_count
```

**Success Criteria:**
- [ ] 303 episodes chunked
- [ ] Average 8-15 chunks per episode
- [ ] Each chunk has topic_title and key_concepts
- [ ] Chunks saved to `chunks/{guest-name}.json`

**Checkpoint:** `lennys-wiki/checkpoints/phase2_chunks/` (one file per episode)

**Rate limiting:**
- 5 episodes per batch
- 10 second delay between batches
- Resume from last checkpoint on restart

---

## Phase 3: Entity Extraction (Haiku, ~3 hours)

**Task:** Extract structured entities from each chunk

**Entities to extract:**
```json
{
  "people": ["Brian Chesky", "Satya Nadella"],
  "companies": ["Airbnb", "Stripe", "Spotify"],
  "frameworks": ["RICE scoring", "Jobs to be Done", "North Star Metric"],
  "concepts": ["product-market fit", "activation rate", "time to value"],
  "books": ["Inspired", "Crossing the Chasm"],
  "tools": ["Amplitude", "Mixpanel", "Linear"],
  "quotes": ["memorable quote with attribution"],
  "advice": ["tactical advice nugget"]
}
```

**Success Criteria:**
- [ ] All chunks have entity extraction
- [ ] Entity JSON saved to `extracted/{guest-name}.json`
- [ ] Entity index aggregated: `entities/people.json`, `entities/frameworks.json`, etc.

**Checkpoint:** `lennys-wiki/checkpoints/phase3_entities/`

---

## Phase 4: Wiki Generation (No AI, ~10 min)

**Task:** Generate Obsidian markdown pages with wikilinks

**Output structure:**
```
lennys-wiki/content/
├── index.md                    # Homepage
├── domains/
│   ├── product.md             # Domain hub page
│   ├── growth.md
│   └── ...
├── frameworks/
│   ├── rice-scoring.md        # Framework page with quotes from episodes
│   ├── jobs-to-be-done.md
│   └── ...
├── people/
│   ├── brian-chesky.md        # Guest page with all their appearances
│   └── ...
├── companies/
│   ├── airbnb.md              # Company page with all mentions
│   └── ...
└── episodes/
    ├── brian-chesky.md        # Episode index with chapter links
    └── ...
```

**Page template (framework example):**
```markdown
---
type: framework
title: RICE Scoring
aliases: [RICE, RICE framework, RICE prioritization]
domain: product
episodes: [brian-chesky, gustav-soderstrom]
---

# RICE Scoring

> "Quote from episode defining or explaining RICE" — [[Brian Chesky]]

## What It Is
[Generated definition based on extracted content]

## Key Episodes
- [[episodes/brian-chesky|Brian Chesky]] discusses RICE in context of...
- [[episodes/gustav-soderstrom|Gustav Söderström]] mentions RICE for...

## Related
- [[frameworks/ice-scoring|ICE Scoring]]
- [[concepts/prioritization]]
```

**Success Criteria:**
- [ ] All extracted entities have wiki pages
- [ ] Pages interlinked with [[wikilinks]]
- [ ] Domain hub pages aggregate sub-topics
- [ ] Episode pages link to chunks/chapters

---

## Phase 5: Vector Embeddings (Background, ~1 hour)

**Task:** Embed all chunks for semantic search

**Approach:**
- Use OpenAI text-embedding-3-small (or local model)
- Store in Qdrant (local or cloud)
- Include metadata: episode, guest, domain, timestamp

**Success Criteria:**
- [ ] All chunks embedded (~3000 vectors estimated)
- [ ] Qdrant collection created: `lennys-podcast`
- [ ] Search API working: query → relevant chunks

---

## Ralph Loop Execution Plan

### Night 1 Run Order:

```
20:00  Phase 1: Schema Discovery (manual approval required)
20:30  CHECKPOINT: Await human approval of schema
21:00  Phase 2: Start semantic chunking (303 episodes)
        - Batch size: 5
        - Delay: 10s between batches
        - Checkpoint every 10 episodes
01:00  Phase 2 complete
01:00  Phase 3: Start entity extraction
        - Process chunks in parallel (3 workers)
        - Checkpoint every 20 episodes
04:00  Phase 3 complete
04:00  Phase 4: Wiki generation (fast, no AI)
04:10  Phase 5: Vector embedding (background)
05:00  COMPLETE

Total: ~9 hours overnight
```

### Resume Strategy:

Each phase checks for existing checkpoints:
```python
def should_process(episode_id, checkpoint_dir):
    checkpoint_file = checkpoint_dir / f"{episode_id}.json"
    return not checkpoint_file.exists()
```

### Error Handling:

- Log errors to `lennys-wiki/logs/errors.log`
- Skip failed episodes, continue batch
- Retry failed episodes in separate pass
- Alert if >10% failure rate

---

## File Structure

```
lennys-wiki/
├── RALPH_LOOP_SPEC.md          # This file
├── schema.json                  # Phase 1 output
├── checkpoints/
│   ├── phase1_schema.json
│   ├── phase2_chunks/
│   │   ├── brian-chesky.json
│   │   └── ...
│   └── phase3_entities/
│       ├── brian-chesky.json
│       └── ...
├── entities/                    # Aggregated entity indices
│   ├── people.json
│   ├── companies.json
│   ├── frameworks.json
│   └── concepts.json
├── content/                     # Generated wiki pages
│   ├── index.md
│   ├── domains/
│   ├── frameworks/
│   ├── people/
│   ├── companies/
│   └── episodes/
└── logs/
    ├── progress.log
    └── errors.log
```

---

## Success Metrics (End of Loop)

| Metric | Target |
|--------|--------|
| Episodes processed | 303/303 (100%) |
| Chunks created | ~2500-4500 |
| Entities extracted | ~5000+ unique |
| Wiki pages generated | ~500-1000 |
| Vector embeddings | All chunks |
| Interlinks per page | 5-15 average |
| Orphan pages | 0 |

---

## To Start the Loop

```bash
# From Claude Code with --dangerously-skip-permissions
# Or run the ralph-loop skill

/ralph-loop

# Phase 1 will run first, then pause for schema approval
# After approval, phases 2-5 run autonomously overnight
```

---

*Created: 2025-01-14*
*Status: Ready for execution*
