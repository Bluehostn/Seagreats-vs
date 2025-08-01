'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

interface PageTemplateProps {
  title: string;
  titleEn: string;
  description?: string;
  descriptionEn?: string;
  breadcrumbs?: Array<{
    label: string;
    labelEn: string;
    href?: string;
  }>;
  children: ReactNode;
  language?: string;
}

export default function PageTemplate({
  title,
  titleEn,
  description,
  descriptionEn,
  breadcrumbs = [],
  children,
  language = 'ar'
}: PageTemplateProps) {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumbs */}
            {breadcrumbs.length > 0 && (
              <nav className="mb-8">
                <ol className="flex items-center justify-center space-x-2 rtl:space-x-reverse text-primary-100">
                  <li>
                    <Link href="/" className="hover:text-white transition-colors">
                      {language === 'ar' ? 'الرئيسية' : 'Home'}
                    </Link>
                  </li>
                  {breadcrumbs.map((crumb, index) => (
                    <li key={index} className="flex items-center space-x-2 rtl:space-x-reverse">
                      <i className="ri-arrow-right-s-line rtl:rotate-180"></i>
                      {crumb.href ? (
                        <Link href={crumb.href} className="hover:text-white transition-colors">
                          {language === 'ar' ? crumb.label : crumb.labelEn}
                        </Link>
                      ) : (
                        <span className="text-white">
                          {language === 'ar' ? crumb.label : crumb.labelEn}
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            {/* Page Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {language === 'ar' ? title : titleEn}
            </h1>

            {/* Page Description */}
            {(description || descriptionEn) && (
              <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
                {language === 'ar' ? description : descriptionEn}
              </p>
            )}

            {/* Decorative Line */}
            <div className="w-24 h-1 bg-accent-400 mx-auto mt-8"></div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
      </section>

      {/* Page Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </section>
    </div>
  );
}

// Hero Section Template for service pages
interface ServiceHeroProps {
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
  backgroundImage?: string;
  language?: string;
}

export function ServiceHero({
  title,
  titleEn,
  description,
  descriptionEn,
  icon,
  backgroundImage,
  language = 'ar'
}: ServiceHeroProps) {
  return (
    <section 
      className="relative py-32 bg-cover bg-center"
      style={{
        backgroundImage: backgroundImage 
          ? `linear-gradient(rgba(12, 74, 110, 0.8), rgba(14, 165, 233, 0.8)), url('${backgroundImage}')`
          : 'linear-gradient(135deg, #0c4a6e 0%, #075985 25%, #0369a1 50%, #0284c7 75%, #0ea5e9 100%)'
      }}
    >
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Service Icon */}
          <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8">
            <i className={`${icon} text-5xl text-white`}></i>
          </div>

          {/* Service Title */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            {language === 'ar' ? title : titleEn}
          </h1>

          {/* Service Description */}
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto text-blue-100">
            {language === 'ar' ? description : descriptionEn}
          </p>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <a 
              href="https://wa.me/201024886944" 
              className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-green-600 transition-all duration-300 whitespace-nowrap flex items-center space-x-2 rtl:space-x-reverse transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <i className="ri-whatsapp-line"></i>
              <span>{language === 'ar' ? 'اطلب الخدمة الآن' : 'Request Service Now'}</span>
            </a>
            
            <Link 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-primary-600 transition-all duration-300 whitespace-nowrap"
            >
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Content Section Template
interface ContentSectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'primary';
}

export function ContentSection({ 
  children, 
  className = '', 
  background = 'white' 
}: ContentSectionProps) {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary-50'
  };

  return (
    <section className={`py-20 ${backgroundClasses[background]} ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}

// Feature Grid Template
interface FeatureGridProps {
  features: Array<{
    title: string;
    titleEn: string;
    description: string;
    descriptionEn: string;
    icon: string;
  }>;
  language?: string;
}

export function FeatureGrid({ features, language = 'ar' }: FeatureGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
            <i className={`${feature.icon} text-2xl text-primary-600 group-hover:text-white`}></i>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            {language === 'ar' ? feature.title : feature.titleEn}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {language === 'ar' ? feature.description : feature.descriptionEn}
          </p>
        </div>
      ))}
    </div>
  );
}
