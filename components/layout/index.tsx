import Head from "next/head"
import { ReactElement } from "react";
import Footer from "./Footer"
import Navbar from "./Navbar"
type LayoutProps = {
  childern: React.ReactNode,
  title?: string
}

const Layout:React.FC<LayoutProps> = ({ childern, title }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title}-Mini E-commerce` : 'Mini E-commerce'}</title>
      </Head>
      <Navbar/>
      <main className="min-h-screen">{childern}</main>
      <Footer />

    </>
  )
}

export default Layout