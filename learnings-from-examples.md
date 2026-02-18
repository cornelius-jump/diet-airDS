# Diet AirDS — Builder Reference Guide

A practical reference for building pages with Diet AirDS. Written from direct implementation experience. Use this before writing any custom CSS.

---

## 1. CSS Load Order (Required)

Always load in this exact sequence. Each file depends on the previous.

```html
<link rel="stylesheet" href="https://diet-air-ds.vercel.app/design-tokens-master.css">
<link rel="stylesheet" href="https://diet-air-ds.vercel.app/spacing-tokens.css">
<link rel="stylesheet" href="https://diet-air-ds.vercel.app/container-tokens.css">
<link rel="stylesheet" href="https://diet-air-ds.vercel.app/border-effects-tokens.css">
<link rel="stylesheet" href="https://diet-air-ds.vercel.app/fonts.css">
<link rel="stylesheet" href="https://diet-air-ds.vercel.app/text-styles-system.css">
<link rel="stylesheet" href="https://diet-air-ds.vercel.app/icons.css">
<link rel="stylesheet" href="https://diet-air-ds.vercel.app/card-components.css">
<link rel="stylesheet" href="https://diet-air-ds.vercel.app/interactive-tokens.css">
<link rel="stylesheet" href="https://diet-air-ds.vercel.app/button-components.css">
<link rel="stylesheet" href="https://diet-air-ds.vercel.app/list-row-components.css">
<link rel="stylesheet" href="https://diet-air-ds.vercel.app/boilerplate.css">
```

Also load Inter + Material Symbols from Google Fonts before the DS:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet">
```

---

## 2. Theming — HTML Setup

Apply `data-theme` and `data-mode` to the `<html>` tag (or any container).

```html
<html lang="en" data-theme="wolves" data-mode="dark">
```

**Team IDs:** `wolves` · `lynx` · `courage` · `summit` · `bucknell` · `sounders` · `reign` · `ncfc` · `jump` · `athletics`

**Modes:** `light` · `dark`

The DS resolves all color, typography, button radius, and interactive tokens automatically based on these two attributes. Never hardcode team colors — always use tokens.

### Key Semantic Tokens (always use these, not raw hex)

| Token | Resolves to |
|---|---|
| `--bg-base` | Page background |
| `--bg-surface` | Card / raised surface background |
| `--bg-nav` | Nav bar / header background (often translucent) |
| `--text-primary` | Primary text color |
| `--text-secondary` | Secondary / muted text |
| `--text-placeholder` | Placeholder text |
| `--interactive-primary` | Primary button fill |
| `--interactive-primary-text` | Primary button text |
| `--interactive-transactional` | CTA / transactional button fill |
| `--interactive-transactional-text` | CTA button text |
| `--color-interactive` | Mode-sympathetic brand color (use for links, accents) |
| `--brand-interactive` | Raw brand color (prefer `--color-interactive`) |
| `--neutral-200` | Divider / hairline border color |
| `--neutral-300` | Standard border color |
| `--neutral-1000` | Fully opaque neutral (black in light, white in dark) |
| `--inverted-1000` | Fully opaque inverted (white in light, black in dark) |
| `--status-success` | Green (mode-adaptive) |
| `--status-error` | Red (mode-adaptive) |
| `--status-warning` | Amber (mode-adaptive) |
| `--status-info` | Blue (mode-adaptive) |

---

## 3. Spacing Tokens

### Fixed Scale (8px base unit)

| Token | Value |
|---|---|
| `--spacing-50` | 4px |
| `--spacing-100` | 8px |
| `--spacing-150` | 12px |
| `--spacing-200` | 16px |
| `--spacing-250` | 20px |
| `--spacing-300` | 24px |
| `--spacing-400` | 32px |
| `--spacing-500` | 40px |
| `--spacing-600` | 48px |
| `--spacing-700` | 56px |
| `--spacing-800` | 64px |
| `--spacing-900` | 72px |
| `--spacing-1000` | 80px |

### Responsive Tokens (auto-adjust at breakpoints)

| Token | Mobile | Tablet | Desktop |
|---|---|---|---|
| `--spacing-row` | 8px | 12px | 16px |
| `--spacing-card` | 16px | 20px | 24px |
| `--spacing-content` | 32px | 40px | 48px |
| `--margin-small` | 16px | 32px | 48px |
| `--margin-large` | 16px | 40px | 64px |
| `--margin-landing` | 24px | 48px | 80px |

**When to use which:**
- `--spacing-row` — gap between list rows, tight repeated elements
- `--spacing-card` — gap between cards in a list/grid
- `--spacing-content` — gap between major layout sections
- `--margin-large` — page-level horizontal padding (nav, headers, main content)
- `--margin-landing` — hero / landing page horizontal padding

### Spacing Utility Classes (from boilerplate.css)

`mt-{n}`, `mb-{n}`, `ml-{n}`, `mr-{n}`, `mx-{n}`, `my-{n}` — margin
`pt-{n}`, `pb-{n}`, `pl-{n}`, `pr-{n}`, `px-{n}`, `py-{n}` — padding
`gap-{n}` — flex/grid gap

Where `{n}` = `50 | 100 | 150 | 200 | 250 | 300 | 400 | 500 | 600 | 700 | 800 | 900`

Responsive spacing utilities also available: `py-large`, `my-row`, `gap-card`, etc.

---

## 4. Container Classes

Use these instead of writing custom `max-width` + `margin: auto` + `padding`.

| Class | Max Width | Best for |
|---|---|---|
| `.container` | 1200px | Default — most content pages, checkout |
| `.container-wide` | 1280px | Pages with sidebars |
| `.container-medium` | 1024px | Articles, forms, doc pages |
| `.container-narrow` | 768px | Long-form reading content |
| `.container-compact` | 640px | Single-column, confirmation pages |
| `.container-extra-wide` | 1440px | Dashboards, data-heavy |
| `.container-maximum` | 1600px | Landing pages, full-bleed |
| `.container-fluid` | none | Full width with padding only |

All container classes include responsive horizontal padding (16px mobile → 24px tablet → 32px desktop).

**Pattern for full-bleed headers with constrained content:**
```html
<div class="page-header">       <!-- full-bleed background/border -->
  <div class="container">       <!-- constrains content width -->
    <h1 class="display500">CHECKOUT</h1>
  </div>
</div>
```

Never write `max-width: 1200px; margin: 0 auto; padding: 0 var(--margin-large)` — that's exactly what `.container` does.

---

## 5. Text Styles

**Class names are case-sensitive.** `labelRegular30` ≠ `labelregular30`.
All text style classes set `color: var(--text-primary)` — use `.text-secondary` etc. to override.

### Display (team-specific font, size, weight, letter-spacing)

`display100` · `display200` · `display300` · `display400` · `display500` · `display600` · `display700` · `display800` · `display900`

Display uses `--neutral-1000` (not `--text-primary`) — it does not respect `.text-secondary`.

### Title (Inter 700, tight letter-spacing)

`title50` (20px) · `title60` (24px) · `title70` (28px) · `title80` (32px) · `title90` (36px)

### Label (Inter, line-height 1.21 — compact, UI text)

| Class | Size | Weight |
|---|---|---|
| `labelBold50` | 20px | 600 |
| `labelBold40` | 18px | 600 |
| `labelBold30` | 16px | 600 |
| `labelBold20` | 14px | 600 |
| `labelBold10` | 12px | 600 |
| `labelRegular50` | 20px | 400 |
| `labelRegular40` | 18px | 400 |
| `labelRegular30` | 16px | 400 |
| `labelRegular20` | 14px | 400 |
| `labelRegular10` | 12px | 400 |

### Body (Inter, line-height 1.6 — reading text)

| Class | Size | Weight |
|---|---|---|
| `bodyBold40` | 18px | 600 |
| `bodyBold30` | 16px | 600 |
| `bodyBold20` | 14px | 600 |
| `bodyRegular40` | 18px | 400 |
| `bodyRegular30` | 16px | 400 |
| `bodyRegular20` | 14px | 400 |

### Text Color Modifiers

`.text-primary` · `.text-secondary` · `.text-disabled` · `.text-placeholder`
`.text-inverted` · `.text-success` · `.text-error` · `.text-warning` · `.text-info`
`.text-brand-core` · `.text-brand-interactive`

### Text Utility Classes

`.text-center` · `.text-left` · `.text-right`
`.text-uppercase` · `.text-capitalize`
`.text-truncate` · `.text-truncate-2` · `.text-truncate-3`

### Inter Font Weights

Only these weights are loaded: **400, 600, 700, 900**. Never use `font-weight: 200`, `300`, or `500`.

---

## 6. Border & Shadow Tokens

### Border Radius

| Token | Value | Use |
|---|---|---|
| `--border-radius-50` | 4px | Tags, badges, small elements |
| `--border-radius-100` | 8px | Cards, inputs, standard UI |
| `--border-radius-200` | 16px | Large cards, hero sections |
| `--button-border-radius` | team-specific | Always use this for buttons |

Utility: `.rounded-50` · `.rounded-100` · `.rounded-200` · directional variants: `.rounded-t-100`, `.rounded-br-200`, etc.

### Border Weight

| Token | Value | Use |
|---|---|---|
| `--border-weight-50` | 1px | Subtle, with `--neutral-200` |
| `--border-weight-100` | 1px | Standard, with `--neutral-300` |
| `--border-weight-200` | 2px | Focus states, with `--brand-interactive` |

### Drop Shadows

| Token | Use |
|---|---|
| `--shadow-sheet` | Elevated surfaces on mobile (cards, sheets) |
| `--shadow-modal` | Modals/overlays on tablet/desktop |

Utility: `.shadow-sheet` · `.shadow-modal`

### Border Utility Classes

`.border` — 1px solid `--border-default`
`.border-top` · `.border-bottom` · `.border-left` · `.border-right` — directional
`.border-thin` — 1px `--neutral-200`
`.border-heavy` — 2px `--neutral-1000`
`.border-interactive` — 2px `--brand-interactive` (focus state)

---

## 7. Card Components

### Closed Card (background surface, divided sections)

```html
<div class="card-closed">
  <div class="card-closed-header">
    <div class="card-text-pair">
      <h2 class="title50">Card Title</h2>
      <p class="labelRegular20 text-secondary">Subtitle</p>
    </div>
  </div>
  <div class="card-closed-body">
    <!-- content -->
  </div>
  <div class="card-closed-footer">
    <!-- totals, actions -->
  </div>
</div>
```

- `card-closed` — `border-radius-200` (16px), `bg-surface` background
- `card-closed-header` — `padding-250` (20px), border-bottom
- `card-closed-body` — `padding-300` (24px), border-bottom
- `card-closed-footer` — `padding-300` (24px), no border
- Last child (body or footer) automatically loses its border-bottom

A card can have multiple `card-closed-body` sections in sequence — each gets its own divider.

### card-text-pair

Vertical text stack with 2px gap. Use inside any card section, list row, or hero area.

```html
<div class="card-text-pair">
  <h1 class="display600">Primary Text</h1>
  <p class="labelRegular40 text-secondary">Secondary Text</p>
</div>
```

### Card Actions

```html
<!-- Horizontal (default) — no top margin -->
<div class="card-actions-horizontal">
  <button class="btn btn-primary btn-300">Primary</button>
  <button class="btn btn-secondary btn-300">Secondary</button>
</div>

<!-- Vertical stack — has top margin -->
<div class="card-actions-vertical">
  <button class="btn btn-primary btn-700 btn-fill">Continue</button>
</div>

<!-- .card-actions — generic with top margin -->
<div class="card-actions">
  <button class="btn btn-transactional btn-700">Buy</button>
</div>
```

### Open Card (transparent, for landing/feature layouts)

```html
<div class="card-open">
  <div class="card-open-header"><!-- label/title --></div>
  <div class="card-open-content">
    <div class="card-open-section"><!-- bg-surface, 16px radius --></div>
    <div class="card-open-section"><!-- bg-surface, 16px radius --></div>
  </div>
</div>
```

---

## 8. Buttons

### Standard Buttons

Pattern: `.btn` + type + size

```html
<button class="btn btn-primary btn-300">Label</button>
<button class="btn btn-transactional btn-700">Buy Now</button>
<button class="btn btn-secondary btn-100">Cancel</button>
```

**Types:** `btn-transactional` · `btn-primary` · `btn-neutral` · `btn-secondary` · `btn-tertiary` · `btn-destructive` · `btn-white` · `btn-white-tertiary`

**Sizes:**

| Class | Height | Font |
|---|---|---|
| `.btn-700` | 56px | 16px / 600 |
| `.btn-300` | 40px | 14px / 600 |
| `.btn-100` | 32px | 14px / 600 |

**Width:** Default = hug content. Add `.btn-fill` for full width.

### Buttons with Icons

```html
<!-- Leading icon -->
<button class="btn btn-transactional btn-700 btn-icon-leading">
  <span class="btn-icon material-symbols-rounded" style="font-variation-settings:'FILL' 1;">lock</span>
  <span>Place Order</span>
</button>

<!-- Icon only -->
<button class="btn btn-secondary btn-300 btn-icon-only">
  <span class="btn-icon material-symbols-rounded">search</span>
</button>
```

**Icon classes:** `.btn-icon-leading` · `.btn-icon-trailing` · `.btn-icon-only`

### Circle Buttons

Pattern: `.btn-circle` + size + type

```html
<!-- Material Symbol icon -->
<button class="btn-circle btn-circle-300 btn-circle-neutral-tertiary" aria-label="Notifications">
  <span class="btn-icon material-symbols-rounded">notifications</span>
</button>

<!-- Letter / avatar — use .btn-circle-letter, NOT .btn-icon -->
<button class="btn-circle btn-circle-300 btn-circle-team" aria-label="Account">
  <span class="btn-circle-letter">A</span>
</button>
```

**Sizes:** `.btn-circle-700` (56px) · `.btn-circle-300` (40px)

**Types:** `btn-circle-team` · `btn-circle-neutral` · `btn-circle-inverted` · `btn-circle-black` · `btn-circle-white` · `btn-circle-destructive`
Secondary variants: `btn-circle-team-secondary` · `btn-circle-neutral-secondary` · `btn-circle-destructive-secondary`
Tertiary variants: `btn-circle-team-tertiary` · `btn-circle-neutral-tertiary` · `btn-circle-destructive-tertiary`

**Critical:** `.btn-icon` sets `width/height/font-size: 24px` for Material Symbol glyphs. Never use `.btn-icon` for plain text/letters. Use `.btn-circle-letter` instead — it resets box sizing and sets Inter 600 at the right size (16px for -300, 20px for -700).

### Button Groups

```html
<div class="btn-group"><!-- horizontal --></div>
<div class="btn-group-stack"><!-- vertical, full-width --></div>
```

---

## 9. Interactive Tokens

### Surface Tokens

Apply directly to any interactive element for themed hover/press states.

```html
<div class="surface-fillColor scale-500">CTA Element</div>
<div class="surface-borderNeutral scale-300">Icon Button</div>
```

**Fill surfaces:** `surface-fillNeutral` · `surface-fillColor` · `surface-fillInverted` · `surface-fillBlack` · `surface-fillWhite`
**Border surfaces:** `surface-borderNeutral` · `surface-borderInverted` · `surface-borderBlack` · `surface-borderWhite`
**Other:** `surface-washNeutral` · `surface-ghost` · `surface-card`

**Color inheritance rule:** Fill surfaces set `color` on the element. Child elements using DS text style classes (`.labelBold30`, etc.) will override this because those classes also set `color`. Fix with:
```css
.surface-fillColor * { color: inherit; }
```

### Scale Tokens (hover/press animation)

| Class | Use | Hover | Press |
|---|---|---|---|
| `.scale-700` | Cards, large components | 1.01x | 0.99x |
| `.scale-500` | Buttons, medium | 1.025x | 0.975x |
| `.scale-300` | Icon buttons, small | 1.035x | 0.965x |

---

## 10. List Row Components

### Basic Structure

```html
<div class="list-row">
  <div class="leading leading-gap-md">
    <!-- icon, image, logo, etc. -->
  </div>
  <div class="list-row-content">
    <div class="list-row-text-pair">
      <span class="labelBold30">Primary Text</span>
      <span class="labelRegular20 text-secondary">Secondary Text</span>
    </div>
  </div>
  <div class="trailing trailing-gap-md">
    <!-- trailing text, icon, stepper, etc. -->
  </div>
</div>
```

Add `.not-tappable` for non-interactive rows. Add `.disabled` for disabled state.

### Leading Slot Gaps

`.leading-gap-sm` (8px) · `.leading-gap-md` (12px) · `.leading-gap-lg` (16px) · `.leading-gap-xl` (24px)

### Trailing Slot Gaps

`.trailing-gap-xs` (2px) · `.trailing-gap-sm` (4px) · `.trailing-gap-md` (8px) · `.trailing-gap-lg` (12px)

### Leading Subcomponents

```html
<!-- Circle icon container -->
<div class="circle-container">  <!-- 40×40, border-radius-100, neutral-100 bg -->
  <span class="icon icon-200 material-symbols-rounded">account_circle</span>
</div>

<!-- Team logo -->
<div class="leading-logo"></div>  <!-- uses --team-logo-url CSS var -->

<!-- Images -->
<img class="leading-image-square" src="...">   <!-- 80×80 -->
<img class="leading-image-small" src="...">    <!-- 136×80 -->
<img class="leading-image-large" src="...">   <!-- 244×124 -->

<!-- Payment icon -->
<img class="leading-payment" src="...">  <!-- 33×24 -->
```

### Trailing Subcomponents

```html
<!-- Text pair (right-aligned) -->
<div class="trailing-text-pair">
  <span class="labelBold20">$45.00</span>
  <span class="labelRegular10 text-secondary">per ticket</span>
</div>

<!-- Text link -->
<div class="trailing-text-link">
  <span class="labelBold20 text-brand-interactive">Edit</span>
</div>
```

### Tags

```html
<div class="tag">
  <span class="labelBold10">On Sale</span>
</div>
<div class="tag tag-team-color">
  <span class="labelBold10">Featured</span>
</div>
<div class="tag tag-icon-leading">
  <span class="icon material-symbols-rounded">star</span>
  <span class="labelBold10">Top Pick</span>
</div>
```

### Switch

```html
<div class="switch">
  <input type="checkbox" id="toggle" checked>
  <label for="toggle"></label>
</div>
```

### Stepper

```html
<div class="stepper">
  <button class="stepper-btn">
    <span class="icon material-symbols-rounded">remove</span>
  </button>
  <span class="stepper-count labelBold30">2</span>
  <button class="stepper-btn">
    <span class="icon material-symbols-rounded">add</span>
  </button>
</div>
```

### Status Dot

```html
<div class="status-dot"></div>       <!-- blue (info) -->
<div class="status-dot read"></div>  <!-- grey (read) -->
```

---

## 11. Common Patterns

### Full-Bleed Section Header + Constrained Content

```html
<div class="page-header">
  <div class="container">
    <div class="card-text-pair">
      <h1 class="display500">PAGE TITLE</h1>
      <p class="labelRegular20 text-secondary">Subtitle text</p>
    </div>
  </div>
</div>
```

Page header CSS:
```css
.page-header {
  padding-top: var(--spacing-600);    /* 48px — generous top space */
  padding-bottom: var(--spacing-300); /* 24px */
  border-bottom: var(--border-weight-100) solid var(--neutral-200);
  background: var(--bg-nav);
}
```

### Top Nav Bar

```css
.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-100) var(--margin-large);
  background: var(--bg-nav, var(--bg-surface));
  border-bottom: var(--border-weight-100) solid var(--neutral-200);
  position: sticky;
  top: 0;
  z-index: 100;
}
```

### Two-Column Checkout Layout

```html
<main class="checkout-layout container">
  <div class="checkout-left"><!-- forms --></div>
  <div class="checkout-right"><!-- summary --></div>
</main>
```

```css
.checkout-layout {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: var(--spacing-content);
  padding-top: var(--margin-large);
  padding-bottom: var(--margin-large);
  align-items: start;
}
/* Mobile: stack columns */
@media (max-width: 768px) {
  .checkout-layout { grid-template-columns: 1fr; }
  .checkout-right { order: -1; } /* summary first on mobile */
}
```

### Sidebar + Main Layout

```html
<div class="doc-layout">
  <aside class="doc-sidebar">
    <nav>
      <a href="#section-1" class="active">Section 1</a>
      <a href="#section-2">Section 2</a>
    </nav>
  </aside>
  <div class="doc-main">
    <div class="container-medium mt-row">
      <!-- content sections -->
    </div>
  </div>
</div>
```

```css
.doc-layout { display: flex; align-items: flex-start; }
.doc-sidebar {
  position: sticky;
  top: 56px; /* nav height */
  width: 240px;
  flex-shrink: 0;
  height: calc(100vh - 56px);
  overflow-y: auto;
  background: var(--bg-surface);
  padding: var(--spacing-300);
}
.doc-main { flex: 1; min-width: 0; max-width: var(--container-medium); margin: 0 auto; }
@media (max-width: 1099px) {
  .doc-sidebar { display: none; }
  .doc-main { max-width: 100%; }
}
```

### Section Dividers (doc pages)

```html
<div class="border-top py-large" id="section-id">
  <!-- section content -->
</div>
```

---

## 12. Form Inputs (No DS Component — Custom Required)

There is no input component in the DS. Use this pattern, which matches DS tokens:

```html
<div class="form-field">
  <label for="field" class="labelBold20">Field Label</label>
  <input id="field" class="form-input" type="text" placeholder="Placeholder">
</div>
```

```css
.form-field { display: flex; flex-direction: column; gap: var(--spacing-50); }
.form-field label { padding-left: var(--spacing-100); padding-bottom: var(--spacing-100); }

.form-input {
  background: transparent;
  border: var(--border-weight-100) solid var(--neutral-300);
  border-radius: var(--border-radius-100); /* 8px */
  padding: var(--spacing-200);
  height: 56px;
  width: 100%;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  letter-spacing: -0.02em;
  color: var(--text-primary);
  box-sizing: border-box;
  outline: none;
  transition: border-color 0.15s, border-width 0.15s;
}
.form-input::placeholder { color: var(--text-placeholder); }
.form-input:focus {
  border-width: var(--border-weight-200);   /* 2px on focus */
  border-color: var(--brand-interactive);
}

/* Select dropdown */
.form-input-select {
  appearance: none;
  background-image: url("data:image/svg+xml,..."); /* chevron SVG */
  background-repeat: no-repeat;
  background-position: right var(--spacing-150) center;
  padding-right: var(--spacing-400);
  cursor: pointer;
}
```

### Checkbox (DS uses 28×28 with border-radius-50)

```html
<div class="checkbox-row">
  <input type="checkbox" id="cb" checked>
  <label for="cb" class="labelRegular20">Label text</label>
</div>
```

```css
.checkbox-row { display: flex; align-items: center; gap: var(--spacing-200); }
input[type="checkbox"] {
  appearance: none;
  width: 28px; height: 28px; min-width: 28px;
  border: var(--border-weight-100) solid var(--neutral-300);
  border-radius: var(--border-radius-50); /* 4px — DS select-box size */
  cursor: pointer;
  position: relative;
  background: transparent;
  flex-shrink: 0;
}
input[type="checkbox"]:checked {
  background: var(--brand-interactive);
  border-color: var(--brand-interactive);
}
input[type="checkbox"]:checked::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,..."); /* checkmark SVG */
  background-repeat: no-repeat;
  background-position: center;
  background-size: 18px;
}
```

---

## 13. Icons (Material Symbols Rounded)

```html
<!-- Standard icon -->
<span class="material-symbols-rounded">notifications</span>

<!-- Filled variant -->
<span class="material-symbols-rounded" style="font-variation-settings:'FILL' 1;">lock</span>

<!-- DS icon size classes (from icons.css) -->
<span class="icon icon-200 material-symbols-rounded">account_circle</span>
```

Use the `material-symbols-rounded` class. The DS `icons.css` file provides `.icon`, `.icon-100`, `.icon-200`, `.icon-300`, `.icon-filled`, `.icon-weight-bold`, etc.

---

## 14. Common Pitfalls & Bugs

### ❌ Wrong class casing
`labelregular30` does nothing. Always match case exactly: `labelRegular30`, `labelBold20`, `bodyRegular40`.

### ❌ Invalid Inter font weights
Only `400, 600, 700, 900` are loaded. `font-weight: 200`, `300`, `500` will silently fall back to 400.

### ❌ Hardcoded colors instead of tokens
Never: `color: #266092` or `background: #0C233F`
Always: `color: var(--color-interactive)` or `background: var(--bg-surface)`

### ❌ Using .btn-icon for letter content in circle buttons
`.btn-icon` applies `width: 24px; height: 24px; font-size: 24px` for Material Symbol glyphs.
For a letter/avatar: use `.btn-circle-letter` — it sets Inter 600 at the right size without the icon box sizing.

### ❌ Text style classes overriding surface fill colors
`.labelBold30` sets `color: var(--text-primary)` which overrides the parent surface's color.
Fix: `color: inherit` on child elements, or add `.surface-fill* * { color: inherit; }`.

### ❌ Custom max-width instead of container classes
Don't write `max-width: 1200px; margin: 0 auto; padding: 0 32px`.
Use `.container` — same result, responsive padding included.

### ❌ Mixing horizontal padding in both wrapper and content
If an outer div has `padding: X var(--margin-large)` and an inner div also has horizontal padding, content will be double-padded. Let one level own the horizontal padding. For full-bleed sections: outer handles background/border, inner `.container` handles horizontal padding.

### ❌ Using curly/smart quotes as dashes
Range notations like `4px–80px` require an en-dash (–, U+2013). The smart left quote (", U+201C) looks similar but is wrong.

---

## 15. Breakpoints

| Name | Range |
|---|---|
| Mobile | 0–499px |
| Tablet | 500–1099px |
| Desktop | 1100px+ |

Sidebar visibility: hide at `max-width: 1099px`.
Card grids: typically switch from multi-column to single at `max-width: 768px`.

---

## 16. boilerplate.css Utilities

These are available without any custom CSS:

**Layout:** `.flex-center` · `.flex-column` · `.flex-row`
**Gap:** `.gap-xs` (8px) · `.gap-sm` (12px) · `.gap-md` (16px) · `.gap-lg` (24px) · `.gap-xl` (32px)
**Grids:** `.grid` with column variants for mobile/tablet/desktop
**Visibility:** `.hide-mobile` · `.show-mobile` · `.hide-tablet` · `.hide-desktop` etc.
**Spacing shorthand:** All `m-`, `p-`, `gap-` utility classes at every spacing step
