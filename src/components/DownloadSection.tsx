import { Lang, t } from '@/lib/i18n';

interface DownloadSectionProps {
  lang: Lang;
}

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.mahmoud.sukun';

const DownloadSection = ({ lang }: DownloadSectionProps) => {
  const tr = t(lang);
  const isRtl = lang === 'ar';

  return (
    <section id="download" className="py-24 relative" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container relative mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gradient-gold mb-4">
          {tr.download.title}
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          {tr.download.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* Google Play */}
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 px-8 py-5 rounded-2xl bg-glass-gold hover:scale-105 transition-all glow-gold"
          >
            <svg viewBox="0 0 24 24" className="w-10 h-10 fill-primary">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            <div className={isRtl ? 'text-right' : 'text-left'}>
              <span className="block text-xs text-muted-foreground">{tr.download.availableOn}</span>
              <span className="block text-xl font-bold text-foreground">{tr.download.googlePlay}</span>
            </div>
          </a>

          {/* App Store */}
          <div className="flex items-center gap-4 px-8 py-5 rounded-2xl bg-glass opacity-60 cursor-default">
            <svg viewBox="0 0 24 24" className="w-10 h-10 fill-foreground/40">
              <path d="M18.71,19.5C17.88,20.5 17,21.4 15.66,21.41C14.32,21.42 13.87,20.62 12.35,20.62C10.83,20.62 10.33,21.39 9.05,21.42C7.77,21.45 6.76,20.42 5.93,19.42C4.25,17.39 2.97,13.72 4.7,11.17C5.56,9.9 6.9,9.12 8.34,9.1C9.63,9.08 10.85,9.95 11.63,9.95C12.41,9.95 13.89,8.88 15.44,9.06C16.06,9.09 17.61,9.31 18.62,10.71C18.53,10.77 16.58,11.9 16.6,14.27C16.63,17.11 19.1,18.05 19.12,18.06C19.1,18.11 18.78,19.18 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
            </svg>
            <div className={isRtl ? 'text-right' : 'text-left'}>
              <span className="block text-xs text-muted-foreground">{tr.download.comingSoonOn}</span>
              <span className="block text-xl font-bold text-foreground/50">{tr.download.appStore}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
