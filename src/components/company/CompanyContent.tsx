import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const sections = [
  { id: "marketing", title: "Marketing", content: "Gerencie campanhas, anúncios e estratégia de marketing." },
  { id: "site_app", title: "Site e App Mobile", content: "Configure e personalize seu site e aplicativo móvel." },
  { id: "inbox", title: "Inbox", content: "Gerencie mensagens e comunicações com clientes." },
  { id: "clientes_leads", title: "Clientes e Leads", content: "Acompanhe e gerencie seus clientes e leads." },
  { id: "analises", title: "Análises", content: "Veja relatórios detalhados sobre seu desempenho." },
  { id: "automacoes", title: "Automações", content: "Configure fluxos automatizados para suas operações." },
  { id: "configuracoes", title: "Configurações", content: "Personalize as configurações gerais do sistema." },
  { id: "cms", title: "CMS", content: "Gerencie o conteúdo do seu site com facilidade." },
  { id: "ferramentas_dev", title: "Ferramentas de Desenvolvedor", content: "Acesse ferramentas para desenvolvedores e integrações." },
];

export function CompanyContent() {
  return (
    <div className="flex-1 p-6">
      <Tabs defaultValue="marketing" className="space-y-8">
        <TabsList className="w-full justify-start flex-wrap">
          {sections.map((section) => (
            <TabsTrigger key={section.id} value={section.id}>
              {section.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {sections.map((section) => (
          <TabsContent key={section.id} value={section.id}>
            <Card>
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{section.content}</p>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}