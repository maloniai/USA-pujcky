'use client'

import { Card, CardContent } from '@/components/ui/card'

export default function SpainDisclosure() {
  return (
    <Card className="border-red-200 bg-red-50">
      <CardContent className="pt-6">
        <h3 className="font-semibold text-lg mb-4 text-gray-900">
          📢 Divulgación Importante
        </h3>
        
        <div className="space-y-4 text-sm text-gray-700">
          {/* Affiliate Disclosure */}
          <div>
            <h4 className="font-semibold mb-2">Divulgación de Afiliados</h4>
            <p className="leading-relaxed">
              LoansAI España es un servicio de comparación de préstamos gratuito para consumidores. 
              Recibimos compensación de los prestamistas cuando los usuarios completan solicitudes 
              exitosas a través de nuestra plataforma. Esta compensación no afecta las ofertas que 
              se muestran ni el orden en que aparecen. Siempre mostramos tasas y términos precisos 
              según la información proporcionada por los prestamistas.
            </p>
          </div>

          {/* Representative Example */}
          <div className="bg-white p-4 rounded-lg border border-red-200">
            <h4 className="font-semibold mb-2">Ejemplo Representativo</h4>
            <p className="text-xs leading-relaxed mb-2">
              <strong>Préstamo de 10,000 € a 36 meses:</strong>
            </p>
            <ul className="text-xs space-y-1 ml-4">
              <li>• TAE (Tasa Anual Equivalente): 7.5% - 25.0%</li>
              <li>• Pago mensual: ~310 € - 390 €</li>
              <li>• Monto total a devolver: ~11,160 € - 14,040 €</li>
              <li>• Comisión de apertura: 0% - 3%</li>
            </ul>
            <p className="text-xs mt-2 text-gray-600">
              *Las tasas reales varían según su perfil crediticio, ingresos y prestamista seleccionado. 
              No todos los solicitantes califican para las tasas más bajas.
            </p>
          </div>

          {/* Risk Warning */}
          <div>
            <h4 className="font-semibold mb-2">⚠️ Advertencia de Riesgo</h4>
            <p className="leading-relaxed">
              Los préstamos son un compromiso financiero serio. Solo debe solicitar un préstamo 
              si está seguro de poder cumplir con los pagos mensuales. El incumplimiento puede 
              resultar en cargos adicionales, afectar su calificación crediticia y acción legal. 
              Considere alternativas como ahorro, ayuda familiar o asesoramiento de deuda antes 
              de solicitar.
            </p>
          </div>

          {/* Regulatory Info */}
          <div>
            <h4 className="font-semibold mb-2">Información Regulatoria</h4>
            <p className="leading-relaxed">
              Todos los prestamistas en nuestra plataforma están autorizados y supervisados por el 
              <strong> Banco de España</strong>. Los préstamos al consumo están protegidos por la 
              <strong> Ley 16/2011 de Contratos de Crédito al Consumo</strong> y directivas de la UE. 
              Tiene derecho a un periodo de desistimiento de 14 días, divulgación completa de costos 
              y derecho a amortización anticipada.
            </p>
          </div>

          {/* Credit Check Notice */}
          <div>
            <h4 className="font-semibold mb-2">Consulta de Crédito</h4>
            <p className="leading-relaxed">
              Completar un formulario de solicitud en LoansAI no afecta su calificación crediticia. 
              Sin embargo, si procede con un prestamista, realizarán una verificación crediticia 
              completa que puede afectar temporalmente su puntuación. Solo solicite cuando esté 
              preparado para comprometerse.
            </p>
          </div>

          {/* Data Protection */}
          <div>
            <h4 className="font-semibold mb-2">🔒 Protección de Datos</h4>
            <p className="leading-relaxed">
              Su información personal está protegida según el <strong>RGPD (Reglamento General de 
              Protección de Datos)</strong> y la legislación española de protección de datos. Solo 
              compartimos sus datos con prestamistas autorizados cuando usted da su consentimiento 
              explícito. Lea nuestra{' '}
              <a href="/sp/privacy" className="text-red-600 hover:underline">
                Política de Privacidad
              </a>{' '}
              para más detalles.
            </p>
          </div>

          {/* Contact for Complaints */}
          <div className="bg-white p-4 rounded-lg border border-red-200">
            <h4 className="font-semibold mb-2">¿Necesita Ayuda o Tiene una Queja?</h4>
            <p className="text-xs leading-relaxed">
              Si tiene preguntas sobre nuestro servicio o desea presentar una queja, contáctenos en 
              <strong> info@loansai.com</strong>. También puede comunicarse con el{' '}
              <a 
                href="https://clientebancario.bde.es/pcb/es/menu-horizontal/servicios/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-600 hover:underline"
              >
                Servicio de Reclamaciones del Banco de España
              </a>{' '}
              si no está satisfecho con nuestra respuesta.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
