# How to study

## Goal

Become fluent in the stack you already use, learn **Java** and **Vue** deeply enough for work, and be interview-ready: vocabulary, Big-O, algorithms, and system thinking.

## The loop (every topic)

1. **Skim** the outline and Resources section — know where official docs live.
2. **Read** Core concepts slowly. Bold terms go into your mental glossary (and Anki).
3. **Type** the Code examples yourself — do not only read them.
4. **Answer** Self-check without peeking; then check answers.
5. **Import** the matching `anki/<topic>.tsv` deck and do a short daily review.
6. **Code** the linked exercises under `practice/` until tests pass.
7. **Check the box** on the root [README](../README.md) when you can explain the topic out loud in ~5 minutes.

## Spaced repetition (Anki)

- Prefer **short daily** reviews (10–20 min) over marathon weekends.
- Cards are for **definitions, traits, complexities, and names** — not for “write a binary search from scratch.”
- If a card is always easy after week 1, suspend or delete it; keep the hard ones.

## Active recall > passive reading

- Close the doc and write a mini cheat sheet from memory.
- Teach a concept to an imaginary junior (rubber duck).
- For algorithms: solve on paper or a blank editor before looking at solutions.

## Interview mode

- Weekly: pick 3 items from [61-technical-question-bank](interview/61-technical-question-bank.md) and answer out loud.
- Before onsites: [CHEATSHEET.md](../CHEATSHEET.md) + Anki overdue cards only.

## Time boxing (suggested)

| Block | Focus |
|-------|--------|
| Foundations | 2–3 weeks if part-time; do not skip async/event loop |
| Big-O + DS/Algo | Ongoing; 3–5 problems/week |
| Java | Daily until you can write a small CRUD service |
| Vue | Daily until you can rebuild a familiar React page in Vue |
| Stack depth | Fill gaps in SQL, auth, Kafka as needed for roles you apply to |

## When stuck

1. Re-read the Gotchas section of that topic.
2. Follow the official docs link first (not random blogs).
3. Write a failing test in `practice/` that encodes the confusion, then make it pass.
