import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Diretora de Operações",
    company: "TechSolutions Ltda",
    content: "O Expace revolucionou nossa forma de fazer negócios. A plataforma nos conectou com parceiros estratégicos que impulsionaram nosso crescimento.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    name: "João Santos",
    role: "Gerente de Logística",
    company: "LogisTech S.A.",
    content: "A eficiência nas cotações e a confiabilidade dos parceiros fazem do Expace uma ferramenta indispensável para nossa operação.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  },
  {
    name: "Ana Costa",
    role: "CEO",
    company: "InovaTech Brasil",
    content: "Desde que começamos a usar o Expace, nossa rede de parceiros cresceu exponencialmente. A plataforma é intuitiva e eficiente.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  }
];

export function CompanyTestimonials() {
  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          O Que Dizem Nossos Parceiros
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}