
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
    <div className="min-h-screen relative overflow-hidden perspective">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Parallax Sections */}
      <div className="parallax-container">
        {/* Hero Section with Parallax */}
        <div className="relative z-10 parallax-layer" style={{ transform: 'translateZ(-2px) scale(3)' }}>
          <Hero />
        </div>

        {/* Services Section with Parallax */}
        <div className="relative z-20 bg-white parallax-layer" style={{ transform: 'translateZ(-1px) scale(2)' }}>
          <ServicesHighlight />
        </div>

        {/* Future City Section */}
        <div className="relative z-30 parallax-layer" style={{ transform: 'translateZ(0) scale(1)' }}>
          <FutureCity />
        </div>

        {/* Regular Content Sections */}
        <div className="relative z-40 bg-white">
          <div className="animate-fade-in">
            <PricingPlans />
          </div>
          <div className="animate-fade-in delay-200">
            <ClientTestimonials />
          </div>
          <Footer />
        </div>
      </div>

      {/* Fixed Contact Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <ContactButton />
      </div>

      {/* CSS for Parallax */}
      <style>{`
        .perspective {
          perspective: 1px;
          transform-style: preserve-3d;
          height: 100vh;
          overflow-x: hidden;
          overflow-y: auto;
        }

        .parallax-container {
          transform-style: preserve-3d;
          height: 100%;
        }

        .parallax-layer {
          position: relative;
          height: 100%;
          width: 100%;
          transform-style: preserve-3d;
          transition: transform 0.5s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </div>
  );
};

export default Index;
