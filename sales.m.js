/* sales.m.js — Mobile behavior only (no business logic changes)
   - Sidebar drawer toggle (matches other pages)
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

    const open = () => {
      sidebar.classList.add('open');
      overlay.classList.add('show');
      document.body.classList.add('mzj-lock');
    };

    const close = () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('show');
      document.body.classList.remove('mzj-lock');
    };

    btn.addEventListener('click', (e)=>{
      e.preventDefault();
      sidebar.classList.contains('open') ? close() : open();
    });

    overlay.addEventListener('click', close);

    document.addEventListener('keydown', (e)=>{
      if(e.key === 'Escape') close();
    });

    sidebar.addEventListener('click', (e)=>{
      const a = e.target.closest('a');
      if(a) close();
    });
  }

  ready(setupSidebar);
})(); 
