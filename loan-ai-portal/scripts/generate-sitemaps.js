/**
 * Generate Static Sitemaps for Next.js Static Export
 * This script fetches sitemaps from the dev server and saves them as static files
 * 
 * Usage: 
 * 1. Start dev server: npm run dev
 * 2. Run this script: node scripts/generate-sitemaps.js
 */

const fs = require('fs');
const path = require('path');
const http = require('http');

const BASE_URL = 'http://localhost:3001';
// Allow output directory to be customized via environment variable
const OUTPUT_DIR_NAME = process.env.SITEMAP_OUTPUT_DIR || 'public';
const OUTPUT_DIR = path.join(__dirname, '..', OUTPUT_DIR_NAME);

// List of all sitemaps to generate
const SITEMAPS = [
  'sitemap-index.xml',
  'sitemap-us.xml',
  'sitemap-ca.xml',
  'sitemap-cz.xml',
  'sitemap-ro.xml',
  'sitemap-co.xml',
  'sitemap-mx.xml',
  'sitemap-kz.xml',
  'sitemap-vn.xml',
  'sitemap-pl.xml',
  'sitemap-es.xml',
  'sitemap-za.xml',
  'sitemap-au.xml',
  'sitemap-nz.xml',
  'sitemap-ph.xml',
  'sitemap-global.xml',
];

console.log('🗺️  Generating static sitemaps...\n');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Function to fetch and save a sitemap
function fetchAndSaveSitemap(sitemapName) {
  return new Promise((resolve, reject) => {
    const url = `${BASE_URL}/${sitemapName}`;
    const outputPath = path.join(OUTPUT_DIR, sitemapName);

    console.log(`📥 Fetching ${sitemapName}...`);

    http.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to fetch ${sitemapName}: HTTP ${res.statusCode}`));
        return;
      }

      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        fs.writeFileSync(outputPath, data, 'utf8');
        const urlCount = (data.match(/<loc>/g) || []).length;
        console.log(`✅ Saved ${sitemapName} (${urlCount} URLs)`);
        resolve();
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Generate all sitemaps sequentially
async function generateAllSitemaps() {
  console.log(`📍 Fetching from: ${BASE_URL}`);
  console.log(`💾 Saving to: ${OUTPUT_DIR}\n`);

  for (const sitemap of SITEMAPS) {
    try {
      await fetchAndSaveSitemap(sitemap);
      await new Promise(resolve => setTimeout(resolve, 500)); // Wait 500ms between requests
    } catch (error) {
      console.error(`❌ Error generating ${sitemap}:`, error.message);
      console.error('   Make sure dev server is running: npm run dev');
      process.exit(1);
    }
  }

  console.log('\n✨ All sitemaps generated successfully!');
  console.log(`📂 Output directory: ${OUTPUT_DIR}`);
  console.log(`📊 Generated ${SITEMAPS.length} sitemap files`);
}

// Run the script
generateAllSitemaps().catch(error => {
  console.error('❌ Fatal error:', error.message);
  process.exit(1);
});
