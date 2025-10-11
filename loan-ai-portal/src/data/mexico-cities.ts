// Mexico cities data for loan comparisons
// Following CONDUSEF regulations and Mexican financial guidelines

export interface MexicoCity {
  name: string
  slug: string
  state: string
  stateSlug: string
  stateCode: string
  population: string
  medianIncome: string
  medianHomePrice: string
  averageLoanAmount: string
  avgCreditScore: string
  nearbyLenders: number
  popularLoanTypes: string[]
  keyIndustries: string[]
  localEconomy: string
  coordinates: {
    lat: number
    lng: number
  }
}

export const mexicoCities: MexicoCity[] = [
  // Ciudad de México
  {
    name: 'Ciudad de México',
    slug: 'ciudad-de-mexico',
    state: 'Ciudad de México',
    stateSlug: 'ciudad-de-mexico',
    stateCode: 'CDMX',
    population: '9.2M',
    medianIncome: '$15,000 MXN',
    medianHomePrice: '$3.5M MXN',
    averageLoanAmount: '$75,000 MXN',
    avgCreditScore: '650',
    nearbyLenders: 250,
    popularLoanTypes: ['Préstamos personales', 'Consolidación de deudas', 'Mejoras del hogar'],
    keyIndustries: ['Servicios financieros', 'Gobierno', 'Comercio', 'Tecnología', 'Turismo'],
    localEconomy: 'Ciudad de México es el principal centro económico y financiero de México, concentrando la sede de las principales instituciones bancarias y financieras del país. El alto costo de vida y la diversidad económica impulsan una fuerte demanda de créditos personales para consolidación de deudas, emergencias médicas y mejoras al hogar.',
    coordinates: { lat: 19.4326, lng: -99.1332 }
  },
  {
    name: 'Iztapalapa',
    slug: 'iztapalapa',
    state: 'Ciudad de México',
    stateSlug: 'ciudad-de-mexico',
    stateCode: 'CDMX',
    population: '1.8M',
    medianIncome: '$11,000 MXN',
    medianHomePrice: '$2.2M MXN',
    averageLoanAmount: '$45,000 MXN',
    avgCreditScore: '610',
    nearbyLenders: 180,
    popularLoanTypes: ['Préstamos de emergencia', 'Consolidación de deudas', 'Educación'],
    keyIndustries: ['Comercio', 'Manufactura', 'Servicios', 'Construcción'],
    localEconomy: 'Iztapalapa es la alcaldía más poblada de México con una economía diversificada. Los residentes buscan principalmente préstamos para emergencias, consolidación de tarjetas de crédito y financiamiento educativo para mejorar oportunidades laborales.',
    coordinates: { lat: 19.3570, lng: -99.0558 }
  },
  // Estado de México
  {
    name: 'Ecatepec',
    slug: 'ecatepec',
    state: 'Estado de México',
    stateSlug: 'estado-de-mexico',
    stateCode: 'MEX',
    population: '1.6M',
    medianIncome: '$10,500 MXN',
    medianHomePrice: '$1.8M MXN',
    averageLoanAmount: '$40,000 MXN',
    avgCreditScore: '595',
    nearbyLenders: 150,
    popularLoanTypes: ['Préstamos rápidos', 'Consolidación de deudas', 'Gastos médicos'],
    keyIndustries: ['Manufactura', 'Comercio', 'Servicios', 'Transporte'],
    localEconomy: 'Ecatepec es uno de los municipios más poblados del país con una economía enfocada en manufactura y comercio. La demanda de préstamos personales se concentra en emergencias médicas, consolidación de deudas y mejoras al hogar para familias de clase trabajadora.',
    coordinates: { lat: 19.6014, lng: -99.0506 }
  },
  {
    name: 'Nezahualcóyotl',
    slug: 'nezahualcoyotl',
    state: 'Estado de México',
    stateSlug: 'estado-de-mexico',
    stateCode: 'MEX',
    population: '1.1M',
    medianIncome: '$10,000 MXN',
    medianHomePrice: '$1.5M MXN',
    averageLoanAmount: '$35,000 MXN',
    avgCreditScore: '585',
    nearbyLenders: 140,
    popularLoanTypes: ['Préstamos de emergencia', 'Consolidación', 'Negocio pequeño'],
    keyIndustries: ['Comercio', 'Servicios', 'Manufactura pequeña', 'Construcción'],
    localEconomy: 'Nezahualcóyotl tiene una economía basada en pequeños negocios y comercio local. Los préstamos personales son utilizados principalmente para capital de trabajo en microempresas, emergencias familiares y consolidación de adeudos de tarjetas de crédito.',
    coordinates: { lat: 19.4004, lng: -99.0146 }
  },
  {
    name: 'Toluca',
    slug: 'toluca',
    state: 'Estado de México',
    stateSlug: 'estado-de-mexico',
    stateCode: 'MEX',
    population: '910K',
    medianIncome: '$12,500 MXN',
    medianHomePrice: '$2.1M MXN',
    averageLoanAmount: '$50,000 MXN',
    avgCreditScore: '620',
    nearbyLenders: 170,
    popularLoanTypes: ['Préstamos personales', 'Auto', 'Mejoras del hogar'],
    keyIndustries: ['Manufactura automotriz', 'Gobierno', 'Educación', 'Comercio'],
    localEconomy: 'Toluca es capital del Estado de México y centro industrial importante. La presencia de manufacturas automotrices y el sector gubernamental genera demanda de préstamos para vehículos, educación superior y mejoras residenciales.',
    coordinates: { lat: 19.2827, lng: -99.6557 }
  },
  // Jalisco
  {
    name: 'Guadalajara',
    slug: 'guadalajara',
    state: 'Jalisco',
    stateSlug: 'jalisco',
    stateCode: 'JAL',
    population: '1.5M',
    medianIncome: '$13,000 MXN',
    medianHomePrice: '$2.8M MXN',
    averageLoanAmount: '$65,000 MXN',
    avgCreditScore: '640',
    nearbyLenders: 220,
    popularLoanTypes: ['Préstamos personales', 'Consolidación de deudas', 'Negocio'],
    keyIndustries: ['Tecnología', 'Manufactura electrónica', 'Servicios financieros', 'Turismo'],
    localEconomy: 'Guadalajara es el segundo centro financiero y tecnológico de México. La economía diversificada y el creciente sector tech impulsan la demanda de préstamos para emprendimiento, consolidación de deudas y mejoras al hogar en una clase media en crecimiento.',
    coordinates: { lat: 20.6597, lng: -103.3496 }
  },
  {
    name: 'Zapopan',
    slug: 'zapopan',
    state: 'Jalisco',
    stateSlug: 'jalisco',
    stateCode: 'JAL',
    population: '1.4M',
    medianIncome: '$14,500 MXN',
    medianHomePrice: '$3.2M MXN',
    averageLoanAmount: '$70,000 MXN',
    avgCreditScore: '655',
    nearbyLenders: 200,
    popularLoanTypes: ['Préstamos personales', 'Mejoras del hogar', 'Consolidación'],
    keyIndustries: ['Tecnología', 'Comercio', 'Servicios profesionales', 'Manufactura'],
    localEconomy: 'Zapopan es un municipio próspero con fuerte presencia de empresas tecnológicas y de servicios. Los residentes buscan préstamos para mejoras residenciales, consolidación de deudas con mejores tasas y capital para pequeños negocios tecnológicos.',
    coordinates: { lat: 20.7214, lng: -103.3918 }
  },
  {
    name: 'Puerto Vallarta',
    slug: 'puerto-vallarta',
    state: 'Jalisco',
    stateSlug: 'jalisco',
    stateCode: 'JAL',
    population: '290K',
    medianIncome: '$11,000 MXN',
    medianHomePrice: '$3.5M MXN',
    averageLoanAmount: '$55,000 MXN',
    avgCreditScore: '625',
    nearbyLenders: 120,
    popularLoanTypes: ['Préstamos de temporada', 'Negocio turístico', 'Mejoras del hogar'],
    keyIndustries: ['Turismo', 'Hospitalidad', 'Bienes raíces', 'Construcción'],
    localEconomy: 'Puerto Vallarta depende fuertemente del turismo, creando demanda estacional de préstamos. Los trabajadores del sector servicios buscan créditos para superar temporadas bajas, mientras que emprendedores necesitan capital para negocios turísticos y propiedades vacacionales.',
    coordinates: { lat: 20.6534, lng: -105.2253 }
  },
  // Nuevo León
  {
    name: 'Monterrey',
    slug: 'monterrey',
    state: 'Nuevo León',
    stateSlug: 'nuevo-leon',
    stateCode: 'NL',
    population: '1.1M',
    medianIncome: '$16,000 MXN',
    medianHomePrice: '$3.8M MXN',
    averageLoanAmount: '$85,000 MXN',
    avgCreditScore: '670',
    nearbyLenders: 240,
    popularLoanTypes: ['Préstamos personales', 'Auto', 'Mejoras del hogar'],
    keyIndustries: ['Manufactura', 'Servicios financieros', 'Tecnología', 'Comercio'],
    localEconomy: 'Monterrey es el principal centro industrial y financiero del norte de México. Los altos ingresos promedio y la fuerte presencia de empresas multinacionales generan demanda de préstamos para vehículos, educación de calidad y mejoras residenciales significativas.',
    coordinates: { lat: 25.6866, lng: -100.3161 }
  },
  {
    name: 'Guadalupe',
    slug: 'guadalupe-nl',
    state: 'Nuevo León',
    stateSlug: 'nuevo-leon',
    stateCode: 'NL',
    population: '680K',
    medianIncome: '$13,500 MXN',
    medianHomePrice: '$2.5M MXN',
    averageLoanAmount: '$60,000 MXN',
    avgCreditScore: '645',
    nearbyLenders: 180,
    popularLoanTypes: ['Préstamos personales', 'Consolidación', 'Educación'],
    keyIndustries: ['Manufactura', 'Comercio', 'Servicios', 'Logística'],
    localEconomy: 'Guadalupe es parte del área metropolitana de Monterrey con economía enfocada en manufactura y servicios. Los residentes buscan préstamos para consolidar deudas, financiar educación técnica y superior, y realizar mejoras a sus propiedades.',
    coordinates: { lat: 25.6765, lng: -100.2597 }
  },
  // Puebla
  {
    name: 'Puebla',
    slug: 'puebla',
    state: 'Puebla',
    stateSlug: 'puebla',
    stateCode: 'PUE',
    population: '1.6M',
    medianIncome: '$11,500 MXN',
    medianHomePrice: '$2.3M MXN',
    averageLoanAmount: '$50,000 MXN',
    avgCreditScore: '615',
    nearbyLenders: 190,
    popularLoanTypes: ['Préstamos personales', 'Consolidación', 'Gastos médicos'],
    keyIndustries: ['Manufactura automotriz', 'Textil', 'Turismo', 'Educación'],
    localEconomy: 'Puebla es un importante centro manufacturero con creciente desarrollo industrial. La demanda de préstamos se enfoca en consolidación de deudas, emergencias médicas, educación y pequeños negocios familiares en sectores comerciales y de servicios.',
    coordinates: { lat: 19.0414, lng: -98.2063 }
  },
  {
    name: 'Tehuacán',
    slug: 'tehuacan',
    state: 'Puebla',
    stateSlug: 'puebla',
    stateCode: 'PUE',
    population: '310K',
    medianIncome: '$9,000 MXN',
    medianHomePrice: '$1.4M MXN',
    averageLoanAmount: '$35,000 MXN',
    avgCreditScore: '590',
    nearbyLenders: 95,
    popularLoanTypes: ['Préstamos de emergencia', 'Negocio pequeño', 'Consolidación'],
    keyIndustries: ['Textil', 'Avicultura', 'Agricultura', 'Comercio'],
    localEconomy: 'Tehuacán tiene una economía basada en la industria textil y avícola. Los préstamos personales son utilizados principalmente para capital de trabajo en pequeños negocios, emergencias familiares y consolidación de créditos de alto costo.',
    coordinates: { lat: 18.4625, lng: -97.3928 }
  },
  // Guanajuato
  {
    name: 'León',
    slug: 'leon',
    state: 'Guanajuato',
    stateSlug: 'guanajuato',
    stateCode: 'GTO',
    population: '1.6M',
    medianIncome: '$11,000 MXN',
    medianHomePrice: '$2.0M MXN',
    averageLoanAmount: '$48,000 MXN',
    avgCreditScore: '610',
    nearbyLenders: 175,
    popularLoanTypes: ['Préstamos personales', 'Negocio', 'Auto'],
    keyIndustries: ['Calzado', 'Curtiduría', 'Manufactura', 'Comercio'],
    localEconomy: 'León es el principal productor de calzado en México. La industria del cuero y calzado impulsa demanda de préstamos para capital de trabajo en talleres familiares, compra de maquinaria y consolidación de deudas de negocios pequeños.',
    coordinates: { lat: 21.1221, lng: -101.6827 }
  },
  {
    name: 'Irapuato',
    slug: 'irapuato',
    state: 'Guanajuato',
    stateSlug: 'guanajuato',
    stateCode: 'GTO',
    population: '590K',
    medianIncome: '$9,500 MXN',
    medianHomePrice: '$1.6M MXN',
    averageLoanAmount: '$38,000 MXN',
    avgCreditScore: '600',
    nearbyLenders: 135,
    popularLoanTypes: ['Préstamos agrícolas', 'Negocio pequeño', 'Emergencia'],
    keyIndustries: ['Agricultura', 'Agroindustria', 'Manufactura', 'Comercio'],
    localEconomy: 'Irapuato es conocida como la capital mundial de las fresas con fuerte sector agrícola. Los préstamos se destinan principalmente a ciclos agrícolas, agroindustria, compra de equipo y consolidación de deudas de producción.',
    coordinates: { lat: 20.6767, lng: -101.3542 }
  },
  {
    name: 'Celaya',
    slug: 'celaya',
    state: 'Guanajuato',
    stateSlug: 'guanajuato',
    stateCode: 'GTO',
    population: '520K',
    medianIncome: '$10,000 MXN',
    medianHomePrice: '$1.7M MXN',
    averageLoanAmount: '$42,000 MXN',
    avgCreditScore: '605',
    nearbyLenders: 145,
    popularLoanTypes: ['Préstamos personales', 'Auto', 'Consolidación'],
    keyIndustries: ['Manufactura', 'Agroindustria', 'Comercio', 'Logística'],
    localEconomy: 'Celaya es un importante nodo logístico y manufacturero. La ubicación estratégica genera empleos en manufactura y logística, impulsando demanda de préstamos para vehículos, consolidación de deudas y mejoras al hogar.',
    coordinates: { lat: 20.5289, lng: -100.8157 }
  },
]

export function getMexicoCityBySlug(slug: string): MexicoCity | undefined {
  return mexicoCities.find(city => city.slug === slug)
}

export function getMexicoCitiesByState(stateSlug: string): MexicoCity[] {
  return mexicoCities.filter(city => city.stateSlug === stateSlug)
}

export function getNearbyMexicoCities(citySlug: string, limit: number = 6): Array<{ city: MexicoCity; distanceMiles: number }> {
  const currentCity = getMexicoCityBySlug(citySlug)
  if (!currentCity) return []

  const citiesWithDistance = mexicoCities
    .filter(city => city.slug !== citySlug)
    .map(city => {
      const distance = calculateDistance(
        currentCity.coordinates.lat,
        currentCity.coordinates.lng,
        city.coordinates.lat,
        city.coordinates.lng
      )
      return { city, distanceMiles: distance * 0.621371 } // Convert km to miles
    })
    .sort((a, b) => a.distanceMiles - b.distanceMiles)
    .slice(0, limit)

  return citiesWithDistance
}

function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371 // Earth's radius in km
  const dLat = toRad(lat2 - lat1)
  const dLon = toRad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

function toRad(degrees: number): number {
  return degrees * (Math.PI / 180)
}

export function getAllMexicoCitySlugs(): Array<{ params: { state: string; city: string } }> {
  return mexicoCities.map(city => ({
    params: {
      state: city.stateSlug,
      city: city.slug,
    },
  }))
}
