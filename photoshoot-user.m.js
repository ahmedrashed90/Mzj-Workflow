/* photoshoot-user.m.js
   Enhancements for mobile UX WITHOUT touching existing PC logic.
   - Keeps sidebar toggle working (fallback listener)
   - Converts long tables to "card-table" on mobile by adding data-labels to td
   - Watches for dynamic table updates (MutationObserver)
*/
(function () {
  "use strict";

  const isMobile = () => window.matchMedia && window.matchMedia("(max-width: 900px)").matches;

  // ---------- Sidebar toggle fallback ----------
  function sidebarFallback() {
    const btn =
      document.querySelector("#mzjSidebarBtn") ||
      document.querySelector("[data-mzj-sidebar-toggle]") ||
      document.querySelector(".mzj-sidebar-btn");

    const sidebar = document.querySelector("#mzjSidebar") || document.querySelector(".mzj-sidebar");
    const backdrop = document.querySelector("#mzjBackdrop") || document.querySelector(".mzj-backdrop");

    if (!btn || !sidebar) return;

    // If already has a handler from mzj-ui.js, don't double-bind.
    if (btn.dataset._boundMobileSidebar === "1") return;
    btn.dataset._boundMobileSidebar = "1";

    const open = () => {
      document.body.classList.add("sidebar-open");
      sidebar.classList.add("is-open");
      if (backdrop) backdrop.classList.add("is-open");
      btn.setAttribute("aria-expanded", "true");
    };

    const close = () => {
      document.body.classList.remove("sidebar-open");
      sidebar.classList.remove("is-open");
      if (backdrop) backdrop.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
    };

    const toggle = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const opened = document.body.classList.contains("sidebar-open") || sidebar.classList.contains("is-open");
      opened ? close() : open();
    };

    btn.addEventListener("click", toggle, { passive: false });
    if (backdrop) backdrop.addEventListener("click", close);

    // Close when clicking a sidebar link (mobile)
    sidebar.addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (a) close();
    });
  }

  // ---------- Card table helpers ----------
  function getHeaderLabels(table) {
    const labels = [];
    const ths = table.querySelectorAll("thead th");
    ths.forEach((th) => {
      const txt = (th.textContent || "").trim();
      labels.push(txt || "—");
    });
    return labels;
  }

  function applyLabels(table) {
    if (!table || table.dataset._mobileLabeled === "1") return;

    const labels = getHeaderLabels(table);
    // If no headers, skip (we can still label by column index with generic)
    const rows = table.querySelectorAll("tbody tr");
    rows.forEach((tr) => {
      const tds = Array.from(tr.children).filter((el) => el.tagName === "TD");
      tds.forEach((td, idx) => {
        if (!td.getAttribute("data-label")) {
          const label = labels[idx] || `حقل ${idx + 1}`;
          td.setAttribute("data-label", label);
        }
      });
    });

    table.classList.add("mzj-mobile-cards");
    table.dataset._mobileLabeled = "1";
  }

  function relabel(table) {
    if (!table) return;
    // Force relabel for dynamic rows
    table.dataset._mobileLabeled = "0";
    applyLabels(table);
  }

  function observeTable(table) {
    if (!table) return;
    const tbody = table.querySelector("tbody");
    if (!tbody) return;

    const obs = new MutationObserver(() => {
      if (isMobile()) relabel(table);
    });
    obs.observe(tbody, { childList: true, subtree: true });
  }

  function hookKnownTables() {
    // Try common IDs used in photoshoot-user page (safe if missing)
    const candidates = [
      "#ordersTable",
      "#doneTable",
      "#activityTable",
      "#manageOrdersTable",
      "#completedOrdersTable",
      ".orders-table",
      ".done-table",
      ".activity-table",
      // Any table inside tabs except the create table (create uses its own layout)
      "#tab-manage table",
      "#tab-done table",
      "#tab-archive table",
      "#tab-activity table",
      ".modal table"
    ];

    const tables = new Set();
    candidates.forEach((sel) => {
      document.querySelectorAll(sel).forEach((t) => {
        if (t && t.tagName === "TABLE") tables.add(t);
      });
    });

    tables.forEach((t) => {
      // Skip create table: it becomes grid via CSS
      if (t.closest("#tab-create")) return;
      if (isMobile()) relabel(t);
      observeTable(t);
    });
  }

  function onReady(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  onReady(() => {
    sidebarFallback();
    hookKnownTables();

    // Re-apply on tab switches / modal opens (many pages update DOM without full reload)
    document.addEventListener("click", () => {
      if (isMobile()) hookKnownTables();
    });

    window.addEventListener("resize", () => {
      if (isMobile()) hookKnownTables();
    });
  });
})();
