import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Crie sua Conta",
    items: [
      "Forneça informações básicas",
      "Escolha entre conta empresa ou autônomo",
      "Processo simples e rápido"
    ]
  },
  {
    title: "Complete seu Perfil",
    items: [
      "Adicione informações pessoais ou da empresa",
      "Detalhe seus serviços e especialidades",
      "Defina preços e disponibilidade"
    ]
  },
  {
    title: "Comece a Vender",
    items: [
      "Gerencie agendamentos facilmente",
      "Receba pagamentos de forma segura",
      "Acompanhe seu desempenho"
    ]
  }
];

export function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Como Funciona?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative">
              <CardHeader>
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mb-4">
                  {index + 1}
                </div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {step.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}