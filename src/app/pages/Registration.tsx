import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { Shield } from 'lucide-react';
import logo from '/src/content/logo.svg';

export function Registration() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const selectedPlan = searchParams.get('plan') || 'Free';

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email || !formData.email.includes('@')) {
      newErrors.email = 'Bitte gib eine gültige E-Mail-Adresse ein.';
    }

    if (!formData.password || formData.password.length < 8) {
      newErrors.password = 'Das Passwort muss mindestens 8 Zeichen lang sein.';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Die Passwörter stimmen nicht überein.';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'Bitte akzeptiere die AGB und Datenschutzbestimmungen.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      navigate(`/checkout?plan=${selectedPlan}`);
    }
  };

  return (
    <main id="main-content" className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="hidden lg:block">
          <div className="flex items-center gap-2 mb-6">
            <img src={logo} alt="Pipelinr" className="h-10 w-auto" />
            <span className="text-2xl font-semibold text-gray-900">Pipelinr</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Starte in wenigen Minuten
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Automatisierte Builds, Tests und Deployments für dein Team.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Sicher & Zuverlässig</h3>
                <p className="text-gray-600">Verschlüsselte Secrets und sichere Infrastruktur</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
          <div className="lg:hidden flex items-center gap-2 mb-6">
            <img src={logo} alt="Pipelinr" className="h-10 w-auto" />
            <span className="text-xl font-semibold text-gray-900">Pipelinr</span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Erstelle dein Pipelinr-Konto
          </h1>
          <p className="text-gray-600 mb-6">
            Registriere dich, um dein ausgewähltes Paket zu kaufen und deine CI/CD-Pipelines zu verwalten.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-900">
              <span className="font-medium">Ausgewähltes Paket:</span> {selectedPlan}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="reg-email" className="block text-sm font-medium text-gray-700 mb-2">
                E-Mail-Adresse
              </label>
              <input
                id="reg-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@unternehmen.com"
                aria-required="true"
                aria-describedby={errors.email ? 'reg-email-error' : undefined}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <p id="reg-email-error" role="alert" className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="reg-password" className="block text-sm font-medium text-gray-700 mb-2">
                Passwort erstellen
              </label>
              <input
                id="reg-password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="Mindestens 8 Zeichen"
                aria-required="true"
                aria-describedby={errors.password ? 'reg-password-error' : undefined}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.password && (
                <p id="reg-password-error" role="alert" className="text-red-600 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <div>
              <label htmlFor="reg-confirm-password" className="block text-sm font-medium text-gray-700 mb-2">
                Passwort bestätigen
              </label>
              <input
                id="reg-confirm-password"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                placeholder="Passwort erneut eingeben"
                aria-required="true"
                aria-describedby={errors.confirmPassword ? 'reg-confirm-error' : undefined}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.confirmPassword && (
                <p id="reg-confirm-error" role="alert" className="text-red-600 text-sm mt-1">{errors.confirmPassword}</p>
              )}
            </div>

            <div>
              <label htmlFor="reg-agree-terms" className="flex items-start gap-3 cursor-pointer">
                <input
                  id="reg-agree-terms"
                  type="checkbox"
                  checked={formData.agreeToTerms}
                  onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                  aria-required="true"
                  aria-describedby={errors.agreeToTerms ? 'reg-terms-error' : undefined}
                  className="w-5 h-5 mt-0.5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">
                  Ich akzeptiere die{' '}
                  <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    AGB
                  </a>{' '}
                  und{' '}
                  <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Datenschutzbestimmungen
                  </a>
                  .
                </span>
              </label>
              {errors.agreeToTerms && (
                <p id="reg-terms-error" role="alert" className="text-red-600 text-sm mt-1">{errors.agreeToTerms}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
            >
              Konto erstellen und weiter zum Kauf
            </button>

            <p className="text-center text-sm text-gray-600">
              Du hast bereits ein Konto?{' '}
              <a href="/login" className="text-blue-600 hover:underline font-medium">
                Anmelden
              </a>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
