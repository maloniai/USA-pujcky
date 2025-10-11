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
    code: 'vn',
    name: 'Vietnam',
    flag: '🇻🇳',
    description: 'Vay tiêu dùng và hợp nhất nợ cho cư dân Việt Nam. So sánh lãi suất từ các tổ chức tài chính được cấp phép.',
    coverage: '5 regions • 39 cities',
    population: '98M',
    languages: ['Vietnamese'],
    regulator: 'State Bank of Vietnam (NHNN)',
    href: '/vn',
    ctaLabel: 'Explore Vietnam loans',
    status: 'live',
    launchDate: '2025-01',
  },
]

// Country hubs in active development
export const inProgressCountries: CountryHub[] = [
  {
    code: 'ca',
    name: 'Canada',
    flag: '🇨🇦',
    description:
      'Personal loans, mortgages, and debt consolidation for Canadian residents. Launching with English and French support.',
    population: '39M',
    languages: ['English', 'French'],
    regulator: 'FCAC & provincial regulators',
    href: '/ca',
    ctaLabel: 'Coming Q1 2025',
    status: 'in-progress',
    launchDate: '2025-Q1',
  },
]

// Country hubs in active development (moving Vietnam to live)
export const vietnamHub: CountryHub = {
  code: 'vn',
  name: 'Vietnam',
  flag: '🇻🇳',
  description: 'Vay tiêu dùng và hợp nhất nợ cho cư dân Việt Nam. So sánh lãi suất từ các tổ chức tài chính được cấp phép.',
  coverage: '5 regions • 15+ cities',
  population: '98M',
  languages: ['Vietnamese'],
  regulator: 'State Bank of Vietnam (NHNN)',
  href: '/vn',
  ctaLabel: 'Explore Vietnam loans',
  status: 'live',
  launchDate: '2025-01',
}

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
    code: 'ro',
    name: 'Romania',
    flag: '🇷🇴',
    description: 'Împrumuturi personale și consolidarea datoriilor pentru rezidenții din România.',
    population: '19M',
    languages: ['Romanian'],
    href: '/ro',
    ctaLabel: 'Coming soon',
    status: 'coming-soon',
  },
  {
    code: 'vn',
    name: 'Vietnam',
    flag: '🇻🇳',
    description: 'Vay tiêu dùng và hợp nhất nợ cho cư dân Việt Nam. So sánh lãi suất từ các tổ chức tài chính được cấp phép.',
    coverage: '5 regions • 15+ cities',
    population: '98M',
    languages: ['Vietnamese'],
    regulator: 'State Bank of Vietnam (NHNN)',
    href: '/vn',
    ctaLabel: 'Explore Vietnam loans',
    status: 'live',
    launchDate: '2025-01',
  },
  {
    code: 'mx',
    name: 'Mexico',
    flag: '🇲🇽',
    description: 'Préstamos personales y consolidación de deudas para residentes en México.',
    population: '128M',
    languages: ['Spanish'],
    href: '/mx',
    ctaLabel: 'Coming soon',
    status: 'coming-soon',
  },
  {
    code: 'co',
    name: 'Colombia',
    flag: '🇨🇴',
    description: 'Préstamos personales y consolidación de deudas para residentes en Colombia.',
    population: '51M',
    languages: ['Spanish'],
    href: '/co',
    ctaLabel: 'Coming soon',
    status: 'coming-soon',
  },
  {
    code: 'kz',
    name: 'Kazakhstan',
    flag: '🇰🇿',
    description: 'Жеке несиелер және қарыздарды біріктіру Қазақстан тұрғындары үшін.',
    population: '19M',
    languages: ['Kazakh', 'Russian'],
    href: '/kz',
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
