
/* photoshoot-user mobile fixes
   - Make tables readable on mobile without horizontal scroll
   - Do NOT touch business logic; only enhance rendering
*/
(function(){
  const isMobile = () => window.matchMedia && window.matchMedia("(max-width: 820px)").matches;

  function applyDataLabels(table){
    if(!table) return;
    const ths = Array.from(table.querySelectorAll("thead th")).map(th => (th.textContent || "").trim());
    if(!ths.length) return;
    const rows = table.querySelectorAll("tbody tr");
    rows.forEach(tr=>{
      Array.from(tr.children).forEach((td, idx)=>{
        if(td && td.tagName === "TD"){
          const label = ths[idx] || "";
          if(label) td.setAttribute("data-label", label);
        }
      });
    });
  }

  function enhanceTables(){
    if(!isMobile()) return;

    // Manage + Done tables (lists)
    const listTables = document.querySelectorAll("table");
    listTables.forEach(t=>{
      // heuristics: tables that look like listing tables (have thead+tbody) and not tiny
      if(t.dataset.mzjEnhanced === "1") return;

      const hasThead = !!t.querySelector("thead");
      const hasTbody = !!t.querySelector("tbody");
      if(!hasThead || !hasTbody) return;

      // detect create-request table by presence of inputs/selects/textarea in tbody
      const hasInputs = !!t.querySelector("tbody input, tbody select, tbody textarea");

      if(hasInputs){
        t.classList.add("mzj-mobile-grid");
      }else{
        t.classList.add("mzj-mobile-cards");
        applyDataLabels(t);
      }

      t.dataset.mzjEnhanced = "1";
    });
  }

  function watch(){
    if(!isMobile()) return;

    const targets = [];
    ["reqRowsBody","ordersTbody","doneTbody"].forEach(id=>{
      const el = document.getElementById(id);
      if(el) targets.push(el);
    });

    const observer = new MutationObserver(()=>{ 
      // allow DOM to settle
      requestAnimationFrame(enhanceTables);
    });
    targets.forEach(t=>observer.observe(t, {childList:true, subtree:true}));
  }

  document.addEventListener("DOMContentLoaded", ()=>{
    enhanceTables();
    watch();

    // also re-apply on tab switches or any click that may render
    document.addEventListener("click", ()=>{
      if(!isMobile()) return;
      setTimeout(enhanceTables, 30);
    }, true);

    window.addEventListener("resize", ()=>{ setTimeout(enhanceTables, 60); });
  });
})();
