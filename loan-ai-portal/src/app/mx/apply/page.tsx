import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import MexicoNavigation from '@/components/mexico/mexico-navigation';
import MexicoFooter from '@/components/mexico/mexico-footer';
import MexicoDisclosure from '@/components/mexico/mexico-disclosure';

export const metadata: Metadata = {
  title: 'Solicitar Préstamo en México - Comparar Ofertas 2025',
  description: 'Complete su solicitud de préstamo en línea. Compare múltiples ofertas de prestamistas autorizados en México. Proceso rápido, seguro y transparente.',
  keywords: 'solicitar préstamo México, préstamo en línea, crédito rápido, préstamos personales',
  alternates: {
    canonical: 'https://www.loanscouter.com/mx/apply'
  },
  openGraph: {
    title: 'Solicitar Préstamo en México - Comparar Ofertas 2025',
    description: 'Complete su solicitud de préstamo en línea. Compare múltiples ofertas de prestamistas autorizados en México.',
    url: 'https://www.loanscouter.com/mx/apply',
    type: 'website',
    locale: 'es_MX'
  }
};

export default function ApplyPage() {
  return (
    <>
      <MexicoNavigation />
      
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Solicitar Préstamo en México
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Compare ofertas de múltiples prestamistas autorizados. Complete un formulario simple y reciba respuestas rápidas.
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
                  <p className="text-gray-600">Sus datos están protegidos con encriptación de nivel bancario</p>
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
                  <p className="text-gray-600">Reciba respuestas de prestamistas en minutos</p>
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

          {/* Application Form Container */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Complete Su Solicitud
            </h2>
            
            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-sm text-blue-900">
                  <p className="font-semibold mb-1">Importante:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Solo para residentes de México mayores de 18 años</li>
                    <li>Necesitará identificación oficial y comprobante de ingresos</li>
                    <li>El formulario toma aproximadamente 5 minutos</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Affiliate Form Script */}
            <div id="loan-application-form" className="min-h-[600px]">
              <Script
                id="affiliate-form-script"
                type="text/javascript"
                src="https://www.doaff.net/publisherScript.js?c=jjs"
                strategy="afterInteractive"
              />
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-lg p-8 text-white mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Cómo Funciona
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold">1</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Complete el Formulario</h3>
                <p className="text-blue-100">
                  Proporcione información básica sobre sus necesidades y situación financiera
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold">2</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Reciba Ofertas</h3>
                <p className="text-blue-100">
                  Los prestamistas autorizados revisan su solicitud y envían ofertas personalizadas
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold">3</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Elija la Mejor</h3>
                <p className="text-blue-100">
                  Compare términos, tasas y condiciones. Acepte la oferta que mejor le convenga
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Preguntas Frecuentes
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  ¿Afectará mi calificación crediticia?
                </h3>
                <p className="text-gray-600">
                  La solicitud inicial solo requiere una consulta suave que no afecta su historial crediticio. Solo si acepta una oferta y el prestamista realiza una verificación completa podría haber un impacto temporal.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  ¿Cuánto tiempo tarda la aprobación?
                </h3>
                <p className="text-gray-600">
                  Puede recibir respuestas de prestamistas en minutos. Sin embargo, la aprobación final y el desembolso pueden tomar de 24 horas a varios días, dependiendo del prestamista y la documentación requerida.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  ¿Qué documentos necesito?
                </h3>
                <p className="text-gray-600">
                  Típicamente necesitará: identificación oficial (INE/IFE), comprobante de domicilio, comprobantes de ingresos (recibos de nómina o estados de cuenta), y su CURP. Los requisitos específicos varían según el prestamista.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  ¿Hay costos por usar este servicio?
                </h3>
                <p className="text-gray-600">
                  No, nuestro servicio de comparación es completamente gratuito. Solo paga los términos acordados directamente con el prestamista que elija.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  ¿Los prestamistas están regulados?
                </h3>
                <p className="text-gray-600">
                  Sí, trabajamos únicamente con prestamistas autorizados y regulados por la Comisión Nacional Bancaria y de Valores (CNBV) y la Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros (CONDUSEF).
                </p>
              </div>
            </div>
          </div>

          {/* Security & Trust */}
          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <div className="flex items-center justify-center space-x-8 flex-wrap">
              <div className="flex items-center space-x-2 text-gray-700">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="font-semibold">SSL Seguro</span>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-700">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold">Datos Encriptados</span>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-700">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="font-semibold">Privacidad Protegida</span>
              </div>
            </div>
          </div>

          {/* Back to Hub */}
          <div className="text-center">
            <Link 
              href="/mx"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-semibold"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Volver al Hub de México</span>
            </Link>
          </div>

          {/* Disclosure */}
          <div className="mt-12">
            <MexicoDisclosure />
          </div>
        </div>
      </main>

      <MexicoFooter />
    </>
  );
}
