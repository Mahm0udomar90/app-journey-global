import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lang, t } from '@/lib/i18n';
import { Menu, X } from 'lucide-react';
import sukunLogo from '@/assets/sukun-logo.png';

interface NavbarProps {
  lang: Lang;
  onToggleLang: () => void;
}

const Navbar = ({ lang, onToggleLang }: NavbarProps) => {
  const tr = t(lang);
  const isRtl = lang === 'ar';
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#home', label: tr.nav.home },
    { href: '#features', label: tr.nav.features },
    { href: '#download', label: tr.nav.download },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-glass shadow-lg shadow-background/50'
          : 'bg-transparent'
      }`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            <img
              src={sukunLogo}
              alt="Sukun"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full relative"
            />
          </div>
          <span className="text-xl font-bold text-gradient-gold tracking-wide">
            {isRtl ? 'سُكُون' : 'SUKUN'}
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-5 py-2 text-sm text-foreground/60 hover:text-primary transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-primary group-hover:w-3/4 transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleLang}
            className="px-5 py-2 rounded-full border border-primary/20 text-primary text-sm font-semibold hover:bg-primary/10 transition-all duration-300"
          >
            {isRtl ? 'English' : 'عربي'}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground/70 hover:text-primary transition-colors"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-glass border-t border-border/30 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-3">
              {links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-2 text-foreground/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
