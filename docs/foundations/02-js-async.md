# 02 — JavaScript Async

## 1. Why it matters

Node servers, browser UIs, and interviews all expect fluency with the **event loop**, **Promises**, **microtasks** vs **macrotasks**, and **async/await** error handling.

## 2. Core concepts

### Call stack

Synchronous frames push/pop on the **call stack**. When it empties, the runtime drains task queues.

### Event loop

Roughly:

1. Run a **macrotask** (script, `setTimeout` callback, I/O, etc.).
2. Drain the **microtask** queue completely (Promise reactions, `queueMicrotask`, `MutationObserver`).
3. Optionally render.
4. Repeat.

**Key interview fact:** Promise `.then` / `await` continuations are microtasks and run *before* the next `setTimeout(0)`.

### Promises

A **Promise** is a placeholder for a future value: `pending` → `fulfilled` or `rejected` (settled once).

```js
const p = new Promise((resolve, reject) => {
  // executor runs sync
  resolve(42);
});
p.then((v) => v + 1).catch((err) => {}).finally(() => {});
```

Chaining: each `.then` returns a new Promise. Throwing or returning a rejected Promise rejects the chain. Returning a value fulfills the next `.then`.

`Promise.all` — fail fast on first reject; `allSettled` — wait for all; `race` — first settle; `any` — first fulfill.

### async/await

`async` functions always return a Promise. `await` pauses the async function, scheduling the rest as a microtask when the awaited Promise settles.

```js
async function load() {
  try {
    const res = await fetch("/api");
    if (!res.ok) throw new Error(res.statusText);
    return await res.json();
  } catch (e) {
    // handles reject + throw
    throw e;
  }
}
```

### Concurrency vs parallelism

JS in a typical browser/Node worker is **concurrent** (interleaved async) on one thread, not parallel CPU work (unless Workers / worker threads). I/O concurrency is the point of the event loop.

## 3. Code examples

```js
console.log("A");
setTimeout(() => console.log("B timeout"), 0);
Promise.resolve().then(() => console.log("C microtask"));
console.log("D");
// Order: A, D, C, B
```

```js
async function sequential() {
  const a = await fetchA();
  const b = await fetchB(); // waits for A
}
async function parallel() {
  const [a, b] = await Promise.all([fetchA(), fetchB()]);
}
```

## 4. Gotchas / interview traps

- Forgetting `await` → you hold a Promise, not the value.
- `async` function without try/catch: rejections become unhandled unless caller awaits/catches.
- Mixing `.then` and `await` carelessly; prefer one style per flow.
- Creating Promises that never settle (hanging).
- `Promise.all` aborts mentally on first failure — use `allSettled` when you need all outcomes.
- Floating promises in React effects without cleanup/abort.

## 5. Resources

- [MDN: Using promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [javascript.info: Event loop](https://javascript.info/event-loop)
- [MDN: async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

## 6. Self-check

1. **Q:** Microtask vs macrotask examples?  
   **A:** Micro: Promise then/await; Macro: setTimeout, setInterval, many I/O callbacks.

2. **Q:** Print order of log + timeout(0) + Promise.then?  
   **A:** sync logs first, then microtask, then timeout.

3. **Q:** Does `async` function return a Promise always?  
   **A:** Yes.

4. **Q:** How do you run independent async work concurrently?  
   **A:** Start both, `await Promise.all([...])`.

5. **Q:** What does `Promise.all` do on first rejection?  
   **A:** Rejects immediately with that error (other Promises still run but result ignored).

6. **Q:** How to handle errors with async/await?  
   **A:** try/catch around await, or `.catch` on the returned Promise.

7. **Q:** Is Node.js single-threaded?  
   **A:** JS execution is one main thread; libuv uses a thread pool for some I/O; Worker Threads exist for CPU.

8. **Q:** What is a floating Promise?  
   **A:** A Promise created/returned without await/catch — errors can be silent.

9. **Q:** `await` on a non-Promise?  
   **A:** Value is wrapped; continues as fulfilled with that value.

10. **Q:** Why might UI feel janky despite async?  
    **A:** Long sync work on the main thread blocks the event loop.

## 7. Practice

- `practice/js-ts/exercises/js-async/`
- Anki: `anki/02-js-async.tsv`
