import type { ReactNode } from 'react'
import OrgNav from './OrgNav'

interface SiteShellProps {
  children: ReactNode
}

export default function SiteShell({ children }: SiteShellProps) {
  return (
    <>
      <OrgNav />
      <main>{children}</main>
    </>
  )
}
