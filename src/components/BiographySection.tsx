import { Button } from "@/components/ui/button";

const BiographySection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de saber mais sobre a oportunidade de trabalhar com a Hinode! Vim pelo site."
    );
    window.open(`https://wa.me/5519991517459?text=${message}`, "_blank");
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-hinode-primary/5 to-hinode-secondary/5 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 md:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-hinode-navy mb-4 md:mb-6">
            Quem Sou Eu
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Coluna da Imagem */}
          <div className="flex justify-center animate-fade-in">
            <img
              src="/public/fotoJhony.jpg"
              alt="Representante Hinode"
              className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto object-cover rounded-2xl shadow-2xl border-4 border-hinode-primary/20"
            />
          </div>

          {/* Coluna de Texto totalmente centralizada */}
          <div className="flex flex-col items-center justify-center text-center space-y-4 md:space-y-6 animate-zoom-in">
            <p className="text-base md:text-lg text-hinode-dark leading-relaxed">
              Olá! Sou <strong>Jhony Roberto da Silva</strong>, casado com a{" "}
              <strong>Graziela Suate</strong>, e juntos estamos nessa jornada há
              mais de 5 anos. Entrei para a Hinode buscando uma renda extra de
              R$2.000 a R$3.000 por mês... e o que encontrei foi uma verdadeira
              transformação de vida!
            </p>

            <p className="text-base md:text-lg text-hinode-dark leading-relaxed">
              Em apenas <strong>1 ano e 2 meses</strong> na companhia, já
              conquistei o título de <strong>Ouro</strong> e faturei mais de{" "}
              <strong>R$100.000</strong>. Sou cristão, grato a Deus por cada
              oportunidade, e tenho visto de perto como esse negócio pode abrir
              portas para quem realmente decide fazer acontecer.
            </p>

            <p className="text-base md:text-lg text-hinode-dark leading-relaxed">
              Hoje meu objetivo é simples: ajudar o maior número de pessoas a
              conquistarem sua liberdade financeira, assim como eu estou
              conquistando a minha. Se eu consegui, você também pode!
            </p>

            <div className="pt-4 md:pt-6">
              <Button
                onClick={handleWhatsAppClick}
                className="bg-hinode-success hover:bg-hinode-success/90 text-hinode-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2"
              >
                {/* Ícone WhatsApp */}
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.108" />
                </svg>
                Converse Comigo no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiographySection;
