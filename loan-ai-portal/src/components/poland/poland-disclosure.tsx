'use client'

import { Card, CardContent } from '@/components/ui/card'

export default function PolandDisclosure() {
  return (
    <Card className="bg-gray-50 border-gray-200">
      <CardContent className="pt-6">
        <div className="prose max-w-none text-sm text-gray-600">
          <h3 className="text-base font-semibold text-gray-900 mb-3">
            Ujawnienie Partnerskie i Ważne Informacje
          </h3>
          
          <p className="mb-3">
            <strong>Ujawnienie Partnerskie:</strong> LoansAI Polska może otrzymywać wynagrodzenie 
            od niektórych pożyczkodawców przedstawionych na tej stronie. To wynagrodzenie może 
            wpływać na kolejność i sposób prezentacji produktów, ale nie wpływa na nasze recenzje 
            ani rekomendacje. Zawsze prezentujemy dokładne informacje i staramy się zapewnić 
            najlepsze możliwe doświadczenie użytkownikom.
          </p>

          <p className="mb-3">
            <strong>Reprezentatywny Przykład:</strong> Pożyczka 10,000 PLN na 24 miesiące przy 
            oprocentowaniu 9.5% rocznie skutkuje miesięczną ratą około 458 PLN i całkowitą kwotą 
            do spłaty 10,992 PLN. RRSO: 9.92%. Rzeczywista oferowana stawka zależy od Twojej 
            zdolności kredytowej, kwoty pożyczki i okresu spłaty.
          </p>

          <p className="mb-3">
            <strong>Nie jesteśmy pożyczkodawcą:</strong> LoansAI jest platformą porównawczą łączącą 
            konsumentów z licencjonowanymi pożyczkodawcami. Nie wydajemy pożyczek ani nie podejmujemy 
            decyzji kredytowych. Wszystkie aplikacje są przesyłane bezpośrednio do wybranych 
            pożyczkodawców, którzy dokonują końcowej decyzji kredytowej.
          </p>

          <p className="mb-3">
            <strong>Weryfikacja Kredytowa:</strong> Aplikując o pożyczkę, zgadzasz się na 
            sprawdzenie Twojej historii kredytowej przez pożyczkodawcę za pośrednictwem Biura 
            Informacji Kredytowej (BIK) lub innych biur kredytowych. To może wpłynąć na Twój 
            scoring kredytowy.
          </p>

          <p className="mb-3">
            <strong>Zgodność z Regulacjami:</strong> Wszyscy pożyczkodawcy przedstawieni na tej 
            platformie są licencjonowani i regulowani przez Komisję Nadzoru Finansowego (KNF) 
            i przestrzegają polskiej Ustawy o Kredycie Konsumenckim. Maksymalne koszty pożyczek 
            pozabankowych są ograniczone do 25% prowizji początkowej i 30% oprocentowania rocznego, 
            a całkowity koszt nie może przekroczyć 100% kwoty pożyczki.
          </p>

          <p className="mb-3">
            <strong>Odpowiedzialne Pożyczanie:</strong> Pożyczaj odpowiedzialnie i tylko to, 
            co możesz spłacić. Przed aplikowaniem upewnij się, że rozumiesz wszystkie warunki, 
            koszty i harmonogram spłat. Jeśli masz trudności z zadłużeniem, skontaktuj się z 
            bezpłatną poradnią finansową lub Rzecznikiem Finansowym.
          </p>

          <p className="mb-3">
            <strong>Bezpieczeństwo Danych:</strong> Twoje dane osobowe są chronione zgodnie z 
            Rozporządzeniem o Ochronie Danych Osobowych (RODO) i są przekazywane tylko 
            licencjonowanym pożyczkodawcom wybranym przez Ciebie. Nigdy nie sprzedajemy Twoich 
            danych stronom trzecim.
          </p>

          <p className="text-xs mt-4 pt-4 border-t border-gray-300">
            <strong>Zastrzeżenie:</strong> Informacje przedstawione na tej stronie mają charakter 
            ogólny i nie stanowią porady finansowej, prawnej ani podatkowej. Zawsze zasięgnij 
            profesjonalnej porady dostosowanej do Twojej konkretnej sytuacji przed podjęciem 
            jakichkolwiek decyzji finansowych.
          </p>

          <p className="text-xs mt-2">
            <strong>Kontakt:</strong> W przypadku pytań dotyczących naszych usług, partnerów 
            lub praktyk prywatności, prosimy o kontakt:{' '}
            <a href="mailto:kontakt@loansai.pl" className="text-blue-600 hover:underline">
              kontakt@loansai.pl
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
