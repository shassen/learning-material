# 33 — GraphQL

## 1. Why it matters

GraphQL offers typed schemas and flexible queries. Seniors must also handle **N+1**, authz, and caching differences vs REST.

## 2. Core concepts

### Schema
Types, queries, mutations, subscriptions (optional). SDL defines the contract.

### Resolvers
Functions that return field data. Root Query/Mutation resolvers + nested field resolvers.

### Queries vs Mutations
Reads vs writes. Clients ask for exactly the fields they need.

### DataLoader
Batches and caches per-request loads to solve N+1 when resolving relations.

### vs REST
One endpoint vs many resources; over/under-fetching tradeoffs; HTTP caching harder; tooling/schema advantages.

## 3. Code examples

```graphql
type User { id: ID! email: String! posts: [Post!]! }
type Post { id: ID! title: String! }
type Query { user(id: ID!): User }
type Mutation { createPost(title: String!): Post! }
```

## 4. Gotchas / interview traps

- N+1 in naive resolvers.
- Putting authz only at the top level — field-level leaks.
- Giant unrestricted queries (depth/complexity limits needed).
- Treating GraphQL as always better than REST.

## 5. Resources

- [GraphQL Learn](https://graphql.org/learn/)

## 6. Self-check

1. **Q:** Query vs Mutation?  
   **A:** Query reads; Mutation writes.

2. **Q:** What is a resolver?  
   **A:** Function that populates a field's value.

3. **Q:** Why DataLoader?  
   **A:** Batch/cache DB loads to avoid N+1.

4. **Q:** SDL meaning?  
   **A:** Schema Definition Language.

5. **Q:** Over-fetching in REST?  
   **A:** Endpoint returns more fields than client needs.

6. **Q:** Under-fetching?  
   **A:** Need multiple round-trips to compose a view.

7. **Q:** Single endpoint common path?  
   **A:** `/graphql` POST with query string.

8. **Q:** Non-null marker in SDL?  
   **A:** `!`

9. **Q:** Authz challenge?  
   **A:** Must enforce per-field/per-object, not only route-level.

10. **Q:** Caching difficulty vs REST?  
    **A:** POST + arbitrary queries complicate HTTP cache semantics.

## 7. Practice

Write a schema for users/posts and sketch resolvers + where DataLoader helps. Anki: `anki/33-graphql.tsv`.
