import StructuredData from '@/components/structured-data'
import ApplicationFormScript from '@/components/application-form-script'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { applySEOEs, generatePageMetadata } from '@/lib/seo'
import TransparencyBanner from '@/components/compliance/transparency-banner'
import LeadGenDisclosure from '@/components/compliance/lead-gen-disclosure'
import FAQSchema from '@/components/faq-schema'

export const metadata = generatePageMetadata(applySEOEs)

const spanishFaqs = [
  {
    q: '¿Cuánto tarda el proceso de solicitud?',
    a: 'Completar el formulario toma cerca de 2 minutos. Recibirás una precalificación y verificación de tasa mediante consulta blanda y, si decides avanzar con un prestamista y finalizan la aprobación, los fondos pueden depositarse tan pronto como el siguiente día hábil.',
  },
  {
    q: '¿Revisar mi tasa afecta mi puntaje crediticio?',
    a: 'No. La preaprobación utiliza una consulta suave que no impacta tu crédito. Solo habrá una consulta dura cuando aceptes una oferta de préstamo.',
  },
  {
    q: '¿Para qué puedo usar el préstamo?',
    a: 'Puedes utilizarlo para consolidar deudas, realizar mejoras en el hogar, cubrir gastos médicos, bodas u otros objetivos personales.',
  },
  {
    q: '¿Qué pasa si tengo mal crédito?',
    a: 'Trabajamos con prestamistas que aceptan todo tipo de crédito, incluidos puntajes bajos. Nuestro motor de IA encuentra quiénes tienen mayor probabilidad de aprobar tu solicitud.',
  },
  {
    q: '¿Existen comisiones ocultas?',
    a: 'Nuestro servicio es gratuito. Algunos prestamistas pueden cobrar cargos, pero se mostrarán claramente antes de que aceptes cualquier oferta.',
  },
]

export default function SpanishApplyPage() {
  return (
    <>
      <StructuredData data={applySEOEs.structuredData} />
      <FAQSchema faqs={spanishFaqs} />
      <Navigation locale="es" />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="hero text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Solicita tu préstamo personal en minutos
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Nuestro sistema impulsado por IA compara tu perfil con más de 100 prestamistas certificados para ofrecerte
              tasas competitivas y una precalificación en 2 minutos mediante consulta blanda, sin afectar tu puntaje crediticio.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-green-600 font-medium mb-8">
              <span className="flex items-center gap-1">
                <span className="text-green-500">✓</span> Sin impacto en tu crédito
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-500">✓</span> Precalificación y tasa en 2 minutos
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-500">✓</span> Fondos tan pronto como mañana
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-500">✓</span> $1,000 - $100,000
              </span>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700" size="lg">
              Completar solicitud
            </Button>
            <LeadGenDisclosure locale="es" className="mt-2 text-sm text-gray-600" />
          </section>

          {/* Application Form Section */}
          <section
            className="application-form-section max-w-4xl mx-auto mb-12"
            aria-labelledby="application-form-heading-es"
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 id="application-form-heading-es" className="text-2xl font-bold text-center mb-6 text-blue-800">
                Completa tu solicitud de préstamo
              </h2>
              <div className="mb-6">
                <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                  <span>Progreso de la solicitud</span>
                  <span>Paso 1 de 3</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full w-1/3"></div>
                </div>
              </div>
              <LeadGenDisclosure locale="es" className="mb-4 text-center" />
              <ApplicationFormScript />
            </div>
          </section>

          <TransparencyBanner locale="es" />

          {/* Benefits Section */}
          <section className="benefits mb-12" aria-labelledby="benefits-heading-es">
            <h2 id="benefits-heading-es" className="text-3xl font-bold text-center mb-8 text-blue-800">
              Ventajas de solicitar con Portal de Préstamos IA
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">⚡</div>
                  <CardTitle>Precalificación veloz</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Recibe resultados claros en menos de 2 minutos gracias a nuestra tecnología de coincidencia
                    avanzada y una consulta blanda que no afecta tu crédito.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">🎯</div>
                  <CardTitle>Coincidencia inteligente</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Analizamos más de 200 puntos de datos para conectarte con los prestamistas más propensos a aprobar
                    tu solicitud con pagos accesibles.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">🔒</div>
                  <CardTitle>Seguridad nivel banco</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Tus datos personales están protegidos con cifrado SSL de 256 bits y controles estrictos de
                    privacidad.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">💰</div>
                  <CardTitle>Tasas competitivas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Accede a tasas desde 5.99% APR con prestamistas confiables y términos transparentes.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">📞</div>
                  <CardTitle>Soporte 24/7</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Nuestro equipo hispanohablante está disponible todo el día para ayudarte durante el proceso.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">✅</div>
                  <CardTitle>Sin comisiones ocultas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Transparencia total: sin cargos sorpresa, sin penalizaciones por pago anticipado.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Loan Details Section */}
          <section className="loan-details mb-12" aria-labelledby="loan-details-heading-es">
            <h2 id="loan-details-heading-es" className="text-3xl font-bold text-center mb-8 text-blue-800">
              Detalles del préstamo y requisitos básicos
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">Montos y términos</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span> Montos disponibles: $1,000 - $100,000
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span> Plazos de 24 a 84 meses
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span> APR estimado entre 5.99% y 35.99%
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span> Pagos mensuales fijos
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span> Sin penalización por pago adelantado
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-green-900">Requisitos mínimos</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">•</span> Ser mayor de 18 años
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">•</span> Residente o ciudadano de Estados Unidos
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">•</span> Cuenta bancaria válida para depósitos
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">•</span> Fuente estable de ingresos
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">•</span> Se aceptan todos los historiales de crédito
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="faq mb-12" aria-labelledby="faq-heading-es">
            <h2 id="faq-heading-es" className="faq-heading">
              Preguntas frecuentes
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {spanishFaqs.map((faq) => (
                <details key={faq.q} className="bg-white p-6 rounded-lg shadow-sm border">
                  <summary className="font-semibold cursor-pointer text-lg text-blue-900">
                    {faq.q}
                  </summary>
                  <p className="mt-4 text-gray-800">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Security Section */}
          <section className="security mb-12 bg-gray-50 p-8 rounded-lg">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 text-blue-800">Tu seguridad es nuestra prioridad</h2>
              <p className="text-gray-600 mb-6">
                Implementamos medidas de seguridad nivel bancario para proteger tu información personal y financiera
                durante todo el proceso de solicitud.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🔐</span>
                  <span>Cifrado SSL de 256 bits</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🏛️</span>
                  <span>Controles de seguridad bancarios</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🔒</span>
                  <span>Protección de datos sensibles</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  <span>Privacidad garantizada</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer locale="es" />
    </>
  )
}
