'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import WhatsAppButton from '../../../components/WhatsAppButton';
import Link from 'next/link';

export default function WorkToolsPage() {
  const tools = [
    {
      category: 'أدوات القياس والفحص',
      items: ['أجهزة قياس الضغط', 'مقاييس الحرارة البحرية', 'أدوات فحص اللحام', 'معدات اختبار المواد'],
      icon: 'ri-ruler-2-line'
    },
    {
      category: 'أدوات الصيانة الميكانيكية',
      items: ['مفاتيح ربط بحرية', 'أدوات خراطة', 'مثاقب كهربائية', 'منشار معادن'],
      icon: 'ri-hammer-line'
    },
    {
      category: 'أدوات السلامة المهنية',
      items: ['خوذات الحماية', 'قفازات مقاومة للكيماويات', 'أحزمة الأمان', 'نظارات الوقاية'],
      icon: 'ri-hard-hat-line'
    },
    {
      category: 'معدات الرفع والنقل',
      items: ['رافعات يدوية', 'بكرات رفع', 'حبال فولاذية', 'معدات ربط الأحمال'],
      icon: 'ri-truck-line'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://readdy.ai/api/search-image?query=Marine%20work%20tools%20including%20hammers%20drills%20measuring%20instruments%20safety%20equipment%20organized%20toolbox%20ship%20workshop%20professional%20photography%20realistic%20tools%20maritime%20industrial%20environment&width=1920&height=600&seq=work-tools-hero&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">أدوات العمل</h1>
          <p className="text-xl md:text-2xl">أدوات عمل متخصصة للأعمال البحرية والصيانة</p>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">أدوات عمل احترافية</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  نوفر مجموعة شاملة من أدوات العمل المتخصصة للاستخدام في البيئة البحرية، بما في ذلك أدوات الصيانة والقياس والسلامة المهنية. جميع أدواتنا مقاومة للتآكل ومناسبة للاستخدام البحري.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  نختار أدواتنا من أفضل الماركات العالمية المعروفة بجودتها ومتانتها، مع ضمان الأداء الموثوق في أقسى الظروف البحرية.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center whitespace-nowrap">
                    طلب كتالوج الأدوات
                  </Link>
                  <a href="https://wa.me/201024886944" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-center whitespace-nowrap">
                    استشارة فنية
                  </a>
                </div>
              </div>
              <div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20marine%20workshop%20with%20organized%20tool%20cabinets%20various%20hand%20tools%20power%20tools%20measuring%20equipment%20ship%20maintenance%20facility%20industrial%20photography&width=600&height=400&seq=work-tools-main&orientation=landscape"
                  alt="أدوات العمل البحرية"
                  className="rounded-lg shadow-lg w-full h-80 object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">فئات أدوات العمل</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نوفر جميع أنواع الأدوات المطلوبة للأعمال البحرية والصيانة
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center ml-4 rtl:mr-4 rtl:ml-0">
                    <i className={`${tool.icon} text-2xl text-blue-600`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{tool.category}</h3>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {tool.items.map((item, itemIndex) => (
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

      {/* Quality Features */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">مميزات أدواتنا</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            أدوات عالية الجودة مصممة خصيصاً للبيئة البحرية
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">مقاومة التآكل</h3>
              <p>مقاومة عالية للتآكل البحري</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-medal-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">جودة عالمية</h3>
              <p>من أفضل الماركات العالمية</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">متانة طويلة</h3>
              <p>عمر افتراضي طويل وأداء موثوق</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-service-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">دعم فني</h3>
              <p>خدمة ما بعد البيع والصيانة</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}