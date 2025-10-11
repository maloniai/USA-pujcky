import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import StickyApplyButton from '@/components/sticky-apply-button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getColombiaCityBySlug, getAllColombiaCitySlugs } from '@/data/colombia-cities'
import { colombiaRegions } from '@/data/colombia-regions'

interface PageProps {
  params: {
    region: string
    city: string
  }
}

export async function generateStaticParams() {
  return getAllColombiaCitySlugs()
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const city = getColombiaCityBySlug(params.city)

  if (!city) {
    return {
      title: 'Ciudad No Encontrada',
      description: 'La ciudad solicitada no existe.',
    }
  }

  const currentYear = new Date().getFullYear()

  return {
    title: `Préstamos en ${city.name}, ${city.regionName} – Comparar ${currentYear}`,
    description: `Compare préstamos personales en ${city.name}, ${city.regionName}. Población: ${city.population.toLocaleString()}. Acceda a prestamistas locales licenciados. Tasas competitivas y aprobación rápida.`,
    alternates: {
      canonical: `https://loan-platform.com/co/cities/${params.region}/${params.city}`,
    },
  }
}

export default function ColombiaCityPage({ params }: PageProps) {
  const city = getColombiaCityBySlug(params.city)
  const region = colombiaRegions.find((r) => r.code === params.region)

  if (!city || !region || city.region !== params.region) {
    notFound()
  }

  const currentYear = new Date().getFullYear()

  // City-specific FAQ
  const cityFAQ = [
    {
      question: `¿Qué tipos de préstamos están disponibles en ${city.name}?`,
      answer: `En ${city.name} puede acceder a ${city.loanTypes.join(', ').toLowerCase()}. Los prestamistas locales y nacionales ofrecen diversas opciones según su perfil crediticio y necesidades financieras.`,
    },
    {
      question: `¿Cuál es el monto mínimo y máximo de préstamo en ${city.name}?`,
      answer: `Los montos típicamente van desde $1.000.000 COP hasta $150.000.000 COP. El monto específico que puede solicitar depende de sus ingresos, historial crediticio y capacidad de pago demostrable.`,
    },
    {
      question: `¿Necesito tener cuenta bancaria en ${city.name} para solicitar?`,
      answer: `Sí, necesita una cuenta bancaria en Colombia para recibir el desembolso. La cuenta puede estar en cualquier banco colombiano, no necesariamente debe ser del mismo banco prestamista.`,
    },
    {
      question: `¿Puedo solicitar un préstamo si soy independiente en ${city.name}?`,
      answer: `Sí, trabajadores independientes pueden solicitar préstamos. Deberá presentar RUT, declaración de renta, certificado de ingresos y extractos bancarios que demuestren estabilidad en sus ingresos.`,
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
              <ol className="flex items-center gap-2 flex-wrap">
                <li>
                  <Link href="/co" className="text-blue-600 hover:underline">
                    Colombia
                  </Link>
                </li>
                <li aria-hidden="true">›</li>
                <li>
                  <Link href={`/co/regions/${params.region}`} className="text-blue-600 hover:underline">
                    {city.regionName}
                  </Link>
                </li>
                <li aria-hidden="true">›</li>
                <li className="text-gray-900 font-semibold">{city.name}</li>
              </ol>
            </nav>

            <h1 className="text-4xl font-bold text-blue-900 md:text-5xl">
              Préstamos en {city.name}, {city.regionName}
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-blue-900/80">
              {city.description} Compare ofertas de prestamistas licenciados que operan en {city.name} con una
              población de {city.population.toLocaleString()} habitantes.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/co/apply"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Solicitar Préstamo
              </Link>
              <Link
                href={`/co/regions/${params.region}`}
                className="inline-flex items-center justify-center rounded-md border border-blue-500 px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm transition hover:bg-blue-50"
              >
                ← Volver a {city.regionName}
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
                  Opciones de Préstamos en {city.name}
                </h2>
                <div className="mt-4 space-y-4 text-gray-700">
                  <p>
                    {city.name} es una ciudad importante en {city.regionName} con una población de{' '}
                    {city.population.toLocaleString()} habitantes. La ciudad ofrece acceso a diversos servicios
                    financieros a través de bancos nacionales, cooperativas de ahorro y crédito, y plataformas
                    fintech licenciadas.
                  </p>
                  <p>
                    Los residentes de {city.name} pueden acceder a préstamos personales para diversos propósitos,
                    incluyendo consolidación de deudas, emergencias médicas, educación, mejoras del hogar, vehículos
                    y emprendimientos. Las tasas y condiciones varían según el prestamista y el perfil crediticio del
                    solicitante.
                  </p>
                  <p>
                    Nuestra plataforma facilita la conexión con prestamistas que operan en {city.name}, permitiéndole
                    comparar ofertas y encontrar las mejores opciones para su situación financiera específica.
                  </p>
                </div>

                {/* Loan Types */}
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-blue-900">
                    Tipos de Préstamos Disponibles en {city.name}
                  </h3>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {city.loanTypes.map((type) => (
                      <div
                        key={type}
                        className="flex items-start gap-3 rounded-lg border border-blue-100 bg-blue-50/40 p-3"
                      >
                        <span className="text-xl">💰</span>
                        <div>
                          <p className="font-semibold text-blue-900">{type}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-blue-200 bg-blue-50/60 p-6">
                  <h3 className="text-lg font-semibold text-blue-900">Información de {city.name}</h3>
                  <dl className="mt-4 space-y-3 text-sm">
                    <div>
                      <dt className="font-semibold text-gray-700">Región:</dt>
                      <dd className="text-gray-600">{city.regionName}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-gray-700">Población:</dt>
                      <dd className="text-gray-600">{city.population.toLocaleString()} habitantes</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-gray-700">Tasa Regional Promedio:</dt>
                      <dd className="text-gray-600">{region.averageAPR} EA</dd>
                    </div>
                  </dl>
                </div>

                <Card className="border-green-200 bg-green-50/50">
                  <CardHeader>
                    <CardTitle className="text-base text-green-900">🔒 Proceso Seguro</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-green-900/80">
                      <li>✓ Comparación sin compromiso</li>
                      <li>✓ Prestamistas regulados por SFC</li>
                      <li>✓ Información protegida con SSL</li>
                      <li>✓ Sin afectar su crédito inicial</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Local Regulations */}
        <section className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold text-blue-900">
            Regulaciones y Protecciones al Consumidor
          </h2>
          <Card className="mt-6 border-blue-100 bg-blue-50/40">
            <CardHeader>
              <CardTitle className="text-lg text-blue-900">
                Sus Derechos como Consumidor Financiero en Colombia
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-blue-900/80">
                <li>
                  • <strong>Tasa Máxima Legal:</strong> Ningún prestamista puede cobrar tasas superiores a la tasa
                  de usura certificada mensualmente por la Superintendencia Financiera
                </li>
                <li>
                  • <strong>Información Clara:</strong> Tiene derecho a recibir información completa sobre tasas,
                  costos, seguros y condiciones antes de firmar
                </li>
                <li>
                  • <strong>Periodo de Retracto:</strong> Puede retractarse del contrato dentro de los 5 días
                  hábiles siguientes sin penalización
                </li>
                <li>
                  • <strong>Protección de Datos:</strong> Sus datos personales están protegidos por la Ley 1581 de
                  2012 y solo pueden usarse para los fines autorizados
                </li>
                <li>
                  • <strong>Sistema de Quejas:</strong> Todos los prestamistas deben tener un defensor del
                  consumidor financiero
                </li>
                <li>
                  • <strong>Comparación Transparente:</strong> Las entidades deben permitirle comparar productos
                  financieros fácilmente
                </li>
                <li>
                  • <strong>Pago Anticipado:</strong> Tiene derecho a pagar anticipadamente su préstamo con
                  reducción proporcional de intereses
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="mt-6 rounded-lg border border-yellow-200 bg-yellow-50 p-5">
            <h3 className="font-semibold text-yellow-900 flex items-center gap-2">
              <span className="text-xl">⚠️</span>
              Importante: Verifique la Licencia del Prestamista
            </h3>
            <p className="mt-2 text-sm text-yellow-900/80">
              Antes de proporcionar información personal o solicitar un préstamo, verifique que la entidad esté
              registrada y supervisada por la{' '}
              <a
                href="https://www.superfinanciera.gov.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline"
              >
                Superintendencia Financiera de Colombia
              </a>
              . Evite prestamistas no autorizados o "gota a gota" que cobran tasas abusivas.
            </p>
          </div>
        </section>

        {/* Nearby Cities */}
        <section className="bg-white py-12">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-semibold text-blue-900">
              Préstamos cerca de {city.name}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Explore opciones de préstamos en ciudades cercanas a {city.name}
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {city.nearbyCities.map((nearbyCity) => (
                <div
                  key={nearbyCity}
                  className="rounded-lg border border-gray-200 p-4 text-center hover:border-blue-300 hover:shadow-md transition"
                >
                  <p className="font-semibold text-gray-900">{nearbyCity}</p>
                  <p className="mt-1 text-sm text-gray-600">Ciudad cercana</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold text-blue-900">
            Preguntas Frecuentes sobre Préstamos en {city.name}
          </h2>
          <div className="mt-6 space-y-4">
            {cityFAQ.map((item) => (
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

        {/* Disclosure */}
        <section className="bg-gray-50 py-8">
          <div className="mx-auto max-w-6xl px-4">
            <div className="rounded-lg border border-gray-200 bg-white p-6 text-sm text-gray-600">
              <h3 className="font-semibold text-gray-900 mb-3">Divulgación de Afiliados</h3>
              <p className="mb-3">
                Loan AI Portal actúa como intermediario entre solicitantes de préstamos y prestamistas licenciados.
                Podemos recibir compensación de los prestamistas cuando un usuario se conecta a través de nuestra
                plataforma. Esta compensación no tiene costo adicional para usted y no afecta las ofertas que recibe.
              </p>
              <p className="mb-3">
                <strong>Ejemplo Representativo:</strong> Un préstamo de $5.000.000 COP a 24 meses con una tasa EA
                del 28% resultaría en pagos mensuales de aproximadamente $255.000 COP, con un costo total de
                $6.120.000 COP (intereses: $1.120.000 COP). Las tasas y términos reales varían según su perfil
                crediticio.
              </p>
              <p>
                Todos los prestamistas en nuestra red están licenciados y supervisados por la Superintendencia
                Financiera de Colombia. Su información personal está protegida según la Ley 1581 de 2012.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-50 to-yellow-50 py-12">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl font-bold text-blue-900">
              ¿Listo para Solicitar un Préstamo en {city.name}?
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Compare ofertas de prestamistas licenciados y encuentre las mejores tasas en minutos.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/co/apply"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Solicitar Ahora
              </Link>
              <Link
                href={`/co/regions/${params.region}`}
                className="inline-flex items-center justify-center rounded-md border border-blue-600 px-8 py-3 text-base font-semibold text-blue-600 shadow-sm transition hover:bg-blue-50"
              >
                Ver Más Ciudades en {city.regionName}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer locale="es" />
    </>
  )
}
