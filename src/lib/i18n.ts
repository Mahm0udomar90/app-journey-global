export type Lang = 'ar' | 'en';

export const translations = {
  ar: {
    nav: {
      home: 'الرئيسية',
      features: 'المميزات',
      download: 'تحميل',
      language: 'English',
    },
    hero: {
      title: 'سُكُونْ',
      subtitle: 'القبلة والأذان',
      description: 'تجربة روحانية هادئة للصلاة — مواقيت الصلاة، اتجاه القبلة، التقويم الهجري، ومراحل القمر في مكان واحد.',
      downloadNow: 'حمّل الآن',
      comingSoon: 'قريباً',
    },
    features: {
      title: 'كل ما تحتاجه في تطبيق واحد',
      prayerTimes: {
        title: 'مواقيت الصلاة الدقيقة',
        desc: 'أوقات صلاة دقيقة مع أذان مخصص وإشعارات لكل صلاة.',
      },
      qibla: {
        title: 'بوصلة القبلة',
        desc: 'اتجاه قبلة دقيق وموثوق في أي مكان في العالم.',
      },
      hijriCalendar: {
        title: 'التقويم الهجري',
        desc: 'تقويم هجري متكامل مع تتبع المناسبات والأعياد الإسلامية.',
      },
      moonPhases: {
        title: 'مراحل القمر',
        desc: 'تتبع واستكشاف أطوار القمر وبياناته التفصيلية.',
      },
      mosque: {
        title: 'أقرب مسجد',
        desc: 'اعثر على أقرب مسجد إليك فوراً مع المسافة والاتجاه.',
      },
      dhikr: {
        title: 'أذكار يومية',
        desc: 'أذكار وأدعية مختارة يومياً لراحة البال والسكينة.',
      },
    },
    screenshots: {
      title: 'استكشف التطبيق',
      subtitle: 'تجربة روحانية متكاملة بتصميم أنيق',
    },
    download: {
      title: 'ابدأ رحلتك الروحانية',
      subtitle: 'حمّل سُكُون الآن واستمتع بتجربة إيمانية متكاملة',
      googlePlay: 'Google Play',
      appStore: 'App Store',
      availableOn: 'متوفر على',
      comingSoonOn: 'قريباً على',
    },
    footer: {
      rights: 'جميع الحقوق محفوظة',
    },
    contact: {
      title: 'تواصل معنا',
      subtitle: 'نحن هنا لمساعدتك. يمكنك طلب حذف بياناتك في أي وقت.',
      name: 'الاسم',
      namePlaceholder: 'اسمك الكريم',
      email: 'البريد الإلكتروني',
      emailPlaceholder: 'your@email.com',
      subject: 'الموضوع',
      subjectPlaceholder: 'موضوع الرسالة',
      message: 'الرسالة',
      messagePlaceholder: 'اكتب رسالتك هنا...',
      deleteData: 'أرغب في حذف بياناتي من التطبيق',
      send: 'إرسال الرسالة',
      sending: 'جاري الإرسال...',
      success: 'تم إرسال رسالتك بنجاح!',
      error: 'حدث خطأ، حاول مرة أخرى',
      connectionError: 'حدث خطأ في الاتصال',
      directContact: 'أو تواصل معنا مباشرة:',
    },
  },
  en: {
    nav: {
      home: 'Home',
      features: 'Features',
      download: 'Download',
      language: 'العربية',
    },
    hero: {
      title: 'SUKUN',
      subtitle: 'Qibla & Athan',
      description: 'A calm spiritual prayer experience — prayer times, Qibla direction, Hijri calendar, and moon phases all in one place.',
      downloadNow: 'Download Now',
      comingSoon: 'Coming Soon',
    },
    features: {
      title: 'Everything You Need in One App',
      prayerTimes: {
        title: 'Precise Prayer Times',
        desc: 'Accurate prayer times with custom Athan and notifications for every prayer.',
      },
      qibla: {
        title: 'Qibla Compass',
        desc: 'Reliable and accurate Qibla direction worldwide.',
      },
      hijriCalendar: {
        title: 'Hijri Calendar',
        desc: 'Complete Hijri calendar with Islamic events and Eid tracker.',
      },
      moonPhases: {
        title: 'Moon Phases',
        desc: 'Track and explore detailed lunar phase data and features.',
      },
      mosque: {
        title: 'Nearby Mosques',
        desc: 'Instantly find the closest mosque with distance and direction.',
      },
      dhikr: {
        title: 'Daily Dhikr',
        desc: 'Curated daily Dhikr & Quranic verses for calm and guidance.',
      },
    },
    screenshots: {
      title: 'Explore the App',
      subtitle: 'A complete spiritual experience with elegant design',
    },
    download: {
      title: 'Start Your Spiritual Journey',
      subtitle: 'Download Sukun now and enjoy a complete spiritual experience',
      googlePlay: 'Google Play',
      appStore: 'App Store',
      availableOn: 'Available on',
      comingSoonOn: 'Coming soon on',
    },
    footer: {
      rights: 'All rights reserved',
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'We are here to help. You can request data deletion at any time.',
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'your@email.com',
      subject: 'Subject',
      subjectPlaceholder: 'Message subject',
      message: 'Message',
      messagePlaceholder: 'Write your message here...',
      deleteData: 'I want to delete my data from the app',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Your message has been sent successfully!',
      error: 'An error occurred, please try again',
      connectionError: 'Connection error occurred',
      directContact: 'Or contact us directly:',
    },
  },
} as const;

export function t(lang: Lang) {
  return translations[lang];
}