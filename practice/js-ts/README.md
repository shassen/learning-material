# JS / TypeScript Practice

Vitest + TypeScript exercises for foundations and algorithms.

## Setup

```bash
cd practice/js-ts
npm install
npm test
```

## Layout

- `src/` — small helpers with passing smoke tests
- `exercises/` — topic drills; implement until tests pass

## Workflow

1. Open a failing or incomplete exercise.
2. Run `npm test` or `npm run test:watch`.
3. Make tests green without deleting assertions.

## Note on exercises

Files under `exercises/` intentionally throw `not implemented` until you solve them.
Run a single file while learning:

```bash
npx vitest run exercises/algorithms/twoSum.test.ts
```

Smoke tests under `src/` should always pass (`npm test` will fail until exercises are solved — use path filters).
