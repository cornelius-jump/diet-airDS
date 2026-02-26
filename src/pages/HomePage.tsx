import { useEffect, useCallback } from 'react'
import { useTheme } from '../context/ThemeContext'
import SiteShell from '../layouts/SiteShell'
import DocLayout from '../layouts/DocLayout'

const TEAMS = [
  { id: 'wolves', name: 'Minnesota Timberwolves', subtitle: 'Blue/Green · 8px button radius', theme: 'wolves', mode: 'dark' },
  { id: 'lynx', name: 'Minnesota Lynx', subtitle: 'Blue/Green · 12px button radius', theme: 'lynx', mode: 'light' },
  { id: 'courage', name: 'North Carolina Courage', subtitle: 'Red/Gold · Pill button radius', theme: 'courage', mode: 'light' },
  { id: 'summit', name: 'Denver Summit FC', subtitle: 'Green/Red/Yellow · 8px button radius', theme: 'summit', mode: 'light' },
  { id: 'bucknell', name: 'Bucknell Bison', subtitle: 'Navy/Orange · Pill button radius', theme: 'bucknell', mode: 'light' },
  { id: 'sounders', name: 'Seattle Sounders FC', subtitle: 'Green/Blue/Teal · Pill button radius', theme: 'sounders', mode: 'light' },
  { id: 'reign', name: 'Seattle Reign FC', subtitle: 'Purple/Gold · Pill button radius', theme: 'reign', mode: 'light' },
  { id: 'ncfc', name: 'North Carolina Football Club', subtitle: 'Blue/Gold · Pill button radius', theme: 'ncfc', mode: 'light' },
  { id: 'jump', name: 'Jump Default', subtitle: 'Purple/Lime · Pill button radius', theme: 'jump', mode: 'light' },
  { id: 'athletics', name: 'Las Vegas Athletics', subtitle: 'Green/Yellow · Pill button radius', theme: 'athletics', mode: 'light' },
] as const

const SIDEBAR_LINKS = [
  { href: '#how-to-use', number: '0', label: 'How to Use' },
  { href: '#wolves', number: '1', label: 'Wolves' },
  { href: '#lynx', number: '2', label: 'Lynx' },
  { href: '#courage', number: '3', label: 'Courage' },
  { href: '#summit', number: '4', label: 'Summit' },
  { href: '#bucknell', number: '5', label: 'Bucknell' },
  { href: '#sounders', number: '6', label: 'Sounders' },
  { href: '#reign', number: '7', label: 'Reign' },
  { href: '#ncfc', number: '8', label: 'NCFC' },
  { href: '#jump', number: '9', label: 'Jump' },
  { href: '#athletics', number: '10', label: 'Athletics' },
]

function buildPrompt(theme: string, mode: string) {
  return `Build this using Diet AirDS:\nhttps://diet-air-ds.vercel.app/agent-guide.md\n\nUse data-theme="${theme}" and data-mode="${mode}"\n\nAlways make sure you use the CSS files contained in the .md above. Only create custom styling if there is nothing applicable in Diet AirDS.\n\n[Describe what you want to build]`
}

function CopyButton({ theme, mode }: { theme: string; mode: string }) {
  const handleCopy = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const btn = e.currentTarget
      navigator.clipboard.writeText(buildPrompt(theme, mode)).then(
        () => {
          const prev = btn.textContent
          btn.textContent = 'Copied!'
          setTimeout(() => { btn.textContent = prev }, 2000)
        },
        () => alert('Failed to copy. Please copy manually.')
      )
    },
    [theme, mode]
  )
  return (
    <button className="btn btn-primary btn-300" onClick={handleCopy}>
      Copy prompt
    </button>
  )
}

export default function HomePage() {
  const { setTheme, setMode } = useTheme()

  useEffect(() => {
    setTheme('jump')
    setMode('light')
  }, [setTheme, setMode])

  return (
    <SiteShell>
      <DocLayout sidebar={SIDEBAR_LINKS}>
        <div className="container-wide mt-row">

          {/* Hero */}
          <div className="py-large">
            <div className="card-text-pair mb-200">
              <h1 className="display600">Getting Started</h1>
              <p className="labelRegular40 text-secondary">Prompt Library — Build with AI using real design tokens</p>
            </div>
            <p className="bodyRegular30 text-primary doc-prose">
              A pure CSS design system built for fast AI-assisted prototyping. Pick a team, copy the prompt, and paste it into Claude, ChatGPT, or any AI code generator.{' '}
              <a href="https://diet-air-ds.vercel.app/walkthrough.html">See all tokens and components →</a>
            </p>
          </div>

          {/* How to Use */}
          <div className="border-top py-large" id="how-to-use">
            <div className="card-text-pair mb-200">
              <h2 className="title80">How to Use</h2>
            </div>
            <div className="doc-note">
              <p className="bodyRegular30"><strong>1.</strong> Copy any prompt below.</p>
              <p className="bodyRegular30 mt-50"><strong>2.</strong> Paste into an AI code generator (Claude, ChatGPT, etc.).</p>
              <p className="bodyRegular30 mt-50"><strong>3.</strong> Replace <code>[Describe what you want to build]</code> with your component description.</p>
              <p className="bodyRegular30 mt-50"><strong>Tip:</strong> Change <code>data-mode="light"</code> to <code>data-mode="dark"</code> for dark mode variants.</p>
            </div>
          </div>

          {/* Team cards */}
          {TEAMS.map((team) => (
            <div key={team.id} className="border-top py-large" id={team.id}>
              <div className="card-closed">
                <div className="card-closed-header">
                  <div className="card-text-pair">
                    <h3 className="title50">{team.name}</h3>
                    <p className="labelRegular20 text-secondary">{team.subtitle}</p>
                  </div>
                </div>
                <div className="card-closed-body">
                  <code className="prompt-code">{buildPrompt(team.theme, team.mode)}</code>
                  <div className="mt-200">
                    <CopyButton theme={team.theme} mode={team.mode} />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Footer */}
          <div className="py-600 text-center">
            <p className="labelRegular20 text-secondary">Diet AirDS – Prompt Library</p>
            <p className="labelRegular10 text-secondary mt-50">Switch themes and modes using the controls at the top of the page</p>
          </div>

        </div>
      </DocLayout>
    </SiteShell>
  )
}
