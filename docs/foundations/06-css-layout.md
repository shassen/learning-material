# 06 — CSS Layout & Cascade

## 1. Why it matters

Seniors who ship UI fluently understand the **cascade**, **specificity**, box model, **Flexbox**, and **Grid** — not only framework class names.

## 2. Core concepts

### Cascade & specificity

When rules conflict, the winner is determined by origin/importance, then **specificity**, then source order.

Specificity rough score: inline > IDs > classes/attributes/pseudo-classes > elements/pseudo-elements. `!important` is a last resort.

### Box model

`content` + `padding` + `border` (+ `margin` outside). `box-sizing: border-box` makes width include padding/border (common reset).

### Flexbox

1-D layout: row or column. Key properties: `display: flex`, `justify-content`, `align-items`, `gap`, `flex` on children (`grow`/`shrink`/`basis`).

### Grid

2-D layout: rows and columns. `grid-template-columns`, `grid-template-rows`, areas, `gap`. Great for page shells and card grids.

### Responsive design

Mobile-first media queries, fluid units (`rem`, `%`, `fr`, `minmax`), container queries (modern).

### Custom properties

CSS variables: `:root { --color-bg: #111; }` → `var(--color-bg)`. Themeable and readable.

## 3. Code examples

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

.row {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  gap: 1rem;
}
```

## 4. Gotchas / interview traps

- Margin collapse between siblings/parent-child.
- Absolute positioning removes from flow — parent needs `position: relative`.
- Flex item `min-width: auto` preventing shrink (overflow surprises).
- Specificity wars from deep selectors — prefer flat class-based design (BEM/utilities).
- Forgetting `gap` support assumptions in very old browsers (usually fine now).

## 5. Resources

- [web.dev Learn CSS](https://web.dev/learn/css)
- [MDN CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS Tricks: Flexbox guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Tricks: Grid guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

## 6. Self-check

1. **Q:** What is specificity?  
   **A:** Weight of a selector determining which rule wins.

2. **Q:** Flex vs Grid?  
   **A:** Flex is 1-D; Grid is 2-D.

3. **Q:** What does `border-box` change?  
   **A:** Width/height include padding and border.

4. **Q:** Purpose of CSS custom properties?  
   **A:** Reusable themed values, cascade-aware.

5. **Q:** `justify-content` vs `align-items` in a row flex?  
   **A:** Main axis vs cross axis alignment.

6. **Q:** What is margin collapse?  
   **A:** Adjacent vertical margins combine into one.

7. **Q:** Mobile-first media query example?  
   **A:** Base styles for small screens; `@media (min-width: …)` enhance up.

8. **Q:** Why avoid `!important`?  
   **A:** Breaks cascade predictability; hard to override later.

9. **Q:** `fr` unit meaning?  
   **A:** Fraction of free space in Grid.

10. **Q:** How to center a div both ways with flex?  
    **A:** `display:flex; justify-content:center; align-items:center;` on parent.

## 7. Practice

- Rebuild a card + navbar with flex, then with grid (no Tailwind).
- Anki: `anki/06-css-layout.tsv`
