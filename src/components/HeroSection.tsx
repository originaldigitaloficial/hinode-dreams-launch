
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre a oportunidade de trabalhar com a Hinode!");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-hinode-primary/10 to-hinode-navy/90 px-4 md:px-6 lg:px-8">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto py-8 md:py-12 lg:py-16 w-full">
        {/* Title */}
        <h1 className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-hinode-white mb-6 md:mb-8 leading-tight animate-fade-in">
          💎 Desperte Seu Potencial: <br />
          <span className="text-hinode-primary">Viva de Perfumes Hinode!</span>
        </h1>
        
        {/* Video Section */}
        <div className="mb-6 md:mb-8 lg:mb-10 animate-zoom-in">
          <div className="relative w-full max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border-2 md:border-4 border-hinode-primary/50">
            <div className="absolute inset-0 bg-gradient-to-br from-hinode-primary/20 to-hinode-secondary/20 flex items-center justify-center">
              <div className="text-center p-4">
                <div className="w-12 h-12 md:w-16 lg:w-20 md:h-16 lg:h-20 bg-hinode-primary rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg hover:scale-110 transition-transform cursor-pointer">
                  <svg className="w-5 h-5 md:w-6 lg:w-8 md:h-6 lg:h-8 text-hinode-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-hinode-white text-sm md:text-base lg:text-lg font-semibold">Clique para assistir nosso vídeo de apresentação</p>
                <p className="text-hinode-white/80 text-xs md:text-sm mt-1 md:mt-2">Descubra como milhares de pessoas transformaram suas vidas com a Hinode</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Subtitle and CTA */}
        <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-hinode-white/90 mb-6 md:mb-8 max-w-2xl md:max-w-3xl mx-auto animate-fade-in leading-relaxed">
          Transforme seu futuro e alcance sua liberdade financeira vendendo Hinode.
        </p>
        
        <Button 
          onClick={handleWhatsAppClick}
          className="bg-hinode-success hover:bg-hinode-success/90 text-hinode-white text-sm md:text-base lg:text-lg px-6 md:px-8 lg:px-12 py-3 md:py-4 lg:py-6 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl"
          size="lg"
        >
          <svg className="w-4 h-4 md:w-5 lg:w-6 md:h-5 lg:h-6 mr-2 md:mr-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.108"/>
          </svg>
          Comece Agora no WhatsApp!
        </Button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-4 h-6 md:w-6 md:h-10 border-2 border-hinode-primary rounded-full flex justify-center">
          <div className="w-0.5 h-2 md:w-1 md:h-3 bg-hinode-primary rounded-full mt-1 md:mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
