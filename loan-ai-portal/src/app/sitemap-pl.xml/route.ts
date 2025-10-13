/**
 * Poland Sitemap
 * Contains all Poland-specific pages
 */

import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://loansai.com'
  const now = new Date().toISOString()
  const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()

  const urls = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Poland Homepage -->
  <url>
    <loc>${baseUrl}/pl</loc>
    <lastmod>${now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Poland Apply Page -->
  <url>
    <loc>${baseUrl}/pl/apply</loc>
    <lastmod>${oneWeekAgo}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Poland Regions Index -->
  <url>
    <loc>${baseUrl}/pl/regions</loc>
    <lastmod>${oneWeekAgo}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Poland Cities Index -->
  <url>
    <loc>${baseUrl}/pl/cities</loc>
    <lastmod>${oneWeekAgo}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`

  return new NextResponse(urls, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
