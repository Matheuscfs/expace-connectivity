import { Check, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

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
  { name: "Início", items: [] },
  { name: "Apps", items: ["Wix App Market", "Gerenciar aplicativos", "Wix FAQ"] },
  { name: "Vendas", items: ["Requisitos de checkout", "Slots for Stores"] },
  { name: "Marketing", items: ["Site e app mobile", "Inbox", "Clientes e leads", "Análises", "Automações"] },
  { name: "Configurações", items: ["CMS", "Ferramentas de desenvolvedor"] },
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
      <div className="p-4">
        {categories.map((category) => (
          <div key={category.name} className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-2">
              {category.name}
            </h3>
            {category.items.length > 0 && (
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-gray-600 hover:text-primary cursor-pointer pl-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}