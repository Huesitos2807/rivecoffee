import React from 'react';
    import { NavLink } from 'react-router-dom';
    import { Coffee, MapPin, BookOpenText, Sprout, ShoppingBasket, Moon, Heart } from 'lucide-react';
    import { motion } from 'framer-motion';

    const navItems = [
      { name: 'Bottega', path: '/bottega', icon: Coffee },
      { name: 'Nuestra Historia', path: '/nuestra-historia', icon: Heart },
      { name: 'Sucursales', path: '/sucursales', icon: MapPin },
      { name: 'Lettura', path: '/lettura', icon: BookOpenText },
      { name: 'Giardino', path: '/giardino', icon: Sprout },
      { name: 'Mercato', path: '/mercato', icon: ShoppingBasket },
    ];

    const Navbar = ({ isScrolled }) => {
      return (
        <motion.nav 
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b-2 
            ${isScrolled 
              ? 'bg-espresso-brown/95 backdrop-blur-sm shadow-2xl border-aguardiente-gold/70' 
              : 'bg-espresso-brown shadow-xl border-aguardiente-gold/50'}`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex items-center justify-between transition-height duration-300 ease-in-out ${isScrolled ? 'h-20' : 'h-24'}`}>
              <NavLink to="/bottega" className="flex items-center group" aria-label="Página de inicio de Rive Coffee">
                <div className="flex flex-col items-start">
                    <motion.span 
                      className="font-manuscrita text-aguardiente-gold group-hover:text-crema-leche transition-colors"
                      style={{ fontSize: isScrolled ? '2rem' : '2.5rem' }} 
                    >
                      Rive
                    </motion.span>
                    <motion.span 
                      className="font-serifElegant text-crema-leche -mt-1 group-hover:text-aguardiente-gold transition-colors"
                      style={{ fontSize: isScrolled ? '0.75rem' : '0.875rem' }} 
                    >
                      Coffee
                    </motion.span>
                </div>
                <Moon 
                  className={`h-6 w-6 text-vino-tinto ml-3 group-hover:text-aguardiente-gold transition-all duration-300 ${isScrolled ? 'opacity-80 scale-90' : 'opacity-100 scale-100'}`} 
                  aria-hidden="true"
                />
              </NavLink>
              <div className="hidden md:flex items-center space-x-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-lg text-sm font-serifElegant transition-all duration-300 ease-in-out flex items-center space-x-1.5 transform hover:scale-105
                       ${isActive 
                         ? 'bg-aguardiente-gold text-espresso-brown shadow-inner-strong' 
                         : `text-crema-leche hover:bg-vino-tinto/70 hover:text-crema-leche ${isScrolled ? 'py-2 px-3 text-xs' : 'py-3 px-4 text-base'}`}` 
                    } 
                  >
                    <item.icon className={`${isScrolled ? 'h-4 w-4' : 'h-5 w-5'} transition-all duration-300`} aria-hidden="true" />
                    <span>{item.name}</span>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </motion.nav>
      );
    };

    export default Navbar;