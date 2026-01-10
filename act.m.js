
// ===== Mobile enhancements (sidebar toggle + cards rendering) =====
function __mzjIsMobile(){ return window.matchMedia && window.matchMedia("(max-width: 768px)").matches; }

function __mzjSetupSidebar(){
  const btn = document.getElementById("mzjSidebarBtn");
  const backdrop = document.getElementById("mzjBackdrop");
  const cls = "mzj-sidebar-open";
  if(btn){
    btn.addEventListener("click", ()=> document.body.classList.toggle(cls));
  }
  if(backdrop){
    backdrop.addEventListener("click", ()=> document.body.classList.remove(cls));
  }
  document.addEventListener("keydown", (e)=>{
    if(e.key === "Escape") document.body.classList.remove(cls);
  });
}

function __mzjEnsureCardsContainer(){
  const wrap = document.querySelector(".table-wrap");
  if(!wrap) return null;
  let cards = document.querySelector(".moves-cards");
  if(!cards){
    cards = document.createElement("div");
    cards.className = "moves-cards";
    wrap.parentElement.insertBefore(cards, wrap.nextSibling);
  }
  return cards;
}

function __mzjTableToCards(){
  if(!__mzjIsMobile()) return;
  const table = document.getElementById("movesTable");
  const tbody = table ? table.querySelector("tbody") : null;
  if(!tbody) return;

  const cards = __mzjEnsureCardsContainer();
  if(!cards) return;

  // headers
  const ths = Array.from(table.querySelectorAll("thead th")).map(th=>th.textContent.trim());

  cards.innerHTML = "";
  const rows = Array.from(tbody.querySelectorAll("tr"));
  rows.forEach((tr)=>{
    const tds = Array.from(tr.querySelectorAll("td"));
    if(!tds.length) return;

    const card = document.createElement("div");
    card.className = "move-card";

    const grid = document.createElement("div");
    grid.className = "move-grid";

    tds.forEach((td, i)=>{
      const cell = document.createElement("div");
      cell.className = "move-cell";

      const k = document.createElement("div");
      k.className = "move-k";
      k.textContent = ths[i] || `عمود ${i+1}`;

      const v = document.createElement("div");
      v.className = "move-v";

      // preserve copyable VIN behavior
      const copyEl = td.querySelector(".copyable");
      if(copyEl){
        v.classList.add("copyable");
        v.setAttribute("data-copy", copyEl.getAttribute("data-copy") || "");
        v.textContent = copyEl.textContent.trim();
      }else{
        v.textContent = td.textContent.trim() || "—";
      }

      cell.appendChild(k);
      cell.appendChild(v);
      grid.appendChild(cell);
    });

    card.appendChild(grid);
    cards.appendChild(card);
  });
}

function __mzjObserveTable(){
  if(!__mzjIsMobile()) return;
  const tbody = document.querySelector("#movesTable tbody");
  if(!tbody) return;
  const obs = new MutationObserver(()=> __mzjTableToCards());
  obs.observe(tbody, { childList:true, subtree:true });
  // initial
  __mzjTableToCards();
}

__mzjSetupSidebar();


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
  import { getFirestore, doc, getDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

  /* ===== Firebase ===== */
  const firebaseConfig = {
    apiKey: "AIzaSyC614bGqnYf4Q-weTNemzWENTpa8DjGeHw",
    authDomain: "mzj-agenda.firebaseapp.com",
    projectId: "mzj-agenda",
    storageBucket: "mzj-agenda.firebasestorage.app",
    messagingSenderId: "834700407721",
    appId: "1:834700407721:web:75c17665d4f032fd65cab8"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db   = getFirestore(app);
  const STATE_REF = doc(db, "mzj_admin_state", "v1");

  /* ===== Roles ===== */
  const ROLE_ADMIN   = 'الادارة';
  const ROLE_IDARI   = 'اداري';
  const ROLE_BRANCH  = 'مدراء فروع';
  const PAGE_ALLOWED_ROLES = [ROLE_ADMIN, ROLE_IDARI, ROLE_BRANCH];

  async function fetchUserRole(user){
    try{
      const userDocRef = doc(db, 'user', user.uid);
      const snap = await getDoc(userDocRef);
      if(snap.exists()){
        const data = snap.data() || {};
        return data.role || null;
      }
      return null;
    }catch(err){
      console.error('Error fetching user role:', err);
      return null;
    }
  }

  /* ===== Helpers ===== */
  const $ = s => document.querySelector(s);
  const toast = $('#toast');
  function showToast(msg,type='ok'){toast.textContent=msg;toast.className='toast '+type;toast.style.display='block';setTimeout(()=>toast.style.display='none',1800)}
  function pad(n){return n<10?'0'+n:n}
  function onlyDate(str){return (str||'').toString().slice(0,10)}
  function normalizeVin(v){
    if(!v) return '';
    const ar={'٠':'0','١':'1','٢':'2','٣':'3','٤':'4','٥':'5','٦':'6','٧':'7','٨':'8','٩':'9'};
    return v.toString().replace(/[٠-٩]/g,d=>ar[d]).toUpperCase().replace(/[\s\-\._]/g,'').trim();
  }

  // تحويل أي شكل تاريخ/وقت لقيمة رقمية للمقارنة (الأحدث أكبر)
  function toMillis(x){
    try{
      if(x == null) return 0;
      // Firestore Timestamp {seconds, nanoseconds}
      if(typeof x === 'object' && typeof x.seconds === 'number'){
        return (x.seconds * 1000) + Math.floor((x.nanoseconds||0)/1e6);
      }
      if(typeof x === 'number') return x;
      const s = String(x).trim();
      if(!s) return 0;
      // إذا كان YYYY-MM-DD
      if(/^\d{4}-\d{2}-\d{2}$/.test(s)) return Date.parse(s + 'T00:00:00Z') || 0;
      const t = Date.parse(s);
      return isNaN(t) ? 0 : t;
    }catch(_){ return 0; }
  }

  function moveTs(m){
    // الأفضلية: when ثم date ثم id
    return toMillis(m?.when) || toMillis(m?.date) || toMillis(m?.id) || 0;
  }

  function liftNoFlash(){
    const nf = document.getElementById('noFlash');
    if(nf) nf.remove();
  }

  /* ===== DOM ===== */
  const authGate=$('#authGate'), appRoot=$('#app');
  const btnSignOut=$('#btnSignOut');
  const emailEl=$('#email'), passEl=$('#password'), btnLogin=$('#btnLogin'), btnSignup=$('#btnSignup'), authHint=$('#authHint');
  const connDot=$('#connDot'), connText=$('#connText');

  const movesFromDate=$('#movesFromDate'), movesToDate=$('#movesToDate'), btnClearDate=$('#btnClearDate');
  const quickSearch=$('#quickSearch'), btnClearSearch=$('#btnClearSearch'), btnExportExcel=$('#btnExportExcel');
  const movesTableBody = document.querySelector('#movesTable tbody');
  const stockPlaceBar = $('#stockPlaceBar');
  const stockDot = $('#stockDot');
  const stockText = $('#stockText');
  const stockHint = $('#stockHint');
  const rowsHint = $('#rowsHint');

  let moves = [];
  let stockItems = [];
  let stockPlaceMap = new Map();

  // بناء خريطة (VIN -> المكان الحالي) من stock داخل mzj_admin_state/v1
  function buildStockMap(list){
    stockPlaceMap = new Map();
    (Array.isArray(list)?list:[]).forEach((s)=>{
      const vin = (s && (s.vin || s.VIN || s.chassis || s.chassisNo || s.vinNumber || s['رقم_الهيكل'] || s['رقم الهيكل'] || s['رقمهيكل'] || s.vehicleVin)) ?? '';
      const vNorm = normalizeVin(String(vin||''));
      if(!vNorm) return;

      const place = (s.place || s.location || s.branch || s.currentPlace || s.placeText || s['مكان'] || s['المكان'] || s['المكان الحالي'] || s['مكان السيارة'] || s['مكان_السيارة'] || '') ?? '';
      const p = String(place||'').trim();
      if(p) stockPlaceMap.set(vNorm, p);
    });
  }

  function getStockPlace(vinRaw){
    const vNorm = normalizeVin(String(vinRaw||''));
    return stockPlaceMap.get(vNorm) || '';
  }

  function setStockBar(mode, text, hint=''){
    if(!stockPlaceBar) return;
    stockPlaceBar.style.display = 'flex';
    stockDot.className = 'dot ' + (mode==='ok'?'ok':mode==='err'?'err':'warn');
    stockText.textContent = text || '—';
    stockHint.textContent = hint || '';
  }

  let unsub = null;

  function setStatus(mode, txt){
    connDot.className='dot '+(mode==='ok'?'ok':mode==='err'?'err':'warn');
    connText.textContent = txt;
  }

  /* ===== Filtering + render ===== */
  function filterMovesByDate(list){
    const f = movesFromDate.value || null;
    const t = movesToDate.value || null;
    if(!f && !t) return list;
    return list.filter(m=>{
      const d = m.date || onlyDate(m.when||'');
      if(f && d < f) return false;
      if(t && d > t) return false;
      return true;
    });
  }

  function filterBySearch(list){
    const raw = (quickSearch.value||'').trim();
    const q = raw.toLowerCase();
    if(!q) return list;

    // لو المستخدم كتب رقم هيكل (VIN) بشكل واضح: اعرض كل حركات هذا الهيكل + ترتيبها بالأحدث
    const qVin = normalizeVin(raw);
    const looksLikeVin = qVin.length >= 11 && /^[A-Z0-9]+$/.test(qVin);
    if(looksLikeVin){
      const vinMoves = list.filter(m => normalizeVin(m.vin||'') === qVin);
      vinMoves.sort((a,b)=> (moveTs(b) - moveTs(a)) || ((b.__idx||0) - (a.__idx||0)));
      return vinMoves;
    }

    // غير ذلك: بحث عام
    return list.filter(m=>{
      const hay = [
        m.vin||'', m.car||'', m.from||'', m.to||'', m.id||'',
        (m.date||onlyDate(m.when||''))||''
      ].join(' ').toLowerCase();
      return hay.includes(q);
    });
  }

  function renderMoves(){
    movesTableBody.innerHTML='';
    let rows = moves.slice();

    rows = filterMovesByDate(rows);
    rows = filterBySearch(rows);

    // الأحدث أولاً (اختياري) — نفس تبويب الإدارة كان حسب الترتيب الحالي، لكن ده أنسب لسجل
    rows.sort((a,b)=> (moveTs(b) - moveTs(a)) || ((b.__idx||0) - (a.__idx||0)));

    rows.forEach((m,i)=>{
      const vin = m.vin || '';
      const tr=document.createElement('tr');
      // تمييز أحدث حركة عند البحث بـ VIN
      const qRaw = (quickSearch.value||'').trim();
      const qVin = normalizeVin(qRaw);
      const looksLikeVin = qVin.length >= 11 && /^[A-Z0-9]+$/.test(qVin);
      if(looksLikeVin && i===0){ tr.classList.add('row-latest'); }
      tr.innerHTML=`
        <td>${i+1}</td>
        <td class="nowrap">${m.date || onlyDate(m.when||'')}</td>
        <td class="nowrap"><span class="copyable" data-copy="${vin}" title="انسخ رقم الهيكل">${vin}</span></td>
        <td>${m.car||''}</td>
        <td>${m.from||''}</td>
        <td>${m.to||''}</td>
        <td>${getStockPlace(vin) || ''}</td>
        <td class="nowrap">${m.id||''}</td>`;
      movesTableBody.appendChild(tr);
    });

    
    // تحديث شريط المكان الحالي عند البحث برقم الهيكل
    const raw = (quickSearch.value||'').trim();
    if(looksLikeVinInput(raw)){
      const vNorm = normalizeVin(raw);
      const p = stockPlaceMap.get(vNorm) || '';
      if(!p){
        setStockBar('err','لم يتم العثور على هذا الهيكل في المخزون', vNorm);
      }else{
        // قارن مع أحدث حركة في السجل (إلى)
        const latest = rows.find(r => normalizeVin(r.vin||'')===vNorm);
        const latestTo = latest ? String(latest.to||'').trim() : '';
        const mismatch = latestTo && latestTo !== String(p).trim();
        if(mismatch){
          setStockBar('warn', `المكان الحالي (المخزون): ${p}`, `⚠️ آخر حركة في السجل تقول: ${latestTo} — واضح إن طلب النقل (إرسال/استلام) ما اتسجلش في moves`);
        }else{
          setStockBar('ok', `المكان الحالي (المخزون): ${p}`, '');
        }
      }
    }else{
      if(stockPlaceBar) stockPlaceBar.style.display='none';
    }

    rowsHint.textContent = `عدد السجلات المعروضة: ${rows.length}`;
  }

  movesFromDate.addEventListener('change', renderMoves);
  movesToDate.addEventListener('change', renderMoves);
  btnClearDate.addEventListener('click', ()=>{movesFromDate.value=''; movesToDate.value=''; renderMoves();});
  quickSearch.addEventListener('input', ()=> renderMoves());
  btnClearSearch.addEventListener('click', ()=>{ quickSearch.value=''; renderMoves(); });

  /* ===== Export CSV (Excel) ===== */
  btnExportExcel?.addEventListener('click', ()=>{
    try{
      let rows = moves.slice();
      rows = filterMovesByDate(rows);
      rows = filterBySearch(rows);
      rows.sort((a,b)=> (moveTs(b) - moveTs(a)) || ((b.__idx||0) - (a.__idx||0)));

      if(!rows.length){
        showToast('لا توجد بيانات للتصدير','info');
        return;
      }

      let csv='\uFEFF'; // BOM لدعم العربية
      csv += ['#','التاريخ','رقم الهيكل','السيارة','من','إلى','المكان الحالي (المخزون)','ID'].join(',')+'\n';

      rows.forEach((m,i)=>{
        const line = [
          i+1,
          (m.date || onlyDate(m.when||'')) || '',
          m.vin || '',
          m.car || '',
          m.from || '',
          m.to || '',
          getStockPlace(m.vin) || '',
          m.id || ''
        ].map(v => '"'+String(v).replace(/"/g,'""')+'"').join(',');
        csv += line + '\n';
      });

      const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `moves_${new Date().toISOString().slice(0,10)}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      showToast('تم تصدير الملف ✅','ok');
    }catch(err){
      console.error(err);
      showToast('تعذّر التصدير','err');
    }
  });


  document.addEventListener('click',(e)=>{
    const pill = e.target.closest('.copyable');
    if(pill){
      const txt=(pill.getAttribute('data-copy')||'').trim();
      if(txt){ navigator.clipboard.writeText(txt).then(()=>showToast('تم النسخ ✅','ok')); }
    }
  });

  /* ===== Auth ===== */
  onAuthStateChanged(auth, async (user)=>{
    if(user){
      try{
        const role = await fetchUserRole(user);
        window.__mzjUserRole = role || null;

        if(!role || !PAGE_ALLOWED_ROLES.includes(role)){
          window.location.href = 'unauthorized.html';
          return;
        }

        authGate.style.display = 'none';
        appRoot.style.display  = 'block';
        btnSignOut.style.display = 'inline-flex';
        setStatus('ok', `متصل: ${user.email} — الدور: ${role}`);

        liftNoFlash();
        subscribeLive();
      }catch(err){
        console.error(err);
        setStatus('err','خطأ في تحميل البيانات');
        liftNoFlash();
      }
    }else{
      // not logged in
      if(unsub){ try{unsub();}catch(e){} unsub=null; }
      appRoot.style.display = 'none';
      authGate.style.display = 'grid';
      authGate.style.display = 'grid';
      btnSignOut.style.display = 'none';
      setStatus('warn','لم يتم تسجيل الدخول');
      liftNoFlash();
    }
  });

  btnLogin?.addEventListener('click', async ()=>{
    authHint.textContent='';
    try{ await signInWithEmailAndPassword(auth, emailEl.value.trim(), passEl.value); }
    catch(e){ authHint.textContent='فشل تسجيل الدخول: '+(e?.message||e); }
  });
  btnSignup?.addEventListener('click', async ()=>{
    authHint.textContent='';
    try{ await createUserWithEmailAndPassword(auth, emailEl.value.trim(), passEl.value); }
    catch(e){ authHint.textContent='تعذّر إنشاء الحساب: '+(e?.message||e); }
  });
  btnSignOut?.addEventListener('click', ()=> signOut(auth));

  function subscribeLive(){
    try{
      if(unsub){ try{unsub();}catch(e){} unsub=null; }
      unsub = onSnapshot(STATE_REF,(snap)=>{
        if(!snap.exists()) return;
        const d = snap.data() || {};
        stockItems = Array.isArray(d.stock) ? d.stock.slice() : [];
        buildStockMap(stockItems);
        moves = Array.isArray(d.moves) ? d.moves : [];
        // فهرسة داخلية لضمان ترتيب صحيح عند تساوي/غياب التوقيت
        moves.forEach((m,i)=>{ try{ m.__idx = i; }catch(_){ } });
        renderMoves();
        setStatus('ok','مزامنة حيّة');
      }, ()=>{
        setStatus('warn','انقطاع المزامنة مؤقتًا');
      });
    }catch(e){
      console.error(e);
      setStatus('err','تعذّر الاشتراك في المزامنة');
    }
  }

// Hook: rebuild cards after renderMoves (fallback)
try{ __mzjObserveTable(); }catch(e){ console.warn(e); }
