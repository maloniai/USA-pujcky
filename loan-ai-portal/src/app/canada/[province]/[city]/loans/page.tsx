import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { getCityBySlug, getAllCitySlugs } from '@/data/canada-cities'
import { getProvinceBySlug } from '@/data/canada-provinces'

// Generate static params for all cities
export async function generateStaticParams() {
  return getAllCitySlugs()
}

// Generate metadata for each city
export async function generateMetadata({
  params,
}: {
  params: { province: string; city: string }
}): Promise<Metadata> {
  const city = getCityBySlug(params.city)
  
  if (!city) {
    return {
      title: 'City Not Found',
      description: 'The requested city page could not be found.',
    }
  }

  const title = `Loans in ${city.name}, ${city.provinceAbbr} – Compare 2025`
  const description = `Get personal loans in ${city.name}, ${city.province}. ${city.nearbyLenders}+ lenders, average loan ${city.averageLoanAmount}, rates from 6.99% APR. Fast approval for ${city.name} residents.`
  
  return {
    title,
    description,
    keywords: `personal loans ${city.name}, ${city.name} loans, loans in ${city.name} ${city.provinceAbbr}, ${city.name} lenders`,
    alternates: {
      canonical: `https://loan-platform.com/canada/${params.province}/${params.city}/loans`,
    },
  }
}

export default function CityLoansPage({
  params,
}: {
  params: { province: string; city: string }
}) {
  const city = getCityBySlug(params.city)
  const province = getProvinceBySlug(params.province)

  if (!city || !province) {
    notFound()
  }

  // JSON-LD Schema for City
  const citySchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    additionalType: 'https://schema.org/FinancialService',
    name: `Loan AI Portal - ${city.name}`,
    description: `Personal loan matching service for ${city.name}, ${city.province} residents`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressRegion: city.provinceAbbr,
      addressCountry: 'CA',
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
      addressRegion: city.provinceAbbr,
      addressCountry: 'CA',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: city.coordinates.lat,
        longitude: city.coordinates.lng,
      },
    },
    url: `https://loan-platform.com/canada/${params.province}/${params.city}/loans`,
    priceRange: '$1,000 - $50,000',
    currenciesAccepted: 'CAD',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Personal Loans in ${city.name}`,
      itemListElement: city.popularLoanTypes.map((type, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'LoanOrCredit',
          name: `${type} Loan`,
          description: `${type} loans for ${city.name} residents`,
        },
        position: index + 1,
      })),
    },
  }

  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What is the average personal loan amount in ${city.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `The average personal loan amount in ${city.name}, ${city.province} is ${city.averageLoanAmount}. Loan amounts typically range from $1,000 to $50,000 depending on creditworthiness and income.`,
        },
      },
      {
        '@type': 'Question',
        name: `How many lenders serve ${city.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `There are over ${city.nearbyLenders} licensed lenders serving ${city.name} residents, including national banks, credit unions, and online lenders. Our platform connects you with multiple lenders to compare rates.`,
        },
      },
      {
        '@type': 'Question',
        name: `What are the most popular loan types in ${city.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `The most popular loan types in ${city.name} are ${city.popularLoanTypes.join(', ')}. These reflect the local economic conditions and borrowing needs of ${city.name} residents.`,
        },
      },
    ],
  }

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Canada',
        item: 'https://loan-platform.com/canada',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: province.name,
        item: `https://loan-platform.com/canada/provinces/${params.province}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: city.name,
        item: `https://loan-platform.com/canada/${params.province}/${params.city}/loans`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navigation locale="en" />
      <main className="flex-1 bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-6">
              <Link
                href={`/canada/provinces/${params.province}`}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold transition hover:bg-white/20"
              >
                <span aria-hidden>←</span>
                Back to {province.name} Loans
              </Link>
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Loans in {city.name}, {city.provinceAbbr}
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-red-100">
                Connect with {city.nearbyLenders}+ Local & National Lenders
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  ⚡ Avg: {city.averageLoanAmount}
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  📊 Credit: {city.avgCreditScore}
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  🏙️ Pop: {city.population}
                </div>
              </div>
              <Link
                href="/canada/apply"
                className="inline-block mt-8 bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-colors shadow-lg"
              >
                Get Your Free Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <nav className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
              <Link href="/canada" className="hover:text-red-600">Canada</Link>
              <span>/</span>
              <Link href={`/canada/provinces/${params.province}`} className="hover:text-red-600">
                {province.name}
              </Link>
              <span>/</span>
              <span className="text-red-900 font-semibold">{city.name}</span>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Introduction */}
              <section className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-red-900 mb-4">
                  Personal Loans in {city.name}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {city.localEconomy}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With {city.nearbyLenders}+ lenders serving the area, {city.name} residents have access to
                  competitive personal loan rates. Whether you need funds for debt consolidation, home
                  improvements, or emergency expenses, our platform connects you with licensed Canadian
                  lenders who understand the local market.
                </p>
              </section>

              {/* City Overview Stats */}
              <section className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-red-900 mb-6">
                  {city.name} Loan Market Overview
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">MEDIAN HOUSEHOLD INCOME</h3>
                    <p className="text-2xl font-bold text-red-600">{city.medianIncome}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">MEDIAN HOME PRICE</h3>
                    <p className="text-2xl font-bold text-red-600">{city.medianHomePrice}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">AVERAGE LOAN AMOUNT</h3>
                    <p className="text-2xl font-bold text-red-600">{city.averageLoanAmount}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">AVAILABLE LENDERS</h3>
                    <p className="text-2xl font-bold text-red-600">{city.nearbyLenders}+</p>
                  </div>
                </div>
              </section>

              {/* Key Industries */}
              <section className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-red-900 mb-4">
                  {city.name} Economy & Loan Demand
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The local economy influences borrowing patterns and lender availability. {city.name}'s
                  key industries include:
                </p>
                <div className="flex flex-wrap gap-2">
                  {city.keyIndustries.map((industry) => (
                    <span
                      key={industry}
                      className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </section>

              {/* Popular Loan Types */}
              <section className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-red-900 mb-4">
                  Most Popular Loan Types in {city.name}
                </h2>
                <p className="text-gray-700 mb-6">
                  Based on local demand and economic conditions, these are the most commonly sought loan
                  types in {city.name}:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {city.popularLoanTypes.map((type, index) => (
                    <div key={type} className="bg-gradient-to-br from-red-50 to-orange-50 p-5 rounded-lg">
                      <div className="text-3xl font-bold text-red-600 mb-2">#{index + 1}</div>
                      <h3 className="font-semibold text-gray-900">{type}</h3>
                    </div>
                  ))}
                </div>
              </section>

              {/* How to Apply */}
              <section className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-red-900 mb-6">
                  How to Get a Personal Loan in {city.name}
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Complete Our Quick Form</h3>
                      <p className="text-gray-600 text-sm">
                        Takes just 2-3 minutes. We'll ask about your loan needs, income, and basic financial
                        information. Available in English and French.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Get Matched with {city.name} Lenders</h3>
                      <p className="text-gray-600 text-sm">
                        Our AI instantly connects you with licensed lenders serving {city.name}, {city.provinceAbbr}.
                        All lenders comply with {province.name} regulations.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Compare Multiple Offers</h3>
                      <p className="text-gray-600 text-sm">
                        Review loan offers from multiple lenders. Compare rates, terms, and fees to find the
                        best option for your situation.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Get Funded Fast</h3>
                      <p className="text-gray-600 text-sm">
                        Many {city.name} residents receive funds in as little as 1-2 business days after
                        approval and verification.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Local Regulations */}
              <section className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-red-900 mb-4">
                  {province.name} Lending Regulations
                </h2>
                <p className="text-gray-700 mb-4">
                  All lenders serving {city.name} must comply with {province.name} provincial regulations:
                </p>
                <ul className="space-y-2">
                  {province.regulations.slice(0, 5).map((regulation, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-sm font-bold">
                        ✓
                      </span>
                      <span className="text-gray-700 text-sm">{regulation}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-600">
                    <strong>Regulated by:</strong>{' '}
                    <a
                      href={province.regulatorUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-red-800 underline"
                    >
                      {province.regulator}
                    </a>
                  </p>
                </div>
              </section>

              {/* FAQ */}
              <section className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-red-900 mb-6">
                  {city.name} Loan FAQs
                </h2>
                <div className="space-y-4">
                  <details className="bg-gray-50 p-4 rounded-lg">
                    <summary className="font-semibold cursor-pointer text-gray-900">
                      What credit score do I need for a personal loan in {city.name}?
                    </summary>
                    <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                      While credit requirements vary by lender, most require a minimum score of 600-650 for
                      standard personal loans. However, many lenders in {city.name} work with borrowers who
                      have lower credit scores (580+), though rates may be higher. The average credit score
                      in {city.name} is {city.avgCreditScore}.
                    </p>
                  </details>

                  <details className="bg-gray-50 p-4 rounded-lg">
                    <summary className="font-semibold cursor-pointer text-gray-900">
                      Are there lenders in {city.name} that offer same-day funding?
                    </summary>
                    <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                      Yes, several online lenders serving {city.name} offer same-day funding if you're
                      approved before their cutoff time (typically 2-3 PM ET). Traditional banks and credit
                      unions typically take 1-3 business days. Our platform shows funding timelines for each
                      lender.
                    </p>
                  </details>

                  <details className="bg-gray-50 p-4 rounded-lg">
                    <summary className="font-semibold cursor-pointer text-gray-900">
                      Can I get a personal loan in {city.name} if I'm self-employed?
                    </summary>
                    <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                      Absolutely. Many lenders serving {city.name} work with self-employed individuals,
                      freelancers, and small business owners. You may need to provide additional documentation
                      such as tax returns, bank statements, or business revenue records. Our matching service
                      connects you with lenders experienced in self-employed lending.
                    </p>
                  </details>

                  <details className="bg-gray-50 p-4 rounded-lg">
                    <summary className="font-semibold cursor-pointer text-gray-900">
                      What is the typical interest rate for personal loans in {city.name}?
                    </summary>
                    <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                      Interest rates in {city.name} typically range from 6.99% to 46.96% APR, depending on
                      your credit score, income, and loan amount. The average rate in {province.name} is
                      around {province.avgRate}. Prime borrowers with excellent credit (750+) often qualify
                      for rates under 10%.
                    </p>
                  </details>

                  <details className="bg-gray-50 p-4 rounded-lg">
                    <summary className="font-semibold cursor-pointer text-gray-900">
                      Do I need to visit a physical location to get a loan in {city.name}?
                    </summary>
                    <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                      No, the entire process can be completed online. While {city.name} has many physical
                      bank and credit union branches, most lenders now offer fully digital applications with
                      e-signatures and electronic document submission. You can apply, get approved, and
                      receive funds without ever leaving home.
                    </p>
                  </details>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Apply CTA */}
              <div className="bg-gradient-to-br from-red-600 to-orange-600 text-white rounded-xl shadow-lg p-6 sticky top-4">
                <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
                <p className="mb-6 text-sm">
                  Get matched with {city.nearbyLenders}+ lenders serving {city.name}.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-300 font-bold">✓</span>
                    <span>No credit score impact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-300 font-bold">✓</span>
                    <span>100% free service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-300 font-bold">✓</span>
                    <span>Fast approval decisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-300 font-bold">✓</span>
                    <span>Funding in 1-2 business days</span>
                  </li>
                </ul>
                <Link
                  href="/canada/apply"
                  className="block w-full bg-white text-red-600 text-center px-6 py-3 rounded-lg font-bold hover:bg-red-50 transition-colors"
                >
                  Start Application
                </Link>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-bold text-red-900 mb-4">Quick Links</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link
                      href={`/canada/provinces/${params.province}`}
                      className="text-red-600 hover:text-red-800 underline"
                    >
                      ← {province.name} Loans
                    </Link>
                  </li>
                  <li>
                    <Link href="/canada/provinces" className="text-red-600 hover:text-red-800 underline">
                      All Provinces
                    </Link>
                  </li>
                  <li>
                    <Link href="/canada" className="text-red-600 hover:text-red-800 underline">
                      Canada Hub
                    </Link>
                  </li>
                  <li>
                    <Link href="/fr/canada" className="text-red-600 hover:text-red-800 underline">
                      Service en Français
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Disclosure */}
        <div className="bg-gray-100 border-t border-gray-200">
          <div className="mx-auto max-w-6xl px-4 py-8">
            <div className="text-sm text-gray-600">
              <p className="font-semibold text-gray-900 mb-2">Affiliate Disclosure:</p>
              <p className="mb-4">
                Loan AI Portal is a lead generator, not a lender. We connect {city.name} residents with
                licensed Canadian lenders and may receive compensation. All lenders comply with {province.name}
                regulations. Your rates and terms are set by individual lenders.
              </p>
              <p className="font-semibold text-gray-900 mb-2">Representative Example:</p>
              <p>
                A $10,000 loan at 12% APR over 3 years = 36 monthly payments of $332.14, total repayment
                $11,957.04. Actual rates range from 6.99% to 46.96% based on creditworthiness.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Sticky Apply Button */}
      <div className="fixed bottom-4 right-4 z-40">
        <Link
          href="/canada/apply"
          className="flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 font-bold text-white shadow-lg transition hover:bg-red-700 hover:shadow-xl"
        >
          <span>Apply Now</span>
          <span aria-hidden>→</span>
        </Link>
      </div>

      <Footer locale="en" />
    </>
  )
}
