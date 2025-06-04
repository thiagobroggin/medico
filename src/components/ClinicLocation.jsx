import React from 'react';
    import { Button } from '@/components/ui/button';
    import { motion } from 'framer-motion';
    import { MapPin, Clock, Copy, Smartphone } from 'lucide-react';
    import { useToast } from '@/components/ui/use-toast';


    const ClinicLocation = () => {
      const clinicAddress = "R. Joaquim Eugênio de Lima, 881 - Cj 101 - Jardim Paulista, São Paulo - SP, 01403-001";
      const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinicAddress)}`;
      const { toast } = useToast();

      // Coordenadas corrigidas
      const position = [-23.561728, -46.653968]; 
      const openStreetMapEmbedLink = `https://www.openstreetmap.org/export/embed.html?bbox=${position[1]-0.002}%2C${position[0]-0.001}%2C${position[1]+0.002}%2C${position[0]+0.001}&layer=mapnik&marker=${position[0]}%2C${position[1]}`;


      const copyAddress = () => {
        navigator.clipboard.writeText(clinicAddress)
          .then(() => {
            toast({
              title: "Endereço Copiado!",
              description: "O endereço da clínica foi copiado para sua área de transferência.",
              variant: "success",
            });
          })
          .catch(err => {
            toast({
              title: "Erro ao copiar",
              description: "Não foi possível copiar o endereço. Por favor, tente manualmente.",
              variant: "destructive",
            });
            console.error('Erro ao copiar endereço: ', err);
          });
      };
      
      const sendToPhone = () => {
         toast({
            title: "Funcionalidade em Desenvolvimento",
            description: "A opção de enviar para o celular estará disponível em breve.",
            variant: "info",
          });
      };


      return (
        <section id="contact" className="py-16 md:py-24 bg-base"> {/* Usando base da nova paleta */}
          <div className="container mx-auto px-6 md:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <MapPin className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Onde me encontrar</h2>
              <p className="text-lg md:text-xl text-text mb-4">
                Rua Joaquim Eugênio de Lima, 881 – Cj 101, Jardim Paulista, São Paulo, SP
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-8">
                <Button onClick={copyAddress} variant="outline" size="sm" className="text-sm border-primary text-primary hover:bg-primary hover:text-base">
                  <Copy className="mr-2 h-4 w-4" /> Copiar Endereço
                </Button>
                <Button onClick={sendToPhone} variant="outline" size="sm" className="text-sm border-primary text-primary hover:bg-primary hover:text-base">
                  <Smartphone className="mr-2 h-4 w-4" /> Enviar para Celular
                </Button>
              </div>
              
              <div className="text-text mb-8 flex items-center justify-center">
                <Clock className="w-5 h-5 mr-2 text-primary" />
                <span>Horário de Atendimento: Segunda a Sexta, das 08h às 18h</span>
              </div>

              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl mb-8 max-w-4xl mx-auto">
                <iframe
                  src={openStreetMapEmbedLink}
                  width="100%"
                  height="450"
                  style={{ border:0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Clínica no OpenStreetMap"
                ></iframe>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => window.open(googleMapsLink, '_blank')}
                  size="lg" 
                  className="bg-accent text-text text-lg px-8 py-3 rounded-lg shadow-lg hover:bg-primary hover:text-base transition-all duration-300"
                >
                  Ver no Google Maps
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      );
    };

    export default ClinicLocation;