/**
 * South Africa Regions and Cities Data
 * Complete coverage of all 9 provinces with major cities
 * Optimized for SEO and AI search discoverability
 */

export interface ZACity {
  name: string
  nameLocal?: string // Afrikaans/Zulu translation if different
  slug: string
  region: string
  population: number
  description: string
  latitude?: number
  longitude?: number
}

export interface ZARegion {
  name: string
  nameLocal?: string
  slug: string
  cities: ZACity[]
  population: number
  description: string
  capital: string
  mapDescription: string
}

export const southAfricaRegions: ZARegion[] = [
  {
    name: 'Gauteng',
    slug: 'gauteng',
    capital: 'Johannesburg',
    population: 15800000,
    description: 'South Africa\'s economic powerhouse and most populous province. Home to Johannesburg and Pretoria, with the highest concentration of financial services.',
    mapDescription: 'Located in the north-eastern interior, Gauteng is the financial and industrial hub of South Africa.',
    cities: [
      {
        name: 'Johannesburg',
        slug: 'johannesburg',
        region: 'gauteng',
        population: 5700000,
        description: 'South Africa\'s largest city and economic capital. Major financial hub with numerous banks and lending institutions.',
        latitude: -26.2041,
        longitude: 28.0473
      },
      {
        name: 'Pretoria',
        slug: 'pretoria',
        region: 'gauteng',
        population: 2500000,
        description: 'Administrative capital of South Africa. Home to major financial institutions and government services.',
        latitude: -25.7479,
        longitude: 28.2293
      },
      {
        name: 'Ekurhuleni',
        slug: 'ekurhuleni',
        region: 'gauteng',
        population: 3200000,
        description: 'Metropolitan municipality including East Rand. Important industrial and commercial center.',
        latitude: -26.2023,
        longitude: 28.4523
      },
      {
        name: 'Soweto',
        slug: 'soweto',
        region: 'gauteng',
        population: 1300000,
        description: 'Historic township, now a major urban area with growing financial services access.',
        latitude: -26.2678,
        longitude: 27.8585
      },
      {
        name: 'Midrand',
        slug: 'midrand',
        region: 'gauteng',
        population: 250000,
        description: 'Business hub between Johannesburg and Pretoria with modern financial infrastructure.',
        latitude: -25.9886,
        longitude: 28.1331
      }
    ]
  },
  {
    name: 'Western Cape',
    nameLocal: 'Wes-Kaap',
    slug: 'western-cape',
    capital: 'Cape Town',
    population: 7200000,
    description: 'Second-most populous province, known for Cape Town and wine regions. Growing fintech and financial services sector.',
    mapDescription: 'Located in the south-western corner, encompassing Cape Town and the famous Garden Route.',
    cities: [
      {
        name: 'Cape Town',
        nameLocal: 'Kaapstad',
        slug: 'cape-town',
        region: 'western-cape',
        population: 4700000,
        description: 'Legislative capital and major tourist destination. Strong banking presence and emerging fintech hub.',
        latitude: -33.9249,
        longitude: 18.4241
      },
      {
        name: 'Stellenbosch',
        slug: 'stellenbosch',
        region: 'western-cape',
        population: 150000,
        description: 'University town and wine region with growing financial services for residents and businesses.',
        latitude: -33.9321,
        longitude: 18.8602
      },
      {
        name: 'Paarl',
        slug: 'paarl',
        region: 'western-cape',
        population: 190000,
        description: 'Historic town in wine region with accessible credit services and banking facilities.',
        latitude: -33.7267,
        longitude: 18.9648
      },
      {
        name: 'George',
        slug: 'george',
        region: 'western-cape',
        population: 160000,
        description: 'Gateway to the Garden Route. Growing economy with diverse lending options.',
        latitude: -33.9608,
        longitude: 22.4617
      },
      {
        name: 'Worcester',
        slug: 'worcester',
        region: 'western-cape',
        population: 130000,
        description: 'Agricultural hub with established banking and microfinance presence.',
        latitude: -33.6467,
        longitude: 19.4478
      }
    ]
  },
  {
    name: 'KwaZulu-Natal',
    slug: 'kwazulu-natal',
    capital: 'Pietermaritzburg',
    population: 11500000,
    description: 'Coastal province with major port city Durban. Diverse economy with strong financial services sector.',
    mapDescription: 'Located on the eastern coast, home to Durban and the Zulu Kingdom heritage.',
    cities: [
      {
        name: 'Durban',
        slug: 'durban',
        region: 'kwazulu-natal',
        population: 3900000,
        description: 'Third-largest city and major port. Diverse lending market with competitive rates.',
        latitude: -29.8587,
        longitude: 31.0218
      },
      {
        name: 'Pietermaritzburg',
        slug: 'pietermaritzburg',
        region: 'kwazulu-natal',
        population: 750000,
        description: 'Provincial capital with established banking infrastructure and credit services.',
        latitude: -29.6017,
        longitude: 30.3794
      },
      {
        name: 'Richards Bay',
        slug: 'richards-bay',
        region: 'kwazulu-natal',
        population: 380000,
        description: 'Industrial port city with growing financial services for workers and businesses.',
        latitude: -28.7831,
        longitude: 32.0378
      },
      {
        name: 'Newcastle',
        slug: 'newcastle',
        region: 'kwazulu-natal',
        population: 360000,
        description: 'Industrial center with accessible credit options for residents and SMEs.',
        latitude: -27.7576,
        longitude: 29.9321
      },
      {
        name: 'Ladysmith',
        slug: 'ladysmith',
        region: 'kwazulu-natal',
        population: 240000,
        description: 'Historic town with growing economy and expanding financial services.',
        latitude: -28.5617,
        longitude: 29.7817
      }
    ]
  },
  {
    name: 'Eastern Cape',
    slug: 'eastern-cape',
    capital: 'Bhisho',
    population: 6700000,
    description: 'Second-largest province by area. Mix of urban centers and rural areas with expanding financial inclusion.',
    mapDescription: 'Stretches along the south-eastern coast, including Port Elizabeth and East London.',
    cities: [
      {
        name: 'Port Elizabeth',
        slug: 'port-elizabeth',
        region: 'eastern-cape',
        population: 1300000,
        description: 'Major automotive manufacturing hub. Strong banking presence with competitive loan products.',
        latitude: -33.9608,
        longitude: 25.6022
      },
      {
        name: 'East London',
        slug: 'east-london',
        region: 'eastern-cape',
        population: 780000,
        description: 'Only river port in South Africa. Growing financial services sector.',
        latitude: -33.0153,
        longitude: 27.9116
      },
      {
        name: 'Mthatha',
        slug: 'mthatha',
        region: 'eastern-cape',
        population: 450000,
        description: 'Regional commercial center with expanding microfinance and banking services.',
        latitude: -31.5887,
        longitude: 28.7842
      },
      {
        name: 'Queenstown',
        slug: 'queenstown',
        region: 'eastern-cape',
        population: 120000,
        description: 'Agricultural service town with accessible credit facilities for residents.',
        latitude: -31.8976,
        longitude: 26.8753
      },
      {
        name: 'Grahamstown',
        slug: 'grahamstown',
        region: 'eastern-cape',
        population: 140000,
        description: 'University town with diverse financial products for students and residents.',
        latitude: -33.3042,
        longitude: 26.5328
      }
    ]
  },
  {
    name: 'Limpopo',
    slug: 'limpopo',
    capital: 'Polokwane',
    population: 5900000,
    description: 'Northernmost province bordering Zimbabwe, Botswana, and Mozambique. Growing financial inclusion initiatives.',
    mapDescription: 'Located in the far north, rich in minerals and agriculture.',
    cities: [
      {
        name: 'Polokwane',
        slug: 'polokwane',
        region: 'limpopo',
        population: 630000,
        description: 'Provincial capital and economic hub. Expanding banking and microfinance presence.',
        latitude: -23.9045,
        longitude: 29.4689
      },
      {
        name: 'Tzaneen',
        slug: 'tzaneen',
        region: 'limpopo',
        population: 130000,
        description: 'Agricultural center with growing access to agricultural and personal loans.',
        latitude: -23.8333,
        longitude: 30.1667
      },
      {
        name: 'Mokopane',
        slug: 'mokopane',
        region: 'limpopo',
        population: 85000,
        description: 'Mining town with financial services tailored to mining sector workers.',
        latitude: -24.1939,
        longitude: 29.0089
      },
      {
        name: 'Thohoyandou',
        slug: 'thohoyandou',
        region: 'limpopo',
        population: 70000,
        description: 'Regional center with expanding microfinance and community banking.',
        latitude: -22.9442,
        longitude: 30.4839
      }
    ]
  },
  {
    name: 'Mpumalanga',
    slug: 'mpumalanga',
    capital: 'Mbombela',
    population: 4700000,
    description: 'Province known for coal mining and agriculture. Growing financial services in urban centers.',
    mapDescription: 'Located in the north-east, bordering Mozambique and Eswatini.',
    cities: [
      {
        name: 'Mbombela',
        slug: 'mbombela',
        region: 'mpumalanga',
        population: 510000,
        description: 'Provincial capital (formerly Nelspruit). Tourism and agriculture hub with diverse lending options.',
        latitude: -25.4753,
        longitude: 30.9696
      },
      {
        name: 'Witbank',
        slug: 'witbank',
        region: 'mpumalanga',
        population: 150000,
        description: 'Coal mining center with financial products for mining sector employees.',
        latitude: -25.8733,
        longitude: 29.2320
      },
      {
        name: 'Secunda',
        slug: 'secunda',
        region: 'mpumalanga',
        population: 40000,
        description: 'Industrial town with strong banking infrastructure for residents and workers.',
        latitude: -26.5504,
        longitude: 29.1698
      },
      {
        name: 'Middelburg',
        slug: 'middelburg-mp',
        region: 'mpumalanga',
        population: 180000,
        description: 'Commercial center with accessible credit services and banking facilities.',
        latitude: -25.7756,
        longitude: 29.4642
      }
    ]
  },
  {
    name: 'North West',
    slug: 'north-west',
    capital: 'Mahikeng',
    population: 4100000,
    description: 'Province with mining and agriculture. Expanding financial inclusion programs.',
    mapDescription: 'Located in the north-western interior, bordering Botswana.',
    cities: [
      {
        name: 'Rustenburg',
        slug: 'rustenburg',
        region: 'north-west',
        population: 550000,
        description: 'Platinum mining capital with robust financial services for mining sector.',
        latitude: -25.6667,
        longitude: 27.2500
      },
      {
        name: 'Mahikeng',
        slug: 'mahikeng',
        region: 'north-west',
        population: 250000,
        description: 'Provincial capital with growing banking and microfinance presence.',
        latitude: -25.8650,
        longitude: 25.6447
      },
      {
        name: 'Potchefstroom',
        slug: 'potchefstroom',
        region: 'north-west',
        population: 130000,
        description: 'University town with diverse financial products for students and residents.',
        latitude: -26.7144,
        longitude: 27.1017
      },
      {
        name: 'Klerksdorp',
        slug: 'klerksdorp',
        region: 'north-west',
        population: 350000,
        description: 'Gold mining area with established banking infrastructure.',
        latitude: -26.8696,
        longitude: 26.6669
      }
    ]
  },
  {
    name: 'Free State',
    slug: 'free-state',
    capital: 'Bloemfontein',
    population: 2900000,
    description: 'Agricultural heartland with mining. Stable financial services sector in urban centers.',
    mapDescription: 'Located in the center of the country, known as the "breadbasket" of South Africa.',
    cities: [
      {
        name: 'Bloemfontein',
        slug: 'bloemfontein',
        region: 'free-state',
        population: 520000,
        description: 'Judicial capital with well-established banking and credit services.',
        latitude: -29.1211,
        longitude: 26.2140
      },
      {
        name: 'Welkom',
        slug: 'welkom',
        region: 'free-state',
        population: 330000,
        description: 'Gold mining city with financial services tailored to mining employees.',
        latitude: -27.9767,
        longitude: 26.7375
      },
      {
        name: 'Bethlehem',
        slug: 'bethlehem',
        region: 'free-state',
        population: 110000,
        description: 'Agricultural hub with accessible banking and agricultural loans.',
        latitude: -28.2311,
        longitude: 28.3078
      },
      {
        name: 'Kroonstad',
        slug: 'kroonstad',
        region: 'free-state',
        population: 130000,
        description: 'Industrial town with growing financial services access.',
        latitude: -27.6506,
        longitude: 27.2342
      }
    ]
  },
  {
    name: 'Northern Cape',
    slug: 'northern-cape',
    capital: 'Kimberley',
    population: 1300000,
    description: 'Largest but least populous province. Mining-focused economy with expanding financial services.',
    mapDescription: 'Vast province in the north-west, rich in diamonds and minerals.',
    cities: [
      {
        name: 'Kimberley',
        slug: 'kimberley',
        region: 'northern-cape',
        population: 220000,
        description: 'Historic diamond mining city with established banking infrastructure.',
        latitude: -28.7282,
        longitude: 24.7499
      },
      {
        name: 'Upington',
        slug: 'upington',
        region: 'northern-cape',
        population: 80000,
        description: 'Regional center with accessible financial services for agricultural sector.',
        latitude: -28.4478,
        longitude: 21.2561
      },
      {
        name: 'Springbok',
        slug: 'springbok',
        region: 'northern-cape',
        population: 13000,
        description: 'Mining town with basic banking and microfinance services.',
        latitude: -29.6656,
        longitude: 17.8858
      }
    ]
  }
]

// Flatten all cities for easy lookup
export const allZACities: ZACity[] = southAfricaRegions.flatMap(region => region.cities)

// Helper functions
export function getZARegionBySlug(slug: string): ZARegion | undefined {
  return southAfricaRegions.find(r => r.slug === slug)
}

export function getZACityBySlug(slug: string): ZACity | undefined {
  return allZACities.find(c => c.slug === slug)
}

export function getZACitiesByRegion(regionSlug: string): ZACity[] {
  const region = getZARegionBySlug(regionSlug)
  return region ? region.cities : []
}

export function getNearbyCities(citySlug: string, limit: number = 5): ZACity[] {
  const city = getZACityBySlug(citySlug)
  if (!city) return []
  
  const samRegionCities = getZACitiesByRegion(city.region)
    .filter(c => c.slug !== citySlug)
    .slice(0, limit)
  
  return samRegionCities
}

// Get top cities by population for homepage
export function getTopZACities(limit: number = 10): ZACity[] {
  return [...allZACities]
    .sort((a, b) => b.population - a.population)
    .slice(0, limit)
}

// SEO-friendly region names
export const regionDisplayNames: Record<string, string> = {
  'gauteng': 'Gauteng',
  'western-cape': 'Western Cape',
  'kwazulu-natal': 'KwaZulu-Natal',
  'eastern-cape': 'Eastern Cape',
  'limpopo': 'Limpopo',
  'mpumalanga': 'Mpumalanga',
  'north-west': 'North West',
  'free-state': 'Free State',
  'northern-cape': 'Northern Cape'
}
