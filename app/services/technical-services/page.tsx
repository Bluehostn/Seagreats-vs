'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import WhatsAppButton from '../../../components/WhatsAppButton';
import Link from 'next/link';

export default function TechnicalServicesPage() {
  const services = [
    {
      category: 'صيانة المحركات',
      items: ['فحص شامل للمحركات', 'إصلاح الأعطال الميكانيكية', 'تغيير الزيوت والفلاتر', 'معايرة أنظمة الحقن'],
      icon: 'ri-settings-5-line'
    },
    {
      category: 'إصلاح المعدات',
      items: ['إصلاح أنظمة التكييف', 'صيانة المولدات الكهربائية', 'إصلاح أنظمة المياه', 'صيانة معدات السلامة'],
      icon: 'ri-tools-line'
    },
    {
      category: 'خدمات الطوارئ',
      items: ['خدمة 24 ساعة', 'إصلاحات عاجلة في البحر', 'دعم فني هاتفي', 'فرق إنقاذ متخصصة'],
      icon: 'ri-alarm-warning-line'
    },
    {
      category: 'الاستشارات الفنية',
      items: ['تقييم حالة المعدات', 'توصيات التحسين', 'خطط الصيانة الوقائية', 'دراسات الجدوى التقنية'],
      icon: 'ri-lightbulb-line'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(106, 13, 173, 0.8), rgba(106, 13, 173, 0.8)), url('https://readdy.ai/api/search-image?query=Marine%20technical%20services%20with%20skilled%20technicians%20working%20on%20ship%20equipment%20engine%20repair%20maritime%20maintenance%20professional%20industrial%20photography%20clean%20background&width=1920&height=600&seq=technical-services-hero&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">الخدمات الفنية</h1>
          <p className="text-xl md:text-2xl">خدمات فنية متخصصة وصيانة شاملة للمعدات البحرية</p>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">خدمات فنية احترافية</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  نقدم خدمات فنية شاملة ومتخصصة للمعدات البحرية بواسطة فريق من الفنيين المؤهلين وذوي الخبرة العالية في جميع أنواع المعدات والأنظمة البحرية.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  فريقنا الفني متاح على مدار الساعة لتقديم الدعم والمساعدة في حالات الطوارئ، مع توفير حلول سريعة وفعالة تضمن استمرارية العمل وتقليل فترات التوقف.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors text-center whitespace-nowrap">
                    طلب خدمة فنية
                  </Link>
                  <a href="https://wa.me/201024886944" className="border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors text-center whitespace-nowrap">
                    طوارئ 24/7
                  </a>
                </div>
              </div>
              <div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20marine%20technicians%20performing%20engine%20maintenance%20and%20repair%20work%20on%20ship%20equipment%20detailed%20industrial%20photography%20modern%20workshop%20environment&width=600&height=400&seq=technical-services-main&orientation=landscape"
                  alt="الخدمات الفنية البحرية"
                  className="rounded-lg shadow-lg w-full h-80 object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">أقسام الخدمات الفنية</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نوفر جميع أنواع الخدمات الفنية للمعدات والأنظمة البحرية
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center ml-4 rtl:mr-4 rtl:ml-0">
                    <i className={`${service.icon} text-2xl text-primary`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.category}</h3>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center text-gray-700">
                      <i className="ri-check-line text-green-500 ml-2 rtl:mr-2 rtl:ml-0"></i>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">مراحل تقديم الخدمة</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-search-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">التشخيص</h3>
              <p className="text-gray-600">فحص شامل وتشخيص دقيق للمشكلة</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-file-list-3-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">خطة العمل</h3>
              <p className="text-gray-600">وضع خطة عمل مفصلة للإصلاح</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-tools-fill text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">التنفيذ</h3>
              <p className="text-gray-600">تنفيذ أعمال الإصلاح والصيانة</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-checkbox-circle-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">الاختبار</h3>
              <p className="text-gray-600">اختبار شامل لضمان جودة العمل</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-alarm-warning-line text-3xl text-white"></i>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">خدمات الطوارئ</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              فريقنا متاح 24/7 لتقديم خدمات الطوارئ الفنية في أي وقت وأي مكان
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <i className="ri-24-hours-line text-3xl text-red-500 mb-4"></i>
                <h3 className="text-lg font-bold text-gray-900 mb-2">24/7</h3>
                <p className="text-gray-600">خدمة على مدار الساعة</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <i className="ri-speed-line text-3xl text-red-500 mb-4"></i>
                <h3 className="text-lg font-bold text-gray-900 mb-2">استجابة سريعة</h3>
                <p className="text-gray-600">وصول خلال ساعات</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <i className="ri-team-line text-3xl text-red-500 mb-4"></i>
                <h3 className="text-lg font-bold text-gray-900 mb-2">فريق متخصص</h3>
                <p className="text-gray-600">فنيون خبراء مؤهلون</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">تحتاج خدمة فنية؟</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            تواصل معنا الآن للحصول على أفضل الخدمات الفنية المتخصصة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+201024886944" className="bg-red-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-red-600 transition-colors whitespace-nowrap flex items-center space-x-2 rtl:space-x-reverse">
              <i className="ri-phone-line"></i>
              <span>طوارئ فورية</span>
            </a>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-primary transition-colors whitespace-nowrap">
              طلب خدمة عادية
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}