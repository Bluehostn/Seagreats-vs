'use client';

import { useState, useEffect } from 'react';
import PageTemplate, { ContentSection } from '../../components/PageTemplate';
import Link from 'next/link';

export default function ServicesPage() {
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
      description: 'توفير جميع احتياجات السفن من المواد والمستلزمات الأساسية بأعلى معايير الجودة والسرعة',
      features: ['مواد كيميائية', 'أدوات السلامة', 'مستلزمات التنظيف', 'قطع الغيار الأساسية'],
      link: '/services/ship-supply',
      image: 'https://readdy.ai/api/search-image?query=Ship%20supply%20services%20with%20various%20maritime%20supplies%20equipment%20and%20materials%20organized%20on%20deck%20professional%20maritime%20photography%20clean%20background&width=400&height=300&seq=service-1&orientation=landscape'
    },
    {
      icon: 'ri-settings-3-line',
      title: 'مستلزمات الماكينات',
      description: 'قطع غيار ومستلزمات الماكينات البحرية من أفضل المصانع العالمية المعتمدة',
      features: ['قطع غيار المحركات', 'أنظمة التبريد', 'مضخات المياه', 'أجهزة القياس'],
      link: '/services/machinery-supplies',
      image: 'https://readdy.ai/api/search-image?query=Marine%20engine%20parts%20and%20machinery%20supplies%20professional%20industrial%20photography%20with%20various%20mechanical%20components%20clean%20organized%20background&width=400&height=300&seq=service-2&orientation=landscape'
    },
    {
      icon: 'ri-compass-3-line',
      title: 'المعدات البحرية',
      description: 'معدات ملاحية وأدوات بحرية متطورة وآمنة للاستخدام في جميع الظروف البحرية',
      features: ['أجهزة الملاحة', 'معدات الاتصال', 'أدوات الأمان', 'معدات الإنقاذ'],
      link: '/services/marine-equipment',
      image: 'https://readdy.ai/api/search-image?query=Marine%20navigation%20equipment%20and%20safety%20gear%20professional%20maritime%20photography%20with%20various%20nautical%20instruments%20clean%20background&width=400&height=300&seq=service-3&orientation=landscape'
    },
    {
      icon: 'ri-restaurant-line',
      title: 'المواد الغذائية',
      description: 'مواد غذائية طازجة ومحفوظة عالية الجودة لضمان تغذية صحية لطاقم السفن',
      features: ['لحوم طازجة', 'خضار وفواكه', 'مواد محفوظة', 'مشروبات متنوعة'],
      link: '/services/food-supplies',
      image: 'https://readdy.ai/api/search-image?query=Fresh%20food%20supplies%20for%20ships%20including%20fruits%20vegetables%20meat%20and%20preserved%20foods%20professional%20food%20photography%20clean%20organized%20background&width=400&height=300&seq=service-4&orientation=landscape'
    },
    {
      icon: 'ri-tools-line',
      title: 'الخدمات الفنية',
      description: 'خدمات فنية متخصصة وصيانة شاملة للمعدات البحرية بواسطة فنيين مؤهلين',
      features: ['صيانة المحركات', 'إصلاح المعدات', 'خدمات الطوارئ', 'استشارات فنية'],
      link: '/services/technical-services',
      image: 'https://readdy.ai/api/search-image?query=Marine%20technical%20services%20with%20skilled%20technicians%20working%20on%20ship%20equipment%20professional%20industrial%20photography%20clean%20background&width=400&height=300&seq=service-5&orientation=landscape'
    },
    {
      icon: 'ri-tools-fill',
      title: 'خدمات الصيانة',
      description: 'برامج صيانة دورية ووقائية للمعدات البحرية لضمان الأداء الأمثل والسلامة',
      features: ['صيانة دورية', 'صيانة طارئة', 'استبدال القطع', 'فحص شامل'],
      link: '/services/maintenance',
      image: 'https://readdy.ai/api/search-image?query=Ship%20maintenance%20services%20with%20professional%20workers%20performing%20equipment%20maintenance%20in%20maritime%20environment%20clean%20industrial%20photography&width=400&height=300&seq=service-6&orientation=landscape'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'الاستشارات البحرية',
      description: 'استشارات متخصصة في المجال البحري لمساعدة العملاء على اتخاذ القرارات الصحيحة',
      features: ['تخطيط العمليات', 'تحسين الأداء', 'حلول مخصصة', 'دراسات الجدوى'],
      link: '/services/consulting',
      image: 'https://readdy.ai/api/search-image?query=Maritime%20consulting%20services%20with%20professional%20consultants%20reviewing%20ship%20plans%20and%20documents%20modern%20office%20environment%20clean%20background&width=400&height=300&seq=service-7&orientation=landscape'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(106, 13, 173, 0.8), rgba(106, 13, 173, 0.8)), url('https://readdy.ai/api/search-image?query=Comprehensive%20maritime%20services%20with%20ships%20equipment%20and%20supplies%20in%20port%20professional%20commercial%20photography%20modern%20industrial%20environment&width=1920&height=600&seq=services-hero&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">خدماتنا</h1>
          <p className="text-xl md:text-2xl">حلول شاملة لجميع احتياجاتكم البحرية</p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">خدمات متكاملة</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              نقدم مجموعة شاملة من الخدمات المتخصصة في التوريدات البحرية، مدعومة بخبرة تزيد عن 15 عاماً في هذا المجال
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 md:h-full object-cover object-top"
                    />
                  </div>
                  <div className="md:w-3/5 p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center ml-4 rtl:mr-4 rtl:ml-0">
                        <i className={`${service.icon} text-xl text-primary`}></i>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">الخدمات الفرعية:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <i className="ri-check-line text-green-500 ml-2 rtl:mr-2 rtl:ml-0"></i>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Link href={service.link} className="inline-flex items-center bg-primary text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors whitespace-nowrap">
                      اقرأ المزيد
                      <i className="ri-arrow-left-line mr-2 rtl:mr-0 rtl:ml-2 rtl:rtl-flip"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">كيف نعمل</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              عملية مبسطة وفعالة لضمان تلبية احتياجاتكم بأسرع وقت ممكن
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">الاستعلام</h3>
              <p className="text-gray-600">تواصل معنا عبر الهاتف أو البريد الإلكتروني لطلب خدماتنا</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">التقييم</h3>
              <p className="text-gray-600">نقوم بدراسة احتياجاتكم وتقديم أفضل الحلول المناسبة</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">التنفيذ</h3>
              <p className="text-gray-600">تنفيذ الخدمة بأعلى معايير الجودة والمهنية</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">المتابعة</h3>
              <p className="text-gray-600">متابعة مستمرة لضمان رضاكم الكامل عن الخدمة</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">جاهزون لخدمتكم</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            تواصلوا معنا الآن للحصول على استشارة مجانية وعرض أسعار مخصص
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="bg-white text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors whitespace-nowrap">
              احصل على عرض أسعار
            </Link>
            <a href="https://wa.me/201024886944" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-primary transition-colors whitespace-nowrap flex items-center space-x-2 rtl:space-x-reverse">
              <i className="ri-whatsapp-line"></i>
              <span>واتساب</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}