import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ColombiaNavigation from '@/components/colombia/colombia-navigation'
import ColombiaFooter from '@/components/colombia/colombia-footer'

export const metadata: Metadata = {
  title: 'Divulgaciones – Transparencia en Comparación de Préstamos',
  description: 'Divulgaciones completas sobre nuestro modelo de afiliados, metodología de ranking y ejemplo representativo de préstamos en Colombia según regulaciones de la Superintendencia Financiera.',
  alternates: {
    canonical: 'https://loansai.com/co/divulgaciones',
  },
}

export default function DivulgacionesPage() {
  return (
    <>
      <ColombiaNavigation />

      <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/co" className="hover:text-blue-600">Colombia</Link>
            <span>›</span>
            <span className="text-gray-900 font-medium">Divulgaciones</span>
          </nav>
        </div>

        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Divulgaciones y Transparencia
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              En cumplimiento con las regulaciones colombianas de protección al consumidor 
              financiero, aquí divulgamos completamente cómo funciona nuestro servicio.
            </p>

            <div className="space-y-8">
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle>1. Naturaleza del Servicio</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <h3 className="font-semibold mb-2 text-blue-900">IMPORTANTE: No Somos un Prestamista</h3>
                    <p className="text-sm">
                      <strong>Loan-Platform.com NO es una entidad financiera ni un prestamista.</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-sm mt-2">
                      <li>NO otorgamos préstamos directamente</li>
                      <li>NO tomamos decisiones de aprobación o rechazo de créditos</li>
                      <li>NO establecemos tasas de interés ni términos de préstamos</li>
                      <li>NO cobramos intereses ni recibimos pagos de cuotas</li>
                    </ul>
                  </div>
                  <p className="text-sm">
                    <strong>Somos una plataforma de comparación</strong> que conecta usuarios 
                    con prestamistas regulados por la Superintendencia Financiera de Colombia. 
                    Nuestro rol es proporcionar información comparativa objetiva para ayudarle 
                    a tomar decisiones informadas.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2. Modelo de Compensación (Afiliados)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="font-semibold mb-2">2.1 Cómo Ganamos Dinero</h3>
                    <p className="text-sm mb-3">
                      Loan-Platform.com es <strong>gratuito para usuarios finales</strong>. 
                      Nunca cobramos por comparar ofertas ni por enviar solicitudes.
                    </p>
                    <p className="text-sm">
                      Nuestros ingresos provienen de <strong>comisiones de afiliados</strong> 
                      pagadas por algunos prestamistas cuando los usuarios solicitan préstamos 
                      a través de nuestros enlaces. Estas comisiones son:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-sm mt-2">
                      <li>Pagadas por el prestamista, NO por el usuario</li>
                      <li>NO aumentan el costo ni la tasa de su préstamo</li>
                      <li>Típicamente entre $50.000 y $500.000 COP dependiendo del producto</li>
                      <li>Pagadas solo si se aprueba y desembolsa el préstamo</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded">
                    <h3 className="font-semibold mb-2 text-green-900">2.2 Su Costo NO Cambia</h3>
                    <p className="text-sm">
                      <strong>Obtener un préstamo a través de Loan-Platform.com cuesta exactamente 
                      lo mismo que ir directamente al prestamista.</strong> Las tasas, términos y 
                      condiciones son idénticos. El prestamista paga nuestra comisión como costo 
                      de marketing, no como costo transferido al cliente.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">2.3 No Todos los Prestamistas Pagan Comisión</h3>
                    <p className="text-sm">
                      Algunos prestamistas en nuestras comparaciones NO nos pagan comisión. 
                      Los incluimos porque son opciones relevantes y competitivas para nuestros 
                      usuarios. Nuestro objetivo es mostrar las mejores opciones, no solo las 
                      que nos generan ingresos.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. Metodología de Ranking y Comparación</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="font-semibold mb-2">3.1 Criterios de Ranking</h3>
                    <p className="text-sm mb-3">
                      Ordenamos y presentamos ofertas de préstamos basándonos en factores objetivos:
                    </p>
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-3 rounded">
                        <h4 className="font-semibold text-sm mb-1">Tasa de Interés Efectiva Anual (EA) - 40%</h4>
                        <p className="text-xs text-gray-600">
                          Tasas más bajas reciben mejor posición. Usamos la tasa EA para comparación 
                          precisa del costo real del préstamo.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <h4 className="font-semibold text-sm mb-1">Requisitos de Elegibilidad - 25%</h4>
                        <p className="text-xs text-gray-600">
                          Prestamistas con requisitos más accesibles (menor puntaje crediticio mínimo, 
                          ingresos mínimos más bajos) aparecen más arriba para usuarios con perfil básico.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <h4 className="font-semibold text-sm mb-1">Velocidad de Aprobación - 15%</h4>
                        <p className="text-xs text-gray-600">
                          Tiempo típico desde solicitud hasta decisión y desembolso. Más rápido = mejor posición.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <h4 className="font-semibold text-sm mb-1">Reputación y Cumplimiento - 15%</h4>
                        <p className="text-xs text-gray-600">
                          Basado en registro ante Superintendencia Financiera, años en el mercado, 
                          quejas ante autoridades regulatorias.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <h4 className="font-semibold text-sm mb-1">Flexibilidad de Términos - 5%</h4>
                        <p className="text-xs text-gray-600">
                          Opciones de plazo, posibilidad de pago anticipado sin penalización, 
                          refinanciamiento, períodos de gracia.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
                    <h3 className="font-semibold mb-2">3.2 Independencia de Comisiones</h3>
                    <p className="text-sm">
                      <strong>Las comisiones de afiliados NO influyen en nuestro ranking.</strong> 
                      Un prestamista que nos paga comisión alta no recibe mejor posición que uno 
                      que paga comisión baja o ninguna. El ranking está determinado únicamente por 
                      los criterios objetivos descritos arriba.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">3.3 Personalización por Perfil</h3>
                    <p className="text-sm">
                      El ranking puede ajustarse según la información que proporciona:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-sm mt-2">
                      <li>Ubicación geográfica (algunos prestamistas solo operan en ciertas ciudades)</li>
                      <li>Monto solicitado (diferentes prestamistas para diferentes rangos)</li>
                      <li>Historial crediticio aproximado</li>
                      <li>Nivel de ingresos</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>4. Ejemplo Representativo de Préstamo</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                  <p className="text-sm">
                    Según las regulaciones de la Superintendencia Financiera, proporcionamos 
                    este ejemplo representativo de costos de préstamo:
                  </p>

                  <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                    <h3 className="font-semibold text-lg mb-4 text-blue-900">
                      Ejemplo: Préstamo Personal de $5.000.000 COP
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600 text-xs mb-1">Monto del Préstamo</p>
                        <p className="font-semibold text-lg">$5.000.000 COP</p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-xs mb-1">Tasa de Interés EA</p>
                        <p className="font-semibold text-lg">24,00%</p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-xs mb-1">Plazo</p>
                        <p className="font-semibold text-lg">24 meses</p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-xs mb-1">Cuota Mensual</p>
                        <p className="font-semibold text-lg text-blue-600">$261.000 COP</p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-xs mb-1">Total a Pagar</p>
                        <p className="font-semibold text-lg">$6.264.000 COP</p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-xs mb-1">Intereses Totales</p>
                        <p className="font-semibold text-lg">$1.264.000 COP</p>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-blue-200">
                      <p className="text-xs text-gray-600">
                        <strong>Costos Adicionales Típicos:</strong> Seguro de vida ($15.000/mes), 
                        Comisión administrativa ($150.000 única), Estudio de crédito ($50.000 única).
                      </p>
                      <p className="text-xs text-gray-600 mt-2">
                        <strong>Costo Total con Adicionales:</strong> Aproximadamente $6.664.000 COP 
                        (incluye capital + intereses + seguros + comisiones).
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 mt-4">
                    <strong>Nota:</strong> Este es un ejemplo ilustrativo. Las tasas reales varían 
                    según su perfil crediticio, prestamista seleccionado, y condiciones de mercado. 
                    Siempre revise la tabla de amortización completa antes de aceptar un préstamo.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>5. Limitaciones de Nuestro Servicio</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-gray-700">
                  <p className="text-sm font-semibold">
                    Es importante que entienda lo que nuestro servicio NO hace:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>
                      <strong>No cubrimos todos los prestamistas:</strong> Mostramos una selección 
                      representativa de prestamistas regulados, pero no necesariamente todos los 
                      disponibles en Colombia.
                    </li>
                    <li>
                      <strong>No garantizamos aprobación:</strong> El envío de una solicitud no 
                      garantiza que será aprobado. Los prestamistas evalúan independientemente.
                    </li>
                    <li>
                      <strong>No verificamos elegibilidad previa:</strong> No hacemos consultas 
                      crediticias preliminares. Su elegibilidad se determina cuando el prestamista 
                      revisa su solicitud completa.
                    </li>
                    <li>
                      <strong>No asesoramos financieramente:</strong> Proporcionamos información 
                      educativa general, no asesoría financiera personalizada. Consulte un asesor 
                      profesional para su situación específica.
                    </li>
                    <li>
                      <strong>No controlamos las decisiones de los prestamistas:</strong> No 
                      podemos influir en tasas ofrecidas, términos, ni decisiones de aprobación.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>6. Verificación de Prestamistas</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  <p className="text-sm mb-3">
                    <strong>Todos los prestamistas presentados en Loan-Platform.com deben cumplir 
                    estos requisitos:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>Estar regulados y vigilados por la Superintendencia Financiera de Colombia</li>
                    <li>Tener licencia vigente para operar como entidad crediticia</li>
                    <li>Cumplir con la tasa de usura certificada por el Banco de la República</li>
                    <li>Respetar las leyes de protección al consumidor financiero (Ley 1328/2009)</li>
                    <li>Reportar a centrales de riesgo autorizadas (Datacrédito, TransUnion, etc.)</li>
                  </ul>
                  <p className="text-sm mt-4 bg-green-50 p-3 rounded">
                    Verificamos el estado regulatorio de cada prestamista antes de incluirlo. 
                    Si encuentra un prestamista que no cumple estas condiciones, repórtelo a 
                    support@loansai.com.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>7. Sus Derechos como Usuario</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  <p className="text-sm mb-3">Como usuario de Loan-Platform.com, usted tiene derecho a:</p>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>Información clara, precisa y oportuna sobre ofertas de préstamos</li>
                    <li>Comparar múltiples opciones sin costo</li>
                    <li>Conocer cómo funciona nuestro modelo de compensación</li>
                    <li>Entender nuestra metodología de ranking</li>
                    <li>Retirar su consentimiento para compartir datos en cualquier momento</li>
                    <li>Presentar quejas o sugerencias sobre nuestro servicio</li>
                    <li>Solicitar eliminación de sus datos personales</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>8. Quejas y Recursos</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">8.1 Quejas sobre Nuestro Servicio</h3>
                      <p className="text-sm">
                        Si tiene quejas sobre Loan-Platform.com: <strong>support@loansai.com</strong>
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">8.2 Quejas sobre Prestamistas</h3>
                      <p className="text-sm mb-2">
                        Si tiene problemas con un prestamista, siga estos pasos:
                      </p>
                      <ol className="list-decimal pl-6 space-y-1 text-sm">
                        <li>Contacte primero al Defensor del Consumidor Financiero del prestamista</li>
                        <li>Si no obtiene respuesta en 15 días, acuda a la Superintendencia Financiera</li>
                        <li>También puede presentar queja ante la Superintendencia de Industria y Comercio</li>
                      </ol>
                    </div>
                    <div className="bg-blue-50 p-4 rounded">
                      <h3 className="font-semibold mb-2">Recursos Adicionales</h3>
                      <ul className="space-y-1 text-sm">
                        <li>• Superintendencia Financiera: <a href="https://www.superfinanciera.gov.co" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">www.superfinanciera.gov.co</a></li>
                        <li>• Superintendencia SIC: <a href="https://www.sic.gov.co" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">www.sic.gov.co</a></li>
                        <li>• Defensoría del Consumidor: Línea nacional 018000 910165</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>9. Actualizaciones a Esta Divulgación</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  <p className="text-sm">
                    Podemos actualizar estas divulgaciones ocasionalmente para reflejar cambios 
                    en nuestras prácticas o regulaciones. Cambios significativos se notificarán 
                    mediante aviso prominente en el sitio. La fecha de última actualización se 
                    muestra al inicio de este documento.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>10. Contacto</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  <p className="text-sm mb-3">
                    Para preguntas sobre estas divulgaciones o nuestro servicio:
                  </p>
                  <div className="bg-blue-50 p-4 rounded space-y-2 text-sm">
                    <p><strong>Email:</strong> transparency@loansai.com</p>
                    <p><strong>Soporte General:</strong> support@loansai.com</p>
                    <p><strong>Razón Social:</strong> Maloni s.r.o.</p>
                    <p><strong>Sitio Web:</strong> https://loansai.com/co</p>
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
