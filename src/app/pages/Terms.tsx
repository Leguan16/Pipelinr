import { useNavigate } from 'react-router';
import { Rocket } from 'lucide-react';
import {Footer} from "../components/Footer";

export function Terms() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Geltungsbereich</h2>
            <p className="text-gray-700 mb-6">
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der DeployFlow GmbH
              (nachfolgend "Anbieter") und ihren Kunden über die Nutzung der CI/CD-Plattform DeployFlow.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Vertragsgegenstand</h2>
            <p className="text-gray-700 mb-6">
              Der Anbieter stellt dem Kunden eine cloudbasierte CI/CD-Plattform zur Verfügung, über die der Kunde
              Build-, Test- und Deployment-Pipelines für seine Software-Projekte erstellen und ausführen kann.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Vertragsschluss und Registrierung</h2>
            <p className="text-gray-700 mb-4">
              3.1 Der Vertrag kommt durch die Registrierung des Kunden auf der Website des Anbieters zustande.
            </p>
            <p className="text-gray-700 mb-4">
              3.2 Der Kunde muss bei der Registrierung wahrheitsgemäße und vollständige Angaben machen.
            </p>
            <p className="text-gray-700 mb-6">
              3.3 Mit der Registrierung erklärt der Kunde sein Einverständnis mit diesen AGB.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Leistungsumfang</h2>
            <p className="text-gray-700 mb-4">
              4.1 Der Anbieter stellt dem Kunden die Plattform gemäß der gewählten Preisstufe zur Verfügung.
            </p>
            <p className="text-gray-700 mb-4">
              4.2 Der Anbieter gewährleistet eine Verfügbarkeit der Plattform von 99,5% im Jahresmittel.
            </p>
            <p className="text-gray-700 mb-6">
              4.3 Geplante Wartungsarbeiten werden dem Kunden mindestens 48 Stunden im Voraus angekündigt.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Preise und Zahlungsbedingungen</h2>
            <p className="text-gray-700 mb-4">
              5.1 Es gelten die zum Zeitpunkt der Buchung auf der Website angegebenen Preise.
            </p>
            <p className="text-gray-700 mb-4">
              5.2 Alle Preise verstehen sich zzgl. der gesetzlichen Umsatzsteuer.
            </p>
            <p className="text-gray-700 mb-4">
              5.3 Die Abrechnung erfolgt monatlich oder jährlich im Voraus, je nach gewähltem Abrechnungsintervall.
            </p>
            <p className="text-gray-700 mb-6">
              5.4 Die Zahlung erfolgt per Kreditkarte, Lastschrift oder Rechnung.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Vertragslaufzeit und Kündigung</h2>
            <p className="text-gray-700 mb-4">
              6.1 Der Vertrag wird für die vom Kunden gewählte Laufzeit (monatlich oder jährlich) geschlossen.
            </p>
            <p className="text-gray-700 mb-4">
              6.2 Der Vertrag verlängert sich automatisch um den gleichen Zeitraum, wenn er nicht mit einer Frist
              von 14 Tagen vor Ablauf gekündigt wird.
            </p>
            <p className="text-gray-700 mb-6">
              6.3 Das Recht zur außerordentlichen Kündigung bleibt unberührt.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Pflichten des Kunden</h2>
            <p className="text-gray-700 mb-4">
              7.1 Der Kunde ist verpflichtet, seine Zugangsdaten vertraulich zu behandeln.
            </p>
            <p className="text-gray-700 mb-4">
              7.2 Der Kunde darf die Plattform nicht für rechtswidrige Zwecke nutzen.
            </p>
            <p className="text-gray-700 mb-6">
              7.3 Der Kunde ist für regelmäßige Backups seiner Daten selbst verantwortlich.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Datenschutz und Datensicherheit</h2>
            <p className="text-gray-700 mb-6">
              Der Anbieter verarbeitet personenbezogene Daten des Kunden gemäß der DSGVO. Details entnehmen Sie
              bitte unserer Datenschutzerklärung.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Haftung</h2>
            <p className="text-gray-700 mb-4">
              9.1 Der Anbieter haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit.
            </p>
            <p className="text-gray-700 mb-4">
              9.2 Bei leichter Fahrlässigkeit haftet der Anbieter nur für die Verletzung wesentlicher Vertragspflichten.
            </p>
            <p className="text-gray-700 mb-6">
              9.3 Die Haftung für Datenverlust ist auf den typischen Wiederherstellungsaufwand beschränkt.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Änderungen der AGB</h2>
            <p className="text-gray-700 mb-6">
              Der Anbieter behält sich vor, diese AGB zu ändern. Änderungen werden dem Kunden mindestens 4 Wochen
              vor Inkrafttreten mitgeteilt. Widerspricht der Kunde nicht innerhalb von 4 Wochen, gelten die
              geänderten AGB als akzeptiert.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Schlussbestimmungen</h2>
            <p className="text-gray-700 mb-4">
              11.1 Es gilt das Recht der Bundesrepublik Deutschland.
            </p>
            <p className="text-gray-700 mb-4">
              11.2 Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen
              Bestimmungen unberührt.
            </p>
            <p className="text-gray-700 mb-6">
              11.3 Gerichtsstand ist Berlin.
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
