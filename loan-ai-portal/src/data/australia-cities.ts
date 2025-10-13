/**
 * Major Australian Cities Data for Loan Information
 */

export interface AustraliaCityInfo {
  name: string
  slug: string
  state: string
  stateSlug: string
  population: string
  avgLoanAmount: string
  avgRate: string
  description: string
  localConsiderations: string[]
  popularLenders: string[]
}

export const australiaCities: AustraliaCityInfo[] = [
  // New South Wales
  {
    name: 'Sydney',
    slug: 'sydney',
    state: 'New South Wales',
    stateSlug: 'new-south-wales',
    population: '5.3M',
    avgLoanAmount: 'AU$32,000',
    avgRate: '7.3%',
    description: 'Australia\'s largest city and financial capital with the most competitive loan market and widest range of lenders.',
    localConsiderations: [
      'Highest cost of living in Australia',
      'Most competitive loan rates nationally',
      'Largest concentration of fintech lenders',
      'Strong employment market supports borrowing',
      'High property prices drive consolidation loans'
    ],
    popularLenders: ['Commonwealth Bank', 'Westpac', 'ANZ', 'NAB', 'Latitude Financial', 'MoneyMe', 'Harmoney']
  },
  {
    name: 'Newcastle',
    slug: 'newcastle',
    state: 'New South Wales',
    stateSlug: 'new-south-wales',
    population: '0.32M',
    avgLoanAmount: 'AU$26,000',
    avgRate: '7.8%',
    description: 'Regional NSW hub with growing economy and competitive personal loan market.',
    localConsiderations: [
      'Lower cost of living than Sydney',
      'Strong regional loan availability',
      'Good credit union presence',
      'Mining and industry support local economy',
      'Competitive rates for debt consolidation'
    ],
    popularLenders: ['Greater Bank', 'Newcastle Permanent', 'Commonwealth Bank', 'Westpac', 'Harmoney']
  },
  {
    name: 'Wollongong',
    slug: 'wollongong',
    state: 'New South Wales',
    stateSlug: 'new-south-wales',
    population: '0.30M',
    avgLoanAmount: 'AU$25,000',
    avgRate: '7.9%',
    description: 'Coastal city with diverse economy and accessible personal lending options.',
    localConsiderations: [
      'Moderate cost of living',
      'University town with education loan demand',
      'Strong credit union network',
      'Industrial and service sectors',
      'Growing fintech adoption'
    ],
    popularLenders: ['IMB Bank', 'Community First Credit Union', 'Commonwealth Bank', 'ANZ', 'Latitude']
  },
  // Victoria
  {
    name: 'Melbourne',
    slug: 'melbourne',
    state: 'Victoria',
    stateSlug: 'victoria',
    population: '5.1M',
    avgLoanAmount: 'AU$30,000',
    avgRate: '7.5%',
    description: 'Australia\'s second-largest city with robust financial services and competitive personal loan market.',
    localConsiderations: [
      'High cost of living similar to Sydney',
      'Strong fintech and digital lender presence',
      'Diverse economy supports borrowing',
      'Competitive comparison rates',
      'High demand for consolidation loans'
    ],
    popularLenders: ['Commonwealth Bank', 'Westpac', 'ANZ', 'NAB', 'Bank of Melbourne', 'Wisr', 'SocietyOne']
  },
  {
    name: 'Geelong',
    slug: 'geelong',
    state: 'Victoria',
    stateSlug: 'victoria',
    population: '0.28M',
    avgLoanAmount: 'AU$24,000',
    avgRate: '8.0%',
    description: 'Regional Victorian center with strong manufacturing base and accessible loan market.',
    localConsiderations: [
      'Lower living costs than Melbourne',
      'Good regional bank coverage',
      'Manufacturing sector employment',
      'Credit union strong presence',
      'Vehicle loan demand'
    ],
    popularLenders: ['Geelong Bank', 'BankVic', 'Commonwealth Bank', 'Westpac', 'Latitude']
  },
  // Queensland
  {
    name: 'Brisbane',
    slug: 'brisbane',
    state: 'Queensland',
    stateSlug: 'queensland',
    population: '2.6M',
    avgLoanAmount: 'AU$28,000',
    avgRate: '7.7%',
    description: 'Queensland\'s capital with growing economy and competitive loan market.',
    localConsiderations: [
      'Moderate cost of living',
      'Strong property market drives lending',
      'Growing fintech sector',
      'Tourism industry impact',
      'Good first-home buyer support'
    ],
    popularLenders: ['Suncorp', 'Bank of Queensland', 'Commonwealth Bank', 'Westpac', 'ANZ', 'MoneyMe']
  },
  {
    name: 'Gold Coast',
    slug: 'gold-coast',
    state: 'Queensland',
    stateSlug: 'queensland',
    population: '0.70M',
    avgLoanAmount: 'AU$26,000',
    avgRate: '8.1%',
    description: 'Tourist hub with seasonal economy and diverse personal loan needs.',
    localConsiderations: [
      'Tourism-driven economy',
      'Seasonal employment patterns',
      'High vehicle loan demand',
      'Holiday finance popular',
      'Small business lending active'
    ],
    popularLenders: ['Heritage Bank', 'Suncorp', 'Commonwealth Bank', 'Latitude', 'Harmoney']
  },
  {
    name: 'Sunshine Coast',
    slug: 'sunshine-coast',
    state: 'Queensland',
    stateSlug: 'queensland',
    population: '0.35M',
    avgLoanAmount: 'AU$25,000',
    avgRate: '8.3%',
    description: 'Rapidly growing coastal region with expanding loan market.',
    localConsiderations: [
      'Growing population and economy',
      'Tourism and retirement demographics',
      'Credit union presence',
      'Home improvement loan demand',
      'Competitive regional rates'
    ],
    popularLenders: ['Coastline Credit Union', 'Suncorp', 'Bank of Queensland', 'Commonwealth Bank']
  },
  // Western Australia
  {
    name: 'Perth',
    slug: 'perth',
    state: 'Western Australia',
    stateSlug: 'western-australia',
    population: '2.1M',
    avgLoanAmount: 'AU$31,000',
    avgRate: '7.8%',
    description: 'WA\'s capital with resource-driven economy and strong lending market.',
    localConsiderations: [
      'Mining sector drives high incomes',
      'Isolated market with unique needs',
      'Strong credit union presence',
      'Vehicle loans popular',
      'Debt consolidation demand'
    ],
    popularLenders: ['Bankwest', 'Commonwealth Bank', 'Westpac', 'Credit Union WA', 'Police Credit Union']
  },
  // South Australia
  {
    name: 'Adelaide',
    slug: 'adelaide',
    state: 'South Australia',
    stateSlug: 'south-australia',
    population: '1.4M',
    avgLoanAmount: 'AU$25,000',
    avgRate: '8.3%',
    description: 'SA\'s capital with affordable living and competitive loan options.',
    localConsiderations: [
      'Most affordable major city',
      'Strong credit union network',
      'Defence industry employment',
      'Solar loan demand',
      'Good first-home buyer programs'
    ],
    popularLenders: ['Bank SA', 'Beyond Bank', 'People\'s Choice Credit Union', 'Commonwealth Bank', 'ANZ']
  },
  // ACT
  {
    name: 'Canberra',
    slug: 'canberra',
    state: 'Australian Capital Territory',
    stateSlug: 'australian-capital-territory',
    population: '0.45M',
    avgLoanAmount: 'AU$29,000',
    avgRate: '7.6%',
    description: 'National capital with high-income earners and competitive rates.',
    localConsiderations: [
      'High median income',
      'Stable government employment',
      'Strong education loan market',
      'Low unemployment supports borrowing',
      'Competitive personal loan rates'
    ],
    popularLenders: ['Commonwealth Bank', 'Westpac', 'ANZ', 'Bank First', 'Wisr']
  },
  // Tasmania
  {
    name: 'Hobart',
    slug: 'hobart',
    state: 'Tasmania',
    stateSlug: 'tasmania',
    population: '0.25M',
    avgLoanAmount: 'AU$23,000',
    avgRate: '8.8%',
    description: 'Tasmania\'s capital with growing economy and accessible lending.',
    localConsiderations: [
      'Affordable cost of living',
      'Tourism growth drives economy',
      'Credit union strong presence',
      'Home renovation loans popular',
      'Small business support'
    ],
    popularLenders: ['MyState Bank', 'Commonwealth Bank', 'Westpac', 'ANZ', 'Belong']
  },
  {
    name: 'Launceston',
    slug: 'launceston',
    state: 'Tasmania',
    stateSlug: 'tasmania',
    population: '0.11M',
    avgLoanAmount: 'AU$21,000',
    avgRate: '9.2%',
    description: 'Northern Tasmania hub with regional lending options.',
    localConsiderations: [
      'Regional rates and availability',
      'Agricultural sector loans',
      'Credit union presence',
      'Lower average loan amounts',
      'Tourism industry impact'
    ],
    popularLenders: ['MyState Bank', 'Commonwealth Bank', 'Westpac', 'Local credit unions']
  },
  // Northern Territory
  {
    name: 'Darwin',
    slug: 'darwin',
    state: 'Northern Territory',
    stateSlug: 'northern-territory',
    population: '0.15M',
    avgLoanAmount: 'AU$27,000',
    avgRate: '9.0%',
    description: 'NT capital with unique market conditions and specialized lending.',
    localConsiderations: [
      'High cost of living',
      'Government and mining employment',
      'Limited lender competition',
      'Vehicle loans high demand',
      'Remote area considerations'
    ],
    popularLenders: ['Commonwealth Bank', 'Westpac', 'ANZ', 'Bank of Queensland', 'Credit unions']
  }
]
