// Activity.m.js
// Mobile-only logic for Activity page (cards view + sidebar toggle)

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore, collection, query, orderBy, limit, onSnapshot } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

// ===== Sidebar toggle (لا يعتمد على أي JS خارجي) =====
function setupMobileSidebar(){
  const btn = document.getElementById("mzjSidebarBtn");
  const backdrop = document.getElementById("mzjBackdrop");
  const openClass = "mzj-sidebar-open";

  if (btn){
    btn.addEventListener("click", () => {
      document.body.classList.toggle(openClass);
    });
  }
  if (backdrop){
    backdrop.addEventListener("click", () => {
      document.body.classList.remove(openClass);
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") document.body.classList.remove(openClass);
  });
}

setupMobileSidebar();

// ===== Firebase (نفس الكونفيج) =====
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
const db = getFirestore(app);

const cardsEl = document.getElementById("activityCards");

onAuthStateChanged(auth, (user) => {
  if (!user) {
    cardsEl.innerHTML = "<div class='loading'>غير مسجّل دخول</div>";
    return;
  }

  const q = query(
    collection(db, "mzj_activity_log"),
    orderBy("ts", "desc"),
    limit(300)
  );

  onSnapshot(q, (snap) => {
    cardsEl.innerHTML = "";

    snap.forEach((docSnap) => {
      const d = docSnap.data() || {};

      cardsEl.insertAdjacentHTML(
        "beforeend",
        `
        <div class="activity-card">
          <div class="activity-row"><span>التاريخ:</span> ${d.createdAt || "—"}</div>
          <div class="activity-row"><span>العضو:</span> ${d.userName || "—"}</div>
          <div class="activity-row"><span>الدور:</span> ${d.role || "—"}</div>
          <div class="activity-row"><span>نوع الحركة:</span> ${d.action || "—"}</div>
          <div class="activity-meta">${d.details || ""}</div>
        </div>
        `
      );
    });

    if (!snap.size) {
      cardsEl.innerHTML = "<div class='loading'>لا يوجد سجلات</div>";
    }
  });
});
