import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import ColombiaNavigation from '@/components/colombia/colombia-navigation'
import ColombiaFooter from '@/components/colombia/colombia-footer'

export const metadata: Metadata = {
  title: 'Educación Financiera – Préstamos Responsables en Colombia',
  description: 'Aprenda sobre préstamos responsables, derechos del consumidor financiero en Colombia, tasas de interés, y cómo gestionar deudas de manera efectiva. Guía completa de la Superintendencia Financiera.',
  alternates: {
    canonical: 'https://loansai.com/co/educacion-financiera',
  },
}

export default function EducacionFinancieraPage() {
  return (
    <>
      <ColombiaNavigation />

      <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
        {/* Breadcrumbs */}
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/co" className="hover:text-blue-600">
              Colombia
            </Link>
            <span>›</span>
            <span className="text-gray-900 font-medium">Educación Financiera</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Educación Financiera
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Todo lo que necesita saber sobre préstamos responsables, sus derechos 
              como consumidor financiero en Colombia y cómo tomar decisiones informadas.
            </p>
          </div>
        </section>

        {/* Understanding Loans */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Entendiendo los Préstamos Personales
            </h2>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>¿Qué es un Préstamo Personal?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Un préstamo personal es dinero que usted recibe de una entidad financiera 
                    (banco, cooperativa, o compañía de financiamiento) con el compromiso de 
                    devolverlo en cuotas periódicas más intereses. En Colombia, estos préstamos 
                    están regulados por la Superintendencia Financiera.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Componentes de un Préstamo:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span><strong>Capital:</strong> El monto que solicita prestado</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span><strong>Tasa de Interés (EA):</strong> El costo anual del préstamo expresado en porcentaje</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span><strong>Plazo:</strong> El período en que debe devolver el dinero (meses o años)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span><strong>Cuota:</strong> El pago periódico que incluye capital + intereses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span><strong>Costos Adicionales:</strong> Seguros, comisiones, gastos administrativos</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tipos de Préstamos en Colombia</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Crédito de Libre Inversión</h4>
                      <p className="text-sm text-gray-700">
                        Puede usar el dinero para cualquier propósito sin restricciones. Tasas típicas: 18% - 35% EA.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Crédito de Consumo</h4>
                      <p className="text-sm text-gray-700">
                        Específico para compra de bienes o servicios. Incluye créditos para vehículos, educación, viajes.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Microcrédito</h4>
                      <p className="text-sm text-gray-700">
                        Pequeños montos destinados a emprendimientos o trabajadores independientes. Hasta $25.000.000.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Crédito Hipotecario</h4>
                      <p className="text-sm text-gray-700">
                        Para compra de vivienda, garantizado con el inmueble. Plazos largos (5-30 años), tasas más bajas.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Consumer Rights */}
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Sus Derechos como Consumidor Financiero
            </h2>

            <Card className="border-blue-200">
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-6">
                  La Ley 1328 de 2009 (Estatuto del Consumidor Financiero) le otorga 
                  derechos fundamentales cuando solicita un préstamo en Colombia:
                </p>

                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                      <span>✓</span>
                      Derecho a la Información Clara
                    </h3>
                    <p className="text-sm text-gray-700">
                      El prestamista debe explicarle todos los términos, costos, tasas de interés, 
                      y condiciones ANTES de firmar. Debe recibir información en lenguaje sencillo 
                      y comprensible. Tiene derecho a hacer preguntas y recibir respuestas claras.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                      <span>✓</span>
                      Derecho de Retracto
                    </h3>
                    <p className="text-sm text-gray-700">
                      Tiene 5 días hábiles después de firmar para cancelar el préstamo SIN penalización, 
                      devolviendo el capital recibido. No le pueden cobrar intereses ni multas por ejercer 
                      este derecho.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                      <span>✓</span>
                      Derecho al Pago Anticipado
                    </h3>
                    <p className="text-sm text-gray-700">
                      Puede liquidar su préstamo antes del plazo acordado sin penalización. Solo debe pagar 
                      el capital restante más intereses causados hasta la fecha de pago. El prestamista debe 
                      calcular el saldo exacto a su solicitud.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                      <span>✓</span>
                      Protección Contra Tasas Abusivas
                    </h3>
                    <p className="text-sm text-gray-700">
                      Ningún prestamista puede cobrar más de la <strong>tasa de usura</strong> certificada 
                      mensualmente por la Superintendencia Financiera (actualmente alrededor de 48% EA). 
                      Si le cobran más, denuncie a la Superintendencia.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                      <span>✓</span>
                      Protección de Datos Personales
                    </h3>
                    <p className="text-sm text-gray-700">
                      Sus datos personales y financieros están protegidos por la Ley 1581 de 2012 
                      (Habeas Data). Tiene derecho a conocer qué información tienen sobre usted, 
                      actualizarla, rectificarla o eliminarla.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                      <span>✓</span>
                      Derecho a Presentar Quejas
                    </h3>
                    <p className="text-sm text-gray-700">
                      Si tiene problemas con un prestamista, primero presente una queja ante su 
                      Defensor del Consumidor Financiero. Si no obtiene respuesta satisfactoria, 
                      puede acudir a la Superintendencia Financiera o la Superintendencia de Industria 
                      y Comercio.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Responsible Borrowing */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Préstamos Responsables – Mejores Prácticas
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center gap-2">
                    <span>✓</span>
                    Antes de Solicitar
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">1.</span>
                      <span>Evalúe si REALMENTE necesita el préstamo o si puede ahorrar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">2.</span>
                      <span>Calcule cuánto puede pagar mensualmente sin afectar gastos básicos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">3.</span>
                      <span>Compare al menos 3 ofertas de diferentes prestamistas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">4.</span>
                      <span>Revise su puntaje crediticio en Datacrédito o TransUnion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">5.</span>
                      <span>Lea TODO el contrato antes de firmar</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-800 flex items-center gap-2">
                    <span>✗</span>
                    Evite Estas Trampas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">1.</span>
                      <span>Pedir más dinero del que necesita "por si acaso"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">2.</span>
                      <span>Ignorar el costo total del préstamo, solo mirar la cuota mensual</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">3.</span>
                      <span>Firmar sin leer o entender todos los términos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">4.</span>
                      <span>Aceptar la primera oferta sin comparar otras opciones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">5.</span>
                      <span>Pedir nuevos préstamos para pagar préstamos antiguos (refinanciación múltiple)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Understanding Interest Rates */}
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Entendiendo Tasas de Interés en Colombia
            </h2>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Tasa Efectiva Anual (EA)</h3>
                    <p className="text-gray-700 mb-3">
                      La tasa EA es el VERDADERO costo anual del préstamo, incluyendo capitalización 
                      de intereses. Es el número más importante para comparar préstamos.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>Ejemplo:</strong> Un préstamo de $5.000.000 a 24% EA por 12 meses:<br/>
                        • Cuota mensual: ~$469.000<br/>
                        • Total pagado: ~$5.628.000<br/>
                        • Intereses pagados: ~$628.000
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3">Tasa de Usura</h3>
                    <p className="text-gray-700">
                      Es el límite máximo de interés que puede cobrar un prestamista, certificado 
                      por la Superintendencia Financiera cada mes. Para créditos de consumo, 
                      actualmente es alrededor de <strong>48% EA</strong>. Cualquier tasa superior 
                      es ilegal.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3">Factores que Afectan su Tasa</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span><strong>Puntaje Crediticio:</strong> Mejor score = tasas más bajas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span><strong>Ingresos:</strong> Ingresos estables y verificables reducen el riesgo</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span><strong>Garantías:</strong> Ofrecer garantía puede bajar la tasa</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span><strong>Historial con el Banco:</strong> Clientes antiguos pueden obtener mejores tasas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span><strong>Monto y Plazo:</strong> Montos grandes y plazos cortos suelen tener mejores tasas</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Managing Debt */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Gestión de Deudas y Problemas de Pago
            </h2>

            <div className="space-y-6">
              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-800">
                    ¿Tiene Dificultades para Pagar?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Si enfrenta problemas para cumplir con sus pagos, NO ignore la situación. 
                    Tome acción inmediata:
                  </p>
                  <ol className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-orange-600">1.</span>
                      <span><strong>Contacte al prestamista INMEDIATAMENTE:</strong> Explique su situación. 
                      Muchos bancos ofrecen reestructuraciones, períodos de gracia o refinanciaciones.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-orange-600">2.</span>
                      <span><strong>Priorice sus deudas:</strong> Pague primero préstamos con tasas más altas 
                      y mantenga al día préstamos garantizados (hipoteca, vehículo).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-orange-600">3.</span>
                      <span><strong>Revise su presupuesto:</strong> Identifique gastos no esenciales que 
                      puede eliminar temporalmente.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-orange-600">4.</span>
                      <span><strong>Busque asesoría profesional:</strong> Consulte con un asesor financiero 
                      o las líneas de ayuda de la Superintendencia Financiera.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-orange-600">5.</span>
                      <span><strong>Evite el "gota a gota":</strong> NUNCA recurra a prestamistas ilegales 
                      que cobran tasas abusivas y usan métodos de cobro violentos.</span>
                    </li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Impacto en su Historial Crediticio</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Su comportamiento de pago se reporta a centrales de riesgo (Datacrédito, TransUnion, 
                    Midatacredito). Un buen historial crediticio es crucial para:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Obtener préstamos futuros con mejores tasas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Alquilar vivienda (muchos propietarios consultan Datacrédito)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Solicitar servicios públicos sin depósito</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Postularse a ciertos empleos (especialmente sector financiero)</span>
                    </li>
                  </ul>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Consejo:</strong> Consulte su reporte crediticio gratis una vez al año 
                      en Datacrédito.com o TransUnion Colombia. Verifique que toda la información sea 
                      correcta y reporte cualquier error.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Recursos y Enlaces Útiles
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-4">Entidades Reguladoras</h3>
                  <div className="space-y-3 text-sm">
                    <a href="https://www.superfinanciera.gov.co" target="_blank" rel="noopener noreferrer" 
                       className="flex items-center justify-between p-3 bg-blue-50 rounded hover:bg-blue-100">
                      <span>Superintendencia Financiera</span>
                      <span className="text-blue-600">→</span>
                    </a>
                    <a href="https://www.banrep.gov.co" target="_blank" rel="noopener noreferrer"
                       className="flex items-center justify-between p-3 bg-blue-50 rounded hover:bg-blue-100">
                      <span>Banco de la República</span>
                      <span className="text-blue-600">→</span>
                    </a>
                    <a href="https://www.sic.gov.co" target="_blank" rel="noopener noreferrer"
                       className="flex items-center justify-between p-3 bg-blue-50 rounded hover:bg-blue-100">
                      <span>Superintendencia de Industria y Comercio</span>
                      <span className="text-blue-600">→</span>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-4">Consulta de Historial Crediticio</h3>
                  <div className="space-y-3 text-sm">
                    <a href="https://www.datacredito.com" target="_blank" rel="noopener noreferrer"
                       className="flex items-center justify-between p-3 bg-green-50 rounded hover:bg-green-100">
                      <span>Datacrédito Experian</span>
                      <span className="text-green-600">→</span>
                    </a>
                    <a href="https://www.transunion.co" target="_blank" rel="noopener noreferrer"
                       className="flex items-center justify-between p-3 bg-green-50 rounded hover:bg-green-100">
                      <span>TransUnion Colombia</span>
                      <span className="text-green-600">→</span>
                    </a>
                    <a href="https://www.midatacredito.com" target="_blank" rel="noopener noreferrer"
                       className="flex items-center justify-between p-3 bg-green-50 rounded hover:bg-green-100">
                      <span>Midatacredito</span>
                      <span className="text-green-600">→</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para Comparar Préstamos Responsablemente?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Compare ofertas de prestamistas regulados y tome una decisión informada
            </p>
            <Link href="/co/apply">
              <Button size="lg" variant="secondary" className="bg-white text-blue-700 hover:bg-gray-100">
                Comparar Préstamos
              </Button>
            </Link>
            <p className="text-sm mt-4 opacity-75">
              Solo prestamistas regulados • Información transparente • Comparación objetiva
            </p>
          </div>
        </section>
      </main>

      <ColombiaFooter />
    </>
  )
}
