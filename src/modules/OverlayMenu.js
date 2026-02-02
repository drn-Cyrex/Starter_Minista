export const overlayMenu = () => {
   const burgerButton = document?.querySelector(
      "[data-js-overlay-menu-burger-button]"
   )
   const menuMobile = document?.querySelector("[data-js-overlay-menu-mobile]")

   burgerButton.addEventListener("click", () => {
      burgerButton.classList.toggle("is-active__burger-button")
      menuMobile.classList.toggle("is-active__menu-mobile")
   })
}
