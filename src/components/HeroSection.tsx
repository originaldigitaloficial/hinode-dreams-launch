
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre a oportunidade de trabalhar com a Hinode!");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-hinode-primary/20 to-hinode-dark/80">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold text-hinode-white mb-6 leading-tight">
          💎 Desperte Seu Potencial: <br />
          <span className="text-hinode-primary">Viva de Perfumes Hinode!</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-hinode-light mb-8 max-w-3xl mx-auto">
          Transforme seu futuro e alcance sua liberdade financeira vendendo Hinode.
        </p>
        
        <Button 
          onClick={handleWhatsAppClick}
          className="bg-hinode-primary hover:bg-hinode-primary/90 text-hinode-white text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          size="lg"
        >
          Comece Agora no WhatsApp!
        </Button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-hinode-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-hinode-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
