import './BurgerButton.scss'


const BurgerButton = () => {

   const title = 'Open menu'

   return (
      <button className='burger__button' data-js-overlay-menu-burger-button=''
         type='button'
         aria-label={title}
         title={title}
      >
         <span></span>
         <span></span>
         <span></span>
      </button>
   )
}

export default BurgerButton