
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('ar');
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem('language') || 'ar';
    setLanguage(savedLang);

    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="relative">
                <img
                  src="https://static.readdy.ai/image/dfa00478676086a8624b0f515714071b/f14f9993bcd951a53cd82f20c8f9e072.png"
                  alt="Sea Greats Logo"
                  className="w-16 h-16 object-contain floating-animation"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full blur-xl"></div>
              </div>
              <span className="logo-text text-3xl font-bold">Sea Greats</span>
            </Link>
            <div className="w-8 h-8"></div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xl py-2'
          : 'bg-white/90 backdrop-blur-sm shadow-lg py-0'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse group">
            <div className="relative">
              <img
                src="https://static.readdy.ai/image/dfa00478676086a8624b0f515714071b/f14f9993bcd951a53cd82f20c8f9e072.png"
                alt="Sea Greats Logo"
                className={`object-contain transition-all duration-300 floating-animation group-hover:scale-110 ${
                  scrolled ? 'w-12 h-12' : 'w-16 h-16'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className={`logo-text font-bold transition-all duration-300 group-hover:scale-105 ${
              scrolled ? 'text-2xl' : 'text-3xl'
            }`}>
              Sea Greats
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  href={item.href}
                  className="text-secondary-700 hover:text-primary-600 transition-all duration-300 whitespace-nowrap font-semibold relative group-hover:scale-105 transform"
                >
                  {language === 'ar' ? item.label : item.labelEn}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                {item.submenu && (
                  <div className="absolute top-full right-0 rtl:left-0 mt-3 w-72 bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 border border-white/20">
                    <div className="py-3">
                      {item.submenu.map((subitem, subindex) => (
                        <Link
                          key={subindex}
                          href={subitem.href}
                          className="block px-6 py-3 text-secondary-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50 hover:text-primary-700 transition-all duration-300 whitespace-nowrap font-medium border-l-4 border-transparent hover:border-primary-500"
                        >
                          <i className="ri-arrow-right-s-line mr-2 rtl:mr-0 rtl:ml-2 rtl:rotate-180"></i>
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
              className="btn btn-primary text-sm px-6 py-2.5 whitespace-nowrap"
            >
              {language === 'ar' ? 'تسجيل دخول' : 'Login'}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-r from-primary-500/10 to-accent-500/10 hover:from-primary-500/20 hover:to-accent-500/20 transition-all duration-300 transform hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl text-primary-600 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-primary-100 animate-slide-up">
            <nav className="py-6">
              {menuItems.map((item, index) => (
                <div key={index} className={`stagger-${index + 1}`}>
                  <Link
                    href={item.href}
                    className="block px-6 py-3 text-secondary-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50 hover:text-primary-700 transition-all duration-300 font-semibold border-l-4 border-transparent hover:border-primary-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {language === 'ar' ? item.label : item.labelEn}
                  </Link>
                  {item.submenu && (
                    <div className="bg-gradient-to-r from-primary-25 to-accent-25 ml-4 rounded-r-xl">
                      {item.submenu.map((subitem, subindex) => (
                        <Link
                          key={subindex}
                          href={subitem.href}
                          className="block px-8 py-2.5 text-sm text-secondary-600 hover:bg-white/50 hover:text-primary-600 transition-all duration-300 font-medium"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <i className="ri-arrow-right-s-line mr-2 rtl:mr-0 rtl:ml-2 rtl:rotate-180 text-primary-400"></i>
                          {language === 'ar' ? subitem.label : subitem.labelEn}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-6 py-3 border-t border-primary-100 mt-4 pt-6">
                <LanguageSwitcher />
              </div>
              <div className="px-6 py-3">
                <Link
                  href="/admin"
                  className="btn btn-primary text-sm px-6 py-2.5 whitespace-nowrap inline-block"
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
