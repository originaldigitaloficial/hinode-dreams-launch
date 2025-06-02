
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowUp } from 'lucide-react';

const FloatingButtons = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre a oportunidade de trabalhar com a Hinode!");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-hinode-secondary hover:bg-hinode-secondary/90 text-hinode-white shadow-lg transition-all duration-300 animate-fade-in"
        >
          <ArrowUp size={20} />
        </Button>
      )}
      
      {/* WhatsApp Button */}
      <Button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 rounded-full bg-hinode-success hover:bg-hinode-success/90 text-hinode-white shadow-lg transition-all duration-300 hover:scale-110"
      >
        <MessageCircle size={24} />
      </Button>
    </div>
  );
};

export default FloatingButtons;
