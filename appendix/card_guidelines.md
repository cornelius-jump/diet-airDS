# Card Component Guidelines

## Overview
Card components are flexible containers for organizing related content. This system provides two main card patterns that work seamlessly with all team themes and modes using only existing design system tokens.

---

## Card Patterns

### 1. Closed Layout Card
**Best for**: Event listings, product cards, structured information with clear sections

**Characteristics**:
- Single background surface (`var(--bg-surface)`)
- Divided into sections with border separators
- Compact, contained layout
- Sections: Header, Body (optional multiple), Footer

**Visual Structure**:
```
┌─────────────────────────────────┐
│ Header (20px padding)           │ ← title60, labelRegular20
├─────────────────────────────────┤ ← 1px border
│ Body (24px padding)             │ ← bodyRegular30
├─────────────────────────────────┤ ← 1px border (optional)
│ Footer (24px padding)           │ ← bodyRegular30
└─────────────────────────────────┘
```

### 2. Open Layout Card
**Best for**: Landing pages, feature highlights, blog layouts, marketing content

**Characteristics**:
- Transparent container with separated sections
- Each subsection has its own background
- More breathing room between elements
- Sections: Header (no background), Content subsections (with backgrounds)

**Visual Structure**:
```
  Header (no background)            ← display400, labelRegular30
  ↓ 20px gap

┌─────────────────────────────────┐
│ Subsection (24px padding)       │ ← bodyRegular30, rounded
└─────────────────────────────────┘
  ↓ 12px gap
┌─────────────────────────────────┐
│ Subsection (24px padding)       │ ← bodyRegular30, rounded
└─────────────────────────────────┘
```

---

## Token Mapping

All card styles use **existing tokens only** - no new tokens needed!

### Spacing
| Card Element | Token Used | Value |
|--------------|------------|-------|
| Closed header padding | `var(--spacing-250)` | 20px |
| Closed body/footer padding | `var(--spacing-300)` | 24px |
| Open header to content gap | `var(--spacing-250)` | 20px |
| Open subsection gap | `var(--spacing-150)` | 12px |
| Open subsection padding | `var(--spacing-300)` | 24px |

### Borders & Radius
| Element | Token Used | Value |
|---------|------------|-------|
| Card border radius | `var(--border-radius-200)` | 16px |
| Section borders | `var(--border-weight-100)` | 1px |
| Border color | `var(--neutral-200)` | rgba(0,0,0,0.1) in light mode |

### Colors
| Element | Token Used |
|---------|------------|
| Card background | `var(--bg-surface)` |
| Border color | `var(--neutral-200)` |
| Text primary | `var(--text-primary)` |
| Text secondary | `var(--text-secondary)` |

### Typography
| Usage | Class | Token |
|-------|-------|-------|
| Closed card title | `.title60` | 24px Bold |
| Closed card subtitle | `.labelRegular20` | 12px Regular |
| Open card title | `.display400` | Team-specific display font |
| Open card subtitle | `.labelRegular30` | 14px Regular |
| All body text | `.bodyRegular30` | 14px Regular, 1.5 line-height |

---

## CSS Classes

### Closed Layout Card

```css
.card-closed               /* Base closed card */
.card-closed-header        /* Top section with border */
.card-closed-body          /* Middle section(s) with border */
.card-closed-footer        /* Bottom section, no border */
```

### Open Layout Card

```css
.card-open                 /* Base open card container */
.card-open-header          /* Header without background */
.card-open-content         /* Container for subsections */
.card-open-section         /* Individual subsection with background */
```

### Interactive Variants

```css
.card-closed-interactive   /* Closed card with hover effects */
.card-open-section-interactive  /* Open section with hover effects */
```

### Elevated Variants

```css
.card-closed-elevated      /* Closed card with shadow */
.card-open-section-elevated  /* Open section with shadow */
```

### Utility Classes

```css
.card-text-pair            /* Title + subtitle container */
.card-actions              /* Action buttons container */
.card-actions-horizontal   /* Horizontal button layout */
.card-actions-vertical     /* Vertical button layout */
```

### Grid Layouts

```css
.card-grid                 /* Responsive card grid */
.card-grid-closed          /* Tighter spacing for closed cards */
.card-grid-open            /* More spacing for open cards */
```

---

## HTML Examples

### Closed Layout Card - Basic

```html
<div class="card-closed">
  <div class="card-closed-header">
    <div class="card-text-pair">
      <h3 class="title60">Minnesota Timberwolves vs Lakers</h3>
      <p class="labelRegular20 text-secondary">Saturday, March 15 • 7:00 PM</p>
    </div>
  </div>
  <div class="card-closed-body">
    <p class="bodyRegular30">Join us for an exciting matchup at Target Center. Experience the energy of live basketball and watch the Timberwolves take on their Western Conference rivals.</p>
  </div>
  <div class="card-closed-footer">
    <div class="card-actions-horizontal">
      <button class="btn-primary rounded-button">
        <span class="labelBold40">Buy Tickets</span>
      </button>
      <a href="#" class="labelBold40 text-brand-interactive">View Details</a>
    </div>
  </div>
</div>
```

### Closed Layout Card - Multiple Body Sections

```html
<div class="card-closed">
  <div class="card-closed-header">
    <div class="card-text-pair">
      <h3 class="title60">Season Ticket Package</h3>
      <p class="labelRegular20 text-secondary">2024-25 Season</p>
    </div>
  </div>
  <div class="card-closed-body">
    <h4 class="labelBold40 mb-100">Package Includes</h4>
    <p class="bodyRegular30">41 regular season home games, priority seating, exclusive merchandise, and access to member events.</p>
  </div>
  <div class="card-closed-body">
    <h4 class="labelBold40 mb-100">Pricing</h4>
    <p class="bodyRegular30">Starting at $2,500 per seat. Flexible payment plans available.</p>
  </div>
  <div class="card-closed-footer">
    <div class="card-actions-horizontal">
      <button class="btn-primary rounded-button">
        <span class="labelBold40">Learn More</span>
      </button>
    </div>
  </div>
</div>
```

### Open Layout Card - Landing Page Feature

```html
<div class="card-open">
  <div class="card-open-header">
    <div class="card-text-pair">
      <h2 class="display400">Fan Experience</h2>
      <p class="labelRegular30 text-secondary">Everything you need for game day</p>
    </div>
  </div>
  <div class="card-open-content">
    <div class="card-open-section">
      <h3 class="labelBold40 mb-150">Premium Seating</h3>
      <p class="bodyRegular30">Get the best views in the house with our premium seating options. Courtside, club level, and luxury suites available for every game.</p>
    </div>
    <div class="card-open-section">
      <h3 class="labelBold40 mb-150">Dining Options</h3>
      <p class="bodyRegular30">From gourmet restaurants to classic concessions, enjoy a wide variety of dining experiences throughout the arena.</p>
    </div>
    <div class="card-open-section">
      <h3 class="labelBold40 mb-150">Interactive Zones</h3>
      <p class="bodyRegular30">Engage with interactive displays, photo opportunities, and fan activities before and during the game.</p>
    </div>
  </div>
</div>
```

### Card Grid - Closed Cards

```html
<div class="container-wide py-large">
  <h2 class="title70 mb-card">Upcoming Games</h2>
  
  <div class="card-grid grid-cols-3-desktop grid-cols-2-tablet grid-cols-1-mobile">
    <div class="card-closed-interactive">
      <div class="card-closed-header">
        <div class="card-text-pair">
          <h3 class="title60">vs Lakers</h3>
          <p class="labelRegular20 text-secondary">Mar 15 • 7:00 PM</p>
        </div>
      </div>
      <div class="card-closed-body">
        <p class="bodyRegular30">Target Center</p>
      </div>
    </div>
    
    <div class="card-closed-interactive">
      <div class="card-closed-header">
        <div class="card-text-pair">
          <h3 class="title60">vs Warriors</h3>
          <p class="labelRegular20 text-secondary">Mar 18 • 8:00 PM</p>
        </div>
      </div>
      <div class="card-closed-body">
        <p class="bodyRegular30">Target Center</p>
      </div>
    </div>
    
    <div class="card-closed-interactive">
      <div class="card-closed-header">
        <div class="card-text-pair">
          <h3 class="title60">@ Nuggets</h3>
          <p class="labelRegular20 text-secondary">Mar 22 • 9:00 PM</p>
        </div>
      </div>
      <div class="card-closed-body">
        <p class="bodyRegular30">Ball Arena</p>
      </div>
    </div>
  </div>
</div>
```

### Card Grid - Open Cards

```html
<div class="container-maximum py-landing">
  <div class="container-narrow text-center mb-content">
    <h2 class="display700 text-brand-core mb-200">Why Choose Us</h2>
    <p class="title60 text-secondary">Experience sports like never before</p>
  </div>
  
  <div class="card-grid-open grid-cols-2-desktop grid-cols-1-mobile">
    <div class="card-open">
      <div class="card-open-header">
        <h3 class="display400 mb-100">Best Atmosphere</h3>
      </div>
      <div class="card-open-content">
        <div class="card-open-section-elevated">
          <p class="bodyRegular30">Feel the energy of 18,000 passionate fans cheering for every play.</p>
        </div>
      </div>
    </div>
    
    <div class="card-open">
      <div class="card-open-header">
        <h3 class="display400 mb-100">Modern Arena</h3>
      </div>
      <div class="card-open-content">
        <div class="card-open-section-elevated">
          <p class="bodyRegular30">State-of-the-art facilities with premium amenities and comfort.</p>
        </div>
      </div>
    </div>
  </div>
</div>
```

---

## Responsive Behavior

### Card Padding
All card padding uses fixed tokens and remains consistent across breakpoints.

### Card Grids
Use existing responsive grid utilities from `boilerplate.css`:

```html
<!-- 3 columns on desktop, 2 on tablet, 1 on mobile -->
<div class="card-grid grid-cols-3-desktop grid-cols-2-tablet grid-cols-1-mobile">
  <!-- cards -->
</div>
```

### Responsive Spacing Between Cards
Use responsive spacing tokens for gaps:

| Grid Type | Gap Token | Mobile | Tablet | Desktop |
|-----------|-----------|---------|---------|----------|
| `.card-grid` | `--spacing-card` | 16px | 20px | 24px |
| `.card-grid-closed` | `--spacing-row` | 8px | 12px | 16px |
| `.card-grid-open` | `--spacing-content` | 32px | 40px | 48px |

---

## Interactive States

### Hover Effects
Interactive cards include:
- Shadow elevation: `var(--shadow-sheet)`
- Subtle lift: `transform: translateY(-2px)`
- Smooth transitions: `0.2s ease`

```html
<!-- Automatically includes hover effects -->
<div class="card-closed-interactive">
  <!-- content -->
</div>
```

### Focus States
When cards contain links or buttons, ensure proper focus states:

```html
<a href="#" class="card-closed-interactive">
  <div class="card-closed-header">
    <h3 class="title60">Clickable Card</h3>
  </div>
  <div class="card-closed-body">
    <p class="bodyRegular30">Full card is clickable</p>
  </div>
</a>
```

---

## Theme Compatibility

All card components automatically adapt to:
- **Team themes**: Works with all 10 teams (wolves, lynx, courage, summit, bucknell, sounders, reign, ncfc, jump, athletics)
- **Light/Dark modes**: Colors adjust via CSS variables
- **Team-specific display fonts**: Open card headers use team display fonts via `.display400`

### Example: Same Card, Different Themes

```html
<!-- Wolves Theme -->
<html data-theme="wolves" data-mode="light">
  <div class="card-closed">...</div>
</html>

<!-- Courage Theme, Dark Mode -->
<html data-theme="courage" data-mode="dark">
  <div class="card-closed">...</div>
</html>
```

Both render correctly with appropriate colors, fonts, and button radius!

---

## Best Practices

### ✅ DO:
- Use `.card-closed` for structured, data-heavy content (events, products, lists)
- Use `.card-open` for marketing content and landing pages
- Leverage existing text style classes (`.title60`, `.bodyRegular30`, etc.)
- Use responsive grid utilities for card layouts
- Include `.card-text-pair` for consistent title/subtitle spacing
- Add hover states with `-interactive` variants for clickable cards
- Use appropriate container classes (`.container-narrow`, `.container-wide`) for card grids

### ❌ DON'T:
- Hardcode colors - always use `var(--bg-surface)`, `var(--text-primary)`, etc.
- Hardcode spacing - use spacing tokens
- Create custom card styles - extend existing classes instead
- Mix closed and open patterns in the same grid
- Forget responsive grid classes
- Add shadows to every card - use them for emphasis

---

## Accessibility

### Semantic HTML
```html
<!-- ✅ Good: Semantic structure -->
<article class="card-closed">
  <header class="card-closed-header">
    <h3 class="title60">Title</h3>
  </header>
  <div class="card-closed-body">
    <p class="bodyRegular30">Content</p>
  </div>
</article>

<!-- ❌ Avoid: Generic divs everywhere -->
<div class="card-closed">
  <div class="card-closed-header">
    <div class="title60">Title</div>
  </div>
</div>
```

### Interactive Cards
```html
<!-- If entire card is clickable -->
<a href="/event/123" class="card-closed-interactive" aria-label="View Minnesota Timberwolves vs Lakers game details">
  <div class="card-closed-header">
    <h3 class="title60">Timberwolves vs Lakers</h3>
  </div>
</a>

<!-- If card has multiple actions -->
<article class="card-closed">
  <header class="card-closed-header">
    <h3 class="title60">Timberwolves vs Lakers</h3>
  </header>
  <div class="card-closed-footer">
    <button class="btn-primary">Buy Tickets</button>
    <a href="/event/123">View Details</a>
  </div>
</article>
```

---

## File Load Order

To use cards, ensure these files are loaded in order:

```html
<link rel="stylesheet" href="design-tokens-master.css">
<link rel="stylesheet" href="spacing-tokens.css">
<link rel="stylesheet" href="container-tokens.css">
<link rel="stylesheet" href="border-effects-tokens.css">
<link rel="stylesheet" href="fonts.css">
<link rel="stylesheet" href="text-styles-system.css">
<link rel="stylesheet" href="boilerplate.css">
<link rel="stylesheet" href="card-components.css"> <!-- Load after border-effects -->
```

---

## Summary

**Two Patterns:**
1. **Closed Layout**: Single background, divided sections, borders → Events, products, structured data
2. **Open Layout**: Transparent container, separated sections → Landing pages, features, marketing

**All Existing Tokens:**
- Spacing: `--spacing-150` (12px), `--spacing-250` (20px), `--spacing-300` (24px)
- Radius: `--border-radius-200` (16px)
- Colors: `--bg-surface`, `--neutral-200`, `--text-primary`
- Typography: `.title60`, `.display400`, `.bodyRegular30`, `.labelRegular20`

**Zero New Dependencies:**
Every token and class referenced already exists in your design system!