import "./Logo.scss"
import classNames from "classnames"

const Logo = (props) => {
   const title = "Home"

   const { className,
      loading = "lazy"
   } = props

   return (
      <a
         href="/"
         className={classNames(className, "logo")}
         title={title}
         aria-label={title}
      >
         <img
            src="/src/assets/icons/logo/logo-DRN.svg"
            alt=""
            // height={60}
            // width={199}
            loading={loading}
         />
      </a>
   )
}

export default Logo
