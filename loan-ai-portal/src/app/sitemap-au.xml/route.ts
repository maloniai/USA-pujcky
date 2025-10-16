import { australiaStates, getAllAUCities } from '@/data/au-regions'

export async function GET() {
  const baseUrl = 'https://loan-platform.com'
  
  const now = new Date()
  const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
  const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000)
  const threeMonthsAgo = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000)

  const urls = [
    // Australia hub pages (English)
    {
      url: `${baseUrl}/au`,
      lastmod: now.toISOString(),
      changefreq: 'daily',
      priority: '1.0',
    },
    {
      url: `${baseUrl}/au/apply`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'weekly',
      priority: '0.9',
    },
    {
      url: `${baseUrl}/au/states`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'weekly',
      priority: '0.8',
    },
    {
      url: `${baseUrl}/au/cities`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'weekly',
      priority: '0.8',
    },
    {
      url: `${baseUrl}/au/about`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'monthly',
      priority: '0.7',
    },
    {
      url: `${baseUrl}/au/responsible-lending`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'monthly',
      priority: '0.7',
    },
    {
      url: `${baseUrl}/au/privacy`,
      lastmod: threeMonthsAgo.toISOString(),
      changefreq: 'yearly',
      priority: '0.5',
    },
    {
      url: `${baseUrl}/au/terms`,
      lastmod: threeMonthsAgo.toISOString(),
      changefreq: 'yearly',
      priority: '0.5',
    },
    {
      url: `${baseUrl}/au/disclosures`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'monthly',
      priority: '0.7',
    },
    {
      url: `${baseUrl}/au/blog`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'weekly',
      priority: '0.7',
    },

    // Australia states (8 states/territories)
    ...australiaStates.map((state) => ({
      url: `${baseUrl}/au/states/${state.slug}`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'weekly',
      priority: '0.7',
    })),

    // Australia cities (165 cities across all states/territories)
    ...getAllAUCities().map((city) => ({
      url: `${baseUrl}/au/cities/${city.stateSlug}/${city.slug}`,
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
