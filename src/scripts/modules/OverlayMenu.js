const dropDownBtn = document?.querySelector(
   "[data-js-overlay-menu-burger-button]",
);

const dropDownMenu = document?.querySelector("[data-js-overlay-menu-mobile]");

let scrollPosition = 0;

if (dropDownBtn && dropDownMenu) {
   dropDownBtn.addEventListener("click", () => {
      document.body.classList.toggle("is-active");

      // Scroll lock
      // Блокировка скролла при активации
      if (!document.body.classList.contains("no-scroll")) {
         scrollPosition = window.screenY;
         document.body.style.top = `${scrollPosition}px`;
         document.body.classList.add("no-scroll");
      } else {
         document.body.classList.remove("no-scroll");
         document.body.style.top = "";
         window.scrollTo(0, scrollPosition);
      }
   });
}
