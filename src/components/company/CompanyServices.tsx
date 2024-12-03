import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";

interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: string;
  features: string[];
}

const mockServices: Service[] = [
  {
    id: 1,
    name: "Consultoria em TI",
    description: "Análise completa da infraestrutura de TI e recomendações estratégicas.",
    price: 2500,
    duration: "20 horas",
    features: [
      "Análise de infraestrutura",
      "Relatório detalhado",
      "Plano de ação",
      "Suporte pós-consultoria"
    ]
  },
  // Add more mock services as needed
];

export function CompanyServices() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockServices.map((service) => (
          <Card key={service.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{service.name}</CardTitle>
              <Badge variant="secondary">{service.duration}</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="text-sm flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-2xl font-bold text-primary mb-4">
                R$ {service.price.toLocaleString('pt-BR')}
              </div>
              <Button className="w-full">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Solicitar serviço
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}