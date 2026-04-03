import { motion } from 'framer-motion';
import { Lang, t } from '@/lib/i18n';

import screenshot1 from '@/assets/screenshots/screenshot-1.jpg';
import screenshot3 from '@/assets/screenshots/screenshot-3.jpg';
import screenshot7 from '@/assets/screenshots/screenshot-7.jpg';

interface HeroSectionProps {
  lang: Lang;
}

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.mahmoud.sukun';

const HeroSection = ({ lang }: HeroSectionProps) => {
  const tr = t(lang);
  const isRtl = lang === 'ar';

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/6 w-72 h-72 rounded-full bg-primary/[0.06] blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/6 w-96 h-96 rounded-full bg-accent/[0.04] blur-[120px]" />

      {/* Decorative stars */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-primary/50 animate-twinkle"
          style={{
            width: `${1 + Math.random() * 2}px`,
            height: `${1 + Math.random() * 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${2 + Math.random() * 4}s`,
          }}
        />
      ))}

      {/* Geometric ornament */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] animate-rotate-slow pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-primary" />
          <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-primary" />
          <polygon points="200,20 380,200 200,380 20,200" stroke="currentColor" strokeWidth="0.4" fill="none" className="text-primary" />
          <polygon points="200,60 340,200 200,340 60,200" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-primary" />
        </svg>
      </div>

      <div className="container relative mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`space-y-8 ${isRtl ? 'text-right' : 'text-left'}`}
          >
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="ornament-line"
                style={{ justifyContent: isRtl ? 'flex-end' : 'flex-start' }}
              >
                <span className="text-xs uppercase tracking-[0.3em] text-primary/70 font-medium">
                  {isRtl ? '✦ تطبيق روحاني ✦' : '✦ Spiritual App ✦'}
                </span>
              </motion.div>

              <h1 className="text-6xl md:text-8xl font-black text-gradient-gold leading-[0.9] tracking-tight">
                {tr.hero.title}
              </h1>
              <p className="text-2xl md:text-3xl text-secondary font-semibold">
                {tr.hero.subtitle}
              </p>
            </div>

            <p className="text-lg text-foreground/50 max-w-lg leading-relaxed font-light">
              {tr.hero.description}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_40px_hsl(43_75%_55%/0.3)] hover:scale-[1.02] shimmer"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                {tr.hero.downloadNow}
              </a>

              <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-border/40 text-foreground/30 font-semibold text-lg cursor-default">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M18.71,19.5C17.88,20.5 17,21.4 15.66,21.41C14.32,21.42 13.87,20.62 12.35,20.62C10.83,20.62 10.33,21.39 9.05,21.42C7.77,21.45 6.76,20.42 5.93,19.42C4.25,17.39 2.97,13.72 4.7,11.17C5.56,9.9 6.9,9.12 8.34,9.1C9.63,9.08 10.85,9.95 11.63,9.95C12.41,9.95 13.89,8.88 15.44,9.06C16.06,9.09 17.61,9.31 18.62,10.71C18.53,10.77 16.58,11.9 16.6,14.27C16.63,17.11 19.1,18.05 19.12,18.06C19.1,18.11 18.78,19.18 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                {tr.hero.comingSoon}
              </div>
            </motion.div>
          </motion.div>

          {/* Floating screenshots showcase */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="flex justify-center items-center"
          >
            <div className="relative w-[320px] h-[420px] md:w-[380px] md:h-[500px]">
              {/* Central glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-primary/[0.08] blur-[80px]" />

              {/* Back-left screenshot */}
              <motion.div
                initial={{ opacity: 0, x: -40, y: 30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -left-4 md:-left-8 top-12 z-[1]"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-border/20">
                    <img
                      src={screenshot3}
                      alt="Qibla Compass"
                      className="w-36 md:w-44 h-auto object-cover"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                  </div>
                </motion.div>
              </motion.div>

              {/* Center screenshot (main/hero) */}
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-1/2 -translate-x-1/2 top-0 z-[3]"
              >
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5)] border-2 border-primary/20 glow-gold">
                    <img
                      src={screenshot1}
                      alt="Prayer Times"
                      className="w-48 md:w-56 h-auto object-cover"
                      loading="eager"
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* Back-right screenshot */}
              <motion.div
                initial={{ opacity: 0, x: 40, y: 30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -right-4 md:-right-8 top-16 z-[2]"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-border/20">
                    <img
                      src={screenshot7}
                      alt="Moon Phases"
                      className="w-36 md:w-44 h-auto object-cover"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                  </div>
                </motion.div>
              </motion.div>

              {/* Decorative rotating arc */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] opacity-[0.06] animate-rotate-slow pointer-events-none" style={{ animationDuration: '60s' }}>
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <circle cx="200" cy="200" r="190" stroke="hsl(43 75% 55%)" strokeWidth="0.5" fill="none" strokeDasharray="4 8" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
