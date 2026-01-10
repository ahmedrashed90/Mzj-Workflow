/* dashboard.m.js — Mobile behaviors for dashboard.m.html
   - Sidebar off-canvas toggle (بديل mzj-ui.js)
   - تحويل جداول المودال إلى كروت عبر حقن data-label من رؤوس الجدول
*/

(function(){
  function ready(fn){
    if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  function setupSidebar(){
    const btn = document.getElementById('mzjSidebarBtn');
    const sidebar = document.getElementById('mzjSidebar');
    if(!btn || !sidebar) return;

    let overlay = document.getElementById('mzjSidebarOverlay');
    if(!overlay){
      overlay = document.createElement('div');
      overlay.id = 'mzjSidebarOverlay';
      document.body.appendChild(overlay);
    }

    const open = () => { sidebar.classList.add('open'); overlay.classList.add('show'); };
    const close = () => { sidebar.classList.remove('open'); overlay.classList.remove('show'); };

    btn.addEventListener('click', (e)=>{ e.preventDefault(); sidebar.classList.contains('open') ? close() : open(); });
    overlay.addEventListener('click', close);
    document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') close(); });

    // close when clicking a link inside sidebar
    sidebar.addEventListener('click', (e)=>{
      const a = e.target.closest('a');
      if(a) close();
    });
  }

  function enhanceTablesAsCards(root){
    const tables = (root || document).querySelectorAll('#backdrop table');
    tables.forEach(table=>{
      if(table.dataset.mzjEnhanced === '1') return;

      // get headers from thead
      const headers = Array.from(table.querySelectorAll('thead th')).map(th => (th.textContent || '').trim());
      if(headers.length){
        const rows = table.querySelectorAll('tbody tr');
        rows.forEach(tr=>{
          const tds = tr.querySelectorAll('td');
          tds.forEach((td, i)=>{
            if(!td.getAttribute('data-label')){
              const label = headers[i] || `حقل ${i+1}`;
              td.setAttribute('data-label', label);
            }
          });
        });
      }
      table.dataset.mzjEnhanced = '1';
    });
  }

  function observeModalTables(){
    const backdrop = document.getElementById('backdrop');
    if(!backdrop) return;

    // initial pass
    enhanceTablesAsCards(document);

    const obs = new MutationObserver((mutations)=>{
      for(const m of mutations){
        if(m.type === 'childList'){
          enhanceTablesAsCards(backdrop);
        }
      }
    });
    obs.observe(backdrop, { childList:true, subtree:true });
  }

  ready(function(){
    setupSidebar();
    observeModalTables();
  });
})();


/* ================================
   Mobile: Convert modal tables to cards (professional view)
   - No changes to data logic
   ================================ */
(function(){
  const isMobile = () => window.matchMedia && window.matchMedia("(max-width: 768px)").matches;

  function textClean(s){ return (s||"").replace(/\s+/g," ").trim(); }

  function isLongValue(v){
    return v.length > 28 || /[\n\r]/.test(v);
  }

  function ensureCardsAfter(table, wrapperClass){
    const wrap = table.closest(".table-wrap") || table.parentElement;
    if(!wrap) return null;
    let cards = wrap.parentElement.querySelector("."+wrapperClass);
    if(!cards){
      cards = document.createElement("div");
      cards.className = wrapperClass;
      wrap.parentElement.insertBefore(cards, wrap.nextSibling);
    }
    return cards;
  }

  function tableToCards(table){
    if(!isMobile() || !table) return;
    const tbody = table.querySelector("tbody");
    if(!tbody) return;

    const headers = Array.from(table.querySelectorAll("thead th")).map(th => textClean(th.textContent));
    const rows = Array.from(tbody.querySelectorAll("tr"));
    if(!rows.length) return;

    const cardsWrap = ensureCardsAfter(table, "mzj-detail-cards");
    if(!cardsWrap) return;

    cardsWrap.innerHTML = "";

    rows.forEach(tr => {
      const tds = Array.from(tr.querySelectorAll("td"));
      if(!tds.length) return;

      const card = document.createElement("div");
      card.className = "mzj-detail-card";

      const grid = document.createElement("div");
      grid.className = "mzj-detail-grid";

      tds.forEach((td, i) => {
        // Skip cells that are just action buttons in modals (rare)
        const hasControls = td.querySelector("button, a, input, select, textarea");
        const raw = textClean(td.textContent);
        if(hasControls && raw === "") return;

        const field = document.createElement("div");
        field.className = "mzj-field";

        const k = document.createElement("div");
        k.className = "mzj-k";
        k.textContent = headers[i] || `عمود ${i+1}`;

        const v = document.createElement("div");
        v.className = "mzj-v";
        v.textContent = raw || "—";

        // Mark copyable values
        const key = (headers[i] || "").toLowerCase();
        if (/vin|هيكل|رقم الهيكل|جوال|phone|رقم|id|plate|لوحة/.test(key) || /^[0-9]{5,}$/.test(raw)):
          v.classList.add("copyable");

        // Make long values full width
        if(isLongValue(raw)) field.classList.add("full");

        field.appendChild(k);
        field.appendChild(v);
        grid.appendChild(field);
      });

      card.appendChild(grid);
      cardsWrap.appendChild(card);
    });

    // Hide table only on mobile
    /* table hidden disabled (keep table) */
  }

  function scanAllModalTables(){
    if(!isMobile()) return;
    // tables inside visible modals (any common modal selector)
    const candidates = document.querySelectorAll(".modal table, .mzj-modal table, dialog table, .popup table");
    candidates.forEach(tableToCards);
  }

  // Observe DOM for modal open / table render changes
  const obs = new MutationObserver(() => scanAllModalTables());
  obs.observe(document.documentElement, { childList: true, subtree: true });

  // Copy handler
  document.addEventListener("click", (e)=>{
    const el = e.target.closest(".mzj-v.copyable");
    if(!el) return;
    const val = textClean(el.textContent);
    if(!val || val === "—") return;
    navigator.clipboard?.writeText(val).catch(()=>{});
    el.style.opacity = "0.6";
    setTimeout(()=> el.style.opacity="1", 250);
  });

  // Initial scan
  document.addEventListener("DOMContentLoaded", ()=> scanAllModalTables());
})();



/* ================================
   Mobile: Modal table -> 3 columns per row (no cards)
   ================================ */
(function(){
  const isMobile = () => window.matchMedia && window.matchMedia("(max-width: 768px)").matches;
  const clean = (s)=> (s||"").replace(/\s+/g," ").trim();

  function removeGeneratedCards(root){
    root.querySelectorAll(".mzj-detail-cards").forEach(el => el.remove());
  }

  function applyLabels(table){
    if(!isMobile() || !table) return;
    const ths = Array.from(table.querySelectorAll("thead th")).map(th => clean(th.textContent));
    const rows = Array.from(table.querySelectorAll("tbody tr"));
    if(!rows.length || !ths.length) return;

    rows.forEach(tr => {
      const tds = Array.from(tr.querySelectorAll("td"));
      tds.forEach((td,i)=>{
        td.setAttribute("data-label", ths[i] || `عمود ${i+1}`);
        td.classList.remove("mzj-full");
      });

      // make "الملاحظات" full width if exists
      const notesIndex = ths.findIndex(h => /الملاحظات|ملاحظات/i.test(h));
      if(notesIndex >= 0 && tds[notesIndex]){
        tds[notesIndex].classList.add("mzj-full");
      }
    });
  }

  function scan(){
    if(!isMobile()) return;
    const modals = document.querySelectorAll(".mzj-modal, .modal, dialog[open], .popup");
    modals.forEach(m => {
      removeGeneratedCards(m);
      m.querySelectorAll("table").forEach(applyLabels);
    });
  }

  const obs = new MutationObserver(()=> scan());
  obs.observe(document.documentElement, {childList:true, subtree:true});

  document.addEventListener("DOMContentLoaded", ()=> scan());
})();
