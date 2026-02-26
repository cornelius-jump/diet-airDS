import { useEffect, useRef } from 'react'
import DocShell from '../../layouts/DocShell'
import { useStaticHtml } from '../../hooks/useStaticHtml'
import { attachHelpersToWindow } from '../../utils/docHelpers'

export default function DocFormsPage() {
  const { html, loading, error } = useStaticHtml('/documentation-forms.html')
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!loading && html) {
      attachHelpersToWindow()
    }
  }, [loading, html])

  return (
    <DocShell>
      {loading && (
        <div className="container-wide py-large">
          <p className="bodyRegular30 text-secondary">Loading…</p>
        </div>
      )}
      {error && (
        <div className="container-wide py-large">
          <p className="bodyRegular30 text-secondary">Failed to load content.</p>
        </div>
      )}
      {!loading && !error && (
        <div ref={containerRef} dangerouslySetInnerHTML={{ __html: html }} />
      )}
    </DocShell>
  )
}
