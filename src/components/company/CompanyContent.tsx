import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const mockData = {
  monthlyVisits: [
    { month: 'Jan', visits: 1000 },
    { month: 'Fev', visits: 1500 },
    { month: 'Mar', visits: 1200 },
    { month: 'Abr', visits: 1800 },
    { month: 'Mai', visits: 2000 },
    { month: 'Jun', visits: 1700 },
  ],
  salesData: [
    { month: 'Jan', sales: 5000 },
    { month: 'Fev', sales: 7000 },
    { month: 'Mar', sales: 6500 },
    { month: 'Abr', sales: 8000 },
    { month: 'Mai', sales: 9500 },
    { month: 'Jun', sales: 8500 },
  ]
};

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
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-4">Relatórios e Estatísticas</h2>
        <p className="mb-6">Acesse gráficos e relatórios para entender melhor o desempenho do seu negócio.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Visitas Mensais</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={mockData.monthlyVisits}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="visits" fill="#1E40AF" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Vendas Mensais</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockData.salesData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="sales" stroke="#1E40AF" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Total de Visitas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">9.200</p>
              <p className="text-sm text-muted-foreground">+15% vs. mês anterior</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Vendas Totais</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">R$ 44.500</p>
              <p className="text-sm text-muted-foreground">+22% vs. mês anterior</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Taxa de Conversão</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">3.2%</p>
              <p className="text-sm text-muted-foreground">+0.8% vs. mês anterior</p>
            </CardContent>
          </Card>
        </div>

        <Button className="mt-6">Exportar Relatórios</Button>
      </div>
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
