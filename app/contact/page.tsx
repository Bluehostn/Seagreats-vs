'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate message length
    if (formData.message.length > 500) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://oyievckqvughkqjppnma.supabase.co/rest/v1/contact_messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': 'your-supabase-anon-key',
          'Authorization': 'Bearer your-supabase-anon-key'
        },
        body: JSON.stringify({
          ...formData,
          created_at: new Date().toISOString(),
          status: 'new'
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(106, 13, 173, 0.8), rgba(106, 13, 173, 0.8)), url('https://readdy.ai/api/search-image?query=Professional%20maritime%20contact%20center%20with%20modern%20communication%20equipment%20and%20customer%20service%20representatives%20in%20shipping%20company%20office%20environment&width=1920&height=600&seq=contact-hero&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">اتصل بنا</h1>
          <p className="text-xl md:text-2xl">نحن هنا لمساعدتك على مدار الساعة</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">أرسل لنا رسالة</h2>
                
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">الاسم *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                        placeholder="أدخل اسمك الكامل"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">البريد الإلكتروني *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">رقم الهاتف *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                        placeholder="+20 100 000 0000"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">اسم الشركة</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                        placeholder="اسم شركتك (اختياري)"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">الخدمة المطلوبة</label>
                    <div className="relative">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors appearance-none"
                      >
                        <option value="">اختر الخدمة</option>
                        <option value="ship-supply">تموين السفن</option>
                        <option value="machinery-supplies">مستلزمات الماكينات</option>
                        <option value="marine-equipment">المعدات البحرية</option>
                        <option value="food-supplies">المواد الغذائية</option>
                        <option value="technical-services">الخدمات الفنية</option>
                        <option value="maintenance">خدمات الصيانة</option>
                        <option value="consulting">الاستشارات البحرية</option>
                      </select>
                      <i className="ri-arrow-down-s-line absolute left-3 rtl:right-3 rtl:left-auto top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">الرسالة *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      maxLength={500}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
                      placeholder="اكتب رسالتك هنا... (الحد الأقصى 500 حرف)"
                    ></textarea>
                    <div className="text-left rtl:text-right text-sm text-gray-500 mt-1">
                      {formData.message.length}/500 حرف
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting || formData.message.length > 500}
                    className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                  </button>
                  
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                      تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                      حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة.
                    </div>
                  )}
                </form>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">معلومات الاتصال</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-phone-line text-xl text-primary"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">الهاتف / واتساب</h3>
                      <a href="tel:+201024886944" className="text-gray-700 hover:text-primary transition-colors">
                        +201024886944
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-mail-line text-xl text-primary"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">البريد الإلكتروني</h3>
                      <a href="mailto:info@seagreats.com" className="text-gray-700 hover:text-primary transition-colors">
                        info@seagreats.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-global-line text-xl text-primary"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">الموقع الإلكتروني</h3>
                      <a href="https://www.seagreats.com" className="text-gray-700 hover:text-primary transition-colors">
                        www.seagreats.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-map-pin-line text-xl text-primary"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">العنوان</h3>
                      <p className="text-gray-700">مصر، السويس، الملاحة</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">تواصل سريع</h3>
                <div className="space-y-3">
                  <a 
                    href="https://wa.me/201024886944" 
                    className="flex items-center space-x-3 rtl:space-x-reverse bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition-colors whitespace-nowrap"
                  >
                    <i className="ri-whatsapp-line text-xl"></i>
                    <span>تواصل عبر واتساب</span>
                  </a>
                  <a 
                    href="tel:+201024886944" 
                    className="flex items-center space-x-3 rtl:space-x-reverse bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition-colors whitespace-nowrap"
                  >
                    <i className="ri-phone-line text-xl"></i>
                    <span>اتصال مباشر</span>
                  </a>
                </div>
              </div>
              
              {/* Working Hours */}
              <div className="bg-primary/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">ساعات العمل</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>السبت - الخميس:</span>
                    <span>8:00 ص - 8:00 م</span>
                  </div>
                  <div className="flex justify-between">
                    <span>الجمعة:</span>
                    <span>12:00 م - 6:00 م</span>
                  </div>
                  <div className="text-sm text-primary font-semibold mt-3">
                    خدمة الطوارئ متاحة 24/7
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">موقعنا</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.2891572159545!2d32.52663!3d29.964308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU3JzUxLjUiTiAzMsKwMzEnMzUuOSJF!5e0!3m2!1sen!2seg!4v1640000000000!5m2!1sen!2seg"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع شركة Sea Greats"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}