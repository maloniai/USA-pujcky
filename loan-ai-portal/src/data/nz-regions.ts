/**
 * New Zealand Regions Data
 * 16 regions + major cities
 * Population and economic data based on 2023 census
 */

export interface NZCity {
  name: string
  slug: string
}

export interface NZRegion {
  name: string
  code: string
  slug: string
  capital: string
  population: number
  majorCities: string[]
  cities: NZCity[]
  description: string
  economicProfile: string
  averageIncome: string
}

// Helper function to convert city name to slug
function cityToSlug(cityName: string): string {
  return cityName
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}

// Helper function to convert featuredCities array to NZCity objects
function citiesToObjects(cityNames: string[]): NZCity[] {
  return cityNames.map(name => ({
    name,
    slug: cityToSlug(name)
  }))
}

export const nzRegions: NZRegion[] = [
  {
    name: 'Auckland',
    code: 'AKL',
    slug: 'auckland',
    capital: 'Auckland',
    population: 1700000,
    majorCities: ['Auckland', 'North Shore', 'Manukau', 'Waitakere'],
    cities: citiesToObjects([
      'Auckland CBD',
      'North Shore',
      'Manukau',
      'Waitakere',
      'Papakura',
      'Franklin'
    ]),
    description: 'New Zealand\'s largest city and economic hub, home to over 30% of the country\'s population.',
    economicProfile: 'Finance, technology, international trade, tourism, and education sectors dominate. High cost of living with diverse lending options.',
    averageIncome: 'NZD 85,000'
  },
  {
    name: 'Wellington',
    code: 'WGN',
    slug: 'wellington',
    capital: 'Wellington',
    population: 530000,
    majorCities: ['Wellington', 'Lower Hutt', 'Upper Hutt', 'Porirua'],
    cities: citiesToObjects([
      'Wellington',
      'Lower Hutt',
      'Upper Hutt',
      'Porirua',
      'Kapiti Coast'
    ]),
    description: 'The capital city, center of government, creative industries, and technology.',
    economicProfile: 'Government services, film production, technology startups, and tourism. Strong job market with competitive salaries.',
    averageIncome: 'NZD 80,000'
  },
  {
    name: 'Canterbury',
    code: 'CAN',
    slug: 'canterbury',
    capital: 'Christchurch',
    population: 650000,
    majorCities: ['Christchurch', 'Timaru', 'Ashburton', 'Rangiora'],
    cities: citiesToObjects([
      'Christchurch',
      'Timaru',
      'Ashburton',
      'Rangiora',
      'Kaiapoi',
      'Rolleston'
    ]),
    description: 'South Island\'s largest region, centered around Christchurch, still recovering and rebuilding from 2011 earthquake.',
    economicProfile: 'Agriculture, tourism, construction, education, and manufacturing. Growing tech sector.',
    averageIncome: 'NZD 72,000'
  },
  {
    name: 'Waikato',
    code: 'WKO',
    slug: 'waikato',
    capital: 'Hamilton',
    population: 510000,
    majorCities: ['Hamilton', 'Tauranga', 'Rotorua', 'Taupo'],
    cities: citiesToObjects([
      'Hamilton',
      'Cambridge',
      'Te Awamutu',
      'Tokoroa',
      'Matamata'
    ]),
    description: 'Fertile farming region with strong dairy industry and growing urban centers.',
    economicProfile: 'Dairy farming, agriculture, education (University of Waikato), and manufacturing.',
    averageIncome: 'NZD 70,000'
  },
  {
    name: 'Bay of Plenty',
    code: 'BOP',
    slug: 'bay-of-plenty',
    capital: 'Tauranga',
    population: 350000,
    majorCities: ['Tauranga', 'Rotorua', 'Whakatane'],
    cities: citiesToObjects([
      'Tauranga',
      'Mount Maunganui',
      'Rotorua',
      'Whakatane',
      'Te Puke'
    ]),
    description: 'Coastal region known for kiwifruit production, tourism, and retirement destination.',
    economicProfile: 'Horticulture, forestry, tourism, and port operations. Fast-growing population.',
    averageIncome: 'NZD 68,000'
  },
  {
    name: 'Otago',
    code: 'OTA',
    slug: 'otago',
    capital: 'Dunedin',
    population: 240000,
    majorCities: ['Dunedin', 'Queenstown', 'Wanaka', 'Oamaru'],
    cities: citiesToObjects([
      'Dunedin',
      'Queenstown',
      'Wanaka',
      'Oamaru',
      'Alexandra'
    ]),
    description: 'Southern region featuring university city Dunedin and tourism hotspot Queenstown.',
    economicProfile: 'Tourism (Queenstown), education (University of Otago), viticulture, and heritage tourism.',
    averageIncome: 'NZD 67,000'
  },
  {
    name: 'Manawatū-Whanganui',
    code: 'MWT',
    slug: 'manawatu-whanganui',
    capital: 'Palmerston North',
    population: 255000,
    majorCities: ['Palmerston North', 'Whanganui', 'Feilding'],
    cities: citiesToObjects([
      'Palmerston North',
      'Whanganui',
      'Feilding',
      'Levin',
      'Dannevirke'
    ]),
    description: 'Central North Island region with strong agricultural base and education sector.',
    economicProfile: 'Agriculture, food processing, education (Massey University), and defense (Ohakea Air Base).',
    averageIncome: 'NZD 66,000'
  },
  {
    name: 'Hawke\'s Bay',
    code: 'HKB',
    slug: 'hawkes-bay',
    capital: 'Napier',
    population: 180000,
    majorCities: ['Napier', 'Hastings', 'Havelock North'],
    cities: citiesToObjects([
      'Napier',
      'Hastings',
      'Havelock North',
      'Waipukurau',
      'Wairoa'
    ]),
    description: 'East coast region famous for Art Deco architecture, wine, and horticulture.',
    economicProfile: 'Wine production, horticulture (apples, stone fruit), food processing, and tourism.',
    averageIncome: 'NZD 65,000'
  },
  {
    name: 'Northland',
    code: 'NTL',
    slug: 'northland',
    capital: 'Whangarei',
    population: 200000,
    majorCities: ['Whangarei', 'Kerikeri', 'Kaitaia'],
    cities: citiesToObjects([
      'Whangarei',
      'Kerikeri',
      'Kaitaia',
      'Dargaville',
      'Paihia'
    ]),
    description: 'Northernmost region known for beaches, Māori culture, and tourism.',
    economicProfile: 'Tourism, agriculture, forestry, and fishing. Growing retirement destination.',
    averageIncome: 'NZD 62,000'
  },
  {
    name: 'Taranaki',
    code: 'TKI',
    slug: 'taranaki',
    capital: 'New Plymouth',
    population: 126000,
    majorCities: ['New Plymouth', 'Stratford', 'Hawera'],
    cities: citiesToObjects([
      'New Plymouth',
      'Stratford',
      'Hawera',
      'Inglewood',
      'Eltham'
    ]),
    description: 'West coast region centered on oil and gas industry and dairy farming.',
    economicProfile: 'Oil and gas extraction, dairy farming, and renewable energy development.',
    averageIncome: 'NZD 73,000'
  },
  {
    name: 'Nelson-Tasman',
    code: 'NSN',
    slug: 'nelson-tasman',
    capital: 'Nelson',
    population: 130000,
    majorCities: ['Nelson', 'Richmond', 'Motueka'],
    cities: citiesToObjects([
      'Nelson',
      'Richmond',
      'Motueka',
      'Takaka',
      'Mapua'
    ]),
    description: 'Top of the South Island, known for sunshine hours, arts, and horticulture.',
    economicProfile: 'Horticulture (apples, hops), seafood, tourism, and creative industries.',
    averageIncome: 'NZD 68,000'
  },
  {
    name: 'Southland',
    code: 'STL',
    slug: 'southland',
    capital: 'Invercargill',
    population: 103000,
    majorCities: ['Invercargill', 'Gore', 'Winton'],
    cities: citiesToObjects([
      'Invercargill',
      'Gore',
      'Winton',
      'Te Anau',
      'Bluff'
    ]),
    description: 'New Zealand\'s southernmost region, strong agricultural economy.',
    economicProfile: 'Dairy and sheep farming, meat processing, and tourism (Fiordland).',
    averageIncome: 'NZD 67,000'
  },
  {
    name: 'Gisborne',
    code: 'GIS',
    slug: 'gisborne',
    capital: 'Gisborne',
    population: 52000,
    majorCities: ['Gisborne'],
    cities: citiesToObjects([
      'Gisborne',
      'Ruatoria',
      'Tolaga Bay'
    ]),
    description: 'First city in the world to see the sunrise each day, strong Māori culture.',
    economicProfile: 'Wine production, horticulture, forestry, and sheep farming.',
    averageIncome: 'NZD 63,000'
  },
  {
    name: 'Marlborough',
    code: 'MBH',
    slug: 'marlborough',
    capital: 'Blenheim',
    population: 52000,
    majorCities: ['Blenheim', 'Picton', 'Renwick'],
    cities: citiesToObjects([
      'Blenheim',
      'Picton',
      'Renwick',
      'Havelock'
    ]),
    description: 'New Zealand\'s largest wine-producing region, home to Marlborough Sauvignon Blanc.',
    economicProfile: 'Wine production and export, seafood (green-lipped mussels), and tourism.',
    averageIncome: 'NZD 69,000'
  },
  {
    name: 'West Coast',
    code: 'WTC',
    slug: 'west-coast',
    capital: 'Greymouth',
    population: 33000,
    majorCities: ['Greymouth', 'Hokitika', 'Westport'],
    cities: citiesToObjects([
      'Greymouth',
      'Hokitika',
      'Westport',
      'Franz Josef'
    ]),
    description: 'Rugged coastline, glaciers, mining heritage, and eco-tourism.',
    economicProfile: 'Tourism (glaciers), dairy farming, coal mining, and forestry.',
    averageIncome: 'NZD 67,000'
  },
  {
    name: 'Tasman',
    code: 'TAS',
    slug: 'tasman',
    capital: 'Richmond',
    population: 58000,
    majorCities: ['Richmond', 'Motueka', 'Takaka'],
    cities: citiesToObjects([
      'Richmond',
      'Motueka',
      'Takaka',
      'Collingwood'
    ]),
    description: 'Includes Abel Tasman National Park, horticulture, and seafood industries.',
    economicProfile: 'Horticulture, seafood farming, tourism, and forestry.',
    averageIncome: 'NZD 68,000'
  }
]

// Calculate total cities
export const totalNZCities = nzRegions.reduce((sum, region) => sum + region.cities.length, 0)

// Helper function to get region by slug
export function getNZRegionBySlug(slug: string): NZRegion | undefined {
  return nzRegions.find(region => region.slug === slug)
}

// Get all cities across all regions
export function getAllNZCities(): Array<{ city: string; region: string; regionSlug: string; citySlug: string }> {
  const cities: Array<{ city: string; region: string; regionSlug: string; citySlug: string }> = []
  
  nzRegions.forEach(region => {
    region.cities.forEach(city => {
      cities.push({
        city: city.name,
        region: region.name,
        regionSlug: region.slug,
        citySlug: city.slug
      })
    })
  })
  
  return cities.sort((a, b) => a.city.localeCompare(b.city))
}
