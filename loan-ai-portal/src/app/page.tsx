import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import HowToApplySchema from '@/components/howto-schema'
import GeoDetectionNotice from '@/components/geo/geo-detection-notice'
import CountrySelector from '@/components/geo/country-selector'
import { featuredCountries } from '@/data/countries'
import { generatePageMetadata, homeSEO } from '@/lib/seo'

export const metadata = generatePageMetadata(homeSEO)

export default function HomePage() {
  return (
    <>
      <HowToApplySchema />
      <Navigation />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <section
            id="global-coverage"
            className="space-y-8 text-center"
            aria-labelledby="global-coverage-heading"
          >
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                Global loan intelligence
              </p>
              <h1
                id="global-coverage-heading"
                className="text-3xl font-bold text-blue-900 md:text-4xl"
              >
                Choose your country to compare regulated loan offers
              </h1>
              <p className="text-base text-gray-700 md:text-lg max-w-2xl mx-auto">
                We currently provide compliant loan comparisons in the United States and Czech Republic.
                Select your destination to explore localized guides, lender coverage, and application support.
              </p>
            </div>
            <GeoDetectionNotice countries={featuredCountries} />
            <CountrySelector countries={featuredCountries} className="mx-auto max-w-4xl" />
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}