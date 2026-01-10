/* dashboard.m.js — Mobile behaviors for dashboard.m.html
   - Sidebar off-canvas toggle (بديل mzj-ui.js)
   - (تم تعطيل تحويل جداول المودال إلى كروت بدون حذف الكود)
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

    btn.addEventListener('click', (e)=>{ 
      e.preventDefault(); 
      sidebar.classList.contains('open') ? close() : open(); 
    });

    overlay.addEventListener('click', close);
    document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') close(); });

    sidebar.addEventListener('click', (e)=>{
      const a = e.target.closest('a');
      if(a) close();
    });
  }

  /* ================================
     الكود الأصلي موجود – لكن معطّل
     ================================ */

  function enhanceTablesAsCards(){ /* معطّل intentionally */ }
  function observeModalTables(){ /* معطّل intentionally */ }

  ready(function(){
    setupSidebar();
    // observeModalTables(); ❌ متوقف
  });
})();
/* ================================
   FORCE modal tables to stay tables
   ================================ */
(function(){
  function stopModalCardBehavior(){
    const modals = document.querySelectorAll('#backdrop, .modal, .mzj-modal');
    modals.forEach(m=>{
      m.querySelectorAll('.mzj-detail-cards').forEach(el => el.remove());
    });
  }

  const obs = new MutationObserver(stopModalCardBehavior);
  obs.observe(document.body, { childList:true, subtree:true });

  document.addEventListener('DOMContentLoaded', stopModalCardBehavior);
})();
