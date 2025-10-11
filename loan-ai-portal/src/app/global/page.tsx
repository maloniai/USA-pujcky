import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { liveCountries, inProgressCountries, comingSoonCountries } from '@/data/countries';
import GlobalFooter from '@/components/global-footer';
import { generatePageMetadata, globalSEO } from '@/lib/seo';
import StructuredData from '@/components/structured-data';

export const metadata = generatePageMetadata(globalSEO, '/global');

export default function GlobalDirectoryPage() {
  // Calculate total population served
  const totalPopulation = liveCountries.reduce((sum, c) => {
    const pop = c.population?.replace(/[^\d.]/g, '') || '0';
    return sum + Number(pop);
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Add structured data for SEO */}
      <StructuredData data={globalSEO.structuredData} />
      
      {/* Hero Section with Enhanced SEO Context */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">
              Global Financial Services Platform
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Global Loan Directory - AI-Powered Personal Loans
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            AI-powered personal loan matching across 40+ countries worldwide. Compare licensed lenders, transparent rates, and find the best loan options in your market with local expertise and regulatory compliance.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            <strong>Currently Live:</strong> United States (all 50 states), Czech Republic<br />
            <strong>Launching Q1 2025:</strong> Canada (English & French)<br />
            <strong>Coming Soon:</strong> Poland, Spain, Mexico, Vietnam, Australia, New Zealand, and 35+ more countries
          </p>
          
          {/* Key Stats - Enhanced for SEO */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center" itemScope itemType="https://schema.org/Service">
            <div className="bg-white rounded-lg shadow-md p-6 flex-1 max-w-xs">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {Math.round(totalPopulation)}M+
              </div>
              <div className="text-sm text-gray-600">People Covered Globally</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex-1 max-w-xs">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {liveCountries.length}
              </div>
              <div className="text-sm text-gray-600">Markets Live & Operating</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex-1 max-w-xs">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {inProgressCountries.length + comingSoonCountries.length}
              </div>
              <div className="text-sm text-gray-600">Markets Expanding To</div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO-Enhanced Context Section */}
      <section className="container mx-auto px-4 py-8 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Where We Offer Loan Services - Global Coverage Map
          </h2>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <p className="text-gray-700 mb-4">
              <strong>Loan AI Portal</strong> is a global financial technology platform providing AI-powered personal loan matching and comparison services. We help millions of borrowers worldwide find the best loan options by connecting them with licensed, regulated lenders in their home countries.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🌟 Currently Serving:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li><strong>United States</strong> - All 50 states, 1,200+ cities, English & Spanish support</li>
                  <li><strong>Czech Republic</strong> - All 14 regions, 600+ cities, Czech language support</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🚀 Launching Next:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li><strong>Canada</strong> - Q1 2025, English & French, nationwide coverage</li>
                  <li><strong>Poland, Spain, Mexico</strong> - Q2-Q3 2025</li>
                  <li><strong>35+ Additional Markets</strong> - 2025-2026 expansion roadmap</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Markets Section - Enhanced SEO */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Active Markets - Where We Currently Offer Loan Services
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Our AI-powered loan matching platform is currently live and serving customers in these countries. 
            Each market features licensed lenders, local regulatory compliance, and dedicated language support.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {liveCountries.map((country) => (
              <Card key={country.code} className="hover:shadow-lg transition-shadow" itemScope itemType="https://schema.org/Place">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-4xl" aria-label={`${country.name} flag`}>{country.flag}</span>
                    <div>
                      <CardTitle className="text-2xl" itemProp="name">{country.name}</CardTitle>
                      <CardDescription className="text-sm" itemProp="description">
                        <span itemProp="population">{country.population} people</span> • {country.coverage || 'Nationwide coverage'}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">{country.description}</p>
                  <div className="text-sm text-gray-500 mb-4 space-y-1">
                    {country.regulator && (
                      <div><strong>Regulated by:</strong> {country.regulator}</div>
                    )}
                    <div><strong>Launched:</strong> {country.launchDate}</div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Link href={country.href} className="w-full">
                      <Button className="w-full">
                        {country.ctaLabel}
                      </Button>
                    </Link>
                    {country.languages && country.languages.length > 0 && (
                      <div className="text-sm text-gray-500 text-center">
                        <strong>Available in:</strong> {country.languages.join(', ')}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* In Progress Section - Enhanced */}
      {inProgressCountries.length > 0 && (
        <section className="container mx-auto px-4 py-12 bg-blue-50/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Launching Soon - Next Markets
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              These countries are in active development and will launch in Q1 2025. 
              Join our waiting list to be notified when services become available in your region.
            </p>
            <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
              {inProgressCountries.map((country) => (
                <Card key={country.code} className="bg-white" itemScope itemType="https://schema.org/Place">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-4xl" aria-label={`${country.name} flag`}>{country.flag}</span>
                      <div className="flex-1">
                        <CardTitle className="text-2xl" itemProp="name">{country.name}</CardTitle>
                        <CardDescription itemProp="description">
                          <span itemProp="population">{country.population} people</span> • {country.coverage || 'Nationwide coverage planned'}
                        </CardDescription>
                      </div>
                      <div className="ml-auto">
                        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                          {country.launchDate || 'Q1 2025'}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3">{country.description}</p>
                    {country.regulator && (
                      <div className="text-sm text-gray-500 mb-4">
                        <strong>Regulatory oversight:</strong> {country.regulator}
                      </div>
                    )}
                    {country.languages && country.languages.length > 0 && (
                      <div className="text-sm text-gray-500">
                        <strong>Will be available in:</strong> {country.languages.join(', ')}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Coming Soon Section - Enhanced */}
      {comingSoonCountries.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Global Expansion - 40+ Markets Coming
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              We're rapidly expanding to serve borrowers worldwide. These countries are on our development roadmap 
              for 2025-2026. Stay tuned for updates as we bring AI-powered loan matching to your region.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {comingSoonCountries.map((country) => (
                <Card key={country.code} className="hover:shadow-md transition-shadow" itemScope itemType="https://schema.org/Place">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl" aria-label={`${country.name} flag`}>{country.flag}</span>
                      <CardTitle className="text-lg" itemProp="name">{country.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 mb-1" itemProp="population">
                      <strong>Population:</strong> {country.population}
                    </p>
                    <p className="text-sm text-gray-500 mb-2">
                      <strong>Coverage:</strong> {country.coverage || 'Nationwide'}
                    </p>
                    {country.languages && country.languages.length > 0 && (
                      <p className="text-xs text-gray-400">
                        Languages: {country.languages.join(', ')}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About Section - Enhanced for SEO */}
      <section className="container mx-auto px-4 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Choose Loan AI Portal for Global Loan Comparison?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We're revolutionizing how people find and compare personal loans worldwide. 
            Our AI-powered platform provides transparent, compliant, and efficient loan matching across multiple countries.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div itemScope itemType="https://schema.org/Service">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                🤖 AI-Powered Matching
              </h3>
              <p className="text-gray-600" itemProp="description">
                Our advanced AI analyzes 200+ data points to match you with lenders who are most likely to approve 
                your application with competitive rates. Machine learning optimizes results in real-time across all markets.
              </p>
            </div>
            <div itemScope itemType="https://schema.org/Service">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                🌍 Local Expertise & Compliance
              </h3>
              <p className="text-gray-600" itemProp="description">
                We partner with licensed, regulated lenders in each market, ensuring you get relevant options that 
                comply with local regulations. Every country has dedicated support in local languages.
              </p>
            </div>
            <div itemScope itemType="https://schema.org/Service">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                📊 Transparent Comparison
              </h3>
              <p className="text-gray-600" itemProp="description">
                Compare rates, terms, APR, and fees side-by-side across multiple lenders. No hidden costs, 
                no surprises. Just clear, honest information to help you make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Section - Enhanced for AI Search */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center" itemScope itemType="https://schema.org/Organization">
          <h2 className="text-2xl font-bold text-gray-900 mb-4" itemProp="name">
            About Loan AI Portal - Global Financial Technology Leader
          </h2>
          <div className="text-gray-600 mb-6 space-y-4 text-left">
            <p itemProp="description">
              <strong>Loan AI Portal</strong> is a global financial technology platform dedicated to democratizing access to personal credit worldwide. 
              We leverage artificial intelligence, machine learning, and local partnerships to help millions of people find the right loan products 
              in their home markets.
            </p>
            <p>
              Our mission is to make borrowing <strong>transparent, accessible, and fair</strong> across borders. By combining cutting-edge AI technology 
              with deep local market knowledge, we're building the world's most comprehensive loan comparison platform.
            </p>
            <p>
              <strong>Current Operations:</strong> United States (50 states, 1,200+ cities), Czech Republic (14 regions, 600+ cities)<br />
              <strong>Launching Q1 2025:</strong> Canada (nationwide, bilingual)<br />
              <strong>Expansion Roadmap:</strong> 40+ countries by 2026
            </p>
          </div>
          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Regulatory Compliance & Security</h3>
            <p className="text-sm text-gray-600 text-left">
              ✓ Licensed and compliant in all operating markets<br />
              ✓ Bank-level encryption protects your personal data<br />
              ✓ Partnerships only with regulated, licensed lenders<br />
              ✓ Transparent fee structures and APR disclosures<br />
              ✓ Local regulatory oversight in each jurisdiction
            </p>
          </div>
          <p className="text-sm text-gray-500">
            Serving customers in the United States (regulated by CFPB & state banking departments) and 
            Czech Republic (regulated by Czech National Bank - ČNB). Expanding globally with full regulatory compliance.
          </p>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
