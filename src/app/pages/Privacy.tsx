import { useNavigate } from 'react-router';
import { Rocket } from 'lucide-react';
import {Footer} from "../components/Footer";

export function Privacy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button onClick={() => navigate('/')} className="flex items-center gap-2">
              <Rocket className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-semibold text-gray-900">DeployFlow</span>
            </button>

            <button
              onClick={() => navigate('/')}
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Zur Startseite
            </button>
          </div>
        </div>
      </header>

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Datenschutz auf einen Blick</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Allgemeine Hinweise</h3>
            <p className="text-gray-700 mb-6">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
              persönlich identifiziert werden können.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Datenerfassung auf dieser Website</h3>
            <p className="text-gray-700 mb-4">
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
            </p>
            <p className="text-gray-700 mb-6">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
              können Sie dem Impressum dieser Website entnehmen.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Hosting</h2>
            <p className="text-gray-700 mb-6">
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>
            <p className="text-gray-700 mb-6">
              Die Server befinden sich in Deutschland. Die Nutzung erfolgt im Interesse einer sicheren, schnellen
              und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6
              Abs. 1 lit. f DSGVO).
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Datenschutz</h3>
            <p className="text-gray-700 mb-6">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
              personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie
              dieser Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Hinweis zur verantwortlichen Stelle</h3>
            <p className="text-gray-700 mb-6">
              DeployFlow GmbH<br />
              Musterstraße 123<br />
              10115 Berlin<br />
              Deutschland<br />
              <br />
              E-Mail: datenschutz@deployflow.com
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Speicherdauer</h3>
            <p className="text-gray-700 mb-6">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
              Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Datenerfassung auf dieser Website</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Server-Log-Dateien</h3>
            <p className="text-gray-700 mb-6">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien,
              die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Kontaktformular</h3>
            <p className="text-gray-700 mb-6">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
              inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall
              von Anschlussfragen bei uns gespeichert.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Registrierung auf dieser Website</h3>
            <p className="text-gray-700 mb-6">
              Sie können sich auf dieser Website registrieren, um zusätzliche Funktionen zu nutzen. Die dazu eingegebenen
              Daten verwenden wir nur zum Zwecke der Nutzung des jeweiligen Angebotes oder Dienstes, für den Sie sich
              registriert haben.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Ihre Rechte</h2>
            <p className="text-gray-700 mb-4">
              Sie haben jederzeit das Recht:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten</li>
              <li>Berichtigung unrichtiger personenbezogener Daten zu verlangen</li>
              <li>Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
              <li>Einschränkung der Datenverarbeitung zu verlangen</li>
              <li>Widerspruch gegen die Verarbeitung Ihrer Daten einzulegen</li>
              <li>Datenübertragbarkeit zu verlangen</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Widerruf Ihrer Einwilligung zur Datenverarbeitung</h2>
            <p className="text-gray-700 mb-6">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine
              bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
              Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>

            <p className="text-gray-700 mt-8 text-sm">
              Stand: Mai 2026
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
