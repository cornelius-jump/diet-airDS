import { Link } from 'react-router-dom'
import DocShell from '../../layouts/DocShell'

export default function DocButtonsPage() {
  return (
    <DocShell>
      {/* PAGE INTRO */}
      <div className="container-wide py-large">
        <h1 className="display500 mb-200">Buttons</h1>
        <p className="bodyRegular30 text-primary doc-prose">
          Eight button types, three sizes, icon placement, and circle icon buttons. The .btn
          system handles all hover/press states, dark mode, and cross-team compatibility
          automatically — never hand-roll button styles.
        </p>
      </div>

      <div className="container-wide py-large border-top" id="buttons">
        <h2 className="title80">Buttons</h2>
        <p className="bodyRegular30 text-primary doc-prose mt-100">
          8 types, 3 sizes, icon variants, width modes, and circle buttons. All use{' '}
          <code>.btn</code> base class + type + size modifiers. Only one Transactional or
          Primary button per view.
        </p>

        <h3 className="title50 mt-400 mb-100">Button Types</h3>
        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>#</th><th>Class</th><th>Surface</th><th>Use For</th></tr></thead>
            <tbody>
              <tr><td>1</td><td><code>.btn-transactional</code></td><td>Transactional fill</td><td>Revenue actions — Buy, Purchase, Add to Cart</td></tr>
              <tr><td>2</td><td><code>.btn-primary</code></td><td>Primary fill</td><td>Main page action — Submit, Save, Confirm</td></tr>
              <tr><td>3</td><td><code>.btn-neutral</code></td><td>Neutral-1000 fill</td><td>High-contrast neutral CTA</td></tr>
              <tr><td>4</td><td><code>.btn-secondary</code></td><td>Outlined (neutral-300 border)</td><td>Supporting actions — Cancel, Back</td></tr>
              <tr><td>5</td><td><code>.btn-tertiary</code></td><td>Ghost (transparent)</td><td>Low-emphasis text actions</td></tr>
              <tr><td>6</td><td><code>.btn-destructive</code></td><td>Status-error fill</td><td>Dangerous actions — Delete, Remove</td></tr>
              <tr><td>7</td><td><code>.btn-white</code></td><td>White fill, black text</td><td>CTA on dark/brand surfaces</td></tr>
              <tr><td>8</td><td><code>.btn-white-tertiary</code></td><td>Ghost, white text</td><td>Low-emphasis on dark surfaces</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="title50 mt-400 mb-100">Live Preview — All Types at btn-300</h3>
        <div className="doc-preview">
          <span className="doc-preview-label">Live — hover me</span>
          <div className="demo-row">
            <button className="btn btn-transactional btn-300">Transactional</button>
            <button className="btn btn-primary btn-300">Primary</button>
            <button className="btn btn-neutral btn-300">Neutral</button>
            <button className="btn btn-secondary btn-300">Secondary</button>
            <button className="btn btn-tertiary btn-300">Tertiary</button>
            <button className="btn btn-destructive btn-300">Destructive</button>
          </div>
        </div>

        <h3 className="title50 mt-400 mb-100">Button Sizes</h3>
        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Class</th><th>Height</th><th>Horizontal Padding</th><th>Font</th><th>Use For</th></tr></thead>
            <tbody>
              <tr><td><code>.btn-700</code></td><td>56px</td><td>32px</td><td>16px Semi-Bold</td><td>Hero CTAs, full-width mobile buttons</td></tr>
              <tr><td><code>.btn-300</code></td><td>40px</td><td>24px</td><td>14px Semi-Bold</td><td>Standard buttons in forms and cards</td></tr>
              <tr><td><code>.btn-100</code></td><td>32px</td><td>16px</td><td>14px Semi-Bold</td><td>Compact UI, table actions, dense layouts</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="title50 mt-400 mb-100">White Buttons (for dark/brand surfaces)</h3>
        <div className="doc-preview dark-surface">
          <span className="doc-preview-label" style={{ color: 'var(--white-500)' }}>Live — dark surface</span>
          <div className="demo-row">
            <button className="btn btn-white btn-300">White</button>
            <button className="btn btn-white-tertiary btn-300">White Tertiary</button>
          </div>
        </div>

        <h3 className="title50 mt-400 mb-100">Button Sizes — Live</h3>
        <div className="doc-preview">
          <span className="doc-preview-label">Live</span>
          <div className="demo-row">
            <button className="btn btn-primary btn-700">Large (700)</button>
            <button className="btn btn-primary btn-300">Small (300)</button>
            <button className="btn btn-primary btn-100">XSmall (100)</button>
          </div>
          <p className="labelRegular10 text-secondary mt-100">56px → 40px → 32px height</p>
        </div>

        <h3 className="title50 mt-400 mb-100">Icon Placement</h3>
        <p className="bodyRegular30 text-primary doc-prose mb-100">
          Add an icon placement class alongside base+type+size to adjust padding for optical
          balance. Icons use the <code>.btn-icon</code> class for proper sizing.
        </p>
        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Modifier</th><th>Behavior</th><th>Icon Size (700 / 300 / 100)</th></tr></thead>
            <tbody>
              <tr><td><code>.btn-icon-leading</code></td><td>Icon before label</td><td>24px / 20px / 16px</td></tr>
              <tr><td><code>.btn-icon-trailing</code></td><td>Icon after label</td><td>24px / 20px / 16px</td></tr>
              <tr><td><code>.btn-icon-only</code></td><td>Icon only (no label)</td><td>24px / 20px / 16px</td></tr>
              <tr><td><code>.btn-fill</code></td><td>Full parent width (100%)</td><td>—</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="title50 mt-400 mb-100">Icon Variants — Live</h3>
        <div className="doc-preview">
          <span className="doc-preview-label">Live</span>
          <div className="demo-row">
            <button className="btn btn-primary btn-300 btn-icon-leading">
              <span className="icon icon-200 btn-icon">add</span>
              <span>Leading</span>
            </button>
            <button className="btn btn-primary btn-300 btn-icon-trailing">
              <span>Trailing</span>
              <span className="icon icon-200 btn-icon">arrow_forward</span>
            </button>
            <button className="btn btn-secondary btn-300 btn-icon-leading btn-icon-trailing">
              <span className="icon icon-200 btn-icon">edit</span>
              <span>Both</span>
              <span className="icon icon-200 btn-icon">check</span>
            </button>
          </div>
        </div>

        <h3 className="title50 mt-400 mb-100">Button States</h3>
        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>State</th><th>Behavior</th></tr></thead>
            <tbody>
              <tr><td>Default</td><td>Normal appearance</td></tr>
              <tr><td>Hover</td><td>white-300 or neutral-100 overlay + scale(1.025)</td></tr>
              <tr><td>Pressed</td><td>black-300 overlay + scale(0.975) + 60% child opacity</td></tr>
              <tr><td>Disabled</td><td>40% opacity, cursor: not-allowed, no scale</td></tr>
            </tbody>
          </table>
        </div>
        <div className="doc-preview">
          <span className="doc-preview-label">Live</span>
          <div className="demo-row">
            <button className="btn btn-primary btn-300">Default</button>
            <button className="btn btn-primary btn-300" disabled>Disabled</button>
            <button className="btn btn-secondary btn-300">Default</button>
            <button className="btn btn-secondary btn-300" disabled>Disabled</button>
            <button className="btn btn-destructive btn-300">Default</button>
            <button className="btn btn-destructive btn-300" disabled>Disabled</button>
          </div>
        </div>

        <h3 className="title50 mt-400 mb-100">Circle Icon Buttons</h3>
        <p className="bodyRegular30 text-primary doc-prose mb-100">
          For icon-only actions. Compose as: <code>.btn-circle</code> + size + type. Use{' '}
          <code>.scale-300</code> (built in).
        </p>
        <div className="doc-preview-grid">
          <div>
            <p className="labelBold20 mb-100">Sizes</p>
            <div className="doc-table-wrap">
              <table className="doc-table">
                <thead><tr><th>Class</th><th>Dimensions</th><th>Icon Size</th></tr></thead>
                <tbody>
                  <tr><td><code>.btn-circle-700</code></td><td>56×56px</td><td>32px</td></tr>
                  <tr><td><code>.btn-circle-300</code></td><td>40×40px</td><td>24px</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <p className="labelBold20 mb-100">Fill Types</p>
            <div className="doc-table-wrap">
              <table className="doc-table">
                <thead><tr><th>Class</th><th>Background</th></tr></thead>
                <tbody>
                  <tr><td><code>.btn-circle-team</code></td><td>--interactive-primary</td></tr>
                  <tr><td><code>.btn-circle-neutral</code></td><td>--neutral-1000</td></tr>
                  <tr><td><code>.btn-circle-inverted</code></td><td>--inverted-1000</td></tr>
                  <tr><td><code>.btn-circle-black</code></td><td>--black-1000</td></tr>
                  <tr><td><code>.btn-circle-white</code></td><td>--white-1000</td></tr>
                  <tr><td><code>.btn-circle-destructive</code></td><td>--status-error</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <p className="labelRegular10 text-secondary mt-50">Secondary (outlined) variants: <code>.btn-circle-team-secondary</code> · <code>.btn-circle-neutral-secondary</code> · <code>.btn-circle-destructive-secondary</code></p>
        <p className="labelRegular10 text-secondary mt-50">Tertiary (ghost) variants: <code>.btn-circle-team-tertiary</code> · <code>.btn-circle-neutral-tertiary</code> · <code>.btn-circle-destructive-tertiary</code></p>
        <div className="doc-preview">
          <span className="doc-preview-label">Live — hover me</span>
          <div className="demo-row">
            <button className="btn-circle btn-circle-700 btn-circle-team"><span className="icon btn-icon">add</span></button>
            <button className="btn-circle btn-circle-300 btn-circle-team"><span className="icon icon-200 btn-icon">add</span></button>
            <button className="btn-circle btn-circle-300 btn-circle-neutral"><span className="icon icon-200 btn-icon">share</span></button>
            <button className="btn-circle btn-circle-300 btn-circle-inverted"><span className="icon icon-200 btn-icon">close</span></button>
            <button className="btn-circle btn-circle-300 btn-circle-destructive"><span className="icon icon-200 btn-icon">delete</span></button>
            <button className="btn-circle btn-circle-300 btn-circle-team-secondary"><span className="icon icon-200 btn-icon">favorite</span></button>
            <button className="btn-circle btn-circle-300 btn-circle-neutral-tertiary"><span className="icon icon-200 btn-icon">more_horiz</span></button>
          </div>
        </div>

        <h3 className="title50 mt-400 mb-100">Button Group Utilities</h3>
        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Class</th><th>Layout</th></tr></thead>
            <tbody>
              <tr><td><code>.btn-group</code></td><td>Horizontal row, center-aligned, 12px gap</td></tr>
              <tr><td><code>.btn-group-stack</code></td><td>Vertical column, 12px gap, full-width buttons</td></tr>
            </tbody>
          </table>
        </div>
        <div className="doc-preview-grid">
          <div className="doc-preview">
            <span className="doc-preview-label">.btn-group</span>
            <div className="btn-group">
              <button className="btn btn-primary btn-300">Confirm</button>
              <button className="btn btn-secondary btn-300">Cancel</button>
            </div>
          </div>
          <div className="doc-preview">
            <span className="doc-preview-label">.btn-group-stack</span>
            <div className="btn-group-stack" style={{ maxWidth: 240 }}>
              <button className="btn btn-transactional btn-700">Buy Tickets</button>
              <button className="btn btn-secondary btn-700">View Details</button>
            </div>
          </div>
        </div>
      </div>

      {/* PREV / NEXT */}
      <div className="doc-prevnext">
        <Link className="doc-prevnext-prev surface-ghost scale-700" to="/documentation/surfaces">
          <span className="icon">arrow_back</span>
          <div className="doc-prevnext-text">
            <span className="doc-prevnext-label">Previous</span>
            <span className="doc-prevnext-title">Interactive Tokens</span>
          </div>
        </Link>
        <Link className="doc-prevnext-next surface-ghost scale-700" to="/documentation/list-rows">
          <div className="doc-prevnext-text">
            <span className="doc-prevnext-label">Next</span>
            <span className="doc-prevnext-title">List Rows &amp; Cards</span>
          </div>
          <span className="icon">arrow_forward</span>
        </Link>
      </div>
    </DocShell>
  )
}
