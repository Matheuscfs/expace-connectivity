
import { Hero } from "@/components/home/Hero";
import { ServicesHighlight } from "@/components/home/ServicesHighlight";
import { FutureCity } from "@/components/home/FutureCity";
import { PricingPlans } from "@/components/home/PricingPlans";
import { ClientTestimonials } from "@/components/home/ClientTestimonials";
import { Footer } from "@/components/home/Footer";
import { ContactButton } from "@/components/home/ContactButton";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ServicesHighlight />
      <FutureCity />
      <PricingPlans />
      <ClientTestimonials />
      <Footer />
      <ContactButton />
    </div>
  );
};

export default Index;
