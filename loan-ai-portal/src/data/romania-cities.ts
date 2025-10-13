/**
 * Romania Cities Data for Loan Information
 * Major cities across all 8 development regions
 */

export interface RomaniaCityInfo {
  name: string
  slug: string
  nameRo: string
  region: string
  regionSlug: string
  population: string
  avgLoanAmount: string
  avgRate: string
  avgCreditScore: string
  description: string
  descriptionRo: string
  topLoanTypes: string[]
  topLoanTypesRo: string[]
  lenderCount: number
  nearbyCity: string[]
}

export const romaniaCities: RomaniaCityInfo[] = [
  // București-Ilfov Region
  {
    name: 'București',
    slug: 'bucuresti',
    nameRo: 'București',
    region: 'București-Ilfov',
    regionSlug: 'bucuresti-ilfov',
    population: '1.9M',
    avgLoanAmount: '40,000 RON',
    avgRate: '9.2%',
    avgCreditScore: '720',
    description: 'Romania\'s capital offers the most competitive loan rates and widest lender selection.',
    descriptionRo: 'Capitala României oferă cele mai competitive rate de creditare și cea mai largă selecție de creditori.',
    topLoanTypes: ['Personal Loans', 'Debt Consolidation'],
    topLoanTypesRo: ['Credite personale', 'Consolidare datorii'],
    lenderCount: 45,
    nearbyCity: ['Voluntari', 'Popești-Leordeni', 'Pantelimon']
  },
  {
    name: 'Voluntari',
    slug: 'voluntari',
    nameRo: 'Voluntari',
    region: 'București-Ilfov',
    regionSlug: 'bucuresti-ilfov',
    population: '45,000',
    avgLoanAmount: '35,000 RON',
    avgRate: '9.5%',
    avgCreditScore: '710',
    description: 'Suburban city near Bucharest with growing loan accessibility.',
    descriptionRo: 'Oraș suburban lângă București cu accesibilitate crescândă la credite.',
    topLoanTypes: ['Personal Loans', 'Home Renovation'],
    topLoanTypesRo: ['Credite personale', 'Renovare locuință'],
    lenderCount: 32,
    nearbyCity: ['București', 'Popești-Leordeni', 'Pantelimon']
  },
  {
    name: 'Popești-Leordeni',
    slug: 'popesti-leordeni',
    nameRo: 'Popești-Leordeni',
    region: 'București-Ilfov',
    regionSlug: 'bucuresti-ilfov',
    population: '22,000',
    avgLoanAmount: '32,000 RON',
    avgRate: '9.7%',
    avgCreditScore: '705',
    description: 'Rapidly growing town with access to major lenders.',
    descriptionRo: 'Oraș în creștere rapidă cu acces la creditori majori.',
    topLoanTypes: ['Personal Loans', 'Vehicle Purchase'],
    topLoanTypesRo: ['Credite personale', 'Cumpărare vehicul'],
    lenderCount: 28,
    nearbyCity: ['București', 'Voluntari', 'Bragadiru']
  },

  // Centru (Transilvania Centrală) Region
  {
    name: 'Cluj-Napoca',
    slug: 'cluj-napoca',
    nameRo: 'Cluj-Napoca',
    region: 'Transilvania Centrală',
    regionSlug: 'transilvania-centrala',
    population: '324,000',
    avgLoanAmount: '32,000 RON',
    avgRate: '9.8%',
    avgCreditScore: '715',
    description: 'Major tech hub with competitive lending market and fintech presence.',
    descriptionRo: 'Hub tehnologic major cu piață de creditare competitivă și prezență fintech.',
    topLoanTypes: ['Personal Loans', 'Business Startup'],
    topLoanTypesRo: ['Credite personale', 'Startup afacere'],
    lenderCount: 38,
    nearbyCity: ['Florești', 'Turda', 'Gherla']
  },
  {
    name: 'Brașov',
    slug: 'brasov',
    nameRo: 'Brașov',
    region: 'Transilvania Centrală',
    regionSlug: 'transilvania-centrala',
    population: '253,000',
    avgLoanAmount: '30,000 RON',
    avgRate: '10.0%',
    avgCreditScore: '710',
    description: 'Tourism and industry center with diverse loan options.',
    descriptionRo: 'Centru turistic și industrial cu opțiuni diverse de creditare.',
    topLoanTypes: ['Personal Loans', 'Home Renovation'],
    topLoanTypesRo: ['Credite personale', 'Renovare locuință'],
    lenderCount: 35,
    nearbyCity: ['Săcele', 'Codlea', 'Predeal']
  },
  {
    name: 'Sibiu',
    slug: 'sibiu',
    nameRo: 'Sibiu',
    region: 'Transilvania Centrală',
    regionSlug: 'transilvania-centrala',
    population: '147,000',
    avgLoanAmount: '28,000 RON',
    avgRate: '10.2%',
    avgCreditScore: '708',
    description: 'Cultural center with stable lending environment.',
    descriptionRo: 'Centru cultural cu mediu stabil de creditare.',
    topLoanTypes: ['Personal Loans', 'Education'],
    topLoanTypesRo: ['Credite personale', 'Educație'],
    lenderCount: 30,
    nearbyCity: ['Mediaș', 'Agnita', 'Avrig']
  },
  {
    name: 'Târgu Mureș',
    slug: 'targu-mures',
    nameRo: 'Târgu Mureș',
    region: 'Transilvania Centrală',
    regionSlug: 'transilvania-centrala',
    population: '134,000',
    avgLoanAmount: '27,000 RON',
    avgRate: '10.3%',
    avgCreditScore: '705',
    description: 'Regional center with good access to personal credit.',
    descriptionRo: 'Centru regional cu acces bun la credite personale.',
    topLoanTypes: ['Personal Loans', 'Medical'],
    topLoanTypesRo: ['Credite personale', 'Medical'],
    lenderCount: 28,
    nearbyCity: ['Reghin', 'Sovata', 'Luduș']
  },

  // Nord-Est (Moldova) Region
  {
    name: 'Iași',
    slug: 'iasi',
    nameRo: 'Iași',
    region: 'Nord-Est',
    regionSlug: 'nord-est',
    population: '290,000',
    avgLoanAmount: '26,000 RON',
    avgRate: '11.0%',
    avgCreditScore: '700',
    description: 'Cultural capital of Moldova region with growing fintech sector.',
    descriptionRo: 'Capitala culturală a regiunii Moldova cu sector fintech în creștere.',
    topLoanTypes: ['Personal Loans', 'Education'],
    topLoanTypesRo: ['Credite personale', 'Educație'],
    lenderCount: 33,
    nearbyCity: ['Pașcani', 'Hârlău', 'Târgu Frumos']
  },
  {
    name: 'Bacău',
    slug: 'bacau',
    nameRo: 'Bacău',
    region: 'Nord-Est',
    regionSlug: 'nord-est',
    population: '144,000',
    avgLoanAmount: '23,000 RON',
    avgRate: '11.3%',
    avgCreditScore: '695',
    description: 'Industrial city with expanding loan market.',
    descriptionRo: 'Oraș industrial cu piață de credite în expansiune.',
    topLoanTypes: ['Personal Loans', 'Debt Consolidation'],
    topLoanTypesRo: ['Credite personale', 'Consolidare datorii'],
    lenderCount: 26,
    nearbyCity: ['Onești', 'Moinești', 'Comănești']
  },
  {
    name: 'Suceava',
    slug: 'suceava',
    nameRo: 'Suceava',
    region: 'Nord-Est',
    regionSlug: 'nord-est',
    population: '92,000',
    avgLoanAmount: '22,000 RON',
    avgRate: '11.5%',
    avgCreditScore: '690',
    description: 'Northern city with traditional and digital lending options.',
    descriptionRo: 'Oraș nordic cu opțiuni tradiționale și digitale de creditare.',
    topLoanTypes: ['Personal Loans', 'Agricultural'],
    topLoanTypesRo: ['Credite personale', 'Agricultură'],
    lenderCount: 24,
    nearbyCity: ['Fălticeni', 'Rădăuți', 'Vatra Dornei']
  },
  {
    name: 'Piatra Neamț',
    slug: 'piatra-neamt',
    nameRo: 'Piatra Neamț',
    region: 'Nord-Est',
    regionSlug: 'nord-est',
    population: '85,000',
    avgLoanAmount: '21,000 RON',
    avgRate: '11.6%',
    avgCreditScore: '688',
    description: 'Mountain city with emerging microloan services.',
    descriptionRo: 'Oraș montan cu servicii emergente de microcreditare.',
    topLoanTypes: ['Personal Loans', 'Small Business'],
    topLoanTypesRo: ['Credite personale', 'Afacere mică'],
    lenderCount: 22,
    nearbyCity: ['Roman', 'Târgu Neamț', 'Bicaz']
  },

  // Sud-Est (Dobrogea) Region
  {
    name: 'Constanța',
    slug: 'constanta',
    nameRo: 'Constanța',
    region: 'Sud-Est',
    regionSlug: 'sud-est',
    population: '283,000',
    avgLoanAmount: '28,000 RON',
    avgRate: '10.5%',
    avgCreditScore: '708',
    description: 'Major port city with seasonal lending patterns and tourism economy.',
    descriptionRo: 'Oraș port major cu modele sezoniere de creditare și economie turistică.',
    topLoanTypes: ['Personal Loans', 'Tourism Business'],
    topLoanTypesRo: ['Credite personale', 'Afacere turistică'],
    lenderCount: 34,
    nearbyCity: ['Mamaia', 'Năvodari', 'Mangalia']
  },
  {
    name: 'Galați',
    slug: 'galati',
    nameRo: 'Galați',
    region: 'Sud-Est',
    regionSlug: 'sud-est',
    population: '218,000',
    avgLoanAmount: '24,000 RON',
    avgRate: '11.0%',
    avgCreditScore: '700',
    description: 'Port and industrial city with stable loan access.',
    descriptionRo: 'Oraș port și industrial cu acces stabil la credite.',
    topLoanTypes: ['Personal Loans', 'Vehicle Purchase'],
    topLoanTypesRo: ['Credite personale', 'Cumpărare vehicul'],
    lenderCount: 28,
    nearbyCity: ['Tecuci', 'Târgu Bujor', 'Berești']
  },
  {
    name: 'Brăila',
    slug: 'braila',
    nameRo: 'Brăila',
    region: 'Sud-Est',
    regionSlug: 'sud-est',
    population: '180,000',
    avgLoanAmount: '23,000 RON',
    avgRate: '11.2%',
    avgCreditScore: '698',
    description: 'Danube port with growing personal credit market.',
    descriptionRo: 'Port dunărean cu piață de credite personale în creștere.',
    topLoanTypes: ['Personal Loans', 'Home Improvement'],
    topLoanTypesRo: ['Credite personale', 'Îmbunătățire locuință'],
    lenderCount: 26,
    nearbyCity: ['Ianca', 'Făurei', 'Însurăței']
  },
  {
    name: 'Tulcea',
    slug: 'tulcea',
    nameRo: 'Tulcea',
    region: 'Sud-Est',
    regionSlug: 'sud-est',
    population: '73,000',
    avgLoanAmount: '21,000 RON',
    avgRate: '11.7%',
    avgCreditScore: '685',
    description: 'Danube Delta gateway with unique lending opportunities.',
    descriptionRo: 'Poarta Deltei Dunării cu oportunități unice de creditare.',
    topLoanTypes: ['Personal Loans', 'Tourism'],
    topLoanTypesRo: ['Credite personale', 'Turism'],
    lenderCount: 20,
    nearbyCity: ['Sulina', 'Babadag', 'Măcin']
  },

  // Sud-Muntenia Region
  {
    name: 'Ploiești',
    slug: 'ploiesti',
    nameRo: 'Ploiești',
    region: 'Sud-Muntenia',
    regionSlug: 'sud-muntenia',
    population: '201,000',
    avgLoanAmount: '26,000 RON',
    avgRate: '10.7%',
    avgCreditScore: '703',
    description: 'Oil industry center with diverse lending options.',
    descriptionRo: 'Centru al industriei petroliere cu opțiuni diverse de creditare.',
    topLoanTypes: ['Personal Loans', 'Business Expansion'],
    topLoanTypesRo: ['Credite personale', 'Extindere afacere'],
    lenderCount: 30,
    nearbyCity: ['Câmpina', 'Băicoi', 'Boldești-Scăeni']
  },
  {
    name: 'Pitești',
    slug: 'pitesti',
    nameRo: 'Pitești',
    region: 'Sud-Muntenia',
    regionSlug: 'sud-muntenia',
    population: '155,000',
    avgLoanAmount: '25,000 RON',
    avgRate: '10.9%',
    avgCreditScore: '700',
    description: 'Automotive industry hub with good credit infrastructure.',
    descriptionRo: 'Hub al industriei auto cu infrastructură bună de creditare.',
    topLoanTypes: ['Personal Loans', 'Vehicle Purchase'],
    topLoanTypesRo: ['Credite personale', 'Cumpărare vehicul'],
    lenderCount: 28,
    nearbyCity: ['Mioveni', 'Curtea de Argeș', 'Câmpulung']
  },
  {
    name: 'Târgoviște',
    slug: 'targoviste',
    nameRo: 'Târgoviște',
    region: 'Sud-Muntenia',
    regionSlug: 'sud-muntenia',
    population: '79,000',
    avgLoanAmount: '23,000 RON',
    avgRate: '11.2%',
    avgCreditScore: '695',
    description: 'Historic city with modern lending services.',
    descriptionRo: 'Oraș istoric cu servicii moderne de creditare.',
    topLoanTypes: ['Personal Loans', 'Home Renovation'],
    topLoanTypesRo: ['Credite personale', 'Renovare locuință'],
    lenderCount: 24,
    nearbyCity: ['Moreni', 'Pucioasa', 'Găești']
  },
  {
    name: 'Giurgiu',
    slug: 'giurgiu',
    nameRo: 'Giurgiu',
    region: 'Sud-Muntenia',
    regionSlug: 'sud-muntenia',
    population: '54,000',
    avgLoanAmount: '21,000 RON',
    avgRate: '11.5%',
    avgCreditScore: '690',
    description: 'Border city with cross-border banking opportunities.',
    descriptionRo: 'Oraș de frontieră cu oportunități bancare transfrontaliere.',
    topLoanTypes: ['Personal Loans', 'Small Business'],
    topLoanTypesRo: ['Credite personale', 'Afacere mică'],
    lenderCount: 22,
    nearbyCity: ['Bolintin-Vale', 'Mihăilești', 'Videle']
  },

  // Sud-Vest Oltenia Region
  {
    name: 'Craiova',
    slug: 'craiova',
    nameRo: 'Craiova',
    region: 'Sud-Vest Oltenia',
    regionSlug: 'sud-vest-oltenia',
    population: '269,000',
    avgLoanAmount: '25,000 RON',
    avgRate: '11.0%',
    avgCreditScore: '702',
    description: 'Regional capital with comprehensive loan offerings.',
    descriptionRo: 'Capitală regională cu oferte complete de credite.',
    topLoanTypes: ['Personal Loans', 'Education'],
    topLoanTypesRo: ['Credite personale', 'Educație'],
    lenderCount: 32,
    nearbyCity: ['Filiași', 'Calafat', 'Bailești']
  },
  {
    name: 'Drobeta-Turnu Severin',
    slug: 'drobeta-turnu-severin',
    nameRo: 'Drobeta-Turnu Severin',
    region: 'Sud-Vest Oltenia',
    regionSlug: 'sud-vest-oltenia',
    population: '92,000',
    avgLoanAmount: '22,000 RON',
    avgRate: '11.4%',
    avgCreditScore: '692',
    description: 'Danube port with traditional banking presence.',
    descriptionRo: 'Port dunărean cu prezență bancară tradițională.',
    topLoanTypes: ['Personal Loans', 'Agricultural'],
    topLoanTypesRo: ['Credite personale', 'Agricultură'],
    lenderCount: 23,
    nearbyCity: ['Vânju Mare', 'Strehaia', 'Orșova']
  },
  {
    name: 'Râmnicu Vâlcea',
    slug: 'ramnicu-valcea',
    nameRo: 'Râmnicu Vâlcea',
    region: 'Sud-Vest Oltenia',
    regionSlug: 'sud-vest-oltenia',
    population: '98,000',
    avgLoanAmount: '23,000 RON',
    avgRate: '11.3%',
    avgCreditScore: '694',
    description: 'Spa town with emerging fintech services.',
    descriptionRo: 'Oraș balnear cu servicii fintech emergente.',
    topLoanTypes: ['Personal Loans', 'Tourism'],
    topLoanTypesRo: ['Credite personale', 'Turism'],
    lenderCount: 24,
    nearbyCity: ['Călimănești', 'Drăgășani', 'Brezoi']
  },
  {
    name: 'Slatina',
    slug: 'slatina',
    nameRo: 'Slatina',
    region: 'Sud-Vest Oltenia',
    regionSlug: 'sud-vest-oltenia',
    population: '70,000',
    avgLoanAmount: '21,000 RON',
    avgRate: '11.6%',
    avgCreditScore: '688',
    description: 'Industrial town with growing loan accessibility.',
    descriptionRo: 'Oraș industrial cu accesibilitate crescândă la credite.',
    topLoanTypes: ['Personal Loans', 'Debt Consolidation'],
    topLoanTypesRo: ['Credite personale', 'Consolidare datorii'],
    lenderCount: 21,
    nearbyCity: ['Caracal', 'Corabia', 'Balș']
  },

  // Vest (Banat) Region
  {
    name: 'Timișoara',
    slug: 'timisoara',
    nameRo: 'Timișoara',
    region: 'Vest',
    regionSlug: 'vest',
    population: '319,000',
    avgLoanAmount: '30,000 RON',
    avgRate: '10.2%',
    avgCreditScore: '712',
    description: 'European Capital of Culture with strong banking infrastructure.',
    descriptionRo: 'Capitală Europeană a Culturii cu infrastructură bancară puternică.',
    topLoanTypes: ['Personal Loans', 'Business Startup'],
    topLoanTypesRo: ['Credite personale', 'Startup afacere'],
    lenderCount: 40,
    nearbyCity: ['Lugoj', 'Deta', 'Buziaș']
  },
  {
    name: 'Arad',
    slug: 'arad',
    nameRo: 'Arad',
    region: 'Vest',
    regionSlug: 'vest',
    population: '159,000',
    avgLoanAmount: '26,000 RON',
    avgRate: '10.6%',
    avgCreditScore: '706',
    description: 'Border city with competitive loan rates.',
    descriptionRo: 'Oraș de frontieră cu rate competitive de creditare.',
    topLoanTypes: ['Personal Loans', 'Home Purchase'],
    topLoanTypesRo: ['Credite personale', 'Cumpărare locuință'],
    lenderCount: 29,
    nearbyCity: ['Ineu', 'Chișineu-Criș', 'Pâncota']
  },
  {
    name: 'Reșița',
    slug: 'resita',
    nameRo: 'Reșița',
    region: 'Vest',
    regionSlug: 'vest',
    population: '73,000',
    avgLoanAmount: '23,000 RON',
    avgRate: '11.0%',
    avgCreditScore: '698',
    description: 'Mountain industrial city with solid banking presence.',
    descriptionRo: 'Oraș industrial montan cu prezență bancară solidă.',
    topLoanTypes: ['Personal Loans', 'Home Improvement'],
    topLoanTypesRo: ['Credite personale', 'Îmbunătățire locuință'],
    lenderCount: 23,
    nearbyCity: ['Caransebeș', 'Moldova Nouă', 'Oravița']
  },

  // Nord-Vest (Crișana-Maramureș) Region
  {
    name: 'Oradea',
    slug: 'oradea',
    nameRo: 'Oradea',
    region: 'Nord-Vest',
    regionSlug: 'nord-vest',
    population: '196,000',
    avgLoanAmount: '28,000 RON',
    avgRate: '10.4%',
    avgCreditScore: '709',
    description: 'Art Nouveau city with modern fintech and traditional banking.',
    descriptionRo: 'Oraș Art Nouveau cu fintech modern și banking tradițional.',
    topLoanTypes: ['Personal Loans', 'Business Expansion'],
    topLoanTypesRo: ['Credite personale', 'Extindere afacere'],
    lenderCount: 31,
    nearbyCity: ['Salonta', 'Marghita', 'Aleșd']
  },
  {
    name: 'Baia Mare',
    slug: 'baia-mare',
    nameRo: 'Baia Mare',
    region: 'Nord-Vest',
    regionSlug: 'nord-vest',
    population: '123,000',
    avgLoanAmount: '25,000 RON',
    avgRate: '10.8%',
    avgCreditScore: '703',
    description: 'Mining heritage city with diverse lending options.',
    descriptionRo: 'Oraș cu moștenire minieră cu opțiuni diverse de creditare.',
    topLoanTypes: ['Personal Loans', 'Education'],
    topLoanTypesRo: ['Credite personale', 'Educație'],
    lenderCount: 26,
    nearbyCity: ['Sighetu Marmației', 'Borșa', 'Cavnic']
  },
  {
    name: 'Satu Mare',
    slug: 'satu-mare',
    nameRo: 'Satu Mare',
    region: 'Nord-Vest',
    regionSlug: 'nord-vest',
    population: '102,000',
    avgLoanAmount: '24,000 RON',
    avgRate: '11.0%',
    avgCreditScore: '700',
    description: 'Northwestern border city with cross-border financial services.',
    descriptionRo: 'Oraș de frontieră nord-vestic cu servicii financiare transfrontaliere.',
    topLoanTypes: ['Personal Loans', 'Small Business'],
    topLoanTypesRo: ['Credite personale', 'Afacere mică'],
    lenderCount: 25,
    nearbyCity: ['Carei', 'Negrești-Oaș', 'Tășnad']
  },
  {
    name: 'Zalău',
    slug: 'zalau',
    nameRo: 'Zalău',
    region: 'Nord-Vest',
    regionSlug: 'nord-vest',
    population: '56,000',
    avgLoanAmount: '22,000 RON',
    avgRate: '11.3%',
    avgCreditScore: '695',
    description: 'Sălaj county seat with growing microfinance services.',
    descriptionRo: 'Reședința județului Sălaj cu servicii de microfinanțare în creștere.',
    topLoanTypes: ['Personal Loans', 'Agricultural'],
    topLoanTypesRo: ['Credite personale', 'Agricultură'],
    lenderCount: 21,
    nearbyCity: ['Jibou', 'Șimleu Silvaniei', 'Cehu Silvaniei']
  }
]

// Helper functions
export function getCityBySlug(regionSlug: string, citySlug: string): RomaniaCityInfo | undefined {
  return romaniaCities.find(c => c.regionSlug === regionSlug && c.slug === citySlug)
}

export function getCitiesByRegion(regionSlug: string): RomaniaCityInfo[] {
  return romaniaCities.filter(c => c.regionSlug === regionSlug)
}

export function getAllCitySlugs(): Array<{ region: string; city: string }> {
  return romaniaCities.map(c => ({ region: c.regionSlug, city: c.slug }))
}

export function getNearbyCities(citySlug: string, limit: number = 3): RomaniaCityInfo[] {
  const city = romaniaCities.find(c => c.slug === citySlug)
  if (!city) return []
  
  return romaniaCities
    .filter(c => city.nearbyCity.includes(c.name))
    .slice(0, limit)
}

export function getCitiesByPopulation(): RomaniaCityInfo[] {
  return [...romaniaCities].sort((a, b) => {
    const popA = parseFloat(a.population.replace(/[^\d.]/g, ''))
    const popB = parseFloat(b.population.replace(/[^\d.]/g, ''))
    return popB - popA
  })
}
