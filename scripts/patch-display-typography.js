import {createClient} from '@sanity/client'
import dotenv from 'dotenv'

dotenv.config()

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN,
})

// Correct font weight per team, matching the @font-face declarations in fonts.css
const teamTypography = {
  wolves:   {displayWeight: '800', displayLetterSpacing: '-0.02em'}, // Futura Wolves Autocaps 800
  lynx:     {displayWeight: '700', displayLetterSpacing: '-0.02em'}, // Futura Caps 700
  sounders: {displayWeight: '700', displayLetterSpacing: '-0.02em'}, // Futura Caps 700
  courage:  {displayWeight: '800', displayLetterSpacing: '-0.02em'}, // Public Caps Pro ExtraBold 800
  ncfc:     {displayWeight: '900', displayLetterSpacing: '-0.02em'}, // Public Caps Pro Black 900
  summit:   {displayWeight: '400', displayLetterSpacing: '-0.02em'}, // MARTIN Caps Custom 400
  bucknell: {displayWeight: '700', displayLetterSpacing: '-0.02em'}, // Teko Caps 700
  reign:    {displayWeight: '700', displayLetterSpacing: '-0.02em'}, // Manner Pro 700
  athletics:{displayWeight: '900', displayLetterSpacing: '-0.02em'}, // Proxima Caps 900
  jump:     {displayWeight: '900', displayLetterSpacing: '-0.02em'}, // Inter 900
}

async function patchTeams() {
  const teams = await client.fetch(`*[_type == "team"]{ _id, teamId }`)
  console.log(`Found ${teams.length} teams`)

  for (const team of teams) {
    const teamId = team.teamId?.current
    const typo = teamTypography[teamId]

    if (!typo) {
      console.warn(`  ⚠ No typography config for teamId: ${teamId} — skipping`)
      continue
    }

    await client
      .patch(team._id)
      .set({
        'brandColors.displayWeight': typo.displayWeight,
        'brandColors.displayLetterSpacing': typo.displayLetterSpacing,
      })
      .commit()

    console.log(`  ✓ Patched ${teamId} — weight: ${typo.displayWeight}, letterSpacing: ${typo.displayLetterSpacing}`)
  }

  console.log('✅ Done')
}

patchTeams().catch((err) => {
  console.error(err)
  process.exit(1)
})
