import './Header.scss'
import classNames from 'classnames'
import Logo from '@/components/Logo/Logo'
import Button from '@/components/Button/Button'
import BurgerButton from '@/components/BurgerButton/BurgerButton'

const Header = (props) => {

   const {
      url,
   } = props

   const menuItems = [
      {
         label: 'Home',
         href: '/'
      },
      {
         label: 'Catalog',
         href: '/catalog'
      },
      {
         label: 'Support',
         href: '/support'
      },
      {
         label: 'Subscriptions',
         href: '/subscriptions'
      },
   ]


   return (
      <>

         <header className='header'>
            <Logo loading='eager' />

            <div class="line line__hover"></div>
            <div class="line line__active"></div>

            <nav className='header__nav' data-js-overlay-menu-mobile=''>
               <ul>
                  {menuItems.map(({ label, href }, index) => (
                     <li key={index}>
                        <a
                           className={classNames('', {
                              'is-active': href === url
                           })}
                           href={href}>{label}</a>
                     </li>
                  ))}
               </ul>
            </nav>
            <BurgerButton />
         </header >

      </>
   )
}

export default Header
