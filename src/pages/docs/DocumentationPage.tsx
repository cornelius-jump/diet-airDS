import { Link } from 'react-router-dom'
import DocShell from '../../layouts/DocShell'

const SECTIONS = [
  {
    to: '/documentation/how-it-works',
    icon: 'info',
    title: 'How It Works',
    desc: 'Data attributes, token cascade, and file load order',
  },
  {
    to: '/documentation/foundations',
    icon: 'palette',
    title: 'Foundations',
    desc: 'Color tokens, spacing scale, containers, and border utilities',
  },
  {
    to: '/documentation/typography',
    icon: 'text_fields',
    title: 'Typography & Icons',
    desc: 'Display, title, label, and body scales plus the icon system',
  },
  {
    to: '/documentation/surfaces',
    icon: 'touch_app',
    title: 'Interactive Tokens',
    desc: 'Surface backgrounds and scale transforms for tappable elements',
  },
  {
    to: '/documentation/buttons',
    icon: 'smart_button',
    title: 'Buttons',
    desc: '8 types, 3 sizes, icon variants, circle buttons, and groups',
  },
  {
    to: '/documentation/list-rows',
    icon: 'view_list',
    title: 'List Rows & Cards',
    desc: 'Card layouts, 3-slot row architecture, inventory rows, event rows',
  },
  {
    to: '/documentation/forms',
    icon: 'edit_note',
    title: 'Forms',
    desc: 'Text inputs, select dropdowns, and all field states',
  },
  {
    to: '/documentation/reference',
    icon: 'menu_book',
    title: 'Reference',
    desc: 'Quick-lookup token tables and the component decision guide',
  },
]

export default function DocumentationPage() {
  return (
    <DocShell>
      <div className="container-wide py-large">
        <h1 className="display500 mb-100">Documentation</h1>
        <p className="bodyRegular30 text-secondary mb-400" style={{ maxWidth: '56ch' }}>
          The complete reference for Diet AirDS — every token, component, and pattern.
          Switch the theme and mode above to see everything update live.
        </p>

        <div className="card-grid grid-cols-2-desktop grid-cols-2-tablet grid-cols-1-mobile">
          {SECTIONS.map(s => (
            <Link
              key={s.to}
              to={s.to}
              className="surface-card scale-700"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--spacing-200)',
                padding: 'var(--spacing-300)',
                borderRadius: 'var(--border-radius-200)',
                textDecoration: 'none',
              }}
            >
              <span
                className="material-symbols-rounded icon-500 icon-filled text-brand-core"
                style={{ fontVariationSettings: "'FILL' 1,'wght' 500,'GRAD' 0,'opsz' 40" }}
              >
                {s.icon}
              </span>
              <div className="card-text-pair">
                <span className="title50">{s.title}</span>
                <span className="labelRegular20 text-secondary">{s.desc}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </DocShell>
  )
}
