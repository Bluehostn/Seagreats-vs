'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import WhatsAppButton from '../../../components/WhatsAppButton';
import Link from 'next/link';

export default function ConsultingPage() {
  const services = [
    {
      category: 'تخطيط العمليات',
      items: ['تصميم خطط التشغيل', 'تحسين المسارات البحرية', 'إدارة الأسطول', 'جدولة الرحلات'],
      icon: 'ri-route-line'
    },
    {
      category: 'تحسين الأداء',
      items: ['تحليل الأداء التشغيلي', 'تحسين كفاءة الوقود', 'تطوير الإجراءات', 'تدريب الطاقم'],
      icon: 'ri-line-chart-line'
    },
    {
      category: 'الحلول المخصصة',
      items: ['حلول تقنية متخصصة', 'تطوير أنظمة مخصصة', 'استشارات التصميم', 'حلول الأتمتة'],
      icon: 'ri-settings-3-line'
    },
    {
      category: 'دراسات الجدوى',
      items: ['تقييم المشاريع البحرية', 'دراسات الجدوى الاقتصادية', 'تحليل المخاطر', 'التخطيط الاستراتيجي'],
      icon: 'ri-file-chart-line'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(106, 13, 173, 0.8), rgba(106, 13, 173, 0.8)), url('https://readdy.ai/api/search-image?query=Maritime%20consulting%20services%20with%20professional%20consultants%20reviewing%20ship%20plans%20documents%20and%20maritime%20operations%20modern%20office%20environment%20clean%20background%20business%20meeting&width=1920&height=600&seq=consulting-hero&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">الاستشارات البحرية</h1>
          <p className="text-xl md:text-2xl">استشارات متخصصة لتطوير وتحسين العمليات البحرية</p>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">استشارات بحرية متخصصة</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  نقدم استشارات متخصصة في المجال البحري لمساعدة الشركات والمؤسسات على اتخاذ القرارات الصحيحة وتطوير عملياتها البحرية. فريقنا من الخبراء لديه خبرة واسعة في جميع جوانب الصناعة البحرية.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  نوفر حلولاً مبتكرة ومدروسة تساعد على تحسين الكفاءة وتقليل التكاليف وزيادة الربحية، مع ضمان الامتثال لجميع المعايير والقوانين البحرية الدولية.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors text-center whitespace-nowrap">
                    احجز استشارة
                  </Link>
                  <a href="https://wa.me/201024886944" className="border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors text-center whitespace-nowrap">
                    تواصل مع الخبراء
                  </a>
                </div>
              </div>
              <div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20maritime%20consulting%20meeting%20with%20experts%20discussing%20ship%20operations%20charts%20graphs%20business%20strategy%20modern%20office%20environment%20professional%20photography&width=600&height=400&seq=consulting-main&orientation=landscape"
                  alt="الاستشارات البحرية"
                  className="rounded-lg shadow-lg w-full h-80 object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">مجالات الاستشارة</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نوفر استشارات شاملة في جميع مجالات الصناعة البحرية
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

      {/* Expertise Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">مجالات خبرتنا</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <i className="ri-ship-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">إدارة الأساطيل</h3>
              <p className="text-gray-600">تحسين إدارة وتشغيل الأساطيل البحرية</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <i className="ri-oil-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">كفاءة الوقود</h3>
              <p className="text-gray-600">تحسين استهلاك الوقود وتقليل التكاليف التشغيلية</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <i className="ri-shield-check-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">السلامة البحرية</h3>
              <p className="text-gray-600">تطوير إجراءات السلامة وإدارة المخاطر</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <i className="ri-file-shield-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">الامتثال القانوني</h3>
              <p className="text-gray-600">ضمان الامتثال للقوانين واللوائح البحرية</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <i className="ri-plant-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">الاستدامة البيئية</h3>
              <p className="text-gray-600">تطوير حلول صديقة للبيئة ومستدامة</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <i className="ri-brain-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">التقنيات الذكية</h3>
              <p className="text-gray-600">تطبيق التقنيات الحديثة والذكية</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">عملية الاستشارة</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">التقييم الأولي</h3>
              <p className="text-gray-600">دراسة وتحليل الوضع الحالي والاحتياجات</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">وضع الاستراتيجية</h3>
              <p className="text-gray-600">تطوير استراتيجية مخصصة لتحقيق الأهداف</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">خطة التنفيذ</h3>
              <p className="text-gray-600">وضع خطة تفصيلية للتنفيذ مع الجدول الزمني</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">المتابعة والدعم</h3>
              <p className="text-gray-600">متابعة مستمرة وتقديم الدعم اللازم</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">قصص نجاح</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              ساعدنا العديد من الشركات على تحقيق أهدافها وتحسين أدائها
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-4">30%</div>
              <p className="text-xl">توفير في تكاليف الوقود</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold mb-4">50+</div>
              <p className="text-xl">مشروع استشاري ناجح</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold mb-4">95%</div>
              <p className="text-xl">رضا العملاء</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">احجز استشارتك المجانية</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            تواصل معنا للحصول على استشارة مجانية وتقييم أولي لاحتياجاتك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-purple-700 transition-colors whitespace-nowrap">
              احجز استشارة مجانية
            </Link>
            <a href="https://wa.me/201024886944" className="border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-primary hover:text-white transition-colors whitespace-nowrap flex items-center space-x-2 rtl:space-x-reverse">
              <i className="ri-whatsapp-line"></i>
              <span>استشارة فورية</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}