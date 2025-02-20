
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, ShoppingBag, MessageSquare, LineChart, Building, Star } from "lucide-react";

export function CompanyCRM() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">CRM</h2>
      </div>

      <Tabs defaultValue="customers" className="space-y-4">
        <TabsList>
          <TabsTrigger value="customers" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Clientes
          </TabsTrigger>
          <TabsTrigger value="services" className="flex items-center gap-2">
            <ShoppingBag className="h-4 w-4" />
            Serviços
          </TabsTrigger>
          <TabsTrigger value="providers" className="flex items-center gap-2">
            <Building className="h-4 w-4" />
            Fornecedores
          </TabsTrigger>
          <TabsTrigger value="support" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Atendimento
          </TabsTrigger>
        </TabsList>

        <TabsContent value="customers" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Gestão de Clientes</h3>
            <div className="grid gap-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-4">
                  <h4 className="font-medium mb-2">Total de Clientes</h4>
                  <p className="text-2xl font-bold">1,234</p>
                </Card>
                <Card className="p-4">
                  <h4 className="font-medium mb-2">Ativos este mês</h4>
                  <p className="text-2xl font-bold">789</p>
                </Card>
                <Card className="p-4">
                  <h4 className="font-medium mb-2">NPS</h4>
                  <p className="text-2xl font-bold text-green-600">78</p>
                </Card>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="services" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Catálogo de Serviços</h3>
            <div className="grid gap-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-4">
                  <h4 className="font-medium mb-2">Serviços Ativos</h4>
                  <p className="text-2xl font-bold">48</p>
                </Card>
                <Card className="p-4">
                  <h4 className="font-medium mb-2">Avaliação Média</h4>
                  <div className="flex items-center">
                    <p className="text-2xl font-bold">4.8</p>
                    <Star className="h-5 w-5 text-yellow-400 ml-1" fill="currentColor" />
                  </div>
                </Card>
                <Card className="p-4">
                  <h4 className="font-medium mb-2">Agendamentos</h4>
                  <p className="text-2xl font-bold">156</p>
                </Card>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="providers" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Gestão de Fornecedores</h3>
            <div className="grid gap-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-4">
                  <h4 className="font-medium mb-2">Total de Fornecedores</h4>
                  <p className="text-2xl font-bold">87</p>
                </Card>
                <Card className="p-4">
                  <h4 className="font-medium mb-2">Performance Média</h4>
                  <p className="text-2xl font-bold text-green-600">92%</p>
                </Card>
                <Card className="p-4">
                  <h4 className="font-medium mb-2">Pendentes Aprovação</h4>
                  <p className="text-2xl font-bold text-yellow-600">12</p>
                </Card>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="support" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Central de Atendimento</h3>
            <div className="grid gap-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-4">
                  <h4 className="font-medium mb-2">Tickets Abertos</h4>
                  <p className="text-2xl font-bold">23</p>
                </Card>
                <Card className="p-4">
                  <h4 className="font-medium mb-2">Tempo Médio Resposta</h4>
                  <p className="text-2xl font-bold">1.4h</p>
                </Card>
                <Card className="p-4">
                  <h4 className="font-medium mb-2">Satisfação</h4>
                  <p className="text-2xl font-bold text-green-600">94%</p>
                </Card>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
