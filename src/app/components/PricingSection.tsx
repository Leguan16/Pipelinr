import { Check, Star } from 'lucide-react';
import { useNavigate } from 'react-router';

export function PricingSection() {
  const navigate = useNavigate();
  const plans = [
    {
      name: 'Free',
      price: '0 €',
      period: '/ Monat',
      description: 'Für einzelne Entwickler und kleine Testprojekte.',
      features: [
        '1 Projekt',
        '100 Build-Minuten pro Monat',
        'Einfache Pipelines',
        'Community-Support',
      ],
      buttonText: 'Free starten',
      buttonVariant: 'outline' as const,
      popular: false,
    },
    {
      name: 'Pro',
      price: '19 €',
      period: '/ Nutzer / Monat',
      description: 'Für wachsende Entwicklerteams.',
      features: [
        'Unbegrenzte Projekte',
        '2.000 Build-Minuten pro Monat',
        'GitHub, GitLab & Bitbucket Integration',
        'Benachrichtigungen per E-Mail und Slack',
        'Erweiterte Build-Logs',
      ],
      buttonText: 'Pro kaufen',
      buttonVariant: 'outline' as const,
      popular: false,
    },
    {
      name: 'Business',
      price: '49 €',
      period: '/ Nutzer / Monat',
      description: 'Für Unternehmen mit höheren Anforderungen.',
      features: [
        'Alles aus Pro',
        'Secret Management',
        'Rollen- und Rechteverwaltung',
        'Mehrere Deployment-Umgebungen',
        'Prioritäts-Support',
        'Audit-Logs',
      ],
      buttonText: 'Business kaufen',
      buttonVariant: 'primary' as const,
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Individuell',
      period: '',
      description: 'Für große Unternehmen mit speziellen Sicherheits- und Infrastruktur-Anforderungen.',
      features: [
        'Alles aus Business',
        'Single Sign-On',
        'Eigene Server / Self-Hosting',
        'Persönlicher Ansprechpartner',
        'Individuelle SLAs',
      ],
      buttonText: 'Kontakt aufnehmen',
      buttonVariant: 'outline' as const,
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Wähle das passende Modell für dein Team
          </h2>
          <p className="text-xl text-gray-600">
            Starte kostenlos und skaliere, wenn dein Team wächst.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 border-2 transition-all ${
                plan.popular
                  ? 'border-blue-600 shadow-xl scale-105'
                  : 'border-gray-200 hover:border-gray-300'
              } relative`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Beliebt
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <p className="text-sm text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => navigate(`/registration?plan=${plan.name}`)}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.buttonVariant === 'primary'
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'border-2 border-gray-300 text-gray-700 hover:border-gray-400'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
