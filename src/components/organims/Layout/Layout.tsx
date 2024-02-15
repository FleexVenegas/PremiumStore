//styles
import { ReactNode, useEffect, useState } from "react"
import "./Layout.scss"
import Header from "../../molecules/Header/Header"
import Footer from "../../molecules/Footer/Footer"
import HeaderSkeleton from "../../molecules/Header/HeaderSkeleton"
import FooterSkeleton from "../../molecules/Footer/FooterSkeleton"

interface LayoutProps{
    children: ReactNode
}


const Layout = ({ children }: LayoutProps) => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simula una carga asincrónica
    const fakeLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    fakeLoad();
  }, []);


  return (
    <div className="Layout">

      { loading ? (<HeaderSkeleton />) : (<Header />) }
          {children}
      { loading ? (<FooterSkeleton />) : (<Footer />) }
    </div>
  )
}

export default Layout