import { MetadataRoute } from 'next'
import { blogPostsEN } from '@/data/blog-posts'
import { usStates } from '@/data/states'
import { cities } from '@/data/cities'
import { czRegions } from '@/data/cz-regions'
import { jihoceskyCityContent } from '@/data/cz-jihocesky'
import { stredoceskyCityContent } from '@/data/cz-stredocesky'
import { plzenskyCityContent } from '@/data/cz-plzensky'
import { pragueCityContent } from '@/data/cz-prague'
import { karlovarskyCityContent } from '@/data/cz-karlovarsky'
import { usteckyCityContent } from '@/data/cz-ustecky'
import { libereckyCityContent } from '@/data/cz-liberecky'
import { kralovehradeckyCityContent } from '@/data/cz-kralovehradecky'
import { pardubickyCityContent } from '@/data/cz-pardubicky'
import { vysocinaCityContent } from '@/data/cz-vysocina'
import { jihomoravskyCityContent } from '@/data/cz-jihomoravsky'
import { olomouckyCityContent } from '@/data/cz-olomoucky'
import { zlinskyCityContent } from '@/data/cz-zlinsky'
import { moravskoslezyskyCityContent } from '@/data/cz-moravskoslezsky'

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

  // Generate CZ region URLs
  const publishedCzRegions = [
    'praha', 'stredocesky', 'jihocesky', 'plzensky',
    'karlovarsky', 'ustecky', 'liberecky', 'kralovehradecky',
    'pardubicky', 'vysocina', 'jihomoravsky', 'olomoucky',
    'zlinsky', 'moravskoslezsky'
  ]
  const czRegionUrls = czRegions
    .filter(region => publishedCzRegions.includes(region.code))
    .map((region) => ({
      url: `${baseUrl}/cz/regions/${region.code}`,
      lastModified: oneWeekAgo,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))

  // Generate CZ city URLs
  const czCityUrls = [
    ...pragueCityContent.map(city => ({
      url: `${baseUrl}/cz/regions/praha/${city.slug}`,
      lastModified: twoWeeksAgo,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    ...jihoceskyCityContent.map(city => ({
      url: `${baseUrl}/cz/regions/jihocesky/${city.slug}`,
      lastModified: twoWeeksAgo,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    ...stredoceskyCityContent.map(city => ({
      url: `${baseUrl}/cz/regions/stredocesky/${city.slug}`,
      lastModified: twoWeeksAgo,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    ...plzenskyCityContent.map(city => ({
      url: `${baseUrl}/cz/regions/plzensky/${city.slug}`,
      lastModified: twoWeeksAgo,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    ...karlovarskyCityContent.map(city => ({
      url: `${baseUrl}/cz/regions/karlovarsky/${city.slug}`,
      lastModified: twoWeeksAgo,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    ...usteckyCityContent.map(city => ({
      url: `${baseUrl}/cz/regions/ustecky/${city.slug}`,
      lastModified: twoWeeksAgo,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    ...libereckyCityContent.map(city => ({
      url: `${baseUrl}/cz/regions/liberecky/${city.slug}`,
      lastModified: twoWeeksAgo,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    ...kralovehradeckyCityContent.map(city => ({
      url: `${baseUrl}/cz/regions/kralovehradecky/${city.slug}`,
      lastModified: twoWeeksAgo,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    ...pardubickyCityContent.map(city => ({
      url: `${baseUrl}/cz/regions/pardubicky/${city.slug}`,
      lastModified: twoWeeksAgo,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    ...vysocinaCityContent.map(city => ({
      url: `${baseUrl}/cz/regions/vysocina/${city.slug}`,
      lastModified: twoWeeksAgo,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    ...jihomoravskyCityContent.map(city => ({
      url: `${baseUrl}/cz/regions/jihomoravsky/${city.slug}`,
      lastModified: twoWeeksAgo,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    ...olomouckyCityContent.map(city => ({
      url: `${baseUrl}/cz/regions/olomoucky/${city.slug}`,
      lastModified: twoWeeksAgo,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    ...zlinskyCityContent.map(city => ({
      url: `${baseUrl}/cz/regions/zlinsky/${city.slug}`,
      lastModified: twoWeeksAgo,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    ...moravskoslezyskyCityContent.map(city => ({
      url: `${baseUrl}/cz/regions/moravskoslezsky/${city.slug}`,
      lastModified: twoWeeksAgo,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ]
  
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
    // Czech homepage
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
      url: `${baseUrl}/cz/zadost`,
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

  // Czech region pages
  ...czRegionUrls,

  // Czech city pages  
  ...czCityUrls,
    
  // All city pages (English)
  ...cityUrls,
    
    // All blog posts
    ...blogPostsENUrls,
  ]
}