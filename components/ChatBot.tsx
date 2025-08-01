
'use client';

import { useState, useEffect, useRef } from 'react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // إضافة رسالة الترحيب
      const welcomeMessage: Message = {
        id: 1,
        text: 'مرحباً! أنا المساعد الذكي لشركة Sea Greats. كيف يمكنني مساعدتك اليوم؟ يمكنني الإجابة على أسئلتك حول خدماتنا أو معلومات الشركة.',
        isBot: true,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // خدمات الشركة
    if (message.includes('خدمات') || message.includes('خدمة') || message.includes('ماذا تقدمون') || message.includes('ما تقدمون')) {
      return `نحن شركة Sea Greats المتخصصة في التوريدات البحرية منذ 2009. نقدم 9 خدمات رئيسية:

1. 🚢 تموين السفن الشامل
2. ⚙️ مستلزمات الماكينات البحرية  
3. 🧭 المعدات البحرية المتطورة
4. 🍽️ المواد الغذائية الطازجة
5. 🔧 الخدمات الفنية المتخصصة
6. 🧪 المواد الكيميائية
7. 🔨 أدوات العمل المهنية
8. ⚡ المعدات الكهربائية
9. 💼 الاستشارات البحرية

هل تريد معلومات تفصيلية عن أي خدمة معينة؟`;
    }

    // تموين السفن
    if (message.includes('تموين') || message.includes('السفن')) {
      return `خدمة تموين السفن الشاملة تشمل:
• مواد التنظيف والكيماويات
• أدوات السلامة ومعدات الإنقاذ  
• الحبال والسلاسل والمراسي
• قطع الغيار الأساسية
• مستلزمات الطاقم اليومية

نضمن التوصيل السريع والجودة العالية. للحجز اتصل بنا على +201024886944`;
    }

    // المعدات والماكينات
    if (message.includes('معدات') || message.includes('ماكينات') || message.includes('قطع غيار')) {
      return `نوفر جميع المعدات البحرية والماكينات:
• قطع غيار المحركات البحرية
• أنظمة التبريد والتكييف
• مضخات المياه والوقود
• أجهزة القياس والتحكم
• معدات الملاحة والاتصال
• المعدات الكهربائية والإلكترونية

جميع منتجاتنا معتمدة دولياً وبأسعار تنافسية.`;
    }

    // المواد الغذائية
    if (message.includes('طعام') || message.includes('غذائية') || message.includes('مواد غذائية')) {
      return `نقدم أفضل المواد الغذائية للسفن:
• لحوم طازجة ومجمدة عالية الجودة
• خضروات وفواكه طازجة
• مواد محفوظة ومعلبة
• مشروبات متنوعة
• منتجات الألبان
• المواد الأساسية والتوابل

نضمن الجودة والطزاجة مع التوصيل في الوقت المحدد.`;
    }

    // معلومات الشركة
    if (message.includes('شركة') || message.includes('تأسيس') || message.includes('تاريخ') || message.includes('عن')) {
      return `شركة Sea Greats:
🏢 تأسست عام 2009 (أكثر من 15 سنة خبرة)
📍 المقر الرئيسي: السويس، مصر
👨‍💼 المؤسس: Mr. Ahmed Saleh
📞 هاتف: +201024886944
📧 إيميل: info@seagreats.com
🌐 الموقع: www.seagreats.com

نخدم أكثر من 500 عميل راضٍ ونفذنا أكثر من 1000 عملية تموين بنجاح!`;
    }

    // معلومات المؤسس
    if (message.includes('مؤسس') || message.includes('أحمد') || message.includes('صالح') || message.includes('مالك')) {
      return `المؤسس والرئيس التنفيذي: Mr. Ahmed Saleh

🎓 خبرة تزيد عن 20 عاماً في الصناعات البحرية
🚢 بدأ في قطاع النقل البحري وطور خبرة عميقة
📈 قاد الشركة لتصبح من أكثر الشركات موثوقية في المنطقة
📱 للتواصل المباشر: +201024886944 (واتساب متاح)

تحت قيادته، نمت الشركة بتركيز على الجودة والخدمة المتميزة.`;
    }

    // التواصل والأسعار
    if (message.includes('تواصل') || message.includes('هاتف') || message.includes('رقم') || message.includes('سعر') || message.includes('أسعار')) {
      return `للتواصل والاستفسار عن الأسعار:

📱 الهاتف/واتساب: +201024886944
📧 البريد الإلكتروني: info@seagreats.com
📍 العنوان: مصر، السويس، الملاحة

⏰ أوقات العمل:
السبت - الخميس: 8:00 ص - 8:00 م
الجمعة: 12:00 م - 6:00 م
🚨 خدمة الطوارئ متاحة 24/7

سنسعد بتقديم عرض أسعار مخصص لاحتياجاتكم!`;
    }

    // شركة التصميم
    if (message.includes('تصميم') || message.includes('موقع') || message.includes('bluehostn') || message.includes('بلوهوست')) {
      return `تم تصميم وتطوير الموقع بواسطة:

🏢 شركة Bluehostn المتخصصة في تطوير المواقع
👨‍💻 المطور: محمد عاطي
📱 التواصل: +201010624048 / +201148336637

Bluehostn شركة رائدة في:
• تصميم المواقع الإلكترونية
• التطوير بأحدث التقنيات
• الاستضافة والدعم الفني
• حلول التجارة الإلكترونية`;
    }

    // الموقع الجغرافي
    if (message.includes('مكان') || message.includes('موقع') || message.includes('عنوان') || message.includes('سويس')) {
      return `موقعنا الجغرافي المتميز:

📍 العنوان: مصر، السويس، منطقة الملاحة
🌊 موقع استراتيجي على قناة السويس
🚢 قرب من أهم الممرات المائية العالمية
⚓ سهولة الوصول لجميع أنواع السفن

الموقع يتيح لنا:
• خدمة سريعة للسفن العابرة
• توفير جميع المستلزمات
• التواجد في قلب النشاط البحري`;
    }

    // خدمات الطوارئ
    if (message.includes('طوارئ') || message.includes('عاجل') || message.includes('سريع') || message.includes('24')) {
      return `خدمة الطوارئ 24/7 🚨

نحن متاحون على مدار الساعة لتلبية احتياجاتكم العاجلة:
• تموين عاجل للسفن
• قطع غيار طارئة  
• مواد غذائية عاجلة
• خدمات فنية فورية

📞 للطوارئ: +201024886944
⚡ استجابة فورية
🚚 توصيل سريع
✅ جودة مضمونة حتى في الطوارئ`;
    }

    // الجودة والضمان
    if (message.includes('جودة') || message.includes('ضمان') || message.includes('معايير')) {
      return `معايير الجودة لدينا:

🏆 جودة مضمونة 100%
✅ منتجات معتمدة دولياً
🔍 فحص دقيق لجميع المستلزمات
📋 شهادات جودة معتمدة
🤝 ضمان على جميع المنتجات

نلتزم بـ:
• أعلى معايير السلامة البحرية
• مطابقة المواصفات الدولية
• فحص شامل قبل التسليم
• متابعة ما بعد البيع`;
    }

    // رسالة افتراضية
    return `شكراً لتواصلكم معنا! 

للحصول على إجابة مفصلة أو لطلبات خاصة، يرجى:
📞 الاتصال بنا على: +201024886944
💬 مراسلتنا عبر واتساب
📧 إرسال إيميل: info@seagreats.com

يمكنكم أيضاً السؤال عن:
• خدماتنا المتنوعة
• معلومات الشركة  
• أسعار المنتجات
• مواعيد التسليم

سنسعد بخدمتكم! 🚢⚓`;
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // محاكاة وقت الكتابة
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    'ما هي خدماتكم؟',
    'معلومات عن الشركة',
    'أرقام التواصل',
    'خدمة الطوارئ'
  ];

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
    setTimeout(() => handleSendMessage(), 100);
  };

  return (
    <div className="fixed bottom-4 left-4 rtl:right-4 rtl:left-auto z-50">
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center relative"
      >
        <i className={`ri-${isOpen ? 'close' : 'robot'}-line text-xl`}></i>
        {!isOpen && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-bold">!</span>
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 left-0 rtl:right-0 rtl:left-auto w-80 sm:w-96 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <i className="ri-robot-line"></i>
              </div>
              <div>
                <div className="font-medium">مساعد Sea Greats الذكي</div>
                <div className="text-xs opacity-80">متصل - يرد خلال ثوانِ</div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.isBot
                      ? 'bg-blue-50 text-gray-800'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString('ar', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-blue-50 px-4 py-2 rounded-lg">
                  <div className="flex space-x-1 rtl:space-x-reverse">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="px-4 py-2 border-t bg-gray-50">
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full hover:bg-blue-200 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t bg-white">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="اكتب رسالتك..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <i className="ri-send-plane-line text-sm"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
