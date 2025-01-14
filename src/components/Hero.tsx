import { Button } from "@/components/ui/button";
import { ChevronRight, Building2, Truck, Store } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary to-primary/80">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/0b32e181-5a2a-49fe-9480-89b6b8f6e9eb.png')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Sua Empresa no Futuro do Comércio Digital
            </h1>
            <p className="text-xl text-white/90 max-w-xl">
              Acesse o ecossistema que conecta negócios de maneira rápida e sustentável
            </p>
            
            {/* Business Types */}
            <div className="flex flex-wrap gap-4 py-4">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Building2 className="w-5 h-5" />
                <span>Indústrias</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Truck className="w-5 h-5" />
                <span>Transportadoras</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Store className="w-5 h-5" />
                <span>Revendedores</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                variant="secondary"
                className="hover:scale-105 transition-transform"
              >
                Cadastre sua Empresa
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
              >
                Solicitar Demonstração
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold">10k+</div>
                <div className="text-sm text-white/80">Empresas Cadastradas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">50M+</div>
                <div className="text-sm text-white/80">Em Negócios</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-sm text-white/80">Satisfação</div>
              </div>
            </div>
          </div>

          {/* Illustration/Image */}
          <div className="hidden lg:block relative">
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
              <img
                src="/lovable-uploads/0b32e181-5a2a-49fe-9480-89b6b8f6e9eb.png"
                alt="Cidade Futurista"
                className="object-cover w-full h-full rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}