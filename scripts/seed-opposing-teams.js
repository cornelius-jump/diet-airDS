/**
 * seed-opposing-teams.js
 *
 * Creates opposingTeam documents in Sanity for all teams across NBA, WNBA,
 * MLS, NWSL, and USL Championship. Uploads SVG logos from the local
 * images/ folders as Sanity image assets.
 *
 * Idempotent — safe to run multiple times. Uses createOrReplace with a
 * deterministic _id based on each team's name.
 *
 * Usage:
 *   node scripts/seed-opposing-teams.js
 *   node scripts/seed-opposing-teams.js --dry-run   (preview without writing)
 *   node scripts/seed-opposing-teams.js --no-logos  (skip logo uploads)
 *
 * Requires SANITY_PROJECT_ID, SANITY_DATASET, SANITY_WRITE_TOKEN in .env
 */

import {createClient} from '@sanity/client'
import fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url'
import dotenv from 'dotenv'

dotenv.config()

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const IMAGES_DIR = path.join(__dirname, '..', 'images')

const isDryRun = process.argv.includes('--dry-run')
const skipLogos = process.argv.includes('--no-logos')

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN,
})

// ---------------------------------------------------------------------------
// Team data
// Filenames match exactly what's on disk (including typos in source files).
// The `name` field always uses the correct team name.
// ---------------------------------------------------------------------------

const teams = [
  // ── NBA ──────────────────────────────────────────────────────────────────
  {name: 'Philadelphia 76ers',    shortName: '76ers',           city: 'Philadelphia',    league: 'NBA',  logoFile: 'NBA/76ers.svg'},
  {name: 'Milwaukee Bucks',       shortName: 'Bucks',           city: 'Milwaukee',        league: 'NBA',  logoFile: 'NBA/Bucks.svg'},
  {name: 'Chicago Bulls',         shortName: 'Bulls',           city: 'Chicago',          league: 'NBA',  logoFile: 'NBA/Bulls.svg'},
  {name: 'Cleveland Cavaliers',   shortName: 'Cavaliers',       city: 'Cleveland',        league: 'NBA',  logoFile: 'NBA/Cavaliers.svg'},
  {name: 'Boston Celtics',        shortName: 'Celtics',         city: 'Boston',           league: 'NBA',  logoFile: 'NBA/Celtics.svg'},
  {name: 'LA Clippers',           shortName: 'Clippers',        city: 'Los Angeles',      league: 'NBA',  logoFile: 'NBA/Clippers.svg'},
  {name: 'Memphis Grizzlies',     shortName: 'Grizzlies',       city: 'Memphis',          league: 'NBA',  logoFile: 'NBA/Grizzlies.svg'},
  {name: 'Atlanta Hawks',         shortName: 'Hawks',           city: 'Atlanta',          league: 'NBA',  logoFile: 'NBA/Hawks.svg'},
  {name: 'Miami Heat',            shortName: 'Heat',            city: 'Miami',            league: 'NBA',  logoFile: 'NBA/Heat.svg'},
  {name: 'Charlotte Hornets',     shortName: 'Hornets',         city: 'Charlotte',        league: 'NBA',  logoFile: 'NBA/Hornets.svg'},
  {name: 'Utah Jazz',             shortName: 'Jazz',            city: 'Salt Lake City',   league: 'NBA',  logoFile: 'NBA/Jazz.svg'},
  {name: 'Sacramento Kings',      shortName: 'Kings',           city: 'Sacramento',       league: 'NBA',  logoFile: 'NBA/Kings.svg'},
  {name: 'New York Knicks',       shortName: 'Knicks',          city: 'New York',         league: 'NBA',  logoFile: 'NBA/Knicks.svg'},
  {name: 'Los Angeles Lakers',    shortName: 'Lakers',          city: 'Los Angeles',      league: 'NBA',  logoFile: 'NBA/Lakers.svg'},
  {name: 'Orlando Magic',         shortName: 'Magic',           city: 'Orlando',          league: 'NBA',  logoFile: 'NBA/Magic.svg'},
  {name: 'Dallas Mavericks',      shortName: 'Mavericks',       city: 'Dallas',           league: 'NBA',  logoFile: 'NBA/Mavericks.svg'},
  {name: 'Brooklyn Nets',         shortName: 'Nets',            city: 'Brooklyn',         league: 'NBA',  logoFile: 'NBA/Nets.svg'},
  {name: 'Denver Nuggets',        shortName: 'Nuggets',         city: 'Denver',           league: 'NBA',  logoFile: 'NBA/Nuggets.svg'},
  {name: 'Indiana Pacers',        shortName: 'Pacers',          city: 'Indianapolis',     league: 'NBA',  logoFile: 'NBA/Pacers.svg'},
  {name: 'New Orleans Pelicans',  shortName: 'Pelicans',        city: 'New Orleans',      league: 'NBA',  logoFile: 'NBA/Pelicans.svg'},
  {name: 'Detroit Pistons',       shortName: 'Pistons',         city: 'Detroit',          league: 'NBA',  logoFile: 'NBA/Pistons.svg'},
  {name: 'Toronto Raptors',       shortName: 'Raptors',         city: 'Toronto',          league: 'NBA',  logoFile: 'NBA/Raptors.svg'},
  {name: 'Houston Rockets',       shortName: 'Rockets',         city: 'Houston',          league: 'NBA',  logoFile: 'NBA/Rockets.svg'},
  {name: 'San Antonio Spurs',     shortName: 'Spurs',           city: 'San Antonio',      league: 'NBA',  logoFile: 'NBA/Spurs.svg'},
  {name: 'Phoenix Suns',          shortName: 'Suns',            city: 'Phoenix',          league: 'NBA',  logoFile: 'NBA/Suns.svg'},
  {name: 'Oklahoma City Thunder', shortName: 'Thunder',         city: 'Oklahoma City',    league: 'NBA',  logoFile: 'NBA/Thunder.svg'},
  {name: 'Minnesota Timberwolves',shortName: 'Timberwolves',    city: 'Minneapolis',      league: 'NBA',  logoFile: 'NBA/Timberwolves.svg'},
  {name: 'Portland Trail Blazers',shortName: 'Trail Blazers',   city: 'Portland',         league: 'NBA',  logoFile: 'NBA/Trail Blazers.svg'},
  {name: 'Golden State Warriors', shortName: 'Warriors',        city: 'San Francisco',    league: 'NBA',  logoFile: 'NBA/Warriors.svg'},
  {name: 'Washington Wizards',    shortName: 'Wizards',         city: 'Washington',       league: 'NBA',  logoFile: 'NBA/Wizards.svg'},

  // ── WNBA ─────────────────────────────────────────────────────────────────
  {name: 'Atlanta Dream',           shortName: 'Dream',       city: 'Atlanta',        league: 'WNBA', logoFile: 'WNBA/Atlanta Dream.svg'},
  {name: 'Chicago Sky',             shortName: 'Sky',         city: 'Chicago',        league: 'WNBA', logoFile: 'WNBA/Chicago Sky.svg'},
  {name: 'Connecticut Sun',         shortName: 'Sun',         city: 'Uncasville',     league: 'WNBA', logoFile: 'WNBA/Connecticut Sun.svg'},
  {name: 'Dallas Wings',            shortName: 'Wings',       city: 'Arlington',      league: 'WNBA', logoFile: 'WNBA/Dallas Wings.svg'},
  {name: 'Golden State Valkyries',  shortName: 'Valkyries',   city: 'San Francisco',  league: 'WNBA', logoFile: 'WNBA/Golden State Valkyries.svg'},
  {name: 'Indiana Fever',           shortName: 'Fever',       city: 'Indianapolis',   league: 'WNBA', logoFile: 'WNBA/Indiana Fever.svg'},
  {name: 'Las Vegas Aces',          shortName: 'Aces',        city: 'Las Vegas',      league: 'WNBA', logoFile: 'WNBA/Las Vegas Aces.svg'},
  {name: 'Los Angeles Sparks',      shortName: 'Sparks',      city: 'Los Angeles',    league: 'WNBA', logoFile: 'WNBA/Los Angeles Sparks.svg'},
  {name: 'Minnesota Lynx',          shortName: 'Lynx',        city: 'Minneapolis',    league: 'WNBA', logoFile: 'WNBA/Minnesota Lynx.svg'},
  {name: 'New York Liberty',        shortName: 'Liberty',     city: 'Brooklyn',       league: 'WNBA', logoFile: 'WNBA/New York Liberty.svg'},
  {name: 'Phoenix Mercury',         shortName: 'Mercury',     city: 'Phoenix',        league: 'WNBA', logoFile: 'WNBA/Phoenix Mercury.svg'},
  {name: 'Portland Fire',           shortName: 'Fire',        city: 'Portland',       league: 'WNBA', logoFile: 'WNBA/Portland Fire.svg'},
  {name: 'Seattle Storm',           shortName: 'Storm',       city: 'Seattle',        league: 'WNBA', logoFile: 'WNBA/Seattle Storm.svg'},
  {name: 'Toronto Tempo',           shortName: 'Tempo',       city: 'Toronto',        league: 'WNBA', logoFile: 'WNBA/Toronto Tempo.svg'},
  {name: 'Washington Mystics',      shortName: 'Mystics',     city: 'Washington',     league: 'WNBA', logoFile: 'WNBA/Washington Mystics.svg'},

  // ── MLS ──────────────────────────────────────────────────────────────────
  {name: 'Atlanta United FC',       shortName: 'Atlanta United',    city: 'Atlanta',        league: 'MLS', logoFile: 'MLS/Atlanta United.svg'},
  {name: 'Austin FC',               shortName: 'Austin FC',         city: 'Austin',         league: 'MLS', logoFile: 'MLS/Austin FC.svg'},
  {name: 'CF Montréal',             shortName: 'CF Montréal',       city: 'Montreal',       league: 'MLS', logoFile: 'MLS/CF Montreal.svg'},
  {name: 'Charlotte FC',            shortName: 'Charlotte FC',      city: 'Charlotte',      league: 'MLS', logoFile: 'MLS/Charlotte FC.svg'},
  {name: 'Chicago Fire FC',         shortName: 'Chicago Fire',      city: 'Chicago',        league: 'MLS', logoFile: 'MLS/Chicago Fire.svg'},
  {name: 'FC Cincinnati',           shortName: 'FC Cincinnati',     city: 'Cincinnati',     league: 'MLS', logoFile: 'MLS/Cincinnati FC.svg'},
  {name: 'Colorado Rapids',         shortName: 'Rapids',            city: 'Commerce City',  league: 'MLS', logoFile: 'MLS/Colorado Rapis.svg'},  // filename typo in source
  {name: 'D.C. United',             shortName: 'D.C. United',       city: 'Washington',     league: 'MLS', logoFile: 'MLS/DC United.svg'},
  {name: 'FC Dallas',               shortName: 'FC Dallas',         city: 'Frisco',         league: 'MLS', logoFile: 'MLS/FC Dallas.svg'},
  {name: 'Houston Dynamo FC',       shortName: 'Houston Dynamo',    city: 'Houston',        league: 'MLS', logoFile: 'MLS/Houston Dynamo FC.svg'},
  {name: 'Inter Miami CF',          shortName: 'Inter Miami',       city: 'Fort Lauderdale',league: 'MLS', logoFile: 'MLS/Inter Miami.svg'},
  {name: 'LA Galaxy',               shortName: 'LA Galaxy',         city: 'Carson',         league: 'MLS', logoFile: 'MLS/LA Galaxy.svg'},
  {name: 'Los Angeles FC',          shortName: 'LAFC',              city: 'Los Angeles',    league: 'MLS', logoFile: 'MLS/LAFC.svg'},
  {name: 'Minnesota United FC',     shortName: 'Minnesota United',  city: 'Saint Paul',     league: 'MLS', logoFile: 'MLS/Minnesota FC.svg'},
  {name: 'Nashville SC',            shortName: 'Nashville SC',      city: 'Nashville',      league: 'MLS', logoFile: 'MLS/Nashville SC.svg'},
  {name: 'New England Revolution',  shortName: 'Revolution',        city: 'Foxborough',     league: 'MLS', logoFile: 'MLS/New England Revolution.svg'},
  {name: 'New York City FC',        shortName: 'NYCFC',             city: 'New York',       league: 'MLS', logoFile: 'MLS/NYCFC.svg'},
  {name: 'Orlando City SC',         shortName: 'Orlando City',      city: 'Orlando',        league: 'MLS', logoFile: 'MLS/Orlando City.svg'},
  {name: 'Philadelphia Union',      shortName: 'Philadelphia Union',city: 'Chester',        league: 'MLS', logoFile: 'MLS/Philadelphia Union.svg'},
  {name: 'Portland Timbers',        shortName: 'Timbers',           city: 'Portland',       league: 'MLS', logoFile: 'MLS/Portland Timbers.svg'},
  {name: 'Real Salt Lake',          shortName: 'Real Salt Lake',    city: 'Sandy',          league: 'MLS', logoFile: 'MLS/Real Salt Lake.svg'},
  {name: 'New York Red Bulls',      shortName: 'Red Bulls',         city: 'Harrison',       league: 'MLS', logoFile: 'MLS/Red Bull New York.svg'},
  {name: 'San Diego FC',            shortName: 'San Diego FC',      city: 'San Diego',      league: 'MLS', logoFile: 'MLS/San Diego FC.svg'},
  {name: 'San Jose Earthquakes',    shortName: 'Earthquakes',       city: 'San Jose',       league: 'MLS', logoFile: 'MLS/San Jose Quakes.svg'},
  {name: 'Seattle Sounders FC',     shortName: 'Sounders',          city: 'Seattle',        league: 'MLS', logoFile: 'MLS/Seattle Sounders.svg'},
  {name: 'Sporting Kansas City',    shortName: 'Sporting KC',       city: 'Kansas City',    league: 'MLS', logoFile: 'MLS/Sporting KC.svg'},
  {name: 'St. Louis City SC',       shortName: 'St. Louis City',    city: 'St. Louis',      league: 'MLS', logoFile: 'MLS/St. Louis City.svg'},
  {name: 'Toronto FC',              shortName: 'Toronto FC',        city: 'Toronto',        league: 'MLS', logoFile: 'MLS/Toronto FC.svg'},
  {name: 'Vancouver Whitecaps FC',  shortName: 'Whitecaps',         city: 'Vancouver',      league: 'MLS', logoFile: 'MLS/Vancouver Whitecaps FC.svg'},

  // ── NWSL ─────────────────────────────────────────────────────────────────
  {name: 'Angel City FC',           shortName: 'Angel City',        city: 'Los Angeles',    league: 'NWSL', logoFile: 'NWSL/Angel City FC.svg'},
  {name: 'Bay FC',                  shortName: 'Bay FC',            city: 'San Jose',       league: 'NWSL', logoFile: 'NWSL/Bay FC.svg'},
  {name: 'Boston Legacy FC',        shortName: 'Boston Legacy',     city: 'Boston',         league: 'NWSL', logoFile: 'NWSL/Boston Legacy FC.svg'},
  {name: 'Chicago Stars FC',        shortName: 'Chicago Stars',     city: 'Chicago',        league: 'NWSL', logoFile: 'NWSL/Chicago Stars.svg'},
  {name: 'Chivas Femenil',          shortName: 'Chivas',            city: 'Guadalajara',    league: 'International', logoFile: 'NWSL/Chivas.svg'},
  {name: 'Denver Summit FC',        shortName: 'Summit FC',         city: 'Denver',         league: 'NWSL', logoFile: 'NWSL/Denver Summit FC.svg'},
  {name: 'Houston Dash',            shortName: 'Dash',              city: 'Houston',        league: 'NWSL', logoFile: 'NWSL/Houson Dash.svg'},      // source filename typo
  {name: 'Kansas City Current',     shortName: 'KC Current',        city: 'Kansas City',    league: 'NWSL', logoFile: 'NWSL/Kansas City Current.svg'},
  {name: 'NJ/NY Gotham FC',         shortName: 'Gotham FC',         city: 'Harrison',       league: 'NWSL', logoFile: 'NWSL/NJ-NY Gotham FC.svg'},
  {name: 'North Carolina Courage',  shortName: 'NC Courage',        city: 'Cary',           league: 'NWSL', logoFile: 'NWSL/North Carolina Courage.svg'},
  {name: 'Orlando Pride',           shortName: 'Pride',             city: 'Orlando',        league: 'NWSL', logoFile: 'NWSL/Orlando Pride.svg'},
  {name: 'Portland Thorns FC',      shortName: 'Thorns',            city: 'Portland',       league: 'NWSL', logoFile: 'NWSL/Portland Thorns FC.svg'},
  {name: 'Racing Louisville FC',    shortName: 'Racing Louisville', city: 'Louisville',     league: 'NWSL', logoFile: 'NWSL/Racing Louisville FC.svg'},
  {name: 'San Diego Wave FC',       shortName: 'San Diego Wave',    city: 'San Diego',      league: 'NWSL', logoFile: 'NWSL/San Diego Wace FC.svg'},   // source filename typo
  {name: 'Seattle Reign FC',        shortName: 'Reign',             city: 'Seattle',        league: 'NWSL', logoFile: 'NWSL/Seattle Reigh FC.svg'},    // source filename typo
  {name: 'Tigres Femenil',          shortName: 'Tigres',            city: 'San Nicolás de los Garza', league: 'International', logoFile: 'NWSL/Tigres.svg'},
  {name: 'Utah Royals FC',          shortName: 'Utah Royals',       city: 'Sandy',          league: 'NWSL', logoFile: 'NWSL/Utah Royals FC.svg'},
  {name: 'Washington Spirit',       shortName: 'Spirit',            city: 'Washington',     league: 'NWSL', logoFile: 'NWSL/Washington Spirit.svg'},

  // ── USL Championship ─────────────────────────────────────────────────────
  {name: 'Birmingham Legion FC',           shortName: 'Birmingham Legion',  city: 'Birmingham',      league: 'USL', logoFile: 'USL/Birmingham Legion FC.svg'},
  {name: 'Charleston Battery',             shortName: 'Battery',            city: 'Charleston',      league: 'USL', logoFile: 'USL/Charleston Battery.svg'},
  {name: 'Charlotte Independence',         shortName: 'Independence',       city: 'Charlotte',       league: 'USL', logoFile: 'USL/Charlotte Independence.svg'},
  {name: 'Colorado Springs Switchbacks FC',shortName: 'Switchbacks',        city: 'Colorado Springs',league: 'USL', logoFile: 'USL/Colorado Springs Switchbacks FC.svg'},
  {name: 'Detroit City FC',                shortName: 'Detroit City',       city: 'Detroit',         league: 'USL', logoFile: 'USL/Detroit City FC.svg'},
  {name: 'El Paso Locomotive FC',          shortName: 'Locomotive',         city: 'El Paso',         league: 'USL', logoFile: 'USL/El Paso Locomotive FC.svg'},
  {name: 'FC Tulsa',                       shortName: 'FC Tulsa',           city: 'Tulsa',           league: 'USL', logoFile: 'USL/FC Tulsa.svg'},
  {name: 'Hartford Athletic',              shortName: 'Hartford Athletic',  city: 'Hartford',        league: 'USL', logoFile: 'USL/Hartford Athletic.svg'},
  {name: 'Indy Eleven',                    shortName: 'Indy Eleven',        city: 'Indianapolis',    league: 'USL', logoFile: 'USL/Indy Eleven.svg'},
  {name: 'Las Vegas Lights FC',            shortName: 'Las Vegas Lights',   city: 'Las Vegas',       league: 'USL', logoFile: 'USL/Las Vegas Lights FC.svg'},
  {name: 'Loudoun United FC',              shortName: 'Loudoun United',     city: 'Leesburg',        league: 'USL', logoFile: 'USL/Loudoun United FC.svg'},
  {name: 'Louisville City FC',             shortName: 'Louisville City',    city: 'Louisville',      league: 'USL', logoFile: 'USL/Louisville City FC.svg'},
  {name: 'Memphis 901 FC',                 shortName: 'Memphis 901',        city: 'Memphis',         league: 'USL', logoFile: 'USL/Memphis 901 FC.svg'},
  {name: 'Miami FC',                       shortName: 'Miami FC',           city: 'Miami',           league: 'USL', logoFile: 'USL/Miami FC.svg'},
  {name: 'Monterey Bay FC',                shortName: 'Monterey Bay',       city: 'Seaside',         league: 'USL', logoFile: 'USL/Monterey Bay Union FC.svg'}, // current brand name
  {name: 'New Mexico United',              shortName: 'New Mexico United',  city: 'Albuquerque',     league: 'USL', logoFile: 'USL/New Mexico United.svg'},
  {name: 'North Carolina FC',              shortName: 'NC FC',              city: 'Cary',            league: 'USL', logoFile: 'USL/North Carolina FC.svg'},
  {name: 'Oakland Roots SC',               shortName: 'Oakland Roots',      city: 'Oakland',         league: 'USL', logoFile: 'USL/Oakland Roots SC.svg'},
  {name: 'Oklahoma City Energy FC',        shortName: 'OKC Energy',         city: 'Oklahoma City',   league: 'USL', logoFile: 'USL/Oklahoma City Energy FC.svg'},
  {name: 'Orange County SC',               shortName: 'Orange County',      city: 'Irvine',          league: 'USL', logoFile: 'USL/Orange County SC.svg'},
  {name: 'Phoenix Rising FC',              shortName: 'Phoenix Rising',     city: 'Phoenix',         league: 'USL', logoFile: 'USL/Phoenix Rising FC.svg'},
  {name: 'Pittsburgh Riverhounds SC',      shortName: 'Riverhounds',        city: 'Pittsburgh',      league: 'USL', logoFile: 'USL/Pittsburgh Riverhounds SC.svg'},
  {name: 'Rhode Island FC',                shortName: 'Rhode Island FC',    city: 'Pawtucket',       league: 'USL', logoFile: 'USL/Rhode Island FC.svg'},
  {name: 'Sacramento Republic FC',         shortName: 'Sacramento Republic',city: 'Sacramento',      league: 'USL', logoFile: 'USL/Sacramento Republic FC.svg'},
  {name: 'San Antonio FC',                 shortName: 'San Antonio FC',     city: 'San Antonio',     league: 'USL', logoFile: 'USL/San Antonio FC.svg'},
  {name: 'Tampa Bay Rowdies',              shortName: 'Rowdies',            city: 'St. Petersburg',  league: 'USL', logoFile: 'USL/Tampa Bay Rowdies.svg'},
]

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function slugify(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // strip accent marks
    .replace(/[^a-z0-9\s-]/g, '')    // remove special chars
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

async function uploadLogo(logoFile) {
  const fullPath = path.join(IMAGES_DIR, logoFile)
  if (!fs.existsSync(fullPath)) {
    return null
  }
  const buffer = fs.readFileSync(fullPath)
  const filename = path.basename(logoFile)
  const contentType = logoFile.endsWith('.png') ? 'image/png' : 'image/svg+xml'
  const asset = await client.assets.upload('image', buffer, {filename, contentType})
  return {
    _type: 'image',
    asset: {_type: 'reference', _ref: asset._id},
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function seed() {
  if (isDryRun) {
    console.log('DRY RUN — no writes will be made\n')
  }
  if (skipLogos) {
    console.log('Skipping logo uploads (--no-logos)\n')
  }

  console.log(`Seeding ${teams.length} opposing teams...\n`)

  let created = 0
  let updated = 0
  let logosMissing = []

  for (const team of teams) {
    const teamSlug = slugify(team.name)
    const docId = `opposing-team-${teamSlug}`
    const teamIdSlug = {_type: 'slug', current: teamSlug}

    let logoData = null
    if (!skipLogos && !isDryRun) {
      try {
        logoData = await uploadLogo(team.logoFile)
        if (!logoData) {
          logosMissing.push(`${team.name} (${team.logoFile})`)
        }
      } catch (err) {
        console.warn(`  ⚠️  Logo upload failed for ${team.name}: ${err.message}`)
        logosMissing.push(`${team.name} (${team.logoFile})`)
      }
    }

    const doc = {
      _id: docId,
      _type: 'opposingTeam',
      name: team.name,
      teamId: teamIdSlug,
      shortName: team.shortName,
      city: team.city,
      league: team.league,
      ...(logoData ? {logo: logoData} : {}),
    }

    if (isDryRun) {
      console.log(`[dry-run] Would upsert: ${team.name} (${team.league}) — id: ${docId}`)
      continue
    }

    try {
      const existing = await client.getDocument(docId)
      if (existing) {
        // Preserve existing logo if we're not uploading a new one
        const patch = client.patch(docId).set({
          name: doc.name,
          teamId: doc.teamId,
          shortName: doc.shortName,
          city: doc.city,
          league: doc.league,
          ...(logoData ? {logo: logoData} : {}),
        })
        await patch.commit()
        console.log(`  ↻  Updated: ${team.name}`)
        updated++
      } else {
        await client.create(doc)
        console.log(`  +  Created: ${team.name}`)
        created++
      }
    } catch (err) {
      console.error(`  ✗  Error with ${team.name}:`, err.message)
    }
  }

  console.log('\n────────────────────────────────────────')
  if (isDryRun) {
    console.log(`Would process ${teams.length} teams.`)
  } else {
    console.log(`✅ Done — ${created} created, ${updated} updated`)
    if (logosMissing.length > 0) {
      console.log(`\n⚠️  Missing logos (${logosMissing.length}):`)
      logosMissing.forEach((l) => console.log(`   - ${l}`))
    }
  }
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
