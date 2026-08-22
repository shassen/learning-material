# Anki decks

## Import (Anki Desktop)

1. Install [Anki](https://apps.ankiweb.net/).
2. File → Import → select a `.tsv` file from this folder.
3. Ensure fields map as: **Front**, **Back**, **Tags** (files include Anki header directives so this usually auto-detects).
4. Create or select a deck named after the topic (e.g. `JS Core`).
5. Sync with AnkiWeb if you want mobile reviews.

## File format

Each file starts with:

```
#separator:tab
#html:true
#notetype:Basic
#tags column:3
```

Then one card per line: `Question<TAB>Answer<TAB>tags`.

## Which decks to prioritize

| Priority | Decks |
|----------|-------|
| High | `01-js-core`, `02-js-async`, `10-big-o`, `11-data-structures`, `50-java-*`, `42-vue` |
| Medium | SQL, HTTP/REST, auth-jwt, TypeScript |
| As needed | Framework-specific (Express, Fastify, Prisma, Kafka) |

## Regenerating

When Self-check Q&A in a `docs/` topic changes, update the matching `.tsv` so Anki stays in sync.
