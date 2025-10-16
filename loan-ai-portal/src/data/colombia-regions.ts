/**
 * Colombia Regions Data
 * Colombian regions organized by geographic areas
 */

export interface ColombiaRegion {
  name: string
  nameEs: string
  slug: string
  description: string
  descriptionEs: string
  population: string
  departments: string[]
  avgLoanAmount: string
  avgRate: string
  minLoanAmount: string
  maxLoanAmount: string
  typicalTermMonths: string
  topCities: string[]
  economicProfile: string
  regulatoryNotes: string
  topLoanTypesEs?: string[]
  regulationsEs?: string[]
}

export const colombiaRegions: ColombiaRegion[] = [
  {
    name: 'Andean Region',
    nameEs: 'Región Andina',
    slug: 'andina',
    description: 'Central highlands - economic and political heart of Colombia',
    descriptionEs: 'Región central andina - corazón económico y político de Colombia',
    population: '30M+',
    departments: ['Cundinamarca', 'Antioquia', 'Santander', 'Boyacá', 'Caldas', 'Risaralda', 'Quindío', 'Tolima', 'Huila', 'Norte de Santander'],
    avgLoanAmount: '$5.000.000 - $20.000.000 COP',
    avgRate: '20% - 35% EA',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$50.000.000 COP',
    typicalTermMonths: '12-60 meses',
    topCities: ['Bogotá', 'Medellín', 'Bucaramanga', 'Cúcuta', 'Pereira', 'Manizales', 'Armenia', 'Ibagué', 'Neiva'],
    economicProfile: 'Highest concentration of financial services, technology companies, and corporate headquarters. Strong manufacturing, coffee production, and service sectors.',
    regulatoryNotes: 'Highest competition among lenders. Superintendencia Financiera oversight. Strong consumer protection enforcement.'
  },
  {
    name: 'Caribbean Region',
    nameEs: 'Región Caribe',
    slug: 'caribe',
    description: 'Northern coastal region with ports and tourism',
    descriptionEs: 'Región costera del norte con puertos y turismo',
    population: '11M+',
    departments: ['Atlántico', 'Bolívar', 'Magdalena', 'Cesar', 'La Guajira', 'Córdoba', 'Sucre', 'San Andrés'],
    avgLoanAmount: '$3.000.000 - $15.000.000 COP',
    avgRate: '22% - 38% EA',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$40.000.000 COP',
    typicalTermMonths: '12-48 meses',
    topCities: ['Barranquilla', 'Cartagena', 'Santa Marta', 'Valledupar', 'Montería', 'Sincelejo', 'Riohacha'],
    economicProfile: 'Port activities, tourism, commerce, and agricultural production. Growing industrial sector in major cities.',
    regulatoryNotes: 'Regulated by Superintendencia Financiera. Growing fintech presence in major cities.'
  },
  {
    name: 'Pacific Region',
    nameEs: 'Región Pacífico',
    slug: 'pacifico',
    description: 'Western coastal region with major port of Buenaventura',
    descriptionEs: 'Región costera del oeste con el puerto principal de Buenaventura',
    population: '10M+',
    departments: ['Valle del Cauca', 'Cauca', 'Nariño', 'Chocó'],
    avgLoanAmount: '$3.000.000 - $18.000.000 COP',
    avgRate: '21% - 36% EA',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$45.000.000 COP',
    typicalTermMonths: '12-60 meses',
    topCities: ['Cali', 'Buenaventura', 'Pasto', 'Popayán', 'Tumaco', 'Quibdó'],
    economicProfile: 'Major port operations, sugarcane production, commerce, and manufacturing. Cali is third-largest city with strong service sector.',
    regulatoryNotes: 'Standard Superintendencia Financiera regulations apply. Mix of traditional banks and emerging digital lenders.'
  },
  {
    name: 'Orinoquía Region',
    nameEs: 'Región Orinoquía',
    slug: 'orinoquia',
    description: 'Eastern plains with agriculture and oil production',
    descriptionEs: 'Llanos orientales con agricultura y producción petrolera',
    population: '1.5M+',
    departments: ['Meta', 'Arauca', 'Casanare', 'Vichada'],
    avgLoanAmount: '$2.000.000 - $12.000.000 COP',
    avgRate: '23% - 40% EA',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$30.000.000 COP',
    typicalTermMonths: '12-36 meses',
    topCities: ['Villavicencio', 'Yopal', 'Arauca', 'Puerto Carreño'],
    economicProfile: 'Oil and gas production, cattle ranching, agriculture. Growing commercial sector in regional capitals.',
    regulatoryNotes: 'Same national regulations apply. Limited physical bank presence, growing digital lending options.'
  },
  {
    name: 'Amazon Region',
    nameEs: 'Región Amazonía',
    slug: 'amazonia',
    description: 'Southern rainforest region',
    descriptionEs: 'Región de selva tropical al sur',
    population: '1M+',
    departments: ['Amazonas', 'Caquetá', 'Putumayo', 'Guainía', 'Guaviare', 'Vaupés'],
    avgLoanAmount: '$1.500.000 - $10.000.000 COP',
    avgRate: '24% - 42% EA',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$25.000.000 COP',
    typicalTermMonths: '12-36 meses',
    topCities: ['Florencia', 'Mocoa', 'Leticia', 'San José del Guaviare'],
    economicProfile: 'Agriculture, forestry, ecotourism. Limited commercial development, subsistence farming predominant.',
    regulatoryNotes: 'National financial regulations apply. Limited banking infrastructure, increasing mobile/digital banking adoption.'
  }
]

// Helper function to get region by slug
export function getColombiaRegionBySlug(slug: string): ColombiaRegion | undefined {
  return colombiaRegions.find(region => region.slug === slug)
}

// Helper function to get all region slugs
export function getColombiaRegionSlugs(): string[] {
  return colombiaRegions.map(region => region.slug)
}

// Alias for compatibility
export function getAllColombiaRegionSlugs(): string[] {
  return getColombiaRegionSlugs()
}
