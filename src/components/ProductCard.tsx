
interface ProductCardProps {
  title: string;
  description: string;
  image: string;
}

const ProductCard = ({ title, description, image }: ProductCardProps) => {
  return (
    <div className="bg-hinode-white p-6 rounded-2xl border border-hinode-primary/20 hover:shadow-2xl transition-all duration-300 animate-zoom-in group hover:scale-105 hover:border-hinode-primary/40">
      <div className="text-center">
        <div className="mb-6 overflow-hidden rounded-xl">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        
        <h3 className="text-xl font-bold text-hinode-navy mb-3 group-hover:text-hinode-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-hinode-dark/80 mb-4">
          {description}
        </p>
        
        <div className="flex items-center justify-center gap-2 text-hinode-primary">
          <span className="font-semibold">Ver mais</span>
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
