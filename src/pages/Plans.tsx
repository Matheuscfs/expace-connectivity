import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Plans = () => {
  const { toast } = useToast();
  const [selectedPlan, setSelectedPlan] = useState<{
    id: number;
    name: string;
    price: string;
    description: string;
    features: string[];
  } | null>(null);

  const plans = [
    {
      id: 1,
      name: "Plano Básico",
      price: "R$ 49,90/mês",
      description: "Ideal para profissionais autônomos começando no marketplace.",
      features: [
        "Cadastro de até 5 serviços",
        "Suporte por email",
        "Acesso básico ao painel de estatísticas",
      ],
    },
    {
      id: 2,
      name: "Plano Profissional",
      price: "R$ 99,90/mês",
      description: "Perfeito para empresas de pequeno porte.",
      features: [
        "Cadastro ilimitado de serviços",
        "Suporte prioritário por email e chat",
        "Acesso completo ao painel de estatísticas",
        "Destaque nos resultados de busca",
      ],
    },
    {
      id: 3,
      name: "Plano Corporativo",
      price: "R$ 199,90/mês",
      description: "Para grandes empresas que buscam máximo alcance.",
      features: [
        "Todas as vantagens do plano profissional",
        "Gerenciamento de equipe no marketplace",
        "Consultoria personalizada de marketing",
        "Integração com ferramentas externas (API)",
      ],
    },
  ];

  const handleSubscribe = (plan: typeof plans[0]) => {
    setSelectedPlan(plan);
    toast({
      title: "Plano Selecionado",
      description: `Você selecionou o plano: ${plan.name}.`,
    });
  };

  return (
    <div className="min-h-screen bg-background pb-8">
      <div className="container mx-auto px-4 mt-8">
        <h1 className="text-3xl font-bold text-center mb-6">Escolha o plano ideal para você</h1>
        <p className="text-center text-muted-foreground mb-12">
          Nossos planos foram criados para atender diferentes perfis e necessidades. Selecione o plano que mais combina com você.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.id} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{plan.name}</CardTitle>
                <CardDescription className="text-lg font-medium text-primary">
                  {plan.price}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">{plan.description}</p>
                <ul className="mb-6 space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <svg
                        className="w-4 h-4 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={selectedPlan?.id === plan.id ? "secondary" : "default"}
                  className="w-full"
                  onClick={() => handleSubscribe(plan)}
                >
                  {selectedPlan?.id === plan.id ? "Selecionado" : "Assinar"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;