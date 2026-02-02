import { Head } from "minista"
import Header from '@/layouts/Header/Header'
import Main from "@/layouts/Main/Main"
import Footer from "@/layouts/Footer/Footer"

export default function (props) {

   const {
      children,
      title,
      url,
   } = props


   return (
      <>
         <Head htmlAttributes={{ lang: 'en' }}>
            <title>Stream Vibe | {title}</title>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
            <link rel="manifest" href="/site.webmanifest"></link>
            <script src={'/src/main.js'} type="module" />
         </Head>

         <Header url={url}/>
         <Main>
            {children}
         </Main>
         <Footer />
      </>
   )
}
