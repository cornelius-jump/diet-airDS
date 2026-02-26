import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

// Load all DS CSS files in order
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
import '../walkthrough.css'
import './site.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
