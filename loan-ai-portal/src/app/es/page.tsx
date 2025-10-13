import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ApplicationFormScript from '@/components/application-form-script'
import HowToApplySchema from '@/components/howto-schema'
import TransparencyBanner from '@/components/compliance/transparency-banner'
import LeadGenDisclosure from '@/components/compliance/lead-gen-disclosure'
import { generatePageMetadata, homeSEOEs } from '@/lib/seo'
import { CollectionPageSchema } from '@/components/seo/collection-page-schema'

export const metadata = generatePageMetadata(homeSEOEs)

export default function SpanishHomePage() {
  const metricsEvidence = (label = 'Fuente') => (
    <sup className="ml-1 text-blue-600">
      <a href="/docs/performance-metrics-2025" target="_blank" rel="noopener noreferrer">
        [{label}]
      </a>
    </sup>
  )

  const borrowerOutcomesEvidence = (label = 'Metodología') => (
    <sup className="ml-1 text-blue-600">
      <a href="/disclosures/borrower-outcomes" target="_blank" rel="noopener noreferrer">
        [{label}]
      </a>
    </sup>
  )

  return (
    <>
      <CollectionPageSchema
        name="Préstamos Personales en España - Todas las Comunidades"
        description="Compara préstamos personales en todas las comunidades autónomas de España. Prestamistas regulados, tasas competitivas."
        url="https://loansai.com/es"
        breadcrumbs={[
          { name: 'Inicio', url: 'https://loansai.com' },
          { name: 'España', url: 'https://loansai.com/es' }
        ]}
      />
      <HowToApplySchema />
      <Navigation locale="es" />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <section className="hero text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
              Préstamos personales rápidos con coincidencia de IA
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-4 font-medium">
              Encuentra el préstamo perfecto en minutos. Nuestra tecnología analiza tu perfil y te conecta con
              prestamistas confiables en los 50 estados.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
              Solicita desde $1,000 hasta $100,000, recibe múltiples ofertas y obtén financiamiento tan pronto como el
              mismo día hábil. Sin costo, seguro y diseñado para todo tipo de crédito (580+).
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base text-gray-600 mb-8">
              <span className="flex items-center gap-1" aria-label="Tiempo de aprobación rápido">
                <span className="text-2xl">⚡</span>
                <strong>Solicitud de 2 minutos</strong>
              </span>
              <span className="flex items-center gap-1" aria-label="Rango de montos de préstamo">
                <span className="text-2xl">💰</span>
                <strong>$1,000 - $100,000</strong>
              </span>
              <span className="flex items-center gap-1" aria-label="Aptos todos los puntajes de crédito">
                <span className="text-2xl">📊</span>
                <strong>Todo tipo de crédito</strong>
              </span>
              <span className="flex items-center gap-1" aria-label="Seguridad bancaria">
                <span className="text-2xl">🔒</span>
                <strong>Seguridad nivel banco</strong>
              </span>
              <span className="flex items-center gap-1" aria-label="Red de prestamistas">
                <span className="text-2xl">🤝</span>
                <strong>100+ prestamistas</strong>
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">
                  2M+{metricsEvidence()}
                </div>
                <div>Solicitantes aprobados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">
                  $5B+{metricsEvidence()}
                </div>
                <div>En préstamos financiados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">
                  4.8★{metricsEvidence()}{borrowerOutcomesEvidence()}
                </div>
                <div>Calificación promedio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50</div>
                <div>Estados cubiertos</div>
              </div>
            </div>

            <Link href="/apply" className="inline-block">
              <Button className="bg-blue-600 hover:bg-blue-700" size="lg">
                Solicitar ahora
              </Button>
            </Link>
            <LeadGenDisclosure locale="es" className="mt-2 text-sm text-gray-600" />
          </section>

          <TransparencyBanner locale="es" />

          <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
              Cómo funciona nuestra plataforma impulsada por IA
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-5xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">1. Solicitud simple</h3>
                <p className="text-gray-700">
                  Completa nuestro formulario en línea seguro en menos de dos minutos. Solo necesitas información básica
                  de ingresos, empleo y monto deseado.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">2. Coincidencia inteligente</h3>
                <p className="text-gray-700">
                  Nuestra IA analiza más de 200 puntos de datos para identificar los prestamistas que mejor se ajustan a
                  tu perfil y ofrecen tasas competitivas.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💵</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">3. Recibe tu dinero</h3>
                <p className="text-gray-700">
                  Revisa ofertas personalizadas, elige la mejor opción y recibe los fondos tan pronto como el siguiente
                  día hábil mediante depósito directo.
                </p>
              </div>
            </div>
          </section>

          <section className="features mb-12" aria-labelledby="caracteristicas">
            <h2 id="caracteristicas" className="text-3xl font-bold text-center mb-8 text-blue-900">
              Ventajas del Portal de Préstamos IA
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <span aria-hidden="true" className="text-3xl">
                      ⚡
                    </span>
                    Aprobación veloz
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Obtén preaprobación inmediata y resultados claros sin impactar tu puntaje de crédito. Miles de
                    clientes reciben ofertas en menos de 2 minutos.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <span aria-hidden="true" className="text-3xl">
                      🤖
                    </span>
                    Coincidencia precisa
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Nuestra IA compara tu perfil con 100+ prestamistas y destaca las opciones con mejores tasas, pagos
                    mensuales accesibles y términos transparentes.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <span aria-hidden="true" className="text-3xl">
                      🛡️
                    </span>
                    Plataforma segura
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Protección cifrada de nivel bancario, políticas de privacidad auditadas y verificación de
                    prestamistas autorizados en cada estado.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="application-section max-w-4xl mx-auto mb-12" aria-labelledby="solicitud">
            <h2 id="solicitud" className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-900">
              Comienza tu solicitud gratuita en 2 minutos
            </h2>
            <p className="text-center text-gray-700 mb-4 max-w-3xl mx-auto text-lg">
              Sin costo ni obligación. Puedes comparar ofertas de múltiples prestamistas y elegir el préstamo más
              conveniente para tus metas financieras.
            </p>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              No afecta tu puntaje de crédito revisar tus opciones. Miles de usuarios reciben financiamiento en menos de
              24 horas después de la aprobación final.
            </p>
            <ApplicationFormScript />
            <p className="mt-4 text-xs text-gray-500 text-center max-w-3xl mx-auto">
              Loan AI Portal envía tu solicitud de forma segura a través de{' '}
              <a href="https://www.roundsky.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">RoundSky</a>,
              nuestro socio tecnológico para la distribución de clientes potenciales. Este tratamiento está cubierto por nuestro{' '}
              <Link href="/privacy#roundsky-data-processing" className="text-blue-600 hover:text-blue-800 font-semibold">
                Acuerdo de Tratamiento de Datos (DPA)
              </Link>,
              que establece las obligaciones de protección de datos que RoundSky debe cumplir.
            </p>
          </section>

          <section className="mb-12 bg-white rounded-lg shadow-md p-8" aria-labelledby="tipos-prestamo">
            <h2 id="tipos-prestamo" className="text-3xl font-bold text-center mb-8 text-blue-900">
              Soluciones de préstamo para cada necesidad
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">💳 Consolidación de deudas</h3>
                <p className="text-gray-600 text-sm">
                  Combina préstamos y tarjetas de crédito en un solo pago con tasas más bajas y plazos claros.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">🏠 Mejora del hogar</h3>
                <p className="text-gray-600 text-sm">
                  Financia renovaciones, reparaciones o proyectos especiales sin requerir garantía hipotecaria.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">🚨 Emergencias</h3>
                <p className="text-gray-600 text-sm">
                  Accede a efectivo rápido para gastos médicos, reparaciones de vehículo o situaciones imprevistas.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">🎓 Educación y carreras</h3>
                <p className="text-gray-600 text-sm">
                  Invierte en cursos, certificaciones o programas profesionales con pagos flexibles.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">💍 Eventos y bodas</h3>
                <p className="text-gray-600 text-sm">
                  Financia momentos importantes sin comprometer tus ahorros y mantén pagos mensuales accesibles.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">🚗 Negocios y autónomos</h3>
                <p className="text-gray-600 text-sm">
                  Opciones diseñadas para trabajadores independientes y emprendedores con ingresos variables.
                </p>
              </div>
            </div>
          </section>

          <section className="faq mb-12" aria-labelledby="faq">
            <h2 id="faq" className="text-3xl font-bold text-center mb-6 text-blue-900">
              Preguntas frecuentes sobre préstamos personales
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <details className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <summary className="font-semibold text-lg cursor-pointer text-blue-900">
                  ¿La solicitud afecta mi puntaje de crédito?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  No. La evaluación inicial usa una consulta suave que no impacta tu puntaje. Solo si aceptas una oferta y
                  el prestamista procede con verificación final podría realizarse una consulta dura.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <summary className="font-semibold text-lg cursor-pointer text-blue-900">
                  ¿Qué tan rápido puedo recibir los fondos?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Muchos prestamistas depositan el dinero el mismo día hábil si completas la solicitud antes del mediodía.
                  La mayoría transfiere los fondos en 24-48 horas.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <summary className="font-semibold text-lg cursor-pointer text-blue-900">
                  ¿Aceptan solicitantes con historial de crédito limitado?
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Sí. Trabajamos con prestamistas especializados en crédito medio y bajo. Presenta ingresos estables y
                  documentos básicos para aumentar tus posibilidades de aprobación.
                </p>
              </details>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/faq"
                className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Ver todas las preguntas
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer locale="es" />
    </>
  )
}
