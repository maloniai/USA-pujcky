import { CityData } from '../types'

export const northCarolinaCities: CityData[] = [
  {
    name: 'Fayetteville',
    state: 'North Carolina',
    stateAbbr: 'NC',
    slug: 'fayetteville',
    population: '211,000',
    coordinates: { lat: 35.0527, lng: -78.8784 },
    medianIncome: '$52,400',
    medianHomePrice: '$215,000',
    averageLoanAmount: '$13,200',
    popularLoanTypes: ['Vehicle Purchase', 'Debt Consolidation', 'Home Improvement'],
    localEconomy: 'Fayetteville, home to Fort Liberty (formerly Fort Bragg), has military, healthcare, education, and services. Major military economy with diverse support services.',
    keyIndustries: ['Military', 'Healthcare', 'Education', 'Retail', 'Services'],
    nearbyLenders: 78,
    avgCreditScore: 668
  },
  {
    name: 'Durham',
    state: 'North Carolina',
    stateAbbr: 'NC',
    slug: 'durham',
    population: '285,000',
    coordinates: { lat: 35.9940, lng: -78.8986 },
    medianIncome: '$66,400',
    medianHomePrice: '$365,000',
    averageLoanAmount: '$16,200',
    popularLoanTypes: ['Education', 'Home Improvement', 'Debt Consolidation'],
    localEconomy: 'Durham, Research Triangle anchor, has Duke University, biotech, healthcare, technology, and research. Premier research and innovation hub.',
    keyIndustries: ['Education', 'Biotechnology', 'Healthcare', 'Research', 'Technology'],
    nearbyLenders: 86,
    avgCreditScore: 690
  },
  {
    name: 'Winston-Salem',
    state: 'North Carolina',
    stateAbbr: 'NC',
    slug: 'winston-salem',
    population: '250,000',
    coordinates: { lat: 36.0999, lng: -80.2442 },
    medianIncome: '$52,800',
    medianHomePrice: '$225,000',
    averageLoanAmount: '$13,200',
    popularLoanTypes: ['Home Improvement', 'Vehicle Purchase', 'Debt Consolidation'],
    localEconomy: 'Winston-Salem, historic tobacco city, has healthcare (Wake Forest Baptist), education, biotech, and manufacturing. Piedmont Triad regional center.',
    keyIndustries: ['Healthcare', 'Education', 'Biotechnology', 'Manufacturing', 'Services'],
    nearbyLenders: 82,
    avgCreditScore: 675
  },
  {
    name: 'Cary',
    state: 'North Carolina',
    stateAbbr: 'NC',
    slug: 'cary',
    population: '178,000',
    coordinates: { lat: 35.7915, lng: -78.7811 },
    medianIncome: '$105,600',
    medianHomePrice: '$485,000',
    averageLoanAmount: '$22,200',
    popularLoanTypes: ['Home Improvement', 'Debt Consolidation', 'Major Purchase'],
    localEconomy: 'Cary, affluent Raleigh suburb in Research Triangle, has technology (SAS HQ), professional services, and master-planned communities. Highly-rated quality of life.',
    keyIndustries: ['Technology', 'Professional Services', 'Healthcare', 'Retail', 'Services'],
    nearbyLenders: 88,
    avgCreditScore: 725
  }
]
