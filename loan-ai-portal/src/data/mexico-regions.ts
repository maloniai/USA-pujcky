/**
 * Mexico Regions Data
 * 32 Mexican states organized by geographic regions
 */

export interface MexicoRegion {
  name: string
  nameEs: string
  slug: string
  description: string
  descriptionEs: string
  population: string
  states: string[]
  avgLoanAmount: string
  avgRate: string
  minLoanAmount: string
  maxLoanAmount: string
  typicalTermMonths: string
  topCities: string[]
  economicProfile: string
  regulatoryNotes: string
}

export const mexicoRegions: MexicoRegion[] = [
  {
    name: 'Valle de México (Mexico City Region)',
    nameEs: 'Valle de México (Región Ciudad de México)',
    slug: 'valle-de-mexico',
    description: 'Mexico City metropolitan area - financial and economic hub',
    descriptionEs: 'Área metropolitana de la Ciudad de México - centro financiero y económico',
    population: '21.2M',
    states: ['Ciudad de México', 'Estado de México'],
    avgLoanAmount: '$50,000 - $200,000 MXN',
    avgRate: '18% - 45% CAT',
    minLoanAmount: '$5,000 MXN',
    maxLoanAmount: '$500,000 MXN',
    typicalTermMonths: '12-48 meses',
    topCities: ['Ciudad de México', 'Ecatepec', 'Naucalpan', 'Nezahualcóyotl', 'Tlalnepantla'],
    economicProfile: 'Highest concentration of financial services, tech companies, and corporate headquarters. Diverse economy with strong service sector.',
    regulatoryNotes: 'Highest competition among lenders. CONDUSEF headquarters located here. Strict consumer protection enforcement.'
  },
  {
    name: 'Northern Border Region',
    nameEs: 'Región Frontera Norte',
    slug: 'frontera-norte',
    description: 'Border states with strong manufacturing and trade economy',
    descriptionEs: 'Estados fronterizos con fuerte economía manufacturera y comercial',
    population: '15.8M',
    states: ['Baja California', 'Sonora', 'Chihuahua', 'Coahuila', 'Nuevo León', 'Tamaulipas'],
    avgLoanAmount: '$40,000 - $150,000 MXN',
    avgRate: '20% - 48% CAT',
    minLoanAmount: '$5,000 MXN',
    maxLoanAmount: '$400,000 MXN',
    typicalTermMonths: '12-36 meses',
    topCities: ['Monterrey', 'Tijuana', 'Ciudad Juárez', 'Mexicali', 'Chihuahua', 'Hermosillo'],
    economicProfile: 'Strong manufacturing (maquiladoras), automotive industry, cross-border trade, and logistics. Higher average incomes in industrial zones.',
    regulatoryNotes: 'Modern banking infrastructure. High penetration of fintech lenders. Some U.S. credit union partnerships available.'
  },
  {
    name: 'Pacific Coast Region',
    nameEs: 'Región Costa del Pacífico',
    slug: 'costa-pacifico',
    description: 'Pacific coastal states with tourism and agriculture',
    descriptionEs: 'Estados costeros del Pacífico con turismo y agricultura',
    population: '18.5M',
    states: ['Jalisco', 'Nayarit', 'Colima', 'Michoacán', 'Guerrero', 'Oaxaca'],
    avgLoanAmount: '$30,000 - $120,000 MXN',
    avgRate: '22% - 50% CAT',
    minLoanAmount: '$3,000 MXN',
    maxLoanAmount: '$300,000 MXN',
    typicalTermMonths: '12-36 meses',
    topCities: ['Guadalajara', 'Zapopan', 'Puerto Vallarta', 'Morelia', 'Acapulco', 'Oaxaca'],
    economicProfile: 'Tourism-driven economy in coastal areas, tech sector in Guadalajara, agriculture and traditional crafts inland. Seasonal income variations.',
    regulatoryNotes: 'Mix of national banks and regional credit unions. Growing fintech presence in Guadalajara area.'
  },
  {
    name: 'Gulf Coast Region',
    nameEs: 'Región Costa del Golfo',
    slug: 'costa-golfo',
    description: 'Gulf of Mexico states with oil, petrochemical, and port economy',
    descriptionEs: 'Estados del Golfo de México con economía petrolera, petroquímica y portuaria',
    population: '12.4M',
    states: ['Veracruz', 'Tabasco', 'Campeche'],
    avgLoanAmount: '$35,000 - $130,000 MXN',
    avgRate: '21% - 48% CAT',
    minLoanAmount: '$5,000 MXN',
    maxLoanAmount: '$350,000 MXN',
    typicalTermMonths: '12-36 meses',
    topCities: ['Veracruz', 'Xalapa', 'Coatzacoalcos', 'Villahermosa', 'Campeche'],
    economicProfile: 'Petroleum and petrochemical industry, major ports, agriculture, and fishing. Energy sector workers often have stable employment.',
    regulatoryNotes: 'Strong presence of national banks due to oil industry. PEMEX employee credit programs available.'
  },
  {
    name: 'Yucatán Peninsula',
    nameEs: 'Península de Yucatán',
    slug: 'peninsula-yucatan',
    description: 'Southeastern peninsula with tourism, maquiladoras, and agriculture',
    descriptionEs: 'Península suroriental con turismo, maquiladoras y agricultura',
    population: '5.8M',
    states: ['Yucatán', 'Quintana Roo', 'Campeche'],
    avgLoanAmount: '$35,000 - $140,000 MXN',
    avgRate: '20% - 47% CAT',
    minLoanAmount: '$5,000 MXN',
    maxLoanAmount: '$350,000 MXN',
    typicalTermMonths: '12-36 meses',
    topCities: ['Mérida', 'Cancún', 'Playa del Carmen', 'Chetumal', 'Tulum'],
    economicProfile: 'Major tourist destination (Riviera Maya), growing manufacturing sector in Yucatán, agriculture. High seasonal employment in tourism.',
    regulatoryNotes: 'Mix of national and international banks due to tourism. Some lenders offer special programs for hospitality workers.'
  },
  {
    name: 'Bajío Region',
    nameEs: 'Región del Bajío',
    slug: 'bajio',
    description: 'Central-western region with automotive manufacturing and agriculture',
    descriptionEs: 'Región centro-occidental con manufactura automotriz y agricultura',
    population: '14.2M',
    states: ['Guanajuato', 'Querétaro', 'Aguascalientes', 'San Luis Potosí'],
    avgLoanAmount: '$40,000 - $150,000 MXN',
    avgRate: '19% - 46% CAT',
    minLoanAmount: '$5,000 MXN',
    maxLoanAmount: '$400,000 MXN',
    typicalTermMonths: '12-48 meses',
    topCities: ['León', 'Querétaro', 'Irapuato', 'Aguascalientes', 'San Luis Potosí'],
    economicProfile: 'Major automotive manufacturing hub, aerospace industry, leather goods, agriculture. Strong foreign investment and industrial growth.',
    regulatoryNotes: 'Growing banking competition. Many lenders offer special programs for automotive industry workers.'
  },
  {
    name: 'Central Mexico',
    nameEs: 'México Central',
    slug: 'mexico-central',
    description: 'Central states with diverse economy and manufacturing',
    descriptionEs: 'Estados centrales con economía diversa y manufactura',
    population: '13.6M',
    states: ['Puebla', 'Tlaxcala', 'Hidalgo', 'Morelos'],
    avgLoanAmount: '$35,000 - $130,000 MXN',
    avgRate: '21% - 49% CAT',
    minLoanAmount: '$5,000 MXN',
    maxLoanAmount: '$350,000 MXN',
    typicalTermMonths: '12-36 meses',
    topCities: ['Puebla', 'Pachuca', 'Cuernavaca', 'Tlaxcala', 'Cholula'],
    economicProfile: 'Automotive manufacturing (VW in Puebla), textiles, agriculture, tourism. Mix of industrial and traditional economy.',
    regulatoryNotes: 'Good banking coverage with mix of national and regional institutions. Credit unions active in rural areas.'
  },
  {
    name: 'Southern Mexico',
    nameEs: 'México Sur',
    slug: 'mexico-sur',
    description: 'Southern states with agriculture, tourism, and traditional economy',
    descriptionEs: 'Estados del sur con agricultura, turismo y economía tradicional',
    population: '10.2M',
    states: ['Chiapas', 'Oaxaca', 'Guerrero'],
    avgLoanAmount: '$25,000 - $100,000 MXN',
    avgRate: '24% - 55% CAT',
    minLoanAmount: '$3,000 MXN',
    maxLoanAmount: '$250,000 MXN',
    typicalTermMonths: '12-24 meses',
    topCities: ['Tuxtla Gutiérrez', 'Oaxaca', 'Acapulco', 'Tapachula', 'Chilpancingo'],
    economicProfile: 'Agriculture, coffee production, tourism, traditional crafts. Lower average incomes. Significant informal economy.',
    regulatoryNotes: 'Less banking penetration. Microfinance institutions and SOFOMs more active. Government support programs available.'
  }
]

// Helper functions
export function getRegionBySlug(slug: string): MexicoRegion | undefined {
  return mexicoRegions.find(r => r.slug === slug)
}

export function getRegionsByState(state: string): MexicoRegion | undefined {
  return mexicoRegions.find(r => r.states.includes(state))
}

export function getAllStates(): string[] {
  return mexicoRegions.flatMap(r => r.states).sort()
}
