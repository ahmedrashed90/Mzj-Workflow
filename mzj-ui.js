// MZJ UI helpers (global)
(function () {
  const shell = document.getElementById('mzjShell');
  const sidebar = document.getElementById('mzjSidebar');
  const sidebarBtn = document.getElementById('mzjSidebarBtn');
  const backdrop = document.getElementById('mzjBackdrop');
  const themeBtn = document.getElementById('mzjThemeBtn');
  const nowEl = document.getElementById('mzjNow');

  const mqDesktop = window.matchMedia('(min-width: 1024px)');
  const isDesktop = () => mqDesktop.matches;

  function closeMobile(){ shell?.classList.remove('sidebar-open'); }
  function toggleMobile(){ shell?.classList.toggle('sidebar-open'); }

  function setCollapsed(v){
    if (!shell) return;
    shell.classList.toggle('sidebar-collapsed', !!v);
    localStorage.setItem('mzj_sidebar_collapsed', v ? '1' : '0');
  }

  // Restore only if explicitly set
  if (isDesktop()){
    const saved = localStorage.getItem('mzj_sidebar_collapsed');
    if (saved === '1') setCollapsed(true);
  }

  mqDesktop.addEventListener?.('change', () => {
    closeMobile();
    if (isDesktop()){
      const saved = localStorage.getItem('mzj_sidebar_collapsed');
      setCollapsed(saved === '1');
    } else {
      shell?.classList.remove('sidebar-collapsed');
    }
  });

  sidebarBtn?.addEventListener('click', () => {
    if (!shell) return;
    if (isDesktop()){
      setCollapsed(!shell.classList.contains('sidebar-collapsed'));
    } else {
      toggleMobile();
    }
  });

  backdrop?.addEventListener('click', closeMobile);
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMobile(); });

  sidebar?.addEventListener('click', (e) => {
    const a = e.target && e.target.closest ? e.target.closest('a') : null;
    if (!a) return;
    if (!isDesktop()) closeMobile();
  });

  const savedTheme = localStorage.getItem('mzj_theme');
  if (savedTheme === 'dark') document.body.classList.add('dark');
  themeBtn?.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('mzj_theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  });

  function tick(){
    try{
      const fmt = new Intl.DateTimeFormat('ar-SA', {
        weekday:'short', year:'numeric', month:'2-digit', day:'2-digit',
        hour:'2-digit', minute:'2-digit', hour12:true, timeZone:'Asia/Riyadh'
      });
      if (nowEl) nowEl.textContent = fmt.format(new Date());
    }catch(_){
      if (nowEl) nowEl.textContent = new Date().toLocaleString('ar-SA');
    }
  }
  tick(); setInterval(tick, 15000);
})();