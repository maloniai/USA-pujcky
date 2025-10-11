import Link from 'next/link'

export default function KazakhstanFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">LoansAI Қазақстан</h3>
            <p className="text-sm text-gray-400">
              Қазақстандағы несиелерді салыстыру платформасы. ҚҰБ лицензияланған несие берушілерден бәсекеге қабілетті мөлшерлемелер.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Жылдам сілтемелер</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/kk" className="hover:text-blue-400 transition">Басты бет</Link>
              </li>
              <li>
                <Link href="/kk/regions" className="hover:text-blue-400 transition">Аймақтар</Link>
              </li>
              <li>
                <Link href="/kk/cities" className="hover:text-blue-400 transition">Қалалар</Link>
              </li>
              <li>
                <Link href="/kk/faq" className="hover:text-blue-400 transition">Жиі қойылатын сұрақтар</Link>
              </li>
              <li>
                <Link href="/kk/about" className="hover:text-blue-400 transition">Біз туралы</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Заңды ақпарат</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/kk/privacy" className="hover:text-blue-400 transition">Құпиялылық саясаты</Link>
              </li>
              <li>
                <Link href="/kk/terms" className="hover:text-blue-400 transition">Пайдалану шарттары</Link>
              </li>
              <li>
                <Link href="/kk/disclaimer" className="hover:text-blue-400 transition">Жауапкершіліктен бас тарту</Link>
              </li>
              <li>
                <Link href="/kk/licenses" className="hover:text-blue-400 transition">Лицензиялар</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Байланыс</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📧 info@loansai.kz</li>
              <li>📞 +7 (727) 300-0000</li>
              <li>📍 Алматы, Қазақстан</li>
              <li className="pt-2">
                <a 
                  href="https://nationalbank.kz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  ҚҰБ веб-сайты ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} LoansAI. Барлық құқықтар қорғалған.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-gray-400">Қазақстан Ұлттық Банкімен реттеледі</span>
              <span className="bg-blue-600 text-white px-3 py-1 rounded text-xs">🇰🇿 ҚҰБ лицензиясы</span>
            </div>
          </div>
        </div>

        {/* Regulatory Notice */}
        <div className="mt-6 p-4 bg-gray-800 rounded-lg">
          <p className="text-xs text-gray-400 leading-relaxed">
            <strong className="text-gray-300">Маңызды ескерту:</strong> LoansAI - бұл несие беруші емес, 
            несие салыстыру платформасы. Біз сізді Қазақстан Ұлттық Банкі лицензиялаған несие берушілермен 
            байланыстырамыз. Барлық несиелер ҚҰБ қадағалауына және Қазақстан Республикасының Микроқаржылық 
            қызмет туралы заңына жатады. Максималды жылдық пайыздық мөлшерлеме (ЖПМ) 56%. Несие шарттары 
            несие берушіге байланысты өзгеруі мүмкін. Қарыз алушының құқықтары Тұтынушылардың құқықтарын 
            қорғау туралы заңмен қорғалған.
          </p>
        </div>
      </div>
    </footer>
  )
}
