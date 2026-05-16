import logo from '/src/content/logo.svg';
import {useLocation, useNavigate} from 'react-router';

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHashNav = (hash: string) => {
    if (location.pathname === '/') {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate({pathname: "/", hash: hash});
    }
  };
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Pipelinr" className="h-10 w-auto" />
            <span className="text-xl font-semibold text-gray-900">Pipelinr</span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => handleHashNav('features')} className="relative text-gray-600 hover:text-blue-600 transition-colors after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-200">Features</button>
            <button onClick={() => handleHashNav('pricing')} className="relative text-gray-600 hover:text-blue-600 transition-colors after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-200">Preise</button>
            <button onClick={() => navigate('/teams')} className="relative text-gray-600 hover:text-blue-600 transition-colors after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-200">Für Teams</button>
            <button onClick={() => navigate('/contact')} className="relative text-gray-600 hover:text-blue-600 transition-colors after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-200">Kontakt</button>
          </nav>

          <button
            onClick={() => navigate('/registration?plan=Free')}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Kostenlos starten
          </button>
        </div>
      </div>
    </header>
  );
}
