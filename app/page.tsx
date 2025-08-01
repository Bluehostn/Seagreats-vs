
'use client';

import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
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
      icon: 'ri-ship-line',
      title: 'تموين السفن',
      titleEn: 'Ship Supply',
      description: 'توفير جميع احتياجات السفن من المواد والمستلزمات الأساسية',
      descriptionEn: 'Providing all ship needs from basic materials and supplies',
      link: '/services/ship-supply',
      image: 'https://readdy.ai/api/search-image?query=Ship%20supply%20materials%20including%20ropes%20chains%20anchors%20safety%20equipment%20cleaning%20supplies%20organized%20on%20ship%20deck%20maritime%20professional%20photography%20realistic%20products&width=400&height=300&seq=ship-supply-products&orientation=landscape'
    },
    {
      icon: 'ri-settings-3-line',
      title: 'مستلزمات الماكينات',
      titleEn: 'Machinery Supplies',
      description: 'قطع غيار ومستلزمات الماكينات البحرية عالية الجودة',
      descriptionEn: 'High-quality marine machinery spare parts and supplies',
      link: '/services/machinery-supplies',
      image: 'https://readdy.ai/api/search-image?query=Marine%20engine%20parts%20machinery%20supplies%20including%20pistons%20filters%20pumps%20gauges%20tools%20organized%20in%20ship%20engine%20room%20professional%20industrial%20photography%20realistic%20equipment&width=400&height=300&seq=machinery-supplies-products&orientation=landscape'
    },
    {
      icon: 'ri-compass-3-line',
      title: 'المعدات البحرية',
      titleEn: 'Marine Equipment',
      description: 'معدات ملاحية وأدوات بحرية متطورة وآمنة',
      descriptionEn: 'Advanced and safe navigation equipment and marine tools',
      link: '/services/marine-equipment',
      image: 'https://readdy.ai/api/search-image?query=Marine%20navigation%20equipment%20including%20compass%20GPS%20radar%20communication%20devices%20life%20jackets%20safety%20gear%20organized%20on%20ship%20bridge%20professional%20maritime%20photography%20realistic%20instruments&width=400&height=300&seq=marine-equipment-products&orientation=landscape'
    },
    {
      icon: 'ri-restaurant-line',
      title: 'المواد الغذائية',
      titleEn: 'Food Supplies',
      description: 'مواد غذائية طازجة ومحفوظة لطاقم السفن',
      descriptionEn: 'Fresh and preserved food supplies for ship crews',
      link: '/services/food-supplies',
      image: 'https://readdy.ai/api/search-image?query=Fresh%20food%20supplies%20for%20ships%20including%20fruits%20vegetables%20meat%20canned%20goods%20organized%20in%20ship%20galley%20professional%20food%20photography%20realistic%20ingredients&width=400&height=300&seq=food-supplies-products&orientation=landscape'
    },
    {
      icon: 'ri-tools-line',
      title: 'الخدمات الفنية',
      titleEn: 'Technical Services',
      description: 'خدمات فنية متخصصة وصيانة شاملة',
      descriptionEn: 'Specialized technical services and comprehensive maintenance',
      link: '/services/technical-services',
      image: 'https://readdy.ai/api/search-image?query=Technical%20service%20tools%20including%20wrenches%20screwdrivers%20electrical%20equipment%20maintenance%20supplies%20organized%20in%20ship%20workshop%20professional%20photography%20realistic%20tools&width=400&height=300&seq=technical-services-products&orientation=landscape'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'الاستشارات البحرية',
      titleEn: 'Marine Consulting',
      description: 'استشارات متخصصة في المجال البحري',
      descriptionEn: 'Specialized consulting in the marine field',
      link: '/services/consulting',
      image: 'https://readdy.ai/api/search-image?query=Maritime%20consulting%20documents%20charts%20maps%20blueprints%20on%20desk%20with%20marine%20professional%20reviewing%20plans%20office%20environment%20realistic%20professional%20setup&width=400&height=300&seq=consulting-services-products&orientation=landscape'
    },
    {
      icon: 'ri-drop-line',
      title: 'المواد الكيميائية',
      titleEn: 'Chemical Supplies',
      description: 'مواد كيميائية متخصصة للصيانة والتنظيف البحري',
      descriptionEn: 'Specialized chemicals for marine maintenance and cleaning',
      link: '/services/chemical-supplies',
      image: 'https://readdy.ai/api/search-image?query=Chemical%20supplies%20including%20cleaning%20agents%20rust%20removers%20lubricants%20paint%20containers%20organized%20in%20ship%20storage%20professional%20photography%20realistic%20chemical%20products&width=400&height=300&seq=chemical-supplies-products&orientation=landscape'
    },
    {
      icon: 'ri-hammer-line',
      title: 'أدوات العمل',
      titleEn: 'Work Tools',
      description: 'أدوات عمل متخصصة للأعمال البحرية والصيانة',
      descriptionEn: 'Specialized work tools for marine operations and maintenance',
      link: '/services/work-tools',
      image: 'https://readdy.ai/api/search-image?query=Marine%20work%20tools%20including%20hammers%20drills%20measuring%20instruments%20safety%20equipment%20organized%20toolbox%20ship%20workshop%20professional%20photography%20realistic%20tools&width=400&height=300&seq=work-tools-products&orientation=landscape'
    },
    {
      icon: 'ri-plug-line',
      title: 'المعدات الكهربائية',
      titleEn: 'Electrical Equipment',
      description: 'معدات وقطع غيار كهربائية للأنظمة البحرية',
      descriptionEn: 'Electrical equipment and spare parts for marine systems',
      link: '/services/electrical-equipment',
      image: 'https://readdy.ai/api/search-image?query=Marine%20electrical%20equipment%20including%20cables%20switches%20panels%20batteries%20lighting%20systems%20organized%20in%20ship%20electrical%20room%20professional%20photography%20realistic%20components&width=400&height=300&seq=electrical-equipment-products&orientation=landscape'
    }
  ];

  const whyChooseUs = [
    {
      icon: 'ri-award-line',
      title: 'خبرة واسعة',
      titleEn: 'Extensive Experience',
      description: 'أكثر من 15 عاماً في مجال التوريدات البحرية',
      descriptionEn: 'More than 15 years in marine supplies'
    },
    {
      icon: 'ri-24-hours-line',
      title: 'خدمة 24/7',
      titleEn: '24/7 Service',
      description: 'متاحون دائماً لتلبية احتياجاتكم الطارئة',
      descriptionEn: 'Always available to meet your emergency needs'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'جودة مضمونة',
      titleEn: 'Guaranteed Quality',
      description: 'نضمن جودة جميع المنتجات والخدمات المقدمة',
      descriptionEn: 'We guarantee the quality of all products and services provided'
    },
    {
      icon: 'ri-truck-line',
      title: 'توصيل سريع',
      titleEn: 'Fast Delivery',
      description: 'شبكة توصيل واسعة لضمان الوصول في الوقت المحدد',
      descriptionEn: 'Wide delivery network to ensure on-time arrival'
    }
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-600"></div>
        </div>
        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <VisualEditor />

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Modern%20maritime%20shipping%20port%20with%20large%20cargo%20ships%20containers%20and%20cranes%20at%20sunset%20professional%20commercial%20photography%20clean%20minimalist%20background%20maritime%20industry%20logistics&width=1920&height=1080&seq=hero-bg-clean&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <div className="max-w-4xl mx-auto space-y-8 fade-in">
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
              <Link href="/services" className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-colors whitespace-nowrap">
                {language === 'ar' ? 'اكتشف خدماتنا' : 'Discover Our Services'}
              </Link>
              <a href="https://wa.me/201024886944" className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-green-600 transition-colors whitespace-nowrap flex items-center space-x-2 rtl:space-x-reverse">
                <i className="ri-whatsapp-line"></i>
                <span>{language === 'ar' ? 'تواصل معنا' : 'Contact Us'}</span>
              </a>
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
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 slide-in">
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
              <p className="text-lg text-gray-700 leading-relaxed">
                {language === 'ar' 
                  ? 'نفخر بخبرتنا الواسعة وشبكة علاقاتنا القوية مع أفضل الموردين العالميين، مما يمكننا من تقديم منتجات عالية الجودة وخدمات متميزة تلبي جميع احتياجات عملائنا.'
                  : 'We pride ourselves on our extensive experience and strong network of relationships with the best global suppliers, enabling us to provide high-quality products and distinguished services that meet all our customers\' needs.'
                }
              </p>
              <Link href="/about" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
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
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ar' 
                ? 'نقدم مجموعة شاملة من الخدمات المتخصصة في التوريدات البحرية'
                : 'We offer a comprehensive range of specialized marine supply services'
              }
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group fade-in">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={language === 'ar' ? service.title : service.titleEn}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center ml-3 rtl:mr-3 rtl:ml-0 group-hover:bg-blue-600 transition-colors">
                      <i className={`${service.icon} text-xl text-blue-600 group-hover:text-white`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {language === 'ar' ? service.title : service.titleEn}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {language === 'ar' ? service.description : service.descriptionEn}
                  </p>
                  <Link href={service.link} className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors whitespace-nowrap">
                    {language === 'ar' ? 'اقرأ المزيد' : 'Read More'}
                    <i className="ri-arrow-left-line mr-2 rtl:mr-0 rtl:ml-2 rtl:rtl-flip"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {language === 'ar' ? 'لماذا تختار Sea Greats؟' : 'Why Choose Sea Greats?'}
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group fade-in">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <i className={`${item.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {language === 'ar' ? item.title : item.titleEn}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {language === 'ar' ? item.description : item.descriptionEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {language === 'ar' ? 'مؤسس الشركة' : 'Company Founder'}
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="text-center lg:text-right">
                  <div className="relative inline-block">
                    <img 
                      src="https://static.readdy.ai/image/dfa00478676086a8624b0f515714071b/439f4bc52fac1c85be367fb339abb060.jfif"
                      alt="Ahmed Saleh - مؤسس الشركة"
                      className="w-64 h-64 rounded-full object-cover object-center mx-auto shadow-2xl border-4 border-white"
                    />
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full font-bold">
                      {language === 'ar' ? 'المؤسس والرئيس التنفيذي' : 'Founder & CEO'}
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">Mr. Ahmed Saleh</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {language === 'ar' 
                      ? 'أحمد صالح، مؤسس شركة Sea Greats والرئيس التنفيذي، يتمتع بخبرة تزيد عن 20 عاماً في مجال الصناعات البحرية والتوريدات. بدأ رحلته المهنية في قطاع النقل البحري وطور خبرة عميقة في احتياجات السفن والموانئ.'
                      : 'Ahmed Saleh, founder and CEO of Sea Greats, has over 20 years of experience in marine industries and supplies. He started his career in the maritime transport sector and developed deep expertise in ship and port requirements.'
                    }
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {language === 'ar' 
                      ? 'تحت قيادته، نمت الشركة لتصبح واحدة من أكثر الشركات المتخصصة في التوريدات البحرية موثوقية في المنطقة، مع التركيز على الجودة والخدمة المتميزة.'
                      : 'Under his leadership, the company has grown to become one of the most reliable marine supply companies in the region, focusing on quality and excellent service.'
                    }
                  </p>
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <a href="https://wa.me/201024886944" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors flex items-center space-x-2 rtl:space-x-reverse whitespace-nowrap">
                      <i className="ri-whatsapp-line"></i>
                      <span>+201024886944</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'ar' ? 'هل تحتاج مساعدة?' : 'Need Help?'}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            {language === 'ar' 
              ? 'فريقنا جاهز لمساعدتك على مدار 24 ساعة لتلبية جميع احتياجاتك البحرية'
              : 'Our team is ready to help you 24 hours a day to meet all your marine needs'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors whitespace-nowrap">
              {language === 'ar' ? 'اتصل بنا الآن' : 'Contact Us Now'}
            </Link>
            <a href="tel:+201024886944" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap">
              +201024886944
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
