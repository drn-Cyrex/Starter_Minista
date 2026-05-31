import { Head } from "minista"
import Header from "@/layouts/Header/Header"
import Content from "@/layouts/Content/Content"
import Footer from "@/layouts/Footer/Footer"

export default function Global(props) {
   const { children, title, url } = props

   return (
      <>
         <Head
            htmlAttributes={{ lang: "en" }}>
            <title>DRN | {title}</title>

            <link
               rel="apple-touch-icon"
               sizes="180x180"
               href="/apple-touch-icon.png"
            ></link>
            <link
               rel="icon"
               type="image/png"
               sizes="32x32"
               href="/favicon-32x32.png"
            ></link>
            <link
               rel="icon"
               type="image/png"
               sizes="16x16"
               href="/favicon-16x16.png"
            ></link>

            <link rel="stylesheet" href="/src/styles/main.scss" />
            <script type="module" src="/src/scripts/app.js"></script>
         </Head>

         <Header url={url}/>
         <Content>
            {children}
         </Content>
         <Footer />
      </>
   )
}
