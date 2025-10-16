export default function ColombiaDisclosure() {
  return (
    <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 text-sm text-gray-700">
      <h3 className="font-bold text-gray-900 mb-4 text-base">
        📋 Divulgación de Información y Avisos Importantes
      </h3>

      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Naturaleza del Servicio</h4>
          <p>
            LoansAI Colombia es un servicio de comparación y referencia de créditos personales.
            No somos un prestamista, banco o institución financiera. No otorgamos, financiamos
            ni serviciamos créditos directamente. Actuamos exclusivamente como intermediario
            para conectar a usuarios con prestamistas licenciados y regulados.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Regulación y Supervisión</h4>
          <p>
            Todos los prestamistas presentados en nuestra plataforma están:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
            <li>Autorizados y vigilados por la Superintendencia Financiera de Colombia</li>
            <li>Obligados a cumplir con las normas de protección al consumidor financiero</li>
            <li>Registrados en el sistema financiero colombiano</li>
            <li>Sujetos a tasas máximas establecidas por las autoridades</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Información sobre Costos y Tasas</h4>
          <p>
            La tasa de interés varía significativamente según:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
            <li>Su historial crediticio y calificación</li>
            <li>Monto del crédito solicitado</li>
            <li>Plazo de financiamiento elegido</li>
            <li>Ingresos comprobables y estabilidad laboral</li>
            <li>Políticas individuales de cada prestamista</li>
          </ul>
          <p className="mt-2">
            Los rangos de tasas mostrados son informativos y pueden variar. Cada prestamista
            le proporcionará la tasa específica aplicable a su solicitud antes de cualquier
            compromiso.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Compensación y Afiliaciones</h4>
          <p>
            LoansAI recibe compensación económica de los prestamistas cuando un usuario:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
            <li>Completa una solicitud a través de nuestra plataforma</li>
            <li>Es aprobado y acepta una oferta de crédito</li>
            <li>Recibe el desembolso del crédito</li>
          </ul>
          <p className="mt-2">
            Esta compensación puede influir en el orden y prominencia con que se presentan los
            prestamistas, pero <strong>nunca</strong> afecta los términos, tasas o condiciones
            que cada prestamista ofrece individualmente. El uso de nuestro servicio de comparación
            es <strong>completamente gratuito</strong> para el consumidor y no incrementa el costo
            del crédito.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Protección de Datos Personales</h4>
          <p>
            El tratamiento de sus datos personales se realiza conforme a:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
            <li>Ley 1581 de 2012 (Protección de Datos Personales en Colombia)</li>
            <li>Decreto 1377 de 2013</li>
            <li>Lineamientos de la Superintendencia Financiera</li>
          </ul>
          <p className="mt-2">
            Su información se comparte únicamente con prestamistas seleccionados que cumplen con
            nuestros estándares de privacidad y seguridad. Consulte nuestra{' '}
            <a href="/co/privacy" className="text-blue-600 hover:text-blue-700 font-semibold">
              Política de Privacidad
            </a>
            {' '}para más información.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Ejemplo Representativo</h4>
          <div className="bg-blue-50 border border-blue-200 rounded p-4 mt-2">
            <p className="font-semibold mb-2">Ejemplo ilustrativo de un crédito personal:</p>
            <ul className="space-y-1 text-sm">
              <li>• Monto del crédito: $5.000.000 COP</li>
              <li>• Plazo: 12 meses</li>
              <li>• Tasa de interés mensual: 2.5%</li>
              <li>• Cuota mensual aproximada: $470.000 COP</li>
              <li>• Total a pagar: $5.640.000 COP</li>
              <li>• Costo total del crédito: $640.000 COP</li>
            </ul>
            <p className="text-xs mt-3 text-gray-600">
              *Este ejemplo es meramente ilustrativo. Los términos reales dependen del prestamista
              y su perfil crediticio. Fecha de cálculo: {new Date().toLocaleDateString('es-CO')}.
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Derechos del Usuario</h4>
          <p>
            Como consumidor de servicios financieros en Colombia, usted tiene derecho a:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
            <li>Recibir información clara y completa antes de contratar</li>
            <li>Conocer la tasa de interés exacta de su crédito</li>
            <li>Liquidar anticipadamente su crédito</li>
            <li>Presentar quejas ante la Superintendencia Financiera</li>
            <li>Acceder, rectificar o cancelar sus datos personales</li>
            <li>Recibir estado de cuenta periódico</li>
          </ul>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <span>⚠️</span>
            Aviso Importante sobre Créditos
          </h4>
          <p className="text-sm">
            <strong>Advertencia:</strong> Solicitar créditos que no puede pagar puede afectar
            negativamente su historial crediticio y generar intereses moratorios adicionales.
            Evalúe cuidadosamente su capacidad de pago antes de comprometerse. En caso de
            dificultades financieras, contacte inmediatamente a su prestamista para explorar
            opciones. Para asesoría gratuita, visite{' '}
            <a
              href="https://www.superfinanciera.gov.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Superintendencia Financiera
            </a>
            .
          </p>
        </div>

        <div className="text-center pt-4 border-t border-gray-300">
          <p className="text-xs text-gray-600">
            Para consultas sobre transparencia, divulgaciones o quejas:{' '}
            <a href="mailto:legal@loansai.co" className="text-blue-600 hover:text-blue-700">
              legal@loansai.co
            </a>
            <br />
            Última actualización: {new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
  )
}
