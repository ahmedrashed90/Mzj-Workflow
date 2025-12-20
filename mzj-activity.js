// mzj-activity.js — Unified Activity Logger (ES Module)
// Usage (inside your page <script type="module">):
//   import { mzjLog, mzjLogPageView, mzjBindAutoLogging } from './mzj-activity.js';
//   mzjLogPageView();  // optional
//   mzjBindAutoLogging(); // optional (logs elements with data-log-action)
//
// Then anywhere:
//   await mzjLog('تعديل طلب نقل', { entityType:'move_request', entityId:'28', details:'...' });

import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  doc,
  getDoc,
  query,
  where,
  getDocs,
  limit
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

/* ===== Firebase Config (same project) ===== */
const firebaseConfig = {
  apiKey: "AIzaSyC614bGqnYf4Q-weTNemzWENTpa8DjGeHw",
  authDomain: "mzj-agenda.firebaseapp.com",
  projectId: "mzj-agenda",
  storageBucket: "mzj-agenda.firebasestorage.app",
  messagingSenderId: "834700407721",
  appId: "1:834700407721:web:75c17665d4f032fd65cab8"
};

const app = getApps()?.length ? getApps()[0] : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

/* ===== Helpers ===== */
function pad(n){ return n < 10 ? '0'+n : ''+n; }
function nowStr(){
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = pad(d.getMonth()+1);
  const dd = pad(d.getDate());
  const hh = pad(d.getHours());
  const mi = pad(d.getMinutes());
  const ss = pad(d.getSeconds());
  return `${yyyy}-${mm}-${dd} ${hh}:${mi}:${ss}`;
}

function normalizeRole(role){
  const r = (role || '').toString().trim().toLowerCase();
  if (!r) return '';
  if (r.includes('ادار') || r.includes('إدار') || r.includes('admin')) return 'الادارة';
  if (r.includes('مدير') && r.includes('فرع')) return 'مدراء فروع';
  if (r.includes('فرع')) return 'مدراء فروع';
  if (r.includes('موظف') || r.includes('مبيعات') || r.includes('sales')) return 'مبيعات';
  return role; // keep original if unknown
}

async function fetchUserProfile(user){
  // Priority 1: doc id = uid in collection 'user'
  try{
    const s1 = await getDoc(doc(db,'user', user.uid));
    if (s1.exists()){
      const d = s1.data() || {};
      return {
        role: d.role || d.userRole || '',
        name: d.name || d.userName || d.fullName || '',
        email: (d.email || d.userEmail || user.email || '').trim()
      };
    }
  }catch(_){}

  // Priority 2: query by email in 'user'
  const email = (user.email || '').trim();
  if (email){
    const fields = ['email','userEmail','mail'];
    for (const f of fields){
      try{
        const q = query(collection(db,'user'), where(f,'==',email), limit(1));
        const qs = await getDocs(q);
        if (!qs.empty){
          const d = qs.docs[0].data() || {};
          return {
            role: d.role || d.userRole || '',
            name: d.name || d.userName || d.fullName || '',
            email
          };
        }
      }catch(_){}
    }
  }

  return { role:'', name:'', email: (user.email || '').trim() };
}

let cachedProfile = null;
let cachedUid = null;

async function getProfile(user){
  if (!user) return { role:'', name:'', email:'' };
  if (cachedUid === user.uid && cachedProfile) return cachedProfile;
  const p = await fetchUserProfile(user);
  p.role = normalizeRole(p.role);
  cachedProfile = p;
  cachedUid = user.uid;
  return p;
}

/* ===== Anti-spam (per session) ===== */
function shouldSkip(key, ms=1200){
  try{
    const k = `mzj_log_${key}`;
    const last = Number(sessionStorage.getItem(k) || '0');
    const now = Date.now();
    if (now - last < ms) return true;
    sessionStorage.setItem(k, String(now));
  }catch(_){}
  return false;
}

/* ===== Public API ===== */
export async function mzjLog(action, opts = {}){
  try{
    const user = auth.currentUser;
    if (!user) return false;

    const safeAction = (action || '').toString().trim();
    if (!safeAction) return false;

    const entityType = (opts.entityType || '').toString();
    const entityId   = (opts.entityId || '').toString();
    const details    = (opts.details || '').toString();
    const refKey = `${safeAction}|${entityType}|${entityId}|${location.pathname}`;
    if (shouldSkip(refKey)) return true;

    const profile = await getProfile(user);

    await addDoc(collection(db,'mzj_activity_log'), {
      action: safeAction,
      entityType,
      entityId,
      details,

      // user
      userEmail: profile.email || (user.email || ''),
      userName : profile.name || (user.displayName || ''),
      role     : profile.role || '',

      // context
      page     : location.pathname || '',
      createdAt: nowStr(),
      createdAtTs: serverTimestamp(),
      userAgent: navigator.userAgent || ''
    });

    return true;
  }catch(e){
    console.warn('mzjLog failed', e);
    return false;
  }
}

export function mzjLogPageView(label){
  const page = label || document.title || (location.pathname || 'page');
  // fire and forget
  mzjLog('زيارة صفحة', { entityType:'page', entityId: location.pathname, details: page });
}

export function mzjBindAutoLogging(){
  // Logs clicks for any element with:
  // data-log-action="..." (required)
  // data-log-entity="..." (optional)
  // data-log-id="..." (optional)
  // data-log-details="..." (optional)
  document.addEventListener('click', (e)=>{
    const el = e.target?.closest?.('[data-log-action]');
    if (!el) return;
    const action = el.getAttribute('data-log-action') || '';
    const entityType = el.getAttribute('data-log-entity') || '';
    const entityId = el.getAttribute('data-log-id') || '';
    const details = el.getAttribute('data-log-details') || el.textContent?.trim()?.slice(0,120) || '';
    mzjLog(action, { entityType, entityId, details });
  }, true);
}

// Optional: expose for debugging
window.mzjLog = mzjLog;

// Keep profile fresh when auth changes
onAuthStateChanged(auth, async (user)=>{
  cachedProfile = null;
  cachedUid = null;
  if (user){
    // Preload profile (non-blocking)
    getProfile(user);
  }
});
