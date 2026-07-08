import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { Lang, t } from '@/lib/i18n';
import Navbar from '@/components/Navbar';

interface ContactProps {
  lang: Lang;
  onToggleLang: () => void;
}

export default function Contact({ lang, onToggleLang }: ContactProps) {
  const ct = t(lang).contact;
  const isRtl = lang === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    deleteData: false,
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success(ct.success);
        setFormData({ name: '', email: '', subject: '', message: '', deleteData: false });
      } else {
        toast.error(ct.error);
      }
    } catch (error) {
      toast.error(ct.connectionError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background" dir={isRtl ? 'rtl' : 'ltr'}>
      <Navbar lang={lang} onToggleLang={onToggleLang} />
      
      <div className="pt-24 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">{ct.title}</h1>
          <p className="text-muted-foreground text-center mb-8">
            {ct.subtitle}
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">{ct.name}</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder={ct.namePlaceholder}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{ct.email}</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder={ct.emailPlaceholder}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">{ct.subject}</Label>
              <Input
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
                placeholder={ct.subjectPlaceholder}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">{ct.message}</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                placeholder={ct.messagePlaceholder}
              />
            </div>

            <div className="flex items-center space-x-2 space-x-reverse">
              <Checkbox
                id="deleteData"
                checked={formData.deleteData}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, deleteData: checked as boolean })
                }
              />
              <Label htmlFor="deleteData" className="text-sm cursor-pointer">
                {ct.deleteData}
              </Label>
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? ct.sending : ct.send}
            </Button>
          </form>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>{ct.directContact}</p>
            <a href="mailto:sukun.qibla.athan@gmail.com" className="text-primary hover:underline">
              sukun.qibla.athan@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}