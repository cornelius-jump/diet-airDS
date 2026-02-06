# Text Pairs Reference Guide

## Overview
Text pairs are pre-defined combinations of label and sublabel text styles that create consistent visual hierarchy across all components. Each pair includes specific sizing and spacing to ensure optimal readability and visual balance.

---

## Text Pair Hierarchy

Text pairs are numbered from 9000 (largest) to 1000 (smallest), making it easy to choose the right scale for your content.

### Text Pair 9000
**Use for:** Hero sections, landing page headlines, major marketing headers

| Element | Style | Value |
|---------|-------|-------|
| Label | Display Text 600 | `display600` |
| Spacing Between | | `8px` (mb-100) |
| Sublabel | Label Regular 50 | `labelRegular50` |

**HTML Snippet:**
```html
<div class="card-text-pair">
  <h1 class="display600">LABEL</h1>
  <p class="labelRegular50 text-secondary">Sublabel</p>
</div>
```

**With Manual Spacing:**
```html
<h1 class="display600 mb-100">LABEL</h1>
<p class="labelRegular50 text-secondary">Sublabel</p>
```

---

### Text Pair 8000
**Use for:** Page headers, section intros, feature headlines

| Element | Style | Value |
|---------|-------|-------|
| Label | Display Text 500 | `display500` |
| Spacing Between | | `8px` (mb-100) |
| Sublabel | Label Regular 40 | `labelRegular40` |

**HTML Snippet:**
```html
<div class="card-text-pair">
  <h1 class="display500">LABEL</h1>
  <p class="labelRegular40 text-secondary">Sublabel</p>
</div>
```

**With Manual Spacing:**
```html
<h1 class="display500 mb-100">LABEL</h1>
<p class="labelRegular40 text-secondary">Sublabel</p>
```

---

### Text Pair 7000
**Use for:** Section headers, card group titles, modal headers

| Element | Style | Value |
|---------|-------|-------|
| Label | Display Text 400 | `display400` |
| Spacing Between | | `4px` (mb-50) |
| Sublabel | Label Regular 30 | `labelRegular30` |

**HTML Snippet:**
```html
<div class="card-text-pair">
  <h2 class="display400">LABEL</h2>
  <p class="labelRegular30 text-secondary">Sublabel</p>
</div>
```

**With Manual Spacing:**
```html
<h2 class="display400 mb-50">LABEL</h2>
<p class="labelRegular30 text-secondary">Sublabel</p>
```

---

### Text Pair 6000
**Use for:** Component headers, large card titles, section subheaders

| Element | Style | Value |
|---------|-------|-------|
| Label | Display Text 300 | `display300` |
| Spacing Between | | `2px` |
| Sublabel | Label Regular 20 | `labelRegular20` |

**HTML Snippet:**
```html
<div class="card-text-pair">
  <h3 class="display300">LABEL</h3>
  <p class="labelRegular20 text-secondary">Sublabel</p>
</div>
```

**With Manual Spacing:**
```html
<h3 class="display300" style="margin-bottom: 2px;">LABEL</h3>
<p class="labelRegular20 text-secondary">Sublabel</p>
```

---

### Text Pair 5000
**Use for:** Card headers, list item titles, standard component headers

| Element | Style | Value |
|---------|-------|-------|
| Label | Title 50 | `title50` |
| Spacing Between | | `2px` |
| Sublabel | Label Regular 20 | `labelRegular20` |

**HTML Snippet:**
```html
<div class="card-text-pair">
  <h3 class="title50">Label</h3>
  <p class="labelRegular20 text-secondary">Sublabel</p>
</div>
```

**With Manual Spacing:**
```html
<h3 class="title50" style="margin-bottom: 2px;">Label</h3>
<p class="labelRegular20 text-secondary">Sublabel</p>
```

---

### Text Pair 4000
**Use for:** Small card headers, list items with metadata, compact components

| Element | Style | Value |
|---------|-------|-------|
| Label | Label Bold 40 | `labelBold40` |
| Spacing Between | | `2px` |
| Sublabel | Label Regular 20 | `labelRegular20` |

**HTML Snippet:**
```html
<div class="card-text-pair">
  <h4 class="labelBold40">Label</h4>
  <p class="labelRegular20 text-secondary">Sublabel</p>
</div>
```

**With Manual Spacing:**
```html
<h4 class="labelBold40" style="margin-bottom: 2px;">Label</h4>
<p class="labelRegular20 text-secondary">Sublabel</p>
```

---

### Text Pair 3000
**Use for:** Compact list items, table headers with descriptions, dense layouts

| Element | Style | Value |
|---------|-------|-------|
| Label | Label Bold 30 | `labelBold30` |
| Spacing Between | | `2px` |
| Sublabel | Label Regular 10 | `labelRegular10` |

**HTML Snippet:**
```html
<div class="card-text-pair">
  <h5 class="labelBold30">Label</h5>
  <p class="labelRegular10 text-secondary">Sublabel</p>
</div>
```

**With Manual Spacing:**
```html
<h5 class="labelBold30" style="margin-bottom: 2px;">Label</h5>
<p class="labelRegular10 text-secondary">Sublabel</p>
```

---

### Text Pair 2000
**Use for:** Small components, badges with descriptions, tight layouts

| Element | Style | Value |
|---------|-------|-------|
| Label | Label Bold 20 | `labelBold20` |
| Spacing Between | | `1px` |
| Sublabel | Label Regular 10 | `labelRegular10` |

**HTML Snippet:**
```html
<div class="card-text-pair">
  <h6 class="labelBold20">Label</h6>
  <p class="labelRegular10 text-secondary">Sublabel</p>
</div>
```

**With Manual Spacing:**
```html
<h6 class="labelBold20" style="margin-bottom: 1px;">Label</h6>
<p class="labelRegular10 text-secondary">Sublabel</p>
```

---

### Text Pair 1000
**Use for:** Smallest components, inline metadata, minimal UI elements

| Element | Style | Value |
|---------|-------|-------|
| Label | Label Bold 10 | `labelBold10` |
| Spacing Between | | `1px` |
| Sublabel | Label Regular 10 | `labelRegular10` |

**HTML Snippet:**
```html
<div class="card-text-pair">
  <span class="labelBold10">Label</span>
  <span class="labelRegular10 text-secondary">Sublabel</span>
</div>
```

**With Manual Spacing:**
```html
<span class="labelBold10" style="margin-bottom: 1px;">Label</span>
<span class="labelRegular10 text-secondary">Sublabel</span>
```

---

## The `.card-text-pair` Utility Class

The `.card-text-pair` class provides automatic spacing and layout for text pairs:

```css
.card-text-pair {
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
}
```

This class automatically handles:
- Vertical stacking of label and sublabel
- Consistent 2px spacing (can be overridden with manual spacing classes)
- Full-width layout
- Proper alignment

---

## Usage Guidelines

### ✅ Best Practices

**Choose the right scale:**
```html
<!-- Hero section - use 9000 or 8000 -->
<div class="card-text-pair">
  <h1 class="display600">Transform Your Workflow</h1>
  <p class="labelRegular50 text-secondary">AI-powered tools for modern teams</p>
</div>

<!-- Card header - use 5000 or 4000 -->
<div class="card-text-pair">
  <h3 class="title50">Event Name</h3>
  <p class="labelRegular20 text-secondary">Saturday, March 15 • 7:00 PM</p>
</div>

<!-- Compact list item - use 3000 or 2000 -->
<div class="card-text-pair">
  <h5 class="labelBold30">Product Name</h5>
  <p class="labelRegular10 text-secondary">SKU: 12345</p>
</div>
```

**Always style sublabels as secondary:**
```html
<!-- ✅ CORRECT -->
<p class="labelRegular20 text-secondary">Sublabel</p>

<!-- ❌ INCORRECT -->
<p class="labelRegular20">Sublabel</p>
```

**Use semantic HTML:**
```html
<!-- ✅ CORRECT - proper heading hierarchy -->
<h1 class="display600">Page Title</h1>
<h2 class="display400">Section Title</h2>
<h3 class="title50">Card Title</h3>

<!-- ❌ INCORRECT - div soup -->
<div class="display600">Page Title</div>
<div class="display400">Section Title</div>
<div class="title50">Card Title</div>
```

### ❌ Common Mistakes

**Don't mix text pair scales randomly:**
```html
<!-- ❌ INCORRECT - mismatched scales -->
<div class="card-text-pair">
  <h3 class="display600">Label</h3>
  <p class="labelRegular10 text-secondary">Tiny sublabel</p>
</div>

<!-- ✅ CORRECT - use defined pairs -->
<div class="card-text-pair">
  <h3 class="display600">Label</h3>
  <p class="labelRegular50 text-secondary">Sublabel</p>
</div>
```

**Don't skip the gap/spacing:**
```html
<!-- ❌ INCORRECT - no spacing -->
<h3 class="title50">Label</h3>
<p class="labelRegular20 text-secondary">Sublabel</p>

<!-- ✅ CORRECT - proper spacing -->
<div class="card-text-pair">
  <h3 class="title50">Label</h3>
  <p class="labelRegular20 text-secondary">Sublabel</p>
</div>
```

---

## Real-World Examples

### Event Card (Text Pair 5000)
```html
<div class="card-closed">
  <div class="card-closed-header">
    <div class="card-text-pair">
      <h3 class="title50">Opening Night</h3>
      <p class="labelRegular20 text-secondary">Saturday, March 15 • 7:00 PM</p>
    </div>
  </div>
  <div class="card-closed-body">
    <p class="bodyRegular30">Join us for the season opener featuring special guests and exclusive merchandise.</p>
  </div>
</div>
```

### Hero Section (Text Pair 9000)
```html
<section class="hero flex-center py-landing">
  <div class="container-maximum text-center">
    <div class="card-text-pair mb-400">
      <h1 class="display600">TRANSFORM YOUR GAME</h1>
      <p class="labelRegular50 text-secondary">AI-powered analytics for elite performance</p>
    </div>
    <button class="btn-primary rounded-button">Get Started</button>
  </div>
</section>
```

### Product List Item (Text Pair 4000)
```html
<div class="flex-row gap-200 p-200 border-bottom">
  <img src="product.jpg" alt="Product" style="width: 64px; height: 64px; border-radius: 8px;">
  <div class="flex-column flex-1">
    <div class="card-text-pair">
      <h4 class="labelBold40">Premium Hoodie</h4>
      <p class="labelRegular20 text-secondary">Size M • Navy Blue</p>
    </div>
  </div>
  <span class="labelBold40">$89.99</span>
</div>
```

### Dashboard Card Header (Text Pair 7000)
```html
<div class="card p-300 rounded-100 border">
  <div class="card-text-pair mb-300">
    <h2 class="display400">Revenue Overview</h2>
    <p class="labelRegular30 text-secondary">Last 30 days</p>
  </div>
  <div class="chart-container">
    <!-- Chart goes here -->
  </div>
</div>
```

---

## Quick Reference Table

| Pair | Label Style | Sublabel Style | Gap | Use Case |
|------|-------------|----------------|-----|----------|
| 9000 | display600 | labelRegular50 | 8px | Hero headlines, landing pages |
| 8000 | display500 | labelRegular40 | 8px | Page headers, feature headlines |
| 7000 | display400 | labelRegular30 | 4px | Section headers, modal headers |
| 6000 | display300 | labelRegular20 | 2px | Component headers, large cards |
| 5000 | title50 | labelRegular20 | 2px | Card headers, list items |
| 4000 | labelBold40 | labelRegular20 | 2px | Small cards, compact components |
| 3000 | labelBold30 | labelRegular10 | 2px | Dense layouts, table headers |
| 2000 | labelBold20 | labelRegular10 | 1px | Small components, badges |
| 1000 | labelBold10 | labelRegular10 | 1px | Minimal UI, inline metadata |

---

## Copy-Paste Snippets

### All Text Pairs Ready to Use

```html
<!-- Text Pair 9000 - Hero -->
<div class="card-text-pair">
  <h1 class="display600">Hero Headline</h1>
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
  <p class="labelRegular30 text-secondary">Section description</p>
</div>

<!-- Text Pair 6000 - Component Header -->
<div class="card-text-pair">
  <h3 class="display300">Component Title</h3>
  <p class="labelRegular20 text-secondary">Component description</p>
</div>

<!-- Text Pair 5000 - Card Header -->
<div class="card-text-pair">
  <h3 class="title50">Card Title</h3>
  <p class="labelRegular20 text-secondary">Card metadata</p>
</div>

<!-- Text Pair 4000 - Small Card -->
<div class="card-text-pair">
  <h4 class="labelBold40">Item Title</h4>
  <p class="labelRegular20 text-secondary">Item metadata</p>
</div>

<!-- Text Pair 3000 - Compact Item -->
<div class="card-text-pair">
  <h5 class="labelBold30">Compact Title</h5>
  <p class="labelRegular10 text-secondary">Compact metadata</p>
</div>

<!-- Text Pair 2000 - Small Component -->
<div class="card-text-pair">
  <h6 class="labelBold20">Small Title</h6>
  <p class="labelRegular10 text-secondary">Small metadata</p>
</div>

<!-- Text Pair 1000 - Minimal -->
<div class="card-text-pair">
  <span class="labelBold10">Minimal Title</span>
  <span class="labelRegular10 text-secondary">Minimal metadata</span>
</div>
```

---

## Integration with Card Components

Text pairs work seamlessly with the card component system:

```html
<!-- Closed Card with Text Pair 5000 -->
<div class="card-closed">
  <div class="card-closed-header">
    <div class="card-text-pair">
      <h3 class="title50">Event Title</h3>
      <p class="labelRegular20 text-secondary">Event Date</p>
    </div>
  </div>
  <div class="card-closed-body">
    <p class="bodyRegular30">Event description...</p>
  </div>
</div>

<!-- Open Card with Text Pair 8000 -->
<div class="card-open">
  <div class="card-open-header">
    <div class="card-text-pair">
      <h2 class="display500">Feature Highlights</h2>
      <p class="labelRegular40 text-secondary">What makes us different</p>
    </div>
  </div>
  <div class="card-open-content">
    <div class="card-open-section">
      <p class="bodyRegular30">Feature description...</p>
    </div>
  </div>
</div>
```

---

## Responsive Considerations

Text pairs automatically adapt to theme typography changes, but you may want to adjust scales at different breakpoints:

```html
<!-- Desktop: Text Pair 9000, Mobile: Text Pair 7000 -->
<div class="card-text-pair">
  <h1 class="display600 hide-mobile display400 show-mobile">Responsive Headline</h1>
  <p class="labelRegular50 hide-mobile labelRegular30 show-mobile text-secondary">Responsive sublabel</p>
</div>
```

Or use custom media queries:

```css
.hero-text-pair h1 {
  /* Desktop: display600 */
}

@media (max-width: 768px) {
  .hero-text-pair h1 {
    /* Mobile: use display400 sizing */
    font-size: var(--display-size-400);
    line-height: 36px;
  }
  
  .hero-text-pair p {
    /* Mobile: use labelRegular30 */
    font-size: 14px;
  }
}
```

---

## Tips for Success

1. **Start with the right scale** - Hero sections need 9000/8000, cards need 5000/4000
2. **Always use `.text-secondary`** on sublabels for proper hierarchy
3. **Use semantic HTML** - h1 for page titles, h2 for sections, h3 for cards
4. **Leverage `.card-text-pair`** for automatic spacing and layout
5. **Test across themes** - Text pairs work with all team themes automatically
6. **Consider mobile** - Larger pairs (9000, 8000) may need responsive adjustments
7. **Maintain consistency** - Use the same pair scale for similar UI patterns
8. **Don't skip spacing** - The gap between label and sublabel is critical for readability