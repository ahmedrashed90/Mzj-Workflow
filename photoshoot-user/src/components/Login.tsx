
import React, { useState } from 'react';
import { auth } from '../firebase';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return setError('الرجاء تعبئة جميع الحقول');
    setError('');
    setLoading(true);
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err: any) {
      setError('خطأ في تسجيل الدخول. تأكد من البيانات');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 flex flex-col items-center justify-center min-h-[60vh]">
      <div className="w-full bg-white border border-mzjLine p-6 rounded-2xl shadow-xl">
        <h2 className="text-xl font-black text-mzjBrown mb-6 text-center">تسجيل الدخول</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-bold mb-1 text-mzjBrown">البريد الإلكتروني</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-xl border border-mzjLine focus:ring-2 focus:ring-mzjBrown outline-none" 
              placeholder="example@mzj.com"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1 text-mzjBrown">كلمة المرور</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-xl border border-mzjLine focus:ring-2 focus:ring-mzjBrown outline-none"
              placeholder="••••••••"
            />
          </div>
          {error && <div className="text-red-600 text-xs text-center bg-red-50 p-2 rounded-lg">{error}</div>}
          <button 
            disabled={loading}
            className="w-full bg-mzjBrown text-white font-black p-3 rounded-xl active:scale-95 transition-all disabled:opacity-50"
          >
            {loading ? 'جاري التحقق...' : 'دخول'}
          </button>
        </form>
      </div>
      <p className="mt-6 text-[10px] text-gray-400">نظام إدارة طلبات MZJ — نسخة الجوال 1.0</p>
    </div>
  );
};

export default Login;
