// MZJ UI helpers (no frameworks)
(function () {
  const shell = document.getElementById('mzjShell');
  const sidebarBtn = document.getElementById('mzjSidebarBtn');
  const backdrop = document.getElementById('mzjBackdrop');
  const themeBtn = document.getElementById('mzjThemeBtn');
  const nowEl = document.getElementById('mzjNow');

  // Sidebar toggle (mobile)
  function openSidebar(){ shell?.classList.add('sidebar-open'); }
  function closeSidebar(){ shell?.classList.remove('sidebar-open'); }

  sidebarBtn?.addEventListener('click', () => {
    if (!shell) return;
    shell.classList.toggle('sidebar-open');
  });
  backdrop?.addEventListener('click', closeSidebar);

  // ESC closes sidebar on mobile + any modal you add later
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSidebar();
  });

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
