import { Button } from "@/components/ui/button";

const BusinessInfoSection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de saber mais sobre a oportunidade de trabalhar com a Hinode! Vim pelo site."
    );
    window.open(`https://wa.me/5519991517459?text=${message}`, "_blank");
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-hinode-white px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 md:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-hinode-navy mb-4 md:mb-6">
            O Que é a Hinode e Como Você Pode Iniciar Seu Negócio
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Vídeo local */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div
              className="w-full rounded-2xl shadow-2xl overflow-hidden border-4 border-hinode-primary/20"
              style={{ aspectRatio: "16/9" }}
            >
              <video
                className="w-full h-full object-cover"
                controls
                preload="metadata"
              >
                <source src="/videoNegocioHinode2.mp4" type="video/mp4" />
                Seu navegador não suporta a reprodução de vídeo.
              </video>
            </div>
          </div>

          {/* Texto */}
          <div className="order-1 lg:order-2 space-y-4 md:space-y-6 animate-zoom-in">
            <p className="text-base md:text-lg text-hinode-dark leading-relaxed">
              A <strong>Hinode</strong> é uma das maiores empresas de beleza e
              bem-estar do Brasil, com mais de{" "}
              <strong>35 anos de história</strong>. São perfumes, cosméticos,
              cuidados pessoais e suplementos que conquistam milhares de
              clientes todos os dias.
            </p>

            <p className="text-base md:text-lg text-hinode-dark leading-relaxed">
              Além dos produtos de qualidade, a Hinode oferece uma{" "}
              <strong>oportunidade de negócio acessível</strong> para quem
              deseja iniciar uma carreira no empreendedorismo e conquistar uma{" "}
              <strong>renda extra</strong>, trabalhando de forma flexível e no
              seu próprio tempo.
            </p>

            <p className="text-base md:text-lg text-hinode-dark leading-relaxed">
              Se você busca uma nova fonte de renda ou até mesmo transformar sua
              realidade financeira, essa pode ser a oportunidade ideal. E o
              melhor: com treinamento, suporte e acompanhamento de um
              representante experiente.
            </p>

            <div className="pt-4 md:pt-6">
              <Button
                onClick={handleWhatsAppClick}
                className="bg-hinode-success hover:bg-hinode-success/90 text-hinode-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c... (ícone truncado para brevidade) ..." />
                </svg>
                Saiba Mais no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessInfoSection;
