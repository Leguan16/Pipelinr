import { useSearchParams, useNavigate } from 'react-router';
import { CheckCircle, GitBranch, Workflow, Users } from 'lucide-react';

export function Success() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const selectedPlan = searchParams.get('plan') || 'Free';

  const nextSteps = [
    {
      icon: GitBranch,
      title: 'Git-Repository verbinden',
      description: 'Verbinde dein GitHub, GitLab oder Bitbucket Repository',
    },
    {
      icon: Workflow,
      title: 'Erste Pipeline erstellen',
      description: 'Erstelle deine erste Build- und Deployment-Pipeline',
    },
    {
      icon: Users,
      title: 'Teammitglieder einladen',
      description: 'Lade dein Team ein und startet gemeinsam durch',
    },
  ];

  return (
    <main id="main-content" className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-white flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-200">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-16 h-16 text-green-600" />
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Willkommen bei Pipelinr
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            Dein Konto wurde erstellt und dein Paket wurde erfolgreich aktiviert.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 inline-block">
            <p className="text-sm text-blue-900">
              <span className="font-medium">Aktives Paket:</span> {selectedPlan}
            </p>
          </div>

          <button
            onClick={() => navigate('/dashboard')}
            className="bg-blue-600 text-white py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg mb-12"
          >
            Zum Dashboard
          </button>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Nächste Schritte
            </h2>

            <div className="grid gap-6 text-left">
              {nextSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-gray-500 mt-8">
          Fragen?{' '}
          <button
            type="button"
            onClick={() => navigate('/contact')}
            className="text-blue-600 underline underline-offset-2 hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
          >
            Kontaktiere unseren Support
          </button>
          .
        </p>
      </div>
    </main>
  );
}
