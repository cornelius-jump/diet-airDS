# Diet AirDS — Agent Guide

> This guide is written for AI agents. Read all sections before generating any code.

---

## BUILD MODE — Choose before reading further

| Mode | When to use | Output |
|---|---|---|
| **React** | Building pages or components inside the `src/` React app | TypeScript/JSX using typed component props |
| **HTML prototype** | Standalone `.html` files for demos or external sharing | Complete HTML file with CSS `<link>` tags |

**If building in React:**
- The **REACT COMPONENTS** section and **REACT MASTER PROMPT TEMPLATE** are your primary references
- Component sections below (BUTTONS, LIST ROWS, INPUTS, etc.) show the CSS internals — useful context, but **React typed props replace manual class composition**
- Skip the CSS LOAD ORDER section — CSS is already imported in `src/main.tsx`
- Use `useTheme()` from `ThemeContext` to read/set theme and mode — never touch `data-theme` manually
- No `className` or `style` props on design system components — variants only

**If building HTML prototypes:**
- Follow every section in order
- Use the MASTER PROMPT TEMPLATE at the bottom

---

## AGENT RULES — NON-NEGOTIABLE

**Core principle: Diet AirDS provides CSS for everything. Compose, don't create.**

Before writing any custom CSS ask: "Does Diet AirDS already have a class or token for this?" The answer is almost always yes.

**⚠️ Pre-check — does this element need hover/press/active behavior?**
Any tappable or clickable element that isn't a button, list row, or input needs `.surface-*` + `.scale-*`. Reach for that first — before the list below. If you're about to write `:hover { background: ... }` or `:active { transform: ... }` — stop. Use a surface class instead.

**Decision gate — check in order before writing CSS:**
1. Button → `.btn` + type + size. Stop.
2. List row → `.list-row` 3-slot structure. Stop.
3. Selectable list row → `.selector.surface-washNeutral.scale-700` wrapping `.list-row`. Stop.
4. Small card in a grid, carousel, or open card → `.tile` + interactivity rule. Stop.
5. Text input → `.input-field` structure. Stop.
6. Select dropdown → `.input-field.input-select` structure. Stop.
7. Tag/chip → `.tag` + modifiers. Stop.
8. Switch → `.switch > input + label`. Stop.
9. Card → `.card-closed` or surface token. Stop.
10. Typography → text style class. Stop.
11. Spacing → spacing token or utility. Stop.
12. Interactive surface → `.surface-*` + `.scale-*`. Stop.
13. None of the above → minimal custom CSS using tokens only.

**Never:**
- Write custom CSS for any component in the list above
- Hardcode any color (`#`, `rgb()`, `hsl()`)
- Hardcode spacing in `px`, `em`, or `rem`
- Set `font-size`, `font-weight`, or `line-height` manually
- Use `--color-interactive` or `--color-inverted` directly
- Write `:hover` or `:active` CSS for interactive components — use `.surface-*` + `.scale-*` instead
- Wrap a label+sublabel pair without `.card-text-pair` (or `.list-row-text-pair` in list rows)
- **Add a border to a card.** Cards never have borders. `--bg-surface` against `--bg-base` is the boundary — never add `border: 1px solid` or any border to a card element.
- **Use a bare `<select>`, `<input>`, or `<button>` without its design system wrapper** — not in demos, test pages, or utility controls. There are no exemptions. Demo pages are real pages. Utility controls are real controls.

**Output format — HTML prototype:** Complete standalone HTML file with all CSS links, correct `data-theme`/`data-mode` on `<html>`, and any required JS helpers inline.

**Output format — React:** TypeScript/JSX file(s) with named imports from `diet-airds`. No `className` or `style` on design system components. Wrap the app root in `<ThemeProvider>`. See REACT MASTER PROMPT TEMPLATE.

**Responsive layout rule — non-negotiable:** Every page must work at all three breakpoints before it is considered complete. Define layout behavior at mobile, tablet, and desktop from the start — not as an afterthought.

- Breakpoints: **mobile** `< 500px` · **tablet** `500px–1099px` · **desktop** `≥ 1100px`
- Use `--spacing-content` (32→40→48px) for gaps between major page sections
- Use `--margin-small` or `--margin-large` for horizontal page padding — never a hardcoded `padding` value
- Use `--spacing-card` for gaps between cards and list items
- Never hardcode a `max-width` that prevents the layout from scaling beyond a phone viewport — use a system container class (`container-compact`, `container-narrow`, etc.) instead
- On tablet+, multi-column layouts (2-col checkout, side-by-side action bars) are almost always correct
- ❌ `max-width: 430px` — hardcoded phone cap, breaks tablet/desktop
- ❌ `padding: var(--spacing-200)` for page-level padding — fixed, doesn't scale
- ✅ `max-width: 640px; margin: 0 auto` or `.container-compact` — correct container approach
- ✅ `padding: var(--spacing-card)` with breakpoint overrides, or `--margin-small` for page margins

**CMS data rule — non-negotiable:** Whenever a prototype includes team logos, team names, opponent logos/names, VFS seat images, or any other brand-specific content — always load it dynamically. Never hardcode team names, logo URLs, or opponent data as static strings.
- ❌ `<img src="wolves-logo.svg">` — hardcoded, breaks on theme change
- ❌ `<span>Timberwolves</span>` — hardcoded team name
- ✅ `<img data-team-logo src="" alt="">` + team JSON loader
- ✅ `<span data-team-short-name></span>` + team JSON loader

See **CMS DATA IN PROTOTYPES** for the complete patterns.

---

## CSS LOAD ORDER

> **React mode:** CSS is imported in `src/main.tsx` in the correct order — no `<link>` tags needed. This section applies to **HTML prototypes only**.

Load all files from `https://diet-air-ds.vercel.app/` in this exact order. Use absolute URLs. Never copy CSS into `<style>` tags. Never skip files.

```html
<!DOCTYPE html>
<html lang="en" data-theme="wolves" data-mode="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Component Name</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600;1,700;1,900&family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet">
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
  <!-- content -->
</body>
</html>
```

**File summary:**
- `design-tokens-master.css` — colors, brand tokens, all 10 team themes
- `spacing-tokens.css` — `--spacing-25` through `--spacing-1000` (8px scale)
- `container-tokens.css` — max-width container classes
- `border-effects-tokens.css` — border radius, shadow tokens
- `fonts.css` — team display font `@font-face` declarations
- `text-styles-system.css` — `.display900`, `.title50`, `.bodyRegular30`, etc.
- `icons.css` — `.icon` size classes
- `card-components.css` — `.card-closed`, `.card-text-pair`, etc.
- `interactive-tokens.css` — `.surface-*`, `.scale-*` interaction classes
- `button-components.css` — `.btn`, `.btn-primary`, `.btn-circle`, etc.
- `list-row-components.css` — `.list-row`, `.leading`, `.trailing`, `.tag`, etc.
- `input-components.css` — `.input-field`, `.input-control`, `.input-select`, etc.
- `tag-chip-components.css` — tag and chip component styles
- `boilerplate.css` — reset, body styles, layout utilities

---

## TEXT PAIRS

Always wrap label+sublabel in `.card-text-pair`. Inside list rows, use `.list-row-text-pair` instead.

| Scale | Context | Label class | Sublabel class |
|-------|---------|-------------|----------------|
| 9000 | Hero / landing | `display600` | `labelRegular50` |
| 8000 | Page header | `display500` | `labelRegular40` |
| 7000 | Section header | `display400` | `labelRegular30` |
| 6000 | Component header | `display300` | `labelRegular20` |
| 5000 | Card header (most common) | `title50` | `labelRegular20` |
| 4000 | Small card | `labelBold40` | `labelRegular20` |
| 3000 | Dense/compact | `labelBold30` | `labelRegular10` |
| list-row | List rows only | `labelBold30` | `labelRegular10` |

Always add `.text-secondary` to sublabels.

```html
<!-- Card header (5000) -->
<div class="card-text-pair">
  <h3 class="title50">Card Title</h3>
  <p class="labelRegular20 text-secondary">Metadata or date</p>
</div>

<!-- Hero (9000) -->
<div class="card-text-pair">
  <h1 class="display600">HERO HEADLINE</h1>
  <p class="labelRegular50 text-secondary">Supporting message</p>
</div>

<!-- List row — use list-row-text-pair, not card-text-pair -->
<div class="list-row-text-pair">
  <span class="labelBold30">Label</span>
  <span class="labelRegular10 text-secondary">Sublabel</span>
</div>
```

---

## BUTTONS

> **React:** `<Button variant="primary" size="small">Label</Button>` · `<Button variant="transactional" icon="confirmation_number" fill>Buy Tickets</Button>` · `<CircleButton variant="neutral" size="small" icon="close" aria-label="Close" />` — full API in **REACT COMPONENTS**.

Compose as: `.btn` + type + size. Never hand-roll buttons.

**Types:**
- `.btn-transactional` — revenue actions (Buy, Purchase, Add to Cart)
- `.btn-primary` — main page action, limit 1 per view
- `.btn-neutral` — high-contrast non-branded CTA
- `.btn-secondary` — supporting action (outlined)
- `.btn-tertiary` — low-emphasis inline (text-only)
- `.btn-destructive` — irreversible actions
- `.btn-white` — CTA on dark/brand surfaces
- `.btn-white-tertiary` — low-emphasis on dark surfaces

**Sizes:** `.btn-700` (56px) · `.btn-300` (40px) · `.btn-100` (32px)

**Modifiers:** `.btn-fill` (full width) · `.btn-icon-leading` · `.btn-icon-trailing`

**Disabled:** add `disabled` attribute (not a class)

```html
<!-- Standard -->
<button class="btn btn-primary btn-300">Label</button>

<!-- With leading icon -->
<button class="btn btn-transactional btn-700 btn-icon-leading btn-fill">
  <span class="btn-icon material-symbols-rounded">confirmation_number</span>
  <span>Buy Tickets</span>
</button>

<!-- With trailing icon -->
<button class="btn btn-primary btn-300 btn-icon-trailing">
  <span>Next</span>
  <span class="btn-icon material-symbols-rounded">arrow_forward</span>
</button>

<!-- Disabled -->
<button class="btn btn-primary btn-300" disabled>Sold Out</button>

<!-- Button group horizontal -->
<div class="btn-group">
  <button class="btn btn-primary btn-300">Save</button>
  <button class="btn btn-secondary btn-300">Cancel</button>
</div>

<!-- Button group stacked -->
<div class="btn-group-stack">
  <button class="btn btn-transactional btn-700">Buy Tickets</button>
  <button class="btn btn-secondary btn-700">Learn More</button>
</div>
```

**Circle buttons** (icon-only): `.btn-circle` + size + type

Sizes: `.btn-circle-700` (56×56, 32px icon) · `.btn-circle-300` (40×40, 24px icon)

Filled types: `.btn-circle-team` · `.btn-circle-neutral` · `.btn-circle-inverted` · `.btn-circle-black` · `.btn-circle-white` · `.btn-circle-destructive`

Outlined types: `-secondary` suffix (e.g. `.btn-circle-neutral-secondary`)

Ghost types: `-tertiary` suffix (e.g. `.btn-circle-neutral-tertiary`)

```html
<button class="btn-circle btn-circle-300 btn-circle-neutral">
  <span class="btn-icon material-symbols-rounded">close</span>
</button>
```

---

## LIST ROWS

> **React:** `<ListRow leading={<Icon name="..." size={200} />} leadingGap="md" trailing={<Icon name="chevron_right" size={200} />} trailingGap="xs" onClick={fn}>` with `<TextPair label="..." sublabel="..." />` as children. Subcomponents: `TextPair`, `TrailingText`, `LeadingImage`, `LeadingLogo`, `CircleContainer` — full API in **REACT COMPONENTS**.

Structure: `.list-row` > optional `.leading` + `.list-row-content` + optional `.trailing`

All three slots are optional. Never use `.card-text-pair` inside list rows — use `.list-row-text-pair`.

**Leading gap classes** (gap between leading element and content):
- `.leading-gap-sm` — 8px — logos
- `.leading-gap-md` — 12px — icons, circles, select boxes
- `.leading-gap-lg` — 16px — square or small images
- `.leading-gap-xl` — 24px — large images

**Trailing gap classes** (gap between content and trailing element):
- `.trailing-gap-xs` — 2px — chevron/arrow icon
- `.trailing-gap-sm` — 4px — text pair
- `.trailing-gap-md` — 8px — text link
- `.trailing-gap-lg` — 12px — button

**Row states:** default (tappable) · `.not-tappable` · `.disabled` (30% opacity)

**Leading content types:**
```html
<!-- Icon -->
<div class="leading leading-gap-md">
  <span class="icon icon-200 material-symbols-rounded">notifications</span>
</div>

<!-- Circle icon -->
<div class="leading leading-gap-md">
  <div class="circle-container">
    <span class="icon icon-200 material-symbols-rounded">star</span>
  </div>
</div>

<!-- Circle letter -->
<div class="leading leading-gap-md">
  <div class="circle-container">
    <span class="display100">A</span>
  </div>
</div>

<!-- Status dot -->
<div class="leading leading-gap-md">
  <div class="status-dot"></div>        <!-- unread (blue) -->
  <div class="status-dot read"></div>   <!-- read (grey) -->
</div>

<!-- Square image (80x80) -->
<div class="leading leading-gap-lg">
  <img class="leading-image-square" src="..." alt="">
</div>

<!-- Small image (136x80) -->
<div class="leading leading-gap-lg">
  <img class="leading-image-small" src="..." alt="">
</div>

<!-- Large image (244x124) -->
<div class="leading leading-gap-xl">
  <img class="leading-image-large" src="..." alt="">
</div>

<!-- Team logo (48x48) — no src needed, renders active team -->
<div class="leading leading-gap-sm">
  <div class="leading-logo" role="img" aria-label="Team logo"></div>
</div>

<!-- Payment icon (33x24) -->
<div class="leading leading-gap-md">
  <img class="leading-payment" src="..." alt="">
</div>

<!-- Select box (multi-select / edit mode) -->
<div class="leading leading-gap-md">
  <div class="select-box"></div>
</div>
```

**Main content** — `.list-row-content` stacks up to 3 sections with 8px gap:

1. `.list-row-text-pair` — always first
2. `.tag-group` > `.tag` elements — optional
3. `.info-block` > `.info-item` elements — optional, last item only shows label

```html
<div class="list-row-content">
  <div class="list-row-text-pair">
    <span class="labelBold30">Event Name</span>
    <span class="labelRegular10 text-secondary">Sat, Mar 15 · 7:00 PM</span>
  </div>
  <div class="tag-group">
    <div class="tag tag-team-color"><span class="labelBold20">VIP</span></div>
    <div class="tag"><span class="labelBold20">Floor</span></div>
  </div>
  <div class="info-block">
    <div class="info-item">
      <span class="icon icon-200 material-symbols-rounded">event_seat</span>
    </div>
    <div class="info-item has-label">
      <span class="icon icon-200 material-symbols-rounded">confirmation_number</span>
      <span class="labelRegular10">2 tickets</span>
    </div>
  </div>
</div>
```

**Trailing content types:**
```html
<!-- Chevron -->
<div class="trailing trailing-gap-xs">
  <span class="icon icon-200 material-symbols-rounded">chevron_right</span>
</div>

<!-- Text link -->
<div class="trailing trailing-gap-md">
  <span class="trailing-text-link labelBold20">View All</span>
</div>

<!-- Right-aligned text pair -->
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
      <span class="icon icon-200 material-symbols-rounded">remove</span>
    </button>
    <span class="stepper-count labelBold50">0</span>
    <button class="stepper-btn">
      <span class="icon icon-200 material-symbols-rounded">add</span>
    </button>
  </div>
</div>

<!-- Button -->
<div class="trailing trailing-gap-lg">
  <button class="btn btn-primary btn-100">Action</button>
</div>
```

**Tags:**
```html
<div class="tag"><span class="labelBold20">Default</span></div>
<div class="tag tag-team-color"><span class="labelBold20">Brand</span></div>
<div class="tag tag-icon-leading">
  <span class="icon icon-200 material-symbols-rounded">flag</span>
  <span class="labelBold20">Label</span>
</div>
<div class="tag tag-icon-trailing">
  <span class="labelBold20">Label</span>
  <span class="icon icon-200 material-symbols-rounded">arrow_forward</span>
</div>
```

**Row container pattern** — list rows don't include padding or dividers, wrap them:
```html
<div style="padding: var(--spacing-150) var(--spacing-200); border-bottom: 1px solid var(--border-default);">
  <div class="list-row">...</div>
</div>
```

---

## INPUTS

> **React:** `<Input label="Email" type="email" placeholder="..." clearable icon="mail" onChange={fn} />` · `<Select options={[{value, label}]} placeholder="Select..." onChange={fn} />` — state props (`error`, `disabled`) handled by the component. Full API in **REACT COMPONENTS**.

Structure: `.input-field` > `.input-label-row` (optional) + `.input-and-message` > `.input-control`

State classes go on `.input-field`: `.is-error` · `.is-disabled` · `.has-value`

Never hand-roll inputs or selects.

**Text input variants:**
```html
<!-- Basic -->
<div class="input-field">
  <div class="input-and-message">
    <div class="input-control">
      <input type="text" placeholder="Placeholder">
    </div>
  </div>
</div>

<!-- With label -->
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

<!-- With leading icon -->
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

<!-- With clear button -->
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

<!-- With label link (e.g. Forgot password?) -->
<div class="input-field">
  <div class="input-label-row">
    <label class="input-label" for="input-4">Password</label>
    <a class="input-link" href="#">Forgot password?</a>
  </div>
  <div class="input-and-message">
    <div class="input-control">
      <input type="password" id="input-4" placeholder="Enter password">
    </div>
  </div>
</div>

<!-- With helper message -->
<div class="input-field">
  <div class="input-label-row">
    <label class="input-label" for="input-5">Username</label>
  </div>
  <div class="input-and-message">
    <div class="input-control">
      <input type="text" id="input-5" placeholder="@username">
    </div>
    <p class="input-message">Must be unique. Letters and numbers only.</p>
  </div>
</div>

<!-- Error state -->
<div class="input-field is-error has-value">
  <div class="input-label-row">
    <label class="input-label" for="input-6">Email</label>
  </div>
  <div class="input-and-message">
    <div class="input-control">
      <span class="input-icon material-symbols-rounded">mail</span>
      <input type="email" id="input-6" value="not-an-email">
    </div>
    <p class="input-message">Please enter a valid email address.</p>
  </div>
</div>

<!-- Disabled -->
<div class="input-field is-disabled">
  <div class="input-label-row">
    <label class="input-label" for="input-7">Label</label>
  </div>
  <div class="input-and-message">
    <div class="input-control">
      <input type="text" id="input-7" placeholder="Placeholder" disabled>
    </div>
  </div>
</div>
```

**Select dropdown** — add `.input-select` to `.input-field`. Use `arrow_drop_down` icon (never `expand_more`).

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
      </select>
    </div>
  </div>
</div>
```

**Required JS helpers** — include when using clear buttons or selects:
```javascript
function syncHasValue(fieldId, input) {
  document.getElementById(fieldId).classList.toggle('has-value', input.value.trim() !== '');
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
function syncSelect(fieldId, displayId, selectEl) {
  const display = document.getElementById(displayId);
  const chosen = selectEl.options[selectEl.selectedIndex];
  display.textContent = chosen.text;
  display.classList.toggle('is-placeholder', !chosen.value);
}
function openSelect(fieldId) { document.getElementById(fieldId).classList.add('is-open'); }
function closeSelect(fieldId) { document.getElementById(fieldId).classList.remove('is-open'); }
```

---

## INTERACTIVE SURFACES

> **React:** `<Selector>`, `<Chip>`, `<Tile tappable>`, and `<CardSection interactive>` handle surface + scale internally. For any custom interactive container in React that has no component equivalent, compose `className="surface-washNeutral scale-700"` on the element.

**When to use:** Any clickable or tappable element that is NOT a `.btn`, `.list-row`, or `.input-field` needs a surface + scale pair. Examples: selectable cards, clickable tiles, filter chips, menu items, any container that reacts to touch/hover. If you're about to write `:hover { background: ... }` or `:active { transform: ... }` on a non-button element — stop. That's what surface classes are for.

Use `.surface-*` + `.scale-*` composed on the same element. Never write custom `:hover`/`:active` CSS.

**Surface classes:**
- Fill: `.surface-fillNeutral` · `.surface-fillColor` · `.surface-fillInverted` · `.surface-fillBlack` · `.surface-fillWhite`
- Border: `.surface-borderNeutral` · `.surface-borderInverted` · `.surface-borderBlack` · `.surface-borderWhite`
- Subtle: `.surface-washNeutral` · `.surface-ghost` · `.surface-card`

**Scale classes:**
- `.scale-700` — cards, large components (hover 1.01, press 0.99)
- `.scale-500` — buttons, medium components (hover 1.025, press 0.975)
- `.scale-300` — icon buttons, small components (hover 1.035, press 0.965)

**Color inheritance fix — required for all filled surfaces:**

Surface fill classes set their own `color`. Text style classes override it with `--text-primary`, causing invisible text. Fix with:

```css
.surface-fillNeutral *,
.surface-fillColor *,
.surface-fillInverted *,
.surface-fillBlack *,
.surface-fillWhite * {
  color: inherit;
}
```

Note: `.btn *` and `.tag.tag-team-color *` already include this — no fix needed for those.

---

## TILE

> **React:** `<Tile visual={<img />} info={<TextPair label="..." sublabel="..." />} tag={<Tag>Featured</Tag>} tappable onClick={fn} />` — full API in **REACT COMPONENTS**.

The recommended pattern for any small card displayed alongside others. Use for event listings, product grids, schedules, content feeds. Use `card-closed` / `card-open` for full-width or single-column cards.

**Placement contexts:**
- **Grid**: `card-grid` with column modifier classes
- **Carousel**: horizontal scroll row (`overflow-x: auto; display: flex`) — all tiles in a carousel must share the same interaction pattern (all tap targets or all with buttons, never mixed)
- **Inside `card-open`**: tiles as subsections within a larger open-layout card

**⚠️ Interactivity rule — pick one per set, never mixed:**
- No button → tile is the tap target: `surface-card scale-700` on `.tile`
- Has button → button is the CTA: no surface/scale on `.tile`

**Structure:**
```html
<!-- No button — tile is the tap target -->
<div class="tile surface-card scale-700">
  <div style="height: 120px;">                <!-- visual header — any fixed-height block -->
    <div class="matchup">
      <div class="matchup-panel" style="--badge-bg: ${away.primaryColor ?? 'var(--neutral-200)'};">
        <img src="${away.logoUrl}" alt="${away.name}">
      </div>
      <div class="matchup-panel">
        <img src="home-logo.svg" alt="Home Team">
      </div>
    </div>
  </div>
  <div class="tile-tag">Home</div>            <!-- optional — frosted label top-left -->
  <div class="tile-info">
    <div class="card-text-pair">
      <span class="labelBold30">vs. Away Team</span>
      <span class="labelRegular10 text-secondary">Sat, Mar 15 · 7:00 PM</span>
    </div>
    <span class="labelBold20 text-success">From $45</span>   <!-- optional -->
  </div>
</div>

<!-- Has button — button is the CTA, no surface/scale on wrapper -->
<div class="tile">
  <div style="height: 120px;">...</div>
  <div class="tile-info">
    <div class="card-text-pair">...</div>
    <span class="labelBold20 text-success">From $45</span>
    <button class="btn btn-primary btn-100">Buy Tickets</button>
  </div>
</div>

<!-- Grid -->
<div class="card-grid grid-cols-3-desktop grid-cols-2-tablet grid-cols-1-mobile">
  <div class="tile surface-card scale-700">...</div>
  <div class="tile surface-card scale-700">...</div>
  <div class="tile surface-card scale-700">...</div>
</div>

<!-- Carousel (mobile-first) -->
<div style="display: flex; gap: var(--spacing-card); overflow-x: auto;">
  <div class="tile surface-card scale-700" style="min-width: 200px; flex-shrink: 0;">...</div>
  <div class="tile surface-card scale-700" style="min-width: 200px; flex-shrink: 0;">...</div>
</div>
```

**Tile spacing internals** (do not override):
- `.tile-info` — 16px padding, 8px column gap (text pair → price)
- `.tile-info .btn` — extra 8px top margin (price → button = 16px total)

---

## COLOR TOKENS

**Backgrounds:** `--bg-base` · `--bg-surface` · `--bg-sheet` · `--bg-nav`

**Text:** `--text-primary` · `--text-secondary` · `--text-disabled` · `--text-placeholder`

**Brand (mode-aware — always use these):**
- `--brand-interactive` — links, active states, focus rings, icon accents (swaps correctly in dark mode)
- `--brand-inverted` — complementary brand color (swaps correctly in dark mode)
- `--brand-core` — primary brand color (static)
- `--brand-light` — secondary brand color (static)

Never use `--color-interactive` or `--color-inverted` directly — they are static and break dark mode.

**Status:** `--status-success` · `--status-warning` · `--status-error` · `--status-info`

**Note — known Figma vs CSS deltas (do not "fix"):**
- `--border-default` (10%/15% opacity) is intentionally lighter than the Figma variable (20%/25%). Figma is calibrated for iOS; web value is correct.
- `--text-secondary` dark mode is 75% opacity in CSS vs 70% in Figma. Delta is imperceptible — do not change.

**Utility classes:** `.text-secondary` · `.text-brand-interactive` · `.text-brand-core`

---

## SPACING TOKENS

8px-based scale. Use `var(--spacing-N)` in CSS or utility classes (`.mb-N`, `.mt-N`, `.p-N`, `.py-N`, `.px-N`) in HTML.

| Token | Value | Token | Value |
|-------|-------|-------|-------|
| `--spacing-25` | 2px | `--spacing-400` | 32px |
| `--spacing-50` | 4px | `--spacing-500` | 40px |
| `--spacing-100` | 8px | `--spacing-600` | 48px |
| `--spacing-150` | 12px | `--spacing-700` | 56px |
| `--spacing-200` | 16px | `--spacing-800` | 64px |
| `--spacing-250` | 20px | `--spacing-900` | 72px |
| `--spacing-300` | 24px | `--spacing-1000` | 80px |

**Responsive semantic tokens** — prefer these for layout:

| Token | Mobile | Tablet | Desktop | Use For |
|-------|--------|--------|---------|---------|
| `--spacing-row` | 8px | 12px | 16px | Gap between rows/stacked items |
| `--spacing-card` | 16px | 20px | 24px | Gap between cards |
| `--spacing-content` | 32px | 40px | 48px | Gap between major sections |
| `--margin-small` | 16px | 32px | 48px | Page margin (dense UI) |
| `--margin-large` | 16px | 40px | 64px | Page margin (standard) |
| `--margin-landing` | 24px | 48px | 80px | Page margin (open/landing layouts) |

Responsive utility classes: `.py-large` (16px→64px) · `.py-landing` (24px→80px) · `.gap-card` (16px→24px)

---

## BORDER TOKENS

```css
--border-radius-50: 4px     /* tags, small elements */
--border-radius-100: 8px    /* cards, inputs, images */
--border-radius-200: 16px   /* large cards */
--button-border-radius       /* team-specific: 8px, 12px, or 100px */

--border-weight-50: 1px     /* subtle */
--border-weight-100: 1px    /* standard */
--border-weight-200: 2px    /* heavy/active */
```

Utility classes: `.rounded-100` (8px) · `.rounded-button` (team-specific)

Do not use shadows — `--shadow-sheet-a/b` and `--shadow-modal-a/b` are reserved for sheets and modals only.

**Cards never have borders.** `--bg-surface` against `--bg-base` defines the card boundary. Never add `border` to a card.

---

## CONTAINER TOKENS

| Class | Max Width | Use |
|-------|-----------|-----|
| `.container-maximum` | 1600px | Landing pages |
| `.container-extra-wide` | 1440px | Dashboards |
| `.container-wide` | 1280px | Pages with sidebars |
| `.container` | 1200px | Default |
| `.container-medium` | 1024px | Articles, forms |
| `.container-narrow` | 768px | Reading content |
| `.container-compact` | 640px | Single column |

---

## TEAM THEMES

Set `data-theme` and `data-mode` on `<html>`. Always test both light and dark.

| data-theme | Team | Button radius |
|------------|------|---------------|
| `wolves` | Minnesota Timberwolves | 8px |
| `lynx` | Minnesota Lynx | 12px |
| `courage` | North Carolina Courage | pill |
| `summit` | Denver Summit FC | 8px |
| `bucknell` | Bucknell Bison | pill |
| `sounders` | Seattle Sounders FC | pill |
| `reign` | Seattle Reign FC | pill |
| `ncfc` | North Carolina Football Club | pill |
| `jump` | Jump Default | pill |
| `athletics` | Las Vegas Athletics | pill |

---

## OPPOSING TEAMS

`opposingTeam` documents in Sanity hold logos and metadata for all league opponents — 118 teams across NBA, WNBA, MLS, NWSL, and USL Championship.

**Document fields:**

| Field | Type | Notes |
|-------|------|-------|
| `name` | string | Full official name (e.g. "Los Angeles Lakers") |
| `teamId.current` | string | Slug (e.g. "los-angeles-lakers") |
| `shortName` | string | Nickname/abbreviation (e.g. "Lakers") |
| `city` | string | Home city |
| `league` | string | See values below |
| `logo` | image ref | Sanity image asset — resolve with `logo.asset->url` |
| `primaryColor` | string \| null | Hex. Often null — never use it for required layout. |

**League values:**

| Value | League |
|-------|--------|
| `NBA` | NBA |
| `WNBA` | WNBA |
| `MLS` | MLS |
| `NWSL` | NWSL |
| `USL` | USL Championship |
| `International` | International clubs (e.g. Liga MX Femenil) |

**GROQ — all teams, logo URL resolved:**

```groq
*[_type == "opposingTeam"] | order(league asc, name asc) {
  _id,
  name,
  shortName,
  city,
  league,
  "logoUrl": logo.asset->url,
  primaryColor
}
```

**GROQ — single league:**

```groq
*[_type == "opposingTeam" && league == "NBA"] | order(name asc) {
  _id,
  name,
  shortName,
  "logoUrl": logo.asset->url
}
```

**Logo notes:**
- `logo.asset->url` returns a Sanity CDN URL (`https://cdn.sanity.io/images/...`)
- All logos are SVG — always render with `object-fit: contain` in fixed-size containers
- `primaryColor` may be null on any record — never make it a required dependency

---

## CMS DATA IN PROTOTYPES

> **React mode:** Use `useTheme()` to get the active `theme` (team ID). Load team data with `useEffect` + `fetch('/teams/${theme}.json')`. Opponent/event data from Sanity uses the same GROQ queries but inside a React hook or data-fetching layer — not inline script tags. The vanilla JS patterns below apply to **HTML prototypes only**.

Two data sources are available for bringing real content into prototypes: the per-team JSON files served from the same CDN as the CSS, and the Sanity CMS for opponent and event data.

### Source 1 — Team JSON (`/teams/{teamId}.json`)

The active team's configuration is available at `/teams/{teamId}.json`. Always load it dynamically so the prototype responds correctly when `data-theme` changes.

**Full field reference:**

| Field | Type | Example | Use in prototype |
|---|---|---|---|
| `teamId` | string | `"wolves"` | Matches `data-theme` on `<html>` |
| `name` | string | `"Minnesota Timberwolves"` | Full team name in headings |
| `shortName` | string | `"Timberwolves"` | Short name in list rows, labels |
| `city` | string | `"Minneapolis"` | City-level references |
| `sport` | string | `"NBA"` | League badge, schedule context |
| `logos.primary` | URL (SVG) | `https://cdn.sanity.io/images/...` | Team logo in nav, hero, event rows |
| `logos.logoIcon` | URL or `""` | — | Icon-only logo variant (may be empty) |
| `brandColors.core` | hex | `"#266092"` | Informational only — CSS tokens handle color |
| `brandColors.inverted` | hex | `"#79BC43"` | Informational only |
| `buttonRadius` | string | `"8px"` | Informational only — CSS tokens handle radius |
| `displayFont` | string | `"Futura Wolves Autocaps"` | Informational only — `fonts.css` loads it |
| `vfsFar.images` | string[] | `["https://...jpg", ...]` | VFS seat-view images (upper bowl) — up to 3 |
| `vfsFar.prices` | string[] | `["$23.97", ...]` | Price per VFS row — parallel index with images |
| `vfsFar.priceLabel` | string | `"Avg. Price"` | Label for price column |
| `vfsFar.fallback` | string or `""` | — | Fallback image if `images` is empty |
| `vfsClose` | same shape | — | Courtside/pitch-side perspective |
| `urls` | object | `{}` | Team-specific deep links (may be empty) |

**⚠️ Never use `brandColors` to set CSS values.** The CSS token system (`data-theme` on `<html>`) handles all color automatically. `brandColors` in the JSON is useful only when you need a color value outside the token system (e.g., a `matchup-panel` background that isn't a token).

**Standard load pattern** — call on page load and on every `data-theme` change:

```javascript
async function loadTeamData(teamId) {
  try {
    const res = await fetch(`/teams/${teamId}.json`);
    if (!res.ok) return null;
    return await res.json();
  } catch (e) {
    return null;
  }
}

// Watch for theme changes
new MutationObserver(mutations => {
  for (const m of mutations) {
    if (m.attributeName === 'data-theme') {
      const teamId = document.documentElement.getAttribute('data-theme');
      loadTeamData(teamId).then(data => {
        if (data) applyTeamData(data);
      });
    }
  }
}).observe(document.documentElement, { attributes: true });

// Initial load
const teamId = document.documentElement.getAttribute('data-theme');
loadTeamData(teamId).then(data => { if (data) applyTeamData(data); });

function applyTeamData(data) {
  // Team logo
  document.querySelectorAll('[data-team-logo]').forEach(el => {
    el.src = data.logos.primary;
    el.alt = data.name;
  });

  // Short name
  document.querySelectorAll('[data-team-short-name]').forEach(el => {
    el.textContent = data.shortName;
  });

  // VFS — see "Inventory list row" example for full VFS pattern
}
```

**Logo pattern** — use `data-team-logo` attribute as the hook:

```html
<img data-team-logo src="" alt=""
     style="width: 40px; height: 40px; object-fit: contain;">
```

### Source 2 — Opposing Team Data (Sanity)

Opponent logos and names come from the `opposingTeam` collection in Sanity. See the **OPPOSING TEAMS** section above for the full field reference and GROQ queries.

**For quick prototypes** — hardcode a Sanity CDN URL directly rather than writing a full GROQ fetch:

```html
<!-- Use any resolved Sanity image URL directly — they're stable CDN links -->
<img src="https://cdn.sanity.io/images/tqbbtja5/production/[hash]-[w]x[h].svg"
     alt="Chicago Bulls"
     style="width: 48px; height: 48px; object-fit: contain;">
```

**For data-driven prototypes** — fetch from Sanity:

```javascript
const PROJECT_ID = 'tqbbtja5';
const DATASET = 'production';
const API_VERSION = '2024-01-01';

async function fetchOpponents(league) {
  const query = encodeURIComponent(
    `*[_type == "opposingTeam" && league == "${league}"] | order(name asc) {
      _id, name, shortName, "logoUrl": logo.asset->url, primaryColor
    }`
  );
  const url = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${DATASET}?query=${query}`;
  const res = await fetch(url);
  const { result } = await res.json();
  return result;
}
```

### When to Use Which Source

| Data needed | Use |
|---|---|
| Active team logo, name, short name | `/teams/{teamId}.json` → `logos.primary`, `name`, `shortName` |
| VFS seat-view images + prices | `/teams/{teamId}.json` → `vfsFar` / `vfsClose` + VFS JS loader |
| Opponent logo + name (static prototype) | Hardcode Sanity CDN URL + name string |
| Opponent list (dynamic, e.g. schedule) | Sanity GROQ (see OPPOSING TEAMS section) |
| Team colors in CSS | Never needed — set `data-theme` on `<html>`, tokens handle it |
| `matchup-panel` background (non-token) | `opposingTeam.primaryColor` — but guard for null |

### Placeholder Strategy

When real data isn't available, match the same structure so swapping in real data requires no HTML changes:

```html
<!-- Logo placeholder — same dimensions as real logo -->
<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='4' fill='%23e0e0e0'/%3E%3C/svg%3E"
     data-team-logo alt="Team logo"
     style="width: 48px; height: 48px; object-fit: contain;">

<!-- Name placeholder — use data attribute so JS can target it -->
<span data-team-short-name>Team</span>
```

---

## COMPLETE COMPONENT EXAMPLES

### Tile grid (3-up, no button — tap target variant)

```html
<div class="card-grid grid-cols-3-desktop grid-cols-2-tablet grid-cols-1-mobile">

  <div class="tile surface-card scale-700">
    <div style="height: 120px;">
      <div class="matchup">
        <div class="matchup-panel" style="--badge-bg: #a00d33;">
          <img src="images/NBA/Bulls.svg" alt="Chicago Bulls">
        </div>
        <div class="matchup-panel">
          <img src="images/NBA/Timberwolves.svg" alt="Minnesota Timberwolves">
        </div>
      </div>
    </div>
    <div class="tile-info">
      <div class="card-text-pair">
        <span class="labelBold30">vs. Chicago Bulls</span>
        <span class="labelRegular10 text-secondary">Sat, Mar 15 · 7:00 PM</span>
      </div>
      <span class="labelBold20 text-success">From $19</span>
    </div>
  </div>

  <div class="tile surface-card scale-700">
    <div style="height: 120px;">
      <div class="matchup">
        <div class="matchup-panel" style="--badge-bg: #006BB6;">
          <img src="images/NBA/Knicks.svg" alt="New York Knicks">
        </div>
        <div class="matchup-panel">
          <img src="images/NBA/Timberwolves.svg" alt="Minnesota Timberwolves">
        </div>
      </div>
    </div>
    <div class="tile-info">
      <div class="card-text-pair">
        <span class="labelBold30">vs. New York Knicks</span>
        <span class="labelRegular10 text-secondary">Tue, Mar 18 · 7:30 PM</span>
      </div>
      <span class="labelBold20 text-success">From $45</span>
    </div>
  </div>

  <div class="tile surface-card scale-700">
    <div style="height: 120px;">
      <div class="matchup">
        <div class="matchup-panel" style="--badge-bg: #552583;">
          <img src="images/NBA/Lakers.svg" alt="Los Angeles Lakers">
        </div>
        <div class="matchup-panel">
          <img src="images/NBA/Timberwolves.svg" alt="Minnesota Timberwolves">
        </div>
      </div>
    </div>
    <div class="tile-info">
      <div class="card-text-pair">
        <span class="labelBold30">vs. L.A. Lakers</span>
        <span class="labelRegular10 text-secondary">Fri, Mar 21 · 9:00 PM</span>
      </div>
      <span class="labelBold20 text-success">From $89</span>
    </div>
  </div>

</div>
```

### Settings list (icon + switch/chevron)

```html
<div style="padding: var(--spacing-200) 0;">
  <div style="padding: var(--spacing-150) var(--spacing-200); border-bottom: 1px solid var(--border-default);">
    <div class="list-row">
      <div class="leading leading-gap-md">
        <span class="icon icon-200 material-symbols-rounded">notifications</span>
      </div>
      <div class="list-row-content">
        <div class="list-row-text-pair">
          <span class="labelBold30">Push Notifications</span>
          <span class="labelRegular10 text-secondary">Alerts for tickets and offers</span>
        </div>
      </div>
      <div class="trailing trailing-gap-md">
        <div class="switch">
          <input type="checkbox" id="notif-toggle" checked>
          <label for="notif-toggle"></label>
        </div>
      </div>
    </div>
  </div>
  <div style="padding: var(--spacing-150) var(--spacing-200); border-bottom: 1px solid var(--border-default);">
    <div class="list-row">
      <div class="leading leading-gap-md">
        <span class="icon icon-200 material-symbols-rounded">credit_card</span>
      </div>
      <div class="list-row-content">
        <div class="list-row-text-pair">
          <span class="labelBold30">Payment Methods</span>
          <span class="labelRegular10 text-secondary">Visa ending in 4242</span>
        </div>
      </div>
      <div class="trailing trailing-gap-xs">
        <span class="icon icon-200 material-symbols-rounded">chevron_right</span>
      </div>
    </div>
  </div>
</div>
```

### Ticket list row (image + tags + price)

```html
<div style="padding: var(--spacing-150) var(--spacing-200); border-bottom: 1px solid var(--border-default);">
  <div class="list-row">
    <div class="leading leading-gap-lg">
      <img class="leading-image-small" src="..." alt="Game vs Lakers">
    </div>
    <div class="list-row-content">
      <div class="list-row-text-pair">
        <span class="labelBold30">Timberwolves vs Lakers</span>
        <span class="labelRegular10 text-secondary">Sat, Mar 15 · 7:00 PM</span>
      </div>
      <div class="tag-group">
        <div class="tag tag-team-color"><span class="labelBold20">Floor</span></div>
        <div class="tag"><span class="labelBold20">Row 3</span></div>
      </div>
      <div class="info-block">
        <div class="info-item">
          <span class="icon icon-200 material-symbols-rounded">event_seat</span>
        </div>
        <div class="info-item has-label">
          <span class="icon icon-200 material-symbols-rounded">confirmation_number</span>
          <span class="labelRegular10">2 tickets</span>
        </div>
      </div>
    </div>
    <div class="trailing trailing-gap-sm">
      <div class="trailing-text-pair">
        <span class="labelBold20">$148</span>
        <span class="labelRegular10 text-secondary">each</span>
      </div>
    </div>
  </div>
</div>
```

### Inventory list row (VFS image + price)

Data-driven list rows showing a seat-view image and price from the active team's JSON. Images and prices load at runtime from `/teams/{teamId}.json`. Use `data-vfs` and `data-vfs-index` attributes to target rows.

**Mobile (329px) — `leading-image-small` + `leading-gap-lg`:**

```html
<div class="list-row" data-vfs="far" data-vfs-index="0">
  <div class="leading leading-gap-lg">
    <img class="leading-image-small vfs-img" src="" alt="View from seat — far perspective" style="display:none">
    <div class="leading-image-small vfs-placeholder">VFS Far</div>
  </div>
  <div class="list-row-content">
    <div class="list-row-text-pair">
      <span class="labelBold30">Section 313</span>
      <span class="labelRegular10 text-secondary">Row F (Seats 9–14)</span>
    </div>
  </div>
  <div class="trailing trailing-gap-sm">
    <div class="trailing-text-pair">
      <span class="labelBold20 vfs-price"></span>
      <span class="labelRegular10 text-secondary vfs-price-label">Avg. Price</span>
    </div>
  </div>
</div>
```

**Desktop (592px) — `leading-image-large` + `leading-gap-xl`:** same structure, swap image class and gap class.

**Container** — card with no border; rows handle horizontal padding so dividers bleed full width:

```html
<div class="inventory-card">
  <div class="inventory-list">
    <div class="list-row" data-vfs="far" data-vfs-index="0">...</div>
    <div class="list-row" data-vfs="far" data-vfs-index="1">...</div>
    <div class="list-row" data-vfs="far" data-vfs-index="2">...</div>
  </div>
</div>
```

```css
.inventory-card {
  background: var(--bg-surface);
  border-radius: var(--border-radius-100);
  overflow: hidden;
  /* NO border — surface color contrast defines the card boundary */
}
.inventory-list { display: flex; flex-direction: column; }
.inventory-list .list-row {
  padding: var(--spacing-200);
  border-bottom: 1px solid var(--border-default);
}
.inventory-list .list-row:last-child { border-bottom: none; }
.vfs-img { object-fit: cover; }
.vfs-placeholder {
  background: var(--bg-base);
  display: flex; align-items: center; justify-content: center;
  color: var(--text-secondary);
  font-size: 10px; text-align: center; line-height: 1.4;
  border: 1px dashed var(--border-default);
  border-radius: var(--border-radius-50);
}
```

**JS to populate from team JSON** — call on load and when theme changes:

```javascript
async function loadVfsData(teamId) {
  try {
    const res = await fetch(`/teams/${teamId}.json`)
    if (!res.ok) return
    const data = await res.json()
    updateVfs('far', data.vfsFar)
    updateVfs('close', data.vfsClose)
  } catch (e) {}
}

function updateVfs(type, vfs) {
  document.querySelectorAll(`[data-vfs="${type}"]`).forEach(row => {
    const index = parseInt(row.dataset.vfsIndex, 10)
    const img = row.querySelector('.vfs-img')
    const placeholder = row.querySelector('.vfs-placeholder')
    const priceEl = row.querySelector('.vfs-price')
    const labelEl = row.querySelector('.vfs-price-label')
    const hasData = vfs && (vfs.images?.length > 0 || vfs.fallback)
    const imageUrl = hasData ? (vfs.images?.[index] || vfs.fallback || '') : ''
    const price = hasData ? (vfs.prices?.[index] || '') : ''
    if (imageUrl) {
      if (img) { img.src = imageUrl; img.style.display = '' }
      if (placeholder) placeholder.style.display = 'none'
    } else {
      if (img) { img.src = ''; img.style.display = 'none' }
      if (placeholder) placeholder.style.display = ''
    }
    if (priceEl) priceEl.textContent = price
    if (labelEl) labelEl.textContent = vfs?.priceLabel || 'Avg. Price'
  })
}

// Watch theme changes
new MutationObserver(mutations => {
  for (const m of mutations) {
    if (m.attributeName === 'data-theme') {
      loadVfsData(document.documentElement.getAttribute('data-theme'))
    }
  }
}).observe(document.documentElement, { attributes: true })

loadVfsData(document.documentElement.getAttribute('data-theme'))
```

**`far` vs `close`** — use `data-vfs="far"` for upper bowl/wide views, `data-vfs="close"` for courtside/pitch-side. Same HTML structure for both.

### Schedule row (opposing team logo)

Used in game schedules, matchup lists, and upcoming event cards. The opponent logo goes in the leading slot as a 40×40 contained image. Logo URL comes from the `opposingTeam` Sanity document (`logo.asset->url`).

```html
<div style="padding: var(--spacing-150) var(--spacing-200); border-bottom: 1px solid var(--border-default);">
  <div class="list-row">
    <div class="leading leading-gap-md">
      <img src="{opponent.logoUrl}" alt="{opponent.name}"
           style="width: 40px; height: 40px; object-fit: contain; flex-shrink: 0;">
    </div>
    <div class="list-row-content">
      <div class="list-row-text-pair">
        <span class="labelBold30">vs {opponent.shortName}</span>
        <span class="labelRegular10 text-secondary">Sat, Mar 15 · 7:00 PM</span>
      </div>
      <div class="tag-group">
        <div class="tag"><span class="labelBold20">Home</span></div>
      </div>
    </div>
    <div class="trailing trailing-gap-xs">
      <span class="icon icon-200 material-symbols-rounded">chevron_right</span>
    </div>
  </div>
</div>
```

- Away game → swap tag label to `"Away"`
- No logo available → omit `.leading` slot entirely; `.list-row-content` becomes the first child
- Use `leading-gap-sm` (8px) for small logos, `leading-gap-md` (12px) for logos with more visual weight

### Event row (buy flow, single game)

Buy-flow card for a single game. Opposing team logo + event info + offer state. Background is `--bg-surface`, 16px radius, responsive padding and text scale.

**Offer states** — trailing content varies per state:

| State | Top section trailing | Bottom section |
|---|---|---|
| Featured Only | `btn btn-primary btn-100` with `$N+` | — |
| Featured and Others | `btn btn-primary btn-100` with `$N+` | "X Additional Offers" + `arrow_drop_down` icon |
| No Featured Offers | — (no trailing) | "X Offers Available" + `arrow_drop_down` icon |
| Sold Out | `labelBold30 text-secondary` "Sold Out" | — |
| Coming Soon | `labelBold20 text-interactive-tertiary event-row-coming-soon` "Coming Soon" | — |

**Text scale:**
- Mobile (<500px): `event-row-label` = 16px/600, `event-row-sublabel` = 12px/400
- Tablet/Desktop (≥500px): `event-row-label` = 20px/700, `event-row-sublabel` = 14px/400

**Data binding (Sanity):**
- Logo → `opposingTeam.logo.asset->url` (SVG, `object-fit: contain`)
- Label → `opposingTeam.name`
- Date → format as `"Day, Mon D · H PM"` (interpunct U+00B7)

**Surface tokens:**
- `.event-row` background (`--org-surface`) is built into the component CSS — no wrapper surface token needed
- `surface-section` goes on any section that contains interactive content → transparent hover/press overlay over the card background
- Non-interactive sections: no surface class
- No `scale-*` — scale on one section of a multi-section card looks wrong

| State | `surface-section` on |
|---|---|
| Featured Only | `.event-row-top` |
| Featured and Others | `.event-row-top` + `.event-row-bottom` |
| No Featured Offers | `.event-row-bottom` only (top is not interactive) |
| Sold Out | neither (nothing interactive) |
| Coming Soon | neither (nothing interactive) |

```html
<!-- .event-row background (--org-surface) is built into the CSS — no wrapper surface token.
     Interactive sections get surface-section. Non-interactive sections get no class. No scale. -->

<!-- Featured Only — top is interactive -->
<div class="event-row">
  <div class="event-row-top surface-section">
    <div class="list-row">
      <div class="leading leading-gap-sm">
        <img class="event-row-logo" src="{opponent.logoUrl}" alt="{opponent.name}">
      </div>
      <div class="list-row-content">
        <div class="list-row-text-pair">
          <span class="event-row-label">Portland Marmots</span>
          <span class="event-row-sublabel text-secondary">Tuesday, Oct 8 · 7 PM</span>
        </div>
      </div>
      <div class="trailing trailing-gap-lg">
        <button class="btn btn-primary btn-100">$19+</button>
      </div>
    </div>
  </div>
</div>

<!-- Featured and Others — both sections interactive -->
<div class="event-row">
  <div class="event-row-top surface-section">
    <div class="list-row">
      <div class="leading leading-gap-sm">
        <img class="event-row-logo" src="{opponent.logoUrl}" alt="{opponent.name}">
      </div>
      <div class="list-row-content">
        <div class="list-row-text-pair">
          <span class="event-row-label">Charlotte Bullfrogs</span>
          <span class="event-row-sublabel text-secondary">Thursday, Oct 10 · 7 PM</span>
        </div>
      </div>
      <div class="trailing trailing-gap-lg">
        <button class="btn btn-primary btn-100">$21+</button>
      </div>
    </div>
  </div>
  <div class="event-row-bottom surface-section">
    <div class="list-row">
      <div class="list-row-content">
        <div class="list-row-text-pair">
          <span class="labelBold30 text-interactive-tertiary">3 Additional Offers</span>
        </div>
      </div>
      <div class="trailing trailing-gap-xs">
        <span class="icon material-symbols-rounded text-interactive-tertiary">arrow_drop_down</span>
      </div>
    </div>
  </div>
</div>

<!-- No Featured Offers — top NOT interactive, bottom interactive -->
<div class="event-row">
  <div class="event-row-top">
    <div class="list-row not-tappable">
      <div class="leading leading-gap-sm">
        <img class="event-row-logo" src="{opponent.logoUrl}" alt="{opponent.name}">
      </div>
      <div class="list-row-content">
        <div class="list-row-text-pair">
          <span class="event-row-label">Miami Geckos</span>
          <span class="event-row-sublabel text-secondary">Wednesday, Oct 16 · 7 PM</span>
        </div>
      </div>
    </div>
  </div>
  <div class="event-row-bottom surface-section">
    <div class="list-row">
      <div class="list-row-content">
        <div class="list-row-text-pair">
          <span class="labelBold30 text-interactive-tertiary">3 Offers Available</span>
        </div>
      </div>
      <div class="trailing trailing-gap-xs">
        <span class="icon material-symbols-rounded text-interactive-tertiary">arrow_drop_down</span>
      </div>
    </div>
  </div>
</div>

<!-- Sold Out — no interactive sections -->
<div class="event-row">
  <div class="event-row-top">
    <div class="list-row not-tappable">
      <div class="leading leading-gap-sm">
        <img class="event-row-logo" src="{opponent.logoUrl}" alt="{opponent.name}">
      </div>
      <div class="list-row-content">
        <div class="list-row-text-pair">
          <span class="event-row-label">Omaha Otters</span>
          <span class="event-row-sublabel text-secondary">Tuesday, Oct 22 · 7 PM</span>
        </div>
      </div>
      <div class="trailing trailing-gap-sm">
        <span class="labelBold30 text-secondary">Sold Out</span>
      </div>
    </div>
  </div>
</div>

<!-- Coming Soon — no interactive sections -->
<div class="event-row">
  <div class="event-row-top">
    <div class="list-row not-tappable">
      <div class="leading leading-gap-sm">
        <img class="event-row-logo" src="{opponent.logoUrl}" alt="{opponent.name}">
      </div>
      <div class="list-row-content">
        <div class="list-row-text-pair">
          <span class="event-row-label">Portland Marmots</span>
          <span class="event-row-sublabel text-secondary">Saturday, Oct 26 · 7 PM</span>
        </div>
      </div>
      <div class="trailing trailing-gap-sm">
        <span class="labelBold20 text-interactive-tertiary event-row-coming-soon">Coming Soon</span>
      </div>
    </div>
  </div>
</div>
```

**List container** — stacks rows with 8px gap, constrained to 499px (phone) or 672px (tablet/desktop):

```html
<div class="event-row-list">
  <div class="event-row">...</div>
  <div class="event-row">...</div>
</div>
```

Demo: `examples/event-row-demo.html`

### Card with header, body, and footer

```html
<div class="card-closed" style="max-width: 400px;">
  <div class="card-closed-header">
    <div class="card-text-pair">
      <h3 class="title50">Season Tickets</h3>
      <p class="labelRegular20 text-secondary">2024-25 Season</p>
    </div>
    <button class="btn-circle btn-circle-300 btn-circle-neutral-tertiary">
      <span class="btn-icon material-symbols-rounded">more_horiz</span>
    </button>
  </div>
  <div class="card-closed-body">
    <p class="bodyRegular30">Enjoy the full season experience with priority access and exclusive member pricing.</p>
  </div>
  <div class="card-closed-footer">
    <div class="btn-group">
      <button class="btn btn-transactional btn-300">Buy Now</button>
      <button class="btn btn-secondary btn-300">Learn More</button>
    </div>
  </div>
</div>
```

### Hero section with stacked CTAs

```html
<section style="padding: var(--spacing-700) var(--spacing-300); text-align: center; background: var(--bg-base);">
  <div style="max-width: 480px; margin: 0 auto;">
    <div class="card-text-pair mb-500">
      <h1 class="display500">Game Day is Here</h1>
      <p class="labelRegular40 text-secondary">Get your tickets before they're gone</p>
    </div>
    <div class="btn-group-stack">
      <button class="btn btn-transactional btn-700 btn-fill btn-icon-trailing">
        <span>Buy Tickets</span>
        <span class="btn-icon material-symbols-rounded">arrow_forward</span>
      </button>
      <button class="btn btn-secondary btn-700 btn-fill">View Schedule</button>
    </div>
  </div>
</section>
```

### Section header with View All

```html
<div style="display: flex; align-items: center; justify-content: space-between; padding: var(--spacing-200) var(--spacing-200) var(--spacing-150);">
  <div class="card-text-pair">
    <h2 class="display300">Upcoming Games</h2>
    <p class="labelRegular20 text-secondary">Next 7 days</p>
  </div>
  <div class="trailing trailing-gap-md">
    <span class="trailing-text-link labelBold20">View All</span>
  </div>
</div>
```

### Login form

```html
<div style="max-width: 400px; padding: var(--spacing-400);">
  <div class="card-text-pair mb-400">
    <h1 class="display400">Sign In</h1>
    <p class="labelRegular30 text-secondary">Welcome back</p>
  </div>
  <div style="display: flex; flex-direction: column; gap: var(--spacing-200);">
    <div class="input-field">
      <div class="input-label-row">
        <label class="input-label" for="login-email">Email</label>
      </div>
      <div class="input-and-message">
        <div class="input-control">
          <span class="input-icon material-symbols-rounded">mail</span>
          <input type="email" id="login-email" placeholder="you@example.com">
        </div>
      </div>
    </div>
    <div class="input-field">
      <div class="input-label-row">
        <label class="input-label" for="login-password">Password</label>
        <a class="input-link" href="#">Forgot password?</a>
      </div>
      <div class="input-and-message">
        <div class="input-control">
          <input type="password" id="login-password" placeholder="Enter password">
        </div>
      </div>
    </div>
  </div>
  <div class="mt-300">
    <button class="btn btn-primary btn-700 btn-fill">Sign In</button>
  </div>
</div>
```

### Filter bar (two selects)

```html
<div style="display: flex; gap: var(--spacing-150); padding: var(--spacing-150) var(--spacing-200);">
  <div class="input-field input-select" id="filter-sport" style="flex: 1;">
    <div class="input-and-message">
      <div class="input-control">
        <span class="input-select-display is-placeholder" id="filter-sport-display">Sport</span>
        <span class="input-select-chevron material-symbols-rounded">arrow_drop_down</span>
        <select id="sel-sport"
          onchange="syncSelect('filter-sport', 'filter-sport-display', this)"
          onfocus="openSelect('filter-sport')"
          onblur="closeSelect('filter-sport')">
          <option value="" disabled selected>Sport</option>
          <option value="basketball">Basketball</option>
          <option value="soccer">Soccer</option>
        </select>
      </div>
    </div>
  </div>
  <div class="input-field input-select" id="filter-date" style="flex: 1;">
    <div class="input-and-message">
      <div class="input-control">
        <span class="input-select-display is-placeholder" id="filter-date-display">Date</span>
        <span class="input-select-chevron material-symbols-rounded">arrow_drop_down</span>
        <select id="sel-date"
          onchange="syncSelect('filter-date', 'filter-date-display', this)"
          onfocus="openSelect('filter-date')"
          onblur="closeSelect('filter-date')">
          <option value="" disabled selected>Date</option>
          <option value="this-week">This Week</option>
          <option value="this-month">This Month</option>
        </select>
      </div>
    </div>
  </div>
</div>
```

### Quantity row with stepper

```html
<div style="padding: var(--spacing-150) var(--spacing-200); border-bottom: 1px solid var(--border-default);">
  <div class="list-row">
    <div class="leading leading-gap-md">
      <div class="circle-container">
        <span class="display100">A</span>
      </div>
    </div>
    <div class="list-row-content">
      <div class="list-row-text-pair">
        <span class="labelBold30">Adult</span>
        <span class="labelRegular10 text-secondary">$42.00 per ticket</span>
      </div>
    </div>
    <div class="trailing trailing-gap-lg">
      <div class="stepper">
        <button class="stepper-btn disabled">
          <span class="icon icon-200 material-symbols-rounded">remove</span>
        </button>
        <span class="stepper-count labelBold50">1</span>
        <button class="stepper-btn">
          <span class="icon icon-200 material-symbols-rounded">add</span>
        </button>
      </div>
    </div>
  </div>
</div>
```

### Selector (selectable list row)

A `.selector` is a clickable container that wraps a `.list-row` to make it selectable. It handles 16px border-radius and padding. Interactive states come entirely from the surface class — never from custom CSS.

**Two variants — pick based on the parent background:**

| Variant | Surface class | Use when |
|---------|---------------|----------|
| Wash | `surface-washNeutral` | Inside a card or on `--bg-surface` — nearly transparent at rest |
| Card | `surface-card` | On page background (`--bg-base`) — shows `--bg-surface` at rest, looks like a card |

```html
<!-- Wash variant (inside a card / on --bg-surface) -->
<div class="selector surface-washNeutral scale-700">
  <div class="list-row">
    <div class="list-row-content">
      <div class="list-row-text-pair">
        <span class="labelBold30">Section 313 — Row F</span>
        <span class="labelRegular10 text-secondary">Seats 9–14</span>
      </div>
    </div>
    <div class="trailing trailing-gap-sm">
      <div class="trailing-text-pair">
        <span class="labelBold20">$148</span>
        <span class="labelRegular10 text-secondary">each</span>
      </div>
    </div>
  </div>
</div>

<!-- Card variant (on --bg-base, looks like a card in a list) -->
<div class="selector surface-card scale-700">
  <div class="list-row">...</div>
</div>

<!-- Selected — works with either variant -->
<div class="selector surface-washNeutral scale-700 is-selected">
  <div class="list-row">...</div>
</div>

<!-- Disabled — omit scale-700 -->
<div class="selector surface-washNeutral is-disabled">
  <div class="list-row">...</div>
</div>
```

**State rules:**
- Default: resting bg from surface class (wash = near-transparent, card = `--bg-surface`)
- Selected: `is-selected` inverts to `--neutral-1000` bg with inverted text — overrides both surface variants
- Disabled: `is-disabled` sets 25% opacity, no pointer events — omit `scale-700`

---

## FIGMA MCP WORKFLOW

When given a Figma URL or asked to use Figma MCP tools, follow these rules before doing anything else.

### Component Map is the Bridge

`figma-component-map.md` maps every CSS class pattern to its Figma COMPONENT_SET nodeId and variant props. **Always check it first** before:
- Instantiating any component in Figma
- Translating a Figma design to CSS
- Identifying which CSS classes correspond to components seen in a Figma file

Figma file key: `qtyb4i4QNogTd8TJ4F6IMX` · Components page nodeId: `63:7729`

### When Instantiating Components in Figma

Always use `figma_instantiate_component` with nodeIds from the map. **Never draw raw shapes to represent a component that exists in the library.**

```js
// ✅ CORRECT — use the map's nodeId and variant props
figma_instantiate_component({
  nodeId: "15102:32701",   // Button COMPONENT_SET from figma-component-map.md
  variant: { Type: "Primary", Size: "300 (Small)", "Fixed Width": "False", "Icon Position": "None", State: "Default" },
  overrides: { "Label#216:33": "Save" },
  parentId: "...",
  position: { x: 0, y: 0 }
})

// ❌ WRONG — raw rectangle + text to stand in for a Button
```

**State props:** Always pass `State: "Default"` unless specifically documenting a non-default state. CSS handles live states; the Figma component reflects static design intent.

**nodeId vs componentKey:** For all components in this file, `nodeId` alone is sufficient. `componentKey` is only needed for published library components from external files.

### When Analyzing a Figma Design (CSS output)

1. `figma_get_metadata` — ground truth dimensions and node IDs for the frame
2. `figma_get_design_context` — read structure, tokens, and component relationships
3. Cross-reference every component seen with `figma-component-map.md` to find the CSS equivalent
4. Map Figma spacing measurements to the nearest token (16px → `--spacing-200`)
5. `figma_capture_screenshot` — verify the built output matches the design

### When the Map is Missing a Component

If a Figma component has no entry in `figma-component-map.md`:
1. Use `figma_get_component` with the component's nodeId to read its variant props
2. Identify the CSS equivalent (or note there is none — add it to Known Gaps)
3. Add a complete entry to `figma-component-map.md` before continuing

A complete entry includes: nodeId, variant prop → CSS class table, and a default `figma_instantiate_component` call.

---

## PRE-OUTPUT SELF-AUDIT — REACT

Before returning any React/TSX, scan the output for these failure modes. Fix any you find — do not ship them.

| Scan for | What to check |
|---|---|
| Every interactive component | Using typed variant props only? No `className` or `style` props on `Button`, `ListRow`, `Input`, `Select`, `Card*`, `Tag`, `Chip`, `Selector`, `Tile`, `TopBar`, `Tabs`, `Steps`, `PageHeader`, `EventRow`? |
| Every `<button>` in TSX | Is it a `<Button>` or `<CircleButton>` component? Bare `<button>` elements are never correct. |
| Every `<input>` in TSX | Is it an `<Input>` component? Bare `<input>` elements are never correct. |
| Every `<select>` in TSX | Is it a `<Select>` component? Bare `<select>` elements are never correct. |
| Label + sublabel pairs | Using `<TextPair label="..." sublabel="..." />`? Not manual div assembly? |
| Trailing text pairs | Using `<TrailingText label="..." sublabel="..." />`? |
| Color values | Any `#`, `rgb()`, or hardcoded CSS custom properties in TSX style objects? Use component variants or token classes. |
| Spacing values | Any hardcoded `px` in inline styles? Use token classes (`mb-200`, `py-large`, etc.) or `var(--spacing-*)` only where truly necessary. |
| Theming | Using `useTheme()` to read/set theme and mode? Never `document.documentElement.setAttribute('data-theme', ...)`. |
| Team data | Loading from `/teams/${theme}.json` via `useEffect`? Never hardcoded team names, logos, or colors. |

**No component is exempt. Demo pages and test components follow the same rules.**

---

## PRE-OUTPUT SELF-AUDIT — HTML PROTOTYPE

Before returning any HTML, scan the output for these failure modes. Fix any you find — do not ship them.

| Scan for | What to check |
|---|---|
| Every `<select>` | Inside `.input-field.input-select` with display span, `arrow_drop_down` chevron, and `syncSelect` / `openSelect` / `closeSelect` handlers? |
| Every `<input>` | Inside `.input-field` > `.input-and-message` > `.input-control`? |
| Every `<button>` | Is it `.btn` + type + size, or `.btn-circle` + size + type? A bare `<button>` with custom styling is never correct. |
| Every color value | Any `#`, `rgb()`, or `hsl()` outside the SYNC block? Replace with a token. |
| Every spacing value | Any hardcoded `px`, `em`, or `rem` where a spacing token or utility class exists? Replace it. |
| Every text element | Any inline `font-size`, `font-weight`, or `line-height`? Use a text style class. |
| Every interactive element | Any `:hover` or `:active` CSS written by hand? Use `.surface-*` + `.scale-*`. |

**No element is exempt because it is on a demo page, is a utility control, or "doesn't need the full component."**

---

## MASTER PROMPT TEMPLATE

```
Build this using Diet AirDS:
https://diet-air-ds.vercel.app/agent-guide.md

Use data-theme="[TEAM]" and data-mode="[light|dark]"

WHAT TO BUILD:
[Describe your component]

RULES:
1. Load ALL CSS files from https://diet-air-ds.vercel.app/ in the order listed in the guide.
2. Set data-theme and data-mode on <html>.
3. Use .card-text-pair for every label+sublabel. Use .list-row-text-pair inside list rows only.
4. All typography uses text style classes — never custom font-size, font-weight, or line-height.
5. All spacing uses tokens (var(--spacing-200)) or utilities (.mb-200) — never hardcoded px.
6. All sublabels have .text-secondary.
7. Buttons use .btn + type + size — never hand-rolled.
8. List rows use .list-row 3-slot structure — never hand-rolled.
9. Inputs and selects use .input-field structure — never hand-rolled.
10. Brand-colored elements use --brand-interactive / --brand-inverted — never --color-interactive / --color-inverted.
11. Interactive surfaces use .surface-* + .scale-* — never custom :hover CSS.
12. Children inside .surface-fill* containers have color: inherit.
13. Team logos use `data-team-logo` + team JSON loader. Team names use `data-team-short-name` + team JSON loader. VFS images use `data-vfs` + JS loader. Opponent logos/names use Sanity CDN or GROQ. Never hardcode brand-specific content.

VALIDATION CHECKLIST:
- [ ] All CSS files loaded from absolute URLs in correct order
- [ ] data-theme and data-mode on <html>
- [ ] All text pairs use correct wrapper class
- [ ] All typography uses text style classes
- [ ] All spacing uses tokens or utilities
- [ ] All sublabels have .text-secondary
- [ ] Works with wolves/light and athletics/dark
- [ ] No hardcoded colors, spacing, or font values
- [ ] Buttons use .btn system
- [ ] List rows use .list-row system
- [ ] Selectable rows use .selector + surface-washNeutral + scale-700
- [ ] Small cards in grids/carousels use .tile — interactivity rule applied consistently across the set
- [ ] Inputs use .input-field system
- [ ] Select uses arrow_drop_down (not expand_more)
- [ ] Input state classes on .input-field wrapper
- [ ] JS helpers included for clear buttons and selects
- [ ] No custom :hover or :active CSS — interactive states use .surface-* + .scale-*
- [ ] Children of .surface-fill* have color: inherit
- [ ] Team logo uses `data-team-logo` + loaded from `/teams/{teamId}.json` (if UI shows team logo)
- [ ] Team name/short name uses `data-team-short-name` + loaded from JSON (if UI shows team name)
- [ ] VFS images use `data-vfs` pattern + JS loader (if UI includes seat-view rows)
- [ ] Opponent logos + names come from Sanity CDN or GROQ (if UI shows opponent data)
- [ ] No hardcoded team names, logo URLs, or opponent data strings

OUTPUT: Complete standalone HTML file.
```

---

## REACT MASTER PROMPT TEMPLATE

```
Build this using the Diet AirDS React component library.

Reference: https://diet-air-ds.vercel.app/agent-guide.md (REACT COMPONENTS section)
Components: import from 'diet-airds'
Theming: useTheme() from src/context/ThemeContext

WHAT TO BUILD:
[Describe your component or page]

RULES:
1. Import all components from 'diet-airds' — never hand-roll buttons, inputs, list rows, cards, tabs, steps, or nav.
2. No className or style props on design system components — typed variant props only.
3. Typography: use text style classes (display500, labelBold30, bodyRegular20, etc.) as className on native elements only where no component wraps the text.
4. Spacing: use token classes (mb-200, py-large, gap-200) or CSS custom properties — never hardcoded px values.
5. Theming: read theme and mode from useTheme() — never set data-theme or data-mode attributes directly.
6. Team data: load from /teams/${theme}.json in a useEffect — never hardcode team names, logo URLs, or brand colors.
7. Opponent/event data: load from Sanity via GROQ inside a useEffect — never hardcode opponent names or logos.
8. All sublabels: add text-secondary class (className="... text-secondary").
9. Interactive containers with no React component: compose className="surface-washNeutral scale-700".
10. CircleButton requires aria-label — never omit it.

VALIDATION CHECKLIST:
- [ ] All interactive components use variant props, not CSS class strings
- [ ] No bare <button>, <input>, or <select> — use Button, Input, Select
- [ ] No className or style on Button, ListRow, Input, Select, Card*, Tag, Chip, Selector, Tile, TopBar, Tabs, Steps, PageHeader, EventRow
- [ ] TextPair used for every label+sublabel (not manual divs)
- [ ] TrailingText used for right-aligned text pairs in list rows
- [ ] useTheme() used for theme/mode — no manual DOM attribute writes
- [ ] Team data loaded dynamically — no hardcoded names, logos, or colors
- [ ] Works with wolves/light and athletics/dark as the two extreme test cases
- [ ] CircleButton has aria-label
- [ ] Selector uses surface="wash" inside cards, surface="card" on page background

OUTPUT: TypeScript/JSX file(s). Include all imports.
```

---

## REACT COMPONENTS

The design system ships 13 typed React components from `diet-airds`. All components compose the same CSS tokens — no `className` or `style` props, variants only.

### Setup

```tsx
import { Button, CircleButton, Tag, Chip, Icon, CardClosed, CardOpen, CardSection,
  ListRow, TextPair, TrailingText, LeadingImage, LeadingLogo, CircleContainer,
  Input, Select, Selector, Tile, TopBar, Tabs, Steps, PageHeader, EventRow
} from 'diet-airds'
```

CSS must be loaded before any component renders (handled automatically in `src/main.tsx`):

```tsx
import '../design-tokens-master.css'
import '../spacing-tokens.css'
// ... (full load order in src/main.tsx)
```

Theming is managed by `ThemeContext` — it sets `data-theme` and `data-mode` on `<html>`. Wrap the app in `<ThemeProvider>` and use `useTheme()` to read/set theme and mode.

---

### Icon

```tsx
<Icon name="home" />
<Icon name="star" size={400} outlined />
```

| Prop | Type | Default |
|---|---|---|
| `name` | `string` | required |
| `size` | `100\|200\|300\|400\|500\|600` | `300` |
| `outlined` | `boolean` | `false` |

---

### Button

```tsx
<Button variant="primary" size="small">Label</Button>
<Button variant="transactional" icon="confirmation_number" fill>Buy Tickets</Button>
<Button variant="secondary" icon="arrow_forward" iconPosition="trailing" size="small">Next</Button>
<Button variant="primary" disabled>Sold Out</Button>
```

| Prop | Type | Default |
|---|---|---|
| `variant` | `'primary'\|'secondary'\|'tertiary'\|'transactional'\|'neutral'\|'destructive'\|'white'\|'white-tertiary'\|'black'` | required |
| `size` | `'large'\|'small'\|'xsmall'` | `'large'` |
| `icon` | `string` | — |
| `iconPosition` | `'leading'\|'trailing'` | `'leading'` |
| `fill` | `boolean` | `false` |
| `disabled` | `boolean` | `false` |
| `type` | `'button'\|'submit'\|'reset'` | `'button'` |

### CircleButton

```tsx
<CircleButton variant="neutral" icon="close" size="small" aria-label="Close" />
```

| Prop | Type | Default |
|---|---|---|
| `variant` | same as Button | required |
| `size` | `'large'\|'small'` | `'large'` |
| `icon` | `string` | required |
| `aria-label` | `string` | required |

---

### Tag / Chip

```tsx
<Tag>Default</Tag>
<Tag teamColor icon="flag">Brand</Tag>
<Tag icon="arrow_forward" iconPosition="trailing">Label</Tag>

<Chip onClick={...}>Filter</Chip>
<Chip surface="ghost" teamColor>Active</Chip>
<Chip disabled>Off</Chip>
```

**Tag props:** `teamColor`, `icon`, `iconPosition` (`'leading'|'trailing'`)

**Chip props:** `surface` (`'bordered'|'ghost'`), `teamColor`, `icon`, `iconPosition`, `disabled`, `onClick`

---

### CardClosed / CardOpen / CardSection

```tsx
<CardClosed
  header={<TextPair label="Title" sublabel="Subtitle" />}
  body={<p>Content</p>}
  footer={<Button variant="primary">Action</Button>}
/>

<CardClosed interactive onClick={handleClick} body={...} />

<CardOpen
  header={<TextPair label="Section Group" />}
  sections={[<div>Section 1</div>, <div>Section 2</div>]}
/>

<CardSection interactive onClick={handleClick}>
  <ListRow .../>
</CardSection>
```

---

### ListRow + subcomponents

```tsx
<ListRow
  leading={<Icon name="notifications" size={200} />}
  leadingGap="md"
  trailing={<Icon name="chevron_right" size={200} />}
  trailingGap="xs"
  onClick={handleClick}
>
  <TextPair label="Event Name" sublabel="Sat, Mar 15 · 7:00 PM" />
</ListRow>
```

**leadingGap:** `'sm'` (logos) · `'md'` (icons, circles) · `'lg'` (square images) · `'xl'` (large images)

**trailingGap:** `'xs'` (chevron) · `'sm'` (text pair) · `'md'` (text link) · `'lg'` (button)

**Row states:** default (tappable) · `notTappable` · `disabled`

**Subcomponents:**

```tsx
// Main content
<TextPair label="Primary" sublabel="Supporting" />

// Right-aligned trailing content
<TrailingText label="$42.00" sublabel="Per ticket" />

// Leading image
<LeadingImage src="..." alt="..." size="square" />  // 'square'|'small'|'large'

// Leading logo (renders active team logo via CSS)
<LeadingLogo ariaLabel="Team logo" />

// Circle container (for icons or letters)
<CircleContainer><Icon name="star" /></CircleContainer>
```

---

### Input / Select

```tsx
<Input
  label="Email"
  type="email"
  placeholder="you@example.com"
  clearable
  icon="mail"
  onChange={(val) => setValue(val)}
/>

<Input label="Amount" error message="Required field" />
<Input label="Disabled" disabled />

<Select
  label="Team"
  options={[{ value: 'wolves', label: 'Timberwolves' }]}
  placeholder="Select team"
  onChange={(val) => setTeam(val)}
/>
```

**Input key props:** `type`, `value`, `defaultValue`, `placeholder`, `label`, `linkText`, `linkHref`, `icon`, `clearable`, `error`, `disabled`, `message`, `onChange`, `onClear`

**Select key props:** `options` (`{value, label}[]`), `value`, `placeholder`, `label`, `icon`, `error`, `disabled`, `message`, `onChange`

---

### Selector

Selectable list row. Use `surface="wash"` inside cards, `surface="card"` on page background.

```tsx
<Selector selected={isSelected} onClick={toggle}>
  <ListRow .../>
</Selector>
```

---

### Tile

```tsx
<Tile
  visual={<img src="..." alt="" />}
  info={<TextPair label="Event" sublabel="Mar 15" />}
  tag={<Tag>Featured</Tag>}
  tappable
  onClick={handleClick}
/>
```

When `tappable`, the tile is the tap target. Do not put a `<Button>` inside a tappable tile.

---

### TopBar

```tsx
<TopBar
  logoSrc="/images/wolves-logo.svg"
  teamName="Minnesota Timberwolves"
  shortName="Wolves"
  fullName="Minnesota Timberwolves"
  href="/"
  actions={<CircleButton variant="neutral" icon="account_circle" aria-label="Account" />}
/>
```

---

### Tabs

```tsx
const [tab, setTab] = useState('upcoming')

<Tabs
  tabs={[{ label: 'Upcoming', value: 'upcoming' }, { label: 'Past', value: 'past' }]}
  activeTab={tab}
  onChange={setTab}
/>
<Tabs ... neutral />  {/* neutral-1000 indicator instead of brand */}
```

---

### Steps

```tsx
<Steps
  steps={[
    { label: 'Select', state: 'completed' },
    { label: 'Review', state: 'active' },
    { label: 'Pay', state: 'pending' },
  ]}
/>
<Steps steps={...} brand />  {/* brand color for completed steps */}
```

---

### PageHeader

```tsx
<PageHeader
  title="My Tickets"
  subtitle="3 upcoming events"
  tabs={<Tabs ... />}
/>

<PageHeader
  title="Checkout"
  steps={<Steps ... />}
/>
```

---

### EventRow

```tsx
<EventRow
  opponentLogo="/images/opponent.svg"
  opponentName="Golden State Warriors"
  date="Tuesday, Oct 8 · 7 PM"
  state="featured-and-others"
  featuredPrice="$19+"
  offerCount={12}
  onTopClick={handleBuy}
  onBottomClick={handleViewAll}
/>
```

**States:** `'featured-only'` · `'featured-and-others'` · `'no-featured-offers'` · `'sold-out'` · `'coming-soon'`

---

## TROUBLESHOOTING

**Text invisible on filled surface** — Add `color: inherit` to children inside `.surface-fill*`.

**Button hover/press not working** — Use `.btn` base class. Never add custom `:hover` transforms.

**Custom hover/active CSS on a non-button element** — Remove it. Compose with `.surface-*` + `.scale-*` instead. Any clickable container that isn't a button or list row should use a surface class for all interactive states. Remember: `surface-washNeutral` = subtle bg wash on hover/press; `surface-fillNeutral` = solid fill that darkens.

**Text pair spacing wrong** — Use `.card-text-pair`. Never put label+sublabel directly in DOM without it.

**List row text too big** — Replace `.card-text-pair` inside list row with `.list-row-text-pair`.

**List row spacing off** — Wrong gap modifier. Icons = `leading-gap-md`, images = `leading-gap-lg`.

**Select chevron wrong** — Use `arrow_drop_down`, not `expand_more`.

**Input state not applying** — State classes (`.is-error`, `.is-disabled`, `.has-value`) go on `.input-field`, not `.input-control`.

**Switch not toggling** — `<input>` `id` must match `<label>` `for` attribute.

**Stepper disabled button looks wrong** — Add `.disabled` class to `.stepper-btn`, not HTML `disabled` attribute.

**Brand color wrong in dark mode** — Replace `--color-interactive` with `--brand-interactive`.

**Themes look identical** — Check `data-theme` and `data-mode` are set correctly on `<html>`.

**Card has a visible border** — Remove it. Cards never have borders. Surface contrast (`--bg-surface` vs `--bg-base`) defines the boundary.

**Fonts not loading** — Use absolute URL for `fonts.css`. Check Google Fonts `<link>` is present.
