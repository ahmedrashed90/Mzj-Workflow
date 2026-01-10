/* dashboard.m.js — Mobile behaviors for dashboard.m.html
   ✅ Sidebar Drawer toggle (robust selectors)
   ✅ Modal tables -> Excel-like GridTable (3 columns per row) preserving order
*/

(function(){
  function ready(fn){
    if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  function isMobile(){
    return window.matchMedia && window.matchMedia('(max-width: 900px)').matches;
  }

  function ensureOverlay(){
    let overlay = document.getElementById('mzjSidebarOverlay');
    if(!overlay){
      overlay = document.createElement('div');
      overlay.id = 'mzjSidebarOverlay';
      document.body.appendChild(overlay);
    }
    return overlay;
  }

  function setupSidebar(){
    const sidebar = document.getElementById('mzjSidebar') || document.querySelector('.mzj-sidebar');
    if(!sidebar) return;

    // زرار السايدبار: يدعم أكتر من selector عشان ما يبوظ لو الـ id اتغير
    const btn =
      document.getElementById('mzjSidebarBtn') ||
      document.querySelector('[data-mzj-sidebar-btn]') ||
      document.querySelector('.mzjSidebarBtn') ||
      document.querySelector('button[aria-label*="menu" i]') ||
      document.querySelector('button[aria-label*="sidebar" i]') ||
      document.querySelector('button.icon-btn');

    if(!btn) return;

    const overlay = ensureOverlay();

    const open  = () => { sidebar.classList.add('open'); overlay.classList.add('show'); };
    const close = () => { sidebar.classList.remove('open'); overlay.classList.remove('show'); };
    const toggle = () => { sidebar.classList.contains('open') ? close() : open(); };

    // مهم: لو فيه listener قديم بيعمل stopPropagation — نخلي ده capture
    btn.addEventListener('click', (e)=>{ e.preventDefault(); toggle(); }, true);
    overlay.addEventListener('click', close);
    document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') close(); });

    sidebar.addEventListener('click', (e)=>{
      const a = e.target.closest('a');
      if(a) close();
    });
  }

  function cleanText(s){
    return (s || '').replace(/\s+/g,' ').trim();
  }

  function buildGridTableForTable(table){
    if(!isMobile() || !table) return;
    const thead = table.querySelector('thead');
    const tbody = table.querySelector('tbody');
    if(!thead || !tbody) return;

    const headers = Array.from(thead.querySelectorAll('th')).map(th=>cleanText(th.textContent));
    const rows = Array.from(tbody.querySelectorAll('tr'));
    if(!rows.length) return;

    const modal = table.closest('#backdrop, .mzj-modal, .modal, dialog[open]') || document;
    // remove previous gridtables for this table
    modal.querySelectorAll('.mzj-modal-gridtable').forEach(el=>el.remove());

    // For each record row in table, create a gridtable block
    rows.forEach(tr=>{
      const tds = Array.from(tr.querySelectorAll('td'));
      if(!tds.length) return;

      const gridTable = document.createElement('div');
      gridTable.className = 'mzj-modal-gridtable';

      const chunk = 3;
      for(let i=0; i<tds.length; i+=chunk){
        const r = document.createElement('div');
        r.className = 'mzj-r';

        for(let j=0; j<chunk; j++){
          const idx = i + j;
          if(idx >= tds.length) break;

          const cell = document.createElement('div');
          cell.className = 'mzj-cell';

          const h = document.createElement('div');
          h.className = 'mzj-h';
          h.textContent = headers[idx] || `عمود ${idx+1}`;

          const v = document.createElement('div');
          v.className = 'mzj-val';
          v.textContent = cleanText(tds[idx].textContent) || '—';

          cell.appendChild(h);
          cell.appendChild(v);
          r.appendChild(cell);
        }

        gridTable.appendChild(r);
      }

      // hide the source table (via CSS class)
      table.classList.add('mzj-mobile-grid-src');

      // insert after table (or table wrapper)
      const wrap = table.closest('.table-wrap') || table.parentElement;
      if(wrap && wrap.parentElement){
        wrap.parentElement.insertBefore(gridTable, wrap.nextSibling);
      }else{
        table.insertAdjacentElement('afterend', gridTable);
      }
    });
  }

  function scanModalTables(){
    if(!isMobile()) return;
    const backdrop = document.getElementById('backdrop');
    const scope = backdrop || document;
    const tables = scope.querySelectorAll('table');
    tables.forEach(buildGridTableForTable);
  }

  function observeBackdrop(){
    const backdrop = document.getElementById('backdrop');
    if(!backdrop) return;

    scanModalTables();

    const obs = new MutationObserver(()=> scanModalTables());
    obs.observe(backdrop, {childList:true, subtree:true});
  }

  ready(function(){
    setupSidebar();
    observeBackdrop();
  });
})();
