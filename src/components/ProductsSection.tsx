import ProductCard from "./ProductCard";

const ProductsSection = () => {
  const products = [
    {
      title: "Empire Gold",
      description:
        "Fragrância masculina sofisticada, ideal para quem gosta de presença e personalidade.",
      image:
        "https://hinodegroup.vtexassets.com/arquivos/ids/158803-1200-auto?v=638082778952070000&width=1200&height=auto&aspect=true",
    },
    {
      title: "Grace Midnight",
      description:
        "Perfume feminino marcante, com notas envolventes que trazem elegância e charme.",
      image:
        "https://hinodegroup.vtexassets.com/arquivos/ids/158692-1200-auto?v=637884830985300000&width=1200&height=auto&aspect=true",
    },
    {
      title: "Corps Lignea",
      description:
        "Creme redutor de medidas, perfeito para cuidados corporais e resultados visíveis.",
      image:
        "https://hinodegroup.vtexassets.com/arquivos/ids/160586-1200-auto?v=638839461992570000&width=1200&height=auto&aspect=true",
    },
    {
      title: "Shake Hinode",
      description:
        "Suplemento nutritivo que contribui para seu bem-estar e equilíbrio alimentar diário.",
      image:
        "https://hinodegroup.vtexassets.com/arquivos/ids/159493-1200-auto?v=638472507273670000&width=1200&height=auto&aspect=true",
    },
    {
      title: "Loção Hidratante",
      description:
        "Hidratação intensa e perfumada para deixar sua pele macia e bem cuidada todos os dias.",
      image:
        "https://hinodegroup.vtexassets.com/arquivos/ids/157220-1200-auto?v=636994006029570000&width=1200&height=auto&aspect=true",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-hinode-white px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 md:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-hinode-navy mb-4 md:mb-6">
            ✨ Conheça a Variedade de Produtos Hinode
          </h2>

          <p className="text-base md:text-lg text-hinode-dark max-w-4xl mx-auto leading-relaxed">
            Perfumes, cuidados corporais, nutrição, bem-estar e muito mais! A
            Hinode tem um portfólio completo de produtos de alta qualidade,
            prontos para você oferecer aos seus clientes e impulsionar seu
            negócio.
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
