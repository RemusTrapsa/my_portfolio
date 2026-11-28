/* ==========================================================================
   main.js: small progressive enhancements. The page works without it.
   ========================================================================== */

(function(){
  "use strict";

  /* ---- "Read more" toggles ----
     Markup: <button data-expand="ID" aria-controls="ID" hidden>
     The expanded content is visible by default (no-JS fallback);
     this collapses it and reveals the toggle button. */
  function initExpanders(){
    const buttons = document.querySelectorAll("[data-expand]");

    buttons.forEach(function(button){
      const panel = document.getElementById(button.dataset.expand);
      if(!panel){
        return;
      }

      const openLabel = button.dataset.labelOpen || "Read more";
      const closeLabel = button.dataset.labelClose || "Show less";

      function setOpen(open){
        panel.hidden = !open;
        button.setAttribute("aria-expanded", String(open));
        button.textContent = open ? closeLabel : openLabel;
      }

      setOpen(false);
      button.hidden = false;

      button.addEventListener("click", function(){
        const open = button.getAttribute("aria-expanded") === "true";
        setOpen(!open);
      });
    });
  }

  /* ---- Footer year ---- */
  function initYear(){
    const year = String(new Date().getFullYear());
    document.querySelectorAll("[data-year]").forEach(function(el){
      el.textContent = year;
    });
  }

  initExpanders();
  initYear();
})();
