// Mexico regions (states) data for loan comparisons
// Following Mexican financial regulations and CONDUSEF guidelines

export interface MexicoRegion {
  name: string
  slug: string
  stateCode: string
  population: string
  medianIncome: string
  topCities: string[]
  description: string
  regulatoryBody: string
  maxAPR: string
  keyProtections: string[]
}

export const mexicoRegions: MexicoRegion[] = [
  {
    name: 'Ciudad de México',
    slug: 'ciudad-de-mexico',
    stateCode: 'CDMX',
    population: '9.2 millones',
    medianIncome: '$15,000 MXN',
    topCities: ['Ciudad de México', 'Iztapalapa', 'Gustavo A. Madero', 'Álvaro Obregón', 'Coyoacán'],
    description: 'Capital de México con la mayor concentración de instituciones financieras y opciones de crédito.',
    regulatoryBody: 'CONDUSEF - Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros',
    maxAPR: '100% CAT (Costo Anual Total)',
    keyProtections: [
      'Derecho a recibir información clara sobre el CAT',
      'Derecho a liquidación anticipada sin penalización excesiva',
      'Protección contra prácticas abusivas de cobranza',
      'Derecho a consultar el Buró de Crédito gratuitamente',
      'Límites en comisiones y tasas de interés',
    ],
  },
  {
    name: 'Estado de México',
    slug: 'estado-de-mexico',
    stateCode: 'MEX',
    population: '16.9 millones',
    medianIncome: '$12,000 MXN',
    topCities: ['Ecatepec', 'Nezahualcóyotl', 'Naucalpan', 'Tlalnepantla', 'Toluca'],
    description: 'Estado con mayor población del país y amplia disponibilidad de servicios financieros.',
    regulatoryBody: 'CONDUSEF',
    maxAPR: '100% CAT',
    keyProtections: [
      'Derecho a recibir información clara sobre el CAT',
      'Derecho a liquidación anticipada',
      'Protección contra prácticas abusivas',
      'Acceso al Buró de Crédito',
      'Transparencia en comisiones',
    ],
  },
  {
    name: 'Jalisco',
    slug: 'jalisco',
    stateCode: 'JAL',
    population: '8.3 millones',
    medianIncome: '$11,500 MXN',
    topCities: ['Guadalajara', 'Zapopan', 'Tlaquepaque', 'Tonalá', 'Puerto Vallarta'],
    description: 'Segundo centro financiero más importante de México con sede de numerosas instituciones.',
    regulatoryBody: 'CONDUSEF',
    maxAPR: '100% CAT',
    keyProtections: [
      'Información transparente sobre costos totales',
      'Derecho a la portabilidad de crédito',
      'Protección de datos personales',
      'Atención de quejas ante CONDUSEF',
      'Límites en comisiones por mora',
    ],
  },
  {
    name: 'Nuevo León',
    slug: 'nuevo-leon',
    stateCode: 'NL',
    population: '5.8 millones',
    medianIncome: '$14,000 MXN',
    topCities: ['Monterrey', 'Guadalupe', 'San Nicolás de los Garza', 'Apodaca', 'Santa Catarina'],
    description: 'Centro industrial y financiero del norte de México con alta penetración bancaria.',
    regulatoryBody: 'CONDUSEF',
    maxAPR: '100% CAT',
    keyProtections: [
      'Transparencia total en CAT y comisiones',
      'Derecho a segundo dictamen crediticio',
      'Protección contra fraudes financieros',
      'Derecho a conocer historial crediticio',
      'Límites en tasas de interés',
    ],
  },
  {
    name: 'Puebla',
    slug: 'puebla',
    stateCode: 'PUE',
    population: '6.6 millones',
    medianIncome: '$10,000 MXN',
    topCities: ['Puebla', 'Tehuacán', 'San Martín Texmelucan', 'Cholula', 'Atlixco'],
    description: 'Estado con creciente desarrollo económico y diversificación de servicios financieros.',
    regulatoryBody: 'CONDUSEF',
    maxAPR: '100% CAT',
    keyProtections: [
      'Información clara sobre CAT antes de firmar',
      'Derecho a cancelar sin penalización (primeros 5 días)',
      'Protección de datos personales y financieros',
      'Acceso a mediación con CONDUSEF',
      'Transparencia en cargos adicionales',
    ],
  },
  {
    name: 'Guanajuato',
    slug: 'guanajuato',
    stateCode: 'GTO',
    population: '6.2 millones',
    medianIncome: '$9,500 MXN',
    topCities: ['León', 'Irapuato', 'Celaya', 'Salamanca', 'Guanajuato'],
    description: 'Importante centro de manufactura con creciente oferta de productos financieros.',
    regulatoryBody: 'CONDUSEF',
    maxAPR: '100% CAT',
    keyProtections: [
      'Derecho a información precontractual completa',
      'Protección contra cláusulas abusivas',
      'Derecho a liquidación anticipada',
      'Consulta gratuita a Buró de Crédito anual',
      'Límites en penalizaciones',
    ],
  },
]

export const totalMexicoRegions = mexicoRegions.length
export const totalMexicoCities = mexicoRegions.reduce((sum, region) => sum + region.topCities.length, 0)
