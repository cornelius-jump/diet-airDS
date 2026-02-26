import { useEffect, useState } from 'react'
import { useTheme } from '../context/ThemeContext'

export default function FanStatsPage() {
  const { setTheme, setMode } = useTheme()
  const [streaksOpen, setStreaksOpen] = useState(false)

  useEffect(() => {
    setTheme('wolves')
    setMode('dark')
  }, [setTheme, setMode])

  return (
    <div style={{ background: 'var(--bg-base)', minHeight: '100vh', paddingBottom: 'var(--spacing-600)' }}>
      <div className="container-compact py-300">

        {/* Top bar */}
        <div className="flex-row gap-sm mb-200" style={{ alignItems: 'center' }}>
          <button className="btn btn-tertiary btn-100 btn-icon-only" aria-label="Go back">
            <span className="material-symbols-rounded icon-300">arrow_back</span>
          </button>
          <h1 className="display300 text-uppercase">FAN STATS</h1>
        </div>

        {/* Passport card */}
        <div className="card-closed mb-200">
          <div className="card-closed-body">
            <div className="list-row">
              <div className="leading leading-gap-lg">
                <div style={{ position: 'relative', width: 64, height: 64, flexShrink: 0 }}>
                  <div style={{
                    width: 64, height: 64,
                    borderRadius: 'var(--border-radius-200)',
                    background: 'var(--neutral-300)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    overflow: 'hidden',
                  }}>
                    <span className="material-symbols-rounded icon-500 text-secondary">person</span>
                  </div>
                  <div style={{
                    position: 'absolute', bottom: -4, right: -4,
                    width: 22, height: 22,
                    background: 'var(--color-interactive)',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: '2px solid var(--bg-surface)',
                  }}>
                    <span className="material-symbols-rounded" style={{
                      fontSize: 12,
                      color: 'var(--bg-surface)',
                      fontVariationSettings: '"FILL" 1, "wght" 700, "GRAD" 0, "opsz" 20',
                    }}>star</span>
                  </div>
                </div>
              </div>
              <div className="list-row-content">
                <div className="list-row-text-pair">
                  <h2 className="title50">Toby Craig</h2>
                  <p className="labelRegular20 text-secondary">Fan since March 2019</p>
                </div>
              </div>
              <div className="trailing trailing-gap-lg">
                <button className="btn btn-tertiary btn-100">
                  <span className="material-symbols-rounded icon-200">open_in_new</span>
                  Share
                </button>
              </div>
            </div>
          </div>

          <div className="card-closed-footer">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
              {[
                { icon: 'calendar_month', value: '51', label: 'Games' },
                { icon: 'emoji_events', value: '63%', label: 'Win Rate' },
                { icon: 'local_fire_department', value: '3W', label: 'Streak', filled: true },
                { icon: 'manage_search', value: '47', label: 'All-Stars' },
              ].map((stat) => (
                <div key={stat.label} className="flex-column gap-50" style={{ alignItems: 'center' }}>
                  <div className="flex-row gap-50" style={{ alignItems: 'center' }}>
                    <span
                      className="material-symbols-rounded icon-200 text-secondary"
                      style={stat.filled ? { fontVariationSettings: "'FILL' 1,'wght' 400,'GRAD' 0,'opsz' 20" } : undefined}
                    >{stat.icon}</span>
                    <span className="title50">{stat.value}</span>
                  </div>
                  <span className="labelRegular10 text-secondary">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Attendance Record */}
        <div className="card-open mb-200">
          <div className="card-open-header">
            <div className="list-row">
              <div className="list-row-content">
                <div className="list-row-text-pair">
                  <h2 className="display100">Your Attendance Record</h2>
                </div>
              </div>
              <div className="trailing trailing-gap-lg">
                <button className="btn btn-tertiary btn-100">
                  <span className="material-symbols-rounded icon-200">open_in_new</span>
                  Share
                </button>
              </div>
            </div>
          </div>

          <div className="card-open-content">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-150)' }}>

              <div className="card-open-section flex-column gap-100">
                <p className="labelRegular10 text-secondary">This Season</p>
                <div className="flex-row gap-100" style={{ alignItems: 'flex-end' }}>
                  <div className="flex-column gap-50">
                    <span className="labelRegular10 text-secondary">W</span>
                    <span className="display400">5</span>
                  </div>
                  <span className="title50 text-secondary" style={{ paddingBottom: 4 }}>–</span>
                  <div className="flex-column gap-50">
                    <span className="labelRegular10 text-secondary">L</span>
                    <span className="display400">2</span>
                  </div>
                </div>
                <p className="labelRegular20 text-secondary">7 games</p>
              </div>

              <div className="card-open-section flex-column gap-100">
                <p className="labelRegular10 text-secondary">All-Time</p>
                <div className="flex-row gap-100" style={{ alignItems: 'flex-end' }}>
                  <div className="flex-column gap-50">
                    <span className="labelRegular10 text-secondary">W</span>
                    <span className="display400">32</span>
                  </div>
                  <span className="title50 text-secondary" style={{ paddingBottom: 4 }}>–</span>
                  <div className="flex-column gap-50">
                    <span className="labelRegular10 text-secondary">L</span>
                    <span className="display400">19</span>
                  </div>
                </div>
                <p className="labelRegular20 text-secondary">51 games</p>
              </div>

              <div className="card-open-section flex-column gap-100">
                <p className="labelRegular10 text-secondary">Season Win %</p>
                <span className="display400 text-brand-interactive">71%</span>
              </div>

              <div className="card-open-section flex-column gap-100">
                <p className="labelRegular10 text-secondary">All-Time Win %</p>
                <span className="display400 text-brand-interactive">63%</span>
              </div>

            </div>
          </div>

          <div className="flex-row py-200 px-300" style={{ justifyContent: 'center' }}>
            <span className="tag tag-team-color tag-icon-leading">
              <span className="material-symbols-rounded" style={{
                fontSize: 14,
                fontVariationSettings: "'FILL' 1,'wght' 600,'GRAD' 0,'opsz' 20",
              }}>emoji_events</span>
              Top 1% Fan Attendance
            </span>
          </div>
        </div>

        {/* Streaks Accordion */}
        <div style={{ borderRadius: 'var(--border-radius-200)', overflow: 'hidden' }}>
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 'var(--spacing-250) var(--spacing-300)',
              background: 'var(--bg-surface)',
              cursor: 'pointer',
              width: '100%',
              border: 'none',
              borderRadius: streaksOpen ? 'var(--border-radius-200) var(--border-radius-200) 0 0' : 'var(--border-radius-200)',
            }}
            onClick={() => setStreaksOpen(!streaksOpen)}
            aria-expanded={streaksOpen}
          >
            <div className="flex-row gap-md" style={{ alignItems: 'center' }}>
              <div className="btn btn-circle btn-circle-team btn-circle-300" aria-hidden="true" style={{ pointerEvents: 'none' }}>
                <span className="material-symbols-rounded icon-200" style={{
                  fontVariationSettings: "'FILL' 1,'wght' 400,'GRAD' 0,'opsz' 20",
                }}>local_fire_department</span>
              </div>
              <h2 className="labelBold30 text-uppercase">Streaks</h2>
            </div>
            <span
              className="material-symbols-rounded icon-300 text-secondary"
              style={{ transition: 'transform 200ms ease', transform: streaksOpen ? 'rotate(180deg)' : 'none' }}
            >expand_more</span>
          </button>

          {streaksOpen && (
            <div style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border-default)' }}>
              <div className="list-row leading-gap-md py-150 px-300">
                <div className="list-row-content">
                  <div className="list-row-text-pair">
                    <span className="labelBold30">Current Win Streak</span>
                    <span className="labelRegular10 text-secondary">Won last 3 games attended</span>
                  </div>
                </div>
                <div className="trailing trailing-gap-xs">
                  <span className="title50 text-brand-interactive">3W</span>
                </div>
              </div>
              <div style={{ height: 1, background: 'var(--border-default)', margin: '0 var(--spacing-300)' }} />
              <div className="list-row leading-gap-md py-150 px-300">
                <div className="list-row-content">
                  <div className="list-row-text-pair">
                    <span className="labelBold30">Longest Win Streak</span>
                    <span className="labelRegular10 text-secondary">Personal best</span>
                  </div>
                </div>
                <div className="trailing trailing-gap-xs">
                  <span className="title50 text-brand-interactive">7W</span>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
