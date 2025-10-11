/**
 * Kazakhstan Regions Data for Loan Information
 * 17 Regions (облыстар) + 3 Cities of republican significance
 */

export interface KazakhstanRegionInfo {
  name: string
  slug: string
  nameKk: string // Kazakh name
  population: string
  avgLoanAmount: string
  avgRate: string
  maxLoanAmount: string
  description: string
  descriptionKk: string
  regulations: string[]
  regulationsKk: string[]
  majorCities: string[]
  topLoanTypes: string[]
  topLoanTypesKk: string[]
}

export const kazakhstanRegions: KazakhstanRegionInfo[] = [
  {
    name: 'Almaty City',
    slug: 'almaty',
    nameKk: 'Алматы қаласы',
    population: '2.0M',
    avgLoanAmount: '3,500,000 ₸',
    avgRate: '18.5%',
    maxLoanAmount: '20,000,000 ₸',
    description: 'The largest city and financial center with the highest loan availability.',
    descriptionKk: 'Ең ірі қала және қаржы орталығы, несиелердің ең жоғары қолжетімділігі бар.',
    regulations: [
      'Regulated by National Bank of Kazakhstan (NBK)',
      'Maximum APR: 56% per Law on Microfinance Activities',
      'Mandatory cooling-off period: 14 days',
      'Licensed lender requirement',
      'Credit bureau check mandatory',
      'Consumer protection under Consumer Rights Protection Law',
      'Currency: Kazakhstani Tenge (₸)',
      'Loan amount limits apply based on borrower income'
    ],
    regulationsKk: [
      'Қазақстан Ұлттық Банкі (ҚҰБ) реттейді',
      'Максималды жылдық пайыздық мөлшерлеме: 56% Микроқаржылық қызмет туралы заңға сәйкес',
      'Міндетті бас тарту кезеңі: 14 күн',
      'Лицензияланған несие беруші талап етіледі',
      'Несиелік бюро тексеруі міндетті',
      'Тұтынушылардың құқықтарын қорғау туралы заңға сәйкес қорғау',
      'Валюта: Қазақстан теңгесі (₸)',
      'Несие сомасының шектеулері қарыз алушының табысына байланысты қолданылады'
    ],
    majorCities: ['Almaty'],
    topLoanTypes: ['Personal Loans', 'Business Loans', 'Consumer Credit'],
    topLoanTypesKk: ['Жеке несиелер', 'Бизнес несиелері', 'Тұтынушылық несие']
  },
  {
    name: 'Astana City',
    slug: 'astana',
    nameKk: 'Астана қаласы',
    population: '1.4M',
    avgLoanAmount: '3,200,000 ₸',
    avgRate: '19.0%',
    maxLoanAmount: '18,000,000 ₸',
    description: 'The capital city with growing financial services and modern banking infrastructure.',
    descriptionKk: 'Қаржылық қызметтері мен заманауи банк инфрақұрылымы дамып келе жатқан астана.',
    regulations: [
      'NBK supervision',
      'Maximum APR: 56%',
      '14-day cooling-off period',
      'Income verification required',
      'Licensed microfinance organizations',
      'Credit history assessment mandatory',
      'Transparent cost disclosure required',
      'Borrower rights protection'
    ],
    regulationsKk: [
      'ҚҰБ қадағалауы',
      'Максималды жылдық пайыздық мөлшерлеме: 56%',
      '14 күндік бас тарту кезеңі',
      'Табыс тексеруі қажет',
      'Лицензияланған микроқаржылық ұйымдар',
      'Несиелік тарихты бағалау міндетті',
      'Шығындарды ашық жариялау қажет',
      'Қарыз алушының құқықтарын қорғау'
    ],
    majorCities: ['Astana'],
    topLoanTypes: ['Personal Loans', 'Mortgage', 'Auto Loans'],
    topLoanTypesKk: ['Жеке несиелер', 'Ипотека', 'Автокредит']
  },
  {
    name: 'Shymkent City',
    slug: 'shymkent',
    nameKk: 'Шымкент қаласы',
    population: '1.1M',
    avgLoanAmount: '2,500,000 ₸',
    avgRate: '20.5%',
    maxLoanAmount: '12,000,000 ₸',
    description: 'Third largest city with expanding microfinance and consumer lending.',
    descriptionKk: 'Микроқаржыландыру және тұтынушылық несие беру дамып келе жатқан үшінші ірі қала.',
    regulations: [
      'NBK regulatory framework',
      'Maximum APR: 56%',
      'Mandatory 14-day withdrawal right',
      'Affordability assessment required',
      'Licensed lenders only',
      'Credit bureau consultation',
      'Written loan agreements required',
      'Pre-contractual information mandatory'
    ],
    regulationsKk: [
      'ҚҰБ реттеуші шеңбері',
      'Максималды жылдық пайыздық мөлшерлеме: 56%',
      'Міндетті 14 күндік бас тарту құқығы',
      'Төлем қабілетін бағалау қажет',
      'Тек лицензияланған несие берушілер',
      'Несиелік бюромен кеңесу',
      'Жазбаша несие шарттары қажет',
      'Шарт алдындағы ақпарат міндетті'
    ],
    majorCities: ['Shymkent'],
    topLoanTypes: ['Personal Loans', 'Small Business', 'Agricultural'],
    topLoanTypesKk: ['Жеке несиелер', 'Шағын бизнес', 'Ауыл шаруашылығы']
  },
  {
    name: 'Almaty Region',
    slug: 'almaty-region',
    nameKk: 'Алматы облысы',
    population: '2.1M',
    avgLoanAmount: '2,300,000 ₸',
    avgRate: '21.0%',
    maxLoanAmount: '10,000,000 ₸',
    description: 'Largest region by population surrounding Almaty city with diverse economy.',
    descriptionKk: 'Алматы қаласын қоршап жатқан, әртүрлі экономикасы бар халық саны бойынша ең ірі облыс.',
    regulations: [
      'NBK oversight',
      'Maximum APR: 56%',
      '14-day cooling-off period',
      'Income proof mandatory',
      'Licensed financial institutions',
      'Credit scoring required',
      'Fair lending practices enforced',
      'Consumer protection laws'
    ],
    regulationsKk: [
      'ҚҰБ қадағалауы',
      'Максималды жылдық пайыздық мөлшерлеме: 56%',
      '14 күндік бас тарту кезеңі',
      'Табыс дәлелі міндетті',
      'Лицензияланған қаржы институттары',
      'Несиелік бағалау қажет',
      'Әділ несие беру тәжірибелері қолданылады',
      'Тұтынушыларды қорғау заңдары'
    ],
    majorCities: ['Taldykorgan', 'Kapshagay', 'Tekeli'],
    topLoanTypes: ['Personal Loans', 'Agricultural', 'Rural Development'],
    topLoanTypesKk: ['Жеке несиелер', 'Ауыл шаруашылығы', 'Ауылдық даму']
  },
  {
    name: 'Turkistan Region',
    slug: 'turkistan',
    nameKk: 'Түркістан облысы',
    population: '2.1M',
    avgLoanAmount: '2,000,000 ₸',
    avgRate: '22.0%',
    maxLoanAmount: '9,000,000 ₸',
    description: 'Southern region with growing microfinance sector and Islamic banking options.',
    descriptionKk: 'Микроқаржы секторы мен ислами банкинг опциялары дамып келе жатқан оңтүстік облыс.',
    regulations: [
      'NBK regulated lending',
      'Maximum APR: 56%',
      'Withdrawal rights: 14 days',
      'Creditworthiness assessment',
      'Licensed lender requirement',
      'Credit bureau reporting',
      'Transparent pricing required',
      'Islamic finance options available'
    ],
    regulationsKk: [
      'ҚҰБ реттейтін несие беру',
      'Максималды жылдық пайыздық мөлшерлеме: 56%',
      'Бас тарту құқығы: 14 күн',
      'Несиелік қабілетті бағалау',
      'Лицензиялық несие беруші талабы',
      'Несиелік бюроға есеп беру',
      'Мөлдір баға белгілеу қажет',
      'Ислами қаржыландыру опциялары бар'
    ],
    majorCities: ['Turkistan', 'Kentau', 'Arys'],
    topLoanTypes: ['Personal Loans', 'Islamic Finance', 'SME Loans'],
    topLoanTypesKk: ['Жеке несиелер', 'Ислами қаржыландыру', 'ШОБ несиелері']
  },
  {
    name: 'East Kazakhstan Region',
    slug: 'east-kazakhstan',
    nameKk: 'Шығыс Қазақстан облысы',
    population: '1.4M',
    avgLoanAmount: '2,400,000 ₸',
    avgRate: '20.5%',
    maxLoanAmount: '11,000,000 ₸',
    description: 'Eastern industrial region with mining and manufacturing lending focus.',
    descriptionKk: 'Тау-кен өндірісі мен өндірістік несие берудің орталығындағы шығыс өнеркәсіптік облыс.',
    regulations: [
      'NBK supervision',
      'Maximum APR: 56%',
      'Cooling-off period: 14 days',
      'Income verification needed',
      'Licensed providers only',
      'Credit history review',
      'Written contracts mandatory',
      'Consumer rights protection'
    ],
    regulationsKk: [
      'ҚҰБ қадағалауы',
      'Максималды жылдық пайыздық мөлшерлеме: 56%',
      'Бас тарту кезеңі: 14 күн',
      'Табыс тексеруі қажет',
      'Тек лицензияланған провайдерлер',
      'Несиелік тарихты қарау',
      'Жазбаша шарттар міндетті',
      'Тұтынушы құқықтарын қорғау'
    ],
    majorCities: ['Oskemen', 'Semey', 'Ayagoz'],
    topLoanTypes: ['Personal Loans', 'Industrial', 'Business Development'],
    topLoanTypesKk: ['Жеке несиелер', 'Өнеркәсіптік', 'Бизнесті дамыту']
  },
  {
    name: 'Karagandy Region',
    slug: 'karagandy',
    nameKk: 'Қарағанды облысы',
    population: '1.4M',
    avgLoanAmount: '2,600,000 ₸',
    avgRate: '19.5%',
    maxLoanAmount: '13,000,000 ₸',
    description: 'Central industrial region with strong banking presence and diverse loan products.',
    descriptionKk: 'Күшті банктік қатысуы және әртүрлі несие өнімдері бар орталық өнеркәсіптік облыс.',
    regulations: [
      'NBK regulated',
      'Maximum APR: 56%',
      '14-day withdrawal right',
      'Affordability checks',
      'Licensed institutions',
      'Credit bureau checks',
      'Fair lending enforced',
      'Full disclosure required'
    ],
    regulationsKk: [
      'ҚҰБ реттейді',
      'Максималды жылдық пайыздық мөлшерлеме: 56%',
      'Бас тарту құқығы 14 күн',
      'Төлем қабілетін тексеру',
      'Лицензияланған мекемелер',
      'Несиелік бюро тексерулері',
      'Әділ несие беру қолданылады',
      'Толық ашық жариялау қажет'
    ],
    majorCities: ['Karagandy', 'Temirtau', 'Balkhash'],
    topLoanTypes: ['Personal Loans', 'Mining Sector', 'Energy Projects'],
    topLoanTypesKk: ['Жеке несиелер', 'Тау-кен секторы', 'Энергия жобалары']
  },
  {
    name: 'Mangystau Region',
    slug: 'mangystau',
    nameKk: 'Маңғыстау облысы',
    population: '0.7M',
    avgLoanAmount: '3,000,000 ₸',
    avgRate: '19.0%',
    maxLoanAmount: '15,000,000 ₸',
    description: 'Oil-rich western region with high income levels and specialized lending.',
    descriptionKk: 'Табыс деңгейі жоғары және мамандандырылған несие берумен мұнай бай батыс облысы.',
    regulations: [
      'NBK regulatory oversight',
      'Maximum APR: 56%',
      'Mandatory 14-day cooling-off',
      'Income assessment required',
      'Licensed lenders only',
      'Credit scoring mandatory',
      'Consumer protection enforced',
      'Transparent terms required'
    ],
    regulationsKk: [
      'ҚҰБ реттеушілік қадағалауы',
      'Максималды жылдық пайыздық мөлшерлеме: 56%',
      'Міндетті 14 күндік бас тарту',
      'Табыс бағалауы қажет',
      'Тек лицензияланған несие берушілер',
      'Несиелік бағалау міндетті',
      'Тұтынушыларды қорғау қолданылады',
      'Мөлдір шарттар қажет'
    ],
    majorCities: ['Aktau', 'Zhanaozen', 'Fort-Shevchenko'],
    topLoanTypes: ['Personal Loans', 'Oil & Gas Sector', 'Housing'],
    topLoanTypesKk: ['Жеке несиелер', 'Мұнай-газ секторы', 'Тұрғын үй']
  }
]

// Helper functions
export function getRegionBySlug(slug: string): KazakhstanRegionInfo | undefined {
  return kazakhstanRegions.find(r => r.slug === slug)
}

export function getAllRegionSlugs(): string[] {
  return kazakhstanRegions.map(r => r.slug)
}

export function getRegionsByPopulation(): KazakhstanRegionInfo[] {
  return [...kazakhstanRegions].sort((a, b) => {
    const popA = parseFloat(a.population.replace(/[^\d.]/g, ''))
    const popB = parseFloat(b.population.replace(/[^\d.]/g, ''))
    return popB - popA
  })
}
