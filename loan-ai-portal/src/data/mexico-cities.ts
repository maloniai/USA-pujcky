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
  // Veracruz
  {
    name: 'Veracruz',
    slug: 'veracruz',
    state: 'Veracruz',
    stateSlug: 'veracruz',
    stateCode: 'VER',
    population: '600K',
    medianIncome: '$9,500 MXN',
    medianHomePrice: '$1.8M MXN',
    averageLoanAmount: '$40,000 MXN',
    avgCreditScore: '595',
    nearbyLenders: 140,
    popularLoanTypes: ['Préstamos personales', 'Negocio', 'Emergencia'],
    keyIndustries: ['Puerto', 'Petroquímica', 'Comercio', 'Turismo', 'Pesca'],
    localEconomy: 'Veracruz es el principal puerto del Golfo de México con economía diversificada en actividades portuarias, petroquímica y turismo. Los préstamos personales se utilizan para capital de trabajo en negocios comerciales, emergencias familiares y mejoras a propiedades.',
    coordinates: { lat: 19.1738, lng: -96.1342 }
  },
  {
    name: 'Xalapa',
    slug: 'xalapa',
    state: 'Veracruz',
    stateSlug: 'veracruz',
    stateCode: 'VER',
    population: '480K',
    medianIncome: '$10,000 MXN',
    medianHomePrice: '$1.9M MXN',
    averageLoanAmount: '$43,000 MXN',
    avgCreditScore: '610',
    nearbyLenders: 130,
    popularLoanTypes: ['Préstamos personales', 'Educación', 'Consolidación'],
    keyIndustries: ['Gobierno', 'Educación', 'Servicios', 'Comercio', 'Turismo'],
    localEconomy: 'Xalapa es la capital de Veracruz con fuerte presencia de empleados gubernamentales y estudiantes universitarios. Los préstamos se destinan a educación superior, consolidación de deudas, y mejoras al hogar para funcionarios públicos y profesionales.',
    coordinates: { lat: 19.5438, lng: -96.9102 }
  },
  // Chihuahua
  {
    name: 'Chihuahua',
    slug: 'chihuahua',
    state: 'Chihuahua',
    stateSlug: 'chihuahua',
    stateCode: 'CHI',
    population: '880K',
    medianIncome: '$13,000 MXN',
    medianHomePrice: '$2.2M MXN',
    averageLoanAmount: '$55,000 MXN',
    avgCreditScore: '630',
    nearbyLenders: 160,
    popularLoanTypes: ['Préstamos personales', 'Auto', 'Mejoras del hogar'],
    keyIndustries: ['Manufactura', 'Maquiladora', 'Minería', 'Comercio', 'Ganadería'],
    localEconomy: 'Chihuahua capital tiene una economía diversificada con fuerte presencia de manufactura e industria maquiladora. Los trabajadores buscan préstamos para vehículos, mejoras residenciales y consolidación de deudas con mejores tasas.',
    coordinates: { lat: 28.6353, lng: -106.0889 }
  },
  {
    name: 'Ciudad Juárez',
    slug: 'ciudad-juarez',
    state: 'Chihuahua',
    stateSlug: 'chihuahua',
    stateCode: 'CHI',
    population: '1.5M',
    medianIncome: '$12,000 MXN',
    medianHomePrice: '$2.0M MXN',
    averageLoanAmount: '$50,000 MXN',
    avgCreditScore: '620',
    nearbyLenders: 185,
    popularLoanTypes: ['Préstamos personales', 'Consolidación', 'Auto'],
    keyIndustries: ['Maquiladora', 'Manufactura electrónica', 'Comercio fronterizo', 'Logística'],
    localEconomy: 'Ciudad Juárez es el principal centro maquilador de México con más de 300 plantas industriales. La alta empleabilidad en manufactura genera demanda de préstamos para vehículos, mejoras al hogar y consolidación de deudas de tarjetas de crédito.',
    coordinates: { lat: 31.6904, lng: -106.4245 }
  },
  // Querétaro
  {
    name: 'Querétaro',
    slug: 'queretaro',
    state: 'Querétaro',
    stateSlug: 'queretaro',
    stateCode: 'QRO',
    population: '1.0M',
    medianIncome: '$14,000 MXN',
    medianHomePrice: '$2.8M MXN',
    averageLoanAmount: '$60,000 MXN',
    avgCreditScore: '655',
    nearbyLenders: 190,
    popularLoanTypes: ['Préstamos personales', 'Mejoras del hogar', 'Auto'],
    keyIndustries: ['Manufactura aeroespacial', 'Automotriz', 'Tecnología', 'Servicios', 'Comercio'],
    localEconomy: 'Querétaro es uno de los estados con mayor crecimiento económico en México. La fuerte inversión extranjera y alta calidad de empleo impulsan demanda de préstamos para mejoras residenciales, vehículos y consolidación de deudas con mejores condiciones.',
    coordinates: { lat: 20.5888, lng: -100.3899 }
  },
  {
    name: 'San Juan del Río',
    slug: 'san-juan-del-rio',
    state: 'Querétaro',
    stateSlug: 'queretaro',
    stateCode: 'QRO',
    population: '270K',
    medianIncome: '$11,500 MXN',
    medianHomePrice: '$2.0M MXN',
    averageLoanAmount: '$48,000 MXN',
    avgCreditScore: '625',
    nearbyLenders: 115,
    popularLoanTypes: ['Préstamos personales', 'Negocio pequeño', 'Consolidación'],
    keyIndustries: ['Manufactura', 'Agroindustria', 'Comercio', 'Turismo', 'Artesanías'],
    localEconomy: 'San Juan del Río es un importante centro manufacturero y artesanal. Los préstamos personales se utilizan para capital de trabajo en talleres artesanales, negocios familiares, y consolidación de deudas de alto costo.',
    coordinates: { lat: 20.3881, lng: -99.9962 }
  },
  // Yucatán
  {
    name: 'Mérida',
    slug: 'merida',
    state: 'Yucatán',
    stateSlug: 'yucatan',
    stateCode: 'YUC',
    population: '950K',
    medianIncome: '$11,500 MXN',
    medianHomePrice: '$2.3M MXN',
    averageLoanAmount: '$52,000 MXN',
    avgCreditScore: '630',
    nearbyLenders: 170,
    popularLoanTypes: ['Préstamos personales', 'Mejoras del hogar', 'Consolidación'],
    keyIndustries: ['Turismo', 'Manufactura', 'Comercio', 'Servicios', 'Inmobiliario'],
    localEconomy: 'Mérida es la capital de Yucatán con economía creciente basada en turismo cultural, manufactura y servicios. La alta calidad de vida y crecimiento inmobiliario impulsan demanda de préstamos para mejoras residenciales, consolidación de deudas y emprendimiento.',
    coordinates: { lat: 20.9674, lng: -89.5926 }
  },
  // Quintana Roo
  {
    name: 'Cancún',
    slug: 'cancun',
    state: 'Quintana Roo',
    stateSlug: 'quintana-roo',
    stateCode: 'QROO',
    population: '900K',
    medianIncome: '$12,000 MXN',
    medianHomePrice: '$2.8M MXN',
    averageLoanAmount: '$55,000 MXN',
    avgCreditScore: '625',
    nearbyLenders: 165,
    popularLoanTypes: ['Préstamos de temporada', 'Consolidación', 'Emergencia'],
    keyIndustries: ['Turismo', 'Hospitalidad', 'Bienes raíces', 'Comercio', 'Construcción'],
    localEconomy: 'Cancún es el principal destino turístico de México con economía dependiente del turismo internacional. La estacionalidad del empleo genera demanda de préstamos para cubrir temporadas bajas, emergencias médicas y consolidación de deudas de tarjetas.',
    coordinates: { lat: 21.1619, lng: -86.8515 }
  },
  {
    name: 'Playa del Carmen',
    slug: 'playa-del-carmen',
    state: 'Quintana Roo',
    stateSlug: 'quintana-roo',
    stateCode: 'QROO',
    population: '320K',
    medianIncome: '$11,000 MXN',
    medianHomePrice: '$2.5M MXN',
    averageLoanAmount: '$50,000 MXN',
    avgCreditScore: '615',
    nearbyLenders: 125,
    popularLoanTypes: ['Préstamos personales', 'Negocio turístico', 'Consolidación'],
    keyIndustries: ['Turismo', 'Restaurantes', 'Servicios', 'Bienes raíces', 'Entretenimiento'],
    localEconomy: 'Playa del Carmen es un destino turístico en rápido crecimiento. Los residentes trabajan principalmente en turismo y servicios, buscando préstamos para emprendimiento turístico, consolidación de deudas y capital para negocios de temporada.',
    coordinates: { lat: 20.6274, lng: -87.0794 }
  },
  // Sinaloa
  {
    name: 'Culiacán',
    slug: 'culiacan',
    state: 'Sinaloa',
    stateSlug: 'sinaloa',
    stateCode: 'SIN',
    population: '950K',
    medianIncome: '$10,500 MXN',
    medianHomePrice: '$2.0M MXN',
    averageLoanAmount: '$45,000 MXN',
    avgCreditScore: '610',
    nearbyLenders: 155,
    popularLoanTypes: ['Préstamos agrícolas', 'Personales', 'Consolidación'],
    keyIndustries: ['Agricultura', 'Agroindustria', 'Comercio', 'Servicios', 'Ganadería'],
    localEconomy: 'Culiacán es capital de Sinaloa y centro agrícola importante. La economía se basa en agricultura de exportación, agroindustria y comercio. Los préstamos se destinan a ciclos agrícolas, capital de trabajo comercial y consolidación de deudas.',
    coordinates: { lat: 24.8091, lng: -107.3940 }
  },
  {
    name: 'Mazatlán',
    slug: 'mazatlan',
    state: 'Sinaloa',
    stateSlug: 'sinaloa',
    stateCode: 'SIN',
    population: '500K',
    medianIncome: '$10,000 MXN',
    medianHomePrice: '$2.2M MXN',
    averageLoanAmount: '$47,000 MXN',
    avgCreditScore: '605',
    nearbyLenders: 135,
    popularLoanTypes: ['Préstamos de temporada', 'Negocio turístico', 'Consolidación'],
    keyIndustries: ['Turismo', 'Pesca', 'Puerto', 'Hospitalidad', 'Bienes raíces'],
    localEconomy: 'Mazatlán es un importante puerto y destino turístico del Pacífico. La economía turística y portuaria genera empleos estacionales, impulsando demanda de préstamos para cubrir temporadas bajas, emprendimiento turístico y mejoras a negocios.',
    coordinates: { lat: 23.2494, lng: -106.4111 }
  },
  // Coahuila
  {
    name: 'Saltillo',
    slug: 'saltillo',
    state: 'Coahuila',
    stateSlug: 'coahuila',
    stateCode: 'COAH',
    population: '880K',
    medianIncome: '$12,500 MXN',
    medianHomePrice: '$2.1M MXN',
    averageLoanAmount: '$53,000 MXN',
    avgCreditScore: '635',
    nearbyLenders: 165,
    popularLoanTypes: ['Préstamos personales', 'Auto', 'Mejoras del hogar'],
    keyIndustries: ['Manufactura automotriz', 'Metalmecánica', 'Minería', 'Comercio', 'Servicios'],
    localEconomy: 'Saltillo es capital de Coahuila y centro automotriz importante con presencia de plantas de General Motors, Chrysler y proveedores tier 1. Los empleos bien remunerados impulsan demanda de préstamos para vehículos, mejoras residenciales y consolidación.',
    coordinates: { lat: 25.4232, lng: -100.9933 }
  },
  {
    name: 'Torreón',
    slug: 'torreon',
    state: 'Coahuila',
    stateSlug: 'coahuila',
    stateCode: 'COAH',
    population: '720K',
    medianIncome: '$11,000 MXN',
    medianHomePrice: '$1.9M MXN',
    averageLoanAmount: '$48,000 MXN',
    avgCreditScore: '620',
    nearbyLenders: 150,
    popularLoanTypes: ['Préstamos personales', 'Negocio', 'Consolidación'],
    keyIndustries: ['Manufactura', 'Textil', 'Metalmecánica', 'Comercio', 'Agroindustria'],
    localEconomy: 'Torreón forma parte de la zona metropolitana de La Laguna con economía industrial diversificada. Los préstamos personales se utilizan para capital de trabajo en negocios familiares, consolidación de deudas y mejoras al hogar.',
    coordinates: { lat: 25.5428, lng: -103.4068 }
  },
  // Michoacán
  {
    name: 'Morelia',
    slug: 'morelia',
    state: 'Michoacán',
    stateSlug: 'michoacan',
    stateCode: 'MICH',
    population: '850K',
    medianIncome: '$9,500 MXN',
    medianHomePrice: '$1.8M MXN',
    averageLoanAmount: '$42,000 MXN',
    avgCreditScore: '600',
    nearbyLenders: 145,
    popularLoanTypes: ['Préstamos personales', 'Educación', 'Consolidación'],
    keyIndustries: ['Gobierno', 'Educación', 'Turismo', 'Comercio', 'Servicios'],
    localEconomy: 'Morelia es capital de Michoacán y patrimonio de la humanidad con economía basada en gobierno, educación y turismo cultural. Los funcionarios públicos y profesionistas buscan préstamos para educación, consolidación de deudas y mejoras residenciales.',
    coordinates: { lat: 19.7060, lng: -101.1949 }
  },
  {
    name: 'Uruapan',
    slug: 'uruapan',
    state: 'Michoacán',
    stateSlug: 'michoacan',
    stateCode: 'MICH',
    population: '360K',
    medianIncome: '$8,500 MXN',
    medianHomePrice: '$1.5M MXN',
    averageLoanAmount: '$36,000 MXN',
    avgCreditScore: '590',
    nearbyLenders: 110,
    popularLoanTypes: ['Préstamos agrícolas', 'Negocio pequeño', 'Emergencia'],
    keyIndustries: ['Agricultura', 'Aguacate', 'Manufactura', 'Comercio', 'Turismo'],
    localEconomy: 'Uruapan es la capital mundial del aguacate con economía agrícola exportadora. Los préstamos se destinan principalmente a financiar ciclos de cultivo de aguacate, compra de equipo agrícola y capital para empacadoras y comercializadoras.',
    coordinates: { lat: 19.4204, lng: -102.0631 }
  },
  // Tamaulipas
  {
    name: 'Reynosa',
    slug: 'reynosa',
    state: 'Tamaulipas',
    stateSlug: 'tamaulipas',
    stateCode: 'TAMPS',
    population: '750K',
    medianIncome: '$11,000 MXN',
    medianHomePrice: '$1.9M MXN',
    averageLoanAmount: '$48,000 MXN',
    avgCreditScore: '615',
    nearbyLenders: 140,
    popularLoanTypes: ['Préstamos personales', 'Auto', 'Consolidación'],
    keyIndustries: ['Maquiladora', 'Manufactura', 'Comercio fronterizo', 'Servicios', 'Logística'],
    localEconomy: 'Reynosa es un importante centro maquilador fronterizo con más de 200 plantas industriales. La alta empleabilidad en manufactura genera demanda de préstamos para vehículos, mejoras al hogar y consolidación de deudas con mejores tasas.',
    coordinates: { lat: 26.0922, lng: -98.2775 }
  },
  {
    name: 'Matamoros',
    slug: 'matamoros',
    state: 'Tamaulipas',
    stateSlug: 'tamaulipas',
    stateCode: 'TAMPS',
    population: '530K',
    medianIncome: '$10,500 MXN',
    medianHomePrice: '$1.7M MXN',
    averageLoanAmount: '$45,000 MXN',
    avgCreditScore: '610',
    nearbyLenders: 130,
    popularLoanTypes: ['Préstamos personales', 'Consolidación', 'Negocio'],
    keyIndustries: ['Maquiladora', 'Comercio fronterizo', 'Manufactura', 'Servicios', 'Puerto'],
    localEconomy: 'Matamoros es ciudad fronteriza con fuerte industria maquiladora y comercio internacional. Los trabajadores de maquiladoras buscan préstamos para consolidación de deudas, emergencias familiares y pequeños emprendimientos comerciales.',
    coordinates: { lat: 25.8796, lng: -97.5044 }
  },
  // Baja California
  {
    name: 'Tijuana',
    slug: 'tijuana',
    state: 'Baja California',
    stateSlug: 'baja-california',
    stateCode: 'BC',
    population: '1.9M',
    medianIncome: '$14,000 MXN',
    medianHomePrice: '$2.5M MXN',
    averageLoanAmount: '$58,000 MXN',
    avgCreditScore: '635',
    nearbyLenders: 200,
    popularLoanTypes: ['Préstamos personales', 'Auto', 'Mejoras del hogar'],
    keyIndustries: ['Maquiladora', 'Manufactura electrónica', 'Turismo médico', 'Comercio fronterizo', 'Servicios'],
    localEconomy: 'Tijuana es la ciudad fronteriza más grande de México con fuerte industria maquiladora y turismo médico. Los altos salarios en manufactura y servicios impulsan demanda de préstamos para vehículos, mejoras residenciales y consolidación de deudas.',
    coordinates: { lat: 32.5149, lng: -117.0382 }
  },
  {
    name: 'Mexicali',
    slug: 'mexicali',
    state: 'Baja California',
    stateSlug: 'baja-california',
    stateCode: 'BC',
    population: '1.0M',
    medianIncome: '$13,000 MXN',
    medianHomePrice: '$2.2M MXN',
    averageLoanAmount: '$54,000 MXN',
    avgCreditScore: '630',
    nearbyLenders: 170,
    popularLoanTypes: ['Préstamos personales', 'Consolidación', 'Auto'],
    keyIndustries: ['Agricultura', 'Manufactura aeroespacial', 'Gobierno', 'Comercio', 'Energía'],
    localEconomy: 'Mexicali es capital de Baja California con economía diversificada en agricultura de exportación, manufactura aeroespacial y energía. Los préstamos se utilizan para consolidación de deudas, vehículos y mejoras al hogar en zonas residenciales en crecimiento.',
    coordinates: { lat: 32.6519, lng: -115.4683 }
  },
  // Sonora
  {
    name: 'Hermosillo',
    slug: 'hermosillo',
    state: 'Sonora',
    stateSlug: 'sonora',
    stateCode: 'SON',
    population: '930K',
    medianIncome: '$13,000 MXN',
    medianHomePrice: '$2.3M MXN',
    averageLoanAmount: '$56,000 MXN',
    avgCreditScore: '640',
    nearbyLenders: 175,
    popularLoanTypes: ['Préstamos personales', 'Auto', 'Mejoras del hogar'],
    keyIndustries: ['Manufactura automotriz', 'Minería', 'Agricultura', 'Comercio', 'Servicios'],
    localEconomy: 'Hermosillo es capital de Sonora con fuerte presencia de manufactura automotriz (Ford). Los buenos salarios impulsan demanda de préstamos para vehículos nuevos, mejoras residenciales y consolidación de deudas con mejores tasas.',
    coordinates: { lat: 29.0729, lng: -110.9559 }
  },
  {
    name: 'Ciudad Obregón',
    slug: 'ciudad-obregon',
    state: 'Sonora',
    stateSlug: 'sonora',
    stateCode: 'SON',
    population: '430K',
    medianIncome: '$11,500 MXN',
    medianHomePrice: '$1.9M MXN',
    averageLoanAmount: '$48,000 MXN',
    avgCreditScore: '620',
    nearbyLenders: 135,
    popularLoanTypes: ['Préstamos agrícolas', 'Personales', 'Consolidación'],
    keyIndustries: ['Agricultura', 'Agroindustria', 'Manufactura', 'Comercio', 'Servicios'],
    localEconomy: 'Ciudad Obregón es el centro agrícola más importante de Sonora. La economía basada en agricultura de exportación (trigo, hortalizas) genera demanda de préstamos para ciclos agrícolas, maquinaria y consolidación de deudas de producción.',
    coordinates: { lat: 27.4860, lng: -109.9309 }
  },
  // Aguascalientes
  {
    name: 'Aguascalientes',
    slug: 'aguascalientes-city',
    state: 'Aguascalientes',
    stateSlug: 'aguascalientes',
    stateCode: 'AGS',
    population: '950K',
    medianIncome: '$13,500 MXN',
    medianHomePrice: '$2.4M MXN',
    averageLoanAmount: '$58,000 MXN',
    avgCreditScore: '645',
    nearbyLenders: 180,
    popularLoanTypes: ['Préstamos personales', 'Auto', 'Mejoras del hogar'],
    keyIndustries: ['Manufactura automotriz', 'Electrónica', 'Textil', 'Servicios', 'Comercio'],
    localEconomy: 'Aguascalientes tiene la mayor concentración de plantas automotrices per cápita en México (Nissan, Mercedes-Benz). Los altos salarios y estabilidad laboral impulsan demanda de préstamos para vehículos, mejoras residenciales y consolidación.',
    coordinates: { lat: 21.8853, lng: -102.2916 }
  },
  // San Luis Potosí
  {
    name: 'San Luis Potosí',
    slug: 'san-luis-potosi-city',
    state: 'San Luis Potosí',
    stateSlug: 'san-luis-potosi',
    stateCode: 'SLP',
    population: '1.1M',
    medianIncome: '$11,000 MXN',
    medianHomePrice: '$2.0M MXN',
    averageLoanAmount: '$50,000 MXN',
    avgCreditScore: '625',
    nearbyLenders: 165,
    popularLoanTypes: ['Préstamos personales', 'Consolidación', 'Auto'],
    keyIndustries: ['Manufactura', 'Minería', 'Servicios', 'Gobierno', 'Comercio'],
    localEconomy: 'San Luis Potosí capital tiene economía diversificada con manufactura, minería y servicios. Los empleados de gobierno y sector privado buscan préstamos para consolidación de deudas, vehículos y mejoras al hogar en desarrollos residenciales.',
    coordinates: { lat: 22.1565, lng: -100.9855 }
  },
  {
    name: 'Soledad de Graciano Sánchez',
    slug: 'soledad-de-graciano-sanchez',
    state: 'San Luis Potosí',
    stateSlug: 'san-luis-potosi',
    stateCode: 'SLP',
    population: '400K',
    medianIncome: '$9,500 MXN',
    medianHomePrice: '$1.6M MXN',
    averageLoanAmount: '$42,000 MXN',
    avgCreditScore: '610',
    nearbyLenders: 120,
    popularLoanTypes: ['Préstamos personales', 'Consolidación', 'Emergencia'],
    keyIndustries: ['Manufactura', 'Comercio', 'Servicios', 'Construcción', 'Transporte'],
    localEconomy: 'Soledad forma parte del área metropolitana de San Luis Potosí con economía industrial. Los residentes buscan préstamos para consolidación de deudas, emergencias familiares y pequeños negocios comerciales en desarrollo.',
    coordinates: { lat: 22.1827, lng: -100.9419 }
  },
  // Hidalgo
  {
    name: 'Pachuca',
    slug: 'pachuca',
    state: 'Hidalgo',
    stateSlug: 'hidalgo',
    stateCode: 'HGO',
    population: '580K',
    medianIncome: '$10,000 MXN',
    medianHomePrice: '$1.8M MXN',
    averageLoanAmount: '$45,000 MXN',
    avgCreditScore: '615',
    nearbyLenders: 140,
    popularLoanTypes: ['Préstamos personales', 'Consolidación', 'Educación'],
    keyIndustries: ['Minería', 'Gobierno', 'Servicios', 'Comercio', 'Manufactura'],
    localEconomy: 'Pachuca es capital de Hidalgo con tradición minera y economía gubernamental. Los funcionarios públicos y empleados de servicios buscan préstamos para consolidación de deudas, educación de hijos y mejoras residenciales.',
    coordinates: { lat: 20.1011, lng: -98.7591 }
  },
  {
    name: 'Tulancingo',
    slug: 'tulancingo',
    state: 'Hidalgo',
    stateSlug: 'hidalgo',
    stateCode: 'HGO',
    population: '180K',
    medianIncome: '$9,000 MXN',
    medianHomePrice: '$1.5M MXN',
    averageLoanAmount: '$38,000 MXN',
    avgCreditScore: '600',
    nearbyLenders: 105,
    popularLoanTypes: ['Préstamos personales', 'Negocio pequeño', 'Consolidación'],
    keyIndustries: ['Textil', 'Manufactura', 'Comercio', 'Agricultura', 'Servicios'],
    localEconomy: 'Tulancingo tiene economía basada en industria textil y manufactura. Los préstamos se destinan a capital de trabajo en talleres textiles, consolidación de deudas y emprendimiento de negocios familiares.',
    coordinates: { lat: 20.0833, lng: -98.3667 }
  },
  // Oaxaca
  {
    name: 'Oaxaca de Juárez',
    slug: 'oaxaca-de-juarez',
    state: 'Oaxaca',
    stateSlug: 'oaxaca',
    stateCode: 'OAX',
    population: '720K',
    medianIncome: '$8,500 MXN',
    medianHomePrice: '$1.6M MXN',
    averageLoanAmount: '$38,000 MXN',
    avgCreditScore: '590',
    nearbyLenders: 135,
    popularLoanTypes: ['Préstamos personales', 'Negocio turístico', 'Consolidación'],
    keyIndustries: ['Turismo', 'Artesanías', 'Gobierno', 'Comercio', 'Servicios'],
    localEconomy: 'Oaxaca capital es patrimonio de la humanidad con economía basada en turismo cultural y artesanías. Los emprendedores turísticos y artesanos buscan préstamos para capital de trabajo, temporadas bajas y consolidación de deudas.',
    coordinates: { lat: 17.0732, lng: -96.7266 }
  },
  // Chiapas
  {
    name: 'Tuxtla Gutiérrez',
    slug: 'tuxtla-gutierrez',
    state: 'Chiapas',
    stateSlug: 'chiapas',
    stateCode: 'CHIS',
    population: '600K',
    medianIncome: '$8,000 MXN',
    medianHomePrice: '$1.5M MXN',
    averageLoanAmount: '$36,000 MXN',
    avgCreditScore: '585',
    nearbyLenders: 125,
    popularLoanTypes: ['Préstamos personales', 'Emergencia', 'Consolidación'],
    keyIndustries: ['Gobierno', 'Comercio', 'Servicios', 'Construcción', 'Agricultura'],
    localEconomy: 'Tuxtla Gutiérrez es capital de Chiapas con economía centrada en gobierno y comercio. Los funcionarios públicos y comerciantes buscan préstamos para consolidación de deudas, emergencias familiares y capital para negocios comerciales.',
    coordinates: { lat: 16.7516, lng: -93.1029 }
  },
  {
    name: 'Tapachula',
    slug: 'tapachula',
    state: 'Chiapas',
    stateSlug: 'chiapas',
    stateCode: 'CHIS',
    population: '350K',
    medianIncome: '$7,500 MXN',
    medianHomePrice: '$1.3M MXN',
    averageLoanAmount: '$33,000 MXN',
    avgCreditScore: '580',
    nearbyLenders: 100,
    popularLoanTypes: ['Préstamos comerciales', 'Emergencia', 'Consolidación'],
    keyIndustries: ['Comercio fronterizo', 'Agricultura', 'Servicios', 'Transporte', 'Turismo'],
    localEconomy: 'Tapachula es ciudad fronteriza con Guatemala y puerto comercial importante. La economía se basa en comercio internacional, agricultura y servicios. Los préstamos se utilizan para capital comercial, emergencias y consolidación.',
    coordinates: { lat: 14.9068, lng: -92.2627 }
  },
  // Durango
  {
    name: 'Durango',
    slug: 'durango-city',
    state: 'Durango',
    stateSlug: 'durango',
    stateCode: 'DGO',
    population: '680K',
    medianIncome: '$10,000 MXN',
    medianHomePrice: '$1.8M MXN',
    averageLoanAmount: '$44,000 MXN',
    avgCreditScore: '605',
    nearbyLenders: 140,
    popularLoanTypes: ['Préstamos personales', 'Auto', 'Consolidación'],
    keyIndustries: ['Minería', 'Manufactura maderera', 'Comercio', 'Servicios', 'Turismo'],
    localEconomy: 'Durango capital tiene economía basada en minería, industria maderera y servicios. Los trabajadores mineros y empleados de servicios buscan préstamos para vehículos, consolidación de deudas y mejoras al hogar.',
    coordinates: { lat: 24.0277, lng: -104.6532 }
  },
  {
    name: 'Gómez Palacio',
    slug: 'gomez-palacio',
    state: 'Durango',
    stateSlug: 'durango',
    stateCode: 'DGO',
    population: '360K',
    medianIncome: '$9,500 MXN',
    medianHomePrice: '$1.6M MXN',
    averageLoanAmount: '$41,000 MXN',
    avgCreditScore: '600',
    nearbyLenders: 120,
    popularLoanTypes: ['Préstamos personales', 'Negocio', 'Consolidación'],
    keyIndustries: ['Manufactura', 'Textil', 'Comercio', 'Agricultura', 'Servicios'],
    localEconomy: 'Gómez Palacio forma parte de la comarca lagunera con economía industrial y agrícola. Los préstamos se destinan a capital de trabajo en negocios familiares, consolidación de deudas y mejoras residenciales.',
    coordinates: { lat: 25.5694, lng: -103.4969 }
  },
  // Zacatecas
  {
    name: 'Zacatecas',
    slug: 'zacatecas-city',
    state: 'Zacatecas',
    stateSlug: 'zacatecas',
    stateCode: 'ZAC',
    population: '150K',
    medianIncome: '$9,000 MXN',
    medianHomePrice: '$1.5M MXN',
    averageLoanAmount: '$39,000 MXN',
    avgCreditScore: '595',
    nearbyLenders: 110,
    popularLoanTypes: ['Préstamos personales', 'Educación', 'Consolidación'],
    keyIndustries: ['Minería', 'Turismo', 'Gobierno', 'Educación', 'Servicios'],
    localEconomy: 'Zacatecas capital es patrimonio de la humanidad con economía basada en minería, turismo cultural y gobierno. Los funcionarios y trabajadores turísticos buscan préstamos para educación, consolidación de deudas y emprendimiento.',
    coordinates: { lat: 22.7709, lng: -102.5832 }
  },
  {
    name: 'Fresnillo',
    slug: 'fresnillo',
    state: 'Zacatecas',
    stateSlug: 'zacatecas',
    stateCode: 'ZAC',
    population: '230K',
    medianIncome: '$9,500 MXN',
    medianHomePrice: '$1.4M MXN',
    averageLoanAmount: '$40,000 MXN',
    avgCreditScore: '600',
    nearbyLenders: 105,
    popularLoanTypes: ['Préstamos personales', 'Auto', 'Consolidación'],
    keyIndustries: ['Minería', 'Manufactura', 'Comercio', 'Agricultura', 'Servicios'],
    localEconomy: 'Fresnillo es el principal productor de plata del mundo con economía minera. Los trabajadores mineros con buenos salarios buscan préstamos para vehículos, mejoras al hogar y consolidación de deudas con mejores tasas.',
    coordinates: { lat: 23.1761, lng: -102.8701 }
  },
  // Morelos
  {
    name: 'Cuernavaca',
    slug: 'cuernavaca',
    state: 'Morelos',
    stateSlug: 'morelos',
    stateCode: 'MOR',
    population: '410K',
    medianIncome: '$11,500 MXN',
    medianHomePrice: '$2.5M MXN',
    averageLoanAmount: '$52,000 MXN',
    avgCreditScore: '625',
    nearbyLenders: 150,
    popularLoanTypes: ['Préstamos personales', 'Mejoras del hogar', 'Consolidación'],
    keyIndustries: ['Turismo', 'Servicios', 'Educación', 'Comercio', 'Industria ligera'],
    localEconomy: 'Cuernavaca conocida como la ciudad de la eterna primavera, tiene economía basada en turismo, servicios y residentes de alto poder adquisitivo. Los préstamos se destinan a mejoras residenciales, consolidación de deudas y emprendimiento turístico.',
    coordinates: { lat: 18.9186, lng: -99.2342 }
  },
  {
    name: 'Jiutepec',
    slug: 'jiutepec',
    state: 'Morelos',
    stateSlug: 'morelos',
    stateCode: 'MOR',
    population: '220K',
    medianIncome: '$10,000 MXN',
    medianHomePrice: '$2.0M MXN',
    averageLoanAmount: '$46,000 MXN',
    avgCreditScore: '615',
    nearbyLenders: 125,
    popularLoanTypes: ['Préstamos personales', 'Consolidación', 'Negocio'],
    keyIndustries: ['Manufactura', 'Comercio', 'Servicios', 'Agricultura', 'Construcción'],
    localEconomy: 'Jiutepec forma parte del área metropolitana de Cuernavaca con economía industrial y de servicios. Los residentes buscan préstamos para consolidación de deudas, capital para pequeños negocios y mejoras al hogar.',
    coordinates: { lat: 18.8811, lng: -99.1783 }
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
