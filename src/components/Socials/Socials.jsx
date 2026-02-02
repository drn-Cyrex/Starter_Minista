import Button from '../Button/Button'
import './Socials.scss'


const Socials = (props) => {

   const {
      className,
      links = [],
   } = props


   return (
      <div
         className='soc1als'
      >
         <ul>
            {links.map(({ label, iconName }, index) => (
               <li className="soc1als__item" key={index}>
                  <Button
                     className="soc1als__link"
                     mode="black-10"
                     href="/"
                     target="_blank"
                     label={label}
                     isLabelHidden
                     iconName={iconName}
                     hasFillIcon
                  />
               </li>
            ))}
         </ul>
      </div>
   )
}

export default Socials