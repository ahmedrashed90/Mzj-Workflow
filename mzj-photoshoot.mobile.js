/* MZJ Photoshoot Mobile Patch
   - Sidebar toggle/backdrop (يدعم أكثر من هيكل)
   - Inner tabs -> Dropdown على الموبايل (بدون كسر المنطق الحالي)
   - Table -> Cards: إضافة data-label تلقائيًا لكل TD + مراقبة التغييرات
*/
(function(){
  function q(sel, root=document){ return root.querySelector(sel); }
  function qa(sel, root=document){ return Array.from(root.querySelectorAll(sel)); }

  function setupSidebar(){
    const sidebar =
      q('#mzjSidebar') || q('.mzj-sidebar') || q('#sidebar') || q('.sidebar');

    const backdrop =
      q('#mzjBackdrop') || q('.mzj-backdrop') || q('.sidebar-backdrop');

    const toggle =
      q('#sidebarToggle') || q('.sidebar-toggle') || q('[data-sidebar-toggle]') ||
      q('.mzj-topbar .icon-btn'); // أحيانًا زر الهامبرجر يكون هنا

    const closeBtn =
      q('[data-sidebar-close]') || q('.sb-close') || q('.mzj-sidebar .close');

    if(!sidebar || !toggle) return;

    function open(){
      sidebar.classList.add('is-open');
      if(backdrop) backdrop.classList.add('is-open');
      document.documentElement.style.overflow='hidden';
      document.body.style.overflow='hidden';
    }
    function close(){
      sidebar.classList.remove('is-open');
      if(backdrop) backdrop.classList.remove('is-open');
      document.documentElement.style.overflow='';
      document.body.style.overflow='';
    }

    toggle.addEventListener('click', (e)=>{ e.preventDefault(); e.stopPropagation();
      if(sidebar.classList.contains('is-open')) close(); else open();
    });

    if(closeBtn) closeBtn.addEventListener('click', (e)=>{ e.preventDefault(); close(); });
    if(backdrop) backdrop.addEventListener('click', close);

    // ESC
    document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') close(); });
  }

  function setupInnerTabsDropdown(){
    const innerTabs = q('.inner-tabs');
    if(!innerTabs) return;

    const buttons = qa('.inner-tabs .inner-tab[data-inner]');
    if(!buttons.length) return;

    // لو اتعمل قبل كده ما نعملوش تاني
    if(q('.inner-tabs-select')) return;

    const wrap = document.createElement('div');
    wrap.className = 'inner-tabs-select';

    const sel = document.createElement('select');
    sel.setAttribute('aria-label','اختيار التبويب');

    buttons.forEach(btn=>{
      const opt = document.createElement('option');
      opt.value = btn.getAttribute('data-inner');
      opt.textContent = btn.textContent.trim();
      sel.appendChild(opt);
    });

    // sync initial
    const activeBtn = buttons.find(b=>b.classList.contains('active')) || buttons[0];
    sel.value = activeBtn.getAttribute('data-inner');

    // change -> click button (نفس المنطق الحالي)
    sel.addEventListener('change', ()=>{
      const val = sel.value;
      const target = buttons.find(b=>b.getAttribute('data-inner')===val);
      if(target) target.click();
    });

    // button click -> update select
    buttons.forEach(btn=>{
      btn.addEventListener('click', ()=>{
        sel.value = btn.getAttribute('data-inner');
      }, true);
    });

    wrap.appendChild(sel);
    innerTabs.parentNode.insertBefore(wrap, innerTabs);
  }

  function labelizeTable(table){
    const ths = qa('thead th', table).map(th => (th.textContent || '').trim());
    const tb = table.tBodies && table.tBodies[0];
    if(!tb) return;

    qa('tr', tb).forEach(tr=>{
      const tds = qa('td', tr);
      tds.forEach((td, i)=>{
        if(!td.getAttribute('data-label')){
          const label = ths[i] || '';
          td.setAttribute('data-label', label);
        }
      });
    });
  }

  function setupTableCards(){
    // كل جداول الصفحة
    const tables = qa('table.table');
    if(!tables.length) return;

    tables.forEach(table=>{
      // أول مرة
      labelizeTable(table);

      // مراقبة أي rows جديدة (Firebase render)
      const tb = table.tBodies && table.tBodies[0];
      if(!tb) return;

      const obs = new MutationObserver(()=>{
        labelizeTable(table);
      });
      obs.observe(tb, {childList:true, subtree:true});
    });
  }

  function boot(){
    setupSidebar();
    setupInnerTabsDropdown();
    setupTableCards();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', boot);
  }else{
    boot();
  }
})();
