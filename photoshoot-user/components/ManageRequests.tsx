
import React, { useState, useEffect } from 'react';
import { db } from '../services/firebase';
import { formatDate } from '../services/utils';
import RequestDetail from './RequestDetail';

interface ManageRequestsProps {
  user: any;
  profile: any;
  statusFilter: 'تحت المتابعة' | 'مكتملة';
  title: string;
}

const ManageRequests: React.FC<ManageRequestsProps> = ({ user, profile, statusFilter, title }) => {
  const [requests, setRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedReqId, setSelectedReqId] = useState<string | null>(null);
  const [typeFilter, setTypeFilter] = useState<'all' | 'shoot' | 'move'>('all');

  useEffect(() => {
    /**
     * FIXED: To avoid the Firestore Index Error (Composite Index Requirement),
     * we query by 'updatedAt' only and perform the 'status' filtering in memory.
     * This ensures the app works immediately without needing manual index creation in the console.
     */
    const unsub = db.collection('requests')
      .orderBy('updatedAt', 'desc')
      .limit(150) // Fetch a larger batch to ensure we have enough items after filtering
      .onSnapshot(snap => {
        const list = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setRequests(list);
        setLoading(false);
      }, err => {
        console.error("Firestore Error:", err);
        setLoading(false);
      });
    return () => unsub();
  }, []); // Remove statusFilter from dependency if we want to fetch once and filter in JS

  // Filter by status (Active/Completed) AND by type (Shoot/Move)
  const filtered = requests.filter(r => {
    const matchesStatus = r.status === statusFilter;
    const matchesType = typeFilter === 'all' || r.kind === typeFilter;
    return matchesStatus && matchesType;
  });

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-end px-1">
        <h2 className="text-lg font-black text-stone-800">{title}</h2>
        <p className="text-[10px] font-bold text-stone-400 uppercase">{filtered.length} طلب</p>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2">
        <button 
          onClick={() => setTypeFilter('all')}
          className={`flex-shrink-0 px-4 py-2 rounded-full text-[11px] font-bold border transition-all ${typeFilter === 'all' ? 'bg-stone-800 text-white border-stone-800 shadow-md shadow-stone-200' : 'bg-white text-stone-500 border-stone-200'}`}
        >الكل</button>
        <button 
          onClick={() => setTypeFilter('shoot')}
          className={`flex-shrink-0 px-4 py-2 rounded-full text-[11px] font-bold border transition-all ${typeFilter === 'shoot' ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-100' : 'bg-white text-stone-500 border-stone-200'}`}
        >تصوير</button>
        <button 
          onClick={() => setTypeFilter('move')}
          className={`flex-shrink-0 px-4 py-2 rounded-full text-[11px] font-bold border transition-all ${typeFilter === 'move' ? 'bg-amber-600 text-white border-amber-600 shadow-md shadow-amber-100' : 'bg-white text-stone-500 border-stone-200'}`}
        >نقل</button>
      </div>

      <div className="space-y-3">
        {loading ? (
          <div className="flex flex-col items-center py-20 text-stone-300">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-stone-400 mb-4"></div>
            <p className="text-xs font-bold">جاري تحميل البيانات...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 text-center border border-dashed border-stone-200">
            <i className="fa-solid fa-folder-open text-3xl text-stone-100 mb-3"></i>
            <p className="text-xs text-stone-400 font-bold">لا توجد طلبات في هذا القسم حالياً</p>
          </div>
        ) : (
          filtered.map(req => (
            <div 
              key={req.id} 
              onClick={() => setSelectedReqId(req.id)}
              className="bg-white rounded-2xl p-4 border border-stone-200 shadow-sm flex items-center justify-between active:scale-[0.98] transition-transform"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-tighter ${req.kind === 'shoot' ? 'bg-blue-50 text-blue-600' : 'bg-amber-50 text-amber-600'}`}>
                    {req.kind === 'shoot' ? 'تصوير' : 'نقل'}
                  </span>
                  <span className="text-stone-300 text-[10px] font-mono">#{req.id.slice(-5).toUpperCase()}</span>
                </div>
                <h3 className="text-sm font-black text-stone-800 line-clamp-1">{req.createdByName || '—'}</h3>
                <p className="text-[10px] text-stone-400 font-bold">{formatDate(req.updatedAt)}</p>
                <div className="mt-2 flex gap-1">
                   {req.vins?.slice(0,3).map((v:string) => (
                     <span key={v} className="text-[8px] bg-stone-50 border border-stone-100 text-stone-500 px-1.5 py-0.5 rounded font-mono">
                       {v.slice(-6)}
                     </span>
                   ))}
                   {req.vins?.length > 3 && <span className="text-[8px] text-stone-400 font-bold">+{req.vins.length - 3}</span>}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-left flex flex-col items-end">
                   <div className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center text-stone-300">
                     <i className="fa-solid fa-chevron-left text-[10px]"></i>
                   </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {selectedReqId && (
        <RequestDetail 
          requestId={selectedReqId} 
          onClose={() => setSelectedReqId(null)} 
          user={user}
          profile={profile}
        />
      )}
    </div>
  );
};

export default ManageRequests;
