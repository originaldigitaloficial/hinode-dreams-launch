
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-hinode-navy py-8 px-6 md:px-8 lg:px-12">
      <div className="container mx-auto max-w-7xl text-center">
        <div className="text-hinode-white/80 text-sm md:text-base">
          <p className="mb-2">
            © {currentYear} Todos os direitos reservados.
          </p>
          <p>
            Desenvolvido por{' '}
            <a 
              href="https://originaldigital.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-hinode-primary hover:text-hinode-primary/80 transition-all duration-300 hover:scale-110 inline-block font-semibold"
            >
              Original Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
