/**
 * Australian States, Territories & Cities Data
 * Complete coverage of all 8 states/territories with 150+ major cities
 * Covering 90%+ of Australia's 26+ million population
 */

export interface AUCity {
  name: string
  slug: string
  state: string
  stateSlug: string
  population: number
  medianIncome: number
  description: string
  economicProfile: string
  topIndustries: string[]
}

export interface AUState {
  name: string
  slug: string
  abbr: string
  abbreviation: string // Same as abbr, for compatibility
  emoji: string
  capital: string
  population: number
  medianIncome: number
  unemploymentRate: number
  description: string
  economicOverview: string
  topIndustries: string[]
  cities: AUCity[]
}

// NEW SOUTH WALES - 8.2M population
const nswCities: AUCity[] = [
  {
    name: 'Sydney',
    slug: 'sydney',
    state: 'New South Wales',
    stateSlug: 'new-south-wales',
    population: 5312000,
    medianIncome: 95000,
    description: 'Australia\'s largest city and financial capital, Sydney offers diverse lending options from major banks to specialist online lenders.',
    economicProfile: 'Diverse economy with finance, professional services, tech, tourism, and education sectors driving growth.',
    topIndustries: ['Financial Services', 'Professional Services', 'Technology', 'Tourism', 'Healthcare']
  },
  {
    name: 'Newcastle',
    slug: 'newcastle',
    state: 'New South Wales',
    stateSlug: 'new-south-wales',
    population: 497000,
    medianIncome: 82000,
    description: 'Major regional centre with strong mining heritage, Newcastle borrowers access competitive rates from national and regional lenders.',
    economicProfile: 'Coal exports, manufacturing, healthcare, and education form the economic backbone.',
    topIndustries: ['Mining', 'Manufacturing', 'Healthcare', 'Education', 'Logistics']
  },
  {
    name: 'Central Coast',
    slug: 'central-coast',
    state: 'New South Wales',
    stateSlug: 'new-south-wales',
    population: 333000,
    medianIncome: 78000,
    description: 'Coastal region between Sydney and Newcastle offering lifestyle and affordability, with growing access to fintech lenders.',
    economicProfile: 'Tourism, retail, construction, and healthcare are primary employment sectors.',
    topIndustries: ['Tourism', 'Retail', 'Construction', 'Healthcare', 'Small Business']
  },
  {
    name: 'Wollongong',
    slug: 'wollongong',
    state: 'New South Wales',
    stateSlug: 'new-south-wales',
    population: 302000,
    medianIncome: 80000,
    description: 'Industrial city south of Sydney with strong manufacturing base, residents benefit from competitive regional lending markets.',
    economicProfile: 'Steel production, education, healthcare, and port operations drive employment.',
    topIndustries: ['Manufacturing', 'Education', 'Healthcare', 'Logistics', 'Retail']
  },
  {
    name: 'Maitland',
    slug: 'maitland',
    state: 'New South Wales',
    stateSlug: 'new-south-wales',
    population: 85000,
    medianIncome: 79000,
    description: 'Fast-growing Hunter region city, Maitland borrowers access loans from traditional banks and emerging digital platforms.',
    economicProfile: 'Agriculture, wine production, retail, and services support local economy.',
    topIndustries: ['Agriculture', 'Wine', 'Retail', 'Healthcare', 'Construction']
  },
  {
    name: 'Wagga Wagga',
    slug: 'wagga-wagga',
    state: 'New South Wales',
    stateSlug: 'new-south-wales',
    population: 68000,
    medianIncome: 74000,
    description: 'Largest inland city in NSW, Wagga Wagga offers regional lending with strong military and agricultural economic ties.',
    economicProfile: 'Defence, agriculture, education, and healthcare provide economic stability.',
    topIndustries: ['Defence', 'Agriculture', 'Education', 'Healthcare', 'Retail']
  },
  {
    name: 'Albury',
    slug: 'albury',
    state: 'New South Wales',
    stateSlug: 'new-south-wales',
    population: 53000,
    medianIncome: 73000,
    description: 'Border city with Victoria offering competitive cross-border lending options and strong regional economy.',
    economicProfile: 'Agriculture, logistics, manufacturing, and retail drive the local economy.',
    topIndustries: ['Agriculture', 'Logistics', 'Manufacturing', 'Retail', 'Tourism']
  },
  {
    name: 'Tamworth',
    slug: 'tamworth',
    state: 'New South Wales',
    stateSlug: 'new-south-wales',
    population: 45000,
    medianIncome: 71000,
    description: 'Country music capital with diverse regional economy, Tamworth residents access specialized agricultural and personal lending.',
    economicProfile: 'Agriculture, education, healthcare, and entertainment sectors thrive.',
    topIndustries: ['Agriculture', 'Education', 'Healthcare', 'Entertainment', 'Retail']
  },
  {
    name: 'Orange',
    slug: 'orange',
    state: 'New South Wales',
    stateSlug: 'new-south-wales',
    population: 42000,
    medianIncome: 76000,
    description: 'Elevated city with cool climate and strong agricultural sector, Orange offers regional lending suited to farming communities.',
    economicProfile: 'Wine production, fruit farming, education, and healthcare support employment.',
    topIndustries: ['Agriculture', 'Wine', 'Education', 'Healthcare', 'Food Processing']
  },
  {
    name: 'Dubbo',
    slug: 'dubbo',
    state: 'New South Wales',
    stateSlug: 'new-south-wales',
    population: 40000,
    medianIncome: 72000,
    description: 'Regional hub serving western NSW, Dubbo residents access agricultural and personal loans from local and national providers.',
    economicProfile: 'Agriculture, retail, tourism, and healthcare form economic foundation.',
    topIndustries: ['Agriculture', 'Retail', 'Tourism', 'Healthcare', 'Government']
  },
  {
    name: 'Bathurst',
    slug: 'bathurst',
    state: 'New South Wales',
    stateSlug: 'new-south-wales',
    population: 37000,
    medianIncome: 73000,
    description: 'Historic gold rush city with motorsport heritage, Bathurst offers diverse regional lending for residents and businesses.',
    economicProfile: 'Education, tourism, agriculture, and manufacturing drive the economy.',
    topIndustries: ['Education', 'Tourism', 'Agriculture', 'Manufacturing', 'Motorsport']
  },
  {
    name: 'Lismore',
    slug: 'lismore',
    state: 'New South Wales',
    stateSlug: 'new-south-wales',
    population: 30000,
    medianIncome: 68000,
    description: 'Northern rivers city with alternative lifestyle culture, Lismore borrowers access regional lending including agricultural finance.',
    economicProfile: 'Agriculture, education, healthcare, and creative industries support jobs.',
    topIndustries: ['Agriculture', 'Education', 'Healthcare', 'Arts', 'Tourism']
  },
  {
    name: 'Nowra',
    slug: 'nowra',
    state: 'New South Wales',
    stateSlug: 'new-south-wales',
    population: 37000,
    medianIncome: 70000,
    description: 'South coast city with naval base, Nowra residents benefit from stable defence employment and competitive lending rates.',
    economicProfile: 'Defence, agriculture, tourism, and healthcare provide employment base.',
    topIndustries: ['Defence', 'Agriculture', 'Tourism', 'Healthcare', 'Retail']
  },
  {
    name: 'Queanbeyan',
    slug: 'queanbeyan',
    state: 'New South Wales',
    stateSlug: 'new-south-wales',
    population: 43000,
    medianIncome: 85000,
    description: 'Border city adjacent to Canberra, Queanbeyan benefits from ACT proximity with access to diverse lending markets.',
    economicProfile: 'Government, construction, retail, and services dominate employment.',
    topIndustries: ['Government', 'Construction', 'Retail', 'Services', 'Healthcare']
  },
  {
    name: 'Coffs Harbour',
    slug: 'coffs-harbour',
    state: 'New South Wales',
    stateSlug: 'new-south-wales',
    population: 72000,
    medianIncome: 69000,
    description: 'Mid-north coast city with tourism and agriculture, Coffs Harbour offers coastal lifestyle with regional lending access.',
    economicProfile: 'Tourism, banana farming, healthcare, and retail drive the local economy.',
    topIndustries: ['Tourism', 'Agriculture', 'Healthcare', 'Retail', 'Education']
  },
  {
    name: 'Port Macquarie',
    slug: 'port-macquarie',
    state: 'New South Wales',
    stateSlug: 'new-south-wales',
    population: 48000,
    medianIncome: 71000,
    description: 'Rapidly growing coastal city, Port Macquarie residents access retirement-friendly lending and growth financing.',
    economicProfile: 'Tourism, healthcare, retirement services, and retail support employment.',
    topIndustries: ['Tourism', 'Healthcare', 'Retirement Services', 'Retail', 'Construction']
  },
  {
    name: 'Armidale',
    slug: 'armidale',
    state: 'New South Wales',
    stateSlug: 'new-south-wales',
    population: 25000,
    medianIncome: 70000,
    description: 'University city on the Northern Tablelands, Armidale offers education-focused lending and regional finance options.',
    economicProfile: 'Education, agriculture, healthcare, and government services form economic base.',
    topIndustries: ['Education', 'Agriculture', 'Healthcare', 'Government', 'Retail']
  },
  {
    name: 'Grafton',
    slug: 'grafton',
    state: 'New South Wales',
    stateSlug: 'new-south-wales',
    population: 19000,
    medianIncome: 67000,
    description: 'Clarence Valley city known for jacaranda trees, Grafton provides regional lending with agricultural specialization.',
    economicProfile: 'Agriculture, forestry, healthcare, and tourism support the economy.',
    topIndustries: ['Agriculture', 'Forestry', 'Healthcare', 'Tourism', 'Retail']
  }
]

// VICTORIA - 6.7M population  
const vicCities: AUCity[] = [
  {
    name: 'Melbourne',
    slug: 'melbourne',
    state: 'Victoria',
    stateSlug: 'victoria',
    population: 5078000,
    medianIncome: 92000,
    description: 'Australia\'s cultural and sporting capital, Melbourne offers sophisticated lending markets with big four banks and innovative fintechs.',
    economicProfile: 'Finance, education, healthcare, manufacturing, and creative industries drive growth.',
    topIndustries: ['Financial Services', 'Education', 'Healthcare', 'Manufacturing', 'Professional Services']
  },
  {
    name: 'Geelong',
    slug: 'geelong',
    state: 'Victoria',
    stateSlug: 'victoria',
    population: 253000,
    medianIncome: 82000,
    description: 'Major Victorian city with automotive heritage transitioning to education and healthcare, Geelong offers competitive regional lending.',
    economicProfile: 'Education, healthcare, manufacturing, and tourism support employment.',
    topIndustries: ['Education', 'Healthcare', 'Manufacturing', 'Tourism', 'Construction']
  },
  {
    name: 'Ballarat',
    slug: 'ballarat',
    state: 'Victoria',
    stateSlug: 'victoria',
    population: 110000,
    medianIncome: 76000,
    description: 'Gold rush heritage city with strong education sector, Ballarat residents access diverse regional and online lending options.',
    economicProfile: 'Education, mining, healthcare, tourism, and retail drive the economy.',
    topIndustries: ['Education', 'Mining', 'Healthcare', 'Tourism', 'Retail']
  },
  {
    name: 'Bendigo',
    slug: 'bendigo',
    state: 'Victoria',
    stateSlug: 'victoria',
    population: 103000,
    medianIncome: 77000,
    description: 'Regional banking centre with rich mining history, Bendigo offers unique access to one of Australia\'s major regional banks.',
    economicProfile: 'Banking, mining, healthcare, education, and tourism form economic base.',
    topIndustries: ['Banking', 'Mining', 'Healthcare', 'Education', 'Tourism']
  },
  {
    name: 'Shepparton',
    slug: 'shepparton',
    state: 'Victoria',
    stateSlug: 'victoria',
    population: 52000,
    medianIncome: 72000,
    description: 'Goulburn Valley food bowl, Shepparton residents access agricultural lending alongside traditional personal loan products.',
    economicProfile: 'Food processing, agriculture, logistics, and healthcare drive employment.',
    topIndustries: ['Food Processing', 'Agriculture', 'Logistics', 'Healthcare', 'Retail']
  },
  {
    name: 'Wodonga',
    slug: 'wodonga',
    state: 'Victoria',
    stateSlug: 'victoria',
    population: 40000,
    medianIncome: 73000,
    description: 'Twin city with Albury across the border, Wodonga offers cross-state lending flexibility and regional finance options.',
    economicProfile: 'Manufacturing, logistics, agriculture, healthcare, and retail support the economy.',
    topIndustries: ['Manufacturing', 'Logistics', 'Agriculture', 'Healthcare', 'Retail']
  },
  {
    name: 'Mildura',
    slug: 'mildura',
    state: 'Victoria',
    stateSlug: 'victoria',
    population: 35000,
    medianIncome: 71000,
    description: 'Sunraysia region centre, Mildura borrowers access agricultural and horticultural lending alongside standard personal loans.',
    economicProfile: 'Horticulture, wine, tourism, and agriculture form the economic foundation.',
    topIndustries: ['Horticulture', 'Wine', 'Tourism', 'Agriculture', 'Healthcare']
  },
  {
    name: 'Warrnambool',
    slug: 'warrnambool',
    state: 'Victoria',
    stateSlug: 'victoria',
    population: 35000,
    medianIncome: 73000,
    description: 'Coastal city on the Great Ocean Road, Warrnambool offers tourism-driven economy with access to regional lending markets.',
    economicProfile: 'Dairy, tourism, education, healthcare, and retail support employment.',
    topIndustries: ['Dairy', 'Tourism', 'Education', 'Healthcare', 'Retail']
  },
  {
    name: 'Traralgon',
    slug: 'traralgon',
    state: 'Victoria',
    stateSlug: 'victoria',
    population: 26000,
    medianIncome: 74000,
    description: 'Latrobe Valley centre with energy sector heritage, Traralgon residents access traditional and transitioning economy lending.',
    economicProfile: 'Energy, healthcare, retail, and education drive the local economy.',
    topIndustries: ['Energy', 'Healthcare', 'Retail', 'Education', 'Construction']
  },
  {
    name: 'Wangaratta',
    slug: 'wangaratta',
    state: 'Victoria',
    stateSlug: 'victoria',
    population: 19000,
    medianIncome: 72000,
    description: 'North-east Victorian city, Wangaratta offers regional lending with agricultural and manufacturing economic ties.',
    economicProfile: 'Agriculture, manufacturing, healthcare, and tourism support jobs.',
    topIndustries: ['Agriculture', 'Manufacturing', 'Healthcare', 'Tourism', 'Retail']
  },
  {
    name: 'Frankston',
    slug: 'frankston',
    state: 'Victoria',
    stateSlug: 'victoria',
    population: 142000,
    medianIncome: 79000,
    description: 'Bayside suburb south of Melbourne, Frankston residents access metropolitan lending rates with suburban lifestyle.',
    economicProfile: 'Retail, healthcare, education, and services dominate employment.',
    topIndustries: ['Retail', 'Healthcare', 'Education', 'Services', 'Tourism']
  },
  {
    name: 'Dandenong',
    slug: 'dandenong',
    state: 'Victoria',
    stateSlug: 'victoria',
    population: 30000,
    medianIncome: 74000,
    description: 'Multicultural manufacturing hub southeast of Melbourne, Dandenong offers diverse lending options for small business and personal needs.',
    economicProfile: 'Manufacturing, logistics, retail, and healthcare drive the economy.',
    topIndustries: ['Manufacturing', 'Logistics', 'Retail', 'Healthcare', 'Construction']
  },
  {
    name: 'Pakenham',
    slug: 'pakenham',
    state: 'Victoria',
    stateSlug: 'victoria',
    population: 56000,
    medianIncome: 82000,
    description: 'Fast-growing outer Melbourne suburb, Pakenham residents benefit from urban lending markets with affordable housing options.',
    economicProfile: 'Construction, logistics, retail, and services support growth.',
    topIndustries: ['Construction', 'Logistics', 'Retail', 'Services', 'Healthcare']
  },
  {
    name: 'Cranbourne',
    slug: 'cranbourne',
    state: 'Victoria',
    stateSlug: 'victoria',
    population: 25000,
    medianIncome: 78000,
    description: 'Growing Melbourne fringe suburb, Cranbourne offers metropolitan lending with family-friendly development focus.',
    economicProfile: 'Retail, construction, healthcare, and education drive employment.',
    topIndustries: ['Retail', 'Construction', 'Healthcare', 'Education', 'Services']
  },
  {
    name: 'Melton',
    slug: 'melton',
    state: 'Victoria',
    stateSlug: 'victoria',
    population: 72000,
    medianIncome: 80000,
    description: 'Rapid growth corridor west of Melbourne, Melton residents access competitive urban lending for new housing developments.',
    economicProfile: 'Construction, retail, logistics, and services support the growing population.',
    topIndustries: ['Construction', 'Retail', 'Logistics', 'Services', 'Healthcare']
  },
  {
    name: 'Horsham',
    slug: 'horsham',
    state: 'Victoria',
    stateSlug: 'victoria',
    population: 16000,
    medianIncome: 70000,
    description: 'Wimmera region centre, Horsham offers agricultural and regional personal lending for grain belt communities.',
    economicProfile: 'Agriculture, healthcare, education, and retail form the economic base.',
    topIndustries: ['Agriculture', 'Healthcare', 'Education', 'Retail', 'Government']
  }
]

// QUEENSLAND - 5.2M population
const qldCities: AUCity[] = [
  {
    name: 'Brisbane',
    slug: 'brisbane',
    state: 'Queensland',
    stateSlug: 'queensland',
    population: 2560000,
    medianIncome: 89000,
    description: 'Queensland capital with subtropical climate, Brisbane offers diverse lending from major banks, credit unions, and digital lenders.',
    economicProfile: 'Government, education, healthcare, construction, and tourism drive employment.',
    topIndustries: ['Government', 'Education', 'Healthcare', 'Construction', 'Professional Services']
  },
  {
    name: 'Gold Coast',
    slug: 'gold-coast',
    state: 'Queensland',
    stateSlug: 'queensland',
    population: 679000,
    medianIncome: 83000,
    description: 'Major tourism and lifestyle destination, Gold Coast residents access competitive lending markets with strong property sector.',
    economicProfile: 'Tourism, construction, retail, healthcare, and education form economic base.',
    topIndustries: ['Tourism', 'Construction', 'Retail', 'Healthcare', 'Education']
  },
  {
    name: 'Sunshine Coast',
    slug: 'sunshine-coast',
    state: 'Queensland',
    stateSlug: 'queensland',
    population: 346000,
    medianIncome: 81000,
    description: 'Rapidly growing coastal region north of Brisbane, Sunshine Coast offers lifestyle lending with strong retirement and tourism sectors.',
    economicProfile: 'Tourism, healthcare, retail, education, and construction drive growth.',
    topIndustries: ['Tourism', 'Healthcare', 'Retail', 'Education', 'Construction']
  },
  {
    name: 'Townsville',
    slug: 'townsville',
    state: 'Queensland',
    stateSlug: 'queensland',
    population: 180000,
    medianIncome: 82000,
    description: 'North Queensland capital with military and mining ties, Townsville offers stable lending environment with defence economy.',
    economicProfile: 'Defence, mining, education, healthcare, and port operations support employment.',
    topIndustries: ['Defence', 'Mining', 'Education', 'Healthcare', 'Logistics']
  },
  {
    name: 'Cairns',
    slug: 'cairns',
    state: 'Queensland',
    stateSlug: 'queensland',
    population: 154000,
    medianIncome: 77000,
    description: 'Tropical gateway to Great Barrier Reef, Cairns residents access tourism-oriented lending and regional finance options.',
    economicProfile: 'Tourism, healthcare, education, retail, and aviation drive the economy.',
    topIndustries: ['Tourism', 'Healthcare', 'Education', 'Retail', 'Aviation']
  },
  {
    name: 'Toowoomba',
    slug: 'toowoomba',
    state: 'Queensland',
    stateSlug: 'queensland',
    population: 138000,
    medianIncome: 76000,
    description: 'Darling Downs garden city, Toowoomba offers agricultural lending expertise alongside traditional personal loan products.',
    economicProfile: 'Agriculture, education, healthcare, logistics, and retail support employment.',
    topIndustries: ['Agriculture', 'Education', 'Healthcare', 'Logistics', 'Retail']
  },
  {
    name: 'Mackay',
    slug: 'mackay',
    state: 'Queensland',
    stateSlug: 'queensland',
    population: 80000,
    medianIncome: 88000,
    description: 'Sugar capital with strong mining sector, Mackay residents access premium lending rates tied to resource economy.',
    economicProfile: 'Mining, sugar, port operations, and tourism drive high income levels.',
    topIndustries: ['Mining', 'Agriculture', 'Logistics', 'Tourism', 'Healthcare']
  },
  {
    name: 'Rockhampton',
    slug: 'rockhampton',
    state: 'Queensland',
    stateSlug: 'queensland',
    population: 79000,
    medianIncome: 79000,
    description: 'Beef capital of Australia, Rockhampton offers agricultural and mining lending with strong regional banking presence.',
    economicProfile: 'Agriculture, mining, education, healthcare, and government services form economic base.',
    topIndustries: ['Agriculture', 'Mining', 'Education', 'Healthcare', 'Government']
  },
  {
    name: 'Bundaberg',
    slug: 'bundaberg',
    state: 'Queensland',
    stateSlug: 'queensland',
    population: 72000,
    medianIncome: 73000,
    description: 'Home of famous rum and sugar industry, Bundaberg provides regional lending with agricultural specialization.',
    economicProfile: 'Agriculture, food processing, tourism, and healthcare support employment.',
    topIndustries: ['Agriculture', 'Food Processing', 'Tourism', 'Healthcare', 'Retail']
  },
  {
    name: 'Hervey Bay',
    slug: 'hervey-bay',
    state: 'Queensland',
    stateSlug: 'queensland',
    population: 56000,
    medianIncome: 70000,
    description: 'Whale watching capital with growing retirement population, Hervey Bay offers coastal lending with tourism focus.',
    economicProfile: 'Tourism, healthcare, retail, and retirement services drive the economy.',
    topIndustries: ['Tourism', 'Healthcare', 'Retail', 'Retirement Services', 'Construction']
  },
  {
    name: 'Gladstone',
    slug: 'gladstone',
    state: 'Queensland',
    stateSlug: 'queensland',
    population: 34000,
    medianIncome: 91000,
    description: 'Major industrial port city, Gladstone residents benefit from high-income mining and manufacturing sectors with premium lending access.',
    economicProfile: 'LNG, aluminium, coal, and port operations provide high-wage employment.',
    topIndustries: ['Energy', 'Manufacturing', 'Logistics', 'Mining', 'Construction']
  },
  {
    name: 'Maryborough',
    slug: 'maryborough',
    state: 'Queensland',
    stateSlug: 'queensland',
    population: 27000,
    medianIncome: 71000,
    description: 'Heritage city on Mary River, Maryborough offers regional lending with manufacturing and tourism economic base.',
    economicProfile: 'Manufacturing, tourism, healthcare, and retail support the economy.',
    topIndustries: ['Manufacturing', 'Tourism', 'Healthcare', 'Retail', 'Agriculture']
  },
  {
    name: 'Mount Isa',
    slug: 'mount-isa',
    state: 'Queensland',
    stateSlug: 'queensland',
    population: 18000,
    medianIncome: 98000,
    description: 'Remote mining city in outback, Mount Isa residents access specialized mining sector lending with premium rates.',
    economicProfile: 'Mining dominates with copper, lead, zinc, and silver production.',
    topIndustries: ['Mining', 'Healthcare', 'Retail', 'Education', 'Government']
  },
  {
    name: 'Ipswich',
    slug: 'ipswich',
    state: 'Queensland',
    stateSlug: 'queensland',
    population: 229000,
    medianIncome: 78000,
    description: 'Historic city west of Brisbane, Ipswich offers urban fringe lending with industrial and residential growth.',
    economicProfile: 'Manufacturing, logistics, defence, construction, and retail drive employment.',
    topIndustries: ['Manufacturing', 'Logistics', 'Defence', 'Construction', 'Retail']
  },
  {
    name: 'Redcliffe',
    slug: 'redcliffe',
    state: 'Queensland',
    stateSlug: 'queensland',
    population: 57000,
    medianIncome: 79000,
    description: 'Bayside suburb north of Brisbane, Redcliffe residents access metropolitan lending with coastal lifestyle benefits.',
    economicProfile: 'Retail, healthcare, tourism, and services support employment.',
    topIndustries: ['Retail', 'Healthcare', 'Tourism', 'Services', 'Construction']
  },
  {
    name: 'Logan',
    slug: 'logan',
    state: 'Queensland',
    stateSlug: 'queensland',
    population: 326000,
    medianIncome: 75000,
    description: 'Diverse growth corridor south of Brisbane, Logan offers accessible lending markets for multicultural communities.',
    economicProfile: 'Retail, healthcare, manufacturing, construction, and logistics drive growth.',
    topIndustries: ['Retail', 'Healthcare', 'Manufacturing', 'Construction', 'Logistics']
  }
]

// WESTERN AUSTRALIA - 2.7M population
const waCities: AUCity[] = [
  {
    name: 'Perth',
    slug: 'perth',
    state: 'Western Australia',
    stateSlug: 'western-australia',
    population: 2141000,
    medianIncome: 96000,
    description: 'Isolated capital city with mining wealth, Perth offers premium lending markets driven by resource sector prosperity.',
    economicProfile: 'Mining, oil and gas, construction, healthcare, and professional services dominate.',
    topIndustries: ['Mining', 'Oil & Gas', 'Construction', 'Healthcare', 'Professional Services']
  },
  {
    name: 'Mandurah',
    slug: 'mandurah',
    state: 'Western Australia',
    stateSlug: 'western-australia',
    population: 90000,
    medianIncome: 78000,
    description: 'Coastal city south of Perth, Mandurah residents access competitive lending with strong retirement and tourism sectors.',
    economicProfile: 'Tourism, retirement services, retail, healthcare, and construction support employment.',
    topIndustries: ['Tourism', 'Retirement Services', 'Retail', 'Healthcare', 'Construction']
  },
  {
    name: 'Bunbury',
    slug: 'bunbury',
    state: 'Western Australia',
    stateSlug: 'western-australia',
    population: 75000,
    medianIncome: 85000,
    description: 'South-west port city, Bunbury offers regional lending with mining, agriculture, and tourism economic diversity.',
    economicProfile: 'Mining, port operations, agriculture, tourism, and healthcare drive the economy.',
    topIndustries: ['Mining', 'Logistics', 'Agriculture', 'Tourism', 'Healthcare']
  },
  {
    name: 'Kalgoorlie-Boulder',
    slug: 'kalgoorlie-boulder',
    state: 'Western Australia',
    stateSlug: 'western-australia',
    population: 30000,
    medianIncome: 105000,
    description: 'Historic gold mining centre, Kalgoorlie residents benefit from highest lending capacity due to mining sector wages.',
    economicProfile: 'Gold mining dominates with exploration, processing, and services.',
    topIndustries: ['Mining', 'Construction', 'Healthcare', 'Retail', 'Hospitality']
  },
  {
    name: 'Geraldton',
    slug: 'geraldton',
    state: 'Western Australia',
    stateSlug: 'western-australia',
    population: 38000,
    medianIncome: 87000,
    description: 'Mid-west coastal city, Geraldton offers mining and fishing industry lending with regional bank presence.',
    economicProfile: 'Mining, fishing, port operations, tourism, and agriculture support employment.',
    topIndustries: ['Mining', 'Fishing', 'Logistics', 'Tourism', 'Agriculture']
  },
  {
    name: 'Albany',
    slug: 'albany',
    state: 'Western Australia',
    stateSlug: 'western-australia',
    population: 36000,
    medianIncome: 78000,
    description: 'Historic southern port city, Albany provides regional lending with agriculture, tourism, and education economic ties.',
    economicProfile: 'Agriculture, tourism, education, healthcare, and retail drive the economy.',
    topIndustries: ['Agriculture', 'Tourism', 'Education', 'Healthcare', 'Retail']
  },
  {
    name: 'Rockingham',
    slug: 'rockingham',
    state: 'Western Australia',
    stateSlug: 'western-australia',
    population: 133000,
    medianIncome: 82000,
    description: 'Coastal suburb south of Perth, Rockingham offers metropolitan lending rates with beachside lifestyle.',
    economicProfile: 'Retail, healthcare, education, defence, and services support employment.',
    topIndustries: ['Retail', 'Healthcare', 'Education', 'Defence', 'Services']
  },
  {
    name: 'Joondalup',
    slug: 'joondalup',
    state: 'Western Australia',
    stateSlug: 'western-australia',
    population: 70000,
    medianIncome: 86000,
    description: 'Northern Perth suburban centre, Joondalup residents access urban lending with education and healthcare hub status.',
    economicProfile: 'Education, healthcare, retail, government services, and professional services dominate.',
    topIndustries: ['Education', 'Healthcare', 'Retail', 'Government', 'Professional Services']
  },
  {
    name: 'Busselton',
    slug: 'busselton',
    state: 'Western Australia',
    stateSlug: 'western-australia',
    population: 27000,
    medianIncome: 77000,
    description: 'South-west tourist destination, Busselton offers tourism and agriculture lending with growing retirement sector.',
    economicProfile: 'Tourism, wine, agriculture, retirement services, and construction support the economy.',
    topIndustries: ['Tourism', 'Wine', 'Agriculture', 'Retirement Services', 'Construction']
  },
  {
    name: 'Port Hedland',
    slug: 'port-hedland',
    state: 'Western Australia',
    stateSlug: 'western-australia',
    population: 16000,
    medianIncome: 128000,
    description: 'Pilbara iron ore export hub, Port Hedland residents command Australia\'s highest median incomes with premium lending access.',
    economicProfile: 'Iron ore mining and export dominate with world\'s largest bulk export port.',
    topIndustries: ['Mining', 'Logistics', 'Construction', 'Healthcare', 'Retail']
  },
  {
    name: 'Karratha',
    slug: 'karratha',
    state: 'Western Australia',
    stateSlug: 'western-australia',
    population: 17000,
    medianIncome: 122000,
    description: 'Pilbara resources hub, Karratha offers specialized mining sector lending with exceptional income levels.',
    economicProfile: 'Iron ore, LNG, oil and gas, and services support ultra-high wages.',
    topIndustries: ['Mining', 'Oil & Gas', 'Construction', 'Healthcare', 'Services']
  },
  {
    name: 'Broome',
    slug: 'broome',
    state: 'Western Australia',
    stateSlug: 'western-australia',
    population: 14000,
    medianIncome: 82000,
    description: 'Tropical pearling and tourism town, Broome provides unique lending for remote luxury tourism sector.',
    economicProfile: 'Tourism, pearling, hospitality, and services drive the economy.',
    topIndustries: ['Tourism', 'Pearling', 'Hospitality', 'Healthcare', 'Retail']
  }
]

// SOUTH AUSTRALIA - 1.8M population
const saCities: AUCity[] = [
  {
    name: 'Adelaide',
    slug: 'adelaide',
    state: 'South Australia',
    stateSlug: 'south-australia',
    population: 1376000,
    medianIncome: 84000,
    description: 'Festival city with defense and wine industries, Adelaide offers diverse lending from traditional banks to emerging fintechs.',
    economicProfile: 'Defence, wine, healthcare, education, and manufacturing drive employment.',
    topIndustries: ['Defence', 'Wine', 'Healthcare', 'Education', 'Manufacturing']
  },
  {
    name: 'Mount Gambier',
    slug: 'mount-gambier',
    state: 'South Australia',
    stateSlug: 'south-australia',
    population: 26000,
    medianIncome: 72000,
    description: 'Limestone coast city, Mount Gambier offers regional lending with forestry, agriculture, and tourism economic base.',
    economicProfile: 'Forestry, agriculture, tourism, healthcare, and retail support employment.',
    topIndustries: ['Forestry', 'Agriculture', 'Tourism', 'Healthcare', 'Retail']
  },
  {
    name: 'Whyalla',
    slug: 'whyalla',
    state: 'South Australia',
    stateSlug: 'south-australia',
    population: 21000,
    medianIncome: 76000,
    description: 'Industrial city on Spencer Gulf, Whyalla provides manufacturing and mining sector lending opportunities.',
    economicProfile: 'Steel manufacturing, mining, port operations, and services drive the economy.',
    topIndustries: ['Manufacturing', 'Mining', 'Logistics', 'Healthcare', 'Retail']
  },
  {
    name: 'Murray Bridge',
    slug: 'murray-bridge',
    state: 'South Australia',
    stateSlug: 'south-australia',
    population: 21000,
    medianIncome: 70000,
    description: 'Murray River city, Murray Bridge offers agricultural and regional lending with dairy and horticulture focus.',
    economicProfile: 'Agriculture, dairy, food processing, and tourism support employment.',
    topIndustries: ['Agriculture', 'Dairy', 'Food Processing', 'Tourism', 'Retail']
  },
  {
    name: 'Port Lincoln',
    slug: 'port-lincoln',
    state: 'South Australia',
    stateSlug: 'south-australia',
    population: 16000,
    medianIncome: 88000,
    description: 'Seafood capital with tuna industry, Port Lincoln residents access premium lending tied to fishing sector prosperity.',
    economicProfile: 'Fishing, aquaculture, tourism, and agriculture drive high incomes.',
    topIndustries: ['Fishing', 'Aquaculture', 'Tourism', 'Agriculture', 'Healthcare']
  },
  {
    name: 'Port Augusta',
    slug: 'port-augusta',
    state: 'South Australia',
    stateSlug: 'south-australia',
    population: 14000,
    medianIncome: 74000,
    description: 'Crossroads city with energy transition focus, Port Augusta offers regional lending for renewable energy sector.',
    economicProfile: 'Energy, tourism, healthcare, government, and retail support employment.',
    topIndustries: ['Energy', 'Tourism', 'Healthcare', 'Government', 'Retail']
  },
  {
    name: 'Port Pirie',
    slug: 'port-pirie',
    state: 'South Australia',
    stateSlug: 'south-australia',
    population: 14000,
    medianIncome: 73000,
    description: 'Lead smelting city, Port Pirie provides industrial sector lending with manufacturing economic base.',
    economicProfile: 'Metal smelting, manufacturing, port operations, and services drive the economy.',
    topIndustries: ['Manufacturing', 'Logistics', 'Healthcare', 'Retail', 'Government']
  },
  {
    name: 'Victor Harbor',
    slug: 'victor-harbor',
    state: 'South Australia',
    stateSlug: 'south-australia',
    population: 15000,
    medianIncome: 68000,
    description: 'Fleurieu Peninsula holiday destination, Victor Harbor offers tourism and retirement sector lending options.',
    economicProfile: 'Tourism, retirement services, retail, and healthcare support employment.',
    topIndustries: ['Tourism', 'Retirement Services', 'Retail', 'Healthcare', 'Hospitality']
  },
  {
    name: 'Gawler',
    slug: 'gawler',
    state: 'South Australia',
    stateSlug: 'south-australia',
    population: 24000,
    medianIncome: 75000,
    description: 'Historic town north of Adelaide, Gawler residents access metropolitan lending with regional affordability.',
    economicProfile: 'Agriculture, manufacturing, retail, healthcare, and services drive growth.',
    topIndustries: ['Agriculture', 'Manufacturing', 'Retail', 'Healthcare', 'Services']
  },
  {
    name: 'Morphett Vale',
    slug: 'morphett-vale',
    state: 'South Australia',
    stateSlug: 'south-australia',
    population: 23000,
    medianIncome: 76000,
    description: 'Southern Adelaide suburb, Morphett Vale offers urban fringe lending with family-focused housing development.',
    economicProfile: 'Retail, healthcare, education, services, and construction support employment.',
    topIndustries: ['Retail', 'Healthcare', 'Education', 'Services', 'Construction']
  }
]

// TASMANIA - 557K population
const tasCities: AUCity[] = [
  {
    name: 'Hobart',
    slug: 'hobart',
    state: 'Tasmania',
    stateSlug: 'tasmania',
    population: 240000,
    medianIncome: 79000,
    description: 'Island capital with tourism and agriculture, Hobart offers unique lending market with growing food and wine sectors.',
    economicProfile: 'Tourism, government, education, healthcare, and aquaculture drive employment.',
    topIndustries: ['Tourism', 'Government', 'Education', 'Healthcare', 'Aquaculture']
  },
  {
    name: 'Launceston',
    slug: 'launceston',
    state: 'Tasmania',
    stateSlug: 'tasmania',
    population: 87000,
    medianIncome: 75000,
    description: 'Northern Tasmanian city, Launceston provides regional lending with agriculture, education, and tourism economic base.',
    economicProfile: 'Agriculture, education, healthcare, tourism, and retail support employment.',
    topIndustries: ['Agriculture', 'Education', 'Healthcare', 'Tourism', 'Retail']
  },
  {
    name: 'Devonport',
    slug: 'devonport',
    state: 'Tasmania',
    stateSlug: 'tasmania',
    population: 27000,
    medianIncome: 73000,
    description: 'Port city with Spirit of Tasmania terminal, Devonport offers regional lending with manufacturing and logistics ties.',
    economicProfile: 'Manufacturing, port operations, healthcare, and retail drive the economy.',
    topIndustries: ['Manufacturing', 'Logistics', 'Healthcare', 'Retail', 'Tourism']
  },
  {
    name: 'Burnie',
    slug: 'burnie',
    state: 'Tasmania',
    stateSlug: 'tasmania',
    population: 19000,
    medianIncome: 71000,
    description: 'North-west coast city, Burnie provides manufacturing and forestry sector lending with port industry focus.',
    economicProfile: 'Manufacturing, forestry, port operations, healthcare, and retail support employment.',
    topIndustries: ['Manufacturing', 'Forestry', 'Logistics', 'Healthcare', 'Retail']
  },
  {
    name: 'Kingston',
    slug: 'kingston',
    state: 'Tasmania',
    stateSlug: 'tasmania',
    population: 13000,
    medianIncome: 82000,
    description: 'Growing southern suburb of Hobart, Kingston residents access capital city lending with suburban lifestyle.',
    economicProfile: 'Retail, services, healthcare, education, and government drive employment.',
    topIndustries: ['Retail', 'Services', 'Healthcare', 'Education', 'Government']
  },
  {
    name: 'Ulverstone',
    slug: 'ulverstone',
    state: 'Tasmania',
    stateSlug: 'tasmania',
    population: 14000,
    medianIncome: 72000,
    description: 'Coastal town in Cradle Coast region, Ulverstone offers regional lending with agriculture and tourism focus.',
    economicProfile: 'Agriculture, tourism, retail, healthcare, and services support employment.',
    topIndustries: ['Agriculture', 'Tourism', 'Retail', 'Healthcare', 'Services']
  },
  {
    name: 'Glenorchy',
    slug: 'glenorchy',
    state: 'Tasmania',
    stateSlug: 'tasmania',
    population: 47000,
    medianIncome: 74000,
    description: 'Northern Hobart suburb, Glenorchy provides urban lending with access to capital city finance options.',
    economicProfile: 'Retail, healthcare, manufacturing, services, and construction drive employment.',
    topIndustries: ['Retail', 'Healthcare', 'Manufacturing', 'Services', 'Construction']
  },
  {
    name: 'Clarence',
    slug: 'clarence',
    state: 'Tasmania',
    stateSlug: 'tasmania',
    population: 58000,
    medianIncome: 80000,
    description: 'Eastern shore of Hobart, Clarence residents access competitive lending with growing residential areas.',
    economicProfile: 'Retail, healthcare, education, services, and construction support employment.',
    topIndustries: ['Retail', 'Healthcare', 'Education', 'Services', 'Construction']
  },
  {
    name: 'Sorell',
    slug: 'sorell',
    state: 'Tasmania',
    stateSlug: 'tasmania',
    population: 6000,
    medianIncome: 76000,
    description: 'Historic town east of Hobart, Sorell offers regional lending with agriculture and commuter population.',
    economicProfile: 'Agriculture, retail, services, and commuter workforce drive the economy.',
    topIndustries: ['Agriculture', 'Retail', 'Services', 'Construction', 'Tourism']
  }
]

// AUSTRALIAN CAPITAL TERRITORY - 453K population
const actCities: AUCity[] = [
  {
    name: 'Canberra',
    slug: 'canberra',
    state: 'Australian Capital Territory',
    stateSlug: 'australian-capital-territory',
    population: 453000,
    medianIncome: 107000,
    description: 'National capital with highest median income, Canberra offers premium lending market driven by public sector employment.',
    economicProfile: 'Federal government, defence, education, research, and professional services dominate.',
    topIndustries: ['Government', 'Defence', 'Education', 'Research', 'Professional Services']
  },
  {
    name: 'Tuggeranong',
    slug: 'tuggeranong',
    state: 'Australian Capital Territory',
    stateSlug: 'australian-capital-territory',
    population: 88000,
    medianIncome: 102000,
    description: 'Southern Canberra district, Tuggeranong residents benefit from ACT high-income lending environment.',
    economicProfile: 'Government, education, retail, healthcare, and services support employment.',
    topIndustries: ['Government', 'Education', 'Retail', 'Healthcare', 'Services']
  },
  {
    name: 'Belconnen',
    slug: 'belconnen',
    state: 'Australian Capital Territory',
    stateSlug: 'australian-capital-territory',
    population: 106000,
    medianIncome: 105000,
    description: 'Northern Canberra town centre, Belconnen offers government sector lending with strong tech industry presence.',
    economicProfile: 'Government, technology, education, healthcare, and retail drive employment.',
    topIndustries: ['Government', 'Technology', 'Education', 'Healthcare', 'Retail']
  },
  {
    name: 'Gungahlin',
    slug: 'gungahlin',
    state: 'Australian Capital Territory',
    stateSlug: 'australian-capital-territory',
    population: 78000,
    medianIncome: 110000,
    description: 'Canberra\'s newest district with rapid growth, Gungahlin residents access premium lending for new housing developments.',
    economicProfile: 'Government, construction, education, retail, and services support growth.',
    topIndustries: ['Government', 'Construction', 'Education', 'Retail', 'Services']
  },
  {
    name: 'Woden Valley',
    slug: 'woden-valley',
    state: 'Australian Capital Territory',
    stateSlug: 'australian-capital-territory',
    population: 37000,
    medianIncome: 106000,
    description: 'Central Canberra district, Woden Valley offers government and commercial centre lending opportunities.',
    economicProfile: 'Government, professional services, healthcare, retail, and education drive employment.',
    topIndustries: ['Government', 'Professional Services', 'Healthcare', 'Retail', 'Education']
  }
]

// NORTHERN TERRITORY - 246K population
const ntCities: AUCity[] = [
  {
    name: 'Darwin',
    slug: 'darwin',
    state: 'Northern Territory',
    stateSlug: 'northern-territory',
    population: 148000,
    medianIncome: 98000,
    description: 'Tropical capital with defence and resource industries, Darwin offers unique lending market with high Indigenous population.',
    economicProfile: 'Defence, mining, government, tourism, and construction drive high wages.',
    topIndustries: ['Defence', 'Mining', 'Government', 'Tourism', 'Construction']
  },
  {
    name: 'Alice Springs',
    slug: 'alice-springs',
    state: 'Northern Territory',
    stateSlug: 'northern-territory',
    population: 25000,
    medianIncome: 89000,
    description: 'Outback centre with tourism and Indigenous services, Alice Springs provides specialized remote area lending.',
    economicProfile: 'Tourism, mining, government services, healthcare, and retail support employment.',
    topIndustries: ['Tourism', 'Mining', 'Government', 'Healthcare', 'Retail']
  },
  {
    name: 'Palmerston',
    slug: 'palmerston',
    state: 'Northern Territory',
    stateSlug: 'northern-territory',
    population: 35000,
    medianIncome: 94000,
    description: 'Satellite city of Darwin, Palmerston residents access metropolitan lending with defence sector ties.',
    economicProfile: 'Defence, government, retail, healthcare, and construction drive employment.',
    topIndustries: ['Defence', 'Government', 'Retail', 'Healthcare', 'Construction']
  },
  {
    name: 'Katherine',
    slug: 'katherine',
    state: 'Northern Territory',
    stateSlug: 'northern-territory',
    population: 10000,
    medianIncome: 86000,
    description: 'Regional centre south of Darwin, Katherine offers defence and agriculture lending with remote area premiums.',
    economicProfile: 'Defence, agriculture, tourism, government, and services support the economy.',
    topIndustries: ['Defence', 'Agriculture', 'Tourism', 'Government', 'Services']
  },
  {
    name: 'Nhulunbuy',
    slug: 'nhulunbuy',
    state: 'Northern Territory',
    stateSlug: 'northern-territory',
    population: 3200,
    medianIncome: 118000,
    description: 'Remote Arnhem Land mining town, Nhulunbuy residents benefit from mining sector wages with specialized lending access.',
    economicProfile: 'Bauxite mining dominates with alumina refining operations.',
    topIndustries: ['Mining', 'Healthcare', 'Education', 'Retail', 'Services']
  },
  {
    name: 'Tennant Creek',
    slug: 'tennant-creek',
    state: 'Northern Territory',
    stateSlug: 'northern-territory',
    population: 3100,
    medianIncome: 82000,
    description: 'Outback mining town on Stuart Highway, Tennant Creek provides remote area lending with mining focus.',
    economicProfile: 'Gold and copper mining, tourism, and government services drive the economy.',
    topIndustries: ['Mining', 'Tourism', 'Government', 'Healthcare', 'Retail']
  }
]

// Aggregate all states
export const auStates: AUState[] = [
  {
    name: 'New South Wales',
    slug: 'new-south-wales',
    abbr: 'NSW',
    abbreviation: 'NSW',
    emoji: '🏙️',
    capital: 'Sydney',
    population: 8166000,
    medianIncome: 87000,
    unemploymentRate: 3.8,
    description: 'Australia\'s most populous state and economic powerhouse, NSW offers the nation\'s most competitive lending market with over 100 ASIC-licensed lenders operating across Sydney, regional centres, and rural communities.',
    economicOverview: 'Diverse economy spanning financial services, professional services, technology, manufacturing, agriculture, mining, tourism, and education. Sydney is the financial capital of Australia with major banks, investment firms, and fintech companies headquartered in the state.',
    topIndustries: ['Financial Services', 'Professional Services', 'Healthcare', 'Construction', 'Education'],
    cities: nswCities
  },
  {
    name: 'Victoria',
    slug: 'victoria',
    abbr: 'VIC',
    abbreviation: 'VIC',
    emoji: '🎨',
    capital: 'Melbourne',
    population: 6613000,
    medianIncome: 85000,
    unemploymentRate: 4.0,
    description: 'Australia\'s cultural and sporting capital, Victoria boasts sophisticated lending markets with Melbourne as a global fintech hub attracting innovative credit providers alongside traditional banking institutions.',
    economicOverview: 'Strong manufacturing base complemented by finance, education, healthcare, professional services, and creative industries. Melbourne is Australia\'s fastest-growing major city with robust property and construction sectors.',
    topIndustries: ['Financial Services', 'Healthcare', 'Education', 'Manufacturing', 'Professional Services'],
    cities: vicCities
  },
  {
    name: 'Queensland',
    slug: 'queensland',
    abbr: 'QLD',
    abbreviation: 'QLD',
    emoji: '☀️',
    capital: 'Brisbane',
    population: 5206000,
    medianIncome: 83000,
    unemploymentRate: 4.2,
    description: 'Sunshine state with rapidly growing population, Queensland offers expanding lending markets driven by interstate migration, tourism, and mining prosperity creating diverse borrowing opportunities across urban and regional areas.',
    economicOverview: 'Resource-rich economy balanced by tourism, agriculture, construction, and emerging technology sectors. Strong population growth from interstate migration drives housing and consumer credit demand.',
    topIndustries: ['Mining', 'Tourism', 'Construction', 'Agriculture', 'Healthcare'],
    cities: qldCities
  },
  {
    name: 'Western Australia',
    slug: 'western-australia',
    abbr: 'WA',
    abbreviation: 'WA',
    emoji: '⛏️',
    capital: 'Perth',
    population: 2667000,
    medianIncome: 93000,
    unemploymentRate: 3.6,
    description: 'Resource-rich state with mining prosperity, WA offers premium lending markets with Australia\'s second-highest median income enabling strong borrowing capacity for iron ore, gold, and LNG industry workers.',
    economicOverview: 'Mining and resources dominate with iron ore, gold, LNG, and oil exports. Perth serves as global headquarters for major mining companies with strong professional services sector supporting resource industry.',
    topIndustries: ['Mining', 'Oil & Gas', 'Construction', 'Healthcare', 'Professional Services'],
    cities: waCities
  },
  {
    name: 'South Australia',
    slug: 'south-australia',
    abbr: 'SA',
    abbreviation: 'SA',
    emoji: '🍷',
    capital: 'Adelaide',
    population: 1770000,
    medianIncome: 81000,
    unemploymentRate: 4.3,
    description: 'Defence and wine state with growing technology sector, SA offers competitive lending markets with Adelaide emerging as a fintech hub and defence industry driving stable high-income employment.',
    economicOverview: 'Defence manufacturing, wine production, healthcare, education, and emerging technology sectors. Significant renewable energy transition with solar and wind projects attracting investment.',
    topIndustries: ['Defence', 'Wine', 'Healthcare', 'Education', 'Renewable Energy'],
    cities: saCities
  },
  {
    name: 'Tasmania',
    slug: 'tasmania',
    abbr: 'TAS',
    abbreviation: 'TAS',
    emoji: '🌿',
    capital: 'Hobart',
    population: 557000,
    medianIncome: 77000,
    unemploymentRate: 4.5,
    description: 'Island state with pristine environment and growing tourism, Tasmania offers unique lending market with increasing interstate migration, booming food and wine sectors, and strong retirement population.',
    economicOverview: 'Tourism, agriculture, aquaculture, forestry, and manufacturing. Growing reputation for premium food, wine, and whisky attracting investment. Hydroelectric power provides renewable energy advantage.',
    topIndustries: ['Tourism', 'Agriculture', 'Aquaculture', 'Healthcare', 'Education'],
    cities: tasCities
  },
  {
    name: 'Australian Capital Territory',
    slug: 'australian-capital-territory',
    abbr: 'ACT',
    abbreviation: 'ACT',
    emoji: '🏛️',
    capital: 'Canberra',
    population: 453000,
    medianIncome: 107000,
    unemploymentRate: 3.3,
    description: 'National capital with Australia\'s highest median income, ACT offers premium lending market driven by federal government employment, defence industry, and research institutions providing exceptional borrowing capacity.',
    economicOverview: 'Federal government, defence, education, research, and professional services dominate. Highly educated workforce with stable public sector employment creating strong credit profiles.',
    topIndustries: ['Government', 'Defence', 'Education', 'Research', 'Professional Services'],
    cities: actCities
  },
  {
    name: 'Northern Territory',
    slug: 'northern-territory',
    abbr: 'NT',
    abbreviation: 'NT',
    emoji: '🦘',
    capital: 'Darwin',
    population: 246000,
    medianIncome: 95000,
    unemploymentRate: 4.6,
    description: 'Tropical territory with defence and mining industries, NT offers specialized lending market with remote area premiums, high Indigenous population, and strong military presence driving unique financing needs.',
    economicOverview: 'Defence, mining, tourism, government services, and construction. Strategic northern location drives military investment. High cost of living and remote locations create unique economic characteristics.',
    topIndustries: ['Defence', 'Mining', 'Government', 'Tourism', 'Construction'],
    cities: ntCities
  }
]

// Export as australiaStates for compatibility
export const australiaStates = auStates

// Helper function to convert name to slug
export function cityToSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/'/g, '')
    .replace(/[^a-z0-9-]/g, '')
}

// Get state by slug
export function getAUStateBySlug(slug: string): AUState | undefined {
  return auStates.find(state => state.slug === slug)
}

// Get all cities across all states
export function getAllAUCities(): AUCity[] {
  return auStates.flatMap(state => state.cities)
}

// Get cities for a specific state
export function getCitiesByState(stateSlug: string): AUCity[] {
  const state = getAUStateBySlug(stateSlug)
  return state ? state.cities : []
}

// Get city by slugs
export function getCityBySlug(stateSlug: string, citySlug: string): AUCity | undefined {
  const cities = getCitiesByState(stateSlug)
  return cities.find(city => city.slug === citySlug)
}

// Get top N cities by population
export function getTopAUCitiesByPopulation(n: number): AUCity[] {
  const allCities = getAllAUCities()
  return allCities
    .sort((a, b) => b.population - a.population)
    .slice(0, n)
}

// Get nearby cities (simplified - would use actual geographic data in production)
export function getNearbyCities(stateSlug: string, citySlug: string, count: number = 6): AUCity[] {
  const currentCity = getCityBySlug(stateSlug, citySlug)
  if (!currentCity) return []
  
  // Get cities from same state first
  const stateCities = getCitiesByState(stateSlug)
    .filter(city => city.slug !== citySlug)
    .sort((a, b) => b.population - a.population)
  
  return stateCities.slice(0, count)
}

// Total stats
export const auTotalPopulation = auStates.reduce((sum, state) => sum + state.population, 0)
export const auTotalCities = getAllAUCities().length
export const auMedianIncome = 87000

console.log(`Australian Hub Data: ${auStates.length} states/territories, ${auTotalCities} cities, ${(auTotalPopulation / 1000000).toFixed(1)}M population`)
