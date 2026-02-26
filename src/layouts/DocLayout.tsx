import { useEffect, useRef, type ReactNode } from 'react'

interface SidebarLink {
  href: string
  number: string
  label: string
}

interface DocLayoutProps {
  sidebar: SidebarLink[]
  children: ReactNode
}

export default function DocLayout({ sidebar, children }: DocLayoutProps) {
  const sidebarRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const links = sidebarRef.current?.querySelectorAll<HTMLAnchorElement>('nav a')
    if (!links) return

    const sections = document.querySelectorAll('[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            links.forEach((a) => a.classList.remove('active'))
            const active = sidebarRef.current?.querySelector<HTMLAnchorElement>(
              `nav a[href="#${entry.target.id}"]`
            )
            if (active) active.classList.add('active')
          }
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="doc-layout">
      <aside className="doc-sidebar" ref={sidebarRef}>
        <p className="doc-sidebar-title">Sections</p>
        <nav>
          {sidebar.map((link) => (
            <a key={link.href} href={link.href}>
              <span>{link.number}</span>
              {link.label}
            </a>
          ))}
        </nav>
      </aside>
      <div className="doc-main">{children}</div>
    </div>
  )
}
