
'use client';

import { useState, useEffect } from 'react';
import PageTemplate, { ContentSection, FeatureGrid } from '../../components/PageTemplate';
import Link from 'next/link';

export default function AboutPage() {
  const [language, setLanguage] = useState('ar');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem('language') || 'ar';
    setLanguage(savedLang);
  }, []);

  const values = [
    {
      icon: 'ri-award-line',
      title: 'الجودة',
      titleEn: 'Quality',
      description: 'نلتزم بتقديم منتجات وخدمات عالية الجودة تفوق توقعات عملائنا',
      descriptionEn: 'We are committed to providing high-quality products and services that exceed our customers\' expectations'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'الموثوقية',
      titleEn: 'Reliability',
      description: 'شريك موثوق يمكن الاعتماد عليه في جميع الأوقات والظروف',
      descriptionEn: 'A trusted partner you can rely on at all times and circumstances'
    },
    {
      icon: 'ri-customer-service-line',
      title: 'خدمة العملاء',
      titleEn: 'Customer Service',
      description: 'نضع العميل في المقدمة ونسعى لتحقيق رضاه الكامل',
      descriptionEn: 'We put the customer first and strive to achieve their complete satisfaction'
    },
    {
      icon: 'ri-global-line',
      title: 'الابتكار',
      titleEn: 'Innovation',
      description: 'نستخدم أحدث التقنيات والحلول المبتكرة في خدماتنا',
      descriptionEn: 'We use the latest technologies and innovative solutions in our services'
    }
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-primary-600 text-lg">جاري تحميل الصفحة...</p>
        </div>
      </div>
    );
  }

  const team = [
    {
      name: 'Mr. Ahmed Saleh',
      position: 'صاحب العمل - مؤسس الشركة',
      image: 'https://static.readdy.ai/image/dfa00478676086a8624b0f515714071b/439f4bc52fac1c85be367fb339abb060.jfif',
      contact: '+201024886944'
    },
    {
      name: 'Bluehostn',
      position: 'شركة تطوير المواقع',
      image: 'https://static.readdy.ai/image/dfa00478676086a8624b0f515714071b/ffb54d41b26f1fc99bb170db671b8825.jfif',
      contact: '+201010624048 / +201148336637'
    }
  ];

  return (
    <PageTemplate
      title="نبذة عنا"
      titleEn="About Us"
      description="تعرف على قصة نجاح Sea Greats في عالم التوريدات البحرية"
      descriptionEn="Learn about Sea Greats' success story in the world of marine supplies"
      language={language}
    >

      {/* Company Story */}
      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {language === 'ar' ? 'قصة نجاحنا' : 'Our Success Story'}
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </div>

            <div className="space-y-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">البداية والرؤية</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    تأسست شركة Sea Greats عام 2009 برؤية واضحة: أن نكون الشريك الأول والأكثر موثوقية في مجال التوريدات البحرية في المنطقة العربية. بدأنا رحلتنا من مدينة السويس، القلب النابض للملاحة في مصر، حيث تجتمع التجارة العالمية.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    منذ اليوم الأول، التزمنا بتقديم خدمات متميزة تلبي الاحتياجات المتنوعة لعملائنا من شركات الملاحة والنقل البحري. اعتمدنا على الخبرة والكفاءة والابتكار لبناء سمعة قوية في السوق.
                  </p>
                </div>
                <div>
                  <img 
                    src="https://readdy.ai/api/search-image?query=Historic%20maritime%20scene%20Suez%20Canal%20with%20ships%20modern%20container%20vessels%20professional%20photography%20showing%20maritime%20industry%20evolution%20clean%20composition&width=600&height=400&seq=story-1&orientation=landscape"
                    alt="بداية الشركة"
                    className="rounded-lg shadow-lg w-full h-80 object-cover object-top"
                  />
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-2 space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">النمو والتطور</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    على مدار أكثر من 15 عاماً، نمت الشركة بشكل مستمر وتوسعت خدماتنا لتشمل جميع جوانب التوريدات البحرية. طورنا شبكة قوية من الموردين المحليين والدوليين، مما مكننا من تقديم منتجات عالية الجودة بأسعار تنافسية.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    استثمرنا في التكنولوجيا الحديثة وأنظمة إدارة المخزون المتطورة، مما ساعدنا على تحسين كفاءة العمليات وتقليل أوقات التسليم. كما وسعنا فريق العمل ليضم خبراء متخصصين في مختلف مجالات الصناعة البحرية.
                  </p>
                </div>
                <div className="lg:order-1">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Modern%20maritime%20warehouse%20facility%20with%20organized%20inventory%20and%20shipping%20equipment%20professional%20industrial%20photography%20clean%20organized%20environment&width=600&height=400&seq=story-2&orientation=landscape"
                    alt="نمو الشركة"
                    className="rounded-lg shadow-lg w-full h-80 object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Vision & Mission */}
      <ContentSection background="gray">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="text-center lg:text-right">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto lg:mx-0 lg:mr-auto mb-8">
                <i className="ri-eye-line text-3xl text-white"></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">رؤيتنا</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                أن نكون الشركة الرائدة والأكثر موثوقية في مجال التوريدات البحرية في المنطقة العربية وأفريقيا، مع التوسع تدريجياً للأسواق العالمية. نسعى لأن نكون الخيار الأول للشركات الباحثة عن جودة عالية وخدمة متميزة.
              </p>
            </div>
            <div className="text-center lg:text-right">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto lg:mx-0 lg:mr-auto mb-8">
                <i className="ri-flag-line text-3xl text-white"></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">رسالتنا</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                نلتزم بتقديم حلول شاملة ومتكاملة لتموين السفن والتوريدات البحرية، مع ضمان أعلى معايير الجودة والسلامة. نسعى لبناء شراكات طويلة المدى مع عملائنا من خلال الابتكار والتميز في الخدمة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">قيمنا الأساسية</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              القيم التي تحكم عملنا وتوجه قراراتنا اليومية
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group fade-in">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <i className={`${value.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">فريق العمل</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              فريق من الخبراء المتخصصين وشركاء النجاح الذين يساهمون في تميز الشركة
            </p>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-48 h-64 md:h-auto">
                  <img 
                    src="https://static.readdy.ai/image/dfa00478676086a8624b0f515714071b/439f4bc52fac1c85be367fb339abb060.jfif"
                    alt="Mr. Ahmed Saleh"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="flex-1 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Mr. Ahmed Saleh</h3>
                  <p className="text-blue-600 font-semibold text-lg mb-4">صاحب العمل - مؤسس الشركة</p>
                  <div className="flex items-center space-x-3 rtl:space-x-reverse text-gray-600">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <i className="ri-whatsapp-line text-green-600"></i>
                    </div>
                    <a 
                      href="https://wa.me/201024886944"
                      className="hover:text-blue-600 transition-colors font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +201024886944
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-48 h-64 md:h-auto">
                  <img 
                    src="https://static.readdy.ai/image/dfa00478676086a8624b0f515714071b/ffb54d41b26f1fc99bb170db671b8825.jfif"
                    alt="Bluehostn Company"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="flex-1 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Bluehostn</h3>
                  <p className="text-blue-600 font-semibold text-lg mb-4">شركة تطوير المواقع</p>
                  <div className="flex items-center space-x-3 rtl:space-x-reverse text-gray-600">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <i className="ri-whatsapp-line text-green-600"></i>
                    </div>
                    <a 
                      href="https://wa.me/201010624048"
                      className="hover:text-blue-600 transition-colors font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +201010624048 / +201148336637
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">إنجازاتنا</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-4">15+</div>
              <p className="text-xl">سنة من الخبرة</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-4">500+</div>
              <p className="text-xl">عميل راضٍ</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-4">1000+</div>
              <p className="text-xl">عملية تموين مكتملة</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-4">24/7</div>
              <p className="text-xl">خدمة العملاء</p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Company Values */}
      <ContentSection>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {language === 'ar' ? 'قيمنا' : 'Our Values'}
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>
        <FeatureGrid features={values} language={language} />
      </ContentSection>
    </PageTemplate>
  );
}
