import { southAfricaRegions, allZACities } from '@/data/za-data'

export async function GET() {
  const baseUrl = 'https://loan-platform.com'
  
  const now = new Date()
  const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
  const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000)

  const urls = [
    // South Africa hub pages
    {
      url: `${baseUrl}/za`,
      lastmod: now.toISOString(),
      changefreq: 'daily',
      priority: '1.0',
    },
    {
      url: `${baseUrl}/za/apply`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'weekly',
      priority: '0.9',
    },
    {
      url: `${baseUrl}/za/regions`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'weekly',
      priority: '0.8',
    },
    {
      url: `${baseUrl}/za/cities`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'weekly',
      priority: '0.8',
    },

    // South Africa regions (9 provinces)
    ...southAfricaRegions.map((region) => ({
      url: `${baseUrl}/za/regions/${region.slug}`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'weekly',
      priority: '0.7',
    })),

    // South Africa cities (50+ cities)
    ...allZACities.map((city) => ({
      url: `${baseUrl}/za/cities/${city.slug}`,
      lastmod: twoWeeksAgo.toISOString(),
      changefreq: 'weekly',
      priority: '0.6',
    })),
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(({ url, lastmod, changefreq, priority }) => `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
