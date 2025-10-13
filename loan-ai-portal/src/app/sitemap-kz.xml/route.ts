/**
 * Kazakhstan Sitemap
 * Contains all Kazakhstan-specific pages: homepage, regions, cities
 */

import { NextResponse } from 'next/server'
import { kazakhstanRegions, kazakhstanCities } from '@/data/kz-regions'

export async function GET() {
  const baseUrl = 'https://loansai.com'
  const now = new Date().toISOString()
  const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
  const twoWeeksAgo = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString()

  let urls = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Kazakhstan Homepage -->
  <url>
    <loc>${baseUrl}/kz</loc>
    <lastmod>${now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Kazakhstan Apply Page -->
  <url>
    <loc>${baseUrl}/kz/apply</loc>
    <lastmod>${oneWeekAgo}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Kazakhstan Regions Index -->
  <url>
    <loc>${baseUrl}/kz/regions</loc>
    <lastmod>${oneWeekAgo}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Kazakhstan Cities Index -->
  <url>
    <loc>${baseUrl}/kz/cities</loc>
    <lastmod>${oneWeekAgo}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Kazakhstan Legal Pages -->
  <url>
    <loc>${baseUrl}/kz/privacy</loc>
    <lastmod>${now}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${baseUrl}/kz/terms</loc>
    <lastmod>${now}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${baseUrl}/kz/disclaimer</loc>
    <lastmod>${now}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
`

  // Add all Kazakhstan regions (17 regions)
  kazakhstanRegions.forEach(region => {
    urls += `  <url>
    <loc>${baseUrl}/kz/regions/${region.slug}</loc>
    <lastmod>${oneWeekAgo}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`
  })

  // Add all Kazakhstan cities (180+ cities)
  kazakhstanCities.forEach(city => {
    urls += `  <url>
    <loc>${baseUrl}/kz/cities/${city.region}/${city.slug}</loc>
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
