
import ProductCard from './ProductCard';

const ProductsSection = () => {
  const products = [
    {
      title: "Empire Gold",
      description: "Fragrância masculina sofisticada e marcante",
      image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Grace Midnight",
      description: "Perfume feminino elegante e envolvente",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Corps Lignea",
      description: "Creme redutor de medidas com resultados visíveis",
      image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Shake Hinode",
      description: "Nutrição saudável para seu bem-estar",
      image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Loção Hidratante",
      description: "Hidratação intensa para sua pele",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-hinode-white px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 md:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-hinode-navy mb-4 md:mb-6">
            ✨ Conheça os Produtos que Vão Impulsionar Seu Negócio
          </h2>
          
          <p className="text-base md:text-lg text-hinode-dark max-w-4xl mx-auto leading-relaxed">
            A Hinode oferece um portfólio completo de produtos de alta qualidade para você vender com orgulho — perfumes, cosméticos e bem-estar que encantam clientes em todo o Brasil. Descubra alguns dos campeões de vendas e comece a transformar sua vida!
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
