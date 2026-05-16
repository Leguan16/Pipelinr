import { CheckCircle2, TrendingUp, Zap } from 'lucide-react';
import { useNavigate } from 'react-router';

export function HeroSection() {
  const navigate = useNavigate();

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Automatisiere deine Builds, Tests und Deployments
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Pipelinr ist die CI/CD-Plattform für moderne Entwicklerteams. Erstelle Pipelines,
              führe Tests automatisch aus und veröffentliche Software schneller und zuverlässiger.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/registration?plan=Free')}
                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
              >
                Kostenlos starten
              </button>
              <button
                onClick={scrollToFeatures}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors text-lg font-medium"
              >
                Features ansehen
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Pipeline-Übersicht</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">Build erfolgreich</div>
                    <div className="text-xs text-gray-500">vor 2 Minuten</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">Tests bestanden</div>
                    <div className="text-xs text-gray-500">vor 5 Minuten</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <Zap className="w-5 h-5 text-blue-600 animate-pulse" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">Deployment läuft...</div>
                    <div className="text-xs text-gray-600">Progress: 75%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                  <span className="text-2xl font-bold text-gray-900">98%</span>
                </div>
                <div className="text-xs text-gray-600">Erfolgreiche Builds</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900 mb-1">2.000</div>
                <div className="text-xs text-gray-600">Build-Minuten</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900 mb-1">12</div>
                <div className="text-xs text-gray-600">Deployments heute</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
