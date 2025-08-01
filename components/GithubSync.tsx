
'use client';

import { useState, useEffect } from 'react';

interface GithubSyncProps {
  repo: string;
  branch?: string;
  autoSync?: boolean;
  syncInterval?: number;
}

/**
 * مكون GithubSync للتزامن التلقائي مع مستودع جيت هب
 * @param {string} repo - رابط المستودع (مثال: Bluehostn/Seagreats)
 * @param {string} branch - الفرع المراد التزامن معه (افتراضي: main)
 * @param {boolean} autoSync - تفعيل التزامن التلقائي
 * @param {number} syncInterval - الفاصل الزمني للتزامن بالدقائق
 */
export default function GithubSync({ 
  repo,
  branch = 'main',
  autoSync = false,
  syncInterval = 60
}: GithubSyncProps) {
  const [lastSync, setLastSync] = useState<Date | null>(null);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncStatus, setSyncStatus] = useState<'idle' | 'syncing' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  // تنفيذ عملية التزامن
  const performSync = async () => {
    if (isSyncing) return;

    setIsSyncing(true);
    setSyncStatus('syncing');
    setErrorMessage('');

    try {
      // هنا يمكننا إضافة الشيفرة التي تقوم بالتزامن عبر API
      const response = await fetch(`/api/github-sync`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ repo, branch }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'فشل في التزامن مع GitHub');
      }

      setLastSync(new Date());
      setSyncStatus('success');

      // يمكن تخزين تاريخ آخر تزامن في localStorage
      localStorage.setItem('lastGitHubSync', new Date().toISOString());

    } catch (error) {
      console.error('خطأ في التزامن مع GitHub:', error);
      setSyncStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'حدث خطأ غير معروف');
    } finally {
      setIsSyncing(false);
    }
  };

  // التزامن التلقائي عند التفعيل
  useEffect(() => {
    // استعادة تاريخ آخر تزامن من localStorage
    const savedLastSync = localStorage.getItem('lastGitHubSync');
    if (savedLastSync) {
      setLastSync(new Date(savedLastSync));
    }

    if (!autoSync) return;

    const syncTimer = setInterval(() => {
      performSync();
    }, syncInterval * 60 * 1000);

    return () => {
      clearInterval(syncTimer);
    };
  }, [autoSync, syncInterval]);

  // تحديد لون الحالة
  const getStatusColor = () => {
    switch (syncStatus) {
      case 'syncing': return 'text-blue-500';
      case 'success': return 'text-green-500';
      case 'error': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-medium mb-2">مزامنة GitHub</h3>

      <div className="flex items-center justify-between mb-4">
        <div>
          <div className={`font-medium ${getStatusColor()}`}>
            {syncStatus === 'idle' && 'جاهز للمزامنة'}
            {syncStatus === 'syncing' && 'جاري المزامنة...'}
            {syncStatus === 'success' && 'تمت المزامنة بنجاح'}
            {syncStatus === 'error' && 'فشل في المزامنة'}
          </div>

          {lastSync && (
            <div className="text-sm text-gray-600 mt-1">
              آخر مزامنة: {lastSync.toLocaleString()}
            </div>
          )}

          {errorMessage && (
            <div className="text-sm text-red-500 mt-1">
              {errorMessage}
            </div>
          )}
        </div>

        <button
          onClick={performSync}
          disabled={isSyncing}
          className={`px-4 py-2 rounded-md text-white ${
            isSyncing ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
          } transition-colors`}
        >
          {isSyncing ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              جاري المزامنة
            </span>
          ) : (
            'مزامنة الآن'
          )}
        </button>
      </div>

      <div className="text-sm text-gray-600">
        <div>المستودع: <span className="font-mono">{repo}</span></div>
        <div>الفرع: <span className="font-mono">{branch}</span></div>
        {autoSync && (
          <div className="mt-1">
            مزامنة تلقائية كل {syncInterval} دقيقة
          </div>
        )}
      </div>
    </div>
  );
}
