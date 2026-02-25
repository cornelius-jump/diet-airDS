# Figma Component Map — Diet AirDS

Maps every CSS component class pattern to its Figma counterpart on page **01 Components** (file `qtyb4i4QNogTd8TJ4F6IMX`).

Use this when calling `figma_instantiate_component` so Figma canvases use real components instead of raw shapes.

---

## How to Use

```js
// Always pass nodeId. componentKey is only needed for library-published components.
// For all components in this file, nodeId alone is sufficient.
figma_instantiate_component({
  nodeId: "15102:32701",       // component set node ID
  variant: { Type: "Primary", Size: "300 (Small)", "Icon Position": "None" },
  overrides: { "Label#216:33": "Save" },
  parentId: "...",
  position: { x: 0, y: 0 }
})
```

**State props (Default/Hover/Pressed/Disabled):** Always pass `State: "Default"` unless you specifically need a non-default state for documentation purposes. CSS handles live states automatically.

---

## Core Components

### Button
**Figma:** `Button` · nodeId `15102:32701` · COMPONENT_SET

| Figma prop | Values | CSS equivalent |
|---|---|---|
| `Type` | `Transactional` | `btn-transactional` |
| | `Primary` | `btn-primary` |
| | `Neutral` | `btn-neutral` |
| | `Secondary` | `btn-secondary` |
| | `Tertiary` | `btn-tertiary` |
| | `Destructive` | `btn-destructive` |
| | `White` | `btn-white` |
| | `White Tertiary` | `btn-white-tertiary` |
| | `Black` | `btn-black` |
| `Size` | `700 (Large)` | `btn-700` |
| | `300 (Small)` | `btn-300` |
| | `100 (X-Small)` | `btn-100` |
| `Fixed Width` | `True` | `btn-fill` |
| | `False` | *(default — no class)* |
| `Icon Position` | `Leading` | `btn-icon-leading` |
| | `Trailing` | `btn-icon-trailing` |
| | `None` | *(default — no class)* |
| `State` | `Disabled` | `disabled` attribute on `<button>` |
| | `Default/Hover/Pressed` | *(CSS handles automatically)* |
| `Label#216:33` | *(text)* | text content of inner `<span>` |

**Default instantiation:**
```js
{ nodeId: "15102:32701", variant: { Type: "Primary", Size: "300 (Small)", "Fixed Width": "False", "Icon Position": "None", State: "Default" }, overrides: { "Label#216:33": "Save" } }
```

---

### Circle Button
**Figma:** `Circle Button` · nodeId `270:5395` · COMPONENT_SET

| Figma prop | Values | CSS equivalent |
|---|---|---|
| `Type` | `Transactional` | `btn-circle-team` *(brand fill)* |
| | `Primary` | `btn-circle-team` |
| | `Neutral` | `btn-circle-neutral` |
| | `Secondary` | `btn-circle-neutral-secondary` *(outlined)* |
| | `Tertiary` | `btn-circle-neutral-tertiary` *(ghost)* |
| | `Destructive` | `btn-circle-destructive` |
| | `White` | `btn-circle-white` |
| | `Black` | `btn-circle-black` |
| | `White Tertiary` | `btn-circle-white-tertiary` |
| `Size` | `700 (Large)` | `btn-circle-700` *(56×56, 32px icon)* |
| | `300 (Small)` | `btn-circle-300` *(40×40, 24px icon)* |
| `Content Type` | `Icon` | *(default — icon inside `btn-icon material-symbols-rounded`)* |
| | `Number` | *(number text instead of icon)* |
| `State` | `Disabled` | `disabled` attribute |

**Default instantiation:**
```js
{ nodeId: "270:5395", variant: { Type: "Neutral", Size: "300 (Small)", "Content Type": "Icon", State: "Default" } }
```

---

### Text Pair
**Figma:** `Text Pair` · nodeId `724:57049` · COMPONENT_SET

Size scale maps 1:1 with the CSS text pair system.

| Figma prop | Values | CSS equivalent |
|---|---|---|
| `Size` | `9000` | `.card-text-pair` with `display600` + `labelRegular50` |
| | `8000` | `display400` + `labelRegular40` |
| | `7000` | `title70` + `labelRegular30` |
| | `6000` | `title60` + `labelRegular20` |
| | `5000` | `title50` + `labelRegular20` *(most common)* |
| | `4000` | `labelBold40` + `labelRegular20` |
| | `3000` | `labelBold30` + `labelRegular10` |
| | `2000` | `labelBold20` + `labelRegular10` |
| | `1000` | `labelBold10` + `labelRegular10` |
| `Alignment` | `Left/Center/Right` | `text-align` on wrapper |
| `Invert` | `True` | `.text-inverted` color context |
| `Fixed Width` | `True` | explicit `width` on wrapper |
| `Sublabel?#9849:436` | `false` | omit sublabel element |

**Default instantiation:**
```js
{ nodeId: "724:57049", variant: { Size: "5000", Alignment: "Left", "Fixed Width": "False", Invert: "False", "Ignore Mode": "False" }, overrides: { "Label#784:0": "Card Title", "Sublabel#784:217": "Metadata or date" } }
```

---

### List Row
**Figma:** `List Row` · nodeId `786:8528` · COMPONENT_SET

| Figma prop | Values | CSS equivalent |
|---|---|---|
| `Leading?` | `True` | include `.leading.leading-gap-*` slot |
| | `False` | omit `.leading` slot |
| `Trailing?` | `True` | include `.trailing.trailing-gap-*` slot |
| | `False` | omit `.trailing` slot |
| `Sublabel` | `True` | include sublabel in `.list-row-text-pair` |
| | `False` | label only |
| `Tags?` | `True` | include `.tag-group` in `.list-row-content` |
| `Info Section?` | `True` | include `.info-block` in `.list-row-content` |
| `Tappable` | `True` | *(default — list row is tappable)* |
| | `False` | `.not-tappable` on `.list-row` |
| `State` | `Default/Hover/Pressed` | CSS surface class handles |
| `Leading#815:0` | INSTANCE_SWAP | swap with leading subcomponent |
| `Trailing#815:49` | INSTANCE_SWAP | swap with trailing subcomponent |

**Default instantiation:**
```js
{ nodeId: "786:8528", variant: { "Leading?": "True", "Trailing?": "True", Sublabel: "True", "Tags?": "False", "Info Section?": "False", State: "Default", Tappable: "True" } }
```

---

### Selector
**Figma:** `Selector` · nodeId `1805:10145` · COMPONENT_SET

| Figma prop | Values | CSS equivalent |
|---|---|---|
| `State` | `Default` | `.selector.surface-washNeutral.scale-700` |
| | `Selected` | add `.is-selected` |
| | `Disabled` | add `.is-disabled` (omit `scale-700`) |
| | `Hover/Pressed` | CSS handles automatically |
| `Sublabel` | `True/False` | sublabel in inner `.list-row-text-pair` |

**Default instantiation:**
```js
{ nodeId: "1805:10145", variant: { State: "Default", Sublabel: "False" } }
```

---

### Input (Web)
**Figma:** `Input (Web)` · nodeId `2177:20368` · COMPONENT_SET

| Figma prop | Values | CSS equivalent |
|---|---|---|
| `State` | `Default` | default `.input-field` |
| | `Disabled` | `.input-field.is-disabled` |
| `Error` | `True` | `.input-field.is-error` |
| | `False` | *(default)* |
| `Filled` | `True` | `.input-field.has-value` |
| | `False` | *(default)* |
| `Label?#2063:49` | `true` | include `.input-label-row` wrapper |
| `Message?#2063:53` | `true` | include `.input-message` paragraph |
| `Icon?#2066:56` | `true` | include `.input-icon.material-symbols-rounded` span |
| `Link#2063:50` | `true` | include `.input-link` anchor in label row |
| `Button?#2066:65` | `true` | include `.input-clear` button in control |
| `Label#2063:52` | *(text)* | `<label>` text content |
| `Placeholder#2073:74` | *(text)* | `placeholder` attribute |
| `Entry#2073:107` | *(text)* | input `value` |
| `Message#2063:48` | *(text)* | `.input-message` text content |

**Default instantiation:**
```js
{ nodeId: "2177:20368", variant: { Filled: "False", Typing: "False", State: "Default", Error: "False" }, overrides: { "Label#2063:52": "Email", "Placeholder#2073:74": "you@example.com" } }
```

---

### Tag
**Figma:** `Tag` · nodeId `5298:48141` · COMPONENT_SET

| Figma prop | Values | CSS equivalent |
|---|---|---|
| `Team Color` | `True` | `.tag.tag-team-color` |
| | `False` | `.tag` *(neutral)* |
| `Icon Position` | `None` | `.tag` *(no icon modifier)* |
| | `Leading` | `.tag.tag-icon-leading` |
| | `Trailing` | `.tag.tag-icon-trailing` |
| `Label#5298:6` | *(text)* | inner `<span class="labelBold20">` |
| `Icon#5301:7` | INSTANCE_SWAP | `<span class="icon icon-200 material-symbols-rounded">` |

**Default instantiation:**
```js
{ nodeId: "5298:48141", variant: { "Team Color": "False", "Icon Position": "None" }, overrides: { "Label#5298:6": "VIP" } }
```

---

### Tile
**Figma:** `Tile` · nodeId `824:24116` · COMPONENT_SET

| Figma prop | Values | CSS equivalent |
|---|---|---|
| `Button` | `False` | `.tile.surface-card.scale-700` *(tile is tap target)* |
| | `True` | `.tile` *(no surface/scale — button is CTA)* |
| `Price` | `True` | include `<span class="labelBold20 text-success">From $N</span>` |
| | `False` | omit price |
| `Tag` | `True` | include `.tile-tag` label |
| | `False` | omit tag |

**Default instantiation:**
```js
{ nodeId: "824:24116", variant: { Price: "True", Tag: "False", Button: "False" } }
```

---

### Buy — Single Event Row
**Figma:** `Buy - Single Event Row` · nodeId `9292:9626` · COMPONENT_SET

| Figma prop | Values | CSS equivalent |
|---|---|---|
| `Offer State` | `Featured Only` | `.event-row-top.surface-section` only; no bottom section |
| | `Featured and Others` | `.event-row-top.surface-section` + `.event-row-bottom.surface-section` |
| | `No Featured Offers` | `.event-row-top` (no surface) + `.event-row-bottom.surface-section` |
| | `Sold Out` | `.event-row-top` only; `.list-row.not-tappable`; "Sold Out" trailing text |
| | `Coming Soon` | `.event-row-top` only; `.list-row.not-tappable`; `.event-row-coming-soon` trailing |
| `Platform` | `Mobile` | default CSS (max 499px layout) |
| | `Tablet/Desktop` | ≥500px responsive breakpoint — automatic via CSS |
| `Team ID` | `wolves`, `jump`, `courage`, etc. | `data-theme` on `<html>` — sets `--org-surface` automatically |

**Default instantiation:**
```js
{ nodeId: "9292:9626", variant: { "Team ID": "wolves", Platform: "Mobile", "Offer State": "Featured Only" } }
```

---

### Inventory — List Row
**Figma:** `Inventory - List Row` · nodeId `9777:47202` · COMPONENT_SET

| Figma prop | Values | CSS equivalent |
|---|---|---|
| `Mobile/Desktop` | `False` | Mobile — `leading-image-small` + `leading-gap-lg` |
| | `True` | Desktop — `leading-image-large` + `leading-gap-xl` |
| `Far/Close` | `False` | Far perspective — `data-vfs="far"` |
| | `True` | Close perspective — `data-vfs="close"` |
| `Option` | `A`, `B`, `C` | row index (0, 1, 2) — `data-vfs-index` attribute |
| `Team ID` | `wolves`, `jump`, etc. | `data-theme` on `<html>` |

**Default instantiation:**
```js
{ nodeId: "9777:47202", variant: { "Team ID": "wolves", Option: "A", "Mobile/Desktop": "False", "Far/Close": "False" } }
```

---

### Drop Down (Web)
**Figma:** `Drop Down (Web)` · nodeId `1805:10500` · COMPONENT_SET

**Maps to:** `.input-field.input-select` in Diet AirDS

The Figma component is more fully featured (custom option rendering, search, multi-select variants) than the CSS select. Use `.input-field.input-select` as the standard equivalent — it covers the common case: styled native select, chevron indicator, placeholder state, error/disabled states.

| Figma prop | CSS equivalent |
|---|---|
| `State: Default` | default `.input-field.input-select` |
| `State: Disabled` | `.input-field.input-select.is-disabled` |
| `Error: True` | `.input-field.input-select.is-error` |
| `Filled: True` | `.input-field.input-select.has-value` |

**⚠️ Mismatch note:** If a Figma spec uses `Drop Down (Web)` with custom search or multi-select behavior, it has no CSS equivalent yet — flag it rather than approximating.

**Default instantiation:**
```js
{ nodeId: "1805:10500", variant: { State: "Default", Filled: "False", Error: "False" } }
```

---

### Quantity Row
**Figma:** `Quantity Row` · nodeId `9811:25828` · COMPONENT_SET

Web platform variant maps to the `.stepper` subcomponent inside a `.list-row`.

| Figma prop | Values | CSS equivalent |
|---|---|---|
| `Platform` | `Web` | `.stepper` in `.trailing.trailing-gap-lg` |
| | `iOS`/`Android` | native platform — no web CSS equivalent |
| `Multiple Rows` | `True` | multiple `.list-row` rows with steppers |
| | `False` | single row |

**Default instantiation (web):**
```js
{ nodeId: "9811:25828", variant: { Platform: "Web", "Multiple Rows": "False" } }
```

---

### Toast
**Figma:** `Toast` · nodeId `14832:535` · COMPONENT_SET

| Figma prop | Values | CSS equivalent |
|---|---|---|
| `Type` | `Neutral` | `--text-primary` / `--bg-surface` colors |
| | `Error` | `--status-error` |
| | `Success` | `--status-success` |
| `Close#14806:0` | `true` | include close button |

**Note:** Toast has no dedicated CSS component class yet — implement using card + status token colors if needed.

---

## Navigation Components

Components from **06 Web Navigation** (`9552:14954`) and **01 Components** navigation entries.

### Top Bar
**Figma:** `Top Bar` · nodeId `9562:74597` · COMPONENT_SET · page `06 Web Navigation`
**Maps to:** `.top-bar` in Diet AirDS

| Figma prop | Values | CSS equivalent |
|---|---|---|
| `Platform` | `Phone` | `.top-bar` — `px-16px` (mobile breakpoint, `shortName` visible) |
| | `Tablet` | `.top-bar` — `px-48px` (≥768px breakpoint, `fullName` visible) |
| | `Desktop` | `.top-bar` — `px-64px` (≥1280px breakpoint, `fullName` visible) |

**HTML structure:**
- `.top-bar-logo` — 64×64 `<img>`, `object-fit: contain`
- `.top-bar-name display100` — team name container; use `.top-bar-name-short` + `.top-bar-name-full` spans for responsive switching
- `.top-bar-actions` — trailing slot for auth/icon buttons

**Default instantiation:**
```js
{ nodeId: "9562:74597", variant: { Platform: "Phone" } }
```

**Top Bar Buttons (auth slot subcomponent):**
```js
{ nodeId: "9562:59132" }  // auth/action slot — swap or override for specific auth state
```

---

### Tabs
**Figma:** `Tabs` · nodeId `910:2638` · COMPONENT_SET · page `01 Components`
**Maps to:** `.tabs` + `.tab` in Diet AirDS

| Figma prop | Values | CSS equivalent |
|---|---|---|
| `Brand Color` | `True` | default `.tabs` — active tab uses `--brand-interactive` |
| | `False` | `.tabs.tabs-neutral` — active tab uses `--neutral-1000` |
| *(active tab)* | *(per tab)* | add `.is-active` or `aria-selected="true"` to active `.tab` |

**Typography handled internally:** 16px / 400 inactive, 16px / 600 active.
**Container:** `border-bottom: 1px solid --border-default`; active tab `margin-bottom: -1px` bleeds through.

**Default instantiation:**
```js
{ nodeId: "910:2638", variant: { "Brand Color": "True" } }
```

---

### Steps
**Figma:** `Steps` · nodeId `9586:31206` · COMPONENT_SET · page `01 Components`
**Maps to:** `.steps` + `.step.step-[state]` + `.step-connector` in Diet AirDS

| Figma prop / step state | CSS equivalent |
|---|---|
| Step state: Completed | `.step.step-completed` — `--status-success` circle + filled check icon |
| Step state: In Progress | `.step.step-active` — `--neutral-1000` circle + white bold number |
| Step state: Not Started | `.step.step-pending` — outlined circle + muted number |
| `Success Color: Team A` | `.steps.steps-brand` — completed uses `--brand-interactive` |
| `Success Color: Utility` | `.steps` *(default)* — completed uses `--status-success` |

**HTML anatomy:**
```html
<div class="step step-completed">
  <div class="step-circle">
    <span class="icon icon-100 icon-filled">check</span>
  </div>
  <span class="step-label">Label</span>
</div>
<span class="step-connector icon">chevron_right</span>
```

**Mobile (<500px):** step labels hidden automatically.

**Default instantiation (3-step, step 1 active):**
```js
{ nodeId: "9586:31206" }  // variant props: step count and state are per-instance
```

**Known variant nodeIds:**
- `9586:31198` — 3-step, step 1 current (reveals In Progress + Not Started states)
- `9586:31191` — 3-step, step 2 current (reveals Completed state)

---

### Header (Page Header)
**Figma:** `Header` · nodeId `9588:73094` · COMPONENT_SET · page `06 Web Navigation`
**Maps to:** `.page-header` + `.page-header-content` in Diet AirDS

| Figma prop | Values | CSS equivalent |
|---|---|---|
| `Navigation` | `None` | `.page-header` only, no modifier |
| | `Tabs` | `.page-header.has-tabs` + `.tabs` inside |
| | `Steps` | `.page-header.has-steps` + `.steps` inside |
| `Small/Large` | `False` *(default)* | `display500` + `labelRegular40` (Size 8000) |
| | `True` | `display600` + `labelRegular50` (Size 9000) |
| `Container` | `Narrow` | `.container-compact` on `.card-text-pair` (max-width ~512px) |
| | `Medium/Wide/Extra Wide` | `.container-narrow` / `.container-medium` / `.container-wide` |

**Padding alignment (matches top bar at each breakpoint):**
- Mobile: `px-0` outer + `px-16px` content = 16px from edge
- Tablet: `px-32px` outer + `px-16px` content = 48px from edge
- Desktop: `px-48px` outer + `px-16px` content = 64px from edge

**⚠️ `.has-tabs` suppresses `.page-header` `border-bottom`** — the `.tabs` component provides the hairline divider. `.has-steps` retains the page-header border.

**Default instantiation:**
```js
{ nodeId: "9588:73094", variant: { Navigation: "None", "Small/Large": "False", Container: "Narrow" } }
```

---

## Page Reference Map

| Page | Page ID | What's there |
|---|---|---|
| 01 Components | `63:7729` | All primary component sets listed above |
| 02 Templates | `815:15011` | Composed templates (e.g. Inventory List) |
| 03 Subcomponents | `815:3133` | Leading/trailing subcomponents, Info Block, Info Item, Tags |
| 04 iOS Navigation | `895:24887` | Native nav — no web CSS equivalent |
| 05 Android Navigation | `2610:46387` | Native nav — no web CSS equivalent |
| 06 Web Navigation | `9552:14954` | Web nav bar — Top Bar (`9562:74597`) and Header (`9588:73094`) mapped |
| 07 Icons | `64:8843` | Custom SVG icons (supplement to Material Symbols) |
| 08 Team Logos | `732:61068` | Per-league/team logo components |

### Subcomponents (page 03 — `815:3133`)

| Component | nodeId | Notes |
|---|---|---|
| Info Item | `918:8188` | Single icon item in an info block |
| Info Block | `918:8308` | Row of info items |
| Tags (subcomponent) | `1422:8524` | Tag group used inside list row content |

---

## Other Components on Page 01 (not yet fully mapped)

| Component | nodeId | Notes |
|---|---|---|
| Chip | `664:34933` | Distinct from Tag — review if CSS `.chip` class exists |
| Dynamic Sheet (iOS) | `3095:64688` | Native — no web equivalent |
| Half Sheet (iOS) | `3102:64878` | Native — no web equivalent |
| Modal (Web) | `3102:67399` | No dedicated CSS modal class yet |
| Action Tile | `9485:19905` | Review against `.tile` |
| Action Row | `9485:19970` | Review against `.list-row` |
| Matchup | `9846:47837` | Matchup panel used inside `.tile` header |
| Opponent | `9846:47783` | Opponent logo element |
| Game Summary | `9567:25546` | Complex — no CSS equivalent yet |
| GC Card | `12432:138088` | Game center card |
| VFS | `9623:29891` | View From Seat — maps to VFS image pattern |
| Team Logo | `9662:55616` | Per-team logo with spacing container |
| Smooth Gradient | `8445:13109` | Overlay gradient utility |

---

## Known Gaps (Figma has it, CSS doesn't)

| Figma component/variant | Notes |
|---|---|
| `Toast` | No CSS toast component — use status tokens manually |
| `Modal (Web)` | No CSS modal component yet |
| `Game Summary`, `GC Card` | Domain-specific — assess if needed for web |
