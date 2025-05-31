import React, { useRef, useState, useMemo } from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Coffee, Wine, BookHeart, Flower2, GlassWater, Utensils } from 'lucide-react';
    import MagicSparkles from '@/components/MagicSparkles';

    const menuData = {
      "Clásicos Infieles": {
        quote: "Cafés tradicionales con un toque travieso de alcohol.",
        icon: <Coffee className="w-10 h-10 text-aguardiente-gold" />,
        items: ["Espresso Romano con Amaretto", "Capuccino con Baileys", "Latte de Lavanda con Vodka", "Mocaccino al Ron Oscuro"]
      },
      "Intensos y Espirituosos": {
        quote: "Bebidas para almas fuertes.",
        icon: <Wine className="w-10 h-10 text-vino-tinto" />,
        items: ["Irish Coffee a la Rive", "Café con Aguardiente (signature drink)", "Cold Brew con Licor de Anís", "Affogato con Grappa"]
      },
      "Dulces Secretos": {
        quote: "Licores, chocolate y café. Peligrosamente ricos.",
        icon: <BookHeart className="w-10 h-10 text-verde-seca" />,
        items: ["Bombón de Brandy", "Café con Nutella & Frangelico", "Leche de almendras + Cacao + Licor de café", "Chocolate caliente con Coñac"]
      },
      "Nuevos Ritos de Amor y Dolor": {
        quote: "Recetas con historia detrás.",
        icon: <Flower2 className="w-10 h-10 text-aguardiente-gold" />,
        items: [
          { name: "Bacardi Mocca", desc: "Moca italiano con ron Bacardi oscuro." },
          { name: "Espresso Martini", desc: "Vodka, espresso y licor de café." },
          { name: "Latte “León” 🦁", desc: "Latte con brandy — representa el dolor de una flor que no se rinde." },
          { name: "Tecafé", desc: "Té negro, espresso y vodka herbal." },
          { name: "Maracuchilatte", desc: "Aguardiente, maracuyá y café." },
          { name: "Café Palomero 🕊️", desc: "Café con leche de coco y maíz tostado." }
        ]
      },
      "Bocados del Alma": {
        quote: "Panadería artesanal para el alma borracha.",
        icon: <Utensils className="w-10 h-10 text-espresso-brown" />,
        items: ["Focaccia de romero y oliva", "Croissant relleno de queso de cabra", "Pan dulce infusionado con anís", "Cheesecake al vino tinto"]
      }
    };
    
    const brandPhrases = [
      "Sabes a madrugada con resaca feliz.",
      "Me emborrachas el alma aunque seas café.",
      "Entre sorbos y silencios, te pienso.",
      "Rive: donde el café tiene acento francés y corazón italiano."
    ];

    const PageSection = ({ title, subtitle, children, titleColor = "text-espresso-brown", subtitleColor = "text-vino-tinto", className = "" }) => {
      const sectionRef = useRef(null);
      const [sparkleTrigger, setSparkleTrigger] = useState(0);

      return (
        <motion.section 
          ref={sectionRef}
          className={`relative py-12 px-6 md:px-10 bg-crema-leche/50 backdrop-blur-md rounded-xl shadow-2xl border border-espresso-brown/10 my-10 ${className}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          onViewportEnter={() => setTimeout(() => setSparkleTrigger(prev => prev + 1), 250)}
        >
          <MagicSparkles count={15} elementRef={sectionRef} trigger={sparkleTrigger} />
          <header className="text-center mb-10 relative z-10">
            <h1 className={`text-5xl md:text-6xl font-manuscrita ${titleColor} mb-2`}>{title}</h1>
            {subtitle && <p className={`text-xl md:text-2xl font-serifElegant italic ${subtitleColor}`}>{subtitle}</p>}
          </header>
          <div className="relative z-10">{children}</div>
        </motion.section>
      );
    };


    const BottegaPage = () => {
      const randomPhrase = useMemo(() => brandPhrases[Math.floor(Math.random() * brandPhrases.length)], []);
      const logoRef = useRef(null);
      const [logoSparkleTrigger, setLogoSparkleTrigger] = useState(0);


      return (
        <div className="min-h-screen pt-24">
          <PageSection title="Bottega Rive" subtitle='"El ritual del café y el aguardiente."'>
            <div className="max-w-3xl mx-auto text-center text-lg text-carbon-negro leading-relaxed space-y-6">
              <p>
                Bienvenido al corazón palpitante de <span className="font-manuscrita text-aguardiente-gold text-xl">Rive Coffee</span>. Aquí, cada sorbo es una historia, cada aroma una emoción. Fusionamos la intensidad artesanal del café con el espíritu libre y pasional del alcohol, en un abrazo que también acoge la intimidad de los libros y la frescura de la naturaleza.
              </p>
              <p className="font-serifElegant italic text-vino-tinto text-xl">
                "Somos un café-bar-librería-jardín: un refugio íntimo y creativo, con un alma rebelde y un aire europeo que mezcla la elegancia francesa con la energía italiana."
              </p>
              <div 
                ref={logoRef}
                className="py-6 relative inline-block" 
                onMouseEnter={() => setLogoSparkleTrigger(prev => prev + 1)}
              >
                <MagicSparkles count={20} elementRef={logoRef} trigger={logoSparkleTrigger} />
                <img-replace alt="Logo ilustrado de Rive Coffee con una taza de café de la que brota una flor, rodeada de elementos botánicos y una luna." class="mx-auto w-48 h-auto" />
              </div>
            </div>
          </PageSection>

          <PageSection title="Nuestra Esencia" subtitle={randomPhrase} titleColor="text-verde-seca" subtitleColor="text-aguardiente-gold">
            <div className="max-w-4xl mx-auto text-carbon-negro text-center leading-loose space-y-5 text-md">
              <p>
                En Rive, el café es un <span className="font-semibold text-espresso-brown">ritual sagrado</span>, una pausa para conectar. El alcohol es <span className="font-semibold text-vino-tinto">espíritu indomable</span>, una chispa de audacia. Los libros son <span className="font-semibold text-verde-seca">susurros del alma</span>, y la naturaleza, nuestro <span className="font-semibold text-aguardiente-gold">lienzo vivo</span>.
              </p>
              <p>
                Creamos un espacio donde estos mundos convergen, donde la creatividad florece entre charlas y silencios cómplices, y el tiempo se desvanece en una atmósfera de elegancia bohemia.
              </p>
              <div className="flex justify-center space-x-6 py-6">
                <Coffee className="w-12 h-12 text-espresso-brown opacity-80 hover:opacity-100 transition-opacity" />
                <GlassWater className="w-12 h-12 text-aguardiente-gold opacity-80 hover:opacity-100 transition-opacity" />
                <BookHeart className="w-12 h-12 text-vino-tinto opacity-80 hover:opacity-100 transition-opacity" />
                <Flower2 className="w-12 h-12 text-verde-seca opacity-80 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </PageSection>

          <PageSection title="Menú Fusión" subtitle='"Donde el café tiene acento francés y corazón italiano."' titleColor="text-vino-tinto">
            <div className="space-y-12">
              {Object.entries(menuData).map(([category, data], index) => (
                <motion.div 
                  key={category}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="p-6 md:p-8 rounded-lg shadow-xl bg-crema-leche/70 border border-aguardiente-gold/30"
                >
                  <div className="flex flex-col sm:flex-row items-center mb-6 text-center sm:text-left">
                    <div className="mb-4 sm:mb-0 sm:mr-6 flex-shrink-0">{data.icon}</div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-serifElegant text-espresso-brown mb-1">{category}</h3>
                      <p className="font-manuscrita text-lg text-vino-tinto italic">{data.quote}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 list-inside">
                    {data.items.map(item => (
                      <li key={typeof item === 'string' ? item : item.name} className="text-carbon-negro">
                        <span className="font-manuscrita text-xl text-espresso-brown mr-2">-</span> 
                        {typeof item === 'string' ? (
                          <span className="font-serifElegant">{item}</span>
                        ) : (
                          <span className="font-serifElegant">
                            <strong className="text-vino-tinto">{item.name}:</strong> {item.desc}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </PageSection>
          
          <div className="text-center mt-16 mb-8">
            <Button size="lg" variant="secondary" className="bg-aguardiente-gold text-espresso-brown hover:bg-aguardiente-gold/90 text-xl px-10 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-serifElegant">
              Descubre Más Rituales
            </Button>
          </div>
        </div>
      );
    };

    export default BottegaPage;