/**
 * Australia Regions Data for Loan Information
 * 8 States and Territories of Australia
 */

export interface AustraliaRegionInfo {
  name: string
  slug: string
  abbreviation: string
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
    abbreviation: 'NSW',
    population: '8.2M',
    avgLoanAmount: 'AU$30,000',
    avgRate: '7.5%',
    maxLoanAmount: 'AU$100,000',
    description: 'The most populous state with Sydney as capital, offering the largest loan market and most competitive rates in Australia.',
    regulations: [
      'Regulated by ASIC (Australian Securities and Investments Commission)',
      'National Consumer Credit Protection Act 2009 compliance',
      'Responsible lending obligations under NCCP',
      'Maximum comparison rate disclosure required',
      'Minimum 28% APR cap for small amount credit contracts (SACC)',
      'Licensed credit provider requirement (ACL)',
      'Hardship provisions mandatory',
      'Privacy Act 1988 compliance for data protection'
    ],
    majorCities: ['Sydney', 'Newcastle', 'Wollongong', 'Central Coast'],
    topLoanTypes: ['Personal Loans', 'Debt Consolidation', 'Home Renovation', 'Car Loans']
  },
  {
    name: 'Victoria',
    slug: 'victoria',
    abbreviation: 'VIC',
    population: '6.7M',
    avgLoanAmount: 'AU$28,000',
    avgRate: '7.8%',
    maxLoanAmount: 'AU$90,000',
    description: 'Home to Melbourne, Victoria has a strong financial services sector with diverse lending options and competitive rates.',
    regulations: [
      'ASIC regulated under national framework',
      'NCCP Act 2009 compliance required',
      'Victorian Consumer Credit laws apply',
      'Responsible lending assessments mandatory',
      'Fee cap for small loans: 20% establishment + 4% monthly',
      'Australian Credit Licence (ACL) required',
      'Clear fee disclosure obligations',
      'Anti-discrimination protections'
    ],
    majorCities: ['Melbourne', 'Geelong', 'Ballarat', 'Bendigo'],
    topLoanTypes: ['Personal Loans', 'Education', 'Medical Expenses', 'Debt Consolidation']
  },
  {
    name: 'Queensland',
    slug: 'queensland',
    abbreviation: 'QLD',
    population: '5.3M',
    avgLoanAmount: 'AU$26,000',
    avgRate: '8.2%',
    maxLoanAmount: 'AU$85,000',
    description: 'Queensland offers diverse lending options across its major cities and regional areas, with growing fintech presence.',
    regulations: [
      'National Credit Code applies',
      'ASIC oversight and enforcement',
      'Responsible lending obligations',
      'Small amount credit contract (SACC) protections',
      'Payday loan restrictions apply',
      'Licensed lender requirements',
      'Cooling-off period rights',
      'Financial hardship protections'
    ],
    majorCities: ['Brisbane', 'Gold Coast', 'Sunshine Coast', 'Townsville'],
    topLoanTypes: ['Personal Loans', 'Holiday Finance', 'Vehicle Loans', 'Wedding Loans']
  },
  {
    name: 'Western Australia',
    slug: 'western-australia',
    abbreviation: 'WA',
    population: '2.8M',
    avgLoanAmount: 'AU$32,000',
    avgRate: '7.9%',
    maxLoanAmount: 'AU$95,000',
    description: 'Resource-rich state with strong economy and competitive personal loan market, particularly in Perth metropolitan area.',
    regulations: [
      'ASIC regulated credit market',
      'National Consumer Credit Protection framework',
      'WA Consumer Credit Act provisions',
      'Mandatory comparison rate disclosure',
      'Small loan fee caps enforced',
      'Credit licensing requirements',
      'Dispute resolution through AFCA',
      'Privacy and data protection standards'
    ],
    majorCities: ['Perth', 'Mandurah', 'Bunbury', 'Rockingham'],
    topLoanTypes: ['Personal Loans', 'Home Improvement', 'Mining Equipment', 'Business Loans']
  },
  {
    name: 'South Australia',
    slug: 'south-australia',
    abbreviation: 'SA',
    population: '1.8M',
    avgLoanAmount: 'AU$24,000',
    avgRate: '8.5%',
    maxLoanAmount: 'AU$75,000',
    description: 'South Australia provides competitive loan options with strong consumer protections and growing digital lending platforms.',
    regulations: [
      'NCCP Act compliance required',
      'ASIC enforcement and monitoring',
      'SA Consumer Credit regulations',
      'Responsible lending standards',
      'Protected earnings for debt recovery',
      'Licensed provider requirements',
      'Hardship variation rights',
      'Fee transparency obligations'
    ],
    majorCities: ['Adelaide', 'Mount Gambier', 'Whyalla', 'Murray Bridge'],
    topLoanTypes: ['Personal Loans', 'Solar Installation', 'Vehicle Finance', 'Education']
  },
  {
    name: 'Australian Capital Territory',
    slug: 'australian-capital-territory',
    abbreviation: 'ACT',
    population: '0.45M',
    avgLoanAmount: 'AU$29,000',
    avgRate: '7.6%',
    maxLoanAmount: 'AU$80,000',
    description: 'The nation\'s capital territory with high income levels and strong loan market supported by government employment.',
    regulations: [
      'National Credit Code applies',
      'ASIC regulated environment',
      'ACT Consumer Credit protections',
      'Responsible lending requirements',
      'Small loan caps and protections',
      'Australian Credit Licence mandatory',
      'AFCA dispute resolution access',
      'Privacy compliance required'
    ],
    majorCities: ['Canberra', 'Queanbeyan', 'Gungahlin', 'Belconnen'],
    topLoanTypes: ['Personal Loans', 'Education', 'Professional Development', 'Debt Consolidation']
  },
  {
    name: 'Tasmania',
    slug: 'tasmania',
    abbreviation: 'TAS',
    population: '0.57M',
    avgLoanAmount: 'AU$22,000',
    avgRate: '9.0%',
    maxLoanAmount: 'AU$70,000',
    description: 'Island state with growing loan market, focusing on personal and small business lending with competitive regional rates.',
    regulations: [
      'National Consumer Credit Protection applies',
      'ASIC regulatory oversight',
      'Tasmanian consumer protections',
      'Responsible lending obligations',
      'Fee disclosure requirements',
      'Credit licence requirements',
      'Hardship assistance provisions',
      'Anti-predatory lending protections'
    ],
    majorCities: ['Hobart', 'Launceston', 'Devonport', 'Burnie'],
    topLoanTypes: ['Personal Loans', 'Agricultural Finance', 'Tourism Business', 'Home Renovation']
  },
  {
    name: 'Northern Territory',
    slug: 'northern-territory',
    abbreviation: 'NT',
    population: '0.25M',
    avgLoanAmount: 'AU$25,000',
    avgRate: '9.5%',
    maxLoanAmount: 'AU$65,000',
    description: 'Territory with unique lending landscape, supporting remote communities with specialized loan products and protections.',
    regulations: [
      'NCCP Act framework applies',
      'ASIC regulated market',
      'NT-specific consumer protections',
      'Indigenous consumer protections',
      'Responsible lending standards',
      'Licensed lender requirements',
      'Community support provisions',
      'Financial counseling access'
    ],
    majorCities: ['Darwin', 'Palmerston', 'Alice Springs', 'Katherine'],
    topLoanTypes: ['Personal Loans', 'Vehicle Finance', 'Emergency Loans', 'Small Business']
  }
]
