/* photoshoot-user.m.js — Mobile helpers */
(function(){
  function ready(fn){
    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fn);
    else fn();
  }
  
  function clean(s){ return (s||'').replace(/\s+/g,' ').trim(); }

  function labelTable(table){
    if(!table) return;
    const thead = table.querySelector('thead');
    const tbody = table.querySelector('tbody');
    if(!thead || !tbody) return;

    const headers = Array.from(thead.querySelectorAll('th')).map(th => clean(th.textContent));
    Array.from(tbody.querySelectorAll('tr')).forEach(tr=>{
      Array.from(tr.querySelectorAll('td')).forEach((td,i)=>{
        td.setAttribute('data-label', headers[i] || `عمود ${i+1}`);
      });
    });

    table.classList.add('mzj-mobile-table');
  }

  function applyMobileTables(){
    if(!(window.matchMedia && window.matchMedia('(max-width:900px)').matches)) return;

    // استهدف جدول "إنشاء طلب" + أي جدول داخل المحتوى
    const candidates = document.querySelectorAll(
      '#createOrderTable, #orderTable, #requestTable, .create-order table, .order-create table, main table, .container table'
    );
    candidates.forEach(labelTable);
  }


  function setupSidebar(){
    const sidebar=document.getElementById('mzjSidebar')||document.querySelector('.mzj-sidebar');
    const btn=document.getElementById('mzjSidebarBtn')||document.querySelector('[data-mzj-sidebar-btn]');
    const backdrop=document.getElementById('mzjBackdrop');
    if(!sidebar||!btn||!backdrop)return;

    const open=()=>{sidebar.classList.add('open');backdrop.classList.add('show')};
    const close=()=>{sidebar.classList.remove('open');backdrop.classList.remove('show')};
    const toggle=()=>sidebar.classList.contains('open')?close():open();

    btn.addEventListener('click',e=>{e.preventDefault();toggle()},true);
    backdrop.addEventListener('click',close);
  }
  ready(function(){ setupSidebar(); applyMobileTables();
    const obs=new MutationObserver(()=>applyMobileTables());
    obs.observe(document.body,{childList:true,subtree:true});
  });
})();
