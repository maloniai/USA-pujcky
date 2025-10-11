import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import StickyApplyButton from '@/components/sticky-apply-button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import LeadGenDisclosure from '@/components/compliance/lead-gen-disclosure'
import FinancialServiceSchema from '@/components/financial-service-schema'
import FAQPageSchema from '@/components/colombia/faq-page-schema'
import { colombiaRegions, totalColombiaCities } from '@/data/colombia-regions'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Préstamos en Colombia – Comparar Ofertas 2025',
  description:
    'Compare préstamos personales en Colombia con IA. Acceda a prestamistas licenciados por la Superintendencia Financiera. Tasas desde 18% EA en 5 regiones.',
  alternates: {
    canonical: 'https://loan-platform.com/co',
  },
}

const complianceHighlights = [
  {
    title: 'Marco Regulatorio',
    items: [
      'Decreto 2555 de 2010 – Sector Financiero',
      'Superintendencia Financiera de Colombia (SFC)',
      'Registro de entidades vigiladas y autorizadas',
      'Protección al consumidor financiero (Ley 1328)',
    ],
  },
  {
    title: 'Tasas y Límites',
    items: [
      'Tasa de usura máxima certificada mensualmente por SFC',
      'Tasas efectivas anuales (EA) desde 18% hasta 48% según perfil',
      'Transparencia en costos totales del crédito',
      'Comparación de CAE (Costo Anual Equivalente)',
    ],
  },
  {
    title: 'Protecciones al Consumidor',
    items: [
      'Derecho a retracto (5 días hábiles)',
      'Información precontractual obligatoria',
      'Factura de servicios financieros clara',
      'Sistema de atención al consumidor financiero',
    ],
  },
]

const faq = [
  {
    question: '¿Cuánto tiempo tarda en aprobarse un préstamo en Colombia?',
    answer:
      'Los tiempos varían según la entidad. Bancos tradicionales pueden tardar 5-10 días hábiles. Entidades digitales y cooperativas pueden aprobar en 24-48 horas. La documentación completa y correcta acelera el proceso.',
  },
  {
    question: '¿Qué documentos necesito para solicitar un préstamo personal?',
    answer:
      'Generalmente se requiere: cédula de ciudadanía, certificado laboral o declaración de renta, extractos bancarios de los últimos 3 meses, y referencias personales. Para independientes: RUT y certificado de ingresos.',
  },
  {
    question: '¿Puedo obtener un préstamo si estoy reportado en DataCrédito?',
    answer:
      'Sí, es posible. Algunas entidades financieras ofrecen préstamos para personas reportadas, aunque con tasas más altas. El monto y condiciones dependen del tipo de reporte y su antigüedad. Se recomienda revisar su historial crediticio primero.',
  },
  {
    question: '¿Cuál es la diferencia entre tasa nominal y tasa efectiva anual?',
    answer:
      'La tasa nominal es el porcentaje simple anual. La tasa efectiva anual (EA) incluye la capitalización de intereses y es la que realmente pagará. En Colombia, por ley, las entidades deben informar la EA para facilitar la comparación.',
  },
  {
    question: '¿Los préstamos en línea son seguros en Colombia?',
    answer:
      'Sí, siempre que la entidad esté vigilada por la Superintendencia Financiera de Colombia. Verifique que el prestamista esté en el registro oficial de la SFC antes de compartir datos personales o bancarios.',
  },
]

export default function ColombiaHubPage() {
  return (
    <>
      <FinancialServiceSchema
        name="Préstamos Personales en Colombia"
        description="Compare préstamos personales de entidades financieras licenciadas en Colombia. Acceda a tasas competitivas y opciones de financiamiento."
        areaServed="Colombia"
        provider={{
          name: 'Loan AI Portal',
          url: 'https://loan-platform.com',
        }}
        url="https://loan-platform.com/co"
      />
      <FAQPageSchema faqs={faq} />
      <Navigation locale="es" />
      <StickyApplyButton label="Aplicar Ahora" href="/co/apply" />
      <main className="flex-1 bg-slate-50">
        <header className="border-b border-blue-100 bg-gradient-to-br from-yellow-50 via-white to-blue-100">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              Colombia 🇨🇴 • Portal de Préstamos con IA
            </p>
            <h1 className="mt-3 text-4xl font-bold text-blue-900 md:text-5xl">
              Préstamos en Colombia
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-blue-900/80 md:text-xl">
              Compare ofertas de préstamos personales de entidades financieras licenciadas por la Superintendencia
              Financiera de Colombia. Nuestra plataforma con IA le ayuda a encontrar las mejores tasas efectivas anuales,
              plazos flexibles y opciones de financiamiento adaptadas a su perfil crediticio.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#regional-guides"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Ver Guías Regionales
              </Link>
              <Link
                href="/co/apply"
                className="inline-flex items-center justify-center rounded-md border border-blue-500 px-5 py-2 text-sm font-semibold text-blue-600 shadow-sm transition hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Solicitar Préstamo
              </Link>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-blue-200 bg-white/80 p-4 text-blue-900">
                <p className="text-2xl font-bold">{colombiaRegions.length} regiones</p>
                <p className="text-sm">Cobertura en las principales zonas económicas</p>
              </div>
              <div className="rounded-2xl border border-blue-200 bg-white/80 p-4 text-blue-900">
                <p className="text-2xl font-bold">{totalColombiaCities}+ ciudades</p>
                <p className="text-sm">Acceso a prestamistas locales y nacionales</p>
              </div>
              <div className="rounded-2xl border border-blue-200 bg-white/80 p-4 text-blue-900">
                <p className="text-2xl font-bold">Desde 18% EA</p>
                <p className="text-sm">Tasas competitivas según su perfil crediticio</p>
              </div>
            </div>
            <LeadGenDisclosure locale="es" className="mt-4 max-w-3xl text-blue-900/70" />
          </div>
        </header>

        {/* Overview Section */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="text-3xl font-semibold text-blue-900">Préstamos Personales en Colombia</h2>
                <div className="mt-4 space-y-4 text-gray-700">
                  <p>
                    Colombia cuenta con un sector financiero regulado y supervisado por la Superintendencia Financiera,
                    que garantiza la transparencia y protección de los consumidores. El mercado de préstamos personales
                    incluye bancos tradicionales, cooperativas de ahorro y crédito, compañías de financiamiento comercial
                    y entidades fintech autorizadas.
                  </p>
                  <p>
                    Los préstamos personales en Colombia son una herramienta flexible para financiar proyectos personales,
                    consolidar deudas, cubrir emergencias médicas o realizar inversiones. Las tasas varían según el perfil
                    crediticio del solicitante, historial en centrales de riesgo (DataCrédito, TransUnión) y capacidad
                    de pago demostrable.
                  </p>
                  <p>
                    Nuestra plataforma conecta solicitantes con prestamistas licenciados, facilitando la comparación de
                    ofertas y permitiendo encontrar las mejores condiciones según su situación financiera particular.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-blue-200 bg-blue-50/70 p-6 text-sm">
                <h3 className="text-lg font-semibold text-blue-900">Tipos de Préstamos Disponibles</h3>
                <ul className="mt-4 space-y-3 text-blue-900/80">
                  <li className="flex items-start gap-2">
                    <span className="text-lg">💳</span>
                    <div>
                      <strong>Préstamos de Libre Inversión:</strong> Para cualquier propósito, desde $1.000.000 hasta
                      $150.000.000 COP
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg">🏠</span>
                    <div>
                      <strong>Préstamos de Vivienda:</strong> Financiamiento hipotecario con plazos hasta 20 años
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg">🚗</span>
                    <div>
                      <strong>Créditos de Vehículo:</strong> Financiación de carros nuevos y usados
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg">💼</span>
                    <div>
                      <strong>Microcréditos:</strong> Para emprendedores y pequeños negocios
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Guides Section */}
        <section id="regional-guides" className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-semibold text-blue-900">Guías Regionales</h2>
          <p className="mt-3 max-w-3xl text-sm text-blue-900/80">
            Cada región de Colombia tiene características económicas únicas que influyen en la disponibilidad y
            condiciones de los préstamos. Explore información específica por región.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {colombiaRegions.map((region) => (
              <Card key={region.code} className="h-full border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">{region.name}</CardTitle>
                  <p className="text-sm text-blue-900/70">
                    Capital: {region.capital} • {region.cityCount} ciudades • Población: {region.population.toLocaleString()}
                  </p>
                  <p className="text-sm font-semibold text-blue-700">
                    Tasa promedio: {region.averageAPR}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-blue-900/80">
                  <p>{region.growthFocus}</p>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-blue-500">
                      Ciudades Destacadas
                    </p>
                    <ul className="mt-2 space-y-1">
                      {region.featuredCities.map((city) => (
                        <li key={city}>• {city}</li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={`/co/regions/${region.code}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
                  >
                    Ver guía regional completa <span aria-hidden>→</span>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-semibold text-blue-900">Cómo Funciona Nuestra Plataforma</h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: '1. Complete el Formulario',
                  text: 'Proporcione información básica sobre el monto deseado, plazo y su situación financiera. El proceso toma solo 3-5 minutos.',
                  icon: '📝',
                },
                {
                  title: '2. Compare Ofertas',
                  text: 'Nuestra IA analiza su perfil y lo conecta con prestamistas que se ajustan a sus necesidades, comparando tasas EA, plazos y costos totales.',
                  icon: '🤖',
                },
                {
                  title: '3. Reciba su Préstamo',
                  text: 'Una vez aprobado, el desembolso se realiza directamente a su cuenta bancaria, generalmente en 24-72 horas.',
                  icon: '💰',
                },
              ].map((step) => (
                <Card key={step.title} className="border-blue-100 shadow-sm">
                  <CardHeader>
                    <div className="text-4xl" aria-hidden="true">
                      {step.icon}
                    </div>
                    <CardTitle className="text-xl text-blue-900">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-blue-900/80">{step.text}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Regulatory Framework */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-semibold text-blue-900">Regulación y Marco Legal</h2>
          <p className="mt-3 max-w-3xl text-sm text-blue-900/80">
            El sector financiero colombiano está regulado por la Superintendencia Financiera de Colombia (SFC), que
            supervisa las entidades para garantizar la transparencia, solidez y protección de los usuarios.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {complianceHighlights.map((block) => (
              <Card key={block.title} className="border-blue-100 bg-blue-50/40 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">{block.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-blue-900/80">
                    {block.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50/60 p-6">
            <h3 className="text-xl font-semibold text-blue-900">Enlaces Útiles de Regulación</h3>
            <ul className="mt-4 space-y-2 text-sm text-blue-900/80">
              <li>
                •{' '}
                <a
                  href="https://www.superfinanciera.gov.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Superintendencia Financiera de Colombia
                </a>{' '}
                - Entidad reguladora oficial
              </li>
              <li>
                •{' '}
                <a
                  href="https://www.superfinanciera.gov.co/publicacion/60819"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Tasa de Usura
                </a>{' '}
                - Tasas máximas certificadas mensualmente
              </li>
              <li>
                •{' '}
                <a
                  href="https://www.datacredito.com.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  DataCrédito
                </a>{' '}
                - Consulte su historial crediticio
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-semibold text-blue-900">Preguntas Frecuentes</h2>
            <p className="mt-3 text-sm text-gray-600">
              Respuestas a las preguntas más comunes sobre préstamos personales en Colombia.
            </p>
            <div className="mt-8 space-y-4">
              {faq.map((item) => (
                <details
                  key={item.question}
                  className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <summary className="cursor-pointer text-lg font-semibold text-blue-900">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-sm text-blue-900/80">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-50 to-yellow-50 py-16">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl font-bold text-blue-900">
              ¿Listo para Comparar Préstamos en Colombia?
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Conéctese con prestamistas licenciados y encuentre las mejores ofertas para su situación financiera.
              El proceso es rápido, seguro y sin compromiso inicial.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/co/apply"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Solicitar Préstamo Ahora
              </Link>
              <Link
                href="/co/regions"
                className="inline-flex items-center justify-center rounded-md border border-blue-600 px-8 py-3 text-base font-semibold text-blue-600 shadow-sm transition hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Explorar Regiones
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer locale="es" />
    </>
  )
}
