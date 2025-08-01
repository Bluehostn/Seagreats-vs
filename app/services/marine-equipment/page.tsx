'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import WhatsAppButton from '../../../components/WhatsAppButton';
import Link from 'next/link';

export default function MarineEquipmentPage() {
  const equipment = [
    {
      category: 'أجهزة الملاحة',
      items: ['أجهزة GPS البحرية', 'البوصلات المغناطيسية', 'أجهزة الرادار', 'خرائط الملاحة الإلكترونية'],
      icon: 'ri-compass-3-line'
    },
    {
      category: 'معدات الاتصال',
      items: ['أجهزة الراديو البحرية', 'أنظمة الاتصال الساتلي', 'أجهزة الإنذار المبكر', 'معدات الاتصال في حالات الطوارئ'],
      icon: 'ri-radio-line'
    },
    {
      category: 'أدوات الأمان',
      items: ['سترات النجاة', 'قوارب النجاة', 'أجهزة إنذار الحريق', 'معدات الإطفاء البحرية'],
      icon: 'ri-shield-check-line'
    },
    {
      category: 'معدات الإنقاذ',
      items: ['حبال الإنقاذ', 'عوامات النجاة', 'أجهزة التنفس', 'معدات الإسعافات الأولية'],
      icon: 'ri-lifebuoy-line'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(106, 13, 173, 0.8), rgba(106, 13, 173, 0.8)), url('https://readdy.ai/api/search-image?query=Marine%20navigation%20equipment%20and%20safety%20gear%20with%20compass%20GPS%20radar%20systems%20life%20jackets%20and%20safety%20equipment%20professional%20maritime%20photography%20clean%20background&width=1920&height=600&seq=marine-equipment-hero&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">المعدات البحرية</h1>
          <p className="text-xl md:text-2xl">معدات ملاحية وأدوات بحرية متطورة وآمنة</p>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">المعدات البحرية المتطورة</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  نوفر أحدث المعدات البحرية والأدوات الملاحية المتطورة التي تضمن سلامة الملاحة وكفاءة العمليات البحرية. جميع معداتنا معتمدة دولياً ومطابقة لأعلى معايير الجودة والأمان.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  فريقنا المتخصص يساعدكم في اختيار المعدات المناسبة لاحتياجاتكم، مع توفير خدمات التركيب والصيانة والدعم الفني المستمر لضمان الأداء الأمثل.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors text-center whitespace-nowrap">
                    طلب استشارة
                  </Link>
                  <a href="https://wa.me/201024886944" className="border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors text-center whitespace-nowrap">
                    تواصل مباشر
                  </a>
                </div>
              </div>
              <div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20marine%20navigation%20bridge%20with%20modern%20maritime%20equipment%20GPS%20radar%20compass%20systems%20and%20safety%20gear%20detailed%20ship%20technology%20photography&width=600&height=400&seq=marine-equipment-main&orientation=landscape"
                  alt="المعدات البحرية"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">فئات المعدات</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نوفر جميع أنواع المعدات البحرية اللازمة للملاحة الآمنة
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {equipment.map((equip, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center ml-4 rtl:mr-4 rtl:ml-0">
                    <i className={`${equip.icon} text-2xl text-primary`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{equip.category}</h3>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {equip.items.map((item, itemIndex) => (
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

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">مميزات معداتنا</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-award-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">معتمدة دولياً</h3>
              <p className="text-gray-600">جميع معداتنا معتمدة من أفضل الهيئات الدولية</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-tools-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">تركيب وصيانة</h3>
              <p className="text-gray-600">نوفر خدمات التركيب والصيانة بواسطة فنيين مختصين</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-customer-service-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">دعم فني</h3>
              <p className="text-gray-600">دعم فني مستمر لضمان الأداء الأمثل للمعدات</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">ضمان شامل</h3>
              <p className="text-gray-600">نوفر ضمان شامل على جميع المعدات المتوفرة</p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Standards */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">معايير الأمان</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              نلتزم بأعلى معايير الأمان البحري الدولية في جميع المعدات التي نوفرها
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-checkbox-circle-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">ISO 9001</h3>
              <p>معتمدة بمعايير الجودة الدولية</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">SOLAS</h3>
              <p>مطابقة لاتفاقية السلامة البحرية الدولية</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-medal-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">CE Mark</h3>
              <p>معتمدة بالمعايير الأوروبية للأمان</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}