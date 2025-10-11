import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import StickyApplyButton from '@/components/sticky-apply-button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { colombiaRegions } from '@/data/colombia-regions'
import { getColombiaCitiesByRegion } from '@/data/colombia-cities'

interface PageProps {
  params: {
    region: string
  }
}

export async function generateStaticParams() {
  return colombiaRegions.map((region) => ({
    region: region.code,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const region = colombiaRegions.find((r) => r.code === params.region)

  if (!region) {
    return {
      title: 'Región No Encontrada',
      description: 'La región solicitada no existe.',
    }
  }

  const currentYear = new Date().getFullYear()

  return {
    title: `Préstamos en ${region.name} – Comparar ${currentYear}`,
    description: `Compare préstamos personales en ${region.name}, Colombia. Tasas desde ${region.averageAPR}. Acceda a prestamistas licenciados en ${region.capital} y ${region.cityCount} ciudades.`,
    alternates: {
      canonical: `https://loan-platform.com/co/regions/${params.region}`,
    },
  }
}

export default function ColombiaRegionPage({ params }: PageProps) {
  const region = colombiaRegions.find((r) => r.code === params.region)

  if (!region) {
    notFound()
  }

  const cities = getColombiaCitiesByRegion(params.region)
  const currentYear = new Date().getFullYear()

  // FAQ specific to the region
  const regionFAQ = [
    {
      question: `¿Cuáles son las tasas de préstamos típicas en ${region.name}?`,
      answer: `En ${region.name}, las tasas efectivas anuales (EA) para préstamos personales típicamente varían entre 18% y 48%, con un promedio de ${region.averageAPR}. Las tasas específicas dependen de su historial crediticio, ingresos y tipo de préstamo.`,
    },
    {
      question: `¿Qué prestamistas operan en ${region.name}?`,
      answer: `En ${region.name} operan bancos nacionales como Bancolombia, Davivienda, Banco de Bogotá, así como cooperativas de ahorro y crédito locales y plataformas fintech licenciadas. Todos están regulados por la Superintendencia Financiera de Colombia.`,
    },
    {
      question: `¿Cuánto tiempo tarda la aprobación en ${region.capital}?`,
      answer: `Los tiempos de aprobación varían: bancos tradicionales pueden tardar 5-10 días hábiles, mientras que entidades digitales pueden aprobar en 24-48 horas. En ${region.capital}, algunas cooperativas locales ofrecen decisiones el mismo día para montos menores.`,
    },
  ]

  return (
    <>
      <Navigation locale="es" />
      <StickyApplyButton label="Aplicar Ahora" href="/co/apply" />
      <main className="flex-1 bg-slate-50">
        {/* Header */}
        <header className="border-b border-blue-100 bg-gradient-to-br from-yellow-50 via-white to-blue-100">
          <div className="mx-auto max-w-6xl px-4 py-12">
            {/* Breadcrumb */}
            <nav className="mb-4 text-sm text-gray-600" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/co" className="text-blue-600 hover:underline">
                    Colombia
                  </Link>
                </li>
                <li aria-hidden="true">›</li>
                <li className="text-gray-900 font-semibold">{region.name}</li>
              </ol>
            </nav>

            <h1 className="text-4xl font-bold text-blue-900 md:text-5xl">
              Préstamos en {region.name}
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-blue-900/80">
              Encuentre las mejores ofertas de préstamos personales en {region.name}. Con una población de{' '}
              {region.population.toLocaleString()} habitantes y {region.cityCount} ciudades, esta región ofrece
              diversas opciones de financiamiento con tasas promedio de {region.averageAPR}.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/co/apply"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Solicitar Préstamo
              </Link>
              <Link
                href="/co"
                className="inline-flex items-center justify-center rounded-md border border-blue-500 px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm transition hover:bg-blue-50"
              >
                ← Volver a Colombia
              </Link>
            </div>
          </div>
        </header>

        {/* Introduction */}
        <section className="bg-white py-12">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
              <div>
                <h2 className="text-2xl font-semibold text-blue-900">
                  Préstamos Personales en {region.name}
                </h2>
                <div className="mt-4 space-y-4 text-gray-700">
                  <p>
                    {region.name} es una región clave en la economía colombiana con su capital en {region.capital}.
                    {region.growthFocus}
                  </p>
                  <p>
                    Los préstamos personales en esta región están disponibles a través de bancos nacionales,
                    cooperativas de ahorro y crédito locales, y plataformas fintech autorizadas. Las tasas efectivas
                    anuales promedio son de {region.averageAPR}, aunque pueden variar según su perfil crediticio.
                  </p>
                  <p>
                    Nuestra plataforma le conecta con prestamistas licenciados que operan en {region.name},
                    facilitando la comparación de ofertas y ayudándole a encontrar las mejores condiciones para su
                    situación financiera.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-blue-200 bg-blue-50/60 p-6">
                <h3 className="text-lg font-semibold text-blue-900">Datos de {region.name}</h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="font-semibold text-gray-700">Capital:</dt>
                    <dd className="text-gray-600">{region.capital}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-700">Población:</dt>
                    <dd className="text-gray-600">{region.population.toLocaleString()} habitantes</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-700">Ciudades con Cobertura:</dt>
                    <dd className="text-gray-600">{region.cityCount} ciudades</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-700">Tasa Promedio EA:</dt>
                    <dd className="text-gray-600">{region.averageAPR}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Local Regulations */}
        <section className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold text-blue-900">Regulaciones Locales y Protecciones</h2>
          <Card className="mt-6 border-blue-100 bg-blue-50/40">
            <CardHeader>
              <CardTitle className="text-lg text-blue-900">
                Marco Regulatorio en {region.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-blue-900/80">
                <li>
                  • <strong>Tasa de Usura:</strong> La tasa máxima está certificada mensualmente por la
                  Superintendencia Financiera y aplica a todos los prestamistas en Colombia
                </li>
                <li>
                  • <strong>Licencias:</strong> Todos los prestamistas deben estar registrados y supervisados por la
                  Superintendencia Financiera de Colombia (SFC)
                </li>
                <li>
                  • <strong>Derecho de Retracto:</strong> Los consumidores tienen 5 días hábiles para retractarse de
                  un contrato de préstamo sin penalización
                </li>
                <li>
                  • <strong>Transparencia de Costos:</strong> Los prestamistas deben informar claramente la tasa EA,
                  CAE y todos los costos asociados antes de la firma
                </li>
                <li>
                  • <strong>Protección de Datos:</strong> Su información personal está protegida por la Ley 1581 de
                  2012 (Habeas Data)
                </li>
                <li>
                  • <strong>Sistema de Atención:</strong> Las entidades deben tener un sistema de atención al
                  consumidor financiero y defensor del consumidor
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Cities in Region */}
        <section className="bg-white py-12">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-semibold text-blue-900">
              Préstamos por Ciudad en {region.name}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Explore información específica de préstamos para cada ciudad en {region.name}
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {cities.slice(0, 6).map((city) => (
                <Link
                  key={city.slug}
                  href={`/co/cities/${params.region}/${city.slug}`}
                  className="group rounded-lg border border-gray-200 p-4 transition hover:border-blue-300 hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold text-blue-900 group-hover:text-blue-700">
                    {city.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Población: {city.population.toLocaleString()}
                  </p>
                  <p className="mt-2 text-sm text-gray-700 line-clamp-2">{city.description}</p>
                  <span className="mt-3 inline-flex items-center text-sm font-semibold text-blue-600 group-hover:underline">
                    Ver préstamos <span aria-hidden="true" className="ml-1">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold text-blue-900">
            Preguntas Frecuentes sobre Préstamos en {region.name}
          </h2>
          <div className="mt-6 space-y-4">
            {regionFAQ.map((item) => (
              <details
                key={item.question}
                className="rounded-lg border border-blue-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <summary className="cursor-pointer text-lg font-semibold text-blue-900">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm text-blue-900/80">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-50 to-yellow-50 py-12">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl font-bold text-blue-900">
              ¿Listo para Solicitar un Préstamo en {region.name}?
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Compare ofertas de prestamistas licenciados y encuentre las mejores tasas para su perfil.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/co/apply"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Solicitar Ahora
              </Link>
              <Link
                href="/co"
                className="inline-flex items-center justify-center rounded-md border border-blue-600 px-8 py-3 text-base font-semibold text-blue-600 shadow-sm transition hover:bg-blue-50"
              >
                Ver Otras Regiones
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer locale="es" />
    </>
  )
}
