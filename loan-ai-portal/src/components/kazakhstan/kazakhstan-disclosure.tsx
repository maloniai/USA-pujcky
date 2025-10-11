export default function KazakhstanDisclosure() {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
      <h3 className="font-bold text-blue-900 mb-4 text-lg">
        📋 Маңызты ақпарат әріптестік және несие туралы
      </h3>
      
      <div className="space-y-4 text-sm text-gray-700">
        <div>
          <h4 className="font-semibold text-blue-800 mb-2">Әріптестік ашық жариялау:</h4>
          <p>
            LoansAI - бұл несие салыстыру қызметі, біз лицензияланған несие берушілерден және қаржылық 
            қызмет көрсетушілерден комиссиялық ақы аламыз, егер сіз олардың несиесін алсаңыз. Бұл 
            комиссия сізге ешқандай қосымша шығын әкелмейді. Біз тек Қазақстан Ұлттық Банкі (ҚҰБ) 
            лицензиялаған және реттейтін несие берушілермен жұмыс істейміз.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-blue-800 mb-2">Өкілдік мысал (Қазақстан заңына сәйкес):</h4>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Несие сомасы: 1,000,000 ₸</li>
            <li>Несие мерзімі: 24 ай</li>
            <li>Жылдық пайыздық мөлшерлеме (ЖПМ): 56% (максимум заң бойынша)</li>
            <li>Ай сайынғы төлем: шамамен 59,000 ₸</li>
            <li>Жалпы қайтарылатын сома: шамамен 1,416,000 ₸</li>
            <li>Жалпы несие құны: шамамен 416,000 ₸</li>
          </ul>
          <p className="mt-2 text-xs text-gray-600">
            Бұл мысал тек көрсету мақсатында берілген. Нақты мөлшерлемелер мен шарттар несие берушіге, 
            сіздің несиелік тарихыңыз бен табысыңызға байланысты өзгеруі мүмкін.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-blue-800 mb-2">Сіздің құқықтарыңыз:</h4>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Сізде несиеден бас тарту үшін 14 күн мерзімі бар (айыппұлсыз)</li>
            <li>Сіз қосымша төлем арқылы несиені ертерек өтей аласыз (максимум комиссия 1%)</li>
            <li>Барлық шығындар және шарттар шартта ашық жазылуы керек</li>
            <li>Сіздің жеке деректеріңіз ДҚБЖ сәйкес қорғалған</li>
            <li>Сізде тұтынушылардың құқықтарын қорғау туралы заң бойынша қорғау бар</li>
          </ul>
        </div>

        <div className="bg-white rounded p-3 border border-blue-200">
          <p className="text-xs text-gray-600">
            <strong>Қадағалау органы:</strong> Қазақстан Ұлттық Банкі (ҚҰБ)
            <br />
            <strong>Веб-сайт:</strong>{' '}
            <a href="https://nationalbank.kz" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              nationalbank.kz
            </a>
            <br />
            <strong>Заң:</strong> Қазақстан Республикасының Микроқаржылық қызмет туралы заңы
            <br />
            <strong>Максимум ЖПМ:</strong> 56% (заң бойынша)
          </p>
        </div>
      </div>
    </div>
  )
}
