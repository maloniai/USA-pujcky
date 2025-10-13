/**
 * New Zealand Cities Data for Loan Information
 * Major cities across all 16 regions
 */

export interface NewZealandCityInfo {
  name: string
  slug: string
  region: string
  regionSlug: string
  population: string
  avgLoanAmount: string
  avgRate: string
  avgCreditScore: string
  description: string
  topLoanTypes: string[]
  lenderCount: number
  nearbyCities: string[]
}

export const newzealandCities: NewZealandCityInfo[] = [
  // Auckland Region
  {
    name: 'Auckland City',
    slug: 'auckland-city',
    region: 'Auckland',
    regionSlug: 'auckland',
    population: '1.7M',
    avgLoanAmount: 'NZ$28,000',
    avgRate: '8.3%',
    avgCreditScore: '680',
    description: 'New Zealand\'s largest city offers the most competitive loan rates and widest lender selection with strong fintech presence.',
    topLoanTypes: ['Personal Loans', 'Debt Consolidation', 'Home Renovation'],
    lenderCount: 45,
    nearbyCities: ['Manukau', 'North Shore', 'Waitakere']
  },
  {
    name: 'Manukau',
    slug: 'manukau',
    region: 'Auckland',
    regionSlug: 'auckland',
    population: '420K',
    avgLoanAmount: 'NZ$25,000',
    avgRate: '8.5%',
    avgCreditScore: '670',
    description: 'South Auckland hub with diverse population and good access to both traditional and online lenders.',
    topLoanTypes: ['Personal Loans', 'Vehicle Finance', 'Business Loans'],
    lenderCount: 38,
    nearbyCities: ['Auckland City', 'Papakura', 'Pukekohe']
  },
  {
    name: 'North Shore',
    slug: 'north-shore',
    region: 'Auckland',
    regionSlug: 'auckland',
    population: '250K',
    avgLoanAmount: 'NZ$27,000',
    avgRate: '8.4%',
    avgCreditScore: '690',
    description: 'Affluent area with excellent banking infrastructure and competitive personal loan rates.',
    topLoanTypes: ['Personal Loans', 'Home Renovation', 'Investment'],
    lenderCount: 40,
    nearbyCities: ['Auckland City', 'Albany', 'Takapuna']
  },

  // Wellington Region
  {
    name: 'Wellington City',
    slug: 'wellington-city',
    region: 'Wellington',
    regionSlug: 'wellington',
    population: '215K',
    avgLoanAmount: 'NZ$24,000',
    avgRate: '8.6%',
    avgCreditScore: '685',
    description: 'Capital city with strong public sector employment and stable lending environment.',
    topLoanTypes: ['Personal Loans', 'Vehicle Purchase', 'Education'],
    lenderCount: 42,
    nearbyCities: ['Lower Hutt', 'Upper Hutt', 'Porirua']
  },
  {
    name: 'Lower Hutt',
    slug: 'lower-hutt',
    region: 'Wellington',
    regionSlug: 'wellington',
    population: '107K',
    avgLoanAmount: 'NZ$22,000',
    avgRate: '8.8%',
    avgCreditScore: '675',
    description: 'Growing city with mix of industrial and residential areas, good loan accessibility.',
    topLoanTypes: ['Personal Loans', 'Debt Consolidation', 'Home Improvement'],
    lenderCount: 35,
    nearbyCities: ['Wellington City', 'Upper Hutt', 'Petone']
  },
  {
    name: 'Porirua',
    slug: 'porirua',
    region: 'Wellington',
    regionSlug: 'wellington',
    population: '59K',
    avgLoanAmount: 'NZ$20,000',
    avgRate: '9.0%',
    avgCreditScore: '665',
    description: 'Diverse community with access to major Wellington lenders and local credit unions.',
    topLoanTypes: ['Personal Loans', 'Vehicle Finance', 'Small Business'],
    lenderCount: 32,
    nearbyCities: ['Wellington City', 'Tawa', 'Paremata']
  },

  // Canterbury Region
  {
    name: 'Christchurch',
    slug: 'christchurch',
    region: 'Canterbury',
    regionSlug: 'canterbury',
    population: '389K',
    avgLoanAmount: 'NZ$25,000',
    avgRate: '8.5%',
    avgCreditScore: '680',
    description: 'South Island\'s largest city with comprehensive lending options and rebuild economy.',
    topLoanTypes: ['Personal Loans', 'Home Renovation', 'Business Startup'],
    lenderCount: 40,
    nearbyCities: ['Rangiora', 'Rolleston', 'Lincoln']
  },
  {
    name: 'Timaru',
    slug: 'timaru',
    region: 'Canterbury',
    regionSlug: 'canterbury',
    population: '30K',
    avgLoanAmount: 'NZ$20,000',
    avgRate: '9.0%',
    avgCreditScore: '670',
    description: 'Port town with stable economy and good access to regional and national lenders.',
    topLoanTypes: ['Personal Loans', 'Agricultural', 'Vehicle Finance'],
    lenderCount: 28,
    nearbyCities: ['Ashburton', 'Waimate', 'Temuka']
  },

  // Waikato Region
  {
    name: 'Hamilton',
    slug: 'hamilton',
    region: 'Waikato',
    regionSlug: 'waikato',
    population: '179K',
    avgLoanAmount: 'NZ$22,000',
    avgRate: '8.8%',
    avgCreditScore: '675',
    description: 'Inland city and agricultural hub with strong banking presence and competitive rates.',
    topLoanTypes: ['Personal Loans', 'Vehicle Finance', 'Education'],
    lenderCount: 38,
    nearbyCities: ['Cambridge', 'Te Awamutu', 'Morrinsville']
  },
  {
    name: 'Taupo',
    slug: 'taupo',
    region: 'Waikato',
    regionSlug: 'waikato',
    population: '25K',
    avgLoanAmount: 'NZ$20,000',
    avgRate: '9.1%',
    avgCreditScore: '670',
    description: 'Tourism hub with seasonal lending patterns and access to major bank branches.',
    topLoanTypes: ['Personal Loans', 'Tourism Business', 'Home Renovation'],
    lenderCount: 30,
    nearbyCities: ['Turangi', 'Mangakino', 'Kinloch']
  },

  // Bay of Plenty Region
  {
    name: 'Tauranga',
    slug: 'tauranga',
    region: 'Bay of Plenty',
    regionSlug: 'bay-of-plenty',
    population: '156K',
    avgLoanAmount: 'NZ$22,000',
    avgRate: '8.9%',
    avgCreditScore: '675',
    description: 'Fastest growing city with strong retirement and kiwifruit economy, good lending options.',
    topLoanTypes: ['Personal Loans', 'Home Renovation', 'Business Investment'],
    lenderCount: 36,
    nearbyCities: ['Mount Maunganui', 'Te Puke', 'Papamoa']
  },
  {
    name: 'Rotorua',
    slug: 'rotorua',
    region: 'Bay of Plenty',
    regionSlug: 'bay-of-plenty',
    population: '58K',
    avgLoanAmount: 'NZ$19,000',
    avgRate: '9.3%',
    avgCreditScore: '665',
    description: 'Tourism and geothermal center with seasonal economy and diverse lending options.',
    topLoanTypes: ['Personal Loans', 'Tourism Business', 'Vehicle Finance'],
    lenderCount: 32,
    nearbyCities: ['Taupo', 'Whakatane', 'Tokoroa']
  },

  // Otago Region
  {
    name: 'Dunedin',
    slug: 'dunedin',
    region: 'Otago',
    regionSlug: 'otago',
    population: '134K',
    avgLoanAmount: 'NZ$23,000',
    avgRate: '8.7%',
    avgCreditScore: '680',
    description: 'University city with student lending and established banking sector.',
    topLoanTypes: ['Personal Loans', 'Education', 'Home Purchase'],
    lenderCount: 35,
    nearbyCities: ['Mosgiel', 'Port Chalmers', 'Milton']
  },
  {
    name: 'Queenstown',
    slug: 'queenstown',
    region: 'Otago',
    regionSlug: 'otago',
    population: '16K',
    avgLoanAmount: 'NZ$24,000',
    avgRate: '8.8%',
    avgCreditScore: '690',
    description: 'Tourism capital with high cost of living and competitive lending for business investment.',
    topLoanTypes: ['Personal Loans', 'Tourism Investment', 'Business Startup'],
    lenderCount: 30,
    nearbyCities: ['Wanaka', 'Arrowtown', 'Cromwell']
  },

  // Northland Region
  {
    name: 'Whangarei',
    slug: 'whangarei',
    region: 'Northland',
    regionSlug: 'northland',
    population: '58K',
    avgLoanAmount: 'NZ$19,000',
    avgRate: '9.3%',
    avgCreditScore: '665',
    description: 'Far north main city with mix of traditional banking and emerging fintech access.',
    topLoanTypes: ['Personal Loans', 'Vehicle Finance', 'Small Business'],
    lenderCount: 28,
    nearbyCities: ['Kerikeri', 'Kaitaia', 'Dargaville']
  },
  {
    name: 'Kerikeri',
    slug: 'kerikeri',
    region: 'Northland',
    regionSlug: 'northland',
    population: '7K',
    avgLoanAmount: 'NZ$20,000',
    avgRate: '9.2%',
    avgCreditScore: '670',
    description: 'Retirement and tourism town with good banking services and local lenders.',
    topLoanTypes: ['Personal Loans', 'Retirement Finance', 'Tourism'],
    lenderCount: 25,
    nearbyCities: ['Whangarei', 'Paihia', 'Kaitaia']
  },

  // Hawke's Bay Region
  {
    name: 'Napier',
    slug: 'napier',
    region: 'Hawke\'s Bay',
    regionSlug: 'hawkes-bay',
    population: '66K',
    avgLoanAmount: 'NZ$21,000',
    avgRate: '9.0%',
    avgCreditScore: '675',
    description: 'Art Deco city with wine industry and stable lending environment.',
    topLoanTypes: ['Personal Loans', 'Business Expansion', 'Home Renovation'],
    lenderCount: 32,
    nearbyCities: ['Hastings', 'Havelock North', 'Taradale']
  },
  {
    name: 'Hastings',
    slug: 'hastings',
    region: 'Hawke\'s Bay',
    regionSlug: 'hawkes-bay',
    population: '51K',
    avgLoanAmount: 'NZ$20,000',
    avgRate: '9.1%',
    avgCreditScore: '670',
    description: 'Fruit growing hub with agricultural lending and personal credit options.',
    topLoanTypes: ['Personal Loans', 'Agricultural', 'Vehicle Finance'],
    lenderCount: 30,
    nearbyCities: ['Napier', 'Havelock North', 'Waipukurau']
  },

  // Manawatu-Whanganui Region
  {
    name: 'Palmerston North',
    slug: 'palmerston-north',
    region: 'Manawatu-Whanganui',
    regionSlug: 'manawatu-whanganui',
    population: '90K',
    avgLoanAmount: 'NZ$20,000',
    avgRate: '9.1%',
    avgCreditScore: '670',
    description: 'University city and agricultural service center with diverse lending options.',
    topLoanTypes: ['Personal Loans', 'Education', 'Agricultural'],
    lenderCount: 33,
    nearbyCities: ['Feilding', 'Levin', 'Foxton']
  },
  {
    name: 'Whanganui',
    slug: 'whanganui',
    region: 'Manawatu-Whanganui',
    regionSlug: 'manawatu-whanganui',
    population: '43K',
    avgLoanAmount: 'NZ$18,000',
    avgRate: '9.4%',
    avgCreditScore: '660',
    description: 'River city with emerging arts economy and traditional banking services.',
    topLoanTypes: ['Personal Loans', 'Small Business', 'Home Improvement'],
    lenderCount: 28,
    nearbyCities: ['Palmerston North', 'Marton', 'Bulls']
  },

  // Taranaki Region
  {
    name: 'New Plymouth',
    slug: 'new-plymouth',
    region: 'Taranaki',
    regionSlug: 'taranaki',
    population: '86K',
    avgLoanAmount: 'NZ$22,000',
    avgRate: '8.9%',
    avgCreditScore: '675',
    description: 'Energy sector hub with strong local economy and competitive lending rates.',
    topLoanTypes: ['Personal Loans', 'Vehicle Finance', 'Business Loans'],
    lenderCount: 33,
    nearbyCities: ['Stratford', 'Hawera', 'Inglewood']
  },

  // Southland Region
  {
    name: 'Invercargill',
    slug: 'invercargill',
    region: 'Southland',
    regionSlug: 'southland',
    population: '51K',
    avgLoanAmount: 'NZ$20,000',
    avgRate: '9.2%',
    avgCreditScore: '670',
    description: 'Southernmost city with agricultural base and stable banking presence.',
    topLoanTypes: ['Personal Loans', 'Agricultural', 'Vehicle Finance'],
    lenderCount: 28,
    nearbyCities: ['Gore', 'Winton', 'Bluff']
  },

  // Nelson Region
  {
    name: 'Nelson City',
    slug: 'nelson-city',
    region: 'Nelson',
    regionSlug: 'nelson',
    population: '52K',
    avgLoanAmount: 'NZ$22,000',
    avgRate: '8.8%',
    avgCreditScore: '680',
    description: 'Arts and crafts hub with growing economy and good financial services.',
    topLoanTypes: ['Personal Loans', 'Business Startup', 'Home Renovation'],
    lenderCount: 30,
    nearbyCities: ['Richmond', 'Motueka', 'Stoke']
  },

  // Marlborough Region
  {
    name: 'Blenheim',
    slug: 'blenheim',
    region: 'Marlborough',
    regionSlug: 'marlborough',
    population: '31K',
    avgLoanAmount: 'NZ$21,000',
    avgRate: '9.0%',
    avgCreditScore: '675',
    description: 'Wine capital with viticulture economy and established banking sector.',
    topLoanTypes: ['Personal Loans', 'Agricultural', 'Business Expansion'],
    lenderCount: 28,
    nearbyCities: ['Picton', 'Renwick', 'Havelock']
  },

  // Gisborne Region
  {
    name: 'Gisborne City',
    slug: 'gisborne-city',
    region: 'Gisborne',
    regionSlug: 'gisborne',
    population: '38K',
    avgLoanAmount: 'NZ$18,000',
    avgRate: '9.5%',
    avgCreditScore: '660',
    description: 'Easternmost city with wine and forestry sectors, traditional banking services.',
    topLoanTypes: ['Personal Loans', 'Agricultural', 'Small Business'],
    lenderCount: 26,
    nearbyCities: ['Wairoa', 'Ruatoria', 'Tolaga Bay']
  },

  // West Coast Region
  {
    name: 'Greymouth',
    slug: 'greymouth',
    region: 'West Coast',
    regionSlug: 'west-coast',
    population: '10K',
    avgLoanAmount: 'NZ$18,000',
    avgRate: '9.6%',
    avgCreditScore: '655',
    description: 'West coast main town with mining heritage and emerging tourism lending.',
    topLoanTypes: ['Personal Loans', 'Small Business', 'Tourism'],
    lenderCount: 24,
    nearbyCities: ['Hokitika', 'Westport', 'Runanga']
  }
]

// Helper functions
export function getCityBySlug(regionSlug: string, citySlug: string): NewZealandCityInfo | undefined {
  return newzealandCities.find(c => c.regionSlug === regionSlug && c.slug === citySlug)
}

export function getCitiesByRegion(regionSlug: string): NewZealandCityInfo[] {
  return newzealandCities.filter(c => c.regionSlug === regionSlug)
}

export function getAllCitySlugs(): Array<{ region: string; city: string }> {
  return newzealandCities.map(c => ({ region: c.regionSlug, city: c.slug }))
}

export function getNearbyCities(citySlug: string, limit: number = 3): NewZealandCityInfo[] {
  const city = newzealandCities.find(c => c.slug === citySlug)
  if (!city) return []
  
  return newzealandCities
    .filter(c => city.nearbyCities.includes(c.name))
    .slice(0, limit)
}

export function getCitiesByPopulation(): NewZealandCityInfo[] {
  return [...newzealandCities].sort((a, b) => {
    const popA = parseFloat(a.population.replace(/[^\d.]/g, ''))
    const popB = parseFloat(b.population.replace(/[^\d.]/g, ''))
    return popB - popA
  })
}
