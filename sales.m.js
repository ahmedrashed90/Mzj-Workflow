/* sales.m.js - Mobile behavior only (no business logic changes) */
(function(){
  function qs(sel, root=document){ return root.querySelector(sel); }
  function qsa(sel, root=document){ return Array.from(root.querySelectorAll(sel)); }

  function ensureOverlay(){
    let ov = qs('.mzj-overlay');
    if(!ov){
      ov = document.createElement('div');
      ov.className = 'mzj-overlay';
      document.body.appendChild(ov);
    }
    return ov;
  }

  function setupSidebar(){
    const btn = document.getElementById('mzjSidebarBtn');
    const sidebar = qs('.mzj-sidebar');
    if(!btn || !sidebar) return;

    const overlay = ensureOverlay();

    function open(){
      document.body.classList.add('mzj-sidebar-open');
      btn.setAttribute('aria-expanded','true');
    }
    function close(){
      document.body.classList.remove('mzj-sidebar-open');
      btn.setAttribute('aria-expanded','false');
    }
    function toggle(){
      document.body.classList.contains('mzj-sidebar-open') ? close() : open();
    }

    btn.addEventListener('click', function(e){
      e.preventDefault();
      e.stopPropagation();
      toggle();
    });

    overlay.addEventListener('click', close);

    // close when clicking a sidebar link (mobile)
    qsa('a', sidebar).forEach(a=>{
      a.addEventListener('click', ()=> close(), {passive:true});
    });

    // close on ESC
    document.addEventListener('keydown', (e)=>{
      if(e.key === 'Escape') close();
    });
  }

  // Run after DOM ready
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', setupSidebar);
  } else {
    setupSidebar();
  }
})();
