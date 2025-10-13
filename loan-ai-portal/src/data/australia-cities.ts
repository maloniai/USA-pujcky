/**
 * Australia Cities Data for Loan Information
 * Major cities across Australian states and territories
 */

export interface AustraliaCityInfo {
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

export const australiaCities: AustraliaCityInfo[] = [
  // New South Wales
  {
    name: 'Sydney',
    slug: 'sydney',
    region: 'New South Wales',
    regionSlug: 'new-south-wales',
    population: '5.3M',
    avgLoanAmount: 'AU$22,000',
    avgRate: '9.2%',
    avgCreditScore: '720',
    description: 'Australia\'s largest city offers the widest selection of lenders with highly competitive personal loan rates and terms.',
    topLoanTypes: ['Personal Loans', 'Debt Consolidation', 'Home Renovation'],
    lenderCount: 48,
    nearbyCities: ['Parramatta', 'Penrith', 'Liverpool']
  },
  {
    name: 'Newcastle',
    slug: 'newcastle',
    region: 'New South Wales',
    regionSlug: 'new-south-wales',
    population: '322,000',
    avgLoanAmount: 'AU$18,500',
    avgRate: '9.8%',
    avgCreditScore: '695',
    description: 'NSW\'s second-largest city with strong lending options from both major banks and regional providers.',
    topLoanTypes: ['Personal Loans', 'Car Loans', 'Medical Loans'],
    lenderCount: 28,
    nearbyCities: ['Lake Macquarie', 'Maitland', 'Port Stephens']
  },
  {
    name: 'Wollongong',
    slug: 'wollongong',
    region: 'New South Wales',
    regionSlug: 'new-south-wales',
    population: '302,000',
    avgLoanAmount: 'AU$17,800',
    avgRate: '9.9%',
    avgCreditScore: '690',
    description: 'Coastal city with access to competitive personal loans from major lenders and credit unions.',
    topLoanTypes: ['Personal Loans', 'Emergency Loans', 'Debt Consolidation'],
    lenderCount: 26,
    nearbyCities: ['Shellharbour', 'Kiama', 'Dapto']
  },
  {
    name: 'Parramatta',
    slug: 'parramatta',
    region: 'New South Wales',
    regionSlug: 'new-south-wales',
    population: '256,000',
    avgLoanAmount: 'AU$19,500',
    avgRate: '9.4%',
    avgCreditScore: '710',
    description: 'Western Sydney hub with extensive lending options and competitive rates from major financial institutions.',
    topLoanTypes: ['Personal Loans', 'Business Loans', 'Education Loans'],
    lenderCount: 35,
    nearbyCities: ['Blacktown', 'Liverpool', 'Penrith']
  },

  // Victoria
  {
    name: 'Melbourne',
    slug: 'melbourne',
    region: 'Victoria',
    regionSlug: 'victoria',
    population: '5.2M',
    avgLoanAmount: 'AU$21,000',
    avgRate: '9.1%',
    avgCreditScore: '718',
    description: 'Victoria\'s capital with diverse lending market, competitive rates, and extensive consumer protections.',
    topLoanTypes: ['Personal Loans', 'Debt Consolidation', 'Car Loans'],
    lenderCount: 46,
    nearbyCities: ['Geelong', 'Ballarat', 'Bendigo']
  },
  {
    name: 'Geelong',
    slug: 'geelong',
    region: 'Victoria',
    regionSlug: 'victoria',
    population: '282,000',
    avgLoanAmount: 'AU$18,200',
    avgRate: '9.5%',
    avgCreditScore: '700',
    description: 'Victoria\'s second-largest city offering competitive personal loans from major banks and regional lenders.',
    topLoanTypes: ['Personal Loans', 'Home Improvement', 'Vehicle Loans'],
    lenderCount: 30,
    nearbyCities: ['Torquay', 'Colac', 'Ballarat']
  },
  {
    name: 'Ballarat',
    slug: 'ballarat',
    region: 'Victoria',
    regionSlug: 'victoria',
    population: '116,000',
    avgLoanAmount: 'AU$16,500',
    avgRate: '10.0%',
    avgCreditScore: '685',
    description: 'Historic regional center with good access to personal loans from banks and credit unions.',
    topLoanTypes: ['Personal Loans', 'Agricultural Loans', 'Medical Loans'],
    lenderCount: 22,
    nearbyCities: ['Bendigo', 'Geelong', 'Ararat']
  },
  {
    name: 'Bendigo',
    slug: 'bendigo',
    region: 'Victoria',
    regionSlug: 'victoria',
    population: '103,000',
    avgLoanAmount: 'AU$16,800',
    avgRate: '9.9%',
    avgCreditScore: '688',
    description: 'Regional Victoria hub with strong local lending presence through Bendigo Bank and other providers.',
    topLoanTypes: ['Personal Loans', 'Small Business Loans', 'Emergency Loans'],
    lenderCount: 24,
    nearbyCities: ['Castlemaine', 'Echuca', 'Ballarat']
  },

  // Queensland
  {
    name: 'Brisbane',
    slug: 'brisbane',
    region: 'Queensland',
    regionSlug: 'queensland',
    population: '2.6M',
    avgLoanAmount: 'AU$19,800',
    avgRate: '9.4%',
    avgCreditScore: '708',
    description: 'Queensland\'s capital offers competitive loan markets with strong presence from all major Australian lenders.',
    topLoanTypes: ['Personal Loans', 'Debt Consolidation', 'Holiday Loans'],
    lenderCount: 42,
    nearbyCities: ['Gold Coast', 'Sunshine Coast', 'Ipswich']
  },
  {
    name: 'Gold Coast',
    slug: 'gold-coast',
    region: 'Queensland',
    regionSlug: 'queensland',
    population: '679,000',
    avgLoanAmount: 'AU$18,900',
    avgRate: '9.6%',
    avgCreditScore: '700',
    description: 'Popular tourist destination with diverse personal loan options from major banks and specialty lenders.',
    topLoanTypes: ['Personal Loans', 'Business Loans', 'Holiday Loans'],
    lenderCount: 36,
    nearbyCities: ['Brisbane', 'Tweed Heads', 'Byron Bay']
  },
  {
    name: 'Sunshine Coast',
    slug: 'sunshine-coast',
    region: 'Queensland',
    regionSlug: 'queensland',
    population: '333,000',
    avgLoanAmount: 'AU$18,200',
    avgRate: '9.9%',
    avgCreditScore: '695',
    description: 'Growing coastal region with good access to personal loans from national and regional lenders.',
    topLoanTypes: ['Personal Loans', 'Home Renovation', 'Vehicle Loans'],
    lenderCount: 28,
    nearbyCities: ['Noosa', 'Caloundra', 'Maroochydore']
  },
  {
    name: 'Townsville',
    slug: 'townsville',
    region: 'Queensland',
    regionSlug: 'queensland',
    population: '180,000',
    avgLoanAmount: 'AU$17,500',
    avgRate: '10.2%',
    avgCreditScore: '685',
    description: 'North Queensland\'s largest city with competitive lending from major banks and local credit unions.',
    topLoanTypes: ['Personal Loans', 'Military Loans', 'Emergency Loans'],
    lenderCount: 24,
    nearbyCities: ['Cairns', 'Mackay', 'Charters Towers']
  },

  // Western Australia
  {
    name: 'Perth',
    slug: 'perth',
    region: 'Western Australia',
    regionSlug: 'western-australia',
    population: '2.2M',
    avgLoanAmount: 'AU$21,500',
    avgRate: '9.6%',
    avgCreditScore: '712',
    description: 'Western Australia\'s capital with competitive loan market driven by mining industry employment.',
    topLoanTypes: ['Personal Loans', 'Mining Industry Loans', 'Vehicle Loans'],
    lenderCount: 38,
    nearbyCities: ['Fremantle', 'Mandurah', 'Joondalup']
  },
  {
    name: 'Mandurah',
    slug: 'mandurah',
    region: 'Western Australia',
    regionSlug: 'western-australia',
    population: '107,000',
    avgLoanAmount: 'AU$17,200',
    avgRate: '10.1%',
    avgCreditScore: '690',
    description: 'Growing coastal city with access to personal loans from major banks and credit unions.',
    topLoanTypes: ['Personal Loans', 'Retirement Loans', 'Home Improvement'],
    lenderCount: 22,
    nearbyCities: ['Perth', 'Rockingham', 'Bunbury']
  },
  {
    name: 'Bunbury',
    slug: 'bunbury',
    region: 'Western Australia',
    regionSlug: 'western-australia',
    population: '75,000',
    avgLoanAmount: 'AU$16,500',
    avgRate: '10.3%',
    avgCreditScore: '680',
    description: 'Regional WA center offering personal loans from major lenders and local financial institutions.',
    topLoanTypes: ['Personal Loans', 'Agricultural Loans', 'Medical Loans'],
    lenderCount: 18,
    nearbyCities: ['Busselton', 'Mandurah', 'Collie']
  },

  // South Australia
  {
    name: 'Adelaide',
    slug: 'adelaide',
    region: 'South Australia',
    regionSlug: 'south-australia',
    population: '1.4M',
    avgLoanAmount: 'AU$18,500',
    avgRate: '9.8%',
    avgCreditScore: '705',
    description: 'South Australia\'s capital with competitive personal loan options from all major Australian lenders.',
    topLoanTypes: ['Personal Loans', 'Small Business Loans', 'Medical Loans'],
    lenderCount: 34,
    nearbyCities: ['Gawler', 'Mount Barker', 'Victor Harbor']
  },
  {
    name: 'Mount Gambier',
    slug: 'mount-gambier',
    region: 'South Australia',
    regionSlug: 'south-australia',
    population: '29,000',
    avgLoanAmount: 'AU$15,500',
    avgRate: '10.8%',
    avgCreditScore: '670',
    description: 'Regional SA city with lending options from banks and local credit cooperatives.',
    topLoanTypes: ['Personal Loans', 'Agricultural Loans', 'Emergency Loans'],
    lenderCount: 14,
    nearbyCities: ['Millicent', 'Portland', 'Naracoorte']
  },

  // Australian Capital Territory
  {
    name: 'Canberra',
    slug: 'canberra',
    region: 'Australian Capital Territory',
    regionSlug: 'australian-capital-territory',
    population: '460,000',
    avgLoanAmount: 'AU$23,000',
    avgRate: '9.0%',
    avgCreditScore: '725',
    description: 'Australia\'s capital with excellent loan rates due to high average incomes and stable employment.',
    topLoanTypes: ['Personal Loans', 'Home Improvement', 'Education Loans'],
    lenderCount: 32,
    nearbyCities: ['Queanbeyan', 'Goulburn', 'Yass']
  },

  // Tasmania
  {
    name: 'Hobart',
    slug: 'hobart',
    region: 'Tasmania',
    regionSlug: 'tasmania',
    population: '253,000',
    avgLoanAmount: 'AU$16,800',
    avgRate: '10.2%',
    avgCreditScore: '692',
    description: 'Tasmania\'s capital offering personal loans from major banks and local credit unions.',
    topLoanTypes: ['Personal Loans', 'Agricultural Loans', 'Emergency Loans'],
    lenderCount: 24,
    nearbyCities: ['Launceston', 'Glenorchy', 'Kingston']
  },
  {
    name: 'Launceston',
    slug: 'launceston',
    region: 'Tasmania',
    regionSlug: 'tasmania',
    population: '87,000',
    avgLoanAmount: 'AU$15,500',
    avgRate: '10.6%',
    avgCreditScore: '682',
    description: 'Northern Tasmania\'s major center with good access to personal loans from regional lenders.',
    topLoanTypes: ['Personal Loans', 'Home Renovation', 'Vehicle Loans'],
    lenderCount: 18,
    nearbyCities: ['Hobart', 'Devonport', 'Burnie']
  },

  // Northern Territory
  {
    name: 'Darwin',
    slug: 'darwin',
    region: 'Northern Territory',
    regionSlug: 'northern-territory',
    population: '148,000',
    avgLoanAmount: 'AU$19,000',
    avgRate: '10.8%',
    avgCreditScore: '695',
    description: 'Northern Territory\'s capital with specialized lenders familiar with remote area lending.',
    topLoanTypes: ['Personal Loans', 'Emergency Loans', 'Vehicle Loans'],
    lenderCount: 20,
    nearbyCities: ['Palmerston', 'Alice Springs', 'Katherine']
  },
  {
    name: 'Alice Springs',
    slug: 'alice-springs',
    region: 'Northern Territory',
    regionSlug: 'northern-territory',
    population: '25,000',
    avgLoanAmount: 'AU$16,000',
    avgRate: '11.5%',
    avgCreditScore: '665',
    description: 'Central Australia hub with lending options from major banks and specialized remote area lenders.',
    topLoanTypes: ['Personal Loans', 'Emergency Loans', 'Vehicle Loans'],
    lenderCount: 12,
    nearbyCities: ['Darwin', 'Tennant Creek', 'Katherine']
  }
]

export function getAustraliaCityBySlug(slug: string): AustraliaCityInfo | undefined {
  return australiaCities.find(city => city.slug === slug)
}

export function getAustraliaCitiesByRegion(regionSlug: string): AustraliaCityInfo[] {
  return australiaCities.filter(city => city.regionSlug === regionSlug)
}
