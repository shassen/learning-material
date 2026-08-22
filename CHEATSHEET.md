# Interview Cheat Sheet

Last-minute condensed review. Details live in `docs/`. Drill Anki for memorization.

## JavaScript

| Topic | Remember |
|-------|----------|
| Primitives | `string`, `number`, `bigint`, `boolean`, `undefined`, `symbol`, `null` |
| `let`/`const` | Block scope; **TDZ** until init; `const` = no rebinding |
| `var` | Function scope; hoisted as `undefined` |
| `==` vs `===` | Prefer `===`; `==` coerces |
| Closures | Inner fn retains outer lexical environment |
| `this` | Call-site dependent; arrows = lexical |
| Event loop | Sync → **microtasks** (Promises) → **macrotasks** (`setTimeout`) |
| Prototypes | Property lookup walks `[[Prototype]]`; `class` is sugar |

## TypeScript

- **Structural typing**; prefer `unknown` over `any`
- Narrow with `typeof`, `in`, equality, **discriminated unions**
- Generics: `function identity<T>(x: T): T`
- Utilities: `Partial`, `Pick`, `Omit`, `Record`, `Required`

## Big-O (common)

| Structure | Access | Search | Insert* | Delete* |
|-----------|--------|--------|---------|---------|
| Array | O(1) | O(n) | O(n) | O(n) |
| Hash map | O(1) avg | O(1) avg | O(1) avg | O(1) avg |
| Balanced BST | O(log n) | O(log n) | O(log n) | O(log n) |

\* end-of-array append amortized O(1). Hash worst case O(n) with collisions.

**Algorithms:** binary search O(log n); efficient sort O(n log n); nested loops O(n²); BFS/DFS O(V+E).

## Patterns

- Two pointers · Sliding window · Binary search · BFS/DFS · Hashing · DP (overlap + optimal substructure)

## HTTP / REST

- Idempotent: GET, PUT, DELETE · POST usually not
- 200 OK · 201 Created · 204 No Content · 400 Bad Request · **401** vs **403** · 404 · 409 · **429** · 5xx
- CORS = browser cross-origin rules

## SQL

- INNER vs LEFT JOIN · `WHERE` before group · `HAVING` after
- Indexes speed reads, cost writes · **ACID**
- Know `EXPLAIN` mentally: seq scan vs index

## Mongo / Prisma

- Embed vs reference by access pattern
- Prisma: `include` to avoid **N+1**; `$transaction` for multi-step

## Auth

- JWT = header.payload.signature — **not encrypted** by default
- Short access TTL + refresh · prefer **httpOnly** cookies vs `localStorage` for XSS
- Pin verify algorithms; check `exp`

## Kafka

- Topic → partitions (ordered logs) · offset · **consumer group** (one member per partition)
- Design for **at-least-once** → idempotent consumers

## React / Next

- Controlled inputs · effect cleanup · list **keys**
- App Router: default **Server Components**; `"use client"` for hooks/DOM
- Don't ship secrets to the client

## Vue (from React)

| React | Vue 3 |
|-------|-------|
| `useState` | `ref` / `reactive` |
| `useEffect` | `watch` / `watchEffect` / `onMounted` |
| JSX | SFC template |
| Context/Redux | provide/inject / **Pinia** |
| React Router | Vue Router |

Remember `.value` on refs in script; `:key` on `v-for`.

## Java (from JS)

| JS | Java |
|----|------|
| `number`/`string` | primitives + `String` (immutable) |
| objects/prototypes | classes + interfaces |
| `===` strings | `equals` for content |
| npm | Maven (`pom.xml`, `mvn test`) |
| Express-ish DI | Spring constructor injection |

- `ArrayList` default List · `HashMap` avg O(1) · override **equals + hashCode** together
- `i++` not atomic → `AtomicInteger` / sync

## Tailwind

Utility-first · `md:` responsive · `hover:` variants · scan `content` paths in config

## Behavioral

**STAR:** Situation → Task → Action → Result (quantify). Prepare 6–8 stories.

## 60-second checklist before an interview

1. One closure + one event-loop example ready
2. Big-O for array/hash/tree on tip of tongue
3. 401 vs 403; JWT storage tradeoff
4. One STAR leadership + one failure story
5. Java: `main`, equals/hashCode, ArrayList/HashMap
6. Vue: ref/reactive + React mapping
