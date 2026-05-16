import { useNavigate } from 'react-router';

export function CTASection() {
  const navigate = useNavigate();
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-cyan-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Bereit für schnellere Deployments?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Starte mit Pipelinr und automatisiere deinen Software-Release-Prozess noch heute.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/registration?plan=Free')}
            className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors text-lg font-medium"
          >
            Kostenlos starten
          </button>
          <button
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                const pricingSection = document.getElementById('pricing');
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
            className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors text-lg font-medium"
          >
            Preise ansehen
          </button>
        </div>
      </div>
    </section>
  );
}
