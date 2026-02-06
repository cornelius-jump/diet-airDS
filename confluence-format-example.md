# Component Generation Prompt System

## Overview
This guide provides prompt templates for generating components that work with our design system. All components should reference CSS variables from the master token library.

---

## Core Principles

### 1. Always Use CSS Variables

```css
/* ✅ CORRECT */
background-color: var(--bg-surface);
color: var(--text-primary);
border-radius: var(--button-border-radius);
padding: var(--spacing-300);
margin-bottom: var(--spacing-200);

/* ❌ INCORRECT */
background-color: #EEF2F6;
color: #000000;
border-radius: 8px;
padding: 24px;
margin-bottom: 16px;
```

### 2. Never Hardcode Team-Specific Values
The theming system handles all team customization via `data-theme` and `data-mode` attributes.

### 3. Use Utility Classes When Appropriate
Leverage existing utility classes for spacing, text styles, and layout:

```html
<div class="container py-large">
  <div class="card p-300 mb-card">
    <h2 class="title60 text-brand-core mb-200">Title</h2>
    <p class="bodyRegular30 text-secondary">Description</p>
  </div>
</div>

<div class="flex-row gap-200">
  <div class="card p-300">
    <h3 class="title50 mb-150">Title</h3>
    <p class="bodyRegular30">Description</p>
  </div>
</div>
```

### 4. Component Structure
All components should be:
- Self-contained HTML/CSS
- Themeable via CSS variables
- Responsive
- Accessible
- Use spacing tokens and text style classes

---

## Available CSS Files & Load Order

```html
<!DOCTYPE html>
<html lang="en" data-theme="wolves" data-mode="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
  
  <!-- Design System CSS Files (in this exact order) -->
  <link rel="stylesheet" href="design-tokens-master.css">
  <link rel="stylesheet" href="spacing-tokens.css">
  <link rel="stylesheet" href="container-tokens.css">
  <link rel="stylesheet" href="fonts.css">
  <link rel="stylesheet" href="text-styles-system.css">
  <link rel="stylesheet" href="boilerplate.css">
</head>
<body>
  <!-- Content -->
</body>
</html>
```

**File Purposes:**
- `design-tokens-master.css` - Core color, brand, and UI tokens for all teams
- `spacing-tokens.css` - 8px-based spacing scale (--spacing-50 through --spacing-900)
- `container-tokens.css` - Content max-width containers (--container-maximum through --container-compact)
- `fonts.css` - @font-face declarations for team display fonts
- `text-styles-system.css` - Text style classes (.display900, .title70, .bodyRegular30, etc.)
- `boilerplate.css` - Reset, base styles, layout utilities, spacing utilities

---

## Master Prompt Template

```
Create a [COMPONENT_NAME] component using pure HTML and CSS.

DESIGN SYSTEM REQUIREMENTS:
- Use CSS variables from our design system (never hardcode colors, spacing, or typography)
- Component must work with any team theme (wolves, lynx, courage, summit, bucknell, sounders, reign, ncfc, jump, athletics)
- Component must support both light and dark modes
- Use utility classes from boilerplate.css for spacing and layout
- Use container classes from container-tokens.css for max-width control
- Use text style classes from text-styles-system.css for typography
- Reference tokens from: --brand-*, --org-*, --text-*, --bg-*, --border-*, --neutral-*, --inverted-*, --spacing-*, --container-*

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

Layout & UI:
- Border radius: var(--button-border-radius) (team-specific: 8px, 12px, or 100px)
- Blur: var(--background-blur) (50px for all teams)
- Layout classes: .flex-center, .flex-column, .flex-row
- Responsive: .hide-mobile, .hide-desktop

OUTPUT:
Provide complete HTML and CSS. Include a demonstration showing the component with data-theme="wolves" and data-mode="light".
```

---

## Design Token Quick Reference

### Container Tokens

**Content Max-Width Containers:**

| Token | Value | Use Case |
|-------|-------|----------|
| --container-maximum | 1600px | Landing pages, full-width layouts |
| --container-extra-wide | 1440px | Dashboards, data-heavy pages |
| --container-wide | 1280px | Standard pages with sidebars |
| --container-default | 1200px | Default container (.container) |
| --container-medium | 1024px | Article pages, forms |
| --container-narrow | 768px | Reading content, centered forms |
| --container-compact | 640px | Single column content |

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

| Token | Value | Use Case |
|-------|-------|----------|
| --spacing-50 | 4px | 0.5x - Minimal spacing, tight layouts |
| --spacing-100 | 8px | 1x - Base unit, compact spacing |
| --spacing-150 | 12px | 1.5x - Small gaps |
| --spacing-200 | 16px | 2x - Standard spacing |
| --spacing-250 | 20px | 2.5x - Medium spacing |
| --spacing-300 | 24px | 3x - Comfortable spacing |
| --spacing-400 | 32px | 4x - Large spacing |
| --spacing-500 | 40px | 5x - Extra large spacing |
| --spacing-600 | 48px | 6x - Section spacing |
| --spacing-700 | 56px | 7x - Major section spacing |
| --spacing-800 | 64px | 8x - Hero spacing |
| --spacing-900 | 72px | 9x - Maximum spacing |
| --spacing-1000 | 80px | 10x - Landing page spacing |

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
  <div>...</div>
  <div>...</div>
</div>

<section class="py-landing">
  <div class="container-maximum">
    <h1 class="display700 mb-content">Hero Title</h1>
    <p class="title60">Subtitle</p>
  </div>
</section>

<div class="event-list my-small">
  <div class="event-row py-row">...</div>
  <div class="event-row py-row">...</div>
  <div class="event-row py-row">...</div>
</div>
```

### Typography Tokens

**Display Styles (Team-Specific):**

Team-specific fonts with varying sizes and letter spacing per team:

| Class | Purpose |
|-------|---------|
| .display900 | Largest display - Hero headlines |
| .display800 | Large display |
| .display700 | Medium-large display |
| .display600 | Medium display |
| .display500 | Medium-small display |
| .display400 | Small display |
| .display300 | Extra small display |
| .display200 | Minimal display |
| .display100 | Smallest display |

**Title Styles (Consistent - Inter Bold):**

| Class | Size | Purpose |
|-------|------|---------|
| .title90 | 36px | Page titles |
| .title80 | 32px | Section titles |
| .title70 | 28px | Subsection titles |
| .title60 | 24px | Card titles |
| .title50 | 20px | Small titles |

**Label Bold (Inter Semi-Bold 600):**
- .labelBold50 (20px)
- .labelBold40 (16px)
- .labelBold30 (14px)
- .labelBold20 (12px)
- .labelBold10 (10px)

**Label Regular (Inter Regular 400):**
- .labelRegular50 (20px)
- .labelRegular40 (16px)
- .labelRegular30 (14px)
- .labelRegular20 (12px)
- .labelRegular10 (10px)

**Body Bold (Inter Semi-Bold 600, 1.5 line-height):**
- .bodyBold40 (16px - Emphasized body text)
- .bodyBold30 (14px - Standard emphasized)
- .bodyBold20 (13px - Small emphasized)

**Body Regular (Inter Regular 400, 1.5 line-height):**
- .bodyRegular40 (16px - Large body text)
- .bodyRegular30 (14px - Standard body text)
- .bodyRegular20 (13px - Small body text)

**Text Color Modifiers:**

```css
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
```

**Text Utilities:**

```css
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
```

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

### Header/Navigation Component Prompt

```
Create a header/navigation component using pure HTML and CSS.

DESIGN SYSTEM REQUIREMENTS:
- Use CSS variables from our design system (never hardcode values)
- Use utility classes from boilerplate.css for spacing and layout
- Use container classes from container-tokens.css for max-width
- Must work with all team themes
- Must support light/dark modes

SPECIFICATIONS:
- Height: 64px
- Background: var(--bg-nav) with backdrop-filter: blur(var(--background-blur))
- Use .container-wide class for max-width and horizontal padding
- Layout: Flexbox with space-between alignment
- Contains: 
  - Logo placeholder (left) - height: 40px
  - Navigation links (center) - use .labelBold40 class
  - CTA button (right) - use var(--interactive-primary) and var(--interactive-primary-text)
- Navigation links should use var(--text-primary) and .labelBold40
- Add subtle border-bottom: 1px solid var(--border-default)
- Sticky positioning: position: sticky; top: 0; z-index: 100;
- Use spacing tokens for padding and gaps

EXAMPLE STRUCTURE:
<header class="site-header">
  <div class="container-wide">
    <nav>...</nav>
  </div>
</header>

OUTPUT:
Complete HTML/CSS with demo using data-theme="wolves" data-mode="dark"
```

### Hero Section Component Prompt

```
Create a hero section component using pure HTML and CSS.

DESIGN SYSTEM REQUIREMENTS:
- Use CSS variables from our design system
- Use text style classes and spacing utilities
- Use container classes for proper max-width
- Must work with all team themes
- Support light and dark modes

SPECIFICATIONS:
- Full viewport height section (min-height: 100vh)
- Background: var(--bg-base)
- Use .container-maximum class for widest content width
- Use .flex-center class for vertical/horizontal centering
- Use .flex-column class for stacking

Content Structure:
- Large heading: .display700 class with .text-brand-core modifier
- Subheading: .title60 class with .text-secondary modifier
- Spacing between heading and subheading: .mb-200 on heading
- Button group: .flex-row with .gap-200
  - Primary button: var(--interactive-primary)
  - Secondary button: outlined with var(--border-default)
- Spacing before buttons: .mt-400

Responsive:
- Stack buttons vertically on mobile with .flex-column class and media query
- Reduce heading size on mobile
- Use .container-narrow class on mobile for better readability

EXAMPLE STRUCTURE:
<section class="hero flex-center">
  <div class="container-maximum text-center">
    <h1 class="display700 text-brand-core mb-200">Hero Headline</h1>
    <p class="title60 text-secondary mb-400">Supporting message</p>
    <div class="flex-row gap-200 button-group">
      <button class="btn btn-primary">Get Started</button>
      <button class="btn btn-secondary">Learn More</button>
    </div>
  </div>
</section>

OUTPUT:
Complete HTML/CSS component demonstrated with data-theme="lynx" data-mode="dark"
```

### Article Page Layout Prompt

```
Create an article page layout using pure HTML and CSS.

DESIGN SYSTEM REQUIREMENTS:
- Use CSS variables exclusively
- Use container classes for optimal reading width
- Use text style classes for typography
- Support all team themes and modes

SPECIFICATIONS:
Page Structure:
- Header: Use .container-wide for navigation width
- Article content: Use .container-narrow (768px) for optimal reading line length
- Related content sidebar: Use .container-wide with grid layout

Article Content:
- Title: .display600 class with .mb-300
- Byline: .labelRegular30 with .text-secondary and .mb-400
- Body paragraphs: .bodyRegular30 with .mb-300 between paragraphs
- Subheadings: .title60 with .mt-600 and .mb-200
- Pull quotes: .title70 with .text-brand-core and special styling

Layout:
- Use .py-large for vertical section spacing
- Use .container-narrow for article body (optimal reading width)
- Use .container-wide for header/footer

EXAMPLE STRUCTURE:
<article class="article-page">
  <div class="container-narrow py-large">
    <h1 class="display600 mb-300">Article Title</h1>
    <p class="labelRegular30 text-secondary mb-400">By Author • Date</p>
    <p class="bodyRegular30 mb-300">First paragraph...</p>
    <h2 class="title60 mt-600 mb-200">Subheading</h2>
    <p class="bodyRegular30 mb-300">More content...</p>
  </div>
</article>

OUTPUT:
Complete HTML/CSS with demo using data-theme="courage" data-mode="light"
```

### Dashboard Layout Prompt

```
Create a dashboard layout using pure HTML and CSS.

DESIGN SYSTEM REQUIREMENTS:
- Use CSS variables from our design system
- Use container and spacing utilities
- Must work with all team themes
- Support light and dark modes

SPECIFICATIONS:
Layout Structure:
- Use .container-extra-wide (1440px) for dashboard width
- Sidebar navigation: 240px fixed width
- Main content area: flexible width
- Card grid: CSS Grid with 3 columns on desktop

Sidebar:
- Background: var(--bg-surface)
- Border-right: 1px solid var(--border-default)
- Padding: use .p-300
- Nav items: .labelBold40 class with hover states

Main Content:
- Use .p-400 for content padding
- Card grid with .gap-card spacing
- Section headings: .title70 with .mb-card

Cards:
- Background: var(--bg-surface)
- Border: 1px solid var(--border-default)
- Border-radius: 12px
- Padding: .p-300
- Box shadow: 0 2px 8px var(--neutral-100)

Responsive:
- Mobile: Stack sidebar on top, single column cards
- Tablet: Collapse sidebar, 2 column cards
- Desktop: Full sidebar, 3 column cards

EXAMPLE STRUCTURE:
<div class="dashboard">
  <aside class="sidebar">
    <nav><!-- Navigation items --></nav>
  </aside>
  <main class="dashboard-content">
    <div class="container-extra-wide">
      <h1 class="title70 mb-card">Dashboard</h1>
      <div class="card-grid">
        <!-- Cards -->
      </div>
    </div>
  </main>
</div>

OUTPUT:
Complete HTML/CSS with demo using data-theme="summit" data-mode="dark"
```

---

## Page Layout Prompt Template

```
Create a [PAGE_NAME] page layout using pure HTML and CSS.

DESIGN SYSTEM REQUIREMENTS:
- Use CSS variables exclusively
- Must include proper theming attributes on <html> element
- Use utility classes for spacing and layout
- Use appropriate container classes for content width
- Use text style classes for typography
- Support responsive design
- Import all design system CSS files in correct order

PAGE STRUCTURE:
[Describe the layout sections and which container to use for each]

CSS FILES TO IMPORT (in this exact order):
1. design-tokens-master.css
2. spacing-tokens.css
3. container-tokens.css
4. fonts.css
5. text-styles-system.css
6. boilerplate.css

COMPONENTS NEEDED:
- Header: sticky navigation, var(--bg-nav) with blur, use .container-wide
- Main content area: var(--bg-base), use appropriate container class
- Sections: use .py-large or .py-landing for vertical spacing
- Footer: var(--bg-surface), use .container-wide
- [Other components with their container specifications]

CONTAINER USAGE:
- Navigation: .container-wide (1280px)
- Hero section: .container-maximum (1600px)
- Article content: .container-narrow (768px)
- Standard content: .container or .container-medium
- Dashboard: .container-extra-wide (1440px)

HTML STRUCTURE:
<!DOCTYPE html>
<html lang="en" data-theme="wolves" data-mode="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Page Title]</title>
  <link rel="stylesheet" href="design-tokens-master.css">
  <link rel="stylesheet" href="spacing-tokens.css">
  <link rel="stylesheet" href="container-tokens.css">
  <link rel="stylesheet" href="fonts.css">
  <link rel="stylesheet" href="text-styles-system.css">
  <link rel="stylesheet" href="boilerplate.css">
</head>
<body>
  <!-- Page content -->
</body>
</html>

OUTPUT:
Complete HTML/CSS page. Include example with data-theme="[TEAM]" and data-mode="[MODE]".
```

---

## Best Practices Summary

### Container Usage

**✅ DO:**
- Choose the appropriate container for your content type
- Use `.container-maximum` for landing page heroes
- Use `.container-narrow` for article content (optimal reading)
- Use `.container-extra-wide` for dashboards
- Mix container sizes on the same page for visual hierarchy

**❌ DON'T:**
- Use the same container everywhere
- Create custom max-widths
- Hardcode container widths
- Forget that containers have responsive padding

### Spacing

**✅ DO:**
- Use spacing tokens: `var(--spacing-300)`
- Use utility classes: `.p-300`, `.mb-200`, `.gap-150`
- Use responsive spacing for section margins: `.py-large`, `.my-landing`
- Follow the 8px grid: 50, 100, 150, 200, 250, 300, 400, 500, 600, 700, 800, 900

**❌ DON'T:**
- Hardcode pixel values: `padding: 24px`
- Use arbitrary spacing: `margin: 13px`
- Break the 8px rhythm
- Use fixed spacing when responsive spacing is more appropriate

### Colors

**✅ DO:**
- Use semantic tokens: `var(--bg-surface)`, `var(--text-primary)`
- Use brand tokens: `var(--brand-core)`, `var(--brand-interactive)`
- Use status colors: `var(--status-success)`

**❌ DON'T:**
- Hardcode colors: `color: #266092`
- Use opacity on solid colors when neutral/inverted scales exist
- Reference `--org-*` tokens directly (use semantic `--bg-*` and `--interactive-*` instead)

### Typography

**✅ DO:**
- Use text style classes: `.display700`, `.title60`, `.bodyRegular30`
- Use color modifiers: `.text-primary`, `.text-brand-core`
- Combine classes: `<h1 class="display700 text-brand-core mb-300">`

**❌ DON'T:**
- Hardcode font sizes: `font-size: 36px`
- Create custom typography without tokens
- Forget letter-spacing and line-height (classes handle this)

### Layout

**✅ DO:**
- Use container classes: `.container-maximum`, `.container-narrow`
- Use utility classes: `.flex-center`, `.flex-column`, `.flex-row`
- Leverage gap utilities: `.gap-200`, `.gap-card`
- Use responsive utilities: `.hide-mobile`, `.hide-desktop`

**❌ DON'T:**
- Recreate common layouts from scratch
- Use fixed widths without max-width constraints
- Forget mobile responsiveness
- Use wrong container for content type (e.g., `.container-maximum` for article text)

---

## Tips for Success

1. **Choose the right container** - Consider the content type and reading experience
2. **Always specify the team and mode** in your prompt for consistent output
3. **Reference the token guide** when unsure which variable to use
4. **Test in both modes** - switch `data-mode="light"` to `data-mode="dark"` to verify
5. **Keep it modular** - Generate smaller components first, then compose into pages
6. **Use semantic HTML** - Always use proper HTML5 elements
7. **Leverage utility classes** - Don't recreate spacing, layout, or text styles
8. **Follow the 8px grid** - All spacing should use spacing tokens
9. **Mix container widths** - Use different containers for different page sections
10. **Check the CSS files** - Review what utilities already exist before creating custom styles

---

## Team Theme Reference

**Available Teams:**
- `wolves` - Minnesota Timberwolves (blue/green, 8px radius)
- `lynx` - Minnesota Lynx (blue/green, 12px radius)
- `courage` - North Carolina Courage (red/gold, pill radius)
- `summit` - Denver Summit FC (green/red/yellow, 8px radius)
- `bucknell` - Bucknell Bison (navy/orange, pill radius)
- `sounders` - Seattle Sounders FC (green/blue/teal, pill radius)
- `reign` - Seattle Reign FC (purple/gold, pill radius)
- `ncfc` - North Carolina Football Club (blue/gold, pill radius)
- `jump` - Jump Default (purple/lime, pill radius)
- `athletics` - Las Vegas Athletics (green/yellow, pill radius)

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