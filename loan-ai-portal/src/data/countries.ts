/**
 * Global Countries Data
 * Defines live and coming-soon country hubs for directory pages
 * 
 * Updated: October 15, 2025
 * Status: AU (Australia), CO (Colombia), CA (Canada) are LIVE
 * All others are UNDER CONSTRUCTION
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

// ============================================================================
// LIVE MARKETS - Production Ready, Fully Operational
// ============================================================================

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
    code: 'au',
    name: 'Australia',
    flag: '🇦🇺',
    description:
      '✅ LIVE: Personal loans and debt consolidation for Australian residents. Compare offers from ASIC-licensed lenders across all 8 states and territories.',
    coverage: '8 states & territories • 100+ cities',
    population: '26M',
    languages: ['English'],
    regulator: 'Australian Securities and Investments Commission (ASIC)',
    href: '/au',
    ctaLabel: 'Explore Australian loans',
    status: 'live',
    launchDate: '2025-10',
  },
  {
    code: 'co',
    name: 'Colombia',
    flag: '🇨🇴',
    description:
      '✅ LIVE: Préstamos personales y consolidación de deudas para residentes en Colombia. Compara ofertas de prestamistas licenciados por la Superintendencia Financiera.',
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
    code: 'ca',
    name: 'Canada',
    flag: '🇨🇦',
    description:
      '✅ LIVE: Personal loans, mortgages, and debt consolidation for Canadian residents. Bilingual support in English and French across all 13 provinces and territories.',
    coverage: '13 provinces & territories • 200+ cities',
    population: '39M',
    languages: ['English', 'French'],
    regulator: 'FCAC & provincial regulators',
    href: '/ca',
    ctaLabel: 'Explore Canada loans',
    status: 'live',
    launchDate: '2025-10',
  },
]

// ============================================================================
// UNDER CONSTRUCTION - Coming Q4 2025 / Q1 2026
// ============================================================================

export const inProgressCountries: CountryHub[] = [
  {
    code: 'mx',
    name: 'México',
    flag: '🇲🇽',
    description:
      '🚧 UNDER CONSTRUCTION: Préstamos personales y consolidación de deudas para residentes en México. Compara ofertas de prestamistas regulados por CONDUSEF y CNBV.',
    coverage: '32 estados • 150+ ciudades',
    population: '128M',
    languages: ['Spanish'],
    regulator: 'CONDUSEF y CNBV',
    href: '/mx',
    ctaLabel: 'Coming Soon - México',
    status: 'in-progress',
    launchDate: 'Q4 2025',
  },
  {
    code: 'kz',
    name: 'Kazakhstan',
    flag: '🇰🇿',
    description:
      '🚧 UNDER CONSTRUCTION: Қазақстандағы жеке несиелерді салыстырыңыз. ҚР Ұлттық Банкі лицензиясы бар несие берушілерден ұсыныстар.',
    coverage: '17 өңір • 150+ қала',
    population: '19.6M',
    languages: ['Kazakh', 'Russian'],
    regulator: 'Қазақстан Республикасының Ұлттық Банкі',
    href: '/kz',
    ctaLabel: 'Coming Soon - Kazakhstan',
    status: 'in-progress',
    launchDate: 'Q4 2025',
  },
  {
    code: 'vn',
    name: 'Vietnam',
    flag: '🇻🇳',
    description:
      '🚧 UNDER CONSTRUCTION: Vay tiêu dùng và hợp nhất nợ cho cư dân Việt Nam. So sánh lãi suất từ các tổ chức tín dụng được cấp phép bởi Ngân hàng Nhà nước.',
    coverage: '3 khu vực • 63 tỉnh thành • 50+ thành phố',
    population: '98M',
    languages: ['Vietnamese'],
    regulator: 'Ngân hàng Nhà nước Việt Nam (State Bank of Vietnam)',
    href: '/vn',
    ctaLabel: 'Coming Soon - Vietnam',
    status: 'in-progress',
    launchDate: 'Q4 2025',
  },
  {
    code: 'pl',
    name: 'Poland',
    flag: '🇵🇱',
    description:
      '🚧 UNDER CONSTRUCTION: Pożyczki osobiste i konsolidacja długów dla mieszkańców Polski. Porównaj oferty licencjonowanych pożyczykodawców KNF.',
    coverage: '16 województw • 100+ miast',
    population: '38M',
    languages: ['Polish'],
    regulator: 'Komisja Nadzoru Finansowego (KNF)',
    href: '/pl',
    ctaLabel: 'Coming Soon - Poland',
    status: 'in-progress',
    launchDate: 'Q1 2026',
  },
  {
    code: 'es',
    name: 'Spain',
    flag: '🇪🇸',
    description:
      '🚧 UNDER CONSTRUCTION: Préstamos personales y consolidación de deudas para residentes en España. Compara ofertas de prestamistas regulados por el Banco de España.',
    coverage: '17 comunidades autónomas • 80+ ciudades',
    population: '47M',
    languages: ['Spanish', 'Catalan', 'Basque', 'Galician'],
    regulator: 'Banco de España',
    href: '/es',
    ctaLabel: 'Coming Soon - Spain',
    status: 'in-progress',
    launchDate: 'Q1 2026',
  },
  {
    code: 'za',
    name: 'South Africa',
    flag: '🇿🇦',
    description:
      '🚧 UNDER CONSTRUCTION: Personal loans and debt consolidation for South African residents. Compare offers from NCR-registered lenders.',
    coverage: '9 provinces • 50+ cities',
    population: '60M',
    languages: ['English', 'Afrikaans', 'Zulu', 'Xhosa'],
    regulator: 'National Credit Regulator (NCR)',
    href: '/za',
    ctaLabel: 'Coming Soon - South Africa',
    status: 'in-progress',
    launchDate: 'Q1 2026',
  },
  {
    code: 'nz',
    name: 'New Zealand',
    flag: '🇳🇿',
    description:
      '🚧 UNDER CONSTRUCTION: Personal loans and debt consolidation for New Zealand residents. Compare offers from FMA-licensed lenders nationwide.',
    coverage: '16 regions • 30+ cities',
    population: '5M',
    languages: ['English', 'Māori'],
    regulator: 'Financial Markets Authority (FMA)',
    href: '/nz',
    ctaLabel: 'Coming Soon - New Zealand',
    status: 'in-progress',
    launchDate: 'Q1 2026',
  },
  {
    code: 'ph',
    name: 'Philippines',
    flag: '🇵🇭',
    description:
      '🚧 UNDER CONSTRUCTION: Personal loans and debt consolidation for Philippine residents. Compare offers from BSP-licensed lenders across all regions.',
    coverage: '17 regions • 100+ cities',
    population: '113M',
    languages: ['English', 'Filipino'],
    regulator: 'Bangko Sentral ng Pilipinas (BSP)',
    href: '/ph',
    ctaLabel: 'Coming Soon - Philippines',
    status: 'in-progress',
    launchDate: 'Q1 2026',
  },
]

// ============================================================================
// PLANNED EXPANSIONS - Future Markets
// ============================================================================

export const comingSoonCountries: CountryHub[] = []

// ============================================================================
// EXPORTS & HELPERS
// ============================================================================

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

// Export summary statistics
export const countryStats = {
  live: liveCountries.length,
  inProgress: inProgressCountries.length,
  comingSoon: comingSoonCountries.length,
  total: allCountries.length,
  livePopulation: liveCountries.reduce(
    (sum, c) => sum + Number(c.population?.replace(/[^\d]/g, '') || 0),
    0
  ),
}
