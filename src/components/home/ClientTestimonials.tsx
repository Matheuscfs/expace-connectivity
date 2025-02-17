
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "João Silva",
    company: "Tech Solutions",
    role: "CEO",
    content: "A plataforma revolucionou nossa forma de encontrar clientes. Aumentamos nosso faturamento em 300% em apenas 6 meses!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    rating: 5,
  },
  {
    id: 2,
    name: "Maria Santos",
    company: "Design Pro",
    role: "Diretora Criativa",
    content: "Interface intuitiva e resultados impressionantes. Recomendo para todos os profissionais de marketing!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    rating: 5,
  },
  {
    id: 3,
    name: "Pedro Costa",
    company: "Growth Marketing",
    role: "Marketing Manager",
    content: "A melhor plataforma para encontrar clientes qualificados. O suporte é excepcional!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    rating: 5,
  },
];

export function ClientTestimonials() {
  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Histórias de sucesso de quem já transformou seu negócio
          </p>
        </div>

        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 px-4">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">
                        {testimonial.role} @ {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600">{testimonial.content}</p>
                </div>
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
