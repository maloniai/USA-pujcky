export default function RomaniaDisclosure() {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
      <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
        <span>ℹ️</span>
        Divulgare importantă
      </h3>
      <div className="text-sm text-gray-700 space-y-2">
        <p>
          <strong>Platformă de comparare:</strong> LoansAI este o platformă independentă de comparare 
          a creditelor. Nu suntem un creditor și nu luăm decizii de creditare. Primim compensații de 
          la unii creditori din rețeaua noastră.
        </p>
        <p>
          <strong>Exemplu reprezentativ:</strong> Pentru un credit de 10.000 RON pe 12 luni cu o 
          rată a dobânzii de 10% pe an, rata lunară este de aproximativ 879 RON, valoarea totală 
          de rambursat fiind de aproximativ 10.550 RON. DAE (Dobânda Anuală Efectivă) variază între 
          5% și 50% în funcție de creditor, suma și durata creditului.
        </p>
        <p>
          <strong>Reglementare:</strong> Toți creditorii din rețeaua noastră sunt licențiați și 
          supravegheați de Banca Națională a României (BNR) conform Legii 93/2009 și OUG 50/2010.
        </p>
        <p className="text-xs text-gray-600 mt-3">
          Citiți întotdeauna termenii și condițiile înainte de a semna orice contract de credit. 
          Aveți dreptul legal de a renunța la credit în termen de 14 zile de la semnare fără penalități.
        </p>
      </div>
    </div>
  )
}
