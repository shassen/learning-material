# 31 — Express.js

## 1. Why it matters

Express is the classic Node HTTP framework. Its **middleware** model appears across the ecosystem.

## 2. Core concepts

### Routing
`app.get/post/put/patch/delete(path, handlers...)`. Router modules for modular APIs.

### Middleware
Functions `(req, res, next) => {}` that can read/modify request/response and call `next()` or end the response. Order matters.

### Error handling
Central error middleware `(err, req, res, next)`. Async errors must be forwarded (`next(err)` or wrappers).

### Common patterns
`express.json()` body parser, static files, auth middleware, validation, helmet for headers.

## 3. Code examples

```js
import express from "express";
const app = express();
app.use(express.json());
app.get("/health", (_req, res) => res.json({ ok: true }));
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: "internal" });
});
```

## 4. Gotchas / interview traps

- Middleware order bugs (auth after route).
- Unhandled async rejection crashing or hanging.
- Mutating `req` without clear conventions.
- Giant `app.js` without routers.

## 5. Resources

- [Express routing guide](https://expressjs.com/en/guide/routing.html)

## 6. Self-check

1. **Q:** What is middleware?  
   **A:** Pipeline function that can handle req/res and call next.

2. **Q:** Why does order matter?  
   **A:** Earlier middleware runs first; can block later handlers.

3. **Q:** How mount a router?  
   **A:** `app.use("/api", router)`.

4. **Q:** express.json purpose?  
   **A:** Parse JSON request bodies.

5. **Q:** Signature of error middleware?  
   **A:** Four args: err, req, res, next.

6. **Q:** How end a response?  
   **A:** `res.send/json/status/...` without calling next.

7. **Q:** What is next()?  
   **A:** Pass control to the next middleware.

8. **Q:** Static files helper?  
   **A:** `express.static`.

9. **Q:** Common auth pattern?  
   **A:** Middleware verifying JWT/session then `next()`.

10. **Q:** Risk of missing next(err)?  
    **A:** Hung requests or unhandled rejections.

## 7. Practice

Build a tiny REST API with one authenticated route. Anki: `anki/31-express.tsv`.
