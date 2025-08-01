
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <img 
                src="https://static.readdy.ai/image/dfa00478676086a8624b0f515714071b/f14f9993bcd951a53cd82f20c8f9e072.png"
                alt="Sea Greats Logo"
                className="w-16 h-16 object-contain"
                style={{ filter: 'hue-rotate(270deg) saturate(1.2) brightness(1.2)' }}
              />
              <span className="logo-text text-3xl font-bold text-white">Sea Greats</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              شركة متخصصة في تموين السفن والتوريدات البحرية، نقدم خدمات شاملة لجميع احتياجاتكم البحرية بأعلى معايير الجودة.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="https://wa.me/201024886944" className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <i className="ri-whatsapp-line text-white"></i>
              </a>
              <a href="mailto:info@seagreats.com" className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <i className="ri-mail-line text-white"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">روابط سريعة</h3>
            <nav className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-primary transition-colors">الرئيسية</Link>
              <Link href="/about" className="block text-gray-300 hover:text-primary transition-colors">نبذة عنا</Link>
              <Link href="/services" className="block text-gray-300 hover:text-primary transition-colors">خدماتنا</Link>
              <Link href="/contact" className="block text-gray-300 hover:text-primary transition-colors">اتصل بنا</Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">خدماتنا</h3>
            <nav className="space-y-2">
              <Link href="/services/ship-supply" className="block text-gray-300 hover:text-primary transition-colors">تموين السفن</Link>
              <Link href="/services/machinery-supplies" className="block text-gray-300 hover:text-primary transition-colors">مستلزمات الماكينات</Link>
              <Link href="/services/marine-equipment" className="block text-gray-300 hover:text-primary transition-colors">المعدات البحرية</Link>
              <Link href="/services/food-supplies" className="block text-gray-300 hover:text-primary transition-colors">المواد الغذائية</Link>
              <Link href="/services/technical-services" className="block text-gray-300 hover:text-primary transition-colors">الخدمات الفنية</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">معلومات الاتصال</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <i className="ri-phone-line text-primary"></i>
                </div>
                <a href="tel:+201024886944" className="text-gray-300 hover:text-primary transition-colors">+201024886944</a>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <i className="ri-mail-line text-primary"></i>
                </div>
                <a href="mailto:info@seagreats.com" className="text-gray-300 hover:text-primary transition-colors">info@seagreats.com</a>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <i className="ri-map-pin-line text-primary"></i>
                </div>
                <span className="text-gray-300">مصر، السويس، الملاحة</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-right">
              2024 Sea Greats. جميع الحقوق محفوظة.
            </p>
            <p className="text-gray-400 text-center md:text-left">
              تصميم بواسطة 
              <a href="https://wa.me/201010624048" className="text-primary hover:text-purple-300 transition-colors mx-1">
                Bluehostn - محمد عاطي
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
