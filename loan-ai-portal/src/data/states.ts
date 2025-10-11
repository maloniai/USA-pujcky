// US States data for loan information
export interface StateInfo {
  name: string
  slug: string
  abbreviation: string
  population: string
  avgLoanAmount: string
  avgRate: string
  maxLoanAmount: string
  region: 'Northeast' | 'Southeast' | 'Midwest' | 'Southwest' | 'West'
  description: string
  regulations: string[]
  popularCities: string[]
}

export const stateRegions = {
  Northeast: ['Connecticut', 'Maine', 'Massachusetts', 'New Hampshire', 'Rhode Island', 'Vermont', 'New Jersey', 'New York', 'Pennsylvania'],
  Southeast: ['Delaware', 'Florida', 'Georgia', 'Maryland', 'North Carolina', 'South Carolina', 'Virginia', 'West Virginia', 'Alabama', 'Kentucky', 'Mississippi', 'Tennessee', 'Arkansas', 'Louisiana'],
  Midwest: ['Illinois', 'Indiana', 'Michigan', 'Ohio', 'Wisconsin', 'Iowa', 'Kansas', 'Minnesota', 'Missouri', 'Nebraska', 'North Dakota', 'South Dakota'],
  Southwest: ['Arizona', 'New Mexico', 'Oklahoma', 'Texas'],
  West: ['Alaska', 'California', 'Colorado', 'Hawaii', 'Idaho', 'Montana', 'Nevada', 'Oregon', 'Utah', 'Washington', 'Wyoming']
}

export const usStates: StateInfo[] = [
  {
    name: 'Alabama',
    slug: 'alabama',
    abbreviation: 'AL',
    population: '5.0M',
    avgLoanAmount: '$15,000',
    avgRate: '10.5%',
    maxLoanAmount: '$50,000',
    region: 'Southeast',
    description: 'Alabama offers competitive personal loan rates with flexible terms for residents.',
    regulations: ['Consumer Credit Act applies', 'Max APR: 36% for most lenders', 'Loan amounts up to $50,000'],
    popularCities: ['Birmingham', 'Montgomery', 'Mobile', 'Huntsville']
  },
  {
    name: 'Alaska',
    slug: 'alaska',
    abbreviation: 'AK',
    population: '730K',
    avgLoanAmount: '$18,000',
    avgRate: '11.0%',
    maxLoanAmount: '$50,000',
    region: 'West',
    description: 'Alaska residents have access to personal loans with unique state protections.',
    regulations: ['State-regulated lending laws', 'Consumer protection standards', 'Special provisions for remote areas'],
    popularCities: ['Anchorage', 'Fairbanks', 'Juneau']
  },
  {
    name: 'Arizona',
    slug: 'arizona',
    abbreviation: 'AZ',
    population: '7.4M',
    avgLoanAmount: '$16,000',
    avgRate: '9.8%',
    maxLoanAmount: '$75,000',
    region: 'Southwest',
    description: 'Arizona provides diverse lending options with competitive rates for personal loans.',
    regulations: ['Arizona Revised Statutes govern loans', 'Interest rate caps apply', 'Licensed lender requirements'],
    popularCities: ['Phoenix', 'Tucson', 'Mesa', 'Scottsdale']
  },
  {
    name: 'Arkansas',
    slug: 'arkansas',
    abbreviation: 'AR',
    population: '3.0M',
    avgLoanAmount: '$14,000',
    avgRate: '11.2%',
    maxLoanAmount: '$45,000',
    region: 'Southeast',
    description: 'Arkansas offers personal loans with state-specific consumer protections.',
    regulations: ['Arkansas Constitution limits rates', 'Check Cashers Act applies', 'Lending license required'],
    popularCities: ['Little Rock', 'Fort Smith', 'Fayetteville']
  },
  {
    name: 'California',
    slug: 'california',
    abbreviation: 'CA',
    population: '39.2M',
    avgLoanAmount: '$20,000',
    avgRate: '8.5%',
    maxLoanAmount: '$100,000',
    region: 'West',
    description: 'California offers some of the most competitive personal loan rates in the nation with extensive consumer protections.',
    regulations: ['California Financing Law applies', 'Strong consumer protection laws', 'Licensed lender requirements'],
    popularCities: ['Los Angeles', 'San Francisco', 'San Diego', 'San Jose']
  },
  {
    name: 'Colorado',
    slug: 'colorado',
    abbreviation: 'CO',
    population: '5.8M',
    avgLoanAmount: '$17,000',
    avgRate: '9.2%',
    maxLoanAmount: '$75,000',
    region: 'West',
    description: 'Colorado provides flexible personal loan options with reasonable interest rates.',
    regulations: ['Uniform Consumer Credit Code', 'Rate limitations apply', 'Disclosure requirements'],
    popularCities: ['Denver', 'Colorado Springs', 'Aurora', 'Boulder']
  },
  {
    name: 'Connecticut',
    slug: 'connecticut',
    abbreviation: 'CT',
    population: '3.6M',
    avgLoanAmount: '$18,500',
    avgRate: '9.0%',
    maxLoanAmount: '$80,000',
    region: 'Northeast',
    description: 'Connecticut offers competitive loan rates with strong consumer protection laws.',
    regulations: ['Banking Department oversight', 'Interest rate caps', 'Licensing requirements'],
    popularCities: ['Hartford', 'New Haven', 'Stamford', 'Bridgeport']
  },
  {
    name: 'Delaware',
    slug: 'delaware',
    abbreviation: 'DE',
    population: '1.0M',
    avgLoanAmount: '$16,500',
    avgRate: '9.5%',
    maxLoanAmount: '$70,000',
    region: 'Southeast',
    description: 'Delaware provides accessible personal loans with favorable terms.',
    regulations: ['State Bank Commissioner oversight', 'Consumer protection laws', 'Disclosure standards'],
    popularCities: ['Wilmington', 'Dover', 'Newark']
  },
  {
    name: 'Florida',
    slug: 'florida',
    abbreviation: 'FL',
    population: '22.2M',
    avgLoanAmount: '$17,500',
    avgRate: '9.3%',
    maxLoanAmount: '$85,000',
    region: 'Southeast',
    description: 'Florida offers diverse personal loan options with competitive rates and flexible terms.',
    regulations: ['Florida Consumer Finance Act', 'Office of Financial Regulation oversight', 'Rate disclosure requirements'],
    popularCities: ['Miami', 'Orlando', 'Tampa', 'Jacksonville']
  },
  {
    name: 'Georgia',
    slug: 'georgia',
    abbreviation: 'GA',
    population: '10.9M',
    avgLoanAmount: '$16,000',
    avgRate: '9.8%',
    maxLoanAmount: '$75,000',
    region: 'Southeast',
    description: 'Georgia provides competitive personal loan options with state oversight.',
    regulations: ['Industrial Loan Act governs loans', 'Department of Banking supervision', 'Interest rate limitations'],
    popularCities: ['Atlanta', 'Savannah', 'Augusta', 'Columbus']
  },
  {
    name: 'Hawaii',
    slug: 'hawaii',
    abbreviation: 'HI',
    population: '1.4M',
    avgLoanAmount: '$19,000',
    avgRate: '10.0%',
    maxLoanAmount: '$70,000',
    region: 'West',
    description: 'Hawaii offers personal loans with unique island state considerations.',
    regulations: ['Hawaii Revised Statutes apply', 'Consumer protection measures', 'Licensed lender requirements'],
    popularCities: ['Honolulu', 'Pearl City', 'Hilo']
  },
  {
    name: 'Idaho',
    slug: 'idaho',
    abbreviation: 'ID',
    population: '1.9M',
    avgLoanAmount: '$15,500',
    avgRate: '10.2%',
    maxLoanAmount: '$60,000',
    region: 'West',
    description: 'Idaho provides accessible personal loans with competitive terms.',
    regulations: ['Idaho Credit Code applies', 'Department of Finance oversight', 'Rate limitations'],
    popularCities: ['Boise', 'Meridian', 'Nampa', 'Idaho Falls']
  },
  {
    name: 'Illinois',
    slug: 'illinois',
    abbreviation: 'IL',
    population: '12.6M',
    avgLoanAmount: '$17,000',
    avgRate: '9.4%',
    maxLoanAmount: '$80,000',
    region: 'Midwest',
    description: 'Illinois offers competitive personal loan rates with strong consumer protections.',
    regulations: ['Consumer Installment Loan Act', 'Department of Financial Regulation', 'Rate caps apply'],
    popularCities: ['Chicago', 'Aurora', 'Naperville', 'Rockford']
  },
  {
    name: 'Indiana',
    slug: 'indiana',
    abbreviation: 'IN',
    population: '6.8M',
    avgLoanAmount: '$15,500',
    avgRate: '10.0%',
    maxLoanAmount: '$65,000',
    region: 'Midwest',
    description: 'Indiana provides flexible personal loan options with reasonable rates.',
    regulations: ['Uniform Consumer Credit Code', 'Department of Financial Institutions', 'Licensing requirements'],
    popularCities: ['Indianapolis', 'Fort Wayne', 'Evansville']
  },
  {
    name: 'Iowa',
    slug: 'iowa',
    abbreviation: 'IA',
    population: '3.2M',
    avgLoanAmount: '$14,500',
    avgRate: '10.3%',
    maxLoanAmount: '$55,000',
    region: 'Midwest',
    description: 'Iowa offers personal loans with competitive rates and consumer protections.',
    regulations: ['Iowa Consumer Credit Code', 'Banking Division oversight', 'Interest rate caps'],
    popularCities: ['Des Moines', 'Cedar Rapids', 'Davenport']
  },
  {
    name: 'Kansas',
    slug: 'kansas',
    abbreviation: 'KS',
    population: '2.9M',
    avgLoanAmount: '$14,800',
    avgRate: '10.1%',
    maxLoanAmount: '$60,000',
    region: 'Midwest',
    description: 'Kansas provides accessible personal loans with state oversight.',
    regulations: ['Kansas Consumer Credit Code', 'Office of the State Bank Commissioner', 'Rate limitations'],
    popularCities: ['Wichita', 'Overland Park', 'Kansas City']
  },
  {
    name: 'Kentucky',
    slug: 'kentucky',
    abbreviation: 'KY',
    population: '4.5M',
    avgLoanAmount: '$15,000',
    avgRate: '10.5%',
    maxLoanAmount: '$55,000',
    region: 'Southeast',
    description: 'Kentucky offers personal loans with flexible terms and state protections.',
    regulations: ['Kentucky Revised Statutes govern loans', 'Department of Financial Institutions', 'Consumer protection laws'],
    popularCities: ['Louisville', 'Lexington', 'Bowling Green']
  },
  {
    name: 'Louisiana',
    slug: 'louisiana',
    abbreviation: 'LA',
    population: '4.6M',
    avgLoanAmount: '$15,500',
    avgRate: '10.8%',
    maxLoanAmount: '$60,000',
    region: 'Southeast',
    description: 'Louisiana provides personal loan options with state regulatory oversight.',
    regulations: ['Louisiana Consumer Credit Law', 'Office of Financial Institutions', 'Rate disclosure requirements'],
    popularCities: ['New Orleans', 'Baton Rouge', 'Shreveport']
  },
  {
    name: 'Maine',
    slug: 'maine',
    abbreviation: 'ME',
    population: '1.4M',
    avgLoanAmount: '$16,000',
    avgRate: '9.9%',
    maxLoanAmount: '$65,000',
    region: 'Northeast',
    description: 'Maine offers competitive personal loan rates with consumer protections.',
    regulations: ['Maine Consumer Credit Code', 'Bureau of Financial Institutions', 'Interest rate caps'],
    popularCities: ['Portland', 'Lewiston', 'Bangor']
  },
  {
    name: 'Maryland',
    slug: 'maryland',
    abbreviation: 'MD',
    population: '6.2M',
    avgLoanAmount: '$18,000',
    avgRate: '9.1%',
    maxLoanAmount: '$85,000',
    region: 'Southeast',
    description: 'Maryland provides diverse personal loan options with competitive rates.',
    regulations: ['Commercial Law Article governs loans', 'Commissioner of Financial Regulation', 'Strong consumer protections'],
    popularCities: ['Baltimore', 'Columbia', 'Silver Spring']
  },
  {
    name: 'Massachusetts',
    slug: 'massachusetts',
    abbreviation: 'MA',
    population: '7.0M',
    avgLoanAmount: '$19,000',
    avgRate: '8.8%',
    maxLoanAmount: '$90,000',
    region: 'Northeast',
    description: 'Massachusetts offers competitive personal loan rates with strong consumer laws.',
    regulations: ['Division of Banks oversight', 'Truth in Lending Act compliance', 'Rate limitations apply'],
    popularCities: ['Boston', 'Worcester', 'Springfield', 'Cambridge']
  },
  {
    name: 'Michigan',
    slug: 'michigan',
    abbreviation: 'MI',
    population: '10.0M',
    avgLoanAmount: '$16,500',
    avgRate: '9.6%',
    maxLoanAmount: '$75,000',
    region: 'Midwest',
    description: 'Michigan provides accessible personal loans with reasonable interest rates.',
    regulations: ['Regulatory Loan Act applies', 'Department of Insurance and Financial Services', 'Licensing requirements'],
    popularCities: ['Detroit', 'Grand Rapids', 'Warren', 'Ann Arbor']
  },
  {
    name: 'Minnesota',
    slug: 'minnesota',
    abbreviation: 'MN',
    population: '5.7M',
    avgLoanAmount: '$17,000',
    avgRate: '9.3%',
    maxLoanAmount: '$75,000',
    region: 'Midwest',
    description: 'Minnesota offers competitive personal loan options with consumer protections.',
    regulations: ['Minnesota Statutes govern loans', 'Department of Commerce oversight', 'Interest rate caps'],
    popularCities: ['Minneapolis', 'St. Paul', 'Rochester', 'Duluth']
  },
  {
    name: 'Mississippi',
    slug: 'mississippi',
    abbreviation: 'MS',
    population: '2.9M',
    avgLoanAmount: '$14,000',
    avgRate: '11.0%',
    maxLoanAmount: '$50,000',
    region: 'Southeast',
    description: 'Mississippi provides personal loans with state regulatory oversight.',
    regulations: ['Small Loan Privilege Tax Law', 'Department of Banking oversight', 'Rate limitations'],
    popularCities: ['Jackson', 'Gulfport', 'Southaven']
  },
  {
    name: 'Missouri',
    slug: 'missouri',
    abbreviation: 'MO',
    population: '6.2M',
    avgLoanAmount: '$15,500',
    avgRate: '10.0%',
    maxLoanAmount: '$65,000',
    region: 'Midwest',
    description: 'Missouri offers flexible personal loan options with competitive terms.',
    regulations: ['Missouri Revised Statutes apply', 'Division of Finance regulation', 'Consumer protection laws'],
    popularCities: ['Kansas City', 'St. Louis', 'Springfield', 'Columbia']
  },
  {
    name: 'Montana',
    slug: 'montana',
    abbreviation: 'MT',
    population: '1.1M',
    avgLoanAmount: '$15,000',
    avgRate: '10.4%',
    maxLoanAmount: '$55,000',
    region: 'West',
    description: 'Montana provides personal loans with state oversight and protections.',
    regulations: ['Montana Code Annotated governs loans', 'Division of Banking oversight', 'Rate caps apply'],
    popularCities: ['Billings', 'Missoula', 'Great Falls']
  },
  {
    name: 'Nebraska',
    slug: 'nebraska',
    abbreviation: 'NE',
    population: '2.0M',
    avgLoanAmount: '$14,500',
    avgRate: '10.2%',
    maxLoanAmount: '$60,000',
    region: 'Midwest',
    description: 'Nebraska offers competitive personal loan rates with consumer protections.',
    regulations: ['Nebraska Installment Loan Act', 'Department of Banking oversight', 'Interest rate limitations'],
    popularCities: ['Omaha', 'Lincoln', 'Bellevue']
  },
  {
    name: 'Nevada',
    slug: 'nevada',
    abbreviation: 'NV',
    population: '3.2M',
    avgLoanAmount: '$17,500',
    avgRate: '9.7%',
    maxLoanAmount: '$80,000',
    region: 'West',
    description: 'Nevada provides diverse personal loan options with flexible terms.',
    regulations: ['Nevada Revised Statutes apply', 'Financial Institutions Division', 'Licensing requirements'],
    popularCities: ['Las Vegas', 'Henderson', 'Reno', 'Carson City']
  },
  {
    name: 'New Hampshire',
    slug: 'new-hampshire',
    abbreviation: 'NH',
    population: '1.4M',
    avgLoanAmount: '$17,000',
    avgRate: '9.5%',
    maxLoanAmount: '$70,000',
    region: 'Northeast',
    description: 'New Hampshire offers competitive personal loans with state protections.',
    regulations: ['Banking Department oversight', 'Small Loan Act applies', 'Consumer protection standards'],
    popularCities: ['Manchester', 'Nashua', 'Concord']
  },
  {
    name: 'New Jersey',
    slug: 'new-jersey',
    abbreviation: 'NJ',
    population: '9.3M',
    avgLoanAmount: '$18,500',
    avgRate: '8.9%',
    maxLoanAmount: '$85,000',
    region: 'Northeast',
    description: 'New Jersey provides competitive personal loan options with strong regulations.',
    regulations: ['New Jersey Consumer Loan Act', 'Department of Banking oversight', 'Rate limitations'],
    popularCities: ['Newark', 'Jersey City', 'Paterson', 'Elizabeth']
  },
  {
    name: 'New Mexico',
    slug: 'new-mexico',
    abbreviation: 'NM',
    population: '2.1M',
    avgLoanAmount: '$15,500',
    avgRate: '10.3%',
    maxLoanAmount: '$60,000',
    region: 'Southwest',
    description: 'New Mexico offers personal loans with state oversight and protections.',
    regulations: ['Small Loan Act applies', 'Financial Institutions Division', 'Consumer protection laws'],
    popularCities: ['Albuquerque', 'Las Cruces', 'Santa Fe']
  },
  {
    name: 'New York',
    slug: 'new-york',
    abbreviation: 'NY',
    population: '19.5M',
    avgLoanAmount: '$20,000',
    avgRate: '8.6%',
    maxLoanAmount: '$100,000',
    region: 'Northeast',
    description: 'New York offers competitive personal loan rates with comprehensive consumer protections.',
    regulations: ['Banking Law governs loans', 'Department of Financial Services oversight', 'Usury laws apply'],
    popularCities: ['New York City', 'Buffalo', 'Rochester', 'Albany']
  },
  {
    name: 'North Carolina',
    slug: 'north-carolina',
    abbreviation: 'NC',
    population: '10.7M',
    avgLoanAmount: '$16,500',
    avgRate: '9.5%',
    maxLoanAmount: '$75,000',
    region: 'Southeast',
    description: 'North Carolina provides diverse personal loan options with competitive rates.',
    regulations: ['Consumer Finance Act applies', 'Commissioner of Banks oversight', 'Rate caps in place'],
    popularCities: ['Charlotte', 'Raleigh', 'Greensboro', 'Durham']
  },
  {
    name: 'North Dakota',
    slug: 'north-dakota',
    abbreviation: 'ND',
    population: '779K',
    avgLoanAmount: '$14,000',
    avgRate: '10.5%',
    maxLoanAmount: '$50,000',
    region: 'Midwest',
    description: 'North Dakota offers personal loans with state regulatory oversight.',
    regulations: ['Money Broker Act applies', 'Department of Financial Institutions', 'Consumer protections'],
    popularCities: ['Fargo', 'Bismarck', 'Grand Forks']
  },
  {
    name: 'Ohio',
    slug: 'ohio',
    abbreviation: 'OH',
    population: '11.8M',
    avgLoanAmount: '$16,000',
    avgRate: '9.7%',
    maxLoanAmount: '$75,000',
    region: 'Midwest',
    description: 'Ohio provides competitive personal loan options with consumer protections.',
    regulations: ['Short Term Loan Act', 'Division of Financial Institutions', 'Interest rate limitations'],
    popularCities: ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo']
  },
  {
    name: 'Oklahoma',
    slug: 'oklahoma',
    abbreviation: 'OK',
    population: '4.0M',
    avgLoanAmount: '$15,000',
    avgRate: '10.4%',
    maxLoanAmount: '$60,000',
    region: 'Southwest',
    description: 'Oklahoma offers flexible personal loan terms with state oversight.',
    regulations: ['Consumer Credit Code applies', 'Department of Consumer Credit', 'Licensing requirements'],
    popularCities: ['Oklahoma City', 'Tulsa', 'Norman']
  },
  {
    name: 'Oregon',
    slug: 'oregon',
    abbreviation: 'OR',
    population: '4.2M',
    avgLoanAmount: '$17,500',
    avgRate: '9.2%',
    maxLoanAmount: '$80,000',
    region: 'West',
    description: 'Oregon provides competitive personal loans with strong consumer protections.',
    regulations: ['Consumer Finance Act', 'Division of Financial Regulation', 'Rate caps apply'],
    popularCities: ['Portland', 'Salem', 'Eugene', 'Gresham']
  },
  {
    name: 'Pennsylvania',
    slug: 'pennsylvania',
    abbreviation: 'PA',
    population: '13.0M',
    avgLoanAmount: '$17,000',
    avgRate: '9.4%',
    maxLoanAmount: '$80,000',
    region: 'Northeast',
    description: 'Pennsylvania offers diverse personal loan options with competitive rates.',
    regulations: ['Consumer Discount Company Act', 'Department of Banking oversight', 'Interest rate caps'],
    popularCities: ['Philadelphia', 'Pittsburgh', 'Allentown', 'Erie']
  },
  {
    name: 'Rhode Island',
    slug: 'rhode-island',
    abbreviation: 'RI',
    population: '1.1M',
    avgLoanAmount: '$16,500',
    avgRate: '9.6%',
    maxLoanAmount: '$70,000',
    region: 'Northeast',
    description: 'Rhode Island provides personal loans with state protections and oversight.',
    regulations: ['Small Loan Act applies', 'Department of Business Regulation', 'Rate limitations'],
    popularCities: ['Providence', 'Warwick', 'Cranston']
  },
  {
    name: 'South Carolina',
    slug: 'south-carolina',
    abbreviation: 'SC',
    population: '5.3M',
    avgLoanAmount: '$15,500',
    avgRate: '10.0%',
    maxLoanAmount: '$65,000',
    region: 'Southeast',
    description: 'South Carolina offers competitive personal loan rates with state oversight.',
    regulations: ['Consumer Protection Code', 'Board of Financial Institutions', 'Consumer safeguards'],
    popularCities: ['Charleston', 'Columbia', 'Greenville']
  },
  {
    name: 'South Dakota',
    slug: 'south-dakota',
    abbreviation: 'SD',
    population: '887K',
    avgLoanAmount: '$14,500',
    avgRate: '10.3%',
    maxLoanAmount: '$55,000',
    region: 'Midwest',
    description: 'South Dakota provides personal loans with flexible terms and regulations.',
    regulations: ['Division of Banking oversight', 'Licensed lender requirements', 'Disclosure standards'],
    popularCities: ['Sioux Falls', 'Rapid City', 'Aberdeen']
  },
  {
    name: 'Tennessee',
    slug: 'tennessee',
    abbreviation: 'TN',
    population: '7.1M',
    avgLoanAmount: '$15,500',
    avgRate: '10.1%',
    maxLoanAmount: '$65,000',
    region: 'Southeast',
    description: 'Tennessee offers personal loans with competitive rates and state protections.',
    regulations: ['Consumer Loan Act applies', 'Department of Financial Institutions', 'Rate caps in place'],
    popularCities: ['Nashville', 'Memphis', 'Knoxville', 'Chattanooga']
  },
  {
    name: 'Texas',
    slug: 'texas',
    abbreviation: 'TX',
    population: '30.0M',
    avgLoanAmount: '$17,000',
    avgRate: '9.5%',
    maxLoanAmount: '$85,000',
    region: 'Southwest',
    description: 'Texas provides extensive personal loan options with competitive rates and flexible terms for residents across the state.',
    regulations: ['Texas Finance Code governs loans', 'Office of Consumer Credit Commissioner', 'Licensed lender requirements'],
    popularCities: ['Houston', 'Dallas', 'Austin', 'San Antonio']
  },
  {
    name: 'Utah',
    slug: 'utah',
    abbreviation: 'UT',
    population: '3.4M',
    avgLoanAmount: '$16,500',
    avgRate: '9.8%',
    maxLoanAmount: '$70,000',
    region: 'West',
    description: 'Utah offers competitive personal loans with reasonable rates and terms.',
    regulations: ['Utah Consumer Credit Code', 'Department of Financial Institutions', 'Rate limitations'],
    popularCities: ['Salt Lake City', 'West Valley City', 'Provo']
  },
  {
    name: 'Vermont',
    slug: 'vermont',
    abbreviation: 'VT',
    population: '647K',
    avgLoanAmount: '$15,500',
    avgRate: '9.9%',
    maxLoanAmount: '$65,000',
    region: 'Northeast',
    description: 'Vermont provides personal loans with state oversight and consumer protections.',
    regulations: ['Department of Financial Regulation', 'Consumer protection laws', 'Interest rate caps'],
    popularCities: ['Burlington', 'Essex', 'South Burlington']
  },
  {
    name: 'Virginia',
    slug: 'virginia',
    abbreviation: 'VA',
    population: '8.6M',
    avgLoanAmount: '$17,500',
    avgRate: '9.2%',
    maxLoanAmount: '$80,000',
    region: 'Southeast',
    description: 'Virginia offers competitive personal loan rates with comprehensive regulations.',
    regulations: ['Consumer Finance Act applies', 'Bureau of Financial Institutions', 'Rate caps in place'],
    popularCities: ['Virginia Beach', 'Norfolk', 'Richmond', 'Arlington']
  },
  {
    name: 'Washington',
    slug: 'washington',
    abbreviation: 'WA',
    population: '7.8M',
    avgLoanAmount: '$18,500',
    avgRate: '8.9%',
    maxLoanAmount: '$90,000',
    region: 'West',
    description: 'Washington provides competitive personal loans with strong consumer protections.',
    regulations: ['Consumer Loan Act applies', 'Department of Financial Institutions', 'Interest rate limitations'],
    popularCities: ['Seattle', 'Spokane', 'Tacoma', 'Bellevue']
  },
  {
    name: 'West Virginia',
    slug: 'west-virginia',
    abbreviation: 'WV',
    population: '1.8M',
    avgLoanAmount: '$14,500',
    avgRate: '10.6%',
    maxLoanAmount: '$55,000',
    region: 'Southeast',
    description: 'West Virginia offers personal loans with state regulatory oversight.',
    regulations: ['Consumer Credit Act applies', 'Division of Financial Institutions', 'Rate limitations'],
    popularCities: ['Charleston', 'Huntington', 'Morgantown']
  },
  {
    name: 'Wisconsin',
    slug: 'wisconsin',
    abbreviation: 'WI',
    population: '5.9M',
    avgLoanAmount: '$16,000',
    avgRate: '9.7%',
    maxLoanAmount: '$70,000',
    region: 'Midwest',
    description: 'Wisconsin provides diverse personal loan options with competitive rates.',
    regulations: ['Wisconsin Consumer Act', 'Department of Financial Institutions', 'Rate caps apply'],
    popularCities: ['Milwaukee', 'Madison', 'Green Bay', 'Kenosha']
  },
  {
    name: 'Wyoming',
    slug: 'wyoming',
    abbreviation: 'WY',
    population: '577K',
    avgLoanAmount: '$15,000',
    avgRate: '10.4%',
    maxLoanAmount: '$60,000',
    region: 'West',
    description: 'Wyoming offers personal loans with flexible terms and state protections.',
    regulations: ['Division of Banking oversight', 'Licensed lender requirements', 'Consumer protection standards'],
    popularCities: ['Cheyenne', 'Casper', 'Laramie']
  }
]

export const getStatesByRegion = (region: keyof typeof stateRegions) => {
  return usStates.filter(state => state.region === region)
}

export const getStateBySlug = (slug: string) => {
  return usStates.find(state => state.slug === slug)
}

export const searchStates = (query: string) => {
  const lowerQuery = query.toLowerCase()
  return usStates.filter(state => 
    state.name.toLowerCase().includes(lowerQuery) ||
    state.abbreviation.toLowerCase().includes(lowerQuery) ||
    state.popularCities.some(city => city.toLowerCase().includes(lowerQuery))
  )
}
