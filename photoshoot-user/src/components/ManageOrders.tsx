
import React, { useState, useEffect } from 'react';
import { db, fieldValue } from '../firebase';
import { UserProfile, PhotoshootRequest, RequestRow, UserRole } from '../types';

const ManageOrders: React.FC<{ user: any, profile: UserProfile | null }> = ({ user, profile }) => {
  const [requests, setRequests] = useState<PhotoshootRequest[]>([]);
  const [selectedRequest, setSelectedRequest] = useState<PhotoshootRequest | null>(null);
  const [rows, setRows] = useState<RequestRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeView, setActiveView] = useState<'pending' | 'completed'>('pending');

  useEffect(() => {
    const unsub = db.collection('requests').onSnapshot(snap => {
      const list = snap.docs.map(doc => ({ id: doc.id, ...doc.data() } as PhotoshootRequest));
      list.sort((a, b) => (b.updatedAt?.toMillis() || 0) - (a.updatedAt?.toMillis() || 0));
      setRequests(list);
    });
    return unsub;
  }, []);

  const openDetails = async (req: PhotoshootRequest) => {
    setSelectedRequest(req);
    const snap = await db.collection('requests').doc(req.id).collection('rows').get();
    setRows(snap.docs.map(doc => ({ __id: doc.id, ...doc.data() } as RequestRow)));
  };

  const closeDetails = () => {
    setSelectedRequest(null);
    setRows([]);
  };

  const isMyTurn = (row: RequestRow, stepNo: number) => {
    if (profile?.role === UserRole.ADMIN) return true;
    const myLocs = profile?.locations || [];
    const src = row.fromLocation || row.location || '';
    const dst = (row.kind === 'shoot' ? row.shootPlace : row.toLocation) || '';

    if (stepNo === 1 || stepNo === 2) return myLocs.includes(src);
    if (stepNo === 3) {
      if (row.kind === 'move') {
        return user.email === selectedRequest?.createdByEmail || user.email === 'coo@mzjcars.com';
      }
      return myLocs.includes(dst);
    }
    return false;
  };

  const applyStep = async (stepNo: number) => {
    if (!selectedRequest) return;
    const key = stepNo === 1 ? 'received' : stepNo === 2 ? 'sent' : 'carReceived';
    
    const targets = rows.filter(r => {
      const alreadyDone = !!(r.steps as any)?.[key]?.at;
      const canDo = isMyTurn(r, stepNo);
      const prevDone = stepNo === 1 ? true : stepNo === 2 ? !!r.steps.received?.at : !!r.steps.sent?.at;
      return canDo && !alreadyDone && prevDone;
    });

    if (!targets.length) return alert('لا تملك صلاحية لهذه المرحلة أو أنها مكتملة بالفعل أو لم تنتهِ المرحلة السابقة');

    setLoading(true);
    try {
      const batch = db.batch();
      const now = fieldValue.serverTimestamp();
      const stepData = { at: now, byUid: user.uid, byEmail: user.email, byName: profile?.name || user.email };

      targets.forEach(t => {
        const rowId = t.__id || t.vin;
        const ref = db.collection('requests').doc(selectedRequest.id).collection('rows').doc(rowId);
        
        const newLoc = (t.kind === 'shoot' ? t.shootPlace : t.toLocation) || '';
        const update: any = { [`steps.${key}`]: stepData, updatedAt: now };
        
        // Update local request row location at stage 3
        if (stepNo === 3 && newLoc) {
          update.location = newLoc;
        }
        batch.update(ref, update);
      });

      batch.update(db.collection('requests').doc(selectedRequest.id), { updatedAt: now });
      await batch.commit();

      // IF MOVE FINISHED (Stage 3): Sync with master inventory definitively
      if (stepNo === 3) {
        await updateInventoryState(targets);
      }

      alert(`تم تحديث المرحلة ${stepNo} لعدد ${targets.length} مركبة بنجاح`);
      openDetails(selectedRequest); // Refresh UI
    } catch (e) {
      console.error(e);
      alert('حدث خطأ أثناء تحديث الحالة');
    } finally {
      setLoading(false);
    }
  };

  const updateInventoryState = async (movedRows: RequestRow[]) => {
    const stateRef = db.collection('mzj_admin_state').doc('v1');
    try {
      await db.runTransaction(async (tx) => {
        const snap = await tx.get(stateRef);
        if (!snap.exists) return;
        const data = snap.data() || {};
        const stockArr: any[] = Array.isArray(data.stock) ? [...data.stock] : [];
        
        let changed = false;
        movedRows.forEach(row => {
          const vin = row.vin.trim().toUpperCase();
          const targetLoc = (row.kind === 'shoot' ? row.shootPlace : row.toLocation) || '';
          if (!targetLoc) return;

          const idx = stockArr.findIndex(s => s.vin.trim().toUpperCase() === vin);
          if (idx !== -1) {
            if (stockArr[idx].location !== targetLoc) {
              stockArr[idx] = { ...stockArr[idx], location: targetLoc };
              changed = true;
            }
          }
        });

        if (changed) {
          tx.update(stateRef, { stock: stockArr });
        }
      });
      console.log('Inventory Location Updated Successfully');
    } catch (e) {
      console.error('Inventory Sync Transaction Failed:', e);
      alert('تم تحديث الطلب ولكن فشل تحديث الموقع في المخزون الرئيسي، يرجى إبلاغ الإدارة');
    }
  };

  const finishRequest = async () => {
    if (!selectedRequest) return;
    const isCompleted = rows.every(r => !!r.steps.carReceived?.at);
    if (!isCompleted) return alert('الرجاء إتمام جميع المراحل لجميع المركبات (استلام السيارة) أولاً');

    setLoading(true);
    try {
      await db.collection('requests').doc(selectedRequest.id).update({
        finishedAt: fieldValue.serverTimestamp(),
        finishedByEmail: user.email,
        finishedByName: profile?.name || user.email,
        status: 'مكتملة',
        updatedAt: fieldValue.serverTimestamp()
      });
      alert('تم إنهاء الطلب وأرشفته بنجاح ✅');
      closeDetails();
    } catch (e) {
      alert('خطأ في إنهاء الطلب');
    } finally {
      setLoading(false);
    }
  };

  const filtered = requests.filter(r => activeView === 'pending' ? !r.finishedAt : !!r.finishedAt);

  return (
    <div className="p-4 pt-0">
      <div className="flex bg-white border border-mzjLine p-1 rounded-2xl mb-4 shadow-sm">
        <button 
          onClick={() => setActiveView('pending')}
          className={`flex-1 py-3 text-xs font-black rounded-xl transition-all ${activeView === 'pending' ? 'bg-mzjBrown text-white shadow-lg' : 'text-gray-400'}`}
        >
          تحت المتابعة
        </button>
        <button 
          onClick={() => setActiveView('completed')}
          className={`flex-1 py-3 text-xs font-black rounded-xl transition-all ${activeView === 'completed' ? 'bg-mzjBrown text-white shadow-lg' : 'text-gray-400'}`}
        >
          المكتملة
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {filtered.map(req => (
          <div key={req.id} onClick={() => openDetails(req)} className="bg-white border border-mzjLine p-4 rounded-2xl shadow-sm active:scale-[0.98] transition-all cursor-pointer">
            <div className="flex justify-between items-start mb-3">
              <div>
                <span className="text-xs font-black text-mzjBrown bg-mzjCream px-2 py-1 rounded-lg border border-mzjLine">#{req.id.slice(-5)}</span>
                <span className={`mr-2 text-[10px] px-2 py-1 rounded-full font-bold ${req.kind === 'move' ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-600'}`}>
                  {req.kind === 'move' ? 'نقل' : req.kind === 'shoot' ? 'تصوير' : 'مختلط'}
                </span>
              </div>
              <span className="text-[10px] text-gray-400 font-bold">{new Date(req.createdAt?.seconds * 1000).toLocaleDateString('ar-SA')}</span>
            </div>
            <div className="flex flex-col gap-1 text-xs">
              <p className="text-gray-600 font-bold"><i className="fa-solid fa-user-circle text-[12px] ml-1 opacity-40"></i> {req.createdByName}</p>
              {req.shootDate && <p className="text-gray-500"><i className="fa-solid fa-camera-retro text-[10px] ml-1 opacity-40"></i> موعد التصوير: <span className="font-black text-mzjBrown">{req.shootDate}</span></p>}
              <div className="flex items-center gap-2 mt-2">
                <span className="bg-mzjCream text-[9px] px-2 py-0.5 rounded border border-mzjLine text-gray-500">{req.total} سيارات</span>
                {req.notes && <p className="text-gray-400 italic text-[10px] line-clamp-1 border-r border-mzjLine pr-2">{req.notes}</p>}
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-20 flex flex-col items-center gap-2">
            <i className="fa-solid fa-box-open text-4xl text-mzjLine"></i>
            <p className="text-gray-400 font-bold">لا توجد طلبات في هذه القائمة</p>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedRequest && (
        <div className="fixed inset-0 z-[200] bg-black/70 flex items-end sm:items-center justify-center animate-in fade-in duration-200" onClick={closeDetails}>
          <div 
            className="bg-white w-full max-w-lg h-[92vh] sm:h-auto sm:max-h-[85vh] rounded-t-[2.5rem] sm:rounded-3xl flex flex-col overflow-hidden shadow-2xl animate-in slide-in-from-bottom duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-1 bg-mzjLine rounded-full mx-auto mt-3 mb-1"></div>
            <div className="p-5 border-b border-mzjLine flex items-center justify-between">
              <div>
                <h3 className="text-lg font-black text-mzjBrown">طلب #{selectedRequest.id.slice(-5)}</h3>
                <p className="text-[10px] text-gray-500 font-bold">بواسطة: {selectedRequest.createdByName}</p>
              </div>
              <button onClick={closeDetails} className="bg-mzjCream w-10 h-10 rounded-2xl flex items-center justify-center text-mzjBrown active:scale-90"><i className="fa-solid fa-xmark"></i></button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-4 no-scrollbar">
              {rows.map((row, idx) => {
                const s1 = !!row.steps?.received?.at;
                const s2 = !!row.steps?.sent?.at;
                const s3 = !!row.steps?.carReceived?.at;
                return (
                  <div key={row.__id} className="bg-mzjCream/40 border border-mzjLine p-4 rounded-2xl space-y-3 shadow-sm">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-[10px] font-black text-mzjBrown bg-white px-3 py-1 rounded-xl border border-mzjLine shadow-sm uppercase">{row.vin}</span>
                      <span className="text-[10px] text-gray-300 font-black tracking-widest">#{idx + 1}</span>
                    </div>
                    <div className="border-r-4 border-mzjBrown pr-3">
                      <h4 className="text-xs font-black text-mzjBrown">{row.car}</h4>
                      <p className="text-[10px] text-gray-500 font-bold">{row.variant}</p>
                    </div>
                    <div className="flex gap-2 items-center text-[10px] text-gray-500 bg-white/50 p-2 rounded-xl border border-mzjLine">
                      <div className="flex-1">
                        <p className="text-[8px] font-black text-gray-300 mb-0.5">من</p>
                        <p className="font-bold line-clamp-1">{row.fromLocation}</p>
                      </div>
                      <i className="fa-solid fa-circle-arrow-left text-mzjBrown opacity-30 text-lg"></i>
                      <div className="flex-1 text-left">
                        <p className="text-[8px] font-black text-gray-300 mb-0.5">إلى</p>
                        <p className="font-bold line-clamp-1">{row.kind === 'shoot' ? row.shootPlace : row.toLocation}</p>
                      </div>
                    </div>
                    
                    {/* Visual Progress Steps */}
                    <div className="pt-2">
                      <div className="flex gap-2 items-center mb-1">
                        <div className={`flex-1 h-1.5 rounded-full ${s1 ? 'bg-mzjBrown' : 'bg-gray-100'}`}></div>
                        <div className={`flex-1 h-1.5 rounded-full ${s2 ? 'bg-mzjBrown' : 'bg-gray-100'}`}></div>
                        <div className={`flex-1 h-1.5 rounded-full ${s3 ? 'bg-mzjBrown' : 'bg-gray-100'}`}></div>
                      </div>
                      <div className="grid grid-cols-3 text-[8px] font-black text-center">
                        <span className={s1 ? 'text-mzjBrown' : 'text-gray-300'}>1 استلام الطلب</span>
                        <span className={s2 ? 'text-mzjBrown' : 'text-gray-300'}>2 إرسال السيارة</span>
                        <span className={s3 ? 'text-mzjBrown' : 'text-gray-300'}>3 استلام السيارة</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-5 bg-mzjCream border-t border-mzjLine grid grid-cols-2 gap-3 pb-8">
              <button 
                onClick={() => applyStep(1)} 
                disabled={loading}
                className="bg-white border border-mzjLine text-mzjBrown font-black text-[10px] p-4 rounded-2xl active:bg-mzjBrown active:text-white transition-all disabled:opacity-30 shadow-sm"
              >
                1 تم استلام الطلب
              </button>
              <button 
                onClick={() => applyStep(2)} 
                disabled={loading}
                className="bg-white border border-mzjLine text-mzjBrown font-black text-[10px] p-4 rounded-2xl active:bg-mzjBrown active:text-white transition-all disabled:opacity-30 shadow-sm"
              >
                2 تم إرسال السيارة
              </button>
              <button 
                onClick={() => applyStep(3)} 
                disabled={loading}
                className="bg-white border border-mzjLine text-mzjBrown font-black text-[10px] p-4 rounded-2xl active:bg-mzjBrown active:text-white transition-all disabled:opacity-30 shadow-sm"
              >
                3 تم استلام السيارة
              </button>
              <button 
                onClick={finishRequest} 
                disabled={loading || !!selectedRequest.finishedAt}
                className="bg-mzjBrown text-white font-black text-[10px] p-4 rounded-2xl active:scale-[0.97] transition-all shadow-xl disabled:opacity-30"
              >
                <i className="fa-solid fa-check-double ml-1"></i> إنهاء الطلب كلياً
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageOrders;
