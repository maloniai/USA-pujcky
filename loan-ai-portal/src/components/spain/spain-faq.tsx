'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'

export interface FAQItem {
  question: string
  answer: string
}

interface SpainFAQProps {
  items: FAQItem[]
}

export default function SpainFAQ({ items }: SpainFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <Card key={index} className="border-red-200">
          <CardContent className="p-0">
            <button
              onClick={() => toggleItem(index)}
              className="w-full text-left p-6 flex justify-between items-start gap-4 hover:bg-red-50 transition-colors"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">
                  {item.question}
                </h3>
                {openIndex === index && (
                  <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                    {item.answer}
                  </p>
                )}
              </div>
              <div className="flex-shrink-0 mt-1">
                <svg
                  className={`w-5 h-5 text-red-600 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
