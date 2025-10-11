import Link from 'next/link'
import type { CreditGuidance, EducationModule, FAQEntry, QuickLink, RegulationUpdate } from '@/data/education'

interface AiSummaryProps {
  heading: string
  points: string[]
  lastReviewed: string
}

export function AiSummary({ heading, points, lastReviewed }: AiSummaryProps) {
  const reviewDate = new Date(lastReviewed)
  const formattedReviewDate = Number.isNaN(reviewDate.valueOf())
    ? lastReviewed
    : reviewDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })

  const aiSummaryPayload = {
    reviewedOn: lastReviewed,
    insights: points,
  }

  return (
    <section
      id="ai-overview"
      aria-labelledby="ai-summary-heading"
      className="bg-white border border-blue-100 shadow-sm rounded-2xl p-6 md:p-8 mb-12 relative overflow-hidden"
      data-ai-summary="true"
    >
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-100 rounded-full opacity-40 blur-3xl" aria-hidden />
      <div className="absolute -bottom-24 -left-12 w-48 h-48 bg-indigo-100 rounded-full opacity-30 blur-3xl" aria-hidden />
      <div className="relative">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-semibold mb-2">AI SUMMARY SNAPSHOT</p>
            <h2 id="ai-summary-heading" className="text-2xl md:text-3xl font-bold text-blue-900">
              {heading}
            </h2>
          </div>
          <div className="text-sm text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full" aria-hidden />
            Reviewed {formattedReviewDate}
          </div>
        </header>
        <ul className="space-y-4 text-base text-gray-700">
          {points.map((point) => (
            <li key={point} className="flex gap-3">
              <span className="mt-1 text-blue-600" aria-hidden>▹</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <script
          type="application/json"
          data-ai-summary-payload
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aiSummaryPayload) }}
        />
      </div>
    </section>
  )
}

interface QuickLinksProps {
  links: QuickLink[]
}

export function EducationQuickLinks({ links }: QuickLinksProps) {
  if (links.length === 0) {
    return null
  }

  return (
    <nav aria-label="Education hub quick links" className="mb-10">
      <div className="flex flex-wrap gap-3">
        {links.map((link) => (
          <Link
            key={`${link.href}-${link.label}`}
            href={link.href}
            className="px-4 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-sm font-semibold hover:bg-blue-100 transition"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

interface ModuleGridProps {
  modules: EducationModule[]
}

export function EducationModuleGrid({ modules }: ModuleGridProps) {
  if (modules.length === 0) {
    return null
  }

  return (
    <section aria-labelledby="education-modules-heading" className="mb-16" id="education-modules">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-purple-600 font-semibold mb-2">EDUCATION HUB</p>
          <h2 id="education-modules-heading" className="text-3xl font-bold text-blue-900">
            Explore Focused Learning Paths
          </h2>
        </div>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {modules.map((module) => (
          <Link
            key={module.id}
            href={module.href}
            className="group relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition opacity" aria-hidden />
            <div className="relative">
              {module.tag && (
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-4">
                  {module.tag}
                </span>
              )}
              <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition">
                {module.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {module.description}
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-blue-700">
                Explore<span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

interface RegulationUpdatesProps {
  updates: RegulationUpdate[]
  heading: string
  id?: string
}

export function RegulationUpdatesSection({ updates, heading, id = 'regulation-watch' }: RegulationUpdatesProps) {
  if (updates.length === 0) {
    return null
  }

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="mb-16">
      <p className="text-xs uppercase tracking-[0.3em] text-emerald-600 font-semibold mb-2">COMPLIANCE BRIEFING</p>
      <h2 id={`${id}-heading`} className="text-3xl font-bold text-blue-900 mb-6">
        {heading}
      </h2>
      <div className="space-y-6">
        {updates.map((update) => (
          <article key={`${update.title}-${update.effectiveDate}`} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
              <h3 className="text-xl font-semibold text-blue-900">
                {update.title}
              </h3>
              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                Effective {new Date(update.effectiveDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                })}
              </span>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              {update.summary}
            </p>
            <Link
              href={update.source}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-900"
            >
              Review official guidance<span className="ml-1">↗</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

interface CreditGuidanceProps {
  guidance: CreditGuidance[]
  heading: string
  id?: string
}

export function CreditGuidanceSection({ guidance, heading, id = 'credit-readiness' }: CreditGuidanceProps) {
  if (guidance.length === 0) {
    return null
  }

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="mb-16">
      <p className="text-xs uppercase tracking-[0.3em] text-indigo-600 font-semibold mb-2">CREDIT PLAYBOOK</p>
      <h2 id={`${id}-heading`} className="text-3xl font-bold text-blue-900 mb-6">
        {heading}
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {guidance.map((item) => (
          <div key={item.audience} className="bg-white border border-purple-100 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-purple-800 mb-4">
              {item.audience}
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              {item.tips.map((tip) => (
                <li key={tip} className="flex gap-3">
                  <span className="text-purple-500" aria-hidden>✦</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

interface FAQListProps {
  faqs: FAQEntry[]
  heading: string
  id?: string
}

export function FAQList({ faqs, heading, id = 'education-faq' }: FAQListProps) {
  if (faqs.length === 0) {
    return null
  }

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="mb-16">
      <p className="text-xs uppercase tracking-[0.3em] text-yellow-600 font-semibold mb-2">EDUCATION FAQ</p>
      <h2 id={`${id}-heading`} className="text-3xl font-bold text-blue-900 mb-6">
        {heading}
      </h2>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <details key={faq.question} className="group bg-white border border-gray-200 rounded-2xl p-5">
            <summary className="flex items-center justify-between gap-4 cursor-pointer text-left">
              <h3 className="text-lg font-semibold text-blue-900">
                {faq.question}
              </h3>
              <span className="text-blue-600 transition-transform group-open:rotate-180" aria-hidden>⌄</span>
            </summary>
            <p className="pt-4 text-gray-700 text-sm leading-relaxed">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  )
}

interface RelatedArticlesProps {
  articles: QuickLink[]
  heading?: string
}

export function RelatedArticles({ articles, heading = 'Continue Learning' }: RelatedArticlesProps) {
  if (articles.length === 0) {
    return null
  }

  return (
    <section aria-labelledby="education-related-heading" className="mb-16">
      <p className="text-xs uppercase tracking-[0.3em] text-slate-600 font-semibold mb-2">FURTHER READING</p>
      <h2 id="education-related-heading" className="text-3xl font-bold text-blue-900 mb-6">
        {heading}
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        {articles.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-lg transition"
          >
            <p className="text-sm font-semibold text-blue-700 mb-2">Loan Education</p>
            <h3 className="text-lg font-bold text-gray-900">
              {article.label}
            </h3>
            <span className="mt-3 inline-flex items-center text-sm text-blue-600">
              Read guide<span className="ml-1">→</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}

interface FAQSchemaProps {
  faqs: FAQEntry[]
  pageUrl: string
}

export function FAQSchema({ faqs, pageUrl }: FAQSchemaProps) {
  if (faqs.length === 0) {
    return null
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
    url: pageUrl,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
