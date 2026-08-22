# 51 — Java OOP

## 1. Why it matters

Daily Java is classes, **interfaces**, inheritance, and access control. Interviews probe `equals`/`hashCode` and polymorphism.

## 2. Core concepts

### Classes & objects

Fields + methods + constructors. `new` allocates an instance. `this` refers to current instance.

### Access modifiers

| Modifier | Class | Package | Subclass | World |
|----------|-------|---------|----------|-------|
| `public` | ✓ | ✓ | ✓ | ✓ |
| `protected` | ✓ | ✓ | ✓ | |
| (default/package) | ✓ | ✓ | | |
| `private` | ✓ | | | |

### Inheritance & polymorphism

`extends` one class; `implements` many interfaces. Overriding methods: same signature; use `@Override`. Dynamic dispatch calls subclass implementation via base reference.

### Abstract classes vs interfaces

- **Abstract class**: can hold state + abstract/concrete methods; single inheritance.
- **Interface**: contract; default/static/private methods allowed (modern Java); multiple implementation.

### equals & hashCode

Equal objects must have equal hash codes. Override both together for use in `HashMap`/`HashSet`. Prefer `Objects.equals` / `Objects.hash`.

## 3. Code examples

```java
public interface Shape {
  double area();
}

public final class Circle implements Shape {
  private final double r;
  public Circle(double r) { this.r = r; }
  @Override public double area() { return Math.PI * r * r; }
}
```

## 4. Gotchas / interview traps

- Forgetting `@Override` and accidentally overloading.
- Mutable keys in HashMap break lookups after mutation.
- Exposing internal mutable collections from getters.
- Diamond problem avoided via single class inheritance + interfaces.

## 5. Resources

- [dev.java Learn](https://dev.java/learn/)
- [Baeldung](https://www.baeldung.com/java-tutorial)

## 6. Self-check

1. **Q:** Can a class extend multiple classes?  
   **A:** No — single inheritance of classes.

2. **Q:** Can it implement multiple interfaces?  
   **A:** Yes.

3. **Q:** private vs protected?  
   **A:** private: same class only; protected: package + subclasses.

4. **Q:** Why override equals and hashCode together?  
   **A:** Hash-based collections require the contract.

5. **Q:** What does @Override do?  
   **A:** Compile-time check you actually override a superclass/interface method.

6. **Q:** Abstract class vs interface (classic)?  
   **A:** Abstract can hold state/constructors; interface is a capability contract (blurred with default methods).

7. **Q:** What is polymorphism here?  
   **A:** Shape ref calling Circle.area() at runtime.

8. **Q:** final class meaning?  
   **A:** Cannot be subclassed.

9. **Q:** final method meaning?  
   **A:** Cannot be overridden.

10. **Q:** Composition in Java?  
    **A:** Fields holding other objects (“has-a”).

## 7. Practice

- Implement `Shape`/`Circle`/`Rectangle` in `practice/java`.
- Anki: `anki/51-oop.tsv`
