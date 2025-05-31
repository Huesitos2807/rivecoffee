import React, { useRef, useState } from 'react';
    import { motion } from 'framer-motion';
    import { Sprout, Droplets, Sun, Coffee, Wind, Heart, BookHeart, Edit2, CalendarDays, Watch } from 'lucide-react';
    import { Button } from '@/components/ui/button';
    import MagicSparkles from '@/components/MagicSparkles';

    const giardinoHighlights = [
      { 
        name: "El Origen Botánico de Nuestros Elixires", 
        description: "Nuestra Hierbabuena Andina se destila en el 'Susurro Verde', la lavanda de nuestros campos inspira el 'Latte de Ensueño'. Cada sorbo, un viaje del jardín a tu taza, resaltando la autenticidad y frescura de Rive.",
        icon: <Droplets className="w-12 h-12 text-aguardiente-gold" />,
        color: "border-aguardiente-gold",
        imgAlt: "Primer plano de hojas de hierbabuena fresca y flores de lavanda."
      },
      { 
        name: "Rituales de Conexión en el Giardino", 
        description: "Te invitamos al 'Ritual del Primer Café entre Rocío': una pausa matutina para saborear tu bebida rodeado de la quietud del jardín. O al 'Atardecer de los Aromas', cuando las flores liberan su perfume más intenso.",
        icon: <Watch className="w-12 h-12 text-vino-tinto" />,
        color: "border-vino-tinto",
        imgAlt: "Taza de café humeante en una mesa de jardín al amanecer."
      },
      { 
        name: "Adopta un Fragmento del Edén", 
        description: "Soy 'Aurora', una begonia soñadora que anhela un hogar lleno de luz y cuentos. Cada una de nuestras plantas tiene una bio poética y un deseo. ¿Le das un hogar a 'León', el valiente helecho?",
        icon: <Heart className="w-12 h-12 text-verde-seca" />, // Changed from HandHeart
        color: "border-verde-seca",
        imgAlt: "Macetas de cerámica artesanal con plantas listas para adopción."
      },
      {
        name: "Semillas de Creatividad: Futuros Talleres", 
        description: "Próximamente, el Giardino se abrirá para talleres íntimos: 'El Arte del Kokedama', 'Destilando Poesía: Creación de Infusiones Propias', 'Botánica Ilustrada'. Sembrando conocimiento y pasión.",
        icon: <CalendarDays className="w-12 h-12 text-espresso-brown" />, // Changed from Edit2
        color: "border-espresso-brown",
        imgAlt: "Manos trabajando con tierra y plantas en un taller de jardinería."
      }
    ];

    const brandPhrases = [
      "Aquí, la naturaleza te sirve un espresso con aroma a tierra y rocío.",
      "Un jardín secreto donde florecen las ideas y se cultivan los sueños más salvajes.",
      "Respira profundo: el aire huele a café recién molido y a flores besadas por la luna."
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
          onViewportEnter={() => setSparkleTrigger(prev => prev + 1)}
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

    const HighlightCard = ({ highlight, index }) => {
        const cardRef = useRef(null);
        const [cardSparkleTrigger, setCardSparkleTrigger] = useState(0);
        return(
            <motion.div
                ref={cardRef}
                key={highlight.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative p-6 rounded-xl shadow-lg bg-crema-leche/70 border-2 ${highlight.color} flex flex-col text-left hover:shadow-xl transition-shadow h-full group overflow-hidden`}
                onMouseEnter={() => setCardSparkleTrigger(prev => prev + 1)}
            >
                <MagicSparkles count={8} elementRef={cardRef} trigger={cardSparkleTrigger} />
                <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                        <div className="p-3 bg-crema-leche/80 rounded-full shadow-inner mr-4">{highlight.icon}</div>
                        <h3 className="text-2xl font-serifElegant text-espresso-brown">{highlight.name}</h3>
                    </div>
                    <div className="my-3 h-40 bg-carbon-negro/10 rounded flex items-center justify-center">
                        <img-replace alt={highlight.imgAlt} class="w-full h-full object-cover rounded opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-carbon-negro/90 text-sm leading-relaxed flex-grow">{highlight.description}</p>
                </div>
            </motion.div>
        );
    };


    const GiardinoPage = () => {
      const randomPhrase = brandPhrases[Math.floor(Math.random() * brandPhrases.length)];
      const plantImageRef = useRef(null);
      const [plantSparkleTrigger, setPlantSparkleTrigger] = useState(0);

      return (
        <div className="min-h-screen pt-24">
          <PageSection title="Giardino Rive" subtitle='"Una selva que sirve espresso."' titleColor="text-verde-seca">
            <div className="max-w-3xl mx-auto text-center text-lg text-carbon-negro leading-relaxed space-y-6">
              <p>
                Bienvenido a <span className="font-manuscrita text-aguardiente-gold text-xl">Giardino Rive</span>, nuestro pulmón esmeralda, el corazón botánico de Rive. Un espacio donde la naturaleza viva se entrelaza con el aroma del café, invitándote a reconectar, respirar y encontrar inspiración, siendo fuente de nuestras creaciones y rituales.
              </p>
              <p className="font-serifElegant italic text-vino-tinto text-xl">
                "Más que un jardín, es un estado de ánimo: un refugio botánico para almas creativas y espíritus libres que buscan la fuente de nuestros elixires."
              </p>
              <div 
                ref={plantImageRef} 
                className="py-6 relative inline-block"
                onMouseEnter={() => setPlantSparkleTrigger(prev => prev + 1)}
              >
                <MagicSparkles count={20} elementRef={plantImageRef} trigger={plantSparkleTrigger} />
                <img-replace alt="Ilustración de una planta exuberante creciendo dentro de una taza de café, simbolizando el Giardino Rive." class="mx-auto w-36 h-auto opacity-90" />
              </div>
            </div>
          </PageSection>

          <PageSection title="El Alma Botánica de Rive" subtitle={randomPhrase} titleColor="text-espresso-brown" subtitleColor="text-aguardiente-gold">
            <div className="max-w-4xl mx-auto text-carbon-negro text-center leading-loose space-y-5 text-md">
              <p>
                Nuestro Giardino es una oda a la flora nativa y a la belleza indómita. Cada rincón, un santuario para disfrutar de brebajes inspirados en la tierra o perderse en la contemplación. Es el origen de la frescura que encuentras en cada taza, la inspiración detrás de nuestros tés y el secreto de nuestros brebajes florales.
              </p>
            </div>
          </PageSection>

          <PageSection title="Experiencias Vivas del Giardino" subtitle='"Donde la tierra y el café se hacen uno."' titleColor="text-verde-seca">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {giardinoHighlights.map((highlight, index) => (
                <HighlightCard highlight={highlight} index={index} key={highlight.name}/>
              ))}
            </div>
          </PageSection>
          
          <div className="text-center mt-16 mb-8">
            <Button size="lg" variant="outline" className="border-2 border-verde-seca text-verde-seca hover:bg-verde-seca hover:text-crema-leche text-lg px-10 py-3 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-serifElegant">
              Adopta un Fragmento del Edén (Ver Historias)
            </Button>
            <p className="mt-8 text-md text-carbon-negro max-w-lg mx-auto">
              "El Giardino Rive te espera para ofrecerte un respiro natural, un sorbo de vida y una conexión profunda con la esencia de la tierra."
            </p>
            <div className="flex justify-center space-x-8 py-8">
                <Wind className="w-10 h-10 text-aguardiente-gold opacity-70" />
                <Sun className="w-10 h-10 text-vino-tinto opacity-70" />
                <Sprout className="w-10 h-10 text-verde-seca opacity-70" />
            </div>
          </div>
        </div>
      );
    };

    export default GiardinoPage;