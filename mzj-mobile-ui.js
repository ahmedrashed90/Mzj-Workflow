// MZJ Mobile UI — Bottom Nav template
(function(){
  const body = document.body;
  const themeBtn = document.getElementById('mzjThemeBtn');
  const nowEl = document.getElementById('mzjNow');

  // Theme (saved)
  const saved = localStorage.getItem('mzj_theme');
  if (saved === 'dark') body.classList.add('dark');

  themeBtn?.addEventListener('click', ()=>{
    body.classList.toggle('dark');
    localStorage.setItem('mzj_theme', body.classList.contains('dark') ? 'dark' : 'light');
  });

  // Clock (Riyadh)
  function tick(){
    try{
      const dt = new Date();
      const fmt = new Intl.DateTimeFormat('ar-SA', {
        weekday:'short', year:'numeric', month:'2-digit', day:'2-digit',
        hour:'2-digit', minute:'2-digit', hour12:true, timeZone:'Asia/Riyadh'
      });
      if (nowEl) nowEl.textContent = fmt.format(dt);
    }catch(_){
      if (nowEl) nowEl.textContent = new Date().toLocaleString('ar-SA');
    }
  }
  tick();
  setInterval(tick, 15000);

  // Auto-hide topbar: down => hide, up => show
  let lastY = window.scrollY || 0;
  let ticking = false;

  function handle(){
    const y = window.scrollY || 0;
    const diff = y - lastY;

    if (y < 10){
      body.classList.remove('mzj-hide-topbar');
      lastY = y;
      ticking = false;
      return;
    }

    if (diff > 8) body.classList.add('mzj-hide-topbar');
    else if (diff < -8) body.classList.remove('mzj-hide-topbar');

    lastY = y;
    ticking = false;
  }

  window.addEventListener('scroll', ()=>{
    if (!ticking){
      requestAnimationFrame(handle);
      ticking = true;
    }
  }, { passive:true });
})();