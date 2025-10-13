interface FAQItem {
  question: string
  answer: string
}

interface NewZealandFAQProps {
  items: FAQItem[]
  title?: string
}

export default function NewZealandFAQ({ items, title = 'Frequently Asked Questions' }: NewZealandFAQProps) {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">{title}</h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <details
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
          >
            <summary className="font-semibold text-lg cursor-pointer text-blue-900 flex items-start gap-2">
              <span className="text-blue-600 flex-shrink-0">❓</span>
              <span className="flex-1">{item.question}</span>
              <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="mt-4 text-gray-700 leading-relaxed pl-7">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}

export type { FAQItem }
