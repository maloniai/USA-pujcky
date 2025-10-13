/**
 * New Zealand Regions Data for Loan Information
 * 16 regions of New Zealand
 */

export interface NewZealandRegionInfo {
  name: string
  slug: string
  population: string
  avgLoanAmount: string
  avgRate: string
  maxLoanAmount: string
  description: string
  regulations: string[]
  majorCities: string[]
  topLoanTypes: string[]
}

export const newzealandRegions: NewZealandRegionInfo[] = [
  {
    name: 'Auckland',
    slug: 'auckland',
    population: '1.7M',
    avgLoanAmount: 'NZ$25,000',
    avgRate: '8.5%',
    maxLoanAmount: 'NZ$100,000',
    description: 'New Zealand\'s largest city and economic hub with the highest concentration of lenders and competitive rates.',
    regulations: [
      'Regulated by Financial Markets Authority (FMA)',
      'Maximum interest rate: No cap, but lenders must comply with responsible lending principles',
      'Credit Contracts and Consumer Finance Act 2003 (CCCFA) applies',
      'Responsible lending obligations require affordability assessments',
      'Licensed lender requirement under Financial Service Providers Register',
      'Credit reporting through Credit Reporting Privacy Code',
      'Consumer protection under Consumer Guarantees Act 1993',
      'Hardship provisions mandatory for borrowers in financial difficulty'
    ],
    majorCities: ['Auckland City', 'Manukau', 'North Shore', 'Waitakere'],
    topLoanTypes: ['Personal Loans', 'Debt Consolidation', 'Home Renovation']
  },
  {
    name: 'Wellington',
    slug: 'wellington',
    population: '543K',
    avgLoanAmount: 'NZ$22,000',
    avgRate: '8.8%',
    maxLoanAmount: 'NZ$80,000',
    description: 'Capital region with strong public sector employment and stable lending market.',
    regulations: [
      'FMA supervision applies',
      'CCCFA responsible lending requirements',
      'Affordability assessment mandatory',
      'Licensed Financial Service Providers',
      'Credit history checks required',
      'Transparent disclosure obligations',
      'Consumer rights protection',
      'Hardship assistance available'
    ],
    majorCities: ['Wellington City', 'Lower Hutt', 'Upper Hutt', 'Porirua'],
    topLoanTypes: ['Personal Loans', 'Vehicle Purchase', 'Education']
  },
  {
    name: 'Canterbury',
    slug: 'canterbury',
    population: '651K',
    avgLoanAmount: 'NZ$23,000',
    avgRate: '8.7%',
    maxLoanAmount: 'NZ$85,000',
    description: 'South Island\'s largest region with growing economy and diverse lending options.',
    regulations: [
      'FMA regulatory oversight',
      'CCCFA compliance required',
      'Responsible lending principles',
      'Registered financial providers only',
      'Credit checks mandatory',
      'Full cost disclosure required',
      'Consumer protection enforced',
      'Fair dealing obligations'
    ],
    majorCities: ['Christchurch', 'Timaru', 'Ashburton', 'Rangiora'],
    topLoanTypes: ['Personal Loans', 'Business Startup', 'Home Improvement']
  },
  {
    name: 'Waikato',
    slug: 'waikato',
    population: '509K',
    avgLoanAmount: 'NZ$21,000',
    avgRate: '9.0%',
    maxLoanAmount: 'NZ$75,000',
    description: 'Agricultural and industrial region with good access to personal credit.',
    regulations: [
      'FMA regulated lending',
      'CCCFA requirements apply',
      'Affordability verification needed',
      'Licensed provider requirement',
      'Credit bureau reporting',
      'Transparent pricing required',
      'Consumer guarantees',
      'Hardship protections'
    ],
    majorCities: ['Hamilton', 'Taupo', 'Tokoroa', 'Cambridge'],
    topLoanTypes: ['Personal Loans', 'Agricultural', 'Vehicle Finance']
  },
  {
    name: 'Bay of Plenty',
    slug: 'bay-of-plenty',
    population: '347K',
    avgLoanAmount: 'NZ$20,000',
    avgRate: '9.2%',
    maxLoanAmount: 'NZ$70,000',
    description: 'Coastal region with tourism and horticulture economy, seasonal lending patterns.',
    regulations: [
      'FMA supervision',
      'CCCFA compliance mandatory',
      'Responsible lending assessment',
      'Registered providers only',
      'Credit scoring required',
      'Full disclosure obligations',
      'Consumer rights enforced',
      'Fair credit practices'
    ],
    majorCities: ['Tauranga', 'Rotorua', 'Whakatane', 'Te Puke'],
    topLoanTypes: ['Personal Loans', 'Tourism Business', 'Seasonal Finance']
  },
  {
    name: 'Otago',
    slug: 'otago',
    population: '249K',
    avgLoanAmount: 'NZ$22,000',
    avgRate: '8.9%',
    maxLoanAmount: 'NZ$80,000',
    description: 'Southern region including Queenstown with strong tourism sector and education hub.',
    regulations: [
      'FMA regulatory framework',
      'CCCFA responsible lending',
      'Affordability checks required',
      'Licensed financial institutions',
      'Credit history assessment',
      'Transparent terms mandatory',
      'Consumer protection laws',
      'Hardship provisions'
    ],
    majorCities: ['Dunedin', 'Queenstown', 'Wanaka', 'Oamaru'],
    topLoanTypes: ['Personal Loans', 'Education', 'Tourism Investment']
  },
  {
    name: 'Northland',
    slug: 'northland',
    population: '197K',
    avgLoanAmount: 'NZ$18,000',
    avgRate: '9.5%',
    maxLoanAmount: 'NZ$60,000',
    description: 'Far north region with emerging fintech access and traditional banking services.',
    regulations: [
      'FMA oversight applies',
      'CCCFA lending standards',
      'Income verification required',
      'Registered lenders only',
      'Credit bureau checks',
      'Cost disclosure required',
      'Consumer guarantees',
      'Fair lending practices'
    ],
    majorCities: ['Whangarei', 'Kerikeri', 'Kaitaia', 'Paihia'],
    topLoanTypes: ['Personal Loans', 'Small Business', 'Agricultural']
  },
  {
    name: 'Hawke\'s Bay',
    slug: 'hawkes-bay',
    population: '179K',
    avgLoanAmount: 'NZ$20,000',
    avgRate: '9.1%',
    maxLoanAmount: 'NZ$70,000',
    description: 'Wine and fruit growing region with stable lending environment.',
    regulations: [
      'FMA regulated',
      'CCCFA compliance',
      'Affordability assessment',
      'Licensed providers',
      'Credit checks required',
      'Full transparency',
      'Consumer protection',
      'Hardship assistance'
    ],
    majorCities: ['Napier', 'Hastings', 'Havelock North', 'Waipukurau'],
    topLoanTypes: ['Personal Loans', 'Agricultural', 'Business Expansion']
  },
  {
    name: 'Manawatu-Whanganui',
    slug: 'manawatu-whanganui',
    population: '253K',
    avgLoanAmount: 'NZ$19,000',
    avgRate: '9.3%',
    maxLoanAmount: 'NZ$65,000',
    description: 'Central North Island region with university town and agricultural base.',
    regulations: [
      'FMA supervision',
      'CCCFA requirements',
      'Responsible lending',
      'Registered providers',
      'Credit assessment',
      'Transparent pricing',
      'Consumer rights',
      'Fair practices'
    ],
    majorCities: ['Palmerston North', 'Whanganui', 'Feilding', 'Levin'],
    topLoanTypes: ['Personal Loans', 'Education', 'Agricultural']
  },
  {
    name: 'Taranaki',
    slug: 'taranaki',
    population: '126K',
    avgLoanAmount: 'NZ$20,000',
    avgRate: '9.2%',
    maxLoanAmount: 'NZ$70,000',
    description: 'Energy and dairy region with strong local economy and banking presence.',
    regulations: [
      'FMA regulated lending',
      'CCCFA compliance',
      'Affordability checks',
      'Licensed institutions',
      'Credit verification',
      'Full disclosure',
      'Consumer protection',
      'Hardship provisions'
    ],
    majorCities: ['New Plymouth', 'Stratford', 'Hawera', 'Waitara'],
    topLoanTypes: ['Personal Loans', 'Vehicle Finance', 'Business Loans']
  },
  {
    name: 'Southland',
    slug: 'southland',
    population: '103K',
    avgLoanAmount: 'NZ$19,000',
    avgRate: '9.4%',
    maxLoanAmount: 'NZ$65,000',
    description: 'Deep south region with agricultural base and stable lending market.',
    regulations: [
      'FMA oversight',
      'CCCFA standards',
      'Income verification',
      'Licensed lenders',
      'Credit checks',
      'Transparent terms',
      'Consumer guarantees',
      'Fair lending'
    ],
    majorCities: ['Invercargill', 'Gore', 'Winton', 'Riverton'],
    topLoanTypes: ['Personal Loans', 'Agricultural', 'Small Business']
  },
  {
    name: 'Nelson',
    slug: 'nelson',
    population: '54K',
    avgLoanAmount: 'NZ$21,000',
    avgRate: '9.0%',
    maxLoanAmount: 'NZ$75,000',
    description: 'Top of South Island region with arts culture and growing economy.',
    regulations: [
      'FMA regulated',
      'CCCFA compliance',
      'Responsible lending',
      'Registered providers',
      'Credit assessment',
      'Full disclosure',
      'Consumer protection',
      'Hardship assistance'
    ],
    majorCities: ['Nelson City', 'Richmond', 'Stoke', 'Tahunanui'],
    topLoanTypes: ['Personal Loans', 'Business Startup', 'Home Renovation']
  },
  {
    name: 'Tasman',
    slug: 'tasman',
    population: '58K',
    avgLoanAmount: 'NZ$20,000',
    avgRate: '9.1%',
    maxLoanAmount: 'NZ$70,000',
    description: 'Picturesque region with tourism and horticulture sectors.',
    regulations: [
      'FMA supervision',
      'CCCFA requirements',
      'Affordability checks',
      'Licensed providers',
      'Credit verification',
      'Transparent pricing',
      'Consumer rights',
      'Fair practices'
    ],
    majorCities: ['Motueka', 'Golden Bay', 'Murchison', 'Tapawera'],
    topLoanTypes: ['Personal Loans', 'Tourism', 'Agricultural']
  },
  {
    name: 'Gisborne',
    slug: 'gisborne',
    population: '52K',
    avgLoanAmount: 'NZ$18,000',
    avgRate: '9.5%',
    maxLoanAmount: 'NZ$60,000',
    description: 'Easternmost region with wine growing and forestry industries.',
    regulations: [
      'FMA regulatory oversight',
      'CCCFA compliance',
      'Income assessment',
      'Registered lenders',
      'Credit checks',
      'Full transparency',
      'Consumer guarantees',
      'Hardship support'
    ],
    majorCities: ['Gisborne City', 'Wairoa', 'Ruatoria', 'Tolaga Bay'],
    topLoanTypes: ['Personal Loans', 'Agricultural', 'Small Business']
  },
  {
    name: 'Marlborough',
    slug: 'marlborough',
    population: '52K',
    avgLoanAmount: 'NZ$21,000',
    avgRate: '9.0%',
    maxLoanAmount: 'NZ$75,000',
    description: 'Wine capital of New Zealand with strong viticulture economy.',
    regulations: [
      'FMA regulated',
      'CCCFA compliance',
      'Responsible lending',
      'Licensed institutions',
      'Credit assessment',
      'Transparent terms',
      'Consumer protection',
      'Fair lending practices'
    ],
    majorCities: ['Blenheim', 'Picton', 'Havelock', 'Renwick'],
    topLoanTypes: ['Personal Loans', 'Agricultural', 'Business Expansion']
  },
  {
    name: 'West Coast',
    slug: 'west-coast',
    population: '33K',
    avgLoanAmount: 'NZ$18,000',
    avgRate: '9.6%',
    maxLoanAmount: 'NZ$60,000',
    description: 'Remote west coast region with mining heritage and emerging tourism.',
    regulations: [
      'FMA supervision',
      'CCCFA requirements',
      'Affordability verification',
      'Registered providers',
      'Credit checks',
      'Full disclosure',
      'Consumer rights',
      'Hardship provisions'
    ],
    majorCities: ['Greymouth', 'Hokitika', 'Westport', 'Reefton'],
    topLoanTypes: ['Personal Loans', 'Small Business', 'Tourism']
  }
]

// Helper functions
export function getRegionBySlug(slug: string): NewZealandRegionInfo | undefined {
  return newzealandRegions.find(r => r.slug === slug)
}

export function getAllRegionSlugs(): string[] {
  return newzealandRegions.map(r => r.slug)
}

export function getRegionsByPopulation(): NewZealandRegionInfo[] {
  return [...newzealandRegions].sort((a, b) => {
    const popA = parseFloat(a.population.replace(/[^\d.]/g, ''))
    const popB = parseFloat(b.population.replace(/[^\d.]/g, ''))
    return popB - popA
  })
}
