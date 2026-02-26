import { Link } from 'react-router-dom'
import DocShell from '../../layouts/DocShell'
import { Button, CircleButton } from '../../components/Button'

export default function DocButtonsPage() {
  return (
    <DocShell>
      {/* PAGE INTRO */}
      <div className="container-wide py-large">
        <h1 className="display500 mb-200">Buttons</h1>
        <p className="bodyRegular30 text-primary doc-prose">
          The <code>Button</code> and <code>CircleButton</code> components handle all variants,
          sizes, states, icon placement, and dark mode automatically. Pass typed props — never
          write button CSS classes by hand.
        </p>
      </div>

      {/* IMPORT */}
      <div className="container-wide py-large border-top" id="import">
        <h2 className="title80">Import</h2>
        <div className="doc-code-block mt-200">
          <code>{`import { Button, CircleButton } from 'diet-airds'`}</code>
        </div>
      </div>

      {/* BUTTON COMPONENT */}
      <div className="container-wide py-large border-top" id="button">
        <h2 className="title80">Button</h2>

        <div className="doc-table-wrap mt-200">
          <table className="doc-table">
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><code>variant</code></td><td>ButtonVariant</td><td>—</td><td>Visual style (required)</td></tr>
              <tr><td><code>size</code></td><td><code>'large' | 'small' | 'xsmall'</code></td><td><code>'large'</code></td><td>Button height</td></tr>
              <tr><td><code>icon</code></td><td>string</td><td>—</td><td>Material Symbols icon name</td></tr>
              <tr><td><code>iconPosition</code></td><td><code>'leading' | 'trailing'</code></td><td><code>'leading'</code></td><td>Icon position relative to label</td></tr>
              <tr><td><code>fill</code></td><td>boolean</td><td><code>false</code></td><td>Expand to 100% parent width</td></tr>
              <tr><td><code>disabled</code></td><td>boolean</td><td><code>false</code></td><td>Disabled state</td></tr>
              <tr><td><code>onClick</code></td><td>function</td><td>—</td><td>Click handler</td></tr>
              <tr><td><code>type</code></td><td><code>'button' | 'submit' | 'reset'</code></td><td><code>'button'</code></td><td>HTML button type</td></tr>
              <tr><td><code>children</code></td><td>ReactNode</td><td>—</td><td>Button label</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="title50 mt-400 mb-100">Variants</h3>
        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>variant</th><th>Use For</th></tr></thead>
            <tbody>
              <tr><td><code>'transactional'</code></td><td>Revenue actions — Buy, Purchase, Add to Cart. Use only one per view.</td></tr>
              <tr><td><code>'primary'</code></td><td>Main page action — Submit, Save, Confirm. Use only one per view.</td></tr>
              <tr><td><code>'neutral'</code></td><td>High-contrast neutral CTA (always dark/black fill)</td></tr>
              <tr><td><code>'secondary'</code></td><td>Supporting actions — Cancel, Back, alternatives to primary</td></tr>
              <tr><td><code>'tertiary'</code></td><td>Low-emphasis ghost/text actions</td></tr>
              <tr><td><code>'destructive'</code></td><td>Dangerous actions — Delete, Remove, Unsubscribe</td></tr>
              <tr><td><code>'white'</code></td><td>CTA on dark or brand-colored surfaces</td></tr>
              <tr><td><code>'white-tertiary'</code></td><td>Low-emphasis on dark surfaces</td></tr>
              <tr><td><code>'black'</code></td><td>Always-black fill regardless of theme</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="title50 mt-400 mb-100">Live Preview — All Variants</h3>
        <div className="doc-preview">
          <span className="doc-preview-label">Live — hover me</span>
          <div className="demo-row">
            <Button variant="transactional" size="small">Transactional</Button>
            <Button variant="primary" size="small">Primary</Button>
            <Button variant="neutral" size="small">Neutral</Button>
            <Button variant="secondary" size="small">Secondary</Button>
            <Button variant="tertiary" size="small">Tertiary</Button>
            <Button variant="destructive" size="small">Destructive</Button>
          </div>
        </div>

        <div className="doc-code-block mt-200">
          <code>{`<Button variant="transactional" size="small">Buy Tickets</Button>
<Button variant="primary" size="small">Confirm</Button>
<Button variant="secondary" size="small">Cancel</Button>`}</code>
        </div>

        <h3 className="title50 mt-400 mb-100">Sizes</h3>
        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>size</th><th>Height</th><th>Padding</th><th>Use For</th></tr></thead>
            <tbody>
              <tr><td><code>'large'</code></td><td>56px</td><td>32px horizontal</td><td>Hero CTAs, full-width mobile buttons</td></tr>
              <tr><td><code>'small'</code></td><td>40px</td><td>24px horizontal</td><td>Standard buttons in forms and cards</td></tr>
              <tr><td><code>'xsmall'</code></td><td>32px</td><td>16px horizontal</td><td>Compact UI, table actions, dense layouts</td></tr>
            </tbody>
          </table>
        </div>

        <div className="doc-preview">
          <span className="doc-preview-label">Live</span>
          <div className="demo-row">
            <Button variant="primary" size="large">Large</Button>
            <Button variant="primary" size="small">Small</Button>
            <Button variant="primary" size="xsmall">XSmall</Button>
          </div>
          <p className="labelRegular10 text-secondary mt-100">56px → 40px → 32px height</p>
        </div>

        <h3 className="title50 mt-400 mb-100">Icons</h3>
        <p className="bodyRegular30 text-primary doc-prose mb-100">
          Pass a Material Symbols icon name to <code>icon</code>. Use <code>iconPosition</code> to
          place it before or after the label. Omit <code>children</code> for an icon-only button.
        </p>

        <div className="doc-preview">
          <span className="doc-preview-label">Live</span>
          <div className="demo-row">
            <Button variant="primary" size="small" icon="add" iconPosition="leading">Leading</Button>
            <Button variant="primary" size="small" icon="arrow_forward" iconPosition="trailing">Trailing</Button>
            <Button variant="secondary" size="small" icon="edit">Icon Only</Button>
          </div>
        </div>

        <div className="doc-code-block mt-200">
          <code>{`<Button variant="primary" size="small" icon="add">Add Item</Button>
<Button variant="primary" size="small" icon="arrow_forward" iconPosition="trailing">
  Continue
</Button>
{/* Icon only — omit children */}
<Button variant="secondary" size="small" icon="edit" />`}</code>
        </div>

        <h3 className="title50 mt-400 mb-100">White Buttons (for dark / brand surfaces)</h3>
        <div className="doc-preview dark-surface">
          <span className="doc-preview-label" style={{ color: 'var(--white-500)' }}>Live — dark surface</span>
          <div className="demo-row">
            <Button variant="white" size="small">White</Button>
            <Button variant="white-tertiary" size="small">White Tertiary</Button>
          </div>
        </div>

        <h3 className="title50 mt-400 mb-100">Full Width</h3>
        <div className="doc-preview" style={{ maxWidth: 320 }}>
          <span className="doc-preview-label">Live</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-150)' }}>
            <Button variant="transactional" size="large" fill>Buy Tickets</Button>
            <Button variant="secondary" size="large" fill>View Details</Button>
          </div>
        </div>
        <div className="doc-code-block mt-200">
          <code>{`<Button variant="transactional" size="large" fill>Buy Tickets</Button>`}</code>
        </div>

        <h3 className="title50 mt-400 mb-100">States</h3>
        <div className="doc-preview">
          <span className="doc-preview-label">Live</span>
          <div className="demo-row">
            <Button variant="primary" size="small">Default</Button>
            <Button variant="primary" size="small" disabled>Disabled</Button>
            <Button variant="secondary" size="small">Default</Button>
            <Button variant="secondary" size="small" disabled>Disabled</Button>
            <Button variant="destructive" size="small">Default</Button>
            <Button variant="destructive" size="small" disabled>Disabled</Button>
          </div>
        </div>
      </div>

      {/* CIRCLE BUTTON */}
      <div className="container-wide py-large border-top" id="circle-button">
        <h2 className="title80">CircleButton</h2>
        <p className="bodyRegular30 text-primary doc-prose mt-100">
          For icon-only actions. Requires both <code>icon</code> and an <code>aria-label</code>{' '}
          (since there's no visible text).
        </p>

        <div className="doc-table-wrap mt-200">
          <table className="doc-table">
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><code>variant</code></td><td>ButtonVariant</td><td>—</td><td>Visual style (required)</td></tr>
              <tr><td><code>size</code></td><td><code>'large' | 'small'</code></td><td><code>'large'</code></td><td>Button dimensions</td></tr>
              <tr><td><code>icon</code></td><td>string</td><td>—</td><td>Material Symbols icon name (required)</td></tr>
              <tr><td><code>aria-label</code></td><td>string</td><td>—</td><td>Accessible label (required)</td></tr>
              <tr><td><code>disabled</code></td><td>boolean</td><td><code>false</code></td><td>Disabled state</td></tr>
              <tr><td><code>onClick</code></td><td>function</td><td>—</td><td>Click handler</td></tr>
              <tr><td><code>type</code></td><td><code>'button' | 'submit' | 'reset'</code></td><td><code>'button'</code></td><td>HTML button type</td></tr>
            </tbody>
          </table>
        </div>

        <div className="doc-table-wrap mt-300">
          <table className="doc-table">
            <thead><tr><th>size</th><th>Dimensions</th><th>Icon Size</th></tr></thead>
            <tbody>
              <tr><td><code>'large'</code></td><td>56 × 56px</td><td>32px</td></tr>
              <tr><td><code>'small'</code></td><td>40 × 40px</td><td>24px</td></tr>
            </tbody>
          </table>
        </div>

        <div className="doc-preview mt-300">
          <span className="doc-preview-label">Live — hover me</span>
          <div className="demo-row">
            <CircleButton variant="transactional" size="large" icon="add" aria-label="Add item" />
            <CircleButton variant="primary" size="small" icon="add" aria-label="Add item" />
            <CircleButton variant="neutral" size="small" icon="share" aria-label="Share" />
            <CircleButton variant="secondary" size="small" icon="favorite" aria-label="Favorite" />
            <CircleButton variant="tertiary" size="small" icon="more_horiz" aria-label="More options" />
            <CircleButton variant="destructive" size="small" icon="delete" aria-label="Delete" />
            <CircleButton variant="white" size="small" icon="close" aria-label="Close" />
          </div>
        </div>

        <div className="doc-code-block mt-200">
          <code>{`<CircleButton
  variant="primary"
  size="small"
  icon="add"
  aria-label="Add item"
  onClick={handleAdd}
/>`}</code>
        </div>
      </div>

      {/* BUTTON GROUP UTILITIES */}
      <div className="container-wide py-large border-top" id="groups">
        <h2 className="title80">Button Group Utilities</h2>
        <p className="bodyRegular30 text-primary doc-prose mt-100">
          Wrap multiple buttons in a layout div using these utility classes.
        </p>

        <div className="doc-table-wrap mt-200">
          <table className="doc-table">
            <thead><tr><th>Class</th><th>Layout</th></tr></thead>
            <tbody>
              <tr><td><code>.btn-group</code></td><td>Horizontal row, center-aligned, 12px gap</td></tr>
              <tr><td><code>.btn-group-stack</code></td><td>Vertical column, 12px gap, full-width buttons</td></tr>
            </tbody>
          </table>
        </div>

        <div className="doc-preview-grid mt-300">
          <div className="doc-preview">
            <span className="doc-preview-label">.btn-group</span>
            <div className="btn-group">
              <Button variant="primary" size="small">Confirm</Button>
              <Button variant="secondary" size="small">Cancel</Button>
            </div>
          </div>
          <div className="doc-preview">
            <span className="doc-preview-label">.btn-group-stack</span>
            <div className="btn-group-stack" style={{ maxWidth: 240 }}>
              <Button variant="transactional" size="large" fill>Buy Tickets</Button>
              <Button variant="secondary" size="large" fill>View Details</Button>
            </div>
          </div>
        </div>

        <div className="doc-code-block mt-200">
          <code>{`<div className="btn-group">
  <Button variant="primary" size="small">Confirm</Button>
  <Button variant="secondary" size="small">Cancel</Button>
</div>

<div className="btn-group-stack">
  <Button variant="transactional" size="large" fill>Buy Tickets</Button>
  <Button variant="secondary" size="large" fill>View Details</Button>
</div>`}</code>
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
