# 11 — Data Structures

## 1. Why it matters

Picking the right structure is half of algorithm interviews and a large part of production performance.

## 2. Core concepts

### Arrays / lists

Contiguous (or dynamic array) storage. Index access O(1). Insert/delete at arbitrary index O(n). Append amortized O(1).

### Linked lists

Nodes with pointers. Insert/delete at known node O(1). Access by index O(n). Rarely needed in high-level JS but common in interviews.

### Stacks & queues

- **Stack**: LIFO — push/pop O(1). DFS, undo, call stack mental model.
- **Queue**: FIFO — enqueue/dequeue O(1). BFS, scheduling.
- JS: array `push/pop` for stack; `push/shift` for queue (shift is O(n) — use deque ideas for hot paths).

### Hash maps & sets

Average O(1) insert/lookup/delete. Keys hashed to buckets. Watch collisions and mutable key pitfalls. JS: `Map`, `Set`, plain objects for string keys.

### Trees

Hierarchical nodes. **Binary tree**, **BST** (ordered), **heap** (priority). Balanced BST ops O(log n); skewed O(n).

### Heaps / priority queues

Parent ordered vs children (min/max heap). Peek O(1); insert/delete O(log n).

### Graphs

Nodes + edges. Representations: adjacency list (common) vs matrix. Directed/undirected, weighted/unweighted.

## 3. Code examples

```ts
// Frequency map
function freq(s: string) {
  const m = new Map<string, number>();
  for (const ch of s) m.set(ch, (m.get(ch) ?? 0) + 1);
  return m;
}

// Graph adjacency list
type Graph = Map<string, string[]>;
function addEdge(g: Graph, a: string, b: string) {
  if (!g.has(a)) g.set(a, []);
  g.get(a)!.push(b);
}
```

## 4. Gotchas / interview traps

- Using list.contains in a hot loop → O(n²); use a Set.
- Confusing heap with BST.
- Forgetting graphs can be disconnected — visit all components.
- `typeof [] === "object"` — arrays are objects with length.

## 5. Resources

- [NeetCode roadmap](https://neetcode.io/roadmap)
- [Big-O Cheat Sheet](https://www.bigocheatsheet.com/)

## 6. Self-check

1. **Q:** Array index access complexity?  
   **A:** O(1).

2. **Q:** Stack vs queue?  
   **A:** LIFO vs FIFO.

3. **Q:** Hash map average lookup?  
   **A:** O(1).

4. **Q:** When is BST lookup O(n)?  
   **A:** Degenerate/skewed tree.

5. **Q:** Heap insert complexity?  
   **A:** O(log n).

6. **Q:** Best structure for BFS?  
   **A:** Queue.

7. **Q:** Best structure for DFS (iterative)?  
   **A:** Stack (or recursion).

8. **Q:** Adjacency list vs matrix space?  
   **A:** List ~ O(V+E); matrix O(V²).

9. **Q:** Why prefer Map over object sometimes?  
   **A:** Arbitrary keys, preserved insertion order, no prototype key clashes.

10. **Q:** What is a priority queue good for?  
    **A:** Always processing the current min/max quickly (Dijkstra, scheduling).

## 7. Practice

- `practice/js-ts/exercises/algorithms/` — implement structures as needed.
- Anki: `anki/11-data-structures.tsv`
