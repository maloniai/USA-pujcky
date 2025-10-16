import { blogPostsEN } from '@/data/blog-posts'
import { usStates } from '@/data/states'
import { cities } from '@/data/cities'

export async function GET() {
  const baseUrl = 'https://loan-platform.com'
  
  const now = new Date()
  const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
  const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000)
  const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
  const threeMonthsAgo = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000)

  const urls = [
    // Homepage - Highest priority (English)
    {
      url: baseUrl,
      lastmod: now.toISOString(),
      changefreq: 'daily',
      priority: '1.0',
    },
    // Spanish homepage
    {
      url: `${baseUrl}/es`,
      lastmod: now.toISOString(),
      changefreq: 'daily',
      priority: '1.0',
    },
    
    // Primary conversion pages
    {
      url: `${baseUrl}/apply`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'weekly',
      priority: '0.9',
    },
    {
      url: `${baseUrl}/es/apply`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'weekly',
      priority: '0.9',
    },
    
    // Important content pages (English)
    {
      url: `${baseUrl}/about`,
      lastmod: oneMonthAgo.toISOString(),
      changefreq: 'monthly',
      priority: '0.8',
    },
    {
      url: `${baseUrl}/ai-loan-matching`,
      lastmod: oneMonthAgo.toISOString(),
      changefreq: 'monthly',
      priority: '0.8',
    },
    {
      url: `${baseUrl}/faq`,
      lastmod: twoWeeksAgo.toISOString(),
      changefreq: 'weekly',
      priority: '0.8',
    },
    {
      url: `${baseUrl}/licenses`,
      lastmod: threeMonthsAgo.toISOString(),
      changefreq: 'yearly',
      priority: '0.5',
    },
    {
      url: `${baseUrl}/states`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'weekly',
      priority: '0.8',
    },
    {
      url: `${baseUrl}/blog`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'weekly',
      priority: '0.8',
    },
    {
      url: `${baseUrl}/contact`,
      lastmod: threeMonthsAgo.toISOString(),
      changefreq: 'monthly',
      priority: '0.6',
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastmod: threeMonthsAgo.toISOString(),
      changefreq: 'yearly',
      priority: '0.5',
    },
    
    // Spanish content pages
    {
      url: `${baseUrl}/es/states`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'weekly',
      priority: '0.8',
    },
    
    // Legal pages (English)
    {
      url: `${baseUrl}/privacy`,
      lastmod: threeMonthsAgo.toISOString(),
      changefreq: 'yearly',
      priority: '0.5',
    },
    {
      url: `${baseUrl}/terms`,
      lastmod: threeMonthsAgo.toISOString(),
      changefreq: 'yearly',
      priority: '0.5',
    },
    {
      url: `${baseUrl}/disclosures`,
      lastmod: threeMonthsAgo.toISOString(),
      changefreq: 'yearly',
      priority: '0.5',
    },
    {
      url: `${baseUrl}/disclosures/borrower-outcomes`,
      lastmod: threeMonthsAgo.toISOString(),
      changefreq: 'yearly',
      priority: '0.4',
    },
    
    // Cities index pages
    {
      url: `${baseUrl}/cities`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'weekly',
      priority: '0.8',
    },

    // All state pages (English)
    ...usStates.map((state) => ({
      url: `${baseUrl}/states/${state.slug}`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'weekly',
      priority: '0.7',
    })),

    // Spanish localized state detail pages
    ...usStates.map((state) => ({
      url: `${baseUrl}/es/states/${state.slug}`,
      lastmod: oneWeekAgo.toISOString(),
      changefreq: 'weekly',
      priority: '0.6',
    })),
    
    // All city pages (English)
    ...cities.map((city) => ({
      url: `${baseUrl}/cities/${city.state.toLowerCase().replace(/\s+/g, '-')}/${city.slug}`,
      lastmod: twoWeeksAgo.toISOString(),
      changefreq: 'weekly',
      priority: '0.7',
    })),

    // All blog posts
    ...blogPostsEN.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastmod: new Date(post.date).toISOString(),
      changefreq: 'monthly',
      priority: '0.7',
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
