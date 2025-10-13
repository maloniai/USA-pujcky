/**
 * Spain Cities Data for Loan Information
 * Major cities across Spanish autonomous communities
 */

export interface SpainCityInfo {
  name: string
  slug: string
  region: string
  regionSlug: string
  population: string
  avgLoanAmount: string
  avgRate: string
  maxLoanAmount: string
  description: string
  descriptionEs: string
  topLenders: string[]
  topLendersEs: string[]
}

export const spainCities: SpainCityInfo[] = [
  // Madrid Region
  {
    name: 'Madrid',
    slug: 'madrid',
    region: 'Madrid',
    regionSlug: 'madrid',
    population: '3.3M',
    avgLoanAmount: '€16,000',
    avgRate: '7.2%',
    maxLoanAmount: '€80,000',
    description: 'Spain\'s capital with the most competitive loan market and diverse lender options.',
    descriptionEs: 'La capital de España con el mercado de préstamos más competitivo y diversas opciones de prestamistas.',
    topLenders: ['BBVA', 'Santander', 'CaixaBank', 'Bankinter', 'ING Direct'],
    topLendersEs: ['BBVA', 'Santander', 'CaixaBank', 'Bankinter', 'ING Direct']
  },
  {
    name: 'Móstoles',
    slug: 'mostoles',
    region: 'Madrid',
    regionSlug: 'madrid',
    population: '210K',
    avgLoanAmount: '€13,500',
    avgRate: '7.6%',
    maxLoanAmount: '€70,000',
    description: 'Growing city with good access to Madrid\'s financial services.',
    descriptionEs: 'Ciudad en crecimiento con buen acceso a los servicios financieros de Madrid.',
    topLenders: ['BBVA', 'Santander', 'CaixaBank', 'Unicaja', 'Cofidis'],
    topLendersEs: ['BBVA', 'Santander', 'CaixaBank', 'Unicaja', 'Cofidis']
  },
  {
    name: 'Alcalá de Henares',
    slug: 'alcala-de-henares',
    region: 'Madrid',
    regionSlug: 'madrid',
    population: '195K',
    avgLoanAmount: '€13,000',
    avgRate: '7.7%',
    maxLoanAmount: '€68,000',
    description: 'Historic university city with diverse loan options.',
    descriptionEs: 'Ciudad universitaria histórica con diversas opciones de préstamo.',
    topLenders: ['BBVA', 'Santander', 'CaixaBank', 'Bankia', 'EVO Banco'],
    topLendersEs: ['BBVA', 'Santander', 'CaixaBank', 'Bankia', 'EVO Banco']
  },
  
  // Catalonia
  {
    name: 'Barcelona',
    slug: 'barcelona',
    region: 'Catalonia',
    regionSlug: 'catalonia',
    population: '1.6M',
    avgLoanAmount: '€15,500',
    avgRate: '7.5%',
    maxLoanAmount: '€75,000',
    description: 'Major financial center with competitive rates and diverse loan products.',
    descriptionEs: 'Centro financiero importante con tasas competitivas y diversos productos de préstamo.',
    topLenders: ['CaixaBank', 'Sabadell', 'BBVA', 'Santander', 'Bankinter'],
    topLendersEs: ['CaixaBank', 'Sabadell', 'BBVA', 'Santander', 'Bankinter']
  },
  {
    name: 'Hospitalet de Llobregat',
    slug: 'hospitalet-de-llobregat',
    region: 'Catalonia',
    regionSlug: 'catalonia',
    population: '265K',
    avgLoanAmount: '€13,800',
    avgRate: '7.9%',
    maxLoanAmount: '€65,000',
    description: 'Dense urban area with good access to Barcelona\'s financial services.',
    descriptionEs: 'Área urbana densa con buen acceso a los servicios financieros de Barcelona.',
    topLenders: ['CaixaBank', 'Sabadell', 'BBVA', 'Santander', 'Unicaja'],
    topLendersEs: ['CaixaBank', 'Sabadell', 'BBVA', 'Santander', 'Unicaja']
  },
  {
    name: 'Terrassa',
    slug: 'terrassa',
    region: 'Catalonia',
    regionSlug: 'catalonia',
    population: '220K',
    avgLoanAmount: '€13,200',
    avgRate: '8.0%',
    maxLoanAmount: '€63,000',
    description: 'Industrial city with growing financial services sector.',
    descriptionEs: 'Ciudad industrial con sector de servicios financieros en crecimiento.',
    topLenders: ['CaixaBank', 'Sabadell', 'BBVA', 'Bankinter', 'Cajamar'],
    topLendersEs: ['CaixaBank', 'Sabadell', 'BBVA', 'Bankinter', 'Cajamar']
  },
  
  // Andalusia
  {
    name: 'Sevilla',
    slug: 'sevilla',
    region: 'Andalusia',
    regionSlug: 'andalusia',
    population: '690K',
    avgLoanAmount: '€12,500',
    avgRate: '8.0%',
    maxLoanAmount: '€62,000',
    description: 'Andalusia\'s capital with strong banking presence and competitive rates.',
    descriptionEs: 'Capital de Andalucía con fuerte presencia bancaria y tasas competitivas.',
    topLenders: ['Unicaja', 'CaixaBank', 'BBVA', 'Santander', 'Bankinter'],
    topLendersEs: ['Unicaja', 'CaixaBank', 'BBVA', 'Santander', 'Bankinter']
  },
  {
    name: 'Málaga',
    slug: 'malaga',
    region: 'Andalusia',
    regionSlug: 'andalusia',
    population: '580K',
    avgLoanAmount: '€12,800',
    avgRate: '7.9%',
    maxLoanAmount: '€64,000',
    description: 'Coastal tourist hub with diverse loan options and growing fintech sector.',
    descriptionEs: 'Centro turístico costero con diversas opciones de préstamo y sector fintech en crecimiento.',
    topLenders: ['Unicaja', 'Sabadell', 'CaixaBank', 'BBVA', 'Bankinter'],
    topLendersEs: ['Unicaja', 'Sabadell', 'CaixaBank', 'BBVA', 'Bankinter']
  },
  {
    name: 'Córdoba',
    slug: 'cordoba',
    region: 'Andalusia',
    regionSlug: 'andalusia',
    population: '325K',
    avgLoanAmount: '€11,500',
    avgRate: '8.3%',
    maxLoanAmount: '€58,000',
    description: 'Historic city with traditional banking services and competitive loan products.',
    descriptionEs: 'Ciudad histórica con servicios bancarios tradicionales y productos de préstamo competitivos.',
    topLenders: ['Unicaja', 'CaixaBank', 'BBVA', 'Santander', 'Cajamar'],
    topLendersEs: ['Unicaja', 'CaixaBank', 'BBVA', 'Santander', 'Cajamar']
  },
  
  // Valencia
  {
    name: 'Valencia',
    slug: 'valencia',
    region: 'Valencia',
    regionSlug: 'valencia',
    population: '800K',
    avgLoanAmount: '€13,500',
    avgRate: '7.7%',
    maxLoanAmount: '€67,000',
    description: 'Major Mediterranean city with competitive loan market and diverse lenders.',
    descriptionEs: 'Ciudad mediterránea importante con mercado de préstamos competitivo y prestamistas diversos.',
    topLenders: ['CaixaBank', 'Sabadell', 'BBVA', 'Santander', 'Bankinter'],
    topLendersEs: ['CaixaBank', 'Sabadell', 'BBVA', 'Santander', 'Bankinter']
  },
  {
    name: 'Alicante',
    slug: 'alicante',
    region: 'Valencia',
    regionSlug: 'valencia',
    population: '335K',
    avgLoanAmount: '€12,800',
    avgRate: '8.0%',
    maxLoanAmount: '€63,000',
    description: 'Tourist destination with strong banking sector and competitive rates.',
    descriptionEs: 'Destino turístico con sector bancario sólido y tasas competitivas.',
    topLenders: ['Sabadell', 'CaixaBank', 'BBVA', 'Santander', 'Bankinter'],
    topLendersEs: ['Sabadell', 'CaixaBank', 'BBVA', 'Santander', 'Bankinter']
  },
  {
    name: 'Elche',
    slug: 'elche',
    region: 'Valencia',
    regionSlug: 'valencia',
    population: '235K',
    avgLoanAmount: '€12,200',
    avgRate: '8.1%',
    maxLoanAmount: '€61,000',
    description: 'Industrial and agricultural center with good banking access.',
    descriptionEs: 'Centro industrial y agrícola con buen acceso bancario.',
    topLenders: ['Sabadell', 'CaixaBank', 'BBVA', 'Cajamar', 'Bankinter'],
    topLendersEs: ['Sabadell', 'CaixaBank', 'BBVA', 'Cajamar', 'Bankinter']
  },
  
  // Basque Country
  {
    name: 'Bilbao',
    slug: 'bilbao',
    region: 'Basque Country',
    regionSlug: 'basque-country',
    population: '345K',
    avgLoanAmount: '€16,500',
    avgRate: '7.1%',
    maxLoanAmount: '€82,000',
    description: 'Financial hub with excellent credit access and competitive rates.',
    descriptionEs: 'Centro financiero con excelente acceso al crédito y tasas competitivas.',
    topLenders: ['BBVA', 'Kutxabank', 'Santander', 'Laboral Kutxa', 'CaixaBank'],
    topLendersEs: ['BBVA', 'Kutxabank', 'Santander', 'Laboral Kutxa', 'CaixaBank']
  },
  {
    name: 'Vitoria-Gasteiz',
    slug: 'vitoria-gasteiz',
    region: 'Basque Country',
    regionSlug: 'basque-country',
    population: '250K',
    avgLoanAmount: '€15,800',
    avgRate: '7.3%',
    maxLoanAmount: '€78,000',
    description: 'Regional capital with strong local banking and competitive rates.',
    descriptionEs: 'Capital regional con banca local sólida y tasas competitivas.',
    topLenders: ['Kutxabank', 'BBVA', 'Laboral Kutxa', 'Santander', 'CaixaBank'],
    topLendersEs: ['Kutxabank', 'BBVA', 'Laboral Kutxa', 'Santander', 'CaixaBank']
  },
  {
    name: 'San Sebastián',
    slug: 'san-sebastian',
    region: 'Basque Country',
    regionSlug: 'basque-country',
    population: '187K',
    avgLoanAmount: '€16,200',
    avgRate: '7.2%',
    maxLoanAmount: '€80,000',
    description: 'Coastal city with high income levels and excellent loan access.',
    descriptionEs: 'Ciudad costera con altos niveles de ingresos y excelente acceso a préstamos.',
    topLenders: ['Kutxabank', 'BBVA', 'Santander', 'Laboral Kutxa', 'CaixaBank'],
    topLendersEs: ['Kutxabank', 'BBVA', 'Santander', 'Laboral Kutxa', 'CaixaBank']
  },
  
  // Galicia
  {
    name: 'Vigo',
    slug: 'vigo',
    region: 'Galicia',
    regionSlug: 'galicia',
    population: '295K',
    avgLoanAmount: '€11,800',
    avgRate: '8.2%',
    maxLoanAmount: '€57,000',
    description: 'Major port city with growing financial services sector.',
    descriptionEs: 'Ciudad portuaria importante con sector de servicios financieros en crecimiento.',
    topLenders: ['Abanca', 'Santander', 'BBVA', 'CaixaBank', 'Bankinter'],
    topLendersEs: ['Abanca', 'Santander', 'BBVA', 'CaixaBank', 'Bankinter']
  },
  {
    name: 'A Coruña',
    slug: 'a-coruna',
    region: 'Galicia',
    regionSlug: 'galicia',
    population: '245K',
    avgLoanAmount: '€11,600',
    avgRate: '8.3%',
    maxLoanAmount: '€56,000',
    description: 'Coastal city with strong local banking presence.',
    descriptionEs: 'Ciudad costera con fuerte presencia bancaria local.',
    topLenders: ['Abanca', 'Santander', 'BBVA', 'CaixaBank', 'Bankinter'],
    topLendersEs: ['Abanca', 'Santander', 'BBVA', 'CaixaBank', 'Bankinter']
  },
  {
    name: 'Santiago de Compostela',
    slug: 'santiago-de-compostela',
    region: 'Galicia',
    regionSlug: 'galicia',
    population: '97K',
    avgLoanAmount: '€11,200',
    avgRate: '8.5%',
    maxLoanAmount: '€54,000',
    description: 'Historic and cultural center with traditional banking services.',
    descriptionEs: 'Centro histórico y cultural con servicios bancarios tradicionales.',
    topLenders: ['Abanca', 'Santander', 'BBVA', 'CaixaBank', 'Cajamar'],
    topLendersEs: ['Abanca', 'Santander', 'BBVA', 'CaixaBank', 'Cajamar']
  }
]

export function getCitiesByRegion(regionSlug: string): SpainCityInfo[] {
  return spainCities.filter(city => city.regionSlug === regionSlug)
}

export function getCityBySlug(citySlug: string): SpainCityInfo | undefined {
  return spainCities.find(city => city.slug === citySlug)
}

export function getAllCitySlugs(): string[] {
  return spainCities.map(city => city.slug)
}

export function getAllCitySlugsByRegion(regionSlug: string): string[] {
  return spainCities
    .filter(city => city.regionSlug === regionSlug)
    .map(city => city.slug)
}
