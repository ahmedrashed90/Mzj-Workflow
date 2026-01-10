/* photoshoot-user.m.js — Mobile helpers */
(function(){
  function ready(fn){
    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fn);
    else fn();
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
  ready(setupSidebar);
})();