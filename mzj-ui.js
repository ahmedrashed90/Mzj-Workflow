// MZJ UI helpers (no frameworks)
(function () {
  const shell = document.getElementById('mzjShell');
  const sidebarBtn = document.getElementById('mzjSidebarBtn');
  const backdrop = document.getElementById('mzjBackdrop');
  const themeBtn = document.getElementById('mzjThemeBtn');
  const nowEl = document.getElementById('mzjNow');

  // Sidebar toggle (mobile + desktop collapse)
  const isMobile = () => window.matchMedia && window.matchMedia('(max-width: 980px)').matches;

  function openSidebar(){ shell?.classList.add('sidebar-open'); }
  function closeSidebar(){ shell?.classList.remove('sidebar-open'); }
  function toggleDesktopCollapse(){
    if (!shell) return;
    shell.classList.toggle('sidebar-collapsed');
    try{
      localStorage.setItem('mzj_sidebar', shell.classList.contains('sidebar-collapsed') ? 'collapsed' : 'open');
    }catch(_){}
  }

  // restore desktop state
  try{
    const savedSide = localStorage.getItem('mzj_sidebar');
    if (savedSide === 'collapsed') shell?.classList.add('sidebar-collapsed');
  }catch(_){}

  sidebarBtn?.addEventListener('click', () => {
    if (!shell) return;
    if (isMobile()) shell.classList.toggle('sidebar-open');
    else toggleDesktopCollapse();
  });

  backdrop?.addEventListener('click', closeSidebar);

  // Dark mode (saved)
  const savedTheme = localStorage.getItem('mzj_theme');
  if (savedTheme === 'dark') document.body.classList.add('dark');

  themeBtn?.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('mzj_theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  });

  // Clock (Riyadh by default)
  function tick(){
    try{
      const dt = new Date();
      const fmt = new Intl.DateTimeFormat('ar-SA', {
        weekday: 'short',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Riyadh'
      });
      if (nowEl) nowEl.textContent = fmt.format(dt);
    }catch(_){
      if (nowEl) nowEl.textContent = new Date().toLocaleString('ar-SA');
    }
  }
  tick();
  setInterval(tick, 15000);
})();
