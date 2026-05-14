import { Rocket, Github, Linkedin, Twitter } from 'lucide-react';
import { useNavigate } from 'react-router';

export function Footer() {
  const navigate = useNavigate();

  return (
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
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Preise</a></li>
              <li><button onClick={() => navigate('/teams')} className="hover:text-white transition-colors">Für Teams</button></li>
              <li><a href="#integrations" className="hover:text-white transition-colors">Integrationen</a></li>
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

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 DeployFlow. Alle Rechte vorbehalten.
          </p>

          <div className="flex items-center gap-4">
            <a href="#github" className="hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#linkedin" className="hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#twitter" className="hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
