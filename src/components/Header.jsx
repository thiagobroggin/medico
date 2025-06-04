import React from 'react';
    import { Button } from '@/components/ui/button';
    import { motion } from 'framer-motion';
    import { Menu } from 'lucide-react';

    const Header = () => {
      const whatsappLink = "https://wa.me/5511968942030";

      return (
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 right-0 bg-base shadow-md z-50 py-3 px-6 md:px-12"
        >
          <div className="container mx-auto flex justify-between items-center">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3" // Aplicando gap-3
            >
              <img src="/logo.svg" alt="Logo Dr. Thiago" className="h-10 w-10" /> {/* Ajustado tamanho do logo */}
              <span className="text-lg font-semibold tracking-tight text-text whitespace-nowrap"> {/* Aplicando classes de texto e cor */}
                Dr. Thiago Broggin Dutra Rodrigues
              </span>
            </motion.div>
            <nav className="hidden md:flex space-x-6 items-center">
              <a href="#services" className="text-sm lg:text-base hover:text-accent transition-colors duration-300 text-text">Especialidades</a>
              <a href="#timeline" className="text-sm lg:text-base hover:text-accent transition-colors duration-300 text-text">Formação</a>
              <a href="#testimonial" className="text-sm lg:text-base hover:text-accent transition-colors duration-300 text-text">Depoimentos</a>
              <a href="#contact" className="text-sm lg:text-base hover:text-accent transition-colors duration-300 text-text">Contato</a>
              <Button 
                onClick={() => window.open(whatsappLink, '_blank')}
                className="bg-primary text-base hover:bg-accent hover:text-text transition-colors duration-300 text-sm lg:text-base"
                size="lg"
              >
                Agendar Consulta
              </Button>
            </nav>
            <div className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-primary" />
              </Button>
            </div>
          </div>
        </motion.header>
      );
    };

    export default Header;