export interface ColombiaRegion {
  code: string
  name: string
  capital: string
  cityCount: number
  population: number
  averageAPR: string
  growthFocus: string
  featuredCities: string[]
}

export const colombiaRegions: ColombiaRegion[] = [
  {
    code: 'bogota',
    name: 'Bogotá D.C.',
    capital: 'Bogotá',
    cityCount: 20,
    population: 7412000,
    averageAPR: '28,5%',
    growthFocus: 'Préstamos de consolidación de deudas y microcréditos para emprendedores urbanos.',
    featuredCities: ['Bogotá Centro', 'Chapinero', 'Usaquén'],
  },
  {
    code: 'antioquia',
    name: 'Antioquia',
    capital: 'Medellín',
    cityCount: 15,
    population: 6613000,
    averageAPR: '26,8%',
    growthFocus: 'Financiamiento para pequeñas empresas textiles y tecnológicas, préstamos de vivienda.',
    featuredCities: ['Medellín', 'Bello', 'Itagüí'],
  },
  {
    code: 'valle',
    name: 'Valle del Cauca',
    capital: 'Cali',
    cityCount: 12,
    population: 4475000,
    averageAPR: '27,2%',
    growthFocus: 'Préstamos agrícolas, microcréditos para comercio y refinanciamiento de deudas.',
    featuredCities: ['Cali', 'Palmira', 'Buenaventura'],
  },
  {
    code: 'atlantico',
    name: 'Atlántico',
    capital: 'Barranquilla',
    cityCount: 10,
    population: 2535000,
    averageAPR: '29,1%',
    growthFocus: 'Préstamos para comercio portuario, turismo y servicios logísticos.',
    featuredCities: ['Barranquilla', 'Soledad', 'Malambo'],
  },
  {
    code: 'santander',
    name: 'Santander',
    capital: 'Bucaramanga',
    cityCount: 8,
    population: 2184000,
    averageAPR: '27,9%',
    growthFocus: 'Financiamiento para agricultura, manufactura y desarrollo de infraestructura.',
    featuredCities: ['Bucaramanga', 'Floridablanca', 'Girón'],
  },
]

export const totalColombiaCities = colombiaRegions.reduce((sum, region) => sum + region.cityCount, 0)
