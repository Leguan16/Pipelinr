import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { TrustBadges } from '../components/TrustBadges';
import { FeaturesSection } from '../components/FeaturesSection';
import { ProcessSection } from '../components/ProcessSection';
import { PricingSection } from '../components/PricingSection';
import { LoginSection } from '../components/LoginSection';
import { CTASection } from '../components/CTASection';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <TrustBadges />
      <FeaturesSection />
      <ProcessSection />
      <PricingSection />
      <LoginSection />
      <CTASection />
      <Footer />
    </div>
  );
}
