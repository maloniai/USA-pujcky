import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import ColombiaNavigation from '@/components/colombia/colombia-navigation'
import ColombiaFooter from '@/components/colombia/colombia-footer'

export const metadata: Metadata = {
  title: 'Sobre Nosotros – Loan-Platform.com Colombia',
  description: 'Conozca cómo Loan-Platform.com ayuda a los colombianos a comparar préstamos de prestamistas regulados por la Superintendencia Financiera. Transparencia, confianza y comparación objetiva.',
  alternates: {
    canonical: 'https://loansai.com/co/sobre-nosotros',
  },
}

export default function SobreNosotrosPage() {
  const currentYear = new Date().getFullYear()

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
            <span className="text-gray-900 font-medium">Sobre Nosotros</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre Loan-Platform.com
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Ayudamos a los colombianos a tomar decisiones informadas sobre préstamos 
              comparando ofertas de prestamistas regulados por la Superintendencia Financiera.
            </p>
            <Link href="/co/apply">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Comparar Préstamos Ahora
              </Button>
            </Link>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Nuestra Misión</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Empoderar a los colombianos con información transparente y comparaciones 
                    objetivas de préstamos, ayudándoles a encontrar las mejores opciones de 
                    financiamiento según sus necesidades y capacidad de pago. Creemos que 
                    todos merecen acceso a información clara sobre créditos y tasas justas.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Nuestra Visión</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Ser la plataforma de comparación de préstamos más confiable y completa 
                    de Colombia, reconocida por nuestra transparencia, objetividad y compromiso 
                    con la educación financiera. Aspiramos a que cada colombiano pueda tomar 
                    decisiones informadas sobre su futuro financiero.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Cómo Funciona Nuestra Plataforma
            </h2>

            <div className="space-y-8">
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</span>
                    Comparación Objetiva
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Agregamos y comparamos ofertas de préstamos de múltiples prestamistas 
                    regulados por la Superintendencia Financiera de Colombia. Nuestro algoritmo 
                    analiza tasas de interés, plazos, requisitos y condiciones para mostrarle 
                    las opciones más relevantes para su situación.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</span>
                    Prestamistas Verificados
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Trabajamos únicamente con entidades financieras reguladas y vigiladas 
                    por la Superintendencia Financiera de Colombia. Verificamos que cada 
                    prestamista cumpla con las leyes colombianas de protección al consumidor, 
                    incluyendo la Ley 1328 de 2009 y las normas sobre tasa de usura.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</span>
                    Transparencia Total
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Mostramos todos los costos de forma clara: tasa de interés efectiva anual (EA), 
                    costos adicionales, y el costo total del préstamo. No cobramos a los usuarios 
                    por usar nuestra plataforma. Recibimos una comisión de algunos prestamistas 
                    cuando los usuarios solicitan a través de nuestros enlaces, pero esto no 
                    afecta nuestras comparaciones ni rankings.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</span>
                    Educación Financiera
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Proporcionamos recursos educativos sobre préstamos responsables, derechos 
                    del consumidor financiero en Colombia, cómo mejorar su puntaje crediticio, 
                    y estrategias para gestionar deudas. Nuestro objetivo es que tome decisiones 
                    informadas que beneficien su salud financiera a largo plazo.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Nuestros Valores
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">🔒</div>
                  <h3 className="font-semibold text-lg mb-3">Confianza</h3>
                  <p className="text-sm text-gray-600">
                    Protegemos sus datos personales según la Ley 1581 de 2012 y solo 
                    trabajamos con prestamistas regulados.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">💎</div>
                  <h3 className="font-semibold text-lg mb-3">Transparencia</h3>
                  <p className="text-sm text-gray-600">
                    Divulgamos claramente nuestra metodología de ranking, comisiones 
                    de afiliados y cómo funcionamos.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">⚖️</div>
                  <h3 className="font-semibold text-lg mb-3">Objetividad</h3>
                  <p className="text-sm text-gray-600">
                    Nuestras comparaciones se basan en datos verificables, no en 
                    comisiones o acuerdos comerciales.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">📚</div>
                  <h3 className="font-semibold text-lg mb-3">Educación</h3>
                  <p className="text-sm text-gray-600">
                    Proporcionamos recursos para ayudarle a entender préstamos, 
                    tasas y derechos como consumidor.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">🇨🇴</div>
                  <h3 className="font-semibold text-lg mb-3">Localización</h3>
                  <p className="text-sm text-gray-600">
                    Entendemos el mercado colombiano, sus regulaciones y las 
                    necesidades específicas de cada región.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="font-semibold text-lg mb-3">Servicio</h3>
                  <p className="text-sm text-gray-600">
                    Estamos comprometidos a proporcionar la mejor experiencia 
                    de comparación y soporte al cliente.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Regulatory Compliance */}
        <section className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Cumplimiento Regulatorio
            </h2>

            <Card className="border-blue-200">
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-6">
                  Loan-Platform.com opera en cumplimiento con las leyes y regulaciones 
                  colombianas aplicables a servicios de comparación financiera:
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">✓</span>
                    <div>
                      <h3 className="font-semibold mb-1">Ley 1328 de 2009</h3>
                      <p className="text-sm text-gray-600">
                        Protección al Consumidor Financiero – Cumplimos con todas las 
                        disposiciones de transparencia y protección al usuario.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">✓</span>
                    <div>
                      <h3 className="font-semibold mb-1">Ley 1581 de 2012</h3>
                      <p className="text-sm text-gray-600">
                        Protección de Datos Personales (Habeas Data) – Protegemos sus datos 
                        según los más altos estándares de seguridad y privacidad.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">✓</span>
                    <div>
                      <h3 className="font-semibold mb-1">Ley 1266 de 2008</h3>
                      <p className="text-sm text-gray-600">
                        Habeas Data Financiero – Respetamos su derecho a conocer, actualizar 
                        y rectificar información financiera.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">✓</span>
                    <div>
                      <h3 className="font-semibold mb-1">Superintendencia Financiera</h3>
                      <p className="text-sm text-gray-600">
                        Solo presentamos ofertas de entidades vigiladas por la Superintendencia 
                        Financiera de Colombia.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">✓</span>
                    <div>
                      <h3 className="font-semibold mb-1">Tasa de Usura</h3>
                      <p className="text-sm text-gray-600">
                        Verificamos que todas las ofertas cumplan con los límites de tasa 
                        de interés establecidos por el Banco de la República.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Company Information */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Información de la Empresa
            </h2>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4 text-gray-700">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-2">Razón Social</h3>
                      <p className="text-sm">Maloni s.r.o.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Tipo de Servicio</h3>
                      <p className="text-sm">Plataforma de Comparación de Préstamos</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">País de Operación</h3>
                      <p className="text-sm">Colombia (y otros mercados)</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Año de Fundación</h3>
                      <p className="text-sm">2023</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm">
                      <strong>Nota Importante:</strong> Loan-Platform.com NO es una entidad 
                      financiera ni un prestamista. Somos una plataforma de comparación 
                      independiente que conecta usuarios con prestamistas regulados. No 
                      otorgamos créditos directamente ni tomamos decisiones de aprobación.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para Comparar Préstamos?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Compare ofertas de prestamistas regulados en menos de 2 minutos
            </p>
            <Link href="/co/apply">
              <Button size="lg" variant="secondary" className="bg-white text-blue-700 hover:bg-gray-100">
                Empezar Comparación
              </Button>
            </Link>
            <div className="mt-6 space-y-2 text-sm opacity-75">
              <p>Gratuito • Sin impacto en su puntaje crediticio</p>
              <p>Prestamistas regulados por la Superintendencia Financiera</p>
            </div>
          </div>
        </section>
      </main>

      <ColombiaFooter />
    </>
  )
}
