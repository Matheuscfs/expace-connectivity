import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Clock, Calendar, DollarSign, Info } from "lucide-react";

interface ServiceInfoProps {
  serviceId?: string;
}

export function ServiceInfo({ serviceId }: ServiceInfoProps) {
  // Mock data - replace with actual data fetching
  const service = {
    name: "Consultoria em TI",
    description: "Serviço completo de consultoria em TI para empresas",
    duration: "2 horas",
    date: "Flexível",
    price: 299.99,
    benefits: [
      "Análise completa da infraestrutura",
      "Recomendações personalizadas",
      "Suporte pós-consultoria",
    ],
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{service.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-gray-600">{service.description}</p>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Duração: {service.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Data: {service.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">
              Preço: {service.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </span>
          </div>
        </div>

        <Separator />

        <div>
          <h4 className="font-medium mb-2">Benefícios</h4>
          <ul className="space-y-2">
            {service.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2">
                <Info className="h-4 w-4 text-primary mt-1" />
                <span className="text-sm">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}