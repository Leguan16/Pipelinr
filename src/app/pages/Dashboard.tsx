import { Rocket, Home } from 'lucide-react';
import { useNavigate } from 'react-router';

export function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <Rocket className="w-24 h-24 text-blue-600 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Dashboard (Mockup)
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Dies ist ein Platzhalter für das DeployFlow Dashboard.
        </p>
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          <Home className="w-5 h-5" />
          Zurück zur Startseite
        </button>
      </div>
    </div>
  );
}
