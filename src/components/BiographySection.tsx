
import { Button } from '@/components/ui/button';

const BiographySection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de conversar com você sobre a oportunidade Hinode!");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-hinode-secondary/5 to-hinode-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-hinode-navy mb-16 text-center animate-fade-in">
            Quem Sou Eu
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="animate-fade-in">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Representante Hinode"
                  className="w-full rounded-2xl shadow-2xl border-4 border-hinode-secondary/20"
                />
                <div className="absolute -bottom-6 -right-6 bg-hinode-primary rounded-full p-6 shadow-xl">
                  <span className="text-2xl">🏆</span>
                </div>
                <div className="absolute -top-6 -left-6 bg-hinode-navy text-hinode-white px-6 py-3 rounded-full font-bold shadow-lg">
                  💼 Representante Oficial
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6 text-lg text-hinode-dark leading-relaxed">
                <p className="text-xl font-semibold text-hinode-navy">
                  Olá! Sou <strong>[Seu Nome]</strong>, representante oficial da Hinode, apaixonado(a) por ajudar pessoas a alcançarem seus sonhos.
                </p>
                
                <p>
                  Assim como você, também comecei buscando uma renda extra e descobri na Hinode uma forma real de 
                  transformar a minha vida financeira e pessoal.
                </p>
                
                <p>
                  Hoje, compartilho com você a oportunidade de crescer profissionalmente, desenvolver habilidades 
                  de vendas e viver de forma mais livre e próspera. Se eu consegui, você também consegue!
                </p>
              </div>
              
              <div className="bg-hinode-primary/10 p-6 rounded-2xl border-l-4 border-hinode-primary">
                <h3 className="font-bold text-hinode-navy mb-3">🎯 Minha Missão:</h3>
                <p className="text-hinode-dark">
                  Ajudar você a descobrir seu potencial empreendedor e conquistar a liberdade financeira 
                  que sempre sonhou através dos produtos incríveis da Hinode.
                </p>
              </div>
              
              <Button
                onClick={handleWhatsAppClick}
                className="bg-hinode-success hover:bg-hinode-success/90 text-hinode-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.108"/>
                </svg>
                Vamos Conversar no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiographySection;
