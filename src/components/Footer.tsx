import { Lang, t } from '@/lib/i18n';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import sukunLogo from '@/assets/sukun-logo.png';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52V6.82a4.83 4.83 0 0 1-1-.13z" />
  </svg>
);

interface FooterProps {
  lang: Lang;
}

const socialLinks = [
  {
    icon: Facebook,
    href: 'https://www.facebook.com/profile.php?id=61582430369631',
    label: 'Facebook',
  },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/sukun.prayertimes?igsh=MTM4bG9wYmhmYjd2eQ==',
    label: 'Instagram',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/company/sukun-prayer-times/',
    label: 'LinkedIn',
  },
  {
    icon: TikTokIcon,
    href: 'https://www.tiktok.com/@sukun.prayertimes?_r=1&_t=ZS-95TZymxuOTo',
    label: 'TikTok',
  },
];

const Footer = ({ lang }: FooterProps) => {
  const tr = t(lang);
  const isRtl = lang === 'ar';

  return (
    <footer className="py-12 relative" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="section-divider mx-auto max-w-4xl mb-12" />

      <div className="container mx-auto px-6 flex flex-col items-center gap-6">
        {/* Logo */}
        <img src={sukunLogo} alt="Sukun" width={48} height={48} className="w-12 h-12 rounded-full opacity-60" />

        {/* Social links */}
        <div className="flex items-center gap-5">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full border border-border/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:shadow-[0_0_20px_hsl(43_75%_55%/0.15)] transition-all duration-300"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        <p className="text-muted-foreground/60 text-xs tracking-wider">
          © {new Date().getFullYear()} Sukun. {tr.footer.rights}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
