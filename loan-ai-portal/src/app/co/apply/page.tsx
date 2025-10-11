import { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Solicitar Préstamo en Colombia – Aplicación Rápida',
  description:
    'Complete su solicitud de préstamo personal en Colombia en minutos. Proceso seguro y confidencial. Conecte con prestamistas licenciados por la SFC.',
  alternates: {
    canonical: 'https://loan-platform.com/co/apply',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ColombiaApplyPage() {
  return (
    <>
      <Navigation locale="es" />
      <main className="flex-1 bg-gradient-to-br from-blue-50 to-yellow-50">
        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-4xl">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-blue-900 mb-4">
                Solicite su Préstamo en Colombia
              </h1>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Complete el formulario a continuación para conectarse con prestamistas licenciados en Colombia.
                El proceso es rápido, seguro y sin compromiso inicial.
              </p>
            </div>

            {/* Security & Privacy Notice */}
            <Card className="mb-8 border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="text-lg text-green-900 flex items-center gap-2">
                  <span className="text-2xl">🔒</span>
                  Proceso Seguro y Confidencial
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-green-900/80">
                  <li>✓ Encriptación SSL de 256 bits para proteger su información</li>
                  <li>✓ Sus datos solo se comparten con prestamistas licenciados por la SFC</li>
                  <li>✓ No afecta su puntaje de crédito la consulta inicial</li>
                  <li>✓ Sin compromiso - compare ofertas sin obligación</li>
                </ul>
              </CardContent>
            </Card>

            {/* Application Form Container */}
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <CardTitle className="text-2xl">Formulario de Solicitud</CardTitle>
                <p className="text-blue-100 text-sm mt-2">
                  Complete la información requerida para recibir ofertas personalizadas
                </p>
              </CardHeader>
              <CardContent className="p-6">
                {/* Affiliate Form Script */}
                <div id="loan-application-form" className="min-h-[600px]">
                  <Script
                    src="https://www.doaff.net/publisherScript.js?c=jjp"
                    strategy="afterInteractive"
                  />
                  <noscript>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                      <p className="text-yellow-900 font-semibold mb-2">
                        JavaScript Requerido
                      </p>
                      <p className="text-yellow-800 text-sm">
                        Por favor habilite JavaScript en su navegador para completar la solicitud de préstamo.
                      </p>
                    </div>
                  </noscript>
                </div>
              </CardContent>
            </Card>

            {/* Disclosure */}
            <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6 text-sm text-gray-600">
              <h3 className="font-semibold text-gray-900 mb-3">Divulgación Importante</h3>
              <p className="mb-3">
                <strong>Divulgación de Afiliados:</strong> Loan AI Portal actúa como intermediario y puede recibir
                compensación de prestamistas con los que lo conectamos. Esta compensación no afecta las ofertas que
                recibe ni tiene costo adicional para usted.
              </p>
              <p className="mb-3">
                <strong>Ejemplo Representativo:</strong> Un préstamo de $10.000.000 COP a 36 meses con una tasa EA
                del 24% resultaría en pagos mensuales de aproximadamente $361.000 COP, con un costo total de
                $12.996.000 COP (intereses totales: $2.996.000 COP). Las tasas y términos reales varían según su
                perfil crediticio y el prestamista.
              </p>
              <p className="mb-3">
                <strong>Protección de Datos:</strong> Su información personal está protegida según la Ley 1581 de
                2012 (Protección de Datos Personales en Colombia). Al enviar este formulario, usted autoriza que sus
                datos sean compartidos con prestamistas licenciados para procesar su solicitud.
              </p>
              <p>
                Todos los prestamistas en nuestra red están licenciados y supervisados por la{' '}
                <a
                  href="https://www.superfinanciera.gov.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Superintendencia Financiera de Colombia
                </a>
                .
              </p>
            </div>

            {/* Additional Information */}
            <div className="mt-8 grid md:grid-cols-3 gap-4">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl mb-2">⚡</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Proceso Rápido</h3>
                  <p className="text-sm text-gray-600">Completar el formulario toma solo 3-5 minutos</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl mb-2">🏦</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Prestamistas Licenciados</h3>
                  <p className="text-sm text-gray-600">Solo trabajamos con entidades reguladas por la SFC</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl mb-2">💰</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Sin Costos Ocultos</h3>
                  <p className="text-sm text-gray-600">Toda la información de costos es transparente</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer locale="es" />
    </>
  )
}
