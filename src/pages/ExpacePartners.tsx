import { Button } from "@/components/ui/button";
import { Benefits } from "@/components/partners/Benefits";
import { HowItWorks } from "@/components/partners/HowItWorks";
import { Testimonials } from "@/components/partners/Testimonials";
import { Link } from "react-router-dom";

export default function ExpacePartners() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto text-center py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Venda Seus Serviços na Expace
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Conecte-se com clientes em busca dos serviços que você oferece e expanda seu negócio.
          </p>
          <Button size="lg" asChild className="animate-fade-in">
            <Link to="/company/register">Cadastre-se Gratuitamente</Link>
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <Benefits />

      {/* How it Works Section */}
      <HowItWorks />

      {/* Plans Section */}
      <section className="py-16 bg-accent">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Quanto Custa?</h2>
            <p className="text-gray-600 mb-8">
              A Expace oferece planos flexíveis para atender às necessidades de todos os profissionais.
              Comece gratuitamente e evolua conforme seu crescimento.
            </p>
            <Button asChild size="lg">
              <Link to="/plans">Conheça Nossos Planos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para Começar?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Junte-se à Expace hoje mesmo e expanda seu alcance no mercado de serviços.
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="bg-white text-primary hover:bg-gray-100"
          >
            <Link to="/company/register">Cadastre-se Agora</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}