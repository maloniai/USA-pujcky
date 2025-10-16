/**
 * Colombia Cities Data
 * Major Colombian cities with lending information
 */

export interface ColombiaCity {
  name: string
  nameEs?: string
  slug: string
  region: string
  regionSlug: string
  department: string
  population: string
  description: string
  descriptionEs: string
  avgIncome: string
  topIndustries: string[]
  lendingProfile: string
  minLoanAmount: string
  maxLoanAmount: string
  avgRate: string
  lenderCount?: number
  nearbyCities?: string[]
  topLoanTypesEs?: string[]
}

export const colombiaCities: ColombiaCity[] = [
  {
    name: 'Bogotá',
    nameEs: 'Bogotá',
    slug: 'bogota',
    region: 'Andean Region',
    regionSlug: 'andina',
    department: 'Cundinamarca (Distrito Capital)',
    population: '8M+',
    description: 'Capital and largest city of Colombia, financial and economic hub',
    descriptionEs: 'Capital y ciudad más grande de Colombia, centro financiero y económico',
    avgIncome: '$3.500.000 COP/month',
    topIndustries: ['Finance', 'Services', 'Technology', 'Government', 'Commerce'],
    lendingProfile: 'Highest concentration of banks and lenders. Most competitive rates. Wide range of loan products from traditional banks to fintech companies.',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$50.000.000 COP',
    avgRate: '18% - 32% EA',
    lenderCount: 45
  },
  {
    name: 'Medellín',
    nameEs: 'Medellín',
    slug: 'medellin',
    region: 'Andean Region',
    regionSlug: 'andina',
    department: 'Antioquia',
    population: '2.5M+',
    description: 'Second-largest city, innovation and textile hub',
    descriptionEs: 'Segunda ciudad más grande, centro de innovación y textiles',
    avgIncome: '$3.200.000 COP/month',
    topIndustries: ['Textiles', 'Technology', 'Manufacturing', 'Finance', 'Tourism'],
    lendingProfile: 'Strong banking presence and fintech innovation. Competitive personal loan market with multiple traditional and digital lenders.',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$45.000.000 COP',
    avgRate: '19% - 33% EA',
    lenderCount: 38
  },
  {
    name: 'Cali',
    nameEs: 'Cali',
    slug: 'cali',
    region: 'Pacific Region',
    regionSlug: 'pacifico',
    department: 'Valle del Cauca',
    population: '2.2M+',
    description: 'Third-largest city, sugarcane capital and salsa capital',
    descriptionEs: 'Tercera ciudad más grande, capital de la caña de azúcar y la salsa',
    avgIncome: '$2.800.000 COP/month',
    topIndustries: ['Agriculture', 'Manufacturing', 'Services', 'Commerce', 'Healthcare'],
    lendingProfile: 'Good availability of traditional banks and growing digital lender presence. Competitive rates in major commercial areas.',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$40.000.000 COP',
    avgRate: '20% - 34% EA',
    lenderCount: 32
  },
  {
    name: 'Barranquilla',
    nameEs: 'Barranquilla',
    slug: 'barranquilla',
    region: 'Caribbean Region',
    regionSlug: 'caribe',
    department: 'Atlántico',
    population: '1.2M+',
    description: 'Major Caribbean port city and industrial center',
    descriptionEs: 'Principal puerto caribeño y centro industrial',
    avgIncome: '$2.700.000 COP/month',
    topIndustries: ['Port Operations', 'Commerce', 'Manufacturing', 'Services', 'Tourism'],
    lendingProfile: 'Strong presence of major national banks. Growing fintech adoption. Competitive rates due to commercial activity.',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$35.000.000 COP',
    avgRate: '21% - 35% EA',
    lenderCount: 28
  },
  {
    name: 'Cartagena',
    nameEs: 'Cartagena',
    slug: 'cartagena',
    region: 'Caribbean Region',
    regionSlug: 'caribe',
    department: 'Bolívar',
    population: '1M+',
    description: 'Historic port city and major tourism destination',
    descriptionEs: 'Ciudad portuaria histórica y destino turístico principal',
    avgIncome: '$2.600.000 COP/month',
    topIndustries: ['Tourism', 'Port Operations', 'Petrochemicals', 'Commerce', 'Services'],
    lendingProfile: 'Mix of traditional banks and specialized tourism/business lenders. Seasonal loan demand patterns.',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$35.000.000 COP',
    avgRate: '21% - 36% EA',
    lenderCount: 25
  },
  {
    name: 'Bucaramanga',
    nameEs: 'Bucaramanga',
    slug: 'bucaramanga',
    region: 'Andean Region',
    regionSlug: 'andina',
    department: 'Santander',
    population: '580K+',
    description: 'Beautiful city known for parks and footwear industry',
    descriptionEs: 'Ciudad hermosa conocida por parques e industria del calzado',
    avgIncome: '$2.500.000 COP/month',
    topIndustries: ['Footwear', 'Manufacturing', 'Commerce', 'Services', 'Education'],
    lendingProfile: 'Good selection of regional and national banks. Moderate competition, reasonable rates.',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$30.000.000 COP',
    avgRate: '22% - 36% EA',
    lenderCount: 22
  },
  {
    name: 'Villavicencio',
    nameEs: 'Villavicencio',
    slug: 'villavicencio',
    region: 'Orinoquía Region',
    regionSlug: 'orinoquia',
    department: 'Meta',
    population: '530K+',
    description: 'Gateway to the eastern plains, oil industry hub',
    descriptionEs: 'Puerta de entrada a los llanos orientales, centro petrolero',
    avgIncome: '$2.400.000 COP/month',
    topIndustries: ['Oil & Gas', 'Agriculture', 'Commerce', 'Livestock', 'Services'],
    lendingProfile: 'Growing banking sector serving oil workers and farmers. Mix of traditional and digital lenders.',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$25.000.000 COP',
    avgRate: '23% - 38% EA',
    lenderCount: 18
  },
  {
    name: 'Santa Marta',
    nameEs: 'Santa Marta',
    slug: 'santa-marta',
    region: 'Caribbean Region',
    regionSlug: 'caribe',
    department: 'Magdalena',
    population: '500K+',
    description: 'Oldest surviving city in Colombia, beach tourism destination',
    descriptionEs: 'Ciudad más antigua de Colombia, destino turístico de playa',
    avgIncome: '$2.300.000 COP/month',
    topIndustries: ['Tourism', 'Port Operations', 'Agriculture', 'Commerce', 'Services'],
    lendingProfile: 'Moderate bank presence focused on tourism and commerce sectors. Seasonal lending patterns.',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$25.000.000 COP',
    avgRate: '22% - 37% EA',
    lenderCount: 16
  }
]

// Helper function to get city by slug
export function getColombiaCityBySlug(regionSlug: string, citySlug: string): ColombiaCity | undefined {
  return colombiaCities.find(city => city.regionSlug === regionSlug && city.slug === citySlug)
}

// Helper function to get cities by region
export function getColombiaCitiesByRegion(regionSlug: string): ColombiaCity[] {
  return colombiaCities.filter(city => city.regionSlug === regionSlug)
}

// Helper function to get all city slugs for a region
export function getColumbiaCityParams() {
  return colombiaCities.map(city => ({
    region: city.regionSlug,
    city: city.slug
  }))
}
