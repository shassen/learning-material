# 43 — Tailwind CSS

## 1. Why it matters

Utility-first CSS is ubiquitous in modern React/Vue/Next codebases.

## 2. Core concepts

### Utilities
Compose UI with classes: `flex`, `gap-4`, `p-4`, `text-sm`, `bg-slate-900`.

### Responsive prefixes
`sm:`, `md:`, `lg:` — mobile-first breakpoints.

### Variants
`hover:`, `focus:`, `dark:`, `disabled:`.

### Configuration
`tailwind.config` theme extensions (colors, spacing, fonts). Prefer design tokens over one-off magic numbers.

### Composition
`clsx` / `cn` helpers for conditional classes; extract repeated patterns into components.

## 3. Code examples

```html
<button class="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400">
  Save
</button>
```

## 4. Gotchas / interview traps

- Giant class strings without components.
- Fighting Tailwind by writing lots of custom CSS unexpectedly.
- Forgetting content paths in config → missing styles in build.
- Accessibility: color contrast still your job.

## 5. Resources

- [Tailwind Docs](https://tailwindcss.com/docs/styling-with-utility-classes)

## 6. Self-check

1. **Q:** What is utility-first CSS?  
   **A:** Style by composing small single-purpose classes.

2. **Q:** Mobile-first breakpoint example?  
   **A:** Base styles, then `md:flex` to enhance.

3. **Q:** hover variant syntax?  
   **A:** `hover:bg-...`

4. **Q:** Why extract components?  
   **A:** Reuse repeated utility combinations.

5. **Q:** Content config purpose?  
   **A:** Tell Tailwind which files to scan for class names.

6. **Q:** dark mode variant?  
   **A:** `dark:`

7. **Q:** gap-4 roughly?  
   **A:** Spacing scale step (1rem typically).

8. **Q:** Pros vs CSS modules?  
   **A:** Faster iteration, constrained design system; longer class lists.

9. **Q:** Can you still write custom CSS?  
   **A:** Yes — `@apply` or plain CSS when needed.

10. **Q:** Accessibility still required?  
    **A:** Yes — utilities don't replace semantic HTML/contrast.

## 7. Practice

Style a card + navbar with utilities only. Anki: `anki/43-tailwind.tsv`.
