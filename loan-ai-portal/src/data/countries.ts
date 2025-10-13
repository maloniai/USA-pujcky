/**
 * Global Countries Data
 * Defines live and coming-soon country hubs for directory pages
 */

export type CountryStatus = 'live' | 'in-progress' | 'coming-soon'

export interface CountryHub {
  code: string
  name: string
  flag: string
  description: string
  coverage?: string
  population?: string
  languages: string[]
  regulator?: string
  href: string
  ctaLabel: string
  status: CountryStatus
  launchDate?: string
}

// Live country hubs currently serving users
export const liveCountries: CountryHub[] = [
  {
    code: 'us',
    name: 'United States',
    flag: '🇺🇸',
    description:
      'AI-powered personal loan matching for all 50 states. Compare rates from 100+ licensed lenders with instant pre-qualification.',
    coverage: '50 states • 1,200+ cities',
    population: '331M',
    languages: ['English', 'Spanish'],
    regulator: 'CFPB & state banking departments',
    href: '/us',
    ctaLabel: 'Explore USA loans',
    status: 'live',
    launchDate: '2024-03',
  },
  {
    code: 'ca',
    name: 'Canada',
    flag: '🇨🇦',
    description:
      'Personal loans, mortgages, and debt consolidation for Canadian residents. Bilingual support in English and French.',
    coverage: '13 provinces & territories • 200+ cities',
    population: '39M',
    languages: ['English', 'French'],
    regulator: 'FCAC & provincial regulators',
    href: '/ca',
    ctaLabel: 'Explore Canada loans',
    status: 'live',
    launchDate: '2025-10',
  },
  {
    code: 'cz',
    name: 'Czech Republic',
    flag: '🇨🇿',
    description:
      'Srovnání licencovaných půjček v České republice. AI průvodce sleduje RPSN, registry a krajské dotační programy.',
    coverage: '14 regions • 600+ cities',
    population: '10.5M',
    languages: ['Czech'],
    regulator: 'Czech National Bank (ČNB)',
    href: '/cz',
    ctaLabel: 'Explore Czech loans',
    status: 'live',
    launchDate: '2024-09',
  },
  {
    code: 'ro',
    name: 'Romania',
    flag: '🇷🇴',
    description:
      'Împrumuturi personale și consolidarea datoriilor pentru rezidenții din România. Compară ofertele de la creditori licențiați BNR.',
    coverage: '8 regiuni • 40+ orașe',
    population: '19M',
    languages: ['Romanian'],
    regulator: 'Banca Națională a României (BNR)',
    href: '/ro',
    ctaLabel: 'Explorează creditele din România',
    status: 'live',
    launchDate: '2025-01',
  },
  {
    code: 'co',
    name: 'Colombia',
    flag: '🇨🇴',
    description:
      'Préstamos personales y consolidación de deudas para residentes en Colombia. Compara ofertas de prestamistas licenciados por la Superintendencia Financiera.',
    coverage: '32 departamentos • 100+ ciudades',
    population: '51M',
    languages: ['Spanish'],
    regulator: 'Superintendencia Financiera de Colombia',
    href: '/co',
    ctaLabel: 'Explorar préstamos en Colombia',
    status: 'live',
    launchDate: '2025-10',
  },
  {
    code: 'mx',
    name: 'México',
    flag: '🇲🇽',
    description:
      'Préstamos personales y consolidación de deudas para residentes en México. Compara ofertas de prestamistas regulados por CONDUSEF y CNBV.',
    coverage: '32 estados • 150+ ciudades',
    population: '128M',
    languages: ['Spanish'],
    regulator: 'CONDUSEF y CNBV',
    href: '/mx',
    ctaLabel: 'Explorar préstamos en México',
    status: 'live',
    launchDate: '2025-10',
  },
  {
    code: 'kz',
    name: 'Kazakhstan',
    flag: '🇰🇿',
    description:
      'Қазақстандағы жеке несиелерді салыстырыңыз. ҚР Ұлттық Банкі лицензиясы бар несие берушілерден ұсыныстар.',
    coverage: '17 өңір • 150+ қала',
    population: '19.6M',
    languages: ['Kazakh'],
    regulator: 'Қазақстан Республикасының Ұлттық Банкі',
    href: '/kz',
    ctaLabel: 'Қазақстан несиелері',
    status: 'live',
    launchDate: '2025-10',
  },
  {
    code: 'vn',
    name: 'Vietnam',
    flag: '🇻🇳',
    description:
      'Vay tiêu dùng và hợp nhất nợ cho cư dân Việt Nam. So sánh lãi suất từ các tổ chức tín dụng được cấp phép bởi Ngân hàng Nhà nước.',
    coverage: '3 khu vực • 63 tỉnh thành • 50+ thành phố',
    population: '98M',
    languages: ['Vietnamese'],
    regulator: 'Ngân hàng Nhà nước Việt Nam (State Bank of Vietnam)',
    href: '/vn',
    ctaLabel: 'Khám phá vay Việt Nam',
    status: 'live',
    launchDate: '2025-10',
  },
]
// Country hubs in active development
export const inProgressCountries: CountryHub[] = []

// Planned country expansions
export const comingSoonCountries: CountryHub[] = [
  {
    code: 'pl',
    name: 'Poland',
    flag: '🇵🇱',
    description: 'Pożyczki osobiste i konsolidacja długów dla mieszkańców Polski.',
    population: '38M',
    languages: ['Polish'],
    href: '/pl',
    ctaLabel: 'Coming soon',
    status: 'coming-soon',
  },
  {
    code: 'es',
    name: 'Spain',
    flag: '🇪🇸',
    description: 'Préstamos personales y consolidación de deudas para residentes en España.',
    population: '47M',
    languages: ['Spanish'],
    href: '/es',
    ctaLabel: 'Coming soon',
    status: 'coming-soon',
  },
  {
    code: 'za',
    name: 'South Africa',
    flag: '🇿🇦',
    description: 'Personal loans and debt consolidation for South African residents.',
    population: '60M',
    languages: ['English', 'Afrikaans'],
    href: '/za',
    ctaLabel: 'Coming soon',
    status: 'coming-soon',
  },
  {
    code: 'au',
    name: 'Australia',
    flag: '🇦🇺',
    description: 'Personal loans and debt consolidation for Australian residents.',
    population: '26M',
    languages: ['English'],
    href: '/au',
    ctaLabel: 'Coming soon',
    status: 'coming-soon',
  },
  {
    code: 'nz',
    name: 'New Zealand',
    flag: '🇳🇿',
    description: 'Personal loans and debt consolidation for New Zealand residents.',
    population: '5M',
    languages: ['English', 'Māori'],
    href: '/nz',
    ctaLabel: 'Coming soon',
    status: 'coming-soon',
  },
  {
    code: 'ph',
    name: 'Philippines',
    flag: '🇵🇭',
    description: 'Personal loans and debt consolidation for Philippine residents.',
    population: '113M',
    languages: ['English', 'Filipino'],
    href: '/ph',
    ctaLabel: 'Coming soon',
    status: 'coming-soon',
  },
]

// All countries combined
export const allCountries: CountryHub[] = [
  ...liveCountries,
  ...inProgressCountries,
  ...comingSoonCountries,
]

// Legacy export for backwards compatibility
export const featuredCountries: CountryHub[] = liveCountries

// Helper functions
export function getCountryByCode(code: string): CountryHub | undefined {
  return allCountries.find((c) => c.code === code)
}

export function getLiveCountries(): CountryHub[] {
  return liveCountries
}

export function getComingSoonCountries(): CountryHub[] {
  return [...inProgressCountries, ...comingSoonCountries]
}
