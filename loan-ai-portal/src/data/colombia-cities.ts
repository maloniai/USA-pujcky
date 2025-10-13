export interface ColombiaCity {
  name: string;
  nameEs: string;
  slug: string;
  regionSlug: string;
  description: string;
  descriptionEs: string;
  population: string;
  avgLoanAmount: string;
  avgRate: string;
  lenderCount: string;
  topLoanTypes: string[];
  topLoanTypesEs: string[];
  nearbyCities: string[];
}

export const colombiaCities: ColombiaCity[] = [
  // Bogotá D.C.
  {
    name: 'Bogotá',
    nameEs: 'Bogotá',
    slug: 'bogota',
    regionSlug: 'bogota',
    description: 'Colombia\'s capital and largest city, major financial and economic hub',
    descriptionEs: 'Capital y ciudad más grande de Colombia, principal centro financiero y económico',
    population: '7.9 millones',
    avgLoanAmount: '$15,000,000 COP',
    avgRate: '24.5%',
    lenderCount: '60+',
    topLoanTypes: ['Personal Loans', 'Business Loans', 'Debt Consolidation'],
    topLoanTypesEs: ['Préstamos Personales', 'Préstamos Empresariales', 'Consolidación de Deudas'],
    nearbyCities: ['Soacha', 'Chía', 'Facatativá', 'Zipaquirá', 'Cajicá']
  },
  {
    name: 'Soacha',
    nameEs: 'Soacha',
    slug: 'soacha',
    regionSlug: 'bogota',
    description: 'Second largest city in Cundinamarca, part of Bogotá metropolitan area',
    descriptionEs: 'Segunda ciudad más grande de Cundinamarca, parte del área metropolitana de Bogotá',
    population: '650,000',
    avgLoanAmount: '$8,000,000 COP',
    avgRate: '26.5%',
    lenderCount: '35+',
    topLoanTypes: ['Personal Loans', 'Home Improvement', 'Emergency Loans'],
    topLoanTypesEs: ['Préstamos Personales', 'Mejoras del Hogar', 'Préstamos de Emergencia'],
    nearbyCities: ['Bogotá', 'Sibaté', 'Granada', 'Silvania']
  },
  {
    name: 'Chía',
    nameEs: 'Chía',
    slug: 'chia',
    regionSlug: 'bogota',
    description: 'Growing municipality north of Bogotá with high quality of life',
    descriptionEs: 'Municipio en crecimiento al norte de Bogotá con alta calidad de vida',
    population: '140,000',
    avgLoanAmount: '$12,000,000 COP',
    avgRate: '25.0%',
    lenderCount: '30+',
    topLoanTypes: ['Personal Loans', 'Vehicle Loans', 'Home Improvement'],
    topLoanTypesEs: ['Préstamos Personales', 'Préstamos Vehiculares', 'Mejoras del Hogar'],
    nearbyCities: ['Bogotá', 'Cajicá', 'Cota', 'Zipaquirá', 'Sopó']
  },
  {
    name: 'Facatativá',
    nameEs: 'Facatativá',
    slug: 'facatativa',
    regionSlug: 'bogota',
    description: 'Important commercial and industrial center west of Bogotá',
    descriptionEs: 'Importante centro comercial e industrial al occidente de Bogotá',
    population: '145,000',
    avgLoanAmount: '$9,000,000 COP',
    avgRate: '26.0%',
    lenderCount: '28+',
    topLoanTypes: ['Personal Loans', 'Business Loans', 'Vehicle Loans'],
    topLoanTypesEs: ['Préstamos Personales', 'Préstamos Empresariales', 'Préstamos Vehiculares'],
    nearbyCities: ['Bogotá', 'Madrid', 'Funza', 'Mosquera', 'Bojacá']
  },

  // Antioquia
  {
    name: 'Medellín',
    nameEs: 'Medellín',
    slug: 'medellin',
    regionSlug: 'antioquia',
    description: 'Colombia\'s second-largest city, innovation and technology hub',
    descriptionEs: 'Segunda ciudad más grande de Colombia, centro de innovación y tecnología',
    population: '2.6 millones',
    avgLoanAmount: '$12,000,000 COP',
    avgRate: '25.8%',
    lenderCount: '55+',
    topLoanTypes: ['Personal Loans', 'Business Loans', 'Education Loans'],
    topLoanTypesEs: ['Préstamos Personales', 'Préstamos Empresariales', 'Préstamos Educativos'],
    nearbyCities: ['Bello', 'Envigado', 'Itagüí', 'La Estrella', 'Sabaneta']
  },
  {
    name: 'Bello',
    nameEs: 'Bello',
    slug: 'bello',
    regionSlug: 'antioquia',
    description: 'Industrial city in the Aburrá Valley, part of Medellín metro area',
    descriptionEs: 'Ciudad industrial del Valle de Aburrá, parte del área metropolitana de Medellín',
    population: '515,000',
    avgLoanAmount: '$10,000,000 COP',
    avgRate: '26.5%',
    lenderCount: '40+',
    topLoanTypes: ['Personal Loans', 'Home Improvement', 'Vehicle Loans'],
    topLoanTypesEs: ['Préstamos Personales', 'Mejoras del Hogar', 'Préstamos Vehiculares'],
    nearbyCities: ['Medellín', 'Copacabana', 'Girardota', 'Barbosa']
  },
  {
    name: 'Itagüí',
    nameEs: 'Itagüí',
    slug: 'itagui',
    regionSlug: 'antioquia',
    description: 'Industrial and commercial center in the Aburrá Valley',
    descriptionEs: 'Centro industrial y comercial en el Valle de Aburrá',
    population: '281,000',
    avgLoanAmount: '$11,000,000 COP',
    avgRate: '26.0%',
    lenderCount: '38+',
    topLoanTypes: ['Personal Loans', 'Business Loans', 'Debt Consolidation'],
    topLoanTypesEs: ['Préstamos Personales', 'Préstamos Empresariales', 'Consolidación de Deudas'],
    nearbyCities: ['Medellín', 'Envigado', 'La Estrella', 'Sabaneta', 'Caldas']
  },
  {
    name: 'Envigado',
    nameEs: 'Envigado',
    slug: 'envigado',
    regionSlug: 'antioquia',
    description: 'Prosperous municipality with high development indicators',
    descriptionEs: 'Municipio próspero con altos indicadores de desarrollo',
    population: '235,000',
    avgLoanAmount: '$13,000,000 COP',
    avgRate: '25.5%',
    lenderCount: '42+',
    topLoanTypes: ['Personal Loans', 'Vehicle Loans', 'Home Improvement'],
    topLoanTypesEs: ['Préstamos Personales', 'Préstamos Vehiculares', 'Mejoras del Hogar'],
    nearbyCities: ['Medellín', 'Itagüí', 'Sabaneta', 'El Retiro', 'Caldas']
  },
  {
    name: 'Rionegro',
    nameEs: 'Rionegro',
    slug: 'rionegro',
    regionSlug: 'antioquia',
    description: 'Fast-growing city in eastern Antioquia, textile and manufacturing hub',
    descriptionEs: 'Ciudad de rápido crecimiento en el oriente antioqueño, centro textil y manufacturero',
    population: '125,000',
    avgLoanAmount: '$11,500,000 COP',
    avgRate: '25.8%',
    lenderCount: '32+',
    topLoanTypes: ['Personal Loans', 'Business Loans', 'Vehicle Loans'],
    topLoanTypesEs: ['Préstamos Personales', 'Préstamos Empresariales', 'Préstamos Vehiculares'],
    nearbyCities: ['Medellín', 'La Ceja', 'El Carmen', 'Marinilla', 'Guarne']
  },

  // Valle del Cauca
  {
    name: 'Cali',
    nameEs: 'Cali',
    slug: 'cali',
    regionSlug: 'valle-del-cauca',
    description: 'Third-largest city in Colombia, sports and culture capital',
    descriptionEs: 'Tercera ciudad más grande de Colombia, capital deportiva y cultural',
    population: '2.2 millones',
    avgLoanAmount: '$11,000,000 COP',
    avgRate: '26.2%',
    lenderCount: '50+',
    topLoanTypes: ['Personal Loans', 'Business Loans', 'Medical Expenses'],
    topLoanTypesEs: ['Préstamos Personales', 'Préstamos Empresariales', 'Gastos Médicos'],
    nearbyCities: ['Palmira', 'Yumbo', 'Jamundí', 'Candelaria', 'Florida']
  },
  {
    name: 'Palmira',
    nameEs: 'Palmira',
    slug: 'palmira',
    regionSlug: 'valle-del-cauca',
    description: 'Agricultural and industrial center near Cali',
    descriptionEs: 'Centro agrícola e industrial cerca de Cali',
    population: '318,000',
    avgLoanAmount: '$9,500,000 COP',
    avgRate: '26.8%',
    lenderCount: '35+',
    topLoanTypes: ['Personal Loans', 'Agricultural Loans', 'Business Loans'],
    topLoanTypesEs: ['Préstamos Personales', 'Préstamos Agrícolas', 'Préstamos Empresariales'],
    nearbyCities: ['Cali', 'Candelaria', 'Pradera', 'Florida', 'El Cerrito']
  },
  {
    name: 'Buenaventura',
    nameEs: 'Buenaventura',
    slug: 'buenaventura',
    regionSlug: 'valle-del-cauca',
    description: 'Main port city on Colombia\'s Pacific coast',
    descriptionEs: 'Principal ciudad portuaria en la costa Pacífica de Colombia',
    population: '415,000',
    avgLoanAmount: '$8,500,000 COP',
    avgRate: '27.5%',
    lenderCount: '28+',
    topLoanTypes: ['Personal Loans', 'Business Loans', 'Emergency Loans'],
    topLoanTypesEs: ['Préstamos Personales', 'Préstamos Empresariales', 'Préstamos de Emergencia'],
    nearbyCities: ['Cali', 'Dagua', 'Jamundí']
  },
  {
    name: 'Tuluá',
    nameEs: 'Tuluá',
    slug: 'tulua',
    regionSlug: 'valle-del-cauca',
    description: 'Commercial center of central Valle del Cauca',
    descriptionEs: 'Centro comercial del centro del Valle del Cauca',
    population: '215,000',
    avgLoanAmount: '$9,000,000 COP',
    avgRate: '27.0%',
    lenderCount: '30+',
    topLoanTypes: ['Personal Loans', 'Agricultural Loans', 'Vehicle Loans'],
    topLoanTypesEs: ['Préstamos Personales', 'Préstamos Agrícolas', 'Préstamos Vehiculares'],
    nearbyCities: ['Buga', 'Sevilla', 'Andalucía', 'Bugalagrande', 'Riofrío']
  },
  {
    name: 'Yumbo',
    nameEs: 'Yumbo',
    slug: 'yumbo',
    regionSlug: 'valle-del-cauca',
    description: 'Industrial city adjacent to Cali',
    descriptionEs: 'Ciudad industrial adyacente a Cali',
    population: '125,000',
    avgLoanAmount: '$10,000,000 COP',
    avgRate: '26.5%',
    lenderCount: '32+',
    topLoanTypes: ['Personal Loans', 'Business Loans', 'Vehicle Loans'],
    topLoanTypesEs: ['Préstamos Personales', 'Préstamos Empresariales', 'Préstamos Vehiculares'],
    nearbyCities: ['Cali', 'Palmira', 'Vijes', 'La Cumbre']
  },

  // Atlántico
  {
    name: 'Barranquilla',
    nameEs: 'Barranquilla',
    slug: 'barranquilla',
    regionSlug: 'atlantico',
    description: 'Fourth-largest city, major Caribbean port and industrial center',
    descriptionEs: 'Cuarta ciudad más grande, importante puerto caribeño y centro industrial',
    population: '1.3 millones',
    avgLoanAmount: '$10,000,000 COP',
    avgRate: '27.5%',
    lenderCount: '45+',
    topLoanTypes: ['Personal Loans', 'Business Loans', 'Education Loans'],
    topLoanTypesEs: ['Préstamos Personales', 'Préstamos Empresariales', 'Préstamos Educativos'],
    nearbyCities: ['Soledad', 'Malambo', 'Puerto Colombia', 'Galapa', 'Santo Tomás']
  },
  {
    name: 'Soledad',
    nameEs: 'Soledad',
    slug: 'soledad',
    regionSlug: 'atlantico',
    description: 'Second largest city in Atlántico, part of Barranquilla metro area',
    descriptionEs: 'Segunda ciudad más grande de Atlántico, parte del área metropolitana de Barranquilla',
    population: '665,000',
    avgLoanAmount: '$8,500,000 COP',
    avgRate: '28.0%',
    lenderCount: '32+',
    topLoanTypes: ['Personal Loans', 'Home Improvement', 'Emergency Loans'],
    topLoanTypesEs: ['Préstamos Personales', 'Mejoras del Hogar', 'Préstamos de Emergencia'],
    nearbyCities: ['Barranquilla', 'Malambo', 'Sabanalarga', 'Juan de Acosta']
  },
  {
    name: 'Malambo',
    nameEs: 'Malambo',
    slug: 'malambo',
    regionSlug: 'atlantico',
    description: 'Industrial municipality in the Barranquilla metropolitan area',
    descriptionEs: 'Municipio industrial en el área metropolitana de Barranquilla',
    population: '135,000',
    avgLoanAmount: '$8,000,000 COP',
    avgRate: '28.2%',
    lenderCount: '28+',
    topLoanTypes: ['Personal Loans', 'Business Loans', 'Vehicle Loans'],
    topLoanTypesEs: ['Préstamos Personales', 'Préstamos Empresariales', 'Préstamos Vehiculares'],
    nearbyCities: ['Barranquilla', 'Soledad', 'Sabanagrande', 'Galapa']
  },
  {
    name: 'Sabanalarga',
    nameEs: 'Sabanalarga',
    slug: 'sabanalarga',
    regionSlug: 'atlantico',
    description: 'Agricultural and commercial center in northern Atlántico',
    descriptionEs: 'Centro agrícola y comercial en el norte de Atlántico',
    population: '108,000',
    avgLoanAmount: '$7,500,000 COP',
    avgRate: '28.5%',
    lenderCount: '25+',
    topLoanTypes: ['Personal Loans', 'Agricultural Loans', 'Emergency Loans'],
    topLoanTypesEs: ['Préstamos Personales', 'Préstamos Agrícolas', 'Préstamos de Emergencia'],
    nearbyCities: ['Barranquilla', 'Soledad', 'Polonuevo', 'Luruaco']
  },

  // Santander
  {
    name: 'Bucaramanga',
    nameEs: 'Bucaramanga',
    slug: 'bucaramanga',
    regionSlug: 'santander',
    description: 'Fifth-largest city, commercial and industrial hub of northeastern Colombia',
    descriptionEs: 'Quinta ciudad más grande, centro comercial e industrial del nororiente colombiano',
    population: '610,000',
    avgLoanAmount: '$9,500,000 COP',
    avgRate: '26.8%',
    lenderCount: '42+',
    topLoanTypes: ['Personal Loans', 'Business Loans', 'Education Loans'],
    topLoanTypesEs: ['Préstamos Personales', 'Préstamos Empresariales', 'Préstamos Educativos'],
    nearbyCities: ['Floridablanca', 'Girón', 'Piedecuesta', 'Los Santos', 'Lebrija']
  },
  {
    name: 'Floridablanca',
    nameEs: 'Floridablanca',
    slug: 'floridablanca',
    regionSlug: 'santander',
    description: 'Part of Bucaramanga metropolitan area with strong industrial sector',
    descriptionEs: 'Parte del área metropolitana de Bucaramanga con fuerte sector industrial',
    population: '275,000',
    avgLoanAmount: '$9,000,000 COP',
    avgRate: '27.0%',
    lenderCount: '35+',
    topLoanTypes: ['Personal Loans', 'Vehicle Loans', 'Home Improvement'],
    topLoanTypesEs: ['Préstamos Personales', 'Préstamos Vehiculares', 'Mejoras del Hogar'],
    nearbyCities: ['Bucaramanga', 'Girón', 'Piedecuesta', 'Santander']
  },
  {
    name: 'Girón',
    nameEs: 'Girón',
    slug: 'giron',
    regionSlug: 'santander',
    description: 'Historic colonial town in the Bucaramanga metro area',
    descriptionEs: 'Ciudad colonial histórica en el área metropolitana de Bucaramanga',
    population: '185,000',
    avgLoanAmount: '$8,500,000 COP',
    avgRate: '27.2%',
    lenderCount: '30+',
    topLoanTypes: ['Personal Loans', 'Home Improvement', 'Emergency Loans'],
    topLoanTypesEs: ['Préstamos Personales', 'Mejoras del Hogar', 'Préstamos de Emergencia'],
    nearbyCities: ['Bucaramanga', 'Floridablanca', 'Piedecuesta', 'Lebrija', 'Los Santos']
  },
  {
    name: 'Piedecuesta',
    nameEs: 'Piedecuesta',
    slug: 'piedecuesta',
    regionSlug: 'santander',
    description: 'Growing municipality in the Bucaramanga metropolitan area',
    descriptionEs: 'Municipio en crecimiento en el área metropolitana de Bucaramanga',
    population: '145,000',
    avgLoanAmount: '$8,200,000 COP',
    avgRate: '27.5%',
    lenderCount: '28+',
    topLoanTypes: ['Personal Loans', 'Business Loans', 'Vehicle Loans'],
    topLoanTypesEs: ['Préstamos Personales', 'Préstamos Empresariales', 'Préstamos Vehiculares'],
    nearbyCities: ['Bucaramanga', 'Floridablanca', 'Girón', 'Tona', 'Aratoca']
  },
  {
    name: 'Cartagena',
    nameEs: 'Cartagena',
    slug: 'cartagena',
    regionSlug: 'atlantico',
    description: 'Historic Caribbean port city, major tourist and cultural center',
    descriptionEs: 'Ciudad portuaria histórica del Caribe, importante centro turístico y cultural',
    population: '1.0 millón',
    avgLoanAmount: '$10,500,000 COP',
    avgRate: '27.0%',
    lenderCount: '48+',
    topLoanTypes: ['Personal Loans', 'Business Loans', 'Tourism Loans'],
    topLoanTypesEs: ['Préstamos Personales', 'Préstamos Empresariales', 'Préstamos Turísticos'],
    nearbyCities: ['Barranquilla', 'Turbaco', 'Arjona', 'Magangué']
  }
];

export function getColombiaCityBySlug(slug: string): ColombiaCity | undefined {
  return colombiaCities.find(city => city.slug === slug);
}

export function getColombiaCitiesByRegion(regionSlug: string): ColombiaCity[] {
  return colombiaCities.filter(city => city.regionSlug === regionSlug);
}

export function getAllColombiaCitySlugs(): string[] {
  return colombiaCities.map(city => city.slug);
}
