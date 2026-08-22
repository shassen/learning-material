# 01 — JavaScript Core

## 1. Why it matters

Every interview and production bug hunt assumes you know **primitives**, scope, **hoisting**, the **Temporal Dead Zone (TDZ)**, **closures**, coercion, and **`this`**. These are the vocabulary of “senior JS.”

## 2. Core concepts

### Primitive types

JavaScript has seven **primitive** types:

| Type | Example | Notes |
|------|---------|--------|
| `string` | `"hi"` | Immutable sequence of UTF-16 code units |
| `number` | `42`, `NaN`, `Infinity` | IEEE-754 float (no int type in core language) |
| `bigint` | `10n` | Arbitrary precision integers |
| `boolean` | `true` / `false` | |
| `undefined` | `undefined` | Default for uninitialized bindings |
| `symbol` | `Symbol("id")` | Unique, often used as non-colliding keys |
| `null` | `null` | Intentional empty; `typeof null === "object"` (legacy quirk) |

Everything else is an **object** (including arrays, functions, dates, maps).

`typeof` quirks: `typeof null === "object"`; `typeof function(){} === "function"` (functions are objects with a special typeof).

### `var` vs `let` vs `const`

| | `var` | `let` | `const` |
|--|-------|-------|---------|
| Scope | Function | Block `{}` | Block `{}` |
| Hoisting | Yes → `undefined` | Yes, but TDZ | Yes, but TDZ |
| Redeclare same scope | Allowed | SyntaxError | SyntaxError |
| Reassign | Yes | Yes | No (binding fixed; object contents can mutate) |

Prefer `const` by default, `let` when reassignment is needed, avoid `var` in modern code.

### Temporal Dead Zone (TDZ)

From the start of a block until a `let`/`const` line runs, accessing that binding throws `ReferenceError`. That window is the **TDZ**.

```js
{
  // TDZ for x
  // console.log(x); // ReferenceError
  let x = 1;
}
```

### Hoisting

Engine processes declarations before executing statements:

- `var` declarations are hoisted and initialized to `undefined`.
- `function` declarations are hoisted fully (name + body) in non-module scripts (careful with blocks).
- `let`/`const` are hoisted into TDZ until initialized.
- `class` declarations are also TDZ-like until evaluated.

### Scope & closures

**Lexical scope**: where you write the function determines which variables it can see.

A **closure** is a function that retains access to its outer lexical environment after that outer function has returned.

```js
function makeCounter() {
  let n = 0;
  return () => ++n;
}
const c = makeCounter();
c(); // 1
c(); // 2
```

Closures power module patterns, React hooks internals, callbacks, and private state.

### Coercion & equality

- **Explicit coercion**: `Number("3")`, `String(3)`, `Boolean(0)`.
- **Implicit coercion**: `"3" * 2` → `6`; `+` with a string concatenates.

Truthy / falsy: falsy values are `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`.

Equality:

- `===` / `!==` — no coercion (except `NaN` is never `===` to itself; use `Number.isNaN` or `Object.is`).
- `==` / `!=` — coerces; avoid in new code (`null == undefined` is true).

`Object.is(a, b)` — same-value equality (`Object.is(NaN, NaN)` is true; distinguishes `+0` and `-0`).

### `this` binding

`this` depends on **how** a function is called (except arrow functions):

| Call style | `this` |
|------------|--------|
| `obj.method()` | `obj` |
| `fn()` (sloppy) | `globalThis` |
| `fn()` (`"use strict"` / modules) | `undefined` |
| `fn.call(x)` / `apply` / `bind` | explicit |
| `new Fn()` | new instance |
| Arrow function | **lexical** `this` from enclosing scope |

## 3. Code examples

```js
// Shadowing & block scope
let x = 1;
{
  let x = 2;
  console.log(x); // 2
}
console.log(x); // 1

// const binding vs mutation
const user = { name: "A" };
user.name = "B"; // ok
// user = {}; // TypeError

// Closure bug with var in loops (classic interview)
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0); // 3,3,3
}
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 0); // 0,1,2
}
```

## 4. Gotchas / interview traps

- `typeof null === "object"`.
- `const` does not freeze objects — use `Object.freeze` (shallow) if needed.
- Accidental globals with assignment without declaration in non-strict mode.
- Method extraction loses `this`: `const f = obj.m; f();`.
- Primitive wrapper boxing: `"hi".toUpperCase()` temporarily boxes to `String`.

## 5. Resources

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [javascript.info — The JavaScript language](https://javascript.info/)
- [MDN: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

## 6. Self-check

1. **Q:** List the seven primitive types.  
   **A:** string, number, bigint, boolean, undefined, symbol, null.

2. **Q:** What is the TDZ?  
   **A:** Period from entering scope until `let`/`const` initialization; access throws ReferenceError.

3. **Q:** Difference between `let` and `var` scope?  
   **A:** `let` is block-scoped; `var` is function-scoped (or global).

4. **Q:** Does `const` make objects immutable?  
   **A:** No — only the binding is fixed; properties can change.

5. **Q:** What is a closure?  
   **A:** A function retaining its outer lexical environment.

6. **Q:** Why prefer `===` over `==`?  
   **A:** `==` coerces types in surprising ways.

7. **Q:** How do arrow functions treat `this`?  
   **A:** Lexically inherited; they do not get their own `this`.

8. **Q:** What does `typeof null` return and why is it weird?  
   **A:** `"object"` — historical bug kept for compatibility.

9. **Q:** Output of `console.log(typeof NaN)`?  
   **A:** `"number"`.

10. **Q:** Fix the classic `var` loop + `setTimeout` bug.  
    **A:** Use `let` in the loop, or an IIFE/`bind` capturing the index.

## 7. Practice

- `practice/js-ts/exercises/js-core/` — implement helpers until tests pass.
- Import Anki deck: `anki/01-js-core.tsv`.
