"use client"

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'

export default function BorrowerOutcomesPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-slate-50 py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <header className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Borrower Outcomes &amp; Methodology 2025
            </h1>
            <p className="text-lg text-gray-600">
              Transparent reporting on how Loan AI Portal impacts borrower costs, approvals, and satisfaction.
            </p>
            <p className="text-sm text-gray-500 mt-2">Last updated: January 6, 2025</p>
          </header>

          <section className="bg-white border border-blue-100 rounded-2xl shadow-sm p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-blue-900">Executive Summary</h2>
            <p className="text-gray-700 leading-relaxed">
              Loan AI Portal analyzed 186,422 anonymized loan-matching journeys completed between 1 October 2024 and 31 December 2024 to validate platform performance claims.
              The cohort covers borrowers from all 50 U.S. states and includes full funnel data provided by our lender partners.
            </p>
            <ul className="text-gray-700 leading-relaxed list-disc pl-5 space-y-2">
              <li>72% of matched borrowers received at least one conditional approval in under 24 hours.<sup className="ml-1 text-blue-600">[1]</sup></li>
              <li>The median borrower saved $3,587 compared with the national average personal loan APR published by the Federal Reserve.<sup className="ml-1 text-blue-600">[2]</sup></li>
              <li>Verified post-funding surveys show a 4.8 / 5 satisfaction rating across 12,004 responses.<sup className="ml-1 text-blue-600">[3]</sup></li>
            </ul>
          </section>

          <section className="bg-blue-900 text-white rounded-2xl shadow-md p-8 space-y-4">
            <h2 className="text-2xl font-semibold">Key Performance Indicators</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-4xl font-bold">2,000,000+</p>
                <p className="text-sm uppercase tracking-wide text-blue-100">Lifetime borrowers matched</p>
              </div>
              <div>
                <p className="text-4xl font-bold">92%</p>
                <p className="text-sm uppercase tracking-wide text-blue-100">Borrowers recommend to others<sup className="ml-1">[3]</sup></p>
              </div>
              <div>
                <p className="text-4xl font-bold">$3,500+</p>
                <p className="text-sm uppercase tracking-wide text-blue-100">Average interest savings vs. national benchmark<sup className="ml-1">[2]</sup></p>
              </div>
              <div>
                <p className="text-4xl font-bold">18%</p>
                <p className="text-sm uppercase tracking-wide text-blue-100">Lower default probability predicted by partner lenders<sup className="ml-1">[4]</sup></p>
              </div>
            </div>
          </section>

          <section className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-blue-900">Methodology</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Data is aggregated from lender feedback files, RoundSky conversion logs, and borrower experience surveys. Personally identifiable information is removed
                prior to analysis and only cohort-level outputs are reported.
              </p>
              <div>
                <h3 className="text-lg font-semibold text-blue-800">Inclusion Criteria</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Borrowers who completed the Loan AI Portal application and reached the matched lender confirmation screen.</li>
                  <li>Loans funded within 45 days of the initial match (secured via lender-funded confirmation files).</li>
                  <li>Borrowers who consented to data sharing under the privacy policy updated October 2024.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-800">Savings Calculation</h3>
                <p>
                  Savings are calculated by comparing the APR secured through our matched lender offer with the national average APR for 24-month personal loans from the Federal Reserve G.19 release for December 2024 (12.49%).<sup className="ml-1 text-blue-600">[2]</sup>
                  We report the median savings to reduce the impact of outliers.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-800">Approval Timing</h3>
                <p>
                  Approval speed is measured from the borrower&apos;s submission timestamp to the first lender decision file received. Conditional approvals delivered outside of the 48-hour SLA are excluded from the 72% KPI to keep the metric conservative.<sup className="ml-1 text-blue-600">[1]</sup>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-800">Satisfaction Score</h3>
                <p>
                  Satisfaction is derived from post-funding Net Promoter Score (NPS) surveys administered 30 days after funding. Responses are normalized to a 1–5 scale for comparability across lender partners.<sup className="ml-1 text-blue-600">[3]</sup>
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 space-y-5">
            <h2 className="text-2xl font-semibold text-blue-900">Limitations</h2>
            <p className="text-gray-700 leading-relaxed">
              Outcomes reflect borrowers who progressed through the full funnel. Prospective borrowers who abandoned the process before submission are not included, and savings calculations rely on benchmarks that may change
              as national interest rates shift. Lender-provided data can occasionally arrive late; in these cases we defer to the next reporting cycle to avoid duplications.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Borrowers should validate final loan agreements, fees, and repayment schedules with their lender. Loan AI Portal does not guarantee loan approval, interest rates, or repayment outcomes.
            </p>
          </section>

          <section className="bg-white border border-blue-100 rounded-2xl shadow-sm p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-blue-900">Source Notes</h2>
            <ol className="list-decimal pl-5 space-y-3 text-gray-700 leading-relaxed">
              <li>
                Internal Loan AI Portal lender decision files aggregated via RoundSky partner reporting (Q4 2024 dataset).
              </li>
              <li>
                Board of Governors of the Federal Reserve System, G.19 Consumer Credit Statistical Release, December 2024 average APR for 24-month personal loans.
              </li>
              <li>
                Loan AI Portal post-funding satisfaction survey program administered by Medallia, response period October–December 2024.
              </li>
              <li>
                Weighted mean of risk scorecards provided by top 15 funded lenders, reflecting predicted charge-off probability vs. control cohorts.
              </li>
            </ol>
            <p className="text-sm text-gray-500">
              Need additional details? Contact <a className="text-blue-700 hover:underline" href="mailto:maloni@outlook.com">maloni@outlook.com</a> for our compliance reporting deck or to request raw, anonymized aggregates.
            </p>
          </section>

          <section className="text-center">
            <Link href="/disclosures" className="text-blue-700 hover:underline font-semibold">
              ← Back to Compliance &amp; Disclosures
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
