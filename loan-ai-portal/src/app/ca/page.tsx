import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export const metadata = {
  title: 'Canada Loan Services - Fast & Secure | Loan AI Portal',
  description: 'Get instant loan approvals across all Canadian provinces with our AI-powered platform. Fast, secure, and province-specific loan information.',
}

export default function CanadaPage() {
  const provinces = [
    'Ontario', 'Quebec', 'British Columbia', 'Alberta', 
    'Manitoba', 'Saskatchewan', 'Nova Scotia', 'New Brunswick',
    'Newfoundland and Labrador', 'Prince Edward Island',
    'Northwest Territories', 'Yukon', 'Nunavut'
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link href="/global" className="text-blue-600 hover:underline text-sm">
          ← Back to All Countries
        </Link>
      </div>
      
      <header className="text-center mb-12">
        <div className="text-6xl mb-4">🇨🇦</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Canada Loan AI Portal
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Fast, secure, and intelligent loan services powered by AI. 
          Get instant pre-approvals and find the best loan options for your needs across all Canadian provinces and territories.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Quick Application</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Apply for a loan in minutes with our streamlined process.
            </p>
            <Button className="w-full">Apply Now</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>AI-Powered Matching</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Our AI finds the best loan options tailored to your profile and location.
            </p>
            <Button variant="outline" className="w-full">Learn More</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Province-Specific Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Get loan information specific to your province and city.
            </p>
            <Button variant="outline" className="w-full">Browse Provinces</Button>
          </CardContent>
        </Card>
      </div>

      {/* Provinces Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Serving All Provinces and Territories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {provinces.map((province) => (
            <div 
              key={province}
              className="p-3 bg-white border border-gray-200 rounded-lg text-center hover:shadow-md transition-shadow"
            >
              <span className="text-sm font-medium text-gray-700">{province}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center bg-blue-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Available in Multiple Languages</h2>
        <div className="space-x-4">
          <Link href="/ca" className="text-blue-600 hover:underline">English</Link>
          <Link href="/ca/fr" className="text-blue-600 hover:underline">Français</Link>
        </div>
      </div>
    </div>
  )
}
