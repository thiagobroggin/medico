import React from 'react';
    import { Button } from '@/components/ui/button';
    import { motion } from 'framer-motion';

    const HeroSection = () => {
      const whatsappLink = "https://wa.me/5511968942030";
      return (
        <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-gradient-to-br from-base to-secondary"> {/* Usando base e secondary */}
          <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary leading-tight"> {/* Usando primary */}
                Ortopedia de precisão para quem vive em movimento.
              </h1>
              <p className="text-xl md:text-2xl text-text mb-8"> {/* Usando text */}
                Tratamento especializado em pé e tornozelo para adultos, atletas e crianças. Do primeiro passo à linha de chegada.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => window.open(whatsappLink, '_blank')}
                  size="lg" 
                  className="bg-accent text-base text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-primary hover:text-base transition-all duration-300" /* Usando accent, primary e base */
                >
                  Agende sua Consulta
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center"
            >
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-base"> {/* Usando base */}
                <img     
                  className="object-cover w-full h-full" 
                  alt="Dr. Thiago Broggin Dutra Rodrigues, ortopedista especialista em pé e tornozelo, com fundo neutro" src="https://images.unsplash.com/photo-1625581652944-2f297562baa5" />
              </div>
            </motion.div>
          </div>
        </section>
      );
    };

    export default HeroSection;