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
    name: 'Madrid',
    slug: 'madrid',
    nameEs: 'Comunidad de Madrid',
    population: '6.7M',
    avgLoanAmount: '€15,000',
    avgRate: '7.5%',
    maxLoanAmount: '€75,000',
    description: 'The capital region with the highest loan availability and competitive rates.',
    descriptionEs: 'La región capital con la mayor disponibilidad de préstamos y tasas competitivas.',
    regulations: [
      'Supervised by Banco de España',
      'Maximum APR: 27% TAE for personal loans',
      '14-day withdrawal period mandatory',
      'Licensed lender requirement',
      'Credit bureau check through CIRBE',
      'Consumer protection under Ley 16/2011',
      'EU Consumer Credit Directive compliance'
    ],
    regulationsEs: [
      'Supervisado por el Banco de España',
      'TAE máximo: 27% para préstamos personales',
      'Periodo de desistimiento obligatorio: 14 días',
      'Licencia de prestamista obligatoria',
      'Verificación de crédito a través de CIRBE',
      'Protección del consumidor bajo Ley 16/2011',
      'Cumplimiento de Directiva EU de Crédito al Consumo'
    ],
    majorCities: ['Madrid', 'Móstoles', 'Alcalá de Henares', 'Fuenlabrada', 'Leganés'],
    topLoanTypes: ['Debt consolidation', 'Home renovation', 'Education', 'Medical expenses'],
    topLoanTypesEs: ['Consolidación de deudas', 'Renovación del hogar', 'Educación', 'Gastos médicos']
  },
  {
    name: 'Catalonia',
    slug: 'catalonia',
    nameEs: 'Cataluña',
    population: '7.7M',
    avgLoanAmount: '€14,500',
    avgRate: '7.8%',
    maxLoanAmount: '€70,000',
    description: 'Major economic hub with diverse lending options and competitive rates.',
    descriptionEs: 'Principal centro económico con diversas opciones de préstamo y tasas competitivas.',
    regulations: [
      'Supervised by Banco de España',
      'Maximum APR: 27% TAE for personal loans',
      '14-day withdrawal period mandatory',
      'Licensed lender requirement',
      'Credit bureau check through CIRBE',
      'Consumer protection under Ley 16/2011',
      'Additional regional consumer protection laws'
    ],
    regulationsEs: [
      'Supervisado por el Banco de España',
      'TAE máximo: 27% para préstamos personales',
      'Periodo de desistimiento obligatorio: 14 días',
      'Licencia de prestamista obligatoria',
      'Verificación de crédito a través de CIRBE',
      'Protección del consumidor bajo Ley 16/2011',
      'Leyes regionales adicionales de protección al consumidor'
    ],
    majorCities: ['Barcelona', 'Hospitalet de Llobregat', 'Terrassa', 'Sabadell', 'Badalona'],
    topLoanTypes: ['Business expansion', 'Debt consolidation', 'Home renovation', 'Car purchase'],
    topLoanTypesEs: ['Expansión de negocios', 'Consolidación de deudas', 'Renovación del hogar', 'Compra de automóvil']
  },
  {
    name: 'Andalusia',
    slug: 'andalusia',
    nameEs: 'Andalucía',
    population: '8.5M',
    avgLoanAmount: '€12,000',
    avgRate: '8.2%',
    maxLoanAmount: '€60,000',
    description: 'Spain\'s most populous region with growing financial services sector.',
    descriptionEs: 'La región más poblada de España con un sector de servicios financieros en crecimiento.',
    regulations: [
      'Supervised by Banco de España',
      'Maximum APR: 27% TAE for personal loans',
      '14-day withdrawal period mandatory',
      'Licensed lender requirement',
      'Credit bureau check through CIRBE',
      'Consumer protection under Ley 16/2011',
      'Regional financial inclusion programs'
    ],
    regulationsEs: [
      'Supervisado por el Banco de España',
      'TAE máximo: 27% para préstamos personales',
      'Periodo de desistimiento obligatorio: 14 días',
      'Licencia de prestamista obligatoria',
      'Verificación de crédito a través de CIRBE',
      'Protección del consumidor bajo Ley 16/2011',
      'Programas regionales de inclusión financiera'
    ],
    majorCities: ['Sevilla', 'Málaga', 'Córdoba', 'Granada', 'Jerez de la Frontera'],
    topLoanTypes: ['Home renovation', 'Tourism business', 'Debt consolidation', 'Education'],
    topLoanTypesEs: ['Renovación del hogar', 'Negocio turístico', 'Consolidación de deudas', 'Educación']
  },
  {
    name: 'Valencia',
    slug: 'valencia',
    nameEs: 'Comunidad Valenciana',
    population: '5.0M',
    avgLoanAmount: '€13,000',
    avgRate: '7.9%',
    maxLoanAmount: '€65,000',
    description: 'Mediterranean region with strong economy and diverse lending market.',
    descriptionEs: 'Región mediterránea con economía sólida y mercado de préstamos diverso.',
    regulations: [
      'Supervised by Banco de España',
      'Maximum APR: 27% TAE for personal loans',
      '14-day withdrawal period mandatory',
      'Licensed lender requirement',
      'Credit bureau check through CIRBE',
      'Consumer protection under Ley 16/2011',
      'Regional business support programs'
    ],
    regulationsEs: [
      'Supervisado por el Banco de España',
      'TAE máximo: 27% para préstamos personales',
      'Periodo de desistimiento obligatorio: 14 días',
      'Licencia de prestamista obligatoria',
      'Verificación de crédito a través de CIRBE',
      'Protección del consumidor bajo Ley 16/2011',
      'Programas regionales de apoyo empresarial'
    ],
    majorCities: ['Valencia', 'Alicante', 'Elche', 'Castellón de la Plana', 'Torrevieja'],
    topLoanTypes: ['Business expansion', 'Home purchase support', 'Debt consolidation', 'Car purchase'],
    topLoanTypesEs: ['Expansión de negocios', 'Apoyo a compra de vivienda', 'Consolidación de deudas', 'Compra de automóvil']
  },
  {
    name: 'Basque Country',
    slug: 'basque-country',
    nameEs: 'País Vasco',
    population: '2.2M',
    avgLoanAmount: '€16,000',
    avgRate: '7.3%',
    maxLoanAmount: '€80,000',
    description: 'High-income region with excellent credit access and competitive rates.',
    descriptionEs: 'Región de altos ingresos con excelente acceso al crédito y tasas competitivas.',
    regulations: [
      'Supervised by Banco de España',
      'Maximum APR: 27% TAE for personal loans',
      '14-day withdrawal period mandatory',
      'Licensed lender requirement',
      'Credit bureau check through CIRBE',
      'Consumer protection under Ley 16/2011',
      'Strong regional financial institutions'
    ],
    regulationsEs: [
      'Supervisado por el Banco de España',
      'TAE máximo: 27% para préstamos personales',
      'Periodo de desistimiento obligatorio: 14 días',
      'Licencia de prestamista obligatoria',
      'Verificación de crédito a través de CIRBE',
      'Protección del consumidor bajo Ley 16/2011',
      'Instituciones financieras regionales sólidas'
    ],
    majorCities: ['Bilbao', 'Vitoria-Gasteiz', 'San Sebastián', 'Barakaldo', 'Getxo'],
    topLoanTypes: ['Business expansion', 'Innovation projects', 'Home renovation', 'Education'],
    topLoanTypesEs: ['Expansión de negocios', 'Proyectos de innovación', 'Renovación del hogar', 'Educación']
  },
  {
    name: 'Galicia',
    slug: 'galicia',
    nameEs: 'Galicia',
    population: '2.7M',
    avgLoanAmount: '€11,500',
    avgRate: '8.4%',
    maxLoanAmount: '€55,000',
    description: 'Northwestern region with growing financial services sector.',
    descriptionEs: 'Región del noroeste con un sector de servicios financieros en crecimiento.',
    regulations: [
      'Supervised by Banco de España',
      'Maximum APR: 27% TAE for personal loans',
      '14-day withdrawal period mandatory',
      'Licensed lender requirement',
      'Credit bureau check through CIRBE',
      'Consumer protection under Ley 16/2011',
      'Regional development support programs'
    ],
    regulationsEs: [
      'Supervisado por el Banco de España',
      'TAE máximo: 27% para préstamos personales',
      'Periodo de desistimiento obligatorio: 14 días',
      'Licencia de prestamista obligatoria',
      'Verificación de crédito a través de CIRBE',
      'Protección del consumidor bajo Ley 16/2011',
      'Programas regionales de apoyo al desarrollo'
    ],
    majorCities: ['Vigo', 'A Coruña', 'Ourense', 'Lugo', 'Santiago de Compostela'],
    topLoanTypes: ['Agriculture support', 'Business expansion', 'Home renovation', 'Education'],
    topLoanTypesEs: ['Apoyo agrícola', 'Expansión de negocios', 'Renovación del hogar', 'Educación']
  }
]

export function getAllRegionSlugs(): string[] {
  return spainRegions.map(region => region.slug)
}

export function getRegionBySlug(slug: string): SpainRegionInfo | undefined {
  return spainRegions.find(region => region.slug === slug)
}

export function getRegionByName(name: string): SpainRegionInfo | undefined {
  return spainRegions.find(region => region.name === name || region.nameEs === name)
}
