import { useState } from 'react';
import { useNavigate } from 'react-router';
import logo from '/src/content/logo.svg';


export function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
          <div className="flex items-center gap-2 mb-6 justify-center">
            <img src={logo} alt="Pipelinr" className="h-10 w-auto" />
            <span className="text-xl font-semibold text-gray-900">Pipelinr</span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            Anmelden
          </h1>
          <p className="text-gray-600 mb-8 text-center">
            Melde dich bei deinem Pipelinr-Konto an.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                E-Mail-Adresse
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@unternehmen.com"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Passwort
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="Dein Passwort"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-gray-700">Angemeldet bleiben</span>
              </label>
              <a href="#forgot" className="text-blue-600 hover:underline">
                Passwort vergessen?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
            >
              Anmelden
            </button>

            <p className="text-center text-sm text-gray-600">
              Noch kein Konto?{' '}
              <button
                type="button"
                onClick={() => navigate('/registration?plan=Free')}
                className="text-blue-600 hover:underline font-medium"
              >
                Jetzt registrieren
              </button>
            </p>
          </form>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="text-blue-600 hover:underline"
          >
            ← Zurück zur Startseite
          </button>
        </p>
      </div>
    </div>
  );
}
