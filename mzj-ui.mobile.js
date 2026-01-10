/* MZJ Mobile JS — Admin page only
   - Sidebar toggle (existing button #mzjSidebarBtn)
   - Tabs -> dropdown
   - Tables -> card grid (3 columns per row)
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

  function setupTabsDropdown() {
    const tabs = document.querySelector(".mzj-tabs");
    if (!tabs) return;

    const tabButtons = Array.from(tabs.querySelectorAll("[data-tab]"));
    if (!tabButtons.length) return;

    // Hide tabs on mobile via CSS, but create dropdown
    let select = document.querySelector(".mzj-tabs-select");
    if (!select) {
      select = document.createElement("select");
      select.className = "mzj-tabs-select";
      tabs.parentElement.insertBefore(select, tabs);
    }

    select.innerHTML = "";
    tabButtons.forEach((b) => {
      const opt = document.createElement("option");
      opt.value = b.getAttribute("data-tab");
      opt.textContent = b.textContent.trim();
      select.appendChild(opt);
    });

    // find active tab
    const activeBtn = tabButtons.find(b => b.classList.contains("active")) || tabButtons[0];
    select.value = activeBtn.getAttribute("data-tab");

    select.addEventListener("change", () => {
      const target = select.value;
      const btn = tabButtons.find(b => b.getAttribute("data-tab") === target);
      if (btn) btn.click();
    });
  }

  function tableToCards(table) {
    const thead = table.querySelector("thead");
    const tbody = table.querySelector("tbody");
    if (!tbody) return;

    const headers = thead
      ? Array.from(thead.querySelectorAll("th")).map(th => th.textContent.trim())
      : [];

    const rows = Array.from(tbody.querySelectorAll("tr"));
    if (!rows.length) return;

    const cardsWrap = document.createElement("div");
    cardsWrap.className = "mzj-table-cards";

    rows.forEach((tr) => {
      const tds = Array.from(tr.querySelectorAll("td"));
      if (!tds.length) return;

      // Create card
      const card = document.createElement("div");
      card.className = "mzj-row-card";

      const grid = document.createElement("div");
      grid.className = "mzj-row-grid";

      // If there are action buttons/inputs, keep them as actions
      const actions = document.createElement("div");
      actions.className = "mzj-row-actions";

      tds.forEach((td, i) => {
        const hasBtn = td.querySelector("button, a, input, select, textarea");
        const text = td.textContent.trim();

        // If cell contains controls (edit/delete), move to actions
        if (hasBtn && (td.querySelector("button") || td.querySelector("a"))) {
          const clones = Array.from(td.querySelectorAll("button, a")).map(el => el.cloneNode(true));
          clones.forEach(c => actions.appendChild(c));
          return;
        }

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
      });

      card.appendChild(grid);

      // Only append actions if there are any
      if (actions.children.length) {
        card.appendChild(actions);
      }

      cardsWrap.appendChild(card);
    });

    // Replace table wrapper content
    const wrap = table.closest(".table-wrap") || table.parentElement;
    if (!wrap) return;

    // Keep original table hidden (so listeners depending on it won't break)
    table.style.display = "none";
    wrap.appendChild(cardsWrap);
  }

  function setupTables() {
    document.querySelectorAll("table").forEach((t) => {
      // avoid double conversion
      const wrap = t.closest(".table-wrap") || t.parentElement;
      if (wrap && wrap.querySelector(".mzj-table-cards")) return;
      tableToCards(t);
    });
  }

  function init() {
    if (!isMobile()) return;
    ensureBackdrop();
    setupSidebarToggle();
    setupTabsDropdown();
    setupTables();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
