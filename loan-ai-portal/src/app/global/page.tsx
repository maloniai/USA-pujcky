import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { liveCountries, inProgressCountries, comingSoonCountries } from '@/data/countries';
import GlobalFooter from '@/components/global-footer';

export const metadata: Metadata = {
  title: 'Global Loan Directory - AI-Powered Personal Loan Matching Across 40+ Countries',
  description: 'Compare personal loans across the United States, Czech Republic, Canada, and 40+ countries worldwide. AI-powered matching, local lender networks, and transparent rates in your market.',
  openGraph: {
    title: 'Global Loan Directory - AI-Powered Personal Loan Matching',
    description: 'Access personal loan options across 40+ countries with AI-powered matching and local lender expertise.',
    url: 'https://loansai.com/global',
    siteName: 'LoansAI',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://loansai.com/global',
  },
};

export default function GlobalDirectoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
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
  );
}
