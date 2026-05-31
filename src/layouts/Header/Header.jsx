import './Header.scss'
import Logo from '@/components/ui/Logo/Logo'
import ButtonDropdown from '@/components/ui/ButtonDropdown/ButtonDropdown'
import classNames from 'classnames'

const Header = (props) => {

   const { url } = props

   const menuItems = [
      {
         label: "Home",
         href: "/",
      },
      {
         label: "Profile",
         href: "/profile",
      },
      {
         label: "Support",
         href: "/support",
      },
   ]


   return (
      <>
         <header className="header container" data-js-header-hidden="">
            <Logo />
            <div className="line line__hover"></div>
            <div className="line line__active"></div>

            <nav className="header__nav" data-js-overlay-menu-mobile="">
               <ul className="header__list">
                  {menuItems.map(({ label, href }, index) => (
                     <li key={index}>
                        <a
                           className={classNames("", "header__link", {
                              "is-active-page": href === url,
                           })}
                           href={href}
                        >
                           {label}
                        </a>
                     </li>
                  ))}
               </ul>
            </nav>

            <ButtonDropdown />
         </header>
      </>
   )
}

export default Header