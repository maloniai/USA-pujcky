import { CityData } from '../types'

export const mississippiCities: CityData[] = [
  {
    name: 'Jackson',
    state: 'Mississippi',
    stateAbbr: 'MS',
    slug: 'jackson-ms',
    population: '154,000',
    coordinates: { lat: 32.2988, lng: -90.1848 },
    medianIncome: '$42,200',
    medianHomePrice: '$155,000',
    averageLoanAmount: '$10,800',
    popularLoanTypes: ['Debt Consolidation', 'Vehicle Purchase', 'Emergency Expenses'],
    localEconomy: 'Jackson, Mississippi state capital, has government, healthcare, education, and services. Largest MS city with medical corridor.',
    keyIndustries: ['Government', 'Healthcare', 'Education', 'Services', 'Manufacturing'],
    nearbyLenders: 68,
    avgCreditScore: 648
  },
  {
    name: 'Gulfport',
    state: 'Mississippi',
    stateAbbr: 'MS',
    slug: 'gulfport',
    population: '72,000',
    coordinates: { lat: 30.3674, lng: -89.0928 },
    medianIncome: '$48,600',
    medianHomePrice: '$195,000',
    averageLoanAmount: '$11,800',
    popularLoanTypes: ['Home Improvement', 'Debt Consolidation', 'Vehicle Purchase'],
    localEconomy: 'Gulfport, Gulf Coast city, has Seabee naval base, port operations, gaming (casinos), tourism, and shipbuilding. Post-Katrina rebuilt coastal economy.',
    keyIndustries: ['Military', 'Port Operations', 'Gaming', 'Tourism', 'Shipbuilding'],
    nearbyLenders: 58,
    avgCreditScore: 665
  }
]
