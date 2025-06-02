
interface TestimonialCardProps {
  name: string;
  text: string;
  avatar: string;
}

const TestimonialCard = ({ name, text, avatar }: TestimonialCardProps) => {
  return (
    <div className="bg-hinode-light p-6 rounded-lg border border-hinode-secondary/20 hover:shadow-lg transition-all duration-300 animate-zoom-in">
      <div className="text-center">
        <div className="w-16 h-16 bg-hinode-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">{avatar}</span>
        </div>
        
        <h3 className="text-lg font-semibold text-hinode-dark mb-3">
          {name}
        </h3>
        
        <p className="text-hinode-secondary italic">
          "{text}"
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
