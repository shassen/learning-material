# 42 — Vue.js (from scratch)

## 1. Why it matters

You need Vue for work soon. You already know **React** — map concepts deliberately so learning is transfer, not memorization from zero.

## 2. Core concepts

### What Vue is

Progressive framework for UIs. Vue 3 default style: **Composition API** + **Single-File Components (SFCs)** (`.vue` files with `<script setup>`, `<template>`, `<style>`).

### Reactivity

- **`ref(x)`**: reactive wrapper; read/write `.value` in script; auto-unwrap in templates.
- **`reactive(obj)`**: reactive object (no `.value`); best for objects; careful with reassignment.
- **`computed(() => …)`**: cached derived state (like `useMemo` + derived value).
- **`watch` / `watchEffect`**: side effects when deps change (like `useEffect`, but dependency tracking differs).

### Lifecycle (Composition API)

`onMounted`, `onUpdated`, `onUnmounted`, etc. Prefer `onMounted` for DOM access / initial fetch.

### Components & props/emits

```vue
<script setup lang="ts">
defineProps<{ title: string }>();
const emit = defineEmits<{ save: [id: string] }>();
</script>
```

### Vue Router

Declare routes; `<RouterView>` renders matched component; `<RouterLink>` for navigation. Navigation guards: `beforeEach`.

### Pinia

Official store: `defineStore` with setup-style stores (refs + functions) — similar mental model to Zustand/Redux Toolkit slices.

### React → Vue map

| React | Vue 3 |
|-------|-------|
| function component | SFC `<script setup>` |
| `useState` | `ref` / `reactive` |
| `useMemo` | `computed` |
| `useEffect` | `watch`, `watchEffect`, lifecycle hooks |
| `useRef` (DOM) | `ref` on element + `onMounted` |
| Context | `provide` / `inject` |
| Redux/Zustand | Pinia |
| React Router | Vue Router |
| JSX | Template (JSX also possible) |
| `className` | `class` |
| `onClick` | `@click` |

## 3. Code examples

```vue
<script setup lang="ts">
import { computed, ref } from "vue";
const count = ref(0);
const doubled = computed(() => count.value * 2);
function inc() {
  count.value++;
}
</script>

<template>
  <button type="button" @click="inc">{{ count }} (×2 = {{ doubled }})</button>
</template>
```

See also `practice/vue` (Router + Pinia counter).

## 4. Gotchas / interview traps

- Forgetting `.value` on refs in script.
- Destructuring `reactive` objects loses reactivity — use `toRefs` / `storeToRefs`.
- Mutating props directly — emit events instead.
- `v-if` vs `v-show` (destroy vs CSS hide).
- List rendering: always provide stable `:key`.
- Thinking Vue is Options-API-only — Composition API is the modern default.

## 5. Resources

- [Vue Guide](https://vuejs.org/guide/introduction.html)
- [Vue Router](https://router.vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Vue for React devs](https://vuejs.org/guide/extras/composition-api-faq.html) (mental model)

## 6. Self-check

1. **Q:** What is an SFC?  
   **A:** Single-File Component: template + script + style in one `.vue` file.

2. **Q:** ref vs reactive?  
   **A:** ref wraps any value with `.value`; reactive makes an object deeply reactive.

3. **Q:** React useState equivalent?  
   **A:** `ref` / `reactive`.

4. **Q:** React useEffect rough equivalents?  
   **A:** `watch`, `watchEffect`, and lifecycle hooks like `onMounted`.

5. **Q:** What is Pinia?  
   **A:** Official Vue state management library.

6. **Q:** v-if vs v-show?  
   **A:** v-if conditionally creates/destroys; v-show toggles CSS display.

7. **Q:** Why :key on v-for?  
   **A:** Stable identity for efficient/correct DOM reuse.

8. **Q:** How do child→parent messages work?  
   **A:** `emit` events (props down, events up).

9. **Q:** RouterView purpose?  
   **A:** Outlet that renders the matched route component.

10. **Q:** storeToRefs purpose?  
    **A:** Destructure store state while keeping reactivity.

## 7. Practice

```bash
cd practice/vue && npm install && npm run dev
```

Rebuild a small React form you know as a Vue SFC; add a Pinia store.
Anki: `anki/42-vue.tsv`
