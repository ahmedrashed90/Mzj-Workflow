/* ===============================
   MOBILE UI CONTROLLER
================================ */

document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth > 768) return;

  console.log("📱 Mobile UI Loaded");

  // Auto wrap tables
  document.querySelectorAll("table").forEach(table => {
    if (!table.parentElement.classList.contains("table-wrapper")) {
      const wrapper = document.createElement("div");
      wrapper.className = "table-wrapper";
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    }
  });

  // Disable hover effects
  document.body.classList.add("no-hover");
});
