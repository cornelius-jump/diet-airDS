import { Link } from 'react-router-dom'
import DocShell from '../../layouts/DocShell'

export default function DocTypographyPage() {
  return (
    <DocShell>
      {/* PAGE INTRO */}
      <div className="container-wide py-large">
        <h1 className="display500 mb-200">Typography &amp; Icons</h1>
        <p className="bodyRegular30 text-primary doc-prose">
          Display fonts, the Inter type scale, text pair patterns, and Material Symbols icon
          usage. All type classes set both size and color — pair them with text color utilities
          for full control.
        </p>
      </div>

      {/* TYPOGRAPHY */}
      <div className="container-wide py-large border-top" id="typography">
        <h2 className="title80">Typography</h2>

        <h3 className="title50 mt-400 mb-100">Display Styles (Team Font)</h3>
        <p className="bodyRegular30 text-primary doc-prose mb-100">
          Each team's unique display font, weight, and letter spacing. For big,
          attention-grabbing headlines. Sizes vary per team.
        </p>
        <div className="doc-preview">
          <span className="doc-preview-label">Live</span>
          <div className="doc-demo-col">
            <span className="display900">.display900</span>
            <span className="display700">.display700</span>
            <span className="display500">.display500</span>
            <span className="display400">.display400</span>
            <span className="display300">.display300</span>
            <span className="display100">.display100</span>
          </div>
        </div>

        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Class</th><th>Line Height</th><th>Typical Use</th></tr></thead>
            <tbody>
              <tr><td><code>.display900</code></td><td>76px</td><td>Largest hero headlines</td></tr>
              <tr><td><code>.display800</code></td><td>68px</td><td>Large hero text</td></tr>
              <tr><td><code>.display700</code></td><td>60px</td><td>Medium-large display</td></tr>
              <tr><td><code>.display600</code></td><td>52px</td><td>Medium display (hero subheads)</td></tr>
              <tr><td><code>.display500</code></td><td>44px</td><td>Page-level headers</td></tr>
              <tr><td><code>.display400</code></td><td>36px</td><td>Section headers</td></tr>
              <tr><td><code>.display300</code></td><td>28px</td><td>Component headers</td></tr>
              <tr><td><code>.display200</code></td><td>24px</td><td>Small display</td></tr>
              <tr><td><code>.display100</code></td><td>20px</td><td>Smallest display</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="title50 mt-400 mb-100">Title Styles (Inter Bold — Same Everywhere)</h3>
        <p className="bodyRegular30 text-primary doc-prose mb-100">
          Structural headings within content. Consistent across all teams. Uses Inter Bold (700)
          with tight letter spacing.
        </p>
        <div className="doc-preview">
          <span className="doc-preview-label">Live</span>
          <div className="doc-demo-col">
            <span className="title90">.title90 — 36px</span>
            <span className="title80">.title80 — 32px</span>
            <span className="title70">.title70 — 28px</span>
            <span className="title60">.title60 — 24px</span>
            <span className="title50">.title50 — 20px</span>
          </div>
        </div>

        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Class</th><th>Size</th><th>Letter Spacing</th><th>Use For</th></tr></thead>
            <tbody>
              <tr><td><code>.title90</code></td><td>36px</td><td>-0.03em</td><td>Page titles</td></tr>
              <tr><td><code>.title80</code></td><td>32px</td><td>-0.03em</td><td>Section titles</td></tr>
              <tr><td><code>.title70</code></td><td>28px</td><td>-0.03em</td><td>Subsection titles</td></tr>
              <tr><td><code>.title60</code></td><td>24px</td><td>-0.03em</td><td>Card titles</td></tr>
              <tr><td><code>.title50</code></td><td>20px</td><td>-0.03em</td><td>Small titles, card headers</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="title50 mt-400 mb-100">Label &amp; Body Styles</h3>
        <div className="doc-preview-grid">
          <div className="doc-preview">
            <span className="doc-preview-label">Labels</span>
            <div className="doc-demo-col">
              <span className="labelBold50">.labelBold50 — 20px</span>
              <span className="labelBold40">.labelBold40 — 18px</span>
              <span className="labelBold30">.labelBold30 — 16px</span>
              <span className="labelBold20">.labelBold20 — 14px</span>
              <span className="labelBold10">.labelBold10 — 12px</span>
              <div style={{ borderTop: '1px solid var(--neutral-100)' }}></div>
              <span className="labelRegular50 text-secondary">.labelRegular50 — 20px</span>
              <span className="labelRegular40 text-secondary">.labelRegular40 — 18px</span>
              <span className="labelRegular30 text-secondary">.labelRegular30 — 16px</span>
              <span className="labelRegular20 text-secondary">.labelRegular20 — 14px</span>
              <span className="labelRegular10 text-secondary">.labelRegular10 — 12px</span>
            </div>
          </div>
          <div className="doc-preview">
            <span className="doc-preview-label">Body</span>
            <div className="doc-demo-col">
              <span className="bodyBold40">.bodyBold40 — 18px</span>
              <span className="bodyBold30">.bodyBold30 — 16px</span>
              <span className="bodyBold20">.bodyBold20 — 14px</span>
              <div style={{ borderTop: '1px solid var(--neutral-100)' }}></div>
              <span className="bodyRegular40">.bodyRegular40 — 18px</span>
              <span className="bodyRegular30">.bodyRegular30 — 16px</span>
              <span className="bodyRegular20">.bodyRegular20 — 14px</span>
            </div>
          </div>
        </div>

        <h3 className="title50 mt-400 mb-100">Text Color Modifiers</h3>
        <div className="doc-preview">
          <span className="doc-preview-label">Live</span>
          <div className="demo-row">
            <span className="labelBold30 text-primary">.text-primary</span>
            <span className="labelBold30 text-secondary">.text-secondary</span>
            <span className="labelBold30 text-disabled">.text-disabled</span>
            <span className="labelBold30 text-brand-core">.text-brand-core</span>
            <span className="labelBold30 text-brand-interactive">.text-brand-interactive</span>
            <span className="labelBold30 text-success">.text-success</span>
            <span className="labelBold30 text-error">.text-error</span>
            <span className="labelBold30 text-warning">.text-warning</span>
            <span className="labelBold30 text-info">.text-info</span>
          </div>
        </div>
        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Class</th><th>Token Used</th><th>Purpose</th></tr></thead>
            <tbody>
              <tr><td><code>.text-primary</code></td><td>--neutral-1000</td><td>High contrast (default)</td></tr>
              <tr><td><code>.text-secondary</code></td><td>--neutral-700</td><td>Medium contrast — sublabels, captions</td></tr>
              <tr><td><code>.text-disabled</code></td><td>--neutral-300</td><td>Disabled state</td></tr>
              <tr><td><code>.text-placeholder</code></td><td>--neutral-500</td><td>Placeholder text</td></tr>
              <tr><td><code>.text-brand-core</code></td><td>--brand-core</td><td>Primary brand color</td></tr>
              <tr><td><code>.text-brand-interactive</code></td><td>--brand-interactive</td><td>Mode-aware interactive brand color</td></tr>
              <tr><td><code>.text-success</code></td><td>--status-success</td><td>Success green</td></tr>
              <tr><td><code>.text-warning</code></td><td>--status-warning</td><td>Warning amber</td></tr>
              <tr><td><code>.text-error</code></td><td>--status-error</td><td>Error red</td></tr>
              <tr><td><code>.text-info</code></td><td>--status-info</td><td>Info blue</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* TEXT PAIRS */}
      <div className="container-wide py-large border-top" id="textpairs">
        <h2 className="title80">Text Pairs</h2>
        <p className="bodyRegular30 text-primary doc-prose mt-100">
          Pre-defined label + sublabel combinations. Numbered 9000 (largest) to 1000 (smallest).
          Always wrap in <code>.card-text-pair</code> and always apply{' '}
          <code>.text-secondary</code> to sublabels.
        </p>

        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Pair</th><th>Label Style</th><th>Sublabel Style</th><th>Gap</th><th>Use Case</th></tr></thead>
            <tbody>
              <tr><td>9000</td><td><code>.display600</code></td><td><code>.labelRegular50</code></td><td>8px</td><td>Hero headlines, landing pages</td></tr>
              <tr><td>8000</td><td><code>.display500</code></td><td><code>.labelRegular40</code></td><td>8px</td><td>Page headers, feature headlines</td></tr>
              <tr><td>7000</td><td><code>.display400</code></td><td><code>.labelRegular30</code></td><td>4px</td><td>Section headers, modal headers</td></tr>
              <tr><td>6000</td><td><code>.display300</code></td><td><code>.labelRegular20</code></td><td>2px</td><td>Component headers, large cards</td></tr>
              <tr><td><strong>5000</strong></td><td><code>.title50</code></td><td><code>.labelRegular20</code></td><td>2px</td><td><strong>Card headers (MOST COMMON)</strong></td></tr>
              <tr><td>4000</td><td><code>.labelBold40</code></td><td><code>.labelRegular20</code></td><td>2px</td><td>Small cards, compact components</td></tr>
              <tr><td>3000</td><td><code>.labelBold30</code></td><td><code>.labelRegular10</code></td><td>2px</td><td>Dense layouts, table headers</td></tr>
              <tr><td>2000</td><td><code>.labelBold20</code></td><td><code>.labelRegular10</code></td><td>1px</td><td>Small components, badges</td></tr>
              <tr><td>1000</td><td><code>.labelBold10</code></td><td><code>.labelRegular10</code></td><td>1px</td><td>Minimal UI, inline metadata</td></tr>
            </tbody>
          </table>
        </div>

        <div className="doc-note mt-200">
          <p className="bodyRegular30"><strong>Rules:</strong></p>
          <p className="bodyRegular30 mt-50">1. Always use <code>.text-secondary</code> on sublabels for proper hierarchy.</p>
          <p className="bodyRegular30 mt-50">2. Always wrap in <code>.card-text-pair</code> — don't just stack bare label + sublabel elements.</p>
          <p className="bodyRegular30 mt-50">3. Don't mix scales — pair 9000's label (<code>display600</code>) only pairs with <code>labelRegular50</code>, never with <code>labelRegular10</code>.</p>
          <p className="bodyRegular30 mt-50">4. Use semantic HTML — <code>h1</code> for page titles, <code>h2</code> for sections, <code>h3</code> for cards.</p>
        </div>

        <h3 className="title50 mt-400 mb-100">Live Examples</h3>
        <div className="doc-preview">
          <span className="doc-preview-label">Live</span>
          <div className="doc-demo-col" style={{ gap: 'var(--spacing-400)' }}>
            <div>
              <p className="labelRegular10 text-secondary mb-50">Text Pair 9000 — Hero</p>
              <div className="card-text-pair">
                <h1 className="display600">Hero Headline</h1>
                <p className="labelRegular50 text-secondary">Supporting message for the hero section</p>
              </div>
            </div>
            <div>
              <p className="labelRegular10 text-secondary mb-50">Text Pair 8000 — Page Header</p>
              <div className="card-text-pair">
                <h1 className="display500">Page Title</h1>
                <p className="labelRegular40 text-secondary">Page description text</p>
              </div>
            </div>
            <div>
              <p className="labelRegular10 text-secondary mb-50">Text Pair 5000 — Card Header (Most Common)</p>
              <div className="card-text-pair">
                <h3 className="title50">Card Title</h3>
                <p className="labelRegular20 text-secondary">Card metadata · Jan 15, 2025</p>
              </div>
            </div>
            <div>
              <p className="labelRegular10 text-secondary mb-50">Text Pair 3000 — Compact</p>
              <div className="card-text-pair">
                <h5 className="labelBold30">Compact Title</h5>
                <p className="labelRegular10 text-secondary">Compact metadata</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ICONS */}
      <div className="container-wide py-large border-top" id="icons">
        <h2 className="title80">Icons</h2>
        <p className="bodyRegular30 text-primary doc-prose mt-100">
          Google Material Symbols Rounded via a variable font. Default is 24px outlined. Add{' '}
          <code>.icon-filled</code> for solid, size classes for different sizes, and{' '}
          <code>.text-*</code> for colors. Icons inherit color from their parent.
        </p>

        <h3 className="title50 mt-400 mb-100">Icon Size Tokens</h3>
        <div className="doc-preview">
          <span className="doc-preview-label">Live</span>
          <div className="demo-row" style={{ alignItems: 'flex-end' }}>
            <div className="doc-demo-cell"><span className="icon icon-100">home</span><p className="labelRegular10 text-secondary mt-50">100 (16px)</p></div>
            <div className="doc-demo-cell"><span className="icon icon-200">home</span><p className="labelRegular10 text-secondary mt-50">200 (20px)</p></div>
            <div className="doc-demo-cell"><span className="icon">home</span><p className="labelRegular10 text-secondary mt-50">300 (24px)</p></div>
            <div className="doc-demo-cell"><span className="icon icon-400">home</span><p className="labelRegular10 text-secondary mt-50">400 (32px)</p></div>
            <div className="doc-demo-cell"><span className="icon icon-500">home</span><p className="labelRegular10 text-secondary mt-50">500 (40px)</p></div>
            <div className="doc-demo-cell"><span className="icon icon-600">home</span><p className="labelRegular10 text-secondary mt-50">600 (48px)</p></div>
          </div>
        </div>

        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Token</th><th>Value</th><th>Class</th><th>Use For</th></tr></thead>
            <tbody>
              <tr><td><code>--icon-size-100</code></td><td>16px</td><td><code>.icon-100</code></td><td>Compact UI, inline with small text</td></tr>
              <tr><td><code>--icon-size-200</code></td><td>20px</td><td><code>.icon-200</code></td><td>Inline with body/label text</td></tr>
              <tr><td><code>--icon-size-300</code></td><td>24px</td><td><code>.icon-300</code></td><td>Default — standard UI icons</td></tr>
              <tr><td><code>--icon-size-400</code></td><td>32px</td><td><code>.icon-400</code></td><td>Emphasized icons, empty states</td></tr>
              <tr><td><code>--icon-size-500</code></td><td>40px</td><td><code>.icon-500</code></td><td>Large feature icons</td></tr>
              <tr><td><code>--icon-size-600</code></td><td>48px</td><td><code>.icon-600</code></td><td>Illustrative icons, hero areas</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="title50 mt-400 mb-100">Outlined vs Filled</h3>
        <div className="doc-preview">
          <span className="doc-preview-label">Live</span>
          <div className="demo-row">
            <div className="doc-demo-cell"><span className="icon icon-400">favorite</span><p className="labelRegular10 text-secondary mt-50">outlined</p></div>
            <div className="doc-demo-cell"><span className="icon icon-400 icon-filled">favorite</span><p className="labelRegular10 text-secondary mt-50">filled</p></div>
            <div className="doc-demo-cell"><span className="icon icon-400">star</span><p className="labelRegular10 text-secondary mt-50">outlined</p></div>
            <div className="doc-demo-cell"><span className="icon icon-400 icon-filled">star</span><p className="labelRegular10 text-secondary mt-50">filled</p></div>
            <div className="doc-demo-cell"><span className="icon icon-400">bookmark</span><p className="labelRegular10 text-secondary mt-50">outlined</p></div>
            <div className="doc-demo-cell"><span className="icon icon-400 icon-filled">bookmark</span><p className="labelRegular10 text-secondary mt-50">filled</p></div>
          </div>
        </div>

        <h3 className="title50 mt-400 mb-100">Icon Colors</h3>
        <div className="doc-preview">
          <span className="doc-preview-label">Live</span>
          <div className="demo-row">
            <span className="icon icon-400 text-primary">home</span>
            <span className="icon icon-400 text-secondary">info</span>
            <span className="icon icon-400 text-brand-core">sports_soccer</span>
            <span className="icon icon-400 text-brand-interactive">arrow_forward</span>
            <span className="icon icon-400 text-success">check_circle</span>
            <span className="icon icon-400 text-error">error</span>
            <span className="icon icon-400 text-warning">warning</span>
            <span className="icon icon-400 text-info">info</span>
          </div>
        </div>

        <div className="doc-note mt-200">
          <p className="bodyRegular30"><strong>Size matching guide:</strong></p>
          <p className="bodyRegular30 mt-50"><code>.icon-100</code> (16px) — Inline with <code>.labelBold20</code> / <code>.labelRegular20</code></p>
          <p className="bodyRegular30 mt-50"><code>.icon-200</code> (20px) — Inline with <code>.bodyRegular30</code> / <code>.labelBold30</code></p>
          <p className="bodyRegular30 mt-50"><code>.icon-300</code> (24px) — Default. Nav, buttons, cards</p>
          <p className="bodyRegular30 mt-50"><code>.icon-400</code> (32px) — Section headers, emphasized</p>
          <p className="bodyRegular30 mt-50"><code>.icon-500</code> (40px) — Large feature icons, empty states</p>
          <p className="bodyRegular30 mt-50"><code>.icon-600</code> (48px) — Illustrative, hero sections</p>
        </div>
      </div>

      {/* PREV / NEXT */}
      <div className="doc-prevnext">
        <Link className="doc-prevnext-prev surface-ghost scale-700" to="/documentation/foundations">
          <span className="icon">arrow_back</span>
          <div className="doc-prevnext-text">
            <span className="doc-prevnext-label">Previous</span>
            <span className="doc-prevnext-title">Foundations</span>
          </div>
        </Link>
        <Link className="doc-prevnext-next surface-ghost scale-700" to="/documentation/surfaces">
          <div className="doc-prevnext-text">
            <span className="doc-prevnext-label">Next</span>
            <span className="doc-prevnext-title">Interactive Tokens</span>
          </div>
          <span className="icon">arrow_forward</span>
        </Link>
      </div>
    </DocShell>
  )
}
