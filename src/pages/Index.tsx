import { useState } from 'react';
import { Lang } from '@/lib/i18n';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import DownloadSection from '@/components/DownloadSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [lang, setLang] = useState<Lang>('ar');

  const toggleLang = () => setLang(prev => prev === 'ar' ? 'en' : 'ar');

  return (
    <div className="min-h-screen bg-background">
      <Navbar lang={lang} onToggleLang={toggleLang} />
      <HeroSection lang={lang} />
      <FeaturesSection lang={lang} />
      <DownloadSection lang={lang} />
      <Footer lang={lang} />
    </div>
  );
};

export default Index;
