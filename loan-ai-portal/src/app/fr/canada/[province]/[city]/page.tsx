import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import CABreadcrumbs from '@/components/ca/breadcrumbs'
import CANearbyCities from '@/components/ca/nearby-cities'
import CADisclosureBlock from '@/components/ca/disclosure-block'
import { generateCACityMetadata } from '@/lib/seo'
import { caRegions, getCARegionBySlug, type CACity } from '@/data/ca-regions'
import { caLenders, caFAQs, caLoanTypes, caRegulations } from '@/data/ca-translations'
import {
  canadianCitiesTier1,
  getCanadianCityTier1BySlug,
  type CanadianCityTier1,
} from '@/data/ca-cities-tier1'
import { getRegulationByProvince } from '@/data/ca-regulations'

export async function generateStaticParams() {
  const params: Array<{ province: string; city: string }> = []

  // Add existing cities from ca-regions.ts (legacy 22 cities)
  caRegions.forEach((region) => {
    region.cities.forEach((city) => {
      params.push({
        province: region.slug,
        city: city.slug,
      })
    })
  })

  // Map province abbreviations to slugs for Tier 1 cities
  const provinceToSlug: Record<string, string> = {
    'ON': 'ontario',
    'QC': 'quebec',
    'BC': 'british-columbia',
    'AB': 'alberta',
    'MB': 'manitoba',
    'SK': 'saskatchewan',
    'NS': 'nova-scotia',
    'NB': 'new-brunswick',
    'PE': 'prince-edward-island',
    'NL': 'newfoundland-and-labrador',
    'YT': 'yukon',
    'NT': 'northwest-territories',
    'NU': 'nunavut',
  }

  // Add Tier 1 cities
  canadianCitiesTier1.forEach((city) => {
    const regionSlug = provinceToSlug[city.provinceAbbr]
    if (regionSlug) {
      params.push({
        province: regionSlug,
        city: city.slug,
      })
    }
  })

  return params
}

export async function generateMetadata({
  params,
}: {
  params: { province: string; city: string }
}): Promise<Metadata> {
  const lang = 'fr' as const
  
  // Map province slug to province name for Tier 1 lookup
  const slugToProvince: Record<string, string> = {
    'ontario': 'ontario',
    'quebec': 'quebec',
    'british-columbia': 'british-columbia',
    'alberta': 'alberta',
    'manitoba': 'manitoba',
    'saskatchewan': 'saskatchewan',
    'nova-scotia': 'nova-scotia',
    'new-brunswick': 'new-brunswick',
    'prince-edward-island': 'prince-edward-island',
    'newfoundland-and-labrador': 'newfoundland-and-labrador',
    'yukon': 'yukon',
    'northwest-territories': 'northwest-territories',
    'nunavut': 'nunavut',
  }
  
  const provinceSlug = slugToProvince[params.province]
  
  // First, try to find Tier 1 city
  const tier1City = provinceSlug ? getCanadianCityTier1BySlug(provinceSlug, params.city) : undefined
  
  if (tier1City) {
    // Use Tier 1 city data for metadata
    const cityName = tier1City.nameFr
    const region = getCARegionBySlug(params.province)
    const regionName = region ? region.nameFr : tier1City.province
    
    const seoData = generateCACityMetadata(tier1City.name, tier1City.nameFr, tier1City.province, tier1City.province, 2025, lang)
    
    return {
      title: seoData.title,
      description: seoData.description,
      keywords: seoData.keywords,
      alternates: {
        canonical: `https://loan-platform.com/fr/canada/${params.province}/${params.city}`,
        languages: {
          'x-default': `https://loan-platform.com/ca/cities/${params.province}/${params.city}`,
          'en-CA': `https://loan-platform.com/ca/cities/${params.province}/${params.city}`,
          'fr-CA': `https://loan-platform.com/fr/canada/${params.province}/${params.city}`,
        },
      },
      openGraph: {
        title: `Prêts à ${cityName}, ${regionName} | Comparez ${new Date().getFullYear()}`,
        description: tier1City.descriptionFr.substring(0, 160),
        url: `https://loan-platform.com/fr/canada/${params.province}/${params.city}`,
        siteName: 'Loan-Platform.com',
        locale: 'fr_CA',
        alternateLocale: ['en_CA'],
        type: 'website',
      },
    }
  }
  
  // Fallback to legacy city
  const region = getCARegionBySlug(params.province)
  if (!region) return notFound()

  const city = region.cities.find((c) => c.slug === params.city)
  if (!city) return notFound()

  const cityName = city.nameFr || city.name
  const regionName = region.nameFr

  return {
    title: `Prêts à ${cityName}, ${regionName} | Comparez ${new Date().getFullYear()}`,
    description: `Comparez les prêts personnels à ${cityName}, ${regionName}. Trouvez des prêteurs agréés et demandez en ligne.`,
    alternates: {
      canonical: `https://loan-platform.com/fr/canada/${params.province}/${params.city}`,
      languages: {
        'x-default': `https://loan-platform.com/ca/cities/${params.province}/${params.city}`,
        'en-CA': `https://loan-platform.com/ca/cities/${params.province}/${params.city}`,
        'fr-CA': `https://loan-platform.com/fr/canada/${params.province}/${params.city}`,
      },
    },
    openGraph: {
      title: `Prêts à ${cityName}, ${regionName}`,
      description: `Comparez les prêts personnels à ${cityName}, ${regionName}.`,
      url: `https://loan-platform.com/fr/canada/${params.province}/${params.city}`,
      siteName: 'Loan-Platform.com',
      locale: 'fr_CA',
      alternateLocale: ['en_CA'],
      type: 'website',
    },
  }
}

export default async function FrenchCityPage({
  params,
}: {
  params: { province: string; city: string }
}) {
  const lang = 'fr' as const
  
  // Map province slug to province name for Tier 1 lookup
  const slugToProvince: Record<string, string> = {
    'ontario': 'ontario',
    'quebec': 'quebec',
    'british-columbia': 'british-columbia',
    'alberta': 'alberta',
    'manitoba': 'manitoba',
    'saskatchewan': 'saskatchewan',
    'nova-scotia': 'nova-scotia',
    'new-brunswick': 'new-brunswick',
    'prince-edward-island': 'prince-edward-island',
    'newfoundland-and-labrador': 'newfoundland-and-labrador',
    'yukon': 'yukon',
    'northwest-territories': 'northwest-territories',
    'nunavut': 'nunavut',
  }
  
  const provinceSlug = slugToProvince[params.province]
  
  // First, try to find Tier 1 city
  const tier1City = provinceSlug ? getCanadianCityTier1BySlug(provinceSlug, params.city) : undefined
  
  if (tier1City) {
    return renderTier1CityPage(tier1City, params, lang)
  }
  
  // Fallback to legacy city
  return renderLegacyCityPage(params, lang)
}

// Tier 1 city rendering function (with French content)
function renderTier1CityPage(
  city: CanadianCityTier1,
  params: { province: string; city: string },
  lang: 'fr'
) {
  const region = getCARegionBySlug(params.province)
  const displayCityName = city.nameFr
  const displayRegionName = region ? region.nameFr : city.province
  const regulation = getRegulationByProvince(city.province)

  // Generate schema markup
  const baseUrl = 'https://loan-platform.com'
  const pageUrl = `${baseUrl}/fr/canada/${params.province}/${params.city}`
  
  // BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Accueil',
        'item': `${baseUrl}/fr/canada`
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Villes',
        'item': `${baseUrl}/fr/canada/cities`
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': displayRegionName,
        'item': `${baseUrl}/fr/canada/${params.province}`
      },
      {
        '@type': 'ListItem',
        'position': 4,
        'name': displayCityName,
        'item': pageUrl
      }
    ]
  }
  
  // FAQPage Schema (French FAQs)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': city.faqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.questionFr,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answerFr
      }
    }))
  }
  
  // FinancialService Schema
  const financialServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    'name': `Prêts personnels à ${displayCityName}`,
    'description': city.descriptionFr,
    'url': pageUrl,
    'areaServed': {
      '@type': 'City',
      'name': displayCityName,
      'containedInPlace': {
        '@type': 'AdministrativeArea',
        'name': displayRegionName,
        'containedInPlace': {
          '@type': 'Country',
          'name': 'Canada'
        }
      }
    },
    'serviceType': 'Prêts personnels',
    'provider': {
      '@type': 'Organization',
      'name': 'Loan-Platform.com',
      'url': baseUrl
    },
    'offers': {
      '@type': 'AggregateOffer',
      'priceCurrency': 'CAD',
      'lowPrice': '500',
      'highPrice': '50000',
      'offerCount': city.lenderCount || '10+'
    },
    'audience': {
      '@type': 'PeopleAudience',
      'geographicArea': {
        '@type': 'City',
        'name': displayCityName
      }
    }
  }

  const content = {
    title: `Prêts personnels à ${displayCityName}, ${displayRegionName}`,
    introText: city.descriptionFr,
    aboutTitle: `À propos de ${displayCityName}`,
    populationLabel: 'Population',
    industriesLabel: 'Secteurs clés',
    featuresLabel: 'Caractéristiques du marché du crédit',
    regulationsTitle: 'Réglementation provinciale',
    faqsTitle: 'Questions fréquentes',
    nearbyCitiesTitle: 'Villes à proximité',
    applyBtn: 'Faire une demande',
    compareBtn: 'Comparer les taux',
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <CABreadcrumbs
        items={[
          { name: 'Accueil', href: '/fr/canada' },
          { name: 'Villes', href: '/fr/canada/cities' },
          { name: displayRegionName, href: `/fr/canada/${params.province}` },
          { name: displayCityName, href: `/fr/canada/${params.province}/${params.city}` },
        ]}
        lang={lang}
      />

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{content.title}</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">{content.introText}</p>
          <div className="flex gap-4">
            <Link href="/ca/apply?lang=fr">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                {content.applyBtn}
              </Button>
            </Link>
            <Link href={`/ca/cities/${params.province}/${params.city}?lang=fr#compare`}>
              <Button size="lg" variant="outline">
                {content.compareBtn}
              </Button>
            </Link>
          </div>
        </section>

        {/* City Overview */}
        <section className="mb-12">
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">{content.aboutTitle}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{content.populationLabel}</h3>
                <p className="text-gray-700">{city.population.toLocaleString()}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{content.industriesLabel}</h3>
                <ul className="text-gray-700 space-y-1">
                  {(city.topIndustries || []).slice(0, 3).map((industry: string, idx: number) => (
                    <li key={idx}>• {industry}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{content.featuresLabel}</h3>
                <ul className="text-gray-700 space-y-1">
                  {(city.keyFeaturesFr || []).slice(0, 3).map((feature: string, idx: number) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* Provincial Regulations */}
        {regulation && (
          <section className="mb-12">
            <Card className="p-8 bg-blue-50 border-blue-200">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">{content.regulationsTitle}</h2>
              <ul className="space-y-3">
                {regulation.borrowerRightsFr.slice(0, 5).map((point: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </section>
        )}

        {/* FAQs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{content.faqsTitle}</h2>
          <div className="space-y-6">
            {city.faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.questionFr}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answerFr}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Nearby Cities */}
        {/* TODO: Format nearby cities for French pages */}
        {/* <CANearbyCities cities={city.nearbyCities || []} currentCity={city.nameFr} lang={lang} /> */}
      </div>

      {/* Disclosure Block */}
      <CADisclosureBlock lang={lang} />

      {/* Enhanced Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(financialServiceSchema) }}
      />
    </div>
  )
}

// Legacy city rendering function (with French content)
function renderLegacyCityPage(
  params: { province: string; city: string },
  lang: 'fr'
) {
  const region = getCARegionBySlug(params.province)
  if (!region) return notFound()

  const city = region.cities.find((c) => c.slug === params.city)
  if (!city) return notFound()

  const displayCityName = city.nameFr || city.name
  const displayRegionName = region.nameFr
  const displayFAQs = caFAQs.general // Use general FAQs for legacy pages

  // Generate schema markup for legacy cities
  const baseUrl = 'https://loan-platform.com'
  const pageUrl = `${baseUrl}/fr/canada/${params.province}/${params.city}`
  
  // BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Accueil',
        'item': `${baseUrl}/fr/canada`
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Villes',
        'item': `${baseUrl}/fr/canada/cities`
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': displayRegionName,
        'item': `${baseUrl}/fr/canada/${params.province}`
      },
      {
        '@type': 'ListItem',
        'position': 4,
        'name': displayCityName,
        'item': pageUrl
      }
    ]
  }
  
  // FAQPage Schema (using generic FAQs)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': displayFAQs.map((faq: any) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  }
  
  // FinancialService Schema
  const financialServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    'name': `Comparaison de prêts personnels à ${displayCityName}`,
    'description': `Comparez les prêts personnels et le crédit à ${displayCityName}, ${displayRegionName}. Trouvez des prêteurs agréés et demandez en ligne.`,
    'url': pageUrl,
    'areaServed': {
      '@type': 'City',
      'name': displayCityName,
      'containedInPlace': {
        '@type': 'AdministrativeArea',
        'name': displayRegionName,
        'containedInPlace': {
          '@type': 'Country',
          'name': 'Canada'
        }
      }
    },
    'serviceType': 'Prêts personnels',
    'provider': {
      '@type': 'Organization',
      'name': 'Loan-Platform.com',
      'url': baseUrl
    },
    'offers': {
      '@type': 'AggregateOffer',
      'priceCurrency': 'CAD',
      'lowPrice': '500',
      'highPrice': '50000',
      'offerCount': '10+'
    }
  }

  const content = {
    title: `Prêts personnels à ${displayCityName}, ${displayRegionName}`,
    introTitle: `Comparez les prêts à ${displayCityName}`,
    introText: `Trouvez et comparez les meilleurs prêts personnels à ${displayCityName}, ${displayRegionName}. Notre plateforme vous aide à comparer les taux et les conditions de plusieurs prêteurs agréés.`,
    aboutTitle: `Prêts personnels à ${displayCityName}`,
    aboutIntro: `Les résidents de ${displayCityName} ont accès à une variété d'options de prêt personnel. Que vous ayez besoin d'un prêt pour la consolidation de dettes, des rénovations domiciliaires ou des dépenses imprévues, nous vous aidons à comparer les meilleures offres.`,
    howItWorksTitle: 'Comment ça marche',
    step1: 'Remplissez une demande simple',
    step1Desc: 'Partagez quelques informations de base en quelques minutes',
    step2: 'Comparez les offres',
    step2Desc: 'Recevez des offres personnalisées de plusieurs prêteurs',
    step3: 'Choisissez votre prêt',
    step3Desc: 'Sélectionnez la meilleure offre et finalisez votre demande',
    benefitsTitle: 'Pourquoi nous choisir',
    benefit1: 'Gratuit et rapide',
    benefit1Desc: 'Sans frais, sans obligation',
    benefit2: 'Prêteurs de confiance',
    benefit2Desc: 'Tous licenciés et réglementés',
    benefit3: 'Processus sécurisé',
    benefit3Desc: 'Vos données sont protégées',
    benefit4: 'Service canadien',
    benefit4Desc: 'Conçu pour les Canadiens',
    regulationsTitle: 'Réglementation fédérale',
    loanTypesTitle: 'Types de prêts disponibles',
    lendersTitle: 'Prêteurs recommandés',
    checkRatesBtn: 'Voir les taux',
    applyNowBtn: 'Faire une demande',
    faqsTitle: 'Questions fréquentes',
  }

  const nearbyCities = region.cities
    .filter((c) => c.slug !== city.slug)
    .slice(0, 6)

  return (
    <div className="min-h-screen bg-gray-50">
      <CABreadcrumbs
        items={[
          { name: 'Accueil', href: '/fr/canada' },
          { name: 'Villes', href: '/fr/canada/cities' },
          { name: displayRegionName, href: `/fr/canada/${params.province}` },
          { name: displayCityName, href: `/fr/canada/${params.province}/${params.city}` },
        ]}
        lang={lang}
      />

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{content.title}</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">{content.introText}</p>
          <Link href="/ca/apply?lang=fr">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              {content.applyNowBtn}
            </Button>
          </Link>
        </section>

        {/* About Section */}
        <section className="mb-12">
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">{content.aboutTitle}</h2>
            <p className="text-gray-700 leading-relaxed">{content.aboutIntro}</p>
          </Card>
        </section>

        {/* Federal Regulations */}
        <section className="mb-12">
          <Card className="p-8 bg-blue-50 border-blue-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">{content.regulationsTitle}</h2>
            <ul className="space-y-3">
              {caRegulations.keyPointsFr.slice(0, 5).map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </Card>
        </section>

        {/* FAQs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{content.faqsTitle}</h2>
          <div className="space-y-6">
            {displayFAQs.map((faq: any, index: number) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Nearby Cities */}
        <CANearbyCities 
          cities={nearbyCities.map(city => ({
            name: city.nameFr || city.name,
            nameFr: city.nameFr,
            slug: city.slug,
            regionSlug: params.province
          }))} 
          currentCity={displayCityName} 
          lang="fr" 
        />
      </div>

      {/* Disclosure Block */}
      <CADisclosureBlock lang={lang} />

      {/* Enhanced Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(financialServiceSchema) }}
      />
    </div>
  )
}
