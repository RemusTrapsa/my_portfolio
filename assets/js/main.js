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

  /* ---- Project image slots ----
     If a screenshot hasn't been added yet (404), remove the broken <img>
     so the pixel placeholder underneath shows instead. */
  function initImageSlots(){
    const images = document.querySelectorAll(".project-card__media img");

    images.forEach(function(img){
      function showPlaceholder(){
        img.remove();
      }

      if(img.complete && img.naturalWidth === 0){
        showPlaceholder();
      }
      else{
        img.addEventListener("error", showPlaceholder, { once: true });
      }
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
  initImageSlots();
  initYear();
})();
