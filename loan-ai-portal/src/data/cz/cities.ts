import { CZECH_REGIONS } from './regions'

export interface CzechCityStub {
  name: string
  slug: string
  regionSlug: string
  population: string
  summary: string
  focusAreas: string[]
  complianceNotes: string[]
}

const deriveRegionSlug = (slug: string) =>
  CZECH_REGIONS.find((region) => region.slug === slug)?.slug ?? slug

export const CZECH_CITY_STUBS: CzechCityStub[] = [
  {
    name: 'Praha 1',
    slug: 'praha-1',
    regionSlug: deriveRegionSlug('praha'),
    population: '30 000',
    summary:
      'Historic centre borrowers lean on renovation loans, revolving credit, and short-term holiday rental financing.',
    focusAreas: ['Home improvement', 'Bridge financing', 'EU tourism grants'],
    complianceNotes: [
      'ČNB requires prominent APR (RPSN) disclosures on short-term offers targeting Prague districts.',
      'Consumer Credit Act 257/2016 Sb. cooling-off period reminders should be displayed near CTA buttons.',
    ],
  },
  {
    name: 'Kladno',
    slug: 'kladno',
    regionSlug: deriveRegionSlug('stredocesky'),
    population: '68 000',
    summary:
      'Commuter households refinance transport and energy upgrades with mid-ticket instalment loans.',
    focusAreas: ['Debt consolidation', 'Green energy retrofits'],
    complianceNotes: [
      'Highlight borrower affordability checks that consider Prague commuter income variability.',
    ],
  },
  {
    name: 'České Budějovice',
    slug: 'ceske-budejovice',
    regionSlug: deriveRegionSlug('jihocesky'),
    population: '94 000',
    summary:
      'Tourism and manufacturing employees seek seasonal cash-flow smoothing and vehicle upgrades.',
    focusAreas: ['Seasonal income smoothing', 'Vehicle upgrades'],
    complianceNotes: [
      'Showcase CNB guidance on income verification for contract workers and seasonal staff.',
    ],
  },
  {
    name: 'Plzeň',
    slug: 'plzen',
    regionSlug: deriveRegionSlug('plzensky'),
    population: '170 000',
    summary:
      'Automotive supply chain financing fuels unsecured lending alongside housing modernisation.',
    focusAreas: ['Manufacturing payroll gaps', 'Housing modernisation'],
    complianceNotes: [
      'Inform applicants about cross-border currency risk when marketing to Bavaria commuters.',
    ],
  },
  {
    name: 'Karlovy Vary',
    slug: 'karlovy-vary',
    regionSlug: deriveRegionSlug('karlovarsky'),
    population: '48 000',
    summary:
      'Spa economy demands multilingual compliance copy and currency conversion transparency.',
    focusAreas: ['Wellness business upgrades', 'Short-term housing fits'],
    complianceNotes: [
      'Payday-style products must include CNB consumer warnings about rollover prohibitions.',
    ],
  },
  {
    name: 'Ústí nad Labem',
    slug: 'usti-nad-labem',
    regionSlug: deriveRegionSlug('ustecky'),
    population: '93 000',
    summary:
      'Restructuring borrowers look for consolidation, training, and family support loans.',
    focusAreas: ['Debt counselling referrals', 'Micro instalments'],
    complianceNotes: [
      'Include Ministry of Finance debt advisory hotline references in onboarding flows.',
    ],
  },
  {
    name: 'Liberec',
    slug: 'liberec',
    regionSlug: deriveRegionSlug('liberecky'),
    population: '104 000',
    summary:
      'Engineering and green transition schemes drive higher-ticket sustainability lending.',
    focusAreas: ['Photovoltaics', 'Sustainability upgrades'],
    complianceNotes: [
      'Energy-efficiency messaging should cite EU taxonomy alignment per CNB 2024 notice.',
    ],
  },
  {
    name: 'Hradec Králové',
    slug: 'hradec-kralove',
    regionSlug: deriveRegionSlug('kralovehradecky'),
    population: '93 000',
    summary:
      'Healthcare workers rely on flexible instalment plans and consolidation after relocation.',
    focusAreas: ['Healthcare relocation', 'Education loans'],
    complianceNotes: [
      'Remote onboarding needs biometric verification logs retained for 10 years as per CNB guidance.',
    ],
  },
  {
    name: 'Pardubice',
    slug: 'pardubice',
    regionSlug: deriveRegionSlug('pardubicky'),
    population: '90 000',
    summary:
      'Transport sector borrowers finance fleet upgrades and bridge working capital gaps.',
    focusAreas: ['Fleet upgrades', 'Working capital'],
    complianceNotes: [
      'Reference borrower withdrawal rights (14 days) adjacent to acceptance checkboxes.',
    ],
  },
  {
    name: 'Jihlava',
    slug: 'jihlava',
    regionSlug: deriveRegionSlug('vysocina'),
    population: '51 000',
    summary:
      'Agritech producers and co-operatives finance equipment and sustainability retrofits.',
    focusAreas: ['Agritech upgrades', 'Sustainability retrofits'],
    complianceNotes: [
      'RPSN must be displayed using agricultural borrower templates provided by CZSO/ČNB.',
    ],
  },
  {
    name: 'Brno',
    slug: 'brno',
    regionSlug: deriveRegionSlug('jihomoravsky'),
    population: '379 000',
    summary:
      'Start-up ecosystem borrowers mix unsecured loans with venture debt and grant co-financing.',
    focusAreas: ['Innovation loans', 'Grant bridge financing'],
    complianceNotes: [
      'CNB sandbox participants must publish bilingual risk warnings for AI-based scoring.',
    ],
  },
  {
    name: 'Olomouc',
    slug: 'olomouc',
    regionSlug: deriveRegionSlug('olomoucky'),
    population: '100 000',
    summary:
      'Student population and logistics hubs lean on education and working-capital loans.',
    focusAreas: ['Student loans', 'Logistics fleet finance'],
    complianceNotes: [
      'Student-facing campaigns must link to debt counselling resources (Act 257/2016 Sb., §96).',
    ],
  },
  {
    name: 'Zlín',
    slug: 'zlin',
    regionSlug: deriveRegionSlug('zlinsky'),
    population: '74 000',
    summary:
      'Manufacturing SMEs use instalment credit for production lines and export compliance.',
    focusAreas: ['SME working capital', 'Export compliance upgrades'],
    complianceNotes: [
      'Landing pages must include affiliate disclosures referencing ČNB consumer protection bulletin 3/2024.',
    ],
  },
  {
    name: 'Ostrava',
    slug: 'ostrava',
    regionSlug: deriveRegionSlug('moravskoslezsky'),
    population: '280 000',
    summary:
      'Post-industrial households refinance legacy debts while funding re-skilling and ESG upgrades.',
    focusAreas: ['Debt consolidation', 'Re-skilling programs'],
    complianceNotes: [
      'Debt consolidation offers must present stress scenarios based on ČNB bulletin 4/2024.',
    ],
  },
]

export function getCzechRegionBySlug(slug: string) {
  return CZECH_REGIONS.find((region) => region.slug === slug)
}

export function getCzechCitySlugs() {
  return CZECH_CITY_STUBS.map((city) => ({
    region: city.regionSlug,
    city: city.slug,
  }))
}

export function getCzechCitiesByRegion(regionSlug: string) {
  return CZECH_CITY_STUBS.filter((city) => city.regionSlug === regionSlug)
}

export function getCzechCity(regionSlug: string, citySlug: string) {
  return CZECH_CITY_STUBS.find(
    (city) => city.regionSlug === regionSlug && city.slug === citySlug,
  )
}
