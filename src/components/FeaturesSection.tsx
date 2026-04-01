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
    <section id="features" className="py-24 relative" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gradient-gold mb-16">
          {tr.features.title}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl bg-glass hover:bg-glass-gold transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:glow-gold transition-all">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
