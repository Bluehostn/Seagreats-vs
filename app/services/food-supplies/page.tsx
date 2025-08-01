'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import WhatsAppButton from '../../../components/WhatsAppButton';
import Link from 'next/link';

export default function FoodSuppliesPage() {
  const supplies = [
    {
      category: 'اللحوم الطازجة',
      items: ['لحم البقر المبرد', 'لحم الضأن الطازج', 'الدجاج الطازج', 'الأسماك البحرية الطازجة'],
      icon: 'ri-restaurant-line'
    },
    {
      category: 'الخضار والفواكه',
      items: ['خضروات طازجة متنوعة', 'فواكه موسمية طازجة', 'خضروات مجمدة', 'فواكه مجففة'],
      icon: 'ri-leaf-line'
    },
    {
      category: 'المواد المحفوظة',
      items: ['معلبات اللحوم والأسماك', 'الخضروات المعلبة', 'البقوليات المحفوظة', 'الصلصات والتوابل'],
      icon: 'ri-archive-line'
    },
    {
      category: 'المشروبات',
      items: ['المياه المعدنية', 'العصائر الطبيعية', 'المشروبات الساخنة', 'المشروبات الباردة'],
      icon: 'ri-cup-line'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(106, 13, 173, 0.8), rgba(106, 13, 173, 0.8)), url('https://readdy.ai/api/search-image?query=Fresh%20food%20supplies%20for%20ships%20including%20variety%20of%20fruits%20vegetables%20meat%20and%20preserved%20foods%20professional%20food%20photography%20organized%20clean%20background%20maritime%20catering&width=1920&height=600&seq=food-supplies-hero&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">المواد الغذائية</h1>
          <p className="text-xl md:text-2xl">مواد غذائية طازجة وعالية الجودة لطاقم السفن</p>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">تموين غذائي متكامل للسفن</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  نوفر مواد غذائية طازجة وعالية الجودة لضمان تغذية صحية ومتوازنة لطاقم السفن خلال رحلاتهم البحرية. نحرص على اختيار أجود الأصناف من موردين معتمدين ومرخصين.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  فريقنا المتخصص في التموين الغذائي يعمل على تخطيط وجبات متوازنة تلبي الاحتياجات الغذائية للبحارة، مع مراعاة شروط التخزين والحفظ المناسبة للبيئة البحرية.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors text-center whitespace-nowrap">
                    طلب قائمة أسعار
                  </Link>
                  <a href="https://wa.me/201024886944" className="border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors text-center whitespace-nowrap">
                    تموين عاجل
                  </a>
                </div>
              </div>
              <div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20ship%20galley%20kitchen%20with%20fresh%20food%20supplies%20organized%20ingredients%20and%20cooking%20facilities%20maritime%20catering%20photography%20clean%20modern%20environment&width=600&height=400&seq=food-supplies-main&orientation=landscape"
                  alt="المواد الغذائية للسفن"
                  className="rounded-lg shadow-lg w-full h-80 object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Food Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">فئات المواد الغذائية</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نوفر جميع أنواع المواد الغذائية اللازمة للرحلات البحرية الطويلة والقصيرة
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

      {/* Quality Standards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">معايير الجودة والسلامة</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">سلامة غذائية</h3>
              <p className="text-gray-600">نطبق أعلى معايير السلامة الغذائية في جميع مراحل التموين</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-snowflake-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">سلسلة التبريد</h3>
              <p className="text-gray-600">نحافظ على سلسلة التبريد المتصلة للمواد القابلة للتلف</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-time-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">طزاجة مضمونة</h3>
              <p className="text-gray-600">نضمن وصول المواد الطازجة في نفس يوم الطلب</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-award-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">منتجات معتمدة</h3>
              <p className="text-gray-600">جميع منتجاتنا من موردين معتمدين ومرخصين</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meal Planning */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">خدمة تخطيط الوجبات</h2>
              <div className="w-24 h-1 bg-primary mb-6"></div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                نقدم خدمة متكاملة لتخطيط الوجبات الصحية والمتوازنة لطاقم السفن، مع مراعاة المدة الزمنية للرحلة وعدد أفراد الطاقم والتفضيلات الغذائية.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 ml-2 rtl:mr-2 rtl:ml-0"></i>
                  <span>تخطيط وجبات متوازنة غذائياً</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 ml-2 rtl:mr-2 rtl:ml-0"></i>
                  <span>مراعاة الحميات الغذائية الخاصة</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 ml-2 rtl:mr-2 rtl:ml-0"></i>
                  <span>حساب الكميات المطلوبة بدقة</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 ml-2 rtl:mr-2 rtl:ml-0"></i>
                  <span>إرشادات التخزين والحفظ</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20meal%20planning%20for%20ship%20crews%20with%20nutritional%20charts%20healthy%20food%20options%20and%20balanced%20meals%20organized%20maritime%20catering%20planning%20photography&width=600&height=400&seq=meal-planning&orientation=landscape"
                alt="تخطيط الوجبات"
                className="rounded-lg shadow-lg w-full h-80 object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">تحتاج تموين غذائي؟</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            تواصل معنا للحصول على أفضل خدمات التموين الغذائي للسفن
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="bg-white text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors whitespace-nowrap">
              طلب عرض أسعار
            </Link>
            <a href="https://wa.me/201024886944" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-primary transition-colors whitespace-nowrap flex items-center space-x-2 rtl:space-x-reverse">
              <i className="ri-whatsapp-line"></i>
              <span>تموين فوري</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}