import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lang, t } from '@/lib/i18n';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import screenshot1 from '@/assets/screenshots/screenshot-1.jpg';
import screenshot2 from '@/assets/screenshots/screenshot-2.jpg';
import screenshot3 from '@/assets/screenshots/screenshot-3.jpg';
import screenshot4 from '@/assets/screenshots/screenshot-4.jpg';
import screenshot5 from '@/assets/screenshots/screenshot-5.jpg';
import screenshot6 from '@/assets/screenshots/screenshot-6.jpg';
import screenshot7 from '@/assets/screenshots/screenshot-7.jpg';

interface ScreenshotsSectionProps {
  lang: Lang;
}

const screenshots = [
  { src: screenshot1, alt: 'Prayer Times' },
  { src: screenshot2, alt: 'Hijri Calendar' },
  { src: screenshot3, alt: 'Qibla Compass' },
  { src: screenshot4, alt: 'Features Overview' },
  { src: screenshot5, alt: 'App Overview' },
  { src: screenshot6, alt: 'App in Use' },
  { src: screenshot7, alt: 'Moon Phases & Calendar' },
];

const ScreenshotsSection = ({ lang }: ScreenshotsSectionProps) => {
  const tr = t(lang);
  const isRtl = lang === 'ar';
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index: number) => {
    setActiveIndex((index + screenshots.length) % screenshots.length);
  };

  return (
    <section id="screenshots" className="py-28 relative overflow-hidden" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[150px]" />

      <div className="container relative mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="ornament-line mb-6 mx-auto max-w-xs">
            <span className="text-primary/60 text-lg">✦</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gradient-gold mb-4">
            {tr.screenshots.title}
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {tr.screenshots.subtitle}
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Nav buttons */}
          <button
            onClick={() => goTo(activeIndex - 1)}
            className="absolute z-20 left-0 md:left-8 w-12 h-12 rounded-full bg-glass-premium flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/30 transition-all duration-300"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => goTo(activeIndex + 1)}
            className="absolute z-20 right-0 md:right-8 w-12 h-12 rounded-full bg-glass-premium flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/30 transition-all duration-300"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Screenshots display */}
          <div className="relative w-full flex items-center justify-center h-[500px] md:h-[620px]">
            {screenshots.map((shot, i) => {
              const offset = i - activeIndex;
              const wrappedOffset =
                ((offset + screenshots.length + Math.floor(screenshots.length / 2)) % screenshots.length) -
                Math.floor(screenshots.length / 2);
              const isActive = wrappedOffset === 0;
              const absOffset = Math.abs(wrappedOffset);

              if (absOffset > 2) return null;

              return (
                <motion.div
                  key={i}
                  className="absolute cursor-pointer"
                  onClick={() => setActiveIndex(i)}
                  animate={{
                    x: wrappedOffset * (window.innerWidth < 768 ? 100 : 200),
                    scale: isActive ? 1 : 0.75 - absOffset * 0.05,
                    zIndex: 10 - absOffset,
                    opacity: isActive ? 1 : 0.5 - absOffset * 0.15,
                    rotateY: wrappedOffset * -5,
                  }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div
                    className={`relative rounded-3xl overflow-hidden transition-shadow duration-500 ${
                      isActive
                        ? 'shadow-[0_0_80px_hsl(43_75%_55%/0.2)]'
                        : 'shadow-lg'
                    }`}
                  >
                    {/* Gold border for active */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-3xl border-2 border-primary/30 z-10 pointer-events-none" />
                    )}
                    <img
                      src={shot.src}
                      alt={shot.alt}
                      className="w-48 md:w-64 h-auto rounded-3xl object-cover"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {screenshots.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? 'w-8 bg-primary'
                  : 'bg-foreground/20 hover:bg-foreground/40'
              }`}
              aria-label={`Screenshot ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
