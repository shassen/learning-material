# 52 — Collections & Generics

## 1. Why it matters

Choosing `List`/`Set`/`Map` and using **generics** correctly is everyday Java and a frequent interview topic.

## 2. Core concepts

### Core interfaces

- `List` — ordered, duplicates: `ArrayList` (random access), `LinkedList` (rare need).
- `Set` — unique: `HashSet`, `LinkedHashSet`, `TreeSet` (sorted).
- `Map` — key→value: `HashMap`, `LinkedHashMap`, `TreeMap`.

### Complexity reminders

| | get/contains | add |
|--|--------------|-----|
| ArrayList | O(1) index / O(n) contains | amortized O(1) end |
| HashMap | average O(1) | average O(1) |
| TreeMap | O(log n) | O(log n) |

### Generics

```java
List<String> names = new ArrayList<>();
public static <T> T first(List<T> list) {
  return list.isEmpty() ? null : list.get(0);
}
```

**Type erasure**: generics are compile-time; runtime has raw types. No `new T()` easily; no `List<int>` (use `List<Integer>`).

### Wildcards

- `? extends T` — producer (read as T); PECS: producer extends.
- `? super T` — consumer (write T); consumer super.

## 3. Code examples

```java
Map<String, Integer> counts = new HashMap<>();
for (String w : words) {
  counts.merge(w, 1, Integer::sum);
}
```

## 4. Gotchas / interview traps

- Concurrent modification while iterating ordinary collections → `ConcurrentModificationException`.
- Using mutable objects as HashMap keys.
- Confusing `List<?>` with `List<Object>`.
- Autoboxing costs in tight numeric loops.

## 5. Resources

- [Oracle Collections tutorial](https://docs.oracle.com/javase/tutorial/collections/)
- [Baeldung](https://www.baeldung.com/java-tutorial)

## 6. Self-check

1. **Q:** ArrayList vs LinkedList default choice?  
   **A:** ArrayList for almost all cases.

2. **Q:** HashMap average get?  
   **A:** O(1).

3. **Q:** TreeMap ordering?  
   **A:** Sorted by keys (natural or Comparator).

4. **Q:** What is type erasure?  
   **A:** Generic type parameters removed at runtime.

5. **Q:** PECS meaning?  
   **A:** Producer Extends, Consumer Super.

6. **Q:** Why no List<int>?  
   **A:** Generics need reference types; use Integer.

7. **Q:** Set property?  
   **A:** No duplicate elements.

8. **Q:** LinkedHashMap specialty?  
   **A:** Predictable iteration order (insertion/access).

9. **Q:** merge on Map?  
   **A:** Insert or combine existing value with a function.

10. **Q:** fail-fast iterator meaning?  
    **A:** Detects concurrent structural modification and throws.

## 7. Practice

- Word-count with `Map` in `practice/java`.
- Anki: `anki/52-collections-generics.tsv`
