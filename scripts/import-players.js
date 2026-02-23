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

// Example player data structure:
// Replace this with your actual player database
const playersData = [
  // {
  //   name: 'Player Name',
  //   teamId: 'wolves', // Must match the _id of an existing team document
  //   sport: 'WNBA',
  //   number: '23',
  //   position: 'Guard',
  // },
]

async function importPlayers() {
  try {
    console.log(`Importing ${playersData.length} players...\n`)

    // First, get all teams to validate references
    const teams = await client.fetch('*[_type == "team"]{ _id, name }')
    const teamIds = new Set(teams.map(t => t._id))

    let imported = 0
    let skipped = 0

    for (const playerData of playersData) {
      // Validate team reference exists
      if (!teamIds.has(playerData.teamId)) {
        console.log(`  ⚠ Skipping ${playerData.name} - team "${playerData.teamId}" not found`)
        skipped++
        continue
      }

      // Create player document
      const player = {
        _type: 'player',
        name: playerData.name,
        sport: playerData.sport,
        number: playerData.number || '',
        position: playerData.position || '',
        team: {
          _type: 'reference',
          _ref: playerData.teamId,
        },
      }

      await client.create(player)
      console.log(`  ✓ Imported ${playerData.name} #${playerData.number} (${playerData.position})`)
      imported++
    }

    console.log(`\n✅ Import complete: ${imported} players imported, ${skipped} skipped`)
  } catch (error) {
    console.error('Error importing players:', error)
    process.exit(1)
  }
}

// Uncomment to run:
// importPlayers()
