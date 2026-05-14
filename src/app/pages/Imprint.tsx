import { useNavigate } from 'react-router';
import { Rocket } from 'lucide-react';
import {Footer} from "../components/Footer";
import {Header} from "../components/Header";

export function Imprint() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header/>

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="text-gray-700 mb-6">
              DeployFlow GmbH<br />
              Musterstraße 123<br />
              10115 Berlin<br />
              Deutschland
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Vertreten durch</h2>
            <p className="text-gray-700 mb-6">
              Geschäftsführer: Max Mustermann
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Kontakt</h2>
            <p className="text-gray-700 mb-6">
              Telefon: +49 30 1234 5678<br />
              E-Mail: info@deployflow.com
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Registereintrag</h2>
            <p className="text-gray-700 mb-6">
              Eintragung im Handelsregister<br />
              Registergericht: Amtsgericht Berlin-Charlottenburg<br />
              Registernummer: HRB 123456
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Umsatzsteuer-ID</h2>
            <p className="text-gray-700 mb-6">
              Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:<br />
              DE123456789
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p className="text-gray-700 mb-6">
              Max Mustermann<br />
              Musterstraße 123<br />
              10115 Berlin
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">EU-Streitschlichtung</h2>
            <p className="text-gray-700 mb-6">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              <a href="https://ec.europa.eu/consumers/odr" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                https://ec.europa.eu/consumers/odr
              </a>
              <br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Verbraucherstreitbeilegung</h2>
            <p className="text-gray-700 mb-6">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Haftungsausschluss</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Haftung für Inhalte</h3>
            <p className="text-gray-700 mb-6">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
              zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Haftung für Links</h3>
            <p className="text-gray-700 mb-6">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Urheberrecht</h3>
            <p className="text-gray-700 mb-6">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
