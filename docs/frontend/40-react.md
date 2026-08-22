# 40 — React

## 1. Why it matters

Hooks, rendering, and state are expected fluency for frontend/full-stack roles.

## 2. Core concepts

### Components & props
UI = function of state/props. Props are read-only inputs.

### Hooks
- `useState` — local state
- `useEffect` — synchronize with external systems
- `useMemo` / `useCallback` — stabilize expensive values/fns
- `useRef` — mutable box / DOM refs
- `useContext` — avoid prop drilling

### Rendering
State update schedules re-render. Keys help reconcile lists. Strict Mode double-invokes effects in dev.

### Controlled inputs
Input value driven by state + `onChange`.

## 3. Code examples

```tsx
function Counter() {
  const [n, setN] = useState(0);
  useEffect(() => {
    document.title = String(n);
  }, [n]);
  return <button onClick={() => setN((x) => x + 1)}>{n}</button>;
}
```

## 4. Gotchas / interview traps

- Missing effect dependencies / infinite loops.
- Using index as key when list can reorder.
- Stale closures in effects/callbacks.
- Overusing memoization prematurely.
- Fetching in effects without abort/ignore flags.

## 5. Resources

- [react.dev Learn](https://react.dev/learn)

## 6. Self-check

1. **Q:** What is a controlled input?  
   **A:** Value owned by React state.

2. **Q:** useEffect dependency array?  
   **A:** Re-run effect when listed values change; [] = mount/unmount.

3. **Q:** Why keys in lists?  
   **A:** Stable identity for reconciliation.

4. **Q:** Props mutable?  
   **A:** No — treat as immutable.

5. **Q:** useRef vs useState?  
   **A:** ref changes don't trigger re-render.

6. **Q:** What causes stale closure?  
   **A:** Callback captures old state/props from prior render.

7. **Q:** Context purpose?  
   **A:** Share values without prop drilling.

8. **Q:** setState functional updater why?  
   **A:** Compute next state from previous reliably.

9. **Q:** Pure components meaning?  
   **A:** Same props/state → same output; no render side effects.

10. **Q:** Cleanup in useEffect?  
    **A:** Return a function to unsubscribe/abort.

## 7. Practice

Rebuild a small form with controlled inputs + effect. Anki: `anki/40-react.tsv`.
