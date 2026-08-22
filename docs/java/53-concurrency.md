# 53 — Java Concurrency

## 1. Why it matters

Backends share mutable state across **threads**. You need vocabulary: races, `synchronized`, **executors**, concurrent collections.

## 2. Core concepts

### Threads

`Thread` + `Runnable`, or `Callable` + `Future` for return values/exceptions. Prefer thread pools over manual `new Thread` everywhere.

### Executors

```java
ExecutorService pool = Executors.newFixedThreadPool(4);
Future<Integer> f = pool.submit(() -> 42);
pool.shutdown();
```

### Safety

- **Race condition**: outcome depends on timing.
- `synchronized` methods/blocks for mutual exclusion.
- `volatile` for visibility of a single field (not full atomic compound actions).
- Prefer `java.util.concurrent` (`ConcurrentHashMap`, `AtomicInteger`, locks, queues).

### Happens-before

Memory visibility rules — without synchronization, one thread’s writes may not be visible to another.

## 3. Code examples

```java
AtomicInteger counter = new AtomicInteger();
counter.incrementAndGet();
```

## 4. Gotchas / interview traps

- Synchronizing on `this` exposed to outsiders.
- Deadlocks from nested locks in opposite order.
- Blocking the HTTP thread pool with heavy work — offload carefully.
- Assuming `i++` is atomic (it isn’t).

## 5. Resources

- [Oracle Concurrency tutorial](https://docs.oracle.com/javase/tutorial/essential/concurrency/)

## 6. Self-check

1. **Q:** Runnable vs Callable?  
   **A:** Callable returns a value and can throw checked exceptions.

2. **Q:** Why use ExecutorService?  
   **A:** Manage a pool of worker threads instead of unbounded thread creation.

3. **Q:** What is a race condition?  
   **A:** Incorrect behavior depending on scheduling/timing.

4. **Q:** What does synchronized provide?  
   **A:** Mutual exclusion + memory visibility for the locked region.

5. **Q:** Is i++ thread-safe?  
   **A:** No — read/modify/write is not atomic.

6. **Q:** ConcurrentHashMap purpose?  
   **A:** Thread-safe map with better concurrency than synchronizing all access.

7. **Q:** Future represents?  
   **A:** Result of an async computation.

8. **Q:** Deadlock?  
   **A:** Threads wait forever for locks each other holds.

9. **Q:** volatile guarantees?  
   **A:** Visibility of that variable’s latest write — not atomic compound ops.

10. **Q:** Prefer what over raw threads?  
    **A:** Executors / higher-level concurrency utilities.

## 7. Practice

- Increment a shared counter with and without atomics; discuss results.
- Anki: `anki/53-concurrency.tsv`
