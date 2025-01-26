import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Shield, 
  CreditCard,
  Bell,
  Users,
  Settings,
  Upload
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function CompanySettings() {
  const { toast } = useToast();
  const [companyName, setCompanyName] = useState("TechSolutions Brasil");
  const [logo, setLogo] = useState("/placeholder.svg");
  const [description, setDescription] = useState("Empresa líder em soluções tecnológicas");
  const [email, setEmail] = useState("contato@techsolutions.com.br");
  const [phone, setPhone] = useState("(45) 3333-4444");
  const [address, setAddress] = useState("Rua das Tecnologias, 123");

  const handleSave = () => {
    toast({
      title: "Configurações salvas",
      description: "Suas alterações foram salvas com sucesso.",
    });
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Tabs defaultValue="general" className="space-y-6">
      <TabsList className="w-full justify-start">
        <TabsTrigger value="general" className="flex items-center gap-2">
          <Settings className="h-4 w-4" />
          Geral
        </TabsTrigger>
        <TabsTrigger value="account" className="flex items-center gap-2">
          <Building2 className="h-4 w-4" />
          Conta
        </TabsTrigger>
        <TabsTrigger value="team" className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          Equipe
        </TabsTrigger>
        <TabsTrigger value="notifications" className="flex items-center gap-2">
          <Bell className="h-4 w-4" />
          Notificações
        </TabsTrigger>
        <TabsTrigger value="security" className="flex items-center gap-2">
          <Shield className="h-4 w-4" />
          Segurança
        </TabsTrigger>
        <TabsTrigger value="billing" className="flex items-center gap-2">
          <CreditCard className="h-4 w-4" />
          Pagamentos
        </TabsTrigger>
      </TabsList>

      <TabsContent value="general">
        <Card>
          <CardHeader>
            <CardTitle>Informações Gerais</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={logo} alt="Company Logo" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <Button variant="outline" className="mb-2">
                  <Upload className="w-4 h-4 mr-2" />
                  Alterar Logo
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleLogoUpload}
                  />
                </Button>
                <p className="text-sm text-gray-500">
                  Recomendado: PNG, JPG (400x400px)
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label>Nome da Empresa</Label>
                <Input
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>

              <div>
                <Label>Descrição</Label>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="h-32"
                />
              </div>

              <div>
                <Label>Localização</Label>
                <div className="flex gap-2">
                  <Input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="flex-1"
                  />
                  <Button variant="outline">
                    <MapPin className="w-4 h-4 mr-2" />
                    Selecionar no Mapa
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Informações de Conta</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label>E-mail de Contato</Label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  icon={<Mail className="w-4 h-4" />}
                />
              </div>

              <div>
                <Label>Telefone Comercial</Label>
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  icon={<Phone className="w-4 h-4" />}
                />
              </div>

              <div>
                <Label>CNPJ</Label>
                <Input value="12.345.678/0001-90" disabled />
                <p className="text-sm text-gray-500 mt-1">
                  Para alterar o CNPJ, entre em contato com o suporte
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="notifications">
        <Card>
          <CardHeader>
            <CardTitle>Preferências de Notificação</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Novas mensagens</Label>
                  <p className="text-sm text-gray-500">
                    Receba notificações de novas mensagens
                  </p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Avaliações</Label>
                  <p className="text-sm text-gray-500">
                    Notificações de novas avaliações
                  </p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Atualizações da plataforma</Label>
                  <p className="text-sm text-gray-500">
                    Novidades e recursos importantes
                  </p>
                </div>
                <Switch />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="security">
        <Card>
          <CardHeader>
            <CardTitle>Segurança</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label>Alterar Senha</Label>
                <Input type="password" placeholder="Nova senha" className="mb-2" />
                <Input type="password" placeholder="Confirmar nova senha" />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Autenticação de dois fatores</Label>
                  <p className="text-sm text-gray-500">
                    Adicione uma camada extra de segurança
                  </p>
                </div>
                <Switch />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="billing">
        <Card>
          <CardHeader>
            <CardTitle>Assinatura e Pagamentos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-primary/5 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-medium">Plano Atual</h3>
                  <p className="text-sm text-gray-500">Premium</p>
                </div>
                <Badge variant="secondary">Ativo</Badge>
              </div>
              <Button variant="outline" className="w-full">
                Alterar Plano
              </Button>
            </div>

            <div>
              <h3 className="font-medium mb-4">Métodos de Pagamento</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-4 h-4" />
                    <span>•••• 4242</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Remover
                  </Button>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                Adicionar Novo Método
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <div className="flex justify-end gap-2">
        <Button variant="outline">Cancelar</Button>
        <Button onClick={handleSave}>Salvar Alterações</Button>
      </div>
    </Tabs>
  );
}