# 41 — Next.js

## 1. Why it matters

App Router, Server Components, and data-fetching patterns dominate modern React jobs.

## 2. Core concepts

### App Router
File-system routing under `app/`. `page.tsx`, `layout.tsx`, `loading.tsx`, route handlers.

### Server vs Client Components
Default **Server Components** (RSC) run on server — no hooks/browser APIs. Add `"use client"` for interactivity.

### Data fetching
Fetch in Server Components; cache/revalidate options. Avoid shipping secrets to the client.

### Navigation
`<Link>`, `useRouter` (client), streaming with Suspense.

## 3. Code examples

```tsx
// app/posts/page.tsx (Server Component)
export default async function PostsPage() {
  const posts = await fetch("https://api.example.com/posts", { next: { revalidate: 60 } }).then(r => r.json());
  return <ul>{posts.map((p: any) => <li key={p.id}>{p.title}</li>)}</ul>;
}
```

## 4. Gotchas / interview traps

- Using hooks in Server Components.
- Fetching secrets in client components.
- Confusing Pages Router docs with App Router.
- Over-clienting everything (lose RSC benefits).

## 5. Resources

- [Next.js Docs](https://nextjs.org/docs)

## 6. Self-check

1. **Q:** Default component type in App Router?  
   **A:** Server Component.

2. **Q:** How make a Client Component?  
   **A:** `"use client"` at top of file.

3. **Q:** layout.tsx purpose?  
   **A:** Shared UI wrapping child routes.

4. **Q:** Where put Route Handlers?  
   **A:** `route.ts` in app directory.

5. **Q:** revalidate meaning?  
   **A:** Time-based regeneration of cached fetch/page data.

6. **Q:** Why prefer server fetch for secrets?  
   **A:** Credentials never sent to the browser bundle.

7. **Q:** Link vs <a>?  
   **A:** Link enables client-side navigation prefetching.

8. **Q:** loading.tsx?  
   **A:** Instant loading UI via Suspense boundary.

9. **Q:** Pages Router vs App Router?  
   **A:** Legacy `pages/` vs modern `app/` with RSC.

10. **Q:** Can Server Components use useState?  
    **A:** No.

## 7. Practice

Create a tiny App Router page with a server fetch. Anki: `anki/41-nextjs.tsv`.
