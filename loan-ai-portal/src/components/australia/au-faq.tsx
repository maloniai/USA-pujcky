'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export interface FAQItem {
  question: string
  answer: string
}

interface AUFAQProps {
  faqs: FAQItem[]
  title?: string
  className?: string
}

export default function AUFAQ({ faqs, title = 'Frequently Asked Questions', className = '' }: AUFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={className}>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">{title}</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              aria-expanded={openIndex === index}
            >
              <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
