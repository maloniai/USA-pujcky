import type { Metadata } from 'next'
import Link from 'next/link'
import RomaniaNavigation from '@/components/romania/romania-navigation'
import RomaniaFooter from '@/components/romania/romania-footer'
import { ResponsiveBreadcrumbs } from '@/components/ui/breadcrumbs'

export const metadata: Metadata = {
  title: 'Politica de Confidențialitate | LoansAI România',
  description: 'Politica de confidențialitate LoansAI România. Aflați cum colectăm, utilizăm și protejăm datele dumneavoastră personale conform GDPR.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://loansai.com/ro/privacy',
  },
}

export default function RomaniaPrivacyPage() {
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
                { name: 'Confidențialitate', url: '/ro/privacy' },
              ]}
            />
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto prose prose-blue max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Politica de Confidențialitate</h1>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
              <p className="font-semibold mb-2">Conformitate GDPR</p>
              <p className="text-sm text-gray-700">
                LoansAI respectă Regulamentul General privind Protecția Datelor (UE) 2016/679 și legislația 
                română privind protecția datelor personale (Legea 190/2018).
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">1. Ce date colectăm</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Date de identificare (nume, prenume, CNP dacă este necesar pentru verificarea creditului)</li>
                <li>• Date de contact (email, telefon, adresă)</li>
                <li>• Informații financiare (venituri, angajator, cheltuieli lunare)</li>
                <li>• Istoricul creditelor (prin birourile de credit autorizate)</li>
                <li>• Date de utilizare a platformei (cookie-uri, IP, comportament de navigare)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">2. Cum folosim datele</h2>
              <p className="text-gray-700 mb-4">Datele tale sunt utilizate pentru:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Potrivirea cu creditori relevanți din rețeaua noastră</li>
                <li>• Verificarea identității și prevenirea fraudei</li>
                <li>• Comunicarea ofertelor de la creditori</li>
                <li>• Îmbunătățirea serviciilor noastre</li>
                <li>• Respectarea obligațiilor legale (anti-spălare bani, raportare BNR)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">3. Partajarea datelor</h2>
              <p className="text-gray-700 mb-4">
                Partajăm datele tale doar cu:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Creditori licențiați BNR din rețeaua noastră</li>
                <li>• Birouri de credit autorizate (pentru verificări)</li>
                <li>• Furnizori de servicii (hosting, email, analiză) sub contracte stricte de confidențialitate</li>
                <li>• Autorități (BNR, ANPC, autorități fiscale) când este cerut legal</li>
              </ul>
              <p className="text-gray-700 mt-4 font-semibold">
                Nu vindem niciodată datele tale către terți pentru marketing.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">4. Drepturile tale GDPR</h2>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <p className="font-semibold mb-4">Ai următoarele drepturi:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ <strong>Dreptul de acces:</strong> Poți solicita o copie a datelor tale</li>
                  <li>✓ <strong>Dreptul de rectificare:</strong> Poți corecta datele incorecte</li>
                  <li>✓ <strong>Dreptul de ștergere:</strong> Poți solicita ștergerea datelor (cu anumite excepții legale)</li>
                  <li>✓ <strong>Dreptul de restricționare:</strong> Poți limita prelucrarea datelor</li>
                  <li>✓ <strong>Dreptul de portabilitate:</strong> Poți transfera datele către alt furnizor</li>
                  <li>✓ <strong>Dreptul de opoziție:</strong> Poți obiecta la anumite prelucrări</li>
                  <li>✓ <strong>Retragerea consimțământului:</strong> Poți retrage consimțământul oricând</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">5. Securitatea datelor</h2>
              <p className="text-gray-700">
                Protejăm datele tale prin:
              </p>
              <ul className="space-y-2 text-gray-700 mt-4">
                <li>• Criptare SSL/TLS pentru toate transmisiile</li>
                <li>• Servere securizate în UE cu backup regulat</li>
                <li>• Acces restrictionat pe bază de "need-to-know"</li>
                <li>• Monitorizare 24/7 pentru activități suspecte</li>
                <li>• Conformitate PCI DSS pentru date de plată</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">6. Păstrarea datelor</h2>
              <p className="text-gray-700">
                Păstrăm datele tale:
              </p>
              <ul className="space-y-2 text-gray-700 mt-4">
                <li>• Pe durata utilizării active a serviciilor noastre</li>
                <li>• Plus perioada necesară pentru obligații legale (minim 5 ani pentru documente financiare)</li>
                <li>• După ștergerea contului, datele sunt anonimizate sau șterse în 90 de zile</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">7. Cookie-uri și tracking</h2>
              <p className="text-gray-700 mb-4">
                Folosim cookie-uri pentru:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Cookie-uri esențiale (funcționare platformă)</li>
                <li>• Cookie-uri de analiză (Google Analytics)</li>
                <li>• Cookie-uri de marketing (cu consimțământul tău)</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Vezi <Link href="/ro/cookie-policy" className="text-blue-600 hover:underline">Politica de Cookie-uri</Link> pentru detalii.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">8. Transferuri internaționale</h2>
              <p className="text-gray-700">
                Datele tale sunt stocate pe servere în UE. Dacă transferăm date în afara UE, folosim 
                clauze contractuale standard aprobate de Comisia Europeană.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Contact DPO</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-2">
                  <strong>Data Protection Officer (DPO):</strong>
                </p>
                <p className="text-gray-700">Email: dpo@loansai.com</p>
                <p className="text-gray-700">
                  Link: <Link href="/ro/contact" className="text-blue-600 hover:underline">Formular contact</Link>
                </p>
                <p className="text-gray-700 mt-4">
                  <strong>Autoritatea de supraveghere:</strong> Autoritatea Națională de Supraveghere a 
                  Prelucrării Datelor cu Caracter Personal (ANSPDCP)
                </p>
                <p className="text-gray-700">Website: <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.dataprotection.ro</a></p>
              </div>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-600">
              <p><strong>Ultima actualizare:</strong> 11 octombrie 2025</p>
            </div>
          </div>
        </div>
      </main>
      <RomaniaFooter />
    </>
  )
}
