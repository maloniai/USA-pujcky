import { DEFAULT_LOCALE, Locale } from '@/lib/i18n'

interface IntroCopy {
  title: string
  lead: string
  description: string
}

interface SearchCopy {
  heading: string
  searchLabel: string
  resultLabelSingular: string
  resultLabelPlural: string
}

interface StatLabels {
  population: string
  avgLoanAmount: string
  avgInterestRate: string
  maxLoanAmount: string
}

interface HighlightCard {
  title: string
  description: string
  items: string[]
}

interface RegionInsight {
  title: string
  description: string
}

interface FaqItem {
  question: string
  answer: string
}

interface StatesPageCopy {
  breadcrumbStates: string
  intro: IntroCopy
  search: SearchCopy
  statHeading: string
  statLabels: StatLabels
  stateCardLabels: {
    regulations: string
    popularCities: string
  }
  regulationsSection: {
    title: string
    intro: string
    bullets: string[]
  }
  lowRateHighlight: HighlightCard
  highLimitHighlight: HighlightCard
  verificationNotice: {
    title: string
    body: string
  }
  regionOverviewTitle: string
  regionInsights: RegionInsight[]
  faqTitle: string
  faqs: FaqItem[]
  cta: {
    title: string
    description: string
  }
}

const statesPageCopy: Record<Locale, StatesPageCopy> = {
  en: {
    breadcrumbStates: 'All 50 States',
    intro: {
      title: 'Personal Loans by State - Compare Rates & Requirements',
      lead:
        'Find state-specific personal loan information, requirements, and regulations.',
      description:
        'Compare average rates, loan amounts, and lending laws across all 50 US states. Each state has unique lending regulations, interest rate caps, and consumer protection laws. Use our comprehensive guide to understand personal loan options in your state.',
    },
    search: {
      heading: 'Find Personal Loan Information for Your State',
      searchLabel: 'Search by state name, abbreviation, or city',
      resultLabelSingular: 'Showing 1 state',
      resultLabelPlural: 'Showing {count} states',
    },
    statHeading: 'Understanding State-Specific Personal Loan Requirements',
    statLabels: {
      population: 'Population',
      avgLoanAmount: 'Avg. Loan Amount',
      avgInterestRate: 'Avg. Interest Rate',
      maxLoanAmount: 'Max Loan Amount',
    },
    stateCardLabels: {
      regulations: 'Key Regulations',
      popularCities: 'Popular Cities',
    },
    regulationsSection: {
      title: 'Why State Laws Matter for Personal Loans',
      intro:
        'Personal loan regulations vary significantly across the United States. Understanding your state\'s specific regulations helps you:',
      bullets: [
        'Know the maximum interest rates lenders can charge',
        'Understand your consumer rights and protections',
        'Find licensed and regulated lenders in your state',
        'Avoid predatory lending practices',
        'Compare loan offers within legal limits',
      ],
    },
    lowRateHighlight: {
      title: 'States with Lowest Average Rates',
      description:
        'Some states consistently offer lower average interest rates due to competitive markets and favorable regulations:',
      items: [
        'California – 8.5% average with strong consumer protections',
        'New York – 8.6% average with strict usury laws',
        'Massachusetts – 8.8% average with comprehensive regulations',
        'Washington – 8.9% average with consumer protections',
      ],
    },
    highLimitHighlight: {
      title: 'States with Highest Loan Limits',
      description:
        'These states allow higher maximum loan amounts for qualified borrowers:',
      items: [
        'California & New York – Up to $100,000',
        'Washington & Massachusetts – Up to $90,000',
        'Florida & Texas – Up to $85,000',
        'Arizona & Oregon – Up to $80,000',
      ],
    },
    verificationNotice: {
      title: 'Important: Verify Your State\'s Current Regulations',
      body:
        'Lending laws and regulations can change. Always verify current requirements with your state\'s banking department or financial regulatory agency. The information provided here is for general educational purposes and should not be considered legal or financial advice.',
    },
    regionOverviewTitle: 'Common State Loan Regulations by Region',
    regionInsights: [
      {
        title: 'Northeast Region',
        description:
          'States like New York, Massachusetts, and New Jersey typically have strong consumer protection laws with strict interest rate caps and comprehensive licensing requirements for lenders.',
      },
      {
        title: 'Southeast Region',
        description:
          'Florida, Georgia, and North Carolina offer diverse lending options with varying regulations, balancing consumer protection with market competition.',
      },
      {
        title: 'Midwest Region',
        description:
          'Illinois, Ohio, and Michigan often follow the Uniform Consumer Credit Code, providing consistent protections across the region with moderate rates and reasonable maximum loan amounts.',
      },
      {
        title: 'Southwest Region',
        description:
          'Texas and Arizona feature competitive lending markets with substantial consumer choice, higher loan limits, and flexible terms.',
      },
      {
        title: 'West Region',
        description:
          'California, Washington, and Oregon offer comprehensive regulations, competitive rates, high loan limits, and strong borrower safeguards.',
      },
    ],
    faqTitle: 'Frequently Asked Questions About State Personal Loans',
    faqs: [
      {
        question: 'Can I get a personal loan from a lender in a different state?',
        answer:
          'Yes. Many online lenders operate across multiple states, but they must be licensed where you live and follow your state\'s regulations, including interest rate caps and disclosure requirements.',
      },
      {
        question: 'How do state laws affect my personal loan interest rate?',
        answer:
          'State laws set maximum interest rates that lenders can charge. Your credit profile determines where you fall within those limits, so both factors influence your final rate.',
      },
      {
        question: 'What consumer protections do states provide for personal loans?',
        answer:
          'Most states require lenders to be licensed, provide clear disclosures, follow fair lending practices, and limit certain fees. Many offer complaint processes through state regulatory agencies.',
      },
      {
        question: 'Are personal loan requirements different in each state?',
        answer:
          'While core requirements are similar, some states have additional documentation needs, waiting periods, or consumer disclosures. Check with lenders licensed in your area for specifics.',
      },
      {
        question: 'How can I verify if a lender is licensed in my state?',
        answer:
          'Contact your state banking department or financial regulatory agency. Most maintain online databases of licensed lenders. Always verify a lender before sharing personal information.',
      },
      {
        question: 'Which states have the best personal loan rates?',
        answer:
          'California, New York, Massachusetts, Washington, and New Jersey typically see the lowest averages thanks to competitive markets and strong consumer protections.',
      },
    ],
    cta: {
      title: 'Ready to Apply for a Personal Loan in Your State?',
      description:
        'Get matched with licensed lenders in your state. Quick application, fast decisions, and competitive rates. Our network includes lenders operating in all 50 states with full regulatory compliance.',
    },
  },
  es: {
    breadcrumbStates: 'Todos los estados',
    intro: {
      title: 'Préstamos personales por estado: compara tasas y requisitos',
      lead:
        'Encuentra información específica de cada estado sobre préstamos personales, requisitos y regulaciones.',
      description:
        'Compara tasas promedio, montos de préstamo y leyes de financiamiento en los 50 estados de EE. UU. Cada estado tiene límites de interés y protecciones distintas. Usa esta guía para entender tus opciones según tu ubicación.',
    },
    search: {
      heading: 'Encuentra información sobre préstamos en tu estado',
      searchLabel: 'Busca por nombre de estado, abreviación o ciudad',
      resultLabelSingular: 'Mostrando 1 estado',
      resultLabelPlural: 'Mostrando {count} estados',
    },
    statHeading: 'Comprende los requisitos de préstamos personales por estado',
    statLabels: {
      population: 'Población',
      avgLoanAmount: 'Monto promedio del préstamo',
      avgInterestRate: 'Tasa de interés promedio',
      maxLoanAmount: 'Monto máximo del préstamo',
    },
    stateCardLabels: {
      regulations: 'Regulaciones clave',
      popularCities: 'Ciudades populares',
    },
    regulationsSection: {
      title: 'Por qué importan las leyes estatales para los préstamos personales',
      intro:
        'Las regulaciones varían significativamente en cada estado. Conocer las leyes de tu estado te ayuda a:',
      bullets: [
        'Saber la tasa máxima que pueden cobrar los prestamistas',
        'Entender tus derechos y protecciones como consumidor',
        'Encontrar prestamistas autorizados y regulados',
        'Evitar prácticas de financiamiento abusivas',
        'Comparar ofertas dentro de los límites legales',
      ],
    },
    lowRateHighlight: {
      title: 'Estados con tasas promedio más bajas',
      description:
        'Algunos estados mantienen tasas competitivas gracias a mercados activos y regulaciones favorables:',
      items: [
        'California – 8.5% de promedio con fuertes protecciones al consumidor',
        'Nueva York – 8.6% de promedio con estrictas leyes de usura',
        'Massachusetts – 8.8% de promedio con regulaciones integrales',
        'Washington – 8.9% de promedio con protecciones al prestatario',
      ],
    },
    highLimitHighlight: {
      title: 'Estados con límites de préstamo más altos',
      description:
        'Estos estados permiten montos máximos más elevados para prestatarios calificados:',
      items: [
        'California y Nueva York – Hasta $100,000',
        'Washington y Massachusetts – Hasta $90,000',
        'Florida y Texas – Hasta $85,000',
        'Arizona y Oregón – Hasta $80,000',
      ],
    },
    verificationNotice: {
      title: 'Importante: verifica las regulaciones vigentes de tu estado',
      body:
        'Las leyes y regulaciones pueden cambiar. Confirma la información con el departamento bancario o agencia financiera de tu estado. Esta guía es educativa y no reemplaza el asesoramiento legal o financiero.',
    },
    regionOverviewTitle: 'Regulaciones comunes de préstamos por región',
    regionInsights: [
      {
        title: 'Región Noreste',
        description:
          'Estados como Nueva York, Massachusetts y Nueva Jersey ofrecen fuertes protecciones al consumidor con límites estrictos de tasa e importantes requisitos de licencia.',
      },
      {
        title: 'Región Sureste',
        description:
          'Florida, Georgia y Carolina del Norte equilibran la protección al consumidor con mercados competitivos, brindando opciones diversas de financiamiento.',
      },
      {
        title: 'Región Medio Oeste',
        description:
          'Illinois, Ohio y Michigan suelen seguir el Código Uniforme de Crédito al Consumidor, manteniendo protecciones consistentes, tasas moderadas y límites razonables.',
      },
      {
        title: 'Región Suroeste',
        description:
          'Texas y Arizona cuentan con mercados muy competitivos, amplia oferta de prestamistas y montos máximos elevados con términos flexibles.',
      },
      {
        title: 'Región Oeste',
        description:
          'California, Washington y Oregón combinan regulaciones completas, tasas competitivas, altos límites y sólidas garantías para los prestatarios.',
      },
    ],
    faqTitle: 'Preguntas frecuentes sobre préstamos por estado',
    faqs: [
      {
        question: '¿Puedo obtener un préstamo personal de un prestamista en otro estado?',
        answer:
          'Sí. Muchos prestamistas en línea operan en varios estados, pero deben estar licenciados en tu lugar de residencia y respetar las regulaciones locales, incluidos los límites de tasa.',
      },
      {
        question: '¿Cómo afectan las leyes estatales a mi tasa de interés?',
        answer:
          'Cada estado fija un máximo legal. Tu perfil crediticio determina la tasa dentro de ese rango, por lo que la regulación y tu historial influyen en el resultado final.',
      },
      {
        question: '¿Qué protecciones ofrecen los estados a los consumidores?',
        answer:
          'La mayoría exige licencias, divulgaciones claras, prácticas de crédito justas y limitaciones sobre cargos adicionales. Muchos permiten presentar quejas ante agencias estatales.',
      },
      {
        question: '¿Los requisitos de préstamo cambian entre estados?',
        answer:
          'Los requisitos básicos son similares, pero algunos estados exigen documentación adicional, periodos de espera o divulgaciones específicas. Consulta prestamistas autorizados en tu área.',
      },
      {
        question: '¿Cómo verifico si un prestamista está autorizado en mi estado?',
        answer:
          'Contacta al departamento bancario o agencia financiera de tu estado. La mayoría publica directorios de prestamistas autorizados. Verifica siempre antes de compartir datos personales.',
      },
      {
        question: '¿Qué estados tienen las mejores tasas?',
        answer:
          'California, Nueva York, Massachusetts, Washington y Nueva Jersey suelen registrar los promedios más bajos gracias a mercados competitivos y fuertes protecciones.',
      },
    ],
    cta: {
      title: '¿Listo para solicitar un préstamo en tu estado?',
      description:
        'Conéctate con prestamistas autorizados en tu estado. Solicitud rápida, decisiones ágiles y tasas competitivas. Nuestra red cubre los 50 estados con cumplimiento regulatorio completo.',
    },
  },
  // Czech: Not applicable for US states - returns English fallback in getter
  cs: {
    breadcrumbStates: 'All 50 States',
    intro: {
      title: 'Personal Loans by State - Compare Rates & Requirements',
      lead:
        'Find state-specific personal loan information, requirements, and regulations.',
      description:
        'Compare average rates, loan amounts, and lending laws across all 50 US states. Each state has unique lending regulations, interest rate caps, and consumer protection laws. Use our comprehensive guide to understand personal loan options in your state.',
    },
    search: {
      heading: 'Find Personal Loan Information for Your State',
      searchLabel: 'Search by state name, abbreviation, or city',
      resultLabelSingular: 'Showing 1 state',
      resultLabelPlural: 'Showing {count} states',
    },
    statHeading: 'Understand Personal Loan Requirements by State',
    statLabels: {
      population: 'Population',
      avgLoanAmount: 'Average loan amount',
      avgInterestRate: 'Average interest rate',
      maxLoanAmount: 'Maximum loan amount',
    },
    stateCardLabels: {
      regulations: 'Key regulations',
      popularCities: 'Popular cities',
    },
    regulationsSection: {
      title: 'Why State Laws Matter for Personal Loans',
      intro:
        'Lending regulations vary significantly by state. Understanding your state\'s laws helps you:',
      bullets: [
        'Know the maximum interest rate lenders can charge',
        'Understand your rights and consumer protections',
        'Find lenders that are properly licensed and regulated',
        'Avoid predatory lending practices',
        'Compare offers within legal limits',
      ],
    },
    lowRateHighlight: {
      title: 'States with Lowest Average Rates',
      description:
        'Some states maintain competitive rates thanks to active markets and favorable regulations:',
      items: [
        'California – 8.5% average with strong consumer protections',
        'New York – 8.6% average with strict usury laws',
        'Massachusetts – 8.8% average with comprehensive regulations',
        'Washington – 8.9% average with borrower protections',
      ],
    },
    highLimitHighlight: {
      title: 'States with Highest Loan Limits',
      description:
        'These states allow higher maximum loan amounts for qualified borrowers:',
      items: [
        'California & New York – Up to $100,000',
        'Washington & Massachusetts – Up to $90,000',
        'Florida & Texas – Up to $85,000',
        'Arizona & Oregon – Up to $80,000',
      ],
    },
    verificationNotice: {
      title: 'Important: Verify Your State\'s Current Regulations',
      body:
        'Laws and regulations can change. Always verify information with your state\'s banking department or financial services agency. This guide is educational and does not replace legal or financial advice.',
    },
    regionOverviewTitle: 'Common Lending Regulations by Region',
    regionInsights: [
      {
        title: 'Northeast Region',
        description:
          'States like New York, Massachusetts, and New Jersey offer strong consumer protections with strict rate caps and significant licensing requirements.',
      },
      {
        title: 'Southeast Region',
        description:
          'Florida, Georgia, and North Carolina balance consumer protection with competitive markets, providing diverse lending options.',
      },
      {
        title: 'Midwest Region',
        description:
          'Illinois, Ohio, and Michigan often follow the Uniform Consumer Credit Code, maintaining consistent protections, moderate rates, and reasonable limits.',
      },
      {
        title: 'Southwest Region',
        description:
          'Texas and Arizona feature highly competitive markets, broad lender availability, and high maximum amounts with flexible terms.',
      },
      {
        title: 'West Region',
        description:
          'California, Washington, and Oregon combine comprehensive regulations, competitive rates, high limits, and strong borrower guarantees.',
      },
    ],
    faqTitle: 'Frequently Asked Questions About Loans by State',
    faqs: [
      {
        question: 'Can I get a personal loan from a lender in another state?',
        answer:
          'Yes. Many online lenders operate in multiple states, but they must be licensed in your state of residence and comply with local regulations, including rate caps.',
      },
      {
        question: 'How do state laws affect my interest rate?',
        answer:
          'Each state sets a legal maximum rate. Your credit profile determines the rate within that range, so both regulation and your history influence the final outcome.',
      },
      {
        question: 'What protections do states offer to consumers?',
        answer:
          'Most require licenses, clear disclosures, fair credit practices, and limitations on additional fees. Many allow you to file complaints with state agencies.',
      },
      {
        question: 'Do loan requirements change between states?',
        answer:
          'Basic requirements are similar, but some states require additional documentation, waiting periods, or specific disclosures. Check with licensed lenders in your area.',
      },
      {
        question: 'How can I verify if a lender is licensed in my state?',
        answer:
          'Contact your state\'s banking department or financial services agency. Most publish directories of licensed lenders. Always verify before sharing personal information.',
      },
      {
        question: 'Which states have the best rates?',
        answer:
          'California, New York, Massachusetts, Washington, and New Jersey typically have the lowest averages thanks to competitive markets and strong protections.',
      },
    ],
    cta: {
      title: 'Ready to Apply for a Personal Loan in Your State?',
      description:
        'Get matched with licensed lenders in your state. Quick application, fast decisions, and competitive rates. Our network includes lenders operating in all 50 states with full regulatory compliance.',
    },
  },
}

export function getStatesPageCopy(locale: Locale): StatesPageCopy {
  return statesPageCopy[locale] ?? statesPageCopy[DEFAULT_LOCALE]
}

export type { StatesPageCopy }
