
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { StockItem } from '../types';

const InventoryLookup: React.FC = () => {
  const [stock, setStock] = useState<StockItem[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = db.collection('mzj_admin_state').doc('v1').onSnapshot(snap => {
      if (snap.exists) {
        setStock(snap.data()?.stock || []);
      }
      setLoading(false);
    });
    return unsub;
  }, []);

  const filtered = stock.filter(s => 
    s.vin.toLowerCase().includes(search.toLowerCase()) || 
    s.car.toLowerCase().includes(search.toLowerCase()) ||
    s.location.toLowerCase().includes(search.toLowerCase())
  ).slice(0, 50);

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="bg-white border border-mzjLine p-4 rounded-xl shadow-sm sticky top-16 z-40">
        <h2 className="text-lg font-black text-mzjBrown mb-3">البحث في المخزون</h2>
        <div className="relative">
          <i className="fa-solid fa-magnifying-glass absolute right-3 top-3 text-gray-400"></i>
          <input 
            type="text" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2.5 pr-10 border border-mzjLine rounded-xl bg-mzjCream text-sm"
            placeholder="ابحث بـ VIN أو اسم السيارة أو المكان..."
          />
        </div>
        <p className="text-[10px] text-gray-400 mt-2">إجمالي السيارات المتاحة: {stock.length}</p>
      </div>

      <div className="flex flex-col gap-3">
        {loading ? (
          <div className="text-center py-20 text-mzjBrown font-bold">جاري تحميل المخزون...</div>
        ) : filtered.map(item => (
          <div key={item.vin} className="bg-white border border-mzjLine p-3 rounded-xl flex flex-col gap-1 shadow-sm">
            <div className="flex justify-between">
              <span className="text-[10px] font-black text-gray-400 font-mono">{item.vin}</span>
              <span className="text-[10px] bg-mzjBeige/50 px-2 py-0.5 rounded font-bold text-mzjBrown">{item.modelYear}</span>
            </div>
            <h3 className="text-sm font-black text-mzjBrown">{item.car}</h3>
            <p className="text-xs text-gray-500">{item.variant}</p>
            <div className="mt-2 pt-2 border-t border-mzjLine/50 flex items-center justify-between">
              <span className="text-[10px] text-mzjBrown"><i className="fa-solid fa-palette ml-1"></i> {item.extColor} / {item.intColor}</span>
              <span className="text-[10px] font-black bg-mzjCream px-2 py-1 rounded-lg border border-mzjLine text-mzjBrown">
                <i className="fa-solid fa-location-dot ml-1"></i> {item.location}
              </span>
            </div>
          </div>
        ))}
        {filtered.length === 0 && !loading && (
          <div className="text-center py-20 text-gray-400">لا توجد نتائج مطابقة</div>
        )}
      </div>
    </div>
  );
};

export default InventoryLookup;
