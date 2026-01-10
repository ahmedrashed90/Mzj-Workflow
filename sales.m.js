/* sales.m.js - Mobile behavior only (no business logic changes)
   - Sidebar off-canvas toggle (matches باقي صفحات المشروع)
   - Uses existing: #mzjSidebarBtn, #mzjSidebar, #mzjBackdrop
*/
(function(){
  function ready(fn){
    if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  function setupSidebar(){
    const btn = document.getElementById('mzjSidebarBtn');
    const sidebar = document.getElementById('mzjSidebar') || document.querySelector('.mzj-sidebar');
    const backdrop = document.getElementById('mzjBackdrop');

    if(!btn || !sidebar || !backdrop) return;

    const open = () => {
      sidebar.classList.add('open');
      backdrop.classList.add('show');
      document.body.classList.add('mzj-sidebar-open'); // keep for any legacy styles
      btn.setAttribute('aria-expanded','true');
    };

    const close = () => {
      sidebar.classList.remove('open');
      backdrop.classList.remove('show');
      document.body.classList.remove('mzj-sidebar-open');
      btn.setAttribute('aria-expanded','false');
    };

    btn.addEventListener('click', (e)=>{
      e.preventDefault();
      e.stopPropagation();
      sidebar.classList.contains('open') ? close() : open();
    });

    backdrop.addEventListener('click', close);

    // close when clicking a sidebar link (mobile)
    sidebar.addEventListener('click', (e)=>{
      const a = e.target.closest('a');
      if(a) close();
    });

    // close on ESC
    document.addEventListener('keydown', (e)=>{
      if(e.key === 'Escape') close();
    });
  }

  ready(setupSidebar);
})();
