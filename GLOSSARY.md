# Glossary

One-line definitions. Terms are bolded on first use in topic docs. Expand as you study.

## A

- **ACID** — Transaction properties: Atomicity, Consistency, Isolation, Durability.
- **API** — Application Programming Interface; contract for how software communicates.
- **ARIA** — Accessible Rich Internet Applications; attributes that help assistive tech.
- **Amortized analysis** — Average cost per operation over a sequence (e.g. dynamic array growth).
- **Async/await** — Syntax over Promises that makes asynchronous code read synchronously.

## B

- **BFS** — Breadth-first search; explore level by level (queue).
- **Big-O** — Upper bound on how runtime/space grows with input size.
- **Blocking I/O** — Call waits until the operation finishes (vs non-blocking).

## C

- **CAP theorem** — Distributed systems tradeoffs among Consistency, Availability, Partition tolerance.
- **Closure** — Function plus its lexical environment; retains access to outer variables.
- **Coercion** — Implicit or explicit type conversion.
- **Consumer group (Kafka)** — Set of consumers that share work on a topic’s partitions.
- **CORS** — Cross-Origin Resource Sharing; browser rules for cross-site HTTP.

## D

- **DFS** — Depth-first search; explore as deep as possible (stack/recursion).
- **DTO** — Data Transfer Object; shape used across API boundaries.
- **Discriminated union** — Union of objects sharing a literal tag field for narrowing.

## E

- **Encapsulation** — Hiding internal state; expose a controlled interface.
- **Event loop** — JS runtime mechanism that drains queues when the call stack is empty.
- **Executor (Java)** — Abstraction for running tasks on thread pools.

## F

- **First-class function** — Functions can be assigned, passed, and returned like values.
- **Foreign key** — Column referencing a primary key in another table.

## G

- **Garbage collection** — Automatic reclaiming of unreachable memory.
- **Generics** — Type (or Java class) parameters for reusable, type-safe code.
- **GraphQL** — Query language and runtime for APIs with a typed schema.

## H

- **Hash collision** — Two keys map to the same hash bucket.
- **Hoisting** — Declarations processed before execution; `var`/`function` behave differently from `let`/`const`.
- **HTTP** — Hypertext Transfer Protocol; methods, status codes, headers.

## I

- **Idempotent** — Repeating a request has the same effect as doing it once.
- **Interface (Java/TS)** — Contract of methods/shapes without full implementation details.
- **Isolation level** — How transaction concurrency anomalies are controlled in SQL.

## J

- **JDK / JRE / JVM** — Development kit / runtime / virtual machine that runs bytecode.
- **JWT** — JSON Web Token; signed (optionally encrypted) claims for authz/authn.

## K

- **Kafka** — Distributed event streaming platform (topics, partitions, offsets).

## L

- **Lexical scope** — Scope determined by where code is written, not where it is called.
- **Load balancer** — Distributes traffic across instances.

## M

- **Macrotask** — Event-loop task like `setTimeout`, I/O callbacks (vs microtask).
- **Microtask** — Higher-priority queue: Promise reactions, `queueMicrotask`.
- **Middleware** — Function in a pipeline that can inspect/modify request/response.
- **Mutation (GraphQL)** — Operation that writes/changes data.

## N

- **N+1 problem** — Fetching a list then one query per item; fix with joins/DataLoader.
- **Normalization** — Organizing relational schemas to reduce redundancy.

## O

- **Offset (Kafka)** — Position of a consumer in a partition log.
- **ORM** — Object-Relational Mapper (e.g. Prisma).
- **OWASP** — Open Web Application Security Project; security best-practice guides.

## P

- **Partition (Kafka)** — Ordered log slice of a topic; unit of parallelism.
- **Polymorphism** — Same interface, different implementations.
- **Promise** — Object representing a future completion/failure of an async operation.
- **Prototype chain** — Linked objects JS walks for property lookup.

## R

- **REST** — Architectural style for networked resources (uniform interface, stateless, etc.).
- **Reactive (Vue)** — State that automatically tracks dependencies and updates the view.
- **Resolver (GraphQL)** — Function that returns data for a field.

## S

- **SOLID** — Five OOP design principles (SRP, OCP, LSP, ISP, DIP).
- **SSR / RSC** — Server-side rendering / React Server Components.
- **STAR** — Behavioral answer structure: Situation, Task, Action, Result.
- **Structural typing** — Compatibility by shape (TypeScript), not nominal names.

## T

- **TDZ (Temporal Dead Zone)** — Time from scope entry until `let`/`const` init where access throws.
- **Topic (Kafka)** — Named stream of records.
- **Transaction** — Group of DB operations that commit or roll back together.

## U

- **Utility types (TS)** — Built-ins like `Partial`, `Pick`, `Omit`, `Record`.

## V

- **Vertical vs horizontal scaling** — Bigger machine vs more machines.

## W

- **WCAG** — Web Content Accessibility Guidelines.
- **Wildcard (Java generics)** — `?`, `? extends`, `? super` for flexible generic APIs.

## Other

_Add terms as you encounter them in docs or interviews._

## Expanded terms (curriculum)

- **Access modifier** — Java keyword controlling visibility (`private`, `public`, …).
- **Aggregation pipeline** — MongoDB multi-stage document transformation.
- **Autoboxing** — Java auto-conversion between primitives and wrappers.
- **BSON** — Binary JSON used by MongoDB.
- **Cache-aside** — App loads DB on cache miss and populates cache.
- **Callable** — Java task that returns a value / throws checked exceptions.
- **Composition API** — Vue API style organizing logic with imported functions.
- **Consumer group** — Kafka consumers that share topic partitions.
- **Controlled input** — Form input whose value is owned by framework state.
- **DataLoader** — Batching/caching layer to fix GraphQL N+1.
- **Decorator (Fastify)** — Shared utility attached to a Fastify instance.
- **Discriminated union** — TS union narrowed by a shared literal tag.
- **Encapsulation context (Fastify)** — Plugin boundary for routes/decorators.
- **ExecutorService** — Java API for managing thread pools.
- **httpOnly** — Cookie flag preventing JavaScript access to the cookie.
- **Idempotency key** — Client key making retries safe for non-idempotent APIs.
- **Idempotent** — Repeating an operation has the same effect as once.
- **LEFT JOIN** — SQL join keeping all left rows.
- **Macrotask** — Event-loop task such as setTimeout callbacks.
- **Microtask** — Higher-priority queue: Promise jobs.
- **N+1** — One query for parents plus one per child.
- **Offset** — Kafka consumer position in a partition.
- **Partition** — Ordered log segment of a Kafka topic.
- **PECS** — Producer Extends, Consumer Super (Java wildcards).
- **Pinia** — Official Vue store library.
- **Prisma Client** — Generated typed database client.
- **Private field (#)** — JS class field truly private to the class.
- **Prototype chain** — Linked objects for JS property lookup.
- **reactive / ref** — Vue reactivity primitives.
- **Refresh token** — Long-lived credential used to mint new access tokens.
- **Server Component** — React/Next component that renders on the server by default.
- **SFC** — Single-File Component (`.vue`).
- **Sliding window** — Algorithm pattern on a contiguous range.
- **STAR** — Behavioral answer structure.
- **Structural typing** — Type compatibility by shape (TypeScript).
- **TDZ** — Temporal Dead Zone for `let`/`const`.
- **Type erasure** — Java generics removed at runtime.
- **Utility-first CSS** — Styling via composing small utility classes (Tailwind).
- **v-if / v-show** — Vue conditional render vs CSS toggle.
- **Wildcard (Java)** — `? extends` / `? super` in generics.
