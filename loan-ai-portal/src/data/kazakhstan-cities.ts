/**
 * Kazakhstan Cities Data for Loan Information
 * Major cities across Kazakhstan regions
 */

export interface KazakhstanCityInfo {
  name: string
  slug: string
  nameKk: string // Kazakh name
  region: string
  regionSlug: string
  population: string
  avgLoanAmount: string
  avgRate: string
  description: string
  descriptionKk: string
  loanTypes: string[]
  loanTypesKk: string[]
  nearbyCity: string[]
}

export const kazakhstanCities: KazakhstanCityInfo[] = [
  {
    name: 'Almaty',
    slug: 'almaty',
    nameKk: 'Алматы',
    region: 'Almaty City',
    regionSlug: 'almaty',
    population: '2.0M',
    avgLoanAmount: '3,500,000 ₸',
    avgRate: '18.5%',
    description: 'Financial capital with highest loan availability and competitive rates from major banks.',
    descriptionKk: 'Ірі банктерден ең жоғары несие қолжетімділігі мен бәсекеге қабілетті мөлшерлемелері бар қаржы астанасы.',
    loanTypes: ['Personal Loans', 'Mortgage', 'Auto Loans', 'Business Loans', 'Credit Cards'],
    loanTypesKk: ['Жеке несиелер', 'Ипотека', 'Автокредит', 'Бизнес несиелері', 'Несие карталары'],
    nearbyCity: ['Talgar', 'Kapshagay', 'Issyk']
  },
  {
    name: 'Astana',
    slug: 'astana',
    nameKk: 'Астана',
    region: 'Astana City',
    regionSlug: 'astana',
    population: '1.4M',
    avgLoanAmount: '3,200,000 ₸',
    avgRate: '19.0%',
    description: 'Capital city with modern banking infrastructure and growing fintech sector.',
    descriptionKk: 'Заманауи банктік инфрақұрылымы мен дамып келе жатқан финтех секторы бар астана.',
    loanTypes: ['Personal Loans', 'Mortgage', 'Consumer Credit', 'Business Financing'],
    loanTypesKk: ['Жеке несиелер', 'Ипотека', 'Тұтынушылық несие', 'Бизнес қаржыландыру'],
    nearbyCity: ['Kokshetau', 'Esil', 'Stepnogorsk']
  },
  {
    name: 'Shymkent',
    slug: 'shymkent',
    nameKk: 'Шымкент',
    region: 'Shymkent City',
    regionSlug: 'shymkent',
    population: '1.1M',
    avgLoanAmount: '2,500,000 ₸',
    avgRate: '20.5%',
    description: 'Third largest city with expanding microfinance options and agricultural lending.',
    descriptionKk: 'Микроқаржыландыру опциялары мен ауыл шаруашылығы несиесі дамып келе жатқан үшінші ірі қала.',
    loanTypes: ['Personal Loans', 'Small Business', 'Agricultural', 'Consumer Credit'],
    loanTypesKk: ['Жеке несиелер', 'Шағын бизнес', 'Ауыл шаруашылығы', 'Тұтынушылық несие'],
    nearbyCity: ['Turkistan', 'Kentau', 'Sayram']
  },
  {
    name: 'Karagandy',
    slug: 'karagandy',
    nameKk: 'Қарағанды',
    region: 'Karagandy Region',
    regionSlug: 'karagandy',
    population: '0.5M',
    avgLoanAmount: '2,600,000 ₸',
    avgRate: '19.5%',
    description: 'Industrial center with diverse loan products for mining and manufacturing sectors.',
    descriptionKk: 'Тау-кен және өндіріс секторлары үшін әртүрлі несие өнімдері бар өнеркәсіптік орталық.',
    loanTypes: ['Personal Loans', 'Industrial Loans', 'Auto Loans', 'Housing'],
    loanTypesKk: ['Жеке несиелер', 'Өнеркәсіптік несиелер', 'Автокредит', 'Тұрғын үй'],
    nearbyCity: ['Temirtau', 'Balkhash', 'Saran']
  },
  {
    name: 'Aktobe',
    slug: 'aktobe',
    nameKk: 'Ақтөбе',
    region: 'Aktobe Region',
    regionSlug: 'aktobe',
    population: '0.5M',
    avgLoanAmount: '2,400,000 ₸',
    avgRate: '20.0%',
    description: 'Western Kazakhstan hub with oil industry related financing and personal loans.',
    descriptionKk: 'Мұнай өнеркәсібіне байланысты қаржыландыру және жеке несиелері бар Батыс Қазақстан орталығы.',
    loanTypes: ['Personal Loans', 'Business Loans', 'Consumer Credit', 'Auto Loans'],
    loanTypesKk: ['Жеке несиелер', 'Бизнес несиелері', 'Тұтынушылық несие', 'Автокредит'],
    nearbyCity: ['Kandyagash', 'Khromtau', 'Alga']
  },
  {
    name: 'Oskemen',
    slug: 'oskemen',
    nameKk: 'Өскемен',
    region: 'East Kazakhstan Region',
    regionSlug: 'east-kazakhstan',
    population: '0.3M',
    avgLoanAmount: '2,400,000 ₸',
    avgRate: '20.5%',
    description: 'Eastern city with mining industry loans and personal financing options.',
    descriptionKk: 'Тау-кен өнеркәсібінің несиелері мен жеке қаржыландыру опциялары бар шығыс қаласы.',
    loanTypes: ['Personal Loans', 'Mining Sector', 'Housing', 'Consumer Credit'],
    loanTypesKk: ['Жеке несиелер', 'Тау-кен секторы', 'Тұрғын үй', 'Тұтынушылық несие'],
    nearbyCity: ['Semey', 'Ridder', 'Ayagoz']
  },
  {
    name: 'Taraz',
    slug: 'taraz',
    nameKk: 'Тараз',
    region: 'Jambyl Region',
    regionSlug: 'jambyl',
    population: '0.4M',
    avgLoanAmount: '2,200,000 ₸',
    avgRate: '21.0%',
    description: 'Ancient city on trade routes with growing microfinance and consumer lending.',
    descriptionKk: 'Микроқаржыландыру мен тұтынушылық несие беру дамып келе жатқан сауда жолдарындағы ежелгі қала.',
    loanTypes: ['Personal Loans', 'Small Business', 'Agricultural', 'Trade Finance'],
    loanTypesKk: ['Жеке несиелер', 'Шағын бизнес', 'Ауыл шаруашылығы', 'Сауда қаржысы'],
    nearbyCity: ['Karatau', 'Shu', 'Merke']
  },
  {
    name: 'Pavlodar',
    slug: 'pavlodar',
    nameKk: 'Павлодар',
    region: 'Pavlodar Region',
    regionSlug: 'pavlodar',
    population: '0.3M',
    avgLoanAmount: '2,500,000 ₸',
    avgRate: '19.8%',
    description: 'Northern industrial city with energy sector financing and personal loans.',
    descriptionKk: 'Энергия секторының қаржыландыруы мен жеке несиелері бар солтүстік өнеркәсіптік қала.',
    loanTypes: ['Personal Loans', 'Energy Sector', 'Industrial', 'Consumer Credit'],
    loanTypesKk: ['Жеке несиелер', 'Энергия секторы', 'Өнеркәсіптік', 'Тұтынушылық несие'],
    nearbyCity: ['Ekibastuz', 'Aksu', 'Irtyshsk']
  },
  {
    name: 'Semey',
    slug: 'semey',
    nameKk: 'Семей',
    region: 'East Kazakhstan Region',
    regionSlug: 'east-kazakhstan',
    population: '0.4M',
    avgLoanAmount: '2,300,000 ₸',
    avgRate: '20.5%',
    description: 'Historic city with educational institutions and growing personal loan market.',
    descriptionKk: 'Білім беру мекемелері мен дамып келе жатқан жеке несие нарығы бар тарихи қала.',
    loanTypes: ['Personal Loans', 'Education Loans', 'Consumer Credit', 'Small Business'],
    loanTypesKk: ['Жеке несиелер', 'Білім несиелері', 'Тұтынушылық несие', 'Шағын бизнес'],
    nearbyCity: ['Oskemen', 'Ayagoz', 'Kurchatov']
  },
  {
    name: 'Aktau',
    slug: 'aktau',
    nameKk: 'Ақтау',
    region: 'Mangystau Region',
    regionSlug: 'mangystau',
    population: '0.2M',
    avgLoanAmount: '3,000,000 ₸',
    avgRate: '19.0%',
    description: 'Caspian Sea port city with oil industry workers and high income lending.',
    descriptionKk: 'Мұнай өнеркәсібінің жұмысшылары мен жоғары табыстық несиесі бар Каспий теңізінің порт қаласы.',
    loanTypes: ['Personal Loans', 'Oil & Gas Sector', 'Housing', 'Auto Loans'],
    loanTypesKk: ['Жеке несиелер', 'Мұнай-газ секторы', 'Тұрғын үй', 'Автокредит'],
    nearbyCity: ['Zhanaozen', 'Fort-Shevchenko', 'Shetpe']
  },
  {
    name: 'Kokshetau',
    slug: 'kokshetau',
    nameKk: 'Көкшетау',
    region: 'Akmola Region',
    regionSlug: 'akmola',
    population: '0.2M',
    avgLoanAmount: '2,200,000 ₸',
    avgRate: '20.5%',
    description: 'Northern city with agricultural and rural development financing.',
    descriptionKk: 'Ауыл шаруашылығы мен ауылдық даму қаржыландыруы бар солтүстік қала.',
    loanTypes: ['Personal Loans', 'Agricultural', 'Rural Development', 'Small Business'],
    loanTypesKk: ['Жеке несиелер', 'Ауыл шаруашылығы', 'Ауылдық даму', 'Шағын бизнес'],
    nearbyCity: ['Astana', 'Stepnogorsk', 'Shchuchinsk']
  },
  {
    name: 'Turkistan',
    slug: 'turkistan',
    nameKk: 'Түркістан',
    region: 'Turkistan Region',
    regionSlug: 'turkistan',
    population: '0.2M',
    avgLoanAmount: '2,000,000 ₸',
    avgRate: '22.0%',
    description: 'Ancient spiritual center with Islamic finance options and microfinance.',
    descriptionKk: 'Ислами қаржыландыру опциялары мен микроқаржыландыруы бар ежелгі рухани орталық.',
    loanTypes: ['Personal Loans', 'Islamic Finance', 'Small Business', 'Agricultural'],
    loanTypesKk: ['Жеке несиелер', 'Ислами қаржыландыру', 'Шағын бизнес', 'Ауыл шаруашылығы'],
    nearbyCity: ['Shymkent', 'Kentau', 'Arys']
  },
  {
    name: 'Atyrau',
    slug: 'atyrau',
    nameKk: 'Атырау',
    region: 'Atyrau Region',
    regionSlug: 'atyrau',
    population: '0.3M',
    avgLoanAmount: '2,800,000 ₸',
    avgRate: '19.5%',
    description: 'Oil capital with specialized financing for energy sector and high-income earners.',
    descriptionKk: 'Энергия секторына мамандандырылған қаржыландыру және жоғары табысты адамдарға арналған мұнай астанасы.',
    loanTypes: ['Personal Loans', 'Oil & Gas', 'Housing', 'Business Loans'],
    loanTypesKk: ['Жеке несиелер', 'Мұнай-газ', 'Тұрғын үй', 'Бизнес несиелері'],
    nearbyCity: ['Kulsary', 'Makat', 'Dossor']
  },
  {
    name: 'Taldykorgan',
    slug: 'taldykorgan',
    nameKk: 'Талдықорған',
    region: 'Almaty Region',
    regionSlug: 'almaty-region',
    population: '0.2M',
    avgLoanAmount: '2,300,000 ₸',
    avgRate: '21.0%',
    description: 'Regional center with agricultural loans and growing consumer credit market.',
    descriptionKk: 'Ауыл шаруашылығы несиелері мен тұтынушылық несие нарығы дамып келе жатқан аймақтық орталық.',
    loanTypes: ['Personal Loans', 'Agricultural', 'Consumer Credit', 'Small Business'],
    loanTypesKk: ['Жеке несиелер', 'Ауыл шаруашылығы', 'Тұтынушылық несие', 'Шағын бизнес'],
    nearbyCity: ['Kapshagay', 'Tekeli', 'Ushtobe']
  },
  {
    name: 'Kyzylorda',
    slug: 'kyzylorda',
    nameKk: 'Қызылорда',
    region: 'Kyzylorda Region',
    regionSlug: 'kyzylorda',
    population: '0.3M',
    avgLoanAmount: '2,100,000 ₸',
    avgRate: '21.5%',
    description: 'Southern city on Syr Darya river with agricultural and space industry financing.',
    descriptionKk: 'Ауыл шаруашылығы мен ғарыш өнеркәсібінің қаржыландыруы бар Сырдарияның оңтүстік қаласы.',
    loanTypes: ['Personal Loans', 'Agricultural', 'Space Industry', 'Consumer Credit'],
    loanTypesKk: ['Жеке несиелер', 'Ауыл шаруашылығы', 'Ғарыш өнеркәсібі', 'Тұтынушылық несие'],
    nearbyCity: ['Baikonur', 'Aralsk', 'Kazalinsk']
  }
]

// Helper functions
export function getCityBySlug(slug: string): KazakhstanCityInfo | undefined {
  return kazakhstanCities.find(c => c.slug === slug)
}

export function getCitiesByRegion(regionSlug: string): KazakhstanCityInfo[] {
  return kazakhstanCities.filter(c => c.regionSlug === regionSlug)
}

export function getAllCitySlugs(): string[] {
  return kazakhstanCities.map(c => c.slug)
}

export function getCitiesByPopulation(): KazakhstanCityInfo[] {
  return [...kazakhstanCities].sort((a, b) => {
    const popA = parseFloat(a.population.replace(/[^\d.]/g, ''))
    const popB = parseFloat(b.population.replace(/[^\d.]/g, ''))
    return popB - popA
  })
}
