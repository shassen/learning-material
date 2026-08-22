# 03 — Objects, Prototypes & Classes

## 1. Why it matters

JavaScript OOP is **prototype-based**. `class` is mostly syntax sugar. Seniors debug inheritance, `instanceof`, and property lookup via the **prototype chain**.

## 2. Core concepts

### Objects

Objects are key/value maps with a linked prototype. Own vs inherited properties matter for `for...in`, `Object.keys`, and serialization.

Property attributes: writable, enumerable, configurable (`Object.getOwnPropertyDescriptor`).

### Prototypes

Every object has `[[Prototype]]` (accessible via `Object.getPrototypeOf` / `__proto__` legacy). Lookup walks the **prototype chain** until `null`.

```js
const animal = { eat() { return "nom"; } };
const dog = Object.create(animal);
dog.bark = () => "woof";
dog.eat(); // found on animal
```

Constructor functions: `Fn.prototype` is the object assigned as `[[Prototype]]` of instances created with `new Fn()`.

### `class` syntax

```js
class Person {
  #secret = 1; // private field
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hi ${this.name}`;
  }
  static create(name) {
    return new Person(name);
  }
}
class Employee extends Person {
  constructor(name, role) {
    super(name);
    this.role = role;
  }
}
```

Methods live on `.prototype`; fields often on the instance. **Private fields** (`#`) are truly private (not just convention).

### Composition over inheritance

Prefer small objects/functions composed together when inheritance hierarchies get deep. Mixins and delegation are common JS patterns.

## 3. Code examples

```js
function Counter() {
  this.n = 0;
}
Counter.prototype.inc = function () {
  this.n++;
};
const c = new Counter();
c.inc();

// class equivalent
class Counter2 {
  n = 0;
  inc() {
    this.n++;
  }
}
```

```js
Object.create(null); // no prototype — safe dictionary object
```

## 4. Gotchas / interview traps

- Forgetting `new` with constructors (without class) → `this` wrong / accidental globals in sloppy mode.
- Mutating shared prototype state affects all instances.
- `instanceof` fails across realms (iframes) for same “class.”
- Arrow methods on class fields vs prototype methods (memory + `this` tradeoffs).
- `JSON.stringify` drops functions, `undefined`, symbols; prototype methods not serialized.

## 5. Resources

- [MDN: Object prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
- [javascript.info: Prototypes](https://javascript.info/prototypes)
- [MDN: Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

## 6. Self-check

1. **Q:** What is the prototype chain?  
   **A:** Linked list of objects used for property lookup ending at null.

2. **Q:** Where do class methods live by default?  
   **A:** On `ClassName.prototype`.

3. **Q:** What does `Object.create(proto)` do?  
   **A:** Creates object with `[[Prototype]]` set to `proto`.

4. **Q:** Are JS classes “real” classes like Java?  
   **A:** No — sugar over prototypes (with extras like private fields).

5. **Q:** How do private fields differ from `_convention`?  
   **A:** `#` fields are inaccessible outside the class body.

6. **Q:** Why prefer composition?  
   **A:** Avoids brittle deep hierarchies; clearer dependencies.

7. **Q:** Difference `Object.keys` vs `for...in`?  
   **A:** keys = own enumerable; for...in includes enumerable inherited.

8. **Q:** What is `super` for?  
   **A:** Call parent constructor/methods in subclasses.

9. **Q:** `obj.hasOwnProperty` risk?  
   **A:** Can be shadowed; prefer `Object.hasOwn(obj, key)` (modern).

10. **Q:** What is a null-prototype object good for?  
    **A:** Dictionary without inherited keys like `toString`.

## 7. Practice

- `practice/js-ts/exercises/js-objects/`
- Anki: `anki/03-js-objects-oop.tsv`
