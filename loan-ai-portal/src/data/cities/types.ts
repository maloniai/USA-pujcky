export interface CityData {
  name: string
  state: string
  stateAbbr: string
  slug: string
  population: string
  coordinates: {
    lat: number
    lng: number
  }
  medianIncome: string
  medianHomePrice: string
  averageLoanAmount: string
  popularLoanTypes: string[]
  localEconomy: string
  keyIndustries: string[]
  nearbyLenders: number
  avgCreditScore: number
}
