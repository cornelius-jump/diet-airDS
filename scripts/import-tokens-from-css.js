import {createClient} from '@sanity/client'
import fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url'
import dotenv from 'dotenv'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config()

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN,
})

function parseCssTokens() {
  const cssPath = path.join(__dirname, '..', 'design-tokens-master.css')
  const cssContent = fs.readFileSync(cssPath, 'utf-8')

  const teams = {}
  const teamIdRegex = /\[data-theme="([^"]+)"\]/g

  // Find all team IDs
  let match
  while ((match = teamIdRegex.exec(cssContent)) !== null) {
    const teamId = match[1]
    if (!teams[teamId]) {
      teams[teamId] = {
        brandColors: {}
      }
    }
  }

  // Parse each team's tokens
  for (const teamId of Object.keys(teams)) {
    // Parse base theme tokens
    const baseThemeRegex = new RegExp(
      `\\[data-theme="${teamId}"\\]\\s*\\{([^}]+)\\}`,
      's'
    )
    const baseMatch = baseThemeRegex.exec(cssContent)
    if (baseMatch) {
      const baseContent = baseMatch[1]
      teams[teamId].brandColors.core = extractValue(baseContent, '--brand-core')
      teams[teamId].brandColors.light = extractValue(baseContent, '--brand-light')
      teams[teamId].brandColors.dark = extractValue(baseContent, '--brand-dark')
      teams[teamId].brandColors.interactive = extractValue(baseContent, '--brand-interactive')
      teams[teamId].brandColors.inverted = extractValue(baseContent, '--brand-inverted')
      teams[teamId].buttonRadius = extractValue(baseContent, '--button-border-radius')
      teams[teamId].displayFont = extractValue(baseContent, '--display-font')?.replace(/['"]/g, '').split(',')[0]
    }

    // Parse light mode tokens
    const lightModeRegex = new RegExp(
      `\\[data-theme="${teamId}"\\]\\[data-mode="light"\\]\\s*\\{([^}]+)\\}`,
      's'
    )
    const lightMatch = lightModeRegex.exec(cssContent)
    if (lightMatch) {
      const lightContent = lightMatch[1]
      teams[teamId].brandColors.lightBase = extractValue(lightContent, '--org-base')
      teams[teamId].brandColors.lightSurface = extractValue(lightContent, '--org-surface')
      teams[teamId].brandColors.lightSheet = extractValue(lightContent, '--org-sheet')
      teams[teamId].brandColors.lightNav = extractValue(lightContent, '--org-nav')
      teams[teamId].brandColors.lightInteractiveTransactional = extractValue(lightContent, '--org-transactional-button')
      teams[teamId].brandColors.lightInteractiveTransactionalText = extractValue(lightContent, '--org-transactional-button-text')
      teams[teamId].brandColors.lightInteractivePrimary = extractValue(lightContent, '--org-primary-button')
      teams[teamId].brandColors.lightInteractivePrimaryText = extractValue(lightContent, '--org-primary-button-text')
      teams[teamId].brandColors.lightInteractiveSecondaryText = extractValue(lightContent, '--org-secondary-button-text')
      teams[teamId].brandColors.lightInteractiveTertiaryText = extractValue(lightContent, '--org-tertiary-button-text')
    }

    // Parse dark mode tokens
    const darkModeRegex = new RegExp(
      `\\[data-theme="${teamId}"\\]\\[data-mode="dark"\\]\\s*\\{([^}]+)\\}`,
      's'
    )
    const darkMatch = darkModeRegex.exec(cssContent)
    if (darkMatch) {
      const darkContent = darkMatch[1]
      teams[teamId].brandColors.darkBase = extractValue(darkContent, '--org-base')
      teams[teamId].brandColors.darkSurface = extractValue(darkContent, '--org-surface')
      teams[teamId].brandColors.darkSheet = extractValue(darkContent, '--org-sheet')
      teams[teamId].brandColors.darkNav = extractValue(darkContent, '--org-nav')
      teams[teamId].brandColors.darkInteractiveTransactional = extractValue(darkContent, '--org-transactional-button')
      teams[teamId].brandColors.darkInteractiveTransactionalText = extractValue(darkContent, '--org-transactional-button-text')
      teams[teamId].brandColors.darkInteractivePrimary = extractValue(darkContent, '--org-primary-button')
      teams[teamId].brandColors.darkInteractivePrimaryText = extractValue(darkContent, '--org-primary-button-text')
      teams[teamId].brandColors.darkInteractiveSecondaryText = extractValue(darkContent, '--org-secondary-button-text')
      teams[teamId].brandColors.darkInteractiveTertiaryText = extractValue(darkContent, '--org-tertiary-button-text')
    }
  }

  return teams
}

function extractValue(content, property) {
  const regex = new RegExp(`${property}:\\s*([^;]+);`, 'i')
  const match = regex.exec(content)
  return match ? match[1].trim() : null
}

async function updateTeamsInSanity() {
  try {
    console.log('Parsing CSS tokens...')
    const teams = parseCssTokens()

    console.log(`Found ${Object.keys(teams).length} teams in CSS`)

    for (const [teamId, data] of Object.entries(teams)) {
      console.log(`\nUpdating ${teamId}...`)

      await client
        .patch(teamId)
        .set({
          brandColors: data.brandColors,
          buttonRadius: data.buttonRadius,
          displayFont: data.displayFont,
        })
        .commit()

      console.log(`  ✓ Updated ${teamId}`)

      // Log a sample of the tokens
      console.log(`    Core: ${data.brandColors.core}`)
      console.log(`    Light Base: ${data.brandColors.lightBase}`)
      console.log(`    Dark Base: ${data.brandColors.darkBase}`)
    }

    console.log('\n✅ All teams updated successfully!')
  } catch (error) {
    console.error('Error updating teams:', error)
    process.exit(1)
  }
}

updateTeamsInSanity()
