
import React, { useState } from 'react';
import { auth } from '../services/firebase';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err: any) {
      setError('خطأ في تسجيل الدخول. تأكد من البيانات.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-stone-100">
      <div className="w-full max-w-sm bg-white rounded-3xl p-8 shadow-xl border border-stone-200">
        <div className="mb-8 text-center">
          <div className="w-16 h-16 bg-stone-800 text-white rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-4">MZJ</div>
          <h1 className="text-2xl font-black text-stone-800">Workspace Mobile</h1>
          <p className="text-stone-500 mt-2">نظام إدارة طلبات التصوير والنقل</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-stone-700 mb-1">البريد الإلكتروني</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-stone-800 focus:outline-none transition-all"
              placeholder="example@mzjcars.com"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-stone-700 mb-1">كلمة المرور</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-stone-800 focus:outline-none transition-all"
              placeholder="••••••••"
            />
          </div>
          
          {error && <div className="p-3 bg-red-50 text-red-600 rounded-xl text-sm font-bold">{error}</div>}

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-4 bg-stone-800 text-white rounded-xl font-bold shadow-lg hover:bg-stone-900 transition-all disabled:opacity-50"
          >
            {loading ? 'جاري الدخول...' : 'تسجيل الدخول'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
