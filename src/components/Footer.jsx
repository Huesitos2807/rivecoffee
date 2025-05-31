import React from 'react';
    import { motion } from 'framer-motion';
    import { Coffee, Heart, Flower, BookOpenText, Sprout } from 'lucide-react';
    import { Link } from 'react-router-dom';

    const footerLinks = [
      { name: "El Ritual del Café", path: "/bottega", icon: <Coffee className="inline h-4 w-4 mr-1 text-aguardiente-gold" /> },
      { name: "Nuestra Historia de Amor", path: "/nuestra-historia", icon: <Heart className="inline h-4 w-4 mr-1 text-vino-tinto" /> },
      { name: "Un Libro, Un Alma", path: "/lettura", icon: <BookOpenText className="inline h-4 w-4 mr-1 text-verde-seca" /> },
      { name: "Jardín de Ensueño", path: "/giardino", icon: <Sprout className="inline h-4 w-4 mr-1 text-aguardiente-gold" /> },
    ];

    const Footer = () => {
      const currentYear = new Date().getFullYear();
      return (
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-carbon-negro text-crema-leche py-12 text-center border-t-4 border-aguardiente-gold"
        >
          <div className="container mx-auto px-6">
            <div className="flex justify-center items-center space-x-3 mb-6">
              <Coffee className="text-aguardiente-gold h-7 w-7" />
              <span className="font-manuscrita text-3xl text-aguardiente-gold">Rive Coffee</span>
              <Flower className="text-verde-seca h-7 w-7" />
            </div>
            <p className="text-lg font-serifElegant italic mb-4">
              "Una cafetería donde el café se enamora del aguardiente."
            </p>
            
            <div className="my-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              {footerLinks.map(link => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className="font-serifElegant hover:text-aguardiente-gold transition-colors duration-300 opacity-80 hover:opacity-100"
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
            </div>

            <p className="text-md mb-2 opacity-90">
              <span className="font-manuscrita">Una marca de Anna Maria & Juan José</span>
            </p>
            <p className="text-md mb-6 opacity-90">
              <span className="font-serifElegant italic">Diseñada con amor <Heart className="inline h-5 w-5 text-vino-tinto" />, fuego y flor <Flower className="inline h-5 w-5 text-verde-seca" />.</span>
            </p>
             <p className="mb-4 text-sm opacity-70 max-w-lg mx-auto">
             “Café con alcohol, botánica con alma. Hecho por dos corazones en combustión lenta.”
            </p>
            <p className="text-xs opacity-60">
              &copy; {currentYear} Rive Coffee. Todos los derechos reservados.
            </p>
          </div>
        </motion.footer>
      );
    };

    export default Footer;