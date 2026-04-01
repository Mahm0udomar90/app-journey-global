import { motion } from 'framer-motion';
import { Lang, t } from '@/lib/i18n';
import { Moon, Compass, Calendar, MapPin, BookOpen, Clock } from 'lucide-react';

interface FeaturesSectionProps {
  lang: Lang;
}

const FeaturesSection = ({ lang }: FeaturesSectionProps) => {
  const tr = t(lang);
  const isRtl = lang === 'ar';

  const features = [
    { icon: Clock, ...tr.features.prayerTimes },
    { icon: Compass, ...tr.features.qibla },
    { icon: Calendar, ...tr.features.hijriCalendar },
    { icon: Moon, ...tr.features.moonPhases },
    { icon: MapPin, ...tr.features.mosque },
    { icon: BookOpen, ...tr.features.dhikr },
  ];

  return (
    <section id="features" className="py-28 relative" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="ornament-line mb-6 mx-auto max-w-xs">
            <span className="text-primary/60 text-lg">✦</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gradient-gold mb-4">
            {tr.features.title}
          </h2>
        </motion.div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative p-8 rounded-2xl bg-glass-premium hover:border-primary/20 transition-all duration-500"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-primary/[0.05] to-transparent pointer-events-none" />

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-6 group-hover:shadow-[0_0_30px_hsl(43_75%_55%/0.15)] transition-all duration-500">
                  <feature.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
