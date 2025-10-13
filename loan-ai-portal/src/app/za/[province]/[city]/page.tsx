import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import SANavigation from '@/components/sa/sa-navigation'
import SAFooter from '@/components/sa/sa-footer'
import SADisclosure from '@/components/sa/sa-disclosure'
import SAFAQ from '@/components/sa/sa-faq'
import SAStickyApplyButton from '@/components/sa/sticky-apply-button'
import { saRegions } from '@/data/sa-regions'
import { saCities } from '@/data/sa-cities'
import Script from 'next/script'

interface CityPageProps {
  params: {
    province: string
    city: string
  }
}

export async function generateStaticParams() {
  const params: { province: string; city: string }[] = []
  
  saRegions.forEach((region) => {
    const regionCities = saCities.filter(c => c.regionSlug === region.slug)
    regionCities.forEach((city) => {
      params.push({
        province: region.slug,
        city: city.slug,
      })
    })
  })
  
  return params
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const city = saCities.find(c => c.slug === params.city && c.regionSlug === params.province)
  
  if (!city) {
    return {
      title: 'City Not Found',
    }
  }

  const year = new Date().getFullYear()
  
  return {
    title: `Loans in ${city.nameEn}, ${city.regionName} – Compare ${year}`,
    description: `Find the best personal loans in ${city.nameEn}, ${city.regionName}. Compare ${city.lenderCount} licensed lenders. Average rate ${city.avgRate}. Fast approval, transparent terms.`,
    keywords: `loans ${city.nameEn.toLowerCase()}, personal loans ${city.nameEn.toLowerCase()}, credit ${city.regionName.toLowerCase()}, loan comparison`,
    openGraph: {
      title: `Personal Loans in ${city.nameEn}, ${city.regionName}`,
      description: `Compare loans from ${city.lenderCount} NCR licensed lenders in ${city.nameEn}. ${city.descriptionEn}`,
      url: `https://loansai.com/za/${params.province}/${params.city}`,
      siteName: 'LoansAI South Africa',
      locale: 'en_ZA',
      type: 'website',
    },
    alternates: {
      canonical: `https://loansai.com/za/${params.province}/${params.city}`,
    },
  }
}

export default function CityPage({ params }: CityPageProps) {
  const city = saCities.find(c => c.slug === params.city && c.regionSlug === params.province)
  const province = saRegions.find(r => r.slug === params.province)

  if (!city || !province) {
    notFound()
  }

  // Get nearby cities (same province, different city)
  const nearbyCities = saCities
    .filter(c => c.regionSlug === params.province && c.slug !== params.city)
    .slice(0, 6)

  const faqItems = [
    {
      question: `What are typical loan amounts available in ${city.nameEn}?`,
      answer: `In ${city.nameEn}, personal loan amounts typically range from R 5,000 to R 250,000. The average loan amount is approximately ${city.avgLoanAmount}, though this varies based on your income, credit score, and debt-to-income ratio. Lenders in ${city.nameEn} assess affordability to ensure you can comfortably repay the loan.`
    },
    {
      question: `How long does it take to get approved for a loan in ${city.nameEn}?`,
      answer: `Approval times in ${city.nameEn} vary by lender and application complexity. Online lenders can provide preliminary decisions within 24-48 hours. Traditional banks may take 3-7 business days. Once approved, funds are typically transferred within 1-3 business days. Having all required documents ready speeds up the process.`
    },
    {
      question: `What credit score do I need for a loan in ${city.nameEn}?`,
      answer: `Credit score requirements in ${city.nameEn} vary by lender. Generally, scores above 670 qualify for competitive rates around ${city.avgRate}. Scores between 580-669 may still qualify but with higher rates. Some lenders in ${city.nameEn} specialize in loans for lower credit scores, though terms may be less favorable. All lenders must conduct affordability assessments regardless of credit score.`
    },
    {
      question: `Are there local lenders with branches in ${city.nameEn}?`,
      answer: `Yes, ${city.nameEn} has approximately ${city.lenderCount} lenders, including both traditional banks with physical branches and online lenders. Major banks like ABSA, Standard Bank, FNB, and Nedbank have branches throughout ${city.nameEn}. Additionally, many online lenders serve ${city.nameEn} residents with fully digital applications and disbursements.`
    },
    {
      question: `What documents do I need to apply for a loan in ${city.nameEn}?`,
      answer: `For a personal loan in ${city.nameEn}, you typically need: valid South African ID or passport, proof of income (3 months of payslips or bank statements), proof of residence (utility bill or lease agreement), and your bank account details. Self-employed applicants may need tax returns and business financial statements. Having these ready speeds up your application.`
    }
  ]

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://loansai.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'South Africa',
        item: 'https://loansai.com/za'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: province.nameEn,
        item: `https://loansai.com/za/${params.province}`
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: city.nameEn,
        item: `https://loansai.com/za/${params.province}/${params.city}`
      }
    ]
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  }

  const financialServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: `Personal Loans in ${city.nameEn}`,
    description: `Compare personal loans from NCR licensed lenders in ${city.nameEn}, ${province.nameEn}`,
    url: `https://loansai.com/za/${params.province}/${params.city}`,
    areaServed: {
      '@type': 'City',
      name: city.nameEn,
      containedInPlace: {
        '@type': 'State',
        name: province.nameEn
      }
    },
    availableLanguage: ['en', 'af']
  }

  return (
    <>
      <Script id="schema-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="schema-faq" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="schema-financial-service" type="application/ld+json">
        {JSON.stringify(financialServiceSchema)}
      </Script>

      <SANavigation />
      <SAStickyApplyButton />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <div className="text-sm text-gray-600 flex items-center gap-2">
            <Link href="/za" className="hover:text-blue-600">South Africa</Link>
            <span>→</span>
            <Link href={`/za/${params.province}`} className="hover:text-blue-600">{province.nameEn}</Link>
            <span>→</span>
            <span className="text-gray-900 font-semibold">{city.nameEn}</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Loans in {city.nameEn}, {province.nameEn}
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {city.descriptionEn}. Compare personal loan offers from {city.lenderCount} NCR licensed lenders 
              serving {city.nameEn}. Average rates around {city.avgRate} with loan amounts up to {city.avgLoanAmount}.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-xl font-bold text-blue-600">{city.population}</div>
                <div className="text-sm text-gray-600">Population</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-xl font-bold text-blue-600">{city.avgLoanAmount}</div>
                <div className="text-sm text-gray-600">Avg Loan</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-xl font-bold text-blue-600">{city.avgRate}</div>
                <div className="text-sm text-gray-600">Avg APR</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-xl font-bold text-blue-600">{city.lenderCount}</div>
                <div className="text-sm text-gray-600">Lenders</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/za/apply">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                  <span className="flex items-center gap-2">
                    <span>💰</span>
                    Apply Now – Free
                  </span>
                </Button>
              </Link>
              <Link href={`/za/${params.province}`}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  ← Back to {province.nameEn} Loans
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  Personal Loans in {city.nameEn} – Local Market Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {city.nameEn} is a key financial center in {province.nameEn} with a population of approximately {city.population}. 
                  The city offers access to diverse lending options including major national banks, regional credit providers, 
                  and innovative online lenders, all regulated by the National Credit Regulator (NCR).
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Personal loan seekers in {city.nameEn} can access loan amounts typically ranging from R 5,000 to R 250,000, 
                  with the local average around {city.avgLoanAmount}. Interest rates are competitive, averaging {city.avgRate}, 
                  though your actual rate depends on your credit profile, income stability, and the lender you choose.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Common loan purposes in {city.nameEn} include debt consolidation, home improvements, vehicle purchases, 
                  medical expenses, and emergency funds. The city's strong financial services infrastructure ensures 
                  fast processing times, with many lenders offering same-day preliminary decisions and next-day funding.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Whether you're looking for a small personal loan or a larger amount for major expenses, LoansAI connects 
                  you with approximately {city.lenderCount} vetted lenders in {city.nameEn}, ensuring you find competitive 
                  rates and terms that suit your financial needs and comply with all NCR regulations.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Local Loan Information */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-xl">
                  {city.nameEn} Loan Market Snapshot
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span><strong>NCR compliance:</strong> All lenders operating in {city.nameEn} must be registered with the NCR</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span><strong>Interest rate cap:</strong> Maximum repo rate + 21% per annum under National Credit Act</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span><strong>Typical loan range:</strong> R 5,000 to R 250,000 depending on creditworthiness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span><strong>Approval timeline:</strong> 24-48 hours for online lenders, 3-7 days for traditional banks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span><strong>Credit requirements:</strong> Lenders in {city.nameEn} serve all credit profiles from excellent to impaired</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span><strong>Affordability checks:</strong> Mandatory assessment ensures you can afford repayments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span><strong>Consumer rights:</strong> 5-day cooling-off period, early repayment rights, transparent cost disclosure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span><strong>Data protection:</strong> POPIA Act ensures your information is secure and confidential</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Nearby Cities */}
        {nearbyCities.length > 0 && (
          <section className="container mx-auto px-4 py-12 bg-white">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">
                Loans Near You
              </h2>
              <p className="text-center text-gray-600 mb-10">
                Compare loan offers in nearby cities in {province.nameEn}
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {nearbyCities.map((nearbyCity) => (
                  <Link 
                    key={nearbyCity.slug} 
                    href={`/za/${params.province}/${nearbyCity.slug}`}
                    className="block"
                  >
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                      <CardHeader>
                        <CardTitle className="text-base">{nearbyCity.nameEn}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xs text-gray-600 mb-3">
                          {nearbyCity.descriptionEn.substring(0, 80)}...
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Population:</span>
                            <span className="font-semibold">{nearbyCity.population}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Avg APR:</span>
                            <span className="font-semibold text-blue-600">{nearbyCity.avgRate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Lenders:</span>
                            <span className="font-semibold">{nearbyCity.lenderCount}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Frequently Asked Questions – {city.nameEn}
            </h2>
            <SAFAQ items={faqItems} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Compare Loans in {city.nameEn}?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Connect with {city.lenderCount} licensed lenders in seconds
            </p>
            <Link href="/za/apply">
              <Button size="lg" variant="secondary" className="text-lg px-10 py-6">
                <span className="flex items-center gap-2">
                  <span>💰</span>
                  Start Your Application
                </span>
              </Button>
            </Link>
            <p className="text-sm mt-4 opacity-75">
              Free comparison • No credit score impact • 100% secure
            </p>
          </div>
        </section>

        {/* Disclosure */}
        <section className="container mx-auto px-4 py-8">
          <SADisclosure />
        </section>
      </main>

      <SAFooter />
    </>
  )
}
