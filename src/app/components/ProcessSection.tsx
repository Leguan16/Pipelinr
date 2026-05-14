import { Code, PlayCircle, CheckCircle, Package, Rocket, ArrowRight } from 'lucide-react';

export function ProcessSection() {
  const steps = [
    {
      icon: Code,
      title: 'Code pushen',
      description: 'Push deinen Code in dein Git-Repository',
    },
    {
      icon: PlayCircle,
      title: 'Pipeline startet automatisch',
      description: 'DeployFlow erkennt den Commit und startet',
    },
    {
      icon: CheckCircle,
      title: 'Tests werden ausgeführt',
      description: 'Alle definierten Tests laufen automatisch',
    },
    {
      icon: Package,
      title: 'Build wird erstellt',
      description: 'Deine Anwendung wird gebaut und paketiert',
    },
    {
      icon: Rocket,
      title: 'Deployment erfolgt',
      description: 'Automatisches Deployment in deine Umgebung',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Von Code zu Deployment in wenigen Minuten
          </h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600"></div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 relative z-10">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 z-0">
                    <ArrowRight className="w-8 h-8 text-blue-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
