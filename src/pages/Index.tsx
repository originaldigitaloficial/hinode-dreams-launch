
import HeroSection from '@/components/HeroSection';
import BusinessInfoSection from '@/components/BusinessInfoSection';
import BiographySection from '@/components/BiographySection';
import ProductsSection from '@/components/ProductsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import FloatingButtons from '@/components/FloatingButtons';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BusinessInfoSection />
      <BiographySection />
      <ProductsSection />
      <TestimonialsSection />
      <ContactSection />
      <FloatingButtons />
    </div>
  );
};

export default Index;
