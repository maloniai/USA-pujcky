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

interface ProvincePageProps {
  params: {
    province: string
  }
}

export async function generateStaticParams() {
  return saRegions.map((region) => ({
    province: region.slug,
  }))
}

export async function generateMetadata({ params }: ProvincePageProps): Promise<Metadata> {
  const province = saRegions.find(r => r.slug === params.province)
  
  if (!province) {
    return {
      title: 'Province Not Found',
    }
  }

  const year = new Date().getFullYear()
  
  return {
    title: `Loans in ${province.nameEn} – Compare ${year}`,
    description: `Compare personal loans in ${province.nameEn}, South Africa. Licensed NCR lenders, competitive rates, fast approval. Find loans in ${province.majorCities.slice(0, 3).join(', ')}.`,
    keywords: `loans ${province.nameEn.toLowerCase()}, personal loans ${province.nameEn.toLowerCase()}, credit ${province.nameEn.toLowerCase()}, loan comparison`,
    openGraph: {
      title: `Personal Loans in ${province.nameEn} – Compare Licensed Offers`,
      description: `Compare loans from NCR licensed lenders in ${province.nameEn}. ${province.descriptionEn}`,
      url: `https://loansai.com/za/${params.province}`,
      siteName: 'LoansAI South Africa',
      locale: 'en_ZA',
      type: 'website',
    },
    alternates: {
      canonical: `https://loansai.com/za/${params.province}`,
    },
  }
}

export default function ProvincePage({ params }: ProvincePageProps) {
  const province = saRegions.find(r => r.slug === params.province)

  if (!province) {
    notFound()
  }

  const provinceCities = saCities.filter(c => c.regionSlug === params.province)
  const nearbyCities = provinceCities.slice(0, 6)

  const faqItems = [
    {
      question: `What are the typical interest rates for personal loans in ${province.nameEn}?`,
      answer: `Interest rates in ${province.nameEn} typically range from 15% to 28% APR, depending on your credit profile and the lender. The average rate is around ${province.avgRate}. Borrowers with excellent credit scores (750+) can qualify for rates as low as 15-18%, while those with lower credit scores may see rates up to 28%. All rates are capped by the National Credit Act.`
    },
    {
      question: `How much can I borrow in ${province.nameEn}?`,
      answer: `Loan amounts in ${province.nameEn} typically range from R 5,000 to R 250,000, depending on your income and creditworthiness. The average loan amount in ${province.nameEn} is approximately ${province.avgLoanAmount}. Lenders will assess your affordability based on your monthly income, expenses, and existing debt obligations.`
    },
    {
      question: `Are there specific regulations for loans in ${province.nameEn}?`,
      answer: `All loans in ${province.nameEn} are subject to the same National Credit Act regulations that apply throughout South Africa. This includes maximum interest rate caps (repo rate + 21%), mandatory affordability assessments, and transparent cost disclosure. All lenders must be registered with the NCR regardless of which province they operate in.`
    },
    {
      question: `Which cities in ${province.nameEn} have the most lenders?`,
      answer: `The major cities in ${province.nameEn} with the highest lender concentration are ${province.majorCities.slice(0, 3).join(', ')}. These urban centers typically have more physical branches and online lender options. However, all licensed lenders can provide loans to residents across ${province.nameEn} through online applications.`
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

  return (
    <>
      <Script id="schema-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="schema-faq" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <SANavigation />
      <SAStickyApplyButton />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <div className="text-sm text-gray-600">
            <Link href="/za" className="hover:text-blue-600">← Back to South Africa Loans</Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Loans in {province.nameEn}
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {province.descriptionEn}. Compare personal loan offers from NCR licensed lenders 
              operating in {province.nameEn}. Access to {provinceCities.length}+ cities including {province.majorCities.slice(0, 3).join(', ')}.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-xl font-bold text-blue-600">{province.population}</div>
                <div className="text-sm text-gray-600">Population</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-xl font-bold text-blue-600">{province.avgLoanAmount}</div>
                <div className="text-sm text-gray-600">Avg Loan</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-xl font-bold text-blue-600">{province.avgRate}</div>
                <div className="text-sm text-gray-600">Avg Rate</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-xl font-bold text-blue-600">{provinceCities.length}+</div>
                <div className="text-sm text-gray-600">Cities</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/za/apply">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                  <span className="flex items-center gap-2">
                    <span>💰</span>
                    Apply Now
                  </span>
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
                  Personal Loans in {province.nameEn} – What You Need to Know
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {province.nameEn} is home to approximately {province.population} residents across major cities including {province.majorCities.slice(0, 4).join(', ')}. 
                  The provincial loan market offers diverse options from traditional banks, credit unions, and online lenders, all regulated by the National Credit Regulator (NCR).
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Personal loan amounts in {province.nameEn} typically range from R 5,000 to R 250,000, with the average loan around {province.avgLoanAmount}. 
                  Interest rates vary based on your credit profile, income stability, and debt-to-income ratio, with competitive rates 
                  averaging {province.avgRate} across licensed lenders.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Whether you're in {province.capitalCity} or smaller municipalities throughout the province, LoansAI connects you 
                  with vetted lenders offering transparent terms, competitive rates, and fast approval processes. All loans comply with 
                  the National Credit Act to ensure fair lending practices and consumer protection.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Local Regulations */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-xl">
                  Loan Regulations in {province.nameEn}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span><strong>Maximum interest rate:</strong> Repo rate + 21% per annum (currently capped at approximately 28%)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span><strong>Initiation fees:</strong> Capped at R 1,207.50 + 10% of loan amount above R 1,000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span><strong>Monthly service fees:</strong> Maximum R 69 per month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span><strong>NCR registration:</strong> All lenders operating in {province.nameEn} must be NCR registered</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span><strong>Affordability assessment:</strong> Mandatory credit and affordability checks protect consumers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span><strong>Cooling-off period:</strong> 5 business days to cancel without penalty</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span><strong>Early repayment:</strong> Right to settle early with reduced interest charges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span><strong>POPIA compliance:</strong> All lenders must protect your data under POPIA Act 4 of 2013</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cities in Province */}
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Loans Near You in {province.nameEn}
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Compare loan offers in major cities across {province.nameEn}
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nearbyCities.map((city) => (
                <Link 
                  key={city.slug} 
                  href={`/za/${params.province}/${city.slug}`}
                  className="block"
                >
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <CardHeader>
                      <CardTitle className="text-base">{city.nameEn}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs text-gray-600 mb-3">
                        {city.descriptionEn}
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Population:</span>
                          <span className="font-semibold">{city.population}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Avg APR:</span>
                          <span className="font-semibold text-blue-600">{city.avgRate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Lenders:</span>
                          <span className="font-semibold">{city.lenderCount}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {provinceCities.length > 6 && (
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  More cities in {province.nameEn}:
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {provinceCities.slice(6).map((city) => (
                    <Link 
                      key={city.slug} 
                      href={`/za/${params.province}/${city.slug}`}
                      className="text-blue-600 hover:underline text-sm"
                    >
                      {city.nameEn}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Frequently Asked Questions – {province.nameEn}
            </h2>
            <SAFAQ items={faqItems} />
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
