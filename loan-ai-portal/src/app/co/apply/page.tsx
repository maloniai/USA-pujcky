import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import ColombiaNavigation from '@/components/colombia/colombia-navigation';
import ColombiaFooter from '@/components/colombia/colombia-footer';
import ColombiaDisclosure from '@/components/colombia/colombia-disclosure';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Solicitar Préstamo en Colombia - Comparar Ofertas 2025',
  description: 'Complete su solicitud de préstamo en línea. Compare múltiples ofertas de prestamistas autorizados en Colombia. Proceso rápido, seguro y transparente.',
  keywords: 'solicitar préstamo Colombia, préstamo en línea, crédito rápido, préstamos personales',
  alternates: {
    canonical: 'https://loansai.com/co/apply'
  },
  openGraph: {
    title: 'Solicitar Préstamo en Colombia - Comparar Ofertas 2025',
    description: 'Complete su solicitud de préstamo en línea. Compare múltiples ofertas de prestamistas autorizados en Colombia.',
    url: 'https://loansai.com/co/apply',
    type: 'website',
    locale: 'es_CO'
  }
};

export default function ApplyPage() {
  return (
    <>
      <ColombiaNavigation />
      
      <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Solicitar Préstamo en Colombia
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Compare ofertas de más de 50 prestamistas autorizados por la Superintendencia Financiera. 
              Complete un formulario simple y reciba respuestas rápidas.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              ¿Por Qué Usar Nuestro Servicio?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Seguro y Confidencial</h3>
                  <p className="text-gray-600">Sus datos están protegidos con encriptación de nivel bancario y cumplimiento de la Ley 1581 de 2012</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Respuesta Rápida</h3>
                  <p className="text-gray-600">Reciba respuestas de prestamistas regulados en 24-48 horas</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Sin Obligación</h3>
                  <p className="text-gray-600">Compare ofertas sin compromiso de aceptarlas</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Totalmente Gratis</h3>
                  <p className="text-gray-600">Nuestro servicio de comparación es 100% gratuito</p>
                </div>
              </div>
            </div>
          </div>

          {/* Application Form Placeholder */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Complete su Solicitud
            </h2>
            
            <div className="text-center py-12">
              <div className="mb-8">
                <svg className="w-24 h-24 mx-auto text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Formulario de Solicitud
                </h3>
                <p className="text-gray-600 max-w-md mx-auto mb-6">
                  Complete este formulario simple para recibir ofertas personalizadas de múltiples 
                  prestamistas regulados en Colombia.
                </p>
              </div>

              {/* What You'll Need */}
              <div className="bg-blue-50 rounded-lg p-6 mb-8 text-left max-w-2xl mx-auto">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-blue-600">📋</span>
                  Lo que necesitará:
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Cédula de ciudadanía colombiana</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Información de empleo e ingresos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Dirección de residencia actual</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Información bancaria (para desembolso)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Monto del préstamo deseado (entre $1,000,000 y $150,000,000 COP)</span>
                  </li>
                </ul>
              </div>

              {/* CTA Button */}
              <Link href="/co/apply/form">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-10 py-6">
                  <span className="flex items-center gap-2">
                    <span>📝</span>
                    Comenzar Solicitud
                  </span>
                </Button>
              </Link>
              
              <p className="text-sm text-gray-500 mt-4">
                Tiempo estimado: 3-5 minutos
              </p>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Cómo Funciona el Proceso
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Complete el Formulario</h3>
                  <p className="text-gray-600">Proporcione información básica sobre su situación financiera y el préstamo que necesita.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Comparamos Ofertas</h3>
                  <p className="text-gray-600">Enviamos su solicitud a prestamistas regulados que cumplen con sus criterios. Ellos evalúan su solicitud.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Reciba Ofertas</h3>
                  <p className="text-gray-600">Obtenga ofertas personalizadas con tasas de interés, plazos y condiciones. Compare y elija la mejor para usted.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Complete la Aprobación</h3>
                  <p className="text-gray-600">Proporcione documentos al prestamista elegido para finalizar el proceso. El dinero se deposita en su cuenta.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Information */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span>⚠️</span>
              Información Importante
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">•</span>
                <span>Todos los prestamistas están regulados por la Superintendencia Financiera de Colombia</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">•</span>
                <span>Las tasas de interés no pueden exceder la tasa de usura (48% EA)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">•</span>
                <span>Tiene 5 días hábiles para cancelar el préstamo sin costo (periodo de reflexión)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">•</span>
                <span>Su información está protegida según la Ley 1581 de 2012 de Protección de Datos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">•</span>
                <span>Puede presentar quejas ante la Superintendencia Financiera si lo necesita</span>
              </li>
            </ul>
          </div>

          {/* Disclosure */}
          <div className="mb-8">
            <ColombiaDisclosure />
          </div>

          {/* Back to Home */}
          <div className="text-center">
            <Link href="/co" className="text-blue-600 hover:text-blue-700 font-semibold">
              ← Volver al Inicio
            </Link>
          </div>
        </div>
      </main>

      <ColombiaFooter />

      {/* Schema for ApplicationForm */}
      <Script id="application-schema" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Solicitar Préstamo en Colombia',
          description: 'Complete su solicitud de préstamo en línea y compare ofertas de prestamistas regulados',
          url: 'https://loansai.com/co/apply',
          isPartOf: {
            '@type': 'WebSite',
            name: 'LoansAI Colombia',
            url: 'https://loansai.com/co'
          }
        })}
      </Script>
    </>
  );
}
