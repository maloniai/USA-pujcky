// South Africa cities data

export interface SACity {
  slug: string
  nameEn: string
  nameLocal: string
  regionSlug: string
  regionName: string
  population: string
  avgRate: string
  avgLoanAmount: string
  lenderCount: string
  descriptionEn: string
  descriptionLocal: string
}

export const saCities: SACity[] = [
  // Gauteng cities
  {
    slug: 'johannesburg',
    nameEn: 'Johannesburg',
    nameLocal: 'Johannesburg',
    regionSlug: 'gauteng',
    regionName: 'Gauteng',
    population: '5.6M',
    avgRate: '17.9%',
    avgLoanAmount: 'R 80,000',
    lenderCount: '45+',
    descriptionEn: 'Largest city and economic center of South Africa with extensive loan options',
    descriptionLocal: 'Grootste stad en ekonomiese sentrum van Suid-Afrika met uitgebreide leningsopsies'
  },
  {
    slug: 'pretoria',
    nameEn: 'Pretoria',
    nameLocal: 'Pretoria',
    regionSlug: 'gauteng',
    regionName: 'Gauteng',
    population: '2.9M',
    avgRate: '18.2%',
    avgLoanAmount: 'R 75,000',
    lenderCount: '42+',
    descriptionEn: 'Administrative capital with strong financial services presence',
    descriptionLocal: 'Administratiewe hoofstad met sterk finansiële dienste teenwoordigheid'
  },
  {
    slug: 'ekurhuleni',
    nameEn: 'Ekurhuleni',
    nameLocal: 'Ekurhuleni',
    regionSlug: 'gauteng',
    regionName: 'Gauteng',
    population: '3.2M',
    avgRate: '18.5%',
    avgLoanAmount: 'R 70,000',
    lenderCount: '38+',
    descriptionEn: 'Industrial hub with growing lending market',
    descriptionLocal: 'Industriële middelpunt met groeiende leningsmark'
  },
  {
    slug: 'sandton',
    nameEn: 'Sandton',
    nameLocal: 'Sandton',
    regionSlug: 'gauteng',
    regionName: 'Gauteng',
    population: '230K',
    avgRate: '17.5%',
    avgLoanAmount: 'R 90,000',
    lenderCount: '40+',
    descriptionEn: 'Business and financial district with premium loan services',
    descriptionLocal: 'Besigheids- en finansiële distrik met premium leningsdienste'
  },
  {
    slug: 'centurion',
    nameEn: 'Centurion',
    nameLocal: 'Centurion',
    regionSlug: 'gauteng',
    regionName: 'Gauteng',
    population: '236K',
    avgRate: '18.3%',
    avgLoanAmount: 'R 72,000',
    lenderCount: '35+',
    descriptionEn: 'Residential and commercial center with competitive rates',
    descriptionLocal: 'Residensiële en kommersiële sentrum met mededingende tariewe'
  },
  {
    slug: 'midrand',
    nameEn: 'Midrand',
    nameLocal: 'Midrand',
    regionSlug: 'gauteng',
    regionName: 'Gauteng',
    population: '300K',
    avgRate: '18.4%',
    avgLoanAmount: 'R 68,000',
    lenderCount: '34+',
    descriptionEn: 'Strategic location between Johannesburg and Pretoria',
    descriptionLocal: 'Strategiese ligging tussen Johannesburg en Pretoria'
  },

  // Western Cape cities
  {
    slug: 'cape-town',
    nameEn: 'Cape Town',
    nameLocal: 'Kaapstad',
    regionSlug: 'western-cape',
    regionName: 'Western Cape',
    population: '4.6M',
    avgRate: '17.5%',
    avgLoanAmount: 'R 78,000',
    lenderCount: '44+',
    descriptionEn: 'Legislative capital and major tourist destination with diverse loan products',
    descriptionLocal: 'Wetgewende hoofstad en groot toeristebestemming met diverse leningsprodukte'
  },
  {
    slug: 'stellenbosch',
    nameEn: 'Stellenbosch',
    nameLocal: 'Stellenbosch',
    regionSlug: 'western-cape',
    regionName: 'Western Cape',
    population: '155K',
    avgRate: '18.0%',
    avgLoanAmount: 'R 65,000',
    lenderCount: '30+',
    descriptionEn: 'University town with growing financial sector',
    descriptionLocal: 'Universiteitsdorp met groeiende finansiële sektor'
  },
  {
    slug: 'paarl',
    nameEn: 'Paarl',
    nameLocal: 'Paarl',
    regionSlug: 'western-cape',
    regionName: 'Western Cape',
    population: '191K',
    avgRate: '18.2%',
    avgLoanAmount: 'R 62,000',
    lenderCount: '28+',
    descriptionEn: 'Wine country with agricultural and business loan options',
    descriptionLocal: 'Wynland met landbou- en besigheidsleningsopsies'
  },
  {
    slug: 'george',
    nameEn: 'George',
    nameLocal: 'George',
    regionSlug: 'western-cape',
    regionName: 'Western Cape',
    population: '193K',
    avgRate: '18.5%',
    avgLoanAmount: 'R 60,000',
    lenderCount: '26+',
    descriptionEn: 'Garden Route city with tourism and service industries',
    descriptionLocal: 'Tuinroetestad met toerisme- en diensindustrieë'
  },
  {
    slug: 'worcester',
    nameEn: 'Worcester',
    nameLocal: 'Worcester',
    regionSlug: 'western-cape',
    regionName: 'Western Cape',
    population: '127K',
    avgRate: '18.8%',
    avgLoanAmount: 'R 58,000',
    lenderCount: '24+',
    descriptionEn: 'Agricultural center with accessible loan services',
    descriptionLocal: 'Landbousentrum met toeganklike leningsdienste'
  },
  {
    slug: 'mossel-bay',
    nameEn: 'Mossel Bay',
    nameLocal: 'Mosselbaai',
    regionSlug: 'western-cape',
    regionName: 'Western Cape',
    population: '89K',
    avgRate: '19.0%',
    avgLoanAmount: 'R 56,000',
    lenderCount: '22+',
    descriptionEn: 'Coastal town with tourism and petroleum industries',
    descriptionLocal: 'Kusdorp met toerisme- en petroleumbedrywe'
  },

  // KwaZulu-Natal cities
  {
    slug: 'durban',
    nameEn: 'Durban',
    nameLocal: 'Durban',
    regionSlug: 'kwazulu-natal',
    regionName: 'KwaZulu-Natal',
    population: '3.7M',
    avgRate: '18.8%',
    avgLoanAmount: 'R 68,000',
    lenderCount: '40+',
    descriptionEn: 'Major port city with diverse lending institutions',
    descriptionLocal: 'Groot hawestad met diverse leningsinstellings'
  },
  {
    slug: 'pietermaritzburg',
    nameEn: 'Pietermaritzburg',
    nameLocal: 'Pietermaritzburg',
    regionSlug: 'kwazulu-natal',
    regionName: 'KwaZulu-Natal',
    population: '750K',
    avgRate: '19.2%',
    avgLoanAmount: 'R 62,000',
    lenderCount: '32+',
    descriptionEn: 'Provincial capital with traditional and modern banking',
    descriptionLocal: 'Provinsiale hoofstad met tradisionele en moderne bankwese'
  },
  {
    slug: 'newcastle',
    nameEn: 'Newcastle',
    nameLocal: 'Newcastle',
    regionSlug: 'kwazulu-natal',
    regionName: 'KwaZulu-Natal',
    population: '404K',
    avgRate: '19.5%',
    avgLoanAmount: 'R 58,000',
    lenderCount: '28+',
    descriptionEn: 'Industrial city with strong mining and manufacturing sector',
    descriptionLocal: 'Industriële stad met sterk mynbou- en vervaardigingsektor'
  },
  {
    slug: 'richards-bay',
    nameEn: 'Richards Bay',
    nameLocal: 'Richards Bay',
    regionSlug: 'kwazulu-natal',
    regionName: 'KwaZulu-Natal',
    population: '378K',
    avgRate: '19.3%',
    avgLoanAmount: 'R 60,000',
    lenderCount: '26+',
    descriptionEn: 'Port and industrial center with growing loan market',
    descriptionLocal: 'Hawe- en industriële sentrum met groeiende leningsmark'
  },
  {
    slug: 'port-shepstone',
    nameEn: 'Port Shepstone',
    nameLocal: 'Port Shepstone',
    regionSlug: 'kwazulu-natal',
    regionName: 'KwaZulu-Natal',
    population: '55K',
    avgRate: '19.8%',
    avgLoanAmount: 'R 55,000',
    lenderCount: '20+',
    descriptionEn: 'South Coast town with tourism and service economy',
    descriptionLocal: 'Suidkusdorp met toerisme- en dienste-ekonomie'
  },
  {
    slug: 'ladysmith',
    nameEn: 'Ladysmith',
    nameLocal: 'Ladysmith',
    regionSlug: 'kwazulu-natal',
    regionName: 'KwaZulu-Natal',
    population: '237K',
    avgRate: '19.7%',
    avgLoanAmount: 'R 56,000',
    lenderCount: '22+',
    descriptionEn: 'Historic town with agricultural and service sectors',
    descriptionLocal: 'Historiese dorp met landbou- en dienstesektore'
  },

  // Eastern Cape cities
  {
    slug: 'gqeberha',
    nameEn: 'Gqeberha (Port Elizabeth)',
    nameLocal: 'Gqeberha (Port Elizabeth)',
    regionSlug: 'eastern-cape',
    regionName: 'Eastern Cape',
    population: '1.3M',
    avgRate: '19.5%',
    avgLoanAmount: 'R 62,000',
    lenderCount: '35+',
    descriptionEn: 'Automotive manufacturing hub with established banking sector',
    descriptionLocal: 'Motorvoertuigvervaardigingsmiddelpunt met gevestigde banksektor'
  },
  {
    slug: 'east-london',
    nameEn: 'East London',
    nameLocal: 'East London',
    regionSlug: 'eastern-cape',
    regionName: 'Eastern Cape',
    population: '755K',
    avgRate: '19.8%',
    avgLoanAmount: 'R 58,000',
    lenderCount: '30+',
    descriptionEn: 'Only river port in South Africa with diverse loan offerings',
    descriptionLocal: 'Enigste rivierhawe in Suid-Afrika met diverse leningsaanbiedinge'
  },
  {
    slug: 'mthatha',
    nameEn: 'Mthatha',
    nameLocal: 'Mthatha',
    regionSlug: 'eastern-cape',
    regionName: 'Eastern Cape',
    population: '450K',
    avgRate: '20.2%',
    avgLoanAmount: 'R 52,000',
    lenderCount: '24+',
    descriptionEn: 'Regional center with expanding financial services',
    descriptionLocal: 'Streeksentrum met uitbreidende finansiële dienste'
  },
  {
    slug: 'uitenhage',
    nameEn: 'Uitenhage',
    nameLocal: 'Uitenhage',
    regionSlug: 'eastern-cape',
    regionName: 'Eastern Cape',
    population: '228K',
    avgRate: '19.7%',
    avgLoanAmount: 'R 56,000',
    lenderCount: '26+',
    descriptionEn: 'Industrial town near Port Elizabeth with competitive rates',
    descriptionLocal: 'Industriële dorp naby Port Elizabeth met mededingende tariewe'
  },
  {
    slug: 'grahamstown',
    nameEn: 'Grahamstown',
    nameLocal: 'Grahamstown',
    regionSlug: 'eastern-cape',
    regionName: 'Eastern Cape',
    population: '140K',
    avgRate: '20.0%',
    avgLoanAmount: 'R 54,000',
    lenderCount: '22+',
    descriptionEn: 'University city with student and general loan products',
    descriptionLocal: 'Universiteitsstad met student- en algemene leningsprodukte'
  },
  {
    slug: 'queenstown',
    nameEn: 'Queenstown',
    nameLocal: 'Queenstown',
    regionSlug: 'eastern-cape',
    regionName: 'Eastern Cape',
    population: '186K',
    avgRate: '20.1%',
    avgLoanAmount: 'R 53,000',
    lenderCount: '20+',
    descriptionEn: 'Agricultural and commercial center with local lenders',
    descriptionLocal: 'Landbou- en kommersiële sentrum met plaaslike leners'
  },

  // Limpopo cities
  {
    slug: 'polokwane',
    nameEn: 'Polokwane',
    nameLocal: 'Polokwane',
    regionSlug: 'limpopo',
    regionName: 'Limpopo',
    population: '628K',
    avgRate: '20.2%',
    avgLoanAmount: 'R 56,000',
    lenderCount: '28+',
    descriptionEn: 'Provincial capital with growing financial inclusion',
    descriptionLocal: 'Provinsiale hoofstad met groeiende finansiële insluiting'
  },
  {
    slug: 'mokopane',
    nameEn: 'Mokopane',
    nameLocal: 'Mokopane',
    regionSlug: 'limpopo',
    regionName: 'Limpopo',
    population: '39K',
    avgRate: '20.5%',
    avgLoanAmount: 'R 52,000',
    lenderCount: '18+',
    descriptionEn: 'Mining town with accessible loan services',
    descriptionLocal: 'Mynboudorp met toeganklike leningsdienste'
  },
  {
    slug: 'thohoyandou',
    nameEn: 'Thohoyandou',
    nameLocal: 'Thohoyandou',
    regionSlug: 'limpopo',
    regionName: 'Limpopo',
    population: '69K',
    avgRate: '20.8%',
    avgLoanAmount: 'R 50,000',
    lenderCount: '16+',
    descriptionEn: 'Regional center with expanding lending market',
    descriptionLocal: 'Streeksentrum met uitbreidende leningsmark'
  },
  {
    slug: 'tzaneen',
    nameEn: 'Tzaneen',
    nameLocal: 'Tzaneen',
    regionSlug: 'limpopo',
    regionName: 'Limpopo',
    population: '30K',
    avgRate: '20.6%',
    avgLoanAmount: 'R 51,000',
    lenderCount: '17+',
    descriptionEn: 'Agricultural hub with seasonal loan demand',
    descriptionLocal: 'Landbousentrum met seisoenale leningaanvraag'
  },
  {
    slug: 'musina',
    nameEn: 'Musina',
    nameLocal: 'Musina',
    regionSlug: 'limpopo',
    regionName: 'Limpopo',
    population: '69K',
    avgRate: '20.7%',
    avgLoanAmount: 'R 50,000',
    lenderCount: '15+',
    descriptionEn: 'Border town with mining and trade focus',
    descriptionLocal: 'Grensdorp met mynbou- en handelsfokus'
  },
  {
    slug: 'phalaborwa',
    nameEn: 'Phalaborwa',
    nameLocal: 'Phalaborwa',
    regionSlug: 'limpopo',
    regionName: 'Limpopo',
    population: '135K',
    avgRate: '20.4%',
    avgLoanAmount: 'R 52,000',
    lenderCount: '18+',
    descriptionEn: 'Mining and tourism town with competitive loan options',
    descriptionLocal: 'Mynbou- en toeristedorp met mededingende leningsopsies'
  }
]
