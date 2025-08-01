'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import WhatsAppButton from '../../../components/WhatsAppButton';
import Link from 'next/link';

export default function ShipSupplyPage() {
  const supplies = [
    {
      category: 'المواد الكيميائية',
      items: ['مواد التنظيف البحرية', 'مزيلات الصدأ', 'مواد العزل', 'المنظفات الصناعية'],
      icon: 'ri-flask-line'
    },
    {
      category: 'أدوات السلامة',
      items: ['سترات النجاة', 'طفايات الحريق', 'أجهزة الإنذار', 'معدات الحماية الشخصية'],
      icon: 'ri-shield-check-line'
    },
    {
      category: 'مستلزمات التنظيف',
      items: ['ممسحات الأرضية', 'أدوات التلميع', 'مواد التعقيم', 'منظفات متخصصة'],
      icon: 'ri-brush-3-line'
    },
    {
      category: 'قطع الغيار الأساسية',
      items: ['مرشحات الهواء', 'خراطيم المياه', 'صمامات التحكم', 'أسلاك كهربائية'],
      icon: 'ri-settings-4-line'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(106, 13, 173, 0.8), rgba(106, 13, 173, 0.8)), url('https://readdy.ai/api/search-image?query=Ship%20supply%20services%20with%20crew%20loading%20various%20maritime%20supplies%20onto%20large%20commercial%20vessel%20professional%20maritime%20photography%20modern%20port%20environment&width=1920&height=600&seq=ship-supply-hero&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">تموين السفن</h1>
          <p className="text-xl md:text-2xl">حلول شاملة لتموين جميع أنواع السفن</p>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">خدمة تموين السفن الشاملة</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  نقدم خدمات تموين شاملة لجميع أنواع السفن التجارية والبحرية، حيث نوفر كل ما تحتاجه السفينة من مواد ومستلزمات أساسية لضمان سير العمليات بسلاسة وأمان.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  فريقنا المتخصص يعمل على مدار الساعة لتلبية احتياجات العملاء بأسرع وقت ممكن، مع ضمان جودة المنتجات المقدمة والالتزام بالمواعيد المحددة.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors text-center whitespace-nowrap">
                    طلب عرض أسعار
                  </Link>
                  <a href="https://wa.me/201024886944" className="border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors text-center whitespace-nowrap">
                    تواصل مباشر
                  </a>
                </div>
              </div>
              <div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20ship%20supply%20operation%20with%20organized%20maritime%20supplies%20and%20equipment%20being%20loaded%20onto%20commercial%20vessel%20detailed%20industrial%20photography&width=600&height=400&seq=ship-supply-main&orientation=landscape"
                  alt="خدمة تموين السفن"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">أقسام التموين</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نوفر مجموعة شاملة من المستلزمات مقسمة على فئات متخصصة
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

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">عملية التموين</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-phone-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">طلب الخدمة</h3>
              <p className="text-gray-600">تواصل معنا وحدد احتياجات سفينتك</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-clipboard-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">تحضير القائمة</h3>
              <p className="text-gray-600">إعداد قائمة شاملة بجميع المستلزمات</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-truck-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">التوصيل</h3>
              <p className="text-gray-600">توصيل المستلزمات في الموعد المحدد</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-check-double-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">التأكيد</h3>
              <p className="text-gray-600">تأكيد استلام جميع المستلزمات</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">مميزات خدمتنا</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">سرعة التسليم</h3>
              <p>تسليم سريع خلال ساعات من الطلب</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-award-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">جودة مضمونة</h3>
              <p>منتجات عالية الجودة من موردين معتمدين</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-customer-service-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">دعم مستمر</h3>
              <p>خدمة عملاء متاحة على مدار الساعة</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}