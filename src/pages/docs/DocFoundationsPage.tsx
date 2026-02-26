import { Link } from 'react-router-dom'
import DocShell from '../../layouts/DocShell'

export default function DocFoundationsPage() {
  return (
    <DocShell>
      {/* PAGE INTRO */}
      <div className="container-wide py-large">
        <h1 className="display500 mb-200">Foundations</h1>
        <p className="bodyRegular30 text-primary doc-prose">
          The raw token layers: color scales, the 8px spacing grid, container widths, and
          border/shadow tokens. React components consume these tokens automatically — this page
          is a reference for understanding the system and for writing custom styles that need to
          reference token variables directly.
        </p>
      </div>

      {/* 1. COLORS */}
      <div className="container-wide py-large border-top" id="colors">
        <h2 className="title80">Colors</h2>
        <p className="bodyRegular30 text-primary doc-prose mt-100">
          Colors are organized in layers. Raw <strong>org-level</strong> values (per team + mode)
          feed into <strong>semantic tokens</strong> you actually use. Never reference{' '}
          <code>--org-*</code> directly.
        </p>

        <div className="doc-code-block mt-200">
          <code>
            Team + Mode defines &rarr; --org-base, --org-surface, etc.{'\n'}
            {'          '}&darr; Semantic tokens  &rarr; --bg-base, --bg-surface, etc.  &larr; USE THESE
          </code>
        </div>

        <h3 className="title50 mt-400 mb-100">Background Tokens</h3>
        <div className="doc-preview">
          <span className="doc-preview-label">Live</span>
          <div className="grid gap-card grid-cols-4-desktop grid-cols-2-tablet grid-cols-1-mobile">
            <div className="border rounded-200 p-250" style={{ background: 'var(--bg-base)', textAlign: 'center' }}>
              <span className="labelBold20">--bg-base</span>
              <p className="labelRegular10 text-secondary mt-50">Page background</p>
            </div>
            <div className="border rounded-200 p-250" style={{ background: 'var(--bg-surface)', textAlign: 'center' }}>
              <span className="labelBold20">--bg-surface</span>
              <p className="labelRegular10 text-secondary mt-50">Cards, tiles</p>
            </div>
            <div className="border rounded-200 p-250" style={{ background: 'var(--bg-sheet)', textAlign: 'center' }}>
              <span className="labelBold20">--bg-sheet</span>
              <p className="labelRegular10 text-secondary mt-50">Modals, sheets</p>
            </div>
            <div className="border rounded-200 p-250" style={{ background: 'var(--bg-nav)', textAlign: 'center', backdropFilter: 'blur(var(--background-blur))' }}>
              <span className="labelBold20">--bg-nav</span>
              <p className="labelRegular10 text-secondary mt-50">Nav bar + blur</p>
            </div>
            <div className="border rounded-200 p-250" style={{ background: 'var(--bg-input)', textAlign: 'center' }}>
              <span className="labelBold20">--bg-input</span>
              <p className="labelRegular10 text-secondary mt-50">Input fields</p>
            </div>
          </div>
        </div>

        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Token</th><th>Role</th><th>Light Mode</th><th>Dark Mode</th></tr></thead>
            <tbody>
              <tr><td><code>--bg-base</code></td><td>Main page background</td><td>White (#FFFFFF)</td><td>Near-black (#081627 wolves, #111111 others)</td></tr>
              <tr><td><code>--bg-surface</code></td><td>Cards, tiles, elevated areas</td><td>Light gray (#EEF2F6 wolves, #F4F4F4 others)</td><td>Dark surface (#0C233F wolves, #1F1F1F others)</td></tr>
              <tr><td><code>--bg-sheet</code></td><td>Modals, sheets, highest layer</td><td>White (#FFFFFF)</td><td>Slightly lighter (#112B4A wolves, #292929 others)</td></tr>
              <tr><td><code>--bg-nav</code></td><td>Navigation bar (use with blur)</td><td>Semi-transparent white</td><td>Dark surface or semi-transparent dark</td></tr>
              <tr><td><code>--bg-input</code></td><td>Input field background</td><td>White (#FFFFFF) — stands out on gray surfaces</td><td>Transparent — inherits dark surface color</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="title50 mt-400 mb-100">Text Tokens</h3>
        <div className="doc-preview">
          <span className="doc-preview-label">Live</span>
          <div className="doc-demo-col">
            <p className="labelBold30 text-primary">--text-primary — Headlines, body copy, high contrast</p>
            <p className="labelBold30 text-secondary">--text-secondary — Subtitles, captions, metadata</p>
            <p className="labelBold30 text-disabled">--text-disabled — Disabled states</p>
            <p className="labelBold30 text-placeholder">--text-placeholder — Input placeholders</p>
          </div>
        </div>

        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Token</th><th>Role</th><th>When to Use</th></tr></thead>
            <tbody>
              <tr><td><code>--text-primary</code></td><td>Highest contrast text</td><td>Headlines, body copy, anything that needs to be clearly readable</td></tr>
              <tr><td><code>--text-secondary</code></td><td>Medium contrast text</td><td>Subtitles, captions, metadata, supporting info</td></tr>
              <tr><td><code>--text-disabled</code></td><td>Low contrast text</td><td>Disabled states, unavailable options</td></tr>
              <tr><td><code>--text-placeholder</code></td><td>Input placeholder text</td><td>Empty form fields</td></tr>
            </tbody>
          </table>
        </div>
        <p className="bodyRegular30 text-primary doc-prose mt-100">
          These are built on the neutral scale — in light mode they're black-based, in dark mode
          they flip to white-based. Just use the semantic tokens.
        </p>

        <h3 className="title50 mt-400 mb-100">Brand Tokens (Team-Specific)</h3>
        <div className="doc-preview">
          <span className="doc-preview-label">Live</span>
          <div className="swatch-row">
            <div className="swatch"><div className="swatch-color" style={{ background: 'var(--brand-core)' }}></div><span className="labelRegular10 text-secondary">core</span></div>
            <div className="swatch"><div className="swatch-color" style={{ background: 'var(--brand-light)' }}></div><span className="labelRegular10 text-secondary">light</span></div>
            <div className="swatch"><div className="swatch-color" style={{ background: 'var(--brand-dark)' }}></div><span className="labelRegular10 text-secondary">dark</span></div>
            <div className="swatch"><div className="swatch-color" style={{ background: 'var(--brand-interactive)' }}></div><span className="labelRegular10 text-secondary">brand-interactive</span></div>
            <div className="swatch"><div className="swatch-color" style={{ background: 'var(--brand-inverted)' }}></div><span className="labelRegular10 text-secondary">brand-inverted</span></div>
          </div>
        </div>

        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Token</th><th>Role</th><th>Light Mode (Wolves)</th><th>Dark Mode (Wolves)</th></tr></thead>
            <tbody>
              <tr><td><code>--brand-core</code></td><td>Primary brand color (static)</td><td colSpan={2}>#266092 (blue) — never changes</td></tr>
              <tr><td><code>--brand-light</code></td><td>Secondary/accent (static)</td><td colSpan={2}>#79BC43 (green) — never changes</td></tr>
              <tr><td><code>--brand-dark</code></td><td>Dark brand variant (static)</td><td colSpan={2}>#0C233F (navy) — never changes</td></tr>
              <tr><td><code>--brand-interactive</code></td><td>Mode-aware interactive color ✦</td><td>#266092 (color-interactive)</td><td>#79BC43 (color-inverted)</td></tr>
              <tr><td><code>--brand-inverted</code></td><td>Mode-aware inverted color ✦</td><td>#79BC43 (color-inverted)</td><td>#266092 (color-interactive)</td></tr>
            </tbody>
          </table>
        </div>

        <div className="doc-note mt-200">
          <p className="bodyRegular30">
            <strong>✦ Always use <code>--brand-interactive</code> and <code>--brand-inverted</code>{' '}
            instead of <code>--color-interactive</code> / <code>--color-inverted</code>.</strong>
          </p>
          <p className="bodyRegular30 mt-100">
            The <code>--color-*</code> tokens are static raw values — they never change between light
            and dark mode. The <code>--brand-*</code> tokens are mode-aware: in light mode,{' '}
            <code>--brand-interactive</code> is the primary brand color; in dark mode it flips to
            the accent. Switch the mode above to see the swatches change.
          </p>
        </div>

        <h3 className="title50 mt-400 mb-100">Interactive Tokens (Buttons)</h3>
        <p className="bodyRegular30 text-primary doc-prose mb-100">
          These control button colors and flip between light and dark mode automatically. In light
          mode, primary buttons use the brand color with white text. In dark mode they invert to
          the accent color — this swap is powered by <code>--brand-interactive</code> and{' '}
          <code>--brand-inverted</code>.
        </p>
        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Token</th><th>Role</th></tr></thead>
            <tbody>
              <tr><td><code>--interactive-primary</code></td><td>Primary button background</td></tr>
              <tr><td><code>--interactive-primary-text</code></td><td>Text on primary buttons</td></tr>
              <tr><td><code>--interactive-secondary-text</code></td><td>Text on secondary (outlined) buttons</td></tr>
              <tr><td><code>--interactive-tertiary-text</code></td><td>Text on tertiary (ghost) buttons</td></tr>
              <tr><td><code>--interactive-transactional</code></td><td>CTA / purchase button background</td></tr>
              <tr><td><code>--interactive-transactional-text</code></td><td>Text on transactional buttons</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="title50 mt-400 mb-100">Border Tokens</h3>
        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Token</th><th>Role</th></tr></thead>
            <tbody>
              <tr><td><code>--border-default</code></td><td>Standard borders (subtle, uses neutral-300)</td></tr>
              <tr><td><code>--border-hover</code></td><td>Hover state borders (medium contrast, neutral-500)</td></tr>
              <tr><td><code>--border-active</code></td><td>Focus/active borders (high contrast, neutral-1000)</td></tr>
              <tr><td><code>--border-disabled</code></td><td>Disabled element borders (neutral-200)</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="title50 mt-400 mb-100">Neutral Scale</h3>
        <p className="bodyRegular30 text-primary doc-prose mb-100">
          Opacity-based scale that flips between light and dark mode automatically.
        </p>
        <div className="doc-preview">
          <span className="doc-preview-label">Live</span>
          <div className="swatch-row">
            <div className="swatch"><div className="swatch-color" style={{ background: 'var(--neutral-50)' }}></div><span className="labelRegular10 text-secondary">50</span></div>
            <div className="swatch"><div className="swatch-color" style={{ background: 'var(--neutral-100)' }}></div><span className="labelRegular10 text-secondary">100</span></div>
            <div className="swatch"><div className="swatch-color" style={{ background: 'var(--neutral-200)' }}></div><span className="labelRegular10 text-secondary">200</span></div>
            <div className="swatch"><div className="swatch-color" style={{ background: 'var(--neutral-300)' }}></div><span className="labelRegular10 text-secondary">300</span></div>
            <div className="swatch"><div className="swatch-color" style={{ background: 'var(--neutral-500)' }}></div><span className="labelRegular10 text-secondary">500</span></div>
            <div className="swatch"><div className="swatch-color" style={{ background: 'var(--neutral-700)' }}></div><span className="labelRegular10 text-secondary">700</span></div>
            <div className="swatch"><div className="swatch-color" style={{ background: 'var(--neutral-900)' }}></div><span className="labelRegular10 text-secondary">900</span></div>
            <div className="swatch"><div className="swatch-color" style={{ background: 'var(--neutral-1000)' }}></div><span className="labelRegular10 text-secondary">1000</span></div>
          </div>
        </div>

        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Token</th><th>Light Mode</th><th>Dark Mode</th><th>Use For</th></tr></thead>
            <tbody>
              <tr><td><code>--neutral-50</code></td><td>rgba(0,0,0,0.03)</td><td>rgba(255,255,255,0.05)</td><td>Barely visible tint</td></tr>
              <tr><td><code>--neutral-100</code></td><td>rgba(0,0,0,0.04)</td><td>rgba(255,255,255,0.1)</td><td>Subtle backgrounds</td></tr>
              <tr><td><code>--neutral-200</code></td><td>rgba(0,0,0,0.1)</td><td>rgba(255,255,255,0.15)</td><td>Light borders</td></tr>
              <tr><td><code>--neutral-300</code></td><td>rgba(0,0,0,0.15)</td><td>rgba(255,255,255,0.25)</td><td>Default borders</td></tr>
              <tr><td><code>--neutral-500</code></td><td>rgba(0,0,0,0.4)</td><td>rgba(255,255,255,0.55)</td><td>Placeholder text</td></tr>
              <tr><td><code>--neutral-700</code></td><td>rgba(0,0,0,0.65)</td><td>rgba(255,255,255,0.75)</td><td>Secondary text</td></tr>
              <tr><td><code>--neutral-900</code></td><td>rgba(0,0,0,0.85)</td><td>rgba(255,255,255,0.95)</td><td>Near-opaque</td></tr>
              <tr><td><code>--neutral-1000</code></td><td>rgba(0,0,0,1)</td><td>rgba(255,255,255,1)</td><td>Full contrast</td></tr>
            </tbody>
          </table>
        </div>
        <p className="bodyRegular30 text-primary doc-prose mt-100">
          The <strong>inverted scale</strong> is the opposite of neutral (white-based in light,
          black-based in dark). Useful for overlays or reversed elements. <strong>White/Black
          scales</strong> are mode-agnostic — always the same regardless of light/dark.
        </p>

        <h3 className="title50 mt-400 mb-100">Status Colors</h3>
        <div className="doc-preview">
          <span className="doc-preview-label">Live</span>
          <div className="swatch-row">
            <div className="swatch"><div className="swatch-color" style={{ background: 'var(--status-success)' }}></div><span className="labelRegular10 text-secondary">success</span></div>
            <div className="swatch"><div className="swatch-color" style={{ background: 'var(--status-warning)' }}></div><span className="labelRegular10 text-secondary">warning</span></div>
            <div className="swatch"><div className="swatch-color" style={{ background: 'var(--status-error)' }}></div><span className="labelRegular10 text-secondary">error</span></div>
            <div className="swatch"><div className="swatch-color" style={{ background: 'var(--status-info)' }}></div><span className="labelRegular10 text-secondary">info</span></div>
          </div>
        </div>
        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Token</th><th>Light Mode</th><th>Dark Mode</th></tr></thead>
            <tbody>
              <tr><td><code>--status-success</code></td><td>#007A47</td><td>#00A96E</td></tr>
              <tr><td><code>--status-warning</code></td><td>#D2811E</td><td>#F6AF24</td></tr>
              <tr><td><code>--status-error</code></td><td>#D42F21</td><td>#E43E2F</td></tr>
              <tr><td><code>--status-info</code></td><td>#0671E5</td><td>#3892F3</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. SPACING */}
      <div className="container-wide py-large border-top" id="spacing">
        <h2 className="title80">Spacing</h2>
        <p className="bodyRegular30 text-primary doc-prose mt-100">
          All spacing is based on multiples of 8px. This keeps everything aligned and consistent.
          Fixed tokens stay constant; responsive tokens scale across breakpoints.
        </p>

        <div className="doc-note mt-200">
          <p className="bodyRegular30">
            <strong>Fixed tokens</strong> (e.g. <code>--spacing-300</code>) &rarr; internal
            component padding, button padding, anything that should stay the same size at all
            breakpoints.
          </p>
          <p className="bodyRegular30 mt-50">
            <strong>Responsive tokens</strong> (e.g. <code>--spacing-card</code>,{' '}
            <code>--margin-large</code>) &rarr; gaps between cards, section margins, page-level
            spacing that should feel proportional.
          </p>
        </div>

        <h3 className="title50 mt-400 mb-100">Fixed Spacing Scale (4px – 80px)</h3>
        <div className="doc-preview">
          <span className="doc-preview-label">Live</span>
          <div className="spacing-vis">
            {[
              { scale: '50', px: '4px', h: 4 }, { scale: '100', px: '8px', h: 8 },
              { scale: '150', px: '12px', h: 12 }, { scale: '200', px: '16px', h: 16 },
              { scale: '250', px: '20px', h: 20 }, { scale: '300', px: '24px', h: 24 },
              { scale: '400', px: '32px', h: 32 }, { scale: '500', px: '40px', h: 40 },
              { scale: '600', px: '48px', h: 48 }, { scale: '700', px: '56px', h: 56 },
              { scale: '800', px: '64px', h: 64 }, { scale: '900', px: '72px', h: 72 },
              { scale: '1000', px: '80px', h: 80 },
            ].map(({ scale, px, h }) => (
              <div key={scale} className="doc-demo-cell">
                <div className="spacing-bar" style={{ width: 20, height: h }}></div>
                <p className="labelRegular10 text-secondary mt-50">{scale}<br />{px}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Token</th><th>Value</th><th>Multiplier</th><th>Common Use</th></tr></thead>
            <tbody>
              <tr><td><code>--spacing-25</code></td><td>2px</td><td>0.25×</td><td>Sub-unit gaps, tight label/input stacking</td></tr>
              <tr><td><code>--spacing-50</code></td><td>4px</td><td>0.5×</td><td>Minimal gaps, icon padding</td></tr>
              <tr><td><code>--spacing-100</code></td><td>8px</td><td>1×</td><td>Tight spacing, compact layouts</td></tr>
              <tr><td><code>--spacing-150</code></td><td>12px</td><td>1.5×</td><td>Small gaps between related items</td></tr>
              <tr><td><code>--spacing-200</code></td><td>16px</td><td>2×</td><td>Standard spacing, input padding</td></tr>
              <tr><td><code>--spacing-250</code></td><td>20px</td><td>2.5×</td><td>Card internal padding</td></tr>
              <tr><td><code>--spacing-300</code></td><td>24px</td><td>3×</td><td>Comfortable spacing between sections</td></tr>
              <tr><td><code>--spacing-400</code></td><td>32px</td><td>4×</td><td>Large gaps between components</td></tr>
              <tr><td><code>--spacing-500</code></td><td>40px</td><td>5×</td><td>Extra large section spacing</td></tr>
              <tr><td><code>--spacing-600</code></td><td>48px</td><td>6×</td><td>Major section breaks</td></tr>
              <tr><td><code>--spacing-700</code></td><td>56px</td><td>7×</td><td>Large section breaks</td></tr>
              <tr><td><code>--spacing-800</code></td><td>64px</td><td>8×</td><td>Hero-level spacing</td></tr>
              <tr><td><code>--spacing-900</code></td><td>72px</td><td>9×</td><td>Maximum fixed spacing</td></tr>
              <tr><td><code>--spacing-1000</code></td><td>80px</td><td>10×</td><td>Landing page spacing</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="title50 mt-400 mb-100">Responsive Spacing</h3>
        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Token</th><th>Mobile &lt;500px</th><th>Tablet 500–1099px</th><th>Desktop 1100px+</th><th>Best For</th></tr></thead>
            <tbody>
              <tr><td><code>--spacing-row</code></td><td>8px</td><td>12px</td><td>16px</td><td>Event rows, selectors, short wide objects</td></tr>
              <tr><td><code>--spacing-card</code></td><td>16px</td><td>20px</td><td>24px</td><td>Space between cards in a grid</td></tr>
              <tr><td><code>--spacing-content</code></td><td>32px</td><td>40px</td><td>48px</td><td>Between major content sections</td></tr>
              <tr><td><code>--margin-small</code></td><td>16px</td><td>32px</td><td>48px</td><td>Detailed interfaces, compact page margins</td></tr>
              <tr><td><code>--margin-large</code></td><td>16px</td><td>40px</td><td>64px</td><td>Standard page margins (most pages)</td></tr>
              <tr><td><code>--margin-landing</code></td><td>24px</td><td>48px</td><td>80px</td><td>Landing pages, hero sections, open layouts</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. SPACING UTILS */}
      <div className="container-wide py-large border-top" id="spacing-utils">
        <h2 className="title80">Spacing Utilities</h2>
        <p className="bodyRegular30 text-primary doc-prose mt-100">
          Every spacing token has matching utility classes in <code>boilerplate.css</code>. The
          naming pattern is consistent:
        </p>

        <div className="doc-note mt-200">
          <p className="bodyRegular30"><strong>Pattern:</strong> <code>{'{property}-{value}'}</code></p>
          <p className="bodyRegular30 mt-100">
            <strong>Properties:</strong> <code>m</code> · <code>mt</code> · <code>mb</code> ·{' '}
            <code>ml</code> · <code>mr</code> · <code>mx</code> · <code>my</code> · <code>p</code> ·{' '}
            <code>pt</code> · <code>pb</code> · <code>pl</code> · <code>pr</code> · <code>px</code> ·{' '}
            <code>py</code> · <code>gap</code> · <code>gap-x</code> · <code>gap-y</code>
          </p>
          <p className="bodyRegular30 mt-50">
            <strong>Values:</strong> <code>50</code> · <code>100</code> · <code>150</code> ·{' '}
            <code>200</code> · <code>250</code> · <code>300</code> · <code>400</code> ·{' '}
            <code>500</code> · <code>600</code> · <code>700</code> · <code>800</code> · <code>900</code>
          </p>
        </div>

        <h3 className="title50 mt-400 mb-100">Examples</h3>
        <div className="doc-preview">
          <span className="doc-preview-label">Examples</span>
          <div className="doc-demo-col">
            <div className="demo-row"><code className="labelBold20">.p-300</code><span className="labelRegular20 text-secondary ml-auto">padding: 24px all sides</span></div>
            <div className="demo-row"><code className="labelBold20">.mb-200</code><span className="labelRegular20 text-secondary ml-auto">margin-bottom: 16px</span></div>
            <div className="demo-row"><code className="labelBold20">.px-400</code><span className="labelRegular20 text-secondary ml-auto">padding-left + right: 32px</span></div>
            <div className="demo-row"><code className="labelBold20">.gap-150</code><span className="labelRegular20 text-secondary ml-auto">flex/grid gap: 12px</span></div>
            <div className="demo-row"><code className="labelBold20">.py-large</code><span className="labelRegular20 text-secondary ml-auto">16px → 40px → 64px</span></div>
            <div className="demo-row"><code className="labelBold20">.mx-auto</code><span className="labelRegular20 text-secondary ml-auto">center horizontally</span></div>
          </div>
        </div>
      </div>

      {/* 4. CONTAINERS */}
      <div className="container-wide py-large border-top" id="containers">
        <h2 className="title80">Containers</h2>
        <p className="bodyRegular30 text-primary doc-prose mt-100">
          Containers set a <code>max-width</code>, center content with <code>margin: auto</code>,
          and add responsive horizontal padding. Mix containers on the same page for different
          content zones.
        </p>

        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Class</th><th>Max Width</th><th>Padding (Mobile → Tablet → Desktop)</th><th>Best For</th></tr></thead>
            <tbody>
              <tr><td><code>.container-maximum</code></td><td>1600px</td><td>16px → 24px → 48px</td><td>Landing page heroes, full-width dashboards</td></tr>
              <tr><td><code>.container-extra-wide</code></td><td>1440px</td><td>16px → 24px → 48px</td><td>Complex dashboards, data-heavy pages</td></tr>
              <tr><td><code>.container-wide</code></td><td>1280px</td><td>16px → 24px → 32px</td><td>Standard pages with sidebars, event listings</td></tr>
              <tr><td><code>.container</code></td><td>1200px</td><td>16px → 24px → 32px</td><td>Default / general purpose</td></tr>
              <tr><td><code>.container-medium</code></td><td>1024px</td><td>16px → 24px → 32px</td><td>Article pages, form pages</td></tr>
              <tr><td><code>.container-narrow</code></td><td>768px</td><td>16px → 24px → 32px</td><td>Long-form reading, centered forms, legal pages</td></tr>
              <tr><td><code>.container-compact</code></td><td>640px</td><td>16px → 24px → 32px</td><td>Single column content, confirmation pages</td></tr>
              <tr><td><code>.container-fluid</code></td><td>none</td><td>16px → 24px → 32px</td><td>Full-width sections, maps, video players</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 5. BORDERS */}
      <div className="container-wide py-large border-top" id="borders">
        <h2 className="title80">Borders &amp; Drop Shadows</h2>

        <h3 className="title50 mt-400 mb-100">Border Radius</h3>
        <p className="bodyRegular30 text-primary doc-prose mb-100">
          The <code>--button-border-radius</code> token is team-specific — it's automatically
          applied by the <code>.btn</code> and <code>.btn-circle</code> classes.
        </p>
        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Token</th><th>Value</th><th>Use For</th></tr></thead>
            <tbody>
              <tr><td><code>--border-radius-50</code></td><td>4px</td><td>Small elements, badges, tags</td></tr>
              <tr><td><code>--border-radius-100</code></td><td>8px</td><td>Cards, inputs, standard UI</td></tr>
              <tr><td><code>--border-radius-200</code></td><td>16px</td><td>Large cards, hero sections</td></tr>
              <tr><td><code>--button-border-radius</code></td><td>Team-specific</td><td>Buttons (8px wolves/summit, 12px lynx, 100px all others)</td></tr>
            </tbody>
          </table>
        </div>

        <div className="doc-preview">
          <span className="doc-preview-label">Live</span>
          <div className="demo-row">
            <div className="doc-demo-cell">
              <div className="doc-radius-box" style={{ borderRadius: 'var(--border-radius-50)' }}><span className="labelBold10">50</span></div>
            </div>
            <div className="doc-demo-cell">
              <div className="doc-radius-box" style={{ borderRadius: 'var(--border-radius-100)' }}><span className="labelBold10">100</span></div>
            </div>
            <div className="doc-demo-cell">
              <div className="doc-radius-box" style={{ borderRadius: 'var(--border-radius-200)' }}><span className="labelBold10">200</span></div>
            </div>
            <div className="doc-demo-cell">
              <div className="doc-radius-box rounded-button" style={{ width: 120, height: 48, background: 'var(--interactive-transactional)' }}>
                <span className="labelBold10" style={{ color: 'var(--white-1000)' }}>button</span>
              </div>
            </div>
          </div>
        </div>

        <h3 className="title50 mt-400 mb-100">Border Utilities</h3>
        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Class</th><th>What It Does</th></tr></thead>
            <tbody>
              <tr><td><code>.border</code></td><td>1px solid with --border-default color</td></tr>
              <tr><td><code>.border-thin</code></td><td>1px solid with --neutral-200</td></tr>
              <tr><td><code>.border-heavy</code></td><td>2px solid with --neutral-1000</td></tr>
              <tr><td><code>.border-interactive</code></td><td>2px solid with --interactive-transactional</td></tr>
              <tr><td><code>.border-top</code></td><td>1px solid border on top only</td></tr>
              <tr><td><code>.border-bottom</code></td><td>1px solid border on bottom only</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="title50 mt-400 mb-100">Drop Shadows</h3>
        <div className="doc-note">
          <p className="bodyRegular30">
            <strong>Shadows are reserved for elevated surfaces only</strong> — sheets and modals.
            Do not use them on regular cards. Use <code>--bg-surface</code> and borders instead.
          </p>
        </div>
        <div className="doc-table-wrap mt-100">
          <table className="doc-table">
            <thead><tr><th>Token / Class</th><th>Use For</th></tr></thead>
            <tbody>
              <tr><td><code>--shadow-sheet</code> / <code>.shadow-sheet</code></td><td>Mobile bottom sheets, elevated cards</td></tr>
              <tr><td><code>--shadow-modal</code> / <code>.shadow-modal</code></td><td>Desktop modals, overlays (highest elevation)</td></tr>
              <tr><td><code>.shadow-none</code></td><td>Remove shadow</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* PREV / NEXT */}
      <div className="doc-prevnext">
        <Link className="doc-prevnext-prev surface-ghost scale-700" to="/documentation/how-it-works">
          <span className="icon">arrow_back</span>
          <div className="doc-prevnext-text">
            <span className="doc-prevnext-label">Previous</span>
            <span className="doc-prevnext-title">How It Works</span>
          </div>
        </Link>
        <Link className="doc-prevnext-next surface-ghost scale-700" to="/documentation/typography">
          <div className="doc-prevnext-text">
            <span className="doc-prevnext-label">Next</span>
            <span className="doc-prevnext-title">Typography &amp; Icons</span>
          </div>
          <span className="icon">arrow_forward</span>
        </Link>
      </div>
    </DocShell>
  )
}
