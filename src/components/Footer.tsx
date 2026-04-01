import { Lang, t } from '@/lib/i18n';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import sukunLogo from '@/assets/sukun-logo.png';

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
