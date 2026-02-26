#!/usr/bin/env node
/**
 * build-site.js — Combined site build script
 * 1. Runs: vite build --config vite.site.config.ts
 * 2. Copies root-level *.css files to site-dist/
 * 3. Copies fonts/, images/, teams/ directories to site-dist/
 * 4. Copies *.html static pages to site-dist/ (for HTML-injection fetches at runtime)
 */
import { execSync } from 'child_process'
import { cpSync, readdirSync, renameSync, existsSync } from 'fs'
import { join, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const ROOT = resolve(__dirname, '..')
const DIST = join(ROOT, 'site-dist')

// 1. Build the React SPA
console.log('Building site with Vite...')
execSync('npx vite build --config vite.site.config.ts', { stdio: 'inherit', cwd: ROOT })

// 1b. Rename app.html → index.html (Vite preserves source filename, need index.html for SPA)
const appHtml = join(DIST, 'app.html')
const indexHtml = join(DIST, 'index.html')
if (existsSync(appHtml) && !existsSync(indexHtml)) {
  renameSync(appHtml, indexHtml)
  console.log('Renamed app.html → index.html')
}

// 2. Copy root-level *.css files
console.log('Copying CSS files...')
const cssFiles = readdirSync(ROOT).filter(f => f.endsWith('.css'))
for (const file of cssFiles) {
  cpSync(join(ROOT, file), join(DIST, file))
}

// 3. Copy fonts/, images/, teams/, old-html/ directories
const DIRS = ['fonts', 'images', 'teams', 'old-html']
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

// 4. Copy root-level *.html files (needed for HTML injection at runtime)
// Exclude index.html (would overwrite the React app shell) and app.html (Vite entry template)
console.log('Copying static HTML files...')
const htmlFiles = readdirSync(ROOT).filter(f => f.endsWith('.html') && f !== 'index.html' && f !== 'app.html')
for (const file of htmlFiles) {
  cpSync(join(ROOT, file), join(DIST, file))
}

// 5. Copy other root-level static assets: *.js, *.json, ds-loader.js, walkthrough.js
const JS_FILES = ['walkthrough.js', 'ds-loader.js']
for (const file of JS_FILES) {
  try {
    cpSync(join(ROOT, file), join(DIST, file))
    console.log(`Copied ${file}`)
  } catch (e) {
    // skip if not present
  }
}

// Copy teams/*.json files are already in teams/ directory, but also copy root-level JSON
const jsonFiles = readdirSync(ROOT).filter(f => f.endsWith('.json') && f !== 'package.json' && f !== 'package-lock.json' && f !== 'tsconfig.json')
for (const file of jsonFiles) {
  try {
    cpSync(join(ROOT, file), join(DIST, file))
  } catch (e) {
    // skip
  }
}

console.log('\nBuild complete! Output: site-dist/')
console.log('Verify: ls site-dist/')
