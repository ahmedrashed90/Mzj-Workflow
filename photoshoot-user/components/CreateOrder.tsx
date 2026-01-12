
import React, { useState, useEffect } from 'react';
import { db, fieldValue } from '../firebase';
import { UserProfile, StockItem } from '../types';

const SHOOT_PLACES = [
  "المستودع : المخزون المتاح", "المستودع : سيارات بها ملاحظات", "المستودع : مباع تحت التسليم",
  "فرع 1 الصالة : المخزون المتاح", "فرع 1 الصالة : سيارات بها ملاحظات", "فرع 1 الصالة : مباع تحت التسليم",
  "فرع 2 الملتقى : المخزون المتاح", "فرع 2 الملتقى : سيارات بها ملاحظات", "فرع 2 الملتقى : مباع تحت التسليم",
  "فرع 3 القادسية : المخزون المتاح", "فرع 3 القادسية : سيارات بها ملاحظات", "فرع 3 القادسية : مباع تحت التسليم"
];

const CreateOrder: React.FC<{ user: any, profile: UserProfile | null }> = ({ user, profile }) => {
  const [rows, setRows] = useState<any[]>([{ id: Date.now(), vin: '', kind: 'move', details: null, place: '', note: '' }]);
  const [stock, setStock] = useState<StockItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [shootDate, setShootDate] = useState(new Date().toISOString().split('T')[0]);
  const [activeVinSearch, setActiveVinSearch] = useState<{id: number, matches: StockItem[]}>({id: 0, matches: []});

  useEffect(() => {
    const unsub = db.collection('mzj_admin_state').doc('v1').onSnapshot(snap => {
      if (snap.exists) {
        setStock(snap.data()?.stock || []);
      }
    });
    return unsub;
  }, []);

  const addRow = () => setRows([...rows, { id: Date.now(), vin: '', kind: 'move', details: null, place: '', note: '' }]);
  
  const updateRow = (id: number, field: string, value: any) => {
    setRows(prev => prev.map(r => {
      if (r.id === id) {
        const updated = { ...r, [field]: value };
        if (field === 'vin') {
          const norm = value.trim().toUpperCase();
          if (norm.length >= 3) {
            const matches = stock.filter(s => s.vin.toUpperCase().includes(norm)).slice(0, 5);
            setActiveVinSearch({ id, matches });
          } else {
            setActiveVinSearch({ id: 0, matches: [] });
          }
          const found = stock.find(s => s.vin.toUpperCase() === norm);
          updated.details = found || null;
        }
        return updated;
      }
      return r;
    }));
  };

  const selectVinMatch = (rowId: number, item: StockItem) => {
    setRows(prev => prev.map(r => r.id === rowId ? { ...r, vin: item.vin, details: item } : r));
    setActiveVinSearch({ id: 0, matches: [] });
  };

  const removeRow = (id: number) => {
    if (rows.length > 1) setRows(rows.filter(r => r.id !== id));
  };

  const handleSubmit = async () => {
    const validRows = rows.filter(r => r.vin && r.place);
    if (!validRows.length) return alert('أدخل VIN والوجهة لصف واحد على الأقل');
    
    setLoading(true);
    try {
      const vins = validRows.map(r => r.vin.trim().toUpperCase());
      const globalKind = validRows.every(r => r.kind === 'shoot') ? 'shoot' : validRows.every(r => r.kind === 'move') ? 'move' : 'mixed';
      
      const reqRef = await db.collection('requests').add({
        kind: globalKind,
        status: 'تحت المتابعة',
        createdAt: fieldValue.serverTimestamp(),
        updatedAt: fieldValue.serverTimestamp(),
        createdByUid: user.uid,
        createdByEmail: user.email,
        createdByName: profile?.name || user.email,
        total: validRows.length,
        shootDate: validRows.some(r => r.kind === 'shoot') ? shootDate : '',
        vins,
        notes: validRows.map(r => r.note).filter(Boolean).join(' | ').slice(0, 300)
      });

      const batch = db.batch();
      validRows.forEach(r => {
        const rowData = {
          vin: r.vin.trim().toUpperCase(),
          kind: r.kind,
          car: r.details?.car || '',
          variant: r.details?.variant || '',
          extColor: r.details?.extColor || '',
          intColor: r.details?.intColor || '',
          modelYear: r.details?.modelYear || '',
          location: r.details?.location || '',
          fromLocation: r.details?.location || '',
          shootPlace: r.kind === 'shoot' ? r.place : '',
          toLocation: r.kind === 'move' ? r.place : '',
          note: r.note || '',
          steps: {},
          updatedAt: fieldValue.serverTimestamp(),
          createdAt: fieldValue.serverTimestamp()
        };
        batch.set(reqRef.collection('rows').doc(rowData.vin), rowData);
      });
      await batch.commit();

      alert('تم إرسال الطلب بنجاح ✅');
      setRows([{ id: Date.now(), vin: '', kind: 'move', details: null, place: '', note: '' }]);
    } catch (e) {
      alert('خطأ في إرسال الطلب');
    } finally {
      setLoading(false);
    }
  };

  const isGlobalShootActive = rows.some(r => r.kind === 'shoot');

  return (
    <div className="p-4 flex flex-col gap-4">
      {/* Date and Header */}
      <div className="bg-white border border-mzjLine p-5 rounded-2xl shadow-sm">
        <h2 className="text-xl font-black text-mzjBrown mb-3">إنشاء طلب جديد</h2>
        {isGlobalShootActive && (
          <div className="flex flex-col gap-2 animate-in slide-in-from-top duration-200">
            <label className="text-[11px] font-black text-gray-400">تاريخ التصوير المتوقع</label>
            <input 
              type="date" 
              value={shootDate}
              onChange={(e) => setShootDate(e.target.value)}
              className="w-full p-3 border border-mzjLine rounded-xl bg-mzjCream text-sm font-bold outline-none focus:ring-2 focus:ring-mzjBrown/20" 
            />
          </div>
        )}
        {!isGlobalShootActive && <p className="text-[10px] text-gray-400 font-bold">تاريخ التصوير يظهر عند اختيار نوع "تصوير"</p>}
      </div>

      {/* Row Cards */}
      <div className="flex flex-col gap-4">
        {rows.map((row, index) => (
          <div key={row.id} className="bg-white border border-mzjLine p-5 rounded-[2rem] relative shadow-sm overflow-visible">
            <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
              <span className="text-[10px] bg-mzjCream px-3 py-1 rounded-full font-black text-mzjBrown border border-mzjLine">#{index + 1}</span>
              <button onClick={() => removeRow(row.id)} className="text-red-300 p-2 active:scale-90 transition-transform"><i className="fa-solid fa-trash-can text-sm"></i></button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              {/* Kind FIRST */}
              <div className="col-span-1">
                <label className="text-[11px] font-black text-mzjBrown mb-1.5 block">نوع الطلب</label>
                <select 
                  value={row.kind}
                  onChange={(e) => updateRow(row.id, 'kind', e.target.value)}
                  className="w-full p-3 border border-mzjLine rounded-2xl bg-mzjCream text-xs font-black outline-none appearance-none"
                >
                  <option value="move">نقل سيارة</option>
                  <option value="shoot">تصوير فقط</option>
                </select>
              </div>

              {/* Destination */}
              <div className="col-span-1">
                <label className="text-[11px] font-black text-mzjBrown mb-1.5 block">الوجهة</label>
                <select 
                  value={row.place}
                  onChange={(e) => updateRow(row.id, 'place', e.target.value)}
                  className="w-full p-3 border border-mzjLine rounded-2xl bg-mzjCream text-xs font-black outline-none"
                >
                  <option value="">اختر الوجهة</option>
                  {SHOOT_PLACES.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>

              {/* VIN with AUTOCOMPLETE */}
              <div className="col-span-2 relative">
                <label className="text-[11px] font-black text-mzjBrown mb-1.5 block">رقم الهيكل (VIN)</label>
                <div className="relative">
                  <input 
                    type="text"
                    value={row.vin}
                    onChange={(e) => updateRow(row.id, 'vin', e.target.value)}
                    placeholder="أدخل VIN..."
                    className="w-full p-3 pr-4 border border-mzjLine rounded-2xl bg-mzjCream text-xs font-mono uppercase font-black outline-none focus:ring-2 focus:ring-mzjBrown/20"
                  />
                  {activeVinSearch.id === row.id && activeVinSearch.matches.length > 0 && (
                    <div className="absolute top-full left-0 right-0 z-[110] mt-2 bg-white border border-mzjLine rounded-2xl shadow-2xl overflow-hidden divide-y divide-mzjLine animate-in fade-in slide-in-from-top-2">
                      {activeVinSearch.matches.map(m => (
                        <button
                          key={m.vin}
                          onClick={() => selectVinMatch(row.id, m)}
                          className="w-full p-4 text-right hover:bg-mzjCream active:bg-mzjBeige flex flex-col gap-1"
                        >
                          <span className="text-xs font-black text-mzjBrown font-mono tracking-wider">{m.vin}</span>
                          <div className="flex justify-between items-center w-full">
                            <span className="text-[10px] text-gray-500 font-bold">{m.car}</span>
                            <span className="text-[9px] bg-mzjCream px-2 py-0.5 rounded border border-mzjLine font-black">{m.location}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {row.details && (
                <div className="col-span-2 bg-mzjCream/60 p-4 rounded-2xl border border-mzjLine border-dashed animate-in zoom-in-95 duration-300">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-1">
                      <p className="font-black text-sm text-mzjBrown">{row.details.car}</p>
                      <p className="text-[10px] text-gray-500 font-bold">{row.details.variant}</p>
                    </div>
                    <span className="bg-white px-2 py-1 rounded-lg border border-mzjLine font-black text-xs">{row.details.modelYear}</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-mzjLine/50 flex items-center justify-between">
                    <p className="text-[10px] text-gray-500 font-bold"><i className="fa-solid fa-location-dot ml-1 text-mzjBrown opacity-40"></i> الموقع: <span className="font-black text-mzjBrown">{row.details.location}</span></p>
                    <p className="text-[10px] text-gray-400 font-black">{row.details.extColor} / {row.details.intColor}</p>
                  </div>
                </div>
              )}

              <div className="col-span-2">
                <label className="text-[11px] font-black text-mzjBrown mb-1.5 block">ملاحظات</label>
                <input 
                  type="text"
                  value={row.note}
                  onChange={(e) => updateRow(row.id, 'note', e.target.value)}
                  placeholder="ملاحظات اختيارية..."
                  className="w-full p-3 border border-mzjLine rounded-2xl bg-mzjCream text-xs font-bold outline-none"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button 
        onClick={addRow}
        className="w-full py-5 border-2 border-dashed border-mzjLine rounded-3xl text-mzjBrown font-black text-xs active:bg-mzjBeige/20 transition-all flex items-center justify-center gap-3"
      >
        <div className="w-8 h-8 rounded-full bg-mzjCream flex items-center justify-center text-mzjBrown border border-mzjLine shadow-sm">
          <i className="fa-solid fa-plus"></i>
        </div>
        إضافة سيارة أخرى للطلب
      </button>

      <div className="sticky bottom-4 z-50">
        <button 
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-mzjBrown text-white font-black py-5 rounded-3xl shadow-2xl active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-3"
        >
          {loading ? (
            <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
          ) : (
            <><i className="fa-solid fa-paper-plane text-lg opacity-80"></i> إرسال الطلب للمتابعة</>
          )}
        </button>
      </div>
    </div>
  );
};

export default CreateOrder;
