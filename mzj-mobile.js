(function () {
  const btn = document.getElementById('mzjRbarToggle');
  const overlay = document.getElementById('mzjRbarOverlay');

  if (!btn || !overlay) return;

  const toggle = () => document.body.classList.toggle('mzj-rbar-open');
  const close = () => document.body.classList.remove('mzj-rbar-open');

  btn.addEventListener('click', toggle);
  overlay.addEventListener('click', close);

  // ESC يقفل
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
})();
