/**
 * Mexico Cities Data
 * Major Mexican cities with loan market information
 */

export interface MexicoCity {
  name: string
  slug: string
  state: string
  region: string
  population: string
  description: string
  descriptionEs: string
  avgLoanAmount: string
  avgRate: string
  minLoanAmount: string
  maxLoanAmount: string
  typicalTermMonths: string
  localEconomy: string
  localEconomyEs: string
  nearbyCities: string[]
  topLenders: string[]
  regulatoryNotes: string
  regulatoryNotesEs: string
}

export const mexicoCities: MexicoCity[] = [
  // Valle de México
  {
    name: 'Ciudad de México',
    slug: 'ciudad-de-mexico',
    state: 'Ciudad de México',
    region: 'Valle de México',
    population: '9.2M',
    description: 'National capital and largest financial center',
    descriptionEs: 'Capital nacional y mayor centro financiero',
    avgLoanAmount: '$60,000 - $250,000 MXN',
    avgRate: '18% - 45% CAT',
    minLoanAmount: '$5,000 MXN',
    maxLoanAmount: '$500,000 MXN',
    typicalTermMonths: '12-48 meses',
    localEconomy: 'Headquarters of major banks, fintech companies, corporate offices, tourism, and government. Highest concentration of financial services.',
    localEconomyEs: 'Sede de grandes bancos, empresas fintech, oficinas corporativas, turismo y gobierno. Mayor concentración de servicios financieros.',
    nearbyCities: ['Ecatepec', 'Nezahualcóyotl', 'Naucalpan', 'Tlalnepantla', 'Atizapán'],
    topLenders: ['BBVA México', 'Santander', 'Banorte', 'HSBC México', 'Scotiabank', 'Nu México', 'Kueski'],
    regulatoryNotes: 'Highest lender competition. CONDUSEF headquarters. Strict consumer protection enforcement.',
    regulatoryNotesEs: 'Mayor competencia entre prestamistas. Sede de CONDUSEF. Aplicación estricta de protección al consumidor.'
  },
  {
    name: 'Ecatepec',
    slug: 'ecatepec',
    state: 'Estado de México',
    region: 'Valle de México',
    population: '1.7M',
    description: 'Largest municipality in Estado de México',
    descriptionEs: 'Municipio más grande del Estado de México',
    avgLoanAmount: '$30,000 - $120,000 MXN',
    avgRate: '22% - 50% CAT',
    minLoanAmount: '$5,000 MXN',
    maxLoanAmount: '$300,000 MXN',
    typicalTermMonths: '12-36 meses',
    localEconomy: 'Industrial area with manufacturing, commerce, and services. Working-class suburb of Mexico City metro area.',
    localEconomyEs: 'Área industrial con manufactura, comercio y servicios. Suburbio de clase trabajadora del área metropolitana.',
    nearbyCities: ['Ciudad de México', 'Nezahualcóyotl', 'Tlalnepantla', 'Coacalco', 'Tultitlán'],
    topLenders: ['Banco Azteca', 'Elektra', 'Compartamos Banco', 'Crédito Familiar', 'Kueski'],
    regulatoryNotes: 'High penetration of retail lenders and SOFOMs. Active microfinance sector.',
    regulatoryNotesEs: 'Alta penetración de prestamistas minoristas y SOFOMs. Sector de microfinanzas activo.'
  },
  // Northern Border - Monterrey Area
  {
    name: 'Monterrey',
    slug: 'monterrey',
    state: 'Nuevo León',
    region: 'Frontera Norte',
    population: '1.1M (4.7M metro)',
    description: 'Industrial and financial hub of northern Mexico',
    descriptionEs: 'Centro industrial y financiero del norte de México',
    avgLoanAmount: '$50,000 - $200,000 MXN',
    avgRate: '19% - 46% CAT',
    minLoanAmount: '$10,000 MXN',
    maxLoanAmount: '$500,000 MXN',
    typicalTermMonths: '12-48 meses',
    localEconomy: 'Major manufacturing center (steel, cement, beer), banking, logistics, and technology. Second-largest financial center after Mexico City.',
    localEconomyEs: 'Gran centro manufacturero (acero, cemento, cerveza), banca, logística y tecnología. Segundo centro financiero después de CDMX.',
    nearbyCities: ['San Pedro Garza García', 'Guadalupe', 'Apodaca', 'San Nicolás', 'Escobedo'],
    topLenders: ['BBVA México', 'Banorte', 'Santander', 'HSBC', 'Afirme', 'Hey Banco', 'Nu México'],
    regulatoryNotes: 'Strong banking infrastructure. High financial literacy. Regional bank Afirme based here.',
    regulatoryNotesEs: 'Fuerte infraestructura bancaria. Alta educación financiera. Banco regional Afirme con sede aquí.'
  },
  {
    name: 'Tijuana',
    slug: 'tijuana',
    state: 'Baja California',
    region: 'Frontera Norte',
    population: '1.9M',
    description: 'Border city with strong maquiladora industry',
    descriptionEs: 'Ciudad fronteriza con fuerte industria maquiladora',
    avgLoanAmount: '$40,000 - $160,000 MXN',
    avgRate: '20% - 48% CAT',
    minLoanAmount: '$5,000 MXN',
    maxLoanAmount: '$400,000 MXN',
    typicalTermMonths: '12-36 meses',
    localEconomy: 'Manufacturing (electronics, medical devices), tourism, cross-border trade, and logistics. Growing tech startup scene.',
    localEconomyEs: 'Manufactura (electrónica, dispositivos médicos), turismo, comercio transfronterizo y logística. Creciente escena de startups tecnológicas.',
    nearbyCities: ['Tecate', 'Rosarito', 'Mexicali', 'Ensenada', 'San Diego (US)'],
    topLenders: ['BBVA', 'Banorte', 'BanCoppel', 'Azteca', 'Compartamos', 'Kueski'],
    regulatoryNotes: 'Some U.S. credit unions serve Mexican residents. Cross-border financial services available.',
    regulatoryNotesEs: 'Algunas cooperativas de crédito de EE.UU. atienden a residentes mexicanos. Servicios financieros transfronterizos disponibles.'
  },
  {
    name: 'Ciudad Juárez',
    slug: 'ciudad-juarez',
    state: 'Chihuahua',
    region: 'Frontera Norte',
    population: '1.5M',
    description: 'Major border manufacturing center',
    descriptionEs: 'Gran centro manufacturero fronterizo',
    avgLoanAmount: '$35,000 - $140,000 MXN',
    avgRate: '21% - 49% CAT',
    minLoanAmount: '$5,000 MXN',
    maxLoanAmount: '$350,000 MXN',
    typicalTermMonths: '12-36 meses',
    localEconomy: 'Automotive and electronics manufacturing, logistics, call centers, and cross-border commerce. Large maquiladora workforce.',
    localEconomyEs: 'Manufactura automotriz y electrónica, logística, call centers y comercio transfronterizo. Gran fuerza laboral de maquiladoras.',
    nearbyCities: ['Chihuahua', 'Delicias', 'Cuauhtémoc', 'El Paso (US)', 'Parral'],
    topLenders: ['BBVA', 'Banorte', 'Santander', 'Azteca', 'BanCoppel', 'Compartamos'],
    regulatoryNotes: 'Strong presence of national banks. Payroll lending programs common for maquiladora workers.',
    regulatoryNotesEs: 'Fuerte presencia de bancos nacionales. Préstamos de nómina comunes para trabajadores de maquiladoras.'
  },
  // Jalisco
  {
    name: 'Guadalajara',
    slug: 'guadalajara',
    state: 'Jalisco',
    region: 'Costa del Pacífico',
    population: '1.4M (5.2M metro)',
    description: 'Second-largest city, tech hub "Silicon Valley of Mexico"',
    descriptionEs: 'Segunda ciudad más grande, centro tecnológico "Silicon Valley de México"',
    avgLoanAmount: '$45,000 - $180,000 MXN',
    avgRate: '19% - 47% CAT',
    minLoanAmount: '$5,000 MXN',
    maxLoanAmount: '$450,000 MXN',
    typicalTermMonths: '12-48 meses',
    localEconomy: 'Technology sector, electronics manufacturing, software development, automotive, food & beverage (tequila), and tourism.',
    localEconomyEs: 'Sector tecnológico, manufactura electrónica, desarrollo de software, automotriz, alimentos y bebidas (tequila) y turismo.',
    nearbyCities: ['Zapopan', 'Tlaquepaque', 'Tonalá', 'Tlajomulco', 'Puerto Vallarta'],
    topLenders: ['BBVA', 'Santander', 'Banorte', 'HSBC', 'Hey Banco', 'Nu México', 'Konfío', 'Clip'],
    regulatoryNotes: 'Major fintech hub. High concentration of digital lenders and neobanks. Strong startup ecosystem.',
    regulatoryNotesEs: 'Gran centro fintech. Alta concentración de prestamistas digitales y neobancos. Fuerte ecosistema de startups.'
  },
  {
    name: 'Zapopan',
    slug: 'zapopan',
    state: 'Jalisco',
    region: 'Costa del Pacífico',
    population: '1.4M',
    description: 'Tech and business district of Guadalajara metro',
    descriptionEs: 'Distrito tecnológico y de negocios del área metropolitana de Guadalajara',
    avgLoanAmount: '$50,000 - $190,000 MXN',
    avgRate: '18% - 46% CAT',
    minLoanAmount: '$5,000 MXN',
    maxLoanAmount: '$450,000 MXN',
    typicalTermMonths: '12-48 meses',
    localEconomy: 'Tech parks, corporate offices, software development, manufacturing, higher education, and affluent residential areas.',
    localEconomyEs: 'Parques tecnológicos, oficinas corporativas, desarrollo de software, manufactura, educación superior y áreas residenciales prósperas.',
    nearbyCities: ['Guadalajara', 'Tlaquepaque', 'Tonalá', 'Tlajomulco', 'Ixtlahuacán'],
    topLenders: ['BBVA', 'Santander', 'Banorte', 'HSBC', 'ScotiaBank', 'Nu México', 'Konfío'],
    regulatoryNotes: 'High-income area with excellent banking access. Strong presence of private banking services.',
    regulatoryNotesEs: 'Área de altos ingresos con excelente acceso bancario. Fuerte presencia de servicios de banca privada.'
  },
  {
    name: 'Puerto Vallarta',
    slug: 'puerto-vallarta',
    state: 'Jalisco',
    region: 'Costa del Pacífico',
    population: '291,000',
    description: 'Major Pacific coast tourist destination',
    descriptionEs: 'Principal destino turístico de la costa del Pacífico',
    avgLoanAmount: '$35,000 - $150,000 MXN',
    avgRate: '21% - 50% CAT',
    minLoanAmount: '$5,000 MXN',
    maxLoanAmount: '$350,000 MXN',
    typicalTermMonths: '12-36 meses',
    localEconomy: 'Tourism industry (hotels, restaurants, entertainment), real estate, retirement destination, and seasonal employment.',
    localEconomyEs: 'Industria turística (hoteles, restaurantes, entretenimiento), bienes raíces, destino de jubilados y empleo estacional.',
    nearbyCities: ['Bucerías', 'Nuevo Vallarta', 'Sayulita', 'Guadalajara', 'Tepic'],
    topLenders: ['BBVA', 'Santander', 'BanCoppel', 'Azteca', 'Compartamos', 'Ve por Más'],
    regulatoryNotes: 'Seasonal income variations common. Some lenders offer tourism-worker specific programs.',
    regulatoryNotesEs: 'Variaciones de ingresos estacionales comunes. Algunos prestamistas ofrecen programas específicos para trabajadores del turismo.'
  },
  // Puebla
  {
    name: 'Puebla',
    slug: 'puebla',
    state: 'Puebla',
    region: 'México Central',
    population: '1.7M (3.2M metro)',
    description: 'Major automotive manufacturing center',
    descriptionEs: 'Gran centro de manufactura automotriz',
    avgLoanAmount: '$40,000 - $150,000 MXN',
    avgRate: '20% - 48% CAT',
    minLoanAmount: '$5,000 MXN',
    maxLoanAmount: '$400,000 MXN',
    typicalTermMonths: '12-36 meses',
    localEconomy: 'Automotive industry (VW plant), textiles, food processing, education (many universities), and colonial tourism.',
    localEconomyEs: 'Industria automotriz (planta VW), textiles, procesamiento de alimentos, educación (muchas universidades) y turismo colonial.',
    nearbyCities: ['Cholula', 'Cuautlancingo', 'San Andrés Cholula', 'Amozoc', 'Atlixco'],
    topLenders: ['BBVA', 'Banorte', 'Santander', 'HSBC', 'Azteca', 'Compartamos'],
    regulatoryNotes: 'Strong payroll lending due to automotive sector. Good mix of traditional and digital lenders.',
    regulatoryNotesEs: 'Fuerte préstamo de nómina debido al sector automotriz. Buena mezcla de prestamistas tradicionales y digitales.'
  },
  // Querétaro
  {
    name: 'Querétaro',
    slug: 'queretaro',
    state: 'Querétaro',
    region: 'Bajío',
    population: '1.0M',
    description: 'Fast-growing aerospace and automotive hub',
    descriptionEs: 'Centro aeroespacial y automotriz de rápido crecimiento',
    avgLoanAmount: '$45,000 - $170,000 MXN',
    avgRate: '19% - 47% CAT',
    minLoanAmount: '$5,000 MXN',
    maxLoanAmount: '$400,000 MXN',
    typicalTermMonths: '12-48 meses',
    localEconomy: 'Aerospace manufacturing, automotive industry, IT services, manufacturing, and logistics. Fastest-growing major city.',
    localEconomyEs: 'Manufactura aeroespacial, industria automotriz, servicios TI, manufactura y logística. Ciudad grande de mayor crecimiento.',
    nearbyCities: ['San Juan del Río', 'El Marqués', 'Corregidora', 'Guanajuato', 'San Miguel de Allende'],
    topLenders: ['BBVA', 'Santander', 'Banorte', 'HSBC', 'Hey Banco', 'Nu México'],
    regulatoryNotes: 'High-growth market with increasing banking competition. Strong employer-sponsored credit programs.',
    regulatoryNotesEs: 'Mercado de alto crecimiento con competencia bancaria creciente. Fuertes programas de crédito patrocinados por empleadores.'
  },
  // León, Guanajuato
  {
    name: 'León',
    slug: 'leon',
    state: 'Guanajuato',
    region: 'Bajío',
    population: '1.7M',
    description: 'Leather goods and footwear manufacturing capital',
    descriptionEs: 'Capital de manufactura de artículos de cuero y calzado',
    avgLoanAmount: '$35,000 - $140,000 MXN',
    avgRate: '20% - 49% CAT',
    minLoanAmount: '$5,000 MXN',
    maxLoanAmount: '$350,000 MXN',
    typicalTermMonths: '12-36 meses',
    localEconomy: 'Leather goods manufacturing, footwear industry, automotive parts, textiles, and SME-heavy economy.',
    localEconomyEs: 'Manufactura de artículos de cuero, industria del calzado, autopartes, textiles y economía con muchas PyMEs.',
    nearbyCities: ['Silao', 'San Francisco del Rincón', 'Lagos de Moreno', 'Guanajuato', 'Irapuato'],
    topLenders: ['Banorte', 'BBVA', 'BanBajío', 'Santander', 'Azteca', 'Compartamos'],
    regulatoryNotes: 'Strong presence of BanBajío (regional bank). Active SME lending market.',
    regulatoryNotesEs: 'Fuerte presencia de BanBajío (banco regional). Mercado activo de préstamos a PyMEs.'
  },
  // Yucatán Peninsula
  {
    name: 'Mérida',
    slug: 'merida',
    state: 'Yucatán',
    region: 'Península de Yucatán',
    population: '921,000 (1.3M metro)',
    description: 'Cultural capital of Yucatán with growing manufacturing',
    descriptionEs: 'Capital cultural de Yucatán con manufactura creciente',
    avgLoanAmount: '$40,000 - $150,000 MXN',
    avgRate: '20% - 48% CAT',
    minLoanAmount: '$5,000 MXN',
    maxLoanAmount: '$380,000 MXN',
    typicalTermMonths: '12-36 meses',
    localEconomy: 'Manufacturing (maquiladoras), tourism, colonial architecture destination, services, and retirement community.',
    localEconomyEs: 'Manufactura (maquiladoras), turismo, destino de arquitectura colonial, servicios y comunidad de jubilados.',
    nearbyCities: ['Progreso', 'Kanasín', 'Umán', 'Valladolid', 'Tizimín'],
    topLenders: ['BBVA', 'Banorte', 'Santander', 'BanCoppel', 'Azteca', 'Compartamos'],
    regulatoryNotes: 'Growing banking sector. Increasing fintech penetration. Some expat-focused financial services.',
    regulatoryNotesEs: 'Sector bancario en crecimiento. Penetración fintech en aumento. Algunos servicios financieros enfocados en expatriados.'
  },
  {
    name: 'Cancún',
    slug: 'cancun',
    state: 'Quintana Roo',
    region: 'Península de Yucatán',
    population: '888,000',
    description: 'Major international tourist destination',
    descriptionEs: 'Principal destino turístico internacional',
    avgLoanAmount: '$40,000 - $160,000 MXN',
    avgRate: '20% - 49% CAT',
    minLoanAmount: '$5,000 MXN',
    maxLoanAmount: '$400,000 MXN',
    typicalTermMonths: '12-36 meses',
    localEconomy: 'International tourism (Riviera Maya), hospitality industry, real estate, entertainment, and construction. Highly seasonal.',
    localEconomyEs: 'Turismo internacional (Riviera Maya), industria hotelera, bienes raíces, entretenimiento y construcción. Altamente estacional.',
    nearbyCities: ['Playa del Carmen', 'Tulum', 'Puerto Morelos', 'Cozumel', 'Chetumal'],
    topLenders: ['BBVA', 'Santander', 'Banorte', 'HSBC', 'BanCoppel', 'Azteca'],
    regulatoryNotes: 'International banks present due to tourism. Seasonal income considerations. Some USD-based lending available.',
    regulatoryNotesEs: 'Bancos internacionales presentes debido al turismo. Consideraciones de ingresos estacionales. Algunos préstamos en USD disponibles.'
  },
  {
    name: 'Playa del Carmen',
    slug: 'playa-del-carmen',
    state: 'Quintana Roo',
    region: 'Península de Yucatán',
    population: '330,000',
    description: 'Fast-growing Riviera Maya tourist center',
    descriptionEs: 'Centro turístico de la Riviera Maya de rápido crecimiento',
    avgLoanAmount: '$35,000 - $150,000 MXN',
    avgRate: '21% - 50% CAT',
    minLoanAmount: '$5,000 MXN',
    maxLoanAmount: '$380,000 MXN',
    typicalTermMonths: '12-36 meses',
    localEconomy: 'Tourism, hospitality, real estate development, international expat community, and beach resorts.',
    localEconomyEs: 'Turismo, hotelería, desarrollo inmobiliario, comunidad internacional de expatriados y resorts de playa.',
    nearbyCities: ['Cancún', 'Tulum', 'Cozumel', 'Puerto Aventuras', 'Akumal'],
    topLenders: ['BBVA', 'Santander', 'Banorte', 'BanCoppel', 'Compartamos'],
    regulatoryNotes: 'High expat population. Some international financial services. Tourism worker lending programs.',
    regulatoryNotesEs: 'Alta población de expatriados. Algunos servicios financieros internacionales. Programas de préstamo para trabajadores del turismo.'
  },
  // Additional Major Cities
  {
    name: 'San Luis Potosí',
    slug: 'san-luis-potosi',
    state: 'San Luis Potosí',
    region: 'Bajío',
    population: '911,000 (1.2M metro)',
    description: 'Industrial and automotive manufacturing center',
    descriptionEs: 'Centro industrial y de manufactura automotriz',
    avgLoanAmount: '$40,000 - $150,000 MXN',
    avgRate: '20% - 48% CAT',
    minLoanAmount: '$5,000 MXN',
    maxLoanAmount: '$380,000 MXN',
    typicalTermMonths: '12-36 meses',
    localEconomy: 'Automotive manufacturing (BMW, GM), mining, metalworking, logistics, and agriculture.',
    localEconomyEs: 'Manufactura automotriz (BMW, GM), minería, metalurgia, logística y agricultura.',
    nearbyCities: ['Soledad de Graciano Sánchez', 'Matehuala', 'Río Verde', 'Ciudad Valles', 'Querétaro'],
    topLenders: ['BBVA', 'Banorte', 'Santander', 'HSBC', 'Azteca', 'BanBajío'],
    regulatoryNotes: 'Strong automotive sector lending. Good banking infrastructure. Growing fintech adoption.',
    regulatoryNotesEs: 'Fuerte préstamo al sector automotriz. Buena infraestructura bancaria. Adopción creciente de fintech.'
  },
  {
    name: 'Aguascalientes',
    slug: 'aguascalientes',
    state: 'Aguascalientes',
    region: 'Bajío',
    population: '948,000',
    description: 'Automotive and electronics manufacturing hub',
    descriptionEs: 'Centro de manufactura automotriz y electrónica',
    avgLoanAmount: '$40,000 - $155,000 MXN',
    avgRate: '19% - 47% CAT',
    minLoanAmount: '$5,000 MXN',
    maxLoanAmount: '$400,000 MXN',
    typicalTermMonths: '12-36 meses',
    localEconomy: 'Automotive (Nissan), electronics, textiles, metal-mechanical industries, and services. Strong foreign investment.',
    localEconomyEs: 'Automotriz (Nissan), electrónica, textiles, industrias metalmecánicas y servicios. Fuerte inversión extranjera.',
    nearbyCities: ['Calvillo', 'Rincón de Romos', 'Jesús María', 'Pabellón de Arteaga', 'León'],
    topLenders: ['BBVA', 'Banorte', 'Santander', 'HSBC', 'BanBajío', 'Hey Banco'],
    regulatoryNotes: 'High manufacturing employment. Strong payroll lending. Excellent banking coverage.',
    regulatoryNotesEs: 'Alto empleo manufacturero. Fuerte préstamo de nómina. Excelente cobertura bancaria.'
  },
  {
    name: 'Hermosillo',
    slug: 'hermosillo',
    state: 'Sonora',
    region: 'Frontera Norte',
    population: '936,000',
    description: 'Capital of Sonora with automotive industry',
    descriptionEs: 'Capital de Sonora con industria automotriz',
    avgLoanAmount: '$40,000 - $150,000 MXN',
    avgRate: '20% - 48% CAT',
    minLoanAmount: '$5,000 MXN',
    maxLoanAmount: '$380,000 MXN',
    typicalTermMonths: '12-36 meses',
    localEconomy: 'Automotive manufacturing (Ford), aerospace, agriculture, mining, and services. Strong industrial base.',
    localEconomyEs: 'Manufactura automotriz (Ford), aeroespacial, agricultura, minería y servicios. Fuerte base industrial.',
    nearbyCities: ['Nogales', 'Guaymas', 'Ciudad Obregón', 'Caborca', 'Agua Prieta'],
    topLenders: ['BBVA', 'Banorte', 'Santander', 'BanCoppel', 'Azteca', 'Regional banks'],
    regulatoryNotes: 'Border region with good banking access. Some cross-border financial ties to Arizona.',
    regulatoryNotesEs: 'Región fronteriza con buen acceso bancario. Algunos lazos financieros transfronterizos con Arizona.'
  },
  {
    name: 'Chihuahua',
    slug: 'chihuahua',
    state: 'Chihuahua',
    region: 'Frontera Norte',
    population: '925,000',
    description: 'Industrial center with mining and manufacturing',
    descriptionEs: 'Centro industrial con minería y manufactura',
    avgLoanAmount: '$35,000 - $145,000 MXN',
    avgRate: '20% - 49% CAT',
    minLoanAmount: '$5,000 MXN',
    maxLoanAmount: '$360,000 MXN',
    typicalTermMonths: '12-36 meses',
    localEconomy: 'Maquiladora manufacturing, mining, livestock, forestry, and industrial economy. Large mining workforce.',
    localEconomyEs: 'Manufactura maquiladora, minería, ganadería, silvicultura y economía industrial. Gran fuerza laboral minera.',
    nearbyCities: ['Ciudad Juárez', 'Cuauhtémoc', 'Delicias', 'Parral', 'Nuevo Casas Grandes'],
    topLenders: ['BBVA', 'Banorte', 'Santander', 'Azteca', 'BanCoppel', 'Compartamos'],
    regulatoryNotes: 'Mining sector lending programs. Strong traditional banking presence.',
    regulatoryNotesEs: 'Programas de préstamo al sector minero. Fuerte presencia bancaria tradicional.'
  },
  {
    name: 'Cuernavaca',
    slug: 'cuernavaca',
    state: 'Morelos',
    region: 'México Central',
    population: '420,000',
    description: 'City of eternal spring, tourism and services',
    descriptionEs: 'Ciudad de la eterna primavera, turismo y servicios',
    avgLoanAmount: '$35,000 - $130,000 MXN',
    avgRate: '21% - 49% CAT',
    minLoanAmount: '$5,000 MXN',
    maxLoanAmount: '$330,000 MXN',
    typicalTermMonths: '12-36 meses',
    localEconomy: 'Tourism, weekend destination for Mexico City, education, healthcare, and retirement community.',
    localEconomyEs: 'Turismo, destino de fin de semana para la Ciudad de México, educación, salud y comunidad de jubilados.',
    nearbyCities: ['Jiutepec', 'Temixco', 'Cuautla', 'Yautepec', 'Ciudad de México'],
    topLenders: ['BBVA', 'Banorte', 'Santander', 'BanCoppel', 'Azteca', 'Compartamos'],
    regulatoryNotes: 'Good banking access. Close proximity to Mexico City financial services.',
    regulatoryNotesEs: 'Buen acceso bancario. Cercanía a los servicios financieros de la Ciudad de México.'
  },
  {
    name: 'Toluca',
    slug: 'toluca',
    state: 'Estado de México',
    region: 'Valle de México',
    population: '910,000',
    description: 'Industrial capital of Estado de México',
    descriptionEs: 'Capital industrial del Estado de México',
    avgLoanAmount: '$38,000 - $145,000 MXN',
    avgRate: '20% - 48% CAT',
    minLoanAmount: '$5,000 MXN',
    maxLoanAmount: '$370,000 MXN',
    typicalTermMonths: '12-36 meses',
    localEconomy: 'Automotive manufacturing, food processing, industrial parks, services, and state government.',
    localEconomyEs: 'Manufactura automotriz, procesamiento de alimentos, parques industriales, servicios y gobierno estatal.',
    nearbyCities: ['Metepec', 'San Mateo Atenco', 'Zinacantepec', 'Lerma', 'Ciudad de México'],
    topLenders: ['BBVA', 'Banorte', 'Santander', 'HSBC', 'Azteca', 'BanCoppel'],
    regulatoryNotes: 'Strong automotive sector lending. Part of extended Mexico City metro financial ecosystem.',
    regulatoryNotesEs: 'Fuerte préstamo al sector automotriz. Parte del ecosistema financiero extendido del área metropolitana de CDMX.'
  }
]

// Helper functions
export function getCityBySlug(slug: string): MexicoCity | undefined {
  return mexicoCities.find(c => c.slug === slug)
}

export function getCitiesByState(state: string): MexicoCity[] {
  return mexicoCities.filter(c => c.state === state)
}

export function getCitiesByRegion(region: string): MexicoCity[] {
  return mexicoCities.filter(c => c.region === region)
}

export function getTopCities(count: number = 10): MexicoCity[] {
  return mexicoCities.slice(0, count)
}
