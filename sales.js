// sales.js (ESM) - no inline code in HTML
// ✅ Fixes: page not opening, ordering newest first, robust loading with graceful errors.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

/**
 * 1) ضع إعدادات Firebase هنا.
 *    أو وفّرها عالميًا قبل تحميل sales.js باسم window.firebaseConfig (لو عندك ملف config منفصل).
 */
const firebaseConfig = window.firebaseConfig || {
  apiKey: "PUT_YOUR_API_KEY",
  authDomain: "PUT_YOUR_AUTH_DOMAIN",
  projectId: "PUT_YOUR_PROJECT_ID",
  storageBucket: "PUT_YOUR_STORAGE_BUCKET",
  messagingSenderId: "PUT_YOUR_SENDER_ID",
  appId: "PUT_YOUR_APP_ID"
};

/**
 * 2) ضع API endpoint للإرسال واتساب (اختياري).
 *    لو مش موجود، زر الإرسال هيعرض تنبيه فقط.
 *
 * مثال:
 * const API_ENDPOINT = "https://mzj-tracking.vercel.app/api/wpbox/sendmessage";
 */
const API_ENDPOINT = window.WPBOX_ENDPOINT || "";

/**
 * 3) أسماء الـ collections المحتملة للطلبات عندك.
 *    عدّلها حسب مشروعك.
 */
const COLLECTION_CANDIDATES = ["orders", "erp_orders", "sales_orders"];

/**
 * 4) (اختياري) Collection لسجل النشاط لكل طلب.
 *    متوقع: logs/{orderId}/items أو activity_logs ... (عدّل حسب نظامك)
 */
const LOG_COLLECTION_MODE = "subcollection"; // "subcollection" | "none"
const LOG_SUBCOLLECTION_NAME = "logs"; // under each order doc: orders/{id}/logs

// ---------- UI Helpers ----------
const $ = (id) => document.getElementById(id);

function toast(msg, type = "info") {
  const host = $("toast");
  if (!host) return alert(msg);
  const icon =
    type === "success" ? "fa-circle-check" :
    type === "error" ? "fa-circle-xmark" :
    "fa-circle-info";
  const node = document.createElement("div");
  node.className = "t";
  node.innerHTML = `<i class="fa-solid ${icon}"></i><div class="msg">${escapeHtml(msg)}</div>`;
  host.appendChild(node);
  setTimeout(() => {
    node.style.opacity = "0";
    node.style.transform = "translateY(6px)";
    node.style.transition = "all .25s ease";
    setTimeout(() => node.remove(), 260);
  }, 2600);
}

function escapeHtml(str) {
  return String(str ?? "").replace(/[&<>'"]/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  }[c]));
}

function formatTS(tsLike) {
  try {
    if (!tsLike) return "—";
    // Firestore Timestamp => tsLike.toDate()
    const d = typeof tsLike.toDate === "function" ? tsLike.toDate() : new Date(tsLike);
    if (Number.isNaN(d.getTime())) return "—";
    return d.toLocaleString("ar-SA", { dateStyle: "medium", timeStyle: "short" });
  } catch { return "—"; }
}

function normalizePhone(phone) {
  const p = String(phone ?? "").trim();
  if (!p) return "";
  // Keep digits only
  const digits = p.replace(/\D/g, "");
  return digits;
}

function computeStatusBadge(order) {
  const s = String(order.status || order.stage || order.state || "").toLowerCase();
  if (!s) return { label: "جديد", cls: "new" };
  if (s.includes("تم") && (s.includes("تسليم") || s.includes("مكتمل") || s.includes("done") || s.includes("complete"))) {
    return { label: order.status || "مكتمل", cls: "done" };
  }
  if (s.includes("مكتمل") || s.includes("complete") || s.includes("done")) return { label: order.status || "مكتمل", cls: "done" };
  return { label: order.status || order.stage || "قيد الإجراء", cls: "progress" };
}

function buildTrackingLink(vin) {
  const v = encodeURIComponent(String(vin || "").trim());
  if (!v) return "";
  return `https://mzj-tracking.vercel.app/Test-Track.html?vin=${v}`;
}

function buildStep1Message(order) {
  const customer = order.customerName || order.customer || order.name || "عميلنا العزيز";
  const carName = order.carName || order.car || order.vehicleName || order.itemName || "السيارة";
  const kind = order.itemKind || order.model || order.category || order.vehicleType || order.type || "-";
  const vin = order.vin || order.chassis || order.chassisNo || order.VIN || "";
  const price = order.priceAfterTax || order.total || order.grandTotal || order.amount || order.price || "";

  const link = buildTrackingLink(vin);

  // NOTE: user previously asked: نوع السيارة = نوع الصنف, فئة الصنف... we keep flexible fields above.
  return [
`عميلنا العزيز / ${customer}`,
`مرحباً بكم في معرض محمد بن ذعار العجمي للسيارات`,
``,
`تم تسجيل طلب شرائك بنجاح`,
``,
`*للسيارة* ${carName}`,
`نوع السيارة : ${kind}`,
`رقم الهيكل : ${vin || "—"}`,
`قيمة السيارة : ${price || "—"}`,
``,
`يمكنك متابعة حالة طلبك عبر الرابط التالي:`,
`${link || "—"}`,
``,
`#مع_#معرض #محمد #بن #ذعار #العجمي #للسيارات … #أنت #نجم الطريق`
  ].join("\n");
}

// ---------- Firestore loading ----------
let app, db, auth;
let orders = [];
let activeFilter = "all";
let selectedOrder = null;

async function initFirebase() {
  const required = ["apiKey", "authDomain", "projectId", "appId"];
  const missing = required.filter((k) => !firebaseConfig[k] || String(firebaseConfig[k]).includes("PUT_"));
  if (missing.length) {
    toast("لازم تضع firebaseConfig في sales.js (قيم Firebase) — بعدها الصفحة هتشتغل وتجيب الطلبات.", "error");
  }
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  auth = getAuth(app);
}

async function findOrdersCollection() {
  // Try candidate collections until one returns docs (or at least exists and doesn't error).
  for (const name of COLLECTION_CANDIDATES) {
    try {
      const col = collection(db, name);
      const q = query(col, orderBy("updatedAt", "desc"), limit(1));
      await getDocs(q);
      return name;
    } catch (e1) {
      // maybe field updatedAt not present
      try {
        const col = collection(db, name);
        const q2 = query(col, orderBy("createdAt", "desc"), limit(1));
        await getDocs(q2);
        return name;
      } catch (e2) {
        // ignore and continue
      }
    }
  }
  return null;
}

function sortNewestFirst(list) {
  return [...list].sort((a, b) => {
    const ta = getTime(a.updatedAt || a.createdAt || a.ts || a.date || 0);
    const tb = getTime(b.updatedAt || b.createdAt || b.ts || b.date || 0);
    return tb - ta;
  });
}

function getTime(x) {
  try {
    if (!x) return 0;
    if (typeof x.toDate === "function") return x.toDate().getTime();
    const d = new Date(x);
    return Number.isNaN(d.getTime()) ? 0 : d.getTime();
  } catch { return 0; }
}

async function loadOrders() {
  $("ordersTbody").innerHTML = `<tr><td colspan="7" class="muted center">جاري التحميل…</td></tr>`;

  const colName = await findOrdersCollection();
  if (!colName) {
    $("ordersTbody").innerHTML = `<tr><td colspan="7" class="muted center">لم يتم العثور على Collection للطلبات. عدّل COLLECTION_CANDIDATES في sales.js</td></tr>`;
    toast("مش لاقي Collection للطلبات. عدّل COLLECTION_CANDIDATES في sales.js", "error");
    return;
  }

  // Prefer updatedAt then createdAt, but allow both
  const colRef = collection(db, colName);
  let snap;
  try {
    snap = await getDocs(query(colRef, orderBy("updatedAt", "desc"), limit(500)));
  } catch {
    try {
      snap = await getDocs(query(colRef, orderBy("createdAt", "desc"), limit(500)));
    } catch (e) {
      $("ordersTbody").innerHTML = `<tr><td colspan="7" class="muted center">تعذر قراءة الطلبات: ${escapeHtml(e.message || e)}</td></tr>`;
      toast("تعذر قراءة الطلبات (تحقق من Firestore rules / اسم الحقول)", "error");
      return;
    }
  }

  const items = [];
  snap.forEach((d) => items.push({ id: d.id, ...d.data(), __col: colName }));
  orders = sortNewestFirst(items);

  renderKPIs();
  renderTable();
}

function renderKPIs() {
  $("kpiTotal").textContent = String(orders.length);
  const inProg = orders.filter(o => computeStatusBadge(o).cls !== "done").length;
  $("kpiInProgress").textContent = String(inProg);
  $("kpiTotalSub").textContent = `آخر تحديث: ${new Date().toLocaleString("ar-SA", { dateStyle:"medium", timeStyle:"short"})}`;

  // Sent today (best-effort from logs if present; otherwise 0)
  $("kpiSentToday").textContent = "—";
  // If you want: implement based on your logs schema
  $("kpiSentToday").textContent = "0";
}

function applyFilterAndSearch(list) {
  const q = String($("q").value || "").trim().toLowerCase();
  let out = [...list];

  if (activeFilter === "inProgress") out = out.filter(o => computeStatusBadge(o).cls !== "done");
  if (activeFilter === "done") out = out.filter(o => computeStatusBadge(o).cls === "done");

  if (q) {
    out = out.filter(o => {
      const blob = [
        o.customerName, o.customer, o.name,
        o.vin, o.chassis, o.chassisNo,
        o.carName, o.car, o.vehicleName, o.itemName,
        o.orderNo, o.orderNumber, o.id
      ].join(" ").toLowerCase();
      return blob.includes(q);
    });
  }

  return out;
}

function renderTable() {
  const list = applyFilterAndSearch(orders);
  if (!list.length) {
    $("ordersTbody").innerHTML = `<tr><td colspan="7" class="muted center">لا توجد طلبات مسجلة حالياً.</td></tr>`;
    return;
  }

  $("ordersTbody").innerHTML = list.map((o, idx) => {
    const badge = computeStatusBadge(o);
    const customer = escapeHtml(o.customerName || o.customer || o.name || "—");
    const car = escapeHtml(o.carName || o.car || o.vehicleName || o.itemName || "—");
    const vin = escapeHtml(o.vin || o.chassis || o.chassisNo || o.VIN || "—");
    const t = formatTS(o.updatedAt || o.createdAt || o.ts || o.date);

    return `
      <tr data-id="${escapeHtml(o.id)}">
        <td class="mono">${idx + 1}</td>
        <td>${customer}</td>
        <td>${car}</td>
        <td class="mono">${vin}</td>
        <td><span class="badge ${badge.cls}">${escapeHtml(badge.label)}</span></td>
        <td class="mono">${escapeHtml(t)}</td>
        <td>
          <div class="row-actions">
            <button class="btn btn-outline" data-action="open"><i class="fa-solid fa-eye"></i> تفاصيل</button>
            <button class="btn btn-primary" data-action="step1"><i class="fa-brands fa-whatsapp"></i> رسالة 1</button>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

// ---------- Drawer ----------
function openDrawer(order) {
  selectedOrder = order;

  $("drawer").classList.add("open");
  $("drawer").setAttribute("aria-hidden", "false");

  const customer = order.customerName || order.customer || order.name || "—";
  const car = order.carName || order.car || order.vehicleName || order.itemName || "—";
  const vin = order.vin || order.chassis || order.chassisNo || order.VIN || "—";
  const phone = order.phone || order.mobile || order.customerPhone || order.whatsapp || "—";

  $("dTitle").textContent = `تفاصيل الطلب`;
  $("dSub").textContent = `${car} • ${vin}`;
  $("dCustomer").textContent = customer;
  $("dPhone").textContent = phone;
  $("dCar").textContent = car;
  $("dVin").textContent = vin;

  $("msgText").value = buildStep1Message(order);

  loadLogs(order).catch(() => {
    $("dLog").innerHTML = `<div class="muted">لا يوجد سجل نشاط (أو لم يتم ضبطه).</div>`;
  });
}

function closeDrawer() {
  $("drawer").classList.remove("open");
  $("drawer").setAttribute("aria-hidden", "true");
  selectedOrder = null;
}

async function loadLogs(order) {
  if (LOG_COLLECTION_MODE === "none") {
    $("dLog").innerHTML = `<div class="muted">سجل النشاط غير مُفعل.</div>`;
    return;
  }
  const colName = order.__col || COLLECTION_CANDIDATES[0];
  const orderId = order.id;

  // Subcollection: {orders}/{id}/logs (docs)
  try {
    const logsCol = collection(db, colName, orderId, LOG_SUBCOLLECTION_NAME);
    const snap = await getDocs(query(logsCol, orderBy("createdAt", "desc"), limit(100)));

    const items = [];
    snap.forEach(d => items.push({ id: d.id, ...d.data() }));
    if (!items.length) {
      $("dLog").innerHTML = `<div class="muted">لا يوجد نشاط مسجل.</div>`;
      return;
    }
    $("dLog").innerHTML = items.map((x) => {
      const title = escapeHtml(x.title || x.action || "تحديث");
      const who = escapeHtml(x.byName || x.by || x.user || "—");
      const role = escapeHtml(x.role || x.byRole || "");
      const when = formatTS(x.createdAt || x.ts || x.date);
      const body = escapeHtml(x.details || x.note || x.message || "");
      return `
        <div class="log-item">
          <div class="log-head">
            <div class="log-title">${title}</div>
            <div class="log-meta">${who}${role ? " • " + role : ""} • ${escapeHtml(when)}</div>
          </div>
          ${body ? `<div class="log-body">${body}</div>` : ""}
        </div>
      `;
    }).join("");
  } catch (e) {
    $("dLog").innerHTML = `<div class="muted">تعذر تحميل سجل النشاط: ${escapeHtml(e.message || e)}</div>`;
  }
}

// ---------- WhatsApp Sending ----------
async function sendWhatsApp(phone, message) {
  if (!API_ENDPOINT) {
    toast("API_ENDPOINT غير مضبوط في sales.js — حط رابط endpoint للإرسال.", "error");
    return { ok: false, error: "Missing API_ENDPOINT" };
  }

  const payload = {
    phone: normalizePhone(phone),
    message: message
  };

  if (!payload.phone) {
    toast("رقم العميل غير موجود في الطلب.", "error");
    return { ok: false, error: "Missing phone" };
  }

  const res = await fetch(API_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  const txt = await res.text();
  let data = null;
  try { data = JSON.parse(txt); } catch { /* endpoint may return html */ }

  if (!res.ok) {
    toast(`فشل الإرسال: ${res.status}`, "error");
    return { ok: false, status: res.status, raw: txt, data };
  }

  toast("تم الإرسال بنجاح.", "success");
  return { ok: true, data };
}

// ---------- Events ----------
function wireEvents() {
  $("btnRefresh").addEventListener("click", () => loadOrders());

  document.addEventListener("click", async (e) => {
    const close = e.target.closest("[data-close]");
    if (close) {
      const what = close.getAttribute("data-close");
      if (what === "drawer") closeDrawer();
      return;
    }

    const seg = e.target.closest(".seg");
    if (seg) {
      document.querySelectorAll(".seg").forEach(x => x.classList.remove("active"));
      seg.classList.add("active");
      activeFilter = seg.getAttribute("data-filter");
      renderTable();
      return;
    }

    const btn = e.target.closest("[data-action]");
    if (btn) {
      const tr = btn.closest("tr[data-id]");
      const id = tr?.getAttribute("data-id");
      const order = orders.find(o => o.id === id);
      if (!order) return;

      const action = btn.getAttribute("data-action");
      if (action === "open") {
        openDrawer(order);
      } else if (action === "step1") {
        openDrawer(order);
        await handleSendStep1();
      }
    }
  });

  $("q").addEventListener("input", () => renderTable());

  $("btnMsgStep1").addEventListener("click", () => {
    if (!selectedOrder) return;
    $("msgText").value = buildStep1Message(selectedOrder);
    toast("تم تجهيز رسالة الخطوة 1.", "success");
  });

  $("btnCopyLink").addEventListener("click", async () => {
    if (!selectedOrder) return;
    const vin = selectedOrder.vin || selectedOrder.chassis || selectedOrder.chassisNo || selectedOrder.VIN || "";
    const link = buildTrackingLink(vin);
    if (!link) return toast("رقم الهيكل غير موجود.", "error");
    try {
      await navigator.clipboard.writeText(link);
      toast("تم نسخ رابط التتبع.", "success");
    } catch {
      toast("تعذر النسخ. انسخ الرابط يدويًا من الرسالة.", "error");
    }
  });

  $("btnSendNow").addEventListener("click", () => handleSendStep1());

  // sign out (optional)
  $("btnSignOut").addEventListener("click", async () => {
    try { await signOut(auth); } catch {}
    location.reload();
  });
}

async function handleSendStep1() {
  if (!selectedOrder) return toast("افتح تفاصيل الطلب أولاً.", "error");
  const phone = selectedOrder.phone || selectedOrder.mobile || selectedOrder.customerPhone || selectedOrder.whatsapp || "";
  const message = $("msgText").value || buildStep1Message(selectedOrder);

  toast("جاري الإرسال…");
  try {
    await sendWhatsApp(phone, message);
  } catch (e) {
    toast(`خطأ أثناء الإرسال: ${e.message || e}`, "error");
  }
}

// ---------- Boot ----------
async function boot() {
  try {
    await initFirebase();
  } catch (e) {
    toast("فشل تهيئة Firebase. راجع firebaseConfig.", "error");
    $("ordersTbody").innerHTML = `<tr><td colspan="7" class="muted center">فشل تهيئة Firebase: ${escapeHtml(e.message || e)}</td></tr>`;
    return;
  }

  wireEvents();

  // Auth optional: if you already use auth in your project it will work,
  // otherwise it won't block reading unless your rules require auth.
  onAuthStateChanged(auth, (user) => {
    $("btnSignOut").style.display = user ? "" : "none";
  });

  await loadOrders();
}

boot();
