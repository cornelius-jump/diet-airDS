import { Link } from 'react-router-dom'
import DocShell from '../../layouts/DocShell'

export default function DocHowItWorksPage() {
  return (
    <DocShell>
      {/* PAGE INTRO */}
      <div className="container-wide py-large">
        <h1 className="display500 mb-200">How It Works</h1>
        <p className="bodyRegular30 text-primary doc-prose">
          The design system is built on CSS custom properties and utility classes. Two HTML
          attributes on the root element control everything — theme and mode — and the entire
          UI responds automatically.
        </p>
      </div>

      {/* THEMING */}
      <div className="container-wide py-large border-top" id="overview">
        <h2 className="title80">Theming</h2>
        <p className="bodyRegular30 text-primary doc-prose mt-100">
          Everything is controlled by two HTML attributes on the root element:
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

        <p className="bodyRegular30 text-primary doc-prose mt-100">
          When you change either attribute, the entire UI updates automatically. You never
          hardcode colors, fonts, or spacing — you reference tokens instead.
        </p>

        <div className="doc-code-block mt-200">
          <code>&lt;html data-theme="wolves" data-mode="dark"&gt;</code>
        </div>
      </div>

      {/* CSS FILE LOAD ORDER */}
      <div className="container-wide py-large border-top" id="load-order">
        <h2 className="title80">CSS Files — Load Order Matters</h2>
        <p className="bodyRegular30 text-primary doc-prose mt-100">
          These 14 files make up the full system. They must be loaded in this exact order
          because later files reference tokens defined in earlier ones.
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
              <tr><td>14</td><td><code>boilerplate.css</code></td><td>CSS reset, layout helpers, all spacing utility classes, grid utilities, responsive show/hide</td></tr>
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
