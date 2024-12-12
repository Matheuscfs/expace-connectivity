import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, MessageSquare } from "lucide-react";

interface MarketingPackage {
  id: number;
  title: string;
  description: string;
  price: number;
  features: string[];
  type: 'reach' | 'views' | 'messages';
}

const mockPackages: MarketingPackage[] = [
  {
    id: 1,
    title: "Pacote Alcance Premium",
    description: "Aumente sua exposição em 100% em 7 dias",
    price: 499,
    features: [
      "Destaque na página inicial",
      "Posts patrocinados",
      "Relatório de desempenho",
      "Suporte prioritário"
    ],
    type: 'reach'
  },
  {
    id: 2,
    title: "Pacote Visualizações Pro",
    description: "Garanta mais visibilidade para seus produtos",
    price: 299,
    features: [
      "Posicionamento premium nas buscas",
      "Banner personalizado",
      "Analytics avançado",
      "Consultoria de marketing"
    ],
    type: 'views'
  },
  {
    id: 3,
    title: "Pacote Engagement Plus",
    description: "Aumente suas interações e conversões",
    price: 399,
    features: [
      "Chat prioritário",
      "Notificações push",
      "Leads qualificados",
      "Integração com CRM"
    ],
    type: 'messages'
  }
];

export function CampaignsContent() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockPackages.map((pkg) => (
          <Card key={pkg.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{pkg.title}</CardTitle>
                {pkg.type === 'reach' && <TrendingUp className="w-5 h-5 text-primary" />}
                {pkg.type === 'views' && <Users className="w-5 h-5 text-primary" />}
                {pkg.type === 'messages' && <MessageSquare className="w-5 h-5 text-primary" />}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">{pkg.description}</p>
              <ul className="space-y-2 mb-4">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="text-sm flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-2xl font-bold text-primary mb-4">
                R$ {pkg.price.toLocaleString('pt-BR')}
              </div>
              <Button className="w-full">Contratar pacote</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}