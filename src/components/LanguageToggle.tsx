import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/i18n';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const translations = t(language);

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="font-medium"
    >
      {translations.nav.language}
    </Button>
  );
}