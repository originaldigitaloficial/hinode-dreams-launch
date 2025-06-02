
interface TestimonialCardProps {
  name: string;
  text: string;
  image: string;
}

const TestimonialCard = ({ name, text, image }: TestimonialCardProps) => {
  return (
    <div className="bg-gradient-to-br from-hinode-primary/5 to-hinode-secondary/5 p-8 rounded-2xl border border-hinode-primary/20 hover:shadow-2xl transition-all duration-300 animate-zoom-in hover:scale-105">
      <div className="text-center">
        <div className="mb-6">
          <img 
            src={image} 
            alt={name}
            className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-hinode-primary/20 shadow-lg"
          />
        </div>
        
        <h3 className="text-xl font-bold text-hinode-navy mb-4">
          {name}
        </h3>
        
        <p className="text-hinode-dark italic mb-4 text-lg leading-relaxed">
          "{text}"
        </p>
        
        <div className="flex justify-center">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-hinode-primary text-lg">⭐</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
