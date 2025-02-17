
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, HelpCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const plans = [
  {
    name: "Básico",
    price: "99",
    description: "Para quem está começando",
    features: [
      {
        text: "5 serviços por mês",
        tooltip: "Publique até 5 serviços diferentes mensalmente",
      },
      {
        text: "Suporte por email",
        tooltip: "Tempo de resposta em até 24 horas",
      },
      {
        text: "Perfil básico",
        tooltip: "Inclui informações essenciais da empresa",
      },
    ],
  },
  {
    name: "Profissional",
    price: "199",
    description: "Para profissionais estabelecidos",
    features: [
      {
        text: "Serviços ilimitados",
        tooltip: "Publique quantos serviços quiser",
      },
      {
        text: "Suporte prioritário",
        tooltip: "Tempo de resposta em até 4 horas",
      },
      {
        text: "Destaque nos resultados",
        tooltip: "Apareça nas primeiras posições de busca",
      },
    ],
  },
  {
    name: "Empresarial",
    price: "399",
    description: "Para empresas em crescimento",
    features: [
      {
        text: "Consultoria personalizada",
        tooltip: "Reuniões mensais com especialistas",
      },
      {
        text: "Relatórios avançados",
        tooltip: "Análises detalhadas de performance",
      },
      {
        text: "API de integração",
        tooltip: "Integre com seus sistemas existentes",
      },
    ],
  },
];

export function PricingPlans() {
  const navigate = useNavigate();

  const handlePlanSelection = (planName: string) => {
    navigate('/plans', { state: { selectedPlan: planName } });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Escolha o Plano Perfeito para Você!
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Encontre o plano ideal para expandir seus negócios
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader>
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="text-3xl font-bold text-primary">
                  R$ {plan.price}
                  <span className="text-base font-normal text-gray-600">/mês</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature.text}</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="w-4 h-4 text-gray-400" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{feature.tooltip}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full mt-6"
                  onClick={() => handlePlanSelection(plan.name)}
                >
                  Assinar Plano
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
