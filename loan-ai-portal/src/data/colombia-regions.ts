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
  {
    code: 'bolivar',
    name: 'Bolívar',
    capital: 'Cartagena',
    cityCount: 10,
    population: 2171000,
    averageAPR: '28,7%',
    growthFocus: 'Préstamos para turismo, comercio marítimo y desarrollo de infraestructura hotelera.',
    featuredCities: ['Cartagena', 'Magangué', 'Turbaco'],
  },
  {
    code: 'cundinamarca',
    name: 'Cundinamarca',
    capital: 'Bogotá',
    cityCount: 12,
    population: 3242000,
    averageAPR: '27,5%',
    growthFocus: 'Financiamiento agroindustrial, comercio regional y préstamos para pequeñas empresas.',
    featuredCities: ['Soacha', 'Facatativá', 'Zipaquirá'],
  },
  {
    code: 'norte-santander',
    name: 'Norte de Santander',
    capital: 'Cúcuta',
    cityCount: 8,
    population: 1431000,
    averageAPR: '28,3%',
    growthFocus: 'Préstamos para comercio fronterizo, agricultura y desarrollo empresarial.',
    featuredCities: ['Cúcuta', 'Ocaña', 'Pamplona'],
  },
  {
    code: 'cauca',
    name: 'Cauca',
    capital: 'Popayán',
    cityCount: 6,
    population: 1404000,
    averageAPR: '29,5%',
    growthFocus: 'Financiamiento para agricultura, turismo cultural y microempresas locales.',
    featuredCities: ['Popayán', 'Santander de Quilichao', 'Puerto Tejada'],
  },
  {
    code: 'cordoba',
    name: 'Córdoba',
    capital: 'Montería',
    cityCount: 7,
    population: 1784000,
    averageAPR: '29,8%',
    growthFocus: 'Préstamos para ganadería, agricultura y comercio regional.',
    featuredCities: ['Montería', 'Cereté', 'Lorica'],
  },
  {
    code: 'tolima',
    name: 'Tolima',
    capital: 'Ibagué',
    cityCount: 8,
    population: 1408000,
    averageAPR: '28,2%',
    growthFocus: 'Financiamiento para agricultura, comercio y desarrollo de infraestructura turística.',
    featuredCities: ['Ibagué', 'Espinal', 'Melgar'],
  },
  {
    code: 'meta',
    name: 'Meta',
    capital: 'Villavicencio',
    cityCount: 6,
    population: 1037000,
    averageAPR: '27,8%',
    growthFocus: 'Préstamos para agricultura, ganadería y comercio de los Llanos Orientales.',
    featuredCities: ['Villavicencio', 'Acacías', 'Granada'],
  },
]

export const totalColombiaCities = colombiaRegions.reduce((sum, region) => sum + region.cityCount, 0)
