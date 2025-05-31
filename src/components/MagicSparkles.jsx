import React, { useEffect, useState, useMemo } from 'react';
    import { motion } from 'framer-motion';

    const Sparkle = React.memo(({ color, size, x, y, delay, duration }) => {
      return (
        <motion.div
          style={{
            position: 'absolute',
            left: x,
            top: y,
            width: size,
            height: size,
            borderRadius: '50%',
            backgroundColor: color,
            boxShadow: `0 0 ${size * 0.8}px ${size * 0.4}px ${color}`,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
          transition={{ duration: duration, delay: delay, ease: "easeInOut" }}
        />
      );
    });
    Sparkle.displayName = 'Sparkle';
    
    const MagicSparkles = ({ count = 10, elementRef, trigger }) => {
      const [sparkles, setSparkles] = useState([]);
      const colors = useMemo(() => ['#D9A441', '#541B3D', '#F7EFE1', '#566E3D'], []);

      useEffect(() => {
        let animationFrameId;
        let timeoutId;

        if (trigger && elementRef.current) {
          const createSparkles = () => {
            const rect = elementRef.current.getBoundingClientRect();
            const newSparkles = Array.from({ length: count }).map(() => ({
              id: Math.random(),
              color: colors[Math.floor(Math.random() * colors.length)],
              size: Math.random() * 6 + 3,
              x: Math.random() * (rect.width + 40) - 20,
              y: Math.random() * (rect.height + 40) - 20,
              delay: Math.random() * 0.4,
              duration: Math.random() * 0.7 + 0.4,
            }));
            setSparkles(newSparkles);
            
            const maxDuration = Math.max(...newSparkles.map(s => s.delay + s.duration)) * 1000;
            timeoutId = setTimeout(() => {
                if (elementRef.current) { // Check if component is still mounted
                    setSparkles([]);
                }
            }, maxDuration + 150);
          };
          
          animationFrameId = requestAnimationFrame(createSparkles);
        }
        
        return () => {
          cancelAnimationFrame(animationFrameId);
          clearTimeout(timeoutId);
        };
      }, [trigger, count, elementRef, colors]);

      if (!elementRef.current || sparkles.length === 0) return null;

      return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 10 }}>
          {sparkles.map(s => <Sparkle key={s.id} {...s} />)}
        </div>
      );
    };

    export default React.memo(MagicSparkles);