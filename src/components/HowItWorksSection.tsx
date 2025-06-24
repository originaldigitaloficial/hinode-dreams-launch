import { Card, CardContent } from "@/components/ui/card";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Fale com um Representante",
      description:
        "O cadastro é feito diretamente com um representante autorizado. Basta preencher o formulário ou me chamar no WhatsApp para iniciar.",
      icon: "👤",
    },
    {
      number: "02",
      title: "Garanta Seu Kit Inicial",
      description:
        "Invista de forma acessível em seu kit inicial. Pagamento somente via Pix ou Cartão de Crédito.",
      icon: "📦",
    },
    {
      number: "03",
      title: "Receba Treinamento",
      description:
        "Tenha acesso a materiais exclusivos e treinamentos que vão te ajudar a vender com sucesso.",
      icon: "📚",
    },
    {
      number: "04",
      title: "Comece a Vender e Lucrar",
      description:
        "Divulgue os produtos nas suas redes sociais, para amigos e familiares e comece a gerar sua renda extra.",
      icon: "💰",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 px-6 md:px-8 lg:px-12 bg-gradient-to-br from-hinode-white to-hinode-primary/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-hinode-navy mb-3 md:mb-4 animate-fade-in">
            Como Funciona para Ser um Representante Hinode
          </h2>
          <p className="text-base md:text-lg text-hinode-navy/80 max-w-2xl mx-auto animate-fade-in">
            Veja o passo a passo para começar sua jornada empreendedora com a
            Hinode e construir sua liberdade financeira.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-hinode-white border-hinode-primary/20"
            >
              <CardContent className="p-6 text-center">
                <div className="absolute top-0 right-0 w-12 h-12 bg-hinode-primary text-hinode-white font-bold text-sm flex items-center justify-center">
                  {step.number}
                </div>

                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>

                <h3 className="text-lg md:text-xl font-bold text-hinode-navy mb-3">
                  {step.title}
                </h3>

                <p className="text-sm md:text-base text-hinode-navy/70 leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 md:mt-12 lg:mt-16 text-center">
          <div className="bg-hinode-primary/10 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-hinode-navy mb-4">
              🎯 Comece Hoje Mesmo!
            </h3>
            <p className="text-base md:text-lg text-hinode-navy/80 mb-6">
              Milhares de pessoas já estão construindo sua independência
              financeira com a Hinode. Dê o primeiro passo hoje!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-hinode-navy/70">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm md:text-base">
                  Investimento acessível via Pix ou Cartão
                </span>
              </div>
              <div className="flex items-center text-hinode-navy/70">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm md:text-base">
                  Treinamento e Suporte Exclusivos
                </span>
              </div>
              <div className="flex items-center text-hinode-navy/70">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm md:text-base">
                  Flexibilidade de horário
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
