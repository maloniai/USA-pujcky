interface FAQItem {
  question: string
  answer: string
}

interface AustraliaFAQProps {
  items: FAQItem[]
}

export default function AustraliaFAQ({ items }: AustraliaFAQProps) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
        Frequently Asked Questions About Personal Loans in Australia
      </h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <details
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
          >
            <summary className="font-semibold text-lg cursor-pointer text-blue-900 flex items-start gap-3">
              <span className="text-blue-600 font-bold flex-shrink-0">Q{index + 1}:</span>
              <span>{item.question}</span>
            </summary>
            <div className="mt-4 text-gray-700 leading-relaxed pl-8">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </div>
  )
}
