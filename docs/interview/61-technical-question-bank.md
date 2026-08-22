# 61 — Technical Question Bank

## 1. Why it matters

Active recall beats re-reading. Drill these aloud weekly; deep-dive via linked topic docs.

## 2. Core concepts

Use this as a checklist. Answer in 2–4 minutes, then code if asked.

## 3. Code examples

N/A — verbal + whiteboard practice.

## 4. Gotchas / interview traps

- Jumping to code without clarifying constraints.
- Not stating Big-O.
- Silent thinking — narrate tradeoffs.
- Ignoring edge cases (empty input, duplicates, overflow).

## 5. Resources

- Topic docs in `docs/`
- [CHEATSHEET.md](../../CHEATSHEET.md)
- [NeetCode roadmap](https://neetcode.io/roadmap)

## 6. Self-check / question bank

### JavaScript / TypeScript

1. Explain `var` / `let` / `const` and the TDZ.
2. What is a closure? Give a real use case.
3. Explain the event loop with microtasks vs macrotasks.
4. How does `this` work? What about arrows?
5. What is structural typing in TypeScript?
6. Discriminated unions — why use them?

### Algorithms / Big-O

7. Time/space of hash map vs array for lookups.
8. Implement two-sum; discuss complexity.
9. Binary search template and off-by-one pitfalls.
10. BFS vs DFS — when each?
11. Explain a sliding window problem you’ve solved.

### SQL / Data

12. INNER vs LEFT JOIN with an example.
13. What is an index and when does it not help?
14. Explain ACID.
15. Prisma N+1 — what is it and how do you fix it?
16. Mongo embed vs reference.

### Backend / Auth / Kafka

17. REST status codes: 401 vs 403 vs 404 vs 429.
18. JWT structure and storage tradeoffs (cookie vs localStorage).
19. Express middleware order — why it matters.
20. Fastify schemas — why bother?
21. GraphQL N+1 and DataLoader.
22. Kafka partitions and consumer groups.

### React / Next / Vue

23. Controlled vs uncontrolled inputs in React.
24. `useEffect` cleanup — examples.
25. Server vs Client Components in Next.js.
26. Vue `ref` vs `reactive`; React → Vue map for `useState`/`useEffect`.
27. Pinia vs React context — when a store?

### Java

28. JDK vs JRE vs JVM.
29. `equals` / `hashCode` contract.
30. `ArrayList` vs `LinkedList`; `HashMap` average complexity.
31. `synchronized` vs `AtomicInteger`.
32. What is dependency injection in Spring?

### System design (junior-senior)

33. Design a URL shortener — API, storage, scaling reads.
34. Where would you put a cache? Invalidation?
35. When introduce a queue/Kafka?

### Behavioral crossover

36. Tell me about a production incident (STAR).
37. Describe mentoring or raising code quality.

## 7. Practice

- Pick **3 questions** each week; answer aloud; then write a 5-line summary.
- Anki: `anki/61-technical-question-bank.tsv` (meta prompts) + topic decks.
