import { CityData } from '../types'

export const alaskaCities: CityData[] = [
  {
    name: 'Anchorage',
    state: 'Alaska',
    stateAbbr: 'AK',
    slug: 'anchorage',
    population: '288,000',
    coordinates: { lat: 61.2181, lng: -149.9003 },
    medianIncome: '$87,828',
    medianHomePrice: '$395,000',
    averageLoanAmount: '$19,200',
    popularLoanTypes: ['Home Improvement', 'Major Purchase', 'Emergency Expenses'],
    localEconomy: 'Anchorage is Alaska\'s economic center with oil & gas, military, tourism, and transportation. High costs of living offset by higher incomes and PFD.',
    keyIndustries: ['Oil & Gas', 'Military', 'Tourism', 'Transportation', 'Healthcare'],
    nearbyLenders: 42,
    avgCreditScore: 695
  },
  {
    name: 'Fairbanks',
    state: 'Alaska',
    stateAbbr: 'AK',
    slug: 'fairbanks',
    population: '32,000',
    coordinates: { lat: 64.8378, lng: -147.7164 },
    medianIncome: '$68,500',
    medianHomePrice: '$295,000',
    averageLoanAmount: '$16,800',
    popularLoanTypes: ['Home Heating', 'Vehicle Purchase', 'Home Improvement'],
    localEconomy: 'Fairbanks, interior Alaska city near Arctic Circle, has Fort Wainwright/Eielson AFB military, tourism (Northern Lights), University of Alaska, and mining. High cost of living.',
    keyIndustries: ['Military', 'Tourism', 'Education', 'Mining', 'Government'],
    nearbyLenders: 42,
    avgCreditScore: 682
  },
  {
    name: 'Juneau',
    state: 'Alaska',
    stateAbbr: 'AK',
    slug: 'juneau',
    population: '32,000',
    coordinates: { lat: 58.3019, lng: -134.4197 },
    medianIncome: '$88,300',
    medianHomePrice: '$425,000',
    averageLoanAmount: '$19,500',
    popularLoanTypes: ['Home Improvement', 'Debt Consolidation', 'Major Purchase'],
    localEconomy: 'Juneau, Alaska state capital (no road access), has government, tourism (cruise ships), fishing, and services. High wages, high costs, unique island economy.',
    keyIndustries: ['Government', 'Tourism', 'Fishing', 'Services', 'Healthcare'],
    nearbyLenders: 38,
    avgCreditScore: 695
  }
]
