export interface ColombiaCity {
  name: string
  slug: string
  region: string
  regionName: string
  population: number
  description: string
  loanTypes: string[]
  nearbyCities: string[]
}

export const colombiaCities: ColombiaCity[] = [
  // Bogotá D.C.
  {
    name: 'Bogotá',
    slug: 'bogota',
    region: 'bogota',
    regionName: 'Bogotá D.C.',
    population: 7412000,
    description: 'Capital y centro financiero de Colombia con amplia oferta de préstamos personales y comerciales.',
    loanTypes: ['Préstamos personales', 'Consolidación de deudas', 'Microcréditos', 'Préstamos de vivienda'],
    nearbyCities: ['Soacha', 'Chía', 'Zipaquirá'],
  },
  {
    name: 'Chapinero',
    slug: 'chapinero',
    region: 'bogota',
    regionName: 'Bogotá D.C.',
    population: 140000,
    description: 'Zona comercial y residencial con alta concentración de instituciones financieras.',
    loanTypes: ['Préstamos personales', 'Créditos de consumo', 'Préstamos para emprendedores'],
    nearbyCities: ['Bogotá Centro', 'Usaquén', 'Teusaquillo'],
  },
  {
    name: 'Usaquén',
    slug: 'usaquen',
    region: 'bogota',
    regionName: 'Bogotá D.C.',
    population: 480000,
    description: 'Localidad con alta demanda de préstamos para vivienda y emprendimientos.',
    loanTypes: ['Préstamos hipotecarios', 'Préstamos personales', 'Créditos comerciales'],
    nearbyCities: ['Chapinero', 'Bogotá Centro', 'Chía'],
  },
  
  // Antioquia
  {
    name: 'Medellín',
    slug: 'medellin',
    region: 'antioquia',
    regionName: 'Antioquia',
    population: 2569000,
    description: 'Segunda ciudad más grande de Colombia, centro de innovación y desarrollo empresarial.',
    loanTypes: ['Préstamos empresariales', 'Consolidación de deudas', 'Créditos tecnológicos', 'Préstamos personales'],
    nearbyCities: ['Bello', 'Itagüí', 'Envigado'],
  },
  {
    name: 'Bello',
    slug: 'bello',
    region: 'antioquia',
    regionName: 'Antioquia',
    population: 493000,
    description: 'Ciudad industrial con creciente demanda de préstamos para manufactura y comercio.',
    loanTypes: ['Préstamos comerciales', 'Microcréditos', 'Préstamos personales'],
    nearbyCities: ['Medellín', 'Copacabana', 'Girardota'],
  },
  {
    name: 'Itagüí',
    slug: 'itagui',
    region: 'antioquia',
    regionName: 'Antioquia',
    population: 281000,
    description: 'Centro manufacturero con alta demanda de financiamiento industrial.',
    loanTypes: ['Préstamos industriales', 'Créditos de maquinaria', 'Préstamos personales'],
    nearbyCities: ['Medellín', 'Envigado', 'La Estrella'],
  },
  
  // Valle del Cauca
  {
    name: 'Cali',
    slug: 'cali',
    region: 'valle',
    regionName: 'Valle del Cauca',
    population: 2228000,
    description: 'Tercera ciudad más grande de Colombia, con economía diversificada y sector servicios desarrollado.',
    loanTypes: ['Préstamos personales', 'Créditos comerciales', 'Consolidación de deudas', 'Préstamos agrícolas'],
    nearbyCities: ['Palmira', 'Yumbo', 'Jamundí'],
  },
  {
    name: 'Palmira',
    slug: 'palmira',
    region: 'valle',
    regionName: 'Valle del Cauca',
    population: 313000,
    description: 'Ciudad agroindustrial con fuerte demanda de préstamos para agricultura y comercio.',
    loanTypes: ['Préstamos agrícolas', 'Créditos comerciales', 'Microcréditos'],
    nearbyCities: ['Cali', 'Candelaria', 'Pradera'],
  },
  {
    name: 'Buenaventura',
    slug: 'buenaventura',
    region: 'valle',
    regionName: 'Valle del Cauca',
    population: 423000,
    description: 'Principal puerto del Pacífico colombiano con préstamos especializados en logística y comercio exterior.',
    loanTypes: ['Préstamos para comercio exterior', 'Créditos logísticos', 'Préstamos personales'],
    nearbyCities: ['Cali', 'Dagua', 'Jamundí'],
  },
  
  // Atlántico
  {
    name: 'Barranquilla',
    slug: 'barranquilla',
    region: 'atlantico',
    regionName: 'Atlántico',
    population: 1232000,
    description: 'Puerto del Caribe con economía basada en comercio, turismo y servicios.',
    loanTypes: ['Préstamos comerciales', 'Créditos turísticos', 'Consolidación de deudas', 'Préstamos personales'],
    nearbyCities: ['Soledad', 'Malambo', 'Puerto Colombia'],
  },
  {
    name: 'Soledad',
    slug: 'soledad',
    region: 'atlantico',
    regionName: 'Atlántico',
    population: 655000,
    description: 'Ciudad conurbada con Barranquilla, alta demanda de microcréditos y préstamos de vivienda.',
    loanTypes: ['Microcréditos', 'Préstamos de vivienda', 'Préstamos personales'],
    nearbyCities: ['Barranquilla', 'Malambo', 'Galapa'],
  },
  {
    name: 'Malambo',
    slug: 'malambo',
    region: 'atlantico',
    regionName: 'Atlántico',
    population: 124000,
    description: 'Zona industrial con demanda de préstamos para pequeñas empresas y trabajadores.',
    loanTypes: ['Préstamos para PyMEs', 'Créditos de consumo', 'Microcréditos'],
    nearbyCities: ['Soledad', 'Barranquilla', 'Sabanagrande'],
  },
  
  // Santander
  {
    name: 'Bucaramanga',
    slug: 'bucaramanga',
    region: 'santander',
    regionName: 'Santander',
    population: 581000,
    description: 'Ciudad de servicios y comercio con fuerte sector educativo y financiero.',
    loanTypes: ['Préstamos personales', 'Créditos educativos', 'Consolidación de deudas', 'Préstamos comerciales'],
    nearbyCities: ['Floridablanca', 'Girón', 'Piedecuesta'],
  },
  {
    name: 'Floridablanca',
    slug: 'floridablanca',
    region: 'santander',
    regionName: 'Santander',
    population: 270000,
    description: 'Ciudad del área metropolitana con demanda de préstamos de vivienda y consumo.',
    loanTypes: ['Préstamos hipotecarios', 'Créditos de consumo', 'Préstamos personales'],
    nearbyCities: ['Bucaramanga', 'Girón', 'Piedecuesta'],
  },
  {
    name: 'Girón',
    slug: 'giron',
    region: 'santander',
    regionName: 'Santander',
    population: 181000,
    description: 'Ciudad histórica con creciente demanda de préstamos para turismo y comercio.',
    loanTypes: ['Préstamos turísticos', 'Créditos comerciales', 'Préstamos personales'],
    nearbyCities: ['Bucaramanga', 'Floridablanca', 'Lebrija'],
  },
]

export function getColombiaCityBySlug(slug: string): ColombiaCity | undefined {
  return colombiaCities.find((city) => city.slug === slug)
}

export function getColombiaCitiesByRegion(region: string): ColombiaCity[] {
  return colombiaCities.filter((city) => city.region === region)
}

export function getAllColombiaCitySlugs(): { region: string; city: string }[] {
  return colombiaCities.map((city) => ({
    region: city.region,
    city: city.slug,
  }))
}
