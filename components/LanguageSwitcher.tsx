
'use client';

import { useState, useEffect } from 'react';
import { getDictionary, getDirection, type Language } from '../lib/dictionaries';

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState<Language>('ar');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = (localStorage.getItem('language') || 'ar') as Language;
    setLanguage(savedLang);
    document.documentElement.lang = savedLang;
    document.documentElement.dir = getDirection(savedLang);
  }, []);

  const switchLanguage = () => {
    const newLang = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = getDirection(newLang);
    window.location.reload();
  };

  if (!mounted) {
    return (
      <div className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-1.5 rounded-full border border-gray-300">
        <i className="ri-global-line"></i>
        <span className="text-sm font-medium">EN</span>
      </div>
    );
  }

  const dict = getDictionary(language);

  return (
    <button
      onClick={switchLanguage}
      className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-1.5 rounded-full border border-gray-300 hover:border-primary hover:text-primary transition-colors whitespace-nowrap"
      aria-label={dict.nav.language}
    >
      <i className="ri-global-line"></i>
      <span className="text-sm font-medium">
        {dict.nav.language}
      </span>
    </button>
  );
}
