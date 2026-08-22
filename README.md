# Senior Programmer Study Guide

A structured curriculum to deepen JavaScript/TypeScript, databases, APIs, React/Next, and to learn **Java** and **Vue** from scratch — with Anki decks for terminology and runnable practice for muscle memory.

## How to use this repo

1. Read [docs/00-how-to-study.md](docs/00-how-to-study.md) once.
2. Follow the roadmap below in order (foundations → CS → Java → Vue → stack depth → interview).
3. For each topic: read the doc → do the **Self-check** → import the matching Anki deck → run the practice exercises.
4. Use [CHEATSHEET.md](CHEATSHEET.md) for last-minute interview review.
5. Look up bolded terms in [GLOSSARY.md](GLOSSARY.md).

**Flashcards vs practice:** Anki (`anki/`) is for facts and terms (Big-O values, HTTP codes, Java collection traits). Runnable code (`practice/`) is for skills you must *do* — closures, promises, algorithms, Vue components.

## Roadmap & progress

### Phase 0 — Study method
- [ ] [How to study](docs/00-how-to-study.md)

### Phase 1 — Foundations
- [ ] [01 JS Core](docs/foundations/01-js-core.md)
- [ ] [02 JS Async](docs/foundations/02-js-async.md)
- [ ] [03 JS Objects & Prototypes](docs/foundations/03-js-objects-oop.md)
- [ ] [04 TypeScript](docs/foundations/04-typescript.md)
- [ ] [05 HTML & Accessibility](docs/foundations/05-html-a11y.md)
- [ ] [06 CSS Layout & Cascade](docs/foundations/06-css-layout.md)
- [ ] [07 OOP Principles & SOLID](docs/foundations/07-oop-principles.md)

### Phase 2 — CS fundamentals
- [ ] [10 Big-O](docs/cs-fundamentals/10-big-o.md)
- [ ] [11 Data Structures](docs/cs-fundamentals/11-data-structures.md)
- [ ] [12 Algorithms](docs/cs-fundamentals/12-algorithms.md)
- [ ] [13 System Design Basics](docs/cs-fundamentals/13-system-design-basics.md)

### Phase 3 — Java (from scratch)
- [ ] [50 Java Fundamentals](docs/java/50-fundamentals.md)
- [ ] [51 Java OOP](docs/java/51-oop.md)
- [ ] [52 Collections & Generics](docs/java/52-collections-generics.md)
- [ ] [53 Concurrency](docs/java/53-concurrency.md)
- [ ] [54 Ecosystem (Maven / Spring / JUnit)](docs/java/54-ecosystem.md)

### Phase 4 — Vue (from scratch)
- [ ] [42 Vue](docs/frontend/42-vue.md)

### Phase 5 — Data & backend & remaining frontend
- [ ] [20 SQL](docs/data/20-sql.md)
- [ ] [21 NoSQL / MongoDB](docs/data/21-nosql-mongodb.md)
- [ ] [22 Prisma](docs/data/22-prisma.md)
- [ ] [30 HTTP & REST](docs/backend/30-http-rest.md)
- [ ] [31 Express](docs/backend/31-express.md)
- [ ] [32 Fastify](docs/backend/32-fastify.md)
- [ ] [33 GraphQL](docs/backend/33-graphql.md)
- [ ] [34 Auth & JWT](docs/backend/34-auth-jwt.md)
- [ ] [35 Kafka](docs/backend/35-kafka.md)
- [ ] [40 React](docs/frontend/40-react.md)
- [ ] [41 Next.js](docs/frontend/41-nextjs.md)
- [ ] [43 Tailwind CSS](docs/frontend/43-tailwind.md)

### Phase 6 — Interview
- [ ] [60 Behavioral / STAR](docs/interview/60-behavioral-star.md)
- [ ] [61 Technical Question Bank](docs/interview/61-technical-question-bank.md)
- [ ] [CHEATSHEET.md](CHEATSHEET.md) (final review)
- [ ] [GLOSSARY.md](GLOSSARY.md) (fill gaps as you go)

## Practice projects

| Path | Stack | Purpose |
|------|--------|---------|
| [practice/js-ts](practice/js-ts) | Vitest + TypeScript | JS/TS/algorithms exercises |
| [practice/java](practice/java) | Maven + JUnit 5 | Java from scratch drills |
| [practice/vue](practice/vue) | Vite + Vue 3 | Vue Composition API scratch app |

## Anki decks

See [anki/README.md](anki/README.md). One `.tsv` per topic; import into Anki Desktop.

## Repo layout

```
docs/          topic guides (standard 7-section template)
anki/          Anki-importable TSV decks
practice/      runnable exercises
CHEATSHEET.md  condensed interview review
GLOSSARY.md    A–Z industry terms
```
