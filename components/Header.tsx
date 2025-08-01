
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('ar');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem('language') || 'ar';
    setLanguage(savedLang);
  }, []);

  const menuItems = [
    { href: '/', label: 'الرئيسية', labelEn: 'Home' },
    { href: '/about', label: 'نبذة عنا', labelEn: 'About' },
    { 
      href: '/services', 
      label: 'خدماتنا', 
      labelEn: 'Services',
      submenu: [
        { href: '/services/ship-supply', label: 'تموين السفن', labelEn: 'Ship Supply' },
        { href: '/services/machinery-supplies', label: 'مستلزمات الماكينات', labelEn: 'Machinery Supplies' },
        { href: '/services/marine-equipment', label: 'المعدات البحرية', labelEn: 'Marine Equipment' },
        { href: '/services/food-supplies', label: 'المواد الغذائية', labelEn: 'Food Supplies' },
        { href: '/services/technical-services', label: 'الخدمات الفنية', labelEn: 'Technical Services' },
        { href: '/services/consulting', label: 'الاستشارات البحرية', labelEn: 'Marine Consulting' }
      ]
    },
    { href: '/contact', label: 'اتصل بنا', labelEn: 'Contact' }
  ];

  if (!mounted) {
    return (
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img 
                src="https://static.readdy.ai/image/dfa00478676086a8624b0f515714071b/f14f9993bcd951a53cd82f20c8f9e072.png"
                alt="Sea Greats Logo"
                className="w-16 h-16 object-contain"
              />
              <span className="logo-text text-3xl font-bold text-gray-800">Sea Greats</span>
            </Link>
            <div className="w-8 h-8"></div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img 
              src="https://static.readdy.ai/image/dfa00478676086a8624b0f515714071b/f14f9993bcd951a53cd82f20c8f9e072.png"
              alt="Sea Greats Logo"
              className="w-16 h-16 object-contain"
            />
            <span className="logo-text text-3xl font-bold text-gray-800">
              {language === 'ar' ? 'Sea Greats' : 'Sea Greats'}
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link 
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap font-medium"
                >
                  {language === 'ar' ? item.label : item.labelEn}
                </Link>
                {item.submenu && (
                  <div className="absolute top-full right-0 rtl:left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="py-2">
                      {item.submenu.map((subitem, subindex) => (
                        <Link
                          key={subindex}
                          href={subitem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors whitespace-nowrap"
                        >
                          {language === 'ar' ? subitem.label : subitem.labelEn}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <LanguageSwitcher />
            <Link 
              href="/admin"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              {language === 'ar' ? 'تسجيل دخول' : 'Login'}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden w-8 h-8 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl text-gray-700`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <nav className="py-4">
              {menuItems.map((item, index) => (
                <div key={index}>
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {language === 'ar' ? item.label : item.labelEn}
                  </Link>
                  {item.submenu && (
                    <div className="bg-gray-50">
                      {item.submenu.map((subitem, subindex) => (
                        <Link
                          key={subindex}
                          href={subitem.href}
                          className="block px-8 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {language === 'ar' ? subitem.label : subitem.labelEn}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-4 py-2">
                <LanguageSwitcher />
              </div>
              <div className="px-4 py-2">
                <Link 
                  href="/admin"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap inline-block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {language === 'ar' ? 'تسجيل دخول' : 'Login'}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
