import Image from 'next/image';
import Link from 'next/link';

const Hero = ({ locale, dict }: { locale: string; dict: any }) => {
  return (
    <section className="relative bg-gradient-to-r from-primary-700 to-primary-900 text-white py-20 md:py-32">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {dict.hero.title}
            </h1>
            <p className="text-xl mb-6 text-primary-100">
              {dict.hero.subtitle}
            </p>
            <p className="mb-8 text-primary-200 max-w-2xl">
              {dict.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/contact" 
                className="bg-white text-primary-700 px-6 py-3 rounded-md font-medium hover:bg-primary-100 transition-colors text-center"
              >
                {dict.hero.contactUs}
              </Link>
              <a 
                href="https://wa.me/201024886944" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-md font-medium hover:bg-green-600 transition-colors text-center flex items-center justify-center"
              >
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                {dict.hero.whatsapp}
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <Image 
                src="/Images/WhatsApp Image 2025-07-31 at 1.04.17 AM (1).jpeg" 
                alt="Ship Supply" 
                width={600} 
                height={400}
                className="rounded-lg shadow-xl object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white text-primary-700 p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="bg-primary-100 p-2 rounded-full mr-3">
                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">{locale === 'en' ? '10+ Years' : 'أكثر من 10 سنوات'}</p>
                    <p className="text-sm text-primary-600">{locale === 'en' ? 'Experience' : 'خبرة'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
