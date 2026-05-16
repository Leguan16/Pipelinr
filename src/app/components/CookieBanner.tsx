import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { Cookie } from 'lucide-react';

export function CookieBanner() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const rejectRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  useEffect(() => {
    if (visible) {
      rejectRef.current?.focus();
    }
  }, [visible]);

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  }

  function reject() {
    localStorage.setItem('cookie-consent', 'rejected');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie-Einstellungen"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
    >
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Cookie className="w-6 h-6 text-blue-600 shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" />

        <p className="text-sm text-gray-600 flex-1">
          Wir nutzen Cookies um unsere Website zu betreiben und zu verbessern. Dazu zählen technisch Notwendige und Cookies die zu Analysezwecken dienen.
          Mit „Akzeptieren" stimmen Sie der Verwendung aller Cookies zu. Wenn Sie optionale Cookies ablehnen, werden nur technisch notwendige Cookies gesetzt.
          Weitere Informationen finden Sie in der{' '}
          <button
            onClick={() => navigate('/privacy')}
            className="text-blue-600 underline underline-offset-2 hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
          >
            Datenschutzerklärung
          </button>
          .
        </p>

        <div className="flex gap-2 shrink-0">
          <button
            ref={rejectRef}
            onClick={reject}
            className="px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Ablehnen
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
