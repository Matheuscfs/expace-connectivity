import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe2, LayoutDashboard, Headphones } from "lucide-react";

const benefits = [
  {
    icon: Globe2,
    title: "Alcance Ampliado",
    description: "Conecte-se com uma ampla base de clientes em busca de serviços especializados."
  },
  {
    icon: LayoutDashboard,
    title: "Gestão Simplificada",
    description: "Gerencie seus serviços, agendamentos e pagamentos em uma única plataforma."
  },
  {
    icon: Headphones,
    title: "Suporte Dedicado",
    description: "Conte com nossa equipe para ajudar você a maximizar seu potencial de vendas."
  }
];

export function Benefits() {
  return (
    <section className="py-16 bg-accent">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Por que Escolher a Expace?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white">
              <CardHeader>
                <benefit.icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle>{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}