import { Link } from 'react-router-dom'
import DocShell from '../../layouts/DocShell'

export default function DocReferencePage() {
  return (
    <DocShell>
      {/* PAGE INTRO */}
      <div className="container-wide py-large">
        <h1 className="display500 mb-200">Reference</h1>
        <p className="bodyRegular30 text-primary doc-prose">
          Layout utilities, the 10 supported team themes, responsive breakpoints, and a quick
          decision guide for component selection. Use this page as a lookup when you're not
          sure which component or token to reach for.
        </p>
      </div>

      {/* LAYOUT */}
      <div className="container-wide py-large border-top" id="layout">
        <h2 className="title80">Layout</h2>

        <h3 className="title50 mt-400 mb-100">Flexbox Helpers</h3>
        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Class</th><th>Effect</th></tr></thead>
            <tbody>
              <tr><td><code>.flex-center</code></td><td>Centers content both directions + min-height 100vh</td></tr>
              <tr><td><code>.flex-column</code></td><td>flex-direction: column</td></tr>
              <tr><td><code>.flex-row</code></td><td>flex-direction: row</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="title50 mt-400 mb-100">Grid Columns (responsive)</h3>
        <div className="doc-preview">
          <span className="doc-preview-label">Live — resize browser</span>
          <div className="grid gap-card grid-cols-3-desktop grid-cols-2-tablet grid-cols-1-mobile">
            {[1,2,3,4,5,6].map(n => (
              <div key={n} className="rounded-100 p-200" style={{ background: 'var(--neutral-100)', textAlign: 'center' }}>
                <span className="labelBold20">{n}</span>
              </div>
            ))}
          </div>
          <p className="labelRegular10 text-secondary mt-100">3 cols desktop → 2 cols tablet → 1 col mobile</p>
        </div>

        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Class</th><th>Breakpoint</th><th>Columns</th></tr></thead>
            <tbody>
              <tr><td><code>.grid-cols-1-mobile</code></td><td>&lt; 500px</td><td>1</td></tr>
              <tr><td><code>.grid-cols-2-tablet</code></td><td>500–1099px</td><td>2</td></tr>
              <tr><td><code>.grid-cols-3-tablet</code></td><td>500–1099px</td><td>3</td></tr>
              <tr><td><code>.grid-cols-2-desktop</code></td><td>1100px+</td><td>2</td></tr>
              <tr><td><code>.grid-cols-3-desktop</code></td><td>1100px+</td><td>3</td></tr>
              <tr><td><code>.grid-cols-4-desktop</code></td><td>1100px+</td><td>4</td></tr>
              <tr><td><code>.grid-auto-fit</code></td><td>All</td><td>Auto-fill, 300px min</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="title50 mt-400 mb-100">Responsive Show/Hide</h3>
        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Class</th><th>Visible On</th></tr></thead>
            <tbody>
              <tr><td><code>.hide-mobile</code></td><td>Hidden below 500px</td></tr>
              <tr><td><code>.hide-tablet</code></td><td>Hidden 500–1099px</td></tr>
              <tr><td><code>.hide-desktop</code></td><td>Hidden 1100px+</td></tr>
              <tr><td><code>.hide-mobile-tablet</code></td><td>Hidden below 1100px</td></tr>
              <tr><td><code>.show-mobile</code></td><td>Shown only below 500px</td></tr>
              <tr><td><code>.show-tablet</code></td><td>Shown only 500–1099px</td></tr>
              <tr><td><code>.show-desktop</code></td><td>Shown only 1100px+</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* TEAMS */}
      <div className="container-wide py-large border-top" id="teams">
        <h2 className="title80">Teams</h2>
        <p className="bodyRegular30 text-primary doc-prose mt-100">
          Set the active team by changing <code>data-theme</code> on the root element. Each team
          defines its display font, brand colors, and button border radius.
        </p>

        <div className="doc-table-wrap mt-300">
          <table className="doc-table">
            <thead>
              <tr>
                <th>Team</th>
                <th>data-theme</th>
                <th>Display Font</th>
                <th>Weight</th>
                <th>Brand Core</th>
                <th>Brand Accent</th>
                <th>Button Radius</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Timberwolves</td><td><code>wolves</code></td><td>Futura Wolves Autocaps</td><td>800</td><td>#266092</td><td>#79BC43</td><td>8px</td></tr>
              <tr><td>Lynx</td><td><code>lynx</code></td><td>Futura Caps</td><td>700</td><td>#266092</td><td>#79BC43</td><td>12px</td></tr>
              <tr><td>Courage</td><td><code>courage</code></td><td>Public Caps Pro</td><td>800</td><td>#AB0033</td><td>#B4A269</td><td>100px</td></tr>
              <tr><td>Summit FC</td><td><code>summit</code></td><td>MARTIN Caps Custom</td><td>400</td><td>#20604E</td><td>#E6B93F</td><td>8px</td></tr>
              <tr><td>Bucknell</td><td><code>bucknell</code></td><td>Teko Caps</td><td>700</td><td>#003865</td><td>#E87722</td><td>100px</td></tr>
              <tr><td>Sounders</td><td><code>sounders</code></td><td>Futura Caps</td><td>700</td><td>#2DC84D</td><td>#7CE0D3</td><td>100px</td></tr>
              <tr><td>Reign</td><td><code>reign</code></td><td>Manner Pro</td><td>700</td><td>#232F79</td><td>#E0BE85</td><td>100px</td></tr>
              <tr><td>NCFC</td><td><code>ncfc</code></td><td>Public Caps Pro</td><td>900</td><td>#00416B</td><td>#B4A269</td><td>100px</td></tr>
              <tr><td>Jump</td><td><code>jump</code></td><td>Inter</td><td>900</td><td>#657DFF</td><td>#CCFF00</td><td>100px</td></tr>
              <tr><td>Athletics</td><td><code>athletics</code></td><td>Proxima Caps</td><td>900</td><td>#006141</td><td>#FFB819</td><td>100px</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="title50 mt-400 mb-100">Testing Across Themes</h3>
        <div className="doc-code-block">
          <code>{'<!-- Light Mode - Wolves -->\n<html data-theme="wolves" data-mode="light">\n\n<!-- Dark Mode - Athletics -->\n<html data-theme="athletics" data-mode="dark">'}</code>
        </div>

        <h3 className="title50 mt-400 mb-100">Team Logo Assets</h3>
        <p className="bodyRegular30 text-primary doc-prose mb-100">
          Team logos are hosted as SVGs in the <code>images/</code> folder.
        </p>
        <div className="doc-table-wrap mt-200">
          <table className="doc-table">
            <thead><tr><th>Team</th><th>Filename</th><th>Hosted URL</th></tr></thead>
            <tbody>
              {[
                ['Timberwolves','wolves.svg'],['Lynx','lynx.svg'],['Courage','courage.svg'],
                ['Summit FC','summit.svg'],['Bucknell','bucknell.svg'],['NCFC','ncfc.svg'],
                ['Jump','jump.svg'],['Athletics','athletics.svg'],
              ].map(([team, file]) => (
                <tr key={file as string}>
                  <td>{team}</td>
                  <td><code>{file}</code></td>
                  <td>https://diet-air-ds.vercel.app/images/{file}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* BREAKPOINTS */}
      <div className="container-wide py-large border-top" id="breakpoints">
        <h2 className="title80">Breakpoints</h2>
        <p className="bodyRegular30 text-primary doc-prose mt-100">
          The system uses three breakpoints consistently across containers, spacing, grid
          utilities, and show/hide classes.
        </p>

        <div className="doc-table-wrap mt-300">
          <table className="doc-table">
            <thead><tr><th>Name</th><th>Range</th><th>Container Padding</th></tr></thead>
            <tbody>
              <tr><td>Mobile</td><td>0 – 499px</td><td>16px</td></tr>
              <tr><td>Tablet</td><td>500 – 1099px</td><td>24px</td></tr>
              <tr><td>Desktop</td><td>1100px+</td><td>32px (48px for maximum/extra-wide)</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* QUICK DECISIONS */}
      <div className="container-wide py-large border-top" id="decisions">
        <h2 className="title80">Quick Decisions</h2>
        <p className="bodyRegular30 text-primary doc-prose mt-100">Common questions answered quickly.</p>

        <div className="doc-decision-grid mt-300">
          {[
            {
              q: 'Which container should I use?',
              a: "Match content type to the table in Foundations. Articles get narrow, dashboards get extra-wide, most pages get .container or .container-wide.",
            },
            {
              q: 'Fixed or responsive spacing?',
              a: "If it's inside a component (padding, internal gaps), use fixed. If it's between components or sections, use responsive.",
            },
            {
              q: 'Display or title?',
              a: "Display is for big branded headlines (team font). Title is for structural headings within content (Inter Bold, same everywhere).",
            },
            {
              q: 'Label or body?',
              a: "Labels are for short UI text (buttons, nav, metadata) with tight 1.2 line-height. Body is for paragraphs and longer content with comfortable 1.5 line-height.",
            },
            {
              q: 'When do I use shadows?',
              a: "Only on sheets and modals. Never on regular cards — use --bg-surface and borders instead.",
            },
            {
              q: 'Which text pair?',
              a: "Match scale to context: 9000/8000 for heroes, 7000/6000 for section headers, 5000/4000 for cards, 3000–1000 for compact UI. Always wrap in .card-text-pair.",
            },
            {
              q: 'Which button type?',
              a: "Transactional for revenue, Primary for main action (1 per view), Secondary for alternatives, Tertiary for low-emphasis. .btn-white / .btn-white-tertiary on dark surfaces.",
            },
            {
              q: 'Surface token or button class?',
              a: "Use .btn classes for actual buttons. Use .surface-* + .scale-* for custom interactive elements (cards, tabs, chips, etc.).",
            },
            {
              q: '--brand-interactive or --color-interactive?',
              a: "Always use --brand-interactive and --brand-inverted. They flip automatically between light and dark mode. The --color-* equivalents are raw static theme values.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="doc-decision-card">
              <p className="title50">{q}</p>
              <p className="bodyRegular20">{a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div className="py-600" style={{ textAlign: 'center' }}>
        <p className="labelRegular20 text-secondary">Diet AirDS Documentation</p>
        <p className="labelRegular10 text-secondary mt-50">Switch themes and modes using the controls at the top of the page</p>
      </div>

      {/* PREV / NEXT */}
      <div className="doc-prevnext">
        <Link className="doc-prevnext-prev surface-ghost scale-700" to="/documentation/forms">
          <span className="icon">arrow_back</span>
          <div className="doc-prevnext-text">
            <span className="doc-prevnext-label">Previous</span>
            <span className="doc-prevnext-title">Forms</span>
          </div>
        </Link>
      </div>
    </DocShell>
  )
}
