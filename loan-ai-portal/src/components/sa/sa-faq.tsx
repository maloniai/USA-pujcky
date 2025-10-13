interface SAFAQProps {
  items: Array<{
    question: string
    answer: string
  }>
}

export default function SAFAQ({ items }: SAFAQProps) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <details
          key={index}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <summary className="font-semibold text-lg cursor-pointer text-blue-900 flex items-start">
            <span className="mr-2">❓</span>
            <span>{item.question}</span>
          </summary>
          <div className="mt-4 text-gray-700 leading-relaxed pl-7">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  )
}
