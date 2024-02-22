import { ReactNode, useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

//styles
import "./Layout.scss";
import Header from "../../molecules/Header/Header";
import Footer from "../../molecules/Footer/Footer";
import HeaderSkeleton from "../../molecules/Header/HeaderSkeleton";
import FooterSkeleton from "../../molecules/Footer/FooterSkeleton";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    // Simula una carga asincrónica
    const fakeLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    fakeLoad();
  }, []);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className="Layout">
      {loading ? <HeaderSkeleton /> : <Header />}

      <motion.div
        className="MainDiv"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>

      {loading ? <FooterSkeleton /> : <Footer />}
    </div>
  );
};

export default Layout;
