'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import WhatsAppButton from '../../../components/WhatsAppButton';
import Link from 'next/link';

export default function ChemicalSuppliesPage() {
  const supplies = [
    {
      category: 'مواد التنظيف البحرية',
      items: ['منظفات الأسطح', 'مزيلات الدهون', 'منظفات المحركات', 'مواد التطهير'],
      icon: 'ri-bubble-chart-line'
    },
    {
      category: 'مزيلات الصدأ والطلاء',
      items: ['مزيلات الصدأ المتقدمة', 'مذيبات الطلاء', 'مواد الحماية', 'برايمر الطلاء'],
      icon: 'ri-brush-line'
    },
    {
      category: 'زيوت التشحيم والصيانة',
      items: ['زيوت المحركات البحرية', 'شحوم الماكينات', 'مواد العزل', 'سوائل التبريد'],
      icon: 'ri-oil-line'
    },
    {
      category: 'مواد السلامة الكيميائية',
      items: ['مطهرات الأيدي', 'مواد إطفاء الحرائق', 'منظفات آمنة', 'مواد التعقيم'],
      icon: 'ri-shield-keyhole-line'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://readdy.ai/api/search-image?query=Chemical%20supplies%20including%20cleaning%20agents%20rust%20removers%20lubricants%20paint%20containers%20organized%20in%20ship%20storage%20professional%20photography%20realistic%20chemical%20products%20maritime%20industrial%20environment&width=1920&height=600&seq=chemical-supplies-hero&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">المواد الكيميائية</h1>
          <p className="text-xl md:text-2xl">مواد كيميائية متخصصة للصيانة والتنظيف البحري</p>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">مواد كيميائية عالية الجودة</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  نوفر مجموعة شاملة من المواد الكيميائية المتخصصة للاستخدام البحري، بما في ذلك مواد التنظيف ومزيلات الصدأ وزيوت التشحيم. جميع منتجاتنا معتمدة ومطابقة للمعايير الدولية للسلامة البحرية.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  نحرص على توفير مواد كيميائية آمنة وفعالة تساعد في الحفاظ على السفن وضمان سلامة الطاقم. فريقنا المتخصص يقدم الاستشارات حول الاستخدام الآمن والتخزين السليم.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center whitespace-nowrap">
                    طلب عرض أسعار
                  </Link>
                  <a href="https://wa.me/201024886944" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-center whitespace-nowrap">
                    استشارة فنية
                  </a>
                </div>
              </div>
              <div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20chemical%20storage%20room%20with%20organized%20chemical%20containers%20cleaning%20supplies%20lubricants%20organized%20shelving%20maritime%20industrial%20photography%20safety%20equipment&width=600&height=400&seq=chemical-supplies-main&orientation=landscape"
                  alt="المواد الكيميائية البحرية"
                  className="rounded-lg shadow-lg w-full h-80 object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chemical Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">فئات المواد الكيميائية</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نوفر جميع أنواع المواد الكيميائية اللازمة للصيانة والتشغيل البحري
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {supplies.map((supply, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center ml-4 rtl:mr-4 rtl:ml-0">
                    <i className={`${supply.icon} text-2xl text-blue-600`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{supply.category}</h3>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {supply.items.map((item, itemIndex) => (
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

      {/* Safety Standards */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">معايير السلامة والجودة</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            نلتزم بأعلى معايير السلامة في التعامل مع المواد الكيميائية
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">معايير دولية</h3>
              <p>جميع المنتجات مطابقة للمعايير الدولية</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-file-text-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">شهادات السلامة</h3>
              <p>شهادات معتمدة لجميع المواد الكيميائية</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-customer-service-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">دعم فني</h3>
              <p>استشارات فنية لضمان الاستخدام الآمن</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}