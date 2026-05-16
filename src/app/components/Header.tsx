import logo from '/src/content/logo.svg';
import {useLocation, useNavigate} from 'react-router';

const navBtnClass = "relative text-gray-600 hover:text-blue-600 transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-200";

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
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:font-medium focus:shadow-lg"
      >
        Zum Hauptinhalt springen
      </a>

      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <img src={logo} alt="" className="h-10 w-auto" />
              <span className="text-xl font-semibold text-gray-900">Pipelinr</span>
            </button>

            <nav className="hidden md:flex items-center gap-8" aria-label="Hauptnavigation">
              <button onClick={() => handleHashNav('features')} className={navBtnClass}>Features</button>
              <button onClick={() => handleHashNav('pricing')} className={navBtnClass}>Preise</button>
              <button onClick={() => navigate('/teams')} className={navBtnClass}>Für Teams</button>
              <button onClick={() => navigate('/contact')} className={navBtnClass}>Kontakt</button>
            </nav>

            <button
              onClick={() => navigate('/registration?plan=Free')}
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Kostenlos starten
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
