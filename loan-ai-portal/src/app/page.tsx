import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { liveCountries, inProgressCountries, comingSoonCountries } from '@/data/countries';
import { cities } from '@/data/cities';
import GlobalFooter from '@/components/global-footer';
import { HomepageSchema } from '@/components/seo/homepage-schema';

export const metadata: Metadata = {
  title: 'Compare Personal Loans in 40+ Countries | AI-Powered Rates | LoansAI',
  description: 'Find the best personal loan rates in USA, Canada, Czech Republic & 40+ countries. AI matches you with licensed lenders in 60 seconds. Compare rates instantly.',
  openGraph: {
    title: 'Compare Personal Loans Across 40+ Countries | LoansAI',
    description: 'AI-powered loan matching in USA, Canada, Czech Republic & 40+ countries. Compare rates from licensed lenders in 60 seconds.',
    url: 'https://loansai.com',
    siteName: 'LoansAI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://loansai.com/og-global-directory.jpg',
        width: 1200,
        height: 630,
        alt: 'LoansAI - Compare Personal Loans Across 40+ Countries',
      },
    ],
  },
  alternates: {
    canonical: 'https://loansai.com',
    languages: {
      'en': 'https://loansai.com',
      'en-US': 'https://loansai.com/us',
      'es-US': 'https://loansai.com/es',
      'cs-CZ': 'https://loansai.com/cz',
      'en-CA': 'https://loansai.com/ca',
      'fr-CA': 'https://loansai.com/ca/fr',
      'x-default': 'https://loansai.com',
    },
  },
};

export default function HomePage() {
  const totalCountries = liveCountries.length + inProgressCountries.length + comingSoonCountries.length;
  const totalPopulation = liveCountries.reduce((sum, c) => sum + Number(c.population?.replace(/[^\d]/g, '') || 0), 0);

  return (
    <>
      <HomepageSchema 
        countryCount={totalCountries} 
        populationCovered={`${totalPopulation}M+`} 
      />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative container mx-auto px-4 py-16 md:py-24 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0 opacity-10">
          <svg 
            className="w-full h-full" 
            viewBox="0 0 1200 630" 
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Global network of financial connections representing AI-powered loan matching across 40+ countries"
          >
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#3B82F6', stopOpacity: 0.8}} />
                <stop offset="100%" style={{stopColor: '#8B5CF6', stopOpacity: 0.8}} />
              </linearGradient>
            </defs>
            {/* Global Map Dots */}
            <circle cx="200" cy="150" r="8" fill="#3B82F6" opacity="0.6" />
            <circle cx="450" cy="200" r="8" fill="#3B82F6" opacity="0.6" />
            <circle cx="700" cy="180" r="8" fill="#3B82F6" opacity="0.6" />
            <circle cx="950" cy="220" r="8" fill="#3B82F6" opacity="0.6" />
            <circle cx="300" cy="350" r="8" fill="#8B5CF6" opacity="0.6" />
            <circle cx="600" cy="400" r="8" fill="#8B5CF6" opacity="0.6" />
            <circle cx="900" cy="380" r="8" fill="#8B5CF6" opacity="0.6" />
            {/* Connection Lines */}
            <line x1="200" y1="150" x2="450" y2="200" stroke="url(#grad1)" strokeWidth="2" opacity="0.4" />
            <line x1="450" y1="200" x2="700" y2="180" stroke="url(#grad1)" strokeWidth="2" opacity="0.4" />
            <line x1="700" y1="180" x2="950" y2="220" stroke="url(#grad1)" strokeWidth="2" opacity="0.4" />
            <line x1="300" y1="350" x2="600" y2="400" stroke="url(#grad1)" strokeWidth="2" opacity="0.4" />
            <line x1="600" y1="400" x2="900" y2="380" stroke="url(#grad1)" strokeWidth="2" opacity="0.4" />
            {/* AI Brain Icon */}
            <circle cx="600" cy="280" r="60" fill="none" stroke="#3B82F6" strokeWidth="3" opacity="0.5" />
            <path d="M 580 280 Q 600 260 620 280 T 660 280" fill="none" stroke="#8B5CF6" strokeWidth="3" opacity="0.5" />
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Global Loan Directory
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            AI-powered personal loan matching across 40+ countries. Find the best rates in your market with local expertise and transparent comparison.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white rounded-lg shadow-md p-6 flex-1 max-w-xs">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {liveCountries.reduce((sum, c) => sum + Number(c.population?.replace(/[^\d]/g, '') || 0), 0).toLocaleString()}M+
              </div>
              <div className="text-sm text-gray-600">People Covered</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex-1 max-w-xs">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {liveCountries.length}
              </div>
              <div className="text-sm text-gray-600">Markets Live</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex-1 max-w-xs">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {comingSoonCountries.length}
              </div>
              <div className="text-sm text-gray-600">Markets Coming Soon</div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Markets Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Live Markets
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {liveCountries.map((country) => (
              <Card key={country.code} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-4xl">{country.flag}</span>
                    <div>
                      <CardTitle className="text-2xl">{country.name}</CardTitle>
                      <CardDescription className="text-sm">
                        {country.population} people • {country.coverage || 'Nationwide'}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{country.description}</p>
                  <div className="flex flex-col gap-2">
                    <Link href={country.href} className="w-full">
                      <Button className="w-full">
                        Explore {country.name}
                      </Button>
                    </Link>
                    {country.languages && country.languages.length > 0 && (
                      <div className="text-sm text-gray-500 text-center">
                        Available in: {country.languages.join(', ')}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* In Progress Section */}
      {inProgressCountries.length > 0 && (
        <section className="container mx-auto px-4 py-12 bg-blue-50/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Launching Soon
            </h2>
            <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
              {inProgressCountries.map((country) => (
                <Card key={country.code} className="bg-white">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-4xl">{country.flag}</span>
                      <div>
                        <CardTitle className="text-2xl">{country.name}</CardTitle>
                        <CardDescription>
                          {country.population} people • {country.coverage || 'Nationwide'}
                        </CardDescription>
                      </div>
                      <div className="ml-auto">
                        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                          Q1 2025
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{country.description}</p>
                    {country.languages && country.languages.length > 0 && (
                      <div className="text-sm text-gray-500">
                        Will be available in: {country.languages.join(', ')}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Coming Soon Section */}
      {comingSoonCountries.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Expanding to 40+ Markets
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {comingSoonCountries.map((country) => (
                <Card key={country.code} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{country.flag}</span>
                      <CardTitle className="text-lg">{country.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">
                      {country.population} people
                    </p>
                    <p className="text-sm text-gray-500">{country.coverage || 'Nationwide'}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Choose LoansAI?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                🤖 AI-Powered Matching
              </h3>
              <p className="text-gray-600">
                Our AI analyzes your profile and matches you with lenders who are most likely to approve your application with competitive rates.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                🌍 Local Expertise
              </h3>
              <p className="text-gray-600">
                We partner with trusted lenders in each market, ensuring you get relevant options that comply with local regulations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                📊 Transparent Comparison
              </h3>
              <p className="text-gray-600">
                Compare rates, terms, and fees side-by-side. No hidden costs, no surprises. Just clear, honest information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <details className="group bg-white rounded-lg shadow-md p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-semibold text-lg text-gray-900 list-none">
                <span>How does LoansAI work?</span>
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                LoansAI uses artificial intelligence to analyze your financial profile and match you with licensed lenders in your country. Simply select your country, answer a few questions, and get personalized loan offers in 60 seconds. Our AI considers your credit profile, income, and local regulations to find the best rates.
              </p>
            </details>

            <details className="group bg-white rounded-lg shadow-md p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-semibold text-lg text-gray-900 list-none">
                <span>Is LoansAI available in my country?</span>
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                LoansAI currently operates in {totalCountries}+ countries including the United States, Czech Republic, Canada, and more. We're rapidly expanding to Poland, Spain, Romania, Vietnam, Mexico, Colombia, Kazakhstan, South Africa, Australia, New Zealand, and the Philippines. Check our homepage to see if your country is live or coming soon.
              </p>
            </details>

            <details className="group bg-white rounded-lg shadow-md p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-semibold text-lg text-gray-900 list-none">
                <span>Is LoansAI free to use?</span>
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Yes, LoansAI is 100% free for borrowers. We never charge fees for comparing loan offers or matching you with lenders. We earn commissions from lender partners only when you successfully complete a loan, but this never affects the rates or terms you receive.
              </p>
            </details>

            <details className="group bg-white rounded-lg shadow-md p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-semibold text-lg text-gray-900 list-none">
                <span>What credit score do I need?</span>
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Credit requirements vary by country and lender. In the United States, we work with lenders who accept scores as low as 580, though better scores (700+) qualify for lower rates. In Czech Republic, we check registry databases (SOLUS, CBCB). Each country has different credit assessment methods, and our AI considers local standards.
              </p>
            </details>

            <details className="group bg-white rounded-lg shadow-md p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-semibold text-lg text-gray-900 list-none">
                <span>How quickly can I get funded?</span>
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Funding speed varies by country and lender. In the US, some lenders offer same-day or next-day funding for approved applicants. In Czech Republic, typical funding is 1-3 business days. Canada averages 2-5 business days. After approval, funds are typically deposited directly to your bank account.
              </p>
            </details>

            <details className="group bg-white rounded-lg shadow-md p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-semibold text-lg text-gray-900 list-none">
                <span>Are all lenders licensed and regulated?</span>
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Yes. LoansAI only partners with licensed, regulated lenders in each market. US lenders comply with CFPB regulations and state banking laws. Czech lenders are regulated by ČNB (Czech National Bank). Canadian lenders follow FCAC guidelines and provincial regulations. We verify all licenses before adding lenders to our network.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            About LoansAI
          </h2>
          <p className="text-gray-600 mb-6">
            LoansAI is a global financial technology platform dedicated to democratizing access to personal credit. 
            We leverage artificial intelligence and local partnerships to help millions of people find the right loan products 
            in their home markets. Our mission is to make borrowing transparent, accessible, and fair worldwide.
          </p>
          <p className="text-sm text-gray-500">
            Licensed and compliant in all operating markets. Your data is protected with bank-level encryption.
          </p>
        </div>
      </section>

      <GlobalFooter />
      </div>
    </>
  );
}