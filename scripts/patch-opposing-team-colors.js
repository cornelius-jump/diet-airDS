/**
 * patch-opposing-team-colors.js
 *
 * Reads team primary colors from the Figma design tokens file and patches
 * each opposingTeam document in Sanity with its primaryColor value.
 *
 * Source file: Colors & Modes/Dark.tokens.json
 * Contains: NBA, WNBA, NWSL, USL — no MLS data in source.
 *
 * Naming differences resolved:
 *   "Chicago Red Stars"  → Chicago Stars FC  (team renamed)
 *   "San Diego Tide"     → San Diego Wave FC  (same team, wrong name in tokens)
 *   "NJNY Gotham"        → NJ/NY Gotham FC
 *   "Monterey Bay Union FC" → Monterey Bay FC  (current brand name)
 *
 * Usage:
 *   node scripts/patch-opposing-team-colors.js
 *   node scripts/patch-opposing-team-colors.js --dry-run
 */

import {createClient} from '@sanity/client'
import dotenv from 'dotenv'

dotenv.config()

const isDryRun = process.argv.includes('--dry-run')

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN,
})

// ---------------------------------------------------------------------------
// Document ID → hex color
// IDs follow the pattern: opposing-team-{slugify(name)}
// ---------------------------------------------------------------------------

const colorMap = {
  // ── NBA ──────────────────────────────────────────────────────────────────
  'opposing-team-philadelphia-76ers':     '#003153',
  'opposing-team-milwaukee-bucks':        '#073C17',
  'opposing-team-chicago-bulls':          '#A00D33',
  'opposing-team-cleveland-cavaliers':    '#66002B',
  'opposing-team-boston-celtics':         '#007A33',
  'opposing-team-la-clippers':            '#C8102E',
  'opposing-team-memphis-grizzlies':      '#5D76A9',
  'opposing-team-atlanta-hawks':          '#C8102E',
  'opposing-team-miami-heat':             '#B80038',
  'opposing-team-charlotte-hornets':      '#1D1160',
  'opposing-team-utah-jazz':              '#002B5C',
  'opposing-team-sacramento-kings':       '#5A2D81',
  'opposing-team-new-york-knicks':        '#006BB6',
  'opposing-team-los-angeles-lakers':     '#552583',
  'opposing-team-orlando-magic':          '#0077C0',
  'opposing-team-dallas-mavericks':       '#00538C',
  'opposing-team-brooklyn-nets':          '#333333',
  'opposing-team-denver-nuggets':         '#0E2240',
  'opposing-team-indiana-pacers':         '#002D62',
  'opposing-team-new-orleans-pelicans':   '#0C2340',
  'opposing-team-detroit-pistons':        '#C8102E',
  'opposing-team-toronto-raptors':        '#222222',
  'opposing-team-houston-rockets':        '#30343B',
  'opposing-team-san-antonio-spurs':      '#C4CED4',
  'opposing-team-phoenix-suns':           '#1D1160',
  'opposing-team-oklahoma-city-thunder':  '#007AC1',
  'opposing-team-minnesota-timberwolves': '#266092',
  'opposing-team-portland-trail-blazers': '#E03A3E',
  'opposing-team-golden-state-warriors':  '#1D428A',
  'opposing-team-washington-wizards':     '#063C79',

  // ── WNBA ─────────────────────────────────────────────────────────────────
  'opposing-team-los-angeles-sparks':     '#552583',
  'opposing-team-las-vegas-aces':         '#000000',
  'opposing-team-atlanta-dream':          '#4891CE',
  'opposing-team-chicago-sky':            '#4D90CD',
  'opposing-team-connecticut-sun':        '#0A2240',
  'opposing-team-dallas-wings':           '#002B5C',
  'opposing-team-golden-state-valkyries': '#B896D4',
  'opposing-team-indiana-fever':          '#002D62',
  'opposing-team-new-york-liberty':       '#000000',
  'opposing-team-phoenix-mercury':        '#3E2680',
  'opposing-team-portland-fire':          '#000000',
  'opposing-team-seattle-storm':          '#2C5235',
  'opposing-team-toronto-tempo':          '#B3C7E7',
  'opposing-team-washington-mystics':     '#002B5C',

  // ── NWSL ─────────────────────────────────────────────────────────────────
  'opposing-team-angel-city-fc':          '#000000',
  'opposing-team-bay-fc':                 '#121F31',
  'opposing-team-boston-legacy-fc':       '#000000',
  'opposing-team-chicago-stars-fc':       '#64B0DF',  // was "Chicago Red Stars" in tokens
  'opposing-team-denver-summit-fc':       '#20604E',
  'opposing-team-houston-dash':           '#E17634',
  'opposing-team-kansas-city-current':    '#7FC5C6',
  'opposing-team-njny-gotham-fc':         '#A7D7E7',  // was "NJNY Gotham" in tokens
  'opposing-team-north-carolina-courage': '#AB0033',
  'opposing-team-orlando-pride':          '#5D358F',
  'opposing-team-portland-thorns-fc':     '#8A322F',
  'opposing-team-racing-louisville-fc':   '#C2B4D5',
  'opposing-team-san-diego-wave-fc':      '#101E3E',  // was "San Diego Tide" in tokens
  'opposing-team-seattle-reign-fc':       '#343F77',
  'opposing-team-utah-royals-fc':         '#F0BC41',
  'opposing-team-washington-spirit':      '#171D25',

  // ── USL Championship ─────────────────────────────────────────────────────
  'opposing-team-birmingham-legion-fc':          '#9E8959',
  'opposing-team-charleston-battery':            '#FECB00',
  'opposing-team-colorado-springs-switchbacks-fc': '#414042',
  'opposing-team-detroit-city-fc':               '#490000',
  'opposing-team-el-paso-locomotive-fc':         '#031D40',
  'opposing-team-fc-tulsa':                      '#6ECEB2',
  'opposing-team-hartford-athletic':             '#009A44',
  'opposing-team-indy-eleven':                   '#CF102D',
  'opposing-team-loudoun-united-fc':             '#2D2926',
  'opposing-team-louisville-city-fc':            '#9FA3B3',
  'opposing-team-las-vegas-lights-fc':           '#00ADEF',
  'opposing-team-memphis-901-fc':                '#13B5EA',
  'opposing-team-miami-fc':                      '#00A3CC',
  'opposing-team-monterey-bay-fc':               '#001D48',  // was "Monterey Bay Union FC" in tokens
  'opposing-team-new-mexico-united':             '#111111',
  'opposing-team-north-carolina-fc':             '#00416B',
  'opposing-team-oakland-roots-sc':              '#000000',
  'opposing-team-oklahoma-city-energy-fc':       '#20AA4D',
  'opposing-team-orange-county-sc':              '#FF6720',
  'opposing-team-phoenix-rising-fc':             '#EC1C24',
  'opposing-team-pittsburgh-riverhounds-sc':     '#FFC72A',
  'opposing-team-rhode-island-fc':               '#FFA40D',
  'opposing-team-sacramento-republic-fc':        '#7E2628',
  'opposing-team-san-antonio-fc':                '#B71212',
  'opposing-team-tampa-bay-rowdies':             '#F2ECCB',

  // ── Not in tokens (MLS, Charlotte Independence, International) ───────────
  // No color data available — these documents will remain without primaryColor
}

async function patchColors() {
  if (isDryRun) {
    console.log('DRY RUN — no writes will be made\n')
  }

  const entries = Object.entries(colorMap)
  console.log(`Patching ${entries.length} documents with primaryColor...\n`)

  let updated = 0
  let missing = 0

  for (const [docId, color] of entries) {
    if (isDryRun) {
      console.log(`[dry-run] ${docId} → ${color}`)
      continue
    }

    try {
      const doc = await client.getDocument(docId)
      if (!doc) {
        console.warn(`  ⚠️  Not found: ${docId}`)
        missing++
        continue
      }
      await client.patch(docId).set({primaryColor: color}).commit()
      console.log(`  ✓  ${doc.name} → ${color}`)
      updated++
    } catch (err) {
      console.error(`  ✗  ${docId}: ${err.message}`)
    }
  }

  console.log('\n────────────────────────────────────────')
  if (isDryRun) {
    console.log(`Would patch ${entries.length} documents.`)
  } else {
    console.log(`✅ Done — ${updated} updated, ${missing} not found`)
    console.log('\nNo color data available for:')
    console.log('  - 29 MLS teams (no MLS section in source tokens)')
    console.log('  - Charlotte Independence (USL — not in source tokens)')
    console.log('  - Chivas Femenil, Tigres Femenil (International — not in source tokens)')
    console.log('  - Minnesota Lynx (WNBA client team — not in source tokens)')
  }
}

patchColors().catch((err) => {
  console.error(err)
  process.exit(1)
})
