# 50 — Java Fundamentals

## 1. Why it matters

You need Java **from scratch** for work soon. Start with the **JVM/JDK**, types, control flow, arrays, `String`, and `main`.

## 2. Core concepts

### JDK / JRE / JVM

- **JVM**: runs bytecode (`.class`) — “write once, run anywhere.”
- **JRE**: JVM + standard libs to *run* apps.
- **JDK**: JRE + compiler (`javac`) and tools to *build* apps.

### Entry point

```java
public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello");
  }
}
```

`public` class name must match the file name (`HelloWorld.java`).

### Primitives vs references

Primitives: `byte short int long float double char boolean`.  
Everything else is a **reference type** (objects). Generics cannot use primitives directly (use wrappers: `Integer`, `Boolean`, …). Autoboxing converts between them.

Default values: fields get 0/`false`/`null`; local variables must be assigned before use.

### Control flow

`if/else`, `switch` (including modern switch expressions), `for`, enhanced `for`, `while`, `do-while`, `break`/`continue`.

### Arrays & Strings

```java
int[] xs = {1, 2, 3};
String s = "hi"; // immutable
```

`String` intern pool; prefer `equals` not `==` for content. `StringBuilder` for heavy concatenation in loops.

### Packages & imports

`package com.learning;` at top; `import java.util.List;`.

## 3. Code examples

```java
public class FizzBuzz {
  public static String fizzBuzz(int n) {
    if (n % 15 == 0) return "FizzBuzz";
    if (n % 3 == 0) return "Fizz";
    if (n % 5 == 0) return "Buzz";
    return Integer.toString(n);
  }
}
```

## 4. Gotchas / interview traps

- `==` on objects compares references; use `equals`.
- Integer caching for small values can make `==` “accidentally” work — don’t rely on it.
- Primitives can’t be `null`; wrappers can → NPE on unboxing.
- Array length is `.length`; `String` uses `.length()`.

## 5. Resources

- [dev.java Learn](https://dev.java/learn/)
- [Oracle Java Tutorials](https://docs.oracle.com/javase/tutorial/)
- [Baeldung Java tutorial](https://www.baeldung.com/java-tutorial)

## 6. Self-check

1. **Q:** JDK vs JRE vs JVM?  
   **A:** JDK builds; JRE runs; JVM executes bytecode.

2. **Q:** Signature of program entry?  
   **A:** `public static void main(String[] args)`.

3. **Q:** Primitive for true/false?  
   **A:** `boolean`.

4. **Q:** Are Strings mutable?  
   **A:** No.

5. **Q:** How compare string content?  
   **A:** `equals` (or `Objects.equals`).

6. **Q:** What is autoboxing?  
   **A:** Auto conversion between primitives and wrapper types.

7. **Q:** Local variable default?  
   **A:** None — must assign before read.

8. **Q:** Array length property?  
   **A:** `arr.length` (field, not method).

9. **Q:** Why StringBuilder?  
   **A:** Efficient mutable concatenation.

10. **Q:** File name rule for public class?  
    **A:** Must match the public class name.

## 7. Practice

- `practice/java` — `HelloWorld`, then `FizzBuzz` exercise.
- Anki: `anki/50-fundamentals.tsv`
- Install JDK 17+ and Maven, then `mvn test`.
