import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

const Hero = () => {
  const ads = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80",
      title: "Serviços de Limpeza",
      description: "Profissionais qualificados para sua casa",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80",
      title: "Consultoria em TI",
      description: "Soluções tecnológicas para seu negócio",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&q=80",
      title: "Serviços de Beleza",
      description: "Profissionais especializados em beleza e bem-estar",
    },
  ];

  return (
    <div className="relative h-[600px] mt-16">
      <Carousel className="w-full h-full">
        <CarouselContent>
          {ads.map((ad) => (
            <CarouselItem key={ad.id} className="relative h-full">
              <img
                src={ad.image}
                alt={ad.title}
                className="w-full h-full object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
};

export default Hero;