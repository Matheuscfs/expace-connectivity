
import { Button } from "@/components/ui/button";
import { SearchIcon, Briefcase } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export function Hero() {
  const navigate = useNavigate();
  
  return (
    <div className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Video Background with Parallax Effect */}
      <div className="absolute inset-0" style={{ transform: 'translateZ(-1px) scale(2)' }}>
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="https://cdn.coverr.co/videos/coverr-typing-on-computer-1584/preview" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm bg-sky-950 hover:bg-sky-800 transition-colors duration-500" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight animate-fade-in">
            Transforme suas ideias em resultados!
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 animate-fade-in delay-100">
            Encontre os melhores profissionais de marketing ou ofereça seus serviços de forma simples e rápida.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-200">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg group hover:scale-105 transition-all duration-300" 
              onClick={() => navigate('/search-companies')}
            >
              <SearchIcon className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Buscar Serviços
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg border-white/20 bg-white/10 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300" 
              onClick={() => navigate('/company/register')}
            >
              <Briefcase className="mr-2 h-5 w-5 animate-bounce" />
              Oferecer Serviços
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
