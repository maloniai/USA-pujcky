'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface CanadaFAQProps {
  items: FAQItem[]
}

export default function CanadaFAQ({ items }: CanadaFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center text-left font-semibold text-gray-900 hover:text-blue-600 transition"
            >
              <span className="text-lg">{item.question}</span>
              <span className="text-2xl text-blue-600">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className="mt-4 text-gray-600 leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
