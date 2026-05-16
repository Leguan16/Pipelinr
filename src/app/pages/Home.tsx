import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { TrustBadges } from '../components/TrustBadges';
import { FeaturesSection } from '../components/FeaturesSection';
import { PipelineBuilderSection } from '../components/PipelineBuilderSection';
import { ProcessSection } from '../components/ProcessSection';
import { PricingSection } from '../components/PricingSection';
import { LoginSection } from '../components/LoginSection';
import { CTASection } from '../components/CTASection';
import { Footer } from '../components/Footer';

export function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main-content">
        <HeroSection />
        <TrustBadges />
        <FeaturesSection />
        <PipelineBuilderSection />
        <ProcessSection />
        <PricingSection />
        <LoginSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
