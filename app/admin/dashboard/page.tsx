
'use client';

import { useState } from 'react';
import VSCodePreview from '@/components/VSCodePreview';
import GithubSync from '@/components/GithubSync';

export default function AdminDashboard() {
  const [currentPath, setCurrentPath] = useState('/');
  const [refreshInterval, setRefreshInterval] = useState(0);
  const [autoSync, setAutoSync] = useState(false);

  // مسارات للمعاينة السريعة
  const quickPaths = [
    { label: 'الصفحة الرئيسية', path: '/' },
    { label: 'حول الشركة', path: '/about' },
    { label: 'الخدمات', path: '/services' },
    { label: 'اتصل بنا', path: '/contact' }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">لوحة التحكم</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* عرض وتشغيل الموقع */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">معاينة الموقع</h2>

            {/* التحكم في المعاينة */}
            <div className="mb-4 flex flex-wrap gap-3">
              <div className="flex-1">
                <label htmlFor="preview-path" className="block text-sm font-medium text-gray-700 mb-1">المسار</label>
                <div className="flex">
                  <input
                    type="text"
                    id="preview-path"
                    value={currentPath}
                    onChange={(e) => setCurrentPath(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="المسار (مثال: /services)"
                  />
                  <button 
                    onClick={() => setCurrentPath(currentPath)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
                  >
                    تحديث
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="refresh-interval" className="block text-sm font-medium text-gray-700 mb-1">تحديث تلقائي (ثانية)</label>
                <select
                  id="refresh-interval"
                  value={refreshInterval}
                  onChange={(e) => setRefreshInterval(Number(e.target.value))}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="0">غير مفعل</option>
                  <option value="5">5 ثواني</option>
                  <option value="10">10 ثواني</option>
                  <option value="30">30 ثانية</option>
                  <option value="60">دقيقة</option>
                </select>
              </div>
            </div>

            {/* أزرار الوصول السريع */}
            <div className="mb-4 flex flex-wrap gap-2">
              {quickPaths.map((item) => (
                <button
                  key={item.path}
                  onClick={() => setCurrentPath(item.path)}
                  className={`px-3 py-1 text-sm rounded-md transition-colors ${
                    currentPath === item.path
                      ? 'bg-blue-100 text-blue-700 border border-blue-300'
                      : 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* مكون المعاينة */}
          <VSCodePreview 
            path={currentPath}
            height={600}
            refreshInterval={refreshInterval}
            showRefreshButton={true}
            showDeviceButtons={true}
          />
        </div>

        {/* قسم التحكم والتزامن */}
        <div className="space-y-6">
          {/* مزامنة GitHub */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">مزامنة GitHub</h2>

            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={autoSync}
                  onChange={(e) => setAutoSync(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="mr-2 text-sm text-gray-700">تفعيل المزامنة التلقائية</span>
              </label>
            </div>

            <GithubSync
              repo="Bluehostn/Seagreats-vs"
              branch="main"
              autoSync={autoSync}
              syncInterval={60} // دقيقة
            />
          </div>

          {/* معلومات البيئة */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">معلومات البيئة</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">البيئة:</span>
                <span className="font-medium">{process.env.NODE_ENV || 'development'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Next.js:</span>
                <span className="font-medium">{process.env.NEXT_RUNTIME || 'client'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">عنوان الخادم:</span>
                <span className="font-medium">{typeof window !== 'undefined' ? window.location.origin : '-'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">وقت التحميل:</span>
                <span className="font-medium">{new Date().toLocaleTimeString()}</span>
              </div>
            </div>
          </div>

          {/* روابط مفيدة */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">روابط مفيدة</h2>
            <div className="space-y-2">
              <a 
                href="https://github.com/Bluehostn/Seagreats-vs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-2 hover:bg-gray-50 rounded-md text-blue-600 hover:text-blue-700"
              >
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                مستودع GitHub
              </a>
              <a 
                href="https://nextjs.org/docs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-2 hover:bg-gray-50 rounded-md text-blue-600 hover:text-blue-700"
              >
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 22H5a1 1 0 01-1-1v-6a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1zm10 0h-4a1 1 0 01-1-1v-9a1 1 0 011-1h4a1 1 0 011 1v9a1 1 0 01-1 1zm-10-12H5a1 1 0 01-1-1V3a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1zm10 0h-4a1 1 0 01-1-1V3a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1z" />
                </svg>
                توثيق Next.js
              </a>
              <a 
                href="https://tailwindcss.com/docs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-2 hover:bg-gray-50 rounded-md text-blue-600 hover:text-blue-700"
              >
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
                </svg>
                توثيق Tailwind CSS
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
