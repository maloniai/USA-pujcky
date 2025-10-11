import { CityData } from '../types'

export const nebraskaCities: CityData[] = [
  {
    name: 'Omaha',
    state: 'Nebraska',
    stateAbbr: 'NE',
    slug: 'omaha',
    population: '486,000',
    coordinates: { lat: 41.2565, lng: -95.9345 },
    medianIncome: '$62,800',
    medianHomePrice: '$245,000',
    averageLoanAmount: '$15,200',
    popularLoanTypes: ['Home Improvement', 'Debt Consolidation', 'Vehicle Purchase'],
    localEconomy: 'Omaha, Nebraska largest city, has Fortune 500 HQs (Berkshire Hathaway, Union Pacific), finance, insurance, healthcare, and agribusiness. Major business hub.',
    keyIndustries: ['Finance', 'Insurance', 'Transportation', 'Healthcare', 'Agribusiness'],
    nearbyLenders: 96,
    avgCreditScore: 692
  },
  {
    name: 'Lincoln',
    state: 'Nebraska',
    stateAbbr: 'NE',
    slug: 'lincoln',
    population: '293,000',
    coordinates: { lat: 40.8136, lng: -96.7026 },
    medianIncome: '$60,200',
    medianHomePrice: '$255,000',
    averageLoanAmount: '$14,800',
    popularLoanTypes: ['Education', 'Home Improvement', 'Vehicle Purchase'],
    localEconomy: 'Lincoln, Nebraska state capital, has government, University of Nebraska, insurance, manufacturing, and healthcare. Stable capital city with strong education.',
    keyIndustries: ['Government', 'Education', 'Insurance', 'Healthcare', 'Manufacturing'],
    nearbyLenders: 84,
    avgCreditScore: 688
  }
]
