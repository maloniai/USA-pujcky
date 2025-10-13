interface KazakhstanFAQProps {
  items: Array<{
    question: string
    answer: string
  }>
}

export default function KazakhstanFAQ({ items }: KazakhstanFAQProps) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
        Жиі қойылатын сұрақтар
      </h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <details 
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group"
          >
            <summary className="font-semibold text-lg cursor-pointer text-blue-900 list-none flex items-center justify-between">
              <span>{item.question}</span>
              <svg 
                className="w-5 h-5 text-blue-600 transition-transform group-open:rotate-180" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="mt-4 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  )
}
