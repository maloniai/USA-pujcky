/**
 * Spain Cities Data for Loan Information
 * Major cities across Spanish autonomous communities
 */

export interface SpainCityInfo {
  name: string
  slug: string
  nameEs: string
  region: string
  regionSlug: string
  population: string
  avgLoanAmount: string
  avgRate: string
  avgCreditScore: string
  description: string
  descriptionEs: string
  topLoanTypes: string[]
  topLoanTypesEs: string[]
  lenderCount: number
  nearbyCities: string[]
}

export const spainCities: SpainCityInfo[] = [
  // Madrid Region
  {
    name: 'Madrid',
    slug: 'madrid',
    nameEs: 'Madrid',
    region: 'Community of Madrid',
    regionSlug: 'madrid',
    population: '3.3M',
    avgLoanAmount: '18,000 €',
    avgRate: '7.2%',
    avgCreditScore: '720',
    description: 'Spain\'s capital offers the most competitive loan rates and widest lender selection in the country.',
    descriptionEs: 'La capital de España ofrece las tasas de préstamo más competitivas y la mayor selección de prestamistas del país.',
    topLoanTypes: ['Personal Loans', 'Debt Consolidation', 'Home Renovation'],
    topLoanTypesEs: ['Préstamos personales', 'Reunificación de deudas', 'Reformas del hogar'],
    lenderCount: 48,
    nearbyCities: ['Móstoles', 'Alcalá de Henares', 'Fuenlabrada']
  },
  {
    name: 'Móstoles',
    slug: 'mostoles',
    nameEs: 'Móstoles',
    region: 'Community of Madrid',
    regionSlug: 'madrid',
    population: '209,000',
    avgLoanAmount: '14,000 €',
    avgRate: '7.8%',
    avgCreditScore: '690',
    description: 'Growing city near Madrid with expanding loan market and competitive rates.',
    descriptionEs: 'Ciudad en crecimiento cerca de Madrid con mercado de préstamos en expansión y tasas competitivas.',
    topLoanTypes: ['Personal Loans', 'Auto Loans', 'Education'],
    topLoanTypesEs: ['Préstamos personales', 'Préstamos para coche', 'Educación'],
    lenderCount: 32,
    nearbyCities: ['Madrid', 'Alcorcón', 'Leganés']
  },
  {
    name: 'Alcalá de Henares',
    slug: 'alcala-de-henares',
    nameEs: 'Alcalá de Henares',
    region: 'Community of Madrid',
    regionSlug: 'madrid',
    population: '195,000',
    avgLoanAmount: '13,500 €',
    avgRate: '7.9%',
    avgCreditScore: '695',
    description: 'Historic university city with diverse loan products for residents and students.',
    descriptionEs: 'Ciudad universitaria histórica con productos de préstamo diversos para residentes y estudiantes.',
    topLoanTypes: ['Personal Loans', 'Education Loans', 'Home Improvement'],
    topLoanTypesEs: ['Préstamos personales', 'Préstamos educativos', 'Mejoras del hogar'],
    lenderCount: 28,
    nearbyCities: ['Madrid', 'Torrejón de Ardoz', 'Guadalajara']
  },

  // Catalonia
  {
    name: 'Barcelona',
    slug: 'barcelona',
    nameEs: 'Barcelona',
    region: 'Catalonia',
    regionSlug: 'cataluna',
    population: '1.6M',
    avgLoanAmount: '19,000 €',
    avgRate: '7.4%',
    avgCreditScore: '715',
    description: 'Major Mediterranean city with vibrant economy and comprehensive loan market.',
    descriptionEs: 'Gran ciudad mediterránea con economía vibrante y mercado de préstamos integral.',
    topLoanTypes: ['Personal Loans', 'Business Loans', 'Debt Consolidation'],
    topLoanTypesEs: ['Préstamos personales', 'Préstamos empresariales', 'Reunificación de deudas'],
    lenderCount: 45,
    nearbyCities: ['L\'Hospitalet', 'Badalona', 'Terrassa']
  },
  {
    name: 'L\'Hospitalet de Llobregat',
    slug: 'hospitalet',
    nameEs: 'L\'Hospitalet de Llobregat',
    region: 'Catalonia',
    regionSlug: 'cataluna',
    population: '265,000',
    avgLoanAmount: '15,500 €',
    avgRate: '7.9%',
    avgCreditScore: '700',
    description: 'Industrial city adjacent to Barcelona with competitive loan offerings.',
    descriptionEs: 'Ciudad industrial adyacente a Barcelona con ofertas de préstamos competitivas.',
    topLoanTypes: ['Personal Loans', 'Auto Loans', 'Business Loans'],
    topLoanTypesEs: ['Préstamos personales', 'Préstamos para coche', 'Préstamos empresariales'],
    lenderCount: 36,
    nearbyCities: ['Barcelona', 'Cornellà', 'El Prat']
  },
  {
    name: 'Terrassa',
    slug: 'terrassa',
    nameEs: 'Terrassa',
    region: 'Catalonia',
    regionSlug: 'cataluna',
    population: '224,000',
    avgLoanAmount: '14,500 €',
    avgRate: '8.1%',
    avgCreditScore: '690',
    description: 'Industrial center with growing personal loan market and business financing.',
    descriptionEs: 'Centro industrial con mercado de préstamos personales en crecimiento y financiación empresarial.',
    topLoanTypes: ['Personal Loans', 'Business Loans', 'Home Renovation'],
    topLoanTypesEs: ['Préstamos personales', 'Préstamos empresariales', 'Reformas del hogar'],
    lenderCount: 30,
    nearbyCities: ['Sabadell', 'Barcelona', 'Rubí']
  },

  // Valencia
  {
    name: 'Valencia',
    slug: 'valencia',
    nameEs: 'Valencia',
    region: 'Valencian Community',
    regionSlug: 'comunidad-valenciana',
    population: '800,000',
    avgLoanAmount: '16,000 €',
    avgRate: '7.8%',
    avgCreditScore: '705',
    description: 'Third largest Spanish city with diverse economy and competitive loan market.',
    descriptionEs: 'Tercera ciudad más grande de España con economía diversa y mercado de préstamos competitivo.',
    topLoanTypes: ['Personal Loans', 'Home Improvement', 'Vacation Loans'],
    topLoanTypesEs: ['Préstamos personales', 'Mejoras del hogar', 'Préstamos vacacionales'],
    lenderCount: 40,
    nearbyCities: ['Torrent', 'Paterna', 'Mislata']
  },
  {
    name: 'Alicante',
    slug: 'alicante',
    nameEs: 'Alicante',
    region: 'Valencian Community',
    regionSlug: 'comunidad-valenciana',
    population: '337,000',
    avgLoanAmount: '14,500 €',
    avgRate: '8.3%',
    avgCreditScore: '695',
    description: 'Coastal city with tourism-driven economy and accessible personal financing.',
    descriptionEs: 'Ciudad costera con economía impulsada por el turismo y financiación personal accesible.',
    topLoanTypes: ['Personal Loans', 'Tourism Business', 'Property Loans'],
    topLoanTypesEs: ['Préstamos personales', 'Negocios turísticos', 'Préstamos inmobiliarios'],
    lenderCount: 34,
    nearbyCities: ['Elche', 'Torrevieja', 'San Vicente']
  },
  {
    name: 'Elche',
    slug: 'elche',
    nameEs: 'Elche',
    region: 'Valencian Community',
    regionSlug: 'comunidad-valenciana',
    population: '234,000',
    avgLoanAmount: '13,000 €',
    avgRate: '8.4%',
    avgCreditScore: '685',
    description: 'Industrial and agricultural city with diverse loan products.',
    descriptionEs: 'Ciudad industrial y agrícola con productos de préstamo diversos.',
    topLoanTypes: ['Personal Loans', 'Agricultural Loans', 'Auto Loans'],
    topLoanTypesEs: ['Préstamos personales', 'Préstamos agrícolas', 'Préstamos para coche'],
    lenderCount: 28,
    nearbyCities: ['Alicante', 'Santa Pola', 'Crevillent']
  },

  // Andalusia
  {
    name: 'Sevilla',
    slug: 'sevilla',
    nameEs: 'Sevilla',
    region: 'Andalusia',
    regionSlug: 'andalucia',
    population: '688,000',
    avgLoanAmount: '14,000 €',
    avgRate: '8.2%',
    avgCreditScore: '690',
    description: 'Andalusian capital with rich culture and growing personal loan market.',
    descriptionEs: 'Capital andaluza con rica cultura y mercado de préstamos personales en crecimiento.',
    topLoanTypes: ['Personal Loans', 'Tourism Business', 'Home Renovation'],
    topLoanTypesEs: ['Préstamos personales', 'Negocios turísticos', 'Reformas del hogar'],
    lenderCount: 38,
    nearbyCities: ['Dos Hermanas', 'Alcalá de Guadaíra', 'Mairena']
  },
  {
    name: 'Málaga',
    slug: 'malaga',
    nameEs: 'Málaga',
    region: 'Andalusia',
    regionSlug: 'andalucia',
    population: '578,000',
    avgLoanAmount: '15,000 €',
    avgRate: '8.0%',
    avgCreditScore: '700',
    description: 'Costa del Sol hub with strong tourism sector and accessible financing.',
    descriptionEs: 'Centro de la Costa del Sol con fuerte sector turístico y financiación accesible.',
    topLoanTypes: ['Personal Loans', 'Tourism Business', 'Property Investment'],
    topLoanTypesEs: ['Préstamos personales', 'Negocios turísticos', 'Inversión inmobiliaria'],
    lenderCount: 36,
    nearbyCities: ['Marbella', 'Mijas', 'Torremolinos']
  },
  {
    name: 'Córdoba',
    slug: 'cordoba',
    nameEs: 'Córdoba',
    region: 'Andalusia',
    regionSlug: 'andalucia',
    population: '325,000',
    avgLoanAmount: '12,000 €',
    avgRate: '8.6%',
    avgCreditScore: '680',
    description: 'Historic city with traditional economy and expanding loan options.',
    descriptionEs: 'Ciudad histórica con economía tradicional y opciones de préstamo en expansión.',
    topLoanTypes: ['Personal Loans', 'Agricultural Loans', 'Home Improvement'],
    topLoanTypesEs: ['Préstamos personales', 'Préstamos agrícolas', 'Mejoras del hogar'],
    lenderCount: 30,
    nearbyCities: ['Lucena', 'Puente Genil', 'Montilla']
  },
  {
    name: 'Granada',
    slug: 'granada',
    nameEs: 'Granada',
    region: 'Andalusia',
    regionSlug: 'andalucia',
    population: '232,000',
    avgLoanAmount: '11,500 €',
    avgRate: '8.7%',
    avgCreditScore: '675',
    description: 'University and tourism city with diverse personal financing options.',
    descriptionEs: 'Ciudad universitaria y turística con opciones de financiación personal diversas.',
    topLoanTypes: ['Personal Loans', 'Education Loans', 'Tourism Business'],
    topLoanTypesEs: ['Préstamos personales', 'Préstamos educativos', 'Negocios turísticos'],
    lenderCount: 28,
    nearbyCities: ['Motril', 'Almuñécar', 'Loja']
  },

  // Galicia
  {
    name: 'A Coruña',
    slug: 'a-coruna',
    nameEs: 'A Coruña',
    region: 'Galicia',
    regionSlug: 'galicia',
    population: '246,000',
    avgLoanAmount: '13,500 €',
    avgRate: '8.2%',
    avgCreditScore: '690',
    description: 'Atlantic coast city with maritime economy and accessible personal loans.',
    descriptionEs: 'Ciudad de la costa atlántica con economía marítima y préstamos personales accesibles.',
    topLoanTypes: ['Personal Loans', 'Fishing Industry', 'Auto Loans'],
    topLoanTypesEs: ['Préstamos personales', 'Industria pesquera', 'Préstamos para coche'],
    lenderCount: 30,
    nearbyCities: ['Ferrol', 'Arteixo', 'Oleiros']
  },
  {
    name: 'Vigo',
    slug: 'vigo',
    nameEs: 'Vigo',
    region: 'Galicia',
    regionSlug: 'galicia',
    population: '295,000',
    avgLoanAmount: '14,000 €',
    avgRate: '8.1%',
    avgCreditScore: '695',
    description: 'Major port city with industrial base and competitive loan market.',
    descriptionEs: 'Gran ciudad portuaria con base industrial y mercado de préstamos competitivo.',
    topLoanTypes: ['Personal Loans', 'Business Loans', 'Fishing Industry'],
    topLoanTypesEs: ['Préstamos personales', 'Préstamos empresariales', 'Industria pesquera'],
    lenderCount: 32,
    nearbyCities: ['Redondela', 'Baiona', 'Nigrán']
  },

  // Basque Country
  {
    name: 'Bilbao',
    slug: 'bilbao',
    nameEs: 'Bilbao',
    region: 'Basque Country',
    regionSlug: 'pais-vasco',
    population: '346,000',
    avgLoanAmount: '18,500 €',
    avgRate: '7.0%',
    avgCreditScore: '730',
    description: 'Industrial and financial center with excellent loan rates and diverse products.',
    descriptionEs: 'Centro industrial y financiero con excelentes tasas de préstamo y productos diversos.',
    topLoanTypes: ['Personal Loans', 'Business Loans', 'Home Renovation'],
    topLoanTypesEs: ['Préstamos personales', 'Préstamos empresariales', 'Reformas del hogar'],
    lenderCount: 42,
    nearbyCities: ['Barakaldo', 'Getxo', 'Portugalete']
  },
  {
    name: 'Donostia-San Sebastián',
    slug: 'san-sebastian',
    nameEs: 'Donostia-San Sebastián',
    region: 'Basque Country',
    regionSlug: 'pais-vasco',
    population: '187,000',
    avgLoanAmount: '17,000 €',
    avgRate: '7.3%',
    avgCreditScore: '720',
    description: 'Coastal tourism hub with high living standards and competitive financing.',
    descriptionEs: 'Centro turístico costero con alto nivel de vida y financiación competitiva.',
    topLoanTypes: ['Personal Loans', 'Tourism Business', 'Property Loans'],
    topLoanTypesEs: ['Préstamos personales', 'Negocios turísticos', 'Préstamos inmobiliarios'],
    lenderCount: 35,
    nearbyCities: ['Irun', 'Errenteria', 'Zarautz']
  },

  // Castile and León
  {
    name: 'Valladolid',
    slug: 'valladolid',
    nameEs: 'Valladolid',
    region: 'Castile and León',
    regionSlug: 'castilla-y-leon',
    population: '298,000',
    avgLoanAmount: '12,500 €',
    avgRate: '8.5%',
    avgCreditScore: '685',
    description: 'Regional capital with automotive industry and accessible personal loans.',
    descriptionEs: 'Capital regional con industria automotriz y préstamos personales accesibles.',
    topLoanTypes: ['Personal Loans', 'Auto Loans', 'Home Improvement'],
    topLoanTypesEs: ['Préstamos personales', 'Préstamos para coche', 'Mejoras del hogar'],
    lenderCount: 32,
    nearbyCities: ['Medina del Campo', 'Laguna de Duero', 'Tudela de Duero']
  },

  // Canary Islands
  {
    name: 'Las Palmas de Gran Canaria',
    slug: 'las-palmas',
    nameEs: 'Las Palmas de Gran Canaria',
    region: 'Canary Islands',
    regionSlug: 'canarias',
    population: '379,000',
    avgLoanAmount: '14,500 €',
    avgRate: '8.2%',
    avgCreditScore: '690',
    description: 'Island capital with tourism economy and diverse loan products.',
    descriptionEs: 'Capital insular con economía turística y productos de préstamo diversos.',
    topLoanTypes: ['Personal Loans', 'Tourism Business', 'Vehicle Loans'],
    topLoanTypesEs: ['Préstamos personales', 'Negocios turísticos', 'Préstamos vehículos'],
    lenderCount: 30,
    nearbyCities: ['Telde', 'Arucas', 'Agüimes']
  },
  {
    name: 'Santa Cruz de Tenerife',
    slug: 'santa-cruz-tenerife',
    nameEs: 'Santa Cruz de Tenerife',
    region: 'Canary Islands',
    regionSlug: 'canarias',
    population: '207,000',
    avgLoanAmount: '13,500 €',
    avgRate: '8.4%',
    avgCreditScore: '685',
    description: 'Tenerife capital with tourism-driven economy and accessible financing.',
    descriptionEs: 'Capital de Tenerife con economía impulsada por el turismo y financiación accesible.',
    topLoanTypes: ['Personal Loans', 'Tourism Business', 'Property Investment'],
    topLoanTypesEs: ['Préstamos personales', 'Negocios turísticos', 'Inversión inmobiliaria'],
    lenderCount: 28,
    nearbyCities: ['La Laguna', 'Arona', 'Adeje']
  }
]

export function getSpainCityBySlug(slug: string): SpainCityInfo | undefined {
  return spainCities.find(city => city.slug === slug)
}

export function getSpainCitiesByRegion(regionSlug: string): SpainCityInfo[] {
  return spainCities.filter(city => city.regionSlug === regionSlug)
}

export function getAllSpainCitySlugs(): string[] {
  return spainCities.map(city => city.slug)
}
