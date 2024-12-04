import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { Input } from "./ui/input";

const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center bg-gradient-to-r from-primary/10 to-primary/5">
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Conectando você aos melhores serviços em um só lugar
          </h1>
          <p className="text-lg text-gray-600">
            Encontre profissionais qualificados e empresas confiáveis para realizar seus projetos
          </p>
          <div className="max-w-xl">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Input
                  type="text"
                  placeholder="Encontre serviços ou profissionais..."
                  className="w-full h-12 pl-12 pr-4 rounded-lg"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
              <Button size="lg" className="whitespace-nowrap">
                Buscar
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            alt="Equipe de profissionais"
            className="rounded-lg shadow-2xl animate-fade-in"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;