/* MZJ Mobile JS — Admin page only
   - Sidebar toggle (existing button #mzjSidebarBtn)
   - Inner Tabs -> dropdown list
   - "تعديل السيارات" table (#carsTable) -> cards grid (3 columns per row)
     + click card / buttons triggers original edit/delete so logic stays intact
*/

(function () {
  const isMobile = () => window.matchMedia("(max-width: 768px)").matches;

  // ===== Delegated handler for cars cards (edit/delete) =====
  function __mzjCarsDelegatedHandler(e){
    const btn = e.target && e.target.closest && e.target.closest("[data-mzj-cars-action]");
    if(!btn) return;

    // Stop card click and prevent any default
    e.preventDefault();
    e.stopPropagation();

    const action = btn.dataset.mzjCarsAction;
    const rowId = btn.dataset.rowId;
    const tableId = btn.dataset.tableId || "carsTable";
    const table = document.getElementById(tableId);

    if(!table || !rowId) return;

    if(action === "edit"){
      // Open our modal (built from inline editors created by original logic)
      try{
        openCarsInlineEditModal(table, rowId);
      }catch(err){
        console.error("Cars edit failed:", err);
        // Fallback: trigger original edit
        triggerOriginal(table, rowId, "edit");
      }
    }else if(action === "del"){
      try{
        triggerOriginal(table, rowId, "del");
      }catch(err){
        console.error("Cars delete failed:", err);
      }
    }
  }

  // capture=true so it works even if other handlers stop propagation
  document.addEventListener("click", __mzjCarsDelegatedHandler, true);

  function ensureBackdrop() {
    let bd = document.querySelector(".mzj-backdrop");
    if (!bd) {
      bd = document.createElement("div");
      bd.className = "mzj-backdrop";
      document.body.appendChild(bd);
    }
    bd.addEventListener("click", () => document.body.classList.remove("mzj-sidebar-open"));
  }

  function setupSidebarToggle() {
    const btn = document.getElementById("mzjSidebarBtn");
    if (!btn) return;
    btn.addEventListener("click", () => {
      document.body.classList.toggle("mzj-sidebar-open");
    });
  }

  function setupInnerTabsDropdown() {
    const tabsWrap = document.querySelector(".inner-tabs");
    if (!tabsWrap) return;

    const tabButtons = Array.from(tabsWrap.querySelectorAll(".inner-tab[data-target]"));
    if (!tabButtons.length) return;

    // create dropdown
    let select = document.querySelector(".inner-tabs-select");
    if (!select) {
      select = document.createElement("select");
      select.className = "inner-tabs-select";
      tabsWrap.parentElement.insertBefore(select, tabsWrap);
    }

    select.innerHTML = "";
    tabButtons.forEach((b) => {
      const opt = document.createElement("option");
      opt.value = b.getAttribute("data-target");
      opt.textContent = b.textContent.trim();
      select.appendChild(opt);
    });

    const activeBtn = tabButtons.find(b => b.classList.contains("active")) || tabButtons[0];
    select.value = activeBtn.getAttribute("data-target");

    select.addEventListener("change", () => {
      const target = select.value;
      const btn = tabButtons.find(b => b.getAttribute("data-target") === target);
      if (btn) btn.click();
    });
  }



  // ====== Simple tables -> cards (for tracking + activity log) ======
  function debounce(fn, wait=120){
    let t; 
    return (...args)=>{ clearTimeout(t); t=setTimeout(()=>fn(...args), wait); };
  }

  function buildSimpleCards(table){
    if (!table) return;

    const tbody = table.querySelector("tbody");
    if (!tbody) return;

    const wrap = table.closest(".table-wrap") || table.parentElement;
    if (!wrap) return;

    // headers
    const headers = Array.from(table.querySelectorAll("thead th")).map(th => th.textContent.trim());
    const rows = Array.from(tbody.querySelectorAll("tr"));
    if (!rows.length) {
      // لو مفيش داتا: امسح الكروت لو موجودة وخلي الجدول مخفي زي ما هو
      const old = wrap.querySelector(".mzj-table-cards");
      if (old) old.remove();
      return;
    }

    // remove old cards
    const old = wrap.querySelector(".mzj-table-cards");
    if (old) old.remove();

    const cardsWrap = document.createElement("div");
    cardsWrap.className = "mzj-table-cards";

    rows.forEach((tr) => {
      const tds = Array.from(tr.querySelectorAll("td"));
      if (!tds.length) return;

      const card = document.createElement("div");
      card.className = "mzj-row-card";

      const grid = document.createElement("div");
      grid.className = "mzj-row-grid";

      tds.forEach((td, i) => {
        const cell = document.createElement("div");
        cell.className = "mzj-cell";

        const k = document.createElement("div");
        k.className = "mzj-k";
        k.textContent = headers[i] || `عمود ${i+1}`;

        const v = document.createElement("div");
        v.className = "mzj-v";
        v.textContent = (td.textContent || '').trim() || "—";

        cell.appendChild(k);
        cell.appendChild(v);
        grid.appendChild(cell);
      });

      card.appendChild(grid);
      cardsWrap.appendChild(card);
    });

    // hide original table but keep it in DOM for logic
    table.style.display = "none";
    wrap.appendChild(cardsWrap);
  }

  function observeTableForCards(table){
    if (!table || table.dataset.mzjObserved) return;
    table.dataset.mzjObserved = "1";

    const rerender = debounce(() => buildSimpleCards(table), 150);

    // Observe tbody if exists
    const tbody = table.querySelector("tbody");
    if (tbody) {
      const obs = new MutationObserver(rerender);
      obs.observe(tbody, { childList: true, subtree: true, characterData: true });
      // first render try
      buildSimpleCards(table);
      return;
    }

    // If tbody not ready, observe table until it appears
    const obs2 = new MutationObserver(() => {
      const tb = table.querySelector("tbody");
      if (tb) {
        obs2.disconnect();
        observeTableForCards(table);
      }
    });
    obs2.observe(table, { childList: true, subtree: true });
  }

  function getCarsTable() {
    return document.getElementById("carsTable");
  }

  function triggerOriginal(table, rowId, type) {
    if (!table || !rowId) return false;
    const selector = type === "del" ? `[data-del="${rowId}"]` : `[data-edit="${rowId}"]`;
    const btn = table.querySelector(selector);
    if (!btn) return false;

    // Use a real MouseEvent so document-level delegation in the main module catches it reliably
    btn.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true, view: window }));
    return true;
  }

  
  // ===== Inline edit modal for "تعديل السيارات" cards (mobile) =====
  function ensureCarsEditModal() {
    let modal = document.getElementById("mzjCarsEditModal");
    if (modal) return modal;

    modal = document.createElement("div");
    modal.id = "mzjCarsEditModal";
    modal.style.cssText = "position:fixed;inset:0;z-index:4000;display:none;align-items:flex-end;justify-content:center;";

    modal.innerHTML = `
      <div class="mzj-modal-backdrop" style="position:absolute;inset:0;background:rgba(0,0,0,.38)"></div>
      <div class="mzj-modal-sheet" style="position:relative;width:100%;max-width:720px;background:#fff;border-radius:16px 16px 0 0;max-height:92vh;overflow:auto;padding:14px">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:10px">
          <div style="font-weight:800;font-size:14px">تعديل السيارة</div>
          <button type="button" id="mzjCarsEditClose" class="btn btn-ghost" style="width:auto">إغلاق</button>
        </div>
        <div id="mzjCarsEditForm" style="display:grid;grid-template-columns:1fr;gap:10px"></div>
        <div style="display:flex;gap:10px;margin-top:12px">
          <button type="button" id="mzjCarsEditSave" class="btn btn-primary" style="flex:1">حفظ</button>
          <button type="button" id="mzjCarsEditCancel" class="btn btn-ghost" style="flex:1">إلغاء</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    const close = () => { modal.style.display = "none"; modal.dataset.rowId = ""; };
    modal.querySelector(".mzj-modal-backdrop").addEventListener("click", close);
    modal.querySelector("#mzjCarsEditClose").addEventListener("click", close);

    modal.querySelector("#mzjCarsEditCancel").addEventListener("click", () => {
      const rowId = modal.dataset.rowId;
      const table = getCarsTable();
      if (table && rowId) {
        const btn = table.querySelector(`[data-cancel-inline="${rowId}"]`);
        if (btn) btn.dispatchEvent(new MouseEvent("click", { bubbles:true, cancelable:true, view:window }));
      }
      close();
    });

    return modal;
  }

  function openCarsInlineEditModal(table, rowId) {
    if (!table || !rowId) return;

    // trigger original inline edit on hidden table row (creates inputs + save/cancel buttons)
    triggerOriginal(table, rowId, "edit");

    const tr = table.querySelector(`button[data-edit="${rowId}"]`)?.closest("tr");
    if (!tr) return;

    const modal = ensureCarsEditModal();
    modal.dataset.rowId = String(rowId);

    const form = modal.querySelector("#mzjCarsEditForm");
    form.innerHTML = "";

    const headers = Array.from(table.querySelectorAll("thead th")).map(th => (th.textContent || "").trim());

    const fields = [
      { sel: ".edit-car", label: headers[0] || "السيارة" },
      { sel: ".edit-variant", label: headers[1] || "الفئة" },
      { sel: ".edit-dealer", label: headers[2] || "المعرض" },
      { sel: ".edit-extColor", label: headers[3] || "اللون الخارجي" },
      { sel: ".edit-intColor", label: headers[4] || "اللون الداخلي" },
      { sel: ".edit-modelYear", label: headers[5] || "الموديل" },
      { sel: ".edit-plate", label: headers[6] || "اللوحة" },
      { sel: ".edit-location", label: headers[7] || "المكان" },
      { sel: ".edit-batchName", label: headers[8] || "اسم الدفعة" },
      { sel: ".edit-vin", label: headers[9] || "رقم الهيكل" },
      { sel: ".edit-notes", label: headers[10] || "الملاحظات" }
    ];

    fields.forEach((f) => {
      const el = tr.querySelector(f.sel);
      if (!el) return;

      const wrap = document.createElement("div");
      wrap.style.cssText = "display:flex;flex-direction:column;gap:6px";

      const lab = document.createElement("div");
      lab.textContent = f.label;
      lab.style.cssText = "font-size:12px;font-weight:700;opacity:.8";
      wrap.appendChild(lab);

      const control = el.cloneNode(true);
      control.style.width = "100%";
      control.style.fontSize = "16px";
      control.dataset.bindSel = f.sel;
      if (control.tagName === "TEXTAREA") control.style.minHeight = "70px";
      wrap.appendChild(control);

      form.appendChild(wrap);
    });

    modal.querySelector("#mzjCarsEditSave").onclick = () => {
      const rowId2 = modal.dataset.rowId;
      const tr2 = table.querySelector(`button[data-edit="${rowId2}"]`)?.closest("tr");
      if (!tr2) { modal.style.display = "none"; return; }

      form.querySelectorAll("[data-bind-sel]").forEach((control) => {
        const sel = control.dataset.bindSel;
        const orig = tr2.querySelector(sel);
        if (!orig) return;
        orig.value = control.value;
        orig.dispatchEvent(new Event("input", { bubbles:true }));
        orig.dispatchEvent(new Event("change", { bubbles:true }));
      });

      const saveBtn = table.querySelector(`[data-save-inline="${rowId2}"]`);
      if (saveBtn) saveBtn.dispatchEvent(new MouseEvent("click", { bubbles:true, cancelable:true, view:window }));
      modal.style.display = "none";
    };

    modal.style.display = "flex";
  }

function rebuildCarsCards() {
    const table = getCarsTable();
    if (!table) return;

    const tbody = table.querySelector("tbody");
    if (!tbody) return;

    // container target
    const wrap = table.closest(".table-wrap") || table.parentElement;
    if (!wrap) return;

    // remove old cards
    const old = wrap.querySelector(".mzj-table-cards");
    if (old) old.remove();

    const headers = Array.from(table.querySelectorAll("thead th")).map(th => th.textContent.trim());
    const rows = Array.from(tbody.querySelectorAll("tr"));
    if (!rows.length) return;

    const cardsWrap = document.createElement("div");
    cardsWrap.className = "mzj-table-cards";

    rows.forEach((tr) => {
      const editBtn = tr.querySelector("[data-edit]");
      const delBtn  = tr.querySelector("[data-del]");
      const rowId = editBtn ? editBtn.getAttribute("data-edit") : (delBtn ? delBtn.getAttribute("data-del") : "");

      const tds = Array.from(tr.querySelectorAll("td"));
      if (!tds.length) return;

      const card = document.createElement("div");
      card.className = "mzj-row-card";
      if (rowId) card.dataset.rowId = rowId;

      // click on card = edit
      card.addEventListener("click", (e) => {
        // avoid double triggering when clicking action buttons
        const target = e.target;
        if (target && (target.closest(".mzj-row-actions"))) return;
        openCarsInlineEditModal(table, rowId);
      });

      const grid = document.createElement("div");
      grid.className = "mzj-row-grid";

      // last column is actions — skip it
      const maxCols = Math.max(0, tds.length - 1);

      for (let i = 0; i < maxCols; i++) {
        const td = tds[i];
        const text = (td.textContent || "").trim();

        const cell = document.createElement("div");
        cell.className = "mzj-cell";

        const k = document.createElement("div");
        k.className = "mzj-k";
        k.textContent = headers[i] || `عمود ${i + 1}`;

        const v = document.createElement("div");
        v.className = "mzj-v";
        v.textContent = text || "—";

        cell.appendChild(k);
        cell.appendChild(v);
        grid.appendChild(cell);
      }

      const actions = document.createElement("div");
      actions.className = "mzj-row-actions";

      const edit = document.createElement("button");
      edit.type = "button";
      edit.className = "btn btn-ghost";
      edit.textContent = "تعديل ✎";
      // Use delegated click handler (more reliable with dynamic rendering)
      edit.dataset.mzjCarsAction = "edit";
      edit.dataset.rowId = String(rowId || "");
      edit.dataset.tableId = table.id || "carsTable";

      const del = document.createElement("button");
      del.type = "button";
      del.className = "btn btn-danger";
      del.textContent = "حذف 🗑";
      del.dataset.mzjCarsAction = "del";
      del.dataset.rowId = String(rowId || "");
      del.dataset.tableId = table.id || "carsTable";

      actions.appendChild(edit);
      actions.appendChild(del);

      card.appendChild(grid);
      card.appendChild(actions);
      cardsWrap.appendChild(card);
    });

    // hide original table (keep it for logic)
    table.style.display = "none";
    wrap.appendChild(cardsWrap);
  }

  function observeCarsTable() {
    const table = getCarsTable();
    if (!table) return;
    const tbody = table.querySelector("tbody");
    if (!tbody) return;

    // initial build (in case rows already present)
    rebuildCarsCards();

    const obs = new MutationObserver(() => {
      // rebuild when rows change (renderTable() clears/append rows)
      rebuildCarsCards();
    });
    obs.observe(tbody, { childList: true, subtree: true });
  }


  function __mzjObserveCarsTable(){
    const table = getCarsTable();
    if(!table) return;
    const tbody = table.querySelector("tbody");
    if(!tbody) return;

    const rebuild = () => {
      try { convertCarsTableToCards(); } catch(e) { /* ignore */ }
    };

    const obs = new MutationObserver(() => rebuild());
    obs.observe(tbody, { childList:true, subtree:true });
    // initial
    rebuild();
  }

  function init() {
    if (!isMobile()) return;
    ensureBackdrop();
    setupSidebarToggle();
    setupInnerTabsDropdown();
    observeTableForCards(document.getElementById("trackTable"));
    observeTableForCards(document.getElementById("movesTable"));
    observeCarsTable();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
