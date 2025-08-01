import Image from 'next/image';
import Link from 'next/link';

const Services = ({ locale, dict }: { locale: string; dict: any }) => {
  const services = [
    {
      id: 1,
      title: locale === 'en' ? 'Ship Supply' : 'تموين السفن',
      description: locale === 'en' 
        ? 'Comprehensive supply solutions for all types of vessels, including fresh provisions, bonded stores, and technical equipment.' 
        : 'حلول توريد شاملة لجميع أنواع السفن، بما في ذلك المؤن الطازجة والمواد المخزنية والمعدات التقنية.',
      image: '/Images/WhatsApp Image 2025-07-31 at 1.04.08 AM (1).jpeg',
      link: '/services/ship-supply'
    },
    {
      id: 2,
      title: locale === 'en' ? 'Machinery Supplies' : 'مستلزمات الماكينات',
      description: locale === 'en' 
        ? 'High-quality machinery parts and equipment for all types of marine vessels, ensuring optimal performance and reliability.' 
        : 'قطع غيار ومعدات عالية الجودة لجميع أنواع السفن البحرية، لضمان الأداء الأمثل والموثوقية.',
      image: '/Images/WhatsApp Image 2025-07-31 at 1.04.09 AM (1).jpeg',
      link: '/services/machinery-supplies'
    },
    {
      id: 3,
      title: locale === 'en' ? 'Marine Equipment' : 'المعدات البحرية',
      description: locale === 'en' 
        ? 'A wide range of marine equipment and safety gear to ensure the safety and efficiency of your vessel operations.' 
        : 'مجموعة واسعة من المعدات البحرية ومعدات السلامة لضمان سلامة وكفاءة عمليات سفينتك.',
      image: '/Images/WhatsApp Image 2025-07-31 at 1.04.10 AM (1).jpeg',
      link: '/services/marine-equipment'
    },
    {
      id: 4,
      title: locale === 'en' ? 'Food Supplies' : 'المواد الغذائية',
      description: locale === 'en' 
        ? 'Fresh and high-quality food provisions for vessels, including fruits, vegetables, dairy, and other essential food items.' 
        : 'مؤن غذائية طازجة وعالية الجودة للسفن، بما في ذلك الفواكه والخضروات ومنتجات الألبان وغيرها من المواد الغذائية الأساسية.',
      image: '/Images/WhatsApp Image 2025-07-31 at 1.04.11 AM (1).jpeg',
      link: '/services/food-supplies'
    },
    {
      id: 5,
      title: locale === 'en' ? 'Logistics Services' : 'الخدمات اللوجستية',
      description: locale === 'en' 
        ? 'Efficient logistics solutions for the maritime industry, including transportation, warehousing, and customs clearance.' 
        : 'حلول لوجستية فعالة للصناعة البحرية، بما في ذلك النقل والتخزين والتخليص الجمركي.',
      image: '/Images/WhatsApp Image 2025-07-31 at 1.04.12 AM (1).jpeg',
      link: '/services/logistics'
    },
    {
      id: 6,
      title: locale === 'en' ? 'Maintenance Services' : 'خدمات الصيانة',
      description: locale === 'en' 
        ? 'Professional maintenance and repair services for marine vessels and equipment, ensuring optimal performance and safety.' 
        : 'خدمات صيانة وإصلاح احترافية للسفن والمعدات البحرية، لضمان الأداء الأمثل والسلامة.',
      image: '/Images/WhatsApp Image 2025-07-31 at 1.04.13 AM (1).jpeg',
      link: '/services/maintenance'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            {dict.services.title}
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            {dict.services.subtitle}
          </p>
          <p className="text-secondary-500 mt-4 max-w-2xl mx-auto">
            {dict.services.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  width={400} 
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-secondary-600 mb-4">
                  {service.description}
                </p>
                <Link 
                  href={service.link}
                  className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
                >
                  {locale === 'en' ? 'Learn More' : 'اقرأ المزيد'}
                  <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/services"
            className="bg-primary-600 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors inline-flex items-center"
          >
            {locale === 'en' ? 'View All Services' : 'عرض جميع الخدمات'}
            <svg className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
