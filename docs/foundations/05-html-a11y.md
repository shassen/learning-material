# 05 — HTML Semantics & Accessibility

## 1. Why it matters

Semantic HTML and **accessibility (a11y)** improve SEO, UX, legal compliance, and interview credibility for frontend roles.

## 2. Core concepts

### Semantic elements

Use the right element for meaning: `header`, `nav`, `main`, `article`, `section`, `aside`, `footer`, `button` (not `div` + click), `a` for navigation, headings `h1–h6` in order.

### Forms

Associate `<label for="id">` with inputs. Use correct `type`, `name`, `autocomplete`, and validation attributes. Group with `fieldset`/`legend`.

### ARIA

**ARIA** attributes communicate role/state/name when HTML alone is insufficient. Rule of thumb: **prefer native HTML** first; ARIA when building custom widgets.

- `role`, `aria-label`, `aria-labelledby`, `aria-describedby`, `aria-expanded`, `aria-live`

### Keyboard & focus

All interactive controls must be reachable via Tab and operable with Enter/Space where expected. Visible **focus** styles are required (do not `outline: none` without replacement).

### WCAG basics

**WCAG** principles: Perceivable, Operable, Understandable, Robust. Common bar: AA contrast, text alternatives, keyboard access, form errors announced.

## 3. Code examples

```html
<main>
  <h1>Settings</h1>
  <form>
    <label for="email">Email</label>
    <input id="email" name="email" type="email" autocomplete="email" required />
    <button type="submit">Save</button>
  </form>
</main>
```

```html
<!-- Custom disclosure: button + aria-expanded -->
<button type="button" aria-expanded="false" aria-controls="panel" id="toggle">
  Details
</button>
<div id="panel" hidden>…</div>
```

## 4. Gotchas / interview traps

- Clickable `div` without role, keyboard handlers, or focus — inaccessible.
- Placeholder as only label.
- Skipping heading levels randomly for styling.
- `alt=""` for decorative images vs meaningful `alt` for content images.
- Modals that do not trap focus or restore focus on close.

## 5. Resources

- [MDN HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [web.dev Learn Accessibility](https://web.dev/learn/accessibility/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

## 6. Self-check

1. **Q:** Why prefer `<button>` over `<div onclick>`?  
   **A:** Built-in keyboard, focus, and semantics for assistive tech.

2. **Q:** What does `for` on a label do?  
   **A:** Associates label with input `id` (click focuses/activates).

3. **Q:** First rule of ARIA?  
   **A:** Don’t use ARIA if a native element works.

4. **Q:** Decorative image `alt`?  
   **A:** Empty `alt=""` so screen readers skip it.

5. **Q:** What is a focus trap?  
   **A:** Keeping Tab cycling inside a modal until dismissed.

6. **Q:** Name one WCAG principle.  
   **A:** Perceivable / Operable / Understandable / Robust.

7. **Q:** `main` landmark purpose?  
   **A:** Identifies primary content for skip navigation / AT.

8. **Q:** Why visible focus styles matter?  
   **A:** Keyboard users must see where they are.

9. **Q:** `aria-live` use case?  
   **A:** Announce dynamic updates (toasts, errors) to screen readers.

10. **Q:** Semantic list for navigation links?  
    **A:** Often `<nav><ul><li><a>…`.

## 7. Practice

- Keyboard-only audit of your resume site or `practice/vue` app; fix issues.
- Anki: `anki/05-html-a11y.tsv`
