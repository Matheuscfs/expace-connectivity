import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Mariana Silva",
    role: "Designer Gráfica",
    content: "Desde que comecei a usar a Expace, minha clientela cresceu significativamente. A plataforma facilitou a gestão dos meus agendamentos e pagamentos.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  },
  {
    name: "Carlos Pereira",
    role: "Consultor de TI",
    content: "A Expace me ajudou a alcançar clientes que eu não conseguiria por conta própria. Recomendo para qualquer profissional autônomo.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  }
];

export function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Depoimentos de Sucesso</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-accent">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}