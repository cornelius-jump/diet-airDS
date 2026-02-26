#!/usr/bin/env node
/**
 * build-storybook-cdn.js — Combined Storybook build + CDN asset copy
 * 1. Runs: storybook build → storybook-static/
 * 2. Copies root-level *.css files to storybook-static/  (preserves CDN URLs)
 * 3. Copies fonts/, images/, teams/ directories to storybook-static/
 * 4. Copies *.html static pages to storybook-static/
 * 5. Copies walkthrough.js, ds-loader.js to storybook-static/
 * 6. Copies root-level *.json (non-package) to storybook-static/
 */
import { execSync } from 'child_process'
import { cpSync, readdirSync } from 'fs'
import { join, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const ROOT = resolve(__dirname, '..')
const DIST = join(ROOT, 'storybook-static')

// 1. Build Storybook
console.log('Building Storybook...')
execSync('npx storybook build', { stdio: 'inherit', cwd: ROOT })

// 2. Copy root-level *.css files
console.log('Copying CSS files...')
const cssFiles = readdirSync(ROOT).filter(f => f.endsWith('.css'))
for (const file of cssFiles) {
  cpSync(join(ROOT, file), join(DIST, file))
  console.log(`  Copied ${file}`)
}

// 3. Copy fonts/, images/, teams/ directories
const DIRS = ['fonts', 'images', 'teams']
for (const dir of DIRS) {
  const src = join(ROOT, dir)
  const dest = join(DIST, dir)
  try {
    console.log(`Copying ${dir}/...`)
    cpSync(src, dest, { recursive: true })
  } catch (e) {
    console.warn(`  Skipped ${dir}/ (not found or error: ${e.message})`)
  }
}

// 4. Copy root-level *.html static pages
console.log('Copying static HTML files...')
const htmlFiles = readdirSync(ROOT).filter(f => f.endsWith('.html'))
for (const file of htmlFiles) {
  cpSync(join(ROOT, file), join(DIST, file))
  console.log(`  Copied ${file}`)
}

// 5. Copy JS helpers
const JS_FILES = ['walkthrough.js', 'ds-loader.js']
for (const file of JS_FILES) {
  try {
    cpSync(join(ROOT, file), join(DIST, file))
    console.log(`Copied ${file}`)
  } catch (e) {
    // skip if not present
  }
}

// 6. Copy root-level *.json (skip package files)
const jsonFiles = readdirSync(ROOT).filter(
  f => f.endsWith('.json') && f !== 'package.json' && f !== 'package-lock.json' && f !== 'tsconfig.json'
)
for (const file of jsonFiles) {
  try {
    cpSync(join(ROOT, file), join(DIST, file))
  } catch (e) {
    // skip
  }
}

console.log('\nBuild complete! Output: storybook-static/')
console.log('Verify: ls storybook-static/')
