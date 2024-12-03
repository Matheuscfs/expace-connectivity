import { Button } from "./ui/button";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center bg-gradient-to-r from-primary/10 to-primary/5">
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Conectando você aos melhores profissionais para o seu projeto!
          </h1>
          <p className="text-lg text-gray-600">
            Encontre os serviços ideais para sua necessidade com profissionais qualificados e avaliados pela comunidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="flex-1">
              <Search className="mr-2 h-5 w-5" />
              Pesquisar Serviços
            </Button>
            <Button size="lg" variant="outline" className="flex-1">
              Anuncie Seus Serviços
            </Button>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            alt="Colaboração profissional"
            className="rounded-lg shadow-2xl animate-fade-in"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;