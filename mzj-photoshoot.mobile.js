
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, User, Auth } from 'firebase/auth';
import { getFirestore, collection, doc, onSnapshot, query, where, limit, addDoc, serverTimestamp, updateDoc, writeBatch, getDoc, Firestore } from 'firebase/firestore';

// ==========================================
// 1. الثوابت والإعدادات
// ==========================================
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyC614bGqnYf4Q-weTNemzWENTpa8DjGeHw",
  authDomain: "mzj-agenda.firebaseapp.com",
  projectId: "mzj-agenda",
  storageBucket: "mzj-agenda.firebasestorage.app",
  messagingSenderId: "834700407721",
  appId: "1:834700407721:web:75c17665d4f032fd65cab8"
};

const SHOOT_PLACES = [
  "المستودع : المخزون المتاح", "المستودع : سيارات بها ملاحظات", "المستودع : مباع تحت التسليم",
  "فرع 1 الصالة : المخزون المتاح", "فرع 1 الصالة : سيارات بها ملاحظات", "فرع 1 الصالة : مباع تحت التسليم",
  "فرع 2 الملتقى : المخزون المتاح", "فرع 2 الملتقى : سيارات بها ملاحظات", "فرع 2 الملتقى : مباع تحت التسليم",
  "فرع 3 القادسية : المخزون المتاح", "فرع 3 القادسية : سيارات بها ملاحظات", "فرع 3 القادسية : مباع تحت التسليم",
];

const ROLE_ADMIN = 'الادارة';
const ROLE_IDARI = 'اداري';
const SHOOT_ALLOWED_EMAIL = 'an9036663@gmail.com';

// ==========================================
// 2. تهيئة Firebase
// ==========================================
const app = initializeApp(FIREBASE_CONFIG);
const auth = getAuth(app);
const db = getFirestore(app);

// ==========================================
// 3. المكونات الفرعية (تم دمجها لملف واحد)
// ==========================================

// --- شاشة الدخول ---
const LoginView: React.FC<{ auth: Auth }> = ({ auth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setError('');
    try { await signInWithEmailAndPassword(auth, email, password); }
    catch (err: any) { setError('تأكد من البريد وكلمة المرور'); }
    finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm space-y-6 bg-white p-8 rounded-mzj border border-beige shadow-xl">
        <div className="text-center">
          <div className="bg-brown text-white w-16 h-16 rounded-mzj mx-auto flex items-center justify-center font-black text-2xl mb-4">MZJ</div>
          <h2 className="text-xl font-black text-brown">تسجيل الدخول</h2>
        </div>
        <form className="space-y-4" onSubmit={handleLogin}>
          <input type="email" placeholder="البريد الإلكتروني" className="w-full p-3 bg-cream border border-beige rounded-mzj text-sm" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="كلمة المرور" className="w-full p-3 bg-cream border border-beige rounded-mzj text-sm" value={password} onChange={(e) => setPassword(e.target.value)} required />
          {error && <p className="text-warn text-[10px] font-bold text-center">{error}</p>}
          <button type="submit" disabled={loading} className="w-full py-4 bg-brown text-white font-black rounded-mzj active-press">
            {loading ? <i className="fa-solid fa-spinner fa-spin"></i> : 'دخول'}
          </button>
        </form>
      </div>
    </div>
  );
};

// --- شاشة إنشاء طلب ---
const OrderCreationView: React.FC<{ db: Firestore, currentUser: User, userProfile: any, stock: any[], onOrderCreated: () => void }> = ({ db, currentUser, userProfile, stock, onOrderCreated }) => {
  const [rows, setRows] = useState<any[]>([{ kind: 'move', vin: '', note: '' }]);
  const [submitting, setSubmitting] = useState(false);
  const canShoot = userProfile?.role === ROLE_ADMIN || currentUser.email === SHOOT_ALLOWED_EMAIL;

  const handleVinBlur = (idx: number, vin: string) => {
    const clean = vin.trim().toUpperCase();
    const matched = stock.find((s: any) => s.vin.trim().toUpperCase() === clean);
    if (matched) {
      const u = [...rows];
      u[idx] = { ...u[idx], vin: clean, car: matched.car, variant: matched.variant, fromLocation: matched.location };
      setRows(u);
    }
  };

  const submit = async () => {
    const valid = rows.filter(r => r.vin && (r.kind === 'shoot' ? r.shootPlace : r.toLocation));
    if (!valid.length) return alert("يرجى إكمال البيانات");
    setSubmitting(true);
    try {
      const kind = valid.length > 1 && new Set(valid.map(r => r.kind)).size > 1 ? 'mixed' : valid[0].kind;
      const orderRef = await addDoc(collection(db, 'requests'), {
        kind, status: 'تحت المتابعة', createdAt: serverTimestamp(), updatedAt: serverTimestamp(),
        createdByUid: currentUser.uid, createdByEmail: currentUser.email, createdByName: userProfile?.name || currentUser.email, total: valid.length
      });
      const batch = writeBatch(db);
      valid.forEach(r => batch.set(doc(collection(orderRef, 'rows'), r.vin!), { ...r, steps: {}, updatedAt: serverTimestamp(), createdAt: serverTimestamp() }));
      await batch.commit(); onOrderCreated();
    } catch (e) { alert("حدث خطأ"); } finally { setSubmitting(false); }
  };

  return (
    <div className="space-y-4">
      <h2 className="font-black text-brown text-lg px-2">إنشاء طلب</h2>
      {rows.map((r, i) => (
        <div key={i} className="bg-white p-4 rounded-mzj border border-beige shadow-sm space-y-3">
          <div className="flex justify-between items-center"><span className="text-xs font-black">سيارة #{i+1}</span><button onClick={()=>setRows(rows.filter((_,idx)=>idx!==i))} className="text-warn text-xs"><i className="fa-solid fa-trash"></i></button></div>
          <div className="grid grid-cols-2 gap-2">
             <select className="text-xs p-2 bg-cream border rounded-mzj" value={r.kind} onChange={(e)=>{const u=[...rows]; u[i].kind=e.target.value; setRows(u);}}>
                {canShoot && <option value="shoot">تصوير</option>}
                <option value="move">نقل</option>
             </select>
             <input className="text-xs p-2 bg-cream border rounded-mzj font-mono" placeholder="VIN" value={r.vin} onChange={(e)=>{const u=[...rows]; u[i].vin=e.target.value; setRows(u);}} onBlur={(e)=>handleVinBlur(i, e.target.value)} />
          </div>
          <div className="p-2 bg-beige/10 rounded-mzj text-[10px] font-bold text-brown">{r.car ? `${r.car} (${r.fromLocation})` : 'أدخل VIN للتعبئة التلقائية'}</div>
          <select className="w-full text-xs p-2 bg-cream border rounded-mzj" onChange={(e)=>{const u=[...rows]; u[i][r.kind==='shoot'?'shootPlace':'toLocation']=e.target.value; setRows(u);}}>
            <option value="">— اختر الوجهة —</option>
            {SHOOT_PLACES.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
      ))}
      <button onClick={()=>setRows([...rows, {kind: 'move', vin:''}])} className="w-full py-3 bg-white border border-beige text-brown text-xs font-bold rounded-mzj">+ إضافة سيارة</button>
      <button onClick={submit} disabled={submitting} className="w-full py-4 bg-brown text-white font-black rounded-mzj shadow-lg active-press">{submitting ? 'جاري الإرسال...' : 'إرسال الطلب'}</button>
    </div>
  );
};

// --- شاشة المتابعة (تم حل مشكلة الـ Index هنا) ---
const ManageOrdersView: React.FC<{ db: Firestore, onOpen: (id: string) => void }> = ({ db, onOpen }) => {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // استعلام بسيط لا يحتاج لفهرسة مركبة
    const q = query(collection(db, 'requests'), where('status', '==', 'تحت المتابعة'));
    return onSnapshot(q, (snap) => {
      const list = snap.docs.map(d => ({ id: d.id, ...d.data() } as any));
      // الترتيب برمجياً لتجنب خطأ [failed-precondition]
      list.sort((a, b) => {
        const tA = a.updatedAt?.toMillis ? a.updatedAt.toMillis() : 0;
        const tB = b.updatedAt?.toMillis ? b.updatedAt.toMillis() : 0;
        return tB - tA;
      });
      setOrders(list); setLoading(false);
    });
  }, [db]);

  return (
    <div className="space-y-3">
      <h2 className="font-black text-brown text-lg px-2">قيد المتابعة</h2>
      {loading ? <div className="text-center py-10"><i className="fa-solid fa-spinner fa-spin"></i></div> : orders.map(o => (
        <button key={o.id} onClick={()=>onOpen(o.id)} className="w-full bg-white p-4 rounded-mzj border border-beige shadow-sm text-right active-press">
          <div className="flex justify-between items-center mb-1"><span className="font-black text-brown text-sm">#{o.id}</span><span className="text-[9px] bg-beige px-2 rounded-full font-bold">{o.kind}</span></div>
          <div className="text-[10px] text-muted">{o.createdByName} • {o.total} سيارات</div>
          <div className="text-[8px] text-muted mt-1">تحديث: {o.updatedAt?.toDate()?.toLocaleString('ar-SA')}</div>
        </button>
      ))}
    </div>
  );
};

// --- شاشة المكتملة ---
const CompletedOrdersView: React.FC<{ db: Firestore, onOpen: (id: string) => void }> = ({ db, onOpen }) => {
  const [orders, setOrders] = useState<any[]>([]);
  useEffect(() => {
    const q = query(collection(db, 'requests'), where('status', '==', 'مكتملة'), limit(20));
    return onSnapshot(q, (snap) => {
      const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      list.sort((a:any, b:any) => (b.finishedAt?.toMillis() || 0) - (a.finishedAt?.toMillis() || 0));
      setOrders(list);
    });
  }, [db]);

  return (
    <div className="space-y-3">
      <h2 className="font-black text-brown text-lg px-2">المكتملة</h2>
      {orders.map(o => (
        <button key={o.id} onClick={()=>onOpen(o.id)} className="w-full bg-white p-4 rounded-mzj border border-beige opacity-80 text-right active-press">
          <span className="font-black text-muted text-xs line-through">#{o.id}</span>
          <div className="text-[9px] text-muted">بواسطة: {o.createdByName}</div>
        </button>
      ))}
    </div>
  );
};

// --- تفاصيل الطلب ---
const OrderDetailsModal: React.FC<{ orderId: string, db: Firestore, currentUser: User, userProfile: any, onClose: () => void }> = ({ orderId, db, currentUser, userProfile, onClose }) => {
  const [order, setOrder] = useState<any>(null);
  const [rows, setRows] = useState<any[]>([]);

  useEffect(() => {
    const unsubReq = onSnapshot(doc(db, 'requests', orderId), (s) => setOrder(s.data()));
    const unsubRows = onSnapshot(collection(doc(db, 'requests', orderId), 'rows'), (s) => setRows(s.docs.map(d => d.data())));
    return () => { unsubReq(); unsubRows(); };
  }, [orderId]);

  const updateStep = async (step: number) => {
    const key = step === 1 ? 'received' : step === 2 ? 'sent' : 'carReceived';
    const batch = writeBatch(db);
    const info = { at: serverTimestamp(), byUid: currentUser.uid, byName: userProfile?.name || currentUser.email };
    rows.forEach(r => {
      const ref = doc(db, 'requests', orderId, 'rows', r.vin);
      batch.update(ref, { [`steps.${key}`]: info, updatedAt: serverTimestamp(), ...(step === 3 ? { location: (r.kind==='shoot'?r.shootPlace:r.toLocation) } : {}) });
    });
    batch.update(doc(db, 'requests', orderId), { updatedAt: serverTimestamp() });
    await batch.commit(); alert("تم التحديث ✅");
  };

  const finish = async () => {
    await updateDoc(doc(db, 'requests', orderId), { status: 'مكتملة', finishedAt: serverTimestamp(), updatedAt: serverTimestamp() });
    onClose();
  };

  if (!order) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-cream flex flex-col mobile-modal">
      <header className="bg-white p-4 border-b flex justify-between items-center shadow-md">
        <button onClick={onClose} className="text-brown text-xl"><i className="fa-solid fa-chevron-right"></i></button>
        <span className="font-black text-brown">طلب #{orderId}</span>
        <div className="w-6"></div>
      </header>
      <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-44">
        {rows.map((r, i) => (
          <div key={i} className="bg-white p-4 rounded-mzj border border-beige shadow-sm">
            <div className="font-mono font-black text-xs text-brown mb-2">{r.vin}</div>
            <div className="text-[10px] space-y-1">
              <div><span className="text-muted">المسار:</span> {r.fromLocation} → {r.kind==='shoot'?r.shootPlace:r.toLocation}</div>
              <div className="pt-2 flex gap-1">
                <span className={`px-2 py-0.5 rounded-full border ${r.steps?.received ? 'bg-green-50 text-green-700 border-green-200' : 'bg-cream'}`}>استلام</span>
                <span className={`px-2 py-0.5 rounded-full border ${r.steps?.sent ? 'bg-green-50 text-green-700 border-green-200' : 'bg-cream'}`}>إرسال</span>
                <span className={`px-2 py-0.5 rounded-full border ${r.steps?.carReceived ? 'bg-green-50 text-green-700 border-green-200' : 'bg-cream'}`}>وصول</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <footer className="fixed bottom-0 inset-x-0 bg-white border-t p-4 grid grid-cols-2 gap-2 shadow-2xl">
        <button onClick={()=>updateStep(1)} className="bg-brown text-white text-[10px] py-3 rounded-mzj font-black active-press">1. استلام</button>
        <button onClick={()=>updateStep(2)} className="bg-brown text-white text-[10px] py-3 rounded-mzj font-black active-press">2. إرسال</button>
        <button onClick={()=>updateStep(3)} className="bg-brown text-white text-[10px] py-3 rounded-mzj font-black active-press">3. استلام نهائي</button>
        <button onClick={finish} className="bg-ok text-white text-[10px] py-3 rounded-mzj font-black active-press">4. إنهاء الطلب</button>
      </footer>
    </div>
  );
};

// ==========================================
// 4. التطبيق الرئيسي
// ==========================================
const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<any>(null);
  const [tab, setTab] = useState<'create'|'manage'|'done'>('create');
  const [stock, setStock] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    return onAuthStateChanged(auth, async (u) => {
      if (u) {
        setUser(u);
        const s = await getDoc(doc(db, 'user', u.uid));
        if (s.exists()) setProfile(s.data());
      } else setUser(null);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!user) return;
    return onSnapshot(doc(db, 'mzj_admin_state', 'v1'), (s) => s.exists() && setStock(s.data().stock || []));
  }, [user]);

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-cream"><i className="fa-solid fa-circle-notch fa-spin text-brown text-3xl"></i></div>;
  if (!user) return <LoginView auth={auth} />;

  return (
    <div className="flex flex-col min-h-screen bg-cream pb-20">
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-white border-b border-beige shadow-sm">
        <div className="flex items-center gap-2">
          <div className="bg-brown text-white w-8 h-8 rounded-mzj flex items-center justify-center font-black text-xs">MZJ</div>
          <h1 className="text-xs font-black text-brown">Workspace Mobile</h1>
        </div>
        <button onClick={()=>signOut(auth)} className="text-muted text-sm"><i className="fa-solid fa-power-off"></i></button>
      </header>

      <main className="flex-1 p-4">
        {tab === 'create' && <OrderCreationView db={db} currentUser={user} userProfile={profile} stock={stock} onOrderCreated={()=>setTab('manage')} />}
        {tab === 'manage' && <ManageOrdersView db={db} onOpen={setSelectedId} />}
        {tab === 'done' && <CompletedOrdersView db={db} onOpen={setSelectedId} />}
      </main>

      <nav className="fixed bottom-0 inset-x-0 bg-white border-t border-beige flex justify-around py-3 shadow-xl z-50">
        <button onClick={()=>setTab('create')} className={`flex flex-col items-center gap-1 ${tab==='create'?'text-brown font-black':'text-muted opacity-50'}`}><i className="fa-solid fa-plus-circle text-lg"></i><span className="text-[9px]">إنشاء</span></button>
        <button onClick={()=>setTab('manage')} className={`flex flex-col items-center gap-1 ${tab==='manage'?'text-brown font-black':'text-muted opacity-50'}`}><i className="fa-solid fa-tasks text-lg"></i><span className="text-[9px]">المتابعة</span></button>
        <button onClick={()=>setTab('done')} className={`flex flex-col items-center gap-1 ${tab==='done'?'text-brown font-black':'text-muted opacity-50'}`}><i className="fa-solid fa-check-double text-lg"></i><span className="text-[9px]">المكتملة</span></button>
      </nav>

      {selectedId && <OrderDetailsModal orderId={selectedId} db={db} currentUser={user} userProfile={profile} onClose={()=>setSelectedId(null)} />}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
