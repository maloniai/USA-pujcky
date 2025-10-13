export default function MexicoDisclosure() {
  return (
    <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 text-sm text-gray-700">
      <h3 className="font-bold text-gray-900 mb-4 text-base">
        📋 Divulgación de Información y Avisos Importantes
      </h3>

      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Naturaleza del Servicio</h4>
          <p>
            LoansAI México es un servicio de comparación y referencia de préstamos personales.
            No somos un prestamista, banco o institución financiera. No otorgamos, financiamos
            ni serviciamos préstamos directamente. Actuamos exclusivamente como intermediario
            para conectar a usuarios con prestamistas licenciados y regulados.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Regulación y Supervisión</h4>
          <p>
            Todos los prestamistas presentados en nuestra plataforma están:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
            <li>Licenciados y registrados ante la CNBV (Comisión Nacional Bancaria y de Valores)</li>
            <li>Supervisados por CONDUSEF (Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros)</li>
            <li>Obligados a cumplir con la Ley para la Transparencia y Ordenamiento de los Servicios Financieros</li>
            <li>Sujetos a límites de CAT (Costo Anual Total) establecidos por las autoridades</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Información sobre Costos y Tasas</h4>
          <p>
            <strong>CAT Promedio:</strong> El Costo Anual Total (CAT) varía significativamente según:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
            <li>Su historial crediticio y calificación en Buró de Crédito</li>
            <li>Monto del préstamo solicitado</li>
            <li>Plazo de financiamiento elegido</li>
            <li>Ingresos comprobables y estabilidad laboral</li>
            <li>Políticas individuales de cada prestamista</li>
          </ul>
          <p className="mt-2">
            <strong>Rango típico:</strong> 18% - 150% CAT sin IVA. Los rangos mostrados son
            informativos y pueden variar. Cada prestamista le proporcionará el CAT específico
            aplicable a su solicitud antes de cualquier compromiso.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Compensación y Afiliaciones</h4>
          <p>
            LoansAI recibe compensación económica de los prestamistas cuando un usuario:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
            <li>Completa una solicitud a través de nuestra plataforma</li>
            <li>Es aprobado y acepta una oferta de préstamo</li>
            <li>Recibe el desembolso del préstamo</li>
          </ul>
          <p className="mt-2">
            Esta compensación puede influir en el orden y prominencia con que se presentan los
            prestamistas, pero <strong>nunca</strong> afecta los términos, tasas o condiciones
            que cada prestamista ofrece individualmente. El uso de nuestro servicio de comparación
            es <strong>completamente gratuito</strong> para el consumidor y no incrementa el costo
            del préstamo.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Protección de Datos Personales</h4>
          <p>
            El tratamiento de sus datos personales se realiza conforme a:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
            <li>Ley Federal de Protección de Datos Personales en Posesión de los Particulares</li>
            <li>Reglamento General de Protección de Datos (GDPR) cuando aplicable</li>
            <li>Lineamientos de CONDUSEF en materia de privacidad financiera</li>
          </ul>
          <p className="mt-2">
            Su información se comparte únicamente con prestamistas seleccionados que cumplen con
            nuestros estándares de privacidad y seguridad. Consulte nuestra{' '}
            <a href="/mx/privacy" className="text-blue-600 hover:text-blue-700 font-semibold">
              Política de Privacidad
            </a>
            {' '}para más información.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Ejemplo Representativo (Artículo 8 bis)</h4>
          <div className="bg-blue-50 border border-blue-200 rounded p-4 mt-2">
            <p className="font-semibold mb-2">Ejemplo ilustrativo de un préstamo personal:</p>
            <ul className="space-y-1 text-sm">
              <li>• Monto del préstamo: $10,000.00 MXN</li>
              <li>• Plazo: 12 meses</li>
              <li>• Tasa de interés mensual: 5.0%</li>
              <li>• CAT sin IVA: 80.0% (CAT promedio, puede variar)</li>
              <li>• Pago mensual aproximado: $1,128.00 MXN</li>
              <li>• Total a pagar: $13,536.00 MXN</li>
              <li>• Comisión por apertura: $500.00 (incluida en cálculo)</li>
            </ul>
            <p className="text-xs mt-3 text-gray-600">
              *Este ejemplo es meramente ilustrativo. Los términos reales dependen del prestamista
              y su perfil crediticio. Fecha de cálculo: {new Date().toLocaleDateString('es-MX')}.
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Derechos del Usuario</h4>
          <p>
            Como consumidor de servicios financieros en México, usted tiene derecho a:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
            <li>Recibir información clara y completa antes de contratar</li>
            <li>Conocer el CAT exacto de su préstamo</li>
            <li>Liquidar anticipadamente sin penalización (máximo 20% de intereses no devengados)</li>
            <li>Presentar quejas ante CONDUSEF</li>
            <li>Acceder, rectificar o cancelar sus datos personales</li>
            <li>Recibir estado de cuenta mensual sin costo</li>
          </ul>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <span>⚠️</span>
            Aviso Importante sobre Préstamos
          </h4>
          <p className="text-sm">
            <strong>Advertencia:</strong> Solicitar préstamos que no puede pagar puede afectar
            negativamente su historial crediticio y generar intereses moratorios adicionales.
            Evalúe cuidadosamente su capacidad de pago antes de comprometerse. En caso de
            dificultades financieras, contacte inmediatamente a su prestamista para explorar
            opciones. Para asesoría gratuita, visite{' '}
            <a
              href="https://www.condusef.gob.mx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              CONDUSEF
            </a>
            .
          </p>
        </div>

        <div className="text-center pt-4 border-t border-gray-300">
          <p className="text-xs text-gray-600">
            Para consultas sobre transparencia, divulgaciones o quejas:{' '}
            <a href="mailto:legal@loansai.mx" className="text-blue-600 hover:text-blue-700">
              legal@loansai.mx
            </a>
            <br />
            Última actualización: {new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
  )
}
