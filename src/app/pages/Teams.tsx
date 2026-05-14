import { useNavigate } from 'react-router';
import { Rocket, Users, Shield, Zap, GitBranch, BarChart, Lock, MessageSquare, Clock, CheckCircle } from 'lucide-react';

export function Teams() {
  const navigate = useNavigate();

  const teamFeatures = [
    {
      icon: Users,
      title: 'Zentrale Teamverwaltung',
      description: 'Verwalte alle Teammitglieder an einem Ort. Weise Rollen zu und kontrolliere Zugriffsrechte für jedes Projekt.',
    },
    {
      icon: Shield,
      title: 'Erweiterte Sicherheit',
      description: 'SSO, 2FA und granulare Berechtigungen sorgen dafür, dass deine Deployments sicher bleiben.',
    },
    {
      icon: GitBranch,
      title: 'Branch-Protection & Reviews',
      description: 'Schütze wichtige Branches und verlange Code-Reviews bevor Deployments ausgeführt werden.',
    },
    {
      icon: BarChart,
      title: 'Team-Analytics',
      description: 'Behalte den Überblick über Build-Zeiten, Deployment-Frequenz und Team-Performance.',
    },
    {
      icon: Lock,
      title: 'Secrets Management',
      description: 'Sichere Verwaltung von API-Keys und Credentials mit Zugriffskontrolle auf Team-Ebene.',
    },
    {
      icon: MessageSquare,
      title: 'Slack & Teams Integration',
      description: 'Erhalte Benachrichtigungen direkt in euren Team-Channels bei erfolgreichen oder fehlgeschlagenen Deployments.',
    },
  ];

  const benefits = [
    'Unbegrenzte Projekte und Repositories',
    'Mehrere Deployment-Umgebungen (Dev, Staging, Production)',
    'Audit-Logs für Compliance',
    'Prioritäts-Support',
    'Onboarding-Session für dein Team',
    'Dedizierter Customer Success Manager ab 10 Nutzern',
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
              <button onClick={() => navigate('/teams')} className="text-gray-900 font-medium">Für Teams</button>
              <button onClick={() => navigate('/#contact')} className="text-gray-600 hover:text-gray-900 transition-colors">Kontakt</button>
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
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
            <Users className="w-5 h-5" />
            <span className="text-sm font-medium">Für Teams entwickelt</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            CI/CD für das gesamte Team
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            DeployFlow wurde speziell für Entwicklerteams entwickelt. Arbeitet zusammen an Pipelines,
            teilt Secrets sicher und deployt schneller – mit voller Kontrolle und Transparenz.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => navigate('/registration?plan=Business')}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
            >
              Business Plan testen
            </button>
            <button
              onClick={() => navigate('/registration?plan=Enterprise')}
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors text-lg font-medium"
            >
              Enterprise anfragen
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Teams weltweit</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-sm text-gray-600">Uptime SLA</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-sm text-gray-600">Deployments/Tag</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Leistungsstarke Features für Teams
            </h2>
            <p className="text-xl text-gray-600">
              Alles, was dein Team braucht, um effizient zusammenzuarbeiten
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Warum Teams DeployFlow wählen
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Von kleinen Startups bis zu großen Unternehmen – DeployFlow skaliert mit deinem Team.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Schneller Onboarding-Prozess</h3>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Team erstellen</h4>
                    <p className="text-sm text-gray-600">Starte mit einem kostenlosen Account und lade dein Team ein</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Repositories verbinden</h4>
                    <p className="text-sm text-gray-600">Integriere GitHub, GitLab oder Bitbucket mit einem Klick</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Pipelines konfigurieren</h4>
                    <p className="text-sm text-gray-600">Erstelle deine ersten Pipelines mit unserem visuellen Builder</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Deployen!</h4>
                    <p className="text-sm text-gray-600">Euer Team ist bereit für automatisierte Deployments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Bereit, mit deinem Team zu starten?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Teste DeployFlow 14 Tage kostenlos mit deinem Team. Keine Kreditkarte erforderlich.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/registration?plan=Business')}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors text-lg font-medium"
            >
              Kostenlos testen
            </button>
            <button
              onClick={() => navigate('/#pricing')}
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors text-lg font-medium"
            >
              Preise ansehen
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Rocket className="w-8 h-8 text-blue-500" />
                <span className="text-xl font-semibold text-white">DeployFlow</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                DeployFlow automatisiert Builds, Tests und Deployments für moderne Softwareteams.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Produkt</h3>
              <ul className="space-y-2">
                <li><button onClick={() => navigate('/#features')} className="hover:text-white transition-colors">Features</button></li>
                <li><button onClick={() => navigate('/#pricing')} className="hover:text-white transition-colors">Preise</button></li>
                <li><a href="#integrations" className="hover:text-white transition-colors">Integrationen</a></li>
                <li><a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Unternehmen</h3>
              <ul className="space-y-2">
                <li><button onClick={() => navigate('/about')} className="hover:text-white transition-colors">Über uns</button></li>
                <li><button onClick={() => navigate('/contact')} className="hover:text-white transition-colors">Kontakt</button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Rechtliches</h3>
              <ul className="space-y-2">
                <li><button onClick={() => navigate('/imprint')} className="hover:text-white transition-colors">Impressum</button></li>
                <li><button onClick={() => navigate('/privacy')} className="hover:text-white transition-colors">Datenschutz</button></li>
                <li><button onClick={() => navigate('/terms')} className="hover:text-white transition-colors">AGB</button></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2026 DeployFlow. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
