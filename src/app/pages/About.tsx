import { useNavigate } from 'react-router';
import { Rocket, Target, Users, Zap, Heart, TrendingUp } from 'lucide-react';

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
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button onClick={() => navigate('/')} className="flex items-center gap-2">
              <Rocket className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-semibold text-gray-900">DeployFlow</span>
            </button>

            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => navigate('/#features')} className="text-gray-600 hover:text-gray-900 transition-colors">Features</button>
              <button onClick={() => navigate('/#pricing')} className="text-gray-600 hover:text-gray-900 transition-colors">Preise</button>
              <button onClick={() => navigate('/teams')} className="text-gray-600 hover:text-gray-900 transition-colors">Für Teams</button>
              <button onClick={() => navigate('/contact')} className="text-gray-600 hover:text-gray-900 transition-colors">Kontakt</button>
            </nav>

            <button
              onClick={() => navigate('/registration?plan=Free')}
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Kostenlos starten
            </button>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Über DeployFlow
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Wir sind ein Team aus Entwicklern, die verstehen, wie frustrierend komplexe
            Deployment-Prozesse sein können. Deshalb haben wir DeployFlow entwickelt –
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
                DeployFlow wurde gegründet, um diesen neuen Anforderungen gerecht zu werden. Wir glauben,
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
    </div>
  );
}
