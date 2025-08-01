
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6 lg:col-span-2">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="relative">
                <img
                  src="https://static.readdy.ai/image/dfa00478676086a8624b0f515714071b/f14f9993bcd951a53cd82f20c8f9e072.png"
                  alt="Sea Greats Logo"
                  className="w-20 h-20 object-contain floating-animation"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-accent-400/20 rounded-full blur-xl"></div>
              </div>
              <span className="logo-text text-4xl font-bold">Sea Greats</span>
            </div>

            <p className="text-secondary-300 leading-relaxed text-lg max-w-md">
              شركة متخصصة في تموين السفن والتوريدات البحرية، نقدم خدمات شاملة لجميع احتياجاتكم البحرية بأعلى معايير الجودة والاحترافية.
            </p>

            {/* Enhanced Social Links */}
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a
                href="https://wa.me/201024886944"
                className="group w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-110 hover:rotate-6 shadow-lg hover:shadow-xl"
              >
                <i className="ri-whatsapp-line text-2xl text-white group-hover:animate-bounce"></i>
              </a>
              <a
                href="mailto:info@seagreats.com"
                className="group w-14 h-14 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-110 hover:rotate-6 shadow-lg hover:shadow-xl"
              >
                <i className="ri-mail-line text-2xl text-white group-hover:animate-pulse"></i>
              </a>
              <a
                href="tel:+201024886944"
                className="group w-14 h-14 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center hover:from-accent-600 hover:to-accent-700 transition-all duration-300 transform hover:scale-110 hover:rotate-6 shadow-lg hover:shadow-xl"
              >
                <i className="ri-phone-line text-2xl text-white group-hover:animate-pulse"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white relative">
              روابط سريعة
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full"></div>
            </h3>
            <nav className="space-y-3">
              <Link href="/" className="group flex items-center text-secondary-300 hover:text-white transition-all duration-300 transform hover:translate-x-2 rtl:hover:-translate-x-2">
                <i className="ri-arrow-right-s-line mr-2 rtl:mr-0 rtl:ml-2 rtl:rotate-180 text-primary-400 group-hover:text-accent-400 transition-colors"></i>
                الرئيسية
              </Link>
              <Link href="/about" className="group flex items-center text-secondary-300 hover:text-white transition-all duration-300 transform hover:translate-x-2 rtl:hover:-translate-x-2">
                <i className="ri-arrow-right-s-line mr-2 rtl:mr-0 rtl:ml-2 rtl:rotate-180 text-primary-400 group-hover:text-accent-400 transition-colors"></i>
                نبذة عنا
              </Link>
              <Link href="/services" className="group flex items-center text-secondary-300 hover:text-white transition-all duration-300 transform hover:translate-x-2 rtl:hover:-translate-x-2">
                <i className="ri-arrow-right-s-line mr-2 rtl:mr-0 rtl:ml-2 rtl:rotate-180 text-primary-400 group-hover:text-accent-400 transition-colors"></i>
                خدماتنا
              </Link>
              <Link href="/contact" className="group flex items-center text-secondary-300 hover:text-white transition-all duration-300 transform hover:translate-x-2 rtl:hover:-translate-x-2">
                <i className="ri-arrow-right-s-line mr-2 rtl:mr-0 rtl:ml-2 rtl:rotate-180 text-primary-400 group-hover:text-accent-400 transition-colors"></i>
                اتصل بنا
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white relative">
              معلومات الاتصال
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full"></div>
            </h3>
            <div className="space-y-4">
              <div className="group flex items-center space-x-4 rtl:space-x-reverse hover:bg-white/5 p-3 rounded-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-xl flex items-center justify-center group-hover:from-primary-500/30 group-hover:to-primary-600/30 transition-all duration-300">
                  <i className="ri-phone-line text-primary-400 text-xl group-hover:text-primary-300"></i>
                </div>
                <a href="tel:+201024886944" className="text-secondary-300 hover:text-white transition-colors font-medium">+201024886944</a>
              </div>

              <div className="group flex items-center space-x-4 rtl:space-x-reverse hover:bg-white/5 p-3 rounded-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-accent-500/20 to-accent-600/20 rounded-xl flex items-center justify-center group-hover:from-accent-500/30 group-hover:to-accent-600/30 transition-all duration-300">
                  <i className="ri-mail-line text-accent-400 text-xl group-hover:text-accent-300"></i>
                </div>
                <a href="mailto:info@seagreats.com" className="text-secondary-300 hover:text-white transition-colors font-medium">info@seagreats.com</a>
              </div>

              <div className="group flex items-center space-x-4 rtl:space-x-reverse hover:bg-white/5 p-3 rounded-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-ocean-500/20 to-ocean-600/20 rounded-xl flex items-center justify-center group-hover:from-ocean-500/30 group-hover:to-ocean-600/30 transition-all duration-300">
                  <i className="ri-map-pin-line text-ocean-400 text-xl group-hover:text-ocean-300"></i>
                </div>
                <span className="text-secondary-300 font-medium">مصر، السويس، الملاحة</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-right">
              <p className="text-secondary-400 text-lg">
                © 2024 <span className="font-bold text-white">Sea Greats</span>. جميع الحقوق محفوظة.
              </p>
            </div>

            <div className="text-center md:text-left">
              <p className="text-secondary-400 text-lg">
                تصميم وتطوير بواسطة
                <a
                  href="https://wa.me/201010624048"
                  className="group text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 hover:from-primary-300 hover:to-accent-300 transition-all duration-300 mx-2 font-bold"
                >
                  <span className="border-b-2 border-transparent group-hover:border-primary-400 transition-all duration-300">
                    Bluehostn - محمد عاطي
                  </span>
                </a>
              </p>
            </div>
          </div>

          {/* Additional Trust Indicators */}
          <div className="flex justify-center items-center space-x-8 rtl:space-x-reverse mt-8 pt-6 border-t border-white/5">
            <div className="flex items-center space-x-2 rtl:space-x-reverse text-secondary-400">
              <i className="ri-shield-check-line text-green-400"></i>
              <span className="text-sm">موثوق ومضمون</span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse text-secondary-400">
              <i className="ri-24-hours-line text-blue-400"></i>
              <span className="text-sm">خدمة 24/7</span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse text-secondary-400">
              <i className="ri-award-line text-yellow-400"></i>
              <span className="text-sm">15+ سنة خبرة</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
