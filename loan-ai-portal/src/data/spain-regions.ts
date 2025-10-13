/**
 * Spain Regions Data for Loan Information
 * 17 Autonomous Communities (Comunidades Autónomas) of Spain
 */

export interface SpainRegionInfo {
  name: string
  slug: string
  nameEs: string // Spanish name
  population: string
  avgLoanAmount: string
  avgRate: string
  maxLoanAmount: string
  description: string
  descriptionEs: string
  regulations: string[]
  regulationsEs: string[]
  majorCities: string[]
  topLoanTypes: string[]
  topLoanTypesEs: string[]
}

export const spainRegions: SpainRegionInfo[] = [
  {
    name: 'Community of Madrid',
    slug: 'madrid',
    nameEs: 'Comunidad de Madrid',
    population: '6.8M',
    avgLoanAmount: '15,000 €',
    avgRate: '7.5%',
    maxLoanAmount: '75,000 €',
    description: 'Spain\'s capital region with Madrid city, offering the highest loan availability and most competitive rates.',
    descriptionEs: 'La región capital de España con la ciudad de Madrid, ofrece la mayor disponibilidad de préstamos y las tasas más competitivas.',
    regulations: [
      'Banco de España (Bank of Spain) supervision',
      'Maximum APR capped by law for consumer loans',
      'Consumer Credit Act protection (Law 16/2011)',
      'Mandatory 14-day withdrawal period',
      'Licensed lender requirement',
      'CIRBE credit bureau check mandatory',
      'Anti-Money Laundering (AML) compliance required',
      'EU Consumer Credit Directive compliance'
    ],
    regulationsEs: [
      'Supervisión del Banco de España',
      'TAE máxima regulada por ley para préstamos al consumo',
      'Protección según Ley de Crédito al Consumo (Ley 16/2011)',
      'Periodo de desistimiento obligatorio de 14 días',
      'Requisito de prestamista autorizado',
      'Consulta obligatoria a CIRBE (Central de Información de Riesgos)',
      'Cumplimiento de normativa contra el blanqueo de capitales',
      'Cumplimiento de la Directiva Europea de Crédito al Consumo'
    ],
    majorCities: ['Madrid', 'Móstoles', 'Alcalá de Henares', 'Fuenlabrada', 'Getafe'],
    topLoanTypes: ['Personal Loans', 'Debt Consolidation', 'Home Renovation'],
    topLoanTypesEs: ['Préstamos personales', 'Reunificación de deudas', 'Reformas del hogar']
  },
  {
    name: 'Catalonia',
    slug: 'cataluna',
    nameEs: 'Cataluña',
    population: '7.7M',
    avgLoanAmount: '16,500 €',
    avgRate: '7.8%',
    maxLoanAmount: '80,000 €',
    description: 'Major economic hub with Barcelona, diverse loan products and competitive rates.',
    descriptionEs: 'Principal centro económico con Barcelona, productos de préstamos diversos y tasas competitivas.',
    regulations: [
      'Bank of Spain regulated',
      'APR caps enforced',
      'Consumer protection under Spanish law',
      'Transparent disclosure required',
      'Right to early repayment',
      'Mandatory credit assessment',
      'Written contract required',
      'Complaints procedure mandatory'
    ],
    regulationsEs: [
      'Regulado por el Banco de España',
      'Límites de TAE aplicados',
      'Protección del consumidor según ley española',
      'Divulgación transparente obligatoria',
      'Derecho a amortización anticipada',
      'Evaluación de solvencia obligatoria',
      'Contrato por escrito obligatorio',
      'Procedimiento de reclamaciones obligatorio'
    ],
    majorCities: ['Barcelona', 'L\'Hospitalet', 'Terrassa', 'Badalona', 'Sabadell'],
    topLoanTypes: ['Personal Loans', 'Auto Loans', 'Business Loans'],
    topLoanTypesEs: ['Préstamos personales', 'Préstamos para coche', 'Préstamos empresariales']
  },
  {
    name: 'Valencian Community',
    slug: 'comunidad-valenciana',
    nameEs: 'Comunidad Valenciana',
    population: '5.1M',
    avgLoanAmount: '14,000 €',
    avgRate: '8.2%',
    maxLoanAmount: '60,000 €',
    description: 'Mediterranean region with Valencia, growing financial market and tourism-driven economy.',
    descriptionEs: 'Región mediterránea con Valencia, mercado financiero en crecimiento y economía impulsada por el turismo.',
    regulations: [
      'Banco de España supervision',
      'Consumer Credit Law protection',
      'Maximum interest rate limits',
      '14-day cooling-off period',
      'Licensed institutions only',
      'Credit history check required',
      'Full cost disclosure mandatory',
      'EU directive compliance'
    ],
    regulationsEs: [
      'Supervisión del Banco de España',
      'Protección Ley de Crédito al Consumo',
      'Límites de tipo de interés máximo',
      'Periodo de reflexión de 14 días',
      'Solo instituciones autorizadas',
      'Consulta de historial crediticio obligatoria',
      'Divulgación completa de costes obligatoria',
      'Cumplimiento directiva UE'
    ],
    majorCities: ['Valencia', 'Alicante', 'Elche', 'Castellón', 'Torrevieja'],
    topLoanTypes: ['Personal Loans', 'Home Improvement', 'Vacation Loans'],
    topLoanTypesEs: ['Préstamos personales', 'Mejoras del hogar', 'Préstamos vacacionales']
  },
  {
    name: 'Andalusia',
    slug: 'andalucia',
    nameEs: 'Andalucía',
    population: '8.5M',
    avgLoanAmount: '12,500 €',
    avgRate: '8.5%',
    maxLoanAmount: '50,000 €',
    description: 'Spain\'s most populous region, diverse economy with growing access to personal financing.',
    descriptionEs: 'La región más poblada de España, economía diversa con creciente acceso a financiación personal.',
    regulations: [
      'Bank of Spain oversight',
      'APR limitations',
      'Consumer rights protection',
      'Cooling-off period guaranteed',
      'Licensed lenders required',
      'Credit bureau checks',
      'Transparent terms mandatory',
      'Complaint mechanisms available'
    ],
    regulationsEs: [
      'Supervisión del Banco de España',
      'Limitaciones de TAE',
      'Protección derechos del consumidor',
      'Periodo de desistimiento garantizado',
      'Prestamistas autorizados requeridos',
      'Consultas a buró de crédito',
      'Términos transparentes obligatorios',
      'Mecanismos de reclamación disponibles'
    ],
    majorCities: ['Sevilla', 'Málaga', 'Córdoba', 'Granada', 'Almería', 'Cádiz'],
    topLoanTypes: ['Personal Loans', 'Agricultural Loans', 'Tourism Business'],
    topLoanTypesEs: ['Préstamos personales', 'Préstamos agrícolas', 'Negocios turísticos']
  },
  {
    name: 'Galicia',
    slug: 'galicia',
    nameEs: 'Galicia',
    population: '2.7M',
    avgLoanAmount: '13,000 €',
    avgRate: '8.3%',
    maxLoanAmount: '55,000 €',
    description: 'Northwestern region with diverse economy and competitive loan market.',
    descriptionEs: 'Región del noroeste con economía diversa y mercado de préstamos competitivo.',
    regulations: [
      'Regulated by Banco de España',
      'Consumer credit protection',
      'Interest rate caps',
      '14-day withdrawal right',
      'Authorization required',
      'Credit assessment mandatory',
      'Clear pricing required',
      'EU standards compliance'
    ],
    regulationsEs: [
      'Regulado por el Banco de España',
      'Protección crédito al consumo',
      'Límites de tasas de interés',
      'Derecho de desistimiento 14 días',
      'Autorización requerida',
      'Evaluación crediticia obligatoria',
      'Precios claros obligatorios',
      'Cumplimiento estándares UE'
    ],
    majorCities: ['A Coruña', 'Vigo', 'Ourense', 'Lugo', 'Santiago de Compostela'],
    topLoanTypes: ['Personal Loans', 'Fishing Industry', 'Home Renovation'],
    topLoanTypesEs: ['Préstamos personales', 'Industria pesquera', 'Reformas del hogar']
  },
  {
    name: 'Basque Country',
    slug: 'pais-vasco',
    nameEs: 'País Vasco',
    population: '2.2M',
    avgLoanAmount: '17,000 €',
    avgRate: '7.3%',
    maxLoanAmount: '85,000 €',
    description: 'Industrial and financial center with high living standards and competitive loan offerings.',
    descriptionEs: 'Centro industrial y financiero con alto nivel de vida y ofertas de préstamos competitivas.',
    regulations: [
      'Bank of Spain supervision',
      'Consumer Credit Law',
      'APR caps enforced',
      'Withdrawal period',
      'Licensed institutions',
      'Credit checks required',
      'Full disclosure',
      'Consumer protection'
    ],
    regulationsEs: [
      'Supervisión Banco de España',
      'Ley de Crédito al Consumo',
      'Límites TAE aplicados',
      'Periodo de desistimiento',
      'Instituciones autorizadas',
      'Consultas crediticias obligatorias',
      'Divulgación completa',
      'Protección del consumidor'
    ],
    majorCities: ['Bilbao', 'Vitoria-Gasteiz', 'Donostia-San Sebastián', 'Barakaldo', 'Getxo'],
    topLoanTypes: ['Personal Loans', 'Business Loans', 'Auto Loans'],
    topLoanTypesEs: ['Préstamos personales', 'Préstamos empresariales', 'Préstamos para coche']
  },
  {
    name: 'Castile and León',
    slug: 'castilla-y-leon',
    nameEs: 'Castilla y León',
    population: '2.4M',
    avgLoanAmount: '11,500 €',
    avgRate: '8.7%',
    maxLoanAmount: '45,000 €',
    description: 'Large rural region with growing access to personal loans and agricultural financing.',
    descriptionEs: 'Gran región rural con creciente acceso a préstamos personales y financiación agrícola.',
    regulations: [
      'Banco de España regulated',
      'Consumer protection laws',
      'Interest rate limits',
      'Cooling-off period',
      'Licensed lenders only',
      'Credit assessment',
      'Transparent pricing',
      'EU compliance'
    ],
    regulationsEs: [
      'Regulado por Banco de España',
      'Leyes protección consumidor',
      'Límites tasa de interés',
      'Periodo de reflexión',
      'Solo prestamistas autorizados',
      'Evaluación crediticia',
      'Precios transparentes',
      'Cumplimiento UE'
    ],
    majorCities: ['Valladolid', 'León', 'Salamanca', 'Burgos', 'Palencia', 'Zamora'],
    topLoanTypes: ['Personal Loans', 'Agricultural Loans', 'Home Improvement'],
    topLoanTypesEs: ['Préstamos personales', 'Préstamos agrícolas', 'Mejoras del hogar']
  },
  {
    name: 'Canary Islands',
    slug: 'canarias',
    nameEs: 'Canarias',
    population: '2.2M',
    avgLoanAmount: '13,500 €',
    avgRate: '8.4%',
    maxLoanAmount: '50,000 €',
    description: 'Island archipelago with tourism-based economy and unique financing needs.',
    descriptionEs: 'Archipiélago insular con economía basada en turismo y necesidades de financiación únicas.',
    regulations: [
      'Bank of Spain supervision',
      'Consumer Credit Law',
      'APR regulations',
      'Withdrawal rights',
      'Licensed institutions',
      'Credit checks',
      'Full transparency',
      'Consumer safeguards'
    ],
    regulationsEs: [
      'Supervisión Banco de España',
      'Ley Crédito al Consumo',
      'Regulaciones TAE',
      'Derechos de desistimiento',
      'Instituciones autorizadas',
      'Consultas crediticias',
      'Transparencia completa',
      'Garantías consumidor'
    ],
    majorCities: ['Las Palmas', 'Santa Cruz de Tenerife', 'La Laguna', 'Telde', 'Arona'],
    topLoanTypes: ['Personal Loans', 'Tourism Business', 'Vehicle Loans'],
    topLoanTypesEs: ['Préstamos personales', 'Negocios turísticos', 'Préstamos vehículos']
  }
]

export function getSpainRegionBySlug(slug: string): SpainRegionInfo | undefined {
  return spainRegions.find(region => region.slug === slug)
}

export function getAllSpainRegionSlugs(): string[] {
  return spainRegions.map(region => region.slug)
}
