/**
 * New Zealand Regions and Cities Data
 * Complete coverage of all 16 regions with major cities
 * Optimized for SEO and AI search discoverability
 */

export interface NZCity {
  name: string
  nameLocal?: string // Māori name if different
  slug: string
  region: string
  population: number
  description: string
  latitude?: number
  longitude?: number
}

export interface NZRegion {
  name: string
  nameLocal?: string
  slug: string
  cities: NZCity[]
  population: number
  description: string
  capital: string
  mapDescription: string
}

export const newZealandRegions: NZRegion[] = [
  {
    name: 'Auckland',
    nameLocal: 'Tāmaki Makaurau',
    slug: 'auckland',
    capital: 'Auckland',
    population: 1700000,
    description: 'New Zealand\'s largest city and economic hub. Home to diverse financial services and FMA-licensed lenders.',
    mapDescription: 'Located in the North Island, New Zealand\'s most populous urban area.',
    cities: [
      {
        name: 'Auckland City',
        nameLocal: 'Tāmaki Makaurau',
        slug: 'auckland-city',
        region: 'auckland',
        population: 1500000,
        description: 'New Zealand\'s largest city and financial capital. Extensive range of lenders from major banks to fintech companies.',
        latitude: -36.8485,
        longitude: 174.7633
      },
      {
        name: 'North Shore',
        slug: 'north-shore',
        region: 'auckland',
        population: 250000,
        description: 'Affluent northern suburbs with strong banking presence and competitive loan rates.',
        latitude: -36.7500,
        longitude: 174.7500
      }
    ]
  },
  {
    name: 'Wellington',
    nameLocal: 'Te Whanganui-a-Tara',
    slug: 'wellington',
    capital: 'Wellington',
    population: 540000,
    description: 'New Zealand\'s capital city and political center. Strong financial services sector with competitive lending markets.',
    mapDescription: 'Located at the southern tip of the North Island.',
    cities: [
      {
        name: 'Wellington City',
        nameLocal: 'Te Whanganui-a-Tara',
        slug: 'wellington-city',
        region: 'wellington',
        population: 215000,
        description: 'Capital city with vibrant fintech scene and diverse lending options from banks to online lenders.',
        latitude: -41.2865,
        longitude: 174.7762
      },
      {
        name: 'Lower Hutt',
        slug: 'lower-hutt',
        region: 'wellington',
        population: 110000,
        description: 'Major city in Wellington region with established lending services and credit unions.',
        latitude: -41.2093,
        longitude: 174.9069
      },
      {
        name: 'Porirua',
        slug: 'porirua',
        region: 'wellington',
        population: 60000,
        description: 'Growing city with accessible credit services from major and regional lenders.',
        latitude: -41.1339,
        longitude: 174.8405
      }
    ]
  },
  {
    name: 'Canterbury',
    nameLocal: 'Waitaha',
    slug: 'canterbury',
    capital: 'Christchurch',
    population: 650000,
    description: 'South Island\'s largest region. Christchurch is the largest city with comprehensive financial services.',
    mapDescription: 'Located on the east coast of the South Island.',
    cities: [
      {
        name: 'Christchurch',
        nameLocal: 'Ōtautahi',
        slug: 'christchurch',
        region: 'canterbury',
        population: 380000,
        description: 'South Island\'s largest city with competitive lending market and FMA-regulated lenders.',
        latitude: -43.5321,
        longitude: 172.6362
      },
      {
        name: 'Timaru',
        slug: 'timaru',
        region: 'canterbury',
        population: 29000,
        description: 'Port city with established banking infrastructure and competitive personal loan rates.',
        latitude: -44.3967,
        longitude: 171.2547
      }
    ]
  },
  {
    name: 'Waikato',
    slug: 'waikato',
    capital: 'Hamilton',
    population: 510000,
    description: 'North Island region known for agriculture and education. Hamilton offers diverse financial services.',
    mapDescription: 'Located in the central North Island.',
    cities: [
      {
        name: 'Hamilton',
        nameLocal: 'Kirikiriroa',
        slug: 'hamilton',
        region: 'waikato',
        population: 180000,
        description: 'Fourth-largest city with strong banking presence and diverse loan products.',
        latitude: -37.7870,
        longitude: 175.2793
      },
      {
        name: 'Taupo',
        slug: 'taupo',
        region: 'waikato',
        population: 26000,
        description: 'Tourist destination with accessible financial services and lending options.',
        latitude: -38.6857,
        longitude: 176.0702
      }
    ]
  },
  {
    name: 'Bay of Plenty',
    slug: 'bay-of-plenty',
    capital: 'Tauranga',
    population: 340000,
    description: 'Fast-growing region with strong horticultural economy. Tauranga is a major financial center.',
    mapDescription: 'Located on the northern coast of the North Island.',
    cities: [
      {
        name: 'Tauranga',
        slug: 'tauranga',
        region: 'bay-of-plenty',
        population: 155000,
        description: 'Fifth-largest city with growing financial services sector and competitive rates.',
        latitude: -37.6878,
        longitude: 176.1651
      },
      {
        name: 'Rotorua',
        slug: 'rotorua',
        region: 'bay-of-plenty',
        population: 58000,
        description: 'Tourist hub with established banking and accessible credit services.',
        latitude: -38.1368,
        longitude: 176.2497
      }
    ]
  },
  {
    name: 'Otago',
    slug: 'otago',
    capital: 'Dunedin',
    population: 240000,
    description: 'South Island region known for education and tourism. Dunedin offers comprehensive lending services.',
    mapDescription: 'Located in the south-eastern South Island.',
    cities: [
      {
        name: 'Dunedin',
        nameLocal: 'Ōtepoti',
        slug: 'dunedin',
        region: 'otago',
        population: 130000,
        description: 'University city with diverse financial products for students and residents.',
        latitude: -45.8788,
        longitude: 170.5028
      },
      {
        name: 'Queenstown',
        slug: 'queenstown',
        region: 'otago',
        population: 16000,
        description: 'Tourist destination with accessible banking and financial services.',
        latitude: -45.0312,
        longitude: 168.6626
      }
    ]
  },
  {
    name: 'Manawatū-Whanganui',
    slug: 'manawatu-whanganui',
    capital: 'Palmerston North',
    population: 255000,
    description: 'Central North Island region with agricultural focus. Palmerston North is the main urban center.',
    mapDescription: 'Located in the lower North Island.',
    cities: [
      {
        name: 'Palmerston North',
        nameLocal: 'Te Papaioea',
        slug: 'palmerston-north',
        region: 'manawatu-whanganui',
        population: 90000,
        description: 'Regional center with established banking services and competitive loan products.',
        latitude: -40.3523,
        longitude: 175.6112
      }
    ]
  },
  {
    name: 'Hawke\'s Bay',
    slug: 'hawkes-bay',
    capital: 'Napier',
    population: 180000,
    description: 'East coast North Island region known for wine and agriculture. Strong financial services sector.',
    mapDescription: 'Located on the eastern coast of the North Island.',
    cities: [
      {
        name: 'Napier',
        slug: 'napier',
        region: 'hawkes-bay',
        population: 66000,
        description: 'Art Deco city with full range of banking services and competitive loan options.',
        latitude: -39.4928,
        longitude: 176.9120
      },
      {
        name: 'Hastings',
        slug: 'hastings',
        region: 'hawkes-bay',
        population: 50000,
        description: 'Agricultural hub with accessible banking and credit services.',
        latitude: -39.6381,
        longitude: 176.8419
      }
    ]
  },
  {
    name: 'Northland',
    slug: 'northland',
    capital: 'Whangārei',
    population: 200000,
    description: 'Northernmost region of New Zealand. Whangārei offers comprehensive financial services.',
    mapDescription: 'Located at the northern tip of the North Island.',
    cities: [
      {
        name: 'Whangārei',
        slug: 'whangarei',
        region: 'northland',
        population: 55000,
        description: 'Regional center with established lending services and diverse loan products.',
        latitude: -35.7250,
        longitude: 174.3240
      }
    ]
  },
  {
    name: 'Taranaki',
    slug: 'taranaki',
    capital: 'New Plymouth',
    population: 125000,
    description: 'West coast North Island region with energy sector focus. New Plymouth is the main city.',
    mapDescription: 'Located on the western coast of the North Island.',
    cities: [
      {
        name: 'New Plymouth',
        slug: 'new-plymouth',
        region: 'taranaki',
        population: 60000,
        description: 'Regional center with strong banking infrastructure and competitive rates.',
        latitude: -39.0556,
        longitude: 174.0752
      }
    ]
  },
  {
    name: 'Southland',
    slug: 'southland',
    capital: 'Invercargill',
    population: 105000,
    description: 'Southernmost region of New Zealand. Invercargill offers accessible financial services.',
    mapDescription: 'Located at the southern tip of the South Island.',
    cities: [
      {
        name: 'Invercargill',
        nameLocal: 'Waihōpai',
        slug: 'invercargill',
        region: 'southland',
        population: 51000,
        description: 'Southernmost city with established banking and credit services.',
        latitude: -46.4132,
        longitude: 168.3538
      }
    ]
  },
  {
    name: 'Nelson',
    slug: 'nelson',
    capital: 'Nelson',
    population: 55000,
    description: 'Top of the South Island region known for sunshine and arts. Strong financial services sector.',
    mapDescription: 'Located at the northern tip of the South Island.',
    cities: [
      {
        name: 'Nelson',
        nameLocal: 'Whakatū',
        slug: 'nelson-city',
        region: 'nelson',
        population: 52000,
        description: 'Coastal city with accessible banking and competitive lending options.',
        latitude: -41.2706,
        longitude: 173.2840
      }
    ]
  },
  {
    name: 'Gisborne',
    slug: 'gisborne',
    capital: 'Gisborne',
    population: 51000,
    description: 'Easternmost region of New Zealand. Gisborne offers comprehensive banking services.',
    mapDescription: 'Located on the eastern coast of the North Island.',
    cities: [
      {
        name: 'Gisborne',
        nameLocal: 'Tūranga-nui-a-Kiwa',
        slug: 'gisborne-city',
        region: 'gisborne',
        population: 38000,
        description: 'Regional center with established lending services and credit facilities.',
        latitude: -38.6627,
        longitude: 178.0176
      }
    ]
  },
  {
    name: 'Tasman',
    slug: 'tasman',
    capital: 'Richmond',
    population: 58000,
    description: 'Growing region at the top of the South Island. Accessible financial services.',
    mapDescription: 'Located adjacent to Nelson in the northern South Island.',
    cities: [
      {
        name: 'Richmond',
        slug: 'richmond',
        region: 'tasman',
        population: 18000,
        description: 'Growing town with accessible banking and credit services.',
        latitude: -41.3400,
        longitude: 173.1850
      }
    ]
  },
  {
    name: 'Marlborough',
    slug: 'marlborough',
    capital: 'Blenheim',
    population: 51000,
    description: 'Wine region at the top of the South Island. Blenheim is the main urban center.',
    mapDescription: 'Located in the northern South Island.',
    cities: [
      {
        name: 'Blenheim',
        slug: 'blenheim',
        region: 'marlborough',
        population: 32000,
        description: 'Regional center with established banking and lending services.',
        latitude: -41.5131,
        longitude: 173.9545
      }
    ]
  },
  {
    name: 'West Coast',
    slug: 'west-coast',
    capital: 'Greymouth',
    population: 33000,
    description: 'Sparsely populated region on the western coast of the South Island. Accessible financial services.',
    mapDescription: 'Located on the western coast of the South Island.',
    cities: [
      {
        name: 'Greymouth',
        slug: 'greymouth',
        region: 'west-coast',
        population: 10000,
        description: 'Main town with accessible banking and credit services.',
        latitude: -42.4500,
        longitude: 171.2100
      }
    ]
  }
]

// Flatten all cities for easy lookup
export const allNZCities: NZCity[] = newZealandRegions.flatMap(region => region.cities)

// Helper functions
export function getNZRegionBySlug(slug: string): NZRegion | undefined {
  return newZealandRegions.find(r => r.slug === slug)
}

export function getNZCityBySlug(slug: string): NZCity | undefined {
  return allNZCities.find(c => c.slug === slug)
}

export function getNZCitiesByRegion(regionSlug: string): NZCity[] {
  const region = getNZRegionBySlug(regionSlug)
  return region ? region.cities : []
}

export function getNearbyCities(citySlug: string, limit: number = 5): NZCity[] {
  const city = getNZCityBySlug(citySlug)
  if (!city) return []
  
  const sameRegionCities = getNZCitiesByRegion(city.region)
    .filter(c => c.slug !== citySlug)
    .slice(0, limit)
  
  return sameRegionCities
}

// Get top cities by population for homepage
export function getTopNZCities(limit: number = 10): NZCity[] {
  return [...allNZCities]
    .sort((a, b) => b.population - a.population)
    .slice(0, limit)
}

// SEO-friendly region names
export const regionDisplayNames: Record<string, string> = {
  'auckland': 'Auckland',
  'wellington': 'Wellington',
  'canterbury': 'Canterbury',
  'waikato': 'Waikato',
  'bay-of-plenty': 'Bay of Plenty',
  'otago': 'Otago',
  'manawatu-whanganui': 'Manawatū-Whanganui',
  'hawkes-bay': 'Hawke\'s Bay',
  'northland': 'Northland',
  'taranaki': 'Taranaki',
  'southland': 'Southland',
  'nelson': 'Nelson',
  'gisborne': 'Gisborne',
  'tasman': 'Tasman',
  'marlborough': 'Marlborough',
  'west-coast': 'West Coast'
}
