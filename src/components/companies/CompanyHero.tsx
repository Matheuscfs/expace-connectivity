import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Globe, Timer, Users } from "lucide-react";

export function CompanyHero() {
  return (
    <div className="relative bg-gradient-to-r from-primary/90 to-primary overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
          alt="Modern industrial facility"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="relative container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-fade-in">
            Sua Empresa no Futuro do Comércio Digital
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Acesse o ecossistema que conecta negócios de maneira rápida e sustentável
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" variant="secondary" className="animate-fade-in">
              Cadastre sua Empresa Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 animate-fade-in">
              Solicite Demonstração
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <Globe className="w-8 h-8 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Alcance Global</h3>
              <p className="text-sm text-white/80">Conecte-se com parceiros em todo o Brasil</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <Timer className="w-8 h-8 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Cotações Rápidas</h3>
              <p className="text-sm text-white/80">Respostas em tempo real para suas demandas</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <Users className="w-8 h-8 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Parceiros Confiáveis</h3>
              <p className="text-sm text-white/80">Rede verificada de empresas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}