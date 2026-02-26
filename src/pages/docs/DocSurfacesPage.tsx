import { Link } from 'react-router-dom'
import DocShell from '../../layouts/DocShell'

export default function DocSurfacesPage() {
  return (
    <DocShell>
      {/* PAGE INTRO */}
      <div className="container-wide py-large">
        <h1 className="display500 mb-200">Interactive Tokens</h1>
        <p className="bodyRegular30 text-primary doc-prose">
          Surface classes set background, border, and hover/press behavior in a single class.
          Scale transforms complete the interaction layer — combine them on any tappable
          element instead of writing custom hover/active CSS.
        </p>
      </div>

      <div className="container-wide py-large border-top" id="interactive">
        <h2 className="title80">Interactive Surfaces</h2>
        <p className="bodyRegular30 text-primary doc-prose mt-100">
          Composable surface styles + scale transforms. Mix any surface with any scale.
          They come in two categories — <strong>surfaces</strong> (color/border changes) and{' '}
          <strong>scales</strong> (transform animations). Hover and click the examples below.
        </p>

        <div className="doc-note mt-200">
          <p className="bodyRegular30">
            <strong>React components apply these automatically.</strong> The <code>Button</code>,{' '}
            <code>Selector</code>, <code>Chip</code>, and interactive <code>CardClosed</code>{' '}
            components handle surface and scale classes internally based on their variant props.
            Use these CSS classes directly only when building custom interactive elements that don't
            have a corresponding React component.
          </p>
        </div>

        <div className="doc-note mt-100">
          <p className="bodyRegular30">
            <strong>Contrast note:</strong> Surface fill classes set their own <code>color</code>{' '}
            for correct contrast. Text style classes (e.g. <code>.labelBold30</code>) will
            override this with <code>var(--text-primary)</code>, causing broken contrast.
            Always add <code>color: inherit</code> to children inside filled surfaces. The{' '}
            <code>.btn</code> classes and React components already handle this automatically.
          </p>
        </div>

        <h3 className="title50 mt-400 mb-100">Fill Surfaces</h3>
        <div className="doc-preview">
          <span className="doc-preview-label">Hover / Click me</span>
          <div className="demo-row">
            <div className="surface-fillNeutral rounded-100 p-200" style={{ minWidth: 120, textAlign: 'center' }}><span className="labelBold20" style={{ color: 'inherit' }}>fillNeutral</span></div>
            <div className="surface-fillColor rounded-100 p-200" style={{ minWidth: 120, textAlign: 'center' }}><span className="labelBold20" style={{ color: 'inherit' }}>fillColor</span></div>
            <div className="surface-fillInverted rounded-100 p-200" style={{ minWidth: 120, textAlign: 'center' }}><span className="labelBold20" style={{ color: 'inherit' }}>fillInverted</span></div>
            <div className="surface-fillBlack rounded-100 p-200" style={{ minWidth: 120, textAlign: 'center' }}><span className="labelBold20" style={{ color: 'inherit' }}>fillBlack</span></div>
            <div className="surface-fillWhite rounded-100 p-200" style={{ minWidth: 120, textAlign: 'center' }}><span className="labelBold20" style={{ color: 'inherit' }}>fillWhite</span></div>
          </div>
        </div>

        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Class</th><th>Default</th><th>Hover</th><th>Text Color</th><th>Use For</th></tr></thead>
            <tbody>
              <tr><td><code>.surface-fillNeutral</code></td><td>--neutral-1000</td><td>inverted-200 overlay</td><td>--inverted-1000</td><td>High-contrast neutral buttons</td></tr>
              <tr><td><code>.surface-fillColor</code></td><td>--brand-core</td><td>white-300 overlay</td><td>--white-1000</td><td>Brand-colored elements</td></tr>
              <tr><td><code>.surface-fillInverted</code></td><td>--inverted-1000</td><td>neutral-200 overlay</td><td>--neutral-1000</td><td>Inverted contrast elements</td></tr>
              <tr><td><code>.surface-fillBlack</code></td><td>--black-1000</td><td>white-300 overlay</td><td>--white-1000</td><td>Always-black elements</td></tr>
              <tr><td><code>.surface-fillWhite</code></td><td>--white-1000</td><td>black-200 overlay</td><td>--black-1000</td><td>Always-white elements</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="title50 mt-400 mb-100">Border Surfaces</h3>
        <div className="doc-preview">
          <span className="doc-preview-label">Hover / Click me</span>
          <div className="demo-row">
            <div className="surface-borderNeutral rounded-100 p-200" style={{ minWidth: 120, textAlign: 'center' }}><span className="labelBold20" style={{ color: 'inherit' }}>borderNeutral</span></div>
            <div className="surface-borderInverted rounded-100 p-200" style={{ minWidth: 120, textAlign: 'center' }}><span className="labelBold20" style={{ color: 'inherit' }}>borderInverted</span></div>
            <div className="surface-washNeutral rounded-100 p-200" style={{ minWidth: 120, textAlign: 'center' }}><span className="labelBold20" style={{ color: 'inherit' }}>washNeutral</span></div>
            <div className="surface-ghost rounded-100 p-200" style={{ minWidth: 120, textAlign: 'center' }}><span className="labelBold20" style={{ color: 'inherit' }}>ghost</span></div>
          </div>
        </div>

        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Class</th><th>Default Border</th><th>Hover</th><th>Use For</th></tr></thead>
            <tbody>
              <tr><td><code>.surface-borderNeutral</code></td><td>--neutral-300</td><td>neutral-100 fill, neutral-200 border</td><td>Outlined buttons, card borders</td></tr>
              <tr><td><code>.surface-borderInverted</code></td><td>--inverted-300</td><td>inverted-100 fill</td><td>Inverted outlined elements</td></tr>
              <tr><td><code>.surface-borderBlack</code></td><td>--black-300</td><td>black-100 fill</td><td>Always-black outlined</td></tr>
              <tr><td><code>.surface-borderWhite</code></td><td>--black-300</td><td>white-200 fill</td><td>Always-white outlined</td></tr>
              <tr><td><code>.surface-washNeutral</code></td><td>--neutral-100 fill</td><td>neutral-100 overlay</td><td>Subtle tinted backgrounds</td></tr>
              <tr><td><code>.surface-ghost</code></td><td>transparent</td><td>neutral-100 fill</td><td>Ghost/text-only buttons</td></tr>
              <tr><td><code>.surface-card</code></td><td>--org-surface fill</td><td>white-100 overlay</td><td>Interactive card backgrounds</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="title50 mt-400 mb-100">Scale Tokens (combine with any surface)</h3>
        <div className="doc-preview">
          <span className="doc-preview-label">Hover / Click me</span>
          <div className="demo-row">
            <div className="surface-fillColor scale-700 rounded-100 p-300 doc-demo-cell">
              <span className="labelBold20" style={{ color: 'inherit' }}>scale-700</span>
              <p className="labelRegular10 mt-50" style={{ color: 'inherit', opacity: 0.6 }}>Cards (1.01)</p>
            </div>
            <div className="surface-fillColor scale-500 rounded-100 p-300 doc-demo-cell">
              <span className="labelBold20" style={{ color: 'inherit' }}>scale-500</span>
              <p className="labelRegular10 mt-50" style={{ color: 'inherit', opacity: 0.6 }}>Buttons (1.025)</p>
            </div>
            <div className="surface-fillColor scale-300 rounded-100 p-300 doc-demo-cell">
              <span className="labelBold20" style={{ color: 'inherit' }}>scale-300</span>
              <p className="labelRegular10 mt-50" style={{ color: 'inherit', opacity: 0.6 }}>Icons (1.035)</p>
            </div>
          </div>
        </div>
        <div className="doc-table-wrap mt-200">
          <table className="doc-table">
            <thead><tr><th>Class</th><th>Hover Scale</th><th>Active Scale</th><th>Use For</th></tr></thead>
            <tbody>
              <tr><td><code>.scale-700</code></td><td>1.01</td><td>0.99</td><td>Cards, large components</td></tr>
              <tr><td><code>.scale-500</code></td><td>1.025</td><td>0.975</td><td>Buttons, medium components</td></tr>
              <tr><td><code>.scale-300</code></td><td>1.035</td><td>0.965</td><td>Icon buttons, small components</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* PREV / NEXT */}
      <div className="doc-prevnext">
        <Link className="doc-prevnext-prev surface-ghost scale-700" to="/documentation/typography">
          <span className="icon">arrow_back</span>
          <div className="doc-prevnext-text">
            <span className="doc-prevnext-label">Previous</span>
            <span className="doc-prevnext-title">Typography &amp; Icons</span>
          </div>
        </Link>
        <Link className="doc-prevnext-next surface-ghost scale-700" to="/documentation/buttons">
          <div className="doc-prevnext-text">
            <span className="doc-prevnext-label">Next</span>
            <span className="doc-prevnext-title">Buttons</span>
          </div>
          <span className="icon">arrow_forward</span>
        </Link>
      </div>
    </DocShell>
  )
}
