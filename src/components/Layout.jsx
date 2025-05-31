import React, { useState, useEffect } from 'react';
    import Navbar from '@/components/Navbar';
    import Footer from '@/components/Footer';
    import ScrollToTopButton from '@/components/ScrollToTopButton';
    import { motion, AnimatePresence } from 'framer-motion';
    import { useLocation } from 'react-router-dom';

    const Layout = ({ children }) => {
      const location = useLocation();
      const [isScrolled, setIsScrolled] = useState(false);

      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      return (
        <div className="min-h-screen flex flex-col bg-crema-leche text-carbon-negro selection:bg-vino-tinto selection:text-crema-leche">
          <Navbar isScrolled={isScrolled} />
          <AnimatePresence mode="wait">
            <motion.main
              key={location.pathname}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
              className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-10"
            >
              {children}
            </motion.main>
          </AnimatePresence>
          <Footer />
          <ScrollToTopButton />
        </div>
      );
    };

    export default Layout;