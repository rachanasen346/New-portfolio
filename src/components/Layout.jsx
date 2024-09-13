import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    const location = useLocation();
    
    // Check if the current path is `/resume`
    const hideNavbarAndFooter = location.pathname === '/resume';
    
    return (
      <div className='h-[100vh]'>
        {!hideNavbarAndFooter && <Navbar />}
        <main>{children}</main>
        {!hideNavbarAndFooter && <Footer />}
      </div>
    );
  };

  export default Layout
  