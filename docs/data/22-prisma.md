# 22 — Prisma ORM

## 1. Why it matters

Prisma is your day-to-day Node ORM: schema, migrations, type-safe client, and relation queries — including the **N+1** trap.

## 2. Core concepts

### Schema & migrations
`schema.prisma` defines models/datasources. `prisma migrate` applies SQL migrations; `prisma generate` builds the client.

### Client API
`prisma.user.findMany`, `create`, `update`, `delete`, `upsert`. Nested writes/reads for relations. `$transaction` for multi-step atomicity.

### Relations
`@relation` fields; `include` / `select` control payload shape.

### N+1
Looping `findUnique` per parent row. Fix with `include`, batched queries, or dataloader patterns.


## 3. Code examples

```prisma
model User {
  id    String @id @default(cuid())
  email String @unique
  posts Post[]
}
model Post {
  id     String @id @default(cuid())
  title  String
  userId String
  user   User   @relation(fields: [userId], references: [id])
}
```

```ts
const users = await prisma.user.findMany({ include: { posts: true } });
```


## 4. Gotchas / interview traps

- Forgetting migrate after schema edits.
- Over-fetching with deep includes.
- Long interactive transactions holding connections.
- Using `findMany` + per-item queries (N+1).


## 5. Resources

- [Prisma Docs](https://www.prisma.io/docs)


## 6. Self-check

1. **Q:** What does prisma generate do?  
   **A:** Generates the typed Prisma Client from the schema.

2. **Q:** What is a migration?  
   **A:** Versioned schema change applied to the database.

3. **Q:** How include related posts?  
   **A:** `include: { posts: true }` (or select).

4. **Q:** What is N+1?  
   **A:** 1 query for parents + N queries for children.

5. **Q:** How run multi-step atomically?  
   **A:** `prisma.$transaction([...])` or interactive transaction.

6. **Q:** @unique purpose?  
   **A:** Enforce uniqueness at the DB level.

7. **Q:** upsert meaning?  
   **A:** Update if exists, else create.

8. **Q:** Schema file name?  
   **A:** Typically `schema.prisma`.

9. **Q:** select vs include?  
   **A:** select picks fields; include adds relations (can combine carefully).

10. **Q:** Why type-safe client helps?  
    **A:** Compile-time catching of invalid field access.


## 7. Practice

Add a relation in a throwaway Prisma schema and migrate locally.
