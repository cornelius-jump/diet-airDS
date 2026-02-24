import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Initialize Sanity client
const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

// GROQ query to fetch all teams
const query = `*[_type == "team"] | order(teamId.current asc) {
  teamId,
  name,
  shortName,
  city,
  sport,
  venue,
  logoPrimary,
  logoIcon,
  brandColors,
  buttonRadius,
  displayFont,
  vfsFar,
  vfsClose,
  urls
}`

async function syncTeams() {
  try {
    console.log('Fetching teams from Sanity...')
    const teams = await client.fetch(query)

    if (!teams || teams.length === 0) {
      console.warn('No teams found in Sanity')
      return
    }

    console.log(`Found ${teams.length} teams`)

    // Create /teams directory if it doesn't exist
    const teamsDir = path.join(__dirname, '..', 'teams')
    if (!fs.existsSync(teamsDir)) {
      fs.mkdirSync(teamsDir, {recursive: true})
    }

    // Process each team
    const cssBlocks = []

    for (const team of teams) {
      const teamId = team.teamId?.current
      if (!teamId) {
        console.warn(`Skipping team without teamId: ${team.name}`)
        continue
      }

      console.log(`Processing team: ${teamId}`)

      // Build VFS object
      const buildVfsObject = (vfs) => {
        if (!vfs) return null

        const images = []
        if (vfs.image1) images.push(urlFor(vfs.image1).url())
        if (vfs.image2) images.push(urlFor(vfs.image2).url())
        if (vfs.image3) images.push(urlFor(vfs.image3).url())

        const fallback = vfs.fallback ? urlFor(vfs.fallback).url() : ''

        const prices = []
        if (vfs.price1) prices.push(vfs.price1)
        if (vfs.price2) prices.push(vfs.price2)
        if (vfs.price3) prices.push(vfs.price3)

        return {
          images,
          fallback,
          prices,
          priceLabel: vfs.priceLabel || 'Avg. Price',
        }
      }

      // Build team JSON object
      const teamData = {
        teamId,
        name: team.name || '',
        shortName: team.shortName || '',
        city: team.city || '',
        sport: team.sport || '',
        venue: team.venue || null,
        logos: {
          primary: team.logoPrimary ? urlFor(team.logoPrimary).url() : '',
          logoIcon: team.logoIcon ? urlFor(team.logoIcon).url() : '',
        },
        brandColors: team.brandColors || {},
        buttonRadius: team.buttonRadius || '8px',
        displayFont: team.displayFont || 'Inter',
        vfsFar: buildVfsObject(team.vfsFar),
        vfsClose: buildVfsObject(team.vfsClose),
        urls: team.urls || {},
      }

      // Write JSON file
      const jsonPath = path.join(teamsDir, `${teamId}.json`)
      fs.writeFileSync(jsonPath, JSON.stringify(teamData, null, 2))
      console.log(`  ✓ Wrote ${teamId}.json`)

      // Generate CSS block for this team
      if (team.brandColors) {
        const css = generateCssBlock(teamId, team.name, team.brandColors, team.buttonRadius, team.displayFont)
        cssBlocks.push(css)
      }
    }

    // Update design-tokens-master.css
    if (cssBlocks.length > 0) {
      updateCssFile(cssBlocks)
    }

    console.log('✅ Sync complete!')
  } catch (error) {
    console.error('Error syncing teams:', error)
    process.exit(1)
  }
}

function generateCssBlock(teamId, teamName, colors, buttonRadius, displayFont) {
  const {
    // Core tokens
    core = '#000000',
    light = '#FFFFFF',
    dark = '#000000',
    interactive = '#000000',
    inverted = '#FFFFFF',

    // Light mode tokens
    lightBase = '#FFFFFF',
    lightSurface = '#F4F4F4',
    lightSheet = '#FFFFFF',
    lightNav = 'rgba(255, 255, 255, 0.75)',

    // Dark mode tokens
    darkBase = '#111111',
    darkSurface = '#1F1F1F',
    darkSheet = '#142631',
    darkNav = 'rgba(17, 17, 17, 0.7)',

    // Light interactive tokens
    lightInteractivePrimary = core,
    lightInteractivePrimaryText = '#FFFFFF',
    lightInteractiveSecondaryText = '#000000',
    lightInteractiveTertiaryText = core,
    lightInteractiveTransactional = core,
    lightInteractiveTransactionalText = '#FFFFFF',

    // Dark interactive tokens
    darkInteractivePrimary = light,
    darkInteractivePrimaryText = '#000000',
    darkInteractiveSecondaryText = '#FFFFFF',
    darkInteractiveTertiaryText = light,
    darkInteractiveTransactional = light,
    darkInteractiveTransactionalText = '#000000',

    // Typography tokens
    displayWeight = '700',
    displayLetterSpacing = '-0.02em',
    displaySize900 = '76px',
    displaySize800 = '68px',
    displaySize700 = '60px',
    displaySize600 = '52px',
    displaySize500 = '44px',
    displaySize400 = '36px',
    displaySize300 = '28px',
    displaySize200 = '24px',
    displaySize100 = '20px',
  } = colors

  return `/* ============================================
   TEAM THEMES - ${teamName.toUpperCase()}
   ============================================ */
[data-theme="${teamId}"] {
  /* Brand Colors */
  --brand-core: ${core};
  --brand-light: ${light};
  --brand-dark: ${dark};
  --brand-interactive: ${interactive};
  --brand-inverted: ${inverted};

  /* Typography */
  --display-font: '${displayFont}', sans-serif;
  --display-weight: ${displayWeight};
  --display-letter-spacing: ${displayLetterSpacing};
  --display-size-900: ${displaySize900};
  --display-size-800: ${displaySize800};
  --display-size-700: ${displaySize700};
  --display-size-600: ${displaySize600};
  --display-size-500: ${displaySize500};
  --display-size-400: ${displaySize400};
  --display-size-300: ${displaySize300};
  --display-size-200: ${displaySize200};
  --display-size-100: ${displaySize100};

  /* UI Values */
  --button-border-radius: ${buttonRadius};
  --background-blur: 50px;

  /* Team Logo */
  --team-logo-url: url('https://diet-air-ds.vercel.app/images/${teamId}.svg');
}

[data-theme="${teamId}"][data-mode="light"] {
  --org-base: ${lightBase};
  --org-surface: ${lightSurface};
  --org-sheet: ${lightSheet};
  --org-nav: ${lightNav};
  --org-transactional-button: ${lightInteractiveTransactional};
  --org-transactional-button-text: ${lightInteractiveTransactionalText};
  --org-primary-button: ${lightInteractivePrimary};
  --org-primary-button-text: ${lightInteractivePrimaryText};
  --org-secondary-button-text: ${lightInteractiveSecondaryText};
  --org-tertiary-button-text: ${lightInteractiveTertiaryText};
  --color-interactive: ${interactive};
  --color-inverted: ${inverted};
}

[data-theme="${teamId}"][data-mode="dark"] {
  --org-base: ${darkBase};
  --org-surface: ${darkSurface};
  --org-sheet: ${darkSheet};
  --org-nav: ${darkNav};
  --org-transactional-button: ${darkInteractiveTransactional};
  --org-transactional-button-text: ${darkInteractiveTransactionalText};
  --org-primary-button: ${darkInteractivePrimary};
  --org-primary-button-text: ${darkInteractivePrimaryText};
  --org-secondary-button-text: ${darkInteractiveSecondaryText};
  --org-tertiary-button-text: ${darkInteractiveTertiaryText};
  --color-interactive: ${interactive};
  --color-inverted: ${inverted};
}
`
}

function updateCssFile(cssBlocks) {
  const cssPath = path.join(__dirname, '..', 'design-tokens-master.css')

  if (!fs.existsSync(cssPath)) {
    console.error('design-tokens-master.css not found')
    return
  }

  let cssContent = fs.readFileSync(cssPath, 'utf-8')

  const startMarker = '/* SYNC:START - Team themes managed by Sanity CMS - DO NOT EDIT MANUALLY */'
  const endMarker = '/* SYNC:END */'

  const startIndex = cssContent.indexOf(startMarker)
  const endIndex = cssContent.indexOf(endMarker)

  if (startIndex === -1 || endIndex === -1) {
    console.error('Could not find SYNC markers in design-tokens-master.css')
    return
  }

  const before = cssContent.substring(0, startIndex + startMarker.length)
  const after = cssContent.substring(endIndex)

  const newContent = before + '\n\n' + cssBlocks.join('\n') + '\n' + after

  fs.writeFileSync(cssPath, newContent)
  console.log('  ✓ Updated design-tokens-master.css')
}

// Run the sync
syncTeams()
