import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { Resend } from 'resend';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 10000;

// Parse JSON body
app.use(express.json());

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Contact API endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message, deleteData } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'جميع الحقول مطلوبة' });
  }

  try {
    await resend.emails.send({
      from: 'Sukun Contact <contact@sukun.app>',
      to: ['sukun.qibla.athan@gmail.com'],
      replyTo: email,
      subject: `Sukun: ${subject}${deleteData ? ' [طلب حذف بيانات]' : ''}`,
      html: `
        <h2>رسالة جديدة من Sukun</h2>
        <p><strong>الاسم:</strong> ${name}</p>
        <p><strong>البريد:</strong> ${email}</p>
        <p><strong>الموضوع:</strong> ${subject}</p>
        <p><strong>طلب حذف بيانات:</strong> ${deleteData ? 'نعم ⚠️' : 'لا'}</p>
        <hr/>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    res.status(200).json({ message: 'تم الإرسال بنجاح' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'فشل في الإرسال' });
  }
});

// Serve static files
app.use(express.static(path.join(__dirname, 'dist')));

// SPA fallback - Express 5 compatible
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});