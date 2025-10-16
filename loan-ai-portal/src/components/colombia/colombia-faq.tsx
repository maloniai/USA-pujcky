'use client'

import { useState } from 'react'

export interface FAQItem {
  question: string
  answer: string
}

interface ColombiaFAQProps {
  items: FAQItem[]
  className?: string
}

export default function ColombiaFAQ({ items, className = '' }: ColombiaFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className={className}>
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
        Preguntas Frecuentes
      </h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <details
            key={index}
            className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow group"
            open={openIndex === index}
            onClick={(e) => {
              e.preventDefault()
              setOpenIndex(openIndex === index ? null : index)
            }}
          >
            <summary className="font-semibold text-lg cursor-pointer text-blue-900 list-none flex justify-between items-center">
              <span>{item.question}</span>
              <span className="text-blue-600 text-2xl group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>
            <div className="mt-4 text-gray-700 leading-relaxed text-sm md:text-base">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </div>
  )
}
