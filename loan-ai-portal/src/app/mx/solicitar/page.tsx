import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import MexicoNavigation from '@/components/mexico/mexico-navigation'
import MexicoFooter from '@/components/mexico/mexico-footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Solicitar Préstamo Personal en México – Rápido y Seguro',
  description: 'Solicita tu préstamo personal en México en minutos. Compara ofertas de múltiples prestamistas regulados por CONDUSEF. Proceso 100% en línea, rápido y seguro.',
  keywords: 'solicitar prestamo mexico, aplicar credito, prestamo en linea mexico, credito rapido, CONDUSEF',
}

const applyFaqs = [
  {
    q: '¿Cuánto tiempo toma el proceso de solicitud?',
    a: 'Nuestro proceso de solicitud toma solo 2-3 minutos. Recibirás una respuesta inicial de los prestamistas en minutos. Si procedes con un prestamista, la verificación completa y aprobación puede tomar de 24 a 48 horas dependiendo de la institución.'
  },
  {
    q: '¿Afectará mi historial crediticio al verificar tasas?',
    a: 'No. Verificar tus tasas solo requiere una consulta suave que no afecta tu score crediticio. Una consulta completa ocurre solo si aceptas una oferta y completas la solicitud final con un prestamista.'
  },
  {
    q: '¿Para qué puedo usar el préstamo?',
    a: 'Los préstamos personales a través de nuestra plataforma pueden financiar consolidación de deudas, mejoras del hogar, gastos médicos, educación, compras importantes, bodas, emergencias o prácticamente cualquier necesidad financiera personal.'
  },
  {
    q: '¿Puedo obtener un préstamo con mal historial crediticio?',
    a: 'Sí, trabajamos con prestamistas que ofrecen préstamos a personas con diversos perfiles crediticios, incluyendo historiales menos favorables. Las tasas de interés y montos disponibles variarán según tu situación específica.'
  },
  {
    q: '¿Hay algún costo por usar este servicio?',
    a: 'Nuestro servicio de comparación es completamente gratuito para los prestatarios. Los prestamistas individuales pueden cobrar comisiones por apertura u otros conceptos, que siempre se divulgan antes de que aceptes cualquier oferta.'
  }
]

export default function SolicitarPage() {
  // Schema.org structured data
  const financialServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'Solicitar Préstamo Personal en México',
    description: 'Plataforma de solicitud de préstamos personales en México',
    url: 'https://loansai.com/mx/solicitar',
    areaServed: {
      '@type': 'Country',
      name: 'México'
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
        name: 'México',
        item: 'https://loansai.com/mx'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Solicitar',
        item: 'https://loansai.com/mx/solicitar'
      }
    ]
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: applyFaqs.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a
      }
    }))
  }

  return (
    <>
      <Script id="financial-service-schema" type="application/ld+json">
        {JSON.stringify(financialServiceSchema)}
      </Script>
      <Script id="breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <MexicoNavigation />
      
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumbs */}
          <nav className="mb-6">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/mx" className="hover:text-green-600">México</Link>
              <span>›</span>
              <span className="text-green-900 font-semibold">Solicitar Préstamo</span>
            </div>
          </nav>

          {/* Hero Section */}
          <section className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
              Solicita tu Préstamo Personal
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Verifica tus tasas en tan solo 2 minutos con nuestro sistema de comparación con IA. 
              Compara ofertas de prestamistas regulados por CONDUSEF sin afectar tu historial crediticio.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-green-600 font-medium mb-8">
              <span className="flex items-center gap-1">
                <span className="text-green-500">✓</span> Sin impacto en tu score crediticio
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-500">✓</span> Solicitud de 2-3 minutos
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-500">✓</span> Fondos en 24-48 horas
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-500">✓</span> $5,000 - $500,000 MXN
              </span>
            </div>
          </section>

          {/* Important Notice */}
          <div className="max-w-4xl mx-auto mb-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <div className="flex items-start gap-3">
              <div className="text-2xl">ℹ️</div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Importante: Transparencia y Cumplimiento</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Al usar este formulario, serás conectado con prestamistas que pueden ofrecerte préstamos 
                  personales. LoansAI México puede recibir compensación de estos prestamistas. Todos los 
                  prestamistas están regulados por CONDUSEF y deben proporcionar información clara sobre 
                  el CAT (Costo Anual Total), comisiones y términos del préstamo antes de que firmes cualquier 
                  contrato. Verifica siempre el CAT y lee todos los términos antes de aceptar una oferta.
                </p>
              </div>
            </div>
          </div>

          {/* Application Form Section */}
          <section className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-center mb-6 text-green-800">
                Completa tu Solicitud de Préstamo
              </h2>
              <div className="mb-6">
                <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                  <span>Progreso de Solicitud</span>
                  <span>Paso 1 de 3</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full w-1/3"></div>
                </div>
              </div>

              {/* Affiliate Script Integration */}
              <div className="min-h-[600px] bg-gray-50 rounded-lg p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-4">📋</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Formulario de Solicitud
                  </h3>
                  <p className="text-gray-600 mb-4">
                    El formulario de solicitud se cargará aquí
                  </p>
                  {/* Insert affiliate script here */}
                  <Script 
                    src="https://www.doaff.net/publisherScript.js?c=jjs" 
                    strategy="afterInteractive"
                  />
                  <div id="loan-application-form">
                    {/* The affiliate form will render here */}
                  </div>
                </div>
              </div>

              <div className="mt-6 text-xs text-gray-500 text-center max-w-3xl mx-auto">
                LoansAI México conecta de manera segura tu solicitud con prestamistas asociados. 
                Este procesamiento está cubierto por nuestro{' '}
                <Link href="/mx/privacidad" className="text-green-600 hover:text-green-800 font-semibold">
                  Aviso de Privacidad
                </Link>
                , que establece las obligaciones de protección de datos que deben seguir nuestros socios.
              </div>
            </div>
          </section>

          {/* Why Apply With Us */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-green-800">
              ¿Por Qué Solicitar con LoansAI México?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">⚡</div>
                  <CardTitle>Rápido y Fácil</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Completa tu solicitud en 2-3 minutos. Sin papeleo complicado, 
                    sin impacto en tu historial crediticio al comparar ofertas.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">🎯</div>
                  <CardTitle>Comparación Inteligente</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Nuestra IA analiza tu perfil y te conecta con los prestamistas 
                    que mejor se adaptan a tus necesidades.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">🔒</div>
                  <CardTitle>Seguridad Bancaria</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Tu información personal y financiera está protegida con 
                    encriptación SSL de 256 bits y medidas de seguridad avanzadas.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">💰</div>
                  <CardTitle>Tasas Competitivas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Accede a tasas competitivas desde 15% anual de nuestra red de 
                    prestamistas regulados por CONDUSEF.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">✅</div>
                  <CardTitle>100% Regulado</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Todos los prestamistas están supervisados por CONDUSEF y 
                    cumplen con las regulaciones mexicanas.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">🆓</div>
                  <CardTitle>Sin Costo</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Nuestro servicio de comparación es completamente gratuito. 
                    Sin cargos ocultos ni comisiones.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Loan Details */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-green-800">
              Detalles y Requisitos del Préstamo
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-green-900">Montos y Plazos</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">•</span> Montos: $5,000 - $500,000 MXN
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">•</span> Plazos: 6 - 60 meses
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">•</span> Tasas anuales: 15% - 80%
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">•</span> CAT máximo: 100%
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">•</span> Sin penalización por pago anticipado
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">Requisitos Básicos</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span> Mayor de 18 años
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span> Ciudadano mexicano o residente
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span> Cuenta bancaria válida
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span> Fuente de ingresos comprobable
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span> Todos los perfiles crediticios bienvenidos
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-green-800">
              Preguntas Frecuentes
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {applyFaqs.map((faq, index) => (
                <details 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-green-300 transition"
                >
                  <summary className="font-semibold cursor-pointer text-lg text-green-900">
                    {faq.q}
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* Security Section */}
          <section className="mb-12 bg-gray-100 p-8 rounded-xl">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 text-green-800">Tu Seguridad es Nuestra Prioridad</h2>
              <p className="text-gray-600 mb-6">
                Utilizamos medidas de seguridad de nivel bancario para proteger tu información 
                personal y financiera durante todo el proceso de solicitud.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🔐</span>
                  <span>Encriptación SSL 256-bit</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🏛️</span>
                  <span>Seguridad Bancaria</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🔒</span>
                  <span>Datos Protegidos</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  <span>Cumplimiento LFPDPPP</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <MexicoFooter />
    </>
  )
}
