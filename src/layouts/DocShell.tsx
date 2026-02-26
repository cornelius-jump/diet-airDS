import type { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import OrgNav from './OrgNav'

const DOC_LINKS = [
  { path: '/documentation', label: 'Overview', exact: true },
  { path: '/documentation/how-it-works', label: 'How It Works' },
  { path: '/documentation/foundations', label: 'Foundations' },
  { path: '/documentation/typography', label: 'Typography & Icons' },
  { path: '/documentation/surfaces', label: 'Interactive Tokens' },
  { path: '/documentation/buttons', label: 'Buttons' },
  { path: '/documentation/list-rows', label: 'List Rows & Cards' },
  { path: '/documentation/forms', label: 'Forms' },
  { path: '/documentation/reference', label: 'Reference' },
]

interface DocShellProps {
  children: ReactNode
}

export default function DocShell({ children }: DocShellProps) {
  const location = useLocation()

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
                <Link
                  key={link.path}
                  to={link.path}
                  className={isActive ? 'active' : undefined}
                >
                  {link.label}
                </Link>
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
