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
| | `Black` | ⚠️ **No CSS equivalent** — not in design system |
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
| | `White Tertiary` | ⚠️ **No direct CSS class** — closest: `btn-circle-white-tertiary` if added |
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

## Page Reference Map

| Page | Page ID | What's there |
|---|---|---|
| 01 Components | `63:7729` | All primary component sets listed above |
| 02 Templates | `815:15011` | Composed templates (e.g. Inventory List) |
| 03 Subcomponents | `815:3133` | Leading/trailing subcomponents, Info Block, Info Item, Tags |
| 04 iOS Navigation | `895:24887` | Native nav — no web CSS equivalent |
| 05 Android Navigation | `2610:46387` | Native nav — no web CSS equivalent |
| 06 Web Navigation | `9552:14954` | Web nav bar |
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
| Tabs | `910:2638` | No CSS tab component yet |
| Drop Down (Web) | `1805:10500` | Likely maps to `.input-field.input-select` |
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
| Steps | `9586:31206` | Multi-step flow — no CSS component |
| Smooth Gradient | `8445:13109` | Overlay gradient utility |

---

## Known Gaps (Figma has it, CSS doesn't)

| Figma component/variant | Notes |
|---|---|
| Button `Type=Black` | No `btn-black` class in CSS |
| Circle Button `White Tertiary` | `btn-circle-white-tertiary` not defined in CSS |
| `Tabs` | No `.tabs` component in CSS system yet |
| `Toast` | No CSS toast component — use status tokens manually |
| `Modal (Web)` | No CSS modal component yet |
| `Steps` | No CSS steps/stepper-flow component |
| `Game Summary`, `GC Card` | Domain-specific — assess if needed for web |
