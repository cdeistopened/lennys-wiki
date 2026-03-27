# Frameworks

This directory will contain individual framework guides extracted from the Lenny's Podcast archive.

Each framework file will follow the skill-article dual format:
- YAML frontmatter with `name`, `description`, `type: framework`, `domain`, `episodes`, `source_guests`
- Imperative skill body: "When to Use" > Steps with source quotes > "Output" section
- Works as both a readable article and a downloadable Claude skill file

## Production Plan

1. Run archive decomposer across 303 transcripts to identify named frameworks
2. Group frameworks by shared source episodes for batch writing
3. Write each framework article with real quotes and real episode references
4. Add to `by-framework.md` index
