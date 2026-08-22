# 30 — HTTP & REST

## 1. Why it matters

HTTP semantics and REST resource design are the baseline for APIs, debugging, and interviews.

## 2. Core concepts

### Methods
- **GET**: read (safe, idempotent)
- **POST**: create/action (not idempotent in general)
- **PUT**: replace (idempotent)
- **PATCH**: partial update
- **DELETE**: remove (idempotent)

### Status codes
- **2xx** success (`200`, `201`, `204`)
- **4xx** client (`400`, `401`, `403`, `404`, `409`, `429`)
- **5xx** server (`500`, `502`, `503`)

**401** unauthenticated vs **403** authenticated but forbidden.

### REST constraints (practical)
Resource-oriented URLs, stateless requests, uniform interface, JSON representations common. HATEOAS rarely fully applied.

### Headers & CORS
`Authorization`, `Content-Type`, caching headers. **CORS** is a browser security feature for cross-origin requests.

### Idempotency
Repeating the same request has the same effect — critical for retries and payments (idempotency keys).

## 3. Code examples

```http
POST /api/orders HTTP/1.1
Content-Type: application/json
Idempotency-Key: 6f1c...

{"sku":"abc","qty":1}
```

## 4. Gotchas / interview traps

- Using GET for state-changing actions.
- Returning 200 for created resources instead of 201.
- Confusing 401 and 403.
- Ignoring CORS preflight (`OPTIONS`).

## 5. Resources

- [MDN HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [OWASP Cheat Sheets](https://cheatsheetseries.owasp.org/)

## 6. Self-check

1. **Q:** Which methods are idempotent?  
   **A:** GET, PUT, DELETE (and usually HEAD/OPTIONS); POST generally not.

2. **Q:** 401 vs 403?  
   **A:** 401 = not authenticated; 403 = not allowed.

3. **Q:** 201 meaning?  
   **A:** Created.

4. **Q:** What is CORS?  
   **A:** Browser-enforced cross-origin request policy.

5. **Q:** Safe method meaning?  
   **A:** Should not change server state (GET/HEAD).

6. **Q:** Why Idempotency-Key?  
   **A:** Safe client retries without duplicate side effects.

7. **Q:** 429 meaning?  
   **A:** Too Many Requests (rate limited).

8. **Q:** Stateless REST meaning?  
   **A:** Each request carries what the server needs; no server session required (often).

9. **Q:** PATCH vs PUT?  
   **A:** PATCH partial; PUT replace entire resource.

10. **Q:** 204 meaning?  
    **A:** Success with no response body.

## 7. Practice

Design a todos REST API with correct verbs/codes. Anki: `anki/30-http-rest.tsv`.
