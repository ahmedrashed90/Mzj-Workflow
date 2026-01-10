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
    // Special case: cars edit table needs working edit/delete (original logic depends on <tr>)
    if(table && (table.id === 'carsTable')){
      buildCarsCardsFrom(table);
      return;
    }

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

      const rowCard = document.createElement('div');
      rowCard.className = 'mzj-mobile-row';

      const grid = document.createElement('div');
      grid.className = 'mzj-mobile-grid';

      // If last cell contains actions, skip it in grid
      const lastTd = tds[tds.length-1];
      const hasActions = !!(lastTd && lastTd.querySelector('button'));

      const max = hasActions ? (tds.length - 1) : tds.length;

      for(let i=0;i<max;i++){
        const td = tds[i];
        const cell = document.createElement('div');
        cell.className = 'mzj-mobile-cell';

        const label = document.createElement('div');
        label.className = 'mzj-mobile-label';
        label.textContent = theadTh[i] || `عمود ${i+1}`;

        const value = document.createElement('div');
        value.className = 'mzj-mobile-value';

        const copyable = td.querySelector('.copyable');
        if(copyable){
          value.appendChild(copyable.cloneNode(true));
        }else{
          value.textContent = (td.textContent || '').trim() || '—';
        }

        cell.appendChild(label);
        cell.appendChild(value);
        grid.appendChild(cell);
      }

      rowCard.appendChild(grid);

      if(hasActions){
        const actionsTd = lastTd;
        const actions = document.createElement('div');
        actions.className = 'mzj-mobile-actions';
        // For generic tables cloning buttons is ok
        Array.from(actionsTd.querySelectorAll('button')).forEach(btn=>{
          actions.appendChild(btn.cloneNode(true));
        });
        rowCard.appendChild(actions);
      }

      mobile.appendChild(rowCard);
    });

    wrap.appendChild(mobile);
  }

  // ===== Cars table (admin: تعديل السيارات) — cards with working edit/delete =====
  function buildCarsCardsFrom(table){
    if(!table) return;
    const wrap = table.closest('.table-wrap') || table.parentElement;
    if(!wrap) return;

    const tbody = table.querySelector('tbody');
    if(!tbody) return;

    // remove old cards
    const old = wrap.querySelector('.mzj-cars-cards');
    if(old) old.remove();

    const headers = Array.from(table.querySelectorAll('thead th')).map(th=> textOf(th));
    const rows = Array.from(tbody.querySelectorAll('tr'));
    if(!rows.length) return;

    const cards = document.createElement('div');
    cards.className = 'mzj-cars-cards';

    rows.forEach((tr)=>{
      const editBtn = tr.querySelector('button[data-edit]');
      const delBtn  = tr.querySelector('button[data-del]');
      const rowId = editBtn ? editBtn.getAttribute('data-edit') : (delBtn ? delBtn.getAttribute('data-del') : '');
      if(!rowId) return;

      const tds = Array.from(tr.querySelectorAll('td'));
      if(!tds.length) return;

      const card = document.createElement('div');
      card.className = 'mzj-row-card';
      card.dataset.rowId = rowId;

      const grid = document.createElement('div');
      grid.className = 'mzj-row-grid';

      // skip last actions column
      const max = Math.max(0, tds.length-1);
      for(let i=0;i<max;i++){
        const td = tds[i];
        const cell = document.createElement('div');
        cell.className = 'mzj-cell';

        const k = document.createElement('div');
        k.className = 'mzj-k';
        k.textContent = headers[i] || `عمود ${i+1}`;

        const v = document.createElement('div');
        v.className = 'mzj-v';

        const copyable = td.querySelector('.copyable');
        if(copyable){
          v.appendChild(copyable.cloneNode(true));
        }else{
          v.textContent = (td.textContent||'').trim() || '—';
        }

        cell.appendChild(k);
        cell.appendChild(v);
        grid.appendChild(cell);
      }

      const actions = document.createElement('div');
      actions.className = 'mzj-row-actions';

      const edit = document.createElement('button');
      edit.type = 'button';
      edit.className = 'btn btn-ghost';
      edit.textContent = 'تعديل ✎';
      edit.dataset.rowId = rowId;
      edit.dataset.action = 'edit';

      const del = document.createElement('button');
      del.type = 'button';
      del.className = 'btn btn-danger';
      del.textContent = 'حذف 🗑';
      del.dataset.rowId = rowId;
      del.dataset.action = 'del';

      actions.appendChild(edit);
      actions.appendChild(del);

      card.appendChild(grid);
      card.appendChild(actions);
      cards.appendChild(card);
    });

    // hide original table visually but keep in DOM for logic
    table.style.display = 'none';
    wrap.appendChild(cards);

    // bind actions once (delegated)
    if(!wrap.dataset.carsBound){
      wrap.dataset.carsBound = '1';
      wrap.addEventListener('click', (e)=>{
        const btn = e.target && e.target.closest && e.target.closest('.mzj-cars-cards [data-action]');
        if(!btn) return;
        e.preventDefault(); e.stopPropagation();

        const rowId = btn.getAttribute('data-rowId') || btn.dataset.rowId;
        const action = btn.getAttribute('data-action') || btn.dataset.action;
        if(!rowId) return;

        if(action === 'edit'){
          openCarsEditModal(table, rowId);
        }else if(action === 'del'){
          triggerCarsOriginal(table, rowId, 'del');
        }
      }, true);
    }
  }

  function triggerCarsOriginal(table, rowId, type){
    const sel = type === 'del' ? `button[data-del="${rowId}"]` : `button[data-edit="${rowId}"]`;
    const btn = table.querySelector(sel);
    if(!btn) return false;
    btn.dispatchEvent(new MouseEvent('click', {bubbles:true, cancelable:true, view:window}));
    return true;
  }

  function ensureCarsModal(){
    let modal = document.getElementById('mzjCarsEditModal');
    if(modal) return modal;

    modal = document.createElement('div');
    modal.id = 'mzjCarsEditModal';
    modal.style.cssText = 'position:fixed;inset:0;z-index:9999;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,.45);padding:16px;';
    modal.innerHTML = `
      <div style="width:100%;max-width:520px;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 18px 50px rgba(0,0,0,.25);">
        <div style="padding:12px 14px;border-bottom:1px solid #eee;display:flex;align-items:center;justify-content:space-between;gap:10px;">
          <div style="font-weight:900">تعديل السيارة</div>
          <button type="button" id="mzjCarsEditClose" class="btn btn-ghost">إغلاق</button>
        </div>
        <div id="mzjCarsEditForm" style="padding:12px 14px;max-height:70vh;overflow:auto;display:grid;grid-template-columns:1fr 1fr;gap:10px;"></div>
        <div style="padding:12px 14px;border-top:1px solid #eee;display:flex;gap:10px;">
          <button type="button" id="mzjCarsEditSave" class="btn btn-primary" style="flex:1">حفظ</button>
          <button type="button" id="mzjCarsEditCancel" class="btn btn-ghost" style="flex:1">إلغاء</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('#mzjCarsEditClose').addEventListener('click', ()=> modal.style.display='none');
    modal.addEventListener('click', (e)=>{ if(e.target===modal) modal.style.display='none'; });
    return modal;
  }

  function openCarsEditModal(table, rowId){
    if(!table || !rowId) return;
    // trigger original inline edit to create inputs/selects in hidden table row
    triggerCarsOriginal(table, rowId, 'edit');

    const tr = table.querySelector(`button[data-edit="${rowId}"]`)?.closest('tr');
    if(!tr) return;

    const modal = ensureCarsModal();
    modal.dataset.rowId = String(rowId);

    const form = modal.querySelector('#mzjCarsEditForm');
    form.innerHTML = '';

    const headers = Array.from(table.querySelectorAll('thead th')).map(th=> textOf(th));
    const tds = Array.from(tr.querySelectorAll('td'));
    // skip last actions column
    const max = Math.max(0, tds.length-1);

    for(let i=0;i<max;i++){
      const td = tds[i];
      const label = headers[i] || `عمود ${i+1}`;

      const field = document.createElement('div');
      field.style.cssText='border:1px solid #eee;border-radius:12px;padding:10px;display:flex;flex-direction:column;gap:6px;';

      const k = document.createElement('div');
      k.style.cssText='font-size:12px;opacity:.75;font-weight:700;';
      k.textContent = label;

      const controlWrap = document.createElement('div');

      const input = td.querySelector('input,select,textarea');
      if(input){
        const clone = input.cloneNode(true);
        clone.removeAttribute('id');
        clone.style.width='100%';
        clone.style.fontSize='16px';
        // store selector to bind back (use data-field-index)
        clone.dataset.bindIndex = String(i);
        controlWrap.appendChild(clone);
      }else{
        const fallback = document.createElement('input');
        fallback.type='text';
        fallback.value=(td.textContent||'').trim();
        fallback.style.width='100%';
        fallback.style.fontSize='16px';
        fallback.dataset.bindIndex = String(i);
        controlWrap.appendChild(fallback);
      }

      field.appendChild(k);
      field.appendChild(controlWrap);
      form.appendChild(field);
    }

    const doClose = ()=>{ modal.style.display='none'; };

    modal.querySelector('#mzjCarsEditCancel').onclick = ()=>{
      const tr2 = table.querySelector(`button[data-edit="${modal.dataset.rowId}"]`)?.closest('tr');
      if(tr2){
        const cancelBtn = tr2.querySelector('button[data-cancel-inline]');
        if(cancelBtn) cancelBtn.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true,view:window}));
      }
      doClose();
    };

    modal.querySelector('#mzjCarsEditSave').onclick = ()=>{
      const tr2 = table.querySelector(`button[data-edit="${modal.dataset.rowId}"]`)?.closest('tr');
      if(!tr2){ doClose(); return; }

      // write back values into original controls
      const tds2 = Array.from(tr2.querySelectorAll('td'));
      form.querySelectorAll('[data-bind-index]').forEach((ctrl)=>{
        const idx = Number(ctrl.dataset.bindIndex);
        const td = tds2[idx];
        if(!td) return;
        const orig = td.querySelector('input,select,textarea');
        if(!orig) return;
        // set value
        if(orig.tagName === 'SELECT'){
          orig.value = ctrl.value;
        }else{
          orig.value = ctrl.value;
        }
      });

      // click save inline
      const saveBtn = tr2.querySelector('button[data-save-inline]');
      if(saveBtn) saveBtn.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true,view:window}));

      doClose();
    };

    modal.style.display = 'flex';
  }

  function observeCarsTableForCards(){
    const table = document.getElementById('carsTable');
    if(!table) return;
    const tbody = table.querySelector('tbody');
    if(!tbody) return;

    const rebuild = ()=>{
      try{ buildCarsCardsFrom(table); }catch(e){ /* ignore */ }
    };

    const obs = new MutationObserver(()=> rebuild());
    obs.observe(tbody, {childList:true, subtree:true});
    rebuild();
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
      setupTablesToCards();
      observeCarsTableForCards();
    }

    // watch for display changes / inner content
    const mo = new MutationObserver(()=>{
      if(!isMobile()) return;
      setupInnerTabsDropdown();
      setupTablesToCards();
      observeCarsTableForCards();
    });

    mo.observe(app, {subtree:true, childList:true, attributes:true, attributeFilter:['style','class']});
  }

  onReady(()=>{
    if(!isMobile()) return;
    setupSidebar();
    observeAppForLogin();
  });

})();
