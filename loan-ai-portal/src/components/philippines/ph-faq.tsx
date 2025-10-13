'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface FAQItem {
  question: string
  answer: string
}

interface PhilippinesFAQProps {
  faqItems: FAQItem[]
}

export default function PhilippinesFAQ({ faqItems }: PhilippinesFAQProps) {
  return (
    <section className="container mx-auto px-4 py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <details key={index} className="group bg-gray-50 rounded-lg shadow-md cursor-pointer">
              <summary className="flex justify-between items-center font-semibold text-lg text-gray-900 p-6 list-none">
                <span>{item.question}</span>
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
