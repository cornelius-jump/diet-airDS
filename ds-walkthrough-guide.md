# JUMP Design System – Token & Style Walkthrough

A complete reference of every token, class, and utility available in the design system. Use this to understand what's available and when to use it.

---

## How the System Works

The design system is built on **CSS custom properties** (variables) and **utility classes**. Everything is controlled by two HTML attributes on the root element:

- `data-theme` — which team's brand to use (colors, display font, button shape)
- `data-mode` — `light` or `dark`

When you change either attribute, the entire UI updates automatically. You never hardcode colors, fonts, or spacing — you reference tokens instead.

```html
<html data-theme="wolves" data-mode="dark">
```

---

## CSS Files (Load Order Matters)

These 8 files make up the full system. They must be loaded in this exact order because later files reference tokens defined in earlier ones.

| # | File | What It Does |
|---|------|-------------|
| 1 | `design-tokens-master.css` | Core color tokens, brand colors per team, neutral/inverted scales, semantic tokens |
| 2 | `spacing-tokens.css` | Fixed spacing scale (4px–80px) and responsive spacing tokens |
| 3 | `container-tokens.css` | Max-width container classes (640px–1600px) with responsive padding |
| 4 | `border-effects-tokens.css` | Border radius, border weight, drop shadow tokens and utility classes |
| 5 | `fonts.css` | @font-face declarations for all team display fonts |
| 6 | `text-styles-system.css` | Typography classes (display, title, label, body) and text utility classes |
| 7 | `card-components.css` | Card layout patterns (closed, open, interactive) and card grid classes |
| 8 | `boilerplate.css` | CSS reset, layout helpers, all spacing utility classes, grid utilities, responsive show/hide |

---

## 1. Color Tokens

### How Color Layering Works

Colors are organized in layers. At the bottom are raw **org-level** values (defined per team per mode). These feed into **semantic tokens** that you actually use in your code. You should never reference `--org-*` tokens directly.

```
Team + Mode defines → --org-base, --org-surface, etc.
                           ↓
Semantic tokens    → --bg-base, --bg-surface, etc.  ← USE THESE
```

### Background Tokens

These are the surfaces you build on. They create visual depth — base is the furthest back, sheet is the highest elevation.

| Token | Role | Light Mode Example | Dark Mode Example |
|-------|------|-------------------|-------------------|
| `--bg-base` | Main page background | White (#FFFFFF) | Near-black (#081627 wolves, #111111 others) |
| `--bg-surface` | Cards, tiles, elevated areas | Light gray (#EEF2F6 wolves, #F4F4F4 others) | Dark surface (#0C233F wolves, #1F1F1F others) |
| `--bg-sheet` | Modals, sheets, highest layer | White (#FFFFFF) | Slightly lighter (#112B4A wolves, #292929 others) |
| `--bg-nav` | Navigation bar (use with blur) | Semi-transparent white | Dark surface or semi-transparent dark |

### Text Tokens

| Token | Role | When to Use |
|-------|------|-------------|
| `--text-primary` | Highest contrast text | Headlines, body copy, anything that needs to be clearly readable |
| `--text-secondary` | Medium contrast text | Subtitles, captions, metadata, supporting info |
| `--text-disabled` | Low contrast text | Disabled states, unavailable options |
| `--text-placeholder` | Input placeholder text | Empty form fields |

These are built on the **neutral scale** — in light mode they're black-based, in dark mode they flip to white-based. You don't need to think about it — just use the semantic tokens.

### Brand Tokens (Team-Specific)

These change per team. Each team has a unique palette.

| Token | Role | Example (Wolves) | Example (Athletics) |
|-------|------|------------------|-------------------|
| `--brand-core` | Primary brand color | #266092 (blue) | #006141 (green) |
| `--brand-light` | Secondary/accent | #79BC43 (green) | #FFB819 (gold) |
| `--brand-dark` | Dark brand variant | #0C233F (navy) | #051715 (dark green) |
| `--brand-interactive` | Links, active states | #266092 (blue) | #006141 (green) |
| `--brand-inverted` | Accent for dark mode CTAs | #79BC43 (green) | #FFB819 (gold) |

### Interactive Tokens (Buttons)

These control button colors and flip between light and dark mode automatically.

| Token | Role |
|-------|------|
| `--interactive-primary` | Primary button background |
| `--interactive-primary-text` | Text on primary buttons |
| `--interactive-secondary-text` | Text on secondary (outlined) buttons |
| `--interactive-tertiary-text` | Text on tertiary (ghost) buttons |
| `--interactive-transactional` | CTA / purchase button background |
| `--interactive-transactional-text` | Text on transactional buttons |

In light mode, primary buttons typically use the brand color with white text. In dark mode, they often invert to white or accent buttons with black text.

### Border Tokens

| Token | Role |
|-------|------|
| `--border-default` | Standard borders (subtle, uses neutral-300) |
| `--border-hover` | Hover state borders (medium contrast, neutral-500) |
| `--border-active` | Focus/active borders (high contrast, neutral-1000) |
| `--border-disabled` | Disabled element borders (neutral-200) |

### Neutral & Inverted Scales

These are opacity-based scales that automatically flip between light and dark mode. Use them for subtle backgrounds, overlays, and UI chrome.

**Neutral scale** — black-based in light mode, white-based in dark mode:

| Token | Light Mode | Dark Mode | Use For |
|-------|-----------|-----------|---------|
| `--neutral-000` | transparent | transparent | Reset |
| `--neutral-50` | rgba(0,0,0,0.03) | rgba(255,255,255,0.05) | Barely visible tint |
| `--neutral-100` | rgba(0,0,0,0.04) | rgba(255,255,255,0.1) | Subtle backgrounds |
| `--neutral-200` | rgba(0,0,0,0.1) | rgba(255,255,255,0.15) | Light borders |
| `--neutral-300` | rgba(0,0,0,0.15) | rgba(255,255,255,0.25) | Default borders |
| `--neutral-500` | rgba(0,0,0,0.4) | rgba(255,255,255,0.55) | Placeholder text |
| `--neutral-700` | rgba(0,0,0,0.65) | rgba(255,255,255,0.75) | Secondary text |
| `--neutral-900` | rgba(0,0,0,0.85) | rgba(255,255,255,0.95) | Near-opaque |
| `--neutral-1000` | rgba(0,0,0,1) | rgba(255,255,255,1) | Full contrast |

**Inverted scale** — the opposite of neutral (white-based in light, black-based in dark). Useful for overlays or reversed elements.

**White / Black scales** — mode-agnostic, always the same regardless of light/dark. Use when you need a consistent white or black overlay.

### Status Colors

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| `--status-success` | #007A47 | #00A96E |
| `--status-warning` | #D2811E | #F6AF24 |
| `--status-error` | #D42F21 | #E43E2F |
| `--status-info` | #0671E5 | #3892F3 |

---

## 2. Spacing Tokens

### The 8px Grid

All spacing is based on multiples of 8px. This keeps everything aligned and consistent.

| Token | Value | Multiplier | Common Use |
|-------|-------|-----------|------------|
| `--spacing-50` | 4px | 0.5× | Minimal gaps, icon padding |
| `--spacing-100` | 8px | 1× | Tight spacing, compact layouts |
| `--spacing-150` | 12px | 1.5× | Small gaps between related items |
| `--spacing-200` | 16px | 2× | Standard spacing, input padding |
| `--spacing-250` | 20px | 2.5× | Card internal padding |
| `--spacing-300` | 24px | 3× | Comfortable spacing between sections |
| `--spacing-400` | 32px | 4× | Large gaps between components |
| `--spacing-500` | 40px | 5× | Extra large section spacing |
| `--spacing-600` | 48px | 6× | Major section breaks |
| `--spacing-700` | 56px | 7× | Large section breaks |
| `--spacing-800` | 64px | 8× | Hero-level spacing |
| `--spacing-900` | 72px | 9× | Maximum fixed spacing |
| `--spacing-1000` | 80px | 10× | Landing page spacing |

### Responsive Spacing Tokens

These tokens automatically shrink on smaller screens. Use them for anything that should feel proportional across breakpoints.

| Token | Mobile (< 500px) | Tablet (500–1099px) | Desktop (1100px+) | Best For |
|-------|---------|--------|---------|----------|
| `--spacing-row` | 8px | 12px | 16px | Event rows, selectors, short wide objects |
| `--spacing-card` | 16px | 20px | 24px | Space between cards in a grid |
| `--spacing-content` | 32px | 40px | 48px | Between major content sections |
| `--margin-small` | 16px | 32px | 48px | Detailed interfaces, compact page margins |
| `--margin-large` | 16px | 40px | 64px | Standard page margins (most pages) |
| `--margin-landing` | 24px | 48px | 80px | Landing pages, hero sections, open layouts |

**When to choose which:**

- **Fixed tokens** (e.g. `--spacing-300`) → internal component padding, button padding, anything that should stay the same size at all breakpoints
- **Responsive tokens** (e.g. `--spacing-card`, `--margin-large`) → gaps between cards, section margins, page-level spacing that should feel proportional

---

## 3. Spacing Utility Classes

Every spacing token has matching utility classes in `boilerplate.css`. The naming pattern is consistent:

### Pattern

`{property}-{value}` where:

- **Property:** `m` (margin), `mt` (margin-top), `mb`, `ml`, `mr`, `mx` (left+right), `my` (top+bottom), `p` (padding), `pt`, `pb`, `pl`, `pr`, `px`, `py`, `gap`, `gap-x`, `gap-y`
- **Value:** `50`, `100`, `150`, `200`, `250`, `300`, `400`, `500`, `600`, `700`, `800`, `900`

### Examples

```html
<div class="p-300">         <!-- padding: 24px all sides -->
<div class="mb-200">        <!-- margin-bottom: 16px -->
<div class="px-400">        <!-- padding-left + right: 32px -->
<div class="my-100">        <!-- margin-top + bottom: 8px -->
<div class="gap-150">       <!-- flex/grid gap: 12px -->
<div class="gap-x-200">     <!-- column-gap: 16px -->
```

### Responsive Spacing Classes

Same pattern but using responsive token names:

```html
<div class="gap-row">       <!-- 8px → 12px → 16px -->
<div class="gap-card">      <!-- 16px → 20px → 24px -->
<div class="py-large">      <!-- 16px → 40px → 64px -->
<div class="my-landing">    <!-- 24px → 48px → 80px -->
<div class="mb-content">    <!-- 32px → 40px → 48px -->
<div class="py-small">      <!-- 16px → 32px → 48px -->
```

Each responsive token has: `gap-*`, `mb-*`, `mt-*`, `my-*`, `pb-*`, `pt-*`, `py-*`, `mx-*`, `px-*`, `ml-*`, `mr-*`, `pl-*`, `pr-*` variants.

### Other Margin Utilities

```html
<div class="mx-auto">       <!-- center horizontally -->
<div class="ml-auto">       <!-- push to right -->
<div class="mr-auto">       <!-- push to left -->
```

---

## 4. Container Classes

Containers set a `max-width`, center content with `margin: auto`, and add responsive horizontal padding.

| Class | Max Width | Padding (Mobile → Tablet → Desktop) | Best For |
|-------|-----------|--------------------------------------|----------|
| `.container-maximum` | 1600px | 16px → 24px → 48px | Landing page heroes, full-width dashboards |
| `.container-extra-wide` | 1440px | 16px → 24px → 48px | Complex dashboards, data-heavy pages |
| `.container-wide` | 1280px | 16px → 24px → 32px | Standard pages with sidebars, event listings |
| `.container` | 1200px | 16px → 24px → 32px | Default / general purpose |
| `.container-medium` | 1024px | 16px → 24px → 32px | Article pages, form pages |
| `.container-narrow` | 768px | 16px → 24px → 32px | Long-form reading, centered forms, legal pages |
| `.container-compact` | 640px | 16px → 24px → 32px | Single column content, confirmation pages |
| `.container-fluid` | none | 16px → 24px → 32px | Full-width sections, maps, video players |

You can (and should) mix containers on the same page:

```html
<nav>
  <div class="container-wide"><!-- Nav content --></div>
</nav>
<section class="py-landing">
  <div class="container-maximum"><!-- Hero content --></div>
</section>
<article class="py-large">
  <div class="container-narrow"><!-- Article body --></div>
</article>
```

---

## 5. Typography Classes

### Display Styles (Team-Specific)

Display text uses each team's unique display font, weight, and letter spacing. The sizes also vary per team. These are for big, attention-grabbing headlines.

| Class | Line Height | Typical Use |
|-------|------------|-------------|
| `.display900` | 76px | Largest hero headlines |
| `.display800` | 68px | Large hero text |
| `.display700` | 60px | Medium-large display |
| `.display600` | 52px | Medium display (hero subheads) |
| `.display500` | 44px | Page-level headers |
| `.display400` | 36px | Section headers |
| `.display300` | 28px | Component headers |
| `.display200` | 24px | Small display |
| `.display100` | 20px | Smallest display |

**Example sizes by team** (display600):

| Team | Font | Size |
|------|------|------|
| Wolves | Futura Wolves Autocaps (800) | 56px |
| Lynx | Futura Caps (700) | 52px |
| Courage | Public Caps Pro (800) | 46px |
| Summit | MARTIN Caps Custom (400) | 62px |
| Bucknell | Teko Caps (700) | 60px |
| Sounders | Futura Caps (700) | 52px |
| Reign | Manner Pro (700) | 52px |
| NCFC | Public Caps Pro (900) | 46px |
| Jump | Inter (900) | 46px |
| Athletics | Proxima Caps (900) | 52px |

### Title Styles (Consistent Across Teams)

Titles use **Inter Bold (700)** at all teams. Same size everywhere. Use for structural headings within content.

| Class | Size | Letter Spacing | Use For |
|-------|------|---------------|---------|
| `.title90` | 36px | -0.03em | Page titles |
| `.title80` | 32px | -0.03em | Section titles |
| `.title70` | 28px | -0.03em | Subsection titles |
| `.title60` | 24px | -0.03em | Card titles |
| `.title50` | 20px | -0.03em | Small titles, card headers |

### Label Styles (Consistent Across Teams)

Labels are for UI elements — buttons, nav items, metadata. They have a tight 1.2 line-height (no extra leading).

**Label Bold** — Inter Semi-Bold (600):

| Class | Size | Use For |
|-------|------|---------|
| `.labelBold50` | 20px | Large UI labels |
| `.labelBold40` | 16px | Buttons, nav links |
| `.labelBold30` | 14px | Standard bold labels |
| `.labelBold20` | 12px | Small bold labels, badges |
| `.labelBold10` | 10px | Tiny labels |

**Label Regular** — Inter Regular (400):

| Class | Size | Use For |
|-------|------|---------|
| `.labelRegular50` | 20px | Large metadata |
| `.labelRegular40` | 16px | Standard metadata |
| `.labelRegular30` | 14px | Captions, bylines |
| `.labelRegular20` | 12px | Small metadata, timestamps |
| `.labelRegular10` | 10px | Tiny metadata |

### Body Styles (Consistent Across Teams)

Body text is for paragraphs and longer content. It uses 1.5 line-height for comfortable reading.

**Body Bold** — Inter Semi-Bold (600):

| Class | Size | Use For |
|-------|------|---------|
| `.bodyBold40` | 16px | Emphasized body text |
| `.bodyBold30` | 14px | Standard emphasized |
| `.bodyBold20` | 13px | Small emphasized |

**Body Regular** — Inter Regular (400):

| Class | Size | Use For |
|-------|------|---------|
| `.bodyRegular40` | 16px | Large body text |
| `.bodyRegular30` | 14px | Standard body text (most common) |
| `.bodyRegular20` | 13px | Small body / compact text |

### Text Color Modifier Classes

Apply to any text element to override its default color:

| Class | Token Used | Purpose |
|-------|-----------|---------|
| `.text-primary` | `--neutral-1000` | High contrast (default) |
| `.text-secondary` | `--neutral-700` | Medium contrast — sublabels, captions |
| `.text-disabled` | `--neutral-300` | Disabled state |
| `.text-placeholder` | `--neutral-500` | Placeholder text |
| `.text-brand-core` | `--brand-core` | Primary brand color |
| `.text-brand-light` | `--brand-light` | Secondary brand color |
| `.text-brand-interactive` | `--brand-interactive` | Interactive/link color |
| `.text-inverted` | `--inverted-1000` | Inverted color (white on dark, black on light) |
| `.text-success` | `--status-success` | Success green |
| `.text-warning` | `--status-warning` | Warning amber |
| `.text-error` | `--status-error` | Error red |
| `.text-info` | `--status-info` | Info blue |

### Text Utility Classes

**Alignment:** `.text-left`, `.text-center`, `.text-right`, `.text-justify`

**Transform:** `.text-uppercase`, `.text-lowercase`, `.text-capitalize`, `.text-normal-case`

**Decoration:** `.text-underline`, `.text-line-through`, `.text-no-underline`

**Truncation:**

| Class | Behavior |
|-------|----------|
| `.text-truncate` | Single line with ellipsis |
| `.text-truncate-2` | Clamp to 2 lines |
| `.text-truncate-3` | Clamp to 3 lines |

---

## 6. Border & Effect Tokens

### Border Radius

| Token | Value | Use For |
|-------|-------|---------|
| `--border-radius-50` | 4px | Small elements, badges, tags |
| `--border-radius-100` | 8px | Cards, inputs, standard UI |
| `--border-radius-200` | 16px | Large cards, hero sections |
| `--button-border-radius` | Team-specific | Buttons (see team table below) |

**Team button radius values:**

| Radius | Teams |
|--------|-------|
| 8px (sharp) | Wolves, Summit |
| 12px (medium) | Lynx |
| 100px (pill) | Courage, Bucknell, Sounders, Reign, NCFC, Jump, Athletics |

**Radius utility classes:**

| Class | Scope | Value |
|-------|-------|-------|
| `.rounded-50` | All corners | 4px |
| `.rounded-100` | All corners | 8px |
| `.rounded-200` | All corners | 16px |
| `.rounded-button` | All corners | Team-specific |
| `.rounded-t-100` | Top corners only | 8px |
| `.rounded-b-100` | Bottom corners only | 8px |
| `.rounded-l-100` | Left corners only | 8px |
| `.rounded-r-100` | Right corners only | 8px |
| `.rounded-tl-100` | Top-left only | 8px |

All directional variants exist for `-50`, `-100`, and `-200`.

### Border Weight

| Token | Value | Typical Border Color |
|-------|-------|---------------------|
| `--border-weight-50` | 1px | `--neutral-200` (subtle) |
| `--border-weight-100` | 1px | `--neutral-500` (standard) |
| `--border-weight-200` | 2px | `--neutral-1000` or `--brand-interactive` (heavy/focus) |

**Border utility classes:**

| Class | What It Does |
|-------|-------------|
| `.border` | 1px solid with `--border-default` color |
| `.border-thin` | 1px solid with `--neutral-200` |
| `.border-heavy` | 2px solid with `--neutral-1000` |
| `.border-interactive` | 2px solid with `--brand-interactive` |
| `.border-top` | 1px solid border on top only |
| `.border-bottom` | 1px solid border on bottom only |
| `.border-left` | 1px solid border on left only |
| `.border-right` | 1px solid border on right only |
| `.border-none` | Remove border |

**Border color classes:** `.border-default`, `.border-hover`, `.border-active`, `.border-neutral-200`, `.border-neutral-500`, `.border-neutral-1000`, `.border-brand-interactive`

### Drop Shadows

Shadows are reserved for elevated surfaces only — sheets and modals. Do not use them on regular cards.

| Token | Use For |
|-------|---------|
| `--shadow-sheet` | Mobile bottom sheets, elevated cards |
| `--shadow-modal` | Desktop modals, overlays (highest elevation) |

**Classes:** `.shadow-sheet`, `.shadow-modal`, `.shadow-none`

---

## 7. Card Components

### Closed Layout Card

A full-background card with divided sections. Use for structured content like events, products, or details.

```html
<div class="card-closed">
  <div class="card-closed-header">
    <div class="card-text-pair">
      <h3 class="title50">Card Title</h3>
      <p class="labelRegular20 text-secondary">Metadata</p>
    </div>
  </div>
  <div class="card-closed-body">
    <p class="bodyRegular30">Body content</p>
  </div>
  <div class="card-closed-footer">
    <div class="card-actions-horizontal">
      <button>Action</button>
    </div>
  </div>
</div>
```

- Background: `--bg-surface`
- Radius: `--border-radius-200` (16px)
- Sections divided by 1px `--neutral-200` borders
- Header padding: 20px, Body/Footer padding: 24px

### Open Layout Card

Transparent container with separated background subsections. Use for landing pages, feature highlights.

```html
<div class="card-open">
  <div class="card-open-header">
    <div class="card-text-pair">
      <h2 class="display400">Section Title</h2>
      <p class="labelRegular30 text-secondary">Description</p>
    </div>
  </div>
  <div class="card-open-content">
    <div class="card-open-section">Content block 1</div>
    <div class="card-open-section">Content block 2</div>
  </div>
</div>
```

- Header: no background (transparent)
- Subsections: `--bg-surface`, 16px radius, 24px padding
- 20px gap between header and content, 12px gap between subsections

### Interactive Cards

Add `-interactive` suffix for hover effects:

- `.card-closed-interactive` — closed card with border + hover state
- `.card-open-section-interactive` — open subsection with hover state

Hover adds `--brand-interactive` border color and a subtle 2px lift.

### Card Utilities

| Class | Purpose |
|-------|---------|
| `.card-text-pair` | Flex column with 2px gap — use for all title + subtitle combos |
| `.card-actions` | Generic action container (flex, 12px gap) |
| `.card-actions-horizontal` | Horizontal button row |
| `.card-actions-vertical` | Stacked button column (8px gap) |

### Card Grid Classes

| Class | Gap Token | Use For |
|-------|----------|---------|
| `.card-grid` | `--spacing-card` (responsive) | Standard card grids |
| `.card-grid-closed` | `--spacing-row` (responsive) | Tight grids |
| `.card-grid-open` | `--spacing-content` (responsive) | Spacious grids |

---

## 8. Layout Utilities

### Flexbox Helpers

| Class | Effect |
|-------|--------|
| `.flex-center` | Centers content both directions + min-height 100vh |
| `.flex-column` | `flex-direction: column` |
| `.flex-row` | `flex-direction: row` |

### Named Gap Shortcuts

| Class | Value |
|-------|-------|
| `.gap-xs` | 8px |
| `.gap-sm` | 12px |
| `.gap-md` | 16px |
| `.gap-lg` | 24px |
| `.gap-xl` | 32px |

### Grid Utilities

```html
<div class="grid gap-card grid-cols-3-desktop grid-cols-2-tablet grid-cols-1-mobile">
  <!-- items -->
</div>
```

| Class | Breakpoint | Columns |
|-------|-----------|---------|
| `.grid-cols-1-mobile` | < 500px | 1 |
| `.grid-cols-2-tablet` | 500–1099px | 2 |
| `.grid-cols-3-tablet` | 500–1099px | 3 |
| `.grid-cols-2-desktop` | 1100px+ | 2 |
| `.grid-cols-3-desktop` | 1100px+ | 3 |
| `.grid-cols-4-desktop` | 1100px+ | 4 |
| `.grid-auto-fit` | All | Auto-fill, 300px min |

### Responsive Show/Hide

| Class | Visible On |
|-------|-----------|
| `.hide-mobile` | Hidden below 500px |
| `.hide-tablet` | Hidden 500–1099px |
| `.hide-desktop` | Hidden 1100px+ |
| `.hide-mobile-tablet` | Hidden below 1100px |
| `.show-mobile` | Shown only below 500px |
| `.show-tablet` | Shown only 500–1099px |
| `.show-desktop` | Shown only 1100px+ |

---

## 9. Team Reference

| Team | `data-theme` | Display Font | Weight | Letter Spacing | Brand Core | Brand Accent | Button Radius |
|------|-------------|-------------|--------|---------------|------------|-------------|---------------|
| Timberwolves | `wolves` | Futura Wolves Autocaps | 800 | -0.5% | #266092 | #79BC43 | 8px |
| Lynx | `lynx` | Futura Caps | 700 | -3% | #266092 | #79BC43 | 12px |
| Courage | `courage` | Public Caps Pro | 800 | -5% | #AB0033 | #B4A269 | 100px |
| Summit FC | `summit` | MARTIN Caps Custom | 400 | -4% | #20604E | #E6B93F | 8px |
| Bucknell | `bucknell` | Teko Caps | 700 | -1% | #003865 | #E87722 | 100px |
| Sounders | `sounders` | Futura Caps | 700 | -3% | #2DC84D | #7CE0D3 | 100px |
| Reign | `reign` | Manner Pro | 700 | -2% | #232F79 | #E0BE85 | 100px |
| NCFC | `ncfc` | Public Caps Pro | 900 | -5% | #00416B | #B4A269 | 100px |
| Jump | `jump` | Inter | 900 | -4% | #657DFF | #CCFF00 | 100px |
| Athletics | `athletics` | Proxima Caps | 900 | -1% | #006141 | #FFB819 | 100px |

---

## 10. Breakpoints

The system uses three breakpoints consistently:

| Name | Range | Container Padding |
|------|-------|------------------|
| Mobile | 0 – 499px | 16px |
| Tablet | 500 – 1099px | 24px |
| Desktop | 1100px+ | 32px (48px for maximum/extra-wide at 1600px+) |

---

## 11. Base Element Styles

`boilerplate.css` includes sensible defaults for common elements:

- **Links** — colored with `--brand-interactive`, no underline, opacity hover
- **Inputs, textareas, selects** — `--bg-surface` background, `--border-default` border, 8px radius, focus uses `--border-active`
- **Placeholders** — colored with `--text-placeholder`
- **Images** — max-width 100%, block display
- **Body** — `--bg-base` background, `--text-primary` color, system font stack

---

## Quick Decision Guide

**"What container should I use?"** → Match content type to the table in section 4. Articles get `narrow`, dashboards get `extra-wide`, most pages get `container` or `wide`.

**"Fixed or responsive spacing?"** → If it's inside a component (padding, internal gaps), use fixed. If it's between components or sections, use responsive.

**"Display or title?"** → Display is for big branded headlines (team font). Title is for structural headings within content (Inter Bold, same everywhere).

**"Label or body?"** → Labels are for short UI text (buttons, nav, metadata) with tight line-height. Body is for paragraphs and longer content with comfortable 1.5 line-height.

**"When do I use shadows?"** → Only on sheets and modals. Never on regular cards — use `--bg-surface` and borders instead.
