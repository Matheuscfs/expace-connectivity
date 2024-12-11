import { Truck, Factory, Store, Leaf, Zap, Shield } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    icon: Factory,
    title: "Indústrias",
    description: "Conecte-se diretamente com transportadoras e revendedores",
  },
  {
    icon: Truck,
    title: "Transportadoras",
    description: "Otimize rotas e maximize a eficiência das entregas",
  },
  {
    icon: Store,
    title: "Revendedores",
    description: "Acesse produtos de qualidade e preços competitivos",
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description: "Reduza o impacto ambiental com rotas inteligentes",
  },
  {
    icon: Zap,
    title: "Cotações Rápidas",
    description: "Receba cotações em tempo real dos fornecedores",
  },
  {
    icon: Shield,
    title: "Confiabilidade",
    description: "Parceiros verificados e avaliados pela comunidade",
  },
];

const EcosystemHighlights = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
          Um Ecossistema Completo para seu Negócio
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EcosystemHighlights;