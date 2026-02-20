import {DocumentActionComponent} from 'sanity'
import {EyeOpenIcon, GenerateIcon, RocketIcon} from '@sanity/icons'

// Preview Theme Action
export const PreviewThemeAction: DocumentActionComponent = (props) => {
  const {id, type} = props

  if (type !== 'team') return null

  return {
    label: 'Preview Theme',
    icon: EyeOpenIcon,
    onHandle: () => {
      // Open preview in new window
      const teamId = id.replace('drafts.', '')
      window.open(
        `http://localhost:8000?theme=${teamId}`,
        '_blank',
        'width=1200,height=800'
      )
    },
  }
}

// Generate Color Variations Action
export const GenerateColorVariationsAction: DocumentActionComponent = (props) => {
  const {patch, id, type} = props

  if (type !== 'team') return null

  return {
    label: 'Generate Light/Dark Variations',
    icon: GenerateIcon,
    onHandle: () => {
      // This would generate complementary colors
      // For now, just show a toast
      alert(
        'Color variation generator coming soon! This will automatically generate light/dark mode colors from your core brand color.'
      )
    },
  }
}

// Sync to Production Action
export const SyncToProductionAction: DocumentActionComponent = (props) => {
  const {id, type, draft, published} = props

  if (type !== 'team') return null

  return {
    label: 'Sync & Deploy',
    icon: RocketIcon,
    tone: 'primary',
    onHandle: async () => {
      if (draft) {
        alert('Please publish your changes before syncing to production.')
        return
      }

      const confirmed = confirm(
        'This will sync this team to production and regenerate the design tokens. Continue?'
      )

      if (confirmed) {
        try {
          // In a real setup, this would trigger your npm run teams script
          // via an API endpoint or webhook
          const response = await fetch('/api/sync-teams', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({teamId: id}),
          }).catch(() => null)

          if (response?.ok) {
            alert('✅ Team synced successfully!')
          } else {
            alert(
              '⚠️ Sync webhook not configured. Run `npm run teams` manually to sync.'
            )
          }
        } catch (error) {
          alert(
            '⚠️ Sync webhook not configured. Run `npm run teams` manually to sync.'
          )
        }
      }
    },
  }
}
