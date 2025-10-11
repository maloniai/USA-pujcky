import { CityData } from '../types'

export const newMexicoCities: CityData[] = [
  {
    name: 'Albuquerque',
    state: 'New Mexico',
    stateAbbr: 'NM',
    slug: 'albuquerque',
    population: '564,000',
    coordinates: { lat: 35.0844, lng: -106.6504 },
    medianIncome: '$56,800',
    medianHomePrice: '$295,000',
    averageLoanAmount: '$14,200',
    popularLoanTypes: ['Home Improvement', 'Vehicle Purchase', 'Debt Consolidation'],
    localEconomy: 'Albuquerque, New Mexico largest city, has Kirtland AFB, Sandia National Labs, healthcare, tourism, and film production. Diverse economy with federal presence.',
    keyIndustries: ['Military', 'Research', 'Healthcare', 'Tourism', 'Film Production'],
    nearbyLenders: 92,
    avgCreditScore: 672
  },
  {
    name: 'Las Cruces',
    state: 'New Mexico',
    stateAbbr: 'NM',
    slug: 'las-cruces',
    population: '112,000',
    coordinates: { lat: 32.3199, lng: -106.7637 },
    medianIncome: '$46,200',
    medianHomePrice: '$235,000',
    averageLoanAmount: '$11,600',
    popularLoanTypes: ['Education', 'Vehicle Purchase', 'Home Improvement'],
    localEconomy: 'Las Cruces, southern NM city, has New Mexico State University, White Sands Missile Range, agriculture, and Chile pepper industry. College town with military.',
    keyIndustries: ['Education', 'Military', 'Agriculture', 'Healthcare', 'Services'],
    nearbyLenders: 62,
    avgCreditScore: 665
  }
]
