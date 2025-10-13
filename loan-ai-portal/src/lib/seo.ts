import { buildOrganizationSchema } from '@/lib/organization-schema'

const SITE_URL = new URL('https://loan-platform.com')

function resolveUrl(url?: string) {
  if (!url) return undefined

  try {
    return new URL(url, SITE_URL).toString()
  } catch (error) {
    return url
  }
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: any;
  alternateLanguages?: { [key: string]: string };
  locale?: string;
  alternateLocales?: string[];
  siteName?: string;
}

export const defaultSEO: SEOData = {
  title: 'AI Personal Loans Fast Pre-Qualification | Loan AI Portal',
  description:
    'Compare $1K-$100K personal loan offers in minutes. AI matching delivers a 2-minute pre-qualification and rate check with a soft credit pull that has no impact on your score, plus access to expedited funding options across all 50 states.',
  keywords: [
    'personal loans',
    'AI loan matching',
    'loan pre-qualification',
    'online personal loans',
    'loan comparison',
  'same day loan funding options',
    'loan rates',
    'bad credit personal loans',
    'installment loans',
    'loan application',
    'financial services',
    'USA loan marketplace'
  ],
  ogImage: '/og-image.jpg',
  structuredData: buildOrganizationSchema('en'),
  canonicalUrl: SITE_URL.toString(),
  alternateLanguages: {
    en: SITE_URL.toString(),
    es: new URL('/es', SITE_URL).toString(),
  },
  locale: 'en_US',
  alternateLocales: ['es_US'],
  siteName: 'Loan AI Portal',
};

export const defaultSEOEs: SEOData = {
  title: 'Préstamos personales con IA | Precalificación rápida',
  description:
    'Compara préstamos personales de $1K-$100K en minutos. Nuestra IA ofrece una precalificación y verificación de tasa en 2 minutos mediante una consulta blanda que no afecta tu puntaje, y conecta a solicitantes hispanohablantes con más de 100 prestamistas en los 50 estados con opciones de financiamiento acelerado.',
  keywords: [
    'préstamos personales',
    'préstamos IA',
    'coincidencia de préstamos',
    'financiamiento rápido',
    'préstamos en español',
    'préstamos para mal crédito',
    'comparador de préstamos',
    'marketplace financiero',
    'préstamos en línea',
    'usBanksCategory:PersonalLoans',
    'usBanksCategory:DigitalLending'
  ],
  ogImage: '/og-image.jpg',
  structuredData: buildOrganizationSchema('es'),
  canonicalUrl: new URL('/es', SITE_URL).toString(),
  alternateLanguages: {
    en: SITE_URL.toString(),
    es: new URL('/es', SITE_URL).toString(),
  },
  locale: 'es_US',
  alternateLocales: ['en_US'],
  siteName: 'Portal de Préstamos IA',
};

export const homeSEO: SEOData = {
  title: 'AI Personal Loans Fast Pre-Qualification | Loan AI Portal',
  description:
    'Compare offers from 100+ lenders. Complete a 2-minute pre-qualification and rate check with a soft credit pull, access $1K-$100K personal loans, and explore expedited funding options for every credit score.',
  keywords: [
    'personal loans',
    'AI loan matching',
  'same day loan funding options',
    'bad credit personal loans',
    'debt consolidation loans',
    'emergency personal loans',
    'online loan application',
  ],
  ogImage: '/og-image.jpg',
  canonicalUrl: SITE_URL.toString(),
  alternateLanguages: {
    en: SITE_URL.toString(),
    es: new URL('/es', SITE_URL).toString(),
  },
  locale: 'en_US',
  alternateLocales: ['es_US'],
  siteName: 'Loan AI Portal',
};

export const homeSEOEs: SEOData = {
  title: 'Préstamos Personales IA Precalificación Rápida | Portal IA',
  description:
    'Compara ofertas de más de 100 prestamistas y obtén en 2 minutos una precalificación y verificación de tasa mediante consulta blanda, con coincidencia inteligente, opciones de financiamiento acelerado y soporte para todo tipo de crédito.',
  keywords: [
    'préstamos personales',
    'préstamos IA',
    'aprobación rápida de préstamos',
    'préstamos para mal crédito',
    'comparar préstamos personales',
    'financiamiento el mismo día',
    'solicitud de préstamo en línea',
  ],
  ogImage: '/og-image.jpg',
  canonicalUrl: new URL('/es', SITE_URL).toString(),
  alternateLanguages: {
    en: SITE_URL.toString(),
    es: new URL('/es', SITE_URL).toString(),
  },
  locale: 'es_US',
  alternateLocales: ['en_US'],
  siteName: 'Portal de Préstamos IA',
};

export const usHubSEO: SEOData = {
  title: 'USA Personal Loan Hub | State Guides & AI Matching',
  description:
    'Navigate personal loan regulations, compare lender coverage, and access AI-powered matching tailored for borrowers across all 50 U.S. states.',
  keywords: [
    'usa personal loans',
    'state loan regulations',
    'us loan comparison',
    'ai loan matching usa',
    'state lender guides',
    'us personal loan hub',
  ],
  canonicalUrl: new URL('/us', SITE_URL).toString(),
  alternateLanguages: {
    en: new URL('/us', SITE_URL).toString(),
  },
  locale: 'en_US',
  alternateLocales: ['es_US', 'cs_CZ'],
  siteName: 'Loan AI Portal',
};

export const czHubSEO: SEOData = {
  title: 'Portál osobních půjček pro Česko | Srovnání RPSN a AI párování',
  description:
    'Srovnejte licencované poskytovatele osobních půjček v Česku. Přístup k regionálním průvodcům, reprezentativním příkladům v Kč a AI doporučením dle zákona 257/2016 Sb.',
  keywords: [
    'osobní půjčka',
    'srovnání půjček',
    'RPSN',
    'nebankovní půjčky Česko',
    'AI půjčky',
    'spotřebitelský úvěr čnb',
  ],
  canonicalUrl: new URL('/cz', SITE_URL).toString(),
  alternateLanguages: {
    en: new URL('/cz', SITE_URL).toString(),
    cs: new URL('/cz', SITE_URL).toString(),
  },
  locale: 'cs_CZ',
  alternateLocales: ['en_US'],
  siteName: 'Loan AI Portál',
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Loan AI Portál – Česká republika',
    inLanguage: 'cs-CZ',
    description:
      'Regionální průvodce osobními půjčkami podporovaný AI. Transparentní RPSN, srovnání bank i nebankovních poskytovatelů a kontakty na licencované poradce.',
    about: {
      '@type': 'FinancialService',
      name: 'Loan AI Portál',
      areaServed: {
        '@type': 'Country',
        name: 'Česká republika',
        '@id': 'https://www.wikidata.org/wiki/Q213',
      },
      regulation: 'Česká národní banka',
    },
  },
};

export const statesSEO: SEOData = {
  title: 'State-Specific Loan Information | Loan Requirements by State',
  description: 'Find loan information specific to your state. Compare loan requirements, regulations, and available lenders across all 50 US states. State-by-state lending laws and rates.',
  keywords: [
    'state loan requirements',
    'loan regulations by state',
    'state-specific loans',
    'loan laws by state',
    'local loan providers',
    'state loan limits',
    'regional loan options',
    'USA state loans',
    'state lending laws',
    'loan rates by state'
  ]
};

export const applySEO: SEOData = {
  title: 'Apply for Personal Loan Online - 2-Minute Pre-Qualification | Loan AI Portal',
  description: 'Check your rate online with a 2-minute pre-qualification and soft credit pull that has no impact on your score. Access up to $100,000 with competitive rates, no hidden fees, and AI-powered matching across all 50 states.',
  keywords: [
    'apply for personal loan',
    'online loan application',
    'loan pre-qualification',
    'personal loan online',
    'quick loan application',
    'loan application form',
    'apply for loan online',
    'personal loan rate check',
    'fast loan application',
    'online loan form',
    'loan application process',
    'get personal loan',
    'apply personal loan',
    'soft credit pull loan',
    'USA loan application',
    'american personal loans'
  ],
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Personal Loan Application',
    description: 'Apply for personal loans online with a 2-minute pre-qualification and competitive rates through a soft credit pull',
    mainEntity: {
      '@type': 'FinancialProduct',
      name: 'Personal Loan Application',
      description: 'Online personal loan application with AI-powered matching for USA residents',
      provider: {
        '@type': 'FinancialService',
        name: 'Loan AI Portal',
        areaServed: {
          '@type': 'Country',
          name: 'United States',
          '@id': 'https://www.wikidata.org/wiki/Q30'
        }
      },
      offers: {
        '@type': 'Offer',
        description: 'Personal loans from $1,000 to $100,000 for USA residents',
        eligibleRegion: {
          '@type': 'Country',
          name: 'US'
        },
        eligibleQuantity: {
          '@type': 'QuantitativeValue',
          minValue: 1000,
          maxValue: 100000,
          unitCode: 'USD'
        }
      }
    }
  },
  canonicalUrl: new URL('/apply', SITE_URL).toString(),
  alternateLanguages: {
    en: new URL('/apply', SITE_URL).toString(),
    es: new URL('/es/apply', SITE_URL).toString(),
  },
  locale: 'en_US',
  alternateLocales: ['es_US'],
  siteName: 'Loan AI Portal'
};

export const applySEOEs: SEOData = {
  title: 'Solicita préstamo personal en línea | Precalificación IA en 2 minutos',
  description:
    'Completa tu solicitud de préstamo personal en español y recibe una precalificación y verificación de tasa en 2 minutos con una consulta blanda que no afecta tu puntaje. Tasas competitivas, sin comisiones ocultas y financiamiento rápido.',
  keywords: [
    'préstamo personal en línea',
    'solicitud de préstamo en español',
    'precalificación rápida préstamo',
    'préstamos personales IA',
    'préstamos competitivos en español',
    'préstamos sin comisiones ocultas',
  ],
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Solicitud de préstamo personal',
    description:
      'Solicita préstamos personales en línea con precalificación en 2 minutos y coincidencia inteligente con prestamistas en Estados Unidos.',
    mainEntity: {
      '@type': 'FinancialProduct',
      name: 'Solicitud de préstamo personal',
      description:
        'Formulario en línea impulsado por IA que conecta a solicitantes hispanohablantes con prestamistas confiables en los 50 estados.',
      provider: {
        '@type': 'FinancialService',
        name: 'Portal de Préstamos IA',
        areaServed: {
          '@type': 'Country',
          name: 'Estados Unidos',
          '@id': 'https://www.wikidata.org/wiki/Q30',
        },
      },
      offers: {
        '@type': 'Offer',
        description: 'Préstamos personales de $1,000 a $100,000 disponibles para residentes en EE. UU.',
        eligibleRegion: {
          '@type': 'Country',
          name: 'US',
        },
        eligibleQuantity: {
          '@type': 'QuantitativeValue',
          minValue: 1000,
          maxValue: 100000,
          unitCode: 'USD',
        },
      },
    },
  },
  canonicalUrl: new URL('/es/apply', SITE_URL).toString(),
  alternateLanguages: {
    en: new URL('/apply', SITE_URL).toString(),
    es: new URL('/es/apply', SITE_URL).toString(),
  },
  locale: 'es_US',
  alternateLocales: ['en_US'],
  siteName: 'Portal de Préstamos IA',
};

export const applySEOCs: SEOData = {
  title: 'Žádost o osobní půjčku online | AI schválení za 2 minuty',
  description:
    'Vyplňte žádost o osobní půjčku v češtině a získejte nezávazné posouzení za 2 minuty. Srovnání licencovaných poskytovatelů, transparentní RPSN, bez skrytých poplatků a rychlé vyřízení prostředků.',
  keywords: [
    'žádost o půjčku online',
    'osobní půjčka česky',
    'rychlé schválení půjčky',
    'AI půjčky Česko',
    'RPSN srovnání',
    'nebankovní půjčky online',
    'konsolidace půjček',
    'spotřebitelský úvěr online',
    'licence ČNB',
  ],
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Žádost o osobní půjčku',
    inLanguage: 'cs-CZ',
    description:
      'Online formulář pro žádost o osobní půjčku s AI doporučením licencovaných poskytovatelů v České republice.',
    mainEntity: {
      '@type': 'FinancialProduct',
      name: 'Online žádost o půjčku',
      description:
        'Zabezpečený online formulář podporovaný AI, který spojuje žadatele s licencovanými poskytovateli osobních půjček registrovanými u ČNB.',
      provider: {
        '@type': 'FinancialService',
        name: 'Loan AI Portál',
        areaServed: {
          '@type': 'Country',
          name: 'Česká republika',
          '@id': 'https://www.wikidata.org/wiki/Q213',
        },
      },
      offers: {
        '@type': 'Offer',
        description: 'Osobní půjčky od 5 000 Kč do 500 000 Kč pro rezidenty České republiky',
        eligibleRegion: {
          '@type': 'Country',
          name: 'CZ',
        },
        eligibleQuantity: {
          '@type': 'QuantitativeValue',
          minValue: 5000,
          maxValue: 500000,
          unitCode: 'CZK',
        },
      },
    },
  },
  canonicalUrl: new URL('/cz/apply', SITE_URL).toString(),
  alternateLanguages: {
    cs: new URL('/cz/apply', SITE_URL).toString(),
    en: new URL('/apply', SITE_URL).toString(),
  },
  locale: 'cs_CZ',
  alternateLocales: ['en_US'],
  siteName: 'Loan AI Portál',
};

export function generatePageMetadata(seoData: SEOData, path: string = '') {
  const canonical = resolveUrl((seoData.canonicalUrl ?? path) || SITE_URL.toString())
  const languages = seoData.alternateLanguages
    ? Object.entries(seoData.alternateLanguages).reduce<Record<string, string>>((acc, [locale, url]) => {
        const resolved = resolveUrl(url)
        if (resolved) {
          acc[locale] = resolved
        }
        return acc
      }, {})
    : undefined

  if (languages && canonical && !languages['x-default']) {
    languages['x-default'] = canonical
  }

  const ogImageUrl = resolveUrl(seoData.ogImage) ?? new URL('/og-image.jpg', SITE_URL).toString()
  const alternates = {
    canonical,
    ...(languages && Object.keys(languages).length > 0 ? { languages } : {}),
  }

  const siteName = seoData.siteName ?? 'Loan AI Portal'

  return {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords.join(', '),
    authors: [{ name: 'Loan AI Portal' }],
    creator: 'Loan AI Portal',
    publisher: 'Loan AI Portal',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: SITE_URL,
    alternates,
    openGraph: {
      title: seoData.title,
      description: seoData.description,
      url: canonical,
  siteName,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: seoData.title,
        }
      ],
      locale: seoData.locale ?? 'en_US',
      alternateLocale: seoData.alternateLocales,
      type: 'website',
      site: siteName,
    },
    twitter: {
      card: 'summary_large_image',
      title: seoData.title,
      description: seoData.description,
      images: [ogImageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}