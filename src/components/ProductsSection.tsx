
import ProductCard from './ProductCard';

const ProductsSection = () => {
  const products = [
    {
      title: "Empire Gold",
      description: "Fragrância masculina sofisticada",
      icon: "🌟"
    },
    {
      title: "Grace Midnight",
      description: "Perfume feminino marcante",
      icon: "✨"
    },
    {
      title: "Corps Lignea",
      description: "Creme redutor de medidas",
      icon: "💪"
    },
    {
      title: "Shake Hinode",
      description: "Nutrição saudável",
      icon: "🥤"
    },
    {
      title: "Loção Hidratante",
      description: "Hidratação intensa",
      icon: "🧴"
    }
  ];

  return (
    <section className="py-20 bg-hinode-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-hinode-primary mb-6">
            ✨ Conheça os Produtos que Vão Impulsionar Seu Negócio
          </h2>
          
          <p className="text-lg text-hinode-dark max-w-4xl mx-auto">
            A Hinode oferece um portfólio completo de produtos de alta qualidade para você vender com orgulho — 
            perfumes, cosméticos e bem-estar que encantam clientes em todo o Brasil. Descubra alguns dos campeões 
            de vendas e comece a transformar sua vida!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
