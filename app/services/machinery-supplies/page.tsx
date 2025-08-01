'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import WhatsAppButton from '../../../components/WhatsAppButton';
import Link from 'next/link';

export default function MachinerySuppliesPage() {
  const supplies = [
    {
      category: 'قطع غيار المحركات',
      items: ['مكابس المحرك', 'رؤوس الأسطوانات', 'حلقات الكباس', 'صمامات العادم'],
      icon: 'ri-settings-5-line'
    },
    {
      category: 'أنظمة التبريد',
      items: ['مبردات المياه', 'مضخات التبريد', 'فلاتر المياه', 'منظمات الحرارة'],
      icon: 'ri-temp-cold-line'
    },
    {
      category: 'مضخات المياه',
      items: ['مضخات الطرد المركزي', 'مضخات التروس', 'مضخات الحريق', 'مضخات الصرف'],
      icon: 'ri-drop-line'
    },
    {
      category: 'أجهزة القياس',
      items: ['مقاييس الضغط', 'مقاييس الحرارة', 'عدادات التدفق', 'أجهزة مراقبة الاهتزاز'],
      icon: 'ri-dashboard-line'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(106, 13, 173, 0.8), rgba(106, 13, 173, 0.8)), url('https://readdy.ai/api/search-image?query=Marine%20engine%20parts%20and%20machinery%20supplies%20with%20various%20mechanical%20components%20pistons%20valves%20pumps%20professional%20industrial%20photography%20clean%20organized%20background&width=1920&height=600&seq=machinery-hero&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">مستلزمات الماكينات</h1>
          <p className="text-xl md:text-2xl">قطع غيار ومستلزمات الماكينات البحرية عالية الجودة</p>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">مستلزمات الماكينات البحرية المتخصصة</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  نوفر مجموعة شاملة من قطع الغيار والمستلزمات للماكينات البحرية من أفضل المصانع العالمية المعتمدة. فريقنا المتخصص يضمن اختيار القطع المناسبة لكل نوع من المحركات والماكينات البحرية.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  نحرص على توفير قطع الغيار الأصلية والمطابقة للمواصفات الدولية، مع ضمان الجودة وسرعة التوصيل لتقليل فترات توقف السفن إلى أدنى حد ممكن.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors text-center whitespace-nowrap">
                    طلب عرض أسعار
                  </Link>
                  <a href="https://wa.me/201024886944" className="border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors text-center whitespace-nowrap">
                    استشارة فنية
                  </a>
                </div>
              </div>
              <div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20marine%20engine%20parts%20workshop%20with%20organized%20machinery%20supplies%20engine%20components%20and%20technical%20equipment%20detailed%20industrial%20photography&width=600&height=400&seq=machinery-main&orientation=landscape"
                  alt="مستلزمات الماكينات البحرية"
                  className="rounded-lg shadow-lg w-full h-80 object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supplies Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">فئات المستلزمات</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نوفر جميع أنواع قطع الغيار والمستلزمات للماكينات البحرية
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {supplies.map((supply, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center ml-4 rtl:mr-4 rtl:ml-0">
                    <i className={`${supply.icon} text-2xl text-primary`}></i>
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

      {/* Quality Assurance */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">ضمان الجودة</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-award-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">قطع غيار أصلية</h3>
              <p className="text-gray-600">نوفر قطع الغيار الأصلية من المصانع المعتمدة فقط</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">شهادات الجودة</h3>
              <p className="text-gray-600">جميع منتجاتنا معتمدة ومطابقة للمعايير الدولية</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-customer-service-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">دعم فني</h3>
              <p className="text-gray-600">فريق فني متخصص لتقديم المشورة والدعم</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">تحتاج قطع غيار عاجلة؟</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            تواصل معنا الآن للحصول على قطع الغيار المطلوبة بأسرع وقت ممكن
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://wa.me/201024886944" className="bg-white text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors whitespace-nowrap flex items-center space-x-2 rtl:space-x-reverse">
              <i className="ri-whatsapp-line"></i>
              <span>طلب عاجل</span>
            </a>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-primary transition-colors whitespace-nowrap">
              طلب عرض أسعار
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}