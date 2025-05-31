import React, { useEffect, useState, useMemo } from 'react';
    import { motion } from 'framer-motion';
    import { Leaf, Flower, Moon, Heart } from 'lucide-react';

    const icons = [Leaf, Flower, Moon, Heart];
    const elementColors = ['vino-tinto', 'aguardiente-gold', 'verde-seca', 'espresso-brown/70'];

    const FallingElement = React.memo(({ id, initialX, initialDelay, fallDuration, color, IconComponent }) => {
      const size = useMemo(() => Math.random() * 18 + 12, []);
      const initialRotation = useMemo(() => Math.random() * 180 - 90, []);
      const animateRotation = useMemo(() => Math.random() * 360 - 180 + (Math.random() > 0.5 ? 180 : -180), []);
      const initialScale = useMemo(() => Math.random() * 0.5 + 0.5, []);
      const animateScale = useMemo(() => Math.random() * 0.3 + 0.8, []);

      return (
        <motion.div
          key={id}
          initial={{ 
            x: initialX, 
            y: '-10vh', 
            opacity: 0, 
            rotate: initialRotation,
            scale: initialScale
          }}
          animate={{ 
            y: '110vh', 
            opacity: [0, 0.6, 0.6, 0.6, 0],
            rotate: animateRotation,
            scale: animateScale
          }}
          transition={{ 
            duration: fallDuration, 
            delay: initialDelay, 
            ease: "linear",
            repeat: Infinity,
            repeatDelay: Math.random() * 3 + 2
          }}
          style={{
            position: 'fixed',
            left: 0, 
            top: 0, 
            zIndex: 1,
          }}
          className={`text-${color}`}
        >
          <IconComponent size={size} strokeWidth={1.2}/>
        </motion.div>
      );
    });
    FallingElement.displayName = 'FallingElement';


    const FallingFlowers = () => {
      const [elements, setElements] = useState([]);
      const numElements = 20;

      useEffect(() => {
        const newElements = Array.from({ length: numElements }).map((_, i) => {
          const IconComponent = icons[Math.floor(Math.random() * icons.length)];
          return {
            id: i,
            initialX: `${Math.random() * 100}vw`,
            initialDelay: Math.random() * 12, 
            fallDuration: Math.random() * 15 + 15,
            color: elementColors[Math.floor(Math.random() * elementColors.length)],
            IconComponent
          };
        });
        setElements(newElements);
      }, []);

      if (elements.length === 0) return null;

      return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          {elements.map(element => (
            <FallingElement 
              key={element.id} 
              id={element.id}
              initialX={element.initialX} 
              initialDelay={element.initialDelay}
              fallDuration={element.fallDuration}
              color={element.color}
              IconComponent={element.IconComponent}
            />
          ))}
        </div>
      );
    };

    export default React.memo(FallingFlowers);