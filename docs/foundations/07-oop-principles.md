# 07 — OOP Principles & SOLID

## 1. Why it matters

**OOP** vocabulary and **SOLID** show up in Java interviews, design reviews, and “how would you structure this?” conversations — across TS and Java.

## 2. Core concepts

### Four pillars

| Pillar | Meaning |
|--------|---------|
| **Encapsulation** | Bundle data + behavior; hide internals |
| **Abstraction** | Expose essential interface; hide details |
| **Inheritance** | Reuse/specialize via subtype relationships |
| **Polymorphism** | Same interface, different implementations |

### SOLID

1. **S — Single Responsibility**: one reason to change per module/class.
2. **O — Open/Closed**: open for extension, closed for modification (often via interfaces/strategies).
3. **L — Liskov Substitution**: subtypes must be usable wherever the base type is expected.
4. **I — Interface Segregation**: many specific interfaces > one fat interface.
5. **D — Dependency Inversion**: depend on abstractions, not concretions; high-level policy shouldn’t depend on low-level details.

### Composition

Prefer **composition** (“has-a”) over deep inheritance (“is-a”) when behavior is mix-and-match.

### Design patterns (awareness)

Know names: Factory, Strategy, Observer, Adapter, Singleton (use sparingly), Repository. Study via [Refactoring Guru](https://refactoring.guru/design-patterns).

## 3. Code examples

```ts
// Dependency Inversion sketch
interface Mailer {
  send(to: string, body: string): Promise<void>;
}
class UserService {
  constructor(private mailer: Mailer) {}
  async welcome(email: string) {
    await this.mailer.send(email, "Welcome");
  }
}
```

```ts
// Strategy for Open/Closed
type PriceRule = (cents: number) => number;
const nightDiscount: PriceRule = (c) => Math.floor(c * 0.9);
function checkout(cents: number, rule: PriceRule) {
  return rule(cents);
}
```

## 4. Gotchas / interview traps

- God classes violating SRP.
- Inheritance for code reuse when composition fits better.
- LSP violations (subclass throws on methods parent guarantees).
- Singleton everywhere as hidden global state.
- Over-engineering patterns into tiny scripts.

## 5. Resources

- [Refactoring Guru: Design Patterns](https://refactoring.guru/design-patterns)
- [SOLID (Wikipedia)](https://en.wikipedia.org/wiki/SOLID)
- Continue in Java docs (`docs/java/51-oop.md`) for language-specific application.

## 6. Self-check

1. **Q:** Name the four OOP pillars.  
   **A:** Encapsulation, Abstraction, Inheritance, Polymorphism.

2. **Q:** What does SRP mean?  
   **A:** A class/module should have one reason to change.

3. **Q:** Liskov Substitution in one sentence?  
   **A:** Subtypes must honor the base type’s contract.

4. **Q:** Dependency Inversion?  
   **A:** Depend on abstractions; invert ownership of interfaces.

5. **Q:** Composition vs inheritance?  
   **A:** Compose behaviors by holding collaborators vs extending a parent class.

6. **Q:** Interface Segregation smell?  
   **A:** Clients forced to depend on methods they don’t use.

7. **Q:** Open/Closed example technique?  
   **A:** Plugin/strategy/interface extension without editing core switchboards.

8. **Q:** Polymorphism example?  
   **A:** Multiple classes implementing `pay()` differently via one interface.

9. **Q:** When is Singleton harmful?  
   **A:** Hidden mutable global makes testing and concurrency hard.

10. **Q:** Encapsulation vs Abstraction?  
    **A:** Encapsulation hides state/implementation; abstraction models essential concepts/interfaces.

## 7. Practice

- Refactor a “god” service into smaller types in TS or Java practice folders.
- Anki: `anki/07-oop-principles.tsv`
