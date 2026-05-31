const header = document?.querySelector("[data-js-header-hidden]");

let lastScroll = 0;

window.addEventListener("scroll", () => {
   const currentScroll = window.scrollY;

   if (currentScroll > lastScroll && currentScroll > 50) {
      header.classList.add("header-hidden");
   } else {
      header.classList.remove("header-hidden");
   }

   lastScroll = currentScroll;
});
