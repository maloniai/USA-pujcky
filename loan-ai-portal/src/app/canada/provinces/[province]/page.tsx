import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { getProvinceBySlug, canadianProvinces } from '@/data/canada-provinces'
import { getCitiesByProvince } from '@/data/canada-cities'

// Generate static params for all provinces
export async function generateStaticParams() {
  return canadianProvinces.map(province => ({
    province: province.slug,
  }))
}

// Generate metadata for each province
export async function generateMetadata({
  params,
}: {
  params: { province: string }
}): Promise<Metadata> {
  const province = getProvinceBySlug(params.province)
  
  if (!province) {
    return {
      title: 'Province Not Found',
      description: 'The requested province page could not be found.',
    }
  }

  const title = `Loans in ${province.name} – Compare 2025`
  const description = `Get personal loans in ${province.name}, Canada. Average loan: ${province.avgLoanAmount}, rates from ${province.avgRate}. View ${province.abbreviation} lending regulations and popular cities.`
  
  return {
    title,
    description,
    keywords: `personal loans ${province.name}, ${province.abbreviation} loans, ${province.name} lenders, loans ${province.abbreviation}`,
    alternates: {
      canonical: `https://loan-platform.com/canada/provinces/${params.province}`,
    },
  }
}

export default function ProvinceDetailPage({
  params,
}: {
  params: { province: string }
}) {
  const province = getProvinceBySlug(params.province)

  if (!province) {
    notFound()
  }

  const cities = getCitiesByProvince(params.province)

  // JSON-LD Schema for Province
  const provinceSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: `Personal Loans in ${province.name}`,
    description: province.description,
    areaServed: {
      '@type': 'State',
      name: province.name,
      addressCountry: 'CA',
    },
    url: `https://loan-platform.com/canada/provinces/${params.province}`,
  }

  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What are the personal loan regulations in ${province.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: province.regulations.join('. ') + '.',
        },
      },
      {
        '@type': 'Question',
        name: `What is the average personal loan amount in ${province.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `The average personal loan amount in ${province.name} is ${province.avgLoanAmount}, with rates averaging around ${province.avgRate}. Maximum loan amounts can reach ${province.maxLoanAmount} for qualified borrowers.`,
        },
      },
      {
        '@type': 'Question',
        name: `Who regulates lending in ${province.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Lending in ${province.name} is regulated by ${province.regulator}. All lenders must be licensed and comply with provincial consumer protection laws.`,
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(provinceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navigation locale="en" />
      <main className="flex-1 bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <nav className="mb-6">
              <Link
                href="/canada/provinces"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold transition hover:bg-white/20"
              >
                <span aria-hidden>←</span>
                Back to All Provinces
              </Link>
            </nav>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Loans in {province.name}, {province.abbreviation}
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-red-100">
                Compare Personal Loan Rates & Regulations
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  📊 Avg: {province.avgLoanAmount}
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  📈 Rate: {province.avgRate}
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  👥 Pop: {province.population}
                </div>
              </div>
              <Link
                href="/canada/apply"
                className="inline-block mt-8 bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-colors shadow-lg"
              >
                Apply for a Loan
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <section className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-red-900 mb-4">
                  {province.name} Personal Loan Overview
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {province.description} The province has {province.population} residents and maintains
                  specific lending regulations to protect consumers while ensuring access to credit.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">AVERAGE LOAN AMOUNT</h3>
                    <p className="text-2xl font-bold text-red-600">{province.avgLoanAmount}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">AVERAGE RATE</h3>
                    <p className="text-2xl font-bold text-red-600">{province.avgRate}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">MAX LOAN AMOUNT</h3>
                    <p className="text-2xl font-bold text-red-600">{province.maxLoanAmount}</p>
                  </div>
                </div>
              </section>

              {/* Local Regulations */}
              <section className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-red-900 mb-4">
                  {province.name} Lending Regulations
                </h2>
                <p className="text-gray-700 mb-4">
                  Lending in {province.name} is regulated by {province.regulator}. Key borrower protections
                  include:
                </p>
                <ul className="space-y-3">
                  {province.regulations.map((regulation, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-sm font-bold">
                        ✓
                      </span>
                      <span className="text-gray-700">{regulation}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Regulatory Authority:</strong>{' '}
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

              {/* Cities in Province */}
              {cities.length > 0 && (
                <section className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-red-900 mb-4">
                    Loans in Major {province.name} Cities
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Explore loan options and local lender information in these popular {province.name} cities:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {cities.map(city => (
                      <Link
                        key={city.slug}
                        href={`/canada/${params.province}/${city.slug}/loans`}
                        className="rounded-lg border border-gray-200 p-4 transition hover:border-red-300 hover:shadow-md"
                      >
                        <h3 className="text-lg font-semibold text-red-900">{city.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Pop: {city.population} · {city.nearbyLenders}+ lenders · Avg: {city.averageLoanAmount}
                        </p>
                        <p className="text-xs text-red-700 font-semibold mt-2">
                          View city details →
                        </p>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* FAQ */}
              <section className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-red-900 mb-6">
                  {province.name} Loan FAQs
                </h2>
                <div className="space-y-4">
                  <details className="bg-gray-50 p-4 rounded-lg">
                    <summary className="font-semibold cursor-pointer text-gray-900">
                      What are the requirements for getting a personal loan in {province.name}?
                    </summary>
                    <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                      To qualify for a personal loan in {province.name}, you typically need to be at least 18
                      years old (19 in some provinces), have a valid Canadian ID, proof of income, an active
                      bank account, and be a resident of {province.name}. Credit requirements vary by lender,
                      with options available for all credit scores.
                    </p>
                  </details>

                  <details className="bg-gray-50 p-4 rounded-lg">
                    <summary className="font-semibold cursor-pointer text-gray-900">
                      How do {province.name} lending rates compare to other provinces?
                    </summary>
                    <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                      {province.name} has an average rate of {province.avgRate}, which is {' '}
                      {parseFloat(province.avgRate) < 11 ? 'competitive compared to' : 'in line with'} other
                      Canadian provinces. Provincial regulations help ensure rates remain fair and transparent
                      for borrowers. Your actual rate will depend on your credit score, income, and loan amount.
                    </p>
                  </details>

                  <details className="bg-gray-50 p-4 rounded-lg">
                    <summary className="font-semibold cursor-pointer text-gray-900">
                      Can I get a loan in {province.name} with bad credit?
                    </summary>
                    <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                      Yes, many lenders in {province.name} work with borrowers who have less-than-perfect
                      credit. While you may face higher interest rates, options are available. Alternative
                      lenders, credit unions, and online platforms offer flexible approval criteria. Our
                      matching service connects you with lenders most likely to approve your application.
                    </p>
                  </details>

                  <details className="bg-gray-50 p-4 rounded-lg">
                    <summary className="font-semibold cursor-pointer text-gray-900">
                      How long does it take to get approved for a loan in {province.name}?
                    </summary>
                    <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                      Approval times vary by lender. Many online lenders provide instant pre-approval decisions,
                      with full approval and funding possible within 1-3 business days. Traditional banks and
                      credit unions may take 3-7 business days. Some lenders offer same-day funding for urgent
                      needs if approved before their cutoff time.
                    </p>
                  </details>

                  <details className="bg-gray-50 p-4 rounded-lg">
                    <summary className="font-semibold cursor-pointer text-gray-900">
                      What can I use a personal loan for in {province.name}?
                    </summary>
                    <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                      Personal loans in {province.name} can be used for almost any purpose: debt consolidation,
                      home improvements, medical expenses, education, vehicle purchases, weddings, or emergency
                      expenses. Lenders typically don't restrict how you use the funds, though some specialized
                      loans may have specific requirements.
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
                  Get matched with licensed lenders in {province.name}.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-300 font-bold">✓</span>
                    <span>2-minute application</span>
                  </li>
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
                    <span>Fast funding (1-3 days)</span>
                  </li>
                </ul>
                <Link
                  href="/canada/apply"
                  className="block w-full bg-white text-red-600 text-center px-6 py-3 rounded-lg font-bold hover:bg-red-50 transition-colors"
                >
                  Start Application
                </Link>
              </div>

              {/* Other Info */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-bold text-red-900 mb-4">Resources</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/canada" className="text-red-600 hover:text-red-800 underline">
                      ← Back to Canada Hub
                    </Link>
                  </li>
                  <li>
                    <Link href="/canada/provinces" className="text-red-600 hover:text-red-800 underline">
                      All Provinces
                    </Link>
                  </li>
                  <li>
                    <a
                      href={province.regulatorUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-red-800 underline"
                    >
                      {province.abbreviation} Regulator
                    </a>
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
                Loan AI Portal is a lead generator, not a lender. We connect borrowers with licensed lenders
                in {province.name} and may receive compensation. All rates and terms are set by individual
                lenders in compliance with {province.name} regulations.
              </p>
              <p className="font-semibold text-gray-900 mb-2">Representative Example:</p>
              <p>
                A ${province.avgLoanAmount.replace(/[,$]/g, '')} loan at {province.avgRate} APR over 3 years
                would have varying monthly payments depending on the exact terms. Actual rates range from
                6.99% to 46.96% based on creditworthiness.
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
