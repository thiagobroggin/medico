import React from 'react';
    import { Button } from '@/components/ui/button';
    import { motion } from 'framer-motion';
    import { MessageCircle } from 'lucide-react';

    const FloatingWhatsAppButton = ({ phoneNumber }) => {
      const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Olá! 👋 Quero entender meu caso. Você sente dor ao pisar?")}`; // Adicionando mensagem automática

      return (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5, type: "spring", stiffness: 120 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Button
            onClick={() => window.open(whatsappLink, '_blank')}
            className="bg-accent hover:bg-primary text-base rounded-full p-4 shadow-lg" /* Usando accent, primary, base */
            aria-label="Abrir conversa no WhatsApp"
            size="icon"
            style={{ width: '60px', height: '60px' }}
          >
            <MessageCircle size={32} />
          </Button>
        </motion.div>
      );
    };

    export default FloatingWhatsAppButton;