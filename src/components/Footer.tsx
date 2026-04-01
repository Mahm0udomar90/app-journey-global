import { Lang, t } from '@/lib/i18n';

interface FooterProps {
  lang: Lang;
}

const Footer = ({ lang }: FooterProps) => {
  const tr = t(lang);
  const isRtl = lang === 'ar';

  return (
    <footer className="py-8 border-t border-border/30" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Sukun. {tr.footer.rights}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
