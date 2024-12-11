import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { Input } from "./ui/input";

const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center bg-gradient-to-r from-primary/10 to-primary/5 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
          alt="Cidade do Futuro"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-6 animate-fade-in">
            Conectando oportunidades no{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-secondary">
              ecossistema do futuro
            </span>
          </h1>
          
          <p className="text-lg text-gray-100 mb-8 animate-fade-in [animation-delay:200ms]">
            Uma plataforma revolucionária onde indústrias, transportadoras e revendedores se conectam de forma inovadora e sustentável
          </p>

          <div className="max-w-xl animate-fade-in [animation-delay:400ms]">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Input
                  type="text"
                  placeholder="Busque por produtos, serviços ou empresas..."
                  className="w-full h-12 pl-12 pr-4 rounded-lg bg-white/90 backdrop-blur-sm"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
              <Button size="lg" className="whitespace-nowrap bg-primary hover:bg-primary/90">
                Buscar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;