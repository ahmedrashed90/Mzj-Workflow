/* MZJ Mobile JS — Admin page only
   - Sidebar toggle (existing button #mzjSidebarBtn)
   - Inner Tabs -> dropdown list
   - "تعديل السيارات" table (#carsTable) -> cards grid (3 columns per row)
     + click card / buttons triggers original edit/delete so logic stays intact
*/

(function () {
  const isMobile = () => window.matchMedia("(max-width: 768px)").matches;

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
    if (!table || !rowId) return;
    let selector = "";
    if (type === "del") selector = `[data-del="${rowId}"]`;
    else if (type === "edit") selector = `[data-edit="${rowId}"]`;
    else if (type === "save") selector = `[data-save-inline="${rowId}"]`;
    else if (type === "cancel") selector = `[data-cancel-inline="${rowId}"]`;
    if (!selector) return;
    const btn = table.querySelector(selector);
    if (btn) btn.click();
  }

  function rebuildCarsCards() {
    const table = getCarsTable();
    if (!table) return;

    const tbody = table.querySelector("tbody");
    if (!tbody) return;

    const wrap = table.closest(".table-wrap") || table.parentElement;
    if (!wrap) return;

    const old = wrap.querySelector(".mzj-table-cards");
    if (old) old.remove();

    const theadThs = Array.from(table.querySelectorAll("thead th"));
    const headers = theadThs.map((th) => (th.textContent || "").trim());

    const cardsWrap = document.createElement("div");
    cardsWrap.className = "mzj-table-cards";

    const rows = Array.from(tbody.querySelectorAll("tr"));
    rows.forEach((tr) => {
      const tds = Array.from(tr.querySelectorAll("td"));
      if (!tds.length) return;

      // Determine row id + mode
      const btnEdit = tr.querySelector("[data-edit]");
      const btnDel = tr.querySelector("[data-del]");
      const btnSave = tr.querySelector("[data-save-inline]");
      const btnCancel = tr.querySelector("[data-cancel-inline]");

      const rowId =
        (btnEdit && btnEdit.getAttribute("data-edit")) ||
        (btnDel && btnDel.getAttribute("data-del")) ||
        (btnSave && btnSave.getAttribute("data-save-inline")) ||
        (btnCancel && btnCancel.getAttribute("data-cancel-inline")) ||
        tr.dataset.rowId ||
        null;

      if (rowId) tr.dataset.rowId = String(rowId);

      const isEditMode = !!(btnSave || btnCancel);

      const card = document.createElement("div");
      card.className = "mzj-row-card" + (isEditMode ? " is-editing" : "");

      const grid = document.createElement("div");
      grid.className = "mzj-row-grid";

      // last column is actions in table — skip it
      const maxCols = Math.max(0, tds.length - 1);

      for (let i = 0; i < maxCols; i++) {
        const td = tds[i];

        const cell = document.createElement("div");
        cell.className = "mzj-cell";

        const k = document.createElement("div");
        k.className = "mzj-k";
        k.textContent = headers[i] || `عمود ${i + 1}`;

        const v = document.createElement("div");
        v.className = "mzj-v";

        // If the table row is in inline edit, the TD contains inputs/selects/textarea.
        const inputEl = td.querySelector("input, select, textarea");
        if (inputEl) {
          // Clone UI element for the card, and sync value back to the original.
          const clone = inputEl.cloneNode(true);
          // Ensure clone reflects current value
          if (clone.tagName === "SELECT") {
            clone.value = inputEl.value;
          } else if (clone.type === "checkbox") {
            clone.checked = inputEl.checked;
          } else {
            clone.value = inputEl.value || "";
          }

          const sync = () => {
            if (inputEl.tagName === "SELECT") {
              inputEl.value = clone.value;
              inputEl.dispatchEvent(new Event("change", { bubbles: true }));
            } else if (inputEl.type === "checkbox") {
              inputEl.checked = clone.checked;
              inputEl.dispatchEvent(new Event("change", { bubbles: true }));
            } else {
              inputEl.value = clone.value;
              inputEl.dispatchEvent(new Event("input", { bubbles: true }));
            }
          };

          clone.addEventListener("input", sync);
          clone.addEventListener("change", sync);

          v.appendChild(clone);
        } else {
          const text = (td.textContent || "").trim();
          v.textContent = text || "—";
        }

        cell.appendChild(k);
        cell.appendChild(v);
        grid.appendChild(cell);
      }

      const actions = document.createElement("div");
      actions.className = "mzj-row-actions";

      if (isEditMode) {
        const save = document.createElement("button");
        save.type = "button";
        save.className = "btn btn-primary";
        save.textContent = "حفظ ✅";
        save.addEventListener("click", () => {
          triggerOriginal(table, rowId, "save");
        });

        const cancel = document.createElement("button");
        cancel.type = "button";
        cancel.className = "btn btn-ghost";
        cancel.textContent = "إلغاء ✖";
        cancel.addEventListener("click", () => {
          triggerOriginal(table, rowId, "cancel");
        });

        actions.appendChild(save);
        actions.appendChild(cancel);
      } else {
        const edit = document.createElement("button");
        edit.type = "button";
        edit.className = "btn btn-ghost";
        edit.textContent = "تعديل ✎";
        edit.addEventListener("click", () => {
          // trigger original inline-edit (table logic)
          triggerOriginal(table, rowId, "edit");
          // rebuild quickly so card shows inputs
          setTimeout(rebuildCarsCards, 50);
        });

        const del = document.createElement("button");
        del.type = "button";
        del.className = "btn btn-danger";
        del.textContent = "حذف 🗑";
        del.addEventListener("click", () => triggerOriginal(table, rowId, "del"));

        actions.appendChild(edit);
        actions.appendChild(del);
      }

      card.appendChild(grid);
      card.appendChild(actions);
      cardsWrap.appendChild(card);
    });

    // keep original table for logic
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
