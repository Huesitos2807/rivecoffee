import React, { useState, useEffect } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { ArrowUpCircle } from 'lucide-react';
    import { Button } from '@/components/ui/button';

    const ScrollToTopButton = () => {
      const [isVisible, setIsVisible] = useState(false);

      const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

      useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
          window.removeEventListener('scroll', toggleVisibility);
        };
      }, []);

      return (
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-8 right-8 z-50"
            >
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="icon"
                className="bg-aguardiente-gold text-espresso-brown hover:bg-aguardiente-gold/90 hover:text-espresso-brown border-2 border-espresso-brown/50 rounded-full shadow-lg w-12 h-12"
                aria-label="Volver arriba"
              >
                <ArrowUpCircle className="h-6 w-6" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      );
    };

    export default ScrollToTopButton;