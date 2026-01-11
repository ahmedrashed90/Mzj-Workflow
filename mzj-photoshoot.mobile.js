
/* MZJ Photoshoot Mobile Patch V3
   - Bottom tabs synced with inner tabs
   - Auto table labels + convert to vertical cards
*/
(function(){
  const isMobile = () => window.matchMedia('(max-width: 820px)').matches;

  function ensureBottomTabs(){
    if(!isMobile()) return;
    if(document.querySelector('.mobile-bottom-tabs')) return;

    const innerTabs = document.querySelector('.inner-tabs');
    if(!innerTabs) return;

    const buttons = Array.from(innerTabs.querySelectorAll('.inner-tab'));
    if(!buttons.length) return;

    const bar = document.createElement('div');
    bar.className = 'mobile-bottom-tabs';

    const iconMap = {
      create: 'fa-solid fa-plus',
      manage: 'fa-solid fa-list-check',
      done: 'fa-solid fa-check-double'
    };

    buttons.forEach(btn => {
      const key = btn.getAttribute('data-inner') || '';
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'mbt-btn' + (btn.classList.contains('active') ? ' active' : '');
      b.setAttribute('data-inner', key);

      const i = document.createElement('i');
      i.className = iconMap[key] || 'fa-solid fa-circle';
      const span = document.createElement('span');
      span.textContent = (btn.textContent || '').trim();

      b.appendChild(i);
      b.appendChild(span);

      b.addEventListener('click', () => {
        // click original to keep existing logic
        btn.click();
        syncActive();
      });

      bar.appendChild(b);
    });

    document.body.appendChild(bar);

    // keep active state synced
    const syncActive = () => {
      const activeKey = (innerTabs.querySelector('.inner-tab.active')?.getAttribute('data-inner')) || '';
      bar.querySelectorAll('.mbt-btn').forEach(x => {
        x.classList.toggle('active', x.getAttribute('data-inner') === activeKey);
      });
    };

    const mo = new MutationObserver(syncActive);
    mo.observe(innerTabs, {subtree:true, attributes:true, attributeFilter:['class']});

    // store for use in handler
    bar.__syncActive = syncActive;
    syncActive();
  }

  function applyTableLabels(table){
    if(!table) return;
    const ths = Array.from(table.querySelectorAll('thead th')).map(th => (th.textContent || '').trim());
    const rows = table.querySelectorAll('tbody tr');
    rows.forEach(tr => {
      const tds = tr.querySelectorAll('td');
      tds.forEach((td, idx) => {
        if(!td.getAttribute('data-label')){
          const label = ths[idx] || '';
          if(label) td.setAttribute('data-label', label);
        }
      });
    });
  }

  function labelAllTables(){
    if(!isMobile()) return;
    document.querySelectorAll('table.table').forEach(applyTableLabels);
  }

  function observeTableBodies(){
    if(!isMobile()) return;
    document.querySelectorAll('table.table tbody').forEach(tbody => {
      if(tbody.__mobObserved) return;
      tbody.__mobObserved = true;
      const table = tbody.closest('table');
      const mo = new MutationObserver(() => applyTableLabels(table));
      mo.observe(tbody, {childList:true, subtree:true});
    });
  }

  function boot(){
    ensureBottomTabs();
    labelAllTables();
    observeTableBodies();
  }

  document.addEventListener('DOMContentLoaded', boot);
  window.addEventListener('resize', () => {
    // rebuild on resize to mobile
    if(isMobile()){
      boot();
    }
  });
})();
