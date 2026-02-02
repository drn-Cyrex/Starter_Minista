import './Main.scss'

import Hero from '@/sections/Hero/Hero'

const Main = (props) => {
   const { children } = props

   return (
      <main>
         {children}
      </main>
   )


}

export default Main