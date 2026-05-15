import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { Check, CreditCard, AlertCircle } from 'lucide-react';
import {Footer} from "../components/Footer";
import logo from '/src/content/logo.svg';

const planDetails = {
  Free: {
    name: 'Free',
    price: '0 €',
    period: '/ Monat',
    features: [
      '1 Projekt',
      '100 Build-Minuten pro Monat',
      'Einfache Pipelines',
      'Community-Support',
    ],
  },
  Pro: {
    name: 'Pro',
    price: '19 €',
    period: '/ Nutzer / Monat',
    features: [
      'Unbegrenzte Projekte',
      '2.000 Build-Minuten pro Monat',
      'Git-Integration',
      'Benachrichtigungen',
      'Erweiterte Build-Logs',
    ],
  },
  Business: {
    name: 'Business',
    price: '49 €',
    period: '/ Nutzer / Monat',
    features: [
      'Alles aus Pro',
      'Secret Management',
      'Rollen- und Rechteverwaltung',
      'Mehrere Deployment-Umgebungen',
      'Prioritäts-Support',
      'Audit-Logs',
    ],
  },
  Enterprise: {
    name: 'Enterprise',
    price: 'Individuell',
    period: '',
    features: [
      'Alles aus Business',
      'Single Sign-On',
      'Eigene Server / Self-Hosting',
      'Persönlicher Ansprechpartner',
      'Individuelle SLAs',
    ],
  },
};

export function Checkout() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const selectedPlan = (searchParams.get('plan') || 'Free') as keyof typeof planDetails;
  const plan = planDetails[selectedPlan];

  const [billingInterval, setBillingInterval] = useState<'monthly' | 'yearly'>('monthly');
  const [formData, setFormData] = useState({
    companyName: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    country: 'Deutschland',
    cardHolder: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/success?plan=${selectedPlan}`);
  };

  const isEnterprise = selectedPlan === 'Enterprise';
  const priceNumber = parseFloat(plan.price.replace(/[^0-9]/g, '')) || 0;
  const subtotal = billingInterval === 'yearly' ? priceNumber * 12 * 0.9 : priceNumber;
  const tax = subtotal * 0.19;
  const total = subtotal + tax;

  if (isEnterprise) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <img src={logo} alt="DeployFlow" className="h-10 w-auto" />
            <span className="text-xl font-semibold text-gray-900">DeployFlow</span>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Enterprise Anfrage
            </h1>
            <p className="text-gray-600 mb-8">
              Sende uns eine Anfrage und wir melden uns zeitnah bei dir, um deine individuellen Anforderungen zu besprechen.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Unternehmensname
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ansprechpartner
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-Mail
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nachricht
                </label>
                <textarea
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Erzähle uns von deinen Anforderungen..."
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => navigate('/')}
                  className="flex-1 border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:border-gray-400 transition-colors font-medium"
                >
                  Zurück zu den Paketen
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Anfrage senden
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <img src={logo} alt="DeployFlow" className="h-10 w-auto" />
          <span className="text-xl font-semibold text-gray-900">DeployFlow</span>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                ✓
              </div>
              <span className="text-sm text-gray-600">Paket wählen</span>
            </div>
            <div className="w-16 h-0.5 bg-green-600"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                ✓
              </div>
              <span className="text-sm text-gray-600">Konto erstellen</span>
            </div>
            <div className="w-16 h-0.5 bg-blue-600"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                3
              </div>
              <span className="text-sm font-medium text-gray-900">Kauf abschließen</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 mb-6">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-yellow-900">Demo-Checkout – keine echte Zahlung</p>
                  <p className="text-xs text-yellow-700 mt-1">Dies ist ein Mockup. Es werden keine echten Zahlungsdaten verarbeitet.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Rechnungsdaten</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Unternehmensname
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vorname
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nachname
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rechnungsadresse
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      PLZ
                    </label>
                    <input
                      type="text"
                      value={formData.zipCode}
                      onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Stadt
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Land
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Deutschland</option>
                    <option>Österreich</option>
                    <option>Schweiz</option>
                  </select>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <CreditCard className="w-6 h-6" />
                    Zahlungsdaten
                  </h2>

                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Karteninhaber
                      </label>
                      <input
                        type="text"
                        value={formData.cardHolder}
                        onChange={(e) => setFormData({ ...formData, cardHolder: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Kartennummer
                      </label>
                      <input
                        type="text"
                        value={formData.cardNumber}
                        onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                        placeholder="4242 4242 4242 4242"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Ablaufdatum
                        </label>
                        <input
                          type="text"
                          value={formData.expiry}
                          onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                          placeholder="MM/JJ"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          CVC
                        </label>
                        <input
                          type="text"
                          value={formData.cvc}
                          onChange={(e) => setFormData({ ...formData, cvc: e.target.value })}
                          placeholder="123"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button
                    type="button"
                    onClick={() => navigate('/')}
                    className="flex-1 border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:border-gray-400 transition-colors font-medium"
                  >
                    Zurück zu den Paketen
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    {selectedPlan === 'Free' ? 'Kostenlos starten' : `${selectedPlan} kaufen`}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Bestellübersicht</h2>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-gray-900">{plan.name}</span>
                  <span className="text-2xl font-bold text-gray-900">{plan.price}</span>
                </div>
                <span className="text-sm text-gray-600">{plan.period}</span>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Abrechnungsintervall
                </label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setBillingInterval('monthly')}
                    className={`flex-1 py-2 px-4 rounded-lg border-2 transition-colors ${
                      billingInterval === 'monthly'
                        ? 'border-blue-600 bg-blue-50 text-blue-700'
                        : 'border-gray-300 text-gray-700'
                    }`}
                  >
                    Monatlich
                  </button>
                  <button
                    type="button"
                    onClick={() => setBillingInterval('yearly')}
                    className={`flex-1 py-2 px-4 rounded-lg border-2 transition-colors ${
                      billingInterval === 'yearly'
                        ? 'border-blue-600 bg-blue-50 text-blue-700'
                        : 'border-gray-300 text-gray-700'
                    }`}
                  >
                    Jährlich
                  </button>
                </div>
                {billingInterval === 'yearly' && (
                  <p className="text-sm text-green-600 mt-2">10% Rabatt bei jährlicher Zahlung</p>
                )}
              </div>

              <div className="border-t border-gray-200 pt-4 mb-4">
                <h3 className="font-medium text-gray-900 mb-3">Enthaltene Features:</h3>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {selectedPlan !== 'Free' && (
                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Zwischensumme</span>
                    <span className="text-gray-900">{subtotal.toFixed(2)} €</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Umsatzsteuer (19%)</span>
                    <span className="text-gray-900">{tax.toFixed(2)} €</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-200">
                    <span className="text-gray-900">Gesamtbetrag</span>
                    <span className="text-gray-900">{total.toFixed(2)} €</span>
                  </div>
                  <p className="text-xs text-gray-500 pt-2">
                    {billingInterval === 'monthly' ? 'Monatlich abgerechnet' : 'Jährlich abgerechnet'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
