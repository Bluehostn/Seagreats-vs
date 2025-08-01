
'use client';

import { useState, useEffect, useRef } from 'react';

interface PreviewProps {
  path?: string;
  height?: number | string;
  refreshInterval?: number; // بالثواني
  showRefreshButton?: boolean;
  showDeviceButtons?: boolean;
}

/**
 * مكون معاينة الموقع داخل Visual Studio
 */
export default function VSCodePreview({
  path = '/',
  height = 600,
  refreshInterval = 0,
  showRefreshButton = true,
  showDeviceButtons = true
}: PreviewProps) {
  const [url, setUrl] = useState('');
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [viewportMode, setViewportMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const iframeRef = useRef<HTMLIFrameElement>(null);

  // تحديد URL الموقع
  useEffect(() => {
    // الحصول على عنوان الموقع من البيئة أو استخدام عنوان محلي افتراضي
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const fullUrl = `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
    setUrl(fullUrl);
  }, [path]);

  // إعداد التحديث التلقائي
  useEffect(() => {
    if (!refreshInterval || refreshInterval <= 0) return;

    const timer = setInterval(() => {
      refreshPreview();
    }, refreshInterval * 1000);

    return () => {
      clearInterval(timer);
    };
  }, [refreshInterval]);

  // تحديث المعاينة
  const refreshPreview = () => {
    if (iframeRef.current) {
      setIsLoading(true);
      iframeRef.current.src = url;
      setLastRefresh(new Date());
    }
  };

  // التعامل مع حدث تحميل الإطار
  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  // تحديد عرض المعاينة بناءً على الجهاز المحدد
  const getViewportWidth = () => {
    switch (viewportMode) {
      case 'mobile':
        return 375; // عرض هاتف محمول
      case 'tablet':
        return 768; // عرض جهاز لوحي
      default:
        return '100%'; // سطح المكتب - عرض كامل
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* شريط الأدوات */}
      <div className="bg-gray-100 px-4 py-2 border-b flex items-center justify-between">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-medium">معاينة الموقع</span>
          {lastRefresh && (
            <span className="text-xs text-gray-500">
              آخر تحديث: {lastRefresh.toLocaleTimeString()}
            </span>
          )}
        </div>

        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* أزرار معاينة الأجهزة المختلفة */}
          {showDeviceButtons && (
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <button
                onClick={() => setViewportMode('desktop')}
                className={`p-1 rounded ${viewportMode === 'desktop' ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                title="سطح المكتب"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>

              <button
                onClick={() => setViewportMode('tablet')}
                className={`p-1 rounded ${viewportMode === 'tablet' ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                title="جهاز لوحي"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </button>

              <button
                onClick={() => setViewportMode('mobile')}
                className={`p-1 rounded ${viewportMode === 'mobile' ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                title="هاتف محمول"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          )}

          {/* زر التحديث */}
          {showRefreshButton && (
            <button
              onClick={refreshPreview}
              className="p-1 rounded text-gray-500 hover:text-gray-700 hover:bg-gray-200"
              title="تحديث المعاينة"
            >
              <svg className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          )}

          {/* زر فتح في صفحة جديدة */}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded text-gray-500 hover:text-gray-700 hover:bg-gray-200"
            title="فتح في صفحة جديدة"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      {/* حاوية الإطار - تتكيف مع الأجهزة المختلفة */}
      <div className="flex justify-center bg-gray-50 p-4">
        <div style={{ 
          width: getViewportWidth(), 
          maxWidth: '100%',
          transition: 'width 0.3s ease'
        }}>
          {/* مؤشر التحميل */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
            </div>
          )}

          {/* إطار المعاينة */}
          <iframe
            ref={iframeRef}
            src={url}
            style={{ height: typeof height === 'number' ? `${height}px` : height }}
            className="border border-gray-300 rounded-md w-full"
            title="VSCode Site Preview"
            onLoad={handleIframeLoad}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
