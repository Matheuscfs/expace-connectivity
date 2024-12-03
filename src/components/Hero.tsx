import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

const Hero = () => {
  const ads = [
    {
      id: 1,
      title: "Serviços de Limpeza",
      description: "Serviços de Limpeza",
    },
    {
      id: 2,
      title: "Consultoria em TI",
      description: "Soluções tecnológicas para seu negócio",
    },
    {
      id: 3,
      title: "Serviços de Beleza",
      description: "Profissionais especializados em beleza e bem-estar",
    },
  ];

  return (
    <div className="relative h-[300px] mt-16">
      <Carousel className="w-full h-full">
        <CarouselContent>
          {ads.map((ad) => (
            <CarouselItem key={ad.id} className="h-full bg-accent">
              {ad.description}
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