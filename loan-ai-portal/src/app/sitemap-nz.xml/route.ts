/**
 * New Zealand Sitemap
 * Generated: October 2025
 * Contains: Homepage, Apply, 16 Regions, 77 Cities, Indexes
 * Total URLs: ~95
 */

import { NextResponse } from 'next/server'
import { nzRegions, getAllNZCities } from '@/data/nz-regions'

export async function GET() {
  const baseUrl = 'https://loan-platform.com'
  const now = new Date().toISOString()

  // Core pages
  const coreUrls = [
    { loc: `${baseUrl}/nz`, priority: '1.0', changefreq: 'weekly' },
    { loc: `${baseUrl}/nz/apply`, priority: '0.9', changefreq: 'weekly' },
    { loc: `${baseUrl}/nz/regions`, priority: '0.8', changefreq: 'weekly' },
    { loc: `${baseUrl}/nz/cities`, priority: '0.8', changefreq: 'weekly' },
  ]

  // Region pages (16)
  const regionUrls = nzRegions.map(region => ({
    loc: `${baseUrl}/nz/regions/${region.slug}`,
    priority: '0.7',
    changefreq: 'weekly',
  }))

  // City pages (77)
  const allCities = getAllNZCities()
  const cityUrls = allCities.map(city => ({
    loc: `${baseUrl}/nz/cities/${city.regionSlug}/${city.citySlug}`,
    priority: '0.6',
    changefreq: 'weekly',
  }))

  // Combine all URLs
  const allUrls = [...coreUrls, ...regionUrls, ...cityUrls]

  // Generate XML
  const urlsXml = allUrls
    .map(
      ({ loc, priority, changefreq }) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join('\n')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
