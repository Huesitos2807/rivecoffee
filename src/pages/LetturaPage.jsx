import React, { useRef, useState } from 'react';
    import { motion } from 'framer-motion';
    import { BookOpenText, Feather, Repeat, Mic2, Wine, Coffee, Leaf, MessageSquare, Edit3 } from 'lucide-react';
    import { Button } from '@/components/ui/button';
    import MagicSparkles from '@/components/MagicSparkles';

    const brandPhrases = [
      "Entre sorbos y silencios, te pienso.",
      "Un libro abierto, un café servido, un alma encendida.",
      "Poesía líquida para corazones sedientos de historias."
    ];

    const maridajesLiterarios = [
      {
        libro: "Cien Años de Soledad",
        bebida: "Café con Aguardiente",
        justificacion: "Para un realismo mágico que embriaga el alma, un clásico colombiano que calienta el corazón.",
        libroImgAlt: "Portada conceptual de Cien Años de Soledad.",
        bebidaImgAlt: "Vaso rústico con Café con Aguardiente.",
        icon: <BookOpenText className="w-10 h-10 text-aguardiente-gold" />
      },
      {
        libro: "El Principito",
        bebida: "Latte de Lavanda con Vodka",
        justificacion: "Un elixir suave y soñador para un viaje a las estrellas y a la esencia de lo invisible.",
        libroImgAlt: "Portada conceptual de El Principito.",
        bebidaImgAlt: "Taza elegante con Latte de Lavanda.",
        icon: <Feather className="w-10 h-10 text-vino-tinto" />
      },
      {
        libro: "Rayuela",
        bebida: "Espresso Martini",
        justificacion: "Un cóctel audaz y laberíntico para una novela que desafía el orden y celebra el caos creativo.",
        libroImgAlt: "Portada conceptual de Rayuela.",
        bebidaImgAlt: "Copa de Espresso Martini.",
        icon: <Coffee className="w-10 h-10 text-espresso-brown" />
      }
    ];

    const rinconesConAlma = [
      {
        nombre: "El Diván de los Secretos Compartidos",
        descripcion: "Un rincón íntimo, envuelto en terciopelo vino tinto, perfecto para confesiones susurradas y lecturas que tocan el alma.",
        icon: <MessageSquare className="w-8 h-8 text-vino-tinto" />,
        imgAlt: "Rincón de lectura acogedor con un diván de terciopelo vino tinto."
      },
      {
        nombre: "El Mirador de Musas Errantes",
        descripcion: "Junto a un ventanal bañado de luz, con vistas a nuestro Giardino, ideal para encontrar inspiración y dejar volar la imaginación.",
        icon: <Leaf className="w-8 h-8 text-verde-seca" />,
        imgAlt: "Rincón de lectura luminoso con vistas a un jardín interior."
      },
      {
        nombre: "La Cripta de los Poetas Olvidados",
        descripcion: "Un espacio más recogido, con luz tenue y estanterías repletas de joyas literarias esperando ser redescubiertas. El silencio aquí habla.",
        icon: <BookOpenText className="w-8 h-8 text-carbon-negro" />,
        imgAlt: "Rincón de lectura íntimo con estanterías llenas de libros antiguos."
      }
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

    const MaridajeCard = ({ maridaje, index }) => {
      const cardRef = useRef(null);
      const [cardSparkleTrigger, setCardSparkleTrigger] = useState(0);
      return (
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="relative bg-crema-leche p-6 rounded-lg shadow-xl border border-aguardiente-gold/30 group overflow-hidden"
          onMouseEnter={() => setCardSparkleTrigger(prev => prev + 1)}
        >
          <MagicSparkles count={10} elementRef={cardRef} trigger={cardSparkleTrigger} />
          <div className="relative z-10">
            <div className="flex items-center mb-4">
              {maridaje.icon}
              <h3 className="text-2xl font-serifElegant text-espresso-brown ml-3">{maridaje.libro}</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="h-40 bg-carbon-negro/10 rounded flex items-center justify-center">
                <img-replace alt={maridaje.libroImgAlt} class="w-full h-full object-contain p-2 opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="h-40 bg-carbon-negro/10 rounded flex items-center justify-center">
                <img-replace alt={maridaje.bebidaImgAlt} class="w-full h-full object-contain p-2 opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <p className="font-manuscrita text-xl text-vino-tinto mb-2">Maridado con: {maridaje.bebida}</p>
            <p className="text-carbon-negro/90 text-sm leading-relaxed">{maridaje.justificacion}</p>
          </div>
        </motion.div>
      );
    };

    const RinconCard = ({ rincon, index }) => {
      const cardRef = useRef(null);
      const [cardSparkleTrigger, setCardSparkleTrigger] = useState(0);
      return (
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          className="relative bg-crema-leche p-6 rounded-lg shadow-lg border border-verde-seca/30 group overflow-hidden text-center"
          onMouseEnter={() => setCardSparkleTrigger(prev => prev + 1)}
        >
          <MagicSparkles count={8} elementRef={cardRef} trigger={cardSparkleTrigger} />
          <div className="relative z-10">
            <div className="mb-3 inline-block p-3 bg-crema-leche/70 rounded-full shadow-inner">{rincon.icon}</div>
            <h3 className="text-xl font-serifElegant text-espresso-brown mb-2">{rincon.nombre}</h3>
            <div className="my-3 h-32 bg-carbon-negro/10 rounded flex items-center justify-center">
                <img-replace alt={rincon.imgAlt} class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-carbon-negro/80 text-xs leading-relaxed">{rincon.descripcion}</p>
          </div>
        </motion.div>
      );
    };


    const LetturaPage = () => {
      const randomPhrase = brandPhrases[Math.floor(Math.random() * brandPhrases.length)];
      const bookImageRef = useRef(null);
      const [bookSparkleTrigger, setBookSparkleTrigger] = useState(0);


      return (
        <div className="min-h-screen pt-24">
          <PageSection title="Lettura Rive" subtitle='"Una librería para leer con el alma borracha."'>
            <div className="max-w-3xl mx-auto text-center text-lg text-carbon-negro leading-relaxed space-y-6">
              <p>
                Bienvenido a <span className="font-manuscrita text-aguardiente-gold text-xl">Lettura Rive</span>, nuestro santuario para los espíritus curiosos y las almas sedientas de historias. Aquí, los libros son portales, y cada página es una invitación a un viaje íntimo, acompañado por el murmullo del café y el cálido abrazo de nuestra atmósfera.
              </p>
              <p className="font-serifElegant italic text-vino-tinto text-xl">
                "Sumérgete en un mundo donde la poesía se entrelaza con el aroma del espresso, y las ideas fluyen tan libremente como el vino."
              </p>
              <div 
                ref={bookImageRef}
                className="py-6 relative inline-block"
                onMouseEnter={() => setBookSparkleTrigger(prev => prev + 1)}
                >
                <MagicSparkles count={20} elementRef={bookImageRef} trigger={bookSparkleTrigger} />
                <img-replace alt="Ilustración de un libro abierto del que emanan hojas y flores, con una taza de café al lado." class="mx-auto w-40 h-auto opacity-90" />
              </div>
            </div>
          </PageSection>

          <PageSection title="Maridajes Literarios y Elixires del Alma" subtitle='"Combinaciones poéticas para una experiencia multisensorial."' titleColor="text-vino-tinto">
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
              {maridajesLiterarios.map((maridaje, index) => (
                <MaridajeCard maridaje={maridaje} index={index} key={maridaje.libro}/>
              ))}
            </div>
             <p className="text-center mt-8 text-md text-carbon-negro/80 font-serifElegant italic">
              Descubre en nuestra carta las bebidas que inspiran estos y otros maridajes.
            </p>
          </PageSection>

          <PageSection title="Rincones con Alma Propia" subtitle='"Espacios que susurran historias esperando ser leídas."' titleColor="text-verde-seca">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rinconesConAlma.map((rincon, index) => (
                <RinconCard rincon={rincon} index={index} key={rincon.nombre}/>
              ))}
            </div>
            <p className="text-center mt-6 text-sm text-carbon-negro/70">
              <Leaf className="inline w-4 h-4 mr-1 text-verde-seca" />
              La influencia de nuestro Giardino se siente en cada rincón, con plantas aromáticas y luz natural que invitan a la calma.
            </p>
          </PageSection>
          
          <PageSection title="El Ágora de los Versos Susurrados" subtitle='"Tu voz, nuestra inspiración. Comparte tu musa."' titleColor="text-aguardiente-gold">
            <div className="text-center max-w-2xl mx-auto">
                <Mic2 className="w-16 h-16 text-aguardiente-gold mx-auto mb-4" />
                <p className="text-lg text-carbon-negro mb-4">
                    En Rive, creemos en el poder de la palabra compartida. Este es tu espacio para dar voz a tus creaciones: poemas, prosas breves, reflexiones nacidas al calor de un café o bajo el influjo de un buen libro.
                </p>
                <p className="font-manuscrita text-xl text-vino-tinto mb-6">
                    Próximamente: una galería curada para tus versos y un calendario de eventos de poesía y trueque literario.
                </p>
                <Button variant="secondary" className="font-serifElegant">
                    <Edit3 className="w-5 h-5 mr-2"/> Comparte tu Musa (Formulario Próximamente)
                </Button>
            </div>
          </PageSection>


          <div className="text-center mt-16 mb-8">
             <p className="text-2xl font-manuscrita text-espresso-brown mb-6">{randomPhrase}</p>
            <Button size="lg" variant="outline" className="border-2 border-vino-tinto text-vino-tinto hover:bg-vino-tinto hover:text-crema-leche text-lg px-10 py-3 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-serifElegant">
              Explorar Catálogo Completo (Próximamente)
            </Button>
          </div>
        </div>
      );
    };

    export default LetturaPage;