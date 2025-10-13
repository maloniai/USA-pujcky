/**
 * Czech Republic Sitemap
 * Contains all Czech Republic-specific pages: homepage, regions, cities
 */

import { NextResponse } from 'next/server'
import { czRegions } from '@/data/cz-regions'

export async function GET() {
  const baseUrl = 'https://loansai.com'
  const now = new Date().toISOString()
  const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
  const twoWeeksAgo = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString()

  let urls = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Czech Republic Homepage -->
  <url>
    <loc>${baseUrl}/cz</loc>
    <lastmod>${now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Czech Republic Apply Page -->
  <url>
    <loc>${baseUrl}/cz/apply</loc>
    <lastmod>${oneWeekAgo}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Czech Republic Regions Index -->
  <url>
    <loc>${baseUrl}/cz/regions</loc>
    <lastmod>${oneWeekAgo}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Czech Republic Cities Index -->
  <url>
    <loc>${baseUrl}/cz/cities</loc>
    <lastmod>${oneWeekAgo}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`

  // Add all Czech regions (14 regions)
  czRegions.forEach(region => {
    urls += `  <url>
    <loc>${baseUrl}/cz/regions/${region.code}</loc>
    <lastmod>${oneWeekAgo}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`
  })

  // Add all Czech cities (600+ cities across all regions)
  czRegions.forEach(region => {
    region.featuredCities.forEach(city => {
      const citySlug = city.toLowerCase().replace(/\s+/g, '-')
      urls += `  <url>
    <loc>${baseUrl}/cz/cities/${region.code}/${citySlug}</loc>
    <lastmod>${twoWeeksAgo}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
`
    })
  })

  urls += `</urlset>`

  return new NextResponse(urls, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
