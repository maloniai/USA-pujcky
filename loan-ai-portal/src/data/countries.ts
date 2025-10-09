export type CountryStatus = 'live' | 'beta' | 'coming-soon'

export interface CountryFeature {
  code: string
  name: string
  flag: string
  description: string
  coverage: string
  languages: string[]
  regulator: string
  href: string
  ctaLabel: string
  status: CountryStatus
}

export const featuredCountries: CountryFeature[] = [
  {
    code: 'us',
    name: 'United States',
    flag: '🇺🇸',
    description:
      'AI-guided personal loan comparisons across all 50 states with localized lender insights.',
    coverage: '50 states • 1,200+ cities • $5B+ funded',
    languages: ['English', 'Spanish'],
    regulator: 'CFPB & state banking departments',
    href: '/us',
    ctaLabel: 'Explore USA loans',
    status: 'live',
  },
  {
    code: 'cz',
    name: 'Czech Republic',
    flag: '🇨🇿',
    description:
      'Compliant personal loan comparisons covering Prague, Brno, Ostrava, and every kraj.',
    coverage: '14 regions • 60+ cities • Kč consolidation focus',
    languages: ['Čeština', 'English'],
    regulator: 'Czech National Bank (ČNB)',
    href: '/cz',
    ctaLabel: 'Explore Czech loans',
    status: 'live',
  },
]
