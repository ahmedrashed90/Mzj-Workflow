
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, User, Auth } from 'firebase/auth';
import { getFirestore, collection, doc, onSnapshot, query, where, limit, addDoc, serverTimestamp, updateDoc, writeBatch, getDoc, Firestore } from 'firebase/firestore';

// ==========================================
// 1. TYPES & CONSTANTS
// ==========================================
export type OrderKind = 'shoot' | 'move' | 'mixed' | 'auto';
export type OrderStatus = 'تحت المتابعة' | 'مكتملة';
export type Role = 'الادارة' | 'اداري' | 'مدراء فروع';

export interface UserProfile { name: string; role: Role; locations: string[]; email: string; }
export interface OrderRowStep { at: any; byUid: string; byEmail: string; byName: string; }
export interface OrderRow {
  vin: string; kind: 'shoot' | 'move'; car: string; variant: string; extColor: string; intColor: string;
  modelYear: string; fromLocation: string; location: string; shootPlace?: string; toLocation?: string;
  note: string; steps: { received?: OrderRowStep; sent?: OrderRowStep; carReceived?: OrderRowStep; };
}
export interface Order {
  id: string; kind: OrderKind; status: OrderStatus; createdAt: any; updatedAt: any;
  createdByUid: string; createdByEmail: string; createdByName: string; total: number; finishedAt?: any;
}
export interface StockItem { vin: string; car: string; variant: string; extColor: string; intColor: string; modelYear: string; location: string; }

export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyC614bGqnYf4Q-weTNemzWENTpa8DjGeHw",
  authDomain: "mzj-agenda.firebaseapp.com",
  projectId: "mzj-agenda",
  storageBucket: "mzj-agenda.firebasestorage.app",
  messagingSenderId: "834700407721",
  appId: "1:834700407721:web:75c17665d4f032fd65cab8"
};

export const SHOOT_PLACES = [
  "المستودع : المخزون المتاح", "المستودع : سيارات بها ملاحظات", "المستودع : مباع تحت التسليم",
  "فرع 1 الصالة : المخزون المتاح", "فرع 1 الصالة : سيارات بها ملاحظات", "فرع 1 الصالة : مباع تحت التسليم",
  "فرع 2 الملتقى : المخزون المتاح", "فرع 2 الملتقى : سيارات بها ملاحظات", "فرع 2 الملتقى : مباع تحت التسليم",
  "فرع 3 القادسية : المخزون المتاح", "فرع 3 القادسية : سيارات بها ملاحظات", "فرع 3 القادسية : مباع تحت التسليم",
];

export const ROLE_ADMIN = 'الادارة';
export const ROLE_IDARI = 'اداري';
export const SHOOT_ALLOWED_EMAIL = 'an9036663@gmail.com';

// ==========================================
// 2. FIREBASE INIT
// ==========================================
const app = initializeApp(FIREBASE_CONFIG);
const auth = getAuth(app);
const db = getFirestore(app);

// ==========================================
// 3. COMPONENTS
// ==========================================

// --- LoginView ---
const LoginView: React.FC<{ auth: Auth }> = ({ auth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try { await signInWithEmailAndPassword(auth, email, password); }
    catch (err: any) { setError('خطأ في الدخول: تأكد من البريد وكلمة المرور'); }
    finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-6 text-brown">
      <div className="w-full max-w-sm space-y-8 bg-white p-8 rounded-mzj border border-beige shadow-xl">
        <div className="text-center">
          <div className="bg-brown text-white w-16 h-16 rounded-mzj mx-auto flex items-center justify-center font-black text-2xl mb-4">MZJ</div>
          <h2 className="text-2xl font-black">تسجيل الدخول</h2>
          <p className="text-muted text-sm mt-2">نظام إدارة طلبات التصوير والنقل</p>
        </div>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-bold mb-1">البريد الإلكتروني</label>
            <input type="email" className="w-full p-3 bg-cream border border-beige rounded-mzj" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">كلمة المرور</label>
            <input type="password" className="w-full p-3 bg-cream border border-beige rounded-mzj" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          {error && <div className="p-3 bg-warn/10 text-warn border border-warn/20 rounded-mzj text-sm font-bold">{error}</div>}
          <button type="submit" disabled={loading} className="w-full py-4 bg-brown text-white font-black rounded-mzj flex items-center justify-center gap-2 disabled:opacity-50">
            {loading ? <i className="fa-solid fa-circle-notch fa-spin"></i> : <i className="fa-solid fa-right-to-bracket"></i>} دخول للنظام
          </button>
        </form>
      </div>
    </div>
  );
};

// --- OrderCreationView ---
const OrderCreationView: React.FC<{ db: Firestore, currentUser: User, userProfile: UserProfile | null, stock: StockItem[], onOrderCreated: () => void }> = ({ db, currentUser, userProfile, stock, onOrderCreated }) => {
  const [rows, setRows] = useState<Partial<OrderRow>[]>([{ kind: 'shoot', vin: '', car: '', note: '' }]);
  const [submitting, setSubmitting] = useState(false);
  const canCreateShoot = () => userProfile?.role === ROLE_ADMIN || currentUser.email === SHOOT_ALLOWED_EMAIL;

  const handleVinBlur = (idx: number, vin: string) => {
    const cleanVin = vin.trim().toUpperCase().replace(/\s+/g, '');
    const updatedRows = [...rows];
    updatedRows[idx].vin = cleanVin;
    const matched = stock.find(s => s.vin.trim().toUpperCase() === cleanVin);
    if (matched) {
      updatedRows[idx] = { ...updatedRows[idx], car: matched.car, variant: matched.variant, extColor: matched.extColor, intColor: matched.intColor, modelYear: matched.modelYear, fromLocation: matched.location, location: matched.location };
    }
    setRows(updatedRows);
  };

  const updateRow = (idx: number, field: keyof OrderRow, value: any) => {
    const updatedRows = [...rows];
    updatedRows[idx] = { ...updatedRows[idx], [field]: value };
    setRows(updatedRows);
  };

  const handleSubmit = async () => {
    const validRows = rows.filter(r => r.vin && (r.kind === 'shoot' ? r.shootPlace : r.toLocation));
    if (!validRows.length) { alert("الرجاء ملء بيانات السيارة والمكان بشكل كامل."); return; }
    setSubmitting(true);
    try {
      const kinds = Array.from(new Set(validRows.map(r => r.kind)));
      const finalKind = kinds.length > 1 ? 'mixed' : kinds[0] as any;
      const orderRef = await addDoc(collection(db, 'requests'), { kind: finalKind, status: 'تحت المتابعة', createdAt: serverTimestamp(), updatedAt: serverTimestamp(), createdByUid: currentUser.uid, createdByEmail: currentUser.email, createdByName: userProfile?.name || currentUser.email, total: validRows.length });
      const batch = writeBatch(db);
      validRows.forEach((r) => { const rowRef = doc(collection(orderRef, 'rows'), r.vin!); batch.set(rowRef, { ...r, steps: {}, updatedAt: serverTimestamp(), createdAt: serverTimestamp() }); });
      await batch.commit();
      alert("تم إرسال الطلب بنجاح ✅");
      onOrderCreated();
    } catch (e) { console.error(e); alert("حدث خطأ."); }
    finally { setSubmitting(false); }
  };

  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-mzj border border-beige shadow-sm">
        <h2 className="font-black text-brown text-lg">إنشاء طلب جديد</h2>
        <p className="text-xs text-muted">أدخل رقم الهيكل لتعبئة البيانات تلقائياً.</p>
      </div>
      {rows.map((row, idx) => (
        <div key={idx} className="bg-white rounded-mzj border border-beige shadow-sm overflow-hidden">
          <div className="bg-beige/30 px-4 py-2 flex justify-between border-b border-beige">
            <span className="font-black text-brown text-xs">سيارة #{idx + 1}</span>
            <button onClick={() => setRows(rows.filter((_, i) => i !== idx))} className="text-warn text-xs">حذف</button>
          </div>
          <div className="p-4 space-y-3">
             <div className="grid grid-cols-2 gap-2">
                <select className="text-xs p-2 bg-cream border border-beige rounded-mzj" value={row.kind} onChange={(e) => updateRow(idx, 'kind', e.target.value)}>
                  {canCreateShoot() && <option value="shoot">تصوير</option>}
                  <option value="move">نقل</option>
                </select>
                <input className="text-xs p-2 bg-cream border border-beige rounded-mzj font-mono" placeholder="VIN" value={row.vin} onChange={(e) => updateRow(idx, 'vin', e.target.value)} onBlur={(e) => handleVinBlur(idx, e.target.value)} />
             </div>
             <div className="p-2 bg-cream/50 rounded-mzj text-[10px] font-bold text-brown"> {row.car ? `${row.car} - ${row.variant}` : 'بانتظار رقم الهيكل...'} </div>
             <select className="w-full text-xs p-2 bg-cream border border-beige rounded-mzj" value={row.kind === 'shoot' ? (row.shootPlace || '') : (row.toLocation || '')} onChange={(e) => updateRow(idx, row.kind === 'shoot' ? 'shootPlace' : 'toLocation', e.target.value)}>
                <option value="">— اختر الوجهة —</option>
                {SHOOT_PLACES.map(p => <option key={p} value={p}>{p}</option>)}
             </select>
             <input className="w-full text-xs p-2 bg-cream border border-beige rounded-mzj" placeholder="ملاحظات..." value={row.note} onChange={(e) => updateRow(idx, 'note', e.target.value)} />
          </div>
        </div>
      ))}
      <div className="pb-10 space-y-2">
        <button onClick={() => setRows([...rows, { kind: canCreateShoot() ? 'shoot' : 'move', vin: '', note: '' }])} className="w-full py-3 bg-white border border-beige text-brown font-black rounded-mzj text-xs shadow-sm">+ إضافة سيارة</button>
        <button onClick={handleSubmit} disabled={submitting} className="w-full py-4 bg-brown text-white font-black rounded-mzj shadow-lg disabled:opacity-50"> {submitting ? 'جاري الإرسال...' : 'إرسال الطلب'} </button>
      </div>
    </div>
  );
};

// --- ManageOrdersView ---
const ManageOrdersView: React.FC<{ db: Firestore, onOpenOrder: (id: string) => void }> = ({ db, onOpenOrder }) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'requests'), where('status', '==', 'تحت المتابعة'));
    const unsub = onSnapshot(q, (snap) => {
      const list: Order[] = [];
      snap.forEach(doc => list.push({ id: doc.id, ...doc.data() } as Order));
      list.sort((a, b) => {
        const tA = a.updatedAt?.toMillis ? a.updatedAt.toMillis() : (a.updatedAt?.seconds || 0) * 1000;
        const tB = b.updatedAt?.toMillis ? b.updatedAt.toMillis() : (b.updatedAt?.seconds || 0) * 1000;
        return tB - tA;
      });
      setOrders(list); setLoading(false);
    });
    return () => unsub();
  }, [db]);

  const filtered = orders.filter(o => o.id.toLowerCase().includes(search.toLowerCase()) || o.createdByName?.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-mzj border border-beige shadow-sm sticky top-[64px] z-40">
        <h2 className="font-black text-brown text-lg mb-2">طلبات المتابعة</h2>
        <input className="w-full text-xs p-2 bg-cream rounded-mzj border border-beige" placeholder="بحث برقم الطلب أو المنشئ..." value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      {loading ? <div className="text-center py-10"><i className="fa-solid fa-circle-notch fa-spin"></i></div> : (
        <div className="space-y-3">
          {filtered.map(o => (
            <button key={o.id} onClick={() => onOpenOrder(o.id)} className="w-full bg-white p-4 rounded-mzj border border-beige shadow-sm text-right flex flex-col gap-1 active:scale-[0.98]">
               <div className="flex justify-between items-center">
                 <span className="font-black text-brown text-sm">طلب #{o.id}</span>
                 <span className="text-[10px] bg-beige px-2 py-0.5 rounded-full font-bold">{o.kind === 'shoot' ? 'تصوير' : 'نقل'}</span>
               </div>
               <div className="text-[10px] text-muted">{o.createdByName} • {o.total} سيارات</div>
               <div className="text-[9px] text-muted">تحديث: {o.updatedAt?.toDate()?.toLocaleDateString('ar-SA')}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// --- CompletedOrdersView ---
const CompletedOrdersView: React.FC<{ db: Firestore, onOpenOrder: (id: string) => void }> = ({ db, onOpenOrder }) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'requests'), where('status', '==', 'مكتملة'), limit(50));
    const unsub = onSnapshot(q, (snap) => {
      const list: Order[] = []; snap.forEach(doc => list.push({ id: doc.id, ...doc.data() } as Order));
      list.sort((a, b) => {
        const tA = a.finishedAt?.toMillis ? a.finishedAt.toMillis() : (a.finishedAt?.seconds || 0) * 1000;
        const tB = b.finishedAt?.toMillis ? b.finishedAt.toMillis() : (b.finishedAt?.seconds || 0) * 1000;
        return tB - tA;
      });
      setOrders(list); setLoading(false);
    });
    return () => unsub();
  }, [db]);

  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-mzj border border-beige shadow-sm">
        <h2 className="font-black text-brown text-lg">الطلبات المكتملة</h2>
        <p className="text-[10px] text-muted">آخر 50 طلباً مكتمل.</p>
      </div>
      {loading ? <div className="text-center py-10"><i className="fa-solid fa-circle-notch fa-spin"></i></div> : (
        <div className="space-y-3">
          {orders.map(o => (
            <button key={o.id} onClick={() => onOpenOrder(o.id)} className="w-full bg-white p-4 rounded-mzj border border-beige shadow-sm text-right opacity-80 active:scale-[0.98]">
               <div className="flex justify-between items-center">
                 <span className="font-black text-muted text-sm line-through">#{o.id}</span>
                 <span className="text-[9px] text-green-700 bg-green-50 px-2 py-0.5 rounded-full border border-green-200">مكتمل</span>
               </div>
               <div className="text-[10px] text-muted">{o.createdByName}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// --- OrderDetailsModal ---
const OrderDetailsModal: React.FC<{ orderId: string, db: Firestore, currentUser: User, userProfile: UserProfile | null, onClose: () => void }> = ({ orderId, db, currentUser, userProfile, onClose }) => {
  const [order, setOrder] = useState<Order | null>(null);
  const [rows, setRows] = useState<OrderRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const reqRef = doc(db, 'requests', orderId);
    const unsubReq = onSnapshot(reqRef, (snap) => { if (snap.exists()) setOrder({ id: snap.id, ...snap.data() } as Order); });
    const unsubRows = onSnapshot(collection(reqRef, 'rows'), (snap) => {
      const list: OrderRow[] = []; snap.forEach(d => list.push({ ...d.data() } as OrderRow));
      setRows(list.sort((a,b) => a.vin.localeCompare(b.vin))); setLoading(false);
    });
    return () => { unsubReq(); unsubRows(); };
  }, [db, orderId]);

  const canDoStep = (row: OrderRow, stepNo: number) => {
    if (!userProfile || userProfile.role === ROLE_ADMIN) return true;
    if (userProfile.role !== ROLE_IDARI) return false;
    const src = row.fromLocation; const dst = row.kind === 'shoot' ? row.shootPlace : row.toLocation;
    if (stepNo === 1 || stepNo === 2) return userProfile.locations.includes(src);
    if (stepNo === 3) return row.kind === 'move' ? (order?.createdByEmail === currentUser.email) : userProfile.locations.includes(dst || '');
    return false;
  };

  const applyStep = async (stepNo: number) => {
    const key = stepNo === 1 ? 'received' : stepNo === 2 ? 'sent' : 'carReceived';
    const targets = rows.filter(r => canDoStep(r, stepNo) && !r.steps?.[key as keyof typeof r.steps]);
    if (!targets.length) { alert("لا توجد سيارات متاحة لتنفيذ هذه المرحلة."); return; }
    const batch = writeBatch(db); const now = serverTimestamp();
    const stepObj = { at: now, byUid: currentUser.uid, byEmail: currentUser.email, byName: userProfile?.name || currentUser.email };
    targets.forEach(r => {
      const rRef = doc(db, 'requests', orderId, 'rows', r.vin);
      batch.update(rRef, { [`steps.${key}`]: stepObj, updatedAt: now, ...(stepNo === 3 ? { location: (r.kind === 'shoot' ? r.shootPlace : r.toLocation) } : {}) });
    });
    batch.update(doc(db, 'requests', orderId), { updatedAt: now });
    await batch.commit(); alert("تم التحديث ✅");
  };

  const finish = async () => {
    if (!rows.every(r => r.steps?.carReceived)) { alert("يجب استلام جميع السيارات أولاً."); return; }
    await updateDoc(doc(db, 'requests', orderId), { status: 'مكتملة', finishedAt: serverTimestamp(), finishedByEmail: currentUser.email, finishedByName: userProfile?.name || currentUser.email, updatedAt: serverTimestamp() });
    alert("تم الإنهاء ✅"); onClose();
  };

  if (loading || !order) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-cream flex flex-col">
      <header className="bg-white border-b border-beige p-4 flex items-center justify-between">
        <button onClick={onClose} className="text-brown"><i className="fa-solid fa-arrow-right"></i></button>
        <span className="font-black text-brown">تفاصيل الطلب #{orderId}</span>
        <div className="w-6"></div>
      </header>
      <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-40">
        <div className="bg-white p-4 rounded-mzj border border-beige shadow-sm text-center">
            <h4 className="font-bold text-xs text-muted mb-1">التقدم الكلي</h4>
            <div className="text-lg font-black text-brown">{rows.filter(r => r.steps?.carReceived).length} / {rows.length}</div>
        </div>
        {rows.map((row, i) => (
          <div key={i} className={`bg-white rounded-mzj border p-4 shadow-sm ${canDoStep(row, 1) ? 'border-brown' : 'border-beige'}`}>
            <div className="font-mono text-xs font-black text-brown mb-2">{row.vin}</div>
            <div className="text-[10px] space-y-1">
              <div><span className="text-muted">السيارة:</span> {row.car}</div>
              <div><span className="text-muted">المسار:</span> {row.fromLocation} ← {row.kind === 'shoot' ? row.shootPlace : row.toLocation}</div>
              <div className="pt-2">
                 <span className={`px-2 py-0.5 rounded-full border text-[9px] font-bold ${row.steps?.carReceived ? 'bg-green-50 text-green-700' : 'bg-cream text-brown'}`}>
                    {row.steps?.carReceived ? 'مكتملة' : 'قيد المعالجة'}
                 </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <footer className="fixed bottom-0 inset-x-0 bg-white border-t border-beige p-4 grid grid-cols-2 gap-2 shadow-xl">
        <button onClick={() => applyStep(1)} className="bg-brown text-white text-[10px] py-3 rounded-mzj font-black">1. استلام الطلب</button>
        <button onClick={() => applyStep(2)} className="bg-brown text-white text-[10px] py-3 rounded-mzj font-black">2. إرسال السيارة</button>
        <button onClick={() => applyStep(3)} className="bg-brown text-white text-[10px] py-3 rounded-mzj font-black">3. استلام السيارة</button>
        <button onClick={finish} className="bg-ok text-white text-[10px] py-3 rounded-mzj font-black">4. إنهاء الطلب</button>
      </footer>
    </div>
  );
};

// ==========================================
// 4. MAIN APP
// ==========================================
const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [activeTab, setActiveTab] = useState<'create' | 'manage' | 'done'>('create');
  const [stock, setStock] = useState<StockItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

  useEffect(() => {
    return onAuthStateChanged(auth, async (u) => {
      if (u) {
        setCurrentUser(u);
        const docSnap = await getDoc(doc(db, 'user', u.uid));
        if (docSnap.exists()) setUserProfile(docSnap.data() as UserProfile);
      } else { setCurrentUser(null); }
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!currentUser) return;
    return onSnapshot(doc(db, 'mzj_admin_state', 'v1'), (snap) => {
      if (snap.exists()) setStock(snap.data().stock || []);
    });
  }, [currentUser]);

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-cream"><i className="fa-solid fa-circle-notch fa-spin text-brown text-3xl"></i></div>;
  if (!currentUser) return <LoginView auth={auth} />;

  return (
    <div className="flex flex-col min-h-screen bg-cream pb-20">
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-white border-b border-beige shadow-sm">
        <div className="flex items-center gap-3">
          <div className="bg-brown text-white w-8 h-8 rounded-mzj flex items-center justify-center font-black text-xs">MZJ</div>
          <h1 className="text-xs font-black text-brown">Workspace Mobile</h1>
        </div>
        <button onClick={() => signOut(auth)} className="text-brown text-sm"><i className="fa-solid fa-right-from-bracket"></i></button>
      </header>

      <main className="flex-1 p-4">
        {activeTab === 'create' && <OrderCreationView db={db} currentUser={currentUser} userProfile={userProfile} stock={stock} onOrderCreated={() => setActiveTab('manage')} />}
        {activeTab === 'manage' && <ManageOrdersView db={db} onOpenOrder={setSelectedOrderId} />}
        {activeTab === 'done' && <CompletedOrdersView db={db} onOpenOrder={setSelectedOrderId} />}
      </main>

      <nav className="fixed bottom-0 inset-x-0 bg-white border-t border-beige flex justify-around py-2 shadow-lg">
        <button onClick={() => setActiveTab('create')} className={`flex flex-col items-center gap-1 ${activeTab === 'create' ? 'text-brown font-bold' : 'text-muted'}`}>
          <i className="fa-solid fa-plus-circle text-lg"></i><span className="text-[10px]">إنشاء</span>
        </button>
        <button onClick={() => setActiveTab('manage')} className={`flex flex-col items-center gap-1 ${activeTab === 'manage' ? 'text-brown font-bold' : 'text-muted'}`}>
          <i className="fa-solid fa-list-check text-lg"></i><span className="text-[10px]">المتابعة</span>
        </button>
        <button onClick={() => setActiveTab('done')} className={`flex flex-col items-center gap-1 ${activeTab === 'done' ? 'text-brown font-bold' : 'text-muted'}`}>
          <i className="fa-solid fa-check-double text-lg"></i><span className="text-[10px]">المكتملة</span>
        </button>
      </nav>

      {selectedOrderId && <OrderDetailsModal orderId={selectedOrderId} db={db} currentUser={currentUser} userProfile={userProfile} onClose={() => setSelectedOrderId(null)} />}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
