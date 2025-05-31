import React, { useRef, useState } from 'react';
    import { motion } from 'framer-motion';
    import { MapPin, Clock, Phone, Flower, Building, Image as ImageIcon } from 'lucide-react';
    import { Button } from '@/components/ui/button';
    import MagicSparkles from '@/components/MagicSparkles';

    const sucursalesData = [
      {
        ciudad: "Bogotá",
        nombreLocal: "Rive Coffee - Zona T",
        direccion: "Cra. 13 #83-29",
        horario: "Lunes a sábado, 10:00 a.m. – 10:00 p.m.",
        telefono: "+57 310 123 4567", 
        lema: "“Donde las flores caen entre el concreto.”",
        descripcion: "En el epicentro cosmopolita de Bogotá, nuestra sede en Zona T es un refugio de elegancia y sabor. Un oasis donde el arte del café y la mixología se encuentran con el bullicio sofisticado de la ciudad. Ideal para una pausa inspiradora o un encuentro nocturno con alma.",
        bgColor: "bg-vino-tinto/10",
        borderColor: "border-vino-tinto",
        icon: <Building className="w-8 h-8 text-vino-tinto" />,
        imageAlt: "Ambiente conceptual de Rive Coffee en Bogotá: elegante, urbano, con toques botánicos entre el concreto.",
        imagePlaceholder: "Rive Bogotá - Ambiente Conceptual"
      },
      {
        ciudad: "Popayán",
        nombreLocal: "Rive Coffee - Calle del Café",
        direccion: "Calle 4 #7-65",
        horario: "Martes a domingo, 9:00 a.m. – 8:00 p.m.",
        telefono: "+57 312 987 6543", 
        lema: "“Aquí las historias se sirven calientes.”",
        descripcion: "En el corazón histórico de Popayán, la 'Ciudad Blanca', nuestra casona en la Calle del Café te sumerge en la tradición cafetera con la sofisticación rebelde de Rive. Un espacio donde la historia colonial susurra entre aromas de café y aguardiente.",
        bgColor: "bg-verde-seca/10",
        borderColor: "border-verde-seca",
        icon: <Flower className="w-8 h-8 text-verde-seca" />,
        imageAlt: "Ambiente conceptual de Rive Coffee en Popayán: colonial, cálido, con mucha madera y detalles históricos.",
        imagePlaceholder: "Rive Popayán - Ambiente Conceptual"
      }
    ];
    
    const brandPhrases = [
      "Nos vimos entre espuma y aguardiente.",
      "Dos ciudades, un solo corazón fermentado.",
      "Cada Rive, un mundo. Misma alma."
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

    const SucursalCard = ({ sucursal, index }) => {
      const cardRef = useRef(null);
      const [cardSparkleTrigger, setCardSparkleTrigger] = useState(0);

      return (
        <motion.div
          ref={cardRef}
          key={sucursal.ciudad}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className={`relative p-8 rounded-xl shadow-xl border-2 ${sucursal.borderColor} ${sucursal.bgColor} flex flex-col h-full hover:shadow-2xl transition-shadow duration-300 overflow-hidden`}
          onMouseEnter={() => setCardSparkleTrigger(prev => prev + 1)}
        >
          <MagicSparkles count={10} elementRef={cardRef} trigger={cardSparkleTrigger} />
          <div className="relative z-10 flex flex-col h-full">
            <div className="mb-4 h-56 bg-carbon-negro/5 rounded flex items-center justify-center text-carbon-negro/30 group">
                <img  alt={sucursal.imageAlt} class="w-full h-full object-cover rounded opacity-80 group-hover:opacity-100 transition-opacity duration-300" src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
            </div>
            <div className="flex items-center mb-3">
              {sucursal.icon}
              <h2 className="text-3xl font-serifElegant text-espresso-brown ml-3">{sucursal.nombreLocal}</h2>
            </div>
            <p className="font-manuscrita text-2xl text-aguardiente-gold mb-2">{sucursal.ciudad}</p>
            <p className="font-serifElegant italic text-md text-vino-tinto mb-4">{sucursal.lema}</p>
            
            <div className="space-y-2 text-carbon-negro text-sm mb-4 flex-grow">
              <div className="flex items-start">
                <MapPin className={`w-5 h-5 ${sucursal.borderColor.replace('border-', 'text-')} mr-2 mt-0.5 flex-shrink-0`} />
                <span>{sucursal.direccion}</span>
              </div>
              <div className="flex items-center">
                <Clock className={`w-5 h-5 ${sucursal.borderColor.replace('border-', 'text-')} mr-2 flex-shrink-0`} />
                <span>{sucursal.horario}</span>
              </div>
              <div className="flex items-center">
                <Phone className={`w-5 h-5 ${sucursal.borderColor.replace('border-', 'text-')} mr-2 flex-shrink-0`} />
                <span>{sucursal.telefono}</span>
              </div>
            </div>
            <p className="text-carbon-negro/90 leading-relaxed text-sm mb-5">{sucursal.descripcion}</p>
            <Button variant="outline" className={`mt-auto w-full border-2 ${sucursal.borderColor} ${sucursal.borderColor.replace('border-', 'text-')} hover:bg-opacity-20 hover:bg-current font-serifElegant`}>
              Ver en Mapa (Próximamente)
            </Button>
          </div>
        </motion.div>
      );
    };


    const SucursalesPage = () => {
      const randomPhrase = brandPhrases[Math.floor(Math.random() * brandPhrases.length)];
      const mapImageRef = useRef(null);
      const [mapSparkleTrigger, setMapSparkleTrigger] = useState(0);

      return (
        <div className="min-h-screen pt-24">
          <PageSection title="Nuestras Sucursales" subtitle='"Dos ciudades, un solo corazón fermentado."'>
            <p className="max-w-3xl mx-auto text-center text-lg text-carbon-negro leading-relaxed mb-12">
              Cada Rive es un universo propio, un rincón diseñado con la misma pasión pero con una identidad local que lo hace único. Encuentra tu refugio Rive y déjate seducir por su encanto particular.
            </p>
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
              {sucursalesData.map((sucursal, index) => (
                <SucursalCard sucursal={sucursal} index={index} key={sucursal.ciudad} />
              ))}
            </div>
          </PageSection>
          
          <div className="text-center mt-16 mb-8">
            <p className="text-2xl font-manuscrita text-aguardiente-gold mb-6">{randomPhrase}</p>
            <p className="text-lg text-carbon-negro max-w-xl mx-auto">
              Visítanos y experimenta la magia de Rive Coffee, donde cada detalle cuenta una historia de amor por el café, el arte y la vida.
            </p>
            <div 
              ref={mapImageRef}
              className="mt-8 relative inline-block"
              onMouseEnter={() => setMapSparkleTrigger(prev => prev + 1)}
            >
              <MagicSparkles count={25} elementRef={mapImageRef} trigger={mapSparkleTrigger} />
              <img-replace alt="Ilustración sutil de un mapa estilizado con dos pines de ubicación marcando Bogotá y Popayán." class="mx-auto w-64 h-auto opacity-70" />
            </div>
          </div>
        </div>
      );
    };

    export default SucursalesPage;