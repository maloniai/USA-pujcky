import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { CountryHub } from '@/data/countries'

interface CountrySelectorProps {
  countries: CountryHub[]
  className?: string
}

export default function CountrySelector({ countries, className }: CountrySelectorProps) {
  return (
    <div className={className}>
      <div className="grid gap-6 md:grid-cols-2">
        {countries.map((country) => (
          <Card
            id={`country-${country.code}`}
            key={country.code}
            className="h-full border-blue-100 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
          >
            <CardHeader className="flex flex-col gap-3">
              <div className="inline-flex items-center gap-3 text-2xl md:text-3xl font-semibold text-blue-900">
                <span aria-hidden>{country.flag}</span>
                <span>{country.name}</span>
                {country.status !== 'live' && (
                  <span className="ml-auto rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
                    {country.status === 'in-progress' ? 'Launching soon' : 'Coming soon'}
                  </span>
                )}
              </div>
              <CardTitle className="text-base font-semibold text-blue-800 md:text-lg">
                {country.description}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-gray-600">
              <p className="font-medium text-blue-800">{country.coverage || 'Nationwide'}</p>
              {country.regulator && (
                <p>
                  <span className="font-semibold text-gray-700">Regulator: </span>
                  {country.regulator}
                </p>
              )}
              <p className="text-sm">
                <span className="font-semibold text-gray-700">Languages:</span>{' '}
                {country.languages.join(', ')}
              </p>
            </CardContent>
            <div className="p-6 pt-0">
              <Link
                href={country.href}
                className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow transition-colors hover:bg-blue-700"
              >
                {country.ctaLabel}
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
