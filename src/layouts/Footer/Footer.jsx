import "./Footer.scss"
//import Socials from "@/components/ui/Socials/Socials"

const Footer = () => {
   const menuItems = [
      {
         title: "Home",
         links: ["Categories", "Devices", "Pricing", "FAQ"],
      },
      {
         title: "Movies",
         links: ["Gernes", "Trending", "New Release", "Popular"],
      },
      {
         title: "Connect With Us",
         socialLinks: [
            {
               label: "Facebook",
               iconName: "facebook",
            },
            {
               label: "Twitter",
               iconName: "twitter",
            },
            {
               label: "LinkedIn",
               iconName: "linked-in",
            },
         ],
      },
   ]

   const extraLinks = ["Terms of Use", "Privacy Policy", "Cookie Policy"]

   return (
      <footer className="footer">
         <nav className="footer__menu">
            {menuItems.map(({ title, links }, index) => (
               <div className="footer__menu-column" key={index}>
                  <a className="footer__menu-title h6" href="/">
                     {title}
                  </a>
                  {links?.length > 0 && (
                     <ul className="footer__menu-list">
                        {links.map((link, index) => (
                           <li className="footer__menu-item" key={index}>
                              <a className="footer__menu-link" href="/">
                                 {link}
                              </a>
                           </li>
                        ))}
                     </ul>
                  )}
               </div>
            ))}
         </nav>

         <div className="footer__extra">
            <p className="footer__copyright">
               @ <time dateTime="2023"></time> DRN company, All Rights Reserved
            </p>
            <div className="footer__extra-links">
               {extraLinks.map((link, index) => (
                  <a href="/" key={index}>
                     {link}
                  </a>
               ))}
            </div>
         </div>
      </footer>
   )
}

export default Footer
