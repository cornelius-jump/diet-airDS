import { Link } from 'react-router-dom'
import DocShell from '../../layouts/DocShell'

export default function DocHowItWorksPage() {
  return (
    <DocShell>
      {/* PAGE INTRO */}
      <div className="container-wide py-large">
        <h1 className="display500 mb-200">How It Works</h1>
        <p className="bodyRegular30 text-primary doc-prose">
          Diet AirDS is a React component library built on CSS custom properties. Thirteen typed
          components handle layout, theming, and interaction — no CSS classes to memorize, no
          hardcoded values. Switch the theme and mode above to see everything update live.
        </p>
      </div>

      {/* INSTALLATION */}
      <div className="container-wide py-large border-top" id="installation">
        <h2 className="title80">Installation &amp; Setup</h2>
        <p className="bodyRegular30 text-primary doc-prose mt-100">
          Install the package, then wrap your app in <code>ThemeProvider</code>. That's it — all
          components are ready to use.
        </p>

        <h3 className="title50 mt-400 mb-100">Install</h3>
        <div className="doc-code-block">
          <code>npm install diet-airds</code>
        </div>

        <h3 className="title50 mt-400 mb-100">Wrap your app</h3>
        <div className="doc-code-block">
          <code>{`import { ThemeProvider } from 'diet-airds'

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  )
}`}</code>
        </div>

        <h3 className="title50 mt-400 mb-100">Import components</h3>
        <div className="doc-code-block">
          <code>{`import { Button, ListRow, TextPair, Input, Select } from 'diet-airds'`}</code>
        </div>

        <div className="doc-note mt-200">
          <p className="bodyRegular30">
            <strong>No className or style props.</strong> All styling is driven by typed variant
            props — <code>variant="primary"</code>, <code>size="large"</code>, etc. This ensures
            every component stays consistent across all 10 teams in both light and dark mode.
          </p>
        </div>
      </div>

      {/* THEMING */}
      <div className="container-wide py-large border-top" id="overview">
        <h2 className="title80">Theming</h2>
        <p className="bodyRegular30 text-primary doc-prose mt-100">
          Everything is controlled by two attributes on the <code>&lt;html&gt;</code> element —
          <strong> theme</strong> (which team) and <strong>mode</strong> (light or dark).{' '}
          <code>ThemeProvider</code> manages these attributes for you.
        </p>

        <div className="doc-note mt-200">
          <p className="bodyRegular30">
            <strong><code>data-theme</code></strong> — which team's brand to use (colors, display
            font, button shape)
          </p>
          <p className="bodyRegular30 mt-50">
            <strong><code>data-mode</code></strong> — <code>light</code> or <code>dark</code>
          </p>
        </div>

        <h3 className="title50 mt-400 mb-100">Reading and changing the theme</h3>
        <p className="bodyRegular30 text-primary doc-prose mb-100">
          Use the <code>useTheme</code> hook anywhere inside <code>ThemeProvider</code> to read or
          update the active team and mode.
        </p>
        <div className="doc-code-block">
          <code>{`import { useTheme } from 'diet-airds'

function ThemeSwitcher() {
  const { theme, mode, setTheme, setMode } = useTheme()

  return (
    <>
      <button onClick={() => setTheme('wolves')}>Wolves</button>
      <button onClick={() => setTheme('athletics')}>Athletics</button>
      <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
        Toggle Mode
      </button>
    </>
  )
}`}</code>
        </div>

        <div className="doc-table-wrap mt-300">
          <table className="doc-table">
            <thead><tr><th>Value</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>theme</code></td><td>string</td><td>Active team identifier (e.g. <code>'wolves'</code>)</td></tr>
              <tr><td><code>mode</code></td><td><code>'light' | 'dark'</code></td><td>Active color mode</td></tr>
              <tr><td><code>setTheme(team)</code></td><td>function</td><td>Switch the active team</td></tr>
              <tr><td><code>setMode(mode)</code></td><td>function</td><td>Switch light/dark mode</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* EXPORTS */}
      <div className="container-wide py-large border-top" id="components">
        <h2 className="title80">All Exports</h2>
        <p className="bodyRegular30 text-primary doc-prose mt-100">
          Thirteen components plus the theme hook, all exported from <code>'diet-airds'</code>.
        </p>

        <div className="doc-table-wrap mt-200">
          <table className="doc-table">
            <thead>
              <tr>
                <th>Export</th>
                <th>Category</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><code>ThemeProvider</code></td><td>Setup</td><td>Required app wrapper — manages data-theme and data-mode</td></tr>
              <tr><td><code>useTheme</code></td><td>Hook</td><td>Read and update the active theme and mode</td></tr>
              <tr><td><code>Button</code></td><td>Action</td><td>8 variants, 3 sizes, icon placement, fill mode</td></tr>
              <tr><td><code>CircleButton</code></td><td>Action</td><td>Icon-only circle button with accessible aria-label</td></tr>
              <tr><td><code>Icon</code></td><td>Visual</td><td>Material Symbols Rounded — size and outlined props</td></tr>
              <tr><td><code>Tag</code></td><td>Label</td><td>Static label tag, optional team color tint</td></tr>
              <tr><td><code>Chip</code></td><td>Label</td><td>Interactive chip for filters and toggles</td></tr>
              <tr><td><code>ListRow</code></td><td>Layout</td><td>3-slot row (leading / content / trailing)</td></tr>
              <tr><td><code>TextPair</code></td><td>Layout</td><td>Label + sublabel pair for list row main content</td></tr>
              <tr><td><code>TrailingText</code></td><td>Layout</td><td>Right-aligned label + sublabel for trailing slot</td></tr>
              <tr><td><code>LeadingImage</code></td><td>Layout</td><td>Image in leading slot (square / small / large)</td></tr>
              <tr><td><code>LeadingLogo</code></td><td>Layout</td><td>Team logo div in leading slot (CSS variable driven)</td></tr>
              <tr><td><code>CircleContainer</code></td><td>Layout</td><td>Circle container for icon or letter in leading slot</td></tr>
              <tr><td><code>CardClosed</code></td><td>Layout</td><td>Single-surface card with header / body / footer</td></tr>
              <tr><td><code>CardOpen</code></td><td>Layout</td><td>Multi-section card; each section gets its own surface</td></tr>
              <tr><td><code>CardSection</code></td><td>Layout</td><td>Standalone interactive section within an open card</td></tr>
              <tr><td><code>EventRow</code></td><td>Sports</td><td>Ticket event row — 5 states including sold-out and coming-soon</td></tr>
              <tr><td><code>Selector</code></td><td>Selection</td><td>Selectable container with active state indicator</td></tr>
              <tr><td><code>Tile</code></td><td>Layout</td><td>Visual-header + info tile card</td></tr>
              <tr><td><code>Input</code></td><td>Form</td><td>Text input with label, states, icon, and clearable</td></tr>
              <tr><td><code>Select</code></td><td>Form</td><td>Select dropdown with label, states, and icon</td></tr>
              <tr><td><code>TopBar</code></td><td>Navigation</td><td>Sticky navigation bar with logo and actions slot</td></tr>
              <tr><td><code>Tabs</code></td><td>Navigation</td><td>Tab strip with active indicator, brand or neutral variant</td></tr>
              <tr><td><code>Steps</code></td><td>Navigation</td><td>Step progress indicator — completed / active / pending states</td></tr>
              <tr><td><code>PageHeader</code></td><td>Navigation</td><td>Page title block — supports tabs and steps</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* CSS FOUNDATION */}
      <div className="container-wide py-large border-top" id="load-order">
        <h2 className="title80">CSS Foundation — Underlying System</h2>
        <p className="bodyRegular30 text-primary doc-prose mt-100">
          React components automatically import the full CSS foundation — you don't need to load
          these files manually when using the npm package. This reference is useful if you're
          consuming the raw CSS directly, writing custom styles that reference the token variables,
          or integrating with a non-React stack.
        </p>
        <p className="bodyRegular30 text-primary doc-prose mt-100">
          These 15 files must be loaded in this exact order because later files reference tokens
          defined in earlier ones.
        </p>

        <div className="doc-table-wrap mt-200">
          <table className="doc-table">
            <thead>
              <tr>
                <th>#</th>
                <th>File</th>
                <th>What It Does</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td><code>design-tokens-master.css</code></td><td>Core color tokens, brand colors per team, neutral/inverted scales, semantic tokens</td></tr>
              <tr><td>2</td><td><code>spacing-tokens.css</code></td><td>Fixed spacing scale (2px–80px) and responsive spacing tokens</td></tr>
              <tr><td>3</td><td><code>container-tokens.css</code></td><td>Max-width container classes (640px–1600px) with responsive padding</td></tr>
              <tr><td>4</td><td><code>border-effects-tokens.css</code></td><td>Border radius, border weight, drop shadow tokens and utility classes</td></tr>
              <tr><td>5</td><td><code>fonts.css</code></td><td>@font-face declarations for all team display fonts</td></tr>
              <tr><td>6</td><td><code>text-styles-system.css</code></td><td>Typography classes (display, title, label, body) and text utility classes</td></tr>
              <tr><td>7</td><td><code>icons.css</code></td><td>Icon size tokens and utility classes for Material Symbols Rounded</td></tr>
              <tr><td>8</td><td><code>card-components.css</code></td><td>Card layout patterns (closed, open, interactive) and card grid classes</td></tr>
              <tr><td>9</td><td><code>interactive-tokens.css</code></td><td>Interactive surface styles (12 types) and scale transforms (3 levels)</td></tr>
              <tr><td>10</td><td><code>button-components.css</code></td><td>Button system: 8 types, 3 sizes, icon variants, circle buttons, groups</td></tr>
              <tr><td>11</td><td><code>list-row-components.css</code></td><td>List row system: 3-slot architecture, subcomponents (tags, switches, steppers)</td></tr>
              <tr><td>12</td><td><code>input-components.css</code></td><td>Input field system: text inputs, select dropdowns, states (error, disabled, has-value)</td></tr>
              <tr><td>13</td><td><code>tag-chip-components.css</code></td><td>Tag &amp; chip system: static tags for labels, interactive chips for filters/toggles</td></tr>
              <tr><td>14</td><td><code>nav-components.css</code></td><td>Top Bar, Tabs, Steps, and Page Header navigation components</td></tr>
              <tr><td>15</td><td><code>boilerplate.css</code></td><td>CSS reset, layout helpers, all spacing utility classes, grid utilities, responsive show/hide</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* PREV / NEXT */}
      <div className="doc-prevnext">
        <Link className="doc-prevnext-prev surface-ghost scale-700" to="/documentation">
          <span className="icon">arrow_back</span>
          <div className="doc-prevnext-text">
            <span className="doc-prevnext-label">Previous</span>
            <span className="doc-prevnext-title">Home</span>
          </div>
        </Link>
        <Link className="doc-prevnext-next surface-ghost scale-700" to="/documentation/foundations">
          <div className="doc-prevnext-text">
            <span className="doc-prevnext-label">Next</span>
            <span className="doc-prevnext-title">Foundations</span>
          </div>
          <span className="icon">arrow_forward</span>
        </Link>
      </div>
    </DocShell>
  )
}
