'use client'

interface FAQItem {
  question: string
  answer: string
}

interface NZFAQProps {
  items: FAQItem[]
}

export default function NZFAQ({ items }: NZFAQProps) {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Common questions about personal loans in New Zealand
        </p>
        
        <div className="space-y-4">
          {items.map((item, index) => (
            <details 
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors group"
            >
              <summary className="font-semibold text-lg cursor-pointer text-gray-900 list-none flex items-center justify-between">
                <span>{item.question}</span>
                <span className="text-blue-600 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                {item.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-semibold"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}
