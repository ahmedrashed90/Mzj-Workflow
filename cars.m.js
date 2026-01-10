// cars.m.js — Mobile wrapper (no logic changes)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import {
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
  } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
  import {
    getFirestore,
    doc,
    getDoc,
    onSnapshot
  } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

  /* ===== Firebase ===== */
  const firebaseConfig = {
    apiKey: "AIzaSyC614bGqnYf4Q-weTNemzWENTpa8DjGeHw",
    authDomain: "mzj-agenda.firebaseapp.com",
    projectId: "mzj-agenda",
    storageBucket: "mzj-agenda.firebasestorage.app",
    messagingSenderId: "834700407721",
    appId: "1:834700407721:web:75c17665d4f032fd65cab8"
  };
  const app  = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db   = getFirestore(app);
  const STATE_REF = doc(db, "mzj_admin_state", "v1");

  // ===== Roles & Permissions =====
  const ROLE_ADMIN   = 'الادارة';
  const ROLE_IDARI   = 'اداري';
  const ROLE_BRANCH  = 'مدراء فروع';

  // الصفحات المسموح بها لكل تصنيف
  const ROLE_PAGES = {
    [ROLE_ADMIN] : 'ALL', // الإدارة تشوف كل الصفحات
    // الإداري: يشوف فقط الداشبورد + نقل السيارات + إدارة الطلبات + كل السيارات
    [ROLE_IDARI] : [
  'dashboard.html',
  'vt.html',
  'photoshoot-user.html',
  'cars.html',
  'sales.html',
  'inventory.html',
  'act.html'
],
    [ROLE_BRANCH]: ['dashboard.html']
  };

  // صفحة كل السيارات متاحة للإدارة + الإداري
  const PAGE_ALLOWED_ROLES = [ROLE_ADMIN, ROLE_IDARI];

  async function fetchUserRole(user){
    try{
      const userDocRef = doc(db, 'user', user.uid); // collection name: "user"
      const snap = await getDoc(userDocRef);
      if(snap.exists()){
        const data = snap.data() || {};
        return data.role || null;
      }
    }catch(e){
      console.error('Error fetching user role', e);
    }
    return null;
  }

  function applyTabsVisibility(role){
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab=>{
      const href = tab.getAttribute('href') || '';
      const page = (href.split('/').pop() || '').split('?')[0];
      if(!page) return;
      const perm = ROLE_PAGES[role];
      if(!perm){
        tab.style.display = 'none';
        return;
      }
      if(perm === 'ALL') return; // يشوف كل حاجة
      if(!perm.includes(page)){
        tab.style.display = 'none';
      }
    });
  }

  const $ = s => document.querySelector(s);

  const connDot   = $('#connDot');
  const connText  = $('#connText');
  const authGate  = $('#authGate');
  const appRoot   = $('#app');
  const btnLogin  = $('#btnLogin');
  const btnSignup = $('#btnSignup');
  const btnSignOut= $('#btnSignOut');
  const emailEl   = $('#email');
  const passEl    = $('#password');
  const authHint  = $('#authHint');

  const carFilterEl     = $('#carFilter');
  const variantFilterEl = $('#variantFilter');
  const modelFilterEl   = $('#modelFilter');
  const btnApply        = $('#btnApply');
  const btnExport       = $('#btnExport');
  const resultsBody     = $('#resultsBody');
  const grandTotalEl    = $('#grandTotal');
  const groupsCountEl   = $('#groupsCount');
  const toast           = $('#toast');

  let stock = [];
  let lastGroups = [];
  const filters = { car:'', variant:'', model:'' };

  function setStatus(mode, txt){
    connDot.className = 'dot ' + (mode==='ok'?'ok':mode==='err'?'err':'');
    connText.textContent = txt;
  }
  function showToast(msg){
    toast.textContent = msg;
    toast.style.display = 'block';
    setTimeout(()=> toast.style.display='none', 1300);
  }
  function uniq(arr){ return [...new Set(arr.filter(Boolean))]; }

  /* ===== Auth ===== */
  onAuthStateChanged(auth, async (user)=>{
    if(user){
      // جلب الدور من Firestore والتحقق من الصلاحية
      const role = await fetchUserRole(user);

      if(!role || !PAGE_ALLOWED_ROLES.includes(role)){
        // ليس لديه صلاحية لرؤية صفحة كل السيارات
        window.location.href = 'unauthorized.html';
        return;
      }

      authGate.style.display='none';
      appRoot.style.display='block';
      btnSignOut.style.display='inline-flex';
      setStatus('ok', `متصل: ${user.email} — الدور: ${role}`);
      applyTabsVisibility(role);
      await initData();
      subscribeLive();
      document.body.style.opacity='1';
    }else{
      appRoot.style.display='none';
      authGate.style.display='grid';
      btnSignOut.style.display='none';
      setStatus('', 'لم يتم تسجيل الدخول');
      document.body.style.opacity='1';
    }
  });

  btnLogin.addEventListener('click', async ()=>{
    authHint.textContent='';
    try{
      await signInWithEmailAndPassword(auth, emailEl.value.trim(), passEl.value);
    }catch(e){
      authHint.textContent='فشل تسجيل الدخول: '+(e?.message||e);
    }
  });

  btnSignup.addEventListener('click', async ()=>{
    authHint.textContent='';
    try{
      await createUserWithEmailAndPassword(auth, emailEl.value.trim(), passEl.value);
    }catch(e){
      authHint.textContent='تعذّر إنشاء الحساب: '+(e?.message||e);
    }
  });

  btnSignOut.addEventListener('click', ()=> signOut(auth));

  /* ===== Data ===== */
  async function initData(){
    try{
      const snap = await getDoc(STATE_REF);
      if(snap.exists()){
        const d = snap.data() || {};
        stock = Array.isArray(d.stock) ? d.stock : [];
      }else{
        stock = [];
      }
      initFilters();
      updateVariantOptionsForSelectedCar();
      applyFilterAndRender();
    }catch(e){
      console.error('initData error', e);
      resultsBody.innerHTML = `
        <tr>
          <td colspan="5" class="empty-row">
            تعذّر تحميل البيانات من Firebase — تأكد أن المستند mzj_admin_state/v1 موجود.
          </td>
        </tr>`;
      grandTotalEl.textContent  = '0';
      groupsCountEl.textContent = '0';
      setStatus('', 'تعذّر الاتصال — البيانات غير متاحة');
    }
  }

  function subscribeLive(){
    try{
      onSnapshot(STATE_REF,(snap)=>{
        if(!snap.exists()) return;
        const d = snap.data() || {};
        if(Array.isArray(d.stock)){
          stock = d.stock;
          initFilters();
          updateVariantOptionsForSelectedCar();
          applyFilterAndRender();
        }
        setStatus('ok','متصل — مزامنة حيّة');
      },(err)=>{
        console.warn('snapshot error', err);
        setStatus('', 'تعذّر الاتصال — التحديث الحي متوقف مؤقتًا');
      });
    }catch(e){
      console.error('subscribe error', e);
    }
  }

  /* ===== Filters ===== */
  function initFilters(){
    const cars   = uniq(stock.map(r=> r.car));
    const models = uniq(stock.map(r=> r.modelYear));

    carFilterEl.innerHTML = '<option value="">كل السيارات</option>' +
      cars.sort((a,b)=> String(a).localeCompare(String(b),'ar'))
          .map(v=> `<option value="${v}">${v}</option>`).join('');

    modelFilterEl.innerHTML = '<option value="">كل الموديلات</option>' +
      models.sort((a,b)=> String(a).localeCompare(String(b),'ar'))
            .map(v=> `<option value="${v}">${v}</option>`).join('');
  }

  function updateVariantOptionsForSelectedCar(){
    const baseRows = filters.car
      ? stock.filter(r=> r.car === filters.car)
      : stock;

    const variants = uniq(baseRows.map(r=> r.variant));
    const currentVariant = filters.variant;

    variantFilterEl.innerHTML = '<option value="">كل البيانات</option>' +
      variants.sort((a,b)=> String(a).localeCompare(String(b),'ar'))
              .map(v=> `<option value="${v}">${v}</option>`).join('');

    if(currentVariant && variants.includes(currentVariant)){
      variantFilterEl.value = currentVariant;
    }else{
      filters.variant = '';
      variantFilterEl.value = '';
    }
  }

  // حالات غير مطلوبة (بيع/وكالة) — فحص شامل على كل حقول السجل (بما فيها مكان السيارة)
function isExcludedRecord(rec){
  if(!rec) return false;
  const vals = Object.values(rec);
  for(const v of vals){
    if(typeof v !== 'string') continue;
    const s = v.trim();
    // أي مباع تحت التسليم أو مباع تم التسليم مهما كان الفرع/المكان
    if(s.includes('مباع تحت التسليم')) return true;
    if(s.includes('مباع تم التسليم')) return true;
    // أي شيء تابع للوكالة (مثل: الوكالة : المخزون المتاح ...)
    if(s.startsWith('الوكالة')) return true;
  }
  return false;
}

function applyFilterAndRender(){
    if(!Array.isArray(stock) || stock.length===0){
      resultsBody.innerHTML = `
        <tr>
          <td colspan="5" class="empty-row">لا توجد بيانات سيارات في المخزون.</td>
        </tr>`;
      grandTotalEl.textContent  = '0';
      groupsCountEl.textContent = '0';
      lastGroups = [];
      return;
    }

    const filtered = stock.filter(r=>{
      const car   = r.car || '';
      const varnt = r.variant || '';
      const model = r.modelYear!=null ? String(r.modelYear) : '';

      if(filters.car && car !== filters.car) return false;
      if(filters.variant && varnt !== filters.variant) return false;
      if(filters.model && model !== filters.model) return false;

      if (isExcludedRecord(r)) return false;
      return true;
    });

    const map = new Map();
    filtered.forEach(r=>{
      const car   = r.car || '-';
      const varnt = r.variant || '-';
      const model = r.modelYear!=null ? String(r.modelYear) : '-';
      const key = `${car}||${varnt}||${model}`;
      const current = map.get(key) || { car, variant:varnt, model, total:0 };
      current.total += 1;
      map.set(key,current);
    });

    const groups = Array.from(map.values());
    lastGroups = groups;

    if(groups.length===0){
      resultsBody.innerHTML = `
        <tr>
          <td colspan="5" class="empty-row">لا توجد سجلات مطابقة للفلاتر الحالية.</td>
        </tr>`;
      grandTotalEl.textContent  = '0';
      groupsCountEl.textContent = '0';
      return;
    }

    let grand = 0;
    const rowsHtml = groups
      .sort((a,b)=> String(a.car).localeCompare(String(b.car),'ar'))
      .map((g,idx)=>{
        grand += g.total;
        return `
          <tr>
            <td>${idx+1}</td>
            <td><span class="chip">${g.car}</span></td>
            <td><span class="chip">${g.variant}</span></td>
            <td><span class="chip">${g.model}</span></td>
            <td>${g.total}</td>
          </tr>`;
      }).join('');

    resultsBody.innerHTML     = rowsHtml;
    grandTotalEl.textContent  = grand;
    groupsCountEl.textContent = groups.length;
  }

  carFilterEl.addEventListener('change',e=>{
    filters.car = e.target.value;
    updateVariantOptionsForSelectedCar();
  });
  variantFilterEl.addEventListener('change',e=>{
    filters.variant = e.target.value;
  });
  modelFilterEl .addEventListener('change',e=>{
    filters.model = e.target.value;
  });
  btnApply.addEventListener('click', applyFilterAndRender);

  /* ===== Excel Export ===== */
  function exportExcelFromGroups(groups){
    if(!groups || groups.length===0){
      alert('لا يوجد بيانات حالية للتصدير. جرّب تغيير الفلاتر أو عرض النتيجة أولاً.');
      return;
    }
    const header = ["السيارة","البيان","الموديل","إجمالي العدد"];
    const data   = [header];
    groups.forEach(g=>{
      data.push([g.car, g.variant, g.model, g.total]);
    });
    const ws = XLSX.utils.aoa_to_sheet(data);
    ws['!cols'] = [
      {wch:30},
      {wch:30},
      {wch:10},
      {wch:14}
    ];
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Summary");
    XLSX.writeFile(wb, "mzj-inventory-summary.xlsx");
  }
  btnExport.addEventListener('click', ()=> exportExcelFromGroups(lastGroups));

  /* Start */
  setStatus('', 'جارِ الاتصال…');
  document.body.style.opacity='1';
