
import Header from "@/components/Header";
import { Footer } from "@/components/home/Footer";
import { HeroBanner } from "@/components/home/HeroBanner";
import { FeaturedCompanies } from "@/components/home/FeaturedCompanies";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { ProjectStats } from "@/components/home/ProjectStats";
import { MobileAppPromo } from "@/components/home/MobileAppPromo";
import { ContactForm } from "@/components/home/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4">
        <HeroBanner />
        <FeaturedCompanies />
        <ServicesGrid />
        <ProjectStats />
        <MobileAppPromo />
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
