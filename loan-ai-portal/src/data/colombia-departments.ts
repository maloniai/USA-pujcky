/**
 * Colombia Departments Data
 * All 32 Colombian departments + Distrito Capital with lending information
 */

export interface ColombiaDepartment {
  name: string
  nameEs: string
  slug: string
  code: string // DANE code
  region: string
  regionSlug: string
  capital: string
  capitalSlug: string
  population: string
  area: string // km²
  municipalities: number
  description: string
  descriptionEs: string
  economy: string[]
  avgIncome: string
  lenderCount: number
  avgRate: string
  minLoanAmount: string
  maxLoanAmount: string
  topCities: string[]
  regulatoryNotes: string
  faqItems?: Array<{
    question: string
    answer: string
  }>
}

export const colombiaDepartments: ColombiaDepartment[] = [
  // ANDEAN REGION DEPARTMENTS
  {
    name: 'Cundinamarca',
    nameEs: 'Cundinamarca',
    slug: 'cundinamarca',
    code: '25',
    region: 'Andean Region',
    regionSlug: 'andina',
    capital: 'Bogotá',
    capitalSlug: 'bogota',
    population: '8.5M+',
    area: '22,623 km²',
    municipalities: 116,
    description: 'Central department and capital district, economic and political heart of Colombia',
    descriptionEs: 'Departamento central y distrito capital, corazón económico y político de Colombia. Bogotá concentra la mayor actividad financiera del país con presencia de todos los bancos nacionales e internacionales. Los municipios aledaños como Soacha, Zipaquirá y Facatativá también cuentan con amplia oferta de crédito. La tasa de bancarización supera el 80% en la capital. Sectores de servicios, tecnología, comercio y manufactura impulsan la demanda crediticia. Las tasas de interés son las más competitivas del país debido a la alta concentración de entidades financieras.',
    economy: ['Financial Services', 'Government', 'Technology', 'Commerce', 'Manufacturing', 'Agriculture'],
    avgIncome: '$3.500.000 COP/month',
    lenderCount: 65,
    avgRate: '18% - 32% EA',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$50.000.000 COP',
    topCities: ['Bogotá', 'Soacha', 'Zipaquirá', 'Facatativá', 'Chía', 'Fusagasugá', 'Girardot', 'Madrid', 'Mosquera', 'Funza'],
    regulatoryNotes: 'Sede de la Superintendencia Financiera. Mayor concentración de entidades vigiladas. Cumplimiento estricto de normativa de protección al consumidor financiero.',
    faqItems: [
      {
        question: '¿Cuántas entidades financieras operan en Cundinamarca?',
        answer: 'En Cundinamarca operan aproximadamente 65 entidades financieras, incluyendo bancos tradicionales, cooperativas de ahorro, compañías de financiamiento y entidades fintech. Bogotá concentra la mayoría, pero ciudades como Soacha, Zipaquirá y Facatativá también cuentan con amplia oferta.'
      },
      {
        question: '¿Cuál es la tasa de interés promedio en Cundinamarca?',
        answer: 'Las tasas de interés en Cundinamarca oscilan entre 18% y 32% EA para préstamos personales, siendo las más competitivas del país debido a la alta concentración de bancos y la fuerte competencia en Bogotá. Las tasas varían según perfil crediticio y tipo de préstamo.'
      },
      {
        question: '¿Puedo solicitar préstamos en línea desde cualquier municipio de Cundinamarca?',
        answer: 'Sí, la mayoría de las entidades financieras ofrecen solicitud 100% en línea. Cundinamarca tiene excelente conectividad, especialmente en la sabana de Bogotá. Los préstamos digitales permiten acceso desde cualquier municipio con conexión a internet.'
      },
      {
        question: '¿Qué requisitos son comunes para préstamos en Cundinamarca?',
        answer: 'Los requisitos estándar incluyen: cédula de ciudadanía, ingresos demostrables ($1.200.000 COP mínimo), antigüedad laboral (mínimo 3 meses), consulta en Datacrédito, y referencias personales. En Bogotá, algunas entidades aceptan trabajadores independientes con declaración de renta.'
      },
      {
        question: '¿Dónde presentar quejas sobre préstamos en Cundinamarca?',
        answer: 'Las quejas se presentan directamente ante la Superintendencia Financiera de Colombia, cuya sede principal está en Bogotá (Calle 7 No. 4-49). También puede usar el portal web www.superfinanciera.gov.co o línea gratuita nacional 018000-951200.'
      }
    ]
  },
  {
    name: 'Antioquia',
    nameEs: 'Antioquia',
    slug: 'antioquia',
    code: '05',
    region: 'Andean Region',
    regionSlug: 'andina',
    capital: 'Medellín',
    capitalSlug: 'medellin',
    population: '6.5M+',
    area: '63,612 km²',
    municipalities: 125,
    description: 'Second largest department, industrial and textile capital, innovation hub',
    descriptionEs: 'Segundo departamento más poblado de Colombia y centro industrial clave. Medellín es reconocida como hub de innovación y tecnología con fuerte presencia de bancos y entidades fintech. El departamento combina actividad industrial en el Valle de Aburrá con economía cafetera y agrícola en subregiones. La tasa de bancarización supera el 75%. Ciudades como Bello, Itagüí, Envigado y Rionegro cuentan con amplia oferta crediticia. Las tasas son competitivas y el acceso al crédito para MIPYMES es destacado. Urabá y el oriente antioqueño muestran crecimiento en inclusión financiera.',
    economy: ['Textiles', 'Manufacturing', 'Technology', 'Finance', 'Agriculture', 'Tourism', 'Mining'],
    avgIncome: '$3.200.000 COP/month',
    lenderCount: 52,
    avgRate: '19% - 33% EA',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$45.000.000 COP',
    topCities: ['Medellín', 'Bello', 'Itagüí', 'Envigado', 'Apartadó', 'Turbo', 'Rionegro', 'Caucasia', 'Sabaneta', 'La Estrella'],
    regulatoryNotes: 'Alto cumplimiento de normativa financiera. Fuerte presencia de cooperativas de ahorro reguladas. Innovación fintech supervisada por Superfinanciera.',
    faqItems: [
      {
        question: '¿Cómo es el mercado de préstamos en Antioquia?',
        answer: 'Antioquia tiene el segundo mercado crediticio más grande de Colombia con aproximadamente 52 entidades activas. Medellín concentra bancos y fintech, mientras que municipios como Bello, Itagüí y Envigado también ofrecen amplia variedad. Las cooperativas de ahorro tienen fuerte presencia en el departamento.'
      },
      {
        question: '¿Hay diferencias de tasas entre Medellín y otros municipios?',
        answer: 'Las tasas en Medellín (19-33% EA) son similares a las de municipios del Valle de Aburrá debido a la integración metropolitana. En zonas rurales como Urabá u Oriente, las tasas pueden ser ligeramente más altas (1-3 puntos) por menor competencia bancaria.'
      },
      {
        question: '¿Qué opciones tienen los trabajadores independientes en Antioquia?',
        answer: 'Antioquia ofrece múltiples opciones para independientes: cooperativas especializadas, fintech con análisis alternativo de riesgo, y bancos con productos flexibles. En Medellín, varias entidades aceptan declaración de renta o extractos bancarios como soporte de ingresos.'
      },
      {
        question: '¿Cuál es el monto promedio de préstamos en Antioquia?',
        answer: 'El monto promedio de préstamos personales en Antioquia es de $8.000.000 a $15.000.000 COP, con plazos de 24 a 48 meses. Los montos varían según capacidad de pago: desde $500.000 hasta $45.000.000 COP en entidades tradicionales.'
      },
      {
        question: '¿Las cooperativas de Antioquia son confiables?',
        answer: 'Sí, las cooperativas en Antioquia están vigiladas por la Superintendencia de Economía Solidaria. Muchas tienen décadas de operación y ofrecen tasas competitivas. Verifique que estén registradas en www.supersolidaria.gov.co antes de solicitar crédito.'
      }
    ]
  },
  {
    name: 'Santander',
    nameEs: 'Santander',
    slug: 'santander',
    code: '68',
    region: 'Andean Region',
    regionSlug: 'andina',
    capital: 'Bucaramanga',
    capitalSlug: 'bucaramanga',
    population: '2.1M+',
    area: '30,537 km²',
    municipalities: 87,
    description: 'Oil and industrial region, growing financial sector',
    descriptionEs: 'Departamento de tradición industrial y petrolera en el nororiente andino. Bucaramanga, conocida como la "Ciudad Bonita", concentra servicios financieros con presencia de bancos nacionales y cooperativas regionales. El área metropolitana (Bucaramanga, Floridablanca, Girón, Piedecuesta) presenta alta bancarización. Barrancabermeja, centro petrolero, tiene demanda importante de crédito de consumo. La industria del calzado y manufactura impulsan el microcrédito. Las tasas de interés son moderadamente competitivas. San Gil y Socorro ofrecen servicios financieros básicos con menor diversidad de productos.',
    economy: ['Oil & Gas', 'Footwear', 'Manufacturing', 'Commerce', 'Services', 'Agriculture', 'Tourism'],
    avgIncome: '$2.500.000 COP/month',
    lenderCount: 28,
    avgRate: '22% - 36% EA',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$30.000.000 COP',
    topCities: ['Bucaramanga', 'Floridablanca', 'Girón', 'Piedecuesta', 'Barrancabermeja', 'San Gil', 'Socorro', 'Málaga'],
    regulatoryNotes: 'Supervisión estándar por Superfinanciera. Cooperativas regionales bien establecidas. Creciente adopción de banca digital.',
    faqItems: [
      {
        question: '¿Cuántos prestamistas hay disponibles en Santander?',
        answer: 'En Santander operan aproximadamente 28 entidades financieras, concentradas principalmente en Bucaramanga y su área metropolitana. Barrancabermeja también cuenta con oferta variada debido a su actividad petrolera. Las cooperativas tienen fuerte presencia regional.'
      },
      {
        question: '¿Puedo obtener crédito en Barrancabermeja con el mismo proceso que en Bucaramanga?',
        answer: 'Sí, las entidades nacionales operan con los mismos procesos en Barrancabermeja y Bucaramanga. Sin embargo, Barrancabermeja tiene menor cantidad de bancos físicos pero acceso completo a plataformas digitales. Los requisitos y tasas son similares.'
      },
      {
        question: '¿Qué tasas de interés se manejan en Santander?',
        answer: 'Las tasas en Santander oscilan entre 22% y 36% EA para préstamos personales, ligeramente superiores a Bogotá o Medellín debido a menor competencia bancaria. Las cooperativas locales suelen ofrecer tasas más favorables a sus asociados.'
      },
      {
        question: '¿Hay opciones de microcrédito para pequeñas empresas en Santander?',
        answer: 'Sí, Santander tiene fuerte tradición de microcrédito debido a su industria del calzado y manufactura. Cooperativas, Bancamía, Banco W y entidades especializadas ofrecen microcréditos desde $500.000 hasta $10.000.000 COP para emprendedores y MIPYMES.'
      },
      {
        question: '¿Cómo afecta trabajar en sector petrolero al acceso al crédito en Santander?',
        answer: 'Trabajar en el sector petrolero generalmente facilita el acceso al crédito por la estabilidad laboral y buenos ingresos. Muchos empleados petroleros acceden a créditos de libranza con descuento directo de nómina y tasas preferenciales (16-24% EA).'
      }
    ]
  },
  {
    name: 'Boyacá',
    nameEs: 'Boyacá',
    slug: 'boyaca',
    code: '15',
    region: 'Andean Region',
    regionSlug: 'andina',
    capital: 'Tunja',
    capitalSlug: 'tunja',
    population: '1.3M+',
    area: '23,189 km²',
    municipalities: 123,
    description: 'Highland department, agricultural and mining economy',
    descriptionEs: 'Departamento andino de tradición agrícola, minera y educativa. Tunja, la capital, concentra servicios financieros con bancos nacionales y cooperativas. Duitama y Sogamoso forman el corredor industrial del acero con demanda empresarial de crédito. La economía se basa en agricultura, ganadería, minería de carbón y esmeraldas. La bancarización rural es moderada, con mayor presencia de cooperativas. Las tasas de interés son estándar para la región andina. El crédito agropecuario tiene importancia significativa. Municipios turísticos como Villa de Leyva tienen oferta financiera básica orientada a comercio.',
    economy: ['Agriculture', 'Mining', 'Steel Industry', 'Livestock', 'Education', 'Tourism', 'Commerce'],
    avgIncome: '$2.200.000 COP/month',
    lenderCount: 18,
    avgRate: '23% - 38% EA',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$25.000.000 COP',
    topCities: ['Tunja', 'Duitama', 'Sogamoso', 'Chiquinquirá', 'Villa de Leyva', 'Paipa', 'Puerto Boyacá'],
    regulatoryNotes: 'Supervisión estándar. Fuerte presencia de cooperativas rurales. Bancos agrarios activos con líneas especializadas.',
    faqItems: [
      {
        question: '¿Qué opciones de crédito hay en Boyacá para agricultores?',
        answer: 'Boyacá ofrece crédito agropecuario a través de Banco Agrario, Finagro, y cooperativas rurales. Los créditos van desde $1.000.000 hasta $50.000.000 COP con tasas subsidiadas (10-18% EA) y plazos largos para inversión agrícola, ganadería y maquinaria.'
      },
      {
        question: '¿Cuántos prestamistas operan en Tunja?',
        answer: 'En Tunja operan aproximadamente 18 entidades financieras entre bancos, cooperativas y compañías de financiamiento. Duitama y Sogamoso también cuentan con oferta diversificada. Los municipios más pequeños dependen principalmente de cooperativas y banca móvil.'
      },
      {
        question: '¿Las tasas en Boyacá son más altas que en Bogotá?',
        answer: 'Sí, las tasas en Boyacá (23-38% EA) son ligeramente superiores (2-4 puntos) a las de Bogotá debido a menor competencia bancaria y mayor riesgo percibido en zonas rurales. Las cooperativas locales suelen ofrecer mejores condiciones a asociados.'
      },
      {
        question: '¿Puedo solicitar crédito en línea desde municipios rurales de Boyacá?',
        answer: 'Sí, la mayoría de bancos y fintech permiten solicitud 100% digital. Sin embargo, la conectividad puede ser limitada en zonas rurales. Se recomienda usar plataformas móviles de bancos como Bancolombia, Davivienda o fintech como Lineru, Kredity o RappiPay.'
      },
      {
        question: '¿Qué es el corredor industrial de Boyacá y cómo afecta el crédito?',
        answer: 'El corredor Duitama-Sogamoso concentra industria siderúrgica y metalmecánica. Los trabajadores del sector tienen acceso facilitado a crédito por estabilidad laboral. Las empresas de la zona utilizan crédito comercial para capital de trabajo y expansión.'
      }
    ]
  },
  {
    name: 'Caldas',
    nameEs: 'Caldas',
    slug: 'caldas',
    code: '17',
    region: 'Andean Region',
    regionSlug: 'andina',
    capital: 'Manizales',
    capitalSlug: 'manizales',
    population: '1M+',
    area: '7,888 km²',
    municipalities: 27,
    description: 'Coffee region, university city, financial services hub',
    descriptionEs: 'Departamento cafetero del Eje Cafetero colombiano. Manizales, ciudad universitaria y de servicios, concentra actividad financiera con presencia de bancos nacionales y cooperativas cafeteras históricas. La economía cafetera genera demanda estacional de crédito para cosecha y comercialización. Alta tradición cooperativista vinculada al gremio cafetero. Las tasas de interés son competitivas para la región. La bancarización es moderada-alta en zona urbana. Municipios como Chinchiná, Villamaría y Riosucio tienen oferta financiera básica. El turismo cafetero impulsa microcréditos para emprendimientos de servicios.',
    economy: ['Coffee Production', 'Education', 'Services', 'Tourism', 'Manufacturing', 'Commerce', 'Agriculture'],
    avgIncome: '$2.400.000 COP/month',
    lenderCount: 22,
    avgRate: '22% - 36% EA',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$28.000.000 COP',
    topCities: ['Manizales', 'Chinchiná', 'Villamaría', 'Riosucio', 'La Dorada', 'Anserma', 'Palestina'],
    regulatoryNotes: 'Supervisión estándar. Cooperativas cafeteras consolidadas. Banca cafetera especializada con productos agroindustriales.',
    faqItems: [
      {
        question: '¿Qué entidades financieras operan en Caldas?',
        answer: 'En Caldas operan aproximadamente 22 entidades financieras, concentradas en Manizales. Destacan bancos comerciales, cooperativas cafeteras tradicionales (como Confiar y Cotrafa), y entidades especializadas en crédito agropecuario para caficultores.'
      },
      {
        question: '¿Hay créditos especiales para caficultores en Caldas?',
        answer: 'Sí, Banco Agrario, Finagro, cooperativas cafeteras y el Fondo Nacional del Café ofrecen líneas especializadas para caficultores con tasas subsidiadas (8-15% EA), plazos flexibles y períodos de gracia para renovación de cultivos, cosecha y comercialización.'
      },
      {
        question: '¿Cuál es el rango de tasas de interés en Caldas?',
        answer: 'Las tasas en Caldas oscilan entre 22% y 36% EA para préstamos personales, similares al promedio nacional. Las cooperativas cafeteras ofrecen tasas preferenciales (18-28% EA) a sus asociados, especialmente productores de café.'
      },
      {
        question: '¿Puedo obtener microcrédito para turismo cafetero en Caldas?',
        answer: 'Sí, el auge del turismo cafetero ha impulsado líneas de microcrédito para hostales, tours y gastronomía. Entidades como Bancamía, Banco W, y cooperativas ofrecen desde $1.000.000 hasta $15.000.000 COP para emprendimientos turísticos.'
      },
      {
        question: '¿La banca digital funciona bien en zonas rurales de Caldas?',
        answer: 'La conectividad en zonas cafeteras de Caldas es variable. En la zona urbana de Manizales y municipios principales funciona perfectamente. En veredas rurales, la señal puede ser limitada. Se recomienda acercarse a corresponsales bancarios en pueblos cercanos.'
      }
    ]
  },
  // Continue with remaining departments...
  {
    name: 'Risaralda',
    nameEs: 'Risaralda',
    slug: 'risaralda',
    code: '66',
    region: 'Andean Region',
    regionSlug: 'andina',
    capital: 'Pereira',
    capitalSlug: 'pereira',
    population: '980K+',
    area: '4,140 km²',
    municipalities: 14,
    description: 'Coffee region, commercial hub, industrial growth',
    descriptionEs: 'Departamento del Eje Cafetero con fuerte vocación comercial e industrial. Pereira, la capital, es centro de servicios y comercio del occidente colombiano con sólida infraestructura financiera. Alta concentración de bancos y cooperativas en el área metropolitana Pereira-Dosquebradas. La economía cafetera, comercio y manufactura impulsan demanda crediticia diversificada. Las tasas son competitivas debido a alta bancarización. Municipios como Santa Rosa de Cabal y La Virginia tienen oferta financiera limitada pero acceso digital completo. El microcrédito para comercio y servicios es muy activo.',
    economy: ['Coffee', 'Commerce', 'Manufacturing', 'Services', 'Agriculture', 'Tourism', 'Textiles'],
    avgIncome: '$2.500.000 COP/month',
    lenderCount: 26,
    avgRate: '21% - 35% EA',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$30.000.000 COP',
    topCities: ['Pereira', 'Dosquebradas', 'Santa Rosa de Cabal', 'La Virginia', 'Marsella', 'Belén de Umbría'],
    regulatoryNotes: 'Alta competencia bancaria. Fuerte tradición cooperativista cafetera. Innovación fintech en crecimiento.',
    faqItems: [
      {
        question: '¿Cuántas entidades prestan dinero en Risaralda?',
        answer: 'En Risaralda operan aproximadamente 26 entidades financieras, la mayoría concentradas en Pereira y Dosquebradas. La competencia es alta, lo que beneficia a los solicitantes con tasas competitivas y variedad de productos financieros.'
      },
      {
        question: '¿Pereira tiene mejores tasas que otras ciudades intermedias?',
        answer: 'Sí, Pereira ofrece tasas competitivas (21-35% EA) similares a Medellín o Cali debido a su importancia comercial y alta concentración bancaria. La competencia entre entidades mantiene tasas razonables comparado con ciudades más pequeñas.'
      },
      {
        question: '¿Qué opciones hay para comerciantes en Risaralda?',
        answer: 'Los comerciantes en Risaralda tienen múltiples opciones: crédito rotativo, tarjetas empresariales, microcrédito y factoring. Cooperativas como Confiar y bancos como Davivienda ofrecen productos específicos para capital de trabajo de comercios.'
      },
      {
        question: '¿Los caficultores de Risaralda tienen acceso a crédito especial?',
        answer: 'Sí, al igual que en Caldas y Quindío, los caficultores de Risaralda acceden a crédito subsidiado del Fondo Nacional del Café, Finagro y Banco Agrario con tasas desde 8% EA, plazos flexibles y períodos de gracia.'
      },
      {
        question: '¿Puedo solicitar crédito desde Dosquebradas o debo ir a Pereira?',
        answer: 'No es necesario ir a Pereira. Dosquebradas tiene sucursales de todos los bancos principales y múltiples cooperativas. Además, todas las entidades ofrecen solicitud 100% digital, eliminando la necesidad de desplazarse.'
      }
    ]
  },
  {
    name: 'Quindío',
    nameEs: 'Quindío',
    slug: 'quindio',
    code: '63',
    region: 'Andean Region',
    regionSlug: 'andina',
    capital: 'Armenia',
    capitalSlug: 'armenia',
    population: '570K+',
    area: '1,845 km²',
    municipalities: 12,
    description: 'Smallest mainland department, coffee and tourism focus',
    descriptionEs: 'Departamento más pequeño de Colombia continental, corazón del paisaje cultural cafetero. Armenia concentra servicios financieros con presencia de bancos nacionales y cooperativas tradicionales. La economía depende de café, turismo y comercio. Alta tradición cooperativista cafetera. El crédito agropecuario y turístico tiene relevancia particular. Las tasas son estándar competitivas. Municipios como Calarcá, La Tebaida y Montenegro tienen oferta financiera básica. El boom del turismo cafetero impulsa microcréditos para hostales y servicios. La bancarización es alta para el tamaño del departamento.',
    economy: ['Coffee', 'Tourism', 'Commerce', 'Services', 'Agriculture', 'Hospitality', 'Transportation'],
    avgIncome: '$2.300.000 COP/month',
    lenderCount: 20,
    avgRate: '22% - 36% EA',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$25.000.000 COP',
    topCities: ['Armenia', 'Calarcá', 'La Tebaida', 'Montenegro', 'Quimbaya', 'Circasia', 'Salento'],
    regulatoryNotes: 'Supervisión estándar. Cooperativas cafeteras activas. Productos especializados para turismo rural.',
    faqItems: [
      {
        question: '¿Cuántos prestamistas hay en el Quindío?',
        answer: 'En el Quindío operan aproximadamente 20 entidades financieras, concentradas en Armenia. Aunque es un departamento pequeño, la tradición cooperativista cafetera garantiza variedad de opciones crediticias para residentes y comerciantes.'
      },
      {
        question: '¿Hay créditos especiales para negocios de turismo en el Quindío?',
        answer: 'Sí, el auge del turismo cafetero ha generado líneas especializadas. Bancamía, Banco W, cooperativas y Fondo Nacional de Turismo (Fontur) ofrecen microcréditos y crédito PYME desde $2.000.000 hasta $30.000.000 COP para hoteles, fincas y servicios turísticos.'
      },
      {
        question: '¿Las tasas en Armenia son similares a las de Pereira o Manizales?',
        answer: 'Sí, las tasas en Armenia (22-36% EA) son similares a las de Pereira y Manizales por la integración del Eje Cafetero. La competencia entre bancos y cooperativas mantiene tasas razonables y comparables con otras ciudades cafeteras.'
      },
      {
        question: '¿Puedo obtener crédito cafetero en el Quindío?',
        answer: 'Absolutamente. El Quindío es parte del corazón cafetero de Colombia. Banco Agrario, Finagro, cooperativas cafeteras y el Fondo Nacional del Café ofrecen créditos con tasas subsidiadas (8-15% EA) para producción, renovación y comercialización de café.'
      },
      {
        question: '¿Municipios como Salento tienen acceso a servicios financieros?',
        answer: 'Salento, aunque es pueblo turístico pequeño, cuenta con corresponsales bancarios y acceso completo a banca digital. Para créditos más especializados, los residentes pueden acudir a Armenia (30 minutos) o solicitar en línea desde cualquier entidad.'
      }
    ]
  },
  {
    name: 'Tolima',
    nameEs: 'Tolima',
    slug: 'tolima',
    code: '73',
    region: 'Andean Region',
    regionSlug: 'andina',
    capital: 'Ibagué',
    capitalSlug: 'ibague',
    population: '1.4M+',
    area: '23,562 km²',
    municipalities: 47,
    description: 'Agricultural and musical capital, growing economy',
    descriptionEs: 'Departamento andino del valle del río Magdalena, conocido como "Capital Musical de Colombia". Ibagué concentra servicios financieros con bancos nacionales y cooperativas regionales. La economía se basa en agricultura (arroz, café, algodón), ganadería y comercio. El crédito agropecuario tiene gran relevancia. Las tasas son estándar para la región andina. Municipios como Espinal, Melgar y Honda tienen oferta financiera básica. La bancarización es moderada, con mayor presencia de cooperativas rurales. El turismo en Melgar impulsa crédito para servicios de recreación.',
    economy: ['Agriculture', 'Livestock', 'Commerce', 'Services', 'Tourism', 'Mining', 'Transportation'],
    avgIncome: '$2.100.000 COP/month',
    lenderCount: 20,
    avgRate: '23% - 37% EA',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$25.000.000 COP',
    topCities: ['Ibagué', 'Espinal', 'Melgar', 'Honda', 'Chaparral', 'Líbano', 'Purificación'],
    regulatoryNotes: 'Supervisión estándar. Banco Agrario muy activo. Cooperativas rurales consolidadas.',
    faqItems: [
      {
        question: '¿Qué entidades financieras operan en Tolima?',
        answer: 'En Tolima operan aproximadamente 20 entidades financieras, principalmente en Ibagué. Banco Agrario tiene fuerte presencia en municipios rurales. Las cooperativas como Coopcentral y entidades fintech complementan la oferta crediticia en el departamento.'
      },
      {
        question: '¿Puedo obtener crédito para agricultura en Tolima?',
        answer: 'Sí, Tolima es departamento agrícola importante. Banco Agrario, Finagro, y cooperativas ofrecen crédito para cultivos de arroz, café, algodón y ganadería con tasas subsidiadas (10-18% EA), plazos flexibles y montos desde $1.000.000 hasta $100.000.000 COP.'
      },
      {
        question: '¿Las tasas en Ibagué son competitivas?',
        answer: 'Las tasas en Ibagué (23-37% EA) son estándar para ciudades intermedias colombianas. Son ligeramente superiores a Bogotá o Medellín pero competitivas respecto a otros departamentos andinos. Las cooperativas locales ofrecen mejores condiciones a asociados.'
      },
      {
        question: '¿Hay opciones de crédito para turismo en Melgar?',
        answer: 'Sí, Melgar como destino turístico tiene microcréditos disponibles para hoteles, fincas de recreo y servicios turísticos. Bancamía, Banco W y cooperativas ofrecen desde $2.000.000 hasta $20.000.000 COP para negocios turísticos.'
      },
      {
        question: '¿Puedo solicitar préstamos en línea desde municipios rurales de Tolima?',
        answer: 'Sí, todas las entidades principales ofrecen plataformas digitales. La conectividad puede ser variable en zonas muy rurales. Se recomienda usar aplicaciones móviles de bancos como Bancolombia, Davivienda o fintech como Lineru que operan en todo el país.'
      }
    ]
  },
  {
    name: 'Huila',
    nameEs: 'Huila',
    slug: 'huila',
    code: '41',
    region: 'Andean Region',
    regionSlug: 'andina',
    capital: 'Neiva',
    capitalSlug: 'neiva',
    population: '1.2M+',
    area: '19,890 km²',
    municipalities: 37,
    description: 'Coffee and archaeological region, agricultural focus',
    descriptionEs: 'Departamento del sur andino con economía agrícola diversificada. Neiva, la capital, concentra servicios financieros con bancos nacionales y cooperativas. El departamento produce café especial, cacao, arroz y frutas. La zona petrolera de Aipe genera demanda crediticia importante. Las tasas son estándar regionales. Municipios como Pitalito (segunda ciudad), Garzón y La Plata tienen oferta financiera básica con cooperativas activas. El crédito agropecuario y cafetero es relevante. La bancarización rural es moderada. El turismo arqueológico en San Agustín impulsa microcréditos.',
    economy: ['Agriculture', 'Coffee', 'Oil & Gas', 'Commerce', 'Livestock', 'Tourism', 'Mining'],
    avgIncome: '$2.200.000 COP/month',
    lenderCount: 18,
    avgRate: '23% - 38% EA',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$25.000.000 COP',
    topCities: ['Neiva', 'Pitalito', 'Garzón', 'La Plata', 'Campoalegre', 'Aipe', 'San Agustín'],
    regulatoryNotes: 'Supervisión estándar. Banco Agrario muy presente. Cooperativas cafeteras regionales activas.',
    faqItems: [
      {
        question: '¿Cuántas entidades financieras hay en Huila?',
        answer: 'En Huila operan aproximadamente 18 entidades financieras, concentradas en Neiva y Pitalito. Banco Agrario tiene oficinas en la mayoría de municipios. Las cooperativas cafeteras como Coocentral tienen presencia significativa en zonas rurales.'
      },
      {
        question: '¿Hay crédito especial para caficultores en el Huila?',
        answer: 'Sí, el Huila es importante productor de café especial. Finagro, Banco Agrario, Fondo Nacional del Café y cooperativas ofrecen crédito cafetero con tasas subsidiadas (8-15% EA), plazos largos y períodos de gracia para cosecha.'
      },
      {
        question: '¿Las tasas en Neiva son altas?',
        answer: 'Las tasas en Neiva (23-38% EA) son similares al promedio de ciudades intermedias del sur de Colombia. Son moderadamente más altas que en Bogotá pero competitivas para la región. Las cooperativas locales ofrecen mejores condiciones.'
      },
      {
        question: '¿Trabajar en el sector petrolero ayuda a obtener crédito en Huila?',
        answer: 'Sí, los empleados del sector petrolero en Aipe y zonas de extracción tienen acceso facilitado a crédito por estabilidad laboral y buenos ingresos. Muchos acceden a crédito de libranza con descuento de nómina y tasas preferenciales (18-26% EA).'
      },
      {
        question: '¿Puedo obtener crédito para turismo arqueológico en San Agustín?',
        answer: 'Sí, el turismo en San Agustín ha impulsado líneas de microcrédito para hoteles, guías y servicios turísticos. Bancamía, Banco W y cooperativas ofrecen desde $1.500.000 hasta $15.000.000 COP para emprendimientos relacionados con turismo.'
      }
    ]
  },
  {
    name: 'Norte de Santander',
    nameEs: 'Norte de Santander',
    slug: 'norte-de-santander',
    code: '54',
    region: 'Andean Region',
    regionSlug: 'andina',
    capital: 'Cúcuta',
    capitalSlug: 'cucuta',
    population: '1.4M+',
    area: '21,658 km²',
    municipalities: 40,
    description: 'Border department, commercial and agricultural economy',
    descriptionEs: 'Departamento fronterizo con Venezuela en el nororiente andino. Cúcuta, ciudad fronteriza, concentra actividad financiera con bancos nacionales y cooperativas. La economía depende de comercio fronterizo, agricultura y servicios. El contexto fronterizo afecta dinámicas crediticias con mayor volatilidad. Las tasas son moderadamente altas debido a factores de riesgo. Municipios como Ocaña, Pamplona y Villa del Rosario tienen oferta financiera básica. El crédito para comercio y consumo es más demandado que el agropecuario. La bancarización ha crecido tras cierre fronterizo temporal.',
    economy: ['Commerce', 'Agriculture', 'Services', 'Manufacturing', 'Transportation', 'Livestock', 'Trade'],
    avgIncome: '$2.000.000 COP/month',
    lenderCount: 22,
    avgRate: '24% - 39% EA',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$22.000.000 COP',
    topCities: ['Cúcuta', 'Ocaña', 'Pamplona', 'Villa del Rosario', 'Los Patios', 'Tibú', 'El Zulia'],
    regulatoryNotes: 'Supervisión reforzada por contexto fronterizo. Mayor control anti-lavado. Tasas reflejan mayor riesgo percibido.',
    faqItems: [
      {
        question: '¿Cuántas entidades prestan en Norte de Santander?',
        answer: 'En Norte de Santander operan aproximadamente 22 entidades financieras, concentradas en Cúcuta. El contexto fronterizo ha llevado a algunas entidades a reducir operaciones, pero bancos principales y cooperativas mantienen presencia activa.'
      },
      {
        question: '¿Por qué las tasas son más altas en Cúcuta que en otras ciudades?',
        answer: 'Las tasas en Cúcuta (24-39% EA) reflejan mayor riesgo percibido por volatilidad fronteriza, devaluación del bolívar y factores socioeconómicos. Sin embargo, siguen dentro de límites legales de tasa de usura y hay opciones competitivas disponibles.'
      },
      {
        question: '¿Puedo obtener crédito para comercio en Cúcuta?',
        answer: 'Sí, el comercio es la principal actividad económica de Cúcuta. Bancos como Davivienda, Bancolombia y cooperativas ofrecen crédito comercial, rotativo y de capital de trabajo. Los montos y tasas dependen del perfil del negocio y su formalización.'
      },
      {
        question: '¿La situación fronteriza afecta el acceso al crédito?',
        answer: 'La situación fronteriza genera mayor escrutinio en análisis de riesgo. Las entidades piden documentación más completa y verifican con mayor detalle ingresos y actividad económica. Sin embargo, los solicitantes con perfil crediticio sólido acceden normalmente.'
      },
      {
        question: '¿Hay crédito disponible en Ocaña y Pamplona?',
        answer: 'Sí, Ocaña y Pamplona cuentan con sucursales de bancos principales, cooperativas y corresponsales bancarios. Aunque la oferta es menor que en Cúcuta, los residentes pueden acceder a crédito personal, microcrédito y agropecuario.'
      }
    ]
  },

  // CARIBBEAN REGION DEPARTMENTS
  {
    name: 'Atlántico',
    nameEs: 'Atlántico',
    slug: 'atlantico',
    code: '08',
    region: 'Caribbean Region',
    regionSlug: 'caribe',
    capital: 'Barranquilla',
    capitalSlug: 'barranquilla',
    population: '2.6M+',
    area: '3,388 km²',
    municipalities: 23,
    description: 'Major port department, industrial and commercial hub',
    descriptionEs: 'Departamento costeño de alta actividad portuaria e industrial. Barranquilla, principal ciudad de la Costa Caribe, concentra servicios financieros con todos los bancos nacionales presentes. La economía se basa en puerto, industria, comercio y servicios. Alta bancarización y competencia financiera. Municipios del área metropolitana (Soledad, Malambo, Puerto Colombia) tienen amplia oferta crediticia. Las tasas son competitivas por concentración bancaria. El crédito empresarial para comercio exterior es significativo. Cooperativas y fintech complementan oferta para consumo.',
    economy: ['Port Operations', 'Industry', 'Commerce', 'Services', 'Logistics', 'Manufacturing', 'Trade'],
    avgIncome: '$2.700.000 COP/month',
    lenderCount: 35,
    avgRate: '21% - 35% EA',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$35.000.000 COP',
    topCities: ['Barranquilla', 'Soledad', 'Malambo', 'Sabanalarga', 'Puerto Colombia', 'Galapa', 'Baranoa'],
    regulatoryNotes: 'Alta supervisión por volumen de operaciones. Cumplimiento estricto de normativa comercio exterior.',
    faqItems: [
      {
        question: '¿Cuántos prestamistas operan en Atlántico?',
        answer: 'En Atlántico operan aproximadamente 35 entidades financieras, la mayoría concentradas en Barranquilla. Es uno de los departamentos con mayor competencia bancaria en la Costa Caribe, lo que beneficia a los solicitantes con tasas competitivas.'
      },
      {
        question: '¿Las tasas en Barranquilla son similares a las de Bogotá o Medellín?',
        answer: 'Sí, las tasas en Barranquilla (21-35% EA) son comparables a las de grandes ciudades como Bogotá o Medellín debido a su importancia como puerto y centro industrial. La alta competencia bancaria mantiene tasas razonables.'
      },
      {
        question: '¿Hay crédito especializado para empresas de comercio exterior?',
        answer: 'Sí, Barranquilla como puerto principal tiene amplia oferta de crédito para comercio exterior: cartas de crédito, pre y post embarque, factoring internacional. Bancos como Bancolombia, Davivienda y BBVA tienen unidades especializadas.'
      },
      {
        question: '¿Puedo solicitar crédito desde Soledad o Malambo?',
        answer: 'Sí, Soledad y Malambo forman parte del área metropolitana de Barranquilla. Cuentan con sucursales de todos los bancos principales, cooperativas y acceso completo a plataformas digitales. Los procesos y tasas son idénticos a Barranquilla.'
      },
      {
        question: '¿Qué opciones hay para microcrédito en Atlántico?',
        answer: 'Atlántico tiene amplia oferta de microcrédito para comerciantes y emprendedores: Bancamía, Banco W, cooperativas, fintech como Lineru y Kredity. Los montos van desde $500.000 hasta $20.000.000 COP con procesos ágiles.'
      }
    ]
  },
  // Add remaining 22 departments following the same comprehensive pattern...
  // For brevity, I'll add a few more key departments and indicate where others follow

  {
    name: 'Bolívar',
    nameEs: 'Bolívar',
    slug: 'bolivar',
    code: '13',
    region: 'Caribbean Region',
    regionSlug: 'caribe',
    capital: 'Cartagena',
    capitalSlug: 'cartagena',
    population: '2.2M+',
    area: '25,978 km²',
    municipalities: 46,
    description: 'Historic port, tourism and petrochemical center',
    descriptionEs: 'Departamento costeño con Cartagena como principal atractivo turístico y centro petroquímico. La economía combina turismo de alto nivel, actividad portuaria, petroquímica y agricultura. Cartagena concentra servicios financieros con bancos nacionales y entidades especializadas. Las tasas son moderadamente competitivas. Municipios como Magangué, Turbaco y El Carmen de Bolívar tienen oferta básica. El crédito turístico es relevante con demanda estacional. La bancarización urbana es alta, rural moderada. Cooperativas y fintech complementan oferta para consumo y microcrédito.',
    economy: ['Tourism', 'Petrochemicals', 'Port', 'Commerce', 'Agriculture', 'Fishing', 'Services'],
    avgIncome: '$2.600.000 COP/month',
    lenderCount: 30,
    avgRate: '21% - 36% EA',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$35.000.000 COP',
    topCities: ['Cartagena', 'Magangué', 'Turbaco', 'El Carmen de Bolívar', 'Arjona', 'Santa Rosa', 'Mompós'],
    regulatoryNotes: 'Supervisión estándar con enfoque en transparencia turística. Control de operaciones en efectivo.',
    faqItems: [
      {
        question: '¿Cuántas entidades financieras hay en Bolívar?',
        answer: 'En Bolívar operan aproximadamente 30 entidades financieras, principalmente en Cartagena. La ciudad turística y portuaria atrae bancos nacionales, cooperativas y entidades especializadas en crédito empresarial y turismo.'
      },
      {
        question: '¿Hay crédito especializado para negocios turísticos en Cartagena?',
        answer: 'Sí, dado el peso del turismo, entidades como Bancamía, Banco W, Bancolombia y Davivienda ofrecen crédito para hoteles, restaurantes, transporte turístico y servicios. Los montos van desde $5.000.000 hasta $500.000.000 COP según proyecto.'
      },
      {
        question: '¿Las tasas en Cartagena son altas por ser ciudad turística?',
        answer: 'No, las tasas en Cartagena (21-36% EA) son similares al promedio nacional. El alto volumen de transacciones y presencia bancaria mantienen tasas competitivas. Sin embargo, créditos en temporada alta pueden tener mayor demanda.'
      },
      {
        question: '¿Puedo obtener crédito en municipios como Magangué o Mompós?',
        answer: 'Sí, Magangué tiene sucursales bancarias y cooperativas. Mompós, aunque más pequeño, cuenta con corresponsales bancarios y acceso digital. Para montos mayores, se recomienda acercarse a Cartagena o solicitar en línea.'
      },
      {
        question: '¿Los trabajadores del sector petroquímico tienen ventajas crediticias?',
        answer: 'Sí, los empleados de empresas petroquímicas generalmente acceden a crédito de libranza con descuento directo de nómina, tasas preferenciales (16-26% EA) y montos más altos por estabilidad laboral e ingresos.'
      }
    ]
  },
  // Caribbean Region - Additional 6 departments
  {
    name: 'Magdalena',
    nameEs: 'Magdalena',
    slug: 'magdalena',
    code: '47',
    region: 'Caribe',
    regionSlug: 'caribe',
    capital: 'Santa Marta',
    capitalSlug: 'santa-marta',
    population: '1.3M+',
    area: '23,188 km²',
    municipalities: 30,
    description: 'Caribbean coastal department with tourism and agriculture',
    descriptionEs: 'Departamento caribeño con vocación turística, portuaria y agrícola. Santa Marta concentra la actividad financiera con presencia de bancos nacionales y cooperativas. El sector turístico (Tayrona, Ciudad Perdida) impulsa demanda de crédito. La Sierra Nevada presenta desafíos de inclusión financiera. Zona bananera tiene acceso a crédito agrícola especializado. Tasas competitivas en capital, más altas en municipios rurales. Ciénaga y Fundación cuentan con oferta bancaria intermedia. Corresponsalía bancaria en expansión.',
    economy: ['Tourism', 'Agriculture', 'Port Activity', 'Commerce', 'Fishing', 'Mining'],
    avgIncome: '$2.100.000 COP/month',
    lenderCount: 24,
    avgRate: '22% - 37% EA',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$35.000.000 COP',
    topCities: ['Santa Marta', 'Ciénaga', 'Fundación', 'Plato', 'Zona Bananera', 'El Banco'],
    regulatoryNotes: 'Santa Marta concentra supervisión. Programas especiales para inclusión financiera rural.',
    faqItems: [
      {
        question: '¿Cuántas entidades financieras operan en Magdalena?',
        answer: 'En Magdalena operan aproximadamente 24 entidades financieras, principalmente en Santa Marta. La capital turística cuenta con sucursales bancarias en el centro histórico y zonas hoteleras. Ciénaga y Fundación tienen oferta bancaria moderada. Municipios de la Sierra Nevada cuentan con corresponsalía bancaria.'
      },
      {
        question: '¿Cuál es la tasa de interés promedio en Magdalena?',
        answer: 'Las tasas en Magdalena oscilan entre 22% y 37% EA. Santa Marta mantiene tasas competitivas por su desarrollo turístico. La zona bananera accede a tasas preferenciales para crédito agrícola. Municipios rurales enfrentan tasas más altas debido a menor competencia bancaria.'
      },
      {
        question: '¿Qué tipos de préstamos son comunes en Magdalena?',
        answer: 'En Magdalena son comunes: crédito para turismo (hoteles, restaurantes), préstamos agrícolas (banano, palma), microcréditos para comercio, y préstamos personales. Santa Marta tiene fuerte demanda de crédito para construcción y remodelación de infraestructura turística.'
      },
      {
        question: '¿Puedo solicitar préstamos en línea en Magdalena?',
        answer: 'Sí, en Santa Marta la mayoría de entidades ofrecen solicitud 100% digital. La infraestructura turística garantiza buena conectividad. En municipios rurales y la Sierra Nevada, el acceso digital es limitado y muchas personas prefieren corresponsales bancarios.'
      },
      {
        question: '¿Dónde presentar quejas sobre préstamos en Magdalena?',
        answer: 'Las quejas se presentan ante la Superintendencia Financiera por su portal web (www.superfinanciera.gov.co), línea gratuita 018000-951200, o en la Dirección Regional Costa. También puede contactar al Defensor del Consumidor Financiero de su entidad.'
      }
    ]
  },
  {
    name: 'Cesar',
    nameEs: 'Cesar',
    slug: 'cesar',
    code: '20',
    region: 'Caribe',
    regionSlug: 'caribe',
    capital: 'Valledupar',
    capitalSlug: 'valledupar',
    population: '1.3M+',
    area: '22,905 km²',
    municipalities: 25,
    description: 'Caribbean department with mining, agriculture and cultural tourism',
    descriptionEs: 'Departamento con economía basada en minería carbonífera, agricultura y turismo cultural vallenato. Valledupar es el principal centro financiero con presencia de bancos nacionales. La Jagua de Ibirico y zona carbonífera tienen acceso a crédito empresarial especializado. Tasas competitivas en capital, moderadas en municipios intermedios. Sector agropecuario accede a líneas de crédito preferenciales. Inclusión financiera en expansión mediante corresponsalía. Oferta digital creciente en zona urbana.',
    economy: ['Mining', 'Agriculture', 'Livestock', 'Tourism', 'Commerce', 'Energy'],
    avgIncome: '$2.300.000 COP/month',
    lenderCount: 22,
    avgRate: '22% - 37% EA',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$40.000.000 COP',
    topCities: ['Valledupar', 'Aguachica', 'La Jagua de Ibirico', 'Bosconia', 'Codazzi', 'Agustín Codazzi'],
    regulatoryNotes: 'Valledupar centraliza supervisión. Seguimiento especial al sector minero.',
    faqItems: [
      {
        question: '¿Cuántas entidades financieras operan en Cesar?',
        answer: 'En Cesar operan aproximadamente 22 entidades financieras, concentradas en Valledupar. La capital vallenata cuenta con amplia oferta bancaria. Aguachica tiene presencia moderada de entidades. Municipios mineros acceden a financiamiento especializado. La corresponsalía bancaria se expande en zonas rurales.'
      },
      {
        question: '¿Cuál es la tasa de interés promedio en Cesar?',
        answer: 'Las tasas en Cesar oscilan entre 22% y 37% EA. Valledupar ofrece tasas competitivas similares a otras capitales costeñas. El sector agropecuario accede a líneas preferenciales de Finagro. Municipios rurales enfrentan tasas más altas por menor competencia bancaria.'
      },
      {
        question: '¿Qué requisitos son comunes para préstamos en Cesar?',
        answer: 'Los requisitos incluyen: cédula de ciudadanía, ingresos demostrables (mínimo $1.100.000 COP), antigüedad laboral de 3 meses, consulta en Datacrédito, y referencias. Trabajadores del sector minero y agrícola pueden presentar certificaciones específicas de sus empleadores o cooperativas.'
      },
      {
        question: '¿Puedo solicitar préstamos en línea en Cesar?',
        answer: 'Sí, en Valledupar y municipios principales la mayoría de entidades ofrecen solicitud digital. La conectividad ha mejorado significativamente. En zonas rurales, algunos usuarios prefieren acudir a corresponsales bancarios o sucursales físicas por familiaridad con el servicio presencial.'
      },
      {
        question: '¿Dónde presentar quejas sobre préstamos en Cesar?',
        answer: 'Las quejas se presentan ante la Superintendencia Financiera por su portal web, línea 018000-951200, o Dirección Regional Costa. En Valledupar puede acudir al Defensor del Consumidor Financiero de la entidad o la Cámara de Comercio para orientación.'
      }
    ]
  },
  {
    name: 'La Guajira',
    nameEs: 'La Guajira',
    slug: 'la-guajira',
    code: '44',
    region: 'Caribe',
    regionSlug: 'caribe',
    capital: 'Riohacha',
    capitalSlug: 'riohacha',
    population: '1.0M+',
    area: '20,848 km²',
    municipalities: 15,
    description: 'Caribbean department with mining, indigenous communities and coastal economy',
    descriptionEs: 'Departamento con economía basada en minería carbonífera, turismo étnico y comercio fronterizo. Riohacha concentra actividad financiera con oferta bancaria moderada. Alta Guajira presenta desafíos de inclusión financiera por dispersión geográfica y población indígena wayúu. Maicao tiene dinámica comercial especial por zona fronteriza. Tasas más altas que promedio nacional por riesgo percibido. Corresponsalía bancaria clave para acceso rural. Oferta digital limitada en zonas alejadas.',
    economy: ['Mining', 'Trade', 'Tourism', 'Agriculture', 'Salt Production', 'Fishing'],
    avgIncome: '$1.900.000 COP/month',
    lenderCount: 16,
    avgRate: '24% - 40% EA',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$25.000.000 COP',
    topCities: ['Riohacha', 'Maicao', 'Uribia', 'Manaure', 'San Juan del Cesar', 'Fonseca'],
    regulatoryNotes: 'Supervisión especial por zona fronteriza. Programas de inclusión financiera indígena.',
    faqItems: [
      {
        question: '¿Cuántas entidades financieras operan en La Guajira?',
        answer: 'En La Guajira operan aproximadamente 16 entidades financieras, principalmente en Riohacha y Maicao. La capital departamental tiene oferta bancaria básica con sucursales de bancos nacionales. Maicao cuenta con entidades especializadas en comercio. Municipios rurales dependen de corresponsalía bancaria.'
      },
      {
        question: '¿Cuál es la tasa de interés promedio en La Guajira?',
        answer: 'Las tasas en La Guajira oscilan entre 24% y 40% EA, superiores al promedio nacional debido a factores de riesgo geográfico y económico. Riohacha ofrece tasas más competitivas. El acceso a crédito formal en Alta Guajira es limitado, incrementando tasas.'
      },
      {
        question: '¿Hay programas especiales para comunidades wayúu en La Guajira?',
        answer: 'Sí, existen programas de microcrédito y financiamiento adaptado a comunidades indígenas wayúu, gestionados por cooperativas, ONGs y entidades de microfinanzas. Estos programas consideran las particularidades culturales y económicas de las comunidades, con requisitos flexibles y tasas preferenciales.'
      },
      {
        question: '¿Puedo solicitar préstamos en línea en La Guajira?',
        answer: 'En Riohacha y Maicao algunas entidades ofrecen solicitud digital, pero la infraestructura tecnológica es limitada. En Alta Guajira el acceso a internet es restringido, por lo que predomina la atención presencial en corresponsales bancarios o puntos de atención física.'
      },
      {
        question: '¿Dónde presentar quejas sobre préstamos en La Guajira?',
        answer: 'Las quejas se presentan ante la Superintendencia Financiera por su portal web o línea 018000-951200. En Riohacha puede acudir al Defensor del Consumidor Financiero. Para comunidades wayúu, existen programas de orientación en lengua wayuunaiki.'
      }
    ]
  },
  {
    name: 'Córdoba',
    nameEs: 'Córdoba',
    slug: 'cordoba',
    code: '23',
    region: 'Caribe',
    regionSlug: 'caribe',
    capital: 'Montería',
    capitalSlug: 'monteria',
    population: '1.8M+',
    area: '25,020 km²',
    municipalities: 30,
    description: 'Caribbean department with livestock, agriculture and emerging industry',
    descriptionEs: 'Departamento con economía agropecuaria, ganadera y agroindustrial en crecimiento. Montería es centro financiero en expansión con presencia de bancos nacionales y cooperativas. Sector ganadero accede a crédito especializado. Lorica, Sahagún y Cereté cuentan con oferta bancaria intermedia. Tasas competitivas en capital, moderadas en municipios. Acceso a líneas preferenciales para agricultura y ganadería. Inclusión financiera mediante corresponsalía en expansión. Oferta digital en crecimiento.',
    economy: ['Livestock', 'Agriculture', 'Agroindustry', 'Commerce', 'Mining', 'Services'],
    avgIncome: '$2.000.000 COP/month',
    lenderCount: 20,
    avgRate: '23% - 38% EA',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$30.000.000 COP',
    topCities: ['Montería', 'Lorica', 'Sahagún', 'Cereté', 'Montelíbano', 'Tierralta'],
    regulatoryNotes: 'Montería centraliza supervisión. Líneas especiales para sector agropecuario.',
    faqItems: [
      {
        question: '¿Cuántas entidades financieras operan en Córdoba?',
        answer: 'En Córdoba operan aproximadamente 20 entidades financieras, concentradas en Montería. La capital cuenta con sucursales de bancos nacionales y cooperativas agropecuarias. Lorica y Sahagún tienen oferta intermedia. Municipios rurales acceden a corresponsalía bancaria y cooperativas locales.'
      },
      {
        question: '¿Cuál es la tasa de interés promedio en Córdoba?',
        answer: 'Las tasas en Córdoba oscilan entre 23% y 38% EA. Montería ofrece tasas competitivas por su desarrollo reciente. El sector agropecuario y ganadero accede a líneas preferenciales de Finagro y Banco Agrario. Municipios rurales enfrentan tasas moderadas.'
      },
      {
        question: '¿Qué tipos de crédito son comunes para ganaderos en Córdoba?',
        answer: 'Los ganaderos en Córdoba acceden a: crédito de fomento ganadero, líneas de capitalización rural, financiamiento para mejoramiento de pasturas, crédito para compra de semovientes, y líneas de sostenimiento. El Banco Agrario y cooperativas especializadas ofrecen tasas preferenciales con plazos adaptados al ciclo productivo.'
      },
      {
        question: '¿Puedo solicitar préstamos en línea en Córdoba?',
        answer: 'Sí, en Montería la mayoría de entidades ofrecen solicitud digital. La infraestructura ha mejorado significativamente. En municipios intermedios como Lorica y Cereté hay acceso digital creciente. Zonas rurales aún dependen de atención presencial en corresponsales bancarios.'
      },
      {
        question: '¿Dónde presentar quejas sobre préstamos en Córdoba?',
        answer: 'Las quejas se presentan ante la Superintendencia Financiera por su portal web, línea 018000-951200, o Dirección Regional Costa. En Montería puede acudir al Defensor del Consumidor Financiero o la Cámara de Comercio para orientación sobre sus derechos.'
      }
    ]
  },
  {
    name: 'Sucre',
    nameEs: 'Sucre',
    slug: 'sucre',
    code: '70',
    region: 'Caribe',
    regionSlug: 'caribe',
    capital: 'Sincelejo',
    capitalSlug: 'sincelejo',
    population: '920K+',
    area: '10,917 km²',
    municipalities: 26,
    description: 'Caribbean department with agriculture, livestock and emerging commerce',
    descriptionEs: 'Departamento con economía agropecuaria, ganadera y comercial en desarrollo. Sincelejo concentra actividad financiera con presencia de bancos nacionales y cooperativas. Sector ganadero y agrícola accede a crédito especializado. Corozal, Sampués y Tolú cuentan con oferta bancaria básica. Tasas moderadas en capital, más altas en municipios rurales. Líneas preferenciales para agricultura y ganadería. Corresponsalía bancaria en expansión. Turismo costero genera demanda crediticia en San Onofre y Tolú.',
    economy: ['Agriculture', 'Livestock', 'Commerce', 'Tourism', 'Fishing', 'Services'],
    avgIncome: '$1.800.000 COP/month',
    lenderCount: 18,
    avgRate: '23% - 39% EA',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$25.000.000 COP',
    topCities: ['Sincelejo', 'Corozal', 'Sampués', 'Tolú', 'San Marcos', 'Majagual'],
    regulatoryNotes: 'Sincelejo centraliza supervisión. Programas de inclusión financiera rural.',
    faqItems: [
      {
        question: '¿Cuántas entidades financieras operan en Sucre?',
        answer: 'En Sucre operan aproximadamente 18 entidades financieras, principalmente en Sincelejo. La capital cuenta con sucursales de bancos nacionales y cooperativas. Corozal y Sampués tienen oferta básica. Municipios costeros como Tolú acceden a financiamiento turístico. Corresponsalía bancaria se expande en zonas rurales.'
      },
      {
        question: '¿Cuál es la tasa de interés promedio en Sucre?',
        answer: 'Las tasas en Sucre oscilan entre 23% y 39% EA. Sincelejo ofrece tasas moderadas. El sector agropecuario accede a líneas preferenciales de Finagro y Banco Agrario. Municipios rurales enfrentan tasas más altas por menor competencia y mayor riesgo percibido.'
      },
      {
        question: '¿Qué requisitos son comunes para préstamos agrícolas en Sucre?',
        answer: 'Los préstamos agrícolas en Sucre requieren: cédula, certificado de tradición del predio, afiliación a gremio o cooperativa (opcional), ingresos demostrables de actividad agrícola, y consulta en Datacrédito. El Banco Agrario y cooperativas ofrecen condiciones flexibles adaptadas al ciclo de cosecha.'
      },
      {
        question: '¿Puedo solicitar préstamos en línea en Sucre?',
        answer: 'En Sincelejo algunas entidades ofrecen solicitud digital, pero la adopción tecnológica es moderada. Municipios intermedios tienen acceso limitado a servicios en línea. Zonas rurales dependen de corresponsales bancarios y atención presencial por menor infraestructura tecnológica.'
      },
      {
        question: '¿Dónde presentar quejas sobre préstamos en Sucre?',
        answer: 'Las quejas se presentan ante la Superintendencia Financiera por su portal web, línea 018000-951200, o Dirección Regional Costa. En Sincelejo puede contactar al Defensor del Consumidor Financiero de su entidad o acudir a la Cámara de Comercio.'
      }
    ]
  },
  {
    name: 'San Andrés y Providencia',
    nameEs: 'San Andrés y Providencia',
    slug: 'san-andres-y-providencia',
    code: '88',
    region: 'Caribe',
    regionSlug: 'caribe',
    capital: 'San Andrés',
    capitalSlug: 'san-andres',
    population: '80K+',
    area: '53 km²',
    municipalities: 2,
    description: 'Island department with tourism, commerce and port free zone',
    descriptionEs: 'Archipiélago insular con economía basada en turismo, comercio internacional y zona franca portuaria. San Andrés concentra toda la actividad financiera con sucursales de bancos nacionales. Oferta crediticia especializada para turismo, comercio y construcción. Tasas similares a grandes ciudades por dinamismo económico. Providencia tiene acceso limitado a servicios financieros. Infraestructura digital avanzada en San Andrés. Régimen especial de importaciones influye en crédito comercial. Alta demanda de préstamos para sector hotelero.',
    economy: ['Tourism', 'Commerce', 'Port Free Zone', 'Services', 'Fishing', 'Real Estate'],
    avgIncome: '$2.800.000 COP/month',
    lenderCount: 15,
    avgRate: '21% - 34% EA',
    minLoanAmount: '$1.000.000 COP',
    maxLoanAmount: '$60.000.000 COP',
    topCities: ['San Andrés', 'Providencia'],
    regulatoryNotes: 'Supervisión especial por zona franca. Régimen insular diferenciado.',
    faqItems: [
      {
        question: '¿Cuántas entidades financieras operan en San Andrés y Providencia?',
        answer: 'En San Andrés operan aproximadamente 15 entidades financieras, todas en la isla principal. Cuenta con sucursales de bancos nacionales, cooperativas y entidades fintech. Providencia tiene acceso limitado mediante corresponsalía bancaria. El archipiélago mantiene oferta bancaria competitiva por su desarrollo turístico.'
      },
      {
        question: '¿Cuál es la tasa de interés promedio en San Andrés?',
        answer: 'Las tasas en San Andrés oscilan entre 21% y 34% EA, competitivas similar a grandes ciudades. El sector turístico accede a líneas especializadas. El comercio de zona franca tiene financiamiento específico. Las tasas reflejan el dinamismo económico del archipiélago.'
      },
      {
        question: '¿Qué tipos de préstamos son populares en San Andrés?',
        answer: 'En San Andrés son populares: crédito para turismo (hoteles, restaurantes), préstamos para comercio de zona franca, financiamiento para construcción, crédito personal para residentes, y microcréditos para servicios turísticos. El sector hotelero tiene acceso a crédito empresarial especializado.'
      },
      {
        question: '¿Puedo solicitar préstamos en línea en San Andrés?',
        answer: 'Sí, San Andrés cuenta con excelente infraestructura tecnológica y todas las entidades ofrecen solicitud 100% digital. La conectividad es óptima en la isla principal. Providencia tiene acceso limitado a internet, por lo que algunos residentes prefieren atención presencial en corresponsales.'
      },
      {
        question: '¿Dónde presentar quejas sobre préstamos en San Andrés?',
        answer: 'Las quejas se presentan ante la Superintendencia Financiera por su portal web o línea 018000-951200. En San Andrés puede acudir al Defensor del Consumidor Financiero de la entidad. También puede contactar la Cámara de Comercio insular para orientación.'
      }
    ]
  },
  // Pacific Region - 4 departments
  {
    name: 'Valle del Cauca',
    nameEs: 'Valle del Cauca',
    slug: 'valle-del-cauca',
    code: '76',
    region: 'Pacífico',
    regionSlug: 'pacifico',
    capital: 'Cali',
    capitalSlug: 'cali',
    population: '4.8M+',
    area: '22,140 km²',
    municipalities: 42,
    description: 'Pacific department with strong industry, agriculture and port activity',
    descriptionEs: 'Departamento del Pacífico con fuerte desarrollo industrial, agrícola y portuario. Cali es el tercer centro financiero más importante de Colombia con amplia oferta crediticia. Zona azucarera del valle geográfico tiene acceso a financiamiento agroindustrial especializado. Buenaventura, principal puerto del Pacífico, cuenta con crédito comercial robusto. Tasas competitivas en zona urbana. Municipios intermedios como Palmira, Tuluá y Buga tienen buena oferta bancaria. Inclusión financiera en zonas rurales mediante cooperativas.',
    economy: ['Industry', 'Agriculture', 'Port Activity', 'Commerce', 'Services', 'Manufacturing'],
    avgIncome: '$2.600.000 COP/month',
    lenderCount: 40,
    avgRate: '20% - 34% EA',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$60.000.000 COP',
    topCities: ['Cali', 'Buenaventura', 'Palmira', 'Tuluá', 'Buga', 'Cartago'],
    regulatoryNotes: 'Cali concentra supervisión regional. Monitoreo especial al sector portuario en Buenaventura.',
    faqItems: [
      {
        question: '¿Cuántas entidades financieras operan en Valle del Cauca?',
        answer: 'En Valle del Cauca operan aproximadamente 40 entidades financieras, concentradas en Cali. La capital vallecaucana cuenta con sucursales de todos los bancos nacionales e internacionales. Palmira, Tuluá y Buenaventura tienen amplia oferta bancaria. Municipios intermedios cuentan con cooperativas y corresponsales.'
      },
      {
        question: '¿Cuál es la tasa de interés promedio en Valle del Cauca?',
        answer: 'Las tasas en Valle del Cauca oscilan entre 20% y 34% EA, competitivas por ser uno de los principales centros económicos del país. Cali ofrece tasas similares a Bogotá. El sector azucarero accede a financiamiento agroindustrial preferencial. Buenaventura tiene tasas comerciales especializadas.'
      },
      {
        question: '¿Qué tipos de crédito son comunes en Valle del Cauca?',
        answer: 'En Valle del Cauca son comunes: crédito empresarial para industria, préstamos agroindustriales para sector azucarero, financiamiento comercial portuario, crédito personal y de consumo, microcréditos para comercio, y préstamos para construcción. El departamento tiene fuerte actividad crediticia empresarial.'
      },
      {
        question: '¿Puedo solicitar préstamos en línea en Valle del Cauca?',
        answer: 'Sí, en Cali y municipios principales todas las entidades ofrecen solicitud 100% digital. La infraestructura tecnológica es excelente. Buenaventura y zona portuaria cuentan con conectividad robusta. Municipios rurales tienen acceso creciente a servicios digitales mediante corresponsales bancarios.'
      },
      {
        question: '¿Dónde presentar quejas sobre préstamos en Valle del Cauca?',
        answer: 'Las quejas se presentan ante la Superintendencia Financiera por su portal web, línea 018000-951200, o Dirección Regional Occidente en Cali. También puede acudir al Defensor del Consumidor Financiero de su entidad o la Cámara de Comercio de Cali.'
      }
    ]
  },
  {
    name: 'Cauca',
    nameEs: 'Cauca',
    slug: 'cauca',
    code: '19',
    region: 'Pacífico',
    regionSlug: 'pacifico',
    capital: 'Popayán',
    capitalSlug: 'popayan',
    population: '1.5M+',
    area: '29,308 km²',
    municipalities: 42,
    description: 'Pacific department with agriculture, mining and indigenous communities',
    descriptionEs: 'Departamento del Pacífico con economía agrícola, minera y alta población indígena. Popayán concentra actividad financiera con oferta bancaria moderada. Santander de Quilichao y Puerto Tejada tienen presencia intermedia de entidades. Costa pacífica caucana (Guapi, Timbiquí) presenta desafíos de acceso financiero. Tasas moderadas en capital, más altas en zonas rurales. Líneas especiales de microcrédito para comunidades indígenas y afrodescendientes. Corresponsalía bancaria en expansión. Sector agrícola accede a Finagro.',
    economy: ['Agriculture', 'Mining', 'Livestock', 'Commerce', 'Tourism', 'Services'],
    avgIncome: '$1.700.000 COP/month',
    lenderCount: 16,
    avgRate: '24% - 39% EA',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$25.000.000 COP',
    topCities: ['Popayán', 'Santander de Quilichao', 'Puerto Tejada', 'Piendamó', 'Patía', 'Guapi'],
    regulatoryNotes: 'Popayán centraliza supervisión. Programas especiales de inclusión financiera étnica.',
    faqItems: [
      {
        question: '¿Cuántas entidades financieras operan en Cauca?',
        answer: 'En Cauca operan aproximadamente 16 entidades financieras, principalmente en Popayán. La ciudad blanca cuenta con sucursales de bancos nacionales y cooperativas. Santander de Quilichao tiene oferta intermedia. Municipios del norte cuentan con corresponsalía. La costa pacífica tiene acceso limitado a servicios financieros formales.'
      },
      {
        question: '¿Cuál es la tasa de interés promedio en Cauca?',
        answer: 'Las tasas en Cauca oscilan entre 24% y 39% EA. Popayán ofrece tasas moderadas. El sector agrícola accede a líneas preferenciales de Finagro. Zonas rurales y costa pacífica enfrentan tasas más altas por menor competencia bancaria y mayor riesgo percibido.'
      },
      {
        question: '¿Hay programas especiales para comunidades indígenas y afro en Cauca?',
        answer: 'Sí, existen programas de microcrédito adaptados a comunidades indígenas y afrodescendientes, gestionados por cooperativas, cabildos, consejos comunitarios y entidades de microfinanzas. Estos programas consideran cosmovisiones y sistemas económicos comunitarios, con requisitos flexibles y acompañamiento técnico.'
      },
      {
        question: '¿Puedo solicitar préstamos en línea en Cauca?',
        answer: 'En Popayán algunas entidades ofrecen solicitud digital. En municipios del norte como Santander de Quilichao la conectividad ha mejorado. La costa pacífica caucana tiene acceso limitado a internet, por lo que predomina la atención presencial en corresponsales bancarios o puntos físicos.'
      },
      {
        question: '¿Dónde presentar quejas sobre préstamos en Cauca?',
        answer: 'Las quejas se presentan ante la Superintendencia Financiera por su portal web, línea 018000-951200, o Dirección Regional Occidente en Cali. En Popayán puede acudir al Defensor del Consumidor Financiero o la Cámara de Comercio para orientación sobre sus derechos.'
      }
    ]
  },
  {
    name: 'Nariño',
    nameEs: 'Nariño',
    slug: 'narino',
    code: '52',
    region: 'Pacífico',
    regionSlug: 'pacifico',
    capital: 'Pasto',
    capitalSlug: 'pasto',
    population: '1.8M+',
    area: '33,268 km²',
    municipalities: 64,
    description: 'Pacific border department with agriculture, commerce and coastal fishing',
    descriptionEs: 'Departamento fronterizo del Pacífico con economía agrícola, comercial y pesquera. Pasto concentra actividad financiera con presencia de bancos nacionales. Ipiales tiene dinámica comercial especial por zona fronteriza con Ecuador. Tumaco en costa pacífica presenta desafíos de inclusión financiera. Tasas moderadas en capital, más altas en zonas rurales y costa. Comercio fronterizo impulsa crédito especializado. Sector agrícola (café, papa) accede a líneas preferenciales. Corresponsalía bancaria en expansión rural.',
    economy: ['Agriculture', 'Trade', 'Fishing', 'Livestock', 'Mining', 'Services'],
    avgIncome: '$1.700.000 COP/month',
    lenderCount: 18,
    avgRate: '24% - 39% EA',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$30.000.000 COP',
    topCities: ['Pasto', 'Ipiales', 'Tumaco', 'Túquerres', 'Samaniego', 'La Unión'],
    regulatoryNotes: 'Pasto centraliza supervisión. Control especial por zona fronteriza en Ipiales.',
    faqItems: [
      {
        question: '¿Cuántas entidades financieras operan en Nariño?',
        answer: 'En Nariño operan aproximadamente 18 entidades financieras, concentradas en Pasto e Ipiales. La capital nariñense cuenta con sucursales de bancos nacionales y cooperativas. Ipiales tiene oferta bancaria por comercio fronterizo. Tumaco tiene presencia limitada. Municipios rurales dependen de corresponsalía bancaria.'
      },
      {
        question: '¿Cuál es la tasa de interés promedio en Nariño?',
        answer: 'Las tasas en Nariño oscilan entre 24% y 39% EA. Pasto e Ipiales ofrecen tasas moderadas. El sector agrícola (café, papa) accede a líneas preferenciales de Finagro y Banco Agrario. Tumaco y costa pacífica enfrentan tasas más altas por factores de riesgo geográfico.'
      },
      {
        question: '¿Qué tipos de crédito son comunes para comerciantes fronterizos en Ipiales?',
        answer: 'Los comerciantes en Ipiales acceden a: crédito de capital de trabajo para comercio, líneas rotativas para importación, financiamiento para inventarios, microcréditos para pequeños negocios, y préstamos personales. Varias entidades ofrecen productos especializados considerando la dinámica fronteriza con Ecuador.'
      },
      {
        question: '¿Puedo solicitar préstamos en línea en Nariño?',
        answer: 'En Pasto algunas entidades ofrecen solicitud digital. Ipiales tiene conectividad moderada para servicios en línea. Tumaco y costa pacífica presentan limitaciones de infraestructura tecnológica. Zonas rurales dependen de corresponsales bancarios y atención presencial en sucursales.'
      },
      {
        question: '¿Dónde presentar quejas sobre préstamos en Nariño?',
        answer: 'Las quejas se presentan ante la Superintendencia Financiera por su portal web, línea 018000-951200, o Dirección Regional Occidente en Cali. En Pasto puede acudir al Defensor del Consumidor Financiero de su entidad o la Cámara de Comercio de Pasto.'
      }
    ]
  },
  {
    name: 'Chocó',
    nameEs: 'Chocó',
    slug: 'choco',
    code: '27',
    region: 'Pacífico',
    regionSlug: 'pacifico',
    capital: 'Quibdó',
    capitalSlug: 'quibdo',
    population: '530K+',
    area: '46,530 km²',
    municipalities: 30,
    description: 'Pacific rainforest department with mining, fishing and significant inclusion challenges',
    descriptionEs: 'Departamento del Pacífico con mayor biodiversidad y mayores desafíos de inclusión financiera. Quibdó concentra limitada oferta bancaria. Población mayoritariamente afrodescendiente e indígena. Economía basada en minería artesanal, pesca y agricultura de subsistencia. Tasas entre las más altas del país por factores de riesgo. Corresponsalía bancaria limitada por geografía difícil. Programas especiales de microcrédito para comunidades. Acceso digital restringido. Fuertes esfuerzos de inclusión financiera gubernamental y cooperativa.',
    economy: ['Mining', 'Fishing', 'Forestry', 'Agriculture', 'Logging', 'Services'],
    avgIncome: '$1.400.000 COP/month',
    lenderCount: 10,
    avgRate: '26% - 42% EA',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$15.000.000 COP',
    topCities: ['Quibdó', 'Istmina', 'Condoto', 'Tadó', 'Acandí', 'Bahía Solano'],
    regulatoryNotes: 'Supervisión limitada. Programas prioritarios de inclusión financiera étnico-territorial.',
    faqItems: [
      {
        question: '¿Cuántas entidades financieras operan en Chocó?',
        answer: 'En Chocó operan aproximadamente 10 entidades financieras, principalmente en Quibdó. La capital departamental tiene oferta bancaria básica con sucursales limitadas. Municipios como Istmina y Condoto cuentan con corresponsales bancarios. El acceso financiero formal es uno de los más limitados del país por geografía y condiciones socioeconómicas.'
      },
      {
        question: '¿Cuál es la tasa de interés promedio en Chocó?',
        answer: 'Las tasas en Chocó oscilan entre 26% y 42% EA, entre las más altas del país debido a factores de riesgo geográfico, económico y logístico. Quibdó ofrece tasas moderadamente más bajas. Programas de microfinanzas comunitarias ofrecen alternativas con tasas preferenciales para población vulnerable.'
      },
      {
        question: '¿Hay programas especiales para comunidades afro e indígenas en Chocó?',
        answer: 'Sí, existen varios programas de microcrédito y finanzas solidarias adaptados a comunidades afrodescendientes e indígenas del Chocó. Estos programas son gestionados por consejos comunitarios, cabildos, cooperativas étnicas y ONGs, con metodologías flexibles que consideran economías tradicionales y sistemas de producción comunitarios.'
      },
      {
        question: '¿Puedo solicitar préstamos en línea en Chocó?',
        answer: 'El acceso digital en Chocó es muy limitado. Quibdó tiene conectividad básica donde algunas entidades ofrecen servicios en línea. La mayoría de municipios carecen de infraestructura tecnológica adecuada. El acceso financiero depende principalmente de atención presencial en corresponsales bancarios, cooperativas locales o entidades de microfinanzas.'
      },
      {
        question: '¿Dónde presentar quejas sobre préstamos en Chocó?',
        answer: 'Las quejas se presentan ante la Superintendencia Financiera por su línea 018000-951200 (acceso telefónico preferible) o portal web cuando hay conectividad. En Quibdó puede acudir al Defensor del Consumidor Financiero. También existen programas de orientación comunitaria en lenguas nativas y espacios de consejos comunitarios.'
      }
    ]
  },
  // Orinoquía Region - 3 departments
  {
    name: 'Meta',
    nameEs: 'Meta',
    slug: 'meta',
    code: '50',
    region: 'Orinoquía',
    regionSlug: 'orinoquia',
    capital: 'Villavicencio',
    capitalSlug: 'villavicencio',
    population: '1.1M+',
    area: '85,635 km²',
    municipalities: 29,
    description: 'Orinoquía department with agriculture, livestock and oil economy',
    descriptionEs: 'Departamento llanero con economía agropecuaria, ganadera y petrolera en crecimiento. Villavicencio es centro financiero regional con amplia oferta bancaria. Sector ganadero y arrocero acceden a crédito especializado. Granada, Acacías y Puerto López cuentan con oferta bancaria intermedia. Tasas competitivas en capital, moderadas en municipios intermedios. Líneas preferenciales para agricultura y ganadería. Sector petrolero impulsa economía local. Corresponsalía bancaria en expansión. Oferta digital creciente.',
    economy: ['Agriculture', 'Livestock', 'Oil', 'Commerce', 'Agroindustry', 'Services'],
    avgIncome: '$2.200.000 COP/month',
    lenderCount: 24,
    avgRate: '22% - 37% EA',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$40.000.000 COP',
    topCities: ['Villavicencio', 'Acacías', 'Granada', 'Puerto López', 'San Martín', 'Restrepo'],
    regulatoryNotes: 'Villavicencio concentra supervisión. Líneas especiales para sector agropecuario llanero.',
    faqItems: [
      {
        question: '¿Cuántas entidades financieras operan en Meta?',
        answer: 'En Meta operan aproximadamente 24 entidades financieras, concentradas en Villavicencio. La capital llanera cuenta con sucursales de bancos nacionales, cooperativas agropecuarias y entidades fintech. Acacías, Granada y Puerto López tienen oferta intermedia. Municipios rurales acceden a corresponsalía bancaria y cooperativas locales.'
      },
      {
        question: '¿Cuál es la tasa de interés promedio en Meta?',
        answer: 'Las tasas en Meta oscilan entre 22% y 37% EA. Villavicencio ofrece tasas competitivas por su desarrollo económico reciente. El sector agropecuario (ganadería, arroz) accede a líneas preferenciales de Finagro y Banco Agrario. Municipios rurales enfrentan tasas moderadas por menor competencia bancaria.'
      },
      {
        question: '¿Qué tipos de crédito son comunes para ganaderos en Meta?',
        answer: 'Los ganaderos en Meta acceden a: crédito de fomento ganadero, líneas de capitalización rural, financiamiento para mejoramiento de praderas, crédito para compra de ganado, líneas de sostenimiento, y crédito para infraestructura pecuaria. El Banco Agrario, Bancolombia Agropecuario y cooperativas especializadas ofrecen tasas preferenciales.'
      },
      {
        question: '¿Puedo solicitar préstamos en línea en Meta?',
        answer: 'Sí, en Villavicencio la mayoría de entidades ofrecen solicitud 100% digital. La infraestructura tecnológica ha mejorado significativamente. Municipios intermedios como Acacías y Granada tienen acceso digital creciente. Zonas rurales aún dependen parcialmente de atención presencial en corresponsales bancarios.'
      },
      {
        question: '¿Dónde presentar quejas sobre préstamos en Meta?',
        answer: 'Las quejas se presentan ante la Superintendencia Financiera por su portal web, línea 018000-951200, o Dirección Regional Oriente en Bogotá. En Villavicencio puede acudir al Defensor del Consumidor Financiero de su entidad o la Cámara de Comercio de Villavicencio.'
      }
    ]
  },
  {
    name: 'Arauca',
    nameEs: 'Arauca',
    slug: 'arauca',
    code: '81',
    region: 'Orinoquía',
    regionSlug: 'orinoquia',
    capital: 'Arauca',
    capitalSlug: 'arauca',
    population: '290K+',
    area: '23,818 km²',
    municipalities: 7,
    description: 'Border department with oil, livestock and frontier commerce',
    descriptionEs: 'Departamento fronterizo llanero con economía petrolera, ganadera y comercio binacional con Venezuela. Arauca capital concentra actividad financiera con oferta bancaria moderada. Sector petrolero mantiene economía regional estable. Ganadería accede a crédito especializado. Tasas moderadas en capital, influenciadas por situación fronteriza. Saravena tiene presencia bancaria intermedia. Corresponsalía bancaria limitada en municipios rurales. Oferta digital básica en capital.',
    economy: ['Oil', 'Livestock', 'Agriculture', 'Trade', 'Mining', 'Services'],
    avgIncome: '$2.100.000 COP/month',
    lenderCount: 12,
    avgRate: '24% - 38% EA',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$25.000.000 COP',
    topCities: ['Arauca', 'Saravena', 'Tame', 'Arauquita', 'Fortul', 'Cravo Norte'],
    regulatoryNotes: 'Supervisión especial por zona fronteriza. Monitoreo a operaciones de efectivo.',
    faqItems: [
      {
        question: '¿Cuántas entidades financieras operan en Arauca?',
        answer: 'En Arauca operan aproximadamente 12 entidades financieras, principalmente en Arauca capital. La ciudad fronteriza cuenta con sucursales de bancos nacionales y cooperativas. Saravena tiene oferta básica. Municipios como Tame y Arauquita cuentan con corresponsales bancarios. El acceso financiero es moderado por ubicación fronteriza.'
      },
      {
        question: '¿Cuál es la tasa de interés promedio en Arauca?',
        answer: 'Las tasas en Arauca oscilan entre 24% y 38% EA. Arauca capital ofrece tasas moderadas. El sector petrolero accede a crédito preferencial por estabilidad laboral. Ganaderos acceden a líneas de Finagro. La situación fronteriza puede influir en evaluación de riesgo y tasas aplicadas.'
      },
      {
        question: '¿Los trabajadores petroleros tienen ventajas crediticias en Arauca?',
        answer: 'Sí, los empleados del sector petrolero generalmente acceden a crédito de libranza con descuento directo de nómina, tasas preferenciales (18-28% EA), montos más altos y plazos flexibles. Entidades como Bancolombia, Banco de Bogotá y cooperativas especializadas ofrecen productos para este sector.'
      },
      {
        question: '¿Puedo solicitar préstamos en línea en Arauca?',
        answer: 'En Arauca capital algunas entidades ofrecen solicitud digital, pero la adopción es moderada. La infraestructura tecnológica es básica. Municipios rurales tienen acceso limitado a servicios en línea. La mayoría de usuarios prefieren atención presencial en sucursales o corresponsales bancarios por familiaridad.'
      },
      {
        question: '¿Dónde presentar quejas sobre préstamos en Arauca?',
        answer: 'Las quejas se presentan ante la Superintendencia Financiera por su portal web, línea 018000-951200, o Dirección Regional Oriente en Bogotá. En Arauca puede acudir al Defensor del Consumidor Financiero de su entidad o la Cámara de Comercio de Arauca.'
      }
    ]
  },
  {
    name: 'Casanare',
    nameEs: 'Casanare',
    slug: 'casanare',
    code: '85',
    region: 'Orinoquía',
    regionSlug: 'orinoquia',
    capital: 'Yopal',
    capitalSlug: 'yopal',
    population: '420K+',
    area: '44,640 km²',
    municipalities: 19,
    description: 'Orinoquía department with oil, livestock and agricultural economy',
    descriptionEs: 'Departamento llanero con economía petrolera, ganadera y agrícola en crecimiento. Yopal es centro financiero departamental con buena oferta bancaria impulsada por regalías petroleras. Sector ganadero accede a crédito especializado. Aguazul, Villanueva y Tauramena tienen oferta bancaria intermedia relacionada con petróleo. Tasas competitivas en capital. Líneas preferenciales para agricultura y ganadería. Corresponsalía bancaria en expansión. Oferta digital moderada.',
    economy: ['Oil', 'Livestock', 'Agriculture', 'Mining', 'Commerce', 'Services'],
    avgIncome: '$2.400.000 COP/month',
    lenderCount: 16,
    avgRate: '23% - 37% EA',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$35.000.000 COP',
    topCities: ['Yopal', 'Aguazul', 'Villanueva', 'Monterrey', 'Tauramena', 'Maní'],
    regulatoryNotes: 'Yopal centraliza supervisión. Monitoreo a crédito relacionado con sector petrolero.',
    faqItems: [
      {
        question: '¿Cuántas entidades financieras operan en Casanare?',
        answer: 'En Casanare operan aproximadamente 16 entidades financieras, concentradas en Yopal. La capital casanareña cuenta con sucursales de bancos nacionales y cooperativas. Aguazul y Villanueva tienen oferta intermedia por actividad petrolera. Municipios rurales acceden a corresponsalía bancaria y cooperativas agropecuarias.'
      },
      {
        question: '¿Cuál es la tasa de interés promedio en Casanare?',
        answer: 'Las tasas en Casanare oscilan entre 23% y 37% EA. Yopal ofrece tasas competitivas por desarrollo económico relacionado con petróleo. El sector ganadero y agrícola accede a líneas preferenciales de Finagro. Trabajadores petroleros acceden a crédito de libranza con tasas preferenciales.'
      },
      {
        question: '¿Qué tipos de crédito son comunes en Casanare?',
        answer: 'En Casanare son comunes: crédito de libranza para sector petrolero, préstamos ganaderos para capitalización, crédito agrícola (arroz, palma), financiamiento comercial, préstamos personales y de consumo, y microcréditos para servicios. El sector petrolero impulsa fuertemente la economía crediticia del departamento.'
      },
      {
        question: '¿Puedo solicitar préstamos en línea en Casanare?',
        answer: 'En Yopal algunas entidades ofrecen solicitud digital y la conectividad ha mejorado. Municipios petroleros como Aguazul tienen acceso moderado a servicios en línea. Zonas rurales aún dependen de corresponsales bancarios y atención presencial por menor infraestructura tecnológica.'
      },
      {
        question: '¿Dónde presentar quejas sobre préstamos en Casanare?',
        answer: 'Las quejas se presentan ante la Superintendencia Financiera por su portal web, línea 018000-951200, o Dirección Regional Oriente en Bogotá. En Yopal puede acudir al Defensor del Consumidor Financiero de su entidad o la Cámara de Comercio de Casanare.'
      }
    ]
  },
  {
    name: 'Vichada',
    nameEs: 'Vichada',
    slug: 'vichada',
    code: '99',
    region: 'Orinoquía',
    regionSlug: 'orinoquia',
    capital: 'Puerto Carreño',
    capitalSlug: 'puerto-carreno',
    population: '110K+',
    area: '100,242 km²',
    municipalities: 4,
    description: 'Frontier department with livestock, agriculture and inclusion challenges',
    descriptionEs: 'Departamento fronterizo de la Orinoquía con mayores desafíos de inclusión financiera. Puerto Carreño concentra limitada oferta bancaria. Economía basada en ganadería extensiva y agricultura. Población dispersa en vasto territorio. Tasas altas por factores de riesgo y logística. Corresponsalía bancaria muy limitada. Programas especiales de microcrédito rural. Acceso digital restringido. Fuerte dependencia de efectivo. Esfuerzos gubernamentales y cooperativos para mejorar acceso financiero.',
    economy: ['Livestock', 'Agriculture', 'Fishing', 'Forestry', 'Mining', 'Services'],
    avgIncome: '$1.600.000 COP/month',
    lenderCount: 6,
    avgRate: '26% - 42% EA',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$15.000.000 COP',
    topCities: ['Puerto Carreño', 'La Primavera', 'Santa Rosalía', 'Cumaribo'],
    regulatoryNotes: 'Supervisión limitada. Programas prioritarios de inclusión financiera rural y fronteriza.',
    faqItems: [
      {
        question: '¿Cuántas entidades financieras operan en Vichada?',
        answer: 'En Vichada operan aproximadamente 6 entidades financieras, todas con presencia muy limitada en Puerto Carreño. La capital departamental tiene oferta bancaria básica con pocas sucursales. Municipios como La Primavera y Cumaribo tienen acceso extremadamente limitado mediante corresponsales. Es uno de los departamentos con menor acceso financiero del país.'
      },
      {
        question: '¿Cuál es la tasa de interés promedio en Vichada?',
        answer: 'Las tasas en Vichada oscilan entre 26% y 42% EA, entre las más altas del país debido a factores de riesgo geográfico, logístico y económico. Puerto Carreño ofrece tasas moderadamente más bajas. El sector ganadero accede a líneas preferenciales de Finagro cuando cumple requisitos.'
      },
      {
        question: '¿Hay programas especiales para ganaderos en Vichada?',
        answer: 'Sí, existen programas de crédito para ganadería extensiva adaptados a las condiciones del Vichada. El Banco Agrario, Finagro y cooperativas ganaderas ofrecen líneas especiales considerando ciclos largos de producción, factores climáticos y logística compleja. Requisitos flexibles para pequeños y medianos ganaderos.'
      },
      {
        question: '¿Puedo solicitar préstamos en línea en Vichada?',
        answer: 'El acceso digital en Vichada es muy limitado. Puerto Carreño tiene conectividad básica donde pocas entidades ofrecen servicios en línea. La mayoría del departamento carece de infraestructura tecnológica. El acceso financiero depende casi exclusivamente de atención presencial en Puerto Carreño o corresponsales limitados.'
      },
      {
        question: '¿Dónde presentar quejas sobre préstamos en Vichada?',
        answer: 'Las quejas se presentan ante la Superintendencia Financiera por su línea 018000-951200 (acceso telefónico preferible) o portal web cuando hay conectividad. En Puerto Carreño puede intentar contactar al Defensor del Consumidor Financiero, aunque la presencia institucional es limitada.'
      }
    ]
  },
  // Amazon Region - 6 departments
  {
    name: 'Amazonas',
    nameEs: 'Amazonas',
    slug: 'amazonas',
    code: '91',
    region: 'Amazonía',
    regionSlug: 'amazonia',
    capital: 'Leticia',
    capitalSlug: 'leticia',
    population: '80K+',
    area: '109,665 km²',
    municipalities: 2,
    description: 'Amazon rainforest department with tourism, fishing and indigenous communities',
    descriptionEs: 'Departamento amazónico fronterizo con economía basada en turismo, pesca y comercio binacional. Leticia concentra toda actividad financiera con oferta bancaria muy limitada. Alta población indígena amazónica. Tasas altas por aislamiento geográfico. Corresponsalía bancaria prácticamente inexistente fuera de Leticia. Programas especiales de microcrédito para comunidades indígenas. Acceso digital limitado. Fuerte dependencia de efectivo. Comercio transfronterizo con Brasil influye en economía local.',
    economy: ['Tourism', 'Fishing', 'Trade', 'Forestry', 'Agriculture', 'Services'],
    avgIncome: '$1.800.000 COP/month',
    lenderCount: 8,
    avgRate: '26% - 42% EA',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$20.000.000 COP',
    topCities: ['Leticia', 'Puerto Nariño'],
    regulatoryNotes: 'Supervisión limitada. Programas especiales de inclusión financiera indígena amazónica.',
    faqItems: [
      {
        question: '¿Cuántas entidades financieras operan en Amazonas?',
        answer: 'En Amazonas operan aproximadamente 8 entidades financieras, todas con presencia limitada en Leticia. La capital amazónica cuenta con pocas sucursales bancarias y cooperativas. Puerto Nariño tiene acceso muy limitado. El aislamiento geográfico y población dispersa dificultan el acceso financiero formal.'
      },
      {
        question: '¿Cuál es la tasa de interés promedio en Amazonas?',
        answer: 'Las tasas en Amazonas oscilan entre 26% y 42% EA, altas debido al aislamiento geográfico, logística compleja y factores de riesgo. Leticia ofrece tasas moderadamente más bajas. Programas de microfinanzas comunitarias ofrecen alternativas con tasas preferenciales para población vulnerable e indígena.'
      },
      {
        question: '¿Hay programas especiales para comunidades indígenas en Amazonas?',
        answer: 'Sí, existen programas de microcrédito y finanzas solidarias adaptados a más de 60 etnias indígenas del Amazonas. Estos programas son gestionados por cabildos, cooperativas indígenas, ONGs y resguardos, con metodologías que respetan cosmovisiones, economías tradicionales y sistemas de producción comunitarios amazónicos.'
      },
      {
        question: '¿Puedo solicitar préstamos en línea en Amazonas?',
        answer: 'El acceso digital en Amazonas es muy limitado. Leticia tiene conectividad básica donde algunas entidades ofrecen servicios en línea limitados. El resto del departamento carece de infraestructura tecnológica adecuada. El acceso financiero depende de atención presencial en Leticia o programas comunitarios locales.'
      },
      {
        question: '¿Dónde presentar quejas sobre préstamos en Amazonas?',
        answer: 'Las quejas se presentan ante la Superintendencia Financiera por su línea 018000-951200 o portal web cuando hay conectividad. En Leticia puede acudir al Defensor del Consumidor Financiero. También existen programas de orientación comunitaria en lenguas indígenas y espacios de cabildos para resolver conflictos.'
      }
    ]
  },
  {
    name: 'Caquetá',
    nameEs: 'Caquetá',
    slug: 'caqueta',
    code: '18',
    region: 'Amazonía',
    regionSlug: 'amazonia',
    capital: 'Florencia',
    capitalSlug: 'florencia',
    population: '510K+',
    area: '88,965 km²',
    municipalities: 16,
    description: 'Amazon department with agriculture, livestock and post-conflict development',
    descriptionEs: 'Departamento amazónico con economía agropecuaria y ganadería en transición. Florencia concentra actividad financiera con oferta bancaria moderada. Región en proceso de consolidación post-conflicto con programas especiales de crédito rural. Ganadería y agricultura (cacao, caucho) acceden a líneas preferenciales. San Vicente del Caguán y Puerto Rico tienen oferta bancaria básica. Tasas moderadas en capital, más altas en zonas rurales. Corresponsalía bancaria en expansión. Programas de sustitución de cultivos incluyen crédito.',
    economy: ['Agriculture', 'Livestock', 'Forestry', 'Commerce', 'Mining', 'Services'],
    avgIncome: '$1.700.000 COP/month',
    lenderCount: 14,
    avgRate: '24% - 39% EA',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$25.000.000 COP',
    topCities: ['Florencia', 'San Vicente del Caguán', 'Puerto Rico', 'El Doncello', 'La Montañita', 'Belén de los Andaquíes'],
    regulatoryNotes: 'Florencia centraliza supervisión. Líneas especiales post-conflicto y sustitución de cultivos.',
    faqItems: [
      {
        question: '¿Cuántas entidades financieras operan en Caquetá?',
        answer: 'En Caquetá operan aproximadamente 14 entidades financieras, concentradas en Florencia. La capital caqueteña cuenta con sucursales de bancos nacionales y cooperativas agropecuarias. San Vicente del Caguán y Puerto Rico tienen oferta básica. Municipios rurales acceden a corresponsalía bancaria y programas especiales post-conflicto.'
      },
      {
        question: '¿Cuál es la tasa de interés promedio en Caquetá?',
        answer: 'Las tasas en Caquetá oscilan entre 24% y 39% EA. Florencia ofrece tasas moderadas. El sector agropecuario (ganadería, cacao, caucho) accede a líneas preferenciales de Finagro y Banco Agrario. Programas de sustitución de cultivos ofrecen crédito con tasas subsidiadas y acompañamiento técnico.'
      },
      {
        question: '¿Hay programas especiales para agricultores en proceso de sustitución de cultivos?',
        answer: 'Sí, existen programas especiales de crédito para familias campesinas en proceso de sustitución de cultivos ilícitos, gestionados por Banco Agrario, UNODC, USAID y cooperativas. Estos programas ofrecen tasas preferenciales, periodos de gracia, acompañamiento técnico y están articulados con Acuerdos de Paz y PDETs.'
      },
      {
        question: '¿Puedo solicitar préstamos en línea en Caquetá?',
        answer: 'En Florencia algunas entidades ofrecen solicitud digital y la conectividad ha mejorado. Municipios como El Doncello tienen acceso moderado a servicios en línea. Zonas rurales tienen conectividad limitada y muchos usuarios prefieren atención presencial en corresponsales bancarios o cooperativas locales.'
      },
      {
        question: '¿Dónde presentar quejas sobre préstamos en Caquetá?',
        answer: 'Las quejas se presentan ante la Superintendencia Financiera por su portal web, línea 018000-951200, o Dirección Regional Oriente en Bogotá. En Florencia puede acudir al Defensor del Consumidor Financiero de su entidad o la Cámara de Comercio del Caquetá.'
      }
    ]
  },
  {
    name: 'Putumayo',
    nameEs: 'Putumayo',
    slug: 'putumayo',
    code: '86',
    region: 'Amazonía',
    regionSlug: 'amazonia',
    capital: 'Mocoa',
    capitalSlug: 'mocoa',
    population: '360K+',
    area: '24,885 km²',
    municipalities: 13,
    description: 'Amazon border department with agriculture, oil and post-conflict transition',
    descriptionEs: 'Departamento amazónico fronterizo con economía agrícola, petrolera y en transición post-conflicto. Mocoa concentra actividad financiera con oferta bancaria limitada. Puerto Asís tiene presencia bancaria relacionada con petróleo. Programas especiales de crédito para sustitución de cultivos y consolidación territorial. Sector agrícola (café, cacao) accede a líneas preferenciales. Tasas moderadas en capital, más altas en zona rural. Corresponsalía bancaria en expansión. Oferta digital básica.',
    economy: ['Agriculture', 'Oil', 'Livestock', 'Mining', 'Commerce', 'Services'],
    avgIncome: '$1.700.000 COP/month',
    lenderCount: 12,
    avgRate: '24% - 40% EA',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$25.000.000 COP',
    topCities: ['Mocoa', 'Puerto Asís', 'Valle del Guamuez', 'Orito', 'Puerto Guzmán', 'Villagarzón'],
    regulatoryNotes: 'Supervisión limitada. Programas post-conflicto y zona fronteriza. Control anti-lavado.',
    faqItems: [
      {
        question: '¿Cuántas entidades financieras operan en Putumayo?',
        answer: 'En Putumayo operan aproximadamente 12 entidades financieras, principalmente en Mocoa y Puerto Asís. Mocoa cuenta con sucursales de bancos nacionales y cooperativas. Puerto Asís tiene oferta relacionada con sector petrolero. Municipios rurales acceden a corresponsalía bancaria y programas especiales de microcrédito rural.'
      },
      {
        question: '¿Cuál es la tasa de interés promedio en Putumayo?',
        answer: 'Las tasas en Putumayo oscilan entre 24% y 40% EA. Mocoa y Puerto Asís ofrecen tasas moderadas. El sector agrícola (café, cacao) accede a líneas preferenciales de Finagro. Programas de consolidación territorial y sustitución de cultivos ofrecen crédito con tasas subsidiadas y acompañamiento.'
      },
      {
        question: '¿Qué tipos de crédito son comunes en Putumayo?',
        answer: 'En Putumayo son comunes: crédito agrícola para café y cacao, préstamos para sustitución de cultivos, financiamiento ganadero, microcréditos rurales, crédito de libranza para sector petrolero, y préstamos personales. Programas PDETs y acuerdos de paz impulsan financiamiento productivo rural.'
      },
      {
        question: '¿Puedo solicitar préstamos en línea en Putumayo?',
        answer: 'En Mocoa algunas entidades ofrecen solicitud digital básica. Puerto Asís tiene conectividad moderada. Municipios rurales tienen acceso limitado a servicios en línea. La mayoría de usuarios prefieren atención presencial en sucursales, corresponsales bancarios o cooperativas locales por menor infraestructura tecnológica.'
      },
      {
        question: '¿Dónde presentar quejas sobre préstamos en Putumayo?',
        answer: 'Las quejas se presentan ante la Superintendencia Financiera por su portal web, línea 018000-951200, o Dirección Regional Oriente en Bogotá. En Mocoa puede acudir al Defensor del Consumidor Financiero de su entidad o la Cámara de Comercio del Putumayo.'
      }
    ]
  },
  {
    name: 'Guainía',
    nameEs: 'Guainía',
    slug: 'guainia',
    code: '94',
    region: 'Amazonía',
    regionSlug: 'amazonia',
    capital: 'Inírida',
    capitalSlug: 'inirida',
    population: '50K+',
    area: '72,238 km²',
    municipalities: 1,
    description: 'Amazon department with indigenous communities, fishing and extreme financial exclusion',
    descriptionEs: 'Departamento amazónico con mayores desafíos de inclusión financiera del país. Inírida concentra toda actividad financiera extremadamente limitada. Alta población indígena (23 etnias). Economía de subsistencia basada en pesca, agricultura y minería artesanal. Tasas muy altas por aislamiento extremo. Corresponsalía bancaria inexistente. Programas especiales de microfinanzas indígenas. Acceso digital casi nulo. Fuerte dependencia de efectivo y trueque. Esfuerzos gubernamentales y cooperativos por mejorar inclusión.',
    economy: ['Fishing', 'Agriculture', 'Mining', 'Forestry', 'Tourism', 'Services'],
    avgIncome: '$1.300.000 COP/month',
    lenderCount: 4,
    avgRate: '28% - 45% EA',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$10.000.000 COP',
    topCities: ['Inírida'],
    regulatoryNotes: 'Supervisión casi inexistente. Programas prioritarios de inclusión financiera indígena.',
    faqItems: [
      {
        question: '¿Cuántas entidades financieras operan en Guainía?',
        answer: 'En Guainía operan aproximadamente 4 entidades financieras, todas con presencia extremadamente limitada en Inírida. La capital departamental tiene oferta bancaria mínima con una o dos sucursales pequeñas. Es el departamento con menor acceso financiero formal de Colombia. El aislamiento geográfico y población indígena dispersa dificultan enormemente el acceso.'
      },
      {
        question: '¿Cuál es la tasa de interés promedio en Guainía?',
        answer: 'Las tasas en Guainía oscilan entre 28% y 45% EA, las más altas del país debido al aislamiento extremo, logística complejísima y factores de riesgo. Inírida ofrece tasas ligeramente más bajas. Programas de microfinanzas comunitarias e indígenas ofrecen alternativas con tasas más razonables pero cobertura muy limitada.'
      },
      {
        question: '¿Hay programas especiales para comunidades indígenas en Guainía?',
        answer: 'Sí, existen programas de microcrédito y finanzas solidarias adaptados a las 23 etnias indígenas del Guainía. Estos programas son gestionados por cabildos, cooperativas indígenas, ONGs y el programa Banca de las Oportunidades, con metodologías que respetan cosmovisiones, economías de reciprocidad y sistemas productivos tradicionales amazónicos.'
      },
      {
        question: '¿Puedo solicitar préstamos en línea en Guainía?',
        answer: 'El acceso digital en Guainía es prácticamente inexistente. Inírida tiene conectividad muy deficiente y esporádica donde no se ofrecen servicios bancarios en línea. Todo el departamento carece de infraestructura tecnológica. El acceso financiero depende exclusivamente de atención presencial en Inírida o sistemas comunitarios informales.'
      },
      {
        question: '¿Dónde presentar quejas sobre préstamos en Guainía?',
        answer: 'Las quejas se presentan ante la Superintendencia Financiera por su línea 018000-951200 (cuando hay señal telefónica). La presencia institucional en Guainía es mínima. Existen programas de orientación comunitaria en lenguas indígenas y espacios de cabildos y autoridades tradicionales para mediar conflictos financieros.'
      }
    ]
  },
  {
    name: 'Guaviare',
    nameEs: 'Guaviare',
    slug: 'guaviare',
    code: '95',
    region: 'Amazonía',
    regionSlug: 'amazonia',
    capital: 'San José del Guaviare',
    capitalSlug: 'san-jose-del-guaviare',
    population: '120K+',
    area: '53,460 km²',
    municipalities: 4,
    description: 'Amazon department in post-conflict transition with agriculture and eco-tourism',
    descriptionEs: 'Departamento amazónico en proceso de consolidación post-conflicto con economía agropecuaria emergente. San José del Guaviare concentra actividad financiera con oferta bancaria limitada. Región prioritaria para programas de sustitución de cultivos ilícitos. Sector agrícola (caucho, cacao, ganadería sostenible) accede a líneas subsidiadas. Tasas moderadas-altas por factores de riesgo. Corresponsalía bancaria incipiente. Programas PDET impulsan crédito productivo. Ecoturismo genera oportunidades. Oferta digital muy básica.',
    economy: ['Agriculture', 'Livestock', 'Tourism', 'Forestry', 'Mining', 'Commerce'],
    avgIncome: '$1.500.000 COP/month',
    lenderCount: 8,
    avgRate: '25% - 41% EA',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$15.000.000 COP',
    topCities: ['San José del Guaviare', 'El Retorno', 'Calamar', 'Miraflores'],
    regulatoryNotes: 'Supervisión limitada. Programas prioritarios post-conflicto y sustitución cultivos.',
    faqItems: [
      {
        question: '¿Cuántas entidades financieras operan en Guaviare?',
        answer: 'En Guaviare operan aproximadamente 8 entidades financieras, principalmente en San José del Guaviare. La capital departamental cuenta con pocas sucursales bancarias y cooperativas. El Retorno y Calamar tienen acceso muy limitado mediante corresponsales. La región está en proceso de fortalecimiento de inclusión financiera post-conflicto.'
      },
      {
        question: '¿Cuál es la tasa de interés promedio en Guaviare?',
        answer: 'Las tasas en Guaviare oscilan entre 25% y 41% EA, altas debido a factores de riesgo histórico y consolidación territorial. San José ofrece tasas moderadamente más bajas. Programas PDET de sustitución de cultivos y consolidación ofrecen crédito con tasas subsidiadas (12-18% EA) y acompañamiento técnico integral.'
      },
      {
        question: '¿Hay programas especiales para agricultores en proceso de transición en Guaviare?',
        answer: 'Sí, Guaviare es zona PDET prioritaria con múltiples programas de crédito para transición productiva. Banco Agrario, UNODC, cooperativas y ONGs ofrecen financiamiento para caucho, cacao, ganadería sostenible y ecoturismo. Incluyen tasas subsidiadas, periodos de gracia, asistencia técnica y articulación con Acuerdos de Paz.'
      },
      {
        question: '¿Puedo solicitar préstamos en línea en Guaviare?',
        answer: 'El acceso digital en Guaviare es muy limitado. San José del Guaviare tiene conectividad básica donde pocas entidades ofrecen servicios en línea limitados. El resto del departamento carece de infraestructura tecnológica. El acceso financiero depende de atención presencial en San José o programas comunitarios rurales.'
      },
      {
        question: '¿Dónde presentar quejas sobre préstamos en Guaviare?',
        answer: 'Las quejas se presentan ante la Superintendencia Financiera por su línea 018000-951200 o portal web cuando hay conectividad. En San José del Guaviare puede intentar contactar al Defensor del Consumidor Financiero, aunque la presencia institucional es limitada. Existen espacios de mediación comunitaria para resolver conflictos.'
      }
    ]
  },
  {
    name: 'Vaupés',
    nameEs: 'Vaupés',
    slug: 'vaupes',
    code: '97',
    region: 'Amazonía',
    regionSlug: 'amazonia',
    capital: 'Mitú',
    capitalSlug: 'mitu',
    population: '48K+',
    area: '54,135 km²',
    municipalities: 3,
    description: 'Amazon department with indigenous majority, fishing and extreme financial exclusion',
    descriptionEs: 'Departamento amazónico con más del 85% de población indígena y extrema exclusión financiera. Mitú concentra actividad financiera casi inexistente. Economía de subsistencia basada en pesca, caza, recolección y agricultura tradicional. Tasas muy altas por aislamiento extremo. Corresponsalía bancaria inexistente. Programas especiales de microfinanzas indígenas comunitarias. Acceso digital prácticamente nulo. Fuerte dependencia de economía tradicional no monetaria. Desafíos enormes de inclusión financiera formal.',
    economy: ['Fishing', 'Agriculture', 'Forestry', 'Hunting', 'Mining', 'Tourism'],
    avgIncome: '$1.200.000 COP/month',
    lenderCount: 3,
    avgRate: '28% - 45% EA',
    minLoanAmount: '$500.000 COP',
    maxLoanAmount: '$8.000.000 COP',
    topCities: ['Mitú', 'Caruru', 'Taraira'],
    regulatoryNotes: 'Supervisión casi inexistente. Programas prioritarios de inclusión financiera indígena amazónica.',
    faqItems: [
      {
        question: '¿Cuántas entidades financieras operan en Vaupés?',
        answer: 'En Vaupés operan aproximadamente 3 entidades financieras, todas con presencia mínima en Mitú. La capital departamental tiene oferta bancaria extremadamente limitada. Junto con Guainía, es el departamento con menor acceso financiero formal de Colombia. La población mayoritariamente indígena, economía no monetaria y aislamiento extremo dificultan enormemente la inclusión financiera.'
      },
      {
        question: '¿Cuál es la tasa de interés promedio en Vaupés?',
        answer: 'Las tasas en Vaupés oscilan entre 28% y 45% EA, entre las más altas del país debido al aislamiento extremo, logística imposible y factores de riesgo máximos. Mitú ofrece tasas ligeramente más bajas. El acceso a crédito formal es prácticamente nulo para la mayoría de la población.'
      },
      {
        question: '¿Hay programas especiales para comunidades indígenas en Vaupés?',
        answer: 'Sí, existen programas de microcrédito y finanzas solidarias adaptados a las múltiples etnias indígenas del Vaupés (Cubeo, Piratapuyo, Desana, entre otros). Estos programas son gestionados por cabildos, cooperativas indígenas, ONGs y autoridades tradicionales, con metodologías que respetan sistemas económicos tradicionales, chagras comunitarias y economías de reciprocidad amazónicas.'
      },
      {
        question: '¿Puedo solicitar préstamos en línea en Vaupés?',
        answer: 'El acceso digital en Vaupés es prácticamente inexistente. Mitú tiene conectividad muy deficiente y esporádica donde no se ofrecen servicios bancarios en línea. Todo el departamento carece de infraestructura tecnológica. El acceso financiero depende de atención presencial muy limitada en Mitú o sistemas comunitarios indígenas tradicionales.'
      },
      {
        question: '¿Dónde presentar quejas sobre préstamos en Vaupés?',
        answer: 'Las quejas se presentan ante la Superintendencia Financiera por su línea 018000-951200 (cuando hay señal telefónica, muy esporádica). La presencia institucional en Vaupés es mínima. Existen programas de orientación comunitaria en lenguas indígenas y espacios de cabildos, maloqueros y autoridades tradicionales para mediar conflictos financieros.'
      }
    ]
  }
]

// Helper functions
export function getColombiaDepartmentBySlug(slug: string): ColombiaDepartment | undefined {
  return colombiaDepartments.find(dept => dept.slug === slug)
}

export function getColombiaDepartmentsByRegion(regionSlug: string): ColombiaDepartment[] {
  return colombiaDepartments.filter(dept => dept.regionSlug === regionSlug)
}

export function getAllColombiaDepartmentSlugs(): string[] {
  return colombiaDepartments.map(dept => dept.slug)
}

export function getColombiaDepartmentParams() {
  return colombiaDepartments.map(dept => ({
    department: dept.slug
  }))
}
