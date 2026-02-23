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

const teamData = {
  wolves: {
    displayLetterSpacing: '-0.005em',
    displaySize900: '82px', displaySize800: '73px', displaySize700: '65px',
    displaySize600: '56px', displaySize500: '47px', displaySize400: '39px',
    displaySize300: '30px', displaySize200: '26px', displaySize100: '22px',
  },
  lynx: {
    displayLetterSpacing: '-0.03em',
    displaySize900: '76px', displaySize800: '68px', displaySize700: '60px',
    displaySize600: '52px', displaySize500: '44px', displaySize400: '36px',
    displaySize300: '28px', displaySize200: '24px', displaySize100: '20px',
  },
  courage: {
    displayLetterSpacing: '-0.05em',
    displaySize900: '68px', displaySize800: '61px', displaySize700: '54px',
    displaySize600: '46px', displaySize500: '39px', displaySize400: '32px',
    displaySize300: '25px', displaySize200: '22px', displaySize100: '18px',
  },
  summit: {
    displayLetterSpacing: '-0.04em',
    displaySize900: '90px', displaySize800: '80px', displaySize700: '71px',
    displaySize600: '62px', displaySize500: '52px', displaySize400: '42px',
    displaySize300: '33px', displaySize200: '28px', displaySize100: '24px',
  },
  bucknell: {
    displayLetterSpacing: '-0.01em',
    displaySize900: '84px', displaySize800: '76px', displaySize700: '68px',
    displaySize600: '60px', displaySize500: '52px', displaySize400: '44px',
    displaySize300: '32px', displaySize200: '28px', displaySize100: '24px',
  },
  sounders: {
    displayLetterSpacing: '-0.03em',
    displaySize900: '76px', displaySize800: '68px', displaySize700: '60px',
    displaySize600: '52px', displaySize500: '44px', displaySize400: '36px',
    displaySize300: '28px', displaySize200: '24px', displaySize100: '20px',
  },
  reign: {
    displayLetterSpacing: '-0.02em', // already correct, including for completeness
    displaySize900: '76px', displaySize800: '68px', displaySize700: '60px',
    displaySize600: '52px', displaySize500: '44px', displaySize400: '36px',
    displaySize300: '28px', displaySize200: '24px', displaySize100: '20px',
  },
  ncfc: {
    displayLetterSpacing: '-0.05em',
    displaySize900: '68px', displaySize800: '61px', displaySize700: '54px',
    displaySize600: '46px', displaySize500: '39px', displaySize400: '32px',
    displaySize300: '25px', displaySize200: '22px', displaySize100: '18px',
  },
  jump: {
    name: 'Denver Big Horns',
    displayLetterSpacing: '-0.04em',
    displaySize900: '68px', displaySize800: '61px', displaySize700: '54px',
    displaySize600: '46px', displaySize500: '39px', displaySize400: '32px',
    displaySize300: '25px', displaySize200: '22px', displaySize100: '18px',
  },
  athletics: {
    name: 'Las Vegas Athletics',
    displayLetterSpacing: '0em',
    displaySize900: '74px', displaySize800: '67px', displaySize700: '59px',
    displaySize600: '52px', displaySize500: '44px', displaySize400: '36px',
    displaySize300: '29px', displaySize200: '26px', displaySize100: '22px',
  },
}

async function patchTeams() {
  const teams = await client.fetch(`*[_type == "team"]{ _id, teamId, name }`)
  console.log(`Found ${teams.length} teams\n`)

  for (const team of teams) {
    const teamId = team.teamId?.current
    const data = teamData[teamId]

    if (!data) {
      console.warn(`  ⚠ No patch data for teamId: ${teamId} — skipping`)
      continue
    }

    const {name, displayLetterSpacing, ...sizes} = data

    const patch = client.patch(team._id)

    // Update name if specified
    if (name) patch.set({name})

    // Update letter spacing
    patch.set({'brandColors.displayLetterSpacing': displayLetterSpacing})

    // Update all 9 display sizes
    for (const [key, value] of Object.entries(sizes)) {
      patch.set({[`brandColors.${key}`]: value})
    }

    await patch.commit()

    const nameChange = name ? ` (renamed: "${team.name}" → "${name}")` : ''
    console.log(`  ✓ ${teamId}${nameChange}`)
    console.log(`      letterSpacing: ${displayLetterSpacing}`)
    console.log(`      sizes: ${Object.values(sizes).join(', ')}`)
  }

  console.log('\n✅ Done')
}

patchTeams().catch((err) => {
  console.error(err)
  process.exit(1)
})
