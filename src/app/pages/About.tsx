import { useNavigate } from 'react-router';
import { Target, Users, Zap, Heart, TrendingUp } from 'lucide-react';
import {Footer} from "../components/Footer";
import {Header} from "../components/Header";
import logo from '/src/content/logo.svg';

export function About() {
  const navigate = useNavigate();

  const values = [
    {
      icon: Target,
      title: 'Mission-driven',
      description: 'Wir wollen Entwicklerteams weltweit dabei helfen, schneller und zuverlässiger Software zu deployen.',
    },
    {
      icon: Users,
      title: 'Team-orientiert',
      description: 'Zusammenarbeit steht im Mittelpunkt – sowohl intern als auch für unsere Kunden.',
    },
    {
      icon: Zap,
      title: 'Schnell & Innovativ',
      description: 'Wir entwickeln kontinuierlich neue Features und verbessern bestehende Prozesse.',
    },
    {
      icon: Heart,
      title: 'Kundenorientiert',
      description: 'Der Erfolg unserer Kunden ist unser Erfolg. Feedback ist der Kern unserer Produktentwicklung.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Über Pipelinr
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Wir sind ein Team aus Entwicklern, die verstehen, wie frustrierend komplexe
            Deployment-Prozesse sein können. Deshalb haben wir Pipelinr entwickelt –
            eine CI/CD-Plattform, die einfach, schnell und zuverlässig ist.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Unsere Mission
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Software-Entwicklung hat sich in den letzten Jahren massiv verändert. Teams arbeiten
                remote, Deployments müssen schneller gehen, und die Anforderungen an Sicherheit und
                Zuverlässigkeit steigen.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Pipelinr wurde gegründet, um diesen neuen Anforderungen gerecht zu werden. Wir glauben,
                dass CI/CD nicht kompliziert sein muss – und dass jedes Team, egal ob Startup oder
                Enterprise, Zugang zu professionellen Deployment-Tools haben sollte.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <TrendingUp className="w-12 h-12" />
                  <div>
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-blue-100">Teams weltweit</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Zap className="w-12 h-12" />
                  <div>
                    <div className="text-3xl font-bold">1M+</div>
                    <div className="text-blue-100">Deployments pro Monat</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Users className="w-12 h-12" />
                  <div>
                    <div className="text-3xl font-bold">5.000+</div>
                    <div className="text-blue-100">Entwickler vertrauen uns</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Unsere Werte
            </h2>
            <p className="text-xl text-gray-600">
              Was uns antreibt und wie wir arbeiten
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Marke und Klassifikation</h2>
          </div>

          <div className="rounded-xl border border-gray-200 overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-3 px-6 py-3 bg-gray-50 border-b border-gray-200 text-sm font-semibold text-gray-700">
              <span>Kategorie</span>
              <span>Darstellung</span>
              <span>Beschreibung</span>
            </div>

            {/* Row 1 */}
            <div className="grid grid-cols-3 px-6 py-5 border-b border-gray-100 items-center">
              <div>
                <p className="font-bold text-gray-900 text-sm">Nizza-Klasse 42</p>
                <p className="text-xs text-gray-500 mt-0.5">SaaS &amp; IT-Dienste</p>
              </div>
              <span className="text-sm text-gray-600">Software as a Service</span>
              <span className="text-sm text-blue-600">CI/CD-Pipelines, Cloud-Computing, automatisierte Build-, Test- und Deployment-Prozesse</span>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-3 px-6 py-5 border-b border-gray-100 items-center">
              <span className="font-bold text-gray-900 text-sm">Wortmarke</span>
              <span className="text-base font-bold text-gray-900">Pipelinr</span>
              <span className="text-sm text-blue-600">Reine Textmarke ohne grafische Elemente</span>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-3 px-6 py-5 border-b border-gray-100 items-center">
              <span className="font-bold text-gray-900 text-sm">Bildmarke</span>
              <img src={logo} alt="Pipelinr Logo" className="h-9 w-auto" />
              <span className="text-sm text-blue-600">Grafisches Element ohne Text</span>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-3 px-6 py-5 border-b border-gray-100 items-center">
              <span className="font-bold text-gray-900 text-sm">Wort-/Bildmarke</span>
              <div className="flex items-center gap-2">
                <img src={logo} alt="Pipelinr Logo" className="h-9 w-auto" />
                <span className="text-base font-bold text-gray-900">Pipelinr</span>
              </div>
              <span className="text-sm text-blue-600">Kombination aus Logo und Schriftzug</span>
            </div>

            {/* Row 5 */}
            <div className="grid grid-cols-3 px-6 py-5 items-center">
              <span className="font-bold text-gray-900 text-sm">Farbmarke</span>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-md inline-block flex-shrink-0" style={{ background: '#60A5FA' }} />
                  <span className="text-xs font-mono text-gray-600">#60A5FA</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-md inline-block flex-shrink-0" style={{ background: '#34D399' }} />
                  <span className="text-xs font-mono text-gray-600">#34D399</span>
                </div>
              </div>
              <span className="text-sm text-blue-600">Die Logofarben</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Teil unserer Story werden
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Wir wachsen schnell und suchen immer nach talentierten Menschen, die unsere Vision teilen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/registration?plan=Free')}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Kostenlos starten
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors font-medium"
            >
              Kontakt aufnehmen
            </button>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
