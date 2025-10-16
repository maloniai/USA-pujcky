import { MetadataRoute } from 'next'
import { blogPostsEN } from '@/data/blog-posts'
import { usStates } from '@/data/states'
import { cities } from '@/data/cities'
import { czRegions } from '@/data/cz-regions'
import { caProvinces } from '@/data/ca-provinces'
import { getAllCanadianCitiesTier1 } from '@/data/ca-cities-tier1'
import { getAllCACities } from '@/data/ca-regions'
import { kazakhstanRegions, kazakhstanCities } from '@/data/kz-regions'
import { southAfricaRegions, allZACities } from '@/data/za-data'
import { australiaStates, getAllAUCities } from '@/data/au-regions'
import { colombiaRegions } from '@/data/colombia-regions'
import { colombiaCities } from '@/data/colombia-cities'
import { getAllColombiaDepartmentSlugs } from '@/data/colombia-departments'
import { getAllColombiaCitiesTier1 } from '@/data/colombia-cities-tier1'

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
  
  // Generate all 400+ city URLs from city data (dynamically generated)
  const cityUrls = cities.map((city) => ({
    url: `${baseUrl}/cities/${city.state.toLowerCase().replace(/\s+/g, '-')}/${city.slug}`,
    lastModified: twoWeeksAgo, // City pages updated less frequently
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Czech Republic regions (14 regions)
  const czRegionUrls = czRegions.map((region) => ({
    url: `${baseUrl}/cz/regions/${region.code}`,
    lastModified: oneWeekAgo,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Czech Republic cities (600+ cities across all regions)
  const czCityUrls = czRegions.flatMap((region) =>
    region.featuredCities.map((city) => ({
      url: `${baseUrl}/cz/cities/${region.code}/${city.toLowerCase().replace(/\s+/g, '-')}`,
      lastModified: twoWeeksAgo,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))
  )

  // Canadian provinces (10 provinces + 3 territories) - ENGLISH
  const caProvinceUrls = caProvinces.map((province) => ({
    url: `${baseUrl}/ca/regions/${province.slug}`,
    lastModified: oneWeekAgo,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Canadian provinces (French)
  const caProvinceUrlsFr = caProvinces.map((province) => ({
    url: `${baseUrl}/fr/canada/${province.slug}`,
    lastModified: oneWeekAgo,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Canadian cities - Tier 1 (51 cities) - ENGLISH
  const caTier1CityUrlsEN = getAllCanadianCitiesTier1().map((city) => ({
    url: `${baseUrl}/ca/cities/${city.province}/${city.slug}`,
    lastModified: oneWeekAgo, // Recently added Tier 1 content
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Canadian cities - Tier 1 (51 cities) - FRENCH
  const caTier1CityUrlsFR = getAllCanadianCitiesTier1().map((city) => ({
    url: `${baseUrl}/fr/canada/${city.province}/${city.slug}`,
    lastModified: oneWeekAgo, // Recently added French content
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Canadian cities - Legacy (22 cities from ca-regions) - ENGLISH
  const caLegacyCityUrlsEN = getAllCACities().map((city) => ({
    url: `${baseUrl}/ca/cities/${city.regionSlug}/${city.citySlug}`,
    lastModified: twoWeeksAgo,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Canadian cities - Legacy (22 cities from ca-regions) - FRENCH
  const caLegacyCityUrlsFR = getAllCACities().map((city) => ({
    url: `${baseUrl}/fr/canada/${city.regionSlug}/${city.citySlug}`,
    lastModified: twoWeeksAgo,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Kazakhstan regions (17 regions)
  const kzRegionUrls = kazakhstanRegions.map((region) => ({
    url: `${baseUrl}/kz/regions/${region.slug}`,
    lastModified: oneWeekAgo,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Kazakhstan cities (180+ cities across all regions)
  const kzCityUrls = kazakhstanCities.map((city) => ({
    url: `${baseUrl}/kz/cities/${city.region}/${city.slug}`,
    lastModified: twoWeeksAgo,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // South Africa regions (9 provinces)
  const zaRegionUrls = southAfricaRegions.map((region) => ({
    url: `${baseUrl}/za/regions/${region.slug}`,
    lastModified: oneWeekAgo,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // South Africa cities (50+ cities across all provinces)
  const zaCityUrls = allZACities.map((city) => ({
    url: `${baseUrl}/za/cities/${city.slug}`,
    lastModified: twoWeeksAgo,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Australia states (8 states/territories)
  const auStateUrls = australiaStates.map((state) => ({
    url: `${baseUrl}/au/states/${state.slug}`,
    lastModified: oneWeekAgo,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Australia cities (165 cities across all states/territories)
  const auCityUrls = getAllAUCities().map((city) => ({
    url: `${baseUrl}/au/cities/${city.stateSlug}/${city.slug}`,
    lastModified: twoWeeksAgo,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Colombia regions (5 regions)
  const coRegionUrls = colombiaRegions.map((region) => ({
    url: `${baseUrl}/co/${region.slug}`,
    lastModified: oneWeekAgo,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Colombia cities (9 major cities across all regions)
  const coCityUrls = colombiaCities.map((city) => ({
    url: `${baseUrl}/co/${city.regionSlug}/${city.slug}`,
    lastModified: twoWeeksAgo,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Colombia Tier 1 cities (30 major cities - Phase 2B)
  const coTier1CityUrls = getAllColombiaCitiesTier1().map((city) => ({
    url: `${baseUrl}/co/${city.regionSlug}/${city.slug}`,
    lastModified: oneWeekAgo, // Recently added, more fresh
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Colombia departments (32 departments across 5 regions)
  const coDepartmentSlugs = getAllColombiaDepartmentSlugs()
  const coDepartmentUrls = coDepartmentSlugs.map((slug) => ({
    url: `${baseUrl}/co/departamento/${slug}`,
    lastModified: oneWeekAgo,
    changeFrequency: 'weekly' as const,
    priority: 0.75, // Higher than cities, lower than regions
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

    // Czech Republic hub pages
    {
      url: `${baseUrl}/cz`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/cz/regions`,
      lastModified: oneWeekAgo,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cz/cities`,
      lastModified: oneWeekAgo,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // Canada hub pages (English)
    {
      url: `${baseUrl}/ca`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/ca/regions`,
      lastModified: oneWeekAgo,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ca/cities`,
      lastModified: oneWeekAgo,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // Canada hub pages (French)
    {
      url: `${baseUrl}/fr/canada`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fr/canada/cities`,
      lastModified: oneWeekAgo,
      changeFrequency: 'weekly',
      priority: 0.7,
    },

    // Kazakhstan hub pages (Kazakh)
    {
      url: `${baseUrl}/kz`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/kz/apply`,
      lastModified: oneWeekAgo,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kz/privacy`,
      lastModified: threeMonthsAgo,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/kz/terms`,
      lastModified: threeMonthsAgo,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/kz/disclaimer`,
      lastModified: threeMonthsAgo,
      changeFrequency: 'yearly',
      priority: 0.5,
    },

    // South Africa hub pages (English)
    {
      url: `${baseUrl}/za`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/za/apply`,
      lastModified: oneWeekAgo,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/za/regions`,
      lastModified: oneWeekAgo,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/za/cities`,
      lastModified: oneWeekAgo,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // Australia hub pages (English)
    {
      url: `${baseUrl}/au`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/au/apply`,
      lastModified: oneWeekAgo,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/au/states`,
      lastModified: oneWeekAgo,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/au/cities`,
      lastModified: oneWeekAgo,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/au/about`,
      lastModified: oneWeekAgo,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/au/responsible-lending`,
      lastModified: oneWeekAgo,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/au/privacy`,
      lastModified: threeMonthsAgo,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/au/terms`,
      lastModified: threeMonthsAgo,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/au/disclosures`,
      lastModified: oneWeekAgo,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/au/blog`,
      lastModified: oneWeekAgo,
      changeFrequency: 'weekly',
      priority: 0.7,
    },

    // Colombia hub pages (Spanish)
    {
      url: `${baseUrl}/co`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/co/apply`,
      lastModified: oneWeekAgo,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/co/sobre-nosotros`,
      lastModified: oneWeekAgo,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/co/educacion-financiera`,
      lastModified: oneWeekAgo,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/co/ciudades-principales`,
      lastModified: oneWeekAgo,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/co/departamentos`,
      lastModified: oneWeekAgo,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/co/privacidad`,
      lastModified: threeMonthsAgo,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/co/terminos`,
      lastModified: threeMonthsAgo,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/co/divulgaciones`,
      lastModified: oneWeekAgo,
      changeFrequency: 'monthly',
      priority: 0.7,
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

  // Czech Republic regions
  ...czRegionUrls,

  // Czech Republic cities
  ...czCityUrls,

  // Canadian provinces (English)
  ...caProvinceUrls,

  // Canadian provinces (French)
  ...caProvinceUrlsFr,

  // Canadian cities - Tier 1 (51 cities) - English
  ...caTier1CityUrlsEN,

  // Canadian cities - Tier 1 (51 cities) - French
  ...caTier1CityUrlsFR,

  // Canadian cities - Legacy (22 cities) - English
  ...caLegacyCityUrlsEN,

  // Canadian cities - Legacy (22 cities) - French
  ...caLegacyCityUrlsFR,

  // Kazakhstan regions
  ...kzRegionUrls,

  // Kazakhstan cities
  ...kzCityUrls,

  // South Africa regions
  ...zaRegionUrls,

  // South Africa cities
  ...zaCityUrls,

  // Australia states
  ...auStateUrls,

  // Australia cities
  ...auCityUrls,

  // Colombia regions
  ...coRegionUrls,

  // Colombia departments
  ...coDepartmentUrls,

  // Colombia cities (original 9)
  ...coCityUrls,

  // Colombia Tier 1 cities (30 new cities - Phase 2B)
  ...coTier1CityUrls,
    
    // All blog posts
    ...blogPostsENUrls,
  ]
}