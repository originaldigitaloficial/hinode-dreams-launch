"use client";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de saber mais sobre a oportunidade de trabalhar com a Hinode! Vim pelo site."
    );
    window.open(`https://wa.me/5519991517459?text=${message}`, "_blank");
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-hinode-primary/10 to-hinode-navy/90 px-6 md:px-8 lg:px-12">
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')",
        }}
      />

      {/* Conteúdo central */}
      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center justify-center text-center h-full">
        <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-hinode-white mb-3 md:mb-4 leading-tight animate-fade-in">
          💎 Desperte Seu Potencial:{" "}
          <span className="text-hinode-primary">Viva de Perfumes Hinode!</span>
        </h1>

        {/* Bloco do vídeo */}
        <div className="mb-4 md:mb-5 animate-zoom-in">
          <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto aspect-video rounded-lg md:rounded-xl overflow-hidden shadow-2xl border-2 md:border-3 border-hinode-primary/50">
            <video
              ref={videoRef}
              controls={isPlaying}
              playsInline
              poster="/banner.png"
              className="w-full h-full object-cover"
              preload="metadata"
              onError={() => console.log("Erro ao carregar vídeo")}
              onLoadedData={() => console.log("Vídeo carregado com sucesso")}
            >
              <source src="/videoNegocioHinodeJhony.mp4" type="video/mp4" />
              <source src="/videoNegocioHinode2.mp4" type="video/mp4" />
              Seu navegador não suporta vídeo HTML5.
            </video>

            {/* Overlay antes de tocar */}
            {!isPlaying && (
              <div
                className="absolute inset-0 bg-gradient-to-br from-hinode-primary/60 to-hinode-navy/70 flex flex-col items-center justify-center cursor-pointer"
                onClick={handlePlayClick}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-hinode-primary rounded-full flex items-center justify-center mb-3 shadow-lg hover:scale-110 transition-transform">
                  <svg
                    className="w-5 h-5 text-hinode-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-hinode-white text-xs md:text-sm font-semibold">
                  Clique para assistir nosso vídeo de apresentação
                </p>
                <p className="text-hinode-white/80 text-xs mt-1">
                  Descubra como milhares de pessoas transformaram suas vidas com
                  a Hinode
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Texto abaixo */}
        <p className="text-xs md:text-sm text-hinode-white/90 mb-4 md:mb-5 max-w-lg md:max-w-xl mx-auto animate-fade-in leading-relaxed">
          Transforme seu futuro e alcance sua liberdade financeira vendendo
          Hinode.
        </p>

        {/* Botão WhatsApp */}
        <Button
          onClick={handleWhatsAppClick}
          className="bg-hinode-success hover:bg-hinode-success/90 text-hinode-white text-xs md:text-sm px-4 md:px-6 py-2 md:py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl mx-auto flex items-center justify-center gap-2"
          size="lg"
        >
          <svg
            className="w-4 h-4 md:w-5 md:h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.108" />
          </svg>
          Comece Agora no WhatsApp!
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
