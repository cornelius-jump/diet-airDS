import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { useSelectSync } from '../hooks/useSelectSync'

const THEMES = [
  { value: 'wolves', label: 'Wolves' },
  { value: 'lynx', label: 'Lynx' },
  { value: 'courage', label: 'Courage' },
  { value: 'summit', label: 'Summit' },
  { value: 'bucknell', label: 'Bucknell' },
  { value: 'sounders', label: 'Sounders' },
  { value: 'reign', label: 'Reign' },
  { value: 'ncfc', label: 'NCFC' },
  { value: 'jump', label: 'JUMP' },
  { value: 'athletics', label: 'Athletics' },
] as const

const MODES = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
] as const

export default function OrgNav() {
  const { theme, mode, setTheme, setMode } = useTheme()
  const location = useLocation()

  const themeSync = useSelectSync({ initialDisplay: 'JUMP' })
  const modeSync = useSelectSync({ initialDisplay: 'Light' })

  const currentThemeLabel = THEMES.find(t => t.value === theme)?.label ?? 'JUMP'
  const currentModeLabel = MODES.find(m => m.value === mode)?.label ?? 'Light'

  return (
    <header className="org-nav">
      <Link className="org-nav-logo" to="/">
        <span className="material-symbols-rounded icon-filled text-primary">water_full</span>
        <span className="display200 text-primary">Diet AirDS</span>
      </Link>
      <nav className="org-nav-links">
        <Link
          to="/"
          className={`chip scale-300 ${location.pathname === '/' ? 'surface-borderNeutral chip-team-color' : 'surface-ghost'}`}
        >
          Getting Started
        </Link>
        <Link
          to="/documentation"
          className={`chip scale-300 ${location.pathname.startsWith('/documentation') ? 'surface-borderNeutral chip-team-color' : 'surface-ghost'}`}
        >
          Documentation
        </Link>
      </nav>
      <div className="org-nav-controls">
        <div className={`input-field input-select${themeSync.isOpen ? ' is-open' : ''}`}>
          <div className="input-and-message">
            <div className="input-control">
              <span className="input-select-display">{currentThemeLabel}</span>
              <span className="input-select-chevron material-symbols-rounded">arrow_drop_down</span>
              <select
                value={theme}
                onChange={(e) => {
                  themeSync.handleChange(e)
                  setTheme(e.target.value as typeof theme)
                }}
                onFocus={themeSync.handleFocus}
                onBlur={themeSync.handleBlur}
              >
                {THEMES.map(t => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className={`input-field input-select${modeSync.isOpen ? ' is-open' : ''}`}>
          <div className="input-and-message">
            <div className="input-control">
              <span className="input-select-display">{currentModeLabel}</span>
              <span className="input-select-chevron material-symbols-rounded">arrow_drop_down</span>
              <select
                value={mode}
                onChange={(e) => {
                  modeSync.handleChange(e)
                  setMode(e.target.value as typeof mode)
                }}
                onFocus={modeSync.handleFocus}
                onBlur={modeSync.handleBlur}
              >
                {MODES.map(m => (
                  <option key={m.value} value={m.value}>{m.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
