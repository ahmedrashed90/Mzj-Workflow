
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';

const ActivityLog: React.FC = () => {
  const [logs, setLogs] = useState<any[]>([]);

  useEffect(() => {
    const unsub = db.collection('mzj_activity_log')
      .orderBy('ts', 'desc')
      .limit(50)
      .onSnapshot(snap => {
        setLogs(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      });
    return unsub;
  }, []);

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="bg-white border border-mzjLine p-4 rounded-xl">
        <h2 className="text-lg font-black text-mzjBrown">سجل النشاط</h2>
        <p className="text-xs text-gray-400">آخر 50 حركة في النظام</p>
      </div>

      <div className="flex flex-col gap-3">
        {logs.map(log => (
          <div key={log.id} className="bg-white border border-mzjLine p-3 rounded-xl shadow-sm text-xs">
            <div className="flex justify-between items-start mb-1">
              <span className="font-bold text-mzjBrown">{log.action}</span>
              <span className="text-[9px] text-gray-400">{log.ts ? new Date(log.ts.seconds * 1000).toLocaleString('ar-SA') : '—'}</span>
            </div>
            <p className="text-gray-600 mb-1">{log.details}</p>
            <div className="flex items-center gap-2 text-[9px] text-gray-400 pt-1 border-t border-mzjLine/50">
              <i className="fa-solid fa-circle-user"></i>
              <span>{log.userName || log.userEmail}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityLog;
