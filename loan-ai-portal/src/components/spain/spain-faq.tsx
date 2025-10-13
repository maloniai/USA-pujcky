export interface FAQItem {
  question: string
  answer: string
}

interface SpainFAQProps {
  items: FAQItem[]
  className?: string
}

export default function SpainFAQ({ items, className = '' }: SpainFAQProps) {
  return (
    <section className={`faq mb-12 ${className}`} aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-3xl font-bold text-center mb-6 text-blue-900">
        Preguntas Frecuentes
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {items.map((item, index) => (
          <details key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <summary className="font-semibold text-lg cursor-pointer text-blue-900">
              {item.question}
            </summary>
            <p className="mt-3 text-gray-700 leading-relaxed">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  )
}
