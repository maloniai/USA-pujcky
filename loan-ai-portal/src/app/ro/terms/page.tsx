import type { Metadata } from 'next'
import Link from 'next/link'
import RomaniaNavigation from '@/components/romania/romania-navigation'
import RomaniaFooter from '@/components/romania/romania-footer'
import { ResponsiveBreadcrumbs } from '@/components/ui/breadcrumbs'

export const metadata: Metadata = {
  title: 'Termeni și Condiții | LoansAI România',
  description: 'Termenii și condițiile de utilizare a platformei LoansAI România. Citește regulile și obligațiile pentru utilizarea serviciilor noastre.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://loansai.com/ro/terms',
  },
}

export default function RomaniaTermsPage() {
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
                { name: 'Termeni', url: '/ro/terms' },
              ]}
            />
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto prose prose-blue max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Termeni și Condiții</h1>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">1. Acceptarea Termenilor</h2>
              <p className="text-gray-700">
                Prin accesarea și utilizarea platformei LoansAI România ("Platforma", "Serviciul"), 
                confirmați că ați citit, înțeles și sunteți de acord să fiți legat de acești Termeni și 
                Condiții. Dacă nu sunteți de acord, vă rugăm să nu utilizați Platforma.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">2. Descrierea Serviciului</h2>
              <p className="text-gray-700 mb-4">
                LoansAI este o platformă de comparare a creditelor care:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Agregă și compară oferte de credite de la creditori licențiați BNR</li>
                <li>• Furnizează informații educaționale despre produse financiare</li>
                <li>• Facilitează conectarea între utilizatori și creditori</li>
                <li>• NU acordă credite și NU ia decizii de creditare</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">3. Eligibilitate</h2>
              <p className="text-gray-700 mb-4">Pentru a utiliza Serviciul, trebuie să:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Ai minimum 18 ani</li>
                <li>• Fii rezident în România</li>
                <li>• Ai capacitate juridică deplină</li>
                <li>• Furnizezi informații corecte și complete</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">4. Cont de Utilizator</h2>
              <p className="text-gray-700 mb-4">Când creezi un cont:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Ești responsabil pentru confidențialitatea credențialelor</li>
                <li>• Ești responsabil pentru toate activitățile din contul tău</li>
                <li>• Trebuie să ne notifici imediat despre orice utilizare neautorizată</li>
                <li>• Nu poți transfera contul către altcineva</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">5. Utilizare Acceptabilă</h2>
              <div className="bg-red-50 border-l-4 border-red-400 p-6">
                <p className="font-semibold mb-3">Utilizări interzise:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Furnizarea de informații false sau înșelătoare</li>
                  <li>• Încercarea de a accesa sisteme fără autorizare</li>
                  <li>• Utilizarea robotilor, scrapers sau instrumente automate</li>
                  <li>• Încălcarea drepturilor de proprietate intelectuală</li>
                  <li>• Distribuirea de malware sau cod dăunător</li>
                  <li>• Hărțuirea altor utilizatori sau a personalului</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">6. Proprietate Intelectuală</h2>
              <p className="text-gray-700">
                Toate drepturile de proprietate intelectuală asupra Platformei (design, logo, conținut, cod) 
                aparțin LoansAI sau licențiatorilor săi. Nu poți copia, modifica sau distribui fără 
                permisiunea noastră scrisă.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">7. Limitarea Răspunderii</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <p className="font-semibold mb-3">Clauze importante:</p>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    • <strong>Fără garanții de aprobare:</strong> Nu garantăm că vei fi aprobat pentru un credit
                  </li>
                  <li>
                    • <strong>Informații "as-is":</strong> Informațiile sunt furnizate fără garanții de exactitate
                  </li>
                  <li>
                    • <strong>Decizii ale creditorilor:</strong> Nu suntem responsabili pentru deciziile creditorilor
                  </li>
                  <li>
                    • <strong>Erori tehnice:</strong> Nu suntem răspunzători pentru întreruperi sau erori tehnice
                  </li>
                  <li>
                    • <strong>Daune indirecte:</strong> Nu răspundem pentru daune indirecte sau pierderi de profit
                  </li>
                </ul>
                <p className="text-sm mt-4 text-gray-600">
                  Răspunderea noastră maximă este limitată la suma plătită de tine către noi în ultimele 12 luni 
                  (dacă este cazul).
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">8. Link-uri către Terți</h2>
              <p className="text-gray-700">
                Platforma poate conține link-uri către site-uri ale creditorilor sau parteneri. Nu suntem 
                responsabili pentru conținutul sau practicile acestora. Citește politicile lor înainte de a 
                furniza date personale.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">9. Modificarea Termenilor</h2>
              <p className="text-gray-700">
                Ne rezervăm dreptul de a modifica acești Termeni oricând. Modificările intră în vigoare 
                la publicare. Utilizarea continuă a Platformei după modificări constituie acceptarea noilor 
                termeni. Vei fi notificat prin email despre schimbări semnificative.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">10. Rezilierea</h2>
              <p className="text-gray-700 mb-4">
                Putem suspenda sau închide contul tău dacă:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Încalci acești Termeni</li>
                <li>• Furnizezi informații false</li>
                <li>• Desfășori activități frauduloase</li>
                <li>• La cererea autorităților</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Tu poți închide contul oricând din setări sau contactându-ne.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">11. Legea Aplicabilă</h2>
              <p className="text-gray-700">
                Acești Termeni sunt guvernați de legile României. Orice litigiu va fi soluționat de 
                instanțele competente din România. Înainte de acțiune în instanță, încurajăm rezolvarea 
                amiabilă prin negociere sau mediare.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">12. Contact</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-2">Pentru întrebări despre acești Termeni:</p>
                <p className="text-gray-700">Email: legal@loansai.com</p>
                <p className="text-gray-700">
                  Formular: <Link href="/ro/contact" className="text-blue-600 hover:underline">Contact</Link>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">13. Dispoziții Diverse</h2>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • <strong>Separabilitate:</strong> Dacă o clauză este invalidă, restul rămâne în vigoare
                </li>
                <li>
                  • <strong>Renunțare:</strong> Neexercitarea unui drept nu constituie renunțare
                </li>
                <li>
                  • <strong>Acord complet:</strong> Acești Termeni reprezintă întregul acord între părți
                </li>
                <li>
                  • <strong>Traduceri:</strong> Versiunea în română prevalează în caz de conflict
                </li>
              </ul>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                <strong>Ultima actualizare:</strong> 11 octombrie 2025
              </p>
              <p className="text-sm text-gray-600 mt-4">
                Prin utilizarea platformei, confirmi că ai citit și înțeles acești Termeni și Condiții și 
                că ești de acord să fii legat de aceștia.
              </p>
            </div>
          </div>
        </div>
      </main>
      <RomaniaFooter />
    </>
  )
}
