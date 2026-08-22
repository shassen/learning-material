# 04 — TypeScript

## 1. Why it matters

TypeScript is the default for serious JS codebases. Interviews expect **structural typing**, narrowing, **generics**, and common **utility types**.

## 2. Core concepts

### Structural typing

Compatibility is by **shape**, not by nominal class name (unlike Java). If it has the required properties, it type-checks.

### `interface` vs `type`

- `interface`: object shapes; can **declaration merge**; extends via `extends`.
- `type`: aliases for unions, intersections, mapped/conditional types; no merging.

Both are fine for objects; teams often pick one style and stick to it.

### Narrowing

Control-flow analysis: `typeof`, `instanceof`, equality checks, `in`, custom **type predicates** (`arg is Foo`), and **discriminated unions**.

```ts
type Shape =
  | { kind: "circle"; r: number }
  | { kind: "square"; size: number };

function area(s: Shape) {
  switch (s.kind) {
    case "circle":
      return Math.PI * s.r ** 2;
    case "square":
      return s.size ** 2;
  }
}
```

### Generics

Parameterize types for reuse without `any`:

```ts
function identity<T>(x: T): T {
  return x;
}
function first<T>(arr: T[]): T | undefined {
  return arr[0];
}
```

Constraints: `function len<T extends { length: number }>(x: T)`.

### Utility types

`Partial<T>`, `Required<T>`, `Readonly<T>`, `Pick<T, K>`, `Omit<T, K>`, `Record<K, V>`, `Exclude`, `Extract`, `ReturnType`, `Parameters`.

### Strict mode

Enable `"strict": true` in `tsconfig`. Avoid `any`; prefer `unknown` and narrow. Prefer `never` for exhaustive checks.

## 3. Code examples

```ts
interface User {
  id: string;
  email: string;
}
type UserId = User["id"];

function assertNever(x: never): never {
  throw new Error("unexpected: " + x);
}
```

```ts
async function getJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  return res.json() as Promise<T>; // prefer zod/io-ts in real apps
}
```

## 4. Gotchas / interview traps

- Excess property checks apply to object **literals**, not to variables.
- `enum` vs union of string literals (many codebases prefer unions).
- Type assertions (`as`) bypass checking — use sparingly.
- `interface` merging can surprise you across files.
- Generics defaulting to `{}` / implicit `any` in older configs.

## 5. Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Type-Level TypeScript](https://type-level-typescript.com/)
- [TSConfig Reference](https://www.typescriptlang.org/tsconfig)

## 6. Self-check

1. **Q:** Structural vs nominal typing?  
   **A:** TS is structural (shape); Java is mostly nominal (name/declaration).

2. **Q:** When prefer `type` over `interface`?  
   **A:** Unions, mapped types, aliases that aren’t only object shapes.

3. **Q:** What is a discriminated union?  
   **A:** Union of objects sharing a literal tag field for safe narrowing.

4. **Q:** What does `Partial<T>` do?  
   **A:** Makes all properties optional.

5. **Q:** `unknown` vs `any`?  
   **A:** `unknown` forces narrowing before use; `any` disables checking.

6. **Q:** What is a generic constraint?  
   **A:** `T extends Bound` limiting what `T` can be.

7. **Q:** Why enable `strict`?  
   **A:** Catches nullish and implicit any issues early.

8. **Q:** What is `never` used for?  
   **A:** Impossible values; exhaustive switch checking.

9. **Q:** Does TS exist at runtime?  
   **A:** No — erased when compiling to JS (except emit helpers / enums quirks).

10. **Q:** What is declaration merging?  
    **A:** Multiple `interface` declarations with the same name combine.

## 7. Practice

- Type the exercises in `practice/js-ts` under strict mode.
- Anki: `anki/04-typescript.tsv`
