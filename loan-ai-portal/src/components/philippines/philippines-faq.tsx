'use client'

import { useState } from 'react'

export interface FAQItem {
  question: string
  answer: string
}

interface PhilippinesFAQProps {
  items: FAQItem[]
  title?: string
}

export default function PhilippinesFAQ({ items, title = 'Mga Madalas Itanong' }: PhilippinesFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">{title}</h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition"
          >
            <button
              className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 transition flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              <span className="font-semibold text-gray-900 pr-4">{item.question}</span>
              <svg
                className={`w-5 h-5 text-blue-600 transform transition-transform flex-shrink-0 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white">
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
