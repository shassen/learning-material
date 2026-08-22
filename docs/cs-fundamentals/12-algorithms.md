# 12 — Algorithms

## 1. Why it matters

Interview patterns repeat: **two pointers**, **sliding window**, **binary search**, **BFS/DFS**, sorting, and intro **dynamic programming**.

## 2. Core concepts

### Two pointers

Often on sorted arrays or opposite ends: pair sums, palindromes, in-place partition.

### Sliding window

Subarray/substring problems with a moving `[left, right]` range; maintain a running state in O(n).

### Binary search

On sorted data or monotonic answer space. Classic mid = lo + ((hi-lo)>>1) to avoid overflow in other languages; in JS `Math.floor((lo+hi)/2)` is fine for typical constraints.

### BFS / DFS

- **BFS**: shortest path in unweighted graphs; level-order trees.
- **DFS**: path existence, topological ideas, connected components, backtracking.

### Sorting

Know when to call built-in sort (usually O(n log n)) vs counting sort. Stability matters sometimes.

### Dynamic programming (intro)

Overlap + optimal substructure. Start with memoized recursion, then bottom-up tables. Classic: climbing stairs, coin change, LCS.

## 3. Code examples

```ts
// Two sum II style (sorted) — O(n)
function twoSumSorted(a: number[], target: number) {
  let i = 0, j = a.length - 1;
  while (i < j) {
    const s = a[i]! + a[j]!;
    if (s === target) return [i, j];
    if (s < target) i++;
    else j--;
  }
  return null;
}

// Binary search
function lowerBound(a: number[], x: number) {
  let lo = 0, hi = a.length;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (a[mid]! < x) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}
```

```ts
// BFS shortest path length (unweighted)
function bfs(graph: Map<string, string[]>, start: string, goal: string) {
  const q: string[] = [start];
  const dist = new Map([[start, 0]]);
  while (q.length) {
    const u = q.shift()!;
    if (u === goal) return dist.get(u)!;
    for (const v of graph.get(u) ?? []) {
      if (!dist.has(v)) {
        dist.set(v, dist.get(u)! + 1);
        q.push(v);
      }
    }
  }
  return -1;
}
```

## 4. Gotchas / interview traps

- Off-by-one in binary search bounds.
- Mutating arrays while iterating.
- BFS using `shift` on huge arrays (O(n) per op) — mention deque for production.
- DP without defining state/transition clearly.
- Forgetting visited set → infinite loops on cycles.

## 5. Resources

- [NeetCode roadmap](https://neetcode.io/roadmap) — follow Blind 75 / NeetCode 150 order.

## 6. Self-check

1. **Q:** When use sliding window?  
   **A:** Contiguous subarray/substring with expandable/shrinkable range.

2. **Q:** Binary search prerequisite?  
   **A:** Sorted data or monotonic predicate.

3. **Q:** BFS vs DFS for unweighted shortest path?  
   **A:** BFS.

4. **Q:** What causes DFS infinite loops on graphs?  
   **A:** Missing visited marking on cycles.

5. **Q:** Two pointers typical complexity?  
   **A:** O(n) time after sort if needed.

6. **Q:** DP two ingredients?  
   **A:** Overlapping subproblems + optimal substructure.

7. **Q:** Stable sort meaning?  
   **A:** Equal keys keep original relative order.

8. **Q:** Backtracking pattern?  
   **A:** Choose → explore → un-choose (DFS with undo).

9. **Q:** Why define state clearly in DP?  
   **A:** So transitions and base cases are correct and explainable.

10. **Q:** Time of comparing all pairs?  
    **A:** O(n²).

## 7. Practice

- `practice/js-ts/exercises/algorithms/` (twoSum, binarySearch, maxWindow, etc.)
- Anki: `anki/12-algorithms.tsv`
- Track progress on NeetCode roadmap.
