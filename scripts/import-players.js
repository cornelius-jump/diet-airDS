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

// Minnesota Timberwolves roster
const playersData = [
  {name: 'Joan Beringer', teamId: 'wolves', sport: 'NBA', number: '19', position: 'F'},
  {name: 'Jaylen Clark', teamId: 'wolves', sport: 'NBA', number: '22', position: 'G'},
  {name: 'Mike Conley', teamId: 'wolves', sport: 'NBA', number: '10', position: 'G'},
  {name: 'Donte DiVincenzo', teamId: 'wolves', sport: 'NBA', number: '0', position: 'G'},
  {name: 'Ayo Dosunmu', teamId: 'wolves', sport: 'NBA', number: '13', position: 'G'},
  {name: 'Anthony Edwards', teamId: 'wolves', sport: 'NBA', number: '5', position: 'G'},
  {name: 'Enrique Freeman', teamId: 'wolves', sport: 'NBA', number: '25', position: 'F'},
  {name: 'Rudy Gobert', teamId: 'wolves', sport: 'NBA', number: '27', position: 'C'},
  {name: 'Bones Hyland', teamId: 'wolves', sport: 'NBA', number: '8', position: 'G'},
  {name: 'Joe Ingles', teamId: 'wolves', sport: 'NBA', number: '7', position: 'F-G'},
  {name: 'Jaden McDaniels', teamId: 'wolves', sport: 'NBA', number: '3', position: 'F'},
  {name: 'Julian Phillips', teamId: 'wolves', sport: 'NBA', number: '4', position: 'F'},
  {name: 'Julius Randle', teamId: 'wolves', sport: 'NBA', number: '30', position: 'F-C'},
  {name: 'Naz Reid', teamId: 'wolves', sport: 'NBA', number: '11', position: 'C-F'},
  {name: 'Terrence Shannon Jr.', teamId: 'wolves', sport: 'NBA', number: '1', position: 'G-F'},
  {name: 'Rocco Zikarsky', teamId: 'wolves', sport: 'NBA', number: '44', position: 'C'},
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

importPlayers()
