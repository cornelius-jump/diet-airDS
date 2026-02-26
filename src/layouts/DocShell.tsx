import { useState, useEffect, type ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import OrgNav from './OrgNav'

interface SubSection {
  id: string
  label: string
}

interface DocLink {
  path: string
  label: string
  exact?: boolean
  subsections?: SubSection[]
}

const DOC_LINKS: DocLink[] = [
  { path: '/documentation', label: 'Home', exact: true },
  {
    path: '/documentation/how-it-works', label: 'How It Works', subsections: [
      { id: 'installation', label: 'Installation' },
      { id: 'overview', label: 'Overview' },
      { id: 'components', label: 'Components' },
      { id: 'load-order', label: 'Load Order' },
    ]
  },
  {
    path: '/documentation/foundations', label: 'Foundations', subsections: [
      { id: 'colors', label: 'Colors' },
      { id: 'spacing', label: 'Spacing' },
      { id: 'spacing-utils', label: 'Spacing Utilities' },
      { id: 'containers', label: 'Containers' },
      { id: 'borders', label: 'Borders & Drop Shadows' },
    ]
  },
  {
    path: '/documentation/typography', label: 'Typography & Icons', subsections: [
      { id: 'typography', label: 'Typography' },
      { id: 'textpairs', label: 'Text Pairs' },
      { id: 'icons', label: 'Icons' },
    ]
  },
  {
    path: '/documentation/surfaces', label: 'Interactive Tokens', subsections: [
      { id: 'interactive', label: 'Interactive Tokens' },
    ]
  },
  {
    path: '/documentation/buttons', label: 'Buttons', subsections: [
      { id: 'button', label: 'Button' },
      { id: 'circle-button', label: 'Circle Button' },
      { id: 'groups', label: 'Groups' },
    ]
  },
  {
    path: '/documentation/list-rows', label: 'List Rows & Cards', subsections: [
      { id: 'list-row', label: 'List Row' },
      { id: 'cards', label: 'Cards' },
      { id: 'event-row', label: 'Event Row' },
      { id: 'selector', label: 'Selector' },
      { id: 'tags-chips', label: 'Tags & Chips' },
      { id: 'tile', label: 'Tile' },
    ]
  },
  {
    path: '/documentation/forms', label: 'Forms', subsections: [
      { id: 'input', label: 'Input' },
      { id: 'select', label: 'Select' },
    ]
  },
  {
    path: '/documentation/navigation', label: 'Navigation', subsections: [
      { id: 'topbar', label: 'TopBar' },
      { id: 'tabs', label: 'Tabs' },
      { id: 'steps', label: 'Steps' },
      { id: 'page-header', label: 'PageHeader' },
    ]
  },
  {
    path: '/documentation/reference', label: 'Reference', subsections: [
      { id: 'layout', label: 'Layout' },
      { id: 'teams', label: 'Teams' },
      { id: 'breakpoints', label: 'Breakpoints' },
      { id: 'decisions', label: 'Decisions' },
    ]
  },
]

interface DocShellProps {
  children: ReactNode
}

export default function DocShell({ children }: DocShellProps) {
  const location = useLocation()
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const activeLinkData = DOC_LINKS.find(link =>
    link.exact
      ? location.pathname === link.path
      : location.pathname === link.path || location.pathname.startsWith(link.path + '/')
  )

  useEffect(() => {
    const subsections = activeLinkData?.subsections
    if (!subsections || subsections.length === 0) {
      setActiveSection(null)
      return
    }

    // Initialize to first subsection
    setActiveSection(subsections[0].id)

    const sections = subsections
      .map(s => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[]

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 }
    )

    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [location.pathname]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <OrgNav />
      <div className="doc-layout">
        <aside className="doc-sidebar">
          <nav>
            {DOC_LINKS.map(link => {
              const isActive = link.exact
                ? location.pathname === link.path
                : location.pathname === link.path || location.pathname.startsWith(link.path + '/')
              return (
                <div key={link.path} className="doc-sidebar-item">
                  <Link
                    to={link.path}
                    className={isActive ? 'active' : undefined}
                  >
                    {link.label}
                  </Link>
                  {isActive && link.subsections && link.subsections.length > 0 && (
                    <div className="doc-sidebar-subsections">
                      {link.subsections.map(sub => (
                        <a
                          key={sub.id}
                          href={`#${sub.id}`}
                          className={activeSection === sub.id ? 'active' : undefined}
                          onClick={() => setActiveSection(sub.id)}
                        >
                          <span className="doc-sidebar-bullet" aria-hidden="true">•</span>
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </nav>
        </aside>
        <div className="doc-main">
          {children}
        </div>
      </div>
    </>
  )
}
