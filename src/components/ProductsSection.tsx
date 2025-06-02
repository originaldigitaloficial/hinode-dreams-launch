
import ProductCard from './ProductCard';

const ProductsSection = () => {
  const products = [
    {
      title: "Empire Gold",
      description: "Fragrância masculina sofisticada",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Grace Midnight",
      description: "Perfume feminino marcante",
      image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Corps Lignea",
      description: "Creme redutor de medidas",
      image: "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Shake Hinode",
      description: "Nutrição saudável",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Loção Hidratante",
      description: "Hidratação intensa",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Kit Completo",
      description: "Linha completa de cuidados",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-hinode-primary/5 to-hinode-secondary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-hinode-navy mb-6">
            ✨ Conheça os Produtos que Vão Impulsionar Seu Negócio
          </h2>
          
          <p className="text-lg text-hinode-dark max-w-4xl mx-auto">
            A Hinode oferece um portfólio completo de produtos de alta qualidade para você vender com orgulho — 
            perfumes, cosméticos e bem-estar que encantam clientes em todo o Brasil. Descubra alguns dos campeões 
            de vendas e comece a transformar sua vida!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
