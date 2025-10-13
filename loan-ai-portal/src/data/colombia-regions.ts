export interface ColombiaRegion {
  name: string;
  nameEs: string;
  slug: string;
  description: string;
  descriptionEs: string;
  population: string;
  avgLoanAmount: string;
  avgRate: string;
  maxLoanAmount: string;
  topLoanTypes: string[];
  topLoanTypesEs: string[];
  regulations: string[];
  regulationsEs: string[];
  majorCities: string[];
}

export const colombiaRegions: ColombiaRegion[] = [
  {
    name: 'Bogotá',
    nameEs: 'Bogotá D.C.',
    slug: 'bogota',
    description: 'The capital and largest city, major financial hub of Colombia',
    descriptionEs: 'La capital y ciudad más grande, principal centro financiero de Colombia',
    population: '7.9 millones',
    avgLoanAmount: '$15,000,000 COP',
    avgRate: '24.5%',
    maxLoanAmount: '$150,000,000 COP',
    topLoanTypes: ['Personal Loans', 'Business Loans', 'Debt Consolidation'],
    topLoanTypesEs: ['Préstamos Personales', 'Préstamos Empresariales', 'Consolidación de Deudas'],
    regulations: [
      'Maximum interest rate capped at 48% annual effective rate',
      'All lenders must be registered with Superintendencia Financiera',
      '5 business days cooling-off period for loan cancellation',
      'Mandatory disclosure of all fees and charges upfront',
      'Protection against abusive collection practices'
    ],
    regulationsEs: [
      'Tasa de interés máxima limitada al 48% anual efectivo',
      'Todos los prestamistas deben estar registrados en la Superintendencia Financiera',
      'Periodo de reflexión de 5 días hábiles para cancelación',
      'Divulgación obligatoria de todas las tarifas y cargos por adelantado',
      'Protección contra prácticas abusivas de cobro'
    ],
    majorCities: ['Bogotá', 'Soacha', 'Chía', 'Facatativá']
  },
  {
    name: 'Antioquia',
    nameEs: 'Antioquia',
    slug: 'antioquia',
    description: 'Second most populous department, home to Medellín innovation hub',
    descriptionEs: 'Segundo departamento más poblado, hogar del centro de innovación de Medellín',
    population: '6.6 millones',
    avgLoanAmount: '$12,000,000 COP',
    avgRate: '25.8%',
    maxLoanAmount: '$120,000,000 COP',
    topLoanTypes: ['Personal Loans', 'Home Improvement', 'Vehicle Loans'],
    topLoanTypesEs: ['Préstamos Personales', 'Mejoras del Hogar', 'Préstamos Vehiculares'],
    regulations: [
      'Regulated by Superintendencia Financiera de Colombia',
      'Consumer protection under Law 1328 of 2009',
      'Mandatory credit history reporting to credit bureaus',
      'Right to early repayment without penalties',
      'Financial education requirements for high-risk loans'
    ],
    regulationsEs: [
      'Regulado por la Superintendencia Financiera de Colombia',
      'Protección al consumidor bajo la Ley 1328 de 2009',
      'Reporte obligatorio de historial crediticio a centrales de riesgo',
      'Derecho a pago anticipado sin penalidades',
      'Requisitos de educación financiera para préstamos de alto riesgo'
    ],
    majorCities: ['Medellín', 'Bello', 'Itagüí', 'Envigado', 'Rionegro']
  },
  {
    name: 'Valle del Cauca',
    nameEs: 'Valle del Cauca',
    slug: 'valle-del-cauca',
    description: 'Pacific region economic center with strong commercial activity',
    descriptionEs: 'Centro económico de la región Pacífica con fuerte actividad comercial',
    population: '4.6 millones',
    avgLoanAmount: '$11,000,000 COP',
    avgRate: '26.2%',
    maxLoanAmount: '$100,000,000 COP',
    topLoanTypes: ['Personal Loans', 'Business Loans', 'Emergency Loans'],
    topLoanTypesEs: ['Préstamos Personales', 'Préstamos Empresariales', 'Préstamos de Emergencia'],
    regulations: [
      'Interest rates regulated by Colombian Central Bank',
      'Transparency requirements for all loan terms',
      'Protection against discriminatory lending practices',
      'Mandatory credit counseling for high-debt borrowers',
      'Right to dispute incorrect credit information'
    ],
    regulationsEs: [
      'Tasas de interés reguladas por el Banco Central de Colombia',
      'Requisitos de transparencia para todos los términos del préstamo',
      'Protección contra prácticas crediticias discriminatorias',
      'Asesoría crediticia obligatoria para prestatarios con alta deuda',
      'Derecho a disputar información crediticia incorrecta'
    ],
    majorCities: ['Cali', 'Palmira', 'Buenaventura', 'Tuluá', 'Yumbo']
  },
  {
    name: 'Atlántico',
    nameEs: 'Atlántico',
    slug: 'atlantico',
    description: 'Caribbean coastal department with Barranquilla as its economic center',
    descriptionEs: 'Departamento costero del Caribe con Barranquilla como su centro económico',
    population: '2.7 millones',
    avgLoanAmount: '$10,000,000 COP',
    avgRate: '27.5%',
    maxLoanAmount: '$90,000,000 COP',
    topLoanTypes: ['Personal Loans', 'Medical Expenses', 'Education Loans'],
    topLoanTypesEs: ['Préstamos Personales', 'Gastos Médicos', 'Préstamos Educativos'],
    regulations: [
      'Compliance with consumer protection laws',
      'Registration requirements with financial authorities',
      'Limits on late payment fees and charges',
      'Borrower rights protection under Law 1480 of 2011',
      'Data protection according to Law 1581 of 2012'
    ],
    regulationsEs: [
      'Cumplimiento de leyes de protección al consumidor',
      'Requisitos de registro con autoridades financieras',
      'Límites en cargos y comisiones por mora',
      'Protección de derechos del prestatario bajo Ley 1480 de 2011',
      'Protección de datos según Ley 1581 de 2012'
    ],
    majorCities: ['Barranquilla', 'Soledad', 'Malambo', 'Sabanalarga']
  },
  {
    name: 'Santander',
    nameEs: 'Santander',
    slug: 'santander',
    description: 'Northeastern department known for oil industry and commerce',
    descriptionEs: 'Departamento del noreste conocido por la industria petrolera y el comercio',
    population: '2.2 millones',
    avgLoanAmount: '$9,500,000 COP',
    avgRate: '26.8%',
    maxLoanAmount: '$85,000,000 COP',
    topLoanTypes: ['Personal Loans', 'Vehicle Loans', 'Business Expansion'],
    topLoanTypesEs: ['Préstamos Personales', 'Préstamos Vehiculares', 'Expansión Empresarial'],
    regulations: [
      'Supervised by Superintendencia Financiera',
      'Maximum usury rate enforcement',
      'Mandatory loan insurance disclosures',
      'Consumer complaint resolution mechanisms',
      'Anti-money laundering compliance requirements'
    ],
    regulationsEs: [
      'Supervisado por la Superintendencia Financiera',
      'Aplicación de la tasa máxima de usura',
      'Divulgación obligatoria de seguros de préstamo',
      'Mecanismos de resolución de quejas del consumidor',
      'Requisitos de cumplimiento antilavado de dinero'
    ],
    majorCities: ['Bucaramanga', 'Floridablanca', 'Girón', 'Piedecuesta']
  }
];

export function getColombiaRegionBySlug(slug: string): ColombiaRegion | undefined {
  return colombiaRegions.find(region => region.slug === slug);
}

export function getAllColombiaRegionSlugs(): string[] {
  return colombiaRegions.map(region => region.slug);
}
