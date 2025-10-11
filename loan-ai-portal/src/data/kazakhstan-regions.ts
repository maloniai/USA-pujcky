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
  },
  {
    name: 'Akmola Region',
    slug: 'akmola',
    nameKk: 'Ақмола облысы',
    population: '0.7M',
    avgLoanAmount: '2,200,000 ₸',
    avgRate: '20.5%',
    maxLoanAmount: '10,000,000 ₸',
    description: 'Northern agricultural region surrounding the capital with rural and urban lending.',
    descriptionKk: 'Астананы қоршап жатқан ауыл шаруашылығы мен қалалық несие берумен солтүстік облыс.',
    regulations: [
      'NBK supervised lending',
      'Maximum APR: 56%',
      '14-day withdrawal period',
      'Affordability assessment',
      'Licensed institutions required',
      'Credit history verification',
      'Fair lending practices',
      'Consumer rights protected'
    ],
    regulationsKk: [
      'ҚҰБ қадағалайтын несие беру',
      'Максималды жылдық пайыздық мөлшерлеме: 56%',
      '14 күндік бас тарту мерзімі',
      'Төлем қабілетін бағалау',
      'Лицензияланған мекемелер қажет',
      'Несиелік тарихты тексеру',
      'Әділ несие беру тәжірибелері',
      'Тұтынушы құқықтары қорғалған'
    ],
    majorCities: ['Kokshetau', 'Stepnogorsk', 'Shchuchinsk'],
    topLoanTypes: ['Personal Loans', 'Agricultural', 'Rural Development'],
    topLoanTypesKk: ['Жеке несиелер', 'Ауыл шаруашылығы', 'Ауылдық даму']
  },
  {
    name: 'Aktobe Region',
    slug: 'aktobe',
    nameKk: 'Ақтөбе облысы',
    population: '0.9M',
    avgLoanAmount: '2,400,000 ₸',
    avgRate: '20.0%',
    maxLoanAmount: '12,000,000 ₸',
    description: 'Western industrial region with mining and oil sector lending opportunities.',
    descriptionKk: 'Тау-кен және мұнай секторының несие мүмкіндіктерімен батыс өнеркәсіптік облыс.',
    regulations: [
      'NBK regulatory framework',
      'Maximum APR: 56%',
      'Cooling-off period: 14 days',
      'Income verification mandatory',
      'Licensed lenders only',
      'Credit bureau consultation',
      'Written agreements required',
      'Consumer protection laws'
    ],
    regulationsKk: [
      'ҚҰБ реттеуші шеңбері',
      'Максималды жылдық пайыздық мөлшерлеме: 56%',
      'Бас тарту кезеңі: 14 күн',
      'Табысты тексеру міндетті',
      'Тек лицензияланған несие берушілер',
      'Несиелік бюромен кеңесу',
      'Жазбаша келісімдер қажет',
      'Тұтынушыларды қорғау заңдары'
    ],
    majorCities: ['Aktobe', 'Kandyagash', 'Khromtau'],
    topLoanTypes: ['Personal Loans', 'Industrial', 'Business Loans'],
    topLoanTypesKk: ['Жеке несиелер', 'Өнеркәсіптік', 'Бизнес несиелері']
  },
  {
    name: 'Atyrau Region',
    slug: 'atyrau',
    nameKk: 'Атырау облысы',
    population: '0.7M',
    avgLoanAmount: '2,800,000 ₸',
    avgRate: '19.5%',
    maxLoanAmount: '14,000,000 ₸',
    description: 'Oil capital region with high-income workers and energy sector financing.',
    descriptionKk: 'Жоғары табысты жұмысшылар мен энергия секторының қаржыландыруы бар мұнай астанасы облысы.',
    regulations: [
      'NBK oversight and regulation',
      'Maximum APR: 56%',
      'Mandatory 14-day withdrawal',
      'Creditworthiness assessment',
      'Licensed provider requirement',
      'Credit bureau reporting',
      'Transparent pricing',
      'Borrower rights protection'
    ],
    regulationsKk: [
      'ҚҰБ қадағалауы және реттеуі',
      'Максималды жылдық пайыздық мөлшерлеме: 56%',
      'Міндетті 14 күндік бас тарту',
      'Несиелік қабілетті бағалау',
      'Лицензияланған провайдер талабы',
      'Несиелік бюроға есеп беру',
      'Мөлдір баға белгілеу',
      'Қарыз алушы құқықтарын қорғау'
    ],
    majorCities: ['Atyrau', 'Kulsary', 'Makat'],
    topLoanTypes: ['Personal Loans', 'Oil & Gas', 'Housing'],
    topLoanTypesKk: ['Жеке несиелер', 'Мұнай-газ', 'Тұрғын үй']
  },
  {
    name: 'Jambyl Region',
    slug: 'jambyl',
    nameKk: 'Жамбыл облысы',
    population: '1.1M',
    avgLoanAmount: '2,200,000 ₸',
    avgRate: '21.0%',
    maxLoanAmount: '10,000,000 ₸',
    description: 'Southern agricultural region on historic Silk Road with trade and farming focus.',
    descriptionKk: 'Сауда және егіншілікке бағытталған тарихи Жібек жолындағы оңтүстік ауыл шаруашылығы облысы.',
    regulations: [
      'NBK regulated lending',
      'Maximum APR: 56%',
      'Withdrawal rights: 14 days',
      'Income assessment required',
      'Licensed lender requirement',
      'Credit history check',
      'Fair lending enforced',
      'Consumer protection'
    ],
    regulationsKk: [
      'ҚҰБ реттейтін несие беру',
      'Максималды жылдық пайыздық мөлшерлеме: 56%',
      'Бас тарту құқығы: 14 күн',
      'Табыс бағалауы қажет',
      'Лицензиялық несие беруші талабы',
      'Несиелік тарихты тексеру',
      'Әділ несие беру қолданылады',
      'Тұтынушыларды қорғау'
    ],
    majorCities: ['Taraz', 'Karatau', 'Shu'],
    topLoanTypes: ['Personal Loans', 'Agricultural', 'Trade Finance'],
    topLoanTypesKk: ['Жеке несиелер', 'Ауыл шаруашылығы', 'Сауда қаржысы']
  },
  {
    name: 'West Kazakhstan Region',
    slug: 'west-kazakhstan',
    nameKk: 'Батыс Қазақстан облысы',
    population: '0.6M',
    avgLoanAmount: '2,500,000 ₸',
    avgRate: '20.5%',
    maxLoanAmount: '11,000,000 ₸',
    description: 'Western border region with oil industry and cross-border trade financing.',
    descriptionKk: 'Мұнай өнеркәсібі және трансшекаралық сауда қаржыландыруы бар батыс шекара облысы.',
    regulations: [
      'NBK supervision',
      'Maximum APR: 56%',
      '14-day cooling-off period',
      'Income verification needed',
      'Licensed providers only',
      'Credit assessment mandatory',
      'Written contracts required',
      'Consumer rights protection'
    ],
    regulationsKk: [
      'ҚҰБ қадағалауы',
      'Максималды жылдық пайыздық мөлшерлеме: 56%',
      '14 күндік бас тарту кезеңі',
      'Табысты тексеру қажет',
      'Тек лицензияланған провайдерлер',
      'Несиелік бағалау міндетті',
      'Жазбаша шарттар қажет',
      'Тұтынушы құқықтарын қорғау'
    ],
    majorCities: ['Oral', 'Aksai', 'Uralsk'],
    topLoanTypes: ['Personal Loans', 'Oil Sector', 'Trade'],
    topLoanTypesKk: ['Жеке несиелер', 'Мұнай секторы', 'Сауда']
  },
  {
    name: 'Kostanay Region',
    slug: 'kostanay',
    nameKk: 'Қостанай облысы',
    population: '0.9M',
    avgLoanAmount: '2,300,000 ₸',
    avgRate: '20.5%',
    maxLoanAmount: '11,000,000 ₸',
    description: 'Northern agricultural and industrial region with grain farming and mining.',
    descriptionKk: 'Астық егіншілігі мен тау-кен өндірісі бар солтүстік ауыл шаруашылығы және өнеркәсіптік облыс.',
    regulations: [
      'NBK regulated',
      'Maximum APR: 56%',
      'Withdrawal right: 14 days',
      'Affordability checks',
      'Licensed institutions',
      'Credit bureau checks',
      'Fair lending practices',
      'Full disclosure required'
    ],
    regulationsKk: [
      'ҚҰБ реттейді',
      'Максималды жылдық пайыздық мөлшерлеме: 56%',
      'Бас тарту құқығы: 14 күн',
      'Төлем қабілетін тексеру',
      'Лицензияланған мекемелер',
      'Несиелік бюро тексерулері',
      'Әділ несие беру тәжірибелері',
      'Толық ашық жариялау қажет'
    ],
    majorCities: ['Kostanay', 'Rudny', 'Lisakovsk'],
    topLoanTypes: ['Personal Loans', 'Agricultural', 'Mining'],
    topLoanTypesKk: ['Жеке несиелер', 'Ауыл шаруашылығы', 'Тау-кен']
  },
  {
    name: 'Kyzylorda Region',
    slug: 'kyzylorda',
    nameKk: 'Қызылорда облысы',
    population: '0.8M',
    avgLoanAmount: '2,100,000 ₸',
    avgRate: '21.5%',
    maxLoanAmount: '9,500,000 ₸',
    description: 'Southern desert region with Baikonur Cosmodrome, agricultural and space industry focus.',
    descriptionKk: 'Байқоңыр ғарыш айлағы бар оңтүстік шөл облысы, ауыл шаруашылығы мен ғарыш өнеркәсібі.',
    regulations: [
      'NBK regulatory oversight',
      'Maximum APR: 56%',
      'Mandatory cooling-off: 14 days',
      'Income assessment',
      'Licensed lenders',
      'Credit scoring',
      'Consumer protection',
      'Transparent terms'
    ],
    regulationsKk: [
      'ҚҰБ реттеушілік қадағалауы',
      'Максималды жылдық пайыздық мөлшерлеме: 56%',
      'Міндетті бас тарту: 14 күн',
      'Табыс бағалауы',
      'Лицензияланған несие берушілер',
      'Несиелік бағалау',
      'Тұтынушыларды қорғау',
      'Мөлдір шарттар'
    ],
    majorCities: ['Kyzylorda', 'Baikonur', 'Aralsk'],
    topLoanTypes: ['Personal Loans', 'Agricultural', 'Space Industry'],
    topLoanTypesKk: ['Жеке несиелер', 'Ауыл шаруашылығы', 'Ғарыш өнеркәсібі']
  },
  {
    name: 'North Kazakhstan Region',
    slug: 'north-kazakhstan',
    nameKk: 'Солтүстік Қазақстан облысы',
    population: '0.5M',
    avgLoanAmount: '2,200,000 ₸',
    avgRate: '21.0%',
    maxLoanAmount: '10,000,000 ₸',
    description: 'Northernmost agricultural region with grain farming and rural development focus.',
    descriptionKk: 'Астық егіншілігі мен ауылдық даму бағыты бар ең солтүстік ауыл шаруашылығы облысы.',
    regulations: [
      'NBK supervision',
      'Maximum APR: 56%',
      '14-day withdrawal period',
      'Creditworthiness evaluation',
      'Licensed lenders required',
      'Credit bureau consultation',
      'Fair practices enforced',
      'Borrower protection'
    ],
    regulationsKk: [
      'ҚҰБ қадағалауы',
      'Максималды жылдық пайыздық мөлшерлеме: 56%',
      '14 күндік бас тарту мерзімі',
      'Несиелік қабілетті бағалау',
      'Лицензияланған несие берушілер қажет',
      'Несиелік бюромен кеңесу',
      'Әділ тәжірибелер қолданылады',
      'Қарыз алушыны қорғау'
    ],
    majorCities: ['Petropavlovsk', 'Bulayevo', 'Mamlyutka'],
    topLoanTypes: ['Personal Loans', 'Agricultural', 'Rural'],
    topLoanTypesKk: ['Жеке несиелер', 'Ауыл шаруашылығы', 'Ауылдық']
  },
  {
    name: 'Pavlodar Region',
    slug: 'pavlodar',
    nameKk: 'Павлодар облысы',
    population: '0.7M',
    avgLoanAmount: '2,500,000 ₸',
    avgRate: '19.8%',
    maxLoanAmount: '12,500,000 ₸',
    description: 'Northern industrial region with energy, aluminum, and chemical industries.',
    descriptionKk: 'Энергетика, алюминий және химия өнеркәсібі бар солтүстік өнеркәсіптік облыс.',
    regulations: [
      'NBK regulated lending',
      'Maximum APR: 56%',
      'Cooling-off period: 14 days',
      'Income verification',
      'Licensed institutions only',
      'Credit history review',
      'Consumer protection laws',
      'Written agreements'
    ],
    regulationsKk: [
      'ҚҰБ реттейтін несие беру',
      'Максималды жылдық пайыздық мөлшерлеме: 56%',
      'Бас тарту кезеңі: 14 күн',
      'Табысты тексеру',
      'Тек лицензияланған мекемелер',
      'Несиелік тарихты қарау',
      'Тұтынушыларды қорғау заңдары',
      'Жазбаша келісімдер'
    ],
    majorCities: ['Pavlodar', 'Ekibastuz', 'Aksu'],
    topLoanTypes: ['Personal Loans', 'Industrial', 'Energy'],
    topLoanTypesKk: ['Жеке несиелер', 'Өнеркәсіптік', 'Энергетика']
  },
  {
    name: 'Ulytau Region',
    slug: 'ulytau',
    nameKk: 'Ұлытау облысы',
    population: '0.2M',
    avgLoanAmount: '2,000,000 ₸',
    avgRate: '22.0%',
    maxLoanAmount: '8,000,000 ₸',
    description: 'Newly formed central region with mining and rural development.',
    descriptionKk: 'Тау-кен өндірісі мен ауылдық даму бар жаңадан құрылған орталық облыс.',
    regulations: [
      'NBK oversight',
      'Maximum APR: 56%',
      'Withdrawal right: 14 days',
      'Affordability assessment',
      'Licensed lenders',
      'Credit checks',
      'Consumer rights',
      'Transparent terms'
    ],
    regulationsKk: [
      'ҚҰБ қадағалауы',
      'Максималды жылдық пайыздық мөлшерлеме: 56%',
      'Бас тарту құқығы: 14 күн',
      'Төлем қабілетін бағалау',
      'Лицензияланған несие берушілер',
      'Несиелік тексерулер',
      'Тұтынушы құқықтары',
      'Мөлдір шарттар'
    ],
    majorCities: ['Zhezkazgan', 'Satpayev', 'Karazhal'],
    topLoanTypes: ['Personal Loans', 'Mining', 'Rural Development'],
    topLoanTypesKk: ['Жеке несиелер', 'Тау-кен', 'Ауылдық даму']
  },
  {
    name: 'Abai Region',
    slug: 'abai',
    nameKk: 'Абай облысы',
    population: '0.6M',
    avgLoanAmount: '2,300,000 ₸',
    avgRate: '20.5%',
    maxLoanAmount: '10,500,000 ₸',
    description: 'Newly formed eastern region separated from East Kazakhstan with mining focus.',
    descriptionKk: 'Тау-кен өндірісіне бағытталған Шығыс Қазақстаннан бөлінген жаңадан құрылған шығыс облысы.',
    regulations: [
      'NBK regulated',
      'Maximum APR: 56%',
      '14-day cooling-off',
      'Income verification',
      'Licensed providers',
      'Credit assessment',
      'Fair lending',
      'Consumer protection'
    ],
    regulationsKk: [
      'ҚҰБ реттейді',
      'Максималды жылдық пайыздық мөлшерлеме: 56%',
      '14 күндік бас тарту',
      'Табысты тексеру',
      'Лицензияланған провайдерлер',
      'Несиелік бағалау',
      'Әділ несие беру',
      'Тұтынушыларды қорғау'
    ],
    majorCities: ['Semey', 'Ayagoz', 'Kurchatov'],
    topLoanTypes: ['Personal Loans', 'Mining', 'Industrial'],
    topLoanTypesKk: ['Жеке несиелер', 'Тау-кен', 'Өнеркәсіптік']
  },
  {
    name: 'Jetisu Region',
    slug: 'jetisu',
    nameKk: 'Жетісу облысы',
    population: '0.6M',
    avgLoanAmount: '2,300,000 ₸',
    avgRate: '21.0%',
    maxLoanAmount: '10,000,000 ₸',
    description: 'Newly formed southeastern region with agricultural and tourism potential.',
    descriptionKk: 'Ауыл шаруашылығы мен туризм әлеуеті бар жаңадан құрылған оңтүстік-шығыс облысы.',
    regulations: [
      'NBK supervision',
      'Maximum APR: 56%',
      'Mandatory 14-day withdrawal',
      'Income assessment',
      'Licensed lenders only',
      'Credit bureau check',
      'Consumer rights protected',
      'Full disclosure'
    ],
    regulationsKk: [
      'ҚҰБ қадағалауы',
      'Максималды жылдық пайыздық мөлшерлеме: 56%',
      'Міндетті 14 күндік бас тарту',
      'Табыс бағалауы',
      'Тек лицензияланған несие берушілер',
      'Несиелік бюро тексеруі',
      'Тұтынушы құқықтары қорғалған',
      'Толық ашық жариялау'
    ],
    majorCities: ['Taldykorgan', 'Tekeli', 'Ushtobe'],
    topLoanTypes: ['Personal Loans', 'Agricultural', 'Tourism'],
    topLoanTypesKk: ['Жеке несиелер', 'Ауыл шаруашылығы', 'Туризм']
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
