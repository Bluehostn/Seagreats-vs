'use client';

import { useEffect, useState } from 'react';
import VisualEditor from '../components/VisualEditor';
import Link from 'next/link';

export default function HomePage() {
  const [language, setLanguage] = useState('ar');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem('language') || 'ar';
    setLanguage(savedLang);
  }, []);

  const services = [
    {
      title: 'تموين السفن',
      titleEn: 'Ship Supply',
      description: 'نقدم خدمات تموين شاملة للسفن تشمل المواد الغذائية والمشروبات والمستلزمات اليومية',
      descriptionEn: 'We provide comprehensive ship supply services including food, beverages, and daily necessities',
      icon: 'ri-ship-line',
      image: 'https://readdy.ai/api/search-image?query=Ship%20supply%20services%20maritime%20food%20provisions%20cargo%20vessel%20supplies%20professional%20marine%20catering&width=400&height=300&seq=ship-supply&orientation=landscape',
      link: '/services/ship-supply'
    },
    {
      title: 'مستلزمات الماكينات',
      titleEn: 'Machinery Supplies',
      description: 'توريد قطع الغيار والأدوات والمعدات اللازمة لصيانة وتشغيل ماكينات السفن',
      descriptionEn: 'Supply of spare parts, tools, and equipment necessary for ship machinery maintenance and operation',
      icon: 'ri-settings-3-line',
      image: 'https://readdy.ai/api/search-image?query=Marine%20machinery%20spare%20parts%20ship%20engine%20components%20maritime%20equipment%20industrial%20supplies&width=400&height=300&seq=machinery-supply&orientation=landscape',
      link: '/services/machinery-supplies'
    },
    {
      title: 'المعدات البحرية',
      titleEn: 'Marine Equipment',
      description: 'توفير جميع أنواع المعدات البحرية والأدوات الملاحية وأجهزة السلامة',
      descriptionEn: 'Providing all types of marine equipment, navigation tools, and safety devices',
      icon: 'ri-compass-3-line',
      image: 'https://readdy.ai/api/search-image?query=Marine%20navigation%20equipment%20safety%20devices%20maritime%20instruments%20ship%20electronics%20compass%20radar&width=400&height=300&seq=marine-equipment&orientation=landscape',
      link: '/services/marine-equipment'
    }
  ];

  const whyChooseUs = [
    {
      title: 'خبرة واسعة',
      titleEn: 'Extensive Experience',
      description: 'أكثر من 15 عاماً من الخبرة في مجال التوريدات البحرية',
      descriptionEn: 'Over 15 years of experience in marine supplies',
      icon: 'ri-award-line'
    },
    {
      title: 'جودة عالية',
      titleEn: 'High Quality',
      description: 'نلتزم بأعلى معايير الجودة في جميع منتجاتنا وخدماتنا',
      descriptionEn: 'We adhere to the highest quality standards in all our products and services',
      icon: 'ri-medal-line'
    },
    {
      title: 'خدمة سريعة',
      titleEn: 'Fast Service',
      description: 'استجابة سريعة وتسليم في الوقت المحدد',
      descriptionEn: 'Quick response and on-time delivery',
      icon: 'ri-time-line'
    },
    {
      title: 'دعم متواصل',
      titleEn: 'Continuous Support',
      description: 'فريق دعم متاح على مدار 24 ساعة لخدمتكم',
      descriptionEn: '24/7 support team available to serve you',
      icon: 'ri-customer-service-2-line'
    }
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-primary-600 text-lg">جاري تحميل الموقع...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <VisualEditor />

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(12, 74, 110, 0.8), rgba(14, 165, 233, 0.8)), url('https://readdy.ai/api/search-image?query=Modern%20maritime%20shipping%20port%20with%20large%20cargo%20ships%20containers%20and%20cranes%20at%20sunset%20professional%20commercial%20photography%20clean%20minimalist%20background%20maritime%20industry%20logistics&width=1920&height=1080&seq=hero-bg-clean&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              <span className="logo-text">Sea Greats</span>
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-semibold">
              {language === 'ar' 
                ? 'شريكك الموثوق في التوريدات البحرية'
                : 'Your Trusted Partner in Marine Supplies'
              }
            </h2>

            <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
              {language === 'ar' 
                ? 'نقدم حلولاً شاملة لتموين السفن والتوريدات البحرية بأعلى معايير الجودة والموثوقية منذ أكثر من 15 عاماً'
                : 'We provide comprehensive solutions for ship supplies and marine provisions with the highest standards of quality and reliability for over 15 years'
              }
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/services" 
                className="bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-primary-700 transition-all duration-300 whitespace-nowrap transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {language === 'ar' ? 'اكتشف خدماتنا' : 'Discover Our Services'}
              </Link>
              
              <a 
                href="https://wa.me/201024886944" 
                className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-green-600 transition-all duration-300 whitespace-nowrap flex items-center space-x-2 rtl:space-x-reverse transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <i className="ri-whatsapp-line"></i>
                <span>{language === 'ar' ? 'تواصل معنا' : 'Contact Us'}</span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold text-accent-300 mb-2">15+</div>
                <div className="text-lg text-blue-100">{language === 'ar' ? 'سنة خبرة' : 'Years Experience'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold text-accent-300 mb-2">24/7</div>
                <div className="text-lg text-blue-100">{language === 'ar' ? 'خدمة متواصلة' : 'Service Available'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold text-accent-300 mb-2">100%</div>
                <div className="text-lg text-blue-100">{language === 'ar' ? 'جودة مضمونة' : 'Quality Guaranteed'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {language === 'ar' ? 'نبذة عن الشركة' : 'About the Company'}
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                {language === 'ar' 
                  ? 'رائدون في مجال التوريدات البحرية'
                  : 'Leaders in Marine Supplies'
                }
              </h3>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                {language === 'ar' 
                  ? 'شركة Sea Greats هي شركة متخصصة في تموين السفن والتوريدات البحرية، تأسست لتقديم خدمات شاملة ومتميزة لقطاع النقل البحري والملاحة في مصر والمنطقة العربية.'
                  : 'Sea Greats is a company specialized in ship supply and marine provisions, established to provide comprehensive and distinguished services to the maritime transport and navigation sector in Egypt and the Arab region.'
                }
              </p>
              
              <Link 
                href="/about" 
                className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
              >
                {language === 'ar' ? 'اقرأ المزيد' : 'Read More'}
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20maritime%20company%20team%20working%20with%20ships%20and%20marine%20equipment%20modern%20office%20environment%20with%20nautical%20themes%20blue%20and%20purple%20color%20scheme%20clean%20corporate%20photography%20Ahmed%20Saleh%20business%20owner&width=600&height=400&seq=about-img-new&orientation=landscape"
                alt="فريق شركة Sea Greats"
                className="rounded-lg shadow-lg w-full h-96 object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {language === 'ar' ? 'خدماتنا' : 'Our Services'}
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={language === 'ar' ? service.title : service.titleEn}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center ml-3 rtl:mr-3 rtl:ml-0 group-hover:bg-primary-600 transition-colors">
                      <i className={`${service.icon} text-xl text-primary-600 group-hover:text-white`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {language === 'ar' ? service.title : service.titleEn}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {language === 'ar' ? service.description : service.descriptionEn}
                  </p>
                  <Link href={service.link} className="inline-flex items-center text-primary-600 hover:text-primary-800 font-semibold transition-colors whitespace-nowrap">
                    {language === 'ar' ? 'اقرأ المزيد' : 'Read More'}
                    <i className="ri-arrow-left-line mr-2 rtl:mr-0 rtl:ml-2 rtl:rtl-flip"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'ar' ? 'هل تحتاج مساعدة؟' : 'Need Help?'}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            {language === 'ar' 
              ? 'فريقنا جاهز لمساعدتك على مدار 24 ساعة لتلبية جميع احتياجاتك البحرية'
              : 'Our team is ready to help you 24 hours a day to meet all your marine needs'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors whitespace-nowrap">
              {language === 'ar' ? 'اتصل بنا الآن' : 'Contact Us Now'}
            </Link>
            <a href="tel:+201024886944" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-primary-600 transition-colors whitespace-nowrap">
              +201024886944
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
