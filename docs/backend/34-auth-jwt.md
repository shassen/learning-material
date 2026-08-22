# 34 — Auth & JWT

## 1. Why it matters

Auth bugs are critical security issues. Interviews love **JWT vs sessions**, storage choices, and OWASP pitfalls.

## 2. Core concepts

### Authn vs authz
Authentication = who you are. Authorization = what you can do.

### Sessions vs tokens
- **Server sessions**: session id in cookie; server stores session.
- **JWT**: self-contained signed claims; server verifies signature/exp.

### JWT structure
`header.payload.signature` (Base64url). Payload is *not* encrypted by default — do not put secrets there.

### Signing
HMAC (`HS256`) with shared secret or asymmetric (`RS256`) with key pair. Verify `exp`, `iss`, `aud` as applicable.

### Refresh tokens
Short-lived access token + longer-lived refresh (rotated, revocable storage). Mitigates XSS token theft window.

### Browser storage
Prefer **httpOnly** Secure cookies over `localStorage` for tokens when XSS is a threat. CSRF defenses needed for cookies.

## 3. Code examples

```js
import jwt from "jsonwebtoken";
const token = jwt.sign({ sub: userId }, process.env.JWT_SECRET, { expiresIn: "15m" });
const payload = jwt.verify(token, process.env.JWT_SECRET);
```

## 4. Gotchas / interview traps

- Sensitive data in JWT payload.
- No expiry / no revocation strategy.
- `algorithm` confusion attacks — pin allowed algorithms.
- XSS stealing tokens from localStorage.
- Confusing 401/403 in API responses.

## 5. Resources

- [jwt.io Introduction](https://jwt.io/introduction)
- [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)

## 6. Self-check

1. **Q:** Authn vs authz?  
   **A:** Identity vs permissions.

2. **Q:** JWT parts?  
   **A:** header, payload, signature.

3. **Q:** Is JWT payload encrypted by default?  
   **A:** No — only signed (unless using JWE).

4. **Q:** Why short access token TTL?  
   **A:** Limits damage if stolen.

5. **Q:** Refresh token purpose?  
   **A:** Obtain new access tokens without re-login; can be revoked.

6. **Q:** httpOnly cookie benefit?  
   **A:** Not readable by JavaScript (mitigates XSS token theft).

7. **Q:** CSRF concern with cookies?  
   **A:** Browser auto-sends cookies — need CSRF tokens/SameSite.

8. **Q:** HS256 vs RS256?  
   **A:** Shared secret vs public/private key pair.

9. **Q:** What to verify besides signature?  
   **A:** exp, and often iss/aud.

10. **Q:** Session advantage?  
    **A:** Server-side revocation is straightforward.

## 7. Practice

Sketch issue/verify JWT middleware; list XSS/CSRF tradeoffs. Anki: `anki/34-auth-jwt.tsv`.
