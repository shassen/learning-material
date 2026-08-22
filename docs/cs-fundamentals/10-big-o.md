# 10 — Big-O Notation

## 1. Why it matters

Interviewers ask you to analyze **time complexity** and **space complexity**. **Big-O** is the shared language for “how does this scale?”

## 2. Core concepts

### Big-O, Θ, Ω

- **Big-O (O)**: upper bound (worst-case growth, commonly).
- **Theta (Θ)**: tight bound (average/typical when known).
- **Omega (Ω)**: lower bound.

In interviews, “Big-O” usually means worst-case asymptotic growth as \(n \to \infty\), dropping constants and lower-order terms.

### Common complexities

| Name | Notation | Example |
|------|----------|---------|
| Constant | O(1) | Hash map average lookup; array index |
| Logarithmic | O(log n) | Binary search |
| Linear | O(n) | Single pass |
| Linearithmic | O(n log n) | Efficient comparison sorts |
| Quadratic | O(n²) | Nested loops over n |
| Exponential | O(2ⁿ) | Naive recursive subsets |
| Factorial | O(n!) | Naive permutations |

### Rules of thumb

- Nested independent loops over n → often O(n²).
- Halving the search space each step → O(log n).
- Recurrence like merge sort → O(n log n).
- Drop constants: O(2n) → O(n).

### Amortized analysis

Average cost per operation over a sequence. Dynamic array append is **amortized O(1)** despite occasional O(n) resize.

### Space complexity

Extra memory vs input size. Recursion depth counts toward call-stack space. In-place algorithms aim for O(1) extra (besides input).

## 3. Code examples

```ts
// O(n) time, O(1) extra space
function sum(a: number[]) {
  let s = 0;
  for (const x of a) s += x;
  return s;
}

// O(n²) time
function hasDupNaive(a: number[]) {
  for (let i = 0; i < a.length; i++)
    for (let j = i + 1; j < a.length; j++)
      if (a[i] === a[j]) return true;
  return false;
}

// O(n) time, O(n) space
function hasDupSet(a: number[]) {
  return new Set(a).size !== a.length;
}
```

## 4. Gotchas / interview traps

- Saying O(1) for hash map without mentioning average vs worst case.
- Forgetting output space (e.g. cloning an array is O(n) space).
- Binary search on unsorted array is not O(log n).
- Multiple inputs: clarify O(n + m) vs O(n*m).

## 5. Resources

- [Big-O Cheat Sheet](https://www.bigocheatsheet.com/)
- [NeetCode roadmap](https://neetcode.io/roadmap)

## 6. Self-check

1. **Q:** What does Big-O describe?  
   **A:** Upper bound on how cost grows with input size.

2. **Q:** Binary search time complexity?  
   **A:** O(log n).

3. **Q:** Nested loop i=0..n, j=0..n?  
   **A:** O(n²).

4. **Q:** Merge sort time?  
   **A:** O(n log n).

5. **Q:** What is amortized O(1)?  
   **A:** Average per-op cost over many ops is constant (e.g. dynamic array push).

6. **Q:** Space of recursion depth n?  
   **A:** O(n) stack space.

7. **Q:** Drop constants from O(3n + 5)?  
   **A:** O(n).

8. **Q:** Hash map lookup complexity?  
   **A:** Average O(1), worst O(n) with collisions.

9. **Q:** Why ignore lower-order terms?  
   **A:** As n grows, the dominant term overwhelms them.

10. **Q:** O(n) vs O(n log n) — which grows faster?  
    **A:** O(n log n).

## 7. Practice

- Annotate Big-O on every exercise you solve.
- Anki: `anki/10-big-o.tsv`
