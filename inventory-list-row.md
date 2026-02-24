# Inventory List Row

## Overview

The Inventory List Row is a **usage pattern** built entirely from existing Diet AirDS list row components. No new CSS is required. It displays a ticket inventory section — a VFS (View From Seat) image, section/row/seat label, and a trailing price — in a scannable, tappable row.

This pattern is used on ticket purchase flows where users browse available sections and compare prices.

---

## Pattern vs. Component

This is a **usage pattern**, not a new component. It is composed entirely from:

| Diet AirDS piece | Role |
|---|---|
| `.list-row.surface-section` | Base row shell + interactive hover/press states |
| `.leading` + `.leading-gap-lg` / `.leading-gap-xl` | Leading slot with image gap |
| `.leading-image-small` / `.leading-image-large` | VFS image — size switches by breakpoint |
| `.list-row-content` + `.list-row-text-pair` | Section label + row/seat sublabel |
| `.trailing` + `.trailing-gap-sm` | Trailing slot |
| `.trailing-text-pair` | Price + "Avg. Price" sublabel |
| `.labelBold30` | Section name (16px Semi-Bold) |
| `.labelRegular10` + `.text-secondary` | Row/seat info and sublabels (12px) |
| `.labelBold20` | Price (14px Semi-Bold) |

---

## Props / Data

| Prop | Type | Description |
|---|---|---|
| `vfsSrc` | string (URL) | View From Seat image URL from VFS service |
| `vfsAlt` | string | Alt text — e.g. `"View from Section 313, Row F"` |
| `sectionLabel` | string | e.g. `"Section 313"` |
| `rowSeatsLabel` | string | e.g. `"Row F (Seats 9–14)"` |
| `price` | string | Formatted price string e.g. `"$21/ea"` |
| `priceSublabel` | string | Defaults to `"Avg. Price"` |
| `far` | boolean | `false` = wide venue view, `true` = courtside/pitch-side view |
| `mobile` | boolean | `false` = mobile (329px), `true` = desktop (592px) |

---

## Far / Close Boolean

The `far` prop controls **which VFS image is requested** from the image service — it does not change the HTML structure. Both states use identical markup.

| `far` value | Image perspective | Typical use |
|---|---|---|
| `false` | Wide arena or stadium view | Upper bowl, upper deck sections |
| `true` | Courtside or pitch-side view | Lower bowl, floor, premium sections |

The VFS service URL should encode this context. Example:

```
https://vfs.example.com/{team}/{section}?perspective=far
https://vfs.example.com/{team}/{section}?perspective=close
```

---

## Breakpoints

| Breakpoint | Row width | Image class | Image size | Leading gap class | Leading gap value |
|---|---|---|---|---|---|
| Mobile | 329px | `.leading-image-small` | 136×80px | `.leading-gap-lg` | 16px |
| Desktop | 592px | `.leading-image-large` | 244×124px | `.leading-gap-xl` | 24px |

---

## HTML — Mobile (Far, 329px)

```html
<div class="list-row surface-section">
  <div class="leading leading-gap-lg">
    <!-- VFS image — src populated at runtime from VFS service -->
    <img
      class="leading-image-small"
      src="https://vfs.example.com/wolves/section-313?perspective=far"
      alt="View from Section 313, Row F"
    >
  </div>
  <div class="list-row-content">
    <div class="list-row-text-pair">
      <span class="labelBold30">Section 313</span>
      <span class="labelRegular10 text-secondary">Row F (Seats 9–14)</span>
    </div>
  </div>
  <div class="trailing trailing-gap-sm">
    <div class="trailing-text-pair">
      <span class="labelBold20">$21/ea</span>
      <span class="labelRegular10 text-secondary">Avg. Price</span>
    </div>
  </div>
</div>
```

---

## HTML — Desktop (Far, 592px)

```html
<div class="list-row surface-section">
  <div class="leading leading-gap-xl">
    <!-- Larger VFS image on mobile -->
    <img
      class="leading-image-large"
      src="https://vfs.example.com/wolves/section-313?perspective=far"
      alt="View from Section 313, Row F"
    >
  </div>
  <div class="list-row-content">
    <div class="list-row-text-pair">
      <span class="labelBold30">Section 313</span>
      <span class="labelRegular10 text-secondary">Row F (Seats 9–14)</span>
    </div>
  </div>
  <div class="trailing trailing-gap-sm">
    <div class="trailing-text-pair">
      <span class="labelBold20">$21/ea</span>
      <span class="labelRegular10 text-secondary">Avg. Price</span>
    </div>
  </div>
</div>
```

---

## HTML — Close Variant

Only the `src`, `alt`, and image class change. Structure is identical.

```html
<!-- Mobile, close perspective -->
<div class="list-row surface-section">
  <div class="leading leading-gap-lg">
    <img
      class="leading-image-small"
      src="https://vfs.example.com/wolves/section-111?perspective=close"
      alt="View from Section 111, Row B"
    >
  </div>
  <div class="list-row-content">
    <div class="list-row-text-pair">
      <span class="labelBold30">Section 111</span>
      <span class="labelRegular10 text-secondary">Row B (Seats 3–11)</span>
    </div>
  </div>
  <div class="trailing trailing-gap-sm">
    <div class="trailing-text-pair">
      <span class="labelBold20">$496/ea</span>
      <span class="labelRegular10 text-secondary">Avg. Price</span>
    </div>
  </div>
</div>
```

---

## List Wrapper

Wrap multiple rows in a container. Use a border-bottom divider between rows.

```html
<div class="inventory-list">
  <div class="list-row surface-section"> ... </div>
  <div class="list-row surface-section"> ... </div>
  <div class="list-row surface-section"> ... </div>
</div>
```

`surface-section` provides hover/press states — transparent at rest (inherits the card background), `--white-100` hover overlay, `--black-300` press overlay. No `scale-*` needed.

Suggested page-level wrapper CSS (not part of the design system):

```css
.inventory-list {
  display: flex;
  flex-direction: column;
}

.inventory-list .list-row {
  padding: var(--spacing-200);
  border-bottom: 1px solid var(--border-default);
}

.inventory-list .list-row:last-child { border-bottom: none; }
```

---

## Spacing Reference

| Element | Token | Value |
|---|---|---|
| Leading gap — desktop | `.leading-gap-lg` | 16px |
| Leading gap — mobile | `.leading-gap-xl` | 24px |
| Trailing gap | `.trailing-gap-sm` | 4px |
| Text pair internal gap | hardcoded in `.list-row-text-pair` | 2px |
| Trailing text pair internal gap | hardcoded in `.trailing-text-pair` | 1px |
| Row vertical padding (list wrapper) | `--spacing-200` | 16px |

---

## Typography Reference

| Element | Class | Size | Weight |
|---|---|---|---|
| Section name | `.labelBold30` | 16px | Semi-Bold 600 |
| Row / seat info | `.labelRegular10 .text-secondary` | 12px | Regular 400 |
| Price | `.labelBold20` | 14px | Semi-Bold 600 |
| "Avg. Price" sublabel | `.labelRegular10 .text-secondary` | 12px | Regular 400 |

---

## ❌ Common Mistakes

**Wrong: Custom image size**

```html
<!-- ❌ -->
<img style="width: 100px; height: 60px;" src="...">
```

**Right: Use the existing image classes**

```html
<!-- ✅ -->
<img class="leading-image-small" src="...">
```

---

**Wrong: Hardcoded gap**

```html
<!-- ❌ -->
<div class="leading" style="padding-right: 16px;">
```

**Right: Use the gap modifier class**

```html
<!-- ✅ -->
<div class="leading leading-gap-lg">
```

---

**Wrong: Using .card-text-pair inside a list row**

```html
<!-- ❌ -->
<div class="card-text-pair">
  <span class="labelBold30">Section 313</span>
  <span class="labelRegular10 text-secondary">Row F</span>
</div>
```

**Right: Use .list-row-text-pair**

```html
<!-- ✅ -->
<div class="list-row-text-pair">
  <span class="labelBold30">Section 313</span>
  <span class="labelRegular10 text-secondary">Row F</span>
</div>
```

---

**Wrong: Missing .text-secondary on sublabels**

```html
<!-- ❌ Sublabel renders at full primary contrast -->
<span class="labelRegular10">Row F (Seats 9–14)</span>
```

**Right: Always pair sublabels with .text-secondary**

```html
<!-- ✅ -->
<span class="labelRegular10 text-secondary">Row F (Seats 9–14)</span>
```

---

## Validation Checklist

- [ ] VFS image uses `.leading-image-small` (desktop) or `.leading-image-large` (mobile)
- [ ] Leading slot uses `.leading-gap-lg` (desktop) or `.leading-gap-xl` (mobile) — not inline padding
- [ ] Center content uses `.list-row-text-pair` — not `.card-text-pair`
- [ ] Trailing uses `.trailing-gap-sm` with `.trailing-text-pair` inside
- [ ] All sublabels have `.text-secondary`
- [ ] No hardcoded colors, sizes, or spacing values
- [ ] VFS `src` is populated at runtime from VFS service — not a static asset
- [ ] `alt` text describes the actual seat view

---

## Figma Reference

**Frame:** `Inventory - List Row`
**Node ID:** `9777:47202`
**File:** Air DS

**Variants in frame:**

| Variant prop | Values |
|---|---|
| Team ID | jump, wolves, courage, ncfc, quakes, bucknell |
| Option | A, B, C (different example data — same structure) |
| Mobile/Desktop | False = mobile (329px), True = desktop (592px) |
| Far/Close | False = far view, True = close/courtside view |
