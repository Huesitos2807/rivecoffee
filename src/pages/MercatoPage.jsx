import React, { useRef, useState } from 'react';
    import { motion } from 'framer-motion';
    import { ShoppingBasket, Gift, Tag, Package, Edit3 } from 'lucide-react';
    import { Button } from '@/components/ui/button';
    import MagicSparkles from '@/components/MagicSparkles';

    const merchandiseData = [
      {
        name: "Vasos Rive con Alma",
        description: "Cerámica artesanal con frases que susurran historias: “Amar es beberte lento.” o “No eres café… pero me aceleras.” Elige tu mantra.",
        price: "€18",
        category: "Vasos y Tazas",
        icon: <Edit3 className="w-10 h-10 text-aguardiente-gold" />,
        color: "border-aguardiente-gold"
      },
      {
        name: "Bolsas de Tela 'Botanica Rive'",
        description: "Lienzo de algodón orgánico con ilustraciones botánicas exclusivas, impresas con tinta ecológica color vino. Con el sello “Rive Approved”.",
        price: "€25",
        category: "Bolsas y Empaques",
        icon: <Package className="w-10 h-10 text-verde-seca" />,
        color: "border-verde-seca"
      },
      {
        name: "Postales 'Susurros de Rive'",
        description: "Colección de postales artísticas con ilustraciones originales: lunas, copas, flores y corazones que narran la esencia de Rive. Perfectas para enviar amor o coleccionar.",
        price: "€6 (Set de 3)",
        category: "Papelería y Arte",
        icon: <Gift className="w-10 h-10 text-vino-tinto" />,
        color: "border-vino-tinto"
      },
      {
        name: "Botella de Cold Brew 'Elixir Oscuro'",
        description: "Nuestro icónico cold brew, macerado lentamente, en botella de vidrio ámbar reutilizable con etiqueta caligrafiada a mano. Opción de añadir un shot de tu licor preferido.",
        price: "€22",
        category: "Bebidas para Llevar",
        icon: <ShoppingBasket className="w-10 h-10 text-espresso-brown" />,
        color: "border-espresso-brown"
      }
    ];

    const brandPhrases = [
      "Llévate un sorbo de Rive a casa, y que la magia continúe.",
      "Recuerdos embotellados, momentos para atesorar, arte para vivir.",
      "El espíritu de Rive, para tu ritual diario."
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

    const MerchandiseItemCard = ({ item, index }) => {
        const cardRef = useRef(null);
        const [cardSparkleTrigger, setCardSparkleTrigger] = useState(0);

        return (
            <motion.div
                ref={cardRef}
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative p-6 rounded-xl shadow-lg bg-crema-leche/70 border-2 ${item.color} flex flex-col hover:shadow-2xl transition-shadow duration-300`}
                onMouseEnter={() => setCardSparkleTrigger(prev => prev + 1)}
            >
                <MagicSparkles count={8} elementRef={cardRef} trigger={cardSparkleTrigger} />
                <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                        <div className="p-2 bg-white/50 rounded-full shadow-inner mr-3">{item.icon}</div>
                        <h3 className="text-2xl font-serifElegant text-espresso-brown">{item.name}</h3>
                    </div>
                    <p className="text-carbon-negro/90 text-sm leading-relaxed mb-3 flex-grow">{item.description}</p>
                    <div className="mt-auto pt-3 flex justify-between items-center">
                        <span className="text-xl font-semibold text-vino-tinto font-serifElegant">{item.price}</span>
                        <Button variant="outline" className={`border-2 ${item.color} ${item.color.replace('border-','text-')} hover:bg-opacity-20 hover:bg-current font-serifElegant text-sm`}>
                        <ShoppingBasket className="w-4 h-4 mr-2" />
                        Añadir al Carrito
                        </Button>
                    </div>
                    <p className="text-xs text-carbon-negro/70 mt-3 font-manuscrita">{item.category}</p>
                </div>
            </motion.div>
        );
    };

    const MercatoPage = () => {
      const randomPhrase = brandPhrases[Math.floor(Math.random() * brandPhrases.length)];
      const bagImageRef = useRef(null);
      const [bagSparkleTrigger, setBagSparkleTrigger] = useState(0);

      return (
        <div className="min-h-screen pt-24">
          <PageSection title="Mercato Rive" subtitle='"Llévate un pedazo de Rive a tu alma."' titleColor="text-aguardiente-gold">
            <div className="max-w-3xl mx-auto text-center text-lg text-carbon-negro leading-relaxed space-y-6">
              <p>
                Explora <span className="font-manuscrita text-vino-tinto text-xl">Mercato Rive</span>, nuestra boutique de tesoros donde la esencia de Rive se materializa en objetos llenos de arte y significado. Cada pieza ha sido diseñada con amor, fuego y flor, para que puedas llevar contigo un fragmento de nuestra alma.
              </p>
              <p className="font-serifElegant italic text-espresso-brown text-xl">
                "Desde la cerámica que acaricia tus labios hasta el lienzo que viste tus días, cada artículo es una extensión de la experiencia Rive."
              </p>
              <div 
                ref={bagImageRef}
                className="py-6 relative inline-block"
                onMouseEnter={() => setBagSparkleTrigger(prev => prev + 1)}
              >
                <MagicSparkles count={20} elementRef={bagImageRef} trigger={bagSparkleTrigger} />
                <img-replace alt="Ilustración de una bolsa de tela elegante con el logo de Rive Coffee y motivos botánicos." class="mx-auto w-32 h-auto opacity-90" />
              </div>
            </div>
          </PageSection>

          <PageSection title="Tesoros Artesanales" subtitle={randomPhrase} titleColor="text-vino-tinto" subtitleColor="text-espresso-brown">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {merchandiseData.map((item, index) => (
                <MerchandiseItemCard item={item} index={index} key={item.name} />
              ))}
            </div>
          </PageSection>
          
          <div className="text-center mt-16 mb-8">
            <p className="text-lg text-carbon-negro max-w-xl mx-auto mb-8">
              "Nuestros productos son más que objetos: son amuletos, recuerdos, y pequeños lujos para el alma. Perfectos para regalar(te) una dosis de la magia Rive."
            </p>
            <Button size="lg" className="bg-espresso-brown text-crema-leche hover:bg-espresso-brown/90 text-lg px-10 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-serifElegant">
              Explorar Tienda Completa (Próximamente)
            </Button>
            <div className="flex justify-center space-x-8 py-10">
                <Tag className="w-10 h-10 text-aguardiente-gold opacity-70" />
                <Package className="w-10 h-10 text-verde-seca opacity-70" />
                <Gift className="w-10 h-10 text-vino-tinto opacity-70" />
            </div>
          </div>
        </div>
      );
    };

    export default MercatoPage;