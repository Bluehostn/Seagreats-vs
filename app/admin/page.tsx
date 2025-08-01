
'use client';

import { useState, useEffect } from 'react';
import { ADMIN_CREDENTIALS } from '../../lib/supabase';
import Link from 'next/link';

interface Message {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  created_at: string;
  status: 'new' | 'read';
}

interface Visitor {
  id: number;
  name: string;
  email: string;
  status: 'active' | 'inactive';
  last_visit: string;
}

interface ContentItem {
  id: string;
  title: string;
  content: string;
  type: 'page' | 'service' | 'section';
  lastModified: string;
}

interface User {
  id: number;
  username: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer';
  permissions: string[];
  created_at: string;
  status: 'active' | 'inactive';
}

interface ChatBotMessage {
  id: number;
  user_name: string;
  message: string;
  bot_response: string;
  timestamp: string;
  status: 'answered' | 'forwarded';
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });
  const [activeTab, setActiveTab] = useState('dashboard');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      name: 'أحمد محمد',
      email: 'ahmed@example.com',
      phone: '+201234567890',
      company: 'شركة النقل البحري',
      service: 'تموين السفن',
      message: 'نحتاج خدمة تموين عاجلة لسفينة تجارية',
      created_at: '2024-01-15T10:30:00Z',
      status: 'new'
    },
    {
      id: 2,
      name: 'فاطمة علي',
      email: 'fatma@example.com',
      phone: '+201234567891',
      company: 'الشركة العربية للملاحة',
      service: 'مستلزمات الماكينات',
      message: 'نطلب عرض أسعار لقطع غيار المحركات البحرية',
      created_at: '2024-01-14T15:45:00Z',
      status: 'read'
    }
  ]);

  const [visitors, setVisitors] = useState<Visitor[]>([
    {
      id: 1,
      name: 'محمد أحمد',
      email: 'mohamed@example.com',
      status: 'active',
      last_visit: '2024-01-15T12:00:00Z'
    },
    {
      id: 2,
      name: 'سارة محمود',
      email: 'sara@example.com',
      status: 'inactive',
      last_visit: '2024-01-10T09:30:00Z'
    }
  ]);

  const [contentItems, setContentItems] = useState<ContentItem[]>([
    {
      id: 'home-hero',
      title: 'قسم البطل - الصفحة الرئيسية',
      content: 'شريكك الموثوق في التوريدات البحرية',
      type: 'section',
      lastModified: '2024-01-15T10:00:00Z'
    },
    {
      id: 'about-company',
      title: 'نبذة عن الشركة',
      content: 'شركة Sea Greats هي شركة متخصصة في تموين السفن والتوريدات البحرية...',
      type: 'page',
      lastModified: '2024-01-14T14:30:00Z'
    }
  ]);

  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      username: 'mohamedaty',
      email: 'mohamedaty007@gmail.com',
      role: 'admin',
      permissions: ['all'],
      created_at: '2024-01-01T00:00:00Z',
      status: 'active'
    },
    {
      id: 2,
      username: 'editor1',
      email: 'editor@seagreats.com',
      role: 'editor',
      permissions: ['content_edit', 'messages_view'],
      created_at: '2024-01-10T10:00:00Z',
      status: 'active'
    }
  ]);

  const [chatBotMessages, setChatBotMessages] = useState<ChatBotMessage[]>([
    {
      id: 1,
      user_name: 'زائر من المملكة العربية السعودية',
      message: 'ما هي خدماتكم في تموين السفن?',
      bot_response: 'نحن نقدم خدمات تموين شاملة للسفن تشمل المواد الغذائية، قطع الغيار، والمعدات البحرية. يمكنني ترتيب مكالمة مع فريقنا المختص.',
      timestamp: '2024-01-15T14:30:00Z',
      status: 'answered'
    }
  ]);

  const [editingContent, setEditingContent] = useState<ContentItem | null>(null);
  const [isAIEditing, setIsAIEditing] = useState(false);
  const [aiPrompt, setAiPrompt] = useState('');
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [chatBotSettings, setChatBotSettings] = useState({
    enabled: true,
    greeting: 'مرحباً! أنا المساعد الذكي لشركة Sea Greats. كيف يمكنني مساعدتك اليوم؟',
    fallbackMessage: 'سأقوم بتحويل استفسارك لأحد ممثلينا للرد عليك قريباً.',
    autoForward: true
  });
  const [siteSettings, setSiteSettings] = useState({
    domain: 'seagreats.com',
    siteName: 'Sea Greats',
    primaryColor: '#2563eb',
    secondaryColor: '#1e40af',
    logo: '/logo.png'
  });
  const [readyAiPrompt, setReadyAiPrompt] = useState('');
  const [isReadyAiProcessing, setIsReadyAiProcessing] = useState(false);
  const [visualEditMode, setVisualEditMode] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      loginData.username === ADMIN_CREDENTIALS.username &&
      loginData.password === ADMIN_CREDENTIALS.password
    ) {
      setIsAuthenticated(true);
      localStorage.setItem('admin_logged_in', 'true');
    } else {
      alert('بيانات دخول غير صحيحة');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin_logged_in');
  };

  const addUser = () => {
    const newUser: User = {
      id: users.length + 1,
      username: '',
      email: '',
      role: 'viewer',
      permissions: [],
      created_at: new Date().toISOString(),
      status: 'active'
    };
    setUsers([...users, newUser]);
    setEditingUser(newUser);
  };

  const saveUser = () => {
    if (editingUser) {
      setUsers(
        users.map((user) =>
          user.id === editingUser.id ? editingUser : user
        )
      );
      setEditingUser(null);
    }
  };

  const deleteUser = (id: number) => {
    if (confirm('هل أنت متأكد من حذف هذا المستخدم؟')) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  const handleReadyAiEdit = async () => {
    if (!readyAiPrompt.trim()) return;

    setIsReadyAiProcessing(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));

      alert(`تم تطبيق التعديل بنجاح: ${readyAiPrompt}\n\nسيتم تحديث الموقع خلال دقائق قليلة.`);
      setReadyAiPrompt('');
    } catch (error) {
      alert('حدث خطأ في المعالجة. حاول مرة أخرى.');
    } finally {
      setIsReadyAiProcessing(false);
    }
  };

  const saveChatBotSettings = () => {
    alert('تم حفظ إعدادات الشات بوت بنجاح!');
  };

  const saveSiteSettings = () => {
    alert('تم حفظ إعدادات الموقع بنجاح!');
  };

  const editContent = (content: ContentItem) => {
    setEditingContent(content);
  };

  const saveContent = () => {
    if (editingContent) {
      setContentItems(
        contentItems.map((item) =>
          item.id === editingContent.id ? editingContent : item
        )
      );
      setEditingContent(null);
      alert('تم حفظ المحتوى بنجاح!');
    }
  };

  const addNewContent = () => {
    const newContent: ContentItem = {
      id: `content-${Date.now()}`,
      title: 'محتوى جديد',
      content: 'اكتب المحتوى هنا...',
      type: 'section',
      lastModified: new Date().toISOString()
    };
    setContentItems([...contentItems, newContent]);
    setEditingContent(newContent);
  };

  const deleteContent = (id: string) => {
    if (confirm('هل أنت متأكد من حذف هذا المحتوى؟')) {
      setContentItems(contentItems.filter((item) => item.id !== id));
    }
  };

  const enableVisualEdit = () => {
    setVisualEditMode(true);
    window.open('/', '_blank');
    alert('تم تفعيل وضع التعديل المرئي. يمكنك الآن تعديل الموقع بسحب وإفلات العناصر في النافذة الجديدة.');
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('admin_logged_in');
    if (isLoggedIn) {
      setIsAuthenticated(true);
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center">
            <div className="mx-auto h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <i className="ri-admin-line text-2xl text-white"></i>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">لوحة التحكم المتقدمة</h2>
            <p className="text-sm sm:text-base text-gray-600">Sea Greats Advanced Control Panel</p>
          </div>
          <form onSubmit={handleLogin} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  اسم المستخدم
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={loginData.username}
                    onChange={(e) =>
                      setLoginData({ ...loginData, username: e.target.value })
                    }
                    className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm sm:text-base transition-all"
                    placeholder=""
                    required
                  />
                  <i className="ri-user-line absolute right-3 top-3.5 text-gray-400"></i>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  كلمة المرور
                </label>
                <div className="relative">
                  <input
                    type="password"
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                    className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm sm:text-base transition-all"
                    placeholder=""
                    required
                  />
                  <i className="ri-lock-line absolute right-3 top-3.5 text-gray-400"></i>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all whitespace-nowrap text-sm sm:text-base font-medium shadow-lg"
            >
              تسجيل الدخول
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <i className="ri-admin-line text-xl text-white"></i>
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Sea Greats Control Center</h1>
                <p className="text-sm sm:text-base text-gray-600">مرحباً، {ADMIN_CREDENTIALS.username} - النظام المتقدم للإدارة الشاملة</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                <i className="ri-external-link-line text-xl"></i>
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors whitespace-nowrap text-sm sm:text-base"
              >
                <i className="ri-logout-box-line"></i>
                <span>تسجيل خروج</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <nav className="flex space-x-1 sm:space-x-2 rtl:space-x-reverse mb-8 bg-white rounded-xl shadow-sm p-2 overflow-x-auto">
          {[
            { id: 'dashboard', label: 'الرئيسية', icon: 'ri-dashboard-line' },
            { id: 'messages', label: `الرسائل (${messages.filter((m) => m.status === 'new').length})`, icon: 'ri-mail-line' },
            { id: 'users', label: 'إدارة المستخدمين', icon: 'ri-team-line' },
            { id: 'content', label: 'إدارة المحتوى', icon: 'ri-edit-line' },
            { id: 'chatbot', label: 'الشات بوت الذكي', icon: 'ri-robot-line' },
            { id: 'ready-ai', label: 'Readdy AI Editor', icon: 'ri-magic-line' },
            { id: 'design', label: 'التصميم والألوان', icon: 'ri-palette-line' },
            { id: 'analytics', label: 'التحليلات', icon: 'ri-bar-chart-line' },
            { id: 'settings', label: 'الإعدادات', icon: 'ri-settings-line' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 rtl:space-x-reverse py-3 px-4 rounded-lg font-medium text-xs sm:text-sm whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <i className={tab.icon}></i>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </nav>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { title: 'رسائل جديدة', value: messages.filter((m) => m.status === 'new').length, icon: 'ri-mail-line', color: 'blue', change: '+12%' },
                { title: 'إجمالي الزوار', value: visitors.length, icon: 'ri-user-line', color: 'green', change: '+8%' },
                { title: 'استفسارات الشات بوت', value: chatBotMessages.length, icon: 'ri-robot-line', color: 'purple', change: '+25%' },
                { title: 'المحتوى المحدث', value: contentItems.length, icon: 'ri-edit-line', color: 'orange', change: '+5%' }
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-${stat.color}-100 rounded-xl flex items-center justify-center`}>
                      <i className={`${stat.icon} text-xl text-${stat.color}-600`}></i>
                    </div>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full bg-${stat.color}-50 text-${stat.color}-600`}>
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                </div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                  <i className="ri-time-line text-blue-600 ml-2 rtl:mr-2 rtl:ml-0"></i>
                  آخر الأنشطة
                </h3>
                <div className="space-y-4">
                  {[
                    { action: 'رسالة جديدة من أحمد محمد', time: 'منذ 5 دقائق', icon: 'ri-mail-line', color: 'blue' },
                    { action: 'تحديث محتوى الصفحة الرئيسية', time: 'منذ 30 دقيقة', icon: 'ri-edit-line', color: 'green' },
                    { action: 'استفسار شات بوت جديد', time: 'منذ ساعة', icon: 'ri-robot-line', color: 'purple' },
                    { action: 'تسجيل مستخدم جديد', time: 'منذ ساعتين', icon: 'ri-user-add-line', color: 'orange' }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4 rtl:space-x-reverse p-3 bg-gray-50 rounded-xl">
                      <div className={`w-8 h-8 bg-${activity.color}-100 rounded-full flex items-center justify-center`}>
                        <i className={`${activity.icon} text-sm text-${activity.color}-600`}></i>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                  <i className="ri-line-chart-line text-green-600 ml-2 rtl:mr-2 rtl:ml-0"></i>
                  إحصائيات سريعة
                </h3>
                <div className="space-y-4">
                  {[
                    { label: 'معدل الاستجابة', value: '98%', trend: 'up' },
                    { label: 'رضا العملاء', value: '4.9/5', trend: 'up' },
                    { label: 'وقت الاستجابة', value: '< 5 دقائق', trend: 'down' },
                    { label: 'المهام المنجزة اليوم', value: '24/30', trend: 'up' }
                  ].map((stat, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="text-sm font-medium text-gray-900">{stat.label}</span>
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="text-sm font-bold text-gray-900">{stat.value}</span>
                        <i className={`ri-arrow-${stat.trend}-line text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}></i>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Users Management Tab */}
        {activeTab === 'users' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">إدارة المستخدمين والصلاحيات</h3>
                <p className="text-gray-600 mt-1">تحكم في المستخدمين ورتبهم وصلاحياتهم</p>
              </div>
              <button
                onClick={addUser}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all whitespace-nowrap font-medium shadow-lg"
              >
                <i className="ri-user-add-line ml-2 rtl:mr-2 rtl:ml-0"></i>
                إضافة مستخدم جديد
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-right text-sm font-bold text-gray-900">المستخدم</th>
                      <th className="px-6 py-4 text-right text-sm font-bold text-gray-900">الرتبة</th>
                      <th className="px-6 py-4 text-right text-sm font-bold text-gray-900">الصلاحيات</th>
                      <th className="px-6 py-4 text-right text-sm font-bold text-gray-900">الحالة</th>
                      <th className="px-6 py-4 text-right text-sm font-bold text-gray-900">الإجراءات</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div
                              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                user.role === 'admin' ? 'bg-red-100' : user.role === 'editor' ? 'bg-blue-100' : 'bg-gray-100'
                              }`}
                            >
                              <i
                                className={`ri-${user.role === 'admin' ? 'admin' : user.role === 'editor' ? 'edit' : 'user'}-line text-lg ${
                                  user.role === 'admin' ? 'text-red-600' : user.role === 'editor' ? 'text-blue-600' : 'text-gray-600'
                                }`}
                              ></i>
                            </div>
                            <div className="mr-4 rtl:ml-4 rtl:mr-0">
                              <div className="text-sm font-medium text-gray-900">{user.username}</div>
                              <div className="text-sm text-gray-500">{user.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-3 py-1 text-xs font-bold rounded-full ${
                              user.role === 'admin'
                                ? 'bg-red-100 text-red-800'
                                : user.role === 'editor'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {user.role === 'admin' ? 'مدير' : user.role === 'editor' ? 'محرر' : 'مشاهد'}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-wrap gap-1">
                            {user.role === 'admin' ? (
                              <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">جميع الصلاحيات</span>
                            ) : (
                              user.permissions.map((permission, index) => (
                                <span key={index} className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                                  {permission === 'content_edit' ? 'تعديل المحتوى' : permission === 'messages_view' ? 'عرض الرسائل' : permission}
                                </span>
                              ))
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-3 py-1 text-xs font-bold rounded-full ${
                              user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {user.status === 'active' ? 'نشط' : 'معطل'}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2 rtl:space-x-reverse">
                            <button
                              onClick={() => setEditingUser(user)}
                              className="text-blue-600 hover:text-blue-900 transition-colors"
                            >
                              <i className="ri-edit-line"></i>
                            </button>
                            {user.role !== 'admin' && (
                              <button
                                onClick={() => deleteUser(user.id)}
                                className="text-red-600 hover:text-red-900 transition-colors"
                              >
                                <i className="ri-delete-bin-line"></i>
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* User Edit Modal */}
            {editingUser && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900">تعديل المستخدم</h3>
                    <button
                      onClick={() => setEditingUser(null)}
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      <i className="ri-close-line text-2xl"></i>
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">اسم المستخدم</label>
                        <input
                          type="text"
                          value={editingUser.username}
                          onChange={(e) => setEditingUser({ ...editingUser, username: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني</label>
                        <input
                          type="email"
                          value={editingUser.email}
                          onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">الرتبة</label>
                        <select
                          value={editingUser.role}
                          onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value as 'admin' | 'editor' | 'viewer' })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                          <option value="admin">مدير</option>
                          <option value="editor">محرر</option>
                          <option value="viewer">مشاهد</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">الحالة</label>
                        <select
                          value={editingUser.status}
                          onChange={(e) => setEditingUser({ ...editingUser, status: e.target.value as 'active' | 'inactive' })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                          <option value="active">نشط</option>
                          <option value="inactive">معطل</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">الصلاحيات</label>
                      <div className="space-y-2">
                        {[
                          'content_edit',
                          'messages_view',
                          'users_manage',
                          'analytics_view',
                          'settings_edit'
                        ].map((permission) => (
                          <label key={permission} className="flex items-center">
                            <input
                              type="checkbox"
                              checked={editingUser.permissions.includes(permission)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setEditingUser({
                                    ...editingUser,
                                    permissions: [...editingUser.permissions, permission]
                                  });
                                } else {
                                  setEditingUser({
                                    ...editingUser,
                                    permissions: editingUser.permissions.filter((p) => p !== permission)
                                  });
                                }
                              }}
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 ml-2 rtl:mr-2 rtl:ml-0"
                            />
                            <span className="text-sm text-gray-700">
                              {permission === 'content_edit' ? 'تعديل المحتوى' : permission === 'messages_view' ? 'عرض الرسائل' : permission}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-end space-x-4 rtl:space-x-reverse pt-6 border-t">
                      <button
                        onClick={() => setEditingUser(null)}
                        className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
                      >
                        إلغاء
                      </button>
                      <button
                        onClick={saveUser}
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all font-medium"
                      >
                        حفظ التغييرات
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ChatBot Tab */}
        {activeTab === 'chatbot' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">الشات بوت الذكي المتطور</h3>
                  <p className="text-purple-100">نظام ذكي متقدم للرد على جميع استفسارات الزوار حول خدماتنا</p>
                </div>
                <div className="text-4xl opacity-20">
                  <i className="ri-robot-line"></i>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* ChatBot Settings */}
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                <h4 className="text-lg font-bold text-gray-900 mb-6">إعدادات الشات بوت المتقدم</h4>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">تفعيل الشات بوت الذكي</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={chatBotSettings.enabled}
                        onChange={(e) => setChatBotSettings({ ...chatBotSettings, enabled: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">رسالة الترحيب الذكية</label>
                    <textarea
                      value={chatBotSettings.greeting}
                      onChange={(e) => setChatBotSettings({ ...chatBotSettings, greeting: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                      rows={3}
                    />
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <h5 className="font-bold text-blue-900 mb-3">معلومات الشات بوت المبرمجة:</h5>
                    <div className="space-y-2 text-sm text-blue-800">
                      <div>• خدمات تموين السفن والمعدات البحرية</div>
                      <div>• معلومات الشركة وتاريخ التأسيس (2009)</div>
                      <div>• بيانات المؤسس: Mr. Ahmed Saleh</div>
                      <div>• أرقام التواصل: +201024886944</div>
                      <div>• شركة التصميم: Bluehostn</div>
                      <div>• المقر: مصر، السويس</div>
                      <div>• جميع الخدمات التسع المتاحة</div>
                    </div>
                  </div>

                  <button
                    onClick={saveChatBotSettings}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all font-medium"
                  >
                    حفظ إعدادات الشات بوت
                  </button>
                </div>
              </div>

              {/* Live Chat Preview */}
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                <h4 className="text-lg font-bold text-gray-900 mb-6">معاينة الشات بوت المباشر</h4>
                <div className="border border-gray-200 rounded-xl h-96 flex flex-col">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-t-xl">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <i className="ri-robot-line"></i>
                      </div>
                      <div>
                        <div className="font-medium">مساعد Sea Greats الذكي</div>
                        <div className="text-xs opacity-80">متصل</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 p-4 overflow-y-auto space-y-4">
                    <div className="flex items-start space-x-2 rtl:space-x-reverse">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="ri-robot-line text-white text-xs"></i>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3 max-w-xs">
                        <p className="text-sm">{chatBotSettings.greeting}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2 rtl:space-x-reverse justify-end">
                      <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                        <p className="text-sm">ما هي خدماتكم؟</p>
                      </div>
                      <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="ri-user-line text-white text-xs"></i>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2 rtl:space-x-reverse">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="ri-robot-line text-white text-xs"></i>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3 max-w-xs">
                        <p className="text-sm">
                          نحن شركة Sea Greats المتخصصة في التوريدات البحرية منذ 2009. نقدم 9 خدمات رئيسية: تموين السفن، مستلزمات الماكينات، المعدات
                          البحرية، المواد الغذائية، الخدمات الفنية، المواد الكيميائية، أدوات العمل، المعدات الكهربائية، والاستشارات البحرية. مؤسس الشركة
                          هو Mr. Ahmed Saleh ويمكنكم التواصل معنا على +201024886944
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border-t">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <input
                        type="text"
                        placeholder="اكتب رسالتك..."
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                        disabled
                      />
                      <button className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <i className="ri-send-plane-line text-white text-sm"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ChatBot Knowledge Base */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-6">قاعدة معرفة الشات بوت</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h5 className="font-semibold text-gray-900 flex items-center">
                    <i className="ri-ship-line text-blue-600 ml-2 rtl:mr-2 rtl:ml-0"></i>
                    خدمات الشركة
                  </h5>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• تموين السفن الشامل</li>
                    <li>• مستلزمات الماكينات البحرية</li>
                    <li>• المعدات البحرية المتطورة</li>
                    <li>• المواد الغذائية الطازجة</li>
                    <li>• الخدمات الفنية المتخصصة</li>
                    <li>• المواد الكيميائية</li>
                    <li>• أدوات العمل المهنية</li>
                    <li>• المعدات الكهربائية</li>
                    <li>• الاستشارات البحرية</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h5 className="font-semibold text-gray-900 flex items-center">
                    <i className="ri-building-line text-green-600 ml-2 rtl:mr-2 rtl:ml-0"></i>
                    معلومات الشركة
                  </h5>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• تأسست عام 2009</li>
                    <li>• +15 سنة خبرة</li>
                    <li>• مقرها في السويس، مصر</li>
                    <li>• خدمة 24/7</li>
                    <li>• +500 عميل راض</li>
                    <li>• +1000 عملية تموين</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h5 className="font-semibold text-gray-900 flex items-center">
                    <i className="ri-contacts-line text-purple-600 ml-2 rtl:mr-2 rtl:ml-0"></i>
                    التواصل والفريق
                  </h5>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• المؤسس: Mr. Ahmed Saleh</li>
                    <li>• هاتف: +201024886944</li>
                    <li>• إيميل: info@seagreats.com</li>
                    <li>• تصميم الموقع: Bluehostn</li>
                    <li>• واتساب متاح</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Content Management Tab */}
        {activeTab === 'content' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">إدارة المحتوى</h3>
                <p className="text-gray-600 mt-1">تحرير وإدارة محتوى الموقع</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={addNewContent}
                  className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-xl hover:from-green-700 hover:to-green-800 transition-all whitespace-nowrap font-medium text-sm"
                >
                  <i className="ri-add-line ml-2 rtl:mr-2 rtl:ml-0"></i>
                  إضافة محتوى جديد
                </button>
                <button
                  onClick={enableVisualEdit}
                  className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all whitespace-nowrap font-medium text-sm"
                >
                  <i className="ri-drag-move-line ml-2 rtl:mr-2 rtl:ml-0"></i>
                  التعديل المرئي
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-right text-sm font-bold text-gray-900">العنوان</th>
                      <th className="px-6 py-4 text-right text-sm font-bold text-gray-900">النوع</th>
                      <th className="px-6 py-4 text-right text-sm font-bold text-gray-900">آخر تعديل</th>
                      <th className="px-6 py-4 text-right text-sm font-bold text-gray-900">الإجراءات</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {contentItems.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-gray-900">{item.title}</div>
                          <div className="text-sm text-gray-500 truncate max-w-xs">{item.content}</div>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-3 py-1 text-xs font-bold rounded-full ${
                              item.type === 'page' ? 'bg-blue-100 text-blue-800' : item.type === 'service' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {item.type === 'page' ? 'صفحة' : item.type === 'service' ? 'خدمة' : 'قسم'}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {new Date(item.lastModified).toLocaleDateString('ar')}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2 rtl:space-x-reverse">
                            <button
                              onClick={() => editContent(item)}
                              className="text-blue-600 hover:text-blue-900 transition-colors"
                              title="تعديل"
                            >
                              <i className="ri-edit-line"></i>
                            </button>
                            <button
                              onClick={() => deleteContent(item.id)}
                              className="text-red-600 hover:text-red-900 transition-colors"
                              title="حذف"
                            >
                              <i className="ri-delete-bin-line"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Content Edit Modal */}
            {editingContent && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900">تعديل المحتوى</h3>
                    <button
                      onClick={() => setEditingContent(null)}
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      <i className="ri-close-line text-2xl"></i>
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">العنوان</label>
                        <input
                          type="text"
                          value={editingContent.title}
                          onChange={(e) => setEditingContent({ ...editingContent, title: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">النوع</label>
                        <select
                          value={editingContent.type}
                          onChange={(e) => setEditingContent({ ...editingContent, type: e.target.value as 'page' | 'service' | 'section' })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                          <option value="page">صفحة</option>
                          <option value="service">خدمة</option>
                          <option value="section">قسم</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">المحتوى</label>
                      <textarea
                        value={editingContent.content}
                        onChange={(e) => setEditingContent({ ...editingContent, content: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                        rows={15}
                      />
                    </div>

                    <div className="flex justify-end space-x-4 rtl:space-x-reverse pt-6 border-t">
                      <button
                        onClick={() => setEditingContent(null)}
                        className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
                      >
                        إلغاء
                      </button>
                      <button
                        onClick={saveContent}
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all font-medium"
                      >
                        حفظ التغييرات
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Design & Colors Tab */}
        {activeTab === 'design' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">التصميم والألوان</h3>
                  <p className="text-pink-100">تحكم كامل في مظهر وتصميم الموقع</p>
                </div>
                <div className="text-4xl opacity-20">
                  <i className="ri-palette-line"></i>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Color Scheme */}
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                <h4 className="text-lg font-bold text-gray-900 mb-6">نظام الألوان</h4>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">اللون الأساسي</label>
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <input
                        type="color"
                        value={siteSettings.primaryColor}
                        onChange={(e) => setSiteSettings({ ...siteSettings, primaryColor: e.target.value })}
                        className="w-12 h-12 border border-gray-300 rounded-lg cursor-pointer"
                      />
                      <input
                        type="text"
                        value={siteSettings.primaryColor}
                        onChange={(e) => setSiteSettings({ ...siteSettings, primaryColor: e.target.value })}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">اللون الثانوي</label>
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <input
                        type="color"
                        value={siteSettings.secondaryColor}
                        onChange={(e) => setSiteSettings({ ...siteSettings, secondaryColor: e.target.value })}
                        className="w-12 h-12 border border-gray-300 rounded-lg cursor-pointer"
                      />
                      <input
                        type="text"
                        value={siteSettings.secondaryColor}
                        onChange={(e) => setSiteSettings({ ...siteSettings, secondaryColor: e.target.value })}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h5 className="font-medium text-gray-900 mb-3">الألوان المحفوظة</h5>
                    <div className="grid grid-cols-6 gap-2">
                      {[
                        '#2563eb',
                        '#dc2626',
                        '#16a34a',
                        '#ca8a04',
                        '#9333ea',
                        '#0891b2',
                        '#e11d48',
                        '#ea580c',
                        '#65a30d',
                        '#7c2d12',
                        '#374151',
                        '#1f2937'
                      ].map((color, index) => (
                        <button
                          key={index}
                          onClick={() => setSiteSettings({ ...siteSettings, primaryColor: color })}
                          className="w-12 h-12 rounded-lg border-2 border-gray-200 hover:border-gray-400 transition-colors"
                          style={{ backgroundColor: color }}
                        ></button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Layout Options */}
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                <h4 className="text-lg font-bold text-gray-900 mb-6">خيارات التخطيط</h4>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">نمط الهيدر</label>
                    <div className="space-y-2">
                      {[
                        { id: 'default', label: 'افتراضي', description: 'هيدر ثابت مع قائمة التنقل' },
                        { id: 'centered', label: 'متوسط', description: 'لوجو في المنتصف مع قوائم جانبية' },
                        { id: 'minimal', label: 'مبسط', description: 'تصميم نظيف ومبسط' }
                      ].map((option) => (
                        <label key={option.id} className="flex items-start space-x-3 rtl:space-x-reverse p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <input
                            type="radio"
                            name="headerStyle"
                            value={option.id}
                            className="mt-0.5 text-blue-600 focus:ring-blue-500"
                            defaultChecked={option.id === 'default'}
                          />
                          <div>
                            <div className="font-medium text-gray-900">{option.label}</div>
                            <div className="text-sm text-gray-500">{option.description}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">نمط الأزرار</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">مربع</button>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-xl">منحني</button>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-full">دائري</button>
                      <button className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg">حدود</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-6">الخطوط والنصوص</h4>
              <div className="grid lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">خط العناوين</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                    <option value="cairo">Cairo (الحالي)</option>
                    <option value="amiri">Amiri</option>
                    <option value="noto-kufi">Noto Kufi Arabic</option>
                    <option value="tajawal">Tajawal</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">حجم العناوين</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                    <option value="small">صغير</option>
                    <option value="medium" selected>
                      متوسط
                    </option>
                    <option value="large">كبير</option>
                    <option value="xlarge">كبير جداً</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">وزن الخط</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                    <option value="normal">عادي</option>
                    <option value="medium">متوسط</option>
                    <option value="bold" selected>
                      عريض
                    </option>
                    <option value="extrabold">عريض جداً</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={saveSiteSettings}
                className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-2xl hover:from-pink-700 hover:to-purple-700 transition-all font-bold text-lg"
              >
                <i className="ri-palette-line ml-2 rtl:mr-2 rtl:ml-0"></i>
                حفظ تغييرات التصميم
              </button>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-gray-600 to-gray-800 rounded-2xl p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">إعدادات النظام</h3>
                  <p className="text-gray-300">إدارة الإعدادات العامة والتقنية للموقع</p>
                </div>
                <div className="text-4xl opacity-20">
                  <i className="ri-settings-line"></i>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Site Settings */}
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                <h4 className="text-lg font-bold text-gray-900 mb-6">إعدادات الموقع</h4>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">اسم الموقع</label>
                    <input
                      type="text"
                      value={siteSettings.siteName}
                      onChange={(e) => setSiteSettings({ ...siteSettings, siteName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">النطاق (Domain)</label>
                    <div className="flex space-x-2 rtl:space-x-reverse">
                      <input
                        type="text"
                        value={siteSettings.domain}
                        onChange={(e) => setSiteSettings({ ...siteSettings, domain: e.target.value })}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="example.com"
                      />
                      <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors whitespace-nowrap">
                        تحديث النطاق
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">تأكد من توجيه DNS إلى الخادم الجديد</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">شعار الموقع</label>
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <img src="/logo.png" alt="Logo" className="w-12 h-12 object-contain border border-gray-200 rounded-lg" />
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        تغيير الشعار
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">وصف الموقع</label>
                    <textarea
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                      rows={3}
                      placeholder="وصف مختصر للموقع..."
                    />
                  </div>
                </div>
              </div>

              {/* Technical Settings */}
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                <h4 className="text-lg font-bold text-gray-900 mb-6">الإعدادات التقنية</h4>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-medium text-gray-700">تفعيل HTTPS</span>
                      <p className="text-xs text-gray-500">تأمين الموقع بشهادة SSL</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-medium text-gray-700">ضغط الملفات</span>
                      <p className="text-xs text-gray-500">تحسين سرعة التحميل</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-medium text-gray-700">التخزين المؤقت</span>
                      <p className="text-xs text-gray-500">تسريع تحميل الصفحات</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-medium text-gray-700">النسخ الاحتياطي</span>
                      <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">آخر نسخة: اليوم 14:30</span>
                    </div>
                    <div className="space-y-2">
                      <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors text-sm">
                        إنشاء نسخة احتياطية الآن
                      </button>
                      <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                        استعادة من نسخة احتياطية
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">الصيانة</label>
                    <div className="space-y-2">
                      <button className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors text-sm">
                        تفعيل وضع الصيانة
                      </button>
                      <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors text-sm">
                        مسح التخزين المؤقت
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-6">معلومات الاتصال</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">رقم الهاتف</label>
                  <input
                    type="tel"
                    defaultValue="+201024886944"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني</label>
                  <input
                    type="email"
                    defaultValue="info@seagreats.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">العنوان</label>
                  <input
                    type="text"
                    placeholder="العنوان الكامل..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={saveSiteSettings}
                className="bg-gradient-to-r from-gray-600 to-gray-800 text-white px-8 py-4 rounded-2xl hover:from-gray-700 hover:to-gray-900 transition-all font-bold text-lg"
              >
                <i className="ri-save-line ml-2 rtl:mr-2 rtl:ml-0"></i>
                حفظ جميع الإعدادات
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
