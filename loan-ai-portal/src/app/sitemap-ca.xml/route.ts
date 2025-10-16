import { caProvinces } from '@/data/ca-provinces'
import { getAllCanadianCitiesTier1 } from '@/data/ca-cities-tier1'
import { getAllCACities } from '@/data/ca-regions'

export async function GET() {
  const baseUrl = 'https://loan-platform.com'
  
  const now = new Date()
  const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
  const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000)

  const urls = [
    // Canada hub pages (English)
    {
      url: `${baseUrl}/ca`,
      lastmod: now.toISOString(),
      changefreq: 'daily',
      priority: '1.0',
    },
    {
      url: `${baseUrl}/ca/regions`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'weekly',
      priority: '0.8',
    },
    {
      url: `${baseUrl}/ca/cities`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'weekly',
      priority: '0.8',
    },
    {
      url: `${baseUrl}/ca/apply`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'weekly',
      priority: '0.9',
    },

    // Canada hub pages (French)
    {
      url: `${baseUrl}/fr/canada`,
      lastmod: now.toISOString(),
      changefreq: 'daily',
      priority: '0.9',
    },
    {
      url: `${baseUrl}/fr/canada/cities`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'weekly',
      priority: '0.7',
    },

    // Canadian provinces (English)
    ...caProvinces.map((province) => ({
      url: `${baseUrl}/ca/regions/${province.slug}`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'weekly',
      priority: '0.7',
    })),

    // Canadian provinces (French)
    ...caProvinces.map((province) => ({
      url: `${baseUrl}/fr/canada/${province.slug}`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'weekly',
      priority: '0.6',
    })),

    // Canadian cities - Tier 1 (51 cities) - English
    ...getAllCanadianCitiesTier1().map((city) => ({
      url: `${baseUrl}/ca/cities/${city.province}/${city.slug}`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'weekly',
      priority: '0.7',
    })),

    // Canadian cities - Tier 1 (51 cities) - French
    ...getAllCanadianCitiesTier1().map((city) => ({
      url: `${baseUrl}/fr/canada/${city.province}/${city.slug}`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'weekly',
      priority: '0.7',
    })),

    // Canadian cities - Legacy (22 cities) - English
    ...getAllCACities().map((city) => ({
      url: `${baseUrl}/ca/cities/${city.regionSlug}/${city.citySlug}`,
      lastmod: twoWeeksAgo.toISOString(),
      changefreq: 'weekly',
      priority: '0.6',
    })),

    // Canadian cities - Legacy (22 cities) - French
    ...getAllCACities().map((city) => ({
      url: `${baseUrl}/fr/canada/${city.regionSlug}/${city.citySlug}`,
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
