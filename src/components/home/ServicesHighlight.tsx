
import { Card } from "@/components/ui/card";
import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const categories = [
  "Social Media",
  "SEO",
  "Design Gráfico",
  "Publicidade",
  "Marketing de Conteúdo",
  "Email Marketing",
];

const featuredServices = [
  {
    id: 1,
    name: "Marketing Digital Completo",
    provider: "Digital Masters",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    rating: 4.9,
    reviews: 156,
  },
  {
    id: 2,
    name: "Gestão de Redes Sociais",
    provider: "Social Pro",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113",
    rating: 4.8,
    reviews: 98,
  },
  {
    id: 3,
    name: "SEO e Performance",
    provider: "Growth Hackers",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312",
    rating: 4.7,
    reviews: 124,
  },
];

export function ServicesHighlight() {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    navigate(`/search-companies?category=${encodeURIComponent(category)}`);
  };

  const handleServiceClick = (serviceId: number) => {
    navigate(`/service-details/${serviceId}`);
  };

  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Serviços em Destaque
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubra os serviços mais bem avaliados da nossa plataforma
          </p>
        </div>

        {/* Quick Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className="rounded-full hover:bg-primary hover:text-white transition-colors"
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Services Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {featuredServices.map((service) => (
              <CarouselItem key={service.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="p-4 h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                    onClick={() => handleServiceClick(service.id)}
                  />
                  <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-3">{service.provider}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="ml-1 font-medium">{service.rating}</span>
                      <span className="text-gray-500 text-sm ml-1">
                        ({service.reviews})
                      </span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleServiceClick(service.id)}
                    >
                      Ver Detalhes
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
