/* ============================
   VT Mobile JS (vt.m.js)
   - Sidebar toggle (drawer)
   - Clock chip
   - بدون لمس منطق Firebase
   ============================ */
(function(){
  const $ = (s)=>document.querySelector(s);
  const sidebar = $('#mzjSidebar');
  const backdrop = $('#mzjBackdrop');
  const btn = $('#mzjSidebarBtn');

  function openSidebar(){
    if(!sidebar || !backdrop) return;
    sidebar.classList.add('is-open');
    backdrop.classList.add('is-open');
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  }
  function closeSidebar(){
    if(!sidebar || !backdrop) return;
    sidebar.classList.remove('is-open');
    backdrop.classList.remove('is-open');
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  }
  function toggleSidebar(){
    if(!sidebar) return;
    if(sidebar.classList.contains('is-open')) closeSidebar();
    else openSidebar();
  }

  if(btn){
    btn.addEventListener('click', (e)=>{ e.preventDefault(); toggleSidebar(); });
  }
  if(backdrop){
    backdrop.addEventListener('click', closeSidebar);
  }
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape') closeSidebar();
  });

  // Update clock
  const nowEl = $('#mzjNow');
  function pad(n){return n<10?('0'+n):(''+n);}
  function tick(){
    if(!nowEl) return;
    const d = new Date();
    nowEl.textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }
  tick();
  setInterval(tick, 10000);

  // If user clicks a nav link, close sidebar on mobile
  document.addEventListener('click', (e)=>{
    const a = e.target.closest('.side-link');
    if(!a) return;
    // close quickly for UX
    closeSidebar();
  });
})();
