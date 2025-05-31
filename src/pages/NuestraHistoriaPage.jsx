import React, { useRef, useState, useEffect } from 'react';
    import { motion } from 'framer-motion';
    import { Coffee, Heart, BookOpen, Users, Feather, Star, GlassWater, MapPin, Palette, Aperture } from 'lucide-react';
    import MagicSparkles from '@/components/MagicSparkles';

    const timelineItemsData = [
      {
        date: "2 de enero",
        title: "Un Brindis de Año Nuevo, un Sueño Compartido",
        description: "Al calor de un nuevo año, entre brindis, risas y sueños recién tejidos, surge la chispa: la visión de un rincón donde el alma del café colombiano pudiera danzar con otros placeres. Un sueño bordado a dos corazones.",
        icon: <Star className="w-6 h-6" />,
        imageAlt: "Celebración íntima de Año Nuevo con copas y un cuaderno de ideas.",
        imagePlaceholder: "Celebración íntima de Año Nuevo con copas y cuaderno"
      },
      {
        date: "7 de enero",
        title: "Nace Rive: Fusión de Apellidos, Alma de Pasión",
        description: "Buscábamos un nombre que susurrara nuestra unión y el profundo amor por esta tierra. Así nació 'Rive Coffee', eco de nuestros apellidos y melodía de nuestra pasión compartida. Los primeros trazos del logo y el lema fluyeron como versos, sellando nuestro pacto con este sueño.",
        icon: <Feather className="w-6 h-6" />,
        imageAlt: "Boceto elegante del logo de Rive Coffee sobre papel texturizado con plumas caligráficas.",
        imagePlaceholder: "Boceto del logo Rive con plumas"
      },
      {
        date: "Febrero - Marzo: La Exploración",
        title: "Entre Aromas y Licores: La Alquimia de Rive",
        description: "Se desplegó entonces la aventura de los sentidos. Catas de granos de origen que contaban historias de montañas y sol; el descubrimiento de destilados artesanales, licores que guardaban secretos. Cada prueba, cada mezcla, un paso más cerca de las fusiones que darían voz al alma de Rive. Noches de experimentación tejidas con hebras de aroma, mañanas vestidas de inspiración.",
        icon: <GlassWater className="w-6 h-6" />,
        imageAlt: "Composición artística de granos de café, botellas de licor y notas de cata.",
        imagePlaceholder: "Granos de café, licores y notas de cata"
      },
      {
        date: "Abril: El Hallazgo (Estimado)",
        title: "El Lienzo en Blanco: Nuestro Rincón en el Mundo",
        description: "Tras una búsqueda paciente, el destino nos sonrió: encontramos el espacio. Un lienzo esperando ser tocado por la inspiración, listo para acoger ese café-bar íntimo, con un toque rebelde y corazón soñador. Sus paredes, aún desnudas, parecían susurrarnos las historias de los futuros encuentros que allí florecerían.",
        icon: <MapPin className="w-6 h-6" />,
        imageAlt: "Local conceptual en estado original con luz esperanzadora, o dos personas contemplando el espacio.",
        imagePlaceholder: "Local original de Rive Coffee con potencial"
      },
      {
        date: "Mayo - Julio: La Transformación (Estimado)",
        title: "Pinceladas de Amor y Botánica: Tejiendo la Magia de Rive",
        description: "Porque cada detalle es un verso en el poema de Rive. Con la elegancia francesa como musa, la calidez italiana como abrazo y nuestra propia alma botánica como guía, comenzamos a vestir el sueño. Colores que narran emociones, texturas que invitan al tacto, muebles escogidos con el corazón... cada rincón, un refugio pensado para acoger y susurrar confidencias.",
        icon: <Palette className="w-6 h-6" />,
        imageAlt: "Moodboard inspirador con paletas de colores de Rive, texturas y elementos botánicos.",
        imagePlaceholder: "Moodboard de decoración de Rive Coffee"
      },
      {
        date: "Próximamente (Aspiración: 12 de junio)",
        title: "El Sueño Despierta: Rive Abre sus Puertas",
        description: "Con el corazón vibrante de emoción, y el aire impregnado del más exquisito café fusionado con espíritu y alma, llegará el día en que nuestras puertas se abran al mundo. Un nuevo capítulo nacerá, y estaremos listos para compartir nuestra pasión, tejer nuevas historias y celebrar cada encuentro contigo.",
        icon: <Aperture className="w-6 h-6" />,
        imageAlt: "Fachada soñadora de Rive Coffee iluminada por la noche, lista para recibir visitantes.",
        imagePlaceholder: "Fachada nocturna de Rive Coffee iluminada"
      },
    ];
    
    const PageSection = ({ title, subtitle, children, titleColor = "text-espresso-brown", subtitleColor = "text-vino-tinto", className = "" }) => {
      const sectionRef = useRef(null);
      const [sparkleTrigger, setSparkleTrigger] = useState(0);

      return (
        <motion.section 
          ref={sectionRef}
          className={`relative py-16 px-4 sm:px-6 md:px-10 bg-crema-leche/30 backdrop-blur-sm rounded-xl shadow-xl border border-espresso-brown/10 my-12 ${className}`}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onViewportEnter={() => setTimeout(() => setSparkleTrigger(prev => prev + 1), 300)}
        >
          <MagicSparkles count={18} elementRef={sectionRef} trigger={sparkleTrigger} />
          <header className="text-center mb-12 relative z-10">
            <h1 className={`text-5xl md:text-7xl font-manuscrita ${titleColor} mb-3`}>{title}</h1>
            {subtitle && <p className={`text-xl md:text-2xl font-serifElegant italic ${subtitleColor}`}>{subtitle}</p>}
          </header>
          <div className="relative z-10">{children}</div>
        </motion.section>
      );
    };

    const TimelineItem = ({ item, index, totalItems }) => {
      const itemRef = useRef(null);
      const [sparkleTrigger, setSparkleTrigger] = useState(0);
      const isEven = index % 2 === 0;

      return (
        <motion.div
          ref={itemRef}
          className="relative flex items-stretch md:items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-0.5"
          initial={{ opacity: 0, x: isEven ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
          onViewportEnter={() => setTimeout(() => setSparkleTrigger(prev => prev + 1), 400)}
        >
          {/* Desktop Spacer & Line Anchor */}
          <div className="hidden md:flex w-1/2 relative">
            {/* This div is a placeholder for the left/right side on desktop */}
          </div>
          
          {/* Vertical line segment - Centralized for Desktop */}
          <div className={`hidden md:block absolute w-0.5 left-1/2 top-0 bottom-0 transform -translate-x-1/2 group-hover:bg-aguardiente-gold transition-colors duration-300
            ${index === 0 ? 'h-[calc(50%+1rem)] top-1/2 -translate-y-0.5' : 'h-full'}
            ${index === totalItems -1 ? 'h-[calc(50%+1rem)] bottom-1/2 translate-y-0.5' : ''}
            bg-aguardiente-gold/40 
          `}></div>


          <div className={`relative w-full md:w-1/2 ${isEven ? 'md:pr-8' : 'md:pl-8'} py-6`}>
            <MagicSparkles count={10} elementRef={itemRef} trigger={sparkleTrigger} />
            {/* Icon Dot - Positioned over the line */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 bg-vino-tinto rounded-full border-4 border-crema-leche shadow-lg flex items-center justify-center text-crema-leche group-hover:bg-aguardiente-gold group-hover:text-espresso-brown transition-all duration-300 transform group-hover:scale-110 z-20">
              {item.icon}
            </div>
            {/* Content Card */}
            <div className="bg-crema-leche p-5 rounded-lg shadow-xl border border-espresso-brown/20 hover:shadow-2xl transition-shadow duration-300 ml-10 md:ml-0 relative z-10">
              <p className="font-manuscrita text-2xl text-aguardiente-gold mb-2">{item.date}</p>
              <h2 className="text-3xl font-serifElegant text-espresso-brown mb-3">{item.title}</h2>
              <div className="my-4 h-52 bg-carbon-negro/5 rounded flex items-center justify-center overflow-hidden border border-carbon-negro/10">
                <img-replace alt={item.imageAlt} class="w-full h-full object-cover rounded opacity-80 group-hover:opacity-100 transition-opacity duration-400 transform group-hover:scale-105" />
              </div>
              <p className="text-carbon-negro leading-relaxed font-serifElegant text-md">{item.description}</p>
            </div>
          </div>
        </motion.div>
      );
    };

    const NuestraHistoriaPage = () => {
      const [timelineData, setTimelineData] = useState([]);

      useEffect(() => {
        setTimelineData(timelineItemsData);
      }, []);


      if (!timelineData || timelineData.length === 0) {
        return (
          <div className="min-h-screen pt-28 md:pt-32 flex items-center justify-center bg-crema-leche">
            <div className="text-center p-8">
              <Coffee className="w-16 h-16 text-aguardiente-gold mx-auto mb-6 animate-pulse" />
              <p className="text-2xl font-serifElegant text-vino-tinto">Cargando la historia de nuestros sueños...</p>
              <p className="text-md font-manuscrita text-espresso-brown mt-2">Un momento, por favor.</p>
            </div>
          </div>
        );
      }

      return (
        <div className="min-h-screen pt-28 md:pt-32 bg-crema-leche/80">
          <PageSection 
            title="Nuestra Historia en Rive" 
            subtitle='"Un sueño tejido con amor, café y un toque de rebeldía."'
            titleColor="text-vino-tinto"
            subtitleColor="text-aguardiente-gold"
            className="mx-2 sm:mx-auto max-w-6xl"
          >
            <div className="max-w-4xl mx-auto text-center text-lg text-carbon-negro leading-relaxed space-y-6 mb-16 px-2">
              <p>
                Cada gran amor tiene una historia, y la nuestra comenzó con una chispa, un deseo compartido de crear algo <span className="font-manuscrita text-aguardiente-gold text-xl">único y mágico</span>. Rive Coffee no es solo un lugar, es el reflejo de un viaje, de dos almas que encontraron en la fusión del café, el arte y el espíritu bohemio, su lenguaje universal.
              </p>
              <p className="font-serifElegant italic text-vino-tinto text-xl">
                "Te invitamos a recorrer los senderos de nuestra memoria, a descubrir los momentos que dieron vida a este sueño que hoy compartimos contigo."
              </p>
            </div>

            {/* Timeline Container */}
            <div className="relative max-w-3xl mx-auto">
              {/* Mobile Line */}
              <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-aguardiente-gold/40 md:hidden z-0"></div>
              
              {timelineData.map((item, index) => (
                <TimelineItem key={`${item.title}-${index}`} item={item} index={index} totalItems={timelineData.length} />
              ))}
            </div>

             <div className="text-center mt-20">
                <Heart className="w-16 h-16 text-vino-tinto mx-auto mb-4 opacity-80 animate-pulse" />
                <p className="font-manuscrita text-3xl text-espresso-brown">
                    Y la historia continúa... contigo.
                </p>
             </div>

          </PageSection>
        </div>
      );
    };

    export default NuestraHistoriaPage;