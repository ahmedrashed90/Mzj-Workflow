
import React from 'react';
import { auth } from '../services/firebase';
import { UserProfile } from '../types';

interface ProfileViewProps {
  user: any;
  profile: UserProfile | null;
}

const ProfileView: React.FC<ProfileViewProps> = ({ user, profile }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm text-center">
        <div className="w-24 h-24 bg-stone-100 text-stone-300 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 border-4 border-white shadow-inner">
          <i className="fa-solid fa-user"></i>
        </div>
        <h2 className="text-xl font-black text-stone-800">{profile?.name || user.email}</h2>
        <p className="text-stone-400 text-sm">{user.email}</p>
        
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100">
            <p className="text-[10px] font-bold text-stone-400 uppercase mb-1">الدور</p>
            <p className="text-sm font-black text-stone-800">{profile?.role || 'مستخدم'}</p>
          </div>
          <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100">
            <p className="text-[10px] font-bold text-stone-400 uppercase mb-1">الفروع</p>
            <p className="text-sm font-black text-stone-800">{profile?.locations?.length || 0}</p>
          </div>
        </div>

        <div className="mt-6 text-right">
           <h3 className="text-[10px] font-bold text-stone-400 uppercase mb-2 px-2">الأماكن المرتبطة بك:</h3>
           <div className="flex flex-wrap gap-2">
             {profile?.locations?.map(l => (
               <span key={l} className="bg-stone-50 text-stone-600 text-[10px] font-bold px-3 py-1 rounded-full border border-stone-100">
                 {l}
               </span>
             ))}
           </div>
        </div>

        <button 
          onClick={() => auth.signOut()}
          className="w-full mt-10 py-4 border-2 border-stone-100 text-red-500 rounded-2xl font-black hover:bg-red-50 transition-all"
        >
          <i className="fa-solid fa-right-from-bracket mr-2"></i> تسجيل الخروج
        </button>
      </div>
    </div>
  );
};

export default ProfileView;
