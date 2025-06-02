
const BiographySection = () => {
  return (
    <section className="py-20 bg-hinode-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-hinode-primary mb-12 text-center animate-fade-in">
            Quem Sou Eu
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-hinode-primary/20 to-hinode-secondary/20 rounded-full flex items-center justify-center">
                <div className="w-64 h-64 bg-hinode-light rounded-full flex items-center justify-center">
                  <span className="text-6xl">👤</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 text-lg text-hinode-dark leading-relaxed animate-fade-in">
              <p>
                Olá! Sou <strong>[Seu Nome]</strong>, representante oficial da Hinode, apaixonado(a) por ajudar 
                pessoas a alcançarem seus sonhos. Assim como você, também comecei buscando uma renda extra e 
                descobri na Hinode uma forma real de transformar a minha vida financeira e pessoal.
              </p>
              
              <p>
                Hoje, compartilho com você a oportunidade de crescer profissionalmente, desenvolver habilidades 
                de vendas e viver de forma mais livre e próspera. Se eu consegui, você também consegue!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiographySection;
