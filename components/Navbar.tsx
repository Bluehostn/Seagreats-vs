import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Navbar = ({ locale }: { locale: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/Logo Sea Greats.png" 
                alt="Sea Greats Logo" 
                width={180} 
                height={60}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors">
              {locale === 'en' ? 'Home' : 'الرئيسية'}
            </Link>
            <Link href="/about" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors">
              {locale === 'en' ? 'About Us' : 'من نحن'}
            </Link>
            <Link href="/services" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors">
              {locale === 'en' ? 'Services' : 'خدماتنا'}
            </Link>
            <Link href="/contact" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors">
              {locale === 'en' ? 'Contact Us' : 'اتصل بنا'}
            </Link>

            {/* Language Switcher */}
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => changeLanguage('en')} 
                className={`px-2 py-1 rounded ${locale === 'en' ? 'bg-primary-600 text-white' : 'text-secondary-700'}`}
              >
                EN
              </button>
              <button 
                onClick={() => changeLanguage('ar')} 
                className={`px-2 py-1 rounded ${locale === 'ar' ? 'bg-primary-600 text-white' : 'text-secondary-700'}`}
              >
                AR
              </button>
            </div>

            {/* Admin Login */}
            <Link href="/admin" className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors">
              {locale === 'en' ? 'Admin' : 'لوحة التحكم'}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-secondary-700 hover:text-primary-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="text-secondary-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {locale === 'en' ? 'Home' : 'الرئيسية'}
              </Link>
              <Link 
                href="/about" 
                className="text-secondary-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {locale === 'en' ? 'About Us' : 'من نحن'}
              </Link>
              <Link 
                href="/services" 
                className="text-secondary-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {locale === 'en' ? 'Services' : 'خدماتنا'}
              </Link>
              <Link 
                href="/contact" 
                className="text-secondary-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {locale === 'en' ? 'Contact Us' : 'اتصل بنا'}
              </Link>

              {/* Language Switcher */}
              <div className="flex items-center space-x-2 pt-2">
                <button 
                  onClick={() => {
                    changeLanguage('en');
                    setIsOpen(false);
                  }} 
                  className={`px-2 py-1 rounded ${locale === 'en' ? 'bg-primary-600 text-white' : 'text-secondary-700'}`}
                >
                  EN
                </button>
                <button 
                  onClick={() => {
                    changeLanguage('ar');
                    setIsOpen(false);
                  }} 
                  className={`px-2 py-1 rounded ${locale === 'ar' ? 'bg-primary-600 text-white' : 'text-secondary-700'}`}
                >
                  AR
                </button>
              </div>

              {/* Admin Login */}
              <Link 
                href="/admin" 
                className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                {locale === 'en' ? 'Admin' : 'لوحة التحكم'}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
