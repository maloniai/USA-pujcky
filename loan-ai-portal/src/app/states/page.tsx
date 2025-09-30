export default function StatesPage() {
  const states = [
    { name: 'California', slug: 'california' },
    { name: 'Texas', slug: 'texas' },
    { name: 'Florida', slug: 'florida' },
    { name: 'New York', slug: 'new-york' }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">State-Specific Loan Information</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {states.map((state) => (
          <div key={state.slug} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold">{state.name}</h2>
            <p className="text-gray-600">View loan options for {state.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}