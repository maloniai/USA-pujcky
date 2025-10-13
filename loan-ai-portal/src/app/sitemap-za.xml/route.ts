/**
 * South Africa Sitemap
 * Contains all South Africa-specific pages: homepage, regions, cities
 */

import { NextResponse } from 'next/server'
import { southAfricaRegions, allZACities } from '@/data/za-data'

export async function GET() {
  const baseUrl = 'https://loansai.com'
  const now = new Date().toISOString()
  const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
  const twoWeeksAgo = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString()

  let urls = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- South Africa Homepage -->
  <url>
    <loc>${baseUrl}/za</loc>
    <lastmod>${now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- South Africa Apply Page -->
  <url>
    <loc>${baseUrl}/za/apply</loc>
    <lastmod>${oneWeekAgo}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- South Africa Regions Index -->
  <url>
    <loc>${baseUrl}/za/regions</loc>
    <lastmod>${oneWeekAgo}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- South Africa Cities Index -->
  <url>
    <loc>${baseUrl}/za/cities</loc>
    <lastmod>${oneWeekAgo}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`

  // Add all South Africa regions (9 provinces)
  southAfricaRegions.forEach(region => {
    urls += `  <url>
    <loc>${baseUrl}/za/regions/${region.slug}</loc>
    <lastmod>${oneWeekAgo}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`
  })

  // Add all South Africa cities (50+ cities)
  allZACities.forEach(city => {
    urls += `  <url>
    <loc>${baseUrl}/za/cities/${city.slug}</loc>
    <lastmod>${twoWeeksAgo}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
`
  })

  urls += `</urlset>`

  return new NextResponse(urls, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
