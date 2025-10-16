import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ColombiaNavigation from '@/components/colombia/colombia-navigation'
import ColombiaFooter from '@/components/colombia/colombia-footer'

export const metadata: Metadata = {
  title: 'Términos de Servicio – Loan-Platform.com Colombia',
  description: 'Términos y condiciones de uso de la plataforma de comparación de préstamos Loan-Platform.com en Colombia. Derechos y obligaciones de los usuarios.',
  alternates: {
    canonical: 'https://loansai.com/co/terminos',
  },
}

export default function TerminosPage() {
  const lastUpdated = 'Octubre 2025'

  return (
    <>
      <ColombiaNavigation />

      <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/co" className="hover:text-blue-600">Colombia</Link>
            <span>›</span>
            <span className="text-gray-900 font-medium">Términos de Servicio</span>
          </nav>
        </div>

        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Términos de Servicio</h1>
            <p className="text-gray-600 mb-8">Última actualización: {lastUpdated}</p>

            <div className="prose max-w-none space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>1. Aceptación de Términos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-gray-700">
                  <p>
                    Al acceder y usar Loan-Platform.com (el "Sitio"), usted acepta estar sujeto 
                    a estos Términos de Servicio, todas las leyes y regulaciones aplicables de Colombia, 
                    y acepta que es responsable del cumplimiento de todas las leyes locales aplicables.
                  </p>
                  <p className="text-sm bg-yellow-50 p-3 rounded">
                    <strong>Si no está de acuerdo con alguno de estos términos, no use este sitio.</strong>
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2. Descripción del Servicio</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-gray-700">
                  <p><strong>Loan-Platform.com es una plataforma de comparación de préstamos</strong>, no un prestamista ni una entidad financiera.</p>
                  <p>Nuestros servicios incluyen:</p>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>Comparación de ofertas de préstamos de múltiples prestamistas regulados</li>
                    <li>Conexión con entidades financieras vigiladas por la Superintendencia Financiera</li>
                    <li>Información educativa sobre préstamos y finanzas personales</li>
                    <li>Herramientas de cálculo y comparación</li>
                  </ul>
                  <div className="bg-red-50 p-4 rounded mt-4">
                    <p className="text-sm font-semibold">IMPORTANTE:</p>
                    <ul className="list-disc pl-6 space-y-1 text-sm mt-2">
                      <li>NO otorgamos préstamos directamente</li>
                      <li>NO tomamos decisiones de aprobación o rechazo</li>
                      <li>NO garantizamos aprobación de préstamos</li>
                      <li>NO establecemos tasas de interés ni términos de préstamos</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. Elegibilidad</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  <p className="text-sm mb-3">Para usar nuestros servicios, usted debe:</p>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>Tener al menos 18 años de edad</li>
                    <li>Ser residente legal de Colombia</li>
                    <li>Tener capacidad legal para celebrar contratos vinculantes</li>
                    <li>Proporcionar información precisa y veraz</li>
                    <li>Cumplir con todos estos términos</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>4. Registro y Cuenta de Usuario</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-gray-700">
                  <p className="text-sm">Cuando crea una cuenta o envía una solicitud, usted se compromete a:</p>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>Proporcionar información precisa, actual y completa</li>
                    <li>Mantener la confidencialidad de sus credenciales de acceso</li>
                    <li>Notificarnos inmediatamente sobre cualquier uso no autorizado</li>
                    <li>Actualizar su información cuando cambie</li>
                    <li>Ser responsable de toda actividad en su cuenta</li>
                  </ul>
                  <p className="text-sm bg-blue-50 p-3 rounded mt-3">
                    <strong>Nos reservamos el derecho</strong> de suspender o cancelar cuentas 
                    que proporcionen información falsa o violen estos términos.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>5. Uso Aceptable</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  <p className="text-sm mb-3">Usted acepta NO usar el Sitio para:</p>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>Proporcionar información falsa, engañosa o fraudulenta</li>
                    <li>Suplantar identidad de otra persona</li>
                    <li>Violar leyes colombianas o internacionales</li>
                    <li>Transmitir virus, malware o código malicioso</li>
                    <li>Hacer scraping, crawling automatizado o extracción de datos</li>
                    <li>Interferir con la operación del Sitio</li>
                    <li>Intentar acceder sin autorización a sistemas o datos</li>
                    <li>Acosar, amenazar o dañar a otros usuarios</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>6. Proceso de Solicitud de Préstamo</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-gray-700">
                  <div>
                    <h3 className="font-semibold mb-2">6.1 Envío de Solicitud</h3>
                    <p className="text-sm">
                      Al enviar una solicitud a través de nuestro Sitio, usted autoriza 
                      explícitamente que compartamos su información con prestamistas regulados 
                      por la Superintendencia Financiera que puedan ofrecerle productos financieros.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">6.2 No Garantía de Aprobación</h3>
                    <p className="text-sm">
                      No garantizamos que será aprobado para un préstamo ni las condiciones 
                      específicas que recibirá. Los prestamistas toman decisiones independientes 
                      basadas en sus criterios de crédito.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">6.3 Consulta de Historial Crediticio</h3>
                    <p className="text-sm">
                      Los prestamistas pueden consultar su historial crediticio en centrales 
                      de riesgo (Datacrédito, TransUnion, etc.). Esto puede generar una consulta 
                      en su reporte crediticio.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>7. Divulgaciones Financieras</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-gray-700">
                  <div>
                    <h3 className="font-semibold mb-2">7.1 Modelo de Afiliados</h3>
                    <p className="text-sm">
                      Loan-Platform.com puede recibir comisiones de prestamistas cuando los 
                      usuarios solicitan préstamos a través de nuestro Sitio. Estas comisiones 
                      NO afectan el costo de su préstamo ni nuestras comparaciones.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">7.2 Gratuidad para Usuarios</h3>
                    <p className="text-sm">
                      Nuestro servicio de comparación es completamente <strong>GRATUITO</strong> para 
                      usuarios finales. Nunca cobramos por comparar ofertas ni por enviar solicitudes.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">7.3 Independencia de Comparaciones</h3>
                    <p className="text-sm">
                      Nuestras comparaciones y rankings se basan en datos objetivos (tasas, términos, 
                      requisitos) y no están influenciados por comisiones de afiliados.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>8. Propiedad Intelectual</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  <p className="text-sm mb-3">
                    Todo el contenido del Sitio (texto, gráficos, logos, imágenes, software) 
                    es propiedad de Maloni s.r.o. o sus licenciantes y está protegido por 
                    leyes de propiedad intelectual colombianas e internacionales.
                  </p>
                  <p className="text-sm">
                    <strong>Licencia limitada:</strong> Le otorgamos una licencia limitada, no exclusiva, 
                    no transferible para usar el Sitio solo para fines personales y no comerciales.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>9. Limitación de Responsabilidad</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-gray-700">
                  <p className="text-sm font-semibold">EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY COLOMBIANA:</p>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>
                      <strong>Precisión de Información:</strong> Nos esforzamos por mantener 
                      información precisa, pero no garantizamos que toda la información sea exacta, 
                      completa o actual.
                    </li>
                    <li>
                      <strong>Decisiones de Préstamo:</strong> No somos responsables por decisiones 
                      de aprobación, rechazo o términos ofrecidos por prestamistas.
                    </li>
                    <li>
                      <strong>Daños Indirectos:</strong> No seremos responsables por daños indirectos, 
                      incidentales, especiales o consecuentes resultantes del uso del Sitio.
                    </li>
                    <li>
                      <strong>Conducta de Terceros:</strong> No somos responsables por las acciones, 
                      errores u omisiones de prestamistas terceros.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>10. Indemnización</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  <p className="text-sm">
                    Usted acepta indemnizar y eximir de responsabilidad a Loan-Platform.com, 
                    Maloni s.r.o., y sus afiliados de cualquier reclamo, demanda, pérdida o 
                    daño que surja de:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm mt-3">
                    <li>Su uso del Sitio</li>
                    <li>Su violación de estos Términos</li>
                    <li>Su violación de leyes o derechos de terceros</li>
                    <li>Información falsa que proporcione</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>11. Modificaciones al Servicio y Términos</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  <p className="text-sm mb-3">
                    Nos reservamos el derecho de modificar o discontinuar el Sitio o estos 
                    Términos en cualquier momento. Los cambios significativos se notificarán 
                    mediante aviso en el Sitio o por correo electrónico.
                  </p>
                  <p className="text-sm">
                    <strong>Su uso continuado del Sitio después de cambios constituye aceptación 
                    de los nuevos términos.</strong>
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>12. Ley Aplicable y Jurisdicción</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  <p className="text-sm">
                    Estos Términos se rigen por las leyes de la República de Colombia. 
                    Cualquier disputa relacionada con estos Términos se resolverá en los 
                    tribunales competentes de Colombia.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>13. Terminación</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  <p className="text-sm">
                    Podemos terminar o suspender su acceso al Sitio inmediatamente, sin 
                    previo aviso, por cualquier motivo, incluyendo violación de estos Términos.
                  </p>
                  <p className="text-sm mt-3">
                    Usted puede dejar de usar el Sitio en cualquier momento. Ciertas 
                    secciones de estos Términos sobrevivirán a la terminación.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>14. Disposiciones Generales</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li><strong>Acuerdo Completo:</strong> Estos Términos constituyen el acuerdo completo entre usted y Loan-Platform.com</li>
                    <li><strong>Divisibilidad:</strong> Si alguna disposición es inválida, las demás permanecen en vigor</li>
                    <li><strong>Renuncia:</strong> La falta de ejercicio de un derecho no constituye renuncia</li>
                    <li><strong>Asignación:</strong> No puede transferir estos Términos sin nuestro consentimiento</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>15. Contacto</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  <p className="text-sm mb-3">Para preguntas sobre estos Términos:</p>
                  <div className="bg-blue-50 p-4 rounded space-y-2 text-sm">
                    <p><strong>Email:</strong> legal@loansai.com</p>
                    <p><strong>Sitio Web:</strong> https://loansai.com/co/contact</p>
                    <p><strong>Razón Social:</strong> Maloni s.r.o.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <ColombiaFooter />
    </>
  )
}
