import { motion } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import { Loader, SettingDrawer, SettingFab } from '../common';
import Footer from './footer';
import Navbar from './navbar';
import { useAuth } from '../../hooks';

export const Layout = ({ children, hideHeader, hideFooter, className = "" }) => {
  useAuth();

  return (
    <>
      <motion.main
        id="main-content"
        className="bg-white font-inter"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
        transition={{ duration: 0.3 }}
      >
        {!hideHeader && <Navbar />}
        <div class={`"w-screen min-h-screen relative z-[5]" ${className}`}>{children}</div>
        {!hideFooter && <Footer />}
        <ToastContainer />
        <Loader />

      </motion.main>
      <SettingFab />
      <SettingDrawer />
    </>
  );
};

export default Layout;
