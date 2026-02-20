import {createClient} from '@sanity/client'
import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Load environment variables
dotenv.config()

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN,
})

const logoMapping = {
  athletics: 'athletics.svg',
  bucknell: 'bucknell.svg',
  courage: 'courage.svg',
  jump: 'jump.svg',
  lynx: 'lynx.svg',
  ncfc: 'ncfc.svg',
  summit: 'summit.svg',
  wolves: 'wolves.svg',
  sounders: 'sounders.svg',
  reign: 'reign.svg',
}

async function uploadLogos() {
  console.log('Uploading team logos to Sanity...\n')

  for (const [teamId, filename] of Object.entries(logoMapping)) {
    try {
      const logoPath = path.join(__dirname, '..', 'images', filename)

      if (!fs.existsSync(logoPath)) {
        console.log(`⚠️  ${teamId}: Logo file not found (${filename})`)
        continue
      }

      console.log(`📤 Uploading ${teamId} logo...`)

      // Upload the image as an asset
      const imageBuffer = fs.readFileSync(logoPath)
      const asset = await client.assets.upload('image', imageBuffer, {
        filename: filename,
        contentType: 'image/svg+xml',
      })

      console.log(`   ✓ Asset uploaded: ${asset._id}`)

      // Update the team document with the logo reference
      await client
        .patch(teamId)
        .set({
          logoPrimary: {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: asset._id,
            },
          },
        })
        .commit()

      console.log(`   ✓ Team document updated\n`)
    } catch (error) {
      console.error(`   ✗ Error with ${teamId}:`, error.message, '\n')
    }
  }

  console.log('✅ Logo upload complete!')
  console.log('\nMissing logos:')
  console.log('  - sounders (Seattle Sounders)')
  console.log('  - reign (Seattle Reign)')
}

uploadLogos()
