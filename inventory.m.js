/* inventory.m.js — Mobile helpers for inventory.m.html
   ✅ Sidebar toggle fix (robust)
   ✅ Convert tables to mobile vertical layout (3 per row) by adding data-label from thead
   ⚠️ لا يغيّر منطق الداتا
*/
(function(){
  function onReady(fn){
    if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }
  function isMobile(){ return window.matchMedia && window.matchMedia('(max-width: 900px)').matches; }
  function clean(s){ return (s||'').replace(/\s+/g,' ').trim(); }

  function setupSidebar(){
    const sidebar =
      document.getElementById('mzjSidebar') ||
      document.querySelector('.mzj-sidebar') ||
      document.querySelector('aside.mzj-sidebar') ||
      document.querySelector('aside');

    const btn =
      document.getElementById('mzjSidebarBtn') ||
      document.querySelector('[data-mzj-sidebar-btn]') ||
      document.querySelector('.mzjSidebarBtn') ||
      document.querySelector('button#sidebarToggle') ||
      document.querySelector('button.icon-btn') ||
      document.querySelector('button[aria-controls="mzjSidebar"]') ||
      document.querySelector('button[aria-label*="menu" i]') ||
      document.querySelector('button[aria-label*="sidebar" i]');

    if(!sidebar || !btn) return;

    let overlay = document.getElementById('mzjSidebarOverlay');
    if(!overlay){
      overlay = document.createElement('div');
      overlay.id = 'mzjSidebarOverlay';
      document.body.appendChild(overlay);
    }

    const openClass = 'open';
    const showOverlay = ()=> overlay.classList.add('show');
    const hideOverlay = ()=> overlay.classList.remove('show');

    function open(){ sidebar.classList.add(openClass); showOverlay(); }
    function close(){ sidebar.classList.remove(openClass); hideOverlay(); }
    function toggle(){ sidebar.classList.contains(openClass) ? close() : open(); }

    btn.addEventListener('click', function(e){ e.preventDefault(); toggle(); }, true);
    overlay.addEventListener('click', close);
    document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') close(); });

    sidebar.addEventListener('click', (e)=>{
      const a = e.target.closest('a');
      if(a) close();
    });
  }

  function labelTable(table){
    if(!table) return;
    const thead = table.querySelector('thead');
    const tbody = table.querySelector('tbody');
    if(!thead || !tbody) return;

    const headers = Array.from(thead.querySelectorAll('th')).map(th => clean(th.textContent));
    const rows = Array.from(tbody.querySelectorAll('tr'));
    rows.forEach(tr=>{
      const tds = Array.from(tr.querySelectorAll('td'));
      tds.forEach((td,i)=>{
        td.setAttribute('data-label', headers[i] || `عمود ${i+1}`);
      });
    });

    table.classList.add('mzj-mobile-table');
  }

  function applyTables(){
    if(!isMobile()) return;
    // Avoid transforming modal tables if any; focus on main content tables
    const tables = document.querySelectorAll('main table, .container table, .mzj-content table');
    tables.forEach(labelTable);
  }

  onReady(function(){
    setupSidebar();
    applyTables();

    // If page updates table dynamically, re-apply labels
    const obs = new MutationObserver(()=> applyTables());
    obs.observe(document.body, {childList:true, subtree:true});
  });
})();
