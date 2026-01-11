
import React, { useState, useEffect } from 'react';
import { db, fieldValue } from '../services/firebase';
import { SHOOT_PLACES } from '../constants';
import { normalizeVin, stripLeadingZeros } from '../services/utils';
import { RequestRow, UserProfile, StockItem } from '../types';

interface CreateRequestProps {
  user: any;
  profile: UserProfile | null;
}

const CreateRequest: React.FC<CreateRequestProps> = ({ user, profile }) => {
  const [rows, setRows] = useState<Partial<RequestRow>[]>([{ 
    kind: 'shoot', 
    vin: '', 
    car: '', 
    variant: '', 
    extColor: '', 
    intColor: '', 
    modelYear: '', 
    location: '', 
    shootPlace: '', 
    toLocation: '', 
    note: '' 
  }]);
  const [stock, setStock] = useState<StockItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [shootDate, setShootDate] = useState(new Date().toISOString().split('T')[0]);

  useEffect(() => {
    const unsub = db.collection('mzj_admin_state').doc('v1').onSnapshot(snap => {
      const data = snap.data();
      if (data && data.stock) {
        setStock(data.stock);
      }
    });
    return () => unsub();
  }, []);

  const handleVinBlur = (index: number) => {
    const vin = normalizeVin(rows[index].vin || "");
    const stripped = stripLeadingZeros(vin);
    
    // Search stock for match
    const found = stock.find(s => 
      normalizeVin(s.vin) === vin || 
      stripLeadingZeros(s.vin) === stripped
    );

    if (found) {
      const newRows = [...rows];
      newRows[index] = {
        ...newRows[index],
        car: found.car,
        variant: found.variant,
        extColor: found.extColor,
        intColor: found.intColor,
        modelYear: found.modelYear,
        location: found.location,
        fromLocation: found.location
      };
      setRows(newRows);
    }
  };

  const updateRow = (index: number, field: keyof RequestRow, value: any) => {
    const newRows = [...rows];
    newRows[index] = { ...newRows[index], [field]: value };
    setRows(newRows);
  };

  const addRow = () => {
    setRows([...rows, { kind: 'shoot', vin: '', note: '' }]);
  };

  const removeRow = (index: number) => {
    if (rows.length === 1) {
      setRows([{ kind: 'shoot', vin: '', car: '', note: '' }]);
    } else {
      setRows(rows.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = async () => {
    const validRows = rows.filter(r => r.vin && r.vin.length > 3);
    if (!validRows.length) {
      alert('الرجاء إدخال VIN صحيح.');
      return;
    }

    const missingDest = validRows.some(r => r.kind === 'shoot' ? !r.shootPlace : !r.toLocation);
    if (missingDest) {
      alert('الرجاء اختيار الوجهة لكل سيارة.');
      return;
    }

    setLoading(true);
    try {
      const mainKind = validRows.every(r => r.kind === 'shoot') ? 'shoot' : 
                       validRows.every(r => r.kind === 'move') ? 'move' : 'mixed';

      const reqRef = await db.collection('requests').add({
        kind: mainKind,
        status: 'تحت المتابعة',
        createdAt: fieldValue.serverTimestamp(),
        updatedAt: fieldValue.serverTimestamp(),
        createdByUid: user.uid,
        createdByEmail: user.email,
        createdByName: profile?.name || user.email,
        total: validRows.length,
        shootDate: mainKind === 'move' ? '' : shootDate,
        vins: validRows.map(r => r.vin)
      });

      const batch = db.batch();
      validRows.forEach(r => {
        const rowId = normalizeVin(r.vin!);
        const rowRef = reqRef.collection('rows').doc(rowId);
        batch.set(rowRef, {
          ...r,
          vin: rowId,
          steps: {},
          createdAt: fieldValue.serverTimestamp(),
          updatedAt: fieldValue.serverTimestamp()
        });
      });
      await batch.commit();

      alert('تم إرسال الطلب بنجاح ✅');
      setRows([{ kind: 'shoot', vin: '', car: '' }]);
    } catch (err) {
      console.error(err);
      alert('حدث خطأ أثناء الإرسال.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-black text-stone-800">إنشاء طلب جديد</h2>
          <button 
            onClick={addRow}
            className="w-10 h-10 bg-stone-100 text-stone-800 rounded-xl flex items-center justify-center shadow-sm"
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>

        <div className="space-y-4 mb-6">
          <label className="block text-xs font-bold text-stone-500 uppercase">تاريخ التصوير (إن وجد)</label>
          <input 
            type="date"
            value={shootDate}
            onChange={(e) => setShootDate(e.target.value)}
            className="w-full px-4 py-3 bg-stone-50 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-800"
          />
        </div>

        {/* PORTRAIT TABLE VIEW (CARDS) */}
        <div className="space-y-4">
          {rows.map((row, idx) => (
            <div key={idx} className="relative bg-stone-50 rounded-2xl p-4 border border-stone-200 space-y-3">
              <button 
                onClick={() => removeRow(idx)}
                className="absolute top-3 left-3 w-8 h-8 bg-red-50 text-red-500 rounded-lg flex items-center justify-center text-sm"
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>

              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-1">
                  <label className="block text-[10px] font-bold text-stone-400 mb-1">النوع</label>
                  <select 
                    value={row.kind}
                    onChange={(e) => updateRow(idx, 'kind', e.target.value)}
                    className="w-full text-xs px-2 py-2 bg-white rounded-lg border border-stone-200 outline-none"
                  >
                    <option value="shoot">تصوير</option>
                    <option value="move">نقل</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label className="block text-[10px] font-bold text-stone-400 mb-1">VIN (الشاصي)</label>
                  <input 
                    value={row.vin}
                    onChange={(e) => updateRow(idx, 'vin', e.target.value)}
                    onBlur={() => handleVinBlur(idx)}
                    className="w-full text-xs px-2 py-2 bg-white rounded-lg border border-stone-200 outline-none font-mono"
                    placeholder="رقم الشاصي"
                  />
                </div>
              </div>

              {row.car && (
                <div className="p-2 bg-white rounded-lg border border-stone-100">
                  <p className="text-[11px] font-bold text-stone-800">{row.car}</p>
                  <p className="text-[10px] text-stone-500">{row.variant} | {row.modelYear}</p>
                  <p className="text-[10px] text-stone-500 mt-1"><i className="fa-solid fa-location-dot mr-1"></i> {row.location}</p>
                </div>
              )}

              <div className="space-y-1">
                <label className="block text-[10px] font-bold text-stone-400">
                  {row.kind === 'shoot' ? 'مكان التصوير' : 'الوجهة (إلى)'}
                </label>
                <select 
                  value={row.kind === 'shoot' ? row.shootPlace : row.toLocation}
                  onChange={(e) => updateRow(idx, row.kind === 'shoot' ? 'shootPlace' : 'toLocation', e.target.value)}
                  className="w-full text-xs px-2 py-2 bg-white rounded-lg border border-stone-200 outline-none"
                >
                  <option value="">— اختر الوجهة —</option>
                  {SHOOT_PLACES.map((p, i) => <option key={i} value={p}>{p}</option>)}
                </select>
              </div>

              <div className="space-y-1">
                <label className="block text-[10px] font-bold text-stone-400">ملاحظة</label>
                <input 
                  value={row.note}
                  onChange={(e) => updateRow(idx, 'note', e.target.value)}
                  className="w-full text-xs px-2 py-2 bg-white rounded-lg border border-stone-200 outline-none"
                  placeholder="ملاحظات اختيارية..."
                />
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={handleSubmit}
          disabled={loading}
          className="w-full mt-8 py-4 bg-stone-800 text-white rounded-2xl font-black shadow-lg shadow-stone-200 disabled:opacity-50"
        >
          {loading ? 'جاري الإرسال...' : 'ارسال الطلب'}
        </button>
      </div>
    </div>
  );
};

export default CreateRequest;
