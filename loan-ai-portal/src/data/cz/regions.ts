export interface CzechRegion {
  name: string
  shortName: string
  slug: string
  euCode: string
  capital: string
  description: string
  regulatoryNote: string
  sampleCities: { name: string; slug: string; population?: string }[]
}

export const CZECH_REGIONS: CzechRegion[] = [
  {
    name: 'Hlavní město Praha',
    shortName: 'Praha',
    slug: 'praha',
    euCode: 'CZ010',
    capital: 'Praha',
    description:
      'Metropolitan capital with the highest consumer credit penetration. Focus on affordability ratios and CNB affordability tests.',
    regulatoryNote:
      'ČNB mortgage stress rules and Consumer Credit Act 257/2016 Sb. marketing disclosures apply to all digital funnels operating in Prague.',
    sampleCities: [
      { name: 'Praha 1', slug: 'praha-1', population: '30 000' },
      { name: 'Praha 5', slug: 'praha-5', population: '85 000' },
    ],
  },
  {
    name: 'Středočeský kraj',
    shortName: 'Středočeský',
    slug: 'stredocesky',
    euCode: 'CZ020',
    capital: 'Praha (administrative)',
    description:
      'Commuter-heavy region surrounding Prague with strong demand for consolidation and renovation loans.',
    regulatoryNote:
      'Regional offices coordinate supervision with CNB; microcredit caps under Act 257/2016 Sb. strictly enforced.',
    sampleCities: [
      { name: 'Kladno', slug: 'kladno', population: '68 000' },
      { name: 'Mladá Boleslav', slug: 'mlada-boleslav', population: '44 000' },
    ],
  },
  {
    name: 'Jihočeský kraj',
    shortName: 'Jihočeský',
    slug: 'jihocesky',
    euCode: 'CZ031',
    capital: 'České Budějovice',
    description:
      'Tourism and manufacturing hub with seasonal loan demand and SME lending overlap.',
    regulatoryNote:
      'Regional inspectors emphasise transparent APR disclosures during high tourist seasons and online lead generation campaigns.',
    sampleCities: [
      { name: 'České Budějovice', slug: 'ceske-budejovice', population: '94 000' },
      { name: 'Tábor', slug: 'tabor', population: '34 000' },
    ],
  },
  {
    name: 'Plzeňský kraj',
    shortName: 'Plzeňský',
    slug: 'plzensky',
    euCode: 'CZ032',
    capital: 'Plzeň',
    description:
      'Automotive and logistics-focused region with cross-border borrower behaviours and German influence.',
    regulatoryNote:
      'Cross-border advertising to Bavaria must include bilingual disclosures; local regulator pushes on creditworthiness documentation.',
    sampleCities: [
      { name: 'Plzeň', slug: 'plzen', population: '170 000' },
      { name: 'Domažlice', slug: 'domazlice', population: '11 000' },
    ],
  },
  {
    name: 'Karlovarský kraj',
    shortName: 'Karlovarský',
    slug: 'karlovarsky',
    euCode: 'CZ041',
    capital: 'Karlovy Vary',
    description:
      'Spa economy with high percentage of short-term hospitality workers and cross-border clients.',
    regulatoryNote:
      'Lead forms must flag currency conversions and payday loan restrictions per ČNB consumer warnings.',
    sampleCities: [
      { name: 'Karlovy Vary', slug: 'karlovy-vary', population: '48 000' },
      { name: 'Cheb', slug: 'cheb', population: '32 000' },
    ],
  },
  {
    name: 'Ústecký kraj',
    shortName: 'Ústecký',
    slug: 'ustecky',
    euCode: 'CZ042',
    capital: 'Ústí nad Labem',
    description:
      'Industrial restructuring region with elevated credit risk and active debt counselling programmes.',
    regulatoryNote:
      'Advertising must surface debt advisory resources mandated by Ministry of Finance pilots.',
    sampleCities: [
      { name: 'Ústí nad Labem', slug: 'usti-nad-labem', population: '93 000' },
      { name: 'Most', slug: 'most', population: '66 000' },
    ],
  },
  {
    name: 'Liberecký kraj',
    shortName: 'Liberecký',
    slug: 'liberecky',
    euCode: 'CZ051',
    capital: 'Liberec',
    description:
      'Mountain region with manufacturing clusters and EU-funded green projects affecting loan demand.',
    regulatoryNote:
      'Energy-efficiency loan campaigns must cite ČNB sustainability guidance and EU taxonomy references.',
    sampleCities: [
      { name: 'Liberec', slug: 'liberec', population: '104 000' },
      { name: 'Jablonec nad Nisou', slug: 'jablonec-nad-nisou', population: '45 000' },
    ],
  },
  {
    name: 'Královéhradecký kraj',
    shortName: 'Královéhradecký',
    slug: 'kralovehradecky',
    euCode: 'CZ052',
    capital: 'Hradec Králové',
    description:
      'Healthcare and defence manufacturing centre with balanced household debt ratios.',
    regulatoryNote:
      'Consumer credit licensing checks focus on remote onboarding funnels and biometric verification controls.',
    sampleCities: [
      { name: 'Hradec Králové', slug: 'hradec-kralove', population: '93 000' },
      { name: 'Trutnov', slug: 'trutnov', population: '30 000' },
    ],
  },
  {
    name: 'Pardubický kraj',
    shortName: 'Pardubický',
    slug: 'pardubicky',
    euCode: 'CZ053',
    capital: 'Pardubice',
    description:
      'Transport and chemical industry base with strong co-operative banking presence.',
    regulatoryNote:
      'Disclosure scripts must reference borrower right-of-withdrawal within 14 days per local enforcement actions.',
    sampleCities: [
      { name: 'Pardubice', slug: 'pardubice', population: '90 000' },
      { name: 'Chrudim', slug: 'chrudim', population: '23 000' },
    ],
  },
  {
    name: 'Kraj Vysočina',
    shortName: 'Vysočina',
    slug: 'vysocina',
    euCode: 'CZ063',
    capital: 'Jihlava',
    description:
      'Rural manufacturing and agritech region with seasonal cash-flow lending needs.',
    regulatoryNote:
      'Field marketing must disclose effective annual percentage cost (RPSN) to agricultural borrowers.',
    sampleCities: [
      { name: 'Jihlava', slug: 'jihlava', population: '51 000' },
      { name: 'Žďár nad Sázavou', slug: 'zdar-nad-sazavou', population: '20 000' },
    ],
  },
  {
    name: 'Jihomoravský kraj',
    shortName: 'Jihomoravský',
    slug: 'jihomoravsky',
    euCode: 'CZ064',
    capital: 'Brno',
    description:
      'Technology and university corridor driving fintech partnerships and start-up financing.',
    regulatoryNote:
      'ČNB sandbox participants must publish risk warnings in Czech and English across acquisition funnels.',
    sampleCities: [
      { name: 'Brno', slug: 'brno', population: '379 000' },
      { name: 'Znojmo', slug: 'znojmo', population: '33 000' },
    ],
  },
  {
    name: 'Olomoucký kraj',
    shortName: 'Olomoucký',
    slug: 'olomoucky',
    euCode: 'CZ071',
    capital: 'Olomouc',
    description:
      'Logistics hub with agricultural credit usage and student borrower concentrations.',
    regulatoryNote:
      'Higher-education marketing must include debt counselling references mandated by ČNB notices.',
    sampleCities: [
      { name: 'Olomouc', slug: 'olomouc', population: '100 000' },
      { name: 'Přerov', slug: 'prerov', population: '43 000' },
    ],
  },
  {
    name: 'Zlínský kraj',
    shortName: 'Zlínský',
    slug: 'zlinsky',
    euCode: 'CZ072',
    capital: 'Zlín',
    description:
      'Manufacturing-focused region with strong footwear and engineering SMEs seeking working capital.',
    regulatoryNote:
      'Local authorities require fintech lenders to publish affiliate disclosure statements on landing pages.',
    sampleCities: [
      { name: 'Zlín', slug: 'zlin', population: '74 000' },
      { name: 'Uherské Hradiště', slug: 'uherske-hradiste', population: '25 000' },
    ],
  },
  {
    name: 'Moravskoslezský kraj',
    shortName: 'Moravskoslezský',
    slug: 'moravskoslezsky',
    euCode: 'CZ080',
    capital: 'Ostrava',
    description:
      'Post-industrial region transitioning to services, with higher debt consolidation demand and ESG financing.',
    regulatoryNote:
      'Debt consolidation campaigns must publish repayment stress scenarios based on ČNB bulletin 4/2024.',
    sampleCities: [
      { name: 'Ostrava', slug: 'ostrava', population: '280 000' },
      { name: 'Opava', slug: 'opava', population: '55 000' },
    ],
  },
]
