import { Lang, t } from '@/lib/i18n';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

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
    <footer className="py-8 border-t border-border/30" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6 flex flex-col items-center gap-4">
        <div className="flex items-center gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Sukun. {tr.footer.rights}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
