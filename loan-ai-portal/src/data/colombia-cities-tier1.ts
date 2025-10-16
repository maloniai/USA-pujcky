/**
 * Colombia Cities - Tier 1 Expansion
 * Major Colombian cities with population 200K+ 
 * Phase 2B-Lite: 30 strategic cities for immediate SEO impact
 */

export interface ColombiaCityTier1 {
  name: string
  nameEs: string
  slug: string
  region: string
  regionSlug: string
  department: string
  departmentSlug: string
  population: string
  populationNumber: number // for sorting
  description: string
  descriptionEs: string
  avgIncome?: string
  topIndustries: string[]
  lendingProfile: string
  minLoanAmount: string
  maxLoanAmount: string
  avgRate: string
  lenderCount: number
  nearbyCities?: string[]
  topLoanTypesEs?: string[]
  faqs: Array<{
    question: string
    answer: string
  }>
  tier: 1
}

export const colombiaCitiesTier1: ColombiaCityTier1[] = [
  // TIER 1: Major Cities (200K+) - 30 Cities
  
  // ========================================
  // ANDEAN REGION - 14 CITIES
  // ========================================
  
  {
    name: 'Cúcuta',
    nameEs: 'Cúcuta',
    slug: 'cucuta',
    region: 'Andean Region',
    regionSlug: 'andina',
    department: 'Norte de Santander',
    departmentSlug: 'norte-de-santander',
    population: '650K+',
    populationNumber: 650000,
    description: 'Border city and economic hub of Norte de Santander',
    descriptionEs: 'Ciudad fronteriza y capital de Norte de Santander, Cúcuta es un importante centro comercial y financiero en la frontera con Venezuela. Con más de 650 mil habitantes, la ciudad cuenta con una economía diversificada que incluye comercio internacional, industria, servicios y agricultura. El sector financiero ofrece amplia disponibilidad de préstamos personales y microcréditos, con tasas competitivas para residentes locales y comerciantes transfronterizos.',
    avgIncome: '$2.400.000 COP/month',
    topIndustries: ['Comercio', 'Servicios', 'Manufactura', 'Agricultura', 'Transporte'],
    lendingProfile: 'Amplia oferta de bancos tradicionales y cooperativas. Presencia fuerte de microfinancieras debido al comercio fronterizo. Tasas competitivas para empleados formales.',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$30.000.000 COP',
    avgRate: '24% - 39% EA',
    lenderCount: 22,
    nearbyCities: ['villa-rosario', 'los-patios', 'pamplona'],
    topLoanTypesEs: ['Préstamos Personales', 'Microcréditos', 'Crédito Comercial'],
    faqs: [
      {
        question: '¿Qué documentos necesito para un préstamo en Cúcuta?',
        answer: 'En Cúcuta necesita: cédula de ciudadanía vigente, certificado de ingresos (desprendibles de nómina o declaración de renta si es independiente), extractos bancarios de los últimos 3 meses, certificado laboral o RUT para independientes, y referencias personales. Debido a la actividad comercial fronteriza, algunos prestamistas pueden solicitar comprobante de residencia adicional y verificación de origen de ingresos para cumplir con normativas de prevención de lavado de activos.'
      },
      {
        question: '¿Cuáles son las tasas de interés en Cúcuta?',
        answer: 'Las tasas en Cúcuta oscilan entre 24% y 39% EA, dependiendo del perfil crediticio y el tipo de préstamo. Los bancos tradicionales ofrecen desde 24% EA para clientes con excelente historial, mientras que cooperativas y microfinancieras pueden cobrar hasta 39% EA. El comercio fronterizo genera competencia, lo que beneficia a los solicitantes. Siempre compare tasas entre varios prestamistas vigilados por la Superfinanciera antes de decidir.'
      },
      {
        question: '¿Puedo obtener microcrédito para comercio en Cúcuta?',
        answer: 'Sí, Cúcuta cuenta con amplia oferta de microcrédito debido a su intensa actividad comercial fronteriza. Cooperativas como Coofinep, entidades especializadas en microfinanzas, y bancos con programas para emprendedores ofrecen préstamos desde $500.000 hasta $10.000.000 COP. Los requisitos suelen ser más flexibles que los préstamos tradicionales, incluyendo aceptación de vendedores informales con comprobación de ingresos alternativa. El desembolso puede ser en 3-7 días hábiles.'
      }
    ],
    tier: 1
  },

  {
    name: 'Ibagué',
    nameEs: 'Ibagué',
    slug: 'ibague',
    region: 'Andean Region',
    regionSlug: 'andina',
    department: 'Tolima',
    departmentSlug: 'tolima',
    population: '550K+',
    populationNumber: 550000,
    description: 'Musical capital of Colombia and economic center of Tolima',
    descriptionEs: 'Capital del Tolima y conocida como la "Capital Musical de Colombia", Ibagué es un importante centro económico y cultural de la región Andina. Con más de 550 mil habitantes, la ciudad se destaca por su producción agrícola, comercio, servicios y creciente sector turístico. El mercado financiero local ofrece diversas opciones de crédito personal, con presencia de bancos nacionales, cooperativas y entidades fintech que atienden tanto a empleados formales como a comerciantes y agricultores.',
    avgIncome: '$2.500.000 COP/month',
    topIndustries: ['Agricultura', 'Comercio', 'Servicios', 'Turismo', 'Educación'],
    lendingProfile: 'Buena disponibilidad de bancos tradicionales y cooperativas. Creciente adopción de préstamos digitales. Programas especializados para sector agrícola.',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$35.000.000 COP',
    avgRate: '23% - 37% EA',
    lenderCount: 20,
    nearbyCities: ['espinal', 'girardot', 'melgar'],
    topLoanTypesEs: ['Préstamos Personales', 'Crédito Agrícola', 'Libre Inversión'],
    faqs: [
      {
        question: '¿Qué tipos de préstamos son comunes en Ibagué?',
        answer: 'En Ibagué, los préstamos más solicitados son: préstamos personales de libre inversión (para cualquier propósito), créditos de consumo (compra de vehículos, electrodomésticos), microcréditos para pequeños negocios, y créditos agrícolas para productores del sector rural. Debido a la vocación agrícola del Tolima, varias entidades ofrecen líneas especiales con plazos adaptados a ciclos de cosecha. Los montos van desde $500.000 hasta $35.000.000 COP dependiendo de la capacidad de pago.'
      },
      {
        question: '¿Cómo es el proceso de aprobación en Ibagué?',
        answer: 'El proceso típico en Ibagué incluye: (1) Solicitud en línea o presencial con documentos básicos, (2) Verificación de identidad y consulta en Datacrédito, (3) Evaluación de capacidad de pago (ingresos vs. gastos), (4) Aprobación o negación en 24-48 horas para bancos digitales, 3-5 días para bancos tradicionales, (5) Firma de contrato y desembolso directo a cuenta bancaria. Los prestamistas verifican empleo y referencias. Un buen historial crediticio acelera el proceso considerablemente.'
      },
      {
        question: '¿Hay préstamos especiales para agricultores en Ibagué?',
        answer: 'Sí, entidades como Banco Agrario, cooperativas locales y Finagro ofrecen créditos especializados para agricultores del Tolima. Estos préstamos incluyen: capital de trabajo agrícola, compra de insumos, inversión en maquinaria, y mejoramiento de cultivos. Las tasas pueden ser subsidiadas (desde 15% EA) con plazos de hasta 5 años. Algunos programas aceptan garantías reales (tierras) o solidarias. El sector arrocero, cafetero y frutícola de Ibagué se beneficia especialmente de estas líneas.'
      }
    ],
    tier: 1
  },

  {
    name: 'Soacha',
    nameEs: 'Soacha',
    slug: 'soacha',
    region: 'Andean Region',
    regionSlug: 'andina',
    department: 'Cundinamarca',
    departmentSlug: 'cundinamarca',
    population: '530K+',
    populationNumber: 530000,
    description: 'Metropolitan city adjacent to Bogotá',
    descriptionEs: 'Segunda ciudad más poblada de Cundinamarca y parte del área metropolitana de Bogotá, Soacha cuenta con más de 530 mil habitantes. Su economía se basa en comercio, servicios, manufactura y construcción, con fuerte integración a la dinámica económica de la capital. El sector financiero ofrece amplia variedad de opciones de crédito, desde bancos tradicionales hasta fintech digitales, atendiendo principalmente a trabajadores formales e informales que laboran en Bogotá o en la zona industrial local.',
    avgIncome: '$2.600.000 COP/month',
    topIndustries: ['Comercio', 'Servicios', 'Manufactura', 'Construcción', 'Transporte'],
    lendingProfile: 'Alta competencia bancaria por proximidad a Bogotá. Fuerte presencia de fintech y préstamos digitales. Acceso a tasas similares a la capital.',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$40.000.000 COP',
    avgRate: '20% - 34% EA',
    lenderCount: 35,
    nearbyCities: ['bogota', 'mosquera', 'fusagasuga'],
    topLoanTypesEs: ['Préstamos Personales', 'Crédito de Consumo', 'Libre Inversión'],
    faqs: [
      {
        question: '¿Es diferente solicitar un préstamo en Soacha que en Bogotá?',
        answer: 'No hay diferencias significativas. Al ser parte del área metropolitana, los residentes de Soacha acceden a los mismos prestamistas y tasas que en Bogotá. Muchos bancos digitales y fintech atienden ambas ciudades sin distinción. Sin embargo, algunos prestamistas locales pueden requerir comprobante de residencia en Soacha. La ventaja es que puede comparar ofertas de entidades que operan en toda el área metropolitana, aumentando sus opciones de tasas y condiciones favorables.'
      },
      {
        question: '¿Qué tasa de interés puedo esperar en Soacha?',
        answer: 'Las tasas en Soacha van desde 20% hasta 34% EA, similares a Bogotá. Clientes con empleo formal, buen puntaje en Datacrédito y antigüedad laboral pueden acceder a tasas desde 20% EA en bancos tradicionales. Trabajadores informales o con historial crediticio limitado pueden encontrar tasas entre 28-34% EA en cooperativas y fintech. La alta competencia en el área metropolitana beneficia a los solicitantes. Compare al menos 3 ofertas antes de decidir.'
      },
      {
        question: '¿Puedo obtener préstamos en línea viviendo en Soacha?',
        answer: 'Absolutamente. Residentes de Soacha tienen pleno acceso a plataformas digitales como Lulú, Lineru, Destacame, Addi y bancos digitales como Nequi y Daviplata. El proceso es 100% en línea: solicitud desde su celular, carga de documentos digitales, aprobación en minutos u horas, y desembolso directo a su cuenta bancaria o billetera digital. No necesita ir a sucursales físicas. Solo requiere cédula, celular con internet y cuenta bancaria o billetera digital activa.'
      }
    ],
    tier: 1
  },

  {
    name: 'Pasto',
    nameEs: 'Pasto',
    slug: 'pasto',
    region: 'Andean Region',
    regionSlug: 'andina',
    department: 'Nariño',
    departmentSlug: 'narino',
    population: '450K+',
    populationNumber: 450000,
    description: 'Capital of Nariño, cultural and economic center of southern Colombia',
    descriptionEs: 'Capital de Nariño y ciudad más importante del sur andino colombiano, Pasto cuenta con más de 450 mil habitantes. Su economía se sustenta en comercio, agricultura, servicios públicos, educación y turismo cultural. La ciudad destaca por su producción artesanal, especialmente el barniz de Pasto. El mercado financiero local incluye bancos nacionales, cooperativas regionales y creciente presencia de fintech, ofreciendo créditos personales con tasas competitivas para empleados formales, comerciantes y artesanos.',
    avgIncome: '$2.300.000 COP/month',
    topIndustries: ['Comercio', 'Agricultura', 'Servicios', 'Artesanías', 'Turismo'],
    lendingProfile: 'Presencia moderada de bancos tradicionales. Fuerte rol de cooperativas regionales. Programas especiales para artesanos y pequeños comerciantes.',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$30.000.000 COP',
    avgRate: '23% - 37% EA',
    lenderCount: 20,
    nearbyCities: ['ipiales', 'tumaco', 'tuquerres'],
    topLoanTypesEs: ['Préstamos Personales', 'Microcréditos', 'Crédito Comercial'],
    faqs: [
      {
        question: '¿Qué prestamistas operan en Pasto?',
        answer: 'En Pasto operan bancos nacionales como Bancolombia, Banco de Bogotá, Davivienda, BBVA y Banco Agrario. También hay cooperativas regionales fuertes como Cooperativa Campoamor, Coopnarino y Confiar. Además, fintech digitales como Lineru y Lulú atienden la ciudad. Para artesanos, el Fondo Nacional de Garantías y cooperativas locales ofrecen microcréditos especializados. En total hay más de 20 entidades vigiladas por la Superfinanciera operando en la ciudad.'
      },
      {
        question: '¿Hay créditos especiales para artesanos en Pasto?',
        answer: 'Sí, Pasto siendo reconocida por su producción artesanal (barniz de Pasto, talla en madera), cuenta con programas especiales. Cooperativas locales, Bancóldex a través de intermediarios, y el Ministerio de Comercio ofrecen microcréditos para artesanos desde $500.000 hasta $10.000.000 COP. Las tasas pueden ser preferenciales (18-25% EA) con plazos hasta 36 meses. Estos créditos financian materia prima, herramientas, capital de trabajo y participación en ferias artesanales. Se acepta certificación de Artesanías de Colombia como respaldo.'
      },
      {
        question: '¿Cuánto demora un préstamo en Pasto?',
        answer: 'Los tiempos varían según el prestamista: Fintech digitales aprueban en 1-3 horas y desembolsan en 24 horas. Bancos tradicionales toman 3-5 días hábiles para aprobación y 2-3 días adicionales para desembolso. Cooperativas locales pueden demorar 5-7 días dependiendo del monto y verificaciones. Préstamos con garantía real (hipotecas) pueden tomar 2-3 semanas por estudio de títulos. Para agilizar, presente documentación completa desde el inicio y mantenga un buen historial crediticio.'
      }
    ],
    tier: 1
  },

  {
    name: 'Manizales',
    nameEs: 'Manizales',
    slug: 'manizales',
    region: 'Andean Region',
    regionSlug: 'andina',
    department: 'Caldas',
    departmentSlug: 'caldas',
    population: '410K+',
    populationNumber: 410000,
    description: 'Coffee cultural capital and university city',
    descriptionEs: 'Capital de Caldas y parte del Eje Cafetero, Manizales es una ciudad universitaria y cultural de más de 410 mil habitantes. Su economía se basa en servicios, educación superior, comercio, agroindustria cafetera y turismo. La ciudad cuenta con sólida infraestructura financiera, incluyendo bancos tradicionales, cooperativas cafeteras y plataformas digitales. Los prestamistas ofrecen productos especializados para caficultores, universitarios, profesionales y comerciantes, con tasas competitivas y plazos flexibles.',
    avgIncome: '$2.700.000 COP/month',
    topIndustries: ['Educación', 'Servicios', 'Café', 'Comercio', 'Turismo'],
    lendingProfile: 'Excelente disponibilidad bancaria. Cooperativas cafeteras con programas especiales. Alta penetración de préstamos educativos por población universitaria.',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$35.000.000 COP',
    avgRate: '22% - 36% EA',
    lenderCount: 22,
    nearbyCities: ['pereira', 'armenia', 'chinchina'],
    topLoanTypesEs: ['Préstamos Personales', 'Crédito Educativo', 'Crédito Cafetero'],
    faqs: [
      {
        question: '¿Hay préstamos educativos en Manizales?',
        answer: 'Sí, Manizales siendo ciudad universitaria (Universidad de Caldas, Universidad Nacional, Universidad de Manizales, entre otras) cuenta con amplia oferta de crédito educativo. ICETEX ofrece préstamos con tasas subsidiadas desde 0% EA para estratos 1-3. Bancos como Bancolombia y Davivienda tienen líneas educativas desde 12% EA. Cooperativas locales también financian matrículas y sostenimiento. Los montos cubren desde $1.000.000 hasta $20.000.000 por semestre académico, con pago diferido hasta graduación.'
      },
      {
        question: '¿Puedo obtener crédito para café en Manizales?',
        answer: 'Absolutamente. El Eje Cafetero cuenta con líneas especializadas para caficultores. Banco Agrario, cooperativas como Coocentral y Confamiliares, y el Fondo Nacional del Café ofrecen créditos para: renovación de cafetales, compra de insumos, modernización tecnológica, y capital de trabajo. Las tasas son preferenciales (15-25% EA) con plazos hasta 5 años ajustados a ciclos de cosecha. Se aceptan garantías reales o del Fondo Nacional de Garantías. Montos desde $2.000.000 hasta $50.000.000 COP.'
      },
      {
        question: '¿Qué cooperativas recomiendan en Manizales?',
        answer: 'Manizales tiene cooperativas sólidas y confiables: Coocentral (la más grande de Caldas), Confamiliares Caldas, Cooptenjo, y Cooperativa JFK. Todas están vigiladas por la Superfinanciera y ofrecen tasas competitivas (20-30% EA). Las cooperativas tienen ventajas como: requisitos menos estrictos que bancos, atención personalizada, plazos flexibles, y programas de educación financiera. Son especialmente recomendadas para independientes, pequeños comerciantes y quienes no califican en banca tradicional.'
      }
    ],
    tier: 1
  },

  {
    name: 'Neiva',
    nameEs: 'Neiva',
    slug: 'neiva',
    region: 'Andean Region',
    regionSlug: 'andina',
    department: 'Huila',
    departmentSlug: 'huila',
    population: '350K+',
    populationNumber: 350000,
    description: 'Capital of Huila and gateway to Colombian south',
    descriptionEs: 'Capital del Huila y puerta de entrada al sur colombiano, Neiva cuenta con más de 350 mil habitantes. Su economía se sustenta en comercio, servicios, agricultura (especialmente café y arroz), ganadería y turismo. La ciudad ha experimentado crecimiento económico constante en la última década. El sector financiero ofrece variedad de opciones crediticias, desde bancos tradicionales hasta cooperativas y fintech, con productos diseñados para empleados formales, agricultores y comerciantes locales.',
    avgIncome: '$2.400.000 COP/month',
    topIndustries: ['Comercio', 'Agricultura', 'Ganadería', 'Servicios', 'Turismo'],
    lendingProfile: 'Buena presencia de bancos nacionales y cooperativas. Programas especiales para sector agropecuario. Creciente adopción de préstamos digitales.',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$30.000.000 COP',
    avgRate: '23% - 38% EA',
    lenderCount: 18,
    nearbyCities: ['garzon', 'pitalito', 'la-plata'],
    topLoanTypesEs: ['Préstamos Personales', 'Crédito Agropecuario', 'Libre Inversión'],
    faqs: [
      {
        question: '¿Qué documentos piden para préstamos en Neiva?',
        answer: 'En Neiva los documentos estándar son: cédula de ciudadanía vigente, certificado de ingresos (desprendibles de nómina para empleados, declaración de renta o certificado de contador para independientes), extractos bancarios de últimos 3 meses, certificado laboral con antigüedad y salario, referencias personales (2-3 contactos) y servicios públicos recientes. Para créditos agropecuarios pueden solicitar: certificado de tradición de tierras, registro de producción, o certificación de asociación ganadera/cafetera.'
      },
      {
        question: '¿Hay crédito para ganaderos en Neiva?',
        answer: 'Sí, el Huila siendo región ganadera importante cuenta con líneas especializadas. Banco Agrario, Bancolombia Agropecuario, cooperativas como Utrahuilca y Fedegan a través de Finagro ofrecen créditos para: compra de ganado, mejoramiento genético, infraestructura (cercas, establos), pastos mejorados, y capital de trabajo. Las tasas van desde 16% hasta 28% EA dependiendo del monto y garantías. Plazos hasta 5 años. Se acepta ganado como garantía o garantías del FNA.'
      },
      {
        question: '¿Cuáles son las tasas promedio en Neiva?',
        answer: 'Las tasas en Neiva oscilan entre 23% y 38% EA. Bancos tradicionales ofrecen desde 23% EA para empleados formales con buen historial crediticio. Cooperativas locales cobran entre 25-32% EA. Fintech digitales pueden llegar hasta 36-38% EA pero con aprobación rápida. Créditos agropecuarios subsidiados tienen tasas desde 16% EA. La tasa depende de: perfil crediticio, tipo de préstamo, monto solicitado, plazo de pago, y garantías ofrecidas. Siempre compare múltiples ofertas.'
      }
    ],
    tier: 1
  },

  {
    name: 'Armenia',
    nameEs: 'Armenia',
    slug: 'armenia',
    region: 'Andean Region',
    regionSlug: 'andina',
    department: 'Quindío',
    departmentSlug: 'quindio',
    population: '320K+',
    populationNumber: 320000,
    description: 'Heart of the Coffee Cultural Landscape',
    descriptionEs: 'Capital del Quindío y corazón del Paisaje Cultural Cafetero Patrimonio de la Humanidad, Armenia cuenta con más de 320 mil habitantes. Su economía se basa en turismo cafetero, agricultura, comercio, servicios y agroindustria. La ciudad es centro logístico entre Bogotá, Medellín y Cali. El sector financiero ofrece amplia variedad de opciones de crédito, con presencia de bancos nacionales, cooperativas cafeteras tradicionales y nuevas plataformas fintech atendiendo a caficultores, comerciantes y profesionales del sector turístico.',
    avgIncome: '$2.500.000 COP/month',
    topIndustries: ['Turismo', 'Café', 'Comercio', 'Servicios', 'Agroindustria'],
    lendingProfile: 'Excelente infraestructura bancaria. Cooperativas cafeteras consolidadas. Préstamos especializados para turismo y café. Alta competencia beneficia tasas.',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$35.000.000 COP',
    avgRate: '22% - 36% EA',
    lenderCount: 20,
    nearbyCities: ['calarca', 'montenegro', 'circasia'],
    topLoanTypesEs: ['Préstamos Personales', 'Crédito Cafetero', 'Crédito Turismo'],
    faqs: [
      {
        question: '¿Hay préstamos especiales para el sector turístico en Armenia?',
        answer: 'Sí, Armenia siendo epicentro del turismo cafetero cuenta con líneas especializadas. Bancóldex a través de bancos intermediarios, Fondo Nacional de Turismo (Fontur), y cooperativas locales ofrecen créditos para: hoteles, fincas cafeteras turísticas, restaurantes, agencias de viajes, y transporte turístico. Tasas preferenciales desde 18% EA, plazos hasta 7 años, montos desde $5.000.000 hasta $200.000.000 COP. Se financian inversiones en infraestructura, equipamiento, capital de trabajo y certificaciones de calidad turística.'
      },
      {
        question: '¿Qué cooperativas son confiables en Armenia?',
        answer: 'Armenia tiene cooperativas sólidas con décadas de experiencia: Confiar (una de las más grandes del país), Cootrafa, Coomeva, Cooproquinal, y Cooperativa Cooservicios. Todas vigiladas por la Superfinanciera. Ofrecen tasas desde 22% EA, requisitos flexibles, atención personalizada y programas especiales para asociados. Confiar destaca por su red regional y productos innovadores. Son excelente opción para independientes, pequeños empresarios y quienes buscan alternativa a la banca tradicional.'
      },
      {
        question: '¿Cuánto puedo prestar en Armenia?',
        answer: 'Los montos en Armenia van desde $500.000 hasta $35.000.000 COP dependiendo del prestamista y su perfil. Fintech digitales prestan $500.000 a $3.000.000 COP con aprobación rápida. Bancos tradicionales ofrecen hasta $35.000.000 COP para empleados formales con buena capacidad de pago. Cooperativas manejan rangos intermedios de $1.000.000 a $20.000.000 COP. Para montos mayores ($50M+) se requieren garantías reales o hipotecarias. El monto depende de sus ingresos mensuales (máximo 40% para cuota).'
      }
    ],
    tier: 1
  },

  {
    name: 'Tunja',
    nameEs: 'Tunja',
    slug: 'tunja',
    region: 'Andean Region',
    regionSlug: 'andina',
    department: 'Boyacá',
    departmentSlug: 'boyaca',
    population: '215K+',
    populationNumber: 215000,
    description: 'Historic colonial city and capital of Boyacá',
    descriptionEs: 'Capital de Boyacá y ciudad colonial histórica, Tunja cuenta con más de 215 mil habitantes. Su economía se basa en comercio, servicios públicos, educación superior, agricultura y turismo histórico. La ciudad destaca por su patrimonio arquitectónico y su rol como centro administrativo departamental. El mercado financiero local incluye bancos nacionales, cooperativas regionales y plataformas digitales emergentes, ofreciendo créditos personales para empleados públicos, comerciantes, universitarios y pequeños empresarios.',
    avgIncome: '$2.300.000 COP/month',
    topIndustries: ['Servicios Públicos', 'Educación', 'Comercio', 'Agricultura', 'Turismo'],
    lendingProfile: 'Presencia moderada de bancos tradicionales. Cooperativas regionales activas. Programas especiales para empleados públicos que son mayoría en la ciudad.',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$30.000.000 COP',
    avgRate: '23% - 38% EA',
    lenderCount: 18,
    nearbyCities: ['duitama', 'sogamoso', 'paipa'],
    topLoanTypesEs: ['Préstamos Personales', 'Crédito de Libranza', 'Libre Inversión'],
    faqs: [
      {
        question: '¿Hay préstamos especiales para empleados públicos en Tunja?',
        answer: 'Sí, Tunja siendo capital departamental con alta concentración de empleados públicos cuenta con crédito de libranza especializado. Este descuenta la cuota directamente de nómina, ofreciendo tasas preferenciales desde 18% EA. Bancos como Banco de Bogotá, BBVA, Davivienda y cooperativas como Cooservicios atienden empleados de Gobernación, alcaldías, universidades públicas, salud y educación. Montos hasta $50.000.000 COP, plazos hasta 72 meses, aprobación en 2-3 días, y no requiere codeudor por la garantía de nómina.'
      },
      {
        question: '¿Qué prestamistas operan en Tunja?',
        answer: 'En Tunja operan bancos como Bancolombia, Banco de Bogotá, Davivienda, BBVA, Banco Agrario y Banco Popular. Cooperativas activas incluyen Cooservicios Boyacá, Crediservir, y Coomultrasan. También hay acceso a fintech digitales como Lineru, Lulú y RappiPay. En total más de 18 entidades vigiladas por Superfinanciera. Los empleados públicos tienen ventaja por programas especiales de libranza. Los comerciantes pueden acceder a cooperativas con requisitos flexibles.'
      },
      {
        question: '¿Cuánto demora aprobar un préstamo en Tunja?',
        answer: 'Los tiempos en Tunja son: Préstamos de libranza para empleados públicos se aprueban en 2-3 días hábiles y desembolsan en 5-7 días. Fintech digitales aprueban en 1-6 horas y desembolsan en 24-48 horas. Bancos tradicionales toman 3-5 días para aprobación y 2-3 días adicionales para desembolso. Cooperativas pueden demorar 5-10 días dependiendo del monto. Para agilizar: presente documentación completa, tenga cuenta bancaria activa y mantenga buen historial en Datacrédito.'
      }
    ],
    tier: 1
  },

  {
    name: 'Floridablanca',
    nameEs: 'Floridablanca',
    slug: 'floridablanca',
    region: 'Andean Region',
    regionSlug: 'andina',
    department: 'Santander',
    departmentSlug: 'santander',
    population: '270K+',
    populationNumber: 270000,
    description: 'Second largest city in Santander, part of Bucaramanga metropolitan area',
    descriptionEs: 'Segunda ciudad más poblada de Santander y parte del área metropolitana de Bucaramanga, Floridablanca cuenta con más de 270 mil habitantes. Su economía se basa en manufactura, comercio, servicios, construcción y turismo religioso (Basílica Menor). La ciudad es importante centro industrial y comercial del nororiente colombiano. El sector financiero ofrece amplia disponibilidad de crédito, con presencia de bancos nacionales, cooperativas santandereanas y fintech, atendiendo a empleados formales, comerciantes e industriales.',
    avgIncome: '$2.600.000 COP/month',
    topIndustries: ['Manufactura', 'Comercio', 'Servicios', 'Construcción', 'Turismo'],
    lendingProfile: 'Alta competencia bancaria por proximidad a Bucaramanga. Fuerte presencia de cooperativas santandereanas. Tasas competitivas similares a la capital departamental.',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$35.000.000 COP',
    avgRate: '22% - 36% EA',
    lenderCount: 22,
    nearbyCities: ['bucaramanga', 'giron', 'piedecuesta'],
    topLoanTypesEs: ['Préstamos Personales', 'Crédito de Consumo', 'Libre Inversión'],
    faqs: [
      {
        question: '¿Es mejor pedir préstamo en Floridablanca o Bucaramanga?',
        answer: 'No hay diferencia significativa. Al ser ciudades contiguas del área metropolitana, los prestamistas ofrecen las mismas condiciones en ambas. Muchos bancos y cooperativas tienen sucursales en ambas ciudades. Los préstamos digitales no diferencian por ubicación. La ventaja de Floridablanca es que puede comparar ofertas de entidades en toda el área metropolitana, aumentando opciones. Algunos residentes prefieren cooperativas santandereanas tradicionales con sede en Floridablanca por atención personalizada.'
      },
      {
        question: '¿Qué cooperativas son recomendables en Floridablanca?',
        answer: 'Floridablanca y Santander cuentan con cooperativas sólidas: Cooperativa Financiera de Antioquia (CFA) con fuerte presencia regional, Cootradian, Coopcentral, Cooemfleo (empleados públicos), y Cooingenar. Todas vigiladas por Superfinanciera. Ofrecen tasas desde 22% EA, requisitos menos estrictos que bancos, plazos flexibles hasta 60 meses, y atención personalizada. Son excelente opción para independientes, pequeños comerciantes y quienes prefieren trato directo versus portales digitales.'
      },
      {
        question: '¿Puedo obtener préstamos en línea en Floridablanca?',
        answer: 'Sí, Floridablanca tiene pleno acceso a préstamos digitales. Fintech como Lineru, Lulú, RappiPay, Destacame, Addi y bancos digitales como Nequi, Daviplata y Banco de Bogotá Digital operan normalmente. El proceso es 100% en línea: solicitud desde celular, carga de documentos digitales, aprobación en minutos/horas, y desembolso a cuenta bancaria. Montos desde $500.000 hasta $3.000.000 en fintech, hasta $10.000.000 en bancos digitales. Requiere cédula, celular, conexión a internet y cuenta bancaria activa.'
      }
    ],
    tier: 1
  },

  {
    name: 'Envigado',
    nameEs: 'Envigado',
    slug: 'envigado',
    region: 'Andean Region',
    regionSlug: 'andina',
    department: 'Antioquia',
    departmentSlug: 'antioquia',
    population: '240K+',
    populationNumber: 240000,
    description: 'Prosperous city in Medellín metropolitan area',
    descriptionEs: 'Municipio del Valle de Aburrá con más de 240 mil habitantes, Envigado es reconocida por su alta calidad de vida y próspera economía. Su base económica incluye servicios financieros, comercio, tecnología, educación superior y sector inmobiliario. La ciudad forma parte del área metropolitana de Medellín, integrándose a su dinámica económica y financiera. Los residentes acceden a amplia oferta crediticia, desde bancos tradicionales hasta fintech innovadoras, con tasas competitivas y productos sofisticados para un mercado de alto poder adquisitivo.',
    avgIncome: '$3.500.000 COP/month',
    topIndustries: ['Servicios Financieros', 'Comercio', 'Tecnología', 'Educación', 'Construcción'],
    lendingProfile: 'Excelente disponibilidad bancaria por proximidad a Medellín. Alta penetración de fintech. Productos financieros sofisticados para población de ingresos medios-altos.',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$50.000.000 COP',
    avgRate: '19% - 32% EA',
    lenderCount: 40,
    nearbyCities: ['medellin', 'sabaneta', 'itagui'],
    topLoanTypesEs: ['Préstamos Personales', 'Crédito Hipotecario', 'Libre Inversión'],
    faqs: [
      {
        question: '¿Qué ventajas tiene solicitar préstamos en Envigado?',
        answer: 'Envigado ofrece varias ventajas: (1) Acceso a toda la oferta del Valle de Aburrá incluyendo Medellín, (2) Alta competencia bancaria genera tasas desde 19% EA para buenos perfiles, (3) Fuerte presencia de fintech innovadoras con procesos ágiles, (4) Banca privada y productos premium por alto poder adquisitivo local, (5) Excelente infraestructura de corresponsales bancarios, (6) Comunidad fintech activa con eventos y educación financiera. Los residentes tienen acceso a las mejores condiciones del país.'
      },
      {
        question: '¿Cuáles son las tasas de interés en Envigado?',
        answer: 'Las tasas en Envigado van desde 19% hasta 32% EA, entre las más competitivas de Colombia. Clientes con empleo formal estable, buen puntaje Datacrédito (750+), ingresos altos ($4M+ mensuales) y antigüedad laboral pueden acceder a tasas desde 19% EA en bancos tradicionales. Profesionales independientes y comerciantes encuentran tasas 22-28% EA en cooperativas y fintech. La alta competencia en el Valle de Aburrá presiona tasas a la baja. Compare mínimo 3 ofertas antes de decidir.'
      },
      {
        question: '¿Hay préstamos hipotecarios en Envigado?',
        answer: 'Sí, Envigado tiene activo mercado hipotecario por su desarrollo inmobiliario. Bancos como Bancolombia, Davivienda, Banco de Bogotá, BBVA y Banco AV Villas ofrecen créditos hipotecarios desde 11% EA. Montos hasta $500.000.000 COP (70-80% del valor del inmueble), plazos hasta 20 años, seguros incluidos. Requisitos: ingresos comprobables ($4M+ mensuales), cuota máximo 30% de ingresos, cuota inicial 20-30%, buen historial crediticio. Leasing habitacional también disponible para ahorro tributario.'
      }
    ],
    tier: 1
  },

  {
    name: 'Itagüí',
    nameEs: 'Itagüí',
    slug: 'itagui',
    region: 'Andean Region',
    regionSlug: 'andina',
    department: 'Antioquia',
    departmentSlug: 'antioquia',
    population: '280K+',
    populationNumber: 280000,
    description: 'Industrial city in Medellín metropolitan area',
    descriptionEs: 'Municipio del sur del Valle de Aburrá con más de 280 mil habitantes, Itagüí es importante centro industrial y comercial de Antioquia. Su economía se fundamenta en manufactura (especialmente textiles, confecciones y metalmecánica), comercio minorista y mayorista, servicios y construcción. La ciudad alberga zonas francas y parques industriales. El sector financiero ofrece variedad de opciones crediticias, desde bancos tradicionales hasta cooperativas y fintech, con productos diseñados para empleados industriales, comerciantes y emprendedores manufactureros.',
    avgIncome: '$2.800.000 COP/month',
    topIndustries: ['Manufactura', 'Textiles', 'Comercio', 'Metalmecánica', 'Servicios'],
    lendingProfile: 'Alta disponibilidad bancaria por integración con Medellín. Productos especializados para sector industrial. Cooperativas fuertes con enfoque en trabajadores manufactureros.',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$40.000.000 COP',
    avgRate: '20% - 33% EA',
    lenderCount: 38,
    nearbyCities: ['envigado', 'sabaneta', 'la-estrella'],
    topLoanTypesEs: ['Préstamos Personales', 'Crédito Comercial', 'Libre Inversión'],
    faqs: [
      {
        question: '¿Hay créditos especiales para empresarios en Itagüí?',
        answer: 'Sí, Itagüí siendo polo industrial cuenta con líneas empresariales especializadas. Bancóldex a través de bancos intermediarios, Banco de Comercio Exterior, cooperativas como Confiar, y entidades de microfinanzas ofrecen: capital de trabajo, compra de maquinaria, modernización tecnológica, expansión de negocio, y financiación de exportaciones. Tasas desde 16% EA para PYMES formales, plazos hasta 5 años, montos desde $10.000.000 hasta $500.000.000 COP. Programas especiales para textiles, confecciones y metalmecánica.'
      },
      {
        question: '¿Qué prestamistas recomiendan para trabajadores industriales en Itagüí?',
        answer: 'Para trabajadores de industria en Itagüí recomendamos: Cooperativa Confiar (líder regional con productos diseñados para empleados industriales), Bancolombia (líneas de libranza para nómina), Cotrafa, CFA, y Banco AV Villas. Estas entidades ofrecen: tasas preferenciales desde 20% EA, descuento directo por nómina, seguros incluidos, y montos hasta $40.000.000 COP. Muchas empresas textiles y metalmecánicas tienen convenios que aceleran aprobaciones. Requiere desprendible de nómina y antigüedad mínima 3 meses.'
      },
      {
        question: '¿Cuánto puedo pedir prestado en Itagüí?',
        answer: 'Los montos en Itagüí van desde $500.000 hasta $40.000.000 COP según el prestamista y su perfil. Fintech digitales prestan $500.000 a $3.000.000 con aprobación rápida. Bancos ofrecen hasta $40.000.000 para empleados formales con buenos ingresos. Cooperativas manejan rangos de $1.000.000 a $25.000.000. Para créditos empresariales los montos pueden superar $100.000.000 con garantías. El monto aprobado depende de sus ingresos mensuales (la cuota no debe superar 40% de ingresos netos).'
      }
    ],
    tier: 1
  },

  {
    name: 'Bello',
    nameEs: 'Bello',
    slug: 'bello',
    region: 'Andean Region',
    regionSlug: 'andina',
    department: 'Antioquia',
    departmentSlug: 'antioquia',
    population: '500K+',
    populationNumber: 500000,
    description: 'Second largest city in Antioquia, industrial and residential hub',
    descriptionEs: 'Segunda ciudad más poblada de Antioquia con más de 500 mil habitantes, Bello forma parte del área metropolitana del Valle de Aburrá. Su economía se fundamenta en manufactura (especialmente textiles y confecciones), comercio, servicios y construcción. La ciudad ha experimentado importante crecimiento inmobiliario y comercial en las últimas décadas. El sector financiero ofrece amplia disponibilidad de crédito, con bancos tradicionales, cooperativas y fintech atendiendo a trabajadores industriales, comerciantes y profesionales.',
    avgIncome: '$2.700.000 COP/month',
    topIndustries: ['Manufactura', 'Textiles', 'Comercio', 'Construcción', 'Servicios'],
    lendingProfile: 'Alta competencia bancaria por proximidad a Medellín. Fuerte presencia de cooperativas para trabajadores industriales. Productos de libranza populares.',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$40.000.000 COP',
    avgRate: '20% - 33% EA',
    lenderCount: 38,
    nearbyCities: ['medellin', 'copacabana', 'girardota'],
    topLoanTypesEs: ['Préstamos Personales', 'Crédito de Libranza', 'Libre Inversión'],
    faqs: [
      {
        question: '¿Qué ventajas tiene solicitar préstamos en Bello?',
        answer: 'Bello ofrece todas las ventajas del Valle de Aburrá: acceso a más de 38 prestamistas, tasas competitivas desde 20% EA, fuerte presencia de cooperativas especializadas en trabajadores textileros y manufactureros, programas de libranza para empleados formales, y excelente infraestructura de sucursales y corresponsales. La alta concentración industrial genera productos financieros diseñados específicamente para este sector. Muchas empresas locales tienen convenios bancarios que aceleran aprobaciones.'
      },
      {
        question: '¿Puedo obtener crédito de libranza en Bello?',
        answer: 'Sí, Bello tiene excelente oferta de crédito de libranza por su alta concentración de empleados formales en industria textil, manufactura y servicios. Bancos como Bancolombia, Davivienda, BBVA y cooperativas como Confiar, CFA y Cotrafa ofrecen descuento directo de nómina con tasas desde 18% EA, montos hasta $50.000.000 COP, plazos hasta 72 meses, y aprobación en 2-3 días. No requiere codeudor. Muchas empresas textileras tienen convenios preestablecidos que simplifican el proceso.'
      },
      {
        question: '¿Qué cooperativas son recomendables en Bello?',
        answer: 'Bello cuenta con cooperativas sólidas: Confiar (líder regional con más de 500 oficinas), CFA (Cooperativa Financiera de Antioquia), Cotrafa (especializada en trabajadores), Cootradian, y Coopcentral. Todas vigiladas por Superfinanciera. Ofrecen tasas desde 20% EA, requisitos menos estrictos que bancos tradicionales, plazos flexibles, y programas de educación financiera. Son especialmente recomendadas para trabajadores textileros, independientes, y pequeños comerciantes que buscan atención personalizada y cuotas accesibles.'
      }
    ],
    tier: 1
  },

  {
    name: 'Valledupar',
    nameEs: 'Valledupar',
    slug: 'valledupar',
    region: 'Caribbean Region',
    regionSlug: 'caribe',
    department: 'Cesar',
    departmentSlug: 'cesar',
    population: '480K+',
    populationNumber: 480000,
    description: 'Capital of Cesar, vallenato music capital',
    descriptionEs: 'Capital del Cesar y cuna del vallenato, Valledupar cuenta con más de 480 mil habitantes. Su economía se sustenta en agricultura (especialmente palma de aceite y algodón), ganadería, comercio, servicios y turismo cultural. La ciudad es importante centro económico del norte colombiano. El sector financiero ofrece variedad de opciones crediticias, desde bancos tradicionales hasta cooperativas y fintech, con productos diseñados para agricultores, ganaderos, comerciantes y empleados del sector público.',
    avgIncome: '$2.400.000 COP/month',
    topIndustries: ['Agricultura', 'Ganadería', 'Comercio', 'Servicios', 'Turismo'],
    lendingProfile: 'Buena presencia bancaria. Cooperativas regionales consolidadas. Líneas especializadas para sector agropecuario. Programas especiales para palmicultores.',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$35.000.000 COP',
    avgRate: '23% - 38% EA',
    lenderCount: 20,
    nearbyCities: ['codazzi', 'aguachica', 'bosconia'],
    topLoanTypesEs: ['Préstamos Personales', 'Crédito Agropecuario', 'Microcréditos'],
    faqs: [
      {
        question: '¿Hay créditos para palmicultores en Valledupar?',
        answer: 'Sí, Valledupar siendo región palmera líder cuenta con líneas especializadas. Banco Agrario, Finagro, Bancóldex a través de intermediarios, y cooperativas como Cooagropal ofrecen créditos para: siembra de palma, mantenimiento de cultivos, compra de maquinaria, infraestructura de procesamiento, y capital de trabajo. Tasas preferenciales desde 15% EA con subsidios, plazos hasta 12 años ajustados a ciclos productivos, montos desde $10.000.000 hasta $500.000.000 COP. Se aceptan garantías reales o del FNA.'
      },
      {
        question: '¿Qué documentos piden para préstamos en Valledupar?',
        answer: 'En Valledupar los requisitos estándar son: cédula vigente, certificado de ingresos (desprendibles para empleados, declaración de renta para independientes), extractos bancarios 3 meses, certificado laboral con antigüedad, referencias personales, y servicios públicos recientes. Para créditos agropecuarios solicitan: certificado de tradición de tierras, matrícula mercantil si aplica, certificación de cultivos o cabezas de ganado, y plan de inversión. Palmicultores necesitan certificación de Fedepalma.'
      },
      {
        question: '¿Cuáles son las tasas promedio en Valledupar?',
        answer: 'Las tasas en Valledupar van desde 23% hasta 38% EA. Bancos tradicionales ofrecen desde 23% EA para empleados formales con buen historial. Cooperativas cobran 25-32% EA. Créditos agropecuarios subsidiados tienen tasas desde 15% EA. Microcréditos para comerciantes pueden llegar a 36-38% EA. La tasa depende de perfil crediticio, tipo de préstamo, monto, plazo y garantías. Empleados públicos pueden acceder a libranza con tasas desde 18% EA. Siempre compare múltiples ofertas.'
      }
    ],
    tier: 1
  },

  {
    name: 'Popayán',
    nameEs: 'Popayán',
    slug: 'popayan',
    region: 'Pacific Region',
    regionSlug: 'pacifico',
    department: 'Cauca',
    departmentSlug: 'cauca',
    population: '310K+',
    populationNumber: 310000,
    description: 'White City, colonial jewel of southwestern Colombia',
    descriptionEs: 'Capital del Cauca y conocida como la "Ciudad Blanca" por su arquitectura colonial, Popayán cuenta con más de 310 mil habitantes. Su economía se basa en servicios públicos, educación superior, comercio, agricultura y turismo religioso. La ciudad es importante centro cultural y administrativo del suroccidente colombiano. El mercado financiero local incluye bancos nacionales, cooperativas regionales y plataformas digitales, ofreciendo créditos personales para empleados públicos, comerciantes, universitarios y agricultores.',
    avgIncome: '$2.300.000 COP/month',
    topIndustries: ['Servicios Públicos', 'Educación', 'Comercio', 'Agricultura', 'Turismo'],
    lendingProfile: 'Presencia moderada de bancos tradicionales. Cooperativas regionales consolidadas. Alta demanda de crédito educativo por población universitaria.',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$30.000.000 COP',
    avgRate: '24% - 38% EA',
    lenderCount: 16,
    nearbyCities: ['santander-de-quilichao', 'piendamo', 'timbio'],
    topLoanTypesEs: ['Préstamos Personales', 'Crédito de Libranza', 'Crédito Educativo'],
    faqs: [
      {
        question: '¿Hay préstamos educativos en Popayán?',
        answer: 'Sí, Popayán siendo ciudad universitaria (Universidad del Cauca, Universidad Cooperativa, Unicomfacauca) cuenta con amplia oferta educativa. ICETEX ofrece préstamos con tasas subsidiadas desde 0% EA para estratos 1-3. Bancos como Bancolombia, Davivienda y Banco de Bogotá tienen líneas desde 12% EA. Cooperativas locales como Cooperativa Financiera del Cauca también financian estudios. Montos cubren matrícula, sostenimiento y materiales desde $1.000.000 hasta $15.000.000 por semestre, con pago diferido hasta graduación.'
      },
      {
        question: '¿Qué prestamistas operan en Popayán?',
        answer: 'En Popayán operan bancos como Bancolombia, Banco de Bogotá, Davivienda, BBVA, Banco Agrario y Banco Popular. Cooperativas regionales incluyen Cooperativa Financiera del Cauca, Confiar, y Coomeva. También hay acceso a fintech digitales como Lineru y Lulú. En total más de 16 entidades vigiladas por Superfinanciera. Los empleados públicos (alta proporción en Popayán) tienen ventaja con programas de libranza. Comerciantes y agricultores pueden acceder a cooperativas con requisitos flexibles.'
      },
      {
        question: '¿Cuánto demora aprobar un préstamo en Popayán?',
        answer: 'Los tiempos típicos en Popayán son: Libranza para empleados públicos se aprueba en 2-4 días y desembolsa en 5-7 días. Fintech digitales aprueban en 2-6 horas y desembolsan en 24-48 horas. Bancos tradicionales toman 3-5 días para aprobación más 2-3 días para desembolso. Cooperativas pueden demorar 5-10 días. Créditos educativos ICETEX toman 15-20 días por verificaciones académicas. Para agilizar: presente documentación completa, tenga cuenta bancaria activa y buen historial en Datacrédito.'
      }
    ],
    tier: 1
  },

  // ========================================
  // CARIBBEAN REGION - 8 CITIES
  // ========================================

  {
    name: 'Montería',
    nameEs: 'Montería',
    slug: 'monteria',
    region: 'Caribbean Region',
    regionSlug: 'caribe',
    department: 'Córdoba',
    departmentSlug: 'cordoba',
    population: '480K+',
    populationNumber: 480000,
    description: 'Capital of Córdoba, cattle ranching and agricultural hub',
    descriptionEs: 'Capital de Córdoba con más de 480 mil habitantes, Montería es importante centro ganadero y agrícola del Caribe colombiano. Su economía se sustenta en ganadería, agricultura (arroz, maíz, algodón), comercio, servicios y agroindustria. La ciudad ha experimentado significativo crecimiento económico y urbano en la última década. El sector financiero ofrece variedad de opciones crediticias, desde bancos tradicionales hasta cooperativas ganaderas y fintech, con productos especializados para ganaderos, agricultores, comerciantes y empleados formales.',
    avgIncome: '$2.500.000 COP/month',
    topIndustries: ['Ganadería', 'Agricultura', 'Comercio', 'Agroindustria', 'Servicios'],
    lendingProfile: 'Buena infraestructura bancaria. Cooperativas ganaderas tradicionales. Líneas especializadas para sector agropecuario. Creciente presencia fintech.',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$35.000.000 COP',
    avgRate: '23% - 37% EA',
    lenderCount: 22,
    nearbyCities: ['cerete', 'lorica', 'planeta-rica'],
    topLoanTypesEs: ['Préstamos Personales', 'Crédito Ganadero', 'Crédito Agrícola'],
    faqs: [
      {
        question: '¿Hay créditos especiales para ganaderos en Montería?',
        answer: 'Absolutamente. Montería siendo capital ganadera de Córdoba cuenta con amplia oferta. Banco Agrario, Bancolombia Agropecuario, Fedegán a través de Finagro, y cooperativas como Cooprocesemos ofrecen créditos para: compra de ganado, mejoramiento genético, infraestructura (corrales, establos), pastos mejorados, sanidad animal, y capital de trabajo. Tasas desde 16% hasta 28% EA, plazos hasta 5 años, montos desde $5.000.000 hasta $200.000.000 COP. Se acepta ganado como garantía o garantías del FNA.'
      },
      {
        question: '¿Qué cooperativas son confiables en Montería?',
        answer: 'Montería cuenta con cooperativas sólidas: Cooprocesemos (especializada en sector agropecuario), Confiar (red regional amplia), Coopmacoop, Coopcentral, y Coomeva. Todas vigiladas por Superfinanciera. Ofrecen tasas desde 23% EA, requisitos adaptados a ganaderos y agricultores (aceptan certificaciones de producción), plazos flexibles ajustados a ciclos productivos, y programas de asistencia técnica. Son excelente opción para productores rurales, comerciantes y quienes buscan trato personalizado versus banca tradicional.'
      },
      {
        question: '¿Puedo obtener préstamos en línea en Montería?',
        answer: 'Sí, Montería tiene acceso completo a préstamos digitales. Fintech como Lineru, Lulú, RappiPay, Destacame y bancos digitales como Nequi, Daviplata y Banco de Bogotá Digital operan normalmente. El proceso es 100% en línea: solicitud desde celular, carga de documentos digitales (foto cédula, selfie), aprobación en minutos/horas, y desembolso a cuenta bancaria. Montos desde $500.000 hasta $3.000.000 en fintech, hasta $10.000.000 en bancos digitales. Solo requiere cédula, celular, internet y cuenta activa.'
      }
    ],
    tier: 1
  },

  {
    name: 'Sincelejo',
    nameEs: 'Sincelejo',
    slug: 'sincelejo',
    region: 'Caribbean Region',
    regionSlug: 'caribe',
    department: 'Sucre',
    departmentSlug: 'sucre',
    population: '290K+',
    populationNumber: 290000,
    description: 'Capital of Sucre, agricultural and commercial center',
    descriptionEs: 'Capital de Sucre con más de 290 mil habitantes, Sincelejo es importante centro agrícola y comercial del Caribe colombiano. Su economía se basa en agricultura (yuca, ñame, maíz), ganadería, comercio, servicios públicos y agroindustria. La ciudad es reconocida por su Feria de Corralejas y tradiciones culturales. El mercado financiero local incluye bancos nacionales, cooperativas regionales y plataformas digitales emergentes, ofreciendo créditos personales para agricultores, ganaderos, comerciantes y empleados públicos.',
    avgIncome: '$2.300.000 COP/month',
    topIndustries: ['Agricultura', 'Ganadería', 'Comercio', 'Servicios Públicos', 'Agroindustria'],
    lendingProfile: 'Presencia moderada de bancos tradicionales. Cooperativas regionales activas. Líneas agropecuarias especializadas. Programas para pequeños productores.',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$30.000.000 COP',
    avgRate: '23% - 38% EA',
    lenderCount: 18,
    nearbyCities: ['corozal', 'sampues', 'san-marcos'],
    topLoanTypesEs: ['Préstamos Personales', 'Crédito Agropecuario', 'Microcréditos'],
    faqs: [
      {
        question: '¿Qué documentos necesito para un préstamo en Sincelejo?',
        answer: 'En Sincelejo los requisitos son: cédula de ciudadanía vigente, certificado de ingresos (desprendibles de nómina o declaración de renta para independientes), extractos bancarios últimos 3 meses, certificado laboral con antigüedad y salario, referencias personales, y recibo de servicios públicos reciente. Para créditos agropecuarios adicionales: certificado de tradición de tierras, certificación de cultivos o producción ganadera, matrícula mercantil si es comerciante, y plan de inversión. Agricultores pueden presentar certificación de asociación campesina.'
      },
      {
        question: '¿Hay préstamos para agricultores de yuca en Sincelejo?',
        answer: 'Sí, Sucre siendo productor importante de yuca cuenta con líneas especializadas. Banco Agrario, Finagro, cooperativas locales y asociaciones de productores ofrecen créditos para: compra de semillas, insumos agrícolas, maquinaria, riego, y capital de trabajo. Tasas preferenciales desde 16% EA con subsidios del gobierno, plazos hasta 18 meses ajustados a ciclo del cultivo, montos desde $1.000.000 hasta $20.000.000 COP. Se aceptan garantías solidarias de asociaciones o garantías del FNA. Algunos programas incluyen asistencia técnica.'
      },
      {
        question: '¿Cuáles son las tasas de interés en Sincelejo?',
        answer: 'Las tasas en Sincelejo oscilan entre 23% y 38% EA. Bancos tradicionales ofrecen desde 23% EA para empleados formales con buen historial crediticio. Cooperativas locales cobran 25-32% EA con requisitos más flexibles. Créditos agropecuarios subsidiados tienen tasas desde 16% EA. Microcréditos para pequeños comerciantes pueden llegar a 36-38% EA. La tasa final depende de su perfil crediticio, tipo de préstamo, monto solicitado, plazo de pago y garantías ofrecidas. Compare múltiples ofertas.'
      }
    ],
    tier: 1
  },

  {
    name: 'Soledad',
    nameEs: 'Soledad',
    slug: 'soledad',
    region: 'Caribbean Region',
    regionSlug: 'caribe',
    department: 'Atlántico',
    departmentSlug: 'atlantico',
    population: '650K+',
    populationNumber: 650000,
    description: 'Second largest city in Atlántico, part of Barranquilla metropolitan area',
    descriptionEs: 'Segunda ciudad más poblada del Atlántico con más de 650 mil habitantes, Soledad forma parte del área metropolitana de Barranquilla. Su economía se sustenta en comercio, industria, servicios, construcción y logística portuaria. La ciudad ha experimentado rápido crecimiento demográfico y comercial en las últimas décadas. El sector financiero ofrece amplia disponibilidad de crédito, con presencia de bancos nacionales, cooperativas costeñas y fintech, atendiendo principalmente a comerciantes, trabajadores industriales y empleados de servicios.',
    avgIncome: '$2.500.000 COP/month',
    topIndustries: ['Comercio', 'Industria', 'Servicios', 'Construcción', 'Logística'],
    lendingProfile: 'Alta competencia bancaria por proximidad a Barranquilla. Fuerte presencia de cooperativas costeñas. Tasas similares a la capital departamental.',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$35.000.000 COP',
    avgRate: '21% - 35% EA',
    lenderCount: 28,
    nearbyCities: ['barranquilla', 'malambo', 'galapa'],
    topLoanTypesEs: ['Préstamos Personales', 'Crédito de Consumo', 'Microcréditos'],
    faqs: [
      {
        question: '¿Es mejor solicitar préstamo en Soledad o Barranquilla?',
        answer: 'No hay diferencia significativa. Al formar parte del área metropolitana, los prestamistas ofrecen las mismas condiciones en ambas ciudades. Bancos y cooperativas tienen sucursales en Soledad con acceso a toda la red regional. Los préstamos digitales no diferencian por ubicación. La ventaja de Soledad es que puede comparar ofertas de entidades en toda el área metropolitana, aumentando opciones. Algunos residentes prefieren cooperativas costeñas tradicionales con sede en Soledad por atención personalizada y procesos ágiles.'
      },
      {
        question: '¿Qué cooperativas operan en Soledad?',
        answer: 'Soledad cuenta con cooperativas sólidas: Confiar (red nacional con fuerte presencia costeña), Coofinep (especializada en Costa Caribe), Coomeva, Coopcentral, y Cootrass. Todas vigiladas por Superfinanciera. Ofrecen tasas desde 21% EA, requisitos menos estrictos que bancos tradicionales (aceptan independientes y comerciantes informales), plazos flexibles hasta 60 meses, y programas de ahorro vinculados. Son excelente opción para comerciantes, transportadores y pequeños empresarios que buscan alternativa a banca tradicional.'
      },
      {
        question: '¿Puedo obtener microcrédito en Soledad?',
        answer: 'Sí, Soledad tiene amplia oferta de microcrédito por su intensa actividad comercial. Cooperativas como Coofinep, Contactar, entidades de microfinanzas como WWB Colombia, y bancos con programas especiales ofrecen préstamos desde $500.000 hasta $10.000.000 COP. Los requisitos son flexibles: aceptan vendedores informales, pequeños comerciantes, y emprendedores con comprobación alternativa de ingresos (declaración extrajuicio, certificación de ventas). Tasas 28-38% EA, plazos hasta 24 meses, desembolso en 3-7 días hábiles.'
      }
    ],
    tier: 1
  },

  {
    name: 'Riohacha',
    nameEs: 'Riohacha',
    slug: 'riohacha',
    region: 'Caribbean Region',
    regionSlug: 'caribe',
    department: 'La Guajira',
    departmentSlug: 'la-guajira',
    population: '280K+',
    populationNumber: 280000,
    description: 'Capital of La Guajira, gateway to Colombian Caribbean',
    descriptionEs: 'Capital de La Guajira con más de 280 mil habitantes, Riohacha es puerta de entrada al Caribe colombiano y territorio wayúu. Su economía se basa en comercio, pesca, turismo, servicios públicos y minería (carbón en la región). La ciudad cuenta con importante patrimonio cultural indígena y bellezas naturales. El sector financiero ofrece opciones crediticias desde bancos tradicionales hasta cooperativas, con productos diseñados para comerciantes, pescadores, empleados públicos y pequeños empresarios turísticos.',
    avgIncome: '$2.200.000 COP/month',
    topIndustries: ['Comercio', 'Pesca', 'Turismo', 'Servicios Públicos', 'Minería'],
    lendingProfile: 'Presencia moderada bancaria. Cooperativas regionales activas. Programas especiales para pescadores artesanales. Microcrédito para comerciantes.',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$25.000.000 COP',
    avgRate: '24% - 40% EA',
    lenderCount: 15,
    nearbyCities: ['maicao', 'manaure', 'uribia'],
    topLoanTypesEs: ['Préstamos Personales', 'Microcréditos', 'Crédito Comercial'],
    faqs: [
      {
        question: '¿Hay préstamos para pescadores en Riohacha?',
        answer: 'Sí, Riohacha siendo ciudad pesquera cuenta con programas especializados. Banco Agrario, cooperativas como Coofinep, y programas del Ministerio de Agricultura ofrecen créditos para: compra de embarcaciones, motores, redes de pesca, equipos de refrigeración, y capital de trabajo. Tasas preferenciales desde 18% EA, plazos hasta 36 meses ajustados a temporadas de pesca, montos desde $1.000.000 hasta $15.000.000 COP. Se aceptan garantías solidarias de asociaciones de pescadores o garantías del FNA. Algunos incluyen capacitación en pesca responsable.'
      },
      {
        question: '¿Qué prestamistas operan en Riohacha?',
        answer: 'En Riohacha operan bancos como Bancolombia, Banco de Bogotá, Davivienda, Banco Agrario y Banco Popular. Cooperativas regionales incluyen Coofinep (fuerte en La Guajira), Confiar, Coomeva y Coopcentral. También hay acceso limitado a fintech digitales. En total más de 15 entidades vigiladas por Superfinanciera. Los empleados públicos (significativa proporción en Riohacha) tienen acceso a programas de libranza. Comerciantes y pescadores pueden acceder a cooperativas y microfinancieras con requisitos flexibles.'
      },
      {
        question: '¿Cuánto demora aprobar un préstamo en Riohacha?',
        answer: 'Los tiempos en Riohacha son: Libranza para empleados públicos se aprueba en 3-5 días y desembolsa en 7-10 días. Bancos tradicionales toman 4-7 días para aprobación más 3-5 días para desembolso. Cooperativas pueden demorar 7-15 días dependiendo del monto y verificaciones. Microcréditos para comerciantes se aprueban en 5-10 días. Para agilizar: presente documentación completa desde el inicio, tenga cuenta bancaria activa, mantenga buen historial en Datacrédito, y considere un codeudor si tiene historial limitado.'
      }
    ],
    tier: 1
  },

  // ========================================
  // PACIFIC REGION - 4 CITIES
  // ========================================

  {
    name: 'Palmira',
    nameEs: 'Palmira',
    slug: 'palmira',
    region: 'Pacific Region',
    regionSlug: 'pacifico',
    department: 'Valle del Cauca',
    departmentSlug: 'valle-del-cauca',
    population: '320K+',
    populationNumber: 320000,
    description: 'Agricultural and industrial city near Cali',
    descriptionEs: 'Municipio del Valle del Cauca con más de 320 mil habitantes, Palmira es importante centro agroindustrial próximo a Cali. Su economía se fundamenta en agroindustria (especialmente azúcar y biocombustibles), agricultura, manufactura, servicios y comercio. La ciudad alberga el aeropuerto Alfonso Bonilla Aragón. El sector financiero ofrece amplia variedad de opciones crediticias, desde bancos tradicionales hasta cooperativas vallecaucanas y fintech, con productos diseñados para trabajadores agroindustriales, agricultores, comerciantes y profesionales.',
    avgIncome: '$2.600.000 COP/month',
    topIndustries: ['Agroindustria', 'Azúcar', 'Agricultura', 'Manufactura', 'Servicios'],
    lendingProfile: 'Buena infraestructura bancaria por proximidad a Cali. Cooperativas vallecaucanas consolidadas. Líneas especiales para sector azucarero.',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$35.000.000 COP',
    avgRate: '20% - 34% EA',
    lenderCount: 32,
    nearbyCities: ['cali', 'candelaria', 'pradera'],
    topLoanTypesEs: ['Préstamos Personales', 'Crédito de Libranza', 'Libre Inversión'],
    faqs: [
      {
        question: '¿Hay préstamos para trabajadores del sector azucarero en Palmira?',
        answer: 'Sí, Palmira siendo centro azucarero cuenta con productos especializados. Los ingenios azucareros (Manuelita, Incauca, Providencia) tienen convenios con bancos como Bancolombia, Davivienda y BBVA para ofrecer crédito de libranza a sus empleados. Tasas preferenciales desde 18% EA, descuento directo de nómina, montos hasta $50.000.000 COP, plazos hasta 72 meses, y aprobación en 2-3 días. No requiere codeudor. Cooperativas como Confiar y Coomeva también tienen programas para este sector con requisitos flexibles.'
      },
      {
        question: '¿Qué ventajas tiene solicitar préstamos en Palmira?',
        answer: 'Palmira ofrece ventajas significativas: (1) Acceso a toda la oferta del Valle del Cauca incluyendo Cali, (2) Alta competencia genera tasas desde 20% EA, (3) Presencia de cooperativas vallecaucanas tradicionales con más de 50 años de historia, (4) Convenios con ingenios azucareros que aceleran aprobaciones, (5) Infraestructura de corresponsales bancarios en toda la ciudad, (6) Productos especializados para sector agroindustrial. Los trabajadores formales de ingenios tienen acceso a las mejores condiciones del país.'
      },
      {
        question: '¿Puedo obtener préstamos en línea en Palmira?',
        answer: 'Sí, Palmira tiene acceso completo a préstamos digitales. Fintech como Lineru, Lulú, RappiPay, Destacame, Addi y bancos digitales como Nequi, Daviplata y Banco de Bogotá Digital operan normalmente. El proceso es 100% en línea: solicitud desde celular, carga de documentos digitales, aprobación en minutos/horas, y desembolso a cuenta bancaria. Montos desde $500.000 hasta $3.000.000 en fintech, hasta $10.000.000 en bancos digitales. Requiere cédula, celular, conexión a internet y cuenta bancaria o billetera digital activa.'
      }
    ],
    tier: 1
  },

  {
    name: 'Buenaventura',
    nameEs: 'Buenaventura',
    slug: 'buenaventura',
    region: 'Pacific Region',
    regionSlug: 'pacifico',
    department: 'Valle del Cauca',
    departmentSlug: 'valle-del-cauca',
    population: '430K+',
    populationNumber: 430000,
    description: 'Main Pacific port of Colombia',
    descriptionEs: 'Principal puerto del Pacífico colombiano con más de 430 mil habitantes, Buenaventura es vital para el comercio exterior del país. Su economía se centra en operaciones portuarias, logística, pesca, comercio y servicios. El puerto moviliza más del 50% del comercio internacional colombiano. El sector financiero ofrece opciones crediticias desde bancos tradicionales hasta cooperativas y microfinancieras, con productos diseñados para trabajadores portuarios, pescadores, comerciantes y empleados de logística.',
    avgIncome: '$2.400.000 COP/month',
    topIndustries: ['Operaciones Portuarias', 'Logística', 'Pesca', 'Comercio', 'Servicios'],
    lendingProfile: 'Presencia moderada bancaria. Cooperativas vallecaucanas activas. Programas para trabajadores portuarios. Microcrédito para pescadores.',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$30.000.000 COP',
    avgRate: '22% - 37% EA',
    lenderCount: 20,
    nearbyCities: ['cali', 'yumbo', 'jamundi'],
    topLoanTypesEs: ['Préstamos Personales', 'Crédito de Libranza', 'Microcréditos'],
    faqs: [
      {
        question: '¿Hay préstamos para trabajadores portuarios en Buenaventura?',
        answer: 'Sí, Buenaventura siendo el principal puerto del Pacífico cuenta con productos especializados. Las Sociedades Portuarias (SPRBUN, TCBUEN) y empresas de logística tienen convenios con bancos como Bancolombia, Davivienda y BBVA para crédito de libranza. Tasas desde 19% EA, descuento directo de nómina, montos hasta $40.000.000 COP, plazos hasta 72 meses. Cooperativas como Confiar, Coomeva y Coopbueno también atienden este sector con requisitos flexibles y programas de educación financiera.'
      },
      {
        question: '¿Qué documentos necesito para un préstamo en Buenaventura?',
        answer: 'En Buenaventura los requisitos son: cédula de ciudadanía vigente, certificado de ingresos (desprendibles de nómina para empleados formales, declaración de renta para independientes), extractos bancarios últimos 3 meses, certificado laboral con antigüedad y salario, referencias personales (2-3 contactos), y recibo de servicios públicos reciente. Para trabajadores portuarios: certificado de la sociedad portuaria empleadora. Para pescadores: certificación de asociación pesquera. Algunos prestamistas pueden pedir seguro de vida adicional.'
      },
      {
        question: '¿Cuáles son las tasas promedio en Buenaventura?',
        answer: 'Las tasas en Buenaventura oscilan entre 22% y 37% EA. Bancos tradicionales ofrecen desde 22% EA para trabajadores portuarios formales con buen historial. Cooperativas cobran 25-32% EA. Microcréditos para pescadores y comerciantes pueden llegar a 35-37% EA. Los trabajadores con libranza acceden a tasas desde 19% EA. La tasa depende de perfil crediticio, tipo de préstamo, monto, plazo y garantías. Empleados de sociedades portuarias con convenios bancarios obtienen mejores condiciones.'
      }
    ],
    tier: 1
  },

  {
    name: 'Tuluá',
    nameEs: 'Tuluá',
    slug: 'tulua',
    region: 'Pacific Region',
    regionSlug: 'pacifico',
    department: 'Valle del Cauca',
    departmentSlug: 'valle-del-cauca',
    population: '220K+',
    populationNumber: 220000,
    description: 'Heart of Valle, agricultural and commercial center',
    descriptionEs: 'Ciudad del centro del Valle del Cauca con más de 220 mil habitantes, Tuluá es conocida como "Corazón del Valle". Su economía se basa en agricultura (especialmente caña de azúcar, café y frutales), agroindustria, comercio, ganadería y servicios. La ciudad es importante centro logístico entre Cali y el norte del departamento. El mercado financiero local incluye bancos nacionales, cooperativas vallecaucanas y plataformas digitales, ofreciendo créditos personales para agricultores, ganaderos, comerciantes y empleados del sector agroindustrial.',
    avgIncome: '$2.400.000 COP/month',
    topIndustries: ['Agricultura', 'Agroindustria', 'Comercio', 'Ganadería', 'Servicios'],
    lendingProfile: 'Buena presencia bancaria y cooperativas. Líneas especializadas para sector agropecuario. Programas para pequeños productores.',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$30.000.000 COP',
    avgRate: '22% - 36% EA',
    lenderCount: 20,
    nearbyCities: ['buga', 'andalucia', 'sevilla'],
    topLoanTypesEs: ['Préstamos Personales', 'Crédito Agropecuario', 'Libre Inversión'],
    faqs: [
      {
        question: '¿Hay créditos para agricultores en Tuluá?',
        answer: 'Sí, Tuluá siendo centro agrícola del Valle cuenta con amplia oferta. Banco Agrario, Bancolombia Agropecuario, Finagro, cooperativas como Confiar y Tuluasoc ofrecen créditos para: cultivos de caña, café, frutales, compra de insumos, maquinaria agrícola, riego tecnificado, y capital de trabajo. Tasas desde 16% EA con subsidios, plazos hasta 5 años ajustados a ciclos productivos, montos desde $2.000.000 hasta $100.000.000 COP. Se aceptan garantías reales (tierras) o del FNA. Incluyen asistencia técnica.'
      },
      {
        question: '¿Qué cooperativas son confiables en Tuluá?',
        answer: 'Tuluá cuenta con cooperativas sólidas y tradicionales: Confiar (líder regional con décadas de experiencia), Tuluasoc (cooperativa local especializada en la región), Coomeva, Cootraunión, y Coopbueno. Todas vigiladas por Superfinanciera. Ofrecen tasas desde 22% EA, requisitos adaptados a agricultores y comerciantes, plazos flexibles, y programas de educación financiera. Tuluasoc en particular conoce muy bien el mercado local y tiene productos diseñados para productores vallecaucanos. Son excelente alternativa a bancos tradicionales.'
      },
      {
        question: '¿Puedo obtener préstamos en línea en Tuluá?',
        answer: 'Sí, Tuluá tiene acceso a préstamos digitales. Fintech como Lineru, Lulú, RappiPay y bancos digitales como Nequi, Daviplata operan en la ciudad. El proceso es 100% en línea: solicitud desde celular, carga de documentos digitales (foto cédula, selfie, comprobante ingresos), aprobación en minutos/horas, y desembolso a cuenta bancaria. Montos desde $500.000 hasta $3.000.000 en fintech, hasta $8.000.000 en bancos digitales. Requiere cédula, celular, conexión a internet y cuenta bancaria activa.'
      }
    ],
    tier: 1
  },

  // ========================================
  // ORINOQUÍA REGION - 2 CITIES
  // ========================================

  {
    name: 'Yopal',
    nameEs: 'Yopal',
    slug: 'yopal',
    region: 'Orinoquía Region',
    regionSlug: 'orinoquia',
    department: 'Casanare',
    departmentSlug: 'casanare',
    population: '160K+',
    populationNumber: 160000,
    description: 'Capital of Casanare, oil and livestock center',
    descriptionEs: 'Capital de Casanare con más de 160 mil habitantes, Yopal es importante centro petrolero y ganadero de los Llanos Orientales. Su economía se sustenta en explotación petrolera, ganadería, agricultura (arroz, palma africana), comercio y servicios. La ciudad ha experimentado significativo crecimiento económico impulsado por la industria petrolera. El sector financiero ofrece variedad de opciones crediticias, desde bancos tradicionales hasta cooperativas llaneras, con productos diseñados para trabajadores petroleros, ganaderos, comerciantes y empleados formales.',
    avgIncome: '$2.800.000 COP/month',
    topIndustries: ['Petróleo y Gas', 'Ganadería', 'Agricultura', 'Comercio', 'Servicios'],
    lendingProfile: 'Buena infraestructura bancaria. Cooperativas llaneras consolidadas. Productos especializados para trabajadores petroleros. Líneas ganaderas.',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$35.000.000 COP',
    avgRate: '24% - 39% EA',
    lenderCount: 14,
    nearbyCities: ['aguazul', 'tauramena', 'villanueva'],
    topLoanTypesEs: ['Préstamos Personales', 'Crédito de Libranza', 'Crédito Ganadero'],
    faqs: [
      {
        question: '¿Hay préstamos especiales para trabajadores petroleros en Yopal?',
        answer: 'Sí, Yopal siendo centro petrolero cuenta con productos especializados. Empresas como Ecopetrol, Equión, y contratistas petroleros tienen convenios con bancos como Bancolombia, Davivienda, BBVA y Banco de Bogotá para crédito de libranza. Tasas preferenciales desde 20% EA, descuento directo de nómina, montos hasta $50.000.000 COP, plazos hasta 72 meses, aprobación en 2-3 días. No requiere codeudor por garantía de nómina. Cooperativas como Coopcentral también atienden este sector con requisitos flexibles.'
      },
      {
        question: '¿Qué prestamistas operan en Yopal?',
        answer: 'En Yopal operan bancos como Bancolombia, Banco de Bogotá, Davivienda, BBVA, Banco Agrario y Banco Popular. Cooperativas regionales incluyen Coopcentral (fuerte en Casanare), Confiar, Coomeva, y Coopetróleos. También hay acceso a fintech digitales como Lineru y Lulú. En total más de 14 entidades vigiladas por Superfinanciera. Los trabajadores petroleros tienen ventaja significativa con programas de libranza. Ganaderos pueden acceder a cooperativas y Banco Agrario con líneas especializadas.'
      },
      {
        question: '¿Hay créditos para ganaderos en Yopal?',
        answer: 'Sí, Casanare siendo región ganadera importante cuenta con líneas especializadas. Banco Agrario, Finagro, Fedegán, y cooperativas locales ofrecen créditos para: compra de ganado, mejoramiento genético, infraestructura ganadera (corrales, bebederos), pastos mejorados, sanidad animal, y capital de trabajo. Tasas desde 18% hasta 28% EA, plazos hasta 5 años, montos desde $5.000.000 hasta $150.000.000 COP. Se acepta ganado como garantía o garantías del FNA. Algunos programas incluyen asistencia técnica en mejoramiento genético.'
      }
    ],
    tier: 1
  },

  // ========================================
  // AMAZON REGION - 2 CITIES
  // ========================================

  {
    name: 'Florencia',
    nameEs: 'Florencia',
    slug: 'florencia',
    region: 'Amazon Region',
    regionSlug: 'amazonia',
    department: 'Caquetá',
    departmentSlug: 'caqueta',
    population: '180K+',
    populationNumber: 180000,
    description: 'Gateway to Colombian Amazon, cattle and agriculture hub',
    descriptionEs: 'Capital del Caquetá y puerta de entrada a la Amazonía colombiana con más de 180 mil habitantes. Su economía se basa en ganadería, agricultura (especialmente caucho, cacao y plátano), comercio, servicios y turismo ecológico emergente. La ciudad es importante centro económico y administrativo del piedemonte amazónico. El sector financiero ofrece opciones desde bancos tradicionales hasta cooperativas regionales, con productos diseñados para ganaderos, agricultores, comerciantes y empleados públicos.',
    avgIncome: '$2.300.000 COP/month',
    topIndustries: ['Ganadería', 'Agricultura', 'Comercio', 'Servicios Públicos', 'Turismo'],
    lendingProfile: 'Presencia moderada bancaria. Cooperativas regionales activas. Líneas agropecuarias especializadas. Programas para productores de caucho y cacao.',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$25.000.000 COP',
    avgRate: '24% - 39% EA',
    lenderCount: 14,
    nearbyCities: ['san-vicente-del-caguan', 'belen-de-los-andaquies', 'puerto-rico'],
    topLoanTypesEs: ['Préstamos Personales', 'Crédito Agropecuario', 'Microcréditos'],
    faqs: [
      {
        question: '¿Hay créditos para productores de caucho y cacao en Florencia?',
        answer: 'Sí, Caquetá siendo productor importante de caucho y cacao cuenta con líneas especializadas. Banco Agrario, Finagro, cooperativas como Coomeva y programas del Ministerio de Agricultura ofrecen créditos para: siembra, renovación de cultivos, compra de insumos, beneficiaderos, y capital de trabajo. Tasas preferenciales desde 16% EA con subsidios gubernamentales, plazos hasta 7 años ajustados a ciclos productivos largos, montos desde $2.000.000 hasta $50.000.000 COP. Se aceptan garantías solidarias de asociaciones o del FNA.'
      },
      {
        question: '¿Qué documentos necesito para un préstamo en Florencia?',
        answer: 'En Florencia los requisitos son: cédula de ciudadanía vigente, certificado de ingresos (desprendibles para empleados, declaración de renta para independientes), extractos bancarios últimos 3 meses, certificado laboral con antigüedad, referencias personales, y servicios públicos recientes. Para créditos agropecuarios adicionales: certificado de tradición de tierras, certificación de cultivos (caucho, cacao, etc.), matrícula mercantil si es comerciante, y plan de inversión. Productores pueden presentar certificación de asociaciones campesinas o caucheras.'
      },
      {
        question: '¿Cuáles son las tasas de interés en Florencia?',
        answer: 'Las tasas en Florencia van desde 24% hasta 39% EA. Bancos tradicionales ofrecen desde 24% EA para empleados formales con buen historial crediticio. Cooperativas cobran 26-33% EA. Créditos agropecuarios subsidiados tienen tasas desde 16% EA. Microcréditos para pequeños comerciantes pueden llegar a 37-39% EA. La tasa depende de perfil crediticio, tipo de préstamo, monto, plazo y garantías. Empleados públicos pueden acceder a libranza con tasas desde 20% EA. Compare múltiples ofertas antes de decidir.'
      }
    ],
    tier: 1
  }

  // ========================================
  // TOTAL: 20 ADDITIONAL CITIES ADDED
  // GRAND TOTAL: 30 TIER 1 CITIES COMPLETE
  // ========================================
]

// Helper function to get city by slug
export function getColombiaCityTier1BySlug(
  regionSlug: string, 
  citySlug: string
): ColombiaCityTier1 | undefined {
  return colombiaCitiesTier1.find(
    city => city.regionSlug === regionSlug && city.slug === citySlug
  )
}

// Helper function to get cities by department
export function getColombiaCitiesTier1ByDepartment(
  departmentSlug: string
): ColombiaCityTier1[] {
  return colombiaCitiesTier1.filter(city => city.departmentSlug === departmentSlug)
}

// Helper function to get cities by region
export function getColombiaCitiesTier1ByRegion(
  regionSlug: string
): ColombiaCityTier1[] {
  return colombiaCitiesTier1.filter(city => city.regionSlug === regionSlug)
}

// Helper function to get all city slugs for static generation
export function getAllColombiaCityTier1Slugs(): Array<{
  region: string
  city: string
}> {
  return colombiaCitiesTier1.map(city => ({
    region: city.regionSlug,
    city: city.slug
  }))
}

// Helper function to get all cities (sorted by population)
export function getAllColombiaCitiesTier1(): ColombiaCityTier1[] {
  return [...colombiaCitiesTier1].sort((a, b) => b.populationNumber - a.populationNumber)
}

// Export count for easy reference
export const TIER1_CITY_COUNT = colombiaCitiesTier1.length // 30 cities complete ✅
