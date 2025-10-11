import type { Metadata } from 'next'
import Link from 'next/link'
import RomaniaNavigation from '@/components/romania/romania-navigation'
import RomaniaFooter from '@/components/romania/romania-footer'
import { ResponsiveBreadcrumbs } from '@/components/ui/breadcrumbs'

export const metadata: Metadata = {
  title: 'Divulgări și Conformitate | LoansAI România',
  description: 'Informații complete despre parteneriatele afiliate, transparența serviciilor și conformitatea cu reglementările românești și europene.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://loansai.com/ro/disclosures',
  },
}

export default function RomaniaDisclosuresPage() {
  return (
    <>
      <RomaniaNavigation />

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <ResponsiveBreadcrumbs
              items={[
                { name: 'Acasă', url: '/' },
                { name: 'România', url: '/ro' },
                { name: 'Divulgări', url: '/ro/disclosures' },
              ]}
            />
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Divulgări și Conformitate
            </h1>
            
            <div className="prose prose-blue max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Divulgare despre Parteneriate Afiliate</h2>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                  <p className="font-semibold text-gray-900 mb-2">
                    ℹ️ Informație importantă despre compensații
                  </p>
                  <p className="text-gray-700">
                    LoansAI este o platformă independentă de comparare a creditelor care primește compensații de la 
                    unii creditori și parteneri financiari pentru clienții pe care îi recomandăm. Aceste compensații 
                    ne permit să menținem serviciul gratuit pentru utilizatori.
                  </p>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cum funcționează parteneriatul afiliat</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>
                      <strong>Compensații:</strong> Primim o comision sau taxă de la creditori atunci când un utilizator 
                      solicită un credit prin platforma noastră și este aprobat.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>
                      <strong>Fără costuri pentru tine:</strong> Aceste compensații nu influențează costurile tale. 
                      Nu plătești mai mult pentru că folosești LoansAI.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>
                      <strong>Obiectivitate:</strong> Deși primim compensații, comparațiile noastre sunt bazate pe 
                      criterii obiective precum rate ale dobânzii, condiții, și caracteristici ale produselor.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>
                      <strong>Independență editorială:</strong> Compensațiile nu influențează ordinea de prezentare 
                      sau recomandările noastre, care sunt bazate pe relevanța pentru profilul tău.
                    </span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Partenerii noștri</h3>
                <p className="text-gray-700">
                  Lucrăm cu creditori licențiați și supravegheați de Banca Națională a României (BNR), inclusiv:
                </p>
                <ul className="space-y-1 text-gray-700 mt-3">
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Bănci comerciale cu licență BNR</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Instituții financiare nebancare (IFN) autorizate</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Platforme de creditare online reglementate</span>
                  </li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Exemplu Reprezentativ</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <p className="font-semibold text-gray-900 mb-4">
                    Exemplu reprezentativ conform reglementărilor BNR:
                  </p>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      <strong>Suma împrumutată:</strong> 10.000 RON
                    </p>
                    <p>
                      <strong>Durata:</strong> 12 luni
                    </p>
                    <p>
                      <strong>Rata anuală a dobânzii:</strong> 10% pe an
                    </p>
                    <p>
                      <strong>DAE (Dobânda Anuală Efectivă):</strong> Aproximativ 10,5%
                    </p>
                    <p>
                      <strong>Rata lunară:</strong> Aproximativ 879 RON
                    </p>
                    <p>
                      <strong>Valoare totală de rambursat:</strong> Aproximativ 10.550 RON
                    </p>
                    <p>
                      <strong>Costuri totale:</strong> Aproximativ 550 RON (dobândă + comisioane)
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    <em>
                      Notă: Acesta este un exemplu reprezentativ. Condițiile efective variază în funcție de creditor, 
                      profilul tău de credit, suma solicitată și durata creditului. DAE poate varia între 5% și 50% 
                      conform limitelor legale.
                    </em>
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Rolul LoansAI</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Nu suntem un creditor.</strong> LoansAI este o platformă de comparare și recomandare. 
                    Nu acordăm credite și nu luăm decizii de creditare.
                  </p>
                  <p>
                    <strong>Serviciile noastre includ:</strong>
                  </p>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Compararea ofertelor de credite de la diferiți creditori</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Furnizarea de informații educaționale despre credite și finanțe personale</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Conectarea ta cu creditori potrivit profilului tău</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Asistență în înțelegerea produselor financiare</span>
                    </li>
                  </ul>
                  <p>
                    <strong>Deciziile de creditare</strong> sunt luate exclusiv de creditori, bazate pe propriile lor 
                    criterii de evaluare, politici de risc și disponibilitatea de capital.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Conformitate Reglementară</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Reglementări Românești</h3>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>
                      <strong>Legea 93/2009:</strong> privind instituțiile financiare nebancare - stabilește DAE maxim 
                      de 50% și protecții pentru consumatori
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>
                      <strong>OUG 50/2010:</strong> privind contractele de credit pentru consumatori - reglementează 
                      transparența și drepturile consumatorilor
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>
                      <strong>BNR (Banca Națională a României):</strong> Autoritatea de supraveghere pentru toți 
                      creditorii din rețeaua noastră
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>
                      <strong>ANPC:</strong> Autoritatea Națională pentru Protecția Consumatorilor - protejează 
                      drepturile tale ca consumator
                    </span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Conformitate Europeană</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>
                      <strong>GDPR (Regulamentul (UE) 2016/679):</strong> Protejăm datele tale personale conform 
                      standardelor europene cele mai stricte
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>
                      <strong>Directiva UE privind Creditul de Consum:</strong> Respectăm toate cerințele de 
                      transparență și divulgare
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>
                      <strong>ePrivacy:</strong> Utilizarea cookie-urilor și tracking-ului conform legislației UE
                    </span>
                  </li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Drepturile Tale ca Consumator</h2>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <p className="font-semibold text-gray-900 mb-4">
                    Ai următoarele drepturi protejate legal:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>
                        <strong>Dreptul de a renunța:</strong> 14 zile de la semnarea contractului, fără a da explicații 
                        și fără penalități
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>
                        <strong>Rambursare anticipată:</strong> Poți rambursa creditul înainte de termen, cu comision 
                        maxim 1% din suma rambursată
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>
                        <strong>Informații clare:</strong> Dreptul la informații complete și ușor de înțeles despre 
                        toate costurile înainte de semnare
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>
                        <strong>Protecție împotriva abuzurilor:</strong> Practicile de colectare agresive sau 
                        hărțuirea sunt interzise
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>
                        <strong>Acces la reclamații:</strong> Poți depune plângeri la ANPC sau BNR dacă consideri 
                        că drepturile tale sunt încălcate
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Contactează Autoritățile</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 mb-3">Banca Națională a României (BNR)</h3>
                    <p className="text-sm text-gray-700 mb-2">Autoritatea de supraveghere financiară</p>
                    <p className="text-sm text-gray-600">
                      Website: <a href="https://www.bnr.ro" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.bnr.ro</a>
                    </p>
                    <p className="text-sm text-gray-600">
                      Telefon: 021 312 43 75
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 mb-3">ANPC</h3>
                    <p className="text-sm text-gray-700 mb-2">Autoritatea Națională pentru Protecția Consumatorilor</p>
                    <p className="text-sm text-gray-600">
                      Website: <a href="https://www.anpc.ro" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.anpc.ro</a>
                    </p>
                    <p className="text-sm text-gray-600">
                      Telefon: 021 9551
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Avertismente Importante</h2>
                <div className="bg-red-50 border-l-4 border-red-400 p-6">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-2">
                      <span className="text-red-600">⚠</span>
                      <span>
                        <strong>Verifică întotdeauna</strong> că creditorul este licențiat BNR înainte de a semna orice contract
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">⚠</span>
                      <span>
                        <strong>Citește cu atenție</strong> toate termenii și condițiile, inclusiv caracterul mic
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">⚠</span>
                      <span>
                        <strong>Nu împrumuta mai mult</strong> decât poți rambursa confortabil
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">⚠</span>
                      <span>
                        <strong>Compară întotdeauna</strong> mai multe oferte înainte de a decide
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">⚠</span>
                      <span>
                        <strong>Evită creditorii necunoscuți</strong> care promit "aprobare garantată" sau "fără verificări"
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Contactează-ne</h2>
                <p className="text-gray-700 mb-4">
                  Dacă ai întrebări despre divulgările noastre, parteneriatul afiliat sau orice alt aspect al 
                  serviciilor noastre, nu ezita să ne contactezi:
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700">
                    Email: <a href="mailto:support@loansai.com" className="text-blue-600 hover:underline">support@loansai.com</a>
                  </p>
                  <p className="text-gray-700 mt-2">
                    Link rapid: <Link href="/ro/contact" className="text-blue-600 hover:underline">Formular de contact</Link>
                  </p>
                </div>
              </section>

              <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-600">
                <p>
                  <strong>Ultima actualizare:</strong> 11 octombrie 2025
                </p>
                <p className="mt-2">
                  Ne rezervăm dreptul de a actualiza aceste divulgări periodic pentru a reflecta schimbările în 
                  practicile noastre sau cerințele legale. Vă recomandăm să revizuiți această pagină regulat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <RomaniaFooter />
    </>
  )
}
