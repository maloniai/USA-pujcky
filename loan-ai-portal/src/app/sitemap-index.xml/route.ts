export async function GET() {
  const baseUrl = 'https://loan-platform.com'
  const now = new Date().toISOString()

  const sitemaps = [
    {
      loc: `${baseUrl}/sitemap-us.xml`,
      lastmod: now,
    },
    {
      loc: `${baseUrl}/sitemap-au.xml`,
      lastmod: now,
    },
    {
      loc: `${baseUrl}/sitemap-ca.xml`,
      lastmod: now,
    },
    {
      loc: `${baseUrl}/sitemap-co.xml`,
      lastmod: now,
    },
    {
      loc: `${baseUrl}/sitemap-cz.xml`,
      lastmod: now,
    },
    {
      loc: `${baseUrl}/sitemap-kz.xml`,
      lastmod: now,
    },
    {
      loc: `${baseUrl}/sitemap-za.xml`,
      lastmod: now,
    },
  ]

  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map(({ loc, lastmod }) => `  <sitemap>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`

  return new Response(sitemapIndex, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
