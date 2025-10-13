import { MetadataRoute } from 'next'
import { blogPostsEN } from '@/data/blog-posts'
import { usStates } from '@/data/states'
import { cities } from '@/data/cities'
import { czRegions } from '@/data/cz-regions'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://loan-platform.com'
  
  // Timestamp helpers for realistic lastModified dates
  const now = new Date()
  const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
  const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000)
  const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
  const threeMonthsAgo = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000)
  
  // Generate blog post URLs
  const blogPostsENUrls = blogPostsEN.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  
  // Generate ALL 50 state URLs from state data
  const stateUrls = usStates.map((state) => ({
    url: `${baseUrl}/states/${state.slug}`,
    lastModified: oneWeekAgo, // State pages update weekly with loan data
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Spanish localized state URLs (detail pages translated progressively)
  const stateUrlsEs = usStates.map((state) => ({
    url: `${baseUrl}/es/states/${state.slug}`,
    lastModified: oneWeekAgo,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))
  
  // Generate all 400 city URLs from city data (dynamically generated)
  const cityUrls = cities.map((city) => ({
    url: `${baseUrl}/cities/${city.state.toLowerCase().replace(/\s+/g, '-')}/${city.slug}`,
    lastModified: twoWeeksAgo, // City pages updated less frequently
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))
  
  // Generate Czech region URLs (all 14 regions)
  const czRegionUrls = czRegions.map((region) => ({
    url: `${baseUrl}/cz/regions/${region.code}`,
    lastModified: oneWeekAgo,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))
  
  return [
    // Homepage - Highest priority (English)
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1,
    },
    // Spanish homepage
    {
      url: `${baseUrl}/es`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1,
    },
    
    // Czech hub - High priority for Czech loan market
    {
      url: `${baseUrl}/cz`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1,
    },
    
    // Primary conversion pages
    {
      url: `${baseUrl}/apply`,
      lastModified: oneWeekAgo,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/es/apply`,
      lastModified: oneWeekAgo,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cz/apply`,
      lastModified: oneWeekAgo,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    
    // Important content pages (English)
    {
      url: `${baseUrl}/about`,
      lastModified: oneMonthAgo,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ai-loan-matching`,
      lastModified: oneMonthAgo,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: twoWeeksAgo,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/licenses`,
      lastModified: threeMonthsAgo,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/states`,
      lastModified: oneWeekAgo,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: oneWeekAgo,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: threeMonthsAgo,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: threeMonthsAgo,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    
    // Spanish content pages
    {
      url: `${baseUrl}/es/states`,
      lastModified: oneWeekAgo,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    
    // Legal pages (English)
    {
      url: `${baseUrl}/privacy`,
      lastModified: threeMonthsAgo,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: threeMonthsAgo,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/disclosures`,
      lastModified: threeMonthsAgo,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/disclosures/borrower-outcomes`,
      lastModified: threeMonthsAgo,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    
    // Cities index pages
    {
      url: `${baseUrl}/cities`,
      lastModified: oneWeekAgo,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    
    // API endpoints for AI crawlers
    {
      url: `${baseUrl}/api/manifest.json`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/api/services.json`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    
  // All state pages (English)
  ...stateUrls,

  // Spanish localized state detail pages
  ...stateUrlsEs,
    
  // All city pages (English)
  ...cityUrls,
    
    // All blog posts
    ...blogPostsENUrls,
    
    // All Czech region pages (14 regions)
    ...czRegionUrls,
  ]
}