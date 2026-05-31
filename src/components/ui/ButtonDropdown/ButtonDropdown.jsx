import "./ButtonDropdown.scss"

const ButtonDropdown = () => {
   const title = "Open menu"

   return (
      <button
         className="button-dropdown"
         data-js-overlay-menu-burger-button=""
         type="button"
         aria-label={title}
         title={title}
      >
         <span></span>
         <span></span>
         <span></span>
      </button>
   )
}

export default ButtonDropdown
