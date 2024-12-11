import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Users, Building, HandshakeIcon } from "lucide-react";

export function CompanyTimeline() {
  const steps = [
    {
      icon: CheckCircle2,
      title: "Cadastro Gratuito",
      description: "Crie sua conta em minutos"
    },
    {
      icon: Building,
      title: "Perfil Empresarial",
      description: "Personalize seu perfil"
    },
    {
      icon: Users,
      title: "Conexão com Parceiros",
      description: "Encontre parceiros ideais"
    },
    {
      icon: HandshakeIcon,
      title: "Fechamento de Negócios",
      description: "Feche negócios em tempo real"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Como Funciona</h2>
        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary/20 -translate-y-1/2 hidden md:block" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="relative bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}