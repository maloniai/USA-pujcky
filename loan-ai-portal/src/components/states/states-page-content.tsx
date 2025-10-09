'use client'

import { useMemo, useState } from 'react'
import Navigation from '@/components/navigation'
import ApplicationFormScript from '@/components/application-form-script'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import FAQSchema from '@/components/faq-schema'
import { ResponsiveBreadcrumbs } from '@/components/ui/breadcrumbs'
import { getCommonLabels } from '@/data/translations'
import { getStatesPageCopy } from '@/data/states-translations'
import type { StatesPageCopy } from '@/data/states-translations'
import { usStates } from '@/data/states'
import type { Locale } from '@/lib/i18n'
import { applyLocaleToPath } from '@/lib/i18n'
import LeadGenDisclosure from '@/components/compliance/lead-gen-disclosure'

const REGION_KEYS = ['Northeast', 'Southeast', 'Midwest', 'Southwest', 'West'] as const

type RegionKey = (typeof REGION_KEYS)[number]

interface StatesPageContentProps {
  locale: Locale
  basePath?: string
}

export default function StatesPageContent({ locale, basePath = '/states' }: StatesPageContentProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRegion, setSelectedRegion] = useState<string>('all')

  const copy = getStatesPageCopy(locale)
  const common = getCommonLabels(locale)

  const faqSchemaItems = copy.faqs.map((faq) => ({ q: faq.question, a: faq.answer }))

  const filteredStates = useMemo(() => {
    let filtered = usStates

    if (selectedRegion !== 'all') {
      filtered = filtered.filter((state) => state.region === selectedRegion)
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter((state) =>
        state.name.toLowerCase().includes(query) ||
        state.abbreviation.toLowerCase().includes(query) ||
        state.popularCities.some((city) => city.toLowerCase().includes(query))
      )
    }

    return filtered
  }, [searchQuery, selectedRegion])

  const resultCountLabel = filteredStates.length === 1
    ? copy.search.resultLabelSingular
    : copy.search.resultLabelPlural.replace('{count}', filteredStates.length.toString())

  const breadcrumbItems = [
    { name: common.home, url: applyLocaleToPath('/', locale), position: 1 },
    { name: copy.breadcrumbStates, url: applyLocaleToPath(basePath, locale), position: 2 },
  ]

  return (
    <>
      <FAQSchema faqs={faqSchemaItems} />
      <BreadcrumbSchema items={breadcrumbItems} />
      <Navigation locale={locale} />

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">{copy.intro.title}</h1>
          <p className="text-xl text-gray-700 mb-4 max-w-3xl">{copy.intro.lead}</p>
          <p className="text-lg text-gray-600 max-w-3xl">{copy.intro.description}</p>
        </div>
      </div>

      <div className="bg-gray-50 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <ResponsiveBreadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">{copy.search.heading}</h2>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <label htmlFor="state-search" className="block text-sm font-medium text-gray-700 mb-2">
                  {copy.search.searchLabel}
                </label>
                <input
                  id="state-search"
                  type="text"
                  placeholder={common.searchPlaceholder}
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="md:w-64">
                <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-2">
                  {common.regionFilterLabel}
                </label>
                <select
                  id="region"
                  value={selectedRegion}
                  onChange={(event) => setSelectedRegion(event.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="all">{common.allRegionsOption}</option>
                  {REGION_KEYS.map((region) => (
                    <option key={region} value={region}>
                      {common.regionOptions[region] ?? region}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <p className="text-gray-600">{resultCountLabel}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredStates.map((state) => (
              <div
                key={state.abbreviation}
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow bg-white"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-blue-900">{state.name}</h3>
                  <span className="text-sm font-semibold bg-blue-100 text-blue-800 px-3 py-1 rounded">
                    {state.abbreviation}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 text-sm">{state.description}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{copy.statLabels.population}:</span>
                    <span className="font-semibold text-gray-900">{state.population}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{copy.statLabels.avgLoanAmount}:</span>
                    <span className="font-semibold text-blue-700">{state.avgLoanAmount}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{copy.statLabels.avgInterestRate}:</span>
                    <span className="font-semibold text-blue-700">{state.avgRate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{copy.statLabels.maxLoanAmount}:</span>
                    <span className="font-semibold text-green-700">{state.maxLoanAmount}</span>
                  </div>
                </div>

                <div className="border-t pt-4 mb-4">
                  <h4 className="font-semibold text-sm text-gray-900 mb-2">{copy.stateCardLabels.regulations}:</h4>
                  <ul className="space-y-1">
                    {state.regulations.slice(0, 2).map((regulation, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>{regulation}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-sm text-gray-900 mb-2">{copy.stateCardLabels.popularCities}:</h4>
                  <p className="text-sm text-gray-600">{state.popularCities.slice(0, 3).join(', ')}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-8">{copy.statHeading}</h2>

            <div className="bg-blue-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{copy.regulationsSection.title}</h3>
              <p className="text-gray-700 mb-4">{copy.regulationsSection.intro}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {copy.regulationsSection.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <HighlightCard card={copy.lowRateHighlight} />
              <HighlightCard card={copy.highLimitHighlight} />
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{copy.verificationNotice.title}</h3>
              <p className="text-gray-700">{copy.verificationNotice.body}</p>
            </div>

            <h3 className="text-2xl font-bold text-blue-900 mb-4">{copy.regionOverviewTitle}</h3>
            <div className="space-y-6 mb-8">
              {copy.regionInsights.map((region) => (
                <div key={region.title}>
                  <h4 className="text-xl font-semibold text-blue-800 mb-2">{region.title}</h4>
                  <p className="text-gray-700">{region.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-8">{copy.faqTitle}</h2>
            <div className="space-y-6">
              {copy.faqs.map((faq) => (
                <div key={faq.question} className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-lg">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">{copy.cta.title}</h2>
            <p className="text-lg text-gray-700 mb-6">{copy.cta.description}</p>
            <ApplicationFormScript />
            <LeadGenDisclosure locale={locale} className="mt-3" />
          </div>
        </div>
      </div>
    </>
  )
}

type HighlightCardCopy = StatesPageCopy['lowRateHighlight']

interface HighlightCardProps {
  card: HighlightCardCopy
}

function HighlightCard({ card }: HighlightCardProps) {
  return (
    <div className="text-center">
      <div className="text-5xl mb-4">📝</div>
      <h3 className="text-2xl font-bold text-blue-900 mb-3">{card.title}</h3>
      <p className="text-gray-700 mb-4">{card.description}</p>
      <ul className="space-y-2 text-left text-gray-700">
        {card.items.map((item: string) => (
          <li key={item} className="flex items-start gap-2">
            <span className="text-blue-600">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
