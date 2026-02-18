# Component Generation Prompt System

⠀⠀⠀⠀⠀⣠⣴⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣶⣦⣤⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠛⢛⣛⣛⣋⣉⣉⣉⣩⣭⣭⣭⣭⣭⣭⣭⣭⣭⣭⣭⣭⣭⣍⠉⢩⣍⣉⣉⣉⣉⣙⣛⣛⡛⠛⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀
⠀⠀⠀⢀⣾⣿⣿⡟⠋⠉⠉⠉⣉⣛⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀
⠀⠀⢀⣾⣿⣿⡟⠁⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀
⠀⣠⣿⣿⣿⡟⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀
⢠⣿⣿⣿⠏⠀⠀⠀⠀⠀⠙⠛⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆
⣿⣿⣿⡏⠀⠀⠀⢀⣤⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⡇⠀⠀⠀⣾⣿⣿⣿⠙⠿⣿⣿⡏⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⡇⠀⠀⢠⣿⣿⣿⣿⠀⠀⠉⠛⠇⠰⣿⣿⣿⣿⣿⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⡇⠀⠀⣸⣿⣿⣿⣿⣤⣀⠀⠀⠀⠀⠙⠻⢿⣿⣿⣷⣄⠈⠻⣿⣿⣿⣿⣿⣿⣿⡇⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⡇⠀⠀⣿⣿⣿⣿⣿⣿⣿⣷⣦⡄⠀⠀⠀⠀⠈⠙⠿⣿⣿⣄⠈⢻⣿⣿⣿⣿⣿⣿⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⡇⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠘⣶⣤⣀⠀⠀⠀⠀⠉⠛⠁⠀⢹⣿⣿⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⡇⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣷⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⡇⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⣄⡀⠉⢻⣿⣿⣦⠀⠠⣄⣠⣼⣿⣿⣿⣿⣿⣿⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⡇⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠹⣿⣷⡀⠙⣿⣿⣿⡄⠘⢿⣿⣿⣿⣿⣿⣿⣿⡏⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⡇⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡀⠀⠈⠻⣿⡄⠘⣿⣿⣿⡄⠀⢿⣿⣿⣿⣿⣿⣿⣇⢹⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⡇⢸⣿⣿⣿⣿⣿⡿⠿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠉⠀⠹⣿⣿⠇⠀⠈⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⡇⢸⣿⣿⣿⣿⡟⠀⠀⠈⢻⣿⣿⣿⣿⣷⣄⡀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⠀⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⡇⣸⣿⣿⣿⣿⣿⣄⡀⢀⣼⣿⡇⠉⠛⠿⣿⣿⣶⣤⡀⠀⢀⣀⣤⣾⣿⣿⣿⣿⣿⣿⣿⠀⢻⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠈⠙⠻⢿⣿⣶⣀⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⢸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣀⠀⠀⠀⠀⠈⠙⠿⠆⠈⢻⣿⣿⣿⣿⣿⣿⣿⠀⠘⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⢿⣶⣤⡀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⠀⠀⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⡿⠟⠉⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⣷⣦⣄⣀⢀⣰⣿⣿⣿⣿⣿⣿⣿⠀⠀⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠀⠀⢀⣀⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⢸⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡿⠃⢀⣴⣾⣿⣿⣿⣿⣿⣿⣿⣷⣦⣄⠀⠀⠀⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⢸⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⠃⢠⣾⡿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⢸⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⡏⠀⣾⣿⣷⡄⠈⠙⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⠀⠀⢻⣿⣿⣿⣿⣿⣿⡇⠀⠀⢸⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⠄⢸⣿⣿⣿⣿⣦⡀⠀⠀⠀⠈⠙⠻⣿⣿⣿⣿⣿⣿⣦⠀⠈⣿⣿⣿⣿⣿⣿⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿
⣿⣿⡇⣿⣿⣿⠀⢸⣿⣿⣿⣿⣿⣿⣦⣀⠀⠀⠀⠀⠀⠉⠻⣿⣿⣿⣿⡆⠀⢹⣿⣿⣿⣿⡇⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿
⣿⣿⡇⣿⣿⣿⠀⢸⣿⣿⣿⣿⣿⣯⠙⠿⣷⣦⣀⠀⠀⠀⠀⠈⠻⣿⣿⣿⠀⢸⣿⣿⣿⣿⠃⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿
⣿⣿⡇⣿⣿⣿⡅⢸⣿⣿⣿⣿⣿⣿⡇⠀⠘⢿⣿⣷⣦⣀⠀⠀⠀⠘⢿⣿⠀⢸⣿⣿⣿⡏⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿
⣿⣿⡇⣿⣿⣿⣇⠈⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⢻⣿⣿⣿⣷⣦⡀⠀⠀⢻⠀⢸⣿⣿⣿⠃⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿
⣿⣿⡇⣿⣿⣿⣿⡀⢹⣿⣿⣿⣿⣿⣷⡄⠀⠀⠈⣿⣿⣿⣿⣿⣷⣤⡀⠘⠀⣸⣿⣿⡏⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⠆⣿⣿⣿⣿⣧⠀⠻⣿⣿⣿⣿⣿⣿⡄⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣄⢀⣿⣿⡿⠁⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⠂⢽⣿⣿⣿⣿⣧⡀⠙⢿⣿⣿⣿⣿⠃⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⡁⠸⣿⣿⣿⣿⣿⣷⣄⠀⠈⠉⠉⠁⠀⠀⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿
⢿⣿⣧⡀⠙⢿⣿⣿⣿⣿⣿⣷⣦⣄⣀⣀⣠⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⡿
⠈⠻⣿⣿⣶⣤⣬⣍⣛⣛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⢀⣀⣤⣾⣿⣿⣿⣿⣿⣿⣿⠟⠁
⠀⠀⠀⠉⠛⠛⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠛⠛⠉⠀⠀⠀
⠀⠀⠀⠀⠀⠹⢶⣶⣤⣤⣤⣤⣍⣉⣉⣉⣉⣉⣙⣋⣛⣛⣛⣛⣛⣙⣉⣉⣉⣉⣉⣉⣩⣤⣤⣤⣤⣶⣶⠏⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠉⠙⠛⠛⠿⠿⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⠛⠛⠋⠉⠀⠀⠀⠀⠀⠀⠀

---

## 🚀 Quick Start

**Most Common Pattern - Card with Header:**
```html
<div class="card-closed">
  <div class="card-closed-header">
    <div class="card-text-pair">
      <h3 class="title50">Card Title</h3>
      <p class="labelRegular20 text-secondary">Metadata or date</p>
    </div>
  </div>
  <div class="card-closed-body">
    <p class="bodyRegular30">Description or body content here.</p>
  </div>
</div>
```

**Hero Section Pattern:**
```html
<section class="flex-center py-landing">
  <div class="container-maximum text-center">
    <div class="card-text-pair mb-400">
      <h1 class="display600">HEADLINE TEXT</h1>
      <p class="labelRegular50 text-secondary">Supporting subheadline</p>
    </div>
    <button class="btn btn-primary btn-700">
      Call to Action
    </button>
  </div>
</section>
```

**Section Header Pattern:**
```html
<div class="card-text-pair mb-300">
  <h2 class="display400">Section Title</h2>
  <p class="labelRegular30 text-secondary">Section description</p>
</div>
```

---

## Critical Requirements

### ✅ Non-Negotiable Rules

1. **ALWAYS use `.card-text-pair` for title + subtitle combinations**
   - Every label/sublabel pair needs this wrapper
   - Provides consistent spacing automatically
   - Works across all themes

2. **ALWAYS use text style classes - NEVER custom font-size**
   - Use: `.title50`, `.bodyRegular30`, `.labelBold40`
   - Don't use: `font-size: 20px` or `style="font-size: 20px"`

3. **ALWAYS use spacing tokens or utilities - NEVER hardcoded pixels**
   - Use: `var(--spacing-300)`, `.mb-200`, `.py-large`
   - Don't use: `margin-bottom: 16px` or `padding: 24px`

4. **ALWAYS use `.text-secondary` on sublabels**
   - Sublabels need lower visual weight
   - This is built into the design system

5. **Component must work across themes**
   - Test with `data-theme="wolves"` AND `data-theme="athletics"`
   - Test both `data-mode="light"` and `data-mode="dark"`

6. **ALWAYS let surface token colors cascade to children — NEVER fight them with text-style classes**
   - Surface tokens like `.surface-fillNeutral`, `.surface-fillColor`, `.surface-fillBlack`, etc. set their own `color` property for correct contrast
   - Text style classes (`.labelBold30`, `.bodyRegular20`, etc.) also set `color: var(--text-primary)`, which OVERRIDES the surface token's color
   - This causes invisible text (e.g. black text on a black button in dark mode)
   - Fix: add `color: inherit` on children inside surface-colored containers
   - This applies to ALL filled surfaces AND to any custom container that sets its own background + text color (e.g. code blocks)
   - **Note:** Button classes (`.btn`) already handle this — `.btn *` sets `color: inherit` automatically

7. **ALWAYS use the button component classes for buttons — NEVER build custom buttons**
   - Use `.btn` + type + size classes (e.g. `.btn .btn-primary .btn-300`)
   - Don't hand-roll background, padding, hover states — they're all built in
   - Button classes handle color inheritance, scale interactions, disabled states, and theme compatibility

8. **ALWAYS use the list row component classes for list items — NEVER build custom list rows**
   - Use the 3-slot architecture: `.leading` → `.list-row-content` → `.trailing`
   - Use `.list-row-text-pair` (NOT `.card-text-pair`) for label+sublabel inside list rows
   - Use built-in subcomponents: `.tag`, `.info-block`, `.status-dot`, `.switch`, `.stepper`

9. **ALWAYS use the input field component classes for text inputs and selects — NEVER build custom form inputs**
   - Use `.input-field` wrapper with `.input-label-row`, `.input-and-message`, and `.input-control`
   - Use `.input-select` modifier for dropdowns with `.input-select-display` and `.input-select-chevron`
   - State classes: `.is-error`, `.is-disabled`, `.has-value` on `.input-field`
   - Select dropdowns use `arrow_drop_down` icon, not `expand_more`

10. **ALWAYS use tag and chip component classes for labels and filters — NEVER build custom badges**
   - Tags are static: `.tag` (default) or `.tag .tag-team-color`
   - Chips are interactive: `.chip` + surface token + `.scale-300`
   - Icon positions: `.tag-icon-leading`, `.tag-icon-trailing`, `.chip-icon-leading`, `.chip-icon-trailing`
   - Chips require composition with interactive tokens from `interactive-tokens.css`

11. **NEVER use `--color-interactive` or `--color-inverted` directly — use the mode-aware semantic tokens**
   - Use `--brand-interactive` for links, active states, focus rings, icon accents, and brand-colored text
   - Use `--brand-inverted` for the complementary brand color
   - These tokens swap correctly between light and dark mode; the `--brand-*` originals do not

---

## Text Pairs - Choose the Right Scale

Text pairs combine a label + sublabel at the correct sizing scale for your context.

### Common Use Cases

| Scale | When to Use | Label Style | Sublabel Style | Gap |
|-------|-------------|-------------|----------------|-----|
| **9000** | Hero headlines, landing pages | display600 | labelRegular50 | 8px |
| **8000** | Page headers, major sections | display500 | labelRegular40 | 8px |
| **7000** | Section headers, modals | display400 | labelRegular30 | 4px |
| **6000** | Component headers | display300 | labelRegular20 | 2px |
| **5000** | **Card headers (MOST COMMON)** | title50 | labelRegular20 | 2px |
| **4000** | Small cards, list items | labelBold40 | labelRegular20 | 2px |
| **3000** | Compact lists, dense UI | labelBold30 | labelRegular10 | 2px |

### Copy-Paste Examples

```html
<!-- Text Pair 9000 - Hero -->
<div class="card-text-pair">
  <h1 class="display600">HERO HEADLINE</h1>
  <p class="labelRegular50 text-secondary">Supporting message</p>
</div>

<!-- Text Pair 8000 - Page Header -->
<div class="card-text-pair">
  <h1 class="display500">Page Title</h1>
  <p class="labelRegular40 text-secondary">Page description</p>
</div>

<!-- Text Pair 7000 - Section Header -->
<div class="card-text-pair">
  <h2 class="display400">Section Title</h2>
  <p class="labelRegular30 text-secondary">Section subtitle</p>
</div>

<!-- Text Pair 5000 - Card Header (MOST COMMON) -->
<div class="card-text-pair">
  <h3 class="title50">Card Title</h3>
  <p class="labelRegular20 text-secondary">Metadata or date</p>
</div>

<!-- Text Pair 4000 - Small Card -->
<div class="card-text-pair">
  <h4 class="labelBold40">Item Title</h4>
  <p class="labelRegular20 text-secondary">Item metadata</p>
</div>
```

---

## Buttons

The button system provides 8 types, 3 sizes, icon placement variants, circle icon buttons, and button groups. All buttons handle color inheritance, scale interactions, disabled states, and theme compatibility automatically.

### Button Composition

Every button combines three classes: **base** + **type** + **size**.

```html
<button class="btn btn-primary btn-300">Label</button>
```

### Button Types

| Class | Use For | Surface |
|-------|---------|---------|
| `.btn-transactional` | Revenue actions (Buy, Purchase, Add to Cart) | Brand transactional fill |
| `.btn-primary` | Main page action — limit 1 per view (Submit, Save, Confirm) | Brand primary fill |
| `.btn-neutral` | High-contrast non-branded CTA (Cancel, Back) | Neutral-1000 fill |
| `.btn-secondary` | Supporting action beside primary (outlined) | Transparent + border |
| `.btn-tertiary` | Low-emphasis inline actions (text-only) | Ghost (transparent) |
| `.btn-destructive` | Irreversible actions (Delete, Remove) | Status-error fill |
| `.btn-white` | CTA on dark/brand surfaces | White fill, black text |
| `.btn-white-tertiary` | Low-emphasis on dark surfaces | Ghost, white text |

### Button Sizes

| Class | Height | Use For |
|-------|--------|---------|
| `.btn-700` | 56px | Hero CTAs, full-width mobile buttons |
| `.btn-300` | 40px | Standard buttons in forms and cards |
| `.btn-100` | 32px | Compact UI, table actions, dense layouts |

### Icon Placement

Add an icon placement class alongside the base+type+size to adjust padding for optical balance.

```html
<!-- Leading icon (icon before label) -->
<button class="btn btn-primary btn-300 btn-icon-leading">
  <span class="btn-icon material-symbols-rounded">star</span>
  <span>Favorite</span>
</button>

<!-- Trailing icon (icon after label) -->
<button class="btn btn-secondary btn-300 btn-icon-trailing">
  <span>Next</span>
  <span class="btn-icon material-symbols-rounded">arrow_forward</span>
</button>

<!-- Icon only — use circle buttons instead (see below) -->
```

### Full-Width Buttons

```html
<button class="btn btn-primary btn-700 btn-fill">Full Width Button</button>
```

### Circle Icon Buttons

For icon-only actions, use circle buttons instead of `.btn-icon-only`. Circle buttons use **scale-300** (subtler interaction than standard buttons).

Compose as: `.btn-circle` + **size** + **type**.

```html
<!-- Large circle, team/brand color -->
<button class="btn-circle btn-circle-700 btn-circle-team">
  <span class="btn-icon material-symbols-rounded">play_arrow</span>
</button>

<!-- Small circle, neutral -->
<button class="btn-circle btn-circle-300 btn-circle-neutral">
  <span class="btn-icon material-symbols-rounded">close</span>
</button>
```

**Circle sizes:** `.btn-circle-700` (56×56, 32px icon) · `.btn-circle-300` (40×40, 24px icon)

**Circle types (filled):** `.btn-circle-team` · `.btn-circle-neutral` · `.btn-circle-inverted` · `.btn-circle-black` · `.btn-circle-white` · `.btn-circle-destructive`

**Circle types (outlined):** `.btn-circle-team-secondary` · `.btn-circle-neutral-secondary` · `.btn-circle-destructive-secondary`

**Circle types (ghost):** `.btn-circle-team-tertiary` · `.btn-circle-neutral-tertiary` · `.btn-circle-destructive-tertiary`

### Button Groups

```html
<!-- Horizontal group (default) -->
<div class="btn-group">
  <button class="btn btn-primary btn-300">Save</button>
  <button class="btn btn-secondary btn-300">Cancel</button>
</div>

<!-- Stacked group (full-width buttons) -->
<div class="btn-group-stack">
  <button class="btn btn-transactional btn-700">Buy Tickets</button>
  <button class="btn btn-secondary btn-700">Learn More</button>
</div>
```

### Disabled State

All button types support `:disabled` or `[disabled]` — they get 40% opacity, `cursor: not-allowed`, and no scale interaction.

```html
<button class="btn btn-primary btn-300" disabled>Sold Out</button>
<button class="btn-circle btn-circle-300 btn-circle-neutral" disabled>
  <span class="btn-icon material-symbols-rounded">delete</span>
</button>
```

---

## List Rows

The list row is a composable 3-slot row component: **Leading** → **Main Content** → **Trailing**. Any slot can be omitted. Use for settings, notifications, ticket lists, account rows, and any vertically stacked list UI.

**Important:** List rows use their own text pair class (`.list-row-text-pair`) instead of `.card-text-pair`. The list row text pair has a fixed scale: **labelBold30** label + **labelRegular10** sublabel with 2px gap.

### Basic Structure

```html
<div class="list-row">
  <!-- Leading slot (optional) -->
  <div class="leading leading-gap-md">
    <span class="icon icon-200">star</span>
  </div>

  <!-- Main content (required) -->
  <div class="list-row-content">
    <div class="list-row-text-pair">
      <span class="labelBold30">Label</span>
      <span class="labelRegular10 text-secondary">Sublabel</span>
    </div>
  </div>

  <!-- Trailing slot (optional) -->
  <div class="trailing trailing-gap-xs">
    <span class="icon icon-200">chevron_right</span>
  </div>
</div>
```

### Leading Slot Variants

The leading slot holds the left-side element. Choose a **gap modifier** based on the content type:

| Gap Class | Gap Size | Use With |
|-----------|----------|----------|
| `.leading-gap-sm` | 8px | Logo variants |
| `.leading-gap-md` | 12px | Icon, Circle, Select box |
| `.leading-gap-lg` | 16px | Square / Small image |
| `.leading-gap-xl` | 24px | Large image |

**Leading content types:**

```html
<!-- Icon -->
<div class="leading leading-gap-md">
  <span class="icon icon-200">notifications</span>
</div>

<!-- Circle Icon -->
<div class="leading leading-gap-md">
  <div class="circle-container">
    <span class="icon icon-200">star</span>
  </div>
</div>

<!-- Circle Letter -->
<div class="leading leading-gap-md">
  <div class="circle-container">
    <span class="display100">A</span>
  </div>
</div>

<!-- Select Box (for multi-select / edit modes) -->
<div class="leading leading-gap-md">
  <div class="select-box"></div>
</div>

<!-- Status Dot -->
<div class="leading leading-gap-md">
  <div class="status-dot"></div>       <!-- Unread (blue) -->
  <div class="status-dot read"></div>  <!-- Read (grey) -->
</div>

<!-- Square Image (80×80) -->
<div class="leading leading-gap-lg">
  <img class="leading-image-square" src="..." alt="">
</div>

<!-- Small Image (136×80) -->
<div class="leading leading-gap-lg">
  <img class="leading-image-small" src="..." alt="">
</div>

<!-- Large Image (244×124) -->
<div class="leading leading-gap-xl">
  <img class="leading-image-large" src="..." alt="">
</div>

<!-- Team Logo (48×48) — auto-renders active team's logo, no src needed -->
<div class="leading leading-gap-sm">
  <div class="leading-logo" role="img" aria-label="Team logo"></div>
</div>

<!-- Payment Icon (33×24) -->
<div class="leading leading-gap-md">
  <img class="leading-payment" src="..." alt="">
</div>
```

### Main Content — Stacking Order

`.list-row-content` stacks up to 3 sections vertically with 8px gap. Any section can be omitted:

1. **Text Pair** — `.list-row-text-pair`
2. **Tag Group** — `.tag-group` containing `.tag` elements
3. **Info Block** — `.info-block` containing `.info-item` elements

```html
<div class="list-row-content">
  <!-- 1. Text Pair -->
  <div class="list-row-text-pair">
    <span class="labelBold30">Event Name</span>
    <span class="labelRegular10 text-secondary">Sat, Mar 15 · 7:00 PM</span>
  </div>

  <!-- 2. Tag Group (1–2 tags) -->
  <div class="tag-group">
    <div class="tag tag-team-color">
      <span class="labelBold20">VIP</span>
    </div>
    <div class="tag">
      <span class="labelBold20">Floor</span>
    </div>
  </div>

  <!-- 3. Info Block (1–4 info items) -->
  <div class="info-block">
    <div class="info-item">
      <span class="icon icon-200">event_seat</span>
    </div>
    <div class="info-item">
      <span class="icon icon-200">confirmation_number</span>
    </div>
    <div class="info-item has-label">
      <span class="icon icon-200">receipt</span>
      <span class="labelRegular10">3 Items</span>
    </div>
  </div>
</div>
```

### Tags

```html
<!-- Default tag -->
<div class="tag">
  <span class="labelBold20">Label</span>
</div>

<!-- Team-colored tag -->
<div class="tag tag-team-color">
  <span class="labelBold20">Label</span>
</div>

<!-- Tag with leading icon -->
<div class="tag tag-icon-leading">
  <span class="icon icon-200">flag</span>
  <span class="labelBold20">Label</span>
</div>

<!-- Tag with trailing icon -->
<div class="tag tag-icon-trailing">
  <span class="labelBold20">Label</span>
  <span class="icon icon-200">arrow_forward</span>
</div>
```

### Info Items & Info Block

Info blocks show 1–4 icon indicators. Convention: only the **last** item shows its label — all others are icon-only.

```html
<div class="info-block">
  <div class="info-item">
    <span class="icon icon-200">event_seat</span>
  </div>
  <div class="info-item">
    <span class="icon icon-200">confirmation_number</span>
  </div>
  <div class="info-item has-label">
    <span class="icon icon-200">receipt</span>
    <span class="labelRegular10">3 Items</span>
  </div>
</div>
```

### Trailing Slot Variants

The trailing slot holds the right-side element. Choose a **gap modifier** based on the content type:

| Gap Class | Gap Size | Use With |
|-----------|----------|----------|
| `.trailing-gap-xs` | 2px | Icon (chevron, arrow) |
| `.trailing-gap-sm` | 4px | Text Pair |
| `.trailing-gap-md` | 8px | Text Link |
| `.trailing-gap-lg` | 12px | Button |

```html
<!-- Chevron (navigation) -->
<div class="trailing trailing-gap-xs">
  <span class="icon icon-200">chevron_right</span>
</div>

<!-- Text Link (chip action) -->
<div class="trailing trailing-gap-md">
  <span class="trailing-text-link labelBold20">View All</span>
</div>

<!-- Right-aligned Text Pair -->
<div class="trailing trailing-gap-sm">
  <div class="trailing-text-pair">
    <span class="labelBold20">$42.00</span>
    <span class="labelRegular10 text-secondary">Per ticket</span>
  </div>
</div>

<!-- Switch -->
<div class="trailing trailing-gap-md">
  <div class="switch">
    <input type="checkbox" id="switch-1">
    <label for="switch-1"></label>
  </div>
</div>

<!-- Stepper -->
<div class="trailing trailing-gap-lg">
  <div class="stepper">
    <button class="stepper-btn disabled">
      <span class="icon icon-200">remove</span>
    </button>
    <span class="stepper-count labelBold50">0</span>
    <button class="stepper-btn">
      <span class="icon icon-200">add</span>
    </button>
  </div>
</div>

<!-- Button -->
<div class="trailing trailing-gap-lg">
  <button class="btn btn-primary btn-100">Action</button>
</div>
```

### List Row States

```html
<!-- Default (tappable) -->
<div class="list-row">...</div>

<!-- Not tappable (no pointer cursor) -->
<div class="list-row not-tappable">...</div>

<!-- Disabled (30% opacity, no interaction) -->
<div class="list-row disabled">...</div>
```

### List Row in Context — Row Container Pattern

List rows don't include their own padding or dividers. Wrap them in a container that provides padding and borders:

```html
<div class="demo-row-container" style="padding: var(--spacing-150) var(--spacing-200); border-bottom: 1px solid var(--border-default);">
  <div class="list-row">
    ...
  </div>
</div>
```

---

## Input Fields

The input field system provides text inputs and select dropdowns with full state, variant, and modifier support. All inputs handle focus states, error validation, disabled states, and theme compatibility automatically.

### Input Field Structure

Every input field uses a consistent structure with optional elements:

```html
<div class="input-field">
  <!-- Label row (optional) -->
  <div class="input-label-row">
    <label class="input-label" for="input-id">Label</label>
    <a class="input-link" href="#">Optional link</a>
  </div>

  <!-- Input and message wrapper -->
  <div class="input-and-message">
    <!-- Input control shell -->
    <div class="input-control">
      <span class="input-icon material-symbols-rounded">icon_name</span>
      <input type="text" id="input-id" placeholder="Placeholder">
      <button class="input-clear material-symbols-rounded" type="button">close</button>
    </div>

    <!-- Helper/error message (optional) -->
    <p class="input-message">Helper text or error message</p>
  </div>
</div>
```

### Text Input Variants

**Basic input (no label):**
```html
<div class="input-field">
  <div class="input-and-message">
    <div class="input-control">
      <input type="text" placeholder="Placeholder">
    </div>
  </div>
</div>
```

**With label:**
```html
<div class="input-field">
  <div class="input-label-row">
    <label class="input-label" for="input-1">Label</label>
  </div>
  <div class="input-and-message">
    <div class="input-control">
      <input type="text" id="input-1" placeholder="Placeholder">
    </div>
  </div>
</div>
```

**With leading icon:**
```html
<div class="input-field">
  <div class="input-label-row">
    <label class="input-label" for="input-2">Email</label>
  </div>
  <div class="input-and-message">
    <div class="input-control">
      <span class="input-icon material-symbols-rounded">mail</span>
      <input type="email" id="input-2" placeholder="you@example.com">
    </div>
  </div>
</div>
```

**With trailing clear button:**
```html
<div class="input-field" id="field-1">
  <div class="input-label-row">
    <label class="input-label" for="input-3">Search</label>
  </div>
  <div class="input-and-message">
    <div class="input-control">
      <input type="text" id="input-3" placeholder="Type to search"
        oninput="syncHasValue('field-1', this)">
      <button class="input-clear material-symbols-rounded" type="button"
        onclick="clearInput('field-1', 'input-3')">close</button>
    </div>
  </div>
</div>
```

**With icon and clear button:**
```html
<div class="input-field" id="field-2">
  <div class="input-label-row">
    <label class="input-label" for="input-4">Username</label>
  </div>
  <div class="input-and-message">
    <div class="input-control">
      <span class="input-icon material-symbols-rounded">person</span>
      <input type="text" id="input-4" placeholder="@username"
        oninput="syncHasValue('field-2', this)">
      <button class="input-clear material-symbols-rounded" type="button"
        onclick="clearInput('field-2', 'input-4')">close</button>
    </div>
  </div>
</div>
```

**With label link (e.g. "Forgot password?"):**
```html
<div class="input-field">
  <div class="input-label-row">
    <label class="input-label" for="input-5">Password</label>
    <a class="input-link" href="#">Forgot password?</a>
  </div>
  <div class="input-and-message">
    <div class="input-control">
      <input type="password" id="input-5" placeholder="Enter password">
    </div>
  </div>
</div>
```

**With helper message:**
```html
<div class="input-field">
  <div class="input-label-row">
    <label class="input-label" for="input-6">Username</label>
  </div>
  <div class="input-and-message">
    <div class="input-control">
      <input type="text" id="input-6" placeholder="@username">
    </div>
    <p class="input-message">Must be unique. Letters and numbers only.</p>
  </div>
</div>
```

### Select Dropdown

Select dropdowns use the same structure with additional elements for the display text and chevron icon. The native `<select>` element sits as an invisible overlay.

**Basic select:**
```html
<div class="input-field input-select" id="select-1">
  <div class="input-label-row">
    <label class="input-label" for="sel-1">Sport</label>
  </div>
  <div class="input-and-message">
    <div class="input-control">
      <span class="input-select-display is-placeholder" id="sel-1-display">Choose a sport</span>
      <span class="input-select-chevron material-symbols-rounded">arrow_drop_down</span>
      <select id="sel-1"
        onchange="syncSelect('select-1', 'sel-1-display', this)"
        onfocus="openSelect('select-1')"
        onblur="closeSelect('select-1')">
        <option value="" disabled selected>Choose a sport</option>
        <option value="basketball">Basketball</option>
        <option value="soccer">Soccer</option>
        <option value="baseball">Baseball</option>
      </select>
    </div>
  </div>
</div>
```

**Select with leading icon:**
```html
<div class="input-field input-select" id="select-2">
  <div class="input-label-row">
    <label class="input-label" for="sel-2">Position</label>
  </div>
  <div class="input-and-message">
    <div class="input-control">
      <span class="input-icon material-symbols-rounded">sports_basketball</span>
      <span class="input-select-display is-placeholder" id="sel-2-display">Choose a position</span>
      <span class="input-select-chevron material-symbols-rounded">arrow_drop_down</span>
      <select id="sel-2"
        onchange="syncSelect('select-2', 'sel-2-display', this)"
        onfocus="openSelect('select-2')"
        onblur="closeSelect('select-2')">
        <option value="" disabled selected>Choose a position</option>
        <option value="pg">Point Guard</option>
        <option value="sg">Shooting Guard</option>
      </select>
    </div>
  </div>
</div>
```

### Input States

Add state classes to the `.input-field` wrapper:

**Error state:**
```html
<div class="input-field is-error has-value">
  <div class="input-label-row">
    <label class="input-label" for="input-error">Email</label>
  </div>
  <div class="input-and-message">
    <div class="input-control">
      <span class="input-icon material-symbols-rounded">mail</span>
      <input type="email" id="input-error" value="not-an-email">
    </div>
    <p class="input-message">Please enter a valid email address.</p>
  </div>
</div>
```

**Disabled state:**
```html
<div class="input-field is-disabled">
  <div class="input-label-row">
    <label class="input-label" for="input-disabled">Label</label>
  </div>
  <div class="input-and-message">
    <div class="input-control">
      <input type="text" id="input-disabled" placeholder="Placeholder" disabled>
    </div>
  </div>
</div>
```

**Has value (shows clear button):**
```html
<div class="input-field has-value" id="field-3">
  <div class="input-and-message">
    <div class="input-control">
      <input type="text" id="input-7" value="Entry"
        oninput="syncHasValue('field-3', this)">
      <button class="input-clear material-symbols-rounded" type="button"
        onclick="clearInput('field-3', 'input-7')">close</button>
    </div>
  </div>
</div>
```

### Required JavaScript Helpers

Input fields with clear buttons or select dropdowns need these JavaScript helpers:

```javascript
// Text input with clear button
function syncHasValue(fieldId, input) {
  const field = document.getElementById(fieldId);
  if (input.value.trim()) {
    field.classList.add('has-value');
  } else {
    field.classList.remove('has-value');
  }
}

function clearInput(fieldId, inputId) {
  const field = document.getElementById(fieldId);
  const input = document.getElementById(inputId);
  input.value = '';
  field.classList.remove('has-value', 'is-error');
  const msg = field.querySelector('.input-message');
  if (msg) msg.style.display = 'none';
  input.focus();
}

// Select dropdown
function syncSelect(fieldId, displayId, selectEl) {
  const display = document.getElementById(displayId);
  const chosen = selectEl.options[selectEl.selectedIndex];
  if (chosen && chosen.value) {
    display.textContent = chosen.text;
    display.classList.remove('is-placeholder');
  } else {
    display.textContent = chosen.text;
    display.classList.add('is-placeholder');
  }
}

function openSelect(fieldId) {
  document.getElementById(fieldId).classList.add('is-open');
}

function closeSelect(fieldId) {
  document.getElementById(fieldId).classList.remove('is-open');
}
```

### Input Design Specifications

**Dimensions:**
- Height: 56px
- Padding: 16px left, 8px right
- Border radius: 8px (--border-radius-100)
- Border: 1px solid var(--neutral-300)
- Focus border: 2px solid var(--org-primary-button)

**Colors:**
- Default border: var(--neutral-300)
- Hover border: var(--neutral-200)
- Hover background: var(--neutral-100)
- Focus border: var(--org-primary-button)
- Error border: var(--status-error)
- Label (focused): var(--org-primary-button)
- Icon (focused): var(--org-primary-button)
- Placeholder text: var(--text-secondary)
- Helper text: var(--text-secondary)
- Error message: var(--status-error)

**Typography:**
- Label: Inter 16px / 600 / -2% letter-spacing
- Input text: Inter 16px / 400 / -2% letter-spacing
- Helper/error text: Inter 14px / 400 / -2% letter-spacing / 1.3 line-height

**Icons:**
- Size: 24px
- Leading icon: 24px with auto spacing via flex gap
- Chevron (select): 24px, rotates 180° when open
- Clear button: 40×40px hit target, 24px icon

**Spacing:**
- Label row to input: 2px (--spacing-25)
- Input to message: 8px (--spacing-100)
- Internal gap (icon/input/clear): 12px (--spacing-150)

**States:**
- Focus: 2px brand border, label and icons turn brand color
- Error: Red border, shake animation, error message shown
- Disabled: 25% opacity, no pointer events
- Has value: Shows clear button (text inputs only)

### Input Component CSS Load Order

Make sure to load `input-components.css` after the base system files:

```html
<link rel="stylesheet" href="https://diet-air-ds.vercel.app/design-tokens-master.css">
<link rel="stylesheet" href="https://diet-air-ds.vercel.app/spacing-tokens.css">
<link rel="stylesheet" href="https://diet-air-ds.vercel.app/border-effects-tokens.css">
<link rel="stylesheet" href="https://diet-air-ds.vercel.app/text-styles-system.css">
<link rel="stylesheet" href="https://diet-air-ds.vercel.app/boilerplate.css">
<link rel="stylesheet" href="input-components.css">
```

---

## Tags & Chips

The tag and chip system provides static labels and interactive filters. Both are 32px height with 4px border radius using labelBold20 typography (Inter Semi Bold 14px).

### Tag Component

Tags are static, non-interactive label badges used for metadata, categories, and status information.

**Variants:**
- **Default**: Neutral tinted background (`var(--neutral-100)`), primary text
- **Team Color**: Brand-tinted frosted background, brand interactive text

**Icon Positions:**
- **No icon**: 12px padding left and right
- **Leading**: `.tag-icon-leading` - 8px left, 12px right
- **Trailing**: `.tag-icon-trailing` - 12px left, 8px right

```html
<!-- Default tag -->
<div class="tag">
  <span class="labelBold20">Label</span>
</div>

<!-- Team color tag -->
<div class="tag tag-team-color">
  <span class="labelBold20">Featured</span>
</div>

<!-- Tag with leading icon -->
<div class="tag tag-team-color tag-icon-leading">
  <span class="material-symbols-rounded">star</span>
  <span class="labelBold20">Premium</span>
</div>

<!-- Tag with trailing icon -->
<div class="tag tag-icon-trailing">
  <span class="labelBold20">New</span>
  <span class="material-symbols-rounded">arrow_forward</span>
</div>
```

### Chip Component

Chips are interactive filter/toggle controls for filter bars and selection UIs. **Chips must be composed with interactive surface and scale tokens.**

**Composition Pattern:**
```
.chip + surface token + scale token [+ color modifier] [+ icon position]
```

**Surface Tokens:**
- `.surface-borderNeutral` - Neutral border with hover/active states
- `.surface-ghost` - Transparent with hover tint

**Always use `.scale-300`** for chips (subtle interaction scale).

**Color Modifier:**
- `.chip-team-color` - Overrides text to brand interactive color

**States:**
- `.is-disabled` - 25% opacity, no pointer events

**Icon Positions:**
- `.chip-icon-leading` - 8px left, 12px right
- `.chip-icon-trailing` - 12px left, 8px right

```html
<!-- Bordered chip -->
<button class="chip surface-borderNeutral scale-300">
  <span class="labelBold20">Filter</span>
</button>

<!-- Ghost chip with team color -->
<button class="chip surface-ghost scale-300 chip-team-color">
  <span class="labelBold20">Active</span>
</button>

<!-- Chip with leading icon -->
<button class="chip surface-borderNeutral scale-300 chip-icon-leading">
  <span class="material-symbols-rounded">filter_list</span>
  <span class="labelBold20">Filters</span>
</button>

<!-- Chip with trailing close icon -->
<button class="chip surface-ghost scale-300 chip-team-color chip-icon-trailing">
  <span class="labelBold20">Basketball</span>
  <span class="material-symbols-rounded">close</span>
</button>

<!-- Disabled chip -->
<button class="chip surface-borderNeutral scale-300 is-disabled">
  <span class="labelBold20">Unavailable</span>
</button>
```

### Design Specifications

| Property | Value |
|----------|-------|
| Height | 32px |
| Border radius | 4px |
| Typography | labelBold20 (Inter Semi Bold 14px / -2% letter-spacing) |
| Icon size | 16×16px (Material Symbols) |
| Gap | 4px between icon and label |
| Tag default bg | `var(--neutral-100)` |
| Tag team color bg | `color-mix(in srgb, var(--brand-core) 8%, white 92%)` |
| Tag team color text | `var(--brand-interactive)` |
| Chip padding (no icon) | 12px left and right |
| Chip padding (icon leading) | 8px left, 12px right |
| Chip padding (icon trailing) | 12px left, 8px right |

### CSS Load Order

Include `tag-chip-components.css` after base system files:

```html
<link rel="stylesheet" href="https://diet-air-ds.vercel.app/interactive-tokens.css">
<link rel="stylesheet" href="https://diet-air-ds.vercel.app/button-components.css">
<link rel="stylesheet" href="https://diet-air-ds.vercel.app/list-row-components.css">
<link rel="stylesheet" href="https://diet-air-ds.vercel.app/input-components.css">
<link rel="stylesheet" href="https://diet-air-ds.vercel.app/tag-chip-components.css">
<link rel="stylesheet" href="https://diet-air-ds.vercel.app/boilerplate.css">
```

---

## ❌ Common Mistakes (Don't Do This)

### Wrong: No Text Pair Wrapper
```html
<!-- ❌ WRONG -->
<h3 class="title50">Event Title</h3>
<p class="labelRegular20 text-secondary">Date</p>
```

### Right: Use Text Pair Wrapper
```html
<!-- ✅ CORRECT -->
<div class="card-text-pair">
  <h3 class="title50">Event Title</h3>
  <p class="labelRegular20 text-secondary">Date</p>
</div>
```

### Wrong: Missing .text-secondary
```html
<!-- ❌ WRONG -->
<p class="labelRegular20">Subtitle</p>
```

### Right: Always Use .text-secondary on Sublabels
```html
<!-- ✅ CORRECT -->
<p class="labelRegular20 text-secondary">Subtitle</p>
```

### Wrong: Hardcoded Spacing
```html
<!-- ❌ WRONG -->
<h3 style="margin-bottom: 8px;">Title</h3>
<div style="padding: 24px;">Content</div>
```

### Right: Use Spacing Tokens/Utilities
```html
<!-- ✅ CORRECT -->
<h3 class="mb-100">Title</h3>
<div class="p-300">Content</div>
```

### Wrong: Custom Font Sizes
```html
<!-- ❌ WRONG -->
<h3 style="font-size: 20px;">Title</h3>
```

### Right: Use Text Style Classes
```html
<!-- ✅ CORRECT -->
<h3 class="title50">Title</h3>
```

### Wrong: Text Style Classes Override Surface Token Colors
```html
<!-- ❌ WRONG — .labelBold30 sets color: var(--text-primary), 
     which overrides .surface-fillNeutral's color: var(--inverted-1000).
     Result: invisible text in dark mode (white-on-white) or light mode (black-on-black) -->
<div class="surface-fillNeutral scale-500">
  <span class="labelBold30">Buy Tickets</span>
</div>

<!-- ❌ ALSO WRONG — same problem with custom dark containers like code blocks -->
<pre style="background: var(--neutral-1000); color: var(--inverted-1000);">
  <code class="bodyRegular20">Some code here</code>
</pre>
```

### Right: Add `color: inherit` When Children Are Inside Colored Surfaces
```html
<!-- ✅ CORRECT — force children to inherit the surface token's color -->
<style>
  .surface-fillNeutral *,
  .surface-fillColor *,
  .surface-fillInverted *,
  .surface-fillBlack *,
  .surface-fillWhite * {
    color: inherit;
  }
</style>

<div class="surface-fillNeutral scale-500">
  <span class="labelBold30">Buy Tickets</span>
</div>

<!-- ✅ CORRECT — same fix for custom dark containers -->
<style>
  .code-block * { color: inherit; }
</style>
<pre class="code-block">
  <code class="bodyRegular20">Some code here</code>
</pre>
```

**Why this happens:** Text style classes in `text-styles-system.css` set `color: var(--text-primary)` explicitly. Surface token classes in `interactive-tokens.css` also set `color` on the parent element. CSS specificity means the class on the child element wins, breaking contrast. The fix is a single `color: inherit` rule on children inside any surface that controls its own text color.

### Wrong: Building Custom Buttons
```html
<!-- ❌ WRONG — hand-rolling a button -->
<div class="surface-fillColor scale-500" style="padding: 12px 24px; border-radius: var(--button-border-radius); cursor: pointer;">
  <span class="labelBold30" style="color: inherit;">Buy Tickets</span>
</div>
```

### Right: Use Button Component Classes
```html
<!-- ✅ CORRECT — use the button system -->
<button class="btn btn-transactional btn-300">Buy Tickets</button>
```

### Wrong: Using card-text-pair Inside List Rows
```html
<!-- ❌ WRONG — card-text-pair has different spacing/scale than list rows expect -->
<div class="list-row">
  <div class="list-row-content">
    <div class="card-text-pair">
      <h3 class="title50">Label</h3>
      <p class="labelRegular20 text-secondary">Sublabel</p>
    </div>
  </div>
</div>
```

### Right: Use list-row-text-pair Inside List Rows
```html
<!-- ✅ CORRECT — list-row-text-pair uses the right scale (labelBold30 + labelRegular10) -->
<div class="list-row">
  <div class="list-row-content">
    <div class="list-row-text-pair">
      <span class="labelBold30">Label</span>
      <span class="labelRegular10 text-secondary">Sublabel</span>
    </div>
  </div>
</div>
```

### Wrong: Using `--color-interactive` or `--color-inverted` Directly
```html
<!-- ❌ WRONG — these are raw static theme values and don't switch with light/dark mode.
     In dark mode, --color-interactive stays as the light-mode brand color,
     causing poor contrast against dark backgrounds. -->
<a style="color: var(--color-interactive);">Learn More</a>
<span class="icon" style="color: var(--color-inverted);">star</span>
```

### Right: Use `--brand-interactive` and `--brand-inverted`
```html
<!-- ✅ CORRECT — these tokens swap automatically:
     Light mode: --brand-interactive = color-interactive, --brand-inverted = color-inverted
     Dark mode:  --brand-interactive = color-inverted,   --brand-inverted = color-interactive -->
<a style="color: var(--brand-interactive);">Learn More</a>
<span class="icon" style="color: var(--brand-interactive);">star</span>

<!-- Or use the utility class: -->
<a class="text-brand-interactive">Learn More</a>
```

### Wrong: Building Custom Text Inputs
```html
<!-- ❌ WRONG — hand-rolling an input -->
<div style="padding: 16px; border: 1px solid var(--neutral-300); border-radius: 8px;">
  <input type="text" style="border: none; outline: none;" placeholder="Enter text">
</div>
```

### Right: Use Input Field Component Classes
```html
<!-- ✅ CORRECT — use the input field system -->
<div class="input-field">
  <div class="input-and-message">
    <div class="input-control">
      <input type="text" placeholder="Enter text">
    </div>
  </div>
</div>
```

### Wrong: Building Custom Select Dropdowns
```html
<!-- ❌ WRONG — custom dropdown markup -->
<div class="custom-select">
  <div class="select-display">Choose an option</div>
  <span>▼</span>
  <select>
    <option>Option 1</option>
    <option>Option 2</option>
  </select>
</div>
```

### Right: Use Input Select Component Classes
```html
<!-- ✅ CORRECT — use the input select system with arrow_drop_down icon -->
<div class="input-field input-select" id="select-1">
  <div class="input-and-message">
    <div class="input-control">
      <span class="input-select-display is-placeholder" id="sel-1-display">Choose an option</span>
      <span class="input-select-chevron material-symbols-rounded">arrow_drop_down</span>
      <select id="sel-1"
        onchange="syncSelect('select-1', 'sel-1-display', this)"
        onfocus="openSelect('select-1')"
        onblur="closeSelect('select-1')">
        <option value="" disabled selected>Choose an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </select>
    </div>
  </div>
</div>
```

### Wrong: Using expand_more Icon for Select Chevron
```html
<!-- ❌ WRONG — old icon name -->
<span class="input-select-chevron material-symbols-rounded">expand_more</span>
```

### Right: Use arrow_drop_down Icon
```html
<!-- ✅ CORRECT — current icon specification -->
<span class="input-select-chevron material-symbols-rounded">arrow_drop_down</span>
```

### Wrong: Missing State Classes on Input Field
```html
<!-- ❌ WRONG — state classes on wrong element -->
<div class="input-field">
  <div class="input-and-message">
    <div class="input-control is-error">
      <input type="text" value="bad input">
    </div>
  </div>
</div>
```

### Right: State Classes on .input-field Wrapper
```html
<!-- ✅ CORRECT — state classes go on .input-field -->
<div class="input-field is-error">
  <div class="input-and-message">
    <div class="input-control">
      <input type="text" value="bad input">
    </div>
    <p class="input-message">Please fix this error.</p>
  </div>
</div>
```

### Wrong: Building Custom Tags or Badges
```html
<!-- ❌ WRONG — hand-rolling a tag/badge -->
<div style="display: inline-flex; padding: 4px 12px; border-radius: 4px; background: #f0f0f0; font-size: 14px; font-weight: 600;">
  Label
</div>
```

### Right: Use Tag Component Classes
```html
<!-- ✅ CORRECT — use the tag system -->
<div class="tag">
  <span class="labelBold20">Label</span>
</div>

<!-- ✅ CORRECT — team color with icon -->
<div class="tag tag-team-color tag-icon-leading">
  <span class="material-symbols-rounded">star</span>
  <span class="labelBold20">Featured</span>
</div>
```

### Wrong: Using Chip Without Interactive Tokens
```html
<!-- ❌ WRONG — chip without surface and scale tokens -->
<button class="chip">Filter</button>

<!-- ❌ WRONG — chip with only surface, missing scale -->
<button class="chip surface-borderNeutral">Filter</button>
```

### Right: Compose Chip with Surface and Scale Tokens
```html
<!-- ✅ CORRECT — chip with surface + scale-300 -->
<button class="chip surface-borderNeutral scale-300">
  <span class="labelBold20">Filter</span>
</button>

<!-- ✅ CORRECT — ghost chip with team color -->
<button class="chip surface-ghost scale-300 chip-team-color">
  <span class="labelBold20">Active</span>
</button>
```

### Wrong: Using Wrong Typography Classes in Tags/Chips
```html
<!-- ❌ WRONG — using wrong text style class -->
<div class="tag">
  <span class="bodyRegular30">Label</span>
</div>
```

### Right: Use labelBold20 Typography
```html
<!-- ✅ CORRECT — use labelBold20 for tags and chips -->
<div class="tag">
  <span class="labelBold20">Label</span>
</div>

<button class="chip surface-borderNeutral scale-300">
  <span class="labelBold20">Filter</span>
</button>
```

---

## Master Prompt Template

```
Create a [COMPONENT_NAME] component using pure HTML and CSS.

CRITICAL REQUIREMENTS (NON-NEGOTIABLE):
1. ✅ ALWAYS use .card-text-pair for any label+sublabel combination (except inside list rows)
2. ✅ ALWAYS use text style classes (.title50, .bodyRegular30, etc.) - NEVER custom font-size
3. ✅ ALWAYS use spacing tokens (var(--spacing-300)) or utilities (.mb-200) - NEVER hardcoded pixels
4. ✅ ALWAYS use .text-secondary on sublabels
5. ✅ Component must work with data-theme="wolves" AND data-theme="athletics" (test both)
6. ✅ ALWAYS use button component classes (.btn + type + size) - NEVER custom buttons
7. ✅ ALWAYS use list row component classes for list items - NEVER custom list rows
8. ✅ ALWAYS use input field component classes for form inputs - NEVER custom text inputs or selects
9. ✅ ALWAYS use tag and chip component classes for labels and filters - NEVER custom badges
10. ✅ ALWAYS use --brand-interactive and --brand-inverted for brand-colored elements - NEVER --color-interactive or --color-inverted

TEXT PAIRS - USE FOR ALL TITLE+SUBTITLE COMBINATIONS:
- Hero sections: Text Pair 9000 or 8000
- Page headers: Text Pair 8000 or 7000
- Section headers: Text Pair 7000 or 6000
- Card headers: Text Pair 5000 (MOST COMMON)
- Small cards: Text Pair 4000
- Compact lists: Text Pair 3000
- List rows: .list-row-text-pair (labelBold30 + labelRegular10)

BUTTONS:
- Compose: .btn + type class + size class (e.g. .btn .btn-primary .btn-300)
- Types: transactional | primary | neutral | secondary | tertiary | destructive | white | white-tertiary
- Sizes: .btn-700 (56px) | .btn-300 (40px) | .btn-100 (32px)
- Icons: .btn-icon-leading | .btn-icon-trailing (adjusts padding)
- Full width: add .btn-fill
- Circle icons: .btn-circle + size + type (e.g. .btn-circle .btn-circle-300 .btn-circle-neutral)

LIST ROWS:
- Structure: .list-row > .leading + .list-row-content + .trailing
- Text pair: .list-row-text-pair (NOT .card-text-pair)
- Leading gaps: .leading-gap-sm (8px) | -md (12px) | -lg (16px) | -xl (24px)
- Trailing gaps: .trailing-gap-xs (2px) | -sm (4px) | -md (8px) | -lg (12px)
- Subcomponents: .tag, .tag-group, .info-block, .info-item, .status-dot, .switch, .stepper

INPUTS:
- Structure: .input-field > .input-label-row + .input-and-message > .input-control
- Text inputs: <input> with optional .input-icon (leading) and .input-clear (trailing)
- Select dropdowns: .input-select modifier with .input-select-display + .input-select-chevron (arrow_drop_down icon) + native <select>
- States: .is-error, .is-disabled, .has-value on .input-field
- Label with optional link: .input-label-row > .input-label + .input-link
- Helper/error message: .input-message after .input-control
- Focus border color: var(--org-primary-button)
- Placeholder color (select): var(--text-secondary)

TAGS & CHIPS:
- Tags (static labels): .tag [+ .tag-team-color] [+ .tag-icon-leading | .tag-icon-trailing]
- Chips (interactive): .chip + surface token + .scale-300 [+ .chip-team-color] [+ .chip-icon-leading | .chip-icon-trailing]
- Both: 32px height, 4px radius, labelBold20 (14px Semi Bold), 16px icons, 4px gap
- Chip surfaces: .surface-borderNeutral or .surface-ghost
- Chip disabled: .is-disabled (25% opacity, no pointer)

COMPONENT SPECIFICATIONS:
[Your specific requirements here]

REQUIRED CSS LOAD ORDER:
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet">
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
<link rel="stylesheet" href="https://diet-air-ds.vercel.app/input-components.css">
<link rel="stylesheet" href="https://diet-air-ds.vercel.app/tag-chip-components.css">
<link rel="stylesheet" href="https://diet-air-ds.vercel.app/boilerplate.css">

VALIDATION CHECKLIST - Verify before delivering:
- [ ] All title+subtitle combinations use .card-text-pair (or .list-row-text-pair inside list rows)
- [ ] All text uses style classes (.title50, .bodyRegular30, etc.)
- [ ] All spacing uses tokens or utilities (.mb-200, var(--spacing-300))
- [ ] All sublabels have .text-secondary
- [ ] Works with data-theme="wolves" data-mode="light"
- [ ] Works with data-theme="athletics" data-mode="dark"
- [ ] No hardcoded px values for spacing or typography
- [ ] Proper semantic HTML (h1, h2, h3)
- [ ] Interactive elements use surface token classes (not custom :hover CSS)
- [ ] Scale token matches component size (700=card, 500=button, 300=icon)
- [ ] Surface and scale tokens are composed together on the same element
- [ ] Children inside surface-fill* containers use `color: inherit` (text style classes override surface colors)
- [ ] Buttons use .btn + type + size classes (not custom button styles)
- [ ] Circle icon buttons use .btn-circle + size + type classes
- [ ] List rows use .list-row-text-pair (not .card-text-pair)
- [ ] List row leading slots have correct gap modifier for content type
- [ ] List row trailing slots have correct gap modifier for content type
- [ ] Tags inside list rows use .tag (with optional .tag-team-color, .tag-icon-leading/trailing)
- [ ] Brand-colored elements use --brand-interactive / --brand-inverted (NOT --color-interactive / --color-inverted)
- [ ] Input fields use .input-field wrapper with proper structure (.input-label-row, .input-and-message, .input-control)
- [ ] Select dropdowns use .input-select with .input-select-display, .input-select-chevron (arrow_drop_down), and native <select>
- [ ] Input state classes (.is-error, .is-disabled, .has-value) applied to .input-field wrapper
- [ ] Input fields include required JavaScript helpers for clear buttons and select sync
- [ ] Select placeholder uses var(--text-secondary) color

OUTPUT:
Provide complete HTML showing the component working with both themes.
```

---

## Available CSS Files & Load Order

```html
<!DOCTYPE html>
<html lang="en" data-theme="wolves" data-mode="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Component Name</title>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet">
  
<!-- Design System CSS Files (load in this exact order) -->
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
<link rel="stylesheet" href="https://diet-air-ds.vercel.app/input-components.css">
<link rel="stylesheet" href="https://diet-air-ds.vercel.app/tag-chip-components.css">
<link rel="stylesheet" href="https://diet-air-ds.vercel.app/boilerplate.css">
</head>
<body>
  <!-- Your component HTML -->
</body>
</html>
```

---

## Design Token Quick Reference

### Container Tokens

Choose the right container for your content:

| Container Class | Max Width | Use For |
|----------------|-----------|---------|
| `.container-maximum` | 1600px | Landing pages, full-width layouts |
| `.container-extra-wide` | 1440px | Dashboards, data-heavy pages |
| `.container-wide` | 1280px | Standard pages with sidebars |
| `.container` | 1200px | Default container (most pages) |
| `.container-medium` | 1024px | Article pages, forms |
| `.container-narrow` | 768px | Reading content, centered forms |
| `.container-compact` | 640px | Single column content |

### Spacing Tokens

8px-based spacing scale:

| Token | Value | Use For |
|-------|-------|---------|
| `--spacing-50` | 4px | Minimal spacing |
| `--spacing-100` | 8px | Compact spacing |
| `--spacing-150` | 12px | Small gaps |
| `--spacing-200` | 16px | Standard spacing |
| `--spacing-250` | 20px | Medium spacing |
| `--spacing-300` | 24px | Comfortable spacing |
| `--spacing-400` | 32px | Large spacing |
| `--spacing-500` | 40px | Extra large spacing |
| `--spacing-600` | 48px | Section spacing |

**Responsive Spacing:**
- `.py-large` - Page margins (16px mobile → 64px desktop)
- `.py-landing` - Landing page spacing (24px mobile → 80px desktop)
- `.gap-card` - Card grid spacing (16px mobile → 24px desktop)

### Color Tokens

**Backgrounds:**
- `--bg-base` - Main page background
- `--bg-surface` - Cards, elevated surfaces
- `--bg-sheet` - Modals, highest elevation
- `--bg-nav` - Navigation bars

**Text:**
- `--text-primary` - Body text (high contrast)
- `--text-secondary` - Supporting text (medium contrast)
- `--text-disabled` - Disabled state
- `--text-placeholder` - Input placeholders

**Brand:**
- `--brand-core` - Primary brand color
- `--brand-light` - Secondary brand color
- `--brand-dark` - Dark brand variant

**Brand Color (Mode-Sympathetic) — ALWAYS use these instead of `--color-interactive` / `--color-inverted` directly:**
- `--brand-interactive` - In light mode: the brand's interactive color. In dark mode: the inverted accent. Use for links, active states, focus rings, icon accents, and anything that should "pop" as the primary brand color for the current mode.
- `--brand-inverted` - The opposite of `--brand-interactive`. Use when you need the secondary brand color that complements interactive in the current mode.

> ⚠️ **Never use `--color-interactive` or `--color-inverted` directly in components.** They are raw static theme values and don't switch with light/dark mode. `--brand-interactive` and `--brand-inverted` are their mode-aware replacements.

**Interactive:**
- `--interactive-primary` - Primary buttons
- `--interactive-primary-text` - Text on primary buttons
- `--interactive-transactional` - Transactional buttons
- `--interactive-transactional-text` - Text on transactional buttons
- `--interactive-secondary-text` - Text on secondary (outlined) buttons
- `--interactive-tertiary-text` - Text on tertiary (ghost) buttons

**Interactive Surface Classes:**
- Fill:    .surface-fillNeutral, .surface-fillColor, .surface-fillInverted, .surface-fillBlack, .surface-fillWhite
- Border:  .surface-borderNeutral, .surface-borderInverted, .surface-borderBlack, .surface-borderWhite
- Subtle:  .surface-washNeutral, .surface-ghost, .surface-card

**Interactive Scale Classes:**
- .scale-700 (cards, large components: hover 1.01, press 0.99)
- .scale-500 (buttons, medium components: hover 1.025, press 0.975)
- .scale-300 (icon buttons, small components: hover 1.035, press 0.965)

**⚠️ CRITICAL: Color Inheritance with Surface Tokens**
Surface fill classes set their own `color` for correct contrast. Text style classes (`.labelBold30`, `.bodyRegular20`, etc.) will OVERRIDE this with `var(--text-primary)`, causing broken contrast. Always add `color: inherit` on child elements inside filled surfaces:
```css
.surface-fillNeutral *,
.surface-fillColor *,
.surface-fillInverted *,
.surface-fillBlack *,
.surface-fillWhite * {
  color: inherit;
}
```

**Note:** Button component classes (`.btn *`) and tag team-color (`.tag.tag-team-color *`) already include `color: inherit` — no extra fix needed when using those components.

**Status:**
- `--status-success`, `--status-warning`, `--status-error`, `--status-info`

### Border & Shadow Tokens

**Border Radius:**
```css
--border-radius-50: 4px    /* Small elements, tags */
--border-radius-100: 8px   /* Cards, inputs, images */
--border-radius-200: 16px  /* Large cards */
--button-border-radius     /* Team-specific (8px, 12px, or 100px) */
```

**Utilities:**
```html
<div class="rounded-100">8px radius</div>
<button class="rounded-button">Team-specific radius</button>
```

**DO NOT USE SHADOWS - Reserved for sheets and modals only**

---

## 🔧 Troubleshooting

### Text looks wrong?
→ Make sure you're using text style classes like `.title50` instead of custom CSS

### Spacing looks off?
→ Check that you're using spacing tokens (`var(--spacing-300)`) or utilities (`.mb-200`)

### Sublabel too prominent?
→ Add `.text-secondary` class to sublabels

### Layout breaks between themes?
→ Make sure you're using CSS variables, not hardcoded colors

### Text pair spacing wrong?
→ Use `.card-text-pair` wrapper for automatic spacing

### Buttons look different across themes?
→ Use `var(--button-border-radius)` instead of hardcoded border-radius — or better yet, use the `.btn` classes which handle this automatically

### Text invisible on buttons or filled surfaces?
→ Text style classes override surface token colors. Add `color: inherit` to children inside `.surface-fill*` containers. See Common Mistakes section for the full pattern. The `.btn` classes already handle this.

### Button hover/press not working?
→ Make sure you're using `.btn` base class. Don't add custom `:hover` transforms — the button system handles scale-500 interaction automatically.

### List row text pair looks too big?
→ You're probably using `.card-text-pair` instead of `.list-row-text-pair`. List rows use labelBold30 + labelRegular10, not title50 + labelRegular20.

### List row leading/trailing spacing looks off?
→ Check that you're using the correct gap modifier for your content type (e.g. `.leading-gap-md` for icons, `.leading-gap-lg` for images).

### Switch not toggling?
→ Make sure the `<input>` `id` matches the `<label>` `for` attribute.

### Stepper button doesn't look disabled?
→ Add `.disabled` class to the `.stepper-btn` element (not the HTML `disabled` attribute).

---

## 📝 Complete Component Examples

[PLACEHOLDER - Detailed examples section to be added collaboratively]

This section will contain full working examples of:
- Card patterns you commonly use
- Button group patterns (hero CTAs, form actions, card footers)
- List row compositions (settings, notifications, tickets, accounts)
- Layout patterns specific to your needs
- Navigation patterns
- Form patterns
- Any other component patterns you want documented

**Let's build this section together based on your specific needs and design preferences.**

---

### How to Add Examples (Collaboration Prompt)

**When you want to add a new component example to this guide, use this prompt:**

```
I want to add a [COMPONENT TYPE] example to the design system guide.

Here's what I'm looking for:
[Describe the component - can include screenshots, sketches, or detailed descriptions]

Key requirements:
- [Specific spacing, layout, or styling requirements]
- [Any specific text pair scales to use]
- [Any specific interactions or states]

Please create the HTML/CSS example following the design system patterns. 
I'll review and provide feedback on:
- Spacing (too tight/loose)
- Text pair scale (too big/small)
- Overall visual hierarchy
- Any deviations from what I have in mind

Let's iterate until it matches my vision, then we'll add it to the guide.
```

**My role:** I'll create the initial implementation using the design system tokens and patterns.

**Your role:** You'll review and guide me with feedback like:
- "The spacing between the header and body needs to be larger"
- "Use Text Pair 5000 instead of 4000 for the title"
- "The button should be the transactional style, not primary"
- "This feels too cramped on mobile"

**Together:** We'll refine until it perfectly matches your design intent, then document it as a reusable pattern.

---

## Team Theme Reference

**Available Teams:**
- `wolves` - Minnesota Timberwolves (blue/green, 8px button radius)
- `lynx` - Minnesota Lynx (blue/green, 12px button radius)
- `courage` - North Carolina Courage (red/gold, pill radius)
- `summit` - Denver Summit FC (green/red/yellow, 8px radius)
- `bucknell` - Bucknell Bison (navy/orange, pill radius)
- `sounders` - Seattle Sounders FC (green/blue/teal, pill radius)
- `reign` - Seattle Reign FC (purple/gold, pill radius)
- `ncfc` - North Carolina Football Club (blue/gold, pill radius)
- `jump` - Jump Default (purple/lime, pill radius)
- `athletics` - Las Vegas Athletics (green/yellow, pill radius)

**Testing Across Themes:**
```html
<!-- Light Mode - Wolves -->
<html data-theme="wolves" data-mode="light">

<!-- Dark Mode - Athletics -->
<html data-theme="athletics" data-mode="dark">
```
