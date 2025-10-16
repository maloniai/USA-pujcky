import { colombiaRegions } from '@/data/colombia-regions'
import { colombiaCities } from '@/data/colombia-cities'
import { getAllColombiaDepartmentSlugs } from '@/data/colombia-departments'
import { getAllColombiaCitiesTier1 } from '@/data/colombia-cities-tier1'

export async function GET() {
  const baseUrl = 'https://loan-platform.com'
  
  const now = new Date()
  const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
  const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000)
  const threeMonthsAgo = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000)

  const urls = [
    // Colombia hub pages (Spanish)
    {
      url: `${baseUrl}/co`,
      lastmod: now.toISOString(),
      changefreq: 'daily',
      priority: '1.0',
    },
    {
      url: `${baseUrl}/co/apply`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'weekly',
      priority: '0.9',
    },
    {
      url: `${baseUrl}/co/sobre-nosotros`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'monthly',
      priority: '0.7',
    },
    {
      url: `${baseUrl}/co/educacion-financiera`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'monthly',
      priority: '0.8',
    },
    {
      url: `${baseUrl}/co/ciudades-principales`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'weekly',
      priority: '0.8',
    },
    {
      url: `${baseUrl}/co/departamentos`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'weekly',
      priority: '0.8',
    },
    {
      url: `${baseUrl}/co/privacidad`,
      lastmod: threeMonthsAgo.toISOString(),
      changefreq: 'yearly',
      priority: '0.5',
    },
    {
      url: `${baseUrl}/co/terminos`,
      lastmod: threeMonthsAgo.toISOString(),
      changefreq: 'yearly',
      priority: '0.5',
    },
    {
      url: `${baseUrl}/co/divulgaciones`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'monthly',
      priority: '0.7',
    },

    // Colombia regions (5 regions)
    ...colombiaRegions.map((region) => ({
      url: `${baseUrl}/co/${region.slug}`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'weekly',
      priority: '0.7',
    })),

    // Colombia departments (32 departments)
    ...getAllColombiaDepartmentSlugs().map((slug) => ({
      url: `${baseUrl}/co/departamento/${slug}`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'weekly',
      priority: '0.75',
    })),

    // Colombia cities (original 9)
    ...colombiaCities.map((city) => ({
      url: `${baseUrl}/co/${city.regionSlug}/${city.slug}`,
      lastmod: twoWeeksAgo.toISOString(),
      changefreq: 'weekly',
      priority: '0.6',
    })),

    // Colombia Tier 1 cities (30 cities)
    ...getAllColombiaCitiesTier1().map((city) => ({
      url: `${baseUrl}/co/${city.regionSlug}/${city.slug}`,
      lastmod: oneWeekAgo.toISOString(),
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
