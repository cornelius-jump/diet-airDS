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
    <button class="btn-primary rounded-button">
      <span class="labelBold40">Call to Action</span>
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

---

## Master Prompt Template

```
Create a [COMPONENT_NAME] component using pure HTML and CSS.

CRITICAL REQUIREMENTS (NON-NEGOTIABLE):
1. ✅ ALWAYS use .card-text-pair for any label+sublabel combination
2. ✅ ALWAYS use text style classes (.title50, .bodyRegular30, etc.) - NEVER custom font-size
3. ✅ ALWAYS use spacing tokens (var(--spacing-300)) or utilities (.mb-200) - NEVER hardcoded pixels
4. ✅ ALWAYS use .text-secondary on sublabels
5. ✅ Component must work with data-theme="wolves" AND data-theme="athletics" (test both)

TEXT PAIRS - USE FOR ALL TITLE+SUBTITLE COMBINATIONS:
- Hero sections: Text Pair 9000 or 8000
- Page headers: Text Pair 8000 or 7000
- Section headers: Text Pair 7000 or 6000
- Card headers: Text Pair 5000 (MOST COMMON)
- Small cards: Text Pair 4000
- Compact lists: Text Pair 3000

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
<link rel="stylesheet" href="https://diet-air-ds.vercel.app/boilerplate.css">
VALIDATION CHECKLIST - Verify before delivering:
- [ ] All title+subtitle combinations use .card-text-pair
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
- `--brand-interactive` - Links, active states

**Interactive:**
- `--interactive-primary` - Primary buttons
- `--interactive-primary-text` - Text on primary buttons

**Interactive Surface Classes:**
- Fill:    .surface-fillNeutral, .surface-fillColor, .surface-fillInverted, .surface-fillBlack, .surface-fillWhite
- Border:  .surface-borderNeutral, .surface-borderInverted, .surface-borderBlack, .surface-borderWhite
- Subtle:  .surface-washNeutral, .surface-ghost, .surface-card

**Interactive Scale Classes:**
- .scale-700 (cards, large components: hover 1.01, press 0.99)
- .scale-500 (buttons, medium components: hover 1.025, press 0.975)
- .scale-300 (icon buttons, small components: hover 1.035, press 0.965)

**Status:**
- `--status-success`, `--status-warning`, `--status-error`, `--status-info`

### Border & Shadow Tokens

**Border Radius:**
```css
--border-radius-50: 4px    /* Small elements */
--border-radius-100: 8px   /* Cards, inputs */
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
→ Use `var(--button-border-radius)` instead of hardcoded border-radius

---

## 📝 Complete Component Examples

[PLACEHOLDER - Detailed examples section to be added collaboratively]

This section will contain full working examples of:
- Card patterns you commonly use
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