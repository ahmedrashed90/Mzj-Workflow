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

    // استخدم الـ backdrop الموجود في الصفحة لو موجود (mzjBackdrop)
    let overlay = document.getElementById('mzjBackdrop') || document.getElementById('mzjSidebarOverlay');
    if(!overlay){
      overlay = document.createElement('div');
      overlay.id = 'mzjSidebarOverlay';
      document.body.appendChild(overlay);
    }

    // ضمان ستايل أساسي حتى لو CSS الميديا كويري ما اتطبق
    const ensureInlineMobileStyles = () => {
      const isMobile = window.matchMedia && window.matchMedia('(max-width: 1200px)').matches;
      if(!isMobile) return;

      // sidebar panel
      sidebar.style.position = 'fixed';
      sidebar.style.top = '0';
      sidebar.style.right = '0';
      sidebar.style.left = 'auto';
      sidebar.style.height = '100vh';
      sidebar.style.width = '280px';
      sidebar.style.maxWidth = '86vw';
      sidebar.style.background = '#fff';
      sidebar.style.zIndex = '1100';
      sidebar.style.boxShadow = '0 10px 28px rgba(0,0,0,.08)';
      sidebar.style.borderLeft = '1px solid rgba(62,36,32,.14)';
      sidebar.style.overflow = 'auto';

      // overlay
      overlay.style.position = 'fixed';
      overlay.style.inset = '0';
      overlay.style.background = 'rgba(0,0,0,.35)';
      overlay.style.zIndex = '1090';
      overlay.style.opacity = overlay.classList.contains('show') ? '1' : '0';
      overlay.style.pointerEvents = overlay.classList.contains('show') ? 'auto' : 'none';
      overlay.style.transition = 'opacity .18s ease';
    };

    const syncOverlayInline = () => {
      overlay.style.opacity = overlay.classList.contains('show') ? '1' : '0';
      overlay.style.pointerEvents = overlay.classList.contains('show') ? 'auto' : 'none';
    };

    // حافظ على ستايل الموبايل مع تغيّر المقاس/الدوران
    window.addEventListener('resize', ensureInlineMobileStyles);
    window.addEventListener('orientationchange', ensureInlineMobileStyles);

    const open = () => {
      ensureInlineMobileStyles();
      sidebar.classList.add('open');
      overlay.classList.add('show');
      document.body.classList.add('mzj-sidebar-open');
      syncOverlayInline();
    };
    const close = () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('show');
      document.body.classList.remove('mzj-sidebar-open');
      syncOverlayInline();
    };


// ✅ Fix: بعض الأجهزة بتفقد click على الزر بسبب عناصر فوقه، فبنضيف listener capturing على الصفحة
if(!window.__mzjSidebarBound){
  window.__mzjSidebarBound = true;
  document.addEventListener('click', (ev)=>{
    const t = ev.target;
    const isBtn = t && (t.id === 'mzjSidebarBtn' || t.closest && t.closest('#mzjSidebarBtn'));
    if(isBtn){
      ev.preventDefault();
      ev.stopPropagation();
      sidebar.classList.contains('open') ? close() : open();
    }
  }, true);

  // touch support
  document.addEventListener('touchend', (ev)=>{
    const t = ev.target;
    const isBtn = t && (t.id === 'mzjSidebarBtn' || t.closest && t.closest('#mzjSidebarBtn'));
    if(isBtn){
      ev.preventDefault();
      ev.stopPropagation();
      sidebar.classList.contains('open') ? close() : open();
    }
  }, {capture:true, passive:false});
}

    btn.addEventListener('click', (e)=>{ e.preventDefault(); sidebar.classList.contains('open') ? close() : open(); });
    overlay.addEventListener('click', (e)=>{ e.preventDefault(); close(); }, true);
    document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') close(); });

    window.addEventListener('resize', ensureInlineMobileStyles);
    ensureInlineMobileStyles();

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
    // observeModalTables(); // تعطيل تحويل جدول المودال إلى كروت
});
})();
