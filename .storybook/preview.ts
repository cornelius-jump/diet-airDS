import type { Preview } from '@storybook/react'

// Import all CSS files in correct load order
import '../design-tokens-master.css'
import '../spacing-tokens.css'
import '../container-tokens.css'
import '../border-effects-tokens.css'
import '../fonts.css'
import '../text-styles-system.css'
import '../icons.css'
import '../card-components.css'
import '../interactive-tokens.css'
import '../button-components.css'
import '../list-row-components.css'
import '../input-components.css'
import '../tag-chip-components.css'
import '../nav-components.css'
import '../boilerplate.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  globalTypes: {
    theme: {
      description: 'Team theme',
      defaultValue: 'wolves',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'wolves', title: 'Wolves' },
          { value: 'lynx', title: 'Lynx' },
          { value: 'courage', title: 'Courage' },
          { value: 'summit', title: 'Summit' },
          { value: 'bucknell', title: 'Bucknell' },
          { value: 'sounders', title: 'Sounders' },
          { value: 'reign', title: 'Reign' },
          { value: 'ncfc', title: 'NCFC' },
          { value: 'jump', title: 'Jump' },
          { value: 'athletics', title: 'Athletics' }
        ],
        dynamicTitle: true
      }
    },
    mode: {
      description: 'Color mode',
      defaultValue: 'light',
      toolbar: {
        title: 'Mode',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' }
        ],
        dynamicTitle: true
      }
    }
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals['theme'] ?? 'wolves'
      const mode = context.globals['mode'] ?? 'light'
      document.documentElement.setAttribute('data-theme', theme)
      document.documentElement.setAttribute('data-mode', mode)
      return Story()
    }
  ]
}

export default preview
