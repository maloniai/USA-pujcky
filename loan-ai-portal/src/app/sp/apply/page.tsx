import type { Metadata } from 'next'
import Script from 'next/script'
import SpainNavigation from '@/components/spain/spain-navigation'
import SpainFooter from '@/components/spain/spain-footer'
import SpainDisclosure from '@/components/spain/spain-disclosure'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Solicitar Préstamo Personal – España | LoansAI',
  description: 'Completa la solicitud online para un préstamo personal en España. Proceso simple, respuesta rápida, ofertas de prestamistas autorizados por Banco de España. Sin impacto en score crediticio.',
  robots: 'index, follow',
  openGraph: {
    title: 'Solicitar Préstamo Personal en España',
    description: 'Solicitud online de préstamos personales. Prestamistas autorizados, aprobación rápida, cero costos ocultos.',
    url: 'https://loansai.com/sp/apply',
  },
  alternates: {
    canonical: 'https://loansai.com/sp/apply',
  },
}

export default function SpainApplyPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Solicitar Préstamo Personal España',
    description: 'Formulario de solicitud de préstamos personales en España',
    url: 'https://loansai.com/sp/apply',
    breadcrumb: {
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
          name: 'España',
          item: 'https://loansai.com/sp'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Solicitar',
          item: 'https://loansai.com/sp/apply'
        }
      ]
    }
  }

  return (
    <>
      {/* Structured Data */}
      <Script id="schema-webpage" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>

      {/* Affiliate Script - loaded asynchronously */}
      <Script 
        type="text/javascript" 
        src="https://www.doaff.net/publisherScript.js?c=jjt"
        strategy="afterInteractive"
      />

      <SpainNavigation />

      <main className="min-h-screen bg-gradient-to-b from-red-50 to-white">
        {/* Header Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🔒 Proceso Seguro y Confidencial
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Solicitar Préstamo Personal en España
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Completa el formulario a continuación para comparar ofertas personalizadas de más de 
              35 prestamistas autorizados por el Banco de España. El proceso es rápido, seguro y 
              no afecta tu score crediticio.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white shadow-lg">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-2xl font-bold text-center mb-8">Cómo Funciona</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">📝</span>
                    </div>
                    <h3 className="font-semibold mb-2">1. Completa el Formulario</h3>
                    <p className="text-sm text-gray-600">
                      Proporciona información básica sobre ti y tus necesidades de préstamo (2-3 minutos)
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🔍</span>
                    </div>
                    <h3 className="font-semibold mb-2">2. Compara Ofertas</h3>
                    <p className="text-sm text-gray-600">
                      Recibe ofertas personalizadas de múltiples prestamistas autorizados
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">✅</span>
                    </div>
                    <h3 className="font-semibold mb-2">3. Elige y Solicita</h3>
                    <p className="text-sm text-gray-600">
                      Selecciona la mejor oferta y completa la solicitud con el prestamista elegido
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl">
              <CardContent className="pt-8 pb-8">
                <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">ℹ️</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Antes de Comenzar</h3>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Ten a mano tu DNI o NIE</li>
                        <li>• Conoce tus ingresos mensuales aproximados</li>
                        <li>• Decide cuánto necesitas y por cuánto tiempo</li>
                        <li>• Asegúrate de tener una cuenta bancaria española activa</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-center">
                  Formulario de Solicitud de Préstamo
                </h2>

                {/* 
                  The affiliate script will load the form here automatically.
                  The script from doaff.net will inject the appropriate form.
                */}
                <div id="loan-application-form" className="min-h-[400px]">
                  {/* Affiliate form will be injected here by the script */}
                  <div className="text-center py-12">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mb-4"></div>
                    <p className="text-gray-600">Cargando formulario seguro...</p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🔒</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Tu Información Está Segura</h3>
                      <p className="text-sm text-gray-700">
                        Utilizamos encriptación SSL de 256 bits para proteger tus datos personales. 
                        Tu información solo se comparte con prestamistas autorizados cuando das tu 
                        consentimiento explícito. Cumplimos con todas las regulaciones del RGPD.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits */}
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Por Qué Solicitar con LoansAI España
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">💰</span>
                    <div>
                      <h3 className="font-semibold mb-2">Totalmente Gratuito</h3>
                      <p className="text-sm text-gray-600">
                        Nuestro servicio de comparación es 100% gratuito para ti. No hay cargos 
                        ocultos ni tarifas de solicitud.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">⚡</span>
                    <div>
                      <h3 className="font-semibold mb-2">Respuesta Rápida</h3>
                      <p className="text-sm text-gray-600">
                        Recibe ofertas preliminares en minutos. La mayoría de las decisiones 
                        finales se toman en 24-48 horas.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">🛡️</span>
                    <div>
                      <h3 className="font-semibold mb-2">Prestamistas Autorizados</h3>
                      <p className="text-sm text-gray-600">
                        Solo trabajamos con instituciones financieras autorizadas y supervisadas 
                        por el Banco de España.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">📊</span>
                    <div>
                      <h3 className="font-semibold mb-2">Sin Impacto Crediticio</h3>
                      <p className="text-sm text-gray-600">
                        Comparar ofertas no afecta tu score crediticio. Solo las solicitudes 
                        formales con prestamistas pueden tener un impacto temporal.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Requisitos Básicos
            </h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">
                  Para calificar para un préstamo personal en España, generalmente necesitas:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">✓</span>
                    <span className="text-gray-700">Tener al menos 18 años de edad (algunos prestamistas requieren 21+)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">✓</span>
                    <span className="text-gray-700">Ser residente legal en España con DNI o NIE válido</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">✓</span>
                    <span className="text-gray-700">Tener una fuente de ingresos regular y comprobable</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">✓</span>
                    <span className="text-gray-700">Poseer una cuenta bancaria española activa</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">✓</span>
                    <span className="text-gray-700">No estar en situación de insolvencia activa o procedimientos de quiebra</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  Los requisitos específicos varían por prestamista. Algunos pueden tener criterios 
                  adicionales basados en historial crediticio, ingresos mínimos o tipo de empleo.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="container mx-auto px-4 py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8">Regulado y Transparente</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl mb-3">🏛️</div>
                <h3 className="font-semibold mb-2">Banco de España</h3>
                <p className="text-sm text-gray-600">
                  Supervisión regulatoria
                </p>
              </div>
              <div>
                <div className="text-4xl mb-3">🔐</div>
                <h3 className="font-semibold mb-2">Protección RGPD</h3>
                <p className="text-sm text-gray-600">
                  Datos seguros y privados
                </p>
              </div>
              <div>
                <div className="text-4xl mb-3">📜</div>
                <h3 className="font-semibold mb-2">Ley 16/2011</h3>
                <p className="text-sm text-gray-600">
                  Crédito al consumo
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Disclosure */}
        <section className="container mx-auto px-4 py-12">
          <SpainDisclosure />
        </section>
      </main>

      <SpainFooter />
    </>
  )
}
