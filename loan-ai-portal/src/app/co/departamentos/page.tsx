import type { Metadata } from 'next'
import Link from 'next/link'
import { colombiaDepartments, getColombiaDepartmentsByRegion } from '@/data/colombia-departments'

export const metadata: Metadata = {
  title: 'Préstamos por Departamento en Colombia - Compara 2025',
  description: 'Compara préstamos y créditos en los 32 departamentos de Colombia. Encuentra entidades financieras vigiladas por la Superfinanciera en tu departamento.',
  keywords: 'préstamos por departamento Colombia, créditos departamentos Colombia, préstamos regionales Colombia, Superfinanciera',
  authors: [{ name: 'Loan AI Portal' }],
  creator: 'Loan AI Portal',
  publisher: 'Loan AI Portal',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://loansai.com/co/departamentos',
  },
  openGraph: {
    title: 'Préstamos por Departamento - Colombia',
    description: '32 departamentos, 500+ entidades financieras. Compara préstamos personales en todo Colombia.',
    locale: 'es_CO',
    type: 'website',
  },
}

const regions = [
  { name: 'Andina', slug: 'andina', count: 10 },
  { name: 'Caribe', slug: 'caribe', count: 8 },
  { name: 'Pacífico', slug: 'pacifico', count: 4 },
  { name: 'Orinoquía', slug: 'orinoquia', count: 4 },
  { name: 'Amazonía', slug: 'amazonia', count: 6 },
]

export default function DepartamentosPage() {
  const totalDepartments = colombiaDepartments.length
  const totalMunicipalities = colombiaDepartments.reduce((sum, dept) => sum + dept.municipalities, 0)
  const totalLenders = colombiaDepartments.reduce((sum, dept) => sum + dept.lenderCount, 0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Breadcrumb Navigation */}
      <nav className="container mx-auto px-4 py-4 text-sm">
        <ol className="flex items-center space-x-2 text-gray-600">
          <li>
            <Link href="/co" className="hover:text-blue-600">
              Colombia
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-900 font-medium">Departamentos</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Préstamos por Departamento en Colombia
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Compara préstamos personales y créditos en los 32 departamentos de Colombia
          </p>
          
          {/* Statistics */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <span className="text-gray-600">Departamentos: </span>
              <span className="font-semibold text-blue-600">{totalDepartments}</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <span className="text-gray-600">Municipios: </span>
              <span className="font-semibold text-blue-600">{totalMunicipalities}+</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <span className="text-gray-600">Entidades: </span>
              <span className="font-semibold text-green-600">{totalLenders}+</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <span className="text-gray-600">Tasas desde: </span>
              <span className="font-semibold text-green-600">18% EA</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Regional Overview */}
        <section className="max-w-6xl mx-auto mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Departamentos por Región
            </h2>
            <div className="grid md:grid-cols-5 gap-4 mb-8">
              {regions.map((region) => (
                <div key={region.slug} className="bg-blue-50 rounded-lg p-4 text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">{region.name}</h3>
                  <p className="text-2xl font-bold text-blue-600">{region.count}</p>
                  <p className="text-sm text-gray-600">departamentos</p>
                </div>
              ))}
            </div>

            {/* Introduction */}
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <p className="mb-4">
                Colombia está dividida en <strong>32 departamentos</strong> distribuidos en 5 regiones naturales. 
                Cada departamento cuenta con características económicas y de acceso al crédito particulares, 
                desde los centros financieros más desarrollados como Bogotá y Medellín, hasta regiones con menor 
                penetración bancaria en la Amazonía y Orinoquía.
              </p>
              <p className="mb-4">
                La <strong>Superintendencia Financiera de Colombia</strong> supervisa todas las entidades que 
                ofrecen crédito en el país, garantizando que las tasas de interés respeten la <strong>tasa de usura</strong> 
                establecida por el Banco de la República. Encuentra información detallada sobre las opciones de 
                préstamo en cada departamento:
              </p>
            </div>
          </div>
        </section>

        {/* Departments by Region */}
        {regions.map((region) => {
          const regionDepartments = getColombiaDepartmentsByRegion(region.slug)
          
          return (
            <section key={region.slug} className="max-w-6xl mx-auto mb-12">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl shadow-xl p-6 mb-6">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Región {region.name}
                </h2>
                <p className="text-blue-100">
                  {region.count} departamentos • {regionDepartments.reduce((sum, d) => sum + d.municipalities, 0)} municipios
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regionDepartments.map((department) => (
                  <Link
                    key={department.slug}
                    href={`/co/departamento/${department.slug}`}
                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600">
                        {department.nameEs}
                      </h3>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {department.code}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-3">
                      Capital: <span className="font-semibold">{department.capital}</span>
                    </p>

                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Población:</span>
                        <span className="font-semibold">{department.population}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Municipios:</span>
                        <span className="font-semibold">{department.municipalities}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Entidades:</span>
                        <span className="font-semibold text-blue-600">{department.lenderCount}+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tasas:</span>
                        <span className="font-semibold text-green-600">{department.avgRate}</span>
                      </div>
                    </div>

                    <div className="border-t pt-3">
                      <p className="text-xs text-gray-500 mb-2">Economía principal:</p>
                      <div className="flex flex-wrap gap-1">
                        {department.economy.slice(0, 3).map((sector) => (
                          <span
                            key={sector}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                          >
                            {sector}
                          </span>
                        ))}
                        {department.economy.length > 3 && (
                          <span className="text-xs text-gray-500">
                            +{department.economy.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mt-4 text-blue-600 text-sm font-medium group-hover:underline">
                      Ver préstamos →
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-4">
            <details className="bg-white rounded-lg shadow-md group">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 hover:text-blue-600">
                ¿Cuántos departamentos tiene Colombia?
                <svg
                  className="w-5 h-5 transform group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                Colombia está dividida en 32 departamentos y 1 distrito capital (Bogotá). Estos departamentos 
                se agrupan en 5 regiones naturales: Andina, Caribe, Pacífico, Orinoquía y Amazonía. Cada 
                departamento cuenta con autonomía administrativa y características económicas propias.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-md group">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 hover:text-blue-600">
                ¿En qué departamentos hay más entidades financieras?
                <svg
                  className="w-5 h-5 transform group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                Los departamentos con mayor concentración de entidades financieras son: Cundinamarca (65+ en Bogotá), 
                Antioquia (52+ en Medellín), Valle del Cauca (40+ en Cali), Atlántico (35+ en Barranquilla), y 
                Bolívar (30+ en Cartagena). Los departamentos amazónicos y de Orinoquía tienen menor oferta, 
                pero siguen creciendo en corresponsalía bancaria y servicios digitales.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-md group">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 hover:text-blue-600">
                ¿Las tasas de interés varían por departamento?
                <svg
                  className="w-5 h-5 transform group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                Sí, las tasas varían según el departamento. Las ciudades principales como Bogotá, Medellín y Cali 
                ofrecen tasas más competitivas (18-32% EA) por mayor competencia bancaria. En departamentos con menor 
                oferta financiera como Vichada, Guainía o Vaupés, las tasas pueden ser más altas (25-45% EA) debido 
                al mayor riesgo operativo y costos de servicio.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-md group">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 hover:text-blue-600">
                ¿Puedo solicitar préstamos en línea en todos los departamentos?
                <svg
                  className="w-5 h-5 transform group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                La mayoría de las entidades financieras ofrecen solicitud 100% digital, pero la conectividad varía. 
                Los departamentos de la región Andina, Caribe y Pacífico tienen excelente acceso digital. En zonas 
                rurales de Orinoquía y Amazonía, la conectividad puede ser limitada, aunque está en expansión. 
                Los corresponsales bancarios ofrecen alternativa en municipios sin sucursales.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-md group">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 hover:text-blue-600">
                ¿Cómo está regulado el crédito en Colombia?
                <svg
                  className="w-5 h-5 transform group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                El sector financiero en Colombia está regulado por la Superintendencia Financiera de Colombia (SFC) 
                bajo la Ley 1328 de 2009. El Banco de la República establece la tasa de usura máxima permitida. 
                Todas las entidades deben estar vigiladas por la SFC, proteger datos personales (Ley 1581/2012), 
                y respetar los derechos del consumidor financiero en todos los departamentos.
              </div>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl shadow-xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para Comparar Préstamos en tu Departamento?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Encuentra las mejores tasas de interés en más de 500 entidades financieras
            </p>
            <Link
              href="/co/apply"
              className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Comparar Préstamos Ahora →
            </Link>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-sm text-gray-600">
            <p className="mb-2">
              <strong>Descargo de responsabilidad:</strong> Loan-Platform.com NO es una entidad financiera 
              ni otorga préstamos directamente. Somos un servicio de comparación que conecta usuarios con 
              entidades financieras vigiladas por la Superintendencia Financiera de Colombia.
            </p>
            <p className="mb-2">
              <strong>Ejemplo representativo:</strong> Préstamo de $5.000.000 COP a 24 meses con tasa EA 
              del 24% resulta en cuotas mensuales aproximadas de $265.000 COP. Total a pagar: $6.360.000 COP.
            </p>
            <p>
              Las tasas de interés están sujetas a evaluación crediticia. Tasa de usura vigente aplicable 
              según normativa del Banco de la República.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
