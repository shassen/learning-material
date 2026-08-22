# 32 — Fastify

## 1. Why it matters

Fastify is a high-performance alternative to Express with first-class **JSON Schema** validation and a strong plugin model.

## 2. Core concepts

### Plugins & encapsulation
`fastify.register(plugin)` creates an encapsulation context for decorators/routes — safer modularity than a flat Express app.

### Hooks
Lifecycle hooks (`onRequest`, `preHandler`, `onResponse`, …) similar to middleware but structured.

### Schemas
Declare request/response schemas for validation and serialization speed.

### Decorators
`fastify.decorate("db", db)` to share utilities within scope.

## 3. Code examples

```js
const fastify = require("fastify")({ logger: true });
fastify.post("/user", {
  schema: {
    body: {
      type: "object",
      required: ["email"],
      properties: { email: { type: "string", format: "email" } },
    },
  },
}, async (req) => ({ ok: true, email: req.body.email }));
```

## 4. Gotchas / interview traps

- Expecting Express middleware to drop in unchanged.
- Breaking encapsulation by decorating the wrong scope.
- Forgetting schema → weaker validation/perf benefits.

## 5. Resources

- [Fastify Docs](https://fastify.dev/docs/latest/)

## 6. Self-check

1. **Q:** Fastify vs Express headline difference?  
   **A:** Schema-based validation/serialization and plugin encapsulation; often faster.

2. **Q:** What does register do?  
   **A:** Loads a plugin in an encapsulated context.

3. **Q:** Why JSON Schema?  
   **A:** Validate inputs and accelerate output serialization.

4. **Q:** What is a hook?  
   **A:** Lifecycle callback around request handling.

5. **Q:** decorate purpose?  
   **A:** Attach shared utilities to the Fastify instance.

6. **Q:** Async handlers supported?  
   **A:** Yes — return values/Promise rejections handled.

7. **Q:** Logger built-in?  
   **A:** Yes (Pino-based).

8. **Q:** Encapsulation benefit?  
   **A:** Prevents accidental cross-module leakage of decorators/routes.

9. **Q:** preHandler use case?  
   **A:** Auth/validation before the route handler.

10. **Q:** Can you migrate gradually from Express?  
    **A:** Often yes, route by route, but middleware isn't 1:1.

## 7. Practice

Port a simple Express JSON route to Fastify with a body schema. Anki: `anki/32-fastify.tsv`.
