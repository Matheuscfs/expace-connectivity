import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const tabsContent = {
  marketing: (
    <div>
      <h2 className="text-lg font-semibold mb-4">Planejamento de Campanhas</h2>
      <p>Gerencie campanhas publicitárias, crie anúncios e acompanhe o ROI.</p>
      <Button className="mt-4">Criar Nova Campanha</Button>
    </div>
  ),
  site_app: (
    <div>
      <h2 className="text-lg font-semibold mb-4">Personalização do Site e App</h2>
      <p>Adicione páginas, modifique o design e atualize informações do seu app e site.</p>
      <Button className="mt-4">Editar Configurações</Button>
    </div>
  ),
  inbox: (
    <div>
      <h2 className="text-lg font-semibold mb-4">Mensagens e Comunicações</h2>
      <p>Visualize mensagens de clientes e leads diretamente no painel.</p>
      <ul className="mt-4 space-y-2">
        <li className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
          <span>Mensagem 1: "Olá, gostaria de mais informações."</span>
        </li>
        <li className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
          <span>Mensagem 2: "Preciso de suporte para um serviço."</span>
        </li>
      </ul>
      <Button className="mt-4">Responder Mensagens</Button>
    </div>
  ),
  clientes_leads: (
    <div>
      <h2 className="text-lg font-semibold mb-4">Gestão de Clientes e Leads</h2>
      <p>Acompanhe informações detalhadas sobre seus clientes e leads.</p>
      <Button className="mt-4">Adicionar Novo Cliente</Button>
    </div>
  ),
  analises: (
    <div>
      <h2 className="text-lg font-semibold mb-4">Relatórios e Estatísticas</h2>
      <p>Acesse gráficos e relatórios para entender melhor o desempenho do seu negócio.</p>
      <Button className="mt-4">Visualizar Relatórios</Button>
    </div>
  ),
  automacoes: (
    <div>
      <h2 className="text-lg font-semibold mb-4">Automações</h2>
      <p>Crie fluxos automáticos para melhorar a eficiência do seu processo.</p>
      <Button className="mt-4">Configurar Automação</Button>
    </div>
  ),
  configuracoes: (
    <div>
      <h2 className="text-lg font-semibold mb-4">Configurações Gerais</h2>
      <p>Personalize preferências e gerencie a segurança da sua conta.</p>
      <Button className="mt-4">Editar Configurações</Button>
    </div>
  ),
  cms: (
    <div>
      <h2 className="text-lg font-semibold mb-4">Gerenciamento de Conteúdo</h2>
      <p>Atualize conteúdo do site e gerencie arquivos de mídia.</p>
      <Button className="mt-4">Adicionar Novo Conteúdo</Button>
    </div>
  ),
  ferramentas_dev: (
    <div>
      <h2 className="text-lg font-semibold mb-4">Ferramentas de Desenvolvedor</h2>
      <p>Acesse APIs, documentação e logs para desenvolvimento avançado.</p>
      <Button className="mt-4">Abrir Ferramentas</Button>
    </div>
  ),
};

export function CompanyContent() {
  return (
    <div className="flex-1 p-6">
      <Tabs defaultValue="marketing" className="space-y-8">
        <TabsList className="w-full justify-start flex-wrap">
          {Object.keys(tabsContent).map((key) => (
            <TabsTrigger key={key} value={key}>
              {key.charAt(0).toUpperCase() + key.slice(1).replace("_", " ")}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.keys(tabsContent).map((key) => (
          <TabsContent key={key} value={key}>
            <Card>
              <CardHeader>
                <CardTitle>{key.charAt(0).toUpperCase() + key.slice(1).replace("_", " ")}</CardTitle>
              </CardHeader>
              <CardContent>{tabsContent[key]}</CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}