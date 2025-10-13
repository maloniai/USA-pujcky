/**
 * Philippines Regions and Cities Data
 * Complete coverage of all 17 regions with major cities
 * Optimized for SEO and AI search discoverability
 */

export interface PHCity {
  name: string
  nameLocal?: string // Filipino/Tagalog translation if different
  slug: string
  region: string
  population: number
  description: string
  latitude?: number
  longitude?: number
}

export interface PHRegion {
  name: string
  nameLocal?: string
  slug: string
  cities: PHCity[]
  population: number
  description: string
  capital: string
  mapDescription: string
}

export const philippinesRegions: PHRegion[] = [
  {
    name: 'National Capital Region (Metro Manila)',
    nameLocal: 'Kalakhang Maynila',
    slug: 'ncr',
    capital: 'Manila',
    population: 13500000,
    description: 'The Philippines\' economic and financial hub. Home to major banks, lending institutions, and fintech companies.',
    mapDescription: 'Located in the southern part of Luzon, NCR is the center of commerce and government.',
    cities: [
      {
        name: 'Manila',
        nameLocal: 'Maynila',
        slug: 'manila',
        region: 'ncr',
        population: 1780000,
        description: 'Capital city and financial center with the highest concentration of banks and lending institutions.',
        latitude: 14.5995,
        longitude: 120.9842
      },
      {
        name: 'Quezon City',
        slug: 'quezon-city',
        region: 'ncr',
        population: 2960000,
        description: 'Most populous city in the Philippines with numerous financial services and business districts.',
        latitude: 14.6760,
        longitude: 121.0437
      },
      {
        name: 'Makati',
        slug: 'makati',
        region: 'ncr',
        population: 580000,
        description: 'Premier financial and business district, home to major banks and corporate headquarters.',
        latitude: 14.5547,
        longitude: 121.0244
      },
      {
        name: 'Pasig',
        slug: 'pasig',
        region: 'ncr',
        population: 755000,
        description: 'Major commercial and financial center with modern infrastructure and business parks.',
        latitude: 14.5764,
        longitude: 121.0851
      },
      {
        name: 'Taguig',
        slug: 'taguig',
        region: 'ncr',
        population: 940000,
        description: 'Home to Bonifacio Global City, a major financial and lifestyle district.',
        latitude: 14.5176,
        longitude: 121.0509
      }
    ]
  },
  {
    name: 'Calabarzon',
    slug: 'calabarzon',
    capital: 'Calamba',
    population: 16200000,
    description: 'Most populous region in the Philippines, rapidly growing with strong industrial and commercial sectors.',
    mapDescription: 'Located south of Metro Manila, comprising Cavite, Laguna, Batangas, Rizal, and Quezon provinces.',
    cities: [
      {
        name: 'Antipolo',
        slug: 'antipolo',
        region: 'calabarzon',
        population: 890000,
        description: 'Fast-growing city near Metro Manila with expanding financial services access.',
        latitude: 14.5864,
        longitude: 121.1756
      },
      {
        name: 'Calamba',
        slug: 'calamba',
        region: 'calabarzon',
        population: 540000,
        description: 'Industrial city with growing lending and financial services infrastructure.',
        latitude: 14.2119,
        longitude: 121.1654
      }
    ]
  },
  {
    name: 'Central Visayas',
    slug: 'central-visayas',
    capital: 'Cebu City',
    population: 8100000,
    description: 'Major economic region in Visayas, led by Cebu\'s financial and commercial sectors.',
    mapDescription: 'Located in the central Philippines, comprising Cebu, Bohol, Negros Oriental, and Siquijor.',
    cities: [
      {
        name: 'Cebu City',
        nameLocal: 'Dakbayan sa Sugbo',
        slug: 'cebu-city',
        region: 'central-visayas',
        population: 980000,
        description: 'Second-largest financial center in the Philippines with strong banking presence.',
        latitude: 10.3157,
        longitude: 123.8854
      },
      {
        name: 'Mandaue',
        slug: 'mandaue',
        region: 'central-visayas',
        population: 365000,
        description: 'Industrial and commercial hub adjacent to Cebu City.',
        latitude: 10.3237,
        longitude: 123.9223
      }
    ]
  },
  {
    name: 'Davao Region',
    slug: 'davao',
    capital: 'Davao City',
    population: 5500000,
    description: 'Major economic center in Mindanao with growing financial services sector.',
    mapDescription: 'Located in southeastern Mindanao, a major agribusiness and commercial hub.',
    cities: [
      {
        name: 'Davao City',
        slug: 'davao-city',
        region: 'davao',
        population: 1780000,
        description: 'Third-largest city in the Philippines, major commercial and financial center in Mindanao.',
        latitude: 7.1907,
        longitude: 125.4553
      }
    ]
  }
]

// Helper function to get top cities across all regions
export function getTopPHCities(count: number = 10): PHCity[] {
  const allCities = philippinesRegions.flatMap(region => region.cities)
  return allCities
    .sort((a, b) => b.population - a.population)
    .slice(0, count)
}

// Helper function to get a region by slug
export function getPHRegionBySlug(slug: string): PHRegion | undefined {
  return philippinesRegions.find(region => region.slug === slug)
}

// Helper function to get a city by slug
export function getPHCityBySlug(citySlug: string): PHCity | undefined {
  for (const region of philippinesRegions) {
    const city = region.cities.find(c => c.slug === citySlug)
    if (city) return city
  }
  return undefined
}
