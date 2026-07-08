import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';

export default function Contact() {
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
        toast.success('تم إرسال رسالتك بنجاح!');
        setFormData({ name: '', email: '', subject: '', message: '', deleteData: false });
      } else {
        toast.error('حدث خطأ، حاول مرة أخرى');
      }
    } catch (error) {
      toast.error('حدث خطأ في الاتصال');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2">تواصل معنا</h1>
        <p className="text-muted-foreground text-center mb-8">
          نحن هنا لمساعدتك. يمكنك طلب حذف بياناتك في أي وقت.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">الاسم</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="اسمك الكريم"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">البريد الإلكتروني</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">الموضوع</Label>
            <Input
              id="subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
              placeholder="موضوع الرسالة"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">الرسالة</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              placeholder="اكتب رسالتك هنا..."
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
              أرغب في حذف بياناتي من التطبيق
            </Label>
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'جاري الإرسال...' : 'إرسال الرسالة'}
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>أو تواصل معنا مباشرة:</p>
          <a href="mailto:sukun.qibla.athan@gmail.com" className="text-primary hover:underline">
            sukun.qibla.athan@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}