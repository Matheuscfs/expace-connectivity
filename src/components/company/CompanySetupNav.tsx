import { Check, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SetupStep {
  id: number;
  name: string;
  completed?: boolean;
  current?: boolean;
}

const steps: SetupStep[] = [
  { id: 1, name: "Introdução", completed: true, current: false },
  { id: 2, name: "Pagamentos", completed: false, current: true },
  { id: 3, name: "Vendas", completed: false, current: false },
  { id: 4, name: "Catálogo", completed: false, current: false },
  { id: 5, name: "Apps", completed: false, current: false },
];

const categories = [
  { 
    name: "Início", 
    description: "Configure as informações básicas da sua empresa",
    items: [] 
  },
  { 
    name: "Apps", 
    description: "Gerencie os aplicativos e integrações",
    items: ["Wix App Market", "Gerenciar aplicativos", "Wix FAQ"] 
  },
  { 
    name: "Vendas", 
    description: "Configure suas opções de venda e pagamento",
    items: ["Requisitos de checkout", "Slots for Stores"] 
  },
  { 
    name: "Marketing", 
    description: "Gerencie suas estratégias de marketing e comunicação",
    items: ["Site e app mobile", "Inbox", "Clientes e leads", "Análises", "Automações"] 
  },
  { 
    name: "Configurações", 
    description: "Ajuste as configurações gerais da sua empresa",
    items: ["CMS", "Ferramentas de desenvolvedor"] 
  },
];

export function CompanySetupNav() {
  return (
    <div className="bg-white border-r border-gray-200 w-64 h-full min-h-screen">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold">Vamos configurar seu negócio</h2>
        <p className="text-sm text-gray-600">1/5 concluído</p>
      </div>

      {/* Progress Steps */}
      <div className="p-4 border-b border-gray-200">
        <nav aria-label="Progress">
          <ol role="list" className="space-y-2">
            {steps.map((step) => (
              <li key={step.id} className="flex items-center">
                <div
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full",
                    step.completed ? "bg-primary" : "border-2 border-gray-300"
                  )}
                >
                  {step.completed ? (
                    <Check className="h-4 w-4 text-white" />
                  ) : (
                    <span className="text-sm text-gray-500">{step.id}</span>
                  )}
                </div>
                <span className="ml-3 text-sm font-medium text-gray-900">
                  {step.name}
                </span>
                {step.current && (
                  <ChevronRight className="ml-auto h-4 w-4 text-gray-400" />
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>

      {/* Categories */}
      <div className="p-4 space-y-4">
        {categories.map((category) => (
          <Card key={category.name} className="border border-gray-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-900">
                {category.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-gray-600 mb-2">{category.description}</p>
              {category.items.length > 0 && (
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-gray-600 hover:text-primary cursor-pointer pl-2 transition-colors"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}