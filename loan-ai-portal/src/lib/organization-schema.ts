export type OrganizationLocale = 'en' | 'es'

export function buildOrganizationSchema(locale: OrganizationLocale = 'en') {
  const isSpanish = locale.startsWith('es')

  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness', 'FinancialService'],
    '@id': 'https://loan-platform.com/#organization',
    name: isSpanish ? 'Portal de Préstamos IA' : 'Loan AI Portal',
    alternateName: isSpanish ? 'Portal IA' : 'Loan AI',
    url: 'https://loan-platform.com',
    logo: 'https://loan-platform.com/logo.png',
    description: isSpanish
      ? 'La plataforma líder en Estados Unidos que ofrece precalificación impulsada por IA en 2 minutos mediante consulta blanda, conectando a solicitantes hispanohablantes con préstamos personales en los 50 estados.'
      : "America's leading AI-powered personal loan matching platform serving 2 million+ borrowers across all 50 United States with 2-minute soft-pull pre-qualification and competitive rates from 100+ licensed lenders.",
    foundingDate: '2020',
    slogan: isSpanish ? 'Coincidencia IA inteligente, mejores tasas de préstamo' : 'Smart AI Matching, Better Loan Rates',
    additionalType: [
      'https://schema.org/FinancialService',
      'https://schema.org/LocalBusiness'
    ],
    category: 'https://schema.org/FinancialService',
    telephone: '+1-800-LOAN-AI',
    currenciesAccepted: 'USD',
    paymentAccepted: 'BankTransfer, CreditCard, DebitCard',
    priceRange: '$$',
    keywords: isSpanish
      ? [
          'préstamos personales',
          'comparador de préstamos',
          'plataforma de préstamos IA',
          'marketplace de finanzas al consumidor',
          'usBanksCategory:PersonalLoans',
          'usBanksCategory:DigitalLending'
        ]
      : [
          'personal loans',
          'loan comparison',
          'AI lending platform',
          'consumer finance marketplace',
          'usBanksCategory:PersonalLoans',
          'usBanksCategory:DigitalLending'
        ],
    inLanguage: isSpanish ? ['es-US', 'en-US'] : ['en-US', 'es-US'],
    ethicsPolicy: 'https://loan-platform.com/disclosures',
    privacyPolicy: 'https://loan-platform.com/privacy',
    publishingPrinciples: 'https://loan-platform.com/terms',
    founder: {
      '@type': 'Person',
      '@id': 'https://loan-platform.com/#founder',
      name: 'Rostislav Sikora',
      jobTitle: 'Founder & Chief Executive Officer',
      sameAs: [
        'https://www.linkedin.com/in/rostislav-sikora',
        'https://www.multitude.com/',
        'https://www.confindo.com/',
        'https://www.moneetech.com/'
      ],
      worksFor: {
        '@id': 'https://loan-platform.com/#organization'
      },
      knowsAbout: [
        'Consumer Lending',
        'Fintech Compliance',
        'Artificial Intelligence',
        'Credit Risk Management',
        'Go-to-Market Strategy'
      ],
      award: [
        'Scaled AI-powered lending platforms across the EU and US markets',
        'Led 25+ year career in regulated consumer finance and banking'
      ],
      affiliation: [
        {
          '@type': 'Organization',
          name: 'Multitude Bank p.l.c.',
          sameAs: 'https://www.multitude.com/'
        },
        {
          '@type': 'Organization',
          name: 'Confindo Group',
          sameAs: 'https://www.confindo.com/'
        }
      ]
    },
    founders: [
      {
        '@id': 'https://loan-platform.com/#founder'
      }
    ],
    contactPoint: [{
      '@type': 'ContactPoint',
      telephone: '+1-800-LOAN-AI',
      contactType: 'Customer Service',
      areaServed: 'US',
      availableLanguage: isSpanish ? ['Spanish', 'English'] : ['English', 'Spanish'],
      contactOption: 'TollFree',
      hoursAvailable: [{
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday'
        ],
        opens: '07:00',
        closes: '22:00',
        validThrough: '2025-12-31'
      }, {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '08:00',
        closes: '20:00',
        validThrough: '2025-12-31'
      }]
    }, {
      '@type': 'ContactPoint',
      telephone: '+1-800-562-6244',
      contactType: 'Compliance Inquiries',
      areaServed: 'US',
      availableLanguage: isSpanish ? ['Spanish'] : ['English'],
      contactOption: 'TollFree',
      email: 'compliance@loan-platform.com'
    }],
    email: 'maloni@outlook.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Online Service',
      addressLocality: 'Nationwide',
      addressRegion: 'US',
      postalCode: '00000',
      addressCountry: 'US'
    },
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      opens: '07:00',
      closes: '22:00',
      validThrough: '2025-12-31'
    }, {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '08:00',
      closes: '20:00',
      validThrough: '2025-12-31'
    }],
    availableLanguage: isSpanish ? ['Spanish', 'English'] : ['English', 'Spanish'],
    areaServed: [{
      '@type': 'Country',
      name: 'United States',
      '@id': 'https://www.wikidata.org/wiki/Q30'
    }, {
      '@type': 'State',
      name: 'Alabama'
    }, {
      '@type': 'State',
      name: 'Alaska'
    }, {
      '@type': 'State',
      name: 'Arizona'
    }, {
      '@type': 'State',
      name: 'Arkansas'
    }, {
      '@type': 'State',
      name: 'California'
    }, {
      '@type': 'State',
      name: 'Colorado'
    }, {
      '@type': 'State',
      name: 'Connecticut'
    }, {
      '@type': 'State',
      name: 'Delaware'
    }, {
      '@type': 'State',
      name: 'Florida'
    }, {
      '@type': 'State',
      name: 'Georgia'
    }, {
      '@type': 'State',
      name: 'Hawaii'
    }, {
      '@type': 'State',
      name: 'Idaho'
    }, {
      '@type': 'State',
      name: 'Illinois'
    }, {
      '@type': 'State',
      name: 'Indiana'
    }, {
      '@type': 'State',
      name: 'Iowa'
    }, {
      '@type': 'State',
      name: 'Kansas'
    }, {
      '@type': 'State',
      name: 'Kentucky'
    }, {
      '@type': 'State',
      name: 'Louisiana'
    }, {
      '@type': 'State',
      name: 'Maine'
    }, {
      '@type': 'State',
      name: 'Maryland'
    }, {
      '@type': 'State',
      name: 'Massachusetts'
    }, {
      '@type': 'State',
      name: 'Michigan'
    }, {
      '@type': 'State',
      name: 'Minnesota'
    }, {
      '@type': 'State',
      name: 'Mississippi'
    }, {
      '@type': 'State',
      name: 'Missouri'
    }, {
      '@type': 'State',
      name: 'Montana'
    }, {
      '@type': 'State',
      name: 'Nebraska'
    }, {
      '@type': 'State',
      name: 'Nevada'
    }, {
      '@type': 'State',
      name: 'New Hampshire'
    }, {
      '@type': 'State',
      name: 'New Jersey'
    }, {
      '@type': 'State',
      name: 'New Mexico'
    }, {
      '@type': 'State',
      name: 'New York'
    }, {
      '@type': 'State',
      name: 'North Carolina'
    }, {
      '@type': 'State',
      name: 'North Dakota'
    }, {
      '@type': 'State',
      name: 'Ohio'
    }, {
      '@type': 'State',
      name: 'Oklahoma'
    }, {
      '@type': 'State',
      name: 'Oregon'
    }, {
      '@type': 'State',
      name: 'Pennsylvania'
    }, {
      '@type': 'State',
      name: 'Rhode Island'
    }, {
      '@type': 'State',
      name: 'South Carolina'
    }, {
      '@type': 'State',
      name: 'South Dakota'
    }, {
      '@type': 'State',
      name: 'Tennessee'
    }, {
      '@type': 'State',
      name: 'Texas'
    }, {
      '@type': 'State',
      name: 'Utah'
    }, {
      '@type': 'State',
      name: 'Vermont'
    }, {
      '@type': 'State',
      name: 'Virginia'
    }, {
      '@type': 'State',
      name: 'Washington'
    }, {
      '@type': 'State',
      name: 'West Virginia'
    }, {
      '@type': 'State',
      name: 'Wisconsin'
    }, {
      '@type': 'State',
      name: 'Wyoming'
    }],
    serviceArea: {
      '@type': 'AdministrativeArea',
      name: 'United States'
    },
    serviceType: isSpanish ? 'Servicio de coincidencia de préstamos personales' : 'Personal Loan Matching Service',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: isSpanish ? 'Productos de préstamos personales' : 'Personal Loan Products',
      itemListElement: [{
        '@type': 'Offer',
        itemOffered: {
          '@type': 'LoanOrCredit',
          name: isSpanish ? 'Préstamo personal a plazos' : 'Personal Installment Loan',
          description: isSpanish
            ? 'Préstamos personales sin garantía desde $1,000 hasta $100,000 con plazos de 3 meses a 7 años'
            : 'Unsecured personal loans from $1,000 to $100,000 with terms from 3 months to 7 years',
          amount: {
            '@type': 'MonetaryAmount',
            currency: 'USD',
            minValue: 1000,
            maxValue: 100000
          }
        }
      }, {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'LoanOrCredit',
          name: isSpanish ? 'Préstamo para consolidación de deudas' : 'Debt Consolidation Loan',
          description: isSpanish
            ? 'Consolida múltiples deudas en un solo pago mensual accesible con tasas de interés más bajas'
            : 'Consolidate multiple debts into one affordable monthly payment with lower interest rates'
        }
      }, {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'LoanOrCredit',
          name: isSpanish ? 'Préstamo para mejoras del hogar' : 'Home Improvement Loan',
          description: isSpanish
            ? 'Financia reparaciones, renovaciones y mejoras del hogar sin tocar tu patrimonio'
            : 'Finance home repairs, renovations, and improvements without tapping home equity'
        }
      }, {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'LoanOrCredit',
          name: isSpanish ? 'Préstamo de emergencia' : 'Emergency Loan',
          description: isSpanish
            ? 'Financiamiento rápido para gastos inesperados con aprobación el mismo o siguiente día'
            : 'Fast funding for unexpected expenses with same-day or next-day approval from participating lenders'
        }
      }, {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'LoanOrCredit',
          name: isSpanish ? 'Préstamo para gastos médicos' : 'Medical Expense Loan',
          description: isSpanish
            ? 'Cubre facturas médicas, procedimientos y costos de salud con términos de pago flexibles'
            : 'Cover medical bills, procedures, and healthcare costs with flexible payment terms'
        }
      }, {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'LoanOrCredit',
          name: isSpanish ? 'Préstamo para mal crédito' : 'Bad Credit Loan',
          description: isSpanish
            ? 'Préstamos personales para solicitantes con puntajes de crédito tan bajos como 580'
            : 'Personal loans for borrowers with credit scores as low as 580'
        }
      }]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '1247',
      bestRating: '5',
      worstRating: '1'
    },
    review: [{
      '@type': 'Review',
      name: isSpanish ? 'Opiniones verificadas de Trustpilot' : 'Trustpilot Verified Customer Reviews',
      reviewBody: isSpanish
        ? 'Los prestatarios en Trustpilot califican a Portal de Préstamos IA con 4.8 de 5 por la rapidez, transparencia y precisión en la coincidencia con prestamistas.'
        : 'Trustpilot borrowers rate Loan AI Portal 4.8 out of 5 for speed, transparency, and lender matching accuracy.',
      author: {
        '@type': 'Organization',
        name: 'Trustpilot'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Trustpilot',
        sameAs: 'https://www.trustpilot.com/'
      },
      datePublished: '2024-12-31',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '4.8',
        bestRating: '5',
        worstRating: '1'
      },
      url: 'https://www.trustpilot.com/review/loan-platform.com'
    }, {
      '@type': 'Review',
      name: isSpanish ? 'Resumen de acreditación del Better Business Bureau' : 'Better Business Bureau Accreditation Summary',
      reviewBody: isSpanish
        ? 'Better Business Bureau otorga a Portal de Préstamos IA una calificación A por su respuesta a reclamos y publicidad transparente.'
        : 'Better Business Bureau lists Loan AI Portal with an A rating for complaint responsiveness and transparent advertising.',
      author: {
        '@type': 'Organization',
        name: 'Better Business Bureau'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Better Business Bureau',
        sameAs: 'https://www.bbb.org/'
      },
      datePublished: '2024-11-15',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '4.9',
        bestRating: '5',
        worstRating: '1'
      },
      url: 'https://www.bbb.org/us/loan-platform'
    }],
    subjectOf: [
      {
        '@type': 'WebPage',
        '@id': 'https://loan-platform.com/disclosures',
        url: 'https://loan-platform.com/disclosures',
        name: isSpanish ? 'Declaraciones de cumplimiento y préstamos' : 'Compliance & Lending Disclosures',
        description: isSpanish
          ? 'Declaraciones de transparencia sobre licencias, relaciones con prestamistas y protección del prestatario.'
          : 'Transparency statements covering licensing, lender relationships, and borrower protections.'
      },
      {
        '@type': 'WebPage',
        '@id': 'https://loan-platform.com/disclosures/borrower-outcomes',
        url: 'https://loan-platform.com/disclosures/borrower-outcomes',
        name: isSpanish ? 'Informe de resultados de prestatarios 2025' : 'Borrower Outcomes Report 2025',
        description: isSpanish
          ? 'Métricas agregadas de impacto y metodología para prestatarios de Portal de Préstamos IA en 2024-2025.'
          : 'Aggregated customer impact metrics and methodology for Loan AI Portal borrowers in 2024-2025.'
      }
    ],
    sameAs: [
      'https://www.facebook.com/loanaiportal',
      'https://twitter.com/loanaiportal',
      'https://www.linkedin.com/company/loanaiportal'
    ],
    knowsAbout: [
      'Personal Loans',
      'Artificial Intelligence',
      'Machine Learning',
      'Loan Matching',
      'Credit Scoring',
      'Debt Consolidation',
      'Financial Technology',
      'Consumer Lending',
      'Alternative Lending',
      'Online Lending Platforms'
    ]
  }
}
