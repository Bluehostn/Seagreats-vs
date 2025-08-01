import Image from 'next/image';

const WhyUs = ({ locale, dict }: { locale: string; dict: any }) => {
  const reasons = [
    {
      id: 1,
      title: locale === 'en' ? '10+ Years Experience' : 'أكثر من 10 سنوات خبرة',
      description: locale === 'en' 
        ? 'With over a decade of experience in the maritime industry, we have built a reputation for reliability and excellence.' 
        : 'مع أكثر من عقد من الخبرة في الصناعة البحرية، بنينا سمعة للموثوقية والتميز.',
      icon: (
        <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: locale === 'en' ? 'Quality Products' : 'منتجات عالية الجودة',
      description: locale === 'en' 
        ? 'We source only the highest quality products from reputable suppliers to ensure the satisfaction of our clients.' 
        : 'نوفر فقط منتجات عالية الجودة من موردين موثوقين لضمان رضا عملائنا.',
      icon: (
        <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: locale === 'en' ? '24/7 Availability' : 'متاحون على مدار الساعة',
      description: locale === 'en' 
        ? 'Our team is available around the clock to respond to your needs and provide timely solutions.' 
        : 'فريقنا متاح على مدار الساعة للاستجابة لاحتياجاتكم وتقديم حلول في الوقت المناسب.',
      icon: (
        <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 4,
      title: locale === 'en' ? 'Competitive Pricing' : 'أسعار تنافسية',
      description: locale === 'en' 
        ? 'We offer competitive pricing without compromising on quality, ensuring value for money for our clients.' 
        : 'نقدم أسعاراً تنافسية دون المساس بالجودة، مما يضمن قيمة مقابل المال لعملائنا.',
      icon: (
        <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 5,
      title: locale === 'en' ? 'Global Network' : 'شبكة عالمية',
      description: locale === 'en' 
        : 'We have established a strong network of suppliers and partners worldwide to meet your diverse needs.' 
        : 'أقمنا شبكة قوية من الموردين والشركاء حول العالم لتلبية احتياجاتكم المتنوعة.',
      icon: (
        <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 6,
      title: locale === 'en' ? 'Expert Team' : 'فريق من الخبراء',
      description: locale === 'en' 
        ? 'Our team consists of experienced professionals who are dedicated to providing exceptional service.' 
        : 'يتكون فريقنا من محترفين ذوي خبرة مكرسين لتقديم خدمة استثنائية.',
      icon: (
        <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-secondary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            {locale === 'en' ? 'Why Choose Sea Greats?' : 'لماذا تختار سي جريتس؟'}
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            {locale === 'en' 
              ? 'We are committed to providing exceptional maritime supply services with a focus on quality, reliability, and customer satisfaction.' 
              : 'نحن ملتزمون بتقديم خدمات توريد بحرية استثنائية مع التركيز على الجودة والموثوقية ورضا العملاء.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div key={reason.id} className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary-900">
                  {reason.title}
                </h3>
              </div>
              <p className="text-secondary-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                {locale === 'en' ? 'Payment Options' : 'خيارات الدفع'}
              </h3>
              <p className="text-secondary-600 mb-6">
                {locale === 'en' 
                  ? 'We offer flexible payment options to suit your business needs, including both cash and credit terms.' 
                  : 'نقدم خيارات دفع مرنة تناسب احتياجات عملك، بما في ذلك الدفع النقدي وشروط الائتمان.'}
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-secondary-700">
                    {locale === 'en' ? 'Cash Payments' : 'الدفع النقدي'}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-secondary-700">
                    {locale === 'en' ? 'Credit Terms' : 'شروط الائتمان'}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-secondary-700">
                    {locale === 'en' ? 'Flexible Invoicing' : 'فواتير مرنة'}
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image 
                src="/Images/WhatsApp Image 2025-07-31 at 1.04.14 AM (1).jpeg" 
                alt={locale === 'en' ? 'Payment Options' : 'خيارات الدفع'} 
                width={600} 
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
