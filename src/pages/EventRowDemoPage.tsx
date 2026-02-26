import { useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import SiteShell from '../layouts/SiteShell'

interface DemoTeam {
  name: string
  initials: string
  color: string
}

const ALL_STATE_TEAMS: DemoTeam[] = [
  { name: 'Portland Marmots', initials: 'PM', color: '#c8102e' },
  { name: 'Charlotte Bullfrogs', initials: 'CB', color: '#00843d' },
  { name: 'Miami Geckos', initials: 'MG', color: '#512888' },
  { name: 'Omaha Otters', initials: 'OO', color: '#e87722' },
  { name: 'Portland Marmots', initials: 'PM', color: '#c8102e' },
]

const CONTEXT_TEAMS: DemoTeam[] = [
  { name: 'Portland Marmots', initials: 'PM', color: '#c8102e' },
  { name: 'Charlotte Bullfrogs', initials: 'CB', color: '#00843d' },
  { name: 'Miami Geckos', initials: 'MG', color: '#512888' },
  { name: 'Omaha Otters', initials: 'OO', color: '#e87722' },
  { name: 'Portland Marmots', initials: 'PM', color: '#c8102e' },
  { name: 'Miami Geckos', initials: 'MG', color: '#512888' },
  { name: 'Omaha Otters', initials: 'OO', color: '#e87722' },
]

function TeamLogo({ team }: { team: DemoTeam }) {
  return (
    <div
      className="logo-placeholder"
      aria-hidden="true"
      style={{
        width: 48, height: 48, borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 700,
        flexShrink: 0, color: 'white', background: team.color,
      }}
    >{team.initials}</div>
  )
}

const ALL_STATES = [
  {
    label: 'Featured Only',
    date: 'Tuesday, Oct 8 · 7 PM',
    type: 'featured-only' as const,
    price: '$19+',
  },
  {
    label: 'Featured and Others',
    date: 'Thursday, Oct 10 · 7 PM',
    type: 'featured-others' as const,
    price: '$21+',
    additionalOffers: 3,
  },
  {
    label: 'No Featured Offers',
    date: 'Wednesday, Oct 16 · 7 PM',
    type: 'no-featured' as const,
    offersAvailable: 3,
  },
  {
    label: 'Sold Out',
    date: 'Tuesday, Oct 22 · 7 PM',
    type: 'sold-out' as const,
  },
  {
    label: 'Coming Soon',
    date: 'Saturday, Oct 26 · 7 PM',
    type: 'coming-soon' as const,
  },
]

const CONTEXT_STATES = [
  { type: 'featured-others' as const, date: 'Tue, Oct 8 · 7 PM', price: '$19+', additionalOffers: 3 },
  { type: 'featured-only' as const, date: 'Thu, Oct 10 · 7 PM', price: '$21+' },
  { type: 'featured-only' as const, date: 'Wed, Oct 16 · 7 PM', price: '$18+' },
  { type: 'sold-out' as const, date: 'Tue, Oct 22 · 7 PM' },
  { type: 'no-featured' as const, date: 'Sat, Oct 26 · 7 PM', offersAvailable: 3 },
  { type: 'featured-others' as const, date: 'Wed, Oct 30 · 7 PM', price: '$24+', additionalOffers: 3 },
  { type: 'coming-soon' as const, date: 'Mon, Nov 4 · 7 PM' },
]

interface RowState {
  type: 'featured-only' | 'featured-others' | 'no-featured' | 'sold-out' | 'coming-soon'
  date: string
  price?: string
  additionalOffers?: number
  offersAvailable?: number
}

function EventRowItem({ team, state }: { team: DemoTeam; state: RowState }) {
  const topInteractive = state.type === 'featured-only' || state.type === 'featured-others'
  return (
    <div className="event-row">
      <div className={`event-row-top${topInteractive ? ' surface-section' : ''}`} style={topInteractive ? { cursor: 'pointer' } : undefined}>
        <div className={`list-row${topInteractive ? '' : ' not-tappable'}`}>
          <div className="leading leading-gap-sm">
            <TeamLogo team={team} />
          </div>
          <div className="list-row-content">
            <div className="list-row-text-pair">
              <span className="event-row-label">{team.name}</span>
              <span className="event-row-sublabel text-secondary">{state.date}</span>
            </div>
          </div>
          {topInteractive && (
            <div className="trailing trailing-gap-lg">
              <button className="btn btn-primary btn-100">{state.price}</button>
            </div>
          )}
          {state.type === 'sold-out' && (
            <div className="trailing trailing-gap-sm">
              <span className="labelBold30 text-secondary">Sold Out</span>
            </div>
          )}
          {state.type === 'coming-soon' && (
            <div className="trailing trailing-gap-sm">
              <span className="labelBold20 text-interactive-tertiary event-row-coming-soon">Coming Soon</span>
            </div>
          )}
        </div>
      </div>
      {state.type === 'featured-others' && (
        <div className="event-row-bottom surface-section" style={{ cursor: 'pointer' }}>
          <div className="list-row">
            <div className="list-row-content">
              <div className="list-row-text-pair">
                <span className="labelBold30 text-interactive-tertiary">{state.additionalOffers} Additional Offers</span>
              </div>
            </div>
            <div className="trailing trailing-gap-xs">
              <span className="icon material-symbols-rounded text-interactive-tertiary">arrow_drop_down</span>
            </div>
          </div>
        </div>
      )}
      {state.type === 'no-featured' && (
        <div className="event-row-bottom surface-section" style={{ cursor: 'pointer' }}>
          <div className="list-row">
            <div className="list-row-content">
              <div className="list-row-text-pair">
                <span className="labelBold30 text-interactive-tertiary">{state.offersAvailable} Offers Available</span>
              </div>
            </div>
            <div className="trailing trailing-gap-xs">
              <span className="icon material-symbols-rounded text-interactive-tertiary">arrow_drop_down</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function EventRowDemoPage() {
  const { setTheme, setMode } = useTheme()

  useEffect(() => {
    setTheme('jump')
    setMode('light')
  }, [setTheme, setMode])

  return (
    <SiteShell>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: 'var(--spacing-400) var(--spacing-300)' }}>

        {/* Controls */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-100)', marginBottom: 'var(--spacing-400)', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-50)' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginRight: 'var(--spacing-50)' }}>Theme</span>
            {(['wolves', 'jump', 'courage', 'athletics', 'bucknell'] as const).map((t) => (
              <button key={t} className="btn btn-secondary btn-100" onClick={() => setTheme(t)}>
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-50)' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginRight: 'var(--spacing-50)' }}>Mode</span>
            <button className="btn btn-secondary btn-100" onClick={() => setMode('light')}>Light</button>
            <button className="btn btn-secondary btn-100" onClick={() => setMode('dark')}>Dark</button>
          </div>
        </div>

        {/* Callout */}
        <div style={{ background: 'var(--bg-surface)', borderRadius: 'var(--border-radius-100)', padding: 'var(--spacing-200) var(--spacing-300)', marginBottom: 'var(--spacing-300)' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, lineHeight: 1.5, color: 'var(--text-secondary)', margin: 0 }}>
            <strong>Event Row</strong> — Buy-flow card for a single game. Opposing team logo, event date/time, and the active offer state.
            Logos come from <code style={{ fontFamily: 'monospace', fontSize: 12, background: 'var(--neutral-100)', padding: '1px 5px', borderRadius: 3 }}>opposingTeam.logo.asset-&gt;url</code> in Sanity.
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, lineHeight: 1.5, color: 'var(--text-secondary)', margin: 'var(--spacing-100) 0 0' }}>
            Resize the window to see the responsive text and padding change at 500px.
          </p>
        </div>

        {/* All Five Offer States */}
        <h2 className="title50" style={{ margin: '0 0 var(--spacing-200)' }}>All Offer States</h2>
        <div className="event-row-list" style={{ maxWidth: '100%', padding: 0 }}>
          {ALL_STATES.map((state, i) => (
            <div key={state.label} style={{ marginBottom: 'var(--spacing-300)' }}>
              <p style={{
                fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600,
                color: 'var(--text-secondary)', textTransform: 'uppercase',
                letterSpacing: '0.08em', marginBottom: 'var(--spacing-100)',
              }}>{state.label}</p>
              <EventRowItem team={ALL_STATE_TEAMS[i]} state={state} />
            </div>
          ))}
        </div>

        {/* In-Context List */}
        <h2 className="title50" style={{ margin: 'var(--spacing-500) 0 var(--spacing-200)' }}>In Context — Buy List, Single Game</h2>
        <p className="labelRegular20 text-secondary mb-300">
          A full list as it appears in the buy flow. Max-width 499px (phone) or 672px (tablet+). Gap 8px between rows.
        </p>
        <div className="event-row-list">
          {CONTEXT_STATES.map((state, i) => (
            <EventRowItem key={i} team={CONTEXT_TEAMS[i % CONTEXT_TEAMS.length]} state={state} />
          ))}
        </div>

        {/* CMS Data Notes */}
        <h2 className="title50" style={{ margin: 'var(--spacing-500) 0 var(--spacing-200)' }}>CMS Data Binding</h2>
        <div style={{ background: 'var(--bg-surface)', borderRadius: 'var(--border-radius-100)', padding: 'var(--spacing-200) var(--spacing-300)' }}>
          {[
            ['Logo:', 'opposingTeam.logo.asset->url — always SVG, always use object-fit: contain. The SVG includes internal padding; the visual mark fills ~70–80% of the 48×48 container.'],
            ['Label:', 'opposingTeam.name (full name, e.g. "Portland Marmots") or opposingTeam.shortName for compact contexts.'],
            ['Date/time sublabel:', 'Format as Day, Mon D · H PM. The interpunct (·) is U+00B7.'],
            ['Button price:', 'Featured offer starting price formatted as $N+. Hide button and show offer state text for Sold Out / Coming Soon.'],
            ['Offer count:', 'Number of offers in the ticket inventory for this event. "X Additional Offers" when a featured price is shown; "X Offers Available" when no featured price.'],
          ].map(([label, text]) => (
            <p key={label} style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, lineHeight: 1.5, color: 'var(--text-secondary)', margin: '0 0 var(--spacing-100)' }}>
              <strong>{label}</strong> {text}
            </p>
          ))}
        </div>

      </div>
    </SiteShell>
  )
}
