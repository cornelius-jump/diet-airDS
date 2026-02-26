import { useState } from 'react'
import { Link } from 'react-router-dom'
import DocShell from '../../layouts/DocShell'
import { TopBar } from '../../components/TopBar'
import { Tabs } from '../../components/Tabs'
import { Steps } from '../../components/Steps'
import { PageHeader } from '../../components/PageHeader'
import { Button } from '../../components/Button'

const LOGO = 'https://diet-air-ds.vercel.app/images/wolves.svg'

export default function DocNavigationPage() {
  const [activeTab, setActiveTab] = useState('schedule')

  return (
    <DocShell>
      {/* PAGE INTRO */}
      <div className="container-wide py-large">
        <h1 className="display500 mb-200">Navigation</h1>
        <p className="bodyRegular30 text-primary doc-prose">
          Page-level structural components: a sticky top bar, tab strips, step indicators, and
          page headers. All are imported from <code>'diet-airds'</code>.
        </p>
        <div className="doc-code-block mt-200">
          <code>{`import { TopBar, Tabs, Steps, PageHeader } from 'diet-airds'`}</code>
        </div>
      </div>

      {/* ─── TOPBAR ─── */}
      <div className="container-wide py-large border-top" id="topbar">
        <h2 className="title80">TopBar</h2>
        <p className="bodyRegular30 text-primary doc-prose mt-100 mb-200">
          Sticky navigation bar with a logo, team name, and an actions slot for buttons or icons.
        </p>

        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Prop</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>logoSrc</code></td><td>string</td><td>Team logo URL</td></tr>
              <tr><td><code>teamName</code></td><td>string</td><td>Team name for logo alt text</td></tr>
              <tr><td><code>shortName</code></td><td>string</td><td>Short name shown on mobile</td></tr>
              <tr><td><code>fullName</code></td><td>string</td><td>Full name shown on tablet+</td></tr>
              <tr><td><code>href</code></td><td>string</td><td>Home link href</td></tr>
              <tr><td><code>actions</code></td><td>ReactNode</td><td>Right slot — buttons, icon buttons, auth UI</td></tr>
            </tbody>
          </table>
        </div>

        <div className="doc-preview mt-200">
          <span className="doc-preview-label">Live</span>
          <TopBar
            logoSrc={LOGO}
            teamName="Timberwolves"
            shortName="Wolves"
            fullName="Minnesota Timberwolves"
            href="#"
            actions={
              <div style={{ display: 'flex', gap: 'var(--spacing-100)' }}>
                <Button variant="secondary" size="xsmall">Sign In</Button>
                <Button variant="primary" size="xsmall">Get Tickets</Button>
              </div>
            }
          />
        </div>

        <div className="doc-code-block mt-200">
          <code>{`<TopBar
  logoSrc="/images/wolves.svg"
  teamName="Timberwolves"
  shortName="Wolves"
  fullName="Minnesota Timberwolves"
  href="/"
  actions={
    <div style={{ display: 'flex', gap: 'var(--spacing-100)' }}>
      <Button variant="secondary" size="xsmall">Sign In</Button>
      <Button variant="primary" size="xsmall">Get Tickets</Button>
    </div>
  }
/>`}</code>
        </div>
      </div>

      {/* ─── TABS ─── */}
      <div className="container-wide py-large border-top" id="tabs">
        <h2 className="title80">Tabs</h2>
        <p className="bodyRegular30 text-primary doc-prose mt-100 mb-200">
          A tab strip with an active underline indicator. Controlled — pass <code>activeTab</code>
          and update state in <code>onChange</code>.
        </p>

        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>tabs</code></td><td>TabItem[]</td><td>—</td><td>Array of <code>{'{label, value}'}</code> objects (required)</td></tr>
              <tr><td><code>activeTab</code></td><td>string</td><td>—</td><td>Active tab value (required)</td></tr>
              <tr><td><code>onChange</code></td><td>function</td><td>—</td><td>Called with new value when tab changes (required)</td></tr>
              <tr><td><code>neutral</code></td><td>boolean</td><td><code>false</code></td><td>Neutral-colored indicator instead of brand color</td></tr>
              <tr><td><code>ariaLabel</code></td><td>string</td><td>—</td><td>Accessible label for the tablist</td></tr>
            </tbody>
          </table>
        </div>

        <div className="doc-preview mt-200">
          <span className="doc-preview-label">Live — click tabs</span>
          <Tabs
            tabs={[
              { label: 'Schedule', value: 'schedule' },
              { label: 'Standings', value: 'standings' },
              { label: 'Stats', value: 'stats' },
              { label: 'Roster', value: 'roster' },
            ]}
            activeTab={activeTab}
            onChange={setActiveTab}
            ariaLabel="Section navigation"
          />
        </div>

        <div className="doc-code-block mt-200">
          <code>{`const [activeTab, setActiveTab] = useState('schedule')

<Tabs
  tabs={[
    { label: 'Schedule', value: 'schedule' },
    { label: 'Standings', value: 'standings' },
  ]}
  activeTab={activeTab}
  onChange={setActiveTab}
/>`}</code>
        </div>
      </div>

      {/* ─── STEPS ─── */}
      <div className="container-wide py-large border-top" id="steps">
        <h2 className="title80">Steps</h2>
        <p className="bodyRegular30 text-primary doc-prose mt-100 mb-200">
          A step progress indicator showing completed, active, and pending states. Use inside a
          checkout or multi-step flow.
        </p>

        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>steps</code></td><td>StepItem[]</td><td>—</td><td>Array of <code>{'{label, state}'}</code> objects (required)</td></tr>
              <tr><td><code>brand</code></td><td>boolean</td><td><code>false</code></td><td>Completed steps use brand color instead of green</td></tr>
            </tbody>
          </table>
        </div>

        <div className="doc-table-wrap mt-200">
          <table className="doc-table">
            <thead><tr><th>state</th><th>Display</th></tr></thead>
            <tbody>
              <tr><td><code>'completed'</code></td><td>Checkmark — green (or brand color with brand prop)</td></tr>
              <tr><td><code>'active'</code></td><td>Number — brand colored indicator</td></tr>
              <tr><td><code>'pending'</code></td><td>Number — muted/disabled appearance</td></tr>
            </tbody>
          </table>
        </div>

        <div className="doc-preview mt-200">
          <span className="doc-preview-label">Live</span>
          <Steps
            steps={[
              { label: 'Seat Selection', state: 'completed' },
              { label: 'Account', state: 'active' },
              { label: 'Payment', state: 'pending' },
            ]}
          />
        </div>

        <div className="doc-code-block mt-200">
          <code>{`<Steps
  steps={[
    { label: 'Seat Selection', state: 'completed' },
    { label: 'Account', state: 'active' },
    { label: 'Payment', state: 'pending' },
  ]}
/>`}</code>
        </div>
      </div>

      {/* ─── PAGE HEADER ─── */}
      <div className="container-wide py-large border-top" id="page-header">
        <h2 className="title80">PageHeader</h2>
        <p className="bodyRegular30 text-primary doc-prose mt-100 mb-200">
          A page title block with optional tabs below and optional steps above. Commonly used as
          the top section of a content page.
        </p>

        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Prop</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>title</code></td><td>ReactNode</td><td>Main title (required)</td></tr>
              <tr><td><code>subtitle</code></td><td>ReactNode</td><td>Supporting subtitle text</td></tr>
              <tr><td><code>tabs</code></td><td>ReactNode</td><td>Tabs component rendered below the text</td></tr>
              <tr><td><code>steps</code></td><td>ReactNode</td><td>Steps component rendered above the text</td></tr>
            </tbody>
          </table>
        </div>

        <div className="doc-preview mt-200">
          <span className="doc-preview-label">Live</span>
          <PageHeader
            title="2024–25 Schedule"
            subtitle="Minnesota Timberwolves · NBA"
            tabs={
              <Tabs
                tabs={[
                  { label: 'All Games', value: 'all' },
                  { label: 'Home', value: 'home' },
                  { label: 'Away', value: 'away' },
                ]}
                activeTab="all"
                onChange={() => {}}
              />
            }
          />
        </div>

        <div className="doc-code-block mt-200">
          <code>{`<PageHeader
  title="2024–25 Schedule"
  subtitle="Minnesota Timberwolves · NBA"
  tabs={
    <Tabs
      tabs={[{ label: 'All Games', value: 'all' }, ...]}
      activeTab={activeTab}
      onChange={setActiveTab}
    />
  }
/>`}</code>
        </div>
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
        <Link className="doc-prevnext-next surface-ghost scale-700" to="/documentation/reference">
          <div className="doc-prevnext-text">
            <span className="doc-prevnext-label">Next</span>
            <span className="doc-prevnext-title">Reference</span>
          </div>
          <span className="icon">arrow_forward</span>
        </Link>
      </div>
    </DocShell>
  )
}
