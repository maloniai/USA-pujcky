import { czRegions } from '@/data/cz-regions'

export async function GET() {
  const baseUrl = 'https://loan-platform.com'
  
  const now = new Date()
  const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
  const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000)

  const urls = [
    // Czech Republic hub pages
    {
      url: `${baseUrl}/cz`,
      lastmod: now.toISOString(),
      changefreq: 'daily',
      priority: '1.0',
    },
    {
      url: `${baseUrl}/cz/regions`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'weekly',
      priority: '0.8',
    },
    {
      url: `${baseUrl}/cz/cities`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'weekly',
      priority: '0.8',
    },

    // Czech Republic regions (14 regions)
    ...czRegions.map((region) => ({
      url: `${baseUrl}/cz/regions/${region.code}`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'weekly',
      priority: '0.7',
    })),

    // Czech Republic cities (featured cities across all regions)
    ...czRegions.flatMap((region) =>
      region.featuredCities.map((city) => ({
        url: `${baseUrl}/cz/cities/${region.code}/${city.toLowerCase().replace(/\s+/g, '-')}`,
        lastmod: twoWeeksAgo.toISOString(),
        changefreq: 'weekly',
        priority: '0.6',
      }))
    ),
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
