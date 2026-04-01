import { Lang, t } from '@/lib/i18n';
import sukunLogo from '@/assets/sukun-logo.png';

interface NavbarProps {
  lang: Lang;
  onToggleLang: () => void;
}

const Navbar = ({ lang, onToggleLang }: NavbarProps) => {
  const tr = t(lang);
  const isRtl = lang === 'ar';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-glass" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={sukunLogo} alt="Sukun" width={36} height={36} className="w-9 h-9" />
          <span className="text-xl font-bold text-gradient-gold">
            {isRtl ? 'سُكُون' : 'SUKUN'}
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-foreground/80 hover:text-primary transition-colors text-sm">
            {tr.nav.home}
          </a>
          <a href="#features" className="text-foreground/80 hover:text-primary transition-colors text-sm">
            {tr.nav.features}
          </a>
          <a href="#download" className="text-foreground/80 hover:text-primary transition-colors text-sm">
            {tr.nav.download}
          </a>
        </div>

        <button
          onClick={onToggleLang}
          className="px-4 py-2 rounded-full bg-glass-gold text-primary text-sm font-semibold hover:scale-105 transition-transform"
        >
          {isRtl ? 'English' : 'عربي'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
