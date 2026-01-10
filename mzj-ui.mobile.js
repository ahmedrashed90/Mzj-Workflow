/* MZJ Mobile UI — Admin page controller
   - Sidebar toggle (زر أعلى اليمين)
   - Inner tabs -> dropdown
   - Tables -> 3-columns-per-row card grid (with actions preserved)
*/
(function(){
  const isMobile = () => window.matchMedia('(max-width: 768px)').matches;

  function onReady(fn){
    if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  function setupSidebar(){
    const btn = document.getElementById('mzjSidebarBtn');
    const backdrop = document.getElementById('mzjBackdrop');
    if(!btn || !backdrop) return;

    const open = ()=> document.body.classList.add('mzj-sidebar-open');
    const close = ()=> document.body.classList.remove('mzj-sidebar-open');
    const toggle = ()=> document.body.classList.toggle('mzj-sidebar-open');

    btn.addEventListener('click', (e)=>{ e.preventDefault(); toggle(); });
    backdrop.addEventListener('click', close);

    document.addEventListener('keydown', (e)=>{
      if(e.key === 'Escape') close();
    });

    // اقفل عند تغيير الاتجاه/تغيير الحجم
    window.addEventListener('resize', ()=>{ if(!isMobile()) close(); });
  }

  function setupInnerTabsDropdown(){
    const app = document.getElementById('app');
    if(!app) return;

    const tabs = Array.from(app.querySelectorAll('.inner-tab'));
    const panels = Array.from(app.querySelectorAll('.inner-tab-panel'));
    if(!tabs.length || !panels.length) return;

    // لو اتعمل قبل كده، ما نكررش
    if(app.querySelector('.mzj-mobile-tabbar')) return;

    const bar = document.createElement('div');
    bar.className = 'mzj-mobile-tabbar';
    bar.innerHTML = `
      <label for="mzjMobileTabSelect">اختر القسم</label>
      <select id="mzjMobileTabSelect" aria-label="اختر القسم"></select>
    `;

    const sel = bar.querySelector('select');
    tabs.forEach(t=>{
      const opt = document.createElement('option');
      opt.value = t.getAttribute('data-target') || '';
      opt.textContent = (t.textContent || '').trim();
      if(t.classList.contains('active')) opt.selected = true;
      sel.appendChild(opt);
    });

    // نحطّه قبل أول panel
    const firstPanel = panels[0];
    firstPanel.parentNode.insertBefore(bar, firstPanel);

    const activate = (targetId)=>{
      tabs.forEach(b=> b.classList.remove('active'));
      panels.forEach(p=> p.classList.remove('active'));
      const tab = tabs.find(x => x.getAttribute('data-target') === targetId);
      const panel = document.getElementById(targetId);
      if(tab) tab.classList.add('active');
      if(panel) panel.classList.add('active');
    };

    sel.addEventListener('change', ()=> activate(sel.value));
  }

  function textOf(el){
    return (el && (el.textContent || '')).trim();
  }

  function buildMobileTableFrom(table){
    // avoid duplicate
    if(!table || table.dataset.mobileBuilt === '1') return;
    table.dataset.mobileBuilt = '1';

    const wrap = table.closest('.table-wrap');
    if(!wrap) return;

    const theadTh = Array.from(table.querySelectorAll('thead th')).map(th=> textOf(th));
    const rows = Array.from(table.querySelectorAll('tbody tr'));

    const mobile = document.createElement('div');
    mobile.className = 'mzj-mobile-table';

    rows.forEach((tr)=>{
      const tds = Array.from(tr.querySelectorAll('td'));
      if(!tds.length) return;

      // detect actions column: last td often has buttons
      const actionsTd = tds[tds.length - 1];
      const actionsHasButtons = !!actionsTd.querySelector('button');

      const rowCard = document.createElement('div');
      rowCard.className = 'mzj-mobile-row';

      const grid = document.createElement('div');
      grid.className = 'mzj-mobile-row-grid';

      // cells except actions
      const cellsCount = actionsHasButtons ? (tds.length - 1) : tds.length;

      for(let i=0;i<cellsCount;i++){
        const label = theadTh[i] || `حقل ${i+1}`;
        const td = tds[i];
        const valueText = textOf(td);
        const cell = document.createElement('div');
        cell.className = 'mzj-mobile-cell';
        cell.innerHTML = `
          <div class="mzj-mobile-label"></div>
          <div class="mzj-mobile-value"></div>
        `;
        cell.querySelector('.mzj-mobile-label').textContent = label;
        // Preserve copyable spans if exist (VIN/Plate)
        const copyable = td.querySelector('.copyable');
        if(copyable){
          const span = copyable.cloneNode(true);
          const valWrap = cell.querySelector('.mzj-mobile-value');
          valWrap.innerHTML = '';
          valWrap.appendChild(span);
        }else{
          cell.querySelector('.mzj-mobile-value').textContent = valueText || '—';
        }
        grid.appendChild(cell);
      }

      rowCard.appendChild(grid);

      if(actionsHasButtons){
        const actions = document.createElement('div');
        actions.className = 'mzj-mobile-actions';
        // clone buttons (same dataset attributes: data-edit/data-del/... so existing listeners still work via event delegation)
        Array.from(actionsTd.querySelectorAll('button')).forEach(btn=>{
          const b = btn.cloneNode(true);
          actions.appendChild(b);
        });
        rowCard.appendChild(actions);
      }

      mobile.appendChild(rowCard);
    });

    // insert after table in wrap
    wrap.appendChild(mobile);
  }

  function setupTablesToCards(){
    // Only inside #app (بعد تسجيل الدخول)
    const app = document.getElementById('app');
    if(!app) return;

    const tables = Array.from(app.querySelectorAll('.table-wrap table'));
    tables.forEach(buildMobileTableFrom);
  }

  function observeAppForLogin(){
    const app = document.getElementById('app');
    if(!app) return;

    // initial
    if(isMobile()){
      setupInnerTabsDropdown();
    // (Mobile) تبويب تتبّع رقم الهيكل: خلي الإدخال مريح للكتابة
    const tv=document.getElementById('trackVin');
    if(tv){
      tv.setAttribute('autocomplete','off');
      tv.setAttribute('autocapitalize','off');
      tv.setAttribute('spellcheck','false');
    }

      setupTablesToCards();
    }

    // watch for display changes / inner content
    const mo = new MutationObserver(()=>{
      if(!isMobile()) return;
      setupInnerTabsDropdown();
      setupTablesToCards();
    });

    mo.observe(app, {subtree:true, childList:true, attributes:true, attributeFilter:['style','class']});
  }

  onReady(()=>{
    if(!isMobile()) return;
    setupSidebar();
    observeAppForLogin();
  });

})();
