
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "João Souza",
      text: "Comecei com Hinode em busca de renda extra e hoje vivo da minha equipe de vendas.",
      avatar: "👨‍💼"
    },
    {
      name: "Maria Ferreira",
      text: "Hoje trabalho de casa e tenho mais tempo para minha família.",
      avatar: "👩‍💼"
    },
    {
      name: "Carlos Lima",
      text: "O melhor da Hinode são os produtos incríveis e o suporte.",
      avatar: "👨‍🎓"
    }
  ];

  return (
    <section className="py-20 bg-hinode-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-hinode-primary mb-6">
            💬 Veja Como a Hinode Transformou a Vida de Quem Já Escolheu Esse Negócio
          </h2>
          
          <p className="text-lg text-hinode-dark max-w-4xl mx-auto">
            Nossos representantes não vendem apenas produtos: eles vendem autoestima, sucesso e liberdade financeira. 
            Confira histórias reais de quem já começou a viver de Hinode.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
