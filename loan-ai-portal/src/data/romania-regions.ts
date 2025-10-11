/**
 * Romania Regions Data for Loan Information
 * 8 Development Regions (Regiuni de Dezvoltare) of Romania
 */

export interface RomaniaRegionInfo {
  name: string
  slug: string
  nameRo: string // Romanian name
  population: string
  avgLoanAmount: string
  avgRate: string
  maxLoanAmount: string
  description: string
  descriptionRo: string
  regulations: string[]
  regulationsRo: string[]
  majorCities: string[]
  topLoanTypes: string[]
  topLoanTypesRo: string[]
}

export const romaniaRegions: RomaniaRegionInfo[] = [
  {
    name: 'București-Ilfov',
    slug: 'bucuresti-ilfov',
    nameRo: 'București-Ilfov',
    population: '2.3M',
    avgLoanAmount: '35,000 RON',
    avgRate: '9.5%',
    maxLoanAmount: '200,000 RON',
    description: 'The capital region with the highest loan availability and competitive rates.',
    descriptionRo: 'Regiunea capitalei cu cea mai mare disponibilitate a creditelor și rate competitive.',
    regulations: [
      'BNR (Banca Națională a României) regulated',
      'Maximum APR: 50% DAE per law 93/2009',
      'Mandatory cooling-off period: 14 days',
      'Maximum debt-to-income ratio: 40%',
      'Licensed lender requirement',
      'Credit bureau check mandatory',
      'Consumer protection under OUG 50/2010',
      'EU Consumer Credit Directive compliance'
    ],
    regulationsRo: [
      'Reglementat de BNR (Banca Națională a României)',
      'DAE maxim: 50% conform legii 93/2009',
      'Perioadă obligatorie de renunțare: 14 zile',
      'Raport datorii/venituri maxim: 40%',
      'Licență de creditare obligatorie',
      'Verificare birou de credit obligatorie',
      'Protecția consumatorilor conform OUG 50/2010',
      'Conformitate cu Directiva UE privind creditul de consum'
    ],
    majorCities: ['București', 'Voluntari', 'Popești-Leordeni', 'Pantelimon'],
    topLoanTypes: ['Personal Loans', 'Debt Consolidation', 'Home Renovation'],
    topLoanTypesRo: ['Credite personale', 'Consolidare datorii', 'Renovare locuință']
  },
  {
    name: 'Transilvania Centrală',
    slug: 'transilvania-centrala',
    nameRo: 'Centru (Transilvania Centrală)',
    population: '2.4M',
    avgLoanAmount: '28,000 RON',
    avgRate: '10.2%',
    maxLoanAmount: '150,000 RON',
    description: 'Central Transylvania region with diverse economic activity and growing loan market.',
    descriptionRo: 'Regiunea Transilvaniei centrale cu activitate economică diversă și piață de creditare în creștere.',
    regulations: [
      'BNR supervision applies',
      'Maximum APR: 50% DAE',
      '14-day cooling-off period',
      'Income verification required',
      'Licensed IFN (non-bank) lenders',
      'Credit history assessment mandatory',
      'Transparent cost disclosure required',
      'Consumer rights protection'
    ],
    regulationsRo: [
      'Supraveghere BNR aplicabilă',
      'DAE maxim: 50%',
      'Perioadă de renunțare 14 zile',
      'Verificare venituri obligatorie',
      'Creditori IFN (non-bancare) licențiați',
      'Evaluare istoric credit obligatorie',
      'Divulgare transparentă costuri obligatorie',
      'Protecția drepturilor consumatorilor'
    ],
    majorCities: ['Cluj-Napoca', 'Brașov', 'Sibiu', 'Târgu Mureș'],
    topLoanTypes: ['Personal Loans', 'Education', 'Business Startup'],
    topLoanTypesRo: ['Credite personale', 'Educație', 'Startup afacere']
  },
  {
    name: 'Nord-Est',
    slug: 'nord-est',
    nameRo: 'Nord-Est (Moldova)',
    population: '3.3M',
    avgLoanAmount: '22,000 RON',
    avgRate: '11.5%',
    maxLoanAmount: '120,000 RON',
    description: 'Northeast region with expanding access to personal credit and microloans.',
    descriptionRo: 'Regiunea de nord-est cu acces în expansiune la credite personale și microcredite.',
    regulations: [
      'BNR regulatory framework',
      'Maximum APR: 50% DAE',
      'Mandatory 14-day withdrawal right',
      'Affordability assessment required',
      'Licensed lenders only',
      'Credit bureau consultation',
      'Written loan agreements required',
      'Pre-contractual information mandatory'
    ],
    regulationsRo: [
      'Cadru reglementar BNR',
      'DAE maxim: 50%',
      'Drept de retragere obligatoriu 14 zile',
      'Evaluare capacitate de plată obligatorie',
      'Doar creditori licențiați',
      'Consultare birou de credit',
      'Contracte de credit scrise obligatorii',
      'Informații precontractuale obligatorii'
    ],
    majorCities: ['Iași', 'Bacău', 'Suceava', 'Piatra Neamț'],
    topLoanTypes: ['Personal Loans', 'Agricultural', 'Medical'],
    topLoanTypesRo: ['Credite personale', 'Agricultură', 'Medical']
  },
  {
    name: 'Sud-Est',
    slug: 'sud-est',
    nameRo: 'Sud-Est (Dobrogea)',
    population: '2.5M',
    avgLoanAmount: '25,000 RON',
    avgRate: '10.8%',
    maxLoanAmount: '130,000 RON',
    description: 'Southeastern region including coastal areas with seasonal lending patterns.',
    descriptionRo: 'Regiunea de sud-est, inclusiv zone costiere cu modele sezoniere de creditare.',
    regulations: [
      'BNR oversight',
      'Maximum APR: 50% DAE',
      '14-day cooling-off period',
      'Income proof mandatory',
      'Licensed financial institutions',
      'Credit scoring required',
      'Fair lending practices enforced',
      'Consumer protection laws'
    ],
    regulationsRo: [
      'Supraveghere BNR',
      'DAE maxim: 50%',
      'Perioadă de renunțare 14 zile',
      'Dovada veniturilor obligatorie',
      'Instituții financiare licențiate',
      'Scoring de credit obligatoriu',
      'Practici de creditare echitabile impuse',
      'Legi de protecție a consumatorilor'
    ],
    majorCities: ['Constanța', 'Galați', 'Brăila', 'Tulcea'],
    topLoanTypes: ['Personal Loans', 'Tourism', 'Vehicle Purchase'],
    topLoanTypesRo: ['Credite personale', 'Turism', 'Cumpărare vehicul']
  },
  {
    name: 'Sud-Muntenia',
    slug: 'sud-muntenia',
    nameRo: 'Sud-Muntenia',
    population: '3.1M',
    avgLoanAmount: '24,000 RON',
    avgRate: '11.0%',
    maxLoanAmount: '125,000 RON',
    description: 'Southern Muntenia region with growing personal loan market.',
    descriptionRo: 'Regiunea Muntenia de sud cu piață de credite personale în creștere.',
    regulations: [
      'BNR regulated lending',
      'Maximum APR: 50% DAE',
      'Withdrawal rights: 14 days',
      'Creditworthiness assessment',
      'Licensed lender requirement',
      'Credit bureau reporting',
      'Transparent pricing required',
      'EU directives compliance'
    ],
    regulationsRo: [
      'Creditare reglementată BNR',
      'DAE maxim: 50%',
      'Drepturi de retragere: 14 zile',
      'Evaluare bonitate',
      'Cerință licență creditor',
      'Raportare birou de credit',
      'Prețuri transparente obligatorii',
      'Conformitate directive UE'
    ],
    majorCities: ['Ploiești', 'Pitești', 'Târgoviște', 'Giurgiu'],
    topLoanTypes: ['Personal Loans', 'Home Improvement', 'Debt Consolidation'],
    topLoanTypesRo: ['Credite personale', 'Îmbunătățire locuință', 'Consolidare datorii']
  },
  {
    name: 'Sud-Vest Oltenia',
    slug: 'sud-vest-oltenia',
    nameRo: 'Sud-Vest Oltenia',
    population: '2.1M',
    avgLoanAmount: '23,000 RON',
    avgRate: '11.3%',
    maxLoanAmount: '115,000 RON',
    description: 'Southwest region with emerging microfinance and personal loan options.',
    descriptionRo: 'Regiunea de sud-vest cu opțiuni emergente de microfinanțare și credite personale.',
    regulations: [
      'BNR supervision',
      'Maximum APR: 50% DAE',
      'Cooling-off period: 14 days',
      'Income verification needed',
      'Licensed providers only',
      'Credit history review',
      'Written contracts mandatory',
      'Consumer rights protection'
    ],
    regulationsRo: [
      'Supraveghere BNR',
      'DAE maxim: 50%',
      'Perioadă de renunțare: 14 zile',
      'Verificare venituri necesară',
      'Doar furnizori licențiați',
      'Revizuire istoric credit',
      'Contracte scrise obligatorii',
      'Protecția drepturilor consumatorilor'
    ],
    majorCities: ['Craiova', 'Drobeta-Turnu Severin', 'Râmnicu Vâlcea', 'Slatina'],
    topLoanTypes: ['Personal Loans', 'Agricultural', 'Small Business'],
    topLoanTypesRo: ['Credite personale', 'Agricultură', 'Afacere mică']
  },
  {
    name: 'Vest',
    slug: 'vest',
    nameRo: 'Vest (Banat)',
    population: '1.8M',
    avgLoanAmount: '27,000 RON',
    avgRate: '10.5%',
    maxLoanAmount: '140,000 RON',
    description: 'Western region with competitive rates and strong banking infrastructure.',
    descriptionRo: 'Regiunea de vest cu rate competitive și infrastructură bancară solidă.',
    regulations: [
      'BNR regulated',
      'Maximum APR: 50% DAE',
      '14-day withdrawal right',
      'Affordability checks',
      'Licensed institutions',
      'Credit bureau checks',
      'Fair lending enforced',
      'Full disclosure required'
    ],
    regulationsRo: [
      'Reglementat BNR',
      'DAE maxim: 50%',
      'Drept de retragere 14 zile',
      'Verificări capacitate de plată',
      'Instituții licențiate',
      'Verificări birou de credit',
      'Creditare echitabilă impusă',
      'Divulgare completă obligatorie'
    ],
    majorCities: ['Timișoara', 'Arad', 'Reșița', 'Lugoj'],
    topLoanTypes: ['Personal Loans', 'Business Expansion', 'Home Purchase'],
    topLoanTypesRo: ['Credite personale', 'Extindere afacere', 'Cumpărare locuință']
  },
  {
    name: 'Nord-Vest',
    slug: 'nord-vest',
    nameRo: 'Nord-Vest (Crișana-Maramureș)',
    population: '2.6M',
    avgLoanAmount: '26,000 RON',
    avgRate: '10.7%',
    maxLoanAmount: '135,000 RON',
    description: 'Northwestern region with diverse lending options and growing fintech presence.',
    descriptionRo: 'Regiunea de nord-vest cu opțiuni diverse de creditare și prezență crescândă fintech.',
    regulations: [
      'BNR regulatory oversight',
      'Maximum APR: 50% DAE',
      'Mandatory 14-day cooling-off',
      'Income assessment required',
      'Licensed lenders only',
      'Credit scoring mandatory',
      'Consumer protection enforced',
      'Transparent terms required'
    ],
    regulationsRo: [
      'Supraveghere reglementară BNR',
      'DAE maxim: 50%',
      'Perioadă obligatorie renunțare 14 zile',
      'Evaluare venituri obligatorie',
      'Doar creditori licențiați',
      'Scoring de credit obligatoriu',
      'Protecție consumatori impusă',
      'Termeni transparenți obligatorii'
    ],
    majorCities: ['Oradea', 'Baia Mare', 'Satu Mare', 'Zalău'],
    topLoanTypes: ['Personal Loans', 'Education', 'Medical'],
    topLoanTypesRo: ['Credite personale', 'Educație', 'Medical']
  }
]

// Helper functions
export function getRegionBySlug(slug: string): RomaniaRegionInfo | undefined {
  return romaniaRegions.find(r => r.slug === slug)
}

export function getAllRegionSlugs(): string[] {
  return romaniaRegions.map(r => r.slug)
}

export function getRegionsByPopulation(): RomaniaRegionInfo[] {
  return [...romaniaRegions].sort((a, b) => {
    const popA = parseFloat(a.population.replace(/[^\d.]/g, ''))
    const popB = parseFloat(b.population.replace(/[^\d.]/g, ''))
    return popB - popA
  })
}
