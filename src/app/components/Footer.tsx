import { Github, Linkedin } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router';
import logo from '/src/content/logo.svg';

const footerBtnClass = "hover:text-white transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white";

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHashNav = (hash: string) => {
    if (location.pathname === '/') {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${hash}`);
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Pipelinr" className="h-10 w-auto" />
              <span className="text-xl font-semibold text-white">Pipelinr</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Pipelinr automatisiert Builds, Tests und Deployments für moderne Softwareteams.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Produkt</h3>
            <ul className="space-y-2">
              <li><button onClick={() => handleHashNav('features')} className={footerBtnClass}>Features</button></li>
              <li><button onClick={() => handleHashNav('pricing')} className={footerBtnClass}>Preise</button></li>
              <li><button onClick={() => navigate('/teams')} className={footerBtnClass}>Für Teams</button></li>
              <li><button onClick={() => handleHashNav('integrations')} className={footerBtnClass}>Integrationen</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Unternehmen</h3>
            <ul className="space-y-2">
              <li><button onClick={() => navigate('/about')} className={footerBtnClass}>Über uns</button></li>
              <li><button onClick={() => navigate('/contact')} className={footerBtnClass}>Kontakt</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li><button onClick={() => navigate('/imprint')} className={footerBtnClass}>Impressum</button></li>
              <li><button onClick={() => navigate('/privacy')} className={footerBtnClass}>Datenschutz</button></li>
              <li><button onClick={() => navigate('/terms')} className={footerBtnClass}>AGB</button></li>
              <li><button onClick={() => navigate('/accessibility')} className={footerBtnClass}>Barrierefreiheit</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 Pipelinr. Alle Rechte vorbehalten.
          </p>

          <div className="flex items-center gap-4">
            <a href="#github" className="hover:text-white transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white" aria-label="Visit our GitHub Profile">
              <Github className="w-5 h-5" />
            </a>
            <a href="#linkedin" className="hover:text-white transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white" aria-label="Visit our Linked-In Profile">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
