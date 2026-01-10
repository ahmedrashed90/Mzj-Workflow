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