import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Préstamos Personales Colombia 2025 – Compara Ofertas Reguladas',
  description: 'Compara préstamos personales de prestamistas regulados por la Superintendencia Financiera en Colombia. Tasas competitivas, aprobación rápida, 100% en línea.',
  keywords: 'prestamos personales colombia, creditos colombia, superintendencia financiera, comparar prestamos, tasas de interes colombia, prestamos rapidos colombia',
  openGraph: {
    title: 'Préstamos Personales Colombia – Compara Ofertas Reguladas',
    description: 'Plataforma de comparación de préstamos personales en Colombia. Prestamistas regulados, transparencia completa, asistencia en español.',
    url: 'https://loansai.com/co',
    siteName: 'LoansAI Colombia',
    locale: 'es_CO',
    type: 'website',
  },
  alternates: {
    canonical: 'https://loansai.com/co',
  },
}

const faqItems = [
  {
    question: '¿Cómo funcionan los préstamos personales en Colombia?',
    answer: 'Los préstamos personales en Colombia son regulados por la Superintendencia Financiera. Puedes solicitar préstamos desde entidades bancarias, cooperativas de crédito y financieras no bancarias. El proceso incluye evaluación de tu historial crediticio, capacidad de pago y cumplimiento de requisitos específicos de cada entidad.'
  },
  {
    question: '¿Cuánto tiempo tarda en aprobarse un préstamo?',
    answer: 'El tiempo de aprobación varía según la entidad financiera. Los préstamos en línea pueden aprobarse en 24-48 horas. Los préstamos bancarios tradicionales generalmente tardan 3-7 días hábiles. Una vez aprobado, el desembolso se realiza mediante transferencia bancaria directa.'
  },
  {
    question: '¿Qué documentos necesito para solicitar un préstamo?',
    answer: 'Los documentos básicos incluyen: cédula de ciudadanía vigente, certificado de ingresos o declaración de renta, extractos bancarios recientes (últimos 3 meses), certificado laboral si eres empleado, y RUT si eres trabajador independiente. Algunos prestamistas pueden solicitar documentación adicional.'
  },
  {
    question: '¿Puedo obtener un préstamo con mal historial crediticio?',
    answer: 'Sí, aunque puede ser más difícil. Algunos prestamistas trabajan con personas que tienen historial crediticio negativo en centrales de riesgo como DataCrédito o TransUnion. Sin embargo, probablemente enfrentarás tasas de interés más altas. Es importante trabajar en mejorar tu historial pagando a tiempo.'
  },
  {
    question: '¿Cuáles son mis derechos como prestatario en Colombia?',
    answer: 'Tienes derecho a: recibir información clara sobre tasas de interés y costos totales, conocer el interés bancario corriente, pagar anticipadamente sin penalizaciones excesivas, recibir estados de cuenta, presentar quejas ante la Superintendencia Financiera, y protección de tus datos personales según la Ley 1581 de 2012.'
  }
]

export default function ColombiaHubPage() {
  // Schema.org structured data
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'LoansAI Colombia - Comparación de Préstamos Personales',
    description: 'Plataforma de comparación de préstamos personales en Colombia con prestamistas regulados por la Superintendencia Financiera',
    url: 'https://loansai.com/co',
    areaServed: {
      '@type': 'Country',
      name: 'Colombia'
    },
    availableLanguage: 'es',
    serviceType: 'Comparación de Préstamos Personales',
    provider: {
      '@type': 'Organization',
      name: 'LoansAI',
      logo: 'https://loansai.com/logo.png'
    }
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://loansai.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Colombia',
        item: 'https://loansai.com/co'
      }
    ]
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  }

  return (
    <>
      {/* Structured Data */}
      <Script id="schema-financial-service" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>
      <Script id="schema-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="schema-faq" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <main className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🇨🇴 Regulado por la Superintendencia Financiera de Colombia
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Préstamos Personales en Colombia
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Compara ofertas de prestamistas regulados. Transparencia total, 
              tasas competitivas, aprobación en línea.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/">
                <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-lg px-8 py-6">
                  <span className="flex items-center gap-2">
                    <span>💰</span>
                    Solicitar Préstamo
                  </span>
                </Button>
              </Link>
              <Link href="/">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-yellow-600 text-yellow-700 hover:bg-yellow-50">
                  Más Información
                </Button>
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
                <div className="text-3xl font-bold text-yellow-600 mb-1">30+</div>
                <div className="text-sm text-gray-600">Prestamistas Regulados</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
                <div className="text-3xl font-bold text-yellow-600 mb-1">32</div>
                <div className="text-sm text-gray-600">Departamentos</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
                <div className="text-3xl font-bold text-yellow-600 mb-1">100+</div>
                <div className="text-sm text-gray-600">Ciudades Principales</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
                <div className="text-3xl font-bold text-yellow-600 mb-1">51M</div>
                <div className="text-sm text-gray-600">Población Servida</div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-yellow-900 mb-12">
              ¿Cómo Funciona?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  1️⃣
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Completa tu Solicitud</h3>
                <p className="text-gray-600">
                  Llena el formulario en línea en 3-5 minutos. Información básica sobre ti, 
                  tus ingresos y el monto que necesitas. 100% seguro y confidencial.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  2️⃣
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Compara Ofertas</h3>
                <p className="text-gray-600">
                  Recibe múltiples ofertas personalizadas de prestamistas regulados. Compara 
                  tasas, plazos y elige la que mejor se adapte a tus necesidades.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  3️⃣
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Recibe tu Dinero</h3>
                <p className="text-gray-600">
                  Una vez aprobado, el dinero se deposita directamente en tu cuenta bancaria. 
                  Algunas aprobaciones en el mismo día, la mayoría en 24-48 horas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Cities */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-yellow-900 mb-4">
              Principales Ciudades
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Encuentra información sobre préstamos personales en las principales ciudades de Colombia.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Bogotá', description: 'Capital y ciudad más grande de Colombia' },
                { name: 'Medellín', description: 'Capital de Antioquia' },
                { name: 'Cali', description: 'Capital del Valle del Cauca' },
                { name: 'Barranquilla', description: 'Principal puerto del Caribe colombiano' },
                { name: 'Cartagena', description: 'Ciudad histórica en la costa Caribe' },
                { name: 'Bucaramanga', description: 'Capital de Santander' },
              ].map((city) => (
                <Card key={city.name} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{city.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{city.description}</p>
                    <Link href="/">
                      <Button variant="outline" className="w-full">
                        Ver Préstamos
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="container mx-auto px-4 py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              ¿Por qué elegir LoansAI?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>🏛️ Prestamistas Regulados</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Trabajamos únicamente con prestamistas regulados por la Superintendencia 
                    Financiera de Colombia, garantizando tu seguridad.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>⚡ Proceso Rápido</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Solicita en minutos y recibe ofertas personalizadas rápidamente. 
                    Algunos prestamistas aprueban el mismo día.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>📊 Comparación Transparente</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Compara tasas, plazos y condiciones de múltiples prestamistas. 
                    Sin costos ocultos, toda la información clara y accesible.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Preguntas Frecuentes
            </h2>
            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <details key={index} className="group bg-white rounded-lg shadow-md p-6 cursor-pointer">
                  <summary className="flex justify-between items-center font-semibold text-lg text-gray-900 list-none">
                    <span>{faq.question}</span>
                    <span className="text-yellow-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16 bg-yellow-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Listo para encontrar tu préstamo ideal?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Comienza ahora y compara ofertas de los mejores prestamistas en Colombia.
            </p>
            <Link href="/">
              <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-lg px-8 py-6">
                Solicitar Ahora
              </Button>
            </Link>
          </div>
        </section>

        {/* Footer Navigation */}
        <footer className="container mx-auto px-4 py-12 border-t">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-4">LoansAI Colombia</h3>
                <p className="text-gray-600 text-sm">
                  Plataforma de comparación de préstamos personales en Colombia.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Enlaces Útiles</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/" className="text-gray-600 hover:text-yellow-600">Inicio</Link></li>
                  <li><Link href="/about" className="text-gray-600 hover:text-yellow-600">Sobre Nosotros</Link></li>
                  <li><Link href="/contact" className="text-gray-600 hover:text-yellow-600">Contacto</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Legal</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/privacy" className="text-gray-600 hover:text-yellow-600">Privacidad</Link></li>
                  <li><Link href="/terms" className="text-gray-600 hover:text-yellow-600">Términos</Link></li>
                  <li><Link href="/disclaimer" className="text-gray-600 hover:text-yellow-600">Disclaimer</Link></li>
                </ul>
              </div>
            </div>
            <div className="text-center text-sm text-gray-500 pt-8 border-t">
              <p>© 2025 LoansAI. Todos los derechos reservados.</p>
              <p className="mt-2">
                Los préstamos están sujetos a aprobación. Las tasas y términos varían según el prestamista.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
