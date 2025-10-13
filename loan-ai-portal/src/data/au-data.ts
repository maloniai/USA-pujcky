/**
 * Australia States and Cities Data
 * Complete coverage of all 8 states & territories with major cities
 * Optimized for SEO and AI search discoverability
 */

export interface AUCity {
  name: string
  slug: string
  state: string
  population: number
  description: string
  latitude?: number
  longitude?: number
}

export interface AUState {
  name: string
  slug: string
  cities: AUCity[]
  population: number
  description: string
  capital: string
  mapDescription: string
}

export const australiaStates: AUState[] = [
  {
    name: 'New South Wales',
    slug: 'new-south-wales',
    capital: 'Sydney',
    population: 8200000,
    description: 'Australia\'s most populous state and economic powerhouse. Home to Sydney and diverse lending markets regulated by ASIC.',
    mapDescription: 'Located on the east coast, home to Sydney and major financial centers.',
    cities: [
      {
        name: 'Sydney',
        slug: 'sydney',
        state: 'new-south-wales',
        population: 5300000,
        description: 'Australia\'s largest city and financial capital. Extensive range of lenders from major banks to fintech companies.',
        latitude: -33.8688,
        longitude: 151.2093
      },
      {
        name: 'Newcastle',
        slug: 'newcastle',
        state: 'new-south-wales',
        population: 322000,
        description: 'Major regional center with strong banking presence and competitive loan rates.',
        latitude: -32.9283,
        longitude: 151.7817
      },
      {
        name: 'Wollongong',
        slug: 'wollongong',
        state: 'new-south-wales',
        population: 302000,
        description: 'Coastal city with diverse financial services and lending options.',
        latitude: -34.4278,
        longitude: 150.8931
      },
      {
        name: 'Central Coast',
        slug: 'central-coast',
        state: 'new-south-wales',
        population: 340000,
        description: 'Growing region with accessible credit services from major and regional lenders.',
        latitude: -33.3000,
        longitude: 151.2000
      }
    ]
  },
  {
    name: 'Victoria',
    slug: 'victoria',
    capital: 'Melbourne',
    population: 6700000,
    description: 'Australia\'s second most populous state. Melbourne is a major financial hub with competitive lending markets.',
    mapDescription: 'Located in the south-east, known for Melbourne and the Great Ocean Road.',
    cities: [
      {
        name: 'Melbourne',
        slug: 'melbourne',
        state: 'victoria',
        population: 5100000,
        description: 'Second-largest city with vibrant fintech scene and diverse lending options from banks to online lenders.',
        latitude: -37.8136,
        longitude: 144.9631
      },
      {
        name: 'Geelong',
        slug: 'geelong',
        state: 'victoria',
        population: 280000,
        description: 'Regional center with strong banking infrastructure and competitive personal loan rates.',
        latitude: -38.1499,
        longitude: 144.3617
      },
      {
        name: 'Ballarat',
        slug: 'ballarat',
        state: 'victoria',
        population: 115000,
        description: 'Historic gold rush city with established lending services and credit unions.',
        latitude: -37.5622,
        longitude: 143.8503
      },
      {
        name: 'Bendigo',
        slug: 'bendigo',
        state: 'victoria',
        population: 103000,
        description: 'Regional hub with strong community banking and diverse loan products.',
        latitude: -36.7570,
        longitude: 144.2794
      }
    ]
  },
  {
    name: 'Queensland',
    slug: 'queensland',
    capital: 'Brisbane',
    population: 5200000,
    description: 'Fast-growing state with Brisbane as capital. Strong tourism and mining economy with diverse financial services.',
    mapDescription: 'Stretches along the north-east coast, from Brisbane to Cairns.',
    cities: [
      {
        name: 'Brisbane',
        slug: 'brisbane',
        state: 'queensland',
        population: 2600000,
        description: 'Third-largest city and fastest-growing capital. Competitive lending market with ASIC-regulated lenders.',
        latitude: -27.4698,
        longitude: 153.0251
      },
      {
        name: 'Gold Coast',
        slug: 'gold-coast',
        state: 'queensland',
        population: 680000,
        description: 'Major tourist destination with diverse financial services and lending options.',
        latitude: -28.0167,
        longitude: 153.4000
      },
      {
        name: 'Sunshine Coast',
        slug: 'sunshine-coast',
        state: 'queensland',
        population: 333000,
        description: 'Growing coastal region with accessible credit services and competitive rates.',
        latitude: -26.6500,
        longitude: 153.0667
      },
      {
        name: 'Townsville',
        slug: 'townsville',
        state: 'queensland',
        population: 195000,
        description: 'Major regional center in North Queensland with established banking services.',
        latitude: -19.2590,
        longitude: 146.8169
      },
      {
        name: 'Cairns',
        slug: 'cairns',
        state: 'queensland',
        population: 153000,
        description: 'Gateway to Great Barrier Reef with tourism-focused economy and diverse loan products.',
        latitude: -16.9186,
        longitude: 145.7781
      }
    ]
  },
  {
    name: 'Western Australia',
    slug: 'western-australia',
    capital: 'Perth',
    population: 2800000,
    description: 'Resource-rich state with strong mining sector. Perth offers comprehensive financial services.',
    mapDescription: 'Vast state covering the entire western third of Australia.',
    cities: [
      {
        name: 'Perth',
        slug: 'perth',
        state: 'western-australia',
        population: 2100000,
        description: 'Capital city with strong mining economy. Competitive lending market with all major banks present.',
        latitude: -31.9505,
        longitude: 115.8605
      },
      {
        name: 'Mandurah',
        slug: 'mandurah',
        state: 'western-australia',
        population: 107000,
        description: 'Coastal city south of Perth with growing financial services sector.',
        latitude: -32.5269,
        longitude: 115.7217
      },
      {
        name: 'Bunbury',
        slug: 'bunbury',
        state: 'western-australia',
        population: 75000,
        description: 'Major regional center with established banking and credit services.',
        latitude: -33.3267,
        longitude: 115.6397
      }
    ]
  },
  {
    name: 'South Australia',
    slug: 'south-australia',
    capital: 'Adelaide',
    population: 1800000,
    description: 'State known for wine and defense industries. Adelaide offers diverse lending options.',
    mapDescription: 'Located in the south-central region, encompassing Adelaide and wine regions.',
    cities: [
      {
        name: 'Adelaide',
        slug: 'adelaide',
        state: 'south-australia',
        population: 1400000,
        description: 'State capital with established banking sector and competitive personal loan market.',
        latitude: -34.9285,
        longitude: 138.6007
      },
      {
        name: 'Mount Gambier',
        slug: 'mount-gambier',
        state: 'south-australia',
        population: 29000,
        description: 'Regional center with accessible banking and credit services.',
        latitude: -37.8297,
        longitude: 140.7821
      }
    ]
  },
  {
    name: 'Tasmania',
    slug: 'tasmania',
    capital: 'Hobart',
    population: 570000,
    description: 'Island state with growing economy. Hobart offers comprehensive financial services.',
    mapDescription: 'Island state south of mainland Australia.',
    cities: [
      {
        name: 'Hobart',
        slug: 'hobart',
        state: 'tasmania',
        population: 240000,
        description: 'State capital with full range of banking services and competitive loan products.',
        latitude: -42.8821,
        longitude: 147.3272
      },
      {
        name: 'Launceston',
        slug: 'launceston',
        state: 'tasmania',
        population: 87000,
        description: 'Second-largest city with established lending services and credit unions.',
        latitude: -41.4332,
        longitude: 147.1441
      }
    ]
  },
  {
    name: 'Australian Capital Territory',
    slug: 'australian-capital-territory',
    capital: 'Canberra',
    population: 460000,
    description: 'Federal territory and national capital. High income levels and competitive lending market.',
    mapDescription: 'Small territory within NSW, home to the national capital Canberra.',
    cities: [
      {
        name: 'Canberra',
        slug: 'canberra',
        state: 'australian-capital-territory',
        population: 460000,
        description: 'National capital with high median incomes and comprehensive financial services.',
        latitude: -35.2809,
        longitude: 149.1300
      }
    ]
  },
  {
    name: 'Northern Territory',
    slug: 'northern-territory',
    capital: 'Darwin',
    population: 250000,
    description: 'Sparsely populated territory with Darwin as major center. Growing financial services sector.',
    mapDescription: 'Vast territory in the north, known for the Outback and Darwin.',
    cities: [
      {
        name: 'Darwin',
        slug: 'darwin',
        state: 'northern-territory',
        population: 150000,
        description: 'Tropical capital with established banking services and competitive loan rates.',
        latitude: -12.4634,
        longitude: 130.8456
      },
      {
        name: 'Alice Springs',
        slug: 'alice-springs',
        state: 'northern-territory',
        population: 26000,
        description: 'Outback center with accessible banking and financial services.',
        latitude: -23.6980,
        longitude: 133.8807
      }
    ]
  }
]

// Flatten all cities for easy lookup
export const allAUCities: AUCity[] = australiaStates.flatMap(state => state.cities)

// Helper functions
export function getAUStateBySlug(slug: string): AUState | undefined {
  return australiaStates.find(s => s.slug === slug)
}

export function getAUCityBySlug(slug: string): AUCity | undefined {
  return allAUCities.find(c => c.slug === slug)
}

export function getAUCitiesByState(stateSlug: string): AUCity[] {
  const state = getAUStateBySlug(stateSlug)
  return state ? state.cities : []
}

export function getNearbyCities(citySlug: string, limit: number = 5): AUCity[] {
  const city = getAUCityBySlug(citySlug)
  if (!city) return []
  
  const sameStateCities = getAUCitiesByState(city.state)
    .filter(c => c.slug !== citySlug)
    .slice(0, limit)
  
  return sameStateCities
}

// Get top cities by population for homepage
export function getTopAUCities(limit: number = 10): AUCity[] {
  return [...allAUCities]
    .sort((a, b) => b.population - a.population)
    .slice(0, limit)
}

// SEO-friendly state names
export const stateDisplayNames: Record<string, string> = {
  'new-south-wales': 'New South Wales',
  'victoria': 'Victoria',
  'queensland': 'Queensland',
  'western-australia': 'Western Australia',
  'south-australia': 'South Australia',
  'tasmania': 'Tasmania',
  'australian-capital-territory': 'Australian Capital Territory',
  'northern-territory': 'Northern Territory'
}
