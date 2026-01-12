
import React, { useState, useEffect } from 'react';
import { auth, db } from './firebase';
import { UserProfile, UserRole } from './types';
import Login from './components/Login';
import CreateOrder from './components/CreateOrder';
import ManageOrders from './components/ManageOrders';

type PageType = 'sales' | 'dashboard' | 'inventory' | 'transfers' | 'all_cars' | 'admin' | 'activity_log' | 'movement_log';

const PAGE_URLS: Record<string, string> = {
  sales: '/sales.m.html',
  dashboard: '/dashboard.m.html',
  inventory: '/inventory.m.html',
  all_cars: '/cars.m.html',
  admin: '/admin.m.html',
  activity_log: '/Activity.m.html',
  movement_log: '/act.m.html',
};

const App: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [activeTab, setActiveTab] = useState<PageType>('transfers');
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(async (u) => {
      setUser(u);
      if (u) {
        const snap = await db.collection('user').doc(u.uid).get();
        if (snap.exists) {
          setProfile(snap.data() as UserProfile);
        }
      } else {
        setProfile(null);
      }
      setLoading(false);
    });
    return unsub;
  }, []);

  const menuItems: { id: PageType; label: string; icon: string; role: string[] }[] = [
    { id: 'sales', label: 'تتبع المبيعات', icon: 'fa-chart-line', role: [UserRole.ADMIN, UserRole.IDARI] },
    { id: 'dashboard', label: 'الداش بورد', icon: 'fa-gauge-high', role: [UserRole.ADMIN, UserRole.IDARI] },
    { id: 'inventory', label: 'المخزون', icon: 'fa-car-side', role: [UserRole.ADMIN, UserRole.IDARI, UserRole.BRANCH] },
    { id: 'transfers', label: 'نقل السيارات', icon: 'fa-truck-ramp-box', role: [UserRole.ADMIN, UserRole.IDARI, UserRole.BRANCH] },
    { id: 'all_cars', label: 'كل السيارات', icon: 'fa-layer-group', role: [UserRole.ADMIN] },
    { id: 'admin', label: 'الإدارة', icon: 'fa-user-gear', role: [UserRole.ADMIN] },
    { id: 'activity_log', label: 'سجل النشاط', icon: 'fa-clock-rotate-left', role: [UserRole.ADMIN] },
    { id: 'movement_log', label: 'سجل الحركات', icon: 'fa-route', role: [UserRole.ADMIN, UserRole.IDARI] },
  ];

  const navigateTo = (id: PageType) => {
    // نقلة داخل تطبيق photoshoot-user (إدارة الطلبات)
    if (id === 'transfers') {
      setActiveTab(id);
      setIsSidebarOpen(false);
      window.scrollTo(0, 0);
      return;
    }

    // باقي الصفحات: افتحها كصفحة مستقلة علشان العنوان يتغير في الـ Address Bar
    setIsSidebarOpen(false);
    const targetUrl = PAGE_URLS[id as keyof typeof PAGE_URLS];
    if (targetUrl) {
      window.location.href = targetUrl;
      return;
    }

    // fallback
    setActiveTab(id);
    window.scrollTo(0, 0);
  };

  const isIframePage = activeTab !== 'transfers';

  const renderContent = () => {
    if (!user) return <Login />;

    // التاب الأساسي داخل التطبيق
    if (activeTab === 'transfers') {
      return (
        <div className="flex flex-col gap-6 py-4">
          <CreateOrder user={user} profile={profile} />
          <div className="border-t border-mzjLine mx-4"></div>
          <ManageOrders user={user} profile={profile} />
        </div>
      );
    }

    // باقي الصفحات بتفتح Redirect من navigateTo
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-center px-6">
        <div>
          <p className="text-lg font-semibold text-mzjBrown">جاري فتح الصفحة…</p>
          <p className="text-sm text-mzjGray mt-2">لو ما اتفتحتش تلقائيًا، جرّب من السايد بار مرة تانية.</p>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-mzjCream flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-mzjBrown border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-mzjBrown font-bold">جاري التحميل...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-mzjCream">
      {/* Top Header - ONLY visible on the main Project (Transfers) page */}
      {!isIframePage && user && (
        <header className="bg-white border-b border-mzjLine px-4 py-3 sticky top-0 z-[100] flex items-center justify-between shadow-sm h-16">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-mzjCream text-mzjBrown active:scale-90 transition-transform"
            >
              <i className="fa-solid fa-bars-staggered text-lg"></i>
            </button>
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-mzjBrown uppercase tracking-widest leading-none">محمد بن ذعار</span>
              <span className="text-xs font-black text-mzjBrown">نقل السيارات</span>
            </div>
          </div>
          <button 
            onClick={() => auth.signOut()}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-red-300"
          >
            <i className="fa-solid fa-power-off"></i>
          </button>
        </header>
      )}

      {/* Sidebar Drawer */}
      {isSidebarOpen && (
        <>
          <div 
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setIsSidebarOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 z-[201] w-[80%] max-w-xs bg-white shadow-2xl animate-in slide-in-from-right duration-300 flex flex-col">
            <div className="p-6 border-b border-mzjLine bg-mzjCream/30">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-mzjBrown text-white px-3 py-1 rounded-lg text-xs font-black tracking-widest">MZJ</div>
                <button onClick={() => setIsSidebarOpen(false)} className="text-gray-400 p-2"><i className="fa-solid fa-xmark text-xl"></i></button>
              </div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">مرحباً بك</p>
              <h2 className="text-lg font-black text-mzjBrown truncate">{profile?.name || user?.email}</h2>
              <p className="text-[10px] text-mzjBrown font-bold bg-white inline-block px-2 py-0.5 rounded border border-mzjLine mt-1">{profile?.role}</p>
            </div>
            
            <nav className="flex-1 overflow-y-auto p-4 space-y-1 no-scrollbar">
              {menuItems.map((item) => {
                const isAllowed = profile?.role === UserRole.ADMIN || item.role.includes(profile?.role as UserRole);
                if (!isAllowed) return null;
                
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => navigateTo(item.id)}
                    className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all ${
                      isActive 
                      ? 'bg-mzjBrown text-white font-black shadow-lg translate-x-1' 
                      : 'text-gray-500 active:bg-mzjCream/50'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${isActive ? 'bg-white/20' : 'bg-mzjCream'}`}>
                      <i className={`fa-solid ${item.icon} text-sm`}></i>
                    </div>
                    <span className="text-sm">{item.label}</span>
                    {isActive && <i className="fa-solid fa-chevron-left mr-auto text-[10px] opacity-50"></i>}
                  </button>
                );
              })}
            </nav>
            
            <div className="p-6 border-t border-mzjLine">
              <button 
                onClick={() => auth.signOut()}
                className="w-full flex items-center justify-center gap-2 p-3 text-red-500 font-bold text-xs"
              >
                <i className="fa-solid fa-power-off"></i>
                تسجيل الخروج
              </button>
            </div>
          </div>
        </>
      )}

      {/* Main Content Area */}
      <main className={`flex-1 w-full ${activeTab === 'transfers' ? 'max-w-lg mx-auto' : ''}`}>
        {renderContent()}
      </main>
    </div>
  );
};

const AccessDenied = () => (
  <div className="p-20 text-center flex flex-col items-center gap-4">
    <i className="fa-solid fa-lock text-4xl text-red-200"></i>
    <p className="text-gray-500 font-bold">غير مصرح لك بدخول هذه الصفحة</p>
  </div>
);

export default App;
