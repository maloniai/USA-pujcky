/**
 * Colombia Sitemap - PLACEHOLDER
 * Contains only global pages until Colombia hub is built
 */

import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://loansai.com'
  const now = new Date().toISOString()

  const urls = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Apply Page (available globally) -->
  <url>
    <loc>${baseUrl}/apply</loc>
    <lastmod>${now}</lastmod>
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
