import { useState } from 'react';
import { Lang } from '@/lib/i18n';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ScreenshotsSection from '@/components/ScreenshotsSection';
import DownloadSection from '@/components/DownloadSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [lang, setLang] = useState<Lang>('ar');
  const toggleLang = () => setLang(prev => prev === 'ar' ? 'en' : 'ar');

  return (
    <div className="min-h-screen bg-background grain relative">
      {/* Ambient background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/[0.03] blur-[120px]" />
      </div>

      <Navbar lang={lang} onToggleLang={toggleLang} />
      <HeroSection lang={lang} />
      <div className="section-divider mx-auto max-w-4xl" />
      <FeaturesSection lang={lang} />
      <div className="section-divider mx-auto max-w-4xl" />
      <ScreenshotsSection lang={lang} />
      <div className="section-divider mx-auto max-w-4xl" />
      <DownloadSection lang={lang} />
      <Footer lang={lang} />
    </div>
  );
};

export default Index;
