/**
 * New Zealand Regions and Cities Data
 * Complete coverage of all 16 regions with major cities
 * Optimized for SEO and AI search discoverability
 */

export interface NZCity {
  name: string
  nameLocal?: string // Māori translation if different
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
    capital: 'Auckland City',
    population: 1700000,
    description: 'New Zealand\'s largest city and economic hub. Home to major banks and lending institutions with extensive financial services.',
    mapDescription: 'Located in the North Island, Auckland is the country\'s most populous urban area and business center.',
    cities: [
      {
        name: 'Auckland City',
        nameLocal: 'Tāmaki Makaurau',
        slug: 'auckland-city',
        region: 'auckland',
        population: 1700000,
        description: 'New Zealand\'s largest city and main financial center. Major hub for banking and lending services.',
        latitude: -36.8485,
        longitude: 174.7633
      },
      {
        name: 'Manukau',
        slug: 'manukau',
        region: 'auckland',
        population: 400000,
        description: 'Southern Auckland area with diverse population and growing financial services.',
        latitude: -37.0000,
        longitude: 174.8833
      },
      {
        name: 'North Shore',
        slug: 'north-shore',
        region: 'auckland',
        population: 230000,
        description: 'Affluent area north of Auckland Harbor with strong banking presence.',
        latitude: -36.7833,
        longitude: 174.7500
      }
    ]
  },
  {
    name: 'Wellington',
    nameLocal: 'Te Whanganui-a-Tara',
    slug: 'wellington',
    capital: 'Wellington',
    population: 550000,
    description: 'Capital city and second-largest urban area. Major center for government services and financial institutions.',
    mapDescription: 'Located at the southern tip of the North Island, Wellington is the nation\'s capital and cultural hub.',
    cities: [
      {
        name: 'Wellington City',
        nameLocal: 'Te Whanganui-a-Tara',
        slug: 'wellington-city',
        region: 'wellington',
        population: 215000,
        description: 'New Zealand\'s capital city. Home to major banks and regulated lenders.',
        latitude: -41.2865,
        longitude: 174.7762
      },
      {
        name: 'Lower Hutt',
        slug: 'lower-hutt',
        region: 'wellington',
        population: 110000,
        description: 'Major city in Greater Wellington with accessible financial services.',
        latitude: -41.2167,
        longitude: 174.9167
      },
      {
        name: 'Porirua',
        slug: 'porirua',
        region: 'wellington',
        population: 60000,
        description: 'Growing city with diverse community and expanding lending options.',
        latitude: -41.1333,
        longitude: 174.8400
      }
    ]
  },
  {
    name: 'Canterbury',
    nameLocal: 'Waitaha',
    slug: 'canterbury',
    capital: 'Christchurch',
    population: 650000,
    description: 'South Island\'s largest region. Christchurch is the main commercial center with comprehensive financial services.',
    mapDescription: 'Located on the east coast of the South Island, centered around Christchurch.',
    cities: [
      {
        name: 'Christchurch',
        nameLocal: 'Ōtautahi',
        slug: 'christchurch',
        region: 'canterbury',
        population: 390000,
        description: 'Largest South Island city. Major financial hub with extensive banking and lending services.',
        latitude: -43.5321,
        longitude: 172.6362
      },
      {
        name: 'Timaru',
        slug: 'timaru',
        region: 'canterbury',
        population: 30000,
        description: 'Port city with established banking presence and local lenders.',
        latitude: -44.3904,
        longitude: 171.2373
      },
      {
        name: 'Ashburton',
        slug: 'ashburton',
        region: 'canterbury',
        population: 20000,
        description: 'Rural service town with accessible credit facilities for residents and businesses.',
        latitude: -43.8980,
        longitude: 171.7500
      }
    ]
  },
  {
    name: 'Waikato',
    slug: 'waikato',
    capital: 'Hamilton',
    population: 510000,
    description: 'North Island region centered on Hamilton. Strong agricultural economy with comprehensive financial services.',
    mapDescription: 'Located south of Auckland in the North Island, known for farming and Hamilton city.',
    cities: [
      {
        name: 'Hamilton',
        nameLocal: 'Kirikiriroa',
        slug: 'hamilton',
        region: 'waikato',
        population: 180000,
        description: 'New Zealand\'s fourth-largest city. Growing financial center with major banks and lenders.',
        latitude: -37.7870,
        longitude: 175.2793
      },
      {
        name: 'Tauranga',
        slug: 'tauranga',
        region: 'waikato',
        population: 160000,
        description: 'Bay of Plenty city with strong economy and accessible lending services.',
        latitude: -37.6878,
        longitude: 176.1651
      },
      {
        name: 'Rotorua',
        slug: 'rotorua',
        region: 'waikato',
        population: 58000,
        description: 'Tourist destination with established banking and microfinance services.',
        latitude: -38.1368,
        longitude: 176.2497
      }
    ]
  },
  {
    name: 'Bay of Plenty',
    slug: 'bay-of-plenty',
    capital: 'Tauranga',
    population: 340000,
    description: 'Coastal region with fast-growing economy. Strong horticulture sector with diverse lending options.',
    mapDescription: 'Located on the northeast coast of the North Island.',
    cities: [
      {
        name: 'Tauranga',
        nameLocal: 'Tauranga Moana',
        slug: 'tauranga-bop',
        region: 'bay-of-plenty',
        population: 160000,
        description: 'Fastest-growing city in New Zealand with comprehensive financial services.',
        latitude: -37.6878,
        longitude: 176.1651
      },
      {
        name: 'Rotorua',
        slug: 'rotorua-bop',
        region: 'bay-of-plenty',
        population: 58000,
        description: 'Geothermal tourism hub with established credit facilities.',
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
    description: 'Southern South Island region with historic Dunedin city. University town with strong banking presence.',
    mapDescription: 'Located in the southeast of the South Island, includes Dunedin and Queenstown.',
    cities: [
      {
        name: 'Dunedin',
        nameLocal: 'Ōtepoti',
        slug: 'dunedin',
        region: 'otago',
        population: 135000,
        description: 'Historic university city with comprehensive financial services and student-friendly lending.',
        latitude: -45.8788,
        longitude: 170.5028
      },
      {
        name: 'Queenstown',
        slug: 'queenstown',
        region: 'otago',
        population: 16000,
        description: 'Resort town with high-value tourism economy and premium financial services.',
        latitude: -45.0312,
        longitude: 168.6626
      }
    ]
  },
  {
    name: 'Hawke\'s Bay',
    slug: 'hawkes-bay',
    capital: 'Napier',
    population: 180000,
    description: 'East coast North Island region. Wine and horticulture economy with accessible credit services.',
    mapDescription: 'Located on the eastern coast of the North Island.',
    cities: [
      {
        name: 'Napier',
        slug: 'napier',
        region: 'hawkes-bay',
        population: 67000,
        description: 'Art Deco city with established banking and lending institutions.',
        latitude: -39.4902,
        longitude: 176.9120
      },
      {
        name: 'Hastings',
        slug: 'hastings',
        region: 'hawkes-bay',
        population: 52000,
        description: 'Growing city with diverse economy and comprehensive financial services.',
        latitude: -39.6381,
        longitude: 176.8420
      }
    ]
  },
  {
    name: 'Manawatū-Whanganui',
    slug: 'manawatu-whanganui',
    capital: 'Palmerston North',
    population: 255000,
    description: 'Central North Island region with agricultural and education sectors. Accessible banking services.',
    mapDescription: 'Located in the lower central North Island.',
    cities: [
      {
        name: 'Palmerston North',
        slug: 'palmerston-north',
        region: 'manawatu-whanganui',
        population: 90000,
        description: 'University city with strong student and agricultural lending services.',
        latitude: -40.3523,
        longitude: 175.6112
      },
      {
        name: 'Whanganui',
        slug: 'whanganui',
        region: 'manawatu-whanganui',
        population: 45000,
        description: 'River city with established banking presence and local credit facilities.',
        latitude: -39.9333,
        longitude: 175.0500
      }
    ]
  },
  {
    name: 'Northland',
    nameLocal: 'Te Tai Tokerau',
    slug: 'northland',
    capital: 'Whangārei',
    population: 200000,
    description: 'Northernmost region of New Zealand. Growing economy with accessible financial services.',
    mapDescription: 'Located at the northern tip of the North Island.',
    cities: [
      {
        name: 'Whangārei',
        slug: 'whangarei',
        region: 'northland',
        population: 56000,
        description: 'Northland\'s main city with comprehensive banking and lending services.',
        latitude: -35.7275,
        longitude: 174.3166
      }
    ]
  },
  {
    name: 'Taranaki',
    slug: 'taranaki',
    capital: 'New Plymouth',
    population: 125000,
    description: 'West coast North Island region. Energy sector economy with strong banking infrastructure.',
    mapDescription: 'Located on the western coast of the North Island, dominated by Mount Taranaki.',
    cities: [
      {
        name: 'New Plymouth',
        slug: 'new-plymouth',
        region: 'taranaki',
        population: 82000,
        description: 'Coastal city with strong energy sector and comprehensive financial services.',
        latitude: -39.0556,
        longitude: 174.0752
      }
    ]
  },
  {
    name: 'Nelson',
    slug: 'nelson',
    capital: 'Nelson',
    population: 55000,
    description: 'Northern South Island region. Sunshine capital with growing economy and accessible lending.',
    mapDescription: 'Located at the top of the South Island.',
    cities: [
      {
        name: 'Nelson',
        slug: 'nelson-city',
        region: 'nelson',
        population: 55000,
        description: 'Sunshine city with arts community and established banking services.',
        latitude: -41.2706,
        longitude: 173.2840
      }
    ]
  },
  {
    name: 'Gisborne',
    nameLocal: 'Tūranga-nui-a-Kiwa',
    slug: 'gisborne',
    capital: 'Gisborne',
    population: 52000,
    description: 'Easternmost city in New Zealand. Wine and agriculture economy with local banking presence.',
    mapDescription: 'Located on the east coast of the North Island.',
    cities: [
      {
        name: 'Gisborne',
        slug: 'gisborne-city',
        region: 'gisborne',
        population: 38000,
        description: 'First city to see the sunrise with accessible financial services.',
        latitude: -38.6628,
        longitude: 178.0175
      }
    ]
  },
  {
    name: 'Marlborough',
    slug: 'marlborough',
    capital: 'Blenheim',
    population: 52000,
    description: 'Top of South Island. Famous wine region with established credit facilities.',
    mapDescription: 'Located in the northeast of the South Island.',
    cities: [
      {
        name: 'Blenheim',
        slug: 'blenheim',
        region: 'marlborough',
        population: 31000,
        description: 'Wine capital of New Zealand with comprehensive banking services.',
        latitude: -41.5131,
        longitude: 173.9545
      }
    ]
  },
  {
    name: 'Southland',
    nameLocal: 'Murihiku',
    slug: 'southland',
    capital: 'Invercargill',
    population: 105000,
    description: 'Southernmost region with agricultural economy. Accessible banking and lending services.',
    mapDescription: 'Located at the southern tip of the South Island.',
    cities: [
      {
        name: 'Invercargill',
        slug: 'invercargill',
        region: 'southland',
        population: 51000,
        description: 'Southernmost city with established banking and credit facilities.',
        latitude: -46.4132,
        longitude: 168.3538
      }
    ]
  },
  {
    name: 'Tasman',
    slug: 'tasman',
    capital: 'Richmond',
    population: 58000,
    description: 'Northern South Island region. Growing economy with accessible financial services.',
    mapDescription: 'Located at the northern end of the South Island.',
    cities: [
      {
        name: 'Richmond',
        slug: 'richmond',
        region: 'tasman',
        population: 18000,
        description: 'Main town in Tasman region with local banking presence.',
        latitude: -41.3333,
        longitude: 173.1833
      }
    ]
  },
  {
    name: 'West Coast',
    nameLocal: 'Te Tai Poutini',
    slug: 'west-coast',
    capital: 'Greymouth',
    population: 33000,
    description: 'Sparsely populated region with mining and tourism. Local banking services available.',
    mapDescription: 'Located on the western coast of the South Island.',
    cities: [
      {
        name: 'Greymouth',
        slug: 'greymouth',
        region: 'west-coast',
        population: 10000,
        description: 'Main town on West Coast with accessible credit facilities.',
        latitude: -42.4500,
        longitude: 171.2100
      }
    ]
  }
]

// Helper function to get all NZ cities across all regions
export function getAllNZCities(): NZCity[] {
  return newZealandRegions.flatMap(region => region.cities)
}

// Helper function to get top cities by population
export function getTopNZCities(limit: number = 10): NZCity[] {
  return getAllNZCities()
    .sort((a, b) => b.population - a.population)
    .slice(0, limit)
}

// Helper function to get region by slug
export function getNZRegionBySlug(slug: string): NZRegion | undefined {
  return newZealandRegions.find(region => region.slug === slug)
}

// Helper function to get city by slug
export function getNZCityBySlug(slug: string): NZCity | undefined {
  return getAllNZCities().find(city => city.slug === slug)
}
