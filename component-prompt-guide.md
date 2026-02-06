# Component Generation Prompt System

## Overview
This guide provides prompt templates for generating components that work with our design system. All components should reference CSS variables from the master token library.

---

## Core Principles

### 1. Always Use CSS Variables
````css
/* ✅ CORRECT */
background-color: var(--bg-surface);
color: var(--text-primary);
border-radius: var(--border-radius-100);
border: var(--border-weight-100) solid var(--border-default);
box-shadow: var(--shadow-card);
padding: var(--spacing-300);
margin-bottom: var(--spacing-200);

/* ❌ INCORRECT */
background-color: #EEF2F6;
color: #000000;
border-radius: 8px;
border: 1px solid #E0E0E0;
box-shadow: 0 2px 8px rgba(0,0,0,0.1);
padding: 24px;
margin-bottom: 16px;
````

### 2. Never Hardcode Team-Specific Values
The theming system handles all team customization via `data-theme` and `data-mode` attributes.

### 3. Use Utility Classes When Appropriate
Leverage existing utility classes for spacing, text styles, borders, shadows, and layout:
````html
<div class="p-300 mb-200 rounded-100 border shadow-sheet">
  <h3 class="title60 mb-150">Title</h3>
  <p class="bodyRegular30 text-secondary">Description</p>
</div>

<button class="rounded-button border-200 border-brand-interactive">
  <span class="labelBold40">Button Text</span>
</button>

<div class="card p-300 rounded-100 shadow-modal">
  <h3 class="title50 mb-150">Title</h3>
  <p class="bodyRegular30">Description</p>
</div>
````

### 4. Component Structure
All components should be:
- Self-contained HTML/CSS
- Themeable via CSS variables
- Responsive
- Accessible
- Use spacing tokens and text style classes
- Use border and shadow tokens for elevation

---

## Available CSS Files & Load Order
````html
<!DOCTYPE html>
<html lang="en" data-theme="wolves" data-mode="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>

  <!-- Critical Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet">
  
  <!-- Design System CSS Files (in this exact order) -->
<link rel="stylesheet" href="https://diet-air-ds.vercel.app/design-tokens-master.css">
  <link rel="stylesheet" href="https://diet-air-ds.vercel.app/spacing-tokens.css">
  <link rel="stylesheet" href="https://diet-air-ds.vercel.app/container-tokens.css">
  <link rel="stylesheet" href="https://diet-air-ds.vercel.app/border-effects-tokens.css">
  <link rel="stylesheet" href="https://diet-air-ds.vercel.app/fonts.css">
  <link rel="stylesheet" href="https://diet-air-ds.vercel.app/text-styles-system.css">
  <link rel="stylesheet" href="https://diet-air-ds.vercel.app/card-components.css">
  <link rel="stylesheet" href="https://diet-air-ds.vercel.app/boilerplate.css">
</head>
<body>
  <!-- Content -->
</body>
</html>
````

**File Purposes:**
- `design-tokens-master.css` - Core color, brand, and UI tokens for all teams
- `spacing-tokens.css` - 8px-based spacing scale (--spacing-50 through --spacing-900)
- `container-tokens.css` - Content max-width containers (--container-maximum through --container-compact)
- `border-effects-tokens.css` - Border radius, border weight, and drop shadow tokens
- `fonts.css` - @font-face declarations for team display fonts
- `text-styles-system.css` - Text style classes (.display900, .title70, .bodyRegular30, etc.)
- `boilerplate.css` - Reset, base styles, layout utilities, spacing utilities

---

## Master Prompt Template
````
Create a [COMPONENT_NAME] component using pure HTML and CSS.

DESIGN SYSTEM REQUIREMENTS:
- Use CSS variables from our design system (never hardcode colors, spacing, typography, borders, or shadows)
- Component must work with any team theme (wolves, lynx, courage, summit, bucknell, sounders, reign, ncfc, jump, athletics)
- Component must support both light and dark modes
- Use utility classes from boilerplate.css for spacing and layout
- Use container classes from container-tokens.css for max-width control
- Use text style classes from text-styles-system.css for typography
- Use border and shadow utilities from border-effects-tokens.css for elevation
- Reference tokens from: --brand-*, --org-*, --text-*, --bg-*, --border-*, --neutral-*, --inverted-*, --spacing-*, --container-*, --border-radius-*, --border-weight-*, --shadow-*

COMPONENT SPECIFICATIONS:
[Describe the component details here]

CSS VARIABLE REFERENCE:
Colors:
- Backgrounds: var(--bg-base), var(--bg-surface), var(--bg-sheet), var(--bg-nav)
- Text: var(--text-primary), var(--text-secondary), var(--text-disabled), var(--text-placeholder)
- Brand: var(--brand-core), var(--brand-light), var(--brand-dark), var(--brand-interactive), var(--brand-inverted)
- Borders: var(--border-default), var(--border-hover), var(--border-active), var(--border-disabled)
- Interactive: var(--interactive-primary), var(--interactive-primary-text), var(--interactive-secondary-text), var(--interactive-tertiary-text), var(--interactive-transactional), var(--interactive-transactional-text)
- Neutral/Inverted scales: var(--neutral-[000-1000]), var(--inverted-[000-1000])
- Status: var(--status-success), var(--status-warning), var(--status-error), var(--status-info)

Container Classes:
- .container-maximum (1600px) - Landing pages, full-width layouts
- .container-extra-wide (1440px) - Dashboards, data-heavy pages
- .container-wide (1280px) - Standard pages with sidebars
- .container (1200px) - Default container
- .container-medium (1024px) - Article pages, forms
- .container-narrow (768px) - Reading content, centered forms
- .container-compact (640px) - Single column content
- .container-fluid - Full-width, no max-width

Typography Classes:
- Display: .display100 through .display900 (team-specific fonts and sizes)
- Titles: .title50 through .title90 (Inter Bold, consistent across teams)
- Labels Bold: .labelBold10 through .labelBold50 (Inter Semi-Bold)
- Labels Regular: .labelRegular10 through .labelRegular50 (Inter Regular)
- Body Bold: .bodyBold20 through .bodyBold40 (Inter Semi-Bold, 1.5 line height)
- Body Regular: .bodyRegular20 through .bodyRegular40 (Inter Regular, 1.5 line height)
- Text Modifiers: .text-primary, .text-secondary, .text-brand-core, .text-success, etc.

Spacing:
- Tokens: var(--spacing-50) through var(--spacing-900) (4px to 72px)
- Margin utilities: .m-*, .mt-*, .mb-*, .ml-*, .mr-*, .mx-*, .my-* (values: 50-900)
- Padding utilities: .p-*, .pt-*, .pb-*, .pl-*, .pr-*, .px-*, .py-* (values: 50-900)
- Gap utilities: .gap-*, .gap-x-*, .gap-y-* (values: 50-900)
- Responsive spacing: .my-large, .py-landing, .gap-card, etc.

Borders & Shadows:
- Border radius: var(--border-radius-50) (4px), var(--border-radius-100) (8px), var(--border-radius-200) (16px)
- Border radius utilities: .rounded-50, .rounded-100, .rounded-200, .rounded-button
- Border weight: var(--border-weight-50) (1px), var(--border-weight-100) (1px), var(--border-weight-200) (2px)
- Border utilities: .border, .border-thin, .border-heavy, .border-50, .border-100, .border-200
- Drop shadows: var(--shadow-sheet) (mobile elevated surfaces), var(--shadow-modal) (tablet/desktop modals)
- Shadow utilities: .shadow-sheet, .shadow-modal, .shadow-none

Layout & UI:
- Border radius: var(--button-border-radius) (team-specific: 8px, 12px, or 100px)
- Blur: var(--background-blur) (50px for all teams)
- Layout classes: .flex-center, .flex-column, .flex-row
- Responsive: .hide-mobile, .hide-desktop

OUTPUT:
Provide complete HTML and CSS. Include a demonstration showing the component with data-theme="wolves" and data-mode="light".
````

---

## Design Token Quick Reference

### Border & Shadow Tokens

**Border Radius:**
```css
--border-radius-50: 4px        /* Small elements, badges, tags */
--border-radius-100: 8px       /* Cards, inputs, standard UI elements */
--border-radius-200: 16px      /* Large cards, hero sections */
--button-border-radius         /* Team-specific (8px, 12px, or 100px) */
```

**Border Radius Utilities:**
```html
<div class="rounded-50">4px radius</div>
<div class="rounded-100">8px radius</div>
<div class="rounded-200">16px radius</div>
<button class="rounded-button">Team-specific button radius</button>

<!-- Directional radius -->
<div class="rounded-t-100">Top corners 8px</div>
<div class="rounded-b-100">Bottom corners 8px</div>
<div class="rounded-l-100">Left corners 8px</div>
<div class="rounded-r-100">Right corners 8px</div>

<!-- Individual corners -->
<div class="rounded-tl-100">Top-left 8px</div>
<div class="rounded-tr-100">Top-right 8px</div>
<div class="rounded-bl-100">Bottom-left 8px</div>
<div class="rounded-br-100">Bottom-right 8px</div>
```

**Border Weight:**
```css
--border-weight-50: 1px        /* Web: subtle borders with neutral200 */
--border-weight-100: 1px       /* Standard borders with neutral500 */
--border-weight-200: 2px       /* Heavy borders with neutral1000 or brandInteractive */
```

**Border Weight Utilities:**
```html
<div class="border-50 border-solid border-neutral-200">Thin border</div>
<div class="border-100 border-solid border-default">Standard border</div>
<div class="border-200 border-solid border-brand-interactive">Heavy border</div>

<!-- Directional borders -->
<div class="border-t-100 border-solid border-default">Top border</div>
<div class="border-b-100 border-solid border-default">Bottom border</div>

<!-- Convenience classes -->
<div class="border">Standard border with default color</div>
<div class="border-thin">1px border with neutral200</div>
<div class="border-heavy">2px border with neutral1000</div>
<div class="border-interactive">2px border with brandInteractive</div>
```

**Drop Shadows:**
```css
/* DO NOT USE SHADOWS ON CARDS */
/* Sheet - Mobile elevated surfaces (bottom sheets) */
--shadow-sheet-a: 0px -8px 64px 0px rgba(0, 0, 0, 0.12)
--shadow-sheet-b: 0px -4px 32px 0px rgba(0, 0, 0, 0.08)
--shadow-sheet: var(--shadow-sheet-a), var(--shadow-sheet-b)

/* Modal - Tablet/Desktop modals and overlays (highest elevation) */
--shadow-modal-a: 0px 8px 64px 0px rgba(0, 0, 0, 0.16)
--shadow-modal-b: 0px 4px 32px 0px rgba(0, 0, 0, 0.12)
--shadow-modal: var(--shadow-modal-a), var(--shadow-modal-b)
```

**Shadow Utilities:**
```html
<!-- DO NOT USE SHADOWS ON CARDS */ -->
<div class="shadow-sheet">Mobile elevated card</div>
<div class="shadow-modal">Desktop modal overlay</div>
<div class="shadow-none">Remove shadow</div>

<!-- Individual layers for advanced use -->
<div class="shadow-sheet-a">Just shadow layer A</div>
<div class="shadow-sheet-b">Just shadow layer B</div>
```

**When to use which shadow:**

✅ **shadow-sheet**
- Mobile bottom sheets
- Elevated cards on mobile
- Floating action buttons
- Mobile navigation drawers

✅ **shadow-modal**
- Desktop modals and dialogs
- Tablet overlays
- Popovers and dropdown menus (desktop)
- Highest elevation surfaces

❌ **Important Shadow Don'ts**
- Do not ever use shadows for cards
- Do not ever add more shadow on hover
- Do not use shadows unless something like a sheet or modal is presenting on top of main content.

### Container Tokens

**Content Max-Width Containers:**
```css
--container-maximum: 1600px      /* Landing pages, full-width layouts */
--container-extra-wide: 1440px   /* Dashboards, data-heavy pages */
--container-wide: 1280px         /* Standard pages with sidebars */
--container-default: 1200px      /* Default container (.container) */
--container-medium: 1024px       /* Article pages, forms */
--container-narrow: 768px        /* Reading content, centered forms */
--container-compact: 640px       /* Single column content */
```

**Container Classes:**
```html
<div class="container-maximum">1600px max-width</div>
<div class="container-extra-wide">1440px max-width</div>
<div class="container-wide">1280px max-width</div>
<div class="container">1200px max-width (default)</div>
<div class="container-medium">1024px max-width</div>
<div class="container-narrow">768px max-width</div>
<div class="container-compact">640px max-width</div>
<div class="container-fluid">No max-width</div>
```

**When to use each container:**

✅ **container-maximum (1600px)**
- Landing pages with full-bleed hero sections
- Dashboard layouts with multiple columns
- Data visualization pages
- Marketing pages with wide imagery

✅ **container-extra-wide (1440px)**
- Complex page layouts
- Multi-column content areas
- Product grids with 4+ columns
- Admin dashboards

✅ **container-wide (1280px)**
- Standard pages with sidebars
- Blog layouts with sidebar
- E-commerce product pages
- Event listings with filters

✅ **container (1200px) - Default**
- General purpose container
- Most standard page layouts
- Balanced content width

✅ **container-medium (1024px)**
- Article pages
- Form pages
- Profile pages
- Standard content pages

✅ **container-narrow (768px)**
- Reading-optimized content
- Long-form articles
- Centered forms (login, signup)
- Privacy policies, legal pages

✅ **container-compact (640px)**
- Single column mobile-first content
- Simple forms
- Confirmation pages
- Error pages

✅ **container-fluid**
- Full-width sections
- Image galleries
- Video players
- Maps

**Responsive Container Behavior:**
All containers have responsive padding that adjusts at breakpoints:
- Mobile (0-499px): 16px horizontal padding
- Tablet (500-1099px): 24px horizontal padding
- Desktop (1100px+): 32px horizontal padding
- Extra Large (1600px+): 48px for maximum/extra-wide containers

### Color Tokens

**Backgrounds (Semantic):**
- `--bg-base` → Main page background (furthest back layer)
- `--bg-surface` → Cards, tiles, elevated surfaces
- `--bg-sheet` → Modals, sheets, highest elevation elements
- `--bg-nav` → Navigation bars (with backdrop blur)

**Text (Semantic):**
- `--text-primary` → Body text, headlines (highest contrast)
- `--text-secondary` → Supporting text, captions, labels
- `--text-disabled` → Disabled state text
- `--text-placeholder` → Input placeholders

**Brand (Team-Specific):**
- `--brand-core` → Primary brand color
- `--brand-light` → Secondary/accent brand color
- `--brand-dark` → Dark brand variant
- `--brand-interactive` → Interactive elements (links, active states)
- `--brand-inverted` → Inverted brand color (typically for dark mode accents)

**Interactive (Semantic):**
- `--interactive-primary` → Primary action buttons
- `--interactive-primary-text` → Text on primary buttons
- `--interactive-secondary-text` → Text on secondary buttons
- `--interactive-tertiary-text` → Text on tertiary buttons
- `--interactive-transactional` → Transactional/purchase buttons (CTAs)
- `--interactive-transactional-text` → Text on transactional buttons

**Borders (Semantic):**
- `--border-default` → Default border color (subtle)
- `--border-hover` → Hover state borders (medium contrast)
- `--border-active` → Active/focused borders (high contrast)
- `--border-disabled` → Disabled element borders

**Neutral Scale (Mode-Aware):**
Use `--neutral-[000, 50, 100, 200, 300, 500, 700, 900, 1000]` for UI elements that need subtle backgrounds, borders, or overlays. These automatically flip in dark mode (black-based in light mode, white-based in dark mode).

**Inverted Scale (Mode-Aware):**
Use `--inverted-[000, 50, 100, 200, 300, 500, 700, 900, 1000]` when you need the opposite of neutral (white-based in light mode, black-based in dark mode). Good for overlays or reversed elements.

**White/Black Scale (Mode-Agnostic):**
- `--white-[100, 200, 300, 500, 700, 900, 1000]` → Always white-based opacity
- `--black-[100, 200, 300, 500, 700, 900, 1000]` → Always black-based opacity

**Status Colors (Mode-Aware):**
- `--status-success` → Success states, confirmations
- `--status-warning` → Warnings, cautions
- `--status-error` → Errors, destructive actions
- `--status-info` → Informational messages

### Spacing Tokens

**8px-based spacing scale:**
```css
--spacing-50: 4px     /* 0.5x - Minimal spacing, tight layouts */
--spacing-100: 8px    /* 1x - Base unit, compact spacing */
--spacing-150: 12px   /* 1.5x - Small gaps */
--spacing-200: 16px   /* 2x - Standard spacing */
--spacing-250: 20px   /* 2.5x - Medium spacing */
--spacing-300: 24px   /* 3x - Comfortable spacing */
--spacing-400: 32px   /* 4x - Large spacing */
--spacing-500: 40px   /* 5x - Extra large spacing */
--spacing-600: 48px   /* 6x - Section spacing */
--spacing-700: 56px   /* 7x - Major section spacing */
--spacing-800: 64px   /* 8x - Hero spacing */
--spacing-900: 72px   /* 9x - Maximum spacing */
--spacing-1000: 80px  /* 10x - Landing page spacing */
```

**Usage Examples:**
```css
/* CSS Variables */
padding: var(--spacing-300);          /* 24px */
margin-bottom: var(--spacing-200);    /* 16px */
gap: var(--spacing-150);              /* 12px */

/* Utility Classes */
.p-300      /* padding: 24px */
.mb-200     /* margin-bottom: 16px */
.gap-150    /* gap: 12px */
```

### Responsive Spacing Tokens (Auto-Adjusting)

**Use these tokens when spacing should automatically shrink on smaller viewports:**

**Spacing - Row** (for event rows, selectors, short wide objects)
- Mobile (0-499px): 8px
- Tablet (500-1099px): 12px
- Desktop (1100px+): 16px
- Token: `var(--spacing-row)`
- Classes: `.gap-row`, `.my-row`, `.py-row`, etc.

**Spacing - Card** (space between most cards)
- Mobile: 16px
- Tablet: 20px
- Desktop: 24px
- Token: `var(--spacing-card)`
- Classes: `.gap-card`, `.my-card`, `.py-card`, etc.

**Spacing - Content Objects** (major sections on landing pages)
- Mobile: 32px
- Tablet: 40px
- Desktop: 48px
- Token: `var(--spacing-content)`
- Classes: `.gap-content`, `.my-content`, `.py-content`, etc.

**Margin - Small** (detailed interfaces, spacing above event lists or grids)
- Mobile: 16px
- Tablet: 32px
- Desktop: 48px
- Token: `var(--margin-small)`
- Classes: `.my-small`, `.py-small`, `.mx-small`, `.px-small`, etc.

**Margin - Large** (margins on most pages)
- Mobile: 16px
- Tablet: 40px
- Desktop: 64px
- Token: `var(--margin-large)`
- Classes: `.my-large`, `.py-large`, `.mx-large`, `.px-large`, etc.

**Margin - Landing Page** (landing pages and open layouts)
- Mobile: 24px
- Tablet: 48px
- Desktop: 80px
- Token: `var(--margin-landing)`
- Classes: `.my-landing`, `.py-landing`, `.mx-landing`, `.px-landing`, etc.

**When to use responsive spacing tokens vs fixed spacing tokens:**

✅ **Use Responsive Tokens** (`--spacing-row`, `--margin-large`, etc.) when:
- Spacing between cards in a grid
- Gaps between list items
- Section padding/margins that should feel proportional on all devices
- Landing page spacing
- Spacing that should create a consistent "feel" across breakpoints

✅ **Use Fixed Tokens** (`--spacing-200`, `--spacing-300`, etc.) when:
- Internal component padding (buttons, inputs)
- Spacing that must remain consistent (design system components)
- UI elements where size matters more than proportion
- When you need precise control

**Example Usage:**
```html
<div class="grid gap-card">
  <div class="card p-300 rounded-100 shadow-sheet">...</div>
  <div class="card p-300 rounded-100 shadow-sheet">...</div>
</div>

<section class="py-landing">
  <div class="container-maximum">
    <h1 class="display700 text-brand-core mb-300">Hero Title</h1>
    <p class="title60 text-secondary mb-400">Subtitle</p>
  </div>
</section>

<div class="flex-column gap-row">
  <div class="event-row p-200 rounded-100 border">...</div>
  <div class="event-row p-200 rounded-100 border">...</div>
  <div class="event-row p-200 rounded-100 border">...</div>
</div>
```

### Typography Tokens

**Display Styles (Team-Specific):**
Team-specific fonts with varying sizes and letter spacing per team:
````css
.display900  /* Largest display - Hero headlines */
.display800  /* Large display */
.display700  /* Medium-large display */
.display600  /* Medium display */
.display500  /* Medium-small display */
.display400  /* Small display */
.display300  /* Extra small display */
.display200  /* Minimal display */
.display100  /* Smallest display */
````

**Title Styles (Consistent - Inter Bold):**
````css
.title90   /* 36px - Page titles */
.title80   /* 32px - Section titles */
.title70   /* 28px - Subsection titles */
.title60   /* 24px - Card titles */
.title50   /* 20px - Small titles */
````

**Label Bold (Inter Semi-Bold 600):**
````css
.labelBold50   /* 20px */
.labelBold40   /* 16px */
.labelBold30   /* 14px */
.labelBold20   /* 12px */
.labelBold10   /* 10px */
````

**Label Regular (Inter Regular 400):**
````css
.labelRegular50   /* 20px */
.labelRegular40   /* 16px */
.labelRegular30   /* 14px */
.labelRegular20   /* 12px */
.labelRegular10   /* 10px */
````

**Body Bold (Inter Semi-Bold 600, 1.5 line-height):**
````css
.bodyBold40   /* 16px - Emphasized body text */
.bodyBold30   /* 14px - Standard emphasized */
.bodyBold20   /* 13px - Small emphasized */
````

**Body Regular (Inter Regular 400, 1.5 line-height):**
````css
.bodyRegular40   /* 16px - Large body text */
.bodyRegular30   /* 14px - Standard body text */
.bodyRegular20   /* 13px - Small body text */
````

**Text Color Modifiers:**
````css
.text-primary          /* High contrast text */
.text-secondary        /* Medium contrast text */
.text-disabled         /* Low contrast disabled text */
.text-placeholder      /* Placeholder text */
.text-brand-core       /* Brand primary color */
.text-brand-light      /* Brand secondary color */
.text-brand-interactive /* Brand interactive color */
.text-inverted         /* Inverted color */
.text-success          /* Success green */
.text-warning          /* Warning orange */
.text-error            /* Error red */
.text-info             /* Info blue */
````

**Text Utilities:**
````css
/* Alignment */
.text-left, .text-center, .text-right, .text-justify

/* Transform */
.text-uppercase, .text-lowercase, .text-capitalize, .text-normal-case

/* Decoration */
.text-underline, .text-line-through, .text-no-underline

/* Truncation */
.text-truncate          /* Single line ellipsis */
.text-truncate-2        /* Two line clamp */
.text-truncate-3        /* Three line clamp */
````

### UI Tokens

**Border Radius (Team-Specific):**
- `--button-border-radius` 
  - Wolves, Summit: 8px (sharp)
  - Lynx: 12px (medium)
  - Courage, Bucknell, Sounders, Reign, NCFC, Jump, Athletics: 100px (pill)

**Blur Effects:**
- `--background-blur` → 50px (all teams)

---

## Specific Component Examples



### Modal Component Prompt
````
Create a modal/dialog component using pure HTML and CSS.

DESIGN SYSTEM REQUIREMENTS:
- Use CSS variables from our design system
- Use border and shadow utilities
- Must work with all team themes
- Support light and dark modes

SPECIFICATIONS:
Modal Overlay:
- Background: var(--neutral-900) with backdrop-filter: blur(var(--background-blur))
- Full viewport coverage
- Z-index: 1000

Modal Dialog:
- Background: var(--bg-sheet)
- Border: var(--border-weight-100) solid var(--border-default)
- Border radius: var(--border-radius-200) (16px for large surface)
- Shadow: var(--shadow-modal) (highest elevation)
- Max-width: var(--container-narrow) (768px)
- Padding: var(--spacing-400)

Content Structure:
- Title: .title70 with .mb-300
- Body: .bodyRegular30 with .mb-400
- Button group: .flex-row with .gap-200

EXAMPLE STRUCTURE:
```html
<div class="modal-overlay">
  <div class="modal-dialog">
    <h2 class="title70 mb-300">Modal Title</h2>
    <p class="bodyRegular30 mb-400">Modal content goes here</p>
    <div class="flex-row gap-200">
      <button class="btn-primary rounded-button">Confirm</button>
      <button class="btn-secondary rounded-button">Cancel</button>
    </div>
  </div>
</div>

<style>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: var(--neutral-900);
  backdrop-filter: blur(var(--background-blur));
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-dialog {
  background: var(--bg-sheet);
  border: var(--border-weight-100) solid var(--border-default);
  border-radius: var(--border-radius-200);
  box-shadow: var(--shadow-modal);
  padding: var(--spacing-400);
  max-width: var(--container-narrow);
  width: 90%;
}
</style>
```

OUTPUT:
Complete HTML/CSS with demo using data-theme="lynx" data-mode="dark"
````

### Button Component Prompt
````
Create button components using pure HTML and CSS.

DESIGN SYSTEM REQUIREMENTS:
- Use CSS variables exclusively
- Use border and radius utilities
- Must work with all team themes (respects team-specific button-border-radius)
- Support light and dark modes

SPECIFICATIONS:
Primary Button:
- Background: var(--interactive-primary)
- Text color: var(--interactive-primary-text)
- Border radius: var(--button-border-radius) (team-specific)
- Padding: 12px 24px
- Typography: .labelBold40 (16px Semi-Bold)
- Border: none

Secondary Button:
- Background: transparent
- Text color: var(--text-primary)
- Border: var(--border-weight-100) solid var(--border-default)
- Border radius: var(--button-border-radius) (team-specific)
- Padding: 12px 24px
- Typography: .labelBold40

Button States:
- Hover: opacity 0.9 for primary, border-color var(--brand-core) for secondary
- Focus: outline with var(--brand-interactive)
- Disabled: opacity 0.5, cursor not-allowed

EXAMPLE STRUCTURE:
```html
<button class="btn-primary rounded-button">
  <span class="labelBold40">Primary Action</span>
</button>

<button class="btn-secondary rounded-button border">
  <span class="labelBold40">Secondary Action</span>
</button>

<style>
.btn-primary {
  background: var(--interactive-primary);
  color: var(--interactive-primary-text);
  border: none;
  border-radius: var(--button-border-radius);
  padding: 12px 24px;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.btn-primary:hover {
  opacity: 0.9;
}

.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  border: var(--border-weight-100) solid var(--border-default);
  border-radius: var(--button-border-radius);
  padding: 12px 24px;
  cursor: pointer;
  transition: border-color 0.2s ease;
}

.btn-secondary:hover {
  border-color: var(--brand-core);
}

button:focus {
  outline: 2px solid var(--brand-interactive);
  outline-offset: 2px;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
```

OUTPUT:
Complete HTML/CSS with demos for all team themes showing how button-border-radius adapts
````

### Closed Layout Card Prompt
````
Create a closed layout card component using pure HTML and CSS.

DESIGN SYSTEM REQUIREMENTS:
- Use CSS variables from our design system
- Use card component classes from card-components.css
- Use border and shadow utilities
- Must work with all team themes
- Support light and dark modes

SPECIFICATIONS:
Card Structure:
- Use .card-closed base class
- Background: var(--bg-surface)
- Border radius: var(--border-radius-200) (16px)
- Divided into sections with border separators

Sections:
- Header (.card-closed-header): padding 20px, border-bottom separator
- Body (.card-closed-body): padding 24px, border-bottom separator
- Footer (.card-closed-footer): padding 24px, no border

Content Components:
- Use .card-text-pair for title/subtitle combinations
- Use .card-actions-horizontal or .card-actions-vertical for action buttons
- Typography: .title60 for titles, .labelRegular20 for metadata, .bodyRegular30 for descriptions

Interactive Variant:
- Use .card-closed-interactive for clickable cards
- Adds hover states with border color change and lift effect

WHEN TO USE:
- Event details with structured information
- Product cards with pricing sections
- Profile cards with stats and actions
- Any content requiring clear visual separation between sections

EXAMPLE STRUCTURE:
```html
<!-- Basic Closed Card -->
<div class="card-closed">
  <div class="card-closed-header">
    <div class="card-text-pair">
      <h3 class="title60">Event Title</h3>
      <p class="labelRegular20 text-secondary">Saturday, March 15</p>
    </div>
  </div>
  <div class="card-closed-body">
    <p class="bodyRegular30">Event description goes here with details about the occasion.</p>
  </div>
  <div class="card-closed-footer">
    <div class="card-actions-horizontal">
      <button class="btn-primary rounded-button">Register</button>
      <a href="#" class="labelBold40 text-brand-interactive">Learn More</a>
    </div>
  </div>
</div>

<!-- Interactive Closed Card (clickable) -->
<div class="card-closed-interactive">
  <div class="card-closed-header">
    <div class="card-text-pair">
      <h3 class="title60">Product Name</h3>
      <p class="labelRegular20 text-secondary">$99.99</p>
    </div>
  </div>
  <div class="card-closed-body">
    <p class="bodyRegular30">Product description with key features.</p>
  </div>
  <div class="card-closed-footer">
    <span class="labelBold30 text-brand-core">In Stock</span>
  </div>
</div>

<!-- Card Grid -->
<div class="card-grid grid-cols-3-desktop grid-cols-2-tablet grid-cols-1-mobile">
  <div class="card-closed-interactive">...</div>
  <div class="card-closed-interactive">...</div>
  <div class="card-closed-interactive">...</div>
</div>
```

OUTPUT:
Complete HTML/CSS with demo using data-theme="courage" data-mode="light"
````

### Open Layout Card Prompt
````
Create an open layout card component using pure HTML and CSS.

DESIGN SYSTEM REQUIREMENTS:
- Use CSS variables from our design system
- Use card component classes from card-components.css
- Use border and shadow utilities
- Must work with all team themes
- Support light and dark modes

SPECIFICATIONS:
Card Structure:
- Use .card-open base class (transparent container)
- Header (.card-open-header): no background, for titles
- Content (.card-open-content): container for subsections
- Sections (.card-open-section): individual backgrounds with 16px radius

Spacing:
- 20px gap between header and content
- 12px gap between subsections
- 24px padding inside each section

Content Components:
- Use .card-text-pair for title/subtitle in header
- Typography: .display400 or .display500 for header titles
- Use .labelRegular30 for section metadata
- Use .bodyRegular30 for section descriptions

Interactive Variant:
- Use .card-open-section-interactive for clickable sections
- Each section can have independent hover states

WHEN TO USE:
- Landing pages with feature highlights
- Blog post layouts with separate content blocks
- Multi-part forms with distinct sections
- Educational content with modular lessons
- Marketing pages with separated value propositions

EXAMPLE STRUCTURE:
```html
<!-- Basic Open Card -->
<div class="card-open">
  <div class="card-open-header">
    <div class="card-text-pair">
      <h2 class="display400">Feature Highlights</h2>
      <p class="labelRegular30 text-secondary">Discover what makes us different</p>
    </div>
  </div>
  <div class="card-open-content">
    <div class="card-open-section">
      <h3 class="title50 mb-150">Fast Performance</h3>
      <p class="bodyRegular30">Lightning-fast load times and smooth interactions.</p>
    </div>
    <div class="card-open-section">
      <h3 class="title50 mb-150">Easy Integration</h3>
      <p class="bodyRegular30">Connect with your existing tools in minutes.</p>
    </div>
    <div class="card-open-section">
      <h3 class="title50 mb-150">24/7 Support</h3>
      <p class="bodyRegular30">Our team is always here to help you succeed.</p>
    </div>
  </div>
</div>

<!-- Interactive Open Card (clickable sections) -->
<div class="card-open">
  <div class="card-open-header">
    <h2 class="display500 mb-200">Choose Your Plan</h2>
  </div>
  <div class="card-open-content">
    <div class="card-open-section-interactive">
      <div class="card-text-pair mb-200">
        <h3 class="title60">Starter</h3>
        <p class="labelRegular20 text-secondary">$29/month</p>
      </div>
      <p class="bodyRegular30">Perfect for individuals and small teams.</p>
    </div>
    <div class="card-open-section-interactive">
      <div class="card-text-pair mb-200">
        <h3 class="title60">Professional</h3>
        <p class="labelRegular20 text-secondary">$99/month</p>
      </div>
      <p class="bodyRegular30">Advanced features for growing businesses.</p>
    </div>
  </div>
</div>

<!-- Open Card Grid (more breathing room) -->
<div class="card-grid-open grid-cols-2-desktop grid-cols-1-mobile">
  <div class="card-open">...</div>
  <div class="card-open">...</div>
</div>
```

OUTPUT:
Complete HTML/CSS with demo using data-theme="summit" data-mode="dark"
````

### Card Grid Layouts Prompt
````
Create responsive card grid layouts using pure HTML and CSS.

DESIGN SYSTEM REQUIREMENTS:
- Use CSS variables from our design system
- Use card grid classes from card-components.css
- Use responsive grid utilities from boilerplate.css
- Must work with all team themes
- Support light and dark modes

SPECIFICATIONS:
Grid Types:
- .card-grid: Standard spacing (16px mobile, 20px tablet, 24px desktop)
- .card-grid-closed: Tighter spacing (8px mobile, 12px tablet, 16px desktop)
- .card-grid-open: More breathing room (32px mobile, 40px tablet, 48px desktop)

Responsive Columns:
- .grid-cols-1-mobile: Single column on mobile
- .grid-cols-2-tablet: Two columns on tablet
- .grid-cols-3-desktop: Three columns on desktop
- .grid-cols-4-desktop: Four columns on desktop

WHEN TO USE EACH GRID:
- card-grid: General purpose card layouts, product grids, blog post grids
- card-grid-closed: Dense event lists, compact product catalogs, data-heavy dashboards
- card-grid-open: Landing pages, feature showcases, marketing content

EXAMPLE STRUCTURE:
```html
<!-- Standard Card Grid (3 columns desktop) -->
<div class="card-grid grid-cols-3-desktop grid-cols-2-tablet grid-cols-1-mobile">
  <div class="card-closed-interactive">
    <div class="card-closed-header">
      <h3 class="title60">Card 1</h3>
    </div>
    <div class="card-closed-body">
      <p class="bodyRegular30">Description</p>
    </div>
  </div>
  <!-- More cards... -->
</div>

<!-- Closed Layout Grid (tighter spacing) -->
<div class="card-grid-closed grid-cols-2-desktop grid-cols-1-mobile">
  <div class="card-closed">
    <div class="card-closed-header">
      <div class="card-text-pair">
        <h4 class="title50">Event Name</h4>
        <p class="labelRegular20 text-secondary">Date</p>
      </div>
    </div>
    <div class="card-closed-body">
      <p class="bodyRegular30">Details</p>
    </div>
  </div>
  <!-- More cards... -->
</div>

<!-- Open Layout Grid (more space) -->
<div class="card-grid-open grid-cols-2-desktop grid-cols-1-mobile">
  <div class="card-open">
    <div class="card-open-header">
      <h3 class="display400">Feature</h3>
    </div>
    <div class="card-open-content">
      <div class="card-open-section">
        <p class="bodyRegular30">Content</p>
      </div>
    </div>
  </div>
  <!-- More cards... -->
</div>

<!-- 4-Column Product Grid -->
<div class="card-grid grid-cols-4-desktop grid-cols-3-tablet grid-cols-2-mobile">
  <div class="card-closed-interactive">
    <div class="card-closed-header">
      <h4 class="title50">Product</h4>
    </div>
    <div class="card-closed-footer">
      <span class="labelBold40 text-brand-core">$99</span>
    </div>
  </div>
  <!-- More products... -->
</div>
```

OUTPUT:
Complete HTML/CSS with multiple grid examples using data-theme="athletics" data-mode="light"
````

---

---

## Best Practices Summary

### Container Usage
✅ **DO:**
- Choose the appropriate container for your content type
- Use `.container-maximum` for landing page heroes
- Use `.container-narrow` for article content (optimal reading)
- Use `.container-extra-wide` for dashboards
- Mix container sizes on the same page for visual hierarchy

❌ **DON'T:**
- Use the same container everywhere
- Create custom max-widths
- Hardcode container widths
- Forget that containers have responsive padding

### Spacing
✅ **DO:**
- Use spacing tokens: `var(--spacing-300)`
- Use utility classes: `.p-300`, `.mb-200`, `.gap-150`
- Use responsive spacing for section margins: `.py-large`, `.my-landing`
- Follow the 8px grid: 50, 100, 150, 200, 250, 300, 400, 500, 600, 700, 800, 900

❌ **DON'T:**
- Hardcode pixel values: `padding: 24px`
- Use arbitrary spacing: `margin: 13px`
- Break the 8px rhythm
- Use fixed spacing when responsive spacing is more appropriate

### Colors
✅ **DO:**
- Use semantic tokens: `var(--bg-surface)`, `var(--text-primary)`
- Use brand tokens: `var(--brand-core)`, `var(--brand-interactive)`
- Use status colors: `var(--status-success)`

❌ **DON'T:**
- Hardcode colors: `color: #266092`
- Use opacity on solid colors when neutral/inverted scales exist
- Reference `--org-*` tokens directly (use semantic `--bg-*` and `--interactive-*` instead)

### Borders & Shadows
✅ **DO:**
- Use border radius tokens: `var(--border-radius-100)` or utility classes `.rounded-100`
- Use border weight tokens: `var(--border-weight-100)` or utility classes `.border-100`
- Use shadow tokens: `var(--shadow-sheet)`, `var(--shadow-modal)` or utility classes `.shadow-sheet`
- Respect team-specific `var(--button-border-radius)` for buttons
- Use `.shadow-sheet` for mobile cards and elevated surfaces
- Use `.shadow-modal` for desktop modals and highest elevation

❌ **DON'T:**
- Hardcode border radius: `border-radius: 8px`
- Hardcode border width: `border: 1px solid`
- Hardcode shadows: `box-shadow: 0 2px 8px rgba(0,0,0,0.1)`
- Use desktop modal shadows on mobile surfaces
- Forget that shadows adjust for dark mode automatically

### Typography
✅ **DO:**
- Use text style classes: `.display700`, `.title60`, `.bodyRegular30`
- Use color modifiers: `.text-primary`, `.text-brand-core`
- Combine classes: `<h1 class="display700 text-brand-core mb-300">`

❌ **DON'T:**
- Hardcode font sizes: `font-size: 36px`
- Create custom typography without tokens
- Forget letter-spacing and line-height (classes handle this)

### Layout
✅ **DO:**
- Use container classes: `.container-maximum`, `.container-narrow`
- Use utility classes: `.flex-center`, `.flex-column`, `.flex-row`
- Leverage gap utilities: `.gap-200`, `.gap-card`
- Use responsive utilities: `.hide-mobile`, `.hide-desktop`
- Use border and shadow utilities for elevation and depth

❌ **DON'T:**
- Recreate common layouts from scratch
- Use fixed widths without max-width constraints
- Forget mobile responsiveness
- Use wrong container for content type (e.g., `.container-maximum` for article text)
- Create custom shadow effects when tokens exist

---

## Tips for Success

1. **Choose the right container** - Consider the content type and reading experience
2. **Use border and shadow tokens** - Creates consistent elevation and depth across all themes
3. **Always specify the team and mode** in your prompt for consistent output
4. **Reference the token guide** when unsure which variable to use
5. **Test in both modes** - switch `data-mode="light"` to `data-mode="dark"` to verify
6. **Keep it modular** - Generate smaller components first, then compose into pages
7. **Use semantic HTML** - Always use proper HTML5 elements
8. **Leverage utility classes** - Don't recreate spacing, layout, borders, shadows, or text styles
9. **Follow the 8px grid** - All spacing should use spacing tokens
10. **Mix container widths** - Use different containers for different page sections
11. **Check the CSS files** - Review what utilities already exist before creating custom styles
12. **Respect team-specific values** - Button border radius changes per team (use `var(--button-border-radius)`)

---

## Team Theme Reference

**Available Teams:**
- `wolves` - Minnesota Timberwolves (blue/green, 8px button radius)
- `lynx` - Minnesota Lynx (blue/green, 12px button radius)
- `courage` - North Carolina Courage (red/gold, pill button radius)
- `summit` - Denver Summit FC (green/red/yellow, 8px button radius)
- `bucknell` - Bucknell Bison (navy/orange, pill button radius)
- `sounders` - Seattle Sounders FC (green/blue/teal, pill button radius)
- `reign` - Seattle Reign FC (purple/gold, pill button radius)
- `ncfc` - North Carolina Football Club (blue/gold, pill button radius)
- `jump` - Jump Default (purple/lime, pill button radius)
- `athletics` - Las Vegas Athletics (green/yellow, pill button radius)

**Team-Specific Tokens:**
- `--brand-core` - Primary team color
- `--brand-light` - Secondary team color
- `--brand-dark` - Dark team color
- `--brand-interactive` - Interactive elements color
- `--brand-inverted` - Accent color (often for dark mode CTAs)
- `--display-font` - Team display font family
- `--display-weight` - Font weight for display text
- `--display-letter-spacing` - Letter spacing for display text
- `--display-size-[100-900]` - Display text sizes
- `--button-border-radius` - Button radius (8px, 12px, or 100px)

---