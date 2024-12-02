import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative h-[600px] mt-16">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Conectando você aos melhores serviços e empresas perto de você
          </h1>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90">
            Explorar agora
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;