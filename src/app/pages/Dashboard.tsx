import { Home } from 'lucide-react';
import { useNavigate } from 'react-router';
import logo from '/src/content/logo.svg';


export function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <img src={logo} alt="Pipelinr" className="h-10 w-auto" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Dashboard (Mockup)
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Dies ist ein Platzhalter für das Pipelinr Dashboard.
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
