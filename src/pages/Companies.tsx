import { CompanyHero } from "@/components/companies/CompanyHero";
import { CompanyStats } from "@/components/companies/CompanyStats";
import { CompanyTimeline } from "@/components/companies/CompanyTimeline";
import { CompanyTestimonials } from "@/components/companies/CompanyTestimonials";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Companies = () => {
  return (
    <div className="min-h-screen">
      <CompanyHero />
      <CompanyStats />
      <CompanyTimeline />
      <CompanyTestimonials />
      
      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/90 to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Comece Sua Jornada Digital Hoje
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Cadastre-se agora e ganhe 30 dias de acesso premium gratuito para explorar todas as funcionalidades do Expace
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary">
              Cadastre sua Empresa
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Saiba Mais
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Companies;