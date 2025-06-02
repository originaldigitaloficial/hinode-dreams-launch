
interface ProductCardProps {
  title: string;
  description: string;
  icon: string;
}

const ProductCard = ({ title, description, icon }: ProductCardProps) => {
  return (
    <div className="bg-hinode-white p-6 rounded-lg border border-hinode-secondary/20 hover:shadow-lg transition-all duration-300 animate-zoom-in group hover:scale-105">
      <div className="text-center">
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-hinode-dark mb-2">
          {title}
        </h3>
        <p className="text-hinode-secondary">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
