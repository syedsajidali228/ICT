# Syed Sajid Ali — Portfolio Website

A simple, light-themed portfolio built from scratch with plain **HTML + CSS + JavaScript** — no frameworks, no libraries. The three code files together are ~350 lines, written to be read and explained line by line in a viva.

- **Run it:** double-click `index.html` (or use VS Code Live Server). Works offline.
- **Files:** `index.html` (content) · `style.css` (design) · `script.js` (behaviour)

## Sections

Hero → About → Education → Projects (9 filterable cards) → Skills → Contact → Footer.

## Tags used (all common ones)

`header, nav, ul, li, section, h1–h3, p, span, div, a, button, details, summary, small, footer`

The smart one is **`<details>` + `<summary>`**: it creates the "Details" show/hide box on every project card with **zero JavaScript** — the browser does the opening and closing. That is why `script.js` is so short.

## JavaScript (script.js — 3 features)

| Feature | How to explain it |
|---|---|
| Typewriter | `word.slice(0, n)` shows n letters; `setTimeout(type, speed)` runs it again — type → pause → delete → next word. |
| Project filter | Each button calls `showCat('ai', this)` from the HTML. The function loops over the cards and hides the ones whose class doesn't match. |
| Copy email | `navigator.clipboard.writeText()` with `.then()` for "Copied!" feedback, reset after 2 seconds. |
| Footer year | One line: `new Date().getFullYear()`. |

## CSS things worth knowing

- All colors are variables at the top — change `--accent` to re-theme the whole site.
- Layout is CSS Grid (cards, boxes) + Flexbox (nav, filters); `clamp()` resizes the hero title.
- On phones (one `@media` block) the grids become one column and the nav links simply wrap — no menu button needed.
- Smooth scrolling, the blinking cursor and hover effects are pure CSS.

## Customize

- Add a project: copy one `<div class="card ai">` block, change the text and class (`ai`, `builds` or `concepts`).
- Add a skill or interest: edit one line in the Skills or About section.
- Swap the "SA" avatar for a photo: replace the `.avatar` div with an `<img>` tag.
