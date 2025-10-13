/**
 * Australia Regions Data for Loan Information
 * 8 States and Territories of Australia
 */

export interface AustraliaRegionInfo {
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

export const australiaRegions: AustraliaRegionInfo[] = [
  {
    name: 'New South Wales',
    slug: 'new-south-wales',
    population: '8.2M',
    avgLoanAmount: 'AU$20,000',
    avgRate: '9.5%',
    maxLoanAmount: 'AU$100,000',
    description: 'Australia\'s most populous state, home to Sydney and offering the largest selection of loan providers with competitive rates.',
    regulations: [
      'Regulated by the Australian Securities and Investments Commission (ASIC)',
      'National Consumer Credit Protection Act 2009 applies',
      'Maximum comparison rate disclosure required',
      'Responsible lending obligations under NCCP',
      'Maximum 48% interest rate cap',
      'No upfront fees for credit assistance',
      'Mandatory hardship provisions',
      'Australian Credit Licence (ACL) required for all lenders'
    ],
    majorCities: ['Sydney', 'Newcastle', 'Wollongong'],
    topLoanTypes: ['Personal Loans', 'Debt Consolidation', 'Home Renovation']
  },
  {
    name: 'Victoria',
    slug: 'victoria',
    population: '6.7M',
    avgLoanAmount: 'AU$19,500',
    avgRate: '9.3%',
    maxLoanAmount: 'AU$100,000',
    description: 'Victoria, centered around Melbourne, offers diverse lending options with strong consumer protections and competitive markets.',
    regulations: [
      'ASIC regulated with additional Victorian consumer protections',
      'National Credit Code compliance mandatory',
      'Interest rate cap of 48% per annum',
      '14-day cooling-off period for credit contracts',
      'Comparison rate disclosure required',
      'Maximum fees and charges regulated',
      'Responsible lending assessments mandatory',
      'Consumer Action Law Centre provides additional protections'
    ],
    majorCities: ['Melbourne', 'Geelong', 'Ballarat'],
    topLoanTypes: ['Personal Loans', 'Car Loans', 'Debt Consolidation']
  },
  {
    name: 'Queensland',
    slug: 'queensland',
    population: '5.3M',
    avgLoanAmount: 'AU$18,500',
    avgRate: '9.7%',
    maxLoanAmount: 'AU$100,000',
    description: 'Queensland\'s growing economy and tourism sector support a robust personal lending market across the Sunshine State.',
    regulations: [
      'ASIC regulated under National Credit framework',
      '48% maximum interest rate cap',
      'Responsible lending obligations apply',
      'Small amount credit contracts (SACCs) restrictions',
      'Mandatory credit checks and affordability assessments',
      'Protected earnings amount for debt recovery',
      'Queensland Office of Fair Trading oversight',
      'Consumer credit protections under NCCP Act'
    ],
    majorCities: ['Brisbane', 'Gold Coast', 'Sunshine Coast'],
    topLoanTypes: ['Personal Loans', 'Holiday Loans', 'Debt Consolidation']
  },
  {
    name: 'Western Australia',
    slug: 'western-australia',
    population: '2.8M',
    avgLoanAmount: 'AU$21,000',
    avgRate: '9.8%',
    maxLoanAmount: 'AU$100,000',
    description: 'Western Australia\'s mining-driven economy supports competitive loan products, particularly in Perth and regional centers.',
    regulations: [
      'ASIC National Credit regulation applies',
      'Interest rate cap at 48% per annum',
      'Consumer Protection WA additional oversight',
      'Responsible lending requirements',
      'Pre-contractual disclosure requirements',
      'Hardship provisions mandatory',
      'Ban on unsolicited credit increases',
      'Financial counselling services accessible'
    ],
    majorCities: ['Perth', 'Mandurah', 'Bunbury'],
    topLoanTypes: ['Personal Loans', 'Mining Industry Loans', 'Vehicle Loans']
  },
  {
    name: 'South Australia',
    slug: 'south-australia',
    population: '1.8M',
    avgLoanAmount: 'AU$17,500',
    avgRate: '10.1%',
    maxLoanAmount: 'AU$100,000',
    description: 'South Australia offers competitive personal loan products with strong regulatory protections for borrowers in Adelaide and beyond.',
    regulations: [
      'ASIC regulation under National Credit Code',
      '48% maximum interest rate',
      'CBS Credit Bureau checks mandatory',
      'Responsible lending obligations',
      'Consumer and Business Services SA oversight',
      'Maximum fees and charges regulated',
      'Cooling-off period rights',
      'Financial hardship assistance required'
    ],
    majorCities: ['Adelaide', 'Mount Gambier', 'Whyalla'],
    topLoanTypes: ['Personal Loans', 'Small Business Loans', 'Medical Loans']
  },
  {
    name: 'Australian Capital Territory',
    slug: 'australian-capital-territory',
    population: '460,000',
    avgLoanAmount: 'AU$22,000',
    avgRate: '9.2%',
    maxLoanAmount: 'AU$100,000',
    description: 'The ACT, home to Canberra, offers competitive loan rates due to higher average incomes and stable government employment.',
    regulations: [
      'ASIC National Credit Protection applies',
      'Interest rate cap of 48% annually',
      'ACT Office of Regulatory Services oversight',
      'Responsible lending requirements strict',
      'Consumer credit protections enhanced',
      'Mandatory comparison rate disclosure',
      'Protected earnings provisions',
      'Access to free financial counselling'
    ],
    majorCities: ['Canberra'],
    topLoanTypes: ['Personal Loans', 'Home Improvement', 'Education Loans']
  },
  {
    name: 'Tasmania',
    slug: 'tasmania',
    population: '571,000',
    avgLoanAmount: 'AU$16,000',
    avgRate: '10.5%',
    maxLoanAmount: 'AU$80,000',
    description: 'Tasmania\'s smaller market offers personal loans with competitive options available through both local and national lenders.',
    regulations: [
      'ASIC National Credit regulation',
      '48% interest rate cap applies',
      'Consumer Affairs Tasmania oversight',
      'Responsible lending obligations',
      'Small loan protections enhanced',
      'Hardship provisions mandatory',
      'Credit check requirements',
      'Community sector support available'
    ],
    majorCities: ['Hobart', 'Launceston'],
    topLoanTypes: ['Personal Loans', 'Agricultural Loans', 'Emergency Loans']
  },
  {
    name: 'Northern Territory',
    slug: 'northern-territory',
    population: '250,000',
    avgLoanAmount: 'AU$17,500',
    avgRate: '11.2%',
    maxLoanAmount: 'AU$75,000',
    description: 'The Northern Territory offers personal loan options through specialized lenders familiar with remote and regional lending challenges.',
    regulations: [
      'ASIC National Consumer Credit framework',
      'Interest rate cap 48% per annum',
      'Northern Territory Consumer Affairs regulation',
      'Responsible lending mandatory',
      'Indigenous consumer protections',
      'Remote area lending considerations',
      'Hardship and financial counselling access',
      'Protected earnings safeguards'
    ],
    majorCities: ['Darwin', 'Alice Springs'],
    topLoanTypes: ['Personal Loans', 'Emergency Loans', 'Vehicle Loans']
  }
]

export function getAustraliaRegionBySlug(slug: string): AustraliaRegionInfo | undefined {
  return australiaRegions.find(region => region.slug === slug)
}
