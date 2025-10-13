/**
 * United States Sitemap
 * Contains all US-specific pages: homepage, states, cities, blog posts
 */

import { NextResponse } from 'next/server'
import { usStates } from '@/data/states'
import { cities } from '@/data/cities'
import { blogPostsEN } from '@/data/blog-posts'

export async function GET() {
  const baseUrl = 'https://loansai.com'
  const now = new Date().toISOString()
  const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
  const twoWeeksAgo = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString()

  let urls = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- US Homepage (English) -->
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- US Homepage (Spanish) -->
  <url>
    <loc>${baseUrl}/es</loc>
    <lastmod>${now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- US Apply Pages -->
  <url>
    <loc>${baseUrl}/apply</loc>
    <lastmod>${oneWeekAgo}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/es/apply</loc>
    <lastmod>${oneWeekAgo}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- US States Index -->
  <url>
    <loc>${baseUrl}/states</loc>
    <lastmod>${oneWeekAgo}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/es/states</loc>
    <lastmod>${oneWeekAgo}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- US Cities Index -->
  <url>
    <loc>${baseUrl}/cities</loc>
    <lastmod>${oneWeekAgo}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- US Blog -->
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${oneWeekAgo}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- US Content Pages -->
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${baseUrl}/faq</loc>
    <lastmod>${twoWeeksAgo}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/privacy</loc>
    <lastmod>${now}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${baseUrl}/terms</loc>
    <lastmod>${now}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${baseUrl}/disclosures</loc>
    <lastmod>${now}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
`

  // Add all 50 US states (English)
  usStates.forEach(state => {
    urls += `  <url>
    <loc>${baseUrl}/states/${state.slug}</loc>
    <lastmod>${oneWeekAgo}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`
  })

  // Add all 50 US states (Spanish)
  usStates.forEach(state => {
    urls += `  <url>
    <loc>${baseUrl}/es/states/${state.slug}</loc>
    <lastmod>${oneWeekAgo}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
`
  })

  // Add all US cities
  cities.forEach(city => {
    const stateSlug = city.state.toLowerCase().replace(/\s+/g, '-')
    urls += `  <url>
    <loc>${baseUrl}/cities/${stateSlug}/${city.slug}</loc>
    <lastmod>${twoWeeksAgo}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`
  })

  // Add all blog posts
  blogPostsEN.forEach(post => {
    urls += `  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${new Date(post.date).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
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
