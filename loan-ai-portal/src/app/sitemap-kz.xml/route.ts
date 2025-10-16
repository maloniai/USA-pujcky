import { kazakhstanRegions, kazakhstanCities } from '@/data/kz-regions'

export async function GET() {
  const baseUrl = 'https://loan-platform.com'
  
  const now = new Date()
  const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
  const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000)
  const threeMonthsAgo = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000)

  const urls = [
    // Kazakhstan hub pages
    {
      url: `${baseUrl}/kz`,
      lastmod: now.toISOString(),
      changefreq: 'daily',
      priority: '1.0',
    },
    {
      url: `${baseUrl}/kz/apply`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'weekly',
      priority: '0.9',
    },
    {
      url: `${baseUrl}/kz/privacy`,
      lastmod: threeMonthsAgo.toISOString(),
      changefreq: 'yearly',
      priority: '0.5',
    },
    {
      url: `${baseUrl}/kz/terms`,
      lastmod: threeMonthsAgo.toISOString(),
      changefreq: 'yearly',
      priority: '0.5',
    },
    {
      url: `${baseUrl}/kz/disclaimer`,
      lastmod: threeMonthsAgo.toISOString(),
      changefreq: 'yearly',
      priority: '0.5',
    },

    // Kazakhstan regions (17 regions)
    ...kazakhstanRegions.map((region) => ({
      url: `${baseUrl}/kz/regions/${region.slug}`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'weekly',
      priority: '0.7',
    })),

    // Kazakhstan cities (180+ cities)
    ...kazakhstanCities.map((city) => ({
      url: `${baseUrl}/kz/cities/${city.region}/${city.slug}`,
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
