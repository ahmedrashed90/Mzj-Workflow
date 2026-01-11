
import React, { useState, useEffect } from 'react';
import { db, fieldValue } from '../services/firebase';
import { formatDate } from '../services/utils';
import { RequestRow, StepInfo } from '../types';
import { updateStockLocationsAfterMoveFinish } from '../services/stockService';

interface RequestDetailProps {
  requestId: string;
  onClose: () => void;
  user: any;
  profile: any;
}

const RequestDetail: React.FC<RequestDetailProps> = ({ requestId, onClose, user, profile }) => {
  const [request, setRequest] = useState<any>(null);
  const [rows, setRows] = useState<RequestRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);

  useEffect(() => {
    const unsubReq = db.collection('requests').doc(requestId).onSnapshot(snap => {
      setRequest(snap.data());
    });
    const unsubRows = db.collection('requests').doc(requestId).collection('rows').onSnapshot(snap => {
      setRows(snap.docs.map(doc => ({ ...doc.data() } as RequestRow)));
      setLoading(false);
    });
    return () => { unsubReq(); unsubRows(); };
  }, [requestId]);

  const canDoStep = (row: RequestRow, step: number) => {
    if (profile?.role === 'الادارة') return true;
    
    const userLocs = profile?.locations || [];
    const src = row.fromLocation || row.location;
    const dst = row.kind === 'shoot' ? row.shootPlace : row.toLocation;

    if (step === 1 || step === 2) return userLocs.includes(src);
    if (step === 3) {
      if (row.kind === 'move') return request?.createdByEmail === user.email;
      return userLocs.includes(dst);
    }
    return false;
  };

  const handleStep = async (stepNo: number) => {
    const key = stepNo === 1 ? 'received' : (stepNo === 2 ? 'sent' : 'carReceived');
    const targets = rows.filter(r => canDoStep(r, stepNo) && !r.steps?.[key as keyof typeof r.steps]);

    if (!targets.length) {
      alert('لا توجد سيارات يمكنك تنفيذ هذه المرحلة لها حالياً.');
      return;
    }

    setActionLoading(true);
    try {
      const now = fieldValue.serverTimestamp();
      const batch = db.batch();
      const reqRef = db.collection('requests').doc(requestId);
      
      const stepObj: StepInfo = {
        at: now,
        byUid: user.uid,
        byEmail: user.email,
        byName: profile?.name || user.email
      };

      targets.forEach(t => {
        const rowRef = reqRef.collection('rows').doc(t.vin);
        const updateData: any = { 
          [`steps.${key}`]: stepObj,
          updatedAt: now 
        };
        
        // FIXED BUG: Update internal location in row document if step 3 is reached
        if (stepNo === 3) {
          const newLoc = t.kind === 'shoot' ? t.shootPlace : t.toLocation;
          if (newLoc) updateData.location = newLoc;
        }
        
        batch.update(rowRef, updateData);
      });

      batch.update(reqRef, { updatedAt: now });
      await batch.commit();

      // FIXED BUG: Sync with global inventory state for "Move" requests
      if (stepNo === 3) {
        const moveRows = targets.filter(r => r.kind === 'move');
        if (moveRows.length) {
          await updateStockLocationsAfterMoveFinish(moveRows);
        }
      }

      alert('تم تحديث المرحلة بنجاح ✅');
    } catch (err) {
      console.error(err);
      alert('حدث خطأ أثناء التحديث.');
    } finally {
      setActionLoading(false);
    }
  };

  const finishRequest = async () => {
    const isCompleted = rows.every(r => r.steps?.carReceived);
    if (!isCompleted) {
      alert('لا يمكن إنهاء الطلب إلا بعد استلام جميع السيارات.');
      return;
    }

    setActionLoading(true);
    try {
      await db.collection('requests').doc(requestId).update({
        status: 'مكتملة',
        finishedAt: fieldValue.serverTimestamp(),
        finishedByEmail: user.email,
        updatedAt: fieldValue.serverTimestamp()
      });
      alert('تم إغلاق الطلب بنجاح ✅');
    } catch (err) {
      console.error(err);
    } finally {
      setActionLoading(false);
    }
  };

  if (loading) return null;

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-stone-50 overflow-hidden animate-in slide-in-from-bottom duration-300">
      <header className="bg-white border-b border-stone-200 px-5 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center text-stone-400">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
          <h2 className="text-base font-black text-stone-800">تفاصيل الطلب #{requestId.slice(-5)}</h2>
        </div>
        <div className={`text-[10px] font-bold px-3 py-1 rounded-full ${request?.status === 'مكتملة' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
          {request?.status}
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* REQUEST SUMMARY CARD */}
        <div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-sm space-y-2">
           <div className="flex justify-between items-start">
              <div>
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-tighter">المنشئ</p>
                <p className="text-sm font-black text-stone-800">{request?.createdByName}</p>
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-tighter">النوع</p>
                <p className="text-sm font-black text-stone-800 uppercase tracking-tighter">{request?.kind}</p>
              </div>
           </div>
           <div>
             <p className="text-[10px] font-bold text-stone-400 uppercase tracking-tighter">التاريخ</p>
             <p className="text-xs text-stone-600">{formatDate(request?.createdAt)}</p>
           </div>
        </div>

        {/* ROWS LIST (PORTRAIT TABLE VIEW) */}
        <div className="space-y-3">
          <h3 className="text-xs font-black text-stone-500 uppercase px-1">السيارات المطلوبة ({rows.length})</h3>
          {rows.map((row, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 border border-stone-200 shadow-sm space-y-3">
              <div className="flex justify-between">
                <div className="font-mono text-xs font-bold text-stone-800">{row.vin}</div>
                <div className={`text-[9px] font-black px-2 py-0.5 rounded ${row.kind === 'shoot' ? 'bg-blue-50 text-blue-600' : 'bg-amber-50 text-amber-600'}`}>
                  {row.kind === 'shoot' ? 'تصوير' : 'نقل'}
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-black text-stone-800 leading-tight">{row.car}</p>
                <p className="text-[11px] text-stone-500">{row.variant} | {row.modelYear}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-[10px] pt-2 border-t border-stone-100">
                <div>
                  <p className="text-stone-400 font-bold">من (المصدر)</p>
                  <p className="text-stone-700 font-medium truncate">{row.fromLocation || row.location}</p>
                </div>
                <div>
                  <p className="text-stone-400 font-bold">إلى (الوجهة)</p>
                  <p className="text-stone-700 font-medium truncate">{row.kind === 'shoot' ? row.shootPlace : row.toLocation}</p>
                </div>
              </div>

              {/* Step Visualization for this Row */}
              <div className="flex items-center gap-1 mt-2">
                 <div className={`flex-1 h-1.5 rounded-full ${row.steps?.received ? 'bg-stone-800' : 'bg-stone-100'}`}></div>
                 <div className={`flex-1 h-1.5 rounded-full ${row.steps?.sent ? 'bg-stone-800' : 'bg-stone-100'}`}></div>
                 <div className={`flex-1 h-1.5 rounded-full ${row.steps?.carReceived ? 'bg-stone-800' : 'bg-stone-100'}`}></div>
              </div>
              <p className="text-[9px] text-stone-400 text-center font-bold">
                {row.steps?.carReceived ? 'مكتمل ✅' : row.steps?.sent ? 'تم الإرسال (في الطريق)' : row.steps?.received ? 'تم استلام الطلب' : 'بانتظار البدء'}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ACTION FOOTER */}
      <footer className="bg-white border-t border-stone-200 p-4 safe-bottom grid grid-cols-3 gap-2">
        <button 
          onClick={() => handleStep(1)}
          disabled={actionLoading}
          className="flex flex-col items-center justify-center p-2 bg-stone-100 text-stone-800 rounded-xl disabled:opacity-50"
        >
          <span className="text-[14px] font-black">1</span>
          <span className="text-[8px] font-bold">استلام طلب</span>
        </button>
        <button 
          onClick={() => handleStep(2)}
          disabled={actionLoading}
          className="flex flex-col items-center justify-center p-2 bg-stone-100 text-stone-800 rounded-xl disabled:opacity-50"
        >
          <span className="text-[14px] font-black">2</span>
          <span className="text-[8px] font-bold">إرسال سيارة</span>
        </button>
        <button 
          onClick={() => handleStep(3)}
          disabled={actionLoading}
          className="flex flex-col items-center justify-center p-2 bg-stone-100 text-stone-800 rounded-xl disabled:opacity-50"
        >
          <span className="text-[14px] font-black">3</span>
          <span className="text-[8px] font-bold">استلام سيارة</span>
        </button>
        {request?.status !== 'مكتملة' && (
          <button 
            onClick={finishRequest}
            disabled={actionLoading}
            className="col-span-3 py-3 mt-1 bg-stone-800 text-white rounded-xl text-xs font-black shadow-lg"
          >
            إغلاق الطلب نهائياً
          </button>
        )}
      </footer>
    </div>
  );
};

export default RequestDetail;
