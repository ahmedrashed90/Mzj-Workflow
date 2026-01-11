
import React, { useState } from 'react';
import { UserProfile } from '../types';
import CreateRequest from './CreateRequest';
import ManageRequests from './ManageRequests';
import ProfileView from './ProfileView';

interface DashboardProps {
  user: any;
  profile: UserProfile | null;
}

const Dashboard: React.FC<DashboardProps> = ({ user, profile }) => {
  const [activeTab, setActiveTab] = useState<'create' | 'active' | 'completed' | 'profile'>('create');

  return (
    <div className="flex flex-col min-h-screen bg-stone-50 pb-20">
      {/* Top Header */}
      <header className="sticky top-0 z-30 bg-white border-b border-stone-200 px-5 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-stone-800 text-white rounded-lg flex items-center justify-center font-bold">MZJ</div>
          <div>
            <h2 className="text-sm font-black text-stone-800">Workspace</h2>
            <p className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">Mobile Portal</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs bg-stone-100 text-stone-600 px-3 py-1 rounded-full font-bold">
            {profile?.role || 'مستخدم'}
          </span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 p-4">
        {activeTab === 'create' && <CreateRequest user={user} profile={profile} />}
        {activeTab === 'active' && <ManageRequests user={user} profile={profile} statusFilter="تحت المتابعة" title="الطلبات النشطة" />}
        {activeTab === 'completed' && <ManageRequests user={user} profile={profile} statusFilter="مكتملة" title="الأرشيف المكتمل" />}
        {activeTab === 'profile' && <ProfileView user={user} profile={profile} />}
      </main>

      {/* Bottom Mobile Navigation - Optimized for 4 items */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] px-4 py-3 flex justify-between items-center z-50 safe-bottom">
        <button 
          onClick={() => setActiveTab('create')}
          className={`flex flex-col items-center gap-1 flex-1 transition-all ${activeTab === 'create' ? 'text-stone-800' : 'text-stone-400'}`}
        >
          <i className="fa-solid fa-plus-circle text-xl"></i>
          <span className="text-[10px] font-bold">إنشاء</span>
        </button>
        <button 
          onClick={() => setActiveTab('active')}
          className={`flex flex-col items-center gap-1 flex-1 transition-all ${activeTab === 'active' ? 'text-stone-800' : 'text-stone-400'}`}
        >
          <i className="fa-solid fa-clock-rotate-left text-xl"></i>
          <span className="text-[10px] font-bold">المتابعة</span>
        </button>
        <button 
          onClick={() => setActiveTab('completed')}
          className={`flex flex-col items-center gap-1 flex-1 transition-all ${activeTab === 'completed' ? 'text-stone-800' : 'text-stone-400'}`}
        >
          <i className="fa-solid fa-circle-check text-xl"></i>
          <span className="text-[10px] font-bold">المكتملة</span>
        </button>
        <button 
          onClick={() => setActiveTab('profile')}
          className={`flex flex-col items-center gap-1 flex-1 transition-all ${activeTab === 'profile' ? 'text-stone-800' : 'text-stone-400'}`}
        >
          <i className="fa-solid fa-user-circle text-xl"></i>
          <span className="text-[10px] font-bold">الحساب</span>
        </button>
      </nav>
    </div>
  );
};

export default Dashboard;
