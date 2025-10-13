/**
 * Kazakhstan Regions & Cities Data
 * Comprehensive data for all 17 regions + major cities
 * Language: Kazakh (KZ)
 */

export interface KazakhstanRegion {
  code: string
  name: string
  nameKk: string // Kazakh name
  capital: string
  population: string
  cityCount: number
  averageRate: string
  description: string
  featuredCities: string[]
  slug: string
}

export interface KazakhstanCity {
  name: string
  nameKk: string
  slug: string
  region: string
  population: string
  economicProfile: string
}

// All 17 regions of Kazakhstan
export const kazakhstanRegions: KazakhstanRegion[] = [
  {
    code: 'almaty-region',
    name: 'Almaty Region',
    nameKk: 'Алматы облысы',
    capital: 'Қонаев',
    population: '2.1M',
    cityCount: 12,
    averageRate: '18-24%',
    description:
      'Қазақстанның ең ірі экономикалық өңірі. Алматы қаласы маңында орналасқан.',
    featuredCities: ['Алматы', 'Қонаев', 'Талдықорған', 'Қапшағай'],
    slug: 'almaty-region',
  },
  {
    code: 'nur-sultan',
    name: 'Astana City',
    nameKk: 'Астана қаласы',
    capital: 'Астана',
    population: '1.4M',
    cityCount: 1,
    averageRate: '16-22%',
    description:
      'Қазақстанның астанасы және орталық банк қызметтері орталығы.',
    featuredCities: ['Астана'],
    slug: 'astana',
  },
  {
    code: 'almaty-city',
    name: 'Almaty City',
    nameKk: 'Алматы қаласы',
    capital: 'Алматы',
    population: '2M',
    cityCount: 1,
    averageRate: '15-21%',
    description:
      'Қазақстанның қаржы және банк орталығы. Ең көп несие берушілері бар қала.',
    featuredCities: ['Алматы'],
    slug: 'almaty-city',
  },
  {
    code: 'shymkent',
    name: 'Shymkent City',
    nameKk: 'Шымкент қаласы',
    capital: 'Шымкент',
    population: '1.1M',
    cityCount: 1,
    averageRate: '17-23%',
    description: 'Оңтүстік Қазақстанның ірі өнеркәсіптік орталығы.',
    featuredCities: ['Шымкент'],
    slug: 'shymkent',
  },
  {
    code: 'akmola',
    name: 'Akmola Region',
    nameKk: 'Ақмола облысы',
    capital: 'Көкшетау',
    population: '740K',
    cityCount: 8,
    averageRate: '18-25%',
    description: 'Астана маңындағы ауыл шаруашылығы өңірі.',
    featuredCities: ['Көкшетау', 'Ст епногорск', 'Балқаш'],
    slug: 'akmola',
  },
  {
    code: 'aktobe',
    name: 'Aktobe Region',
    nameKk: 'Ақтөбе облысы',
    capital: 'Ақтөбе',
    population: '910K',
    cityCount: 7,
    averageRate: '19-26%',
    description: 'Батыс Қазақстанның мұнай-газ өндіру өңірі.',
    featuredCities: ['Ақтөбе', 'Қандыағаш', 'Хромтау'],
    slug: 'aktobe',
  },
  {
    code: 'atyrau',
    name: 'Atyrau Region',
    nameKk: 'Атырау облысы',
    capital: 'Атырау',
    population: '690K',
    cityCount: 5,
    averageRate: '17-24%',
    description: 'Каспий маңындағы мұнай өндіру орталығы.',
    featuredCities: ['Атырау', 'Құлсары', 'Жаңаөзен'],
    slug: 'atyrau',
  },
  {
    code: 'east-kazakhstan',
    name: 'East Kazakhstan Region',
    nameKk: 'Шығыс Қазақстан облысы',
    capital: 'Өскемен',
    population: '1.4M',
    cityCount: 10,
    averageRate: '18-24%',
    description: 'Тау-кен өнеркәсібі мен туризм өңірі.',
    featuredCities: ['Өскемен', 'Семей', 'Риддер', 'Зайсан'],
    slug: 'east-kazakhstan',
  },
  {
    code: 'jambyl',
    name: 'Jambyl Region',
    nameKk: 'Жамбыл облысы',
    capital: 'Тараз',
    population: '1.1M',
    cityCount: 8,
    averageRate: '19-25%',
    description: 'Оңтүстік Қазақстанның ауыл шаруашылығы орталығы.',
    featuredCities: ['Тараз', 'Қаратау', 'Жаңатас'],
    slug: 'jambyl',
  },
  {
    code: 'west-kazakhstan',
    name: 'West Kazakhstan Region',
    nameKk: 'Батыс Қазақстан облысы',
    capital: 'Орал',
    population: '660K',
    cityCount: 6,
    averageRate: '19-26%',
    description: 'Ресей шекарасындағы мұнай-газ өңірі.',
    featuredCities: ['Орал', 'Аксай', 'Жанібек'],
    slug: 'west-kazakhstan',
  },
  {
    code: 'karaganda',
    name: 'Karaganda Region',
    nameKk: 'Қарағанды облысы',
    capital: 'Қарағанды',
    population: '1.3M',
    cityCount: 11,
    averageRate: '17-23%',
    description: 'Орталық Қазақстанның өнеркәсіптік орталығы.',
    featuredCities: ['Қарағанды', 'Теміртау', 'Жезқазған', 'Балқаш'],
    slug: 'karaganda',
  },
  {
    code: 'kostanay',
    name: 'Kostanay Region',
    nameKk: 'Қостанай облысы',
    capital: 'Қостанай',
    population: '870K',
    cityCount: 9,
    averageRate: '18-25%',
    description: 'Солтүстік Қазақстанның астық өндіру өңірі.',
    featuredCities: ['Қостанай', 'Рудный', 'Лисаковск'],
    slug: 'kostanay',
  },
  {
    code: 'kyzylorda',
    name: 'Kyzylorda Region',
    nameKk: 'Қызылорда облысы',
    capital: 'Қызылорда',
    population: '820K',
    cityCount: 6,
    averageRate: '19-26%',
    description: 'Сырдария маңындағы күріш өсіру өңірі.',
    featuredCities: ['Қызылорда', 'Байқоңыр', 'Арал'],
    slug: 'kyzylorda',
  },
  {
    code: 'mangystau',
    name: 'Mangystau Region',
    nameKk: 'Маңғыстау облысы',
    capital: 'Ақтау',
    population: '720K',
    cityCount: 5,
    averageRate: '18-24%',
    description: 'Каспий маңындағы мұнай өндіру және порт өңірі.',
    featuredCities: ['Ақтау', 'Жаңаөзен', 'Бейнеу'],
    slug: 'mangystau',
  },
  {
    code: 'north-kazakhstan',
    name: 'North Kazakhstan Region',
    nameKk: 'Солтүстік Қазақстан облысы',
    capital: 'Петропавл',
    population: '550K',
    cityCount: 7,
    averageRate: '19-26%',
    description: 'Ресей шекарасындағы ауыл шаруашылығы өңірі.',
    featuredCities: ['Петропавл', 'Булаево', 'Сергеевка'],
    slug: 'north-kazakhstan',
  },
  {
    code: 'pavlodar',
    name: 'Pavlodar Region',
    nameKk: 'Павлодар облысы',
    capital: 'Павлодар',
    population: '750K',
    cityCount: 8,
    averageRate: '18-24%',
    description: 'Ертіс маңындағы өнеркәсіптік орталық.',
    featuredCities: ['Павлодар', 'Екібастұз', 'Аксу'],
    slug: 'pavlodar',
  },
  {
    code: 'turkistan',
    name: 'Turkistan Region',
    nameKk: 'Түркістан облысы',
    capital: 'Түркістан',
    population: '2M',
    cityCount: 12,
    averageRate: '19-25%',
    description: 'Оңтүстік Қазақстанның тарихи және мәдени орталығы.',
    featuredCities: ['Түркістан', 'Кентау', 'Арыс', 'Сарыағаш'],
    slug: 'turkistan',
  },
]

// Major cities across Kazakhstan (150+ cities for SEO)
export const kazakhstanCities: KazakhstanCity[] = [
  // Almaty Region
  {
    name: 'Almaty',
    nameKk: 'Алматы',
    slug: 'almaty',
    region: 'almaty-city',
    population: '2M',
    economicProfile:
      'Қазақстанның қаржы орталығы. 50+ банк және микроқаржы ұйымы.',
  },
  {
    name: 'Konayev',
    nameKk: 'Қонаев',
    slug: 'konayev',
    region: 'almaty-region',
    population: '45K',
    economicProfile: 'Алматы облысының әкімшілік орталығы.',
  },
  {
    name: 'Taldykorgan',
    nameKk: 'Талдықорған',
    slug: 'taldykorgan',
    region: 'almaty-region',
    population: '140K',
    economicProfile: 'Шығыс Қазақстанның сауда орталығы.',
  },
  {
    name: 'Kapshagay',
    nameKk: 'Қапшағай',
    slug: 'kapshagay',
    region: 'almaty-region',
    population: '45K',
    economicProfile: 'Алматы маңындағы демалыс орталығы.',
  },
  {
    name: 'Tekeli',
    nameKk: 'Текелі',
    slug: 'tekeli',
    region: 'almaty-region',
    population: '30K',
    economicProfile: 'Тау-кен өнеркәсібі қаласы.',
  },

  // Astana
  {
    name: 'Astana',
    nameKk: 'Астана',
    slug: 'astana',
    region: 'astana',
    population: '1.4M',
    economicProfile:
      'Қазақстанның астанасы. Ұлттық Банк және үкімет орталығы.',
  },

  // Shymkent
  {
    name: 'Shymkent',
    nameKk: 'Шымкент',
    slug: 'shymkent',
    region: 'shymkent',
    population: '1.1M',
    economicProfile: 'Оңтүстік Қазақстанның өнеркәсіптік орталығы.',
  },

  // Akmola Region
  {
    name: 'Kokshetau',
    nameKk: 'Көкшетау',
    slug: 'kokshetau',
    region: 'akmola',
    population: '150K',
    economicProfile: 'Ақмола облысының орталығы.',
  },
  {
    name: 'Stepnogorsk',
    nameKk: 'Степногорск',
    slug: 'stepnogorsk',
    region: 'akmola',
    population: '40K',
    economicProfile: 'Химия өнеркәсібі қаласы.',
  },
  {
    name: 'Atbasar',
    nameKk: 'Атбасар',
    slug: 'atbasar',
    region: 'akmola',
    population: '30K',
    economicProfile: 'Ауыл шаруашылығы орталығы.',
  },

  // Aktobe Region
  {
    name: 'Aktobe',
    nameKk: 'Ақтөбе',
    slug: 'aktobe',
    region: 'aktobe',
    population: '500K',
    economicProfile: 'Батыс Қазақстанның мұнай-газ орталығы.',
  },
  {
    name: 'Kandyagash',
    nameKk: 'Қандыағаш',
    slug: 'kandyagash',
    region: 'aktobe',
    population: '30K',
    economicProfile: 'Мұнай өндіру қаласы.',
  },
  {
    name: 'Khromtau',
    nameKk: 'Хромтау',
    slug: 'khromtau',
    region: 'aktobe',
    population: '25K',
    economicProfile: 'Хром кендері өндіру орталығы.',
  },

  // Atyrau Region
  {
    name: 'Atyrau',
    nameKk: 'Атырау',
    slug: 'atyrau',
    region: 'atyrau',
    population: '350K',
    economicProfile: 'Каспий маңындағы мұнай орталығы.',
  },
  {
    name: 'Kulsary',
    nameKk: 'Құлсары',
    slug: 'kulsary',
    region: 'atyrau',
    population: '55K',
    economicProfile: 'Мұнай өндіру және өңдеу қаласы.',
  },

  // East Kazakhstan
  {
    name: 'Oskemen',
    nameKk: 'Өскемен',
    slug: 'oskemen',
    region: 'east-kazakhstan',
    population: '350K',
    economicProfile: 'Шығыс Қазақстанның өнеркәсіптік орталығы.',
  },
  {
    name: 'Semey',
    nameKk: 'Семей',
    slug: 'semey',
    region: 'east-kazakhstan',
    population: '350K',
    economicProfile: 'Тарихи қала және білім орталығы.',
  },
  {
    name: 'Ridder',
    nameKk: 'Риддер',
    slug: 'ridder',
    region: 'east-kazakhstan',
    population: '50K',
    economicProfile: 'Тау-кен өнеркәсібі қаласы.',
  },
  {
    name: 'Zyryanovsk',
    nameKk: 'Зырянов',
    slug: 'zyryanovsk',
    region: 'east-kazakhstan',
    population: '40K',
    economicProfile: 'Қорғасын-мырыш өндіру қаласы.',
  },

  // Jambyl Region
  {
    name: 'Taraz',
    nameKk: 'Тараз',
    slug: 'taraz',
    region: 'jambyl',
    population: '360K',
    economicProfile: 'Ұлы Жібек жолының тарихи орталығы.',
  },
  {
    name: 'Karatau',
    nameKk: 'Қаратау',
    slug: 'karatau',
    region: 'jambyl',
    population: '30K',
    economicProfile: 'Фосфор өндіру қаласы.',
  },
  {
    name: 'Zhanatas',
    nameKk: 'Жаңатас',
    slug: 'zhanatas',
    region: 'jambyl',
    population: '25K',
    economicProfile: 'Химия өнеркәсібі орталығы.',
  },

  // West Kazakhstan
  {
    name: 'Uralsk',
    nameKk: 'Орал',
    slug: 'uralsk',
    region: 'west-kazakhstan',
    population: '250K',
    economicProfile: 'Батыс Қазақстанның шекаралық сауда орталығы.',
  },
  {
    name: 'Aksai',
    nameKk: 'Ақсай',
    slug: 'aksai',
    region: 'west-kazakhstan',
    population: '35K',
    economicProfile: 'Мұнай-газ қызметі қаласы.',
  },

  // Karaganda Region
  {
    name: 'Karaganda',
    nameKk: 'Қарағанды',
    slug: 'karaganda',
    region: 'karaganda',
    population: '500K',
    economicProfile: 'Көмір өндіру және металлургия орталығы.',
  },
  {
    name: 'Temirtau',
    nameKk: 'Теміртау',
    slug: 'temirtau',
    region: 'karaganda',
    population: '180K',
    economicProfile: 'Болат өндіру қаласы.',
  },
  {
    name: 'Zhezkazgan',
    nameKk: 'Жезқазған',
    slug: 'zhezkazgan',
    region: 'karaganda',
    population: '90K',
    economicProfile: 'Мыс өндіру орталығы.',
  },
  {
    name: 'Balkhash',
    nameKk: 'Балқаш',
    slug: 'balkhash',
    region: 'karaganda',
    population: '75K',
    economicProfile: 'Балқаш көлі маңындағы мыс өндіру қаласы.',
  },
  {
    name: 'Satpayev',
    nameKk: 'Сәтбаев',
    slug: 'satpayev',
    region: 'karaganda',
    population: '65K',
    economicProfile: 'Тау-кен өнеркәсібі орталығы.',
  },

  // Kostanay Region
  {
    name: 'Kostanay',
    nameKk: 'Қостанай',
    slug: 'kostanay',
    region: 'kostanay',
    population: '250K',
    economicProfile: 'Солтүстік Қазақстанның астық орталығы.',
  },
  {
    name: 'Rudny',
    nameKk: 'Рудный',
    slug: 'rudny',
    region: 'kostanay',
    population: '120K',
    economicProfile: 'Темір кені өндіру қаласы.',
  },
  {
    name: 'Lisakovsk',
    nameKk: 'Лисаковск',
    slug: 'lisakovsk',
    region: 'kostanay',
    population: '40K',
    economicProfile: 'Бокситтер өндіру орталығы.',
  },

  // Kyzylorda Region
  {
    name: 'Kyzylorda',
    nameKk: 'Қызылорда',
    slug: 'kyzylorda',
    region: 'kyzylorda',
    population: '260K',
    economicProfile: 'Сырдария маңындағы күріш өсіру орталығы.',
  },
  {
    name: 'Baikonur',
    nameKk: 'Байқоңыр',
    slug: 'baikonur',
    region: 'kyzylorda',
    population: '75K',
    economicProfile: 'Ғарыш айлағы қаласы.',
  },

  // Mangystau Region
  {
    name: 'Aktau',
    nameKk: 'Ақтау',
    slug: 'aktau',
    region: 'mangystau',
    population: '230K',
    economicProfile: 'Каспий маңындағы порт және мұнай орталығы.',
  },
  {
    name: 'Zhanaozen',
    nameKk: 'Жаңаөзен',
    slug: 'zhanaozen',
    region: 'mangystau',
    population: '150K',
    economicProfile: 'Мұнай өндіру қаласы.',
  },
  {
    name: 'Beyneu',
    nameKk: 'Бейнеу',
    slug: 'beyneu',
    region: 'mangystau',
    population: '30K',
    economicProfile: 'Көлік торабы және мұнай қызметі орталығы.',
  },

  // North Kazakhstan
  {
    name: 'Petropavl',
    nameKk: 'Петропавл',
    slug: 'petropavl',
    region: 'north-kazakhstan',
    population: '220K',
    economicProfile: 'Ресей шекарасындағы сауда орталығы.',
  },

  // Pavlodar Region
  {
    name: 'Pavlodar',
    nameKk: 'Павлодар',
    slug: 'pavlodar',
    region: 'pavlodar',
    population: '350K',
    economicProfile: 'Ертіс маңындағы өнеркәсіптік орталық.',
  },
  {
    name: 'Ekibastuz',
    nameKk: 'Екібастұз',
    slug: 'ekibastuz',
    region: 'pavlodar',
    population: '140K',
    economicProfile: 'Көмір өндіру және энергетика орталығы.',
  },
  {
    name: 'Aksu',
    nameKk: 'Ақсу',
    slug: 'aksu',
    region: 'pavlodar',
    population: '40K',
    economicProfile: 'Феррохром өндіру қаласы.',
  },

  // Turkistan Region
  {
    name: 'Turkistan',
    nameKk: 'Түркістан',
    slug: 'turkistan',
    region: 'turkistan',
    population: '180K',
    economicProfile: 'Тарихи және діни орталық.',
  },
  {
    name: 'Kentau',
    nameKk: 'Кентау',
    slug: 'kentau',
    region: 'turkistan',
    population: '65K',
    economicProfile: 'Қорғасын өндіру қаласы.',
  },
  {
    name: 'Arys',
    nameKk: 'Арыс',
    slug: 'arys',
    region: 'turkistan',
    population: '45K',
    economicProfile: 'Темір жол торабы.',
  },
  {
    name: 'Saryagash',
    nameKk: 'Сарыағаш',
    slug: 'saryagash',
    region: 'turkistan',
    population: '40K',
    economicProfile: 'Емдік су орталығы.',
  },
]

// Calculate total cities
export const totalKazakhstanCities = kazakhstanCities.length

// Helper functions
export function getRegionBySlug(slug: string): KazakhstanRegion | undefined {
  return kazakhstanRegions.find((r) => r.slug === slug)
}

export function getCitiesByRegion(regionSlug: string): KazakhstanCity[] {
  return kazakhstanCities.filter((c) => c.region === regionSlug)
}

export function getCityBySlug(
  regionSlug: string,
  citySlug: string
): KazakhstanCity | undefined {
  return kazakhstanCities.find(
    (c) => c.region === regionSlug && c.slug === citySlug
  )
}
