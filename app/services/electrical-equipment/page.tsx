'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import WhatsAppButton from '../../../components/WhatsAppButton';
import Link from 'next/link';

export default function ElectricalEquipmentPage() {
  const equipment = [
    {
      category: 'الكابلات والأسلاك البحرية',
      items: ['كابلات مقاومة للماء', 'أسلاك عالية الجهد', 'كابلات الاتصالات', 'أسلاك التحكم'],
      icon: 'ri-plug-line'
    },
    {
      category: 'أنظمة الإضاءة البحرية',
      items: ['إضاءة LED البحرية', 'كشافات الملاحة', 'إضاءة الطوارئ', 'مصابيح مقاومة للانفجار'],
      icon: 'ri-lightbulb-line'
    },
    {
      category: 'البطاريات ومعدات الطاقة',
      items: ['بطاريات بحرية عميقة الدورة', 'شواحن ذكية', 'منظمات الجهد', 'محولات الطاقة'],
      icon: 'ri-battery-charge-line'
    },
    {
      category: 'أجهزة التحكم والمراقبة',
      items: ['لوحات التحكم الإلكترونية', 'أجهزة الإنذار', 'مفاتيح كهربائية', 'أجهزة قياس كهربائية'],
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://readdy.ai/api/search-image?query=Marine%20electrical%20equipment%20including%20cables%20switches%20panels%20batteries%20lighting%20systems%20organized%20in%20ship%20electrical%20room%20professional%20photography%20realistic%20components%20maritime%20industrial%20environment&width=1920&height=600&seq=electrical-equipment-hero&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">المعدات الكهربائية</h1>
          <p className="text-xl md:text-2xl">معدات وقطع غيار كهربائية للأنظمة البحرية</p>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">معدات كهربائية بحرية متطورة</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  نوفر مجموعة شاملة من المعدات الكهربائية المتخصصة للاستخدام البحري، بما في ذلك الكابلات المقاومة للماء وأنظمة الإضاءة والبطاريات وأجهزة التحكم. جميع معداتنا مطابقة للمعايير البحرية الدولية.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  نحرص على توفير معدات كهربائية موثوقة وآمنة تضمن استمرارية التشغيل وسلامة الطاقم. فريقنا الفني يقدم خدمات التركيب والصيانة والدعم الفني المتخصص.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center whitespace-nowrap">
                    طلب عرض فني
                  </Link>
                  <a href="https://wa.me/201024886944" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-center whitespace-nowrap">
                    استشارة كهربائية
                  </a>
                </div>
              </div>
              <div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20marine%20electrical%20control%20room%20with%20modern%20control%20panels%20electrical%20cabinets%20monitoring%20systems%20ship%20bridge%20electronics%20maritime%20industrial%20photography&width=600&height=400&seq=electrical-equipment-main&orientation=landscape"
                  alt="المعدات الكهربائية البحرية"
                  className="rounded-lg shadow-lg w-full h-80 object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">فئات المعدات الكهربائية</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نوفر جميع أنواع المعدات الكهربائية اللازمة للأنظمة البحرية
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {equipment.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center ml-4 rtl:mr-4 rtl:ml-0">
                    <i className={`${item.icon} text-2xl text-blue-600`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{item.category}</h3>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {item.items.map((subitem, subIndex) => (
                    <div key={subIndex} className="flex items-center text-gray-700">
                      <i className="ri-check-line text-green-500 ml-2 rtl:mr-2 rtl:ml-0"></i>
                      <span>{subitem}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Standards */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">المعايير التقنية والسلامة</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            نلتزم بأعلى معايير السلامة والجودة في المعدات الكهربائية البحرية
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">معايير IEC</h3>
              <p>مطابقة للمعايير الكهربائية الدولية</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-water-percent-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">مقاومة الماء</h3>
              <p>حماية عالية ضد الرطوبة والمياه</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-fire-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">مقاومة الحريق</h3>
              <p>مواد مقاومة للحريق والانفجار</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-tools-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">صيانة سهلة</h3>
              <p>تصميم يسهل الصيانة والإصلاح</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}