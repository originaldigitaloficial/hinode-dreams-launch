import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BiographySection from "@/components/BiographySection";
import BusinessInfoSection from "@/components/BusinessInfoSection";
import ProductsSection from "@/components/ProductsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorksSection />
      <BiographySection />
      <BusinessInfoSection />
      <ProductsSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
