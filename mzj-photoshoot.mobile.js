/* MZJ Mobile UI Patch (Sidebar toggle + safe close) */
(function(){
  const body = document.body;

  // Try to detect common elements
  const sidebar = document.querySelector('.mzj-sidebar') || document.querySelector('#sidebar') || document.querySelector('.sidebar');
  if(!sidebar) return;

  // Backdrop (create if not exists)
  let backdrop = document.querySelector('.mzj-sb-backdrop') || document.querySelector('#sidebarBackdrop') || document.querySelector('.sidebar-backdrop') || document.querySelector('.sidebar-overlay');
  if(!backdrop){
    backdrop = document.createElement('div');
    backdrop.className = 'mzj-sb-backdrop';
    document.body.appendChild(backdrop);
  }

  // Toggle button
  const toggleBtn = document.querySelector('#sidebarToggle') || document.querySelector('.sidebar-toggle') || document.querySelector('[data-sidebar-toggle]');

  function openSidebar(){
    body.classList.add('sidebar-open');
    sidebar.classList.add('open');
    backdrop.classList.add('show');
    // lock scroll
    body.style.overflow = 'hidden';
  }

  function closeSidebar(){
    body.classList.remove('sidebar-open');
    sidebar.classList.remove('open');
    backdrop.classList.remove('show');
    body.style.overflow = '';
  }

  function toggleSidebar(){
    if(body.classList.contains('sidebar-open')) closeSidebar();
    else openSidebar();
  }

  if(toggleBtn){
    toggleBtn.addEventListener('click', function(e){
      e.preventDefault();
      toggleSidebar();
    });
  }

  // Close on backdrop
  backdrop.addEventListener('click', closeSidebar);

  // Close on ESC
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') closeSidebar();
  });

  // Close when clicking a sidebar link (mobile)
  sidebar.addEventListener('click', function(e){
    const a = e.target.closest('a');
    if(!a) return;
    // allow normal navigation then close
    closeSidebar();
  });

  // If your page has a close button
  const closeBtn = sidebar.querySelector('.sb-close') || sidebar.querySelector('[data-sidebar-close]');
  if(closeBtn){
    closeBtn.addEventListener('click', function(e){
      e.preventDefault();
      closeSidebar();
    });
  }
})();
